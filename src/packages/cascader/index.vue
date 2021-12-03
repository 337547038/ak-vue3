<!--Created by 337547038 on 2021.6.-->
<template>
  <select-down
    v-bind="$props"
    ref="selectDown"
    :options="[]"
    :class="{[`${prefixCls}-cascader`]:true}"
    :model-value="showLabel"
    @clear="clearClick"
    @delete="deleteClick"
    @input="inputChange"
    @blur="inputBlur"
    @toggleClick="toggleClick">
    <div :class="{[`${prefixCls}-cascader-down`]:true}" @click.stop="">
      <slot name="tips"></slot>
      <!--      <div class="cascader-tab">
              <ul class="clearfix">
                <li
                  v-for="(item,index) in selectValue"
                  :key="index"
                  :class="{'active':index===activeLayer}"
                  @click="activeLayer=index"
                  v-text="item.label"></li>
              </ul>
            </div>-->
      <div class="cascader-area">
        <ul v-for="(item,index) in downDataList" :key="index">
          <li
            v-for="li in item"
            :key="li.label"
            :class="getChecked(li,index)"
            v-text="li.label"
            @click="childrenClick(li,index,$event)">
          </li>
        </ul>
      </div>
    </div>
  </select-down>
</template>
<script lang="ts">
import {prefixCls} from '../prefix'
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  ref,
  onMounted,
  nextTick,
  onBeforeUnmount,
  watch,
  inject
} from 'vue'
import pType from '../util/pType'
import {getFormDisabled} from '../util/form'
import SelectDown from '../selectDown/index.vue'

