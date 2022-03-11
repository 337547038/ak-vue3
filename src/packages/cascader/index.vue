<!--Created by 337547038-->
<template>
  <select-down
    v-bind="$props"
    ref="selectDownEl"
    :down-class="downClass2"
    :options="[]"
    options-key=""
    lazyload=""
    :class="{[`${prefixCls}-cascader`]:true}"
    :model-value="showLabel"
    @clear="clearClick"
    @delete="deleteClick"
    @input="inputChange"
    @toggleClick="toggleClick">
    <ul v-if="lazy&&downDataList.length===0">
      <li>
        <Loading :model-value="true" />
      </li>
    </ul>
    <ul v-if="downDataList.length===0" class="empty-text">
      <li>{{ emptyText }}</li>
    </ul>
    <ul v-for="(item,index) in downDataList" :key="index" @click.stop="">
      <li
        v-for="li in item"
        :key="li[optionsKey.label]"
        :class="{'checked':getChecked(li),'disabled'
          :li.disabled}"
        @click="childrenClick(li,index,$event)">
        <i v-if="!li.hasChild&&!multiple" class="icon-hook"></i>
        <Checkbox
          v-if="multiple"
          :disabled="li.disabled"
          :model-value="getChecked(li,true)"
          :class="{'some-select':li.someSelect}"
          @change="checkboxMultipleChange(li,$event)"
          @click.stop="" />
        <a>{{ li[optionsKey.label] }}</a><i v-if="li.hasChild" class="icon-arrow"></i>
        <Loading
          v-if="lazy&&li[optionsKey.label]===loadingId"
          :key="item[optionsKey.label]"
          :model-value="true" />
      </li>
    </ul>
  </select-down>
</template>
<script lang="ts" setup>
import {prefixCls} from '../prefix'
import {
  computed,
  reactive,
  toRefs,
  ref,
  watch
} from 'vue'
import pType from '../util/pType'
import SelectDown from '../selectDown/index.vue'
import Loading from '../loading/loading.vue'
import Checkbox from '../checkbox/checkbox.vue'

