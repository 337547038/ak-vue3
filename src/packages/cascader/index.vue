<!--Created by 337547038 on 2021.6.-->
<template>
  <select-down
    v-bind="$props"
    ref="selectDownEl"
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
    // selectText: pType.array(['请选择省', '请选择市', '请选择区']),
    // listType: pType.string('city'), // 显示类型，这种模式只能单选multiple=false
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
    const selectDownEl = ref()
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
    const childrenClick = (obj: cityProps, index: number, evt: any) => {
      if (!props.multiple && evt.target.className === 'checked') {
        return // 单选状态下点击选中的不处理
      }
      // 先从downDataList中称除下面所有子组
      state.downDataList.splice(index + 1, state.downDataList.length - index + 1)
      // 追加当前项的子集
      if (obj.children) {
        state.downDataList.push(obj.children)
      } else {
        // 表示最后一级
        if (!props.multiple) {
          // 收起下拉，多选时点空白处收起
          updateModelValue()
        }
      }
      // 处理选中高亮状态
      const val = obj.value === undefined ? obj.label : obj.value
      if (props.multiple) {
        state.checkedMultiple.splice(index, state.checkedMultiple.length - index)
        state.checkedMultiple[index] = val
      } else {
        state.checked.splice(index, state.downDataList.length - index + 1, val)
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
          return has(label, state.checkedMultiple, index)
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
      state.downDataList = [] // 先清空
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
      state.checkedMultiple = []
      if (length > 0) {
        // 处理下拉选中高亮
        state.checked = JSON.parse(JSON.stringify(props.modelValue))
      }
    }
    const updateModelValue = () => {
      emit('update:modelValue', state.checked)
      selectDownEl.value.slideUp()
    }
    onMounted(() => {

    })
    return {
      ...toRefs(state),
      selectDownEl,
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
})
</script>
