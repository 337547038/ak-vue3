<template>
  <div class="time-picker">
    <ul v-for="(list, index) in timeList" :key="index">
      <li
        v-for="item in list.max"
        :key="item"
        :class="getCls(item - 1, list.type)"
        @click="timeClick(item - 1, list.type, $event)"
      >
        {{ padStart(item - 1) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { Time } from './types'

  const props = withDefaults(
    defineProps<{
      position?: 'start' | 'end'
      time: Time
      disabledTime?: (value: Time, type: string) => boolean
    }>(),
    {
      position: 'start'
    }
  )
  const emits = defineEmits<{
    (e: 'click', modelValue: string): void
  }>()
  const timeList = [
    {
      max: 24,
      type: 'h'
    },
    {
      max: 60,
      type: 'm'
    },
    {
      max: 60,
      type: 's'
    }
  ]
  // 记录每列第可用的值
  const timeListStatus: any = {
    h: {},
    m: {},
    s: {}
  }
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
  /** 返回当前时间为激活及禁用状态
   *@param time 当前时间
   *@param type 时间类型h/m/s
   *@return 当前时间样式
   */
  const getCls = (time: number, type: string) => {
    let disabled = false
    if (props.disabledTime) {
      disabled = props.disabledTime(
        Object.assign({}, props.time, { a: time }),
        type
      ) // a表示当前时间
      timeListStatus[type][time] = disabled
    }
    return {
      active: props.time && props.time[type] === time,
      disabled
    }
  }
  /** 判断time值是否为禁用状态，自动选择一个可用状态的
   *@param time 当前时间
   *@param type 时间类型可为m,s
   *@param timeObj 当前显示的时间
   *@return 返回修改后的值
   */
  const setNextTime = (time: number, type: string, timeObj: any) => {
    if (typeof props.disabledTime === 'function') {
      // 表示有禁用
      setTimeout(() => {
        const list = timeListStatus[type] || {}
        if (list[time]) {
          // 表示当前时间是禁用的，则从列表里选择一个可用的
          let isEnable = 60
          Object.keys(list).forEach(item => {
            if (!list[item]) {
              // 表示当前可用的
              if (parseInt(item) < isEnable) {
                isEnable = parseInt(item)
              }
            }
          })
          isEnable = isEnable === 60 ? 0 : isEnable
          timeObj[type] = isEnable
          //emitsUpdate(timeObj)
          // 当前类型是m，还需处理s
          if (type === 'm') {
            setNextTime(timeObj.s, 's', timeObj)
          }
          emits('click', timeObj)
        }
      }, 500)
    }
  }
  const timeClick = (time: number, type: string, evt: MouseEvent) => {
    const selectTime = JSON.parse(JSON.stringify(props.time))
    const { className } = evt.target as HTMLInputElement
    if (className.indexOf('disabled') !== -1) {
      return
    }
    switch (type) {
      case 'h':
        selectTime.h = time
        setNextTime(selectTime.m, 'm', selectTime)
        break
      case 'm':
        selectTime.m = time
        setNextTime(selectTime.s, 's', selectTime)
        break
      case 's':
        selectTime.s = time
        break
    }
    emits('click', selectTime) // setNextTime也会触发click事件，在接收时可根据需要作处理
  }
</script>
