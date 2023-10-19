<template>
  <div
    :class="{ [prefixCls + '-slider']: true, disabled: disabledOk }"
    ref="sliderEl"
  >
    <div :class="`${prefixCls}-slider-runway`" @click="slierClick">
      <span
        class="slider-control"
        :style="{ left: startLeft + '%' }"
        @mousedown.stop="mouseDown('left', $event)"
        @click.stop="clickStop"
      >
        <i v-html="tooltipStart" class="slider-tooltip" v-if="showTooltip"></i>
      </span>
      <span
        class="slider-control"
        v-if="range"
        @mousedown.stop="mouseDown('right', $event)"
        @click.stop="clickStop"
        :style="{ left: endLeft + '%' }"
      >
        <i v-html="tooltipEnd" class="slider-tooltip" v-if="showTooltip"></i>
      </span>
      <span class="slider-bar" :style="sliderBarStyle"></span>
      <i
        class="slider-stop"
        v-for="item in sliderStops"
        :key="item"
        :style="{ left: item }"
      ></i>
      <span
        class="slider-marks"
        v-for="(item, index) in marksList"
        :key="index"
        :style="{ left: item.left }"
        ><i v-html="item.label" class="slider-marks-text"></i
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { computed, watch, onMounted, ref } from 'vue'
  import { getFormDisabled } from '../util/form'
  import { getOffset } from '../util/dom'

  interface Marks {
    [key: number]: string
  }

  const props = withDefaults(
    defineProps<{
      modelValue?: number | number[]
      min?: number
      max?: number
      disabled?: boolean
      step?: number
      showStops?: boolean // 是否显示间断点
      showTooltip?: boolean // 显示提示
      formatTooltip?: (num: number) => void
      marks?: Marks
      trigger?: string // 触发方式，默认鼠标弹起时改变，任何值时为移动时改变
    }>(),
    {
      modelValue: 0,
      step: 1,
      min: 0,
      max: 100,
      disabled: false
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: number[] | number): void
    (e: 'change', modelValue: number[] | number): void
  }>()
  const sliderEl = ref()
  const startLeft = ref(0)
  const endLeft = ref(0)
  const disabledOk = computed(() => {
    return getFormDisabled(props.disabled) || false
  })
  // 格式化返回提示语
  const tooltipStart = computed(() => {
    if (props.showTooltip) {
      const val = percentageToNumber(startLeft.value)
      return props.formatTooltip ? props.formatTooltip(val) : val
    } else {
      return ''
    }
  })
  const tooltipEnd = computed(() => {
    if (props.showTooltip) {
      const val = percentageToNumber(endLeft.value)
      return props.formatTooltip ? props.formatTooltip(val) : val
    } else {
      return ''
    }
  })
  // 选中范围开始位置和长度
  const sliderBarStyle = computed(() => {
    if (range.value) {
      let startLeft2 = startLeft.value
      if (startLeft.value > endLeft.value) {
        startLeft2 = endLeft.value
      }
      return {
        left: startLeft2 + '%',
        width: Math.abs(endLeft.value - startLeft.value) + '%'
      }
    } else {
      return {
        left: '0px',
        width: startLeft.value + '%'
      }
    }
  })
  // 计算间断点的位置和个数，返回每个点的位置
  const sliderStops = computed(() => {
    const stopList = []
    if (props.showStops) {
      // (最大值－最小值)/步长＝个数，即分多少步
      const num = (props.max - props.min) / props.step
      // 100/num=每一步所占的比例
      for (let i = 1; i < num; i++) {
        stopList.push((i * 100) / num + '%')
      }
    }
    return stopList
  })
  // 转换mark为key,value形式
  const marksList = computed(() => {
    const list = []
    if (props.marks) {
      for (const i in props.marks) {
        list.push({
          label: props.marks[i],
          left: i + '%'
        })
      }
    }
    return list
  })
  const range = computed(() => {
    // 根据值判断是否为范围选择，数组时且长度为2时 为是
    return typeof props.modelValue === 'object' && props.modelValue.length === 2
  })
  const elWidth = computed(() => {
    // 返回当前可滑动的宽
    return sliderEl?.value?.offsetWidth
  })
  // 获取每步长所占的百分比
  const getStepPercent = computed(() => {
    return 100 / ((props.max - props.min) / props.step)
  })
  const percentageToNumber = (currentValue: number) => {
    return Math.round(
      ((props.max - props.min) * currentValue) / 100 + props.min
    )
  }
  const slierClick = (evt: MouseEvent) => {
    if (disabledOk.value) {
      return
    }
    const offsetLeft = getOffset(sliderEl.value).left // 当前元素偏移位置
    // 当前点击位置所在百分比位置
    let d = ((evt.pageX - offsetLeft) / elWidth.value) * 100
    // 定位到当前步数位置*每步所占的百分比
    if (d < 0) {
      d = 0
    }
    if (d > 100) {
      d = 100
    }
    const index = parseInt(Math.round(d / getStepPercent.value).toString()) // 第几个分隔点
    const left = getStepPercent.value * index // 确保定位在分隔点
    if (range.value) {
      const offsetStart = Math.abs(d - startLeft.value) // 到起点的距离
      const offsetEnd = Math.abs(d - endLeft.value) // 到终点的距离
      if (offsetStart < offsetEnd) {
        // 表示离起点比较近，则移动左则点
        startLeft.value = left
      } else {
        // 离终点近
        endLeft.value = left
      }
    } else {
      startLeft.value = left
    }
    // 处理重叠
    /* console.log(this.startLeft)
    console.log(this.endLeft)
    console.log(Math.abs(this.startLeft - this.endLeft).toFixed(4))
    console.log(this.getStepPercent.toFixed(4))
    console.log(Number(Math.abs(this.startLeft - this.endLeft).toFixed(4)) < Number(this.getStepPercent.toFixed(4))) */
    if (
      Number(Math.abs(startLeft.value - endLeft.value).toFixed(4)) <
        Number(getStepPercent.value.toFixed(4)) ||
      startLeft.value.toFixed(2) === endLeft.value.toFixed(2)
    ) {
      // 重叠点所在的位置
      console.log('重叠点所在的位置')
      if (startLeft.value === 0) {
        // 将结束点往后一个单位
        endLeft.value = getStepPercent.value
      } else {
        /* // 将开始点往前一个单位 */
        if (index < 1) {
          return
        }
        startLeft.value = getStepPercent.value * (index - 1)
      }
    }
    // 鼠标弹起时，如果起始值大于终点值，则互换下
    if (startLeft.value > endLeft.value) {
      emit('change')
    } else {
      emit()
    }
  }
  const emit = (type?: string) => {
    let val: number | number[] = 0
    if (range.value) {
      const min = percentageToNumber(startLeft.value)
      const max = percentageToNumber(endLeft.value)
      val = [min, max]
      if (min > max && type === 'change') {
        val = [max, min]
      }
    } else {
      // 单个
      val = percentageToNumber(startLeft.value)
    }
    emits('update:modelValue', val)
    emits('change', val)
  }
  const mouseDown = (direction: string, evt: MouseEvent) => {
    if (disabledOk.value) {
      return
    }
    const { offsetLeft } = evt.target as HTMLElement
    const t = evt.pageX - offsetLeft
    document.onmousemove = ev => {
      let distance = ((ev.pageX - t) / elWidth.value) * 100 // 偏移距离转百分比
      if (distance < 0) {
        distance = 0
      }
      if (distance > 100) {
        distance = 100
      }
      if (direction === 'left') {
        startLeft.value = distance
      } else {
        endLeft.value = distance
      }
      props.trigger && slierClick(ev)
    }
    document.onmouseup = ev => {
      if (!props.trigger) {
        // 默认鼠标弹起时改变
        slierClick(ev)
      }
      document.onmousemove = null
      document.onmouseup = null
    }
    evt.preventDefault()
    evt.stopPropagation()
  }
  const clickStop = (evt: MouseEvent) => {
    evt.preventDefault()
    evt.stopPropagation()
  }
  // 将具体值转百分比
  const numberToPercentage = (value: number) => {
    // (当前值－最小值)/(最大值-最小值)*100%＝当前值所占的百分比
    // return Math.round((value - this.min) / (this.max - this.min) * 100)
    return ((value - props.min) / (props.max - props.min)) * 100
  }
  const setDefaultValue = (val: number, direction: string) => {
    // 控制在最小和最大之间
    let value = val
    if (val < props.min) {
      value = props.min
    }
    if (val > props.max) {
      value = props.max
    }
    // (当前值－最小值)/(最大值-最小值)*100%＝当前值所占的百分比
    const currentValue = numberToPercentage(value)
    if (direction === 'left') {
      startLeft.value = currentValue
    }
    if (direction === 'right') {
      endLeft.value = currentValue
    }
  }
  const init = () => {
    // 根据初始值定位初始位置
    if (range.value) {
      let val1 = 0
      let val2 = 0
      if (typeof props.modelValue === 'object') {
        val1 = props.modelValue[0]
        val2 = props.modelValue[1]
      }
      setDefaultValue(val1, 'left')
      setDefaultValue(val2, 'right')
    } else {
      // 单个时
      setDefaultValue(props.modelValue as number, 'left')
    }
  }
  watch(
    () => props.modelValue,
    () => {
      init()
    }
  )
  onMounted(() => {
    init()
  })
</script>
