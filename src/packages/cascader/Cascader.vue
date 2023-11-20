<!--Created by 337547038-->
<template>
  <select-down
    v-bind="$props"
    ref="selectDownEl"
    :class="{ [`${prefixCls}-cascader`]: true }"
    :down-class="downClass2 as string"
    :model-value="showLabel"
    :options="[]"
    lazyload=""
    options-key=""
    @clear="clearClick"
    @delete="deleteClick"
    @input="inputChange"
    @toggle-click="toggleClick"
  >
    <p v-if="lazy && downDataList.length === 0">
      <loading :model-value="true" background="#fff" text="加载中" />
    </p>
    <ul v-else-if="downDataList.length === 0" class="empty-text">
      <li>{{ emptyText }}</li>
    </ul>
    <ul v-for="(item, index) in downDataList" :key="index" @click.stop="">
      <li
        v-for="li in item"
        :key="li[optionsKey.label]"
        :class="{ checked: getChecked(li), disabled: li.disabled }"
        @click="childrenClick(li, index, $event)"
      >
        <i v-if="!li.hasChild && !multiple && !checkAny" class="icon-hook"></i>
        <Radio
          v-if="checkAny && !multiple"
          v-model="radioValue"
          :value="li.fullValue || li.value"
          @click.stop=""
        />
        <Checkbox
          v-if="multiple"
          :class="{ 'some-select': li.someSelect }"
          :disabled="li.disabled"
          :model-value="getChecked(li)"
          @change="checkboxMultipleChange(li, $event)"
          @click.stop=""
        />
        <a>{{ li[optionsKey.label] }}</a>
        <loading
          v-if="lazy && li[optionsKey.value] === loadingId"
          :key="item[optionsKey.label]"
          :model-value="true"
          background="#fff"
          class="loading"
        />
        <i v-if="li.hasChild" class="icon-arrow"></i>
      </li>
    </ul>
  </select-down>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { computed, reactive, toRefs, ref, watch, inject } from 'vue'
  import { SelectDown } from '../selectDown'
  import Loading from '../loading/Loading.vue'
  import { Checkbox } from '../checkbox'
  import { Radio } from '../radio'

  type cityProps = {
    [key: string]: any // 使用动态变量时不会报错
    tid?: [string, number]
    label: string
    value?: [string, number]
    children?: any
  }
  const props = withDefaults(
    defineProps<{
      modelValue?: string[]
      multiple?: boolean
      filterable?: boolean // 是否可搜索选项
      downClass?: string
      options?: any
      optionsKey?: { label: string; value: string }
      showAllLevels?: boolean
      emptyText?: string
      lazy?: boolean //
      lazyLoad?: Function //
      checkAny?: boolean // 选择任意一级选项
    }>(),
    {
      modelValue: () => [],
      options: () => [],
      optionsKey: () => {
        return { label: 'label', value: 'value' }
      },
      showAllLevels: true,
      emptyText: '暂无数据'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string[]): void
    (e: 'change', value: string[]): void
    (e: 'input', value: string): void
  }>()
  const state = reactive({
    downDataList: [], // 下拉面板的数据
    showLabel: [], // 用于展示的值，格式化后显示于输入框的值
    checked: [], // 用来判断点击选中状态
    multipleChecked: [], // 多选时，用于临时保存勾选的值
    loadingId: '', // 异步加载时用于显示加载状态
    timer: 0,
    lazyOptions: props.options,
    showValue: [] // 用于展示的文本值及对应value值，格式化后显示于输入框的值
  })
  const { downDataList, loadingId, showLabel } = toRefs(state)
  const { optionsKey } = toRefs(props)
  const labelKey = optionsKey.value.label
  const valueKey = optionsKey.value.value
  const selectDownEl = ref()
  const radioValue = ref(props.modelValue.join(','))
  watch(
    () => props.options,
    (val: any) => {
      state.lazyOptions = val
      if (props.filterable) {
        // 搜索状态改变options
        // console.log('watch')
        formatFilterOptions('`')
      }
    }
  )
  // 返回下拉样式
  const downClass2 = computed(() => {
    const down = prefixCls + '-cascader-down'
    return props.downClass ? props.downClass + ' ' + down : down
  })
  // 格式化options下拉数据
  const formatOptions = computed(() => {
    const temp: any = []
    if (props.lazy) {
      formatData(state.lazyOptions, {})
    } else {
      formatData(props.options, {})
    }
    return temp

    function formatData(data: any, obj: any) {
      data.forEach((item: any) => {
        const newItem = JSON.parse(JSON.stringify(item))
        delete newItem.children
        delete newItem._fullLabel
        delete newItem._fullValue
        const hasChild =
          item.children && (item.children.length > 0 || props.lazy) // 异步加载时有children:[]表示有下级
        item._fullLabel = obj.fullLabel
          ? obj.fullLabel + ',' + item[labelKey]
          : ''
        item._fullValue = obj.fullValue
          ? obj.fullValue + ',' + item[valueKey]
          : ''
        temp.push(
          Object.assign({}, newItem, {
            tid: obj.parentId,
            hasChild: hasChild,
            fullLabel: item._fullLabel,
            fullValue: item._fullValue
          })
        )
        if (hasChild) {
          formatData(item.children, {
            parentId: item[valueKey],
            fullLabel: item._fullLabel || item[labelKey],
            fullValue: item._fullValue || item[valueKey]
          })
        }
      })
    }
  })
  // 设置初始状态显示的值
  const setDefaultShowLabel = () => {
    // 单选 ['广东,广州,白云']
    // 多选 ['广东,广州,白云','广东,深圳,宝安区']
    if (props.modelValue?.length) {
      // state.showLabel = JSON.parse(JSON.stringify(props.modelValue)) // 默认为value，从选项数据中匹配到相同value值时返回label，否则使用传入的值
      state.showLabel = []
      props.modelValue.forEach((item: any) => {
        // 将豆号转换为/
        state.showLabel.push(item.replace(/,/g, '/'))
      })
      for (let i = 0; i < props.modelValue.length; i++) {
        formatOptions.value.forEach((opt: cityProps) => {
          if (opt.fullValue && opt.fullValue === props.modelValue[i]) {
            let fl = opt.fullLabel || opt[labelKey]
            if (!props.showAllLevels) {
              // 使用逗号分隔，取最后一个
              fl = fl.split(',').pop()
            }
            state.showLabel.splice(i, 1, fl.replace(/,/g, '/'))
          }
        })
      }
    } else {
      state.showLabel = []
    }
  }
  watch(
    () => props.modelValue,
    () => {
      setDefaultShowLabel()
    }
  )
  setDefaultShowLabel()
  // end 设置初始值结束
  // 从格式化后的数据里提取
  const filterFormatOptions = (id?: string | number | undefined) => {
    return formatOptions.value.filter((item: any) => {
      return item.tid === id
    })
  }
  // formItem
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const updateModelValue = (val: any) => {
    // console.log('updateModelValue')
    emits('update:modelValue', val)
    emits('change', val)
    selectDownEl.value.slideUp()
    controlChange && controlChange(val)
  }
  const setDefaultDownList = () => {
    state.downDataList = [] // 先清空
    const firstOpt = filterFormatOptions()
    if (firstOpt && firstOpt.length > 0) {
      setDefaultSomeSelect(firstOpt)
      state.downDataList.push(firstOpt) // 首先添加第一级，第一级的_tid为空
    }
    const value: any = props.modelValue[0] // 多选时默认展开第一组 添加第一级后面的
    if (value && value.length > 0) {
      const valueObj = value.split(',')
      for (let i = 0; i < valueObj.length - 1; i++) {
        const val = filterFormatOptions(valueObj[i])
        if (val?.length) {
          setDefaultSomeSelect(val)
          state.downDataList.push(val) // 每次点击下拉重新设置下拉的选项，恢复上次点击的状态
        }
      }
    }
  }

  /**
   * 设置初始半选状态
   */
  const setDefaultSomeSelect = (list: any) => {
    list.forEach((item: any) => {
      if (item.hasChild && state.checked.includes(item[valueKey])) {
        const childList = filterFormatOptions(item[valueKey])
        const checkList = childList.filter((ch: any) =>
          state.checked.includes(ch[valueKey])
        )
        if (childList?.length !== checkList?.length) {
          // 半选
          item.someSelect = true
        }
      }
    })
  }
  const toggleClick = (visible: boolean) => {
    const val = JSON.parse(JSON.stringify(props.modelValue))
    if (visible) {
      const checkedList = val.join(',').split(',')
      state.checked = Array.from(new Set(checkedList))
      if (props.checkAny) {
        state.checked = val
      }
      if (props.lazy && formatOptions.value.length === 0) {
        // 异步加载，先把数据加载回来再调用setDefaultDownList
        lazyLoad()
      } else {
        setDefaultDownList()
      }
      if (props.multiple) {
        state.multipleChecked = val
      }
    } else {
      // 收起时
      if (props.multiple) {
        // 多选在收起时需要获取勾选的所有值
        updateModelValue(state.multipleChecked)
      } else if (props.checkAny) {
        let temp: any = []
        if (radioValue.value) {
          temp = [radioValue.value]
        }
        updateModelValue(temp)
      }
    }
  }
  const childrenClick = (obj: cityProps, index: number, evt: any) => {
    // console.log(obj)
    if (
      (!props.multiple && evt.target.className === 'checked') ||
      obj.disabled
    ) {
      return // 单选状态下点击选中的不处理
    }
    // 先从downDataList中称除下面所有子组
    state.downDataList.splice(index + 1, state.downDataList.length - index + 1)
    const children = filterFormatOptions(obj[valueKey])
    if (children && children.length > 0) {
      state.downDataList.push(children)
    } else {
      // 表示最后一级
      if ((!props.multiple && !props.lazy) || !obj.hasChild) {
        // 收起下拉，多选时点空白处收起
        //const val = obj.fullValue
        //state.showLabel = [obj.fullLabel.replace(/,/g, '/')]
        // modelValue更新后会自动更新showLabel
        if (!props.checkAny) {
          updateModelValue([obj.fullValue || obj[valueKey]])
        }
      }
      if (props.lazy) {
        // 当加载进来的数据没有children:[]时，也去请求，没结果时才收起
        state.loadingId = obj[valueKey]
        lazyLoad(obj, 'childrenClick')
      }
    }
    // 记录当前点击路径，用于高亮
    // 多选时点击checkbox才记录
    if (!props.multiple) {
      state.checked = (obj.fullValue || obj[valueKey]).split(',')
    }
  }
  // 返回下拉选中样式
  const getChecked = (item: cityProps) => {
    // 当前value存在于state.checked中即可选中状态
    if (props.checkAny) {
      // 这里不需要半选
      const index = state.checked.indexOf(item.fullValue || item[valueKey])
      return index !== -1
    }
    const index = state.checked.indexOf(item[valueKey])
    if (props.multiple && item.hasChild && index !== -1) {
      return !item.someSelect
    } else {
      return index !== -1
    }
  }
  // 清空操作
  const clearClick = () => {
    state.checked = []
    updateModelValue([])
  }
  // 从数据中添加或删除指定元素，用于多选 type=true为push
  const pushSpliceObj = (val: [string, number], type: boolean) => {
    const index = state.checked.indexOf(val)
    if (type) {
      if (index === -1) {
        // 不存在时才添加
        state.checked.push(val)
      }
    } else {
      // 删除
      if (index !== -1) {
        state.checked.splice(index, 1)
      }
    }
  }
  const setMultipleChecked = (val: [string, number], type: boolean) => {
    // 勾选时将勾选的值追加到multipleChecked,否则从里面移除
    const index = state.multipleChecked.indexOf(val)
    if (type && index === -1) {
      // 没有时才添加
      state.multipleChecked.push(val)
    }
    if (!type && index !== -1) {
      // 存在时才删除
      state.multipleChecked.splice(index, 1)
    }
  }
  // 多选模式下checkbox勾选事件
  const checkboxMultipleChange = (obj: cityProps, val: boolean) => {
    if (obj.disabled) {
      return
    }
    // 记录下勾选状态
    // 处理当前点击项的
    let valKey = obj[valueKey]
    if (props.checkAny) {
      valKey = obj.fullValue || obj[valueKey]
    }
    pushSpliceObj(valKey, val)
    if (!props.checkAny) {
      // 往上找父级
      findParents(obj, val)
    }
    // 如果有子级往下找子级，添加勾选或删除状态
    if (obj.hasChild && !props.checkAny) {
      findChildren(obj, val)
    } else {
      setMultipleChecked(obj.fullValue || obj[valueKey], val)
    }
    // 处理当前点击的选择状态，点前当前项一定是会选或全不选的
    obj.someSelect = false

    function findChildren(obj: cityProps, val: boolean) {
      const child = filterFormatOptions(obj[valueKey])
      // 将value值存入state.checked
      child.forEach((item: cityProps) => {
        if (!item.disabled) {
          //不管什么情况这里都不会是半选
          item.someSelect = false
          pushSpliceObj(item[valueKey], val)
          // 继续下一级
          if (item.hasChild) {
            findChildren(item, val)
          } else {
            setMultipleChecked(item.fullValue, val)
          }
        }
      })
    }

    function findParents(obj: cityProps, val: boolean) {
      // 同级是否为全选状态
      const brother = filterFormatOptions(obj.tid as any)
      let someChecked = false
      //从所有兄弟节点节筛选全已选择的
      const checkList = brother.filter((item: { [x: string]: any }) =>
        state.checked.includes(item[valueKey])
      )
      //相等时为全选
      if (checkList?.length > 0 && checkList?.length !== brother?.length) {
        //半选
        someChecked = true
      } else if (checkList?.length === 0) {
        //全不选
        someChecked = false
      }
      const parent = formatOptions.value.filter((item: cityProps) => {
        return item[valueKey] === obj.tid
      })
      // parent存在多条记录时表示value有重复了
      if (parent && parent.length > 0) {
        //删除时，要为全不选时才从state.checked里splice父级
        if ((!val && !checkList?.length) || val) {
          pushSpliceObj(parent[0][valueKey], val)
        }
        parent[0].someSelect = someChecked
        if (parent[0].tid) {
          // 继续找上一级
          findParents(parent[0], val)
        }
      }
    }
  }
  // 多选时删除单个
  const deleteClick = (index: number) => {
    const val = JSON.parse(JSON.stringify(props.modelValue))
    val.splice(index, 1)
    updateModelValue(val)
  }
  const formatFilterOptions = (val: string) => {
    state.downDataList = []
    const temp: any = []
    formatOptions.value.forEach((item: cityProps) => {
      if (
        !item.hasChild &&
        (item.fullLabel.indexOf(val) !== -1 || val === '`')
      ) {
        temp.push({
          [labelKey]: item.fullLabel.replace(/,/g, '/'),
          [valueKey]: item.fullValue,
          fullLabel: item.fullLabel,
          fullValue: item.fullValue
        })
      }
    })
    if (!val) {
      // 简单些，清空下拉
      temp.splice(0, temp.length)
    }
    state.downDataList.push(temp)
    // return temp
  }
  const inputChange = (val: any) => {
    clearTimeout(state.timer)
    state.timer = setTimeout(() => {
      if (!props.lazy) {
        // 异步时直接从接口获取
        formatFilterOptions(val)
      }
      emits('input', val)
    }, 500)
  }
  // 异步加载
  const lazyLoad = async (obj?: any, type?: string) => {
    if (!props.lazyLoad) {
      return
    }
    await getLazyLoad(obj, type)
    // 展开时，如果有选中的值，则根据值去加载子级
    if (!type && props.modelValue.length > 0) {
      const value: any = props.modelValue[0] // 多选时默认展开第一组 添加第一级后面的
      if (value && value.length > 0) {
        const valueObj = value.split(',')
        for (let i = 0; i < valueObj.length - 1; i++) {
          const val = { [valueKey]: valueObj[i] }
          await getLazyLoad(val, type)
        }
      }
    }

    async function getLazyLoad(obj: any, type?: string) {
      // console.log(obj)
      props.lazyLoad &&
        props.lazyLoad(obj, (resolve: cityProps) => {
          if (!resolve || (resolve && resolve.length === 0)) {
            // 表示没有子级了
            updateModelValue([obj.fullValue || obj[valueKey]])
            state.loadingId = ''
            return
          }
          if (!obj) {
            // 一级
            state.lazyOptions = resolve
          } else {
            obj.hasChild = true
            setChildren(state.lazyOptions, obj, resolve)
            if (type) {
              // 追加到下拉列表
              const children = filterFormatOptions(obj[valueKey])
              // console.log(children)
              if (children && children.length > 0) {
                state.downDataList.push(children)
              }
            }
            state.loadingId = ''
          }
          if (!type) {
            setDefaultDownList()
          }
        })
    }

    function setChildren(data: cityProps, obj: cityProps, resolve: cityProps) {
      // console.log(obj)
      data.forEach((item: cityProps) => {
        let has = false
        if (item[valueKey] === obj[valueKey]) {
          item.children = resolve
          has = true
        }
        if (!has && item.children) {
          setChildren(item.children, obj, resolve)
        }
      })
    }
  }
</script>
