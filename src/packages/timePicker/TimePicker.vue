<!-- Created by 337547038 on 2022/4/5. -->
<template>
  <select-down
    v-bind="$props"
    ref="selectDownEl"
    disabledtime=""
    :model-value="showLabel"
    @clear="clearClick"
    @blur="blur"
    @toggle-click="toggleClick"
  >
    <div :class="{ [`${prefixCls}-time-picker`]: true, 'is-range': isRange }">
      <pane
        key="start"
        :time="formatTime[0]"
        :disabledTime="disabledTime"
        @click="selectClick('start', $event)"
      />
      <pane
        key="end"
        v-if="isRange"
        :time="formatTime[1]"
        :disabledTime="disabledTime"
        @click="selectClick('end', $event)"
      />
    </div>
  </select-down>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { SelectDown } from '../selectDown'
  import { computed, ref, inject } from 'vue'
  import Pane from './Pane.vue'

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
    (e: 'blur', modelValue: string | string[]): void
    (e: 'clear'): void
  }>()
  const selectDownEl = ref()
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
  // formItem
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
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
  const selectClick = (position: string, time: any) => {
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
      emitsUpdate(time)
    }
  }
  const emitsUpdate = (start: Time, end?: Time) => {
    let selectTime: string[] | string = stringifyTime(start)
    if (props.isRange) {
      // 比较下两个时间的大小
      if (!end) {
        end = start
      }
      const st = start.h * 3600 + start.m * 60 + start.s
      const et = end.h * 3600 + end.m * 60 + end.s
      if (st > et) {
        // 开始时间大小结束
        // todo 当存在disabledTime方法时，两个时间直接交换会在问题，为避免出现disabled项，点击小时会自动修正分钟在可选范围，会多次触发click事件，导致交换后的时间会被重新修正
        selectTime = [stringifyTime(end), stringifyTime(start)]
      } else {
        selectTime = [stringifyTime(start), stringifyTime(end)]
      }
    }
    emits('update:modelValue', selectTime)
    controlChange && controlChange(selectTime)
  }
  const clearClick = () => {
    emits('update:modelValue', '')
    emits('clear')
    controlChange && controlChange('')
  }
  // 可输入时的失焦事件
  const blur = (val: string | string[]) => {
    // 检查当前输入值合法性
    if (!props.filterable) {
      return
    }
    if (!val) {
      clearClick()
    } else {
      let blurTime: any = [parseTime(val.toString())]
      if (props.isRange) {
        // isRange时为数组
        blurTime = [parseTime(val[0]), parseTime(val[1])]
      }
      let disabled = false
      for (const b in blurTime) {
        const time = blurTime[b]
        if (typeof time === 'object') {
          // 输入时间可转为正确时间，并检查当前时间有没存在disabled
          if (typeof props.disabledTime === 'function') {
            const list = ['h', 'm', 's']
            for (const key in list) {
              disabled = props.disabledTime(
                Object.assign({}, time, { a: time.h }),
                list[key]
              )
              // 手动输入时其中一个不符合要求都恢复原来的
              if (disabled) {
                break
              }
            }
          }
        }
        if (disabled) {
          break
        }
      }
      // 输入符合要求
      if (!disabled) {
        emitsUpdate(blurTime[0], blurTime[1])
        emits('blur', val)
        return
      }
      // 输入的时间存在问题，恢复原来的
      selectDownEl.value.setValue(showLabel.value)
    }
  }
</script>
