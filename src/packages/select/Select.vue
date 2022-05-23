<!-- Created by 337547038 on 2021/6 0027. -->
<template>
  <select-down
    v-bind="$props"
    ref="selectDownEl"
    before-change=""
    options=""
    optionskey=""
    :model-value="showLabel"
    @clear="clearClick"
    @delete="deleteClick"
    @input="inputChange"
    @blur="inputBlur"
  >
    <ul :class="`${prefixCls}-select`">
      <li
        v-for="(item, index) in optionsList"
        v-show="!item._disabled"
        :key="index"
        :class="{
          disabled: item.disabled,
          active: getActive(item),
          [item.class]: item.class
        }"
        :title="item[optionsKey.label]"
        @click="itemClick(item, $event)"
        v-html="getItemText(item[optionsKey.label])"
      >
      </li>
      <p v-if="optionsList.length === 0" class="select-empty-options">{{
        emptyText
      }}</p>
    </ul>
    <slot></slot>
  </select-down>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import {
    toRefs,
    ref,
    computed,
    watch,
    inject,
    reactive,
    provide,
    onMounted
  } from 'vue'
  import { SelectDown } from '../selectDown'

  const props = withDefaults(
    defineProps<{
      modelValue: string[] | number | string
      //width?: string
      multiple?: boolean
      //collapseTags?: boolean
      //clear?: boolean
      filterable?: boolean
      //size?: string // 尺寸
      //placeholder?: string
      //disabled?: boolean
      //direction?: number //0自动　1向下　2向上
      //downClass?: string
      //downStyle?: object
      //appendToBody?: boolean
      downHeight?: number // 显示下拉最大高度，超出显示滚动条
      //icon?: string
      //fixedIcon?: boolean
      multipleLimit?: number
      options?: any
      optionsKey?: { label: string; value: string }
      beforeChange?: Function
      async?: boolean
      emptyText?: string
    }>(),
    {
      options: () => [],
      optionsKey: () => {
        return { label: 'label', value: 'value' }
      },
      downHeight: 200,
      emptyText: '无数据'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string[] | string | number): void
    (e: 'change', value: string[] | string | number, obj: any): void
    (e: 'limitChange', value: string[] | string | number): void
    //(e: 'toggleClick', value: boolean, evt: MouseEvent): void
    (e: 'clear'): void
    (e: 'delete', value: number): void
    (e: 'input', value: string): void
    (e: 'focus', value: string): void
    (e: 'blur', value: string): void
  }>()

  interface stateType {
    checked: any
    keywords: string
    setFirst: boolean
  }

  interface FormControlOption {
    [key: string]: any // 使用动态变量时不会报错
    label: string
    value: [string | number]
    disabled?: boolean
    _disabled?: boolean
  }

  const selectDownEl = ref()
  const state = reactive<stateType>({
    checked: [], // 所有已选择的集合
    keywords: '',
    setFirst: false // 手动选择改变选项时，在watch时不触发setFirstText事件
  })
  // 下拉的数据，存在options插槽里面插入的数据
  let optionsList: FormControlOption = ref(
    JSON.parse(JSON.stringify(props.options))
  )
  watch(
    () => props.modelValue,
    () => {
      setFirstText()
    }
  )
  watch(
    () => props.options,
    () => {
      optionsList.value = JSON.parse(JSON.stringify(props.options))
      setFirstText()
    }
  )
  const { optionsKey } = toRefs(props)
  const optLabel = optionsKey.value.label
  const optValue = optionsKey.value.value
  const inputBlur = (value: any) => {
    // 搜索输入框失焦时，判断输入的值是否符合
    if (!props.filterable) {
      return
    }
    const filter: any = optionsList.value.filter((item: any) => {
      return item[optLabel] === value && !item.disabled
    })
    if (filter.length > 0) {
      // 输入框符合要求，检查下当前项是不是已选择
      let hasItem = false
      state.checked.forEach((item: any) => {
        if (item[optLabel] === filter[0][optLabel]) {
          hasItem = true
        }
      })
      if (!hasItem) {
        // 没有时添加
        state.checked.push(filter[0])
        emitCom(filter[0])
      }
    }
    // 恢复输入框的值，存在输入后不点击下拉的情况
    selectDownEl.value.setValue(showLabel.value)
    // 还原下拉数据
    state.keywords = ''
    setTimeout(() => {
      optionsList.value.forEach((item: any) => {
        delete item._disabled
      })
    }, 500)
    emits('blur', value)
  }
  const inputChange = (value: any) => {
    // 默认情况下仅对当前下拉数据进行筛选
    if (!props.filterable) {
      return
    }
    state.keywords = value
    if (!props.async) {
      // 从当前下拉列表筛选
      optionsList.value.forEach((item: any) => {
        item._disabled = item[optLabel].indexOf(value) === -1
      })
    }
    state.setFirst = true
    emits('input', value)
  }
  // 设置初始值
  const setFirstText = () => {
    // console.log('setFirstText')
    if (state.setFirst) {
      return
    }
    state.setFirst = false
    if (props.modelValue && optionsList.value && optionsList.value.length > 0) {
      state.checked = []
      if (typeof props.modelValue === 'object') {
        props.modelValue.forEach((val: string) => {
          state.checked.push({
            [optLabel]: val,
            [optValue]: val
          })
        })
      } else {
        state.checked.push({
          [optLabel]: props.modelValue,
          [optValue]: props.modelValue
        })
      }
      for (let i = 0; i < optionsList.value.length; i++) {
        const item = optionsList.value[i]
        const value = getValueLabel(item)
        if (props.multiple) {
          // 多选
          if (typeof props.modelValue === 'object') {
            const index = props.modelValue.indexOf(value)
            if (index !== -1) {
              state.checked.splice(index, 1, item)
            }
          }
        } else {
          // 单选
          //state.checked = []
          if (value === props.modelValue) {
            state.checked.splice(0, 1, item) // 没有label时直接取value
            break
          }
        }
      }
    }
  }
  const getActive = (item: FormControlOption) => {
    const val = getValueLabel(item)
    if (props.multiple) {
      if (typeof props.modelValue === 'object') {
        return props.modelValue.indexOf(val) !== -1
      }
    } else {
      return val === props.modelValue
    }
  }
  const getValueLabel = (obj: any) => {
    return obj[optValue] === undefined ? obj[optLabel] : obj[optValue]
  }
  const itemClick = (item: FormControlOption, evt: MouseEvent) => {
    if (!item.disabled) {
      if (props.beforeChange && !props.beforeChange(item)) {
        slideUp()
        evt.stopPropagation()
        return
      }
      let activeValue = getValueLabel(item) as string
      if (props.multiple) {
        // 多选
        if (
          props.multipleLimit &&
          props.multipleLimit > 0 &&
          props.multipleLimit <= state.checked.length
        ) {
          emits('limitChange', props.modelValue)
          return false
        }
        let hasItem = -1
        state.checked.forEach((ch: any, index: number) => {
          const val = getValueLabel(ch) as string
          if (val === activeValue) {
            // 当前选项已选上，则取消选择
            hasItem = index
          }
        })
        if (hasItem !== -1) {
          state.checked.splice(hasItem, 1)
        } else {
          state.checked.push(item)
        }
        emitCom(item)
      } else {
        // 单选
        state.checked = [item]
        slideUp() // 收起下拉
        emitCom(item)
      }
    }
    evt.stopPropagation()
  }
  const slideUp = () => {
    selectDownEl.value.slideUp()
  }

  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const emitCom = (item?: any, update = true) => {
    state.setFirst = update
    let val: any = []
    state.checked.forEach((obj: FormControlOption) => {
      val.push(getValueLabel(obj))
    })
    if (!props.multiple) {
      val = val[0] || ''
    }
    emits('update:modelValue', val)
    controlChange && controlChange(val)
    emits('change', val, item) // 改变事件
  }
  const getItemText = (label: string): string => {
    if (state.keywords && props.filterable) {
      const reg = new RegExp(`${state.keywords}`, 'gi')
      // return label.replace(//gi,)
      return label.replace(reg, '<b>' + '$&' + '</b>')
    } else {
      return label
    }
  }
  // 选中的文本值
  const showLabel = computed(() => {
    return state.checked.map((item: any) => item[optLabel])
  })
  // 清空事件
  const clearClick = () => {
    state.checked = []
    emitCom()
    emits('clear')
  }
  // 删除选项事件
  const deleteClick = (index: number) => {
    state.checked.splice(index, 1)
    emitCom()
    emits('delete', index)
  }
  provide(`${prefixCls}GetChildOption`, (item: any) => {
    optionsList.value.push(item)
  })
  onMounted(() => {
    setFirstText()
  })
  defineExpose({ slideUp })
</script>
