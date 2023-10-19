<!--Created by 337547038 on 2018/9/5.-->
<template>
  <SelectDown
    ref="selectDown"
    :placeholder="placeholder"
    :endPlaceholder="endPlaceholder"
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
    :rangeSeparator="rangeSeparator"
    :isRange="isRange"
    @clear="clearClick"
    @blur="blurHandler"
    @toggle-click="toggleClick"
  >
    <div :class="{ [`${prefixCls}-date-picker`]: true }" @click.stop="">
      <template v-for="(item, index) in downValue" :key="index">
        <div class="calendar">
          <ControlHead
            :type="type"
            :activePanel="activePane"
            :value="item"
            :position="index === 0 ? 'left' : 'right'"
            @change="controlHeadChange(index, $event)"
          />
          <div class="calendar-body">
            <Day
              :value="item"
              :default-date="defaultValue[index] || -1"
              :pane="activePane"
              @click="onClickDay($event, index)"
              :type="type"
              :index="index as number"
              :disabledDate="disabledDate"
              :innerText="innerText"
              v-if="activePane === 'day'"
            />
            <YearMonth
              :value="item"
              :default-date="defaultValue[index] || -1"
              :pane="activePane"
              :disabledDate="disabledDate"
              @click="onClickYearMonth(index, $event)"
              v-else
            />
          </div>
        </div>
      </template>
    </div>
  </SelectDown>
</template>
<script lang="ts" setup>
  import { ref, inject, watch, computed, onMounted } from 'vue'
  import prefixCls from '../prefix'
  import { SelectDown } from '../selectDown'
  import ControlHead from './ControlHead.vue'
  import YearMonth from './YearMonth.vue'
  import Day from './Day.vue'

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
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string | string[]): void
    (e: 'change', value: string | string[], val: Date | Date[]): void
  }>()

  const selectDown = ref()
  const downValue = ref() // 下拉面板的值
  const showValue = ref([]) // 显示于输入框的值
  const isRange = props.type.includes('Range') // 是否为区间
  const defaultValue = ref([]) // 经过时间格式化的初始值
  const activePane = ref('day')
  const rangChecked = ref([])
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
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
    return formatType.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, result => {
      const value = formatObj[result]
      if (result === 'w')
        return ['日', '一', '二', '三', '四', '五', '六'][value]
      return value
    })
  }
  const isInvalidDate = (val: string) => {
    // 有效时返回有效时间
    const d = new Date(val)
    if (d.toString() !== 'Invalid Date') {
      return d
    }
    // 可能为时间戳，尝试转为数字
    if (!/[^\d]/g.test(val)) {
      const d2 = new Date(parseInt(val, 10))
      if (d2.toString() !== 'Invalid Date') {
        return d2
      }
    }
    // 尝试将年月日中文替换
    const d3 = new Date(val?.replace(/['年'|'月']/g, '-').replace('日', ''))
    if (d3.toString() !== 'Invalid Date') {
      return d3
    }
    console.warn('无效时间:' + val)
    return false
  }
  // 初始化完成或是当modelValue变化时，返回指定的输出格式
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
          const parse = parseDate(d, formatType.value)
          showValue.value = [parse]
          defaultValue.value = [d.getTime()]
        }
      }
      downValue.value = [dateValueLeft]
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
  const rangOnChange = (rangChecked: Date[]) => {
    if (rangChecked.length === 2) {
      // 收起，并排序
      if (rangChecked[0] > rangChecked[1]) {
        // 前面的大
        slideUp([rangChecked[1], rangChecked[0]])
      } else {
        slideUp([rangChecked[0], rangChecked[1]])
      }
    } else if (rangChecked.length === 1) {
      // 当选择一个时如需将另外一个选择移除
      /*if (index === 0) {
    }*/
    }
  }
  const onClickDay = (value: { date: Date; type?: string }, index: number) => {
    if (isRange) {
      if (props.type === 'datetimeRange') {
        // 一定是点击确认才能关闭，多次点击rangChecked会超过两个
        if (value.type === 'confirm') {
          // 点确认，取当前的值和rangChecked最后一个值
          let val1 = new Date()
          if (rangChecked.value.length !== 0) {
            val1 = rangChecked.value[rangChecked.value.length - 1]
          }
          rangOnChange([val1, value.date])
        } else if (index === 0) {
          rangChecked.value.push(value.date)
        }
      } else {
        rangChecked.value.push(value.date)
        rangOnChange(rangChecked.value)
      }
    } else {
      slideUp([value.date])
    }
  }
  // 顶部年或月面板切换
  const controlHeadChange = (index: number, val: Date | string) => {
    if (typeof val === 'string' && !isRange) {
      // 改变下拉面板类型，区间时不能切换
      activePane.value = val
    } else if (typeof val === 'object') {
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
    rangChecked.value = []
  }
  const slideUp = (date: Date[]) => {
    let label: string[] = []
    let mv: string[] | string = '' // modelValue的值
    downValue.value = date
    if (isRange) {
      if (date?.length === 2) {
        const parse1 = parseDate(date[0], formatType.value)
        const parse2 = parseDate(date[1], formatType.value)
        label = [parse1, parse2]
        mv = [parse1, parse2]
        if (props.valueFormat) {
          const parse3 = parseDate(date[0], props.valueFormat)
          const parse4 = parseDate(date[1], props.valueFormat)
          mv = [parse3, parse4]
        }
      }
    } else {
      if (date?.length === 1) {
        mv = parseDate(date[0], formatType.value)
        label = [mv]
        if (props.valueFormat) {
          mv = parseDate(date[0], props.valueFormat)
        }
      }
    }
    showValue.value = label
    emits('update:modelValue', mv)
    emits('change', mv, isRange ? date : date[0] || '')
    controlChange && controlChange(mv)
    selectDown.value.slideUp()
  }
  // 可输入状态失去焦点时，判断值是否合法
  const blurHandler = (value: string, index: number) => {
    if (props.readonly || !value) {
      return
    }
    const blurVal = isInvalidDate(value)
    if (blurVal) {
      // 输入合法，关闭下拉
      //console.log('onblur')
      //console.log(blurVal)
      if (isRange) {
        if (index === 1) {
          // 区间时第二个输入框
          slideUp([downValue.value[0], blurVal])
        } else {
          slideUp([blurVal, downValue.value[1]]) // 失去焦点时更新相关值，不收起
        }
      } else {
        slideUp([blurVal]) // 失去焦点时更新相关值，不收起
      }
    }
  }
  const clearClick = () => {
    if (props.clear) {
      slideUp([])
    }
  }
  const onClickYearMonth = (index: number, val: Date) => {
    if (props.type === activePane.value) {
      slideUp([val])
    } else if (props.type === 'monthRange') {
      rangChecked.value.push(val)
      rangOnChange(rangChecked.value)
    } else {
      let paneType = ''
      if (activePane.value === 'year') {
        paneType = 'month'
      }
      if (activePane.value === 'month') {
        paneType = 'day'
      }
      if (paneType) {
        activePane.value = paneType
      }
      downValue.value[index] = val
    }
  }
</script>