type cityProps = {
  label: string
  value?: [string, number]
  children?: any
}
export default defineComponent({
  name: `${prefixCls}Cascader`,
  components: {SelectDown},
  props: {
    modelValue: pType.array([]),
    width: pType.string(),
    multiple: pType.bool(),
    collapseTags: pType.bool(), // 多选模式下是否折叠Tag
    clear: pType.bool(),// 是否支持清空选项
    filterable: pType.bool(),// 是否可搜索选项
    size: pType.string(), // 尺寸
    placeholder: pType.string(),
    disabled: pType.bool(),
    direction: pType.number(0),//0自动　1向下　2向上
    downClass: pType.string(),
    downStyle: pType.object(),
    appendToBody: pType.bool(false),
    downHeight: pType.number(0), // 显示下拉最大高度，超出显示滚动条
    options: pType.array<cityProps>(), // 参数非必要，来自于select
    // icon: pType.string('arrow'),
    selectText: pType.array(['请选择省', '请选择市', '请选择区']),
    listType: pType.string('city'), // 显示类型，这种模式只能单选multiple=false
    lazy: pType.bool(),
    checkAny: pType.bool() // 选择任意一级选项
  },
  emits: ['update:modelValue', 'change'],
  setup(props, {emit}) {
    const state = reactive<any>({
      downDataList: [], // 下拉面板的数据
      checked: [], // 用来判断点击选中状态
      checkedMultiple: []// 用来判断点击选中状态，多选时需要使用，多选时临时点击
    })
    const selectDown = ref()
    // 用于展示的值，格式化后显示于输入框的值
    const showLabel = computed(() => {
      // modelValue=[0,1,2] // 值模式
      // modelValue=[[0,1,2],[3,4,5]] // 值模式 multiple=true
      // 根据选择的值返回label
      let labelArray: any = []
      getLabel(props.modelValue, labelArray)
      return labelArray

      function getLabel(data: any, labelArray: any) {
        const temp: any = []
        let options = props.options
        data.forEach((item: any) => {
          if (typeof item === 'object') {
            // 多选
            getLabel(item, labelArray)
          } else {
            // getLabelValue里有对downDataList赋值的方法，多选时不赋值
            const val = getOptionsItem(options, item, 'label')
            // console.log('push:' + val)
            val && temp.push(val.label)
            options = val.children
          }
        })
        if (temp.length > 0) {
          labelArray.push(temp.join('/'))
        }
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const clearClick = () => {

    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const deleteClick = () => {

    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const inputChange = () => {

    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const inputBlur = () => {

    }
    // 下拉项点击
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const childrenClick = (obj, index, evt) => {
      if (!props.multiple && evt.target.className === 'checked') {
        return // 单选状态下点击选中的不处理
      }
      // 先从downDataList中称除下面所有子组
      state.downDataList.splice(index + 1, state.downDataList.length - index + 1)
      // 追加当前项的子集
      if (obj.children) {
        state.downDataList.push(obj.children)
      }
    }
    // 根据value值返回相应值
    // type= true 返回当前项
    // type= 返回data
    const getOptionsItem = (data: any, val: [string, number], type: string) => {
      for (const key in data) {
        const value = data[key].value
        const hasValue = value === undefined ? data[key].label === val.toString() : value === val
        if (hasValue) {
          if (type) {
            return data[key]
          } else {
            return JSON.parse(JSON.stringify(data))
          }
        }
        const labelV: string = getOptionsItem(data[key].children, val, type)
        if (labelV) {
          return labelV
        }
      }
      return null
    }
    // 根据value值返回对就的label，没有value时匹配label
    /*const getLabelValue = (data: any, val: [string, number], setDown = true) => {
      for (const key in data) {
        const value = data[key].value
        const hasValue = value === undefined ? data[key].label === val.toString() : value === val
        if (hasValue) {
          // const copyData = JSON.parse(JSON.stringify(data))
          // setDown && state.downDataList.push(copyData)
          return data[key].label
        }
        const labelV: string = getLabelValue(data[key].children, val, setDown)
        if (labelV) {
          return labelV
        }
      }
      return null
    }*/
    // 返回当前选中的栏目类名
    const getChecked = (li: cityProps, index: number) => {
      if (state.checked.length > 0) {
        const label = li.value === undefined ? li.label : li.value
        // console.log(label)
        if (props.multiple) {
          for (const key in state.checked) {
            const h = has(label, state.checked[key], index)
            if (h) {
              return h
            }
          }
        } else {
          return has(label, state.checked, index)
        }

        // 判断当前值是否存在于modelValue中

        function has(val: any, checked: any, index: number) {
          return checked[index] === val ? 'checked' : ''
        }
      }
    }
    // 展开下拉
    const toggleClick = () => {
      const length = props.modelValue.length
      if (length === 0) {
        // 没有值时返回第一层
        state.downDataList = [props.options]
      } else {
        // 多选时返回第一个选项
        const value: any = props.multiple ? props.modelValue[0] : props.modelValue
        // 重新对downDataList设值
        for (const key in value) {
          const val = getOptionsItem(props.options, value[key], '')
          if (val) {
            state.downDataList.push(val) // 每次点击下拉重新设置下拉的选项，恢复上次点击的状态
          }
        }
      }
      if (length > 0) {
        // 处理下拉选中高亮
        state.checked = JSON.parse(JSON.stringify(props.modelValue))
      }
    }
    onMounted(() => {

    })
    return {
      ...toRefs(state),
      selectDown,
      clearClick,
      deleteClick,
      inputChange,
      inputBlur,
      childrenClick,
      getChecked,
      showLabel,
      toggleClick,
      prefixCls
    }
  }
  /*setup001(props, {emit}) {
    const state = reactive({
      activeLayer: 0, // 当前第几级
      showLabel: [] // 用于展示的值，格式化后显示于输入框的值
    })
    // [index: string]: any;
    const selectValue = ref<any>([])// 暂存的值，加工后的数组，同时保存了当前值所在数组的位置
    const el = ref()
    const init = () => {
      let length = props.modelValue.length
      // 有值
      if (length > 0 && length <= 3) {
        // 有值时要默认在最后一级，根据当前和取当前位置拼成数组
        let data
        for (let i = 0; i < length; i++) {
          if (i === 0) {
            data = props.data
          } else if (i === 1) {
            const index = selectValue.value[0].index
            data = props.data[index].children
          } else if (i === 2) {
            const index = selectValue.value[0].index
            const data1 = props.data[index].children
            const index2 = selectValue.value[1].index
            data = data1[index2].children
          }
          setDefaultValue(data, i)
        }
        state.activeLayer = length - 1
        state.showValue = formatValue()
      } else {
        selectValue.value.push({
          name: props.selectText[0],
          index: 0
        })
      }
    }
    const children = computed(() => {
      // 根据selectValue和当前的级数
      let array: Array<any> = []
      let data = props.data
      if (state.activeLayer === 0) {

      } else if (state.activeLayer === 1) {
        // 根据索引直接找到当前的子级，省去一级级的遍历
        const index = selectValue.value[0].index
        data = props.data[index].children
      } else if (state.activeLayer === 2) {
        const index = selectValue.value[0].index
        const data1 = props.data[index].children
        const index2 = selectValue.value[1].index
        data = data1[index2].children
      }
      for (let i in data) {
        array.push({
          name: data[i].name || data[i],
          index: i,
          hasChild: !!data[i].children
        })
      }
      return array
    })
    const disabledOk = computed(() => {
      return getFormDisabled(props.disabled)
    })
    const showHide = (e: MouseEvent) => {
      if (el.value && el.value.contains(e.target)) {
        if (disabledOk.value === true) {
          return
        }
        state.show = !state.show
      } else {
        state.show = false
      }
    }
    const setDefaultValue = (data: Array<any>, index: number) => {
      for (let i in data) {
        // 最后一个比较特别，是数组不是对象，没有name
        if ((data[i].name || data[i]) === props.modelValue[index]) {
          selectValue.value.push({
            name: data[i].name || data[i],
            index: i
          })
          break
        }
      }
    }
    const childrenClick = (item: any) => {
      if (item.hasChild) {
        if (state.activeLayer === 0) {
          selectValue.value.splice(0, selectValue.value.length)// 清空
          // 写入当前项
          selectValue.value.push({
            name: item.name,
            index: item.index// 当前值在数据组中的位置，for时就可以直接找到当前项
          })
          // 写入第二项
          selectValue.value.push({
            name: props.selectText[1]
          })
        } else if (state.activeLayer === 1) {
          // 将请选择修改为当前选择
          selectValue.value[1] = {
            name: item.name,
            index: item.index
          }
          // 将第三级设为请选择
          selectValue.value[2] = {name: props.selectText[2]}
        }
        state.activeLayer++// 跳到下一级
      } else {
        // 关闭下拉，将值给输入框，这里有可能是第二级
        selectValue.value[state.activeLayer] = {
          name: item.name,
          index: item.index
        }
        // 如果只有二级时，这里清除下第三级，保证不出错
        if (state.activeLayer === 1) {
          selectValue.value.splice(2, 1)
        }
        state.showValue = formatValue()
        state.show = false
        state.showPlaceholder = false
      }
    }
    const formatValue = (type?: boolean): any => {
      // 将数组转为文本显示出来
      let val = ''
      let array = []
      for (let i in selectValue.value) {
        if (type) {
          // 为真返回数组
          array.push(selectValue.value[i].name)
        } else {
          val += selectValue.value[i].name
        }
      }
      return type ? array : val
    }
    const stopPropagation = (e: MouseEvent) => {
      e.stopPropagation()
    }
    const clearClick = () => {
      state.showValue = ''
      selectValue.value = []
      state.activeLayer = 0
      nextTick(() => {
        selectValue.value.push({
          name: props.selectText[0],
          index: 0
        })
      })
    }
    watch(
      () => state.showValue,
      () => {
        const value = formatValue(true)
        // console.log(typeof value)
        emit('update:modelValue', value)
        emit('change', value)
        controlChangeEvent(value)
      }
    )
    onMounted(() => {
      document.addEventListener('click', showHide)
      init()
      controlChangeEvent(props.modelValue, 'mounted')
    })
    onBeforeUnmount(() => {
      document.addEventListener('click', showHide)
    })
    watch(() => props.modelValue, (v: any) => {
      controlChangeEvent(v, 'mounted')
    })
    // formItem
    const controlChange: any = inject(`${prefixCls}ControlChange`, '')
    const controlChangeEvent = (val: any, type?: string) => {
      controlChange && controlChange(val, type)
    }
    return {
      prefixCls,
      ...toRefs(state),
      selectValue,
      children,
      el,
      clearClick,
      stopPropagation,
      childrenClick,
      disabledOk
    }
  }*/
})
</script>