type cityProps = {
  [key: string]: any // 使用动态变量时不会报错
  tid?: [string, number]
  label: string
  value?: [string, number]
  children?: any
}
const props = defineProps({
  modelValue: pType.array([]),
  // width: pType.string(),
  multiple: pType.bool(),
  // collapseTags: pType.bool(), // 多选模式下是否折叠Tag
  // clear: pType.bool(),// 是否支持清空选项
  filterable: pType.bool(),// 是否可搜索选项
  // size: pType.string(), // 尺寸
  //placeholder: pType.string(),
  //disabled: pType.bool(),
  //direction: pType.number(0),//0自动　1向下　2向上
  downClass: pType.string(),
  //downStyle: pType.object(),
  //appendToBody: pType.bool(false),
  //downHeight: pType.number(0), // 显示下拉最大高度，超出显示滚动条
  options: pType.array<cityProps>([]),
  optionsKey: pType.object({label: 'label', value: 'value'}),
  showAllLevels: pType.bool(true),
  emptyText: pType.string('暂无数据'),
  lazy: pType.bool(),// todo 开发中
  lazyLoad: pType.func(),// todo 开发中
  checkAny: pType.bool() // 选择任意一级选项 // todo 开发中
})
const emit = defineEmits(['update:modelValue', 'change', 'input'])
const state = reactive<any>({
  downDataList: [], // 下拉面板的数据
  showLabel: [], // 用于展示的值，格式化后显示于输入框的值
  checked: [], // 用来判断点击选中状态
  multipleChecked: [],// 多选时，用于临时保存勾选的值
  loadingId: '', // 异步加载时用于显示加载状态
  timer: 0
})
const {downDataList, loadingId, showLabel} = toRefs(state)
const {optionsKey} = toRefs(props)
const labelKey = optionsKey.value.label
const valueKey = optionsKey.value.value
const selectDownEl = ref()
// 返回下拉样式
const downClass2 = computed(() => {
  const down = prefixCls + '-cascader-down'
  return props.downClass ? props.downClass + ' ' + down : down
})
// 格式化options下拉数据
const formatOptions = computed(() => {
  let temp: any = []
  formatData(props.options, {})
  return temp

  function formatData(data: any, obj: any) {
    data.forEach((item: any) => {
      const newItem = JSON.parse(JSON.stringify(item))
      delete newItem.children
      delete newItem._fullLabel
      delete newItem._fullValue
      const hasChild = item.children && item.children.length > 0
      item._fullLabel = obj.fullLabel ? obj.fullLabel + ',' + item[labelKey] : ''
      item._fullValue = obj.fullValue ? obj.fullValue + ',' + item[valueKey] : ''
      temp.push(Object.assign({}, newItem, {
        tid: obj.parentId,
        hasChild: hasChild,
        fullLabel: item._fullLabel,
        fullValue: item._fullValue
      }))
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
  if (props.modelValue && props.modelValue.length > 0) {
    state.showLabel = JSON.parse(JSON.stringify(props.modelValue)) // 默认为value，从选项数据中匹配到相同value值时返回label，否则使用传入的值
    for (let i = 0; i < props.modelValue.length; i++) {
      // console.log(props.modelValue[i])
      formatOptions.value.forEach((opt: cityProps) => {
        if (opt.fullValue === props.modelValue[i]) {
          let fl = opt.fullLabel || opt[labelKey]
          // console.log(fl.lastIndexOf(','))
          if (!props.showAllLevels) {
            // 使用逗号分隔，取最后一个
            const index = fl.lastIndexOf(',')
            fl = fl.substr(index + 1)
          }
          state.showLabel.splice(i, 1, fl.replace(/,/g, '/'))
        }
      })
    }
  }
}
watch(() => props.modelValue, () => {
  setDefaultShowLabel()
})
setDefaultShowLabel()
// end 设置初始值结束
// 从格式化后的数据里提取
const filterFormatOptions = (id?: [string, number]) => {
  return formatOptions.value.filter((item: any) => {
    return item.tid === id
  })
}
const updateModelValue = (val: any) => {
  // console.log('updateModelValue')
  emit('update:modelValue', val)
  emit('change', val)
  selectDownEl.value.slideUp()
}
const toggleClick = (visible: boolean) => {
  if (visible) {
    state.downDataList = [] // 先清空
    state.checked = (props.modelValue.join(',')).split(',')
    const firstOpt = filterFormatOptions()
    if (firstOpt && firstOpt.length > 0) {
      state.downDataList.push() // 首先添加第一级，第一级的_tid为空
    }
    const value: any = props.modelValue[0] // 多选时默认展开第一组
    if (value && value.length > 0) {
      const valueObj = value.split(',')
      for (let i = 0; i < valueObj.length - 1; i++) {
        const val = filterFormatOptions(valueObj[i])
        if (val && val.length > 0) {
          state.downDataList.push(val) // 每次点击下拉重新设置下拉的选项，恢复上次点击的状态
        }
      }
    }
    if (props.multiple) {
      state.multipleChecked = JSON.parse(JSON.stringify(props.modelValue))
    }
  } else {
    // 收起时
    if (props.multiple) {
      // 多选在收起时需要获取勾选的所有值
      updateModelValue(state.multipleChecked)
    }
  }
}
const childrenClick = (obj: cityProps, index: number, evt: any) => {
  // console.log(obj)
  if ((!props.multiple && evt.target.className === 'checked') || obj.disabled) {
    return // 单选状态下点击选中的不处理
  }
  // 先从downDataList中称除下面所有子组
  state.downDataList.splice(index + 1, state.downDataList.length - index + 1)
  const children = filterFormatOptions(obj[valueKey])
  if (children && children.length > 0) {
    state.downDataList.push(children)
  } else {
    // 表示最后一级
    if (!props.multiple) {
      // 收起下拉，多选时点空白处收起
      //const val = obj.fullValue
      //state.showLabel = [obj.fullLabel.replace(/,/g, '/')]
      // modelValue更新后会自动更新showlabel
      updateModelValue([obj.fullValue])
    }
  }
  // 记录当前点击路径，用于高亮
  // 多选时点击checkbox才记录
  if (!props.multiple) {
    state.checked = (obj.fullValue || obj[valueKey]).split(',')
  }
}
// 返回下拉选中样式
const getChecked = (item: cityProps, bool: boolean) => {
  // 当前value存在于state.checked中即可选中状态
  const index = state.checked.indexOf(item[valueKey])
  if (props.multiple && item.hasChild && index !== -1 && bool) {
    // 这里要处理半选状态，并且有子级时，需判断子级是否全选
    // getChecked两个地方调用了，这里只计算一次
    //if (index !== -1 && bool) {
    // 这里表示为半选状态，计算下子级是否为全选
    const child = filterFormatOptions(item[valueKey])
    let allChecked = true
    child.forEach((item: cityProps) => {
      if (state.checked.indexOf(item[valueKey]) === -1) {
        // 表示存在没勾选的
        allChecked = false
      }
    })
    if (allChecked) {
      return true // 全选
    } else {
      item.someSelect = true // 半选
    }
    //}
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
  // console.log(val, type, index)
  if (type) {
    if (index === -1) { // 不存在时才添加
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
  if (type && index === -1) { // 没有时才添加
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
  pushSpliceObj(obj[valueKey], val)
  // 如果有子级往下找子级，添加勾选或删除状态
  if (obj.hasChild) {
    findChildren(obj, val)
  } else {
    setMultipleChecked(obj.fullValue, val)
  }

  // 往上找父级
  findParents(obj, val)

  function findChildren(obj: cityProps, val: boolean) {
    const child = filterFormatOptions(obj[valueKey])
    // 将value值存入state.checked
    child.forEach((item: cityProps) => {
      pushSpliceObj(item[valueKey], val)
      // 继续下一级
      if (item.hasChild) {
        findChildren(item, val)
      } else {
        setMultipleChecked(item.fullValue, val)
      }
    })
  }

  function findParents(obj: cityProps, val: boolean) {
    // 同级是否为全选状态
    const brother = filterFormatOptions(obj.tid)
    let allChecked = true // 表示为全选
    let someChecked = false
    if (val) { // 勾选情况下父级至少是半选状态，
      someChecked = true
    }
    brother.forEach((item: cityProps) => {
      if (state.checked.indexOf(item[valueKey]) === -1) {
        // 表示至少有一条没勾选上
        allChecked = false
      } else {
        someChecked = true // 表示至少有一条是勾选上
      }
      // 兄弟节点有半选状态的，父节点也要半选
      if (item.someSelect) {
        someChecked = true
      }
    })
    const parent = formatOptions.value.filter((item: cityProps) => {
      return item[valueKey] === obj.tid
    })
    // parent存在多条记录时表示value有重复了
    if (parent && parent.length > 0) {
      // allChecked=true将父级勾选上，否则去掉勾选
      pushSpliceObj(parent[0][valueKey], allChecked)
      if (allChecked) {// 全选时去掉半选样式
        parent[0].someSelect = false
      } else {
        parent[0].someSelect = someChecked
      }
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
const inputChange = (val: string) => {
  clearTimeout(state.timer)
  state.timer = setTimeout(() => {
    state.downDataList = []
    const temp: any = []
    formatOptions.value.forEach((item: cityProps) => {
      if (!item.hasChild && item.fullLabel.indexOf(val) !== -1) {
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
  }, 500)
  emit('input', val)
}
</script>
