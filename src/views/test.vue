<template>
  <div></div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const props = withDefaults(
    defineProps<{
      modelValue?: string | string[]
      placeholder?: string
      endPlaceholder?: string
      clear?: boolean // 显示清空
      disabled?: boolean
      type?:
          | 'year'
          | 'month'
          | 'date'
          | 'datetime'
          | 'datetimeRange'
          | 'dateRange'
          | 'monthRange' // 下拉面板类型 四种类型，年/年月/年月日/年月日时分秒，range为区间
      format?: string // 显示于输入框的值
      valueFormat?: string
      appendToBody?: boolean // 将日期面板插入到body中
      downClass?: string // 下拉面板样式
      downStyle?: Object // 下拉面板样式
      readonly?: boolean // 日期输入框只读
      direction?: number // 下拉弹出方向，0自动，1向下，2向上
      width?: string
      disabledDate?: Function
      innerText?: Function
      size?: string
      isRange?: boolean // 区间选择，此时multiple无效
      rangeSeparator?: string
    }>(),
    {
      clear: true,
      readonly: true,
      direction: 0,
      type: 'date',
      rangeSeparator: 'To'
    }
)
const defaultValue=ref([])
const showValue=ref([])
const downValue=ref()
const getShowValue = (dateString?: string[]) => {
  const date = dateString || props.modelValue
  // 当时间为空或非法时使用
  let dateValueLeft: Date | boolean = new Date()
  let dateValueRight: Date | boolean = new Date(
      new Date().setMonth(dateValueLeft.getMonth() + 1)
  )
  if (props.type === 'monthRange') {
    // 右边为下一年
    dateValueRight = new Date(
        new Date().setFullYear(dateValueLeft.getFullYear() + 1)
    )
  }
  defaultValue.value = []
  showValue.value = []
  // 判断是否为有效时间类型
  if (isRange) {
    if (typeof date === 'object' && date?.length === 2) {
      const d1 = isInvalidDate(date[0])
      const d2 = isInvalidDate(date[1])
      if (d1 && d2) {
        dateValueLeft = d1
        dateValueRight = d2
        // 有合法值时设置显示的值
        const parse = parseDate(d1 as Date, formatType.value)
        const parse2 = parseDate(d2 as Date, formatType.value)
        showValue.value = [parse, parse2]
        defaultValue.value = [d1.getTime(), d2.getTime()]
      }
    }
    downValue.value = [dateValueLeft, dateValueRight]
  } else {
    if (date && typeof date === 'string') {
      const d = isInvalidDate(date)
      if (d) {
        dateValueLeft = d
        const parse = parseDate(<Date>d, formatType.value)
          showValue.value = [parse]
          defaultValue.value = [d.getTime()]
          }
          }
          downValue.value = [dateValueLeft]
          }
          }
</script>
