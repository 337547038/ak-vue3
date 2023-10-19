<!-- Created by 337547038 on 2022/4/5. -->
<template>
  <SelectDown
    v-bind="$props"
    ref="selectDown"
    :model-value="showLabel"
    @clear="clearClick"
  >
    <ul :class="`${prefixCls}-select`">
      <li
        v-for="(item, index) in timeList"
        :key="index"
        :class="{ disabled: item.disabled, active: item.value === modelValue }"
        @click.stop="itemClick(item)"
      >
        {{ item.value }}
      </li>
    </ul>
  </SelectDown>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { SelectDown } from '../selectDown'
  import { ref, computed, watch, inject } from 'vue'
  interface Time {
    hours: number
    minutes: number
  }
  const props = withDefaults(
    defineProps<{
      modelValue: string
      start?: string
      end?: string
      step?: string
      minTime?: string
      maxTime?: string
      downHeight?: number
    }>(),
    {
      start: '09:00',
      end: '18:00',
      step: '00:30',
      minTime: '',
      maxTime: '',
      downHeight: 200
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
    (e: 'change', modelValue: string): void
    (e: 'clear'): void
  }>()

  // formItem
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const verifyTime = (num: number, type?: string): number => {
    let text = num
    if (type === 'h') {
      if (num < 0) {
        text = 0
      }
      if (num > 24) {
        text = 24
      }
    } else {
      if (num < 0) {
        text = 0
      }
      if (num > 59) {
        text = 59
      }
    }
    return text
  }
  /** 根据字符串时间转为小时和分钟
   *@params time 09:00
   *@return
   */
  const parseTime = (time: string): null | Time => {
    const values = (time || '').split(':')
    if (values.length >= 2) {
      const hours = verifyTime(Number.parseInt(values[0], 10))
      const minutes =
        hours === 24 ? 0 : verifyTime(Number.parseInt(values[1], 10)) // 不能出现24:10这种
      return {
        hours,
        minutes
      }
    } else if (time && time.indexOf(':') === -1) {
      throw new Error(`${time} 不是有效的时间格式`)
    }
    return null
  }
  const stringifyTime = (time: Time): string => {
    return `${padStartTime(time.hours)}:${padStartTime(time.minutes)}`
  }
  /** 比较两个时间大小
   *@params
   *@return
   */
  const compareTime = (time1: Time, time2: Time): number => {
    const minutes1 = time1.minutes + time1.hours * 60
    const minutes2 = time2.minutes + time2.hours * 60
    if (minutes1 === minutes2) {
      return 0
    }
    return minutes1 > minutes2 ? 1 : -1
  }
  /** 返回两位数值，不够时在前面补0
   *@params time数值
   *@return
   */
  const padStartTime = (time: number | string) => {
    return `${time}`.padStart(2, '0')
  }
  const nextTime = (time: Time, step: Time): Time => {
    const next = {
      hours: time.hours,
      minutes: time.minutes
    }
    next.minutes += step.minutes
    next.hours += step.hours
    next.hours += Math.floor(next.minutes / 60)
    next.minutes = next.minutes % 60
    return next
    // return `${padStartTime(verifyTime(next.hours))}:${padStartTime(verifyTime(next.minutes))}`
  }
  const timeList = computed(() => {
    const result = []
    let start = parseTime(props.start)
    const end = parseTime(props.end)
    const step = parseTime(props.step)
    const min = parseTime(props.minTime)
    const max = parseTime(props.maxTime)
    if (start && end && step) {
      while (compareTime(start, end) <= 0) {
        let disabled = false
        if (min && compareTime(start, min) < 0) {
          // 小于min的不可点击
          disabled = true
        }
        if (max && compareTime(max, start) < 0) {
          disabled = true
        }
        result.push({
          value: stringifyTime(start),
          disabled: disabled
        })
        start = nextTime(start, step)
      }
    }
    return result
  })
  const showLabel = ref([])
  if (props.modelValue) {
    showLabel.value = [props.modelValue]
  }
  const selectDown = ref()
  watch(
    () => props.modelValue,
    (val: string) => {
      if (val) {
        showLabel.value = [props.modelValue]
      } else {
        showLabel.value = []
      }
    }
  )
  const itemClick = (obj: { value: string; disabled: boolean }) => {
    if (obj.disabled) {
      return
    }
    showLabel.value = [obj.value]
    selectDown.value.slideUp()
    emits('update:modelValue', obj.value)
    emits('change', obj.value)
    controlChange && controlChange(obj.value)
    // evt.stopPropagation()
  }
  // 可清空
  const clearClick = () => {
    showLabel.value = []
    emits('update:modelValue', '')
    emits('clear')
    controlChange && controlChange('')
  }
</script>
