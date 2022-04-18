<!-- Created by 337547038 on 2022/4/5. -->
<template>
  <select-down
    v-bind="$props"
    ref="selectDown"
    disabledtime=""
    :model-value="showLabel"
    @clear="clearClick"
    @blur="blur"
    @toggle-click="toggleClick"
  >
    <div :class="`${prefixCls}-time-picker`">
      <pane
        :time="formatTime[0]"
        :disabledTime="disabledTime"
        @click="selectClick('start', $event)"
      />
    </div>
  </select-down>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import SelectDown from '../selectDown/SelectDown.vue'
  import { ref, computed, watch } from 'vue'
  import Pane from './pane.vue'

  const props = withDefaults(
    defineProps<{
      modelValue: string | string[]
      disabledTime?: (value: Time, type: string) => boolean
      filterable?: boolean
      isRange?: boolean
    }>(),
    {}
  )

  interface Time {
    h: number
    m: number
    s: number
  }

  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string | string[]): void
    (e: 'blur', modelValue: string): void
    (e: 'clear'): void
  }>()
  //const showLabel = ref<string[]>([])
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
  const stringifyTime = (time: Time): string => {
    return `${padStart(time.h)}:${padStart(time.m)}:${padStart(time.s)}`
  }
  /** 字符串时间转obj
   *@param time '00:00:00'
   *@return
   */
  const parseTime = (time: string) => {
    const ts = time?.split(':')
    if (ts?.length === 3) {
      return {
        h: parseInt(ts[0]) < 23 ? parseInt(ts[0]) : 23,
        m: parseInt(ts[1]) < 59 ? parseInt(ts[1]) : 59,
        s: parseInt(ts[2]) < 59 ? parseInt(ts[2]) : 59
      }
    }
    return time
  }
  /** 格式时间处理
   */
  const formatTime = computed(() => {
    let time: any = []
    if (props.isRange) {
      if (props.modelValue && props.modelValue.length === 2) {
        time = [parseTime(props.modelValue[0]), parseTime(props.modelValue[1])]
      }
    } else {
      if (props.modelValue) {
        time = [parseTime(props.modelValue.toString())]
      }
    }
    return time
  })
  const showLabel = computed(() => {
    let val: string[] = []
    if (props.isRange) {
      if (props.modelValue && props.modelValue.length === 2) {
        val = [
          stringifyTime(formatTime.value[0]),
          stringifyTime(formatTime.value[1])
        ]
      }
    } else {
      if (props.modelValue) {
        val = [stringifyTime(formatTime.value[0])] // 经过处理的时间，保证是有效范围
      }
    }
    return val
  })
  const getNowTime = (type?: boolean) => {
    const date = new Date()
    return {
      h: type ? date.getHours() + 1 : date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    }
  }
  /** 当值为空时，获取焦点时设置了当前时间
   *@param val
   *@return
   */
  const toggleClick = (val: boolean) => {
    if (!val) {
      return
    }
    if (
      !props.modelValue ||
      (props.modelValue && props.modelValue.length === 0)
    ) {
      emitsUpdate(getNowTime(), getNowTime(true))
    }
  }
  const selectClick = (position: string, time: Time) => {
    if (props.isRange) {
      let start = formatTime.value[0]
      let end = formatTime.value[1]
      if (position === 'start') {
        start = time
      } else if (position === 'end') {
        end = time
      }
      emitsUpdate(start, end)
    } else {
      emitsUpdate(time, time)
    }
  }
  // 记录每列第可用的值
  const emitsUpdate = (start: Time, end: Time) => {
    let selectTime: string[] | string = stringifyTime(start)
    if (props.isRange) {
      selectTime = [stringifyTime(start), stringifyTime(end)]
    }
    emits('update:modelValue', selectTime)
  }
  const clearClick = () => {
    emits('update:modelValue', '')
    emits('clear')
  }
  // 可输入时的失焦事件
  const blur = (val: string) => {
    /*if (props.filterable) {
      if (!val) {
        clearClick()
      } else {
        const time = parseTime(val)
        if (typeof time === 'object') {
          // 输入时间可转为正确时间
          emitsUpdate(time)
        } else {
          clearClick()
        }
      }
      emits('blur', val)
    }*/
  }
</script>
