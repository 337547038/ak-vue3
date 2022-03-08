<!--Created by 337547038 on 2018/9/5.-->
<template>
  <select-down
    ref="selectDown"
    :class="{[`${prefixCls}-date-picker`]:true}"
    :placeholder="placeholder"
    :size="size"
    :disabled="disabled"
    :width="width"
    :clear="clear"
    :append-to-body="appendToBody"
    :filterable="!readonly"
    :direction="direction"
    :down-class="downClass"
    :down-style="downStyle"
    icon="date"
    :model-value="showValue"
    @clear="clearClick"
    @blur="blurHandler">
    <div
      :class="{[`${prefixCls}-date-picker-down`]:true}"
      @click.stop="">
      <date-picker :value="childValue" :type="type" @change="datePickerChange" />
    </div>
  </select-down>
</template>
<script lang="ts">
import {
  ref, reactive, defineComponent, toRefs, provide, inject, watch
} from 'vue'
import {prefixCls} from '../prefix'
import DatePicker from './datePicker.vue'
import pType from '../util/pType'
import {AnyPropName} from '../types'
import SelectDown from '../selectDown/index.vue'

export default defineComponent({
  name: `${prefixCls}DatePicker`,
  components: {SelectDown, DatePicker},
  props: {
    modelValue: pType.string(),
    placeholder: pType.string(),
    clear: pType.bool(true),// 显示清空
    disabled: pType.bool(),
    type: pType.oneOfString(['year', 'month', 'date', 'datetime'], 'date'),// 下拉面板类型 四种类型，年/年月/年月日/年月日时分秒
    format: pType.string(), // 显示于输入框的值
    valueFormat: pType.string(), // 实际值，即v-model
    appendToBody: pType.bool(false), // 将日期面板插入到body中
    downClass: pType.string(), // 下拉面板样式
    downStyle: pType.object(), // 下拉面板样式
    readonly: pType.bool(true), // 日期输入框只读
    direction: pType.number(0), // 下拉弹出方向，0自动，1向下，2向上
    width: pType.string(),
    disabledDate: pType.func(),
    innerText: pType.func(),
    size: pType.string()
  },
  emits: ['update:modelValue', 'change'],
  setup(props, {emit}) {
    const selectDown = ref()
    const state = reactive<any>({
      showValue: [], // 显示在输入框的值
      childValue: new Date(),// 传给子组件的值，即通过判断的，不合法日期时取当前时间
      isFirst: false
    })
    const controlChange: any = inject(`${prefixCls}ControlChange`, '')
    provide(`${prefixCls}SetInnerText`, (date: Date) => {
      return props.innerText && props.innerText(date)
    })
    provide(`${prefixCls}SetDisabledDate`, (date: Date, type: string) => {
      return props.disabledDate && props.disabledDate(date, type)
    })
    const emitCom = (value: string) => {
      emit('update:modelValue', value)
      emit('change', value)
    }
    const parseDate = (dateTime: Date, formatType: string): string => {
      if (formatType === 'timestamp') {
        return dateTime.getTime().toString() // 时间戳直接返回
      }
      const m = dateTime.getMonth() + 1
      const d = dateTime.getDate()
      const h = dateTime.getHours()
      const mi = dateTime.getMinutes()
      const s = dateTime.getSeconds()
      const formatObj: AnyPropName = {
        y: dateTime.getFullYear(),
        M: m,
        MM: m > 9 ? m : '0' + m,
        d: d,
        dd: d > 9 ? d : '0' + d,
        h: h,
        hh: h > 9 ? h : '0' + h,
        m: mi,
        mm: mi > 9 ? mi : '0' + mi,
        s: s,
        ss: s > 9 ? s : '0' + s,
        w: dateTime.getDay()
      }
      return formatType.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, result => {
        let value = formatObj[result]
        if (result === 'w') return ['日', '一', '二', '三', '四', '五', '六'][value]
        return value
      })
    }
    // 初始化完成或是当modelValue变化时，返回指定的输出格式
    const getShowValue = (date: string) => {
      if (!date) {
        return
      }
      // 如果当前输入的日期不合法，则清空输入框
      let dateValue = new Date(date)
      if (dateValue.toString() === 'Invalid Date') {
        // 日期不合法
        emitCom('')
        state.showValue = []
        state.childValue = new Date()
        console.log(new Error('日期不合法，清空输入框'))
      } else {
        state.childValue = dateValue // 修改为当前值入的值
        let type = ''
        if (props.format) {
          // 指定了显示的格式时，按指定的返回
          type = props.format
        } else {
          switch (props.type) {
            case 'year':
              type = 'y'
              break
            case 'month':
              type = 'y-MM'
              break
            case 'date':
              type = 'y-MM-dd'
              break
            case 'datetime':
              type = 'y-MM-dd hh:mm:ss'
              break
          }
        }
        state.showValue = [parseDate(dateValue, type)]
        // console.log(dateValue)
        // 日期合法，按选择的日期格式格式化后返回
        const vModel = parseDate(dateValue, props.valueFormat || type)
        emitCom(vModel)
      }
    }
    getShowValue(props.modelValue)
    watch(() => props.modelValue, (val: string) => {
      // console.log('watch')
      if (!state.isFirst) {
        getShowValue(val)
      }
      controlChange && controlChange(val, 'mounted')
    })
    const slideUp = () => {
      selectDown.value.slideUp()
    }
    const blurHandler = (value: string) => {
      // const {value} = evt.target as HTMLInputElement
      console.log(value)
      getShowValue(value)
    }
    const datePickerChange = (date: Date) => {
      state.isFirst = true
      getShowValue(parseDate(date, 'y-MM-dd hh:mm:ss'))
      slideUp()
      controlChange && controlChange(date)
    }
    const clearClick = () => {
      emitCom('')
      controlChange && controlChange('')
      // 下拉的值设为当前时间
      state.childValue = new Date()
    }
    return {
      prefixCls,
      selectDown,
      ...toRefs(state),
      slideUp,
      blurHandler,
      datePickerChange,
      clearClick
    }
  }
})
</script>
