<!--Created by 337547038 on 2018/9/5.-->
<template>
  <SelectDown
    ref="selectDown"
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
    :fixedIcon="true"
    :model-value="showValue"
    @clear="clearClick"
    @blur="blurHandler"
    @toggle-click="toggleClick"
  >
    <div :class="{ [`${prefixCls}-date-picker`]: true }" @click.stop="">
      <template v-for="(item, index) in downValue" :key="index">
        <div class="calendar">
          <ControlHead
            :type="props.type"
            :activePanel="activePane"
            :value="item"
            :position="index === 0 ? 'left' : 'right'"
            @change="controlHeadChange(index, $event)"
          />
        </div>
      </template>
    </div>
  </SelectDown>
</template>
<script lang="ts" setup>
  import { ref, provide, inject, watch, computed, onMounted } from 'vue'
  import prefixCls from '../prefix'
  import { SelectDown } from '../selectDown'
  import ControlHead from './ControlHead.vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: string | string[]
      placeholder?: string
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
      appendToBody?: boolean // 将日期面板插入到body中
      downClass?: string // 下拉面板样式
      downStyle?: Object // 下拉面板样式
      readonly?: boolean // 日期输入框只读
      direction?: number // 下拉弹出方向，0自动，1向下，2向上
      width?: string
      disabledDate?: Function
      innerText?: Function
      size?: string
    }>(),
    {
      clear: true,
      readonly: true,
      direction: 0,
      type: 'date'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string | string[]): void
    (e: 'change', value: string | string[]): void
  }>()

  const selectDown = ref()
  const downValue = ref() // 下拉面板的值
  const showValue = ref<string[]>([]) // 显示于输入框的值
  const isRange = props.type.includes('Range') // 是否为区间
  const defaultValue = ref<number[]>([]) // 经过时间格式化的初始值
  const activePane = ref<string>('day')
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const emitCom = (value: string | string[]) => {
    emits('update:modelValue', value)
    emits('change', value)
    controlChange && controlChange(value)
  }
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
  const formatType = computed(() => {
    let fType = ''
    if (props.format) {
      // 指定了显示的格式时，按指定的返回
      fType = props.format
    } else {
      switch (props.type) {
        case 'year':
          fType = 'y'
          break
        case 'month':
        case 'monthRange':
          fType = 'y-MM'
          break
        case 'date':
        case 'dateRange':
          fType = 'y-MM-dd'
          break
        case 'datetime':
        case 'datetimeRange':
          fType = 'y-MM-dd hh:mm:ss'
          break
        default:
      }
    }
    return fType
  })
  const setDefaultPane = () => {
    // 根据类型设置初始下拉面板类型
    if (props.type === 'year' || props.type === 'month') {
      activePane.value = props.type
    } else if (props.type === 'monthRange') {
      activePane.value = 'month'
    } else {
      activePane.value = 'day'
    }
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
    const formatObj: any = {
      y: dateTime.getFullYear(),
      M: m,
      MM: padStart(m),
      d: d,
      dd: padStart(d),
      h: h,
      hh: padStart(h),
      m: mi,
      mm: padStart(mi),
      s: s,
      ss: padStart(s),
      w: dateTime.getDay()
    }
    return formatType.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, (result) => {
      const value = formatObj[result]
      if (result === 'w')
        return ['日', '一', '二', '三', '四', '五', '六'][value]
      return value
    })
  }
  const isInvalidDate = (val: string) => {
    if (!val) {
      return
    }
    // 有效时返回有效时间
    const d = new Date(val)
    if (d.toString() !== 'Invalid Date') {
      return d
    }
    return false
  }
  // 初始化完成或是当modelValue变化时，返回指定的输出格式
  const getShowValue = () => {
    const date = props.modelValue
    // 当时间为空或非法时使用
    let dateValueLeft = new Date()
    let dateValueRight = new Date(
      new Date().setMonth(dateValueLeft.getMonth() + 1)
    )
    if (props.type === 'monthRange') {
      // 右边为下一年
      dateValueRight = new Date(
        new Date().setFullYear(dateValueLeft.getFullYear() + 1)
      )
    }
    // 判断是否为有效时间类型
    if (isRange) {
      if (typeof date === 'object' && date?.length === 2) {
        const d1 = isInvalidDate(date[0])
        const d2 = isInvalidDate(date[1])
        if (d1 && d2) {
          dateValueLeft = d1
          dateValueRight = d2
          // 有合法值时设置显示的值
          const parse = parseDate(d1, formatType.value)
          const parse2 = parseDate(d2, formatType.value)
          showValue.value = [parse, parse2]
        }
      }
      downValue.value = [dateValueLeft, dateValueRight]
      defaultValue.value = [dateValueLeft.getTime(), dateValueRight.getTime()]
    } else {
      if (typeof date === 'string' && date) {
        const d = isInvalidDate(date)
        if (d) {
          dateValueLeft = d
          const parse = parseDate(d, formatType.value)
          showValue.value = [parse]
        }
      }
      downValue.value = [dateValueLeft]
      defaultValue.value = [dateValueLeft.getTime()]
    }
  }
  watch(
    () => props.modelValue,
    () => {
      getShowValue()
      // controlChange && controlChange(showValue.value, 'mounted')
    }
  )
  onMounted(() => {
    // 初始
    setDefaultPane()
    getShowValue()
  })
  // 顶部年或月面板切换
  const controlHeadChange = (index: number, val: Date | string) => {
    if (typeof val === 'string' && !isRange) {
      // 改变下拉面板类型，区间时不能切换
      activePane.value = val
    } else {
      if (isRange) {
        // 这里暂不作联左右两边联动处理
        if (index === 0) {
          // left
          downValue.value[0] = val
        } else if (index === 1) {
          downValue.value[1] = val
        }
      } else {
        downValue.value = [val]
      }
    }
  }
  // 下拉收起事件
  const toggleClick = (val: boolean) => {
    if (!val) {
      // 收起时，恢复下拉面板初始值
      setDefaultPane()
      getShowValue()
    }
  }
  const slideUp = () => {
    selectDown.value.slideUp()
  }
  // 可输入状态失去焦点时，判断值是否合法
  const blurHandler = (value: string | string[]) => {
    if (props.readonly || !value || value?.length === 0) {
      return
    }
    let val1 = ''
    let val2 = ''
    let newVal = value
    if (isRange) {
      val1 = value[0]
      val2 = value[1]
      const blurVal1 = isInvalidDate(val1)
      const blurVal2 = isInvalidDate(val2)
      if (!blurVal1 || !blurVal2) {
        // 其中一个或两个都不是时间格式
        newVal = []
      }
    } else {
      const blurVal = isInvalidDate(value as string)
      if (!blurVal) {
        // 不符合
        newVal = ''
      }
    }
    emitCom(newVal)
    slideUp()
  }
  const clearClick = () => {
    if (props.clear) {
      downValue.value = []
      slideUp()
      const val = isRange ? [] : ''
      emitCom(val)
    }
  }
</script>
