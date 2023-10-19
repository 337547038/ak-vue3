<!-- Created by 337547038 on 2018/12/24 0024. -->
<!--日期面板-->
<template>
  <div class="calendar-days">
    <div class="calendar-week">
      <a>日</a>
      <a>一</a>
      <a>二</a>
      <a>三</a>
      <a>四</a>
      <a>五</a>
      <a>六</a>
    </div>
    <div class="calendar-list">
      <a
        v-for="(item, i) in daysList"
        :key="i"
        :class="[dayClass(item)]"
        @click="selectDay(item)"
        ><span>
          {{ item.d }}
          <i v-if="innerTextEvent(item)" v-text="innerTextEvent(item)"></i
        ></span>
      </a>
    </div>
    <div
      v-if="type === 'datetime' || type === 'datetimeRange'"
      class="calendar-time"
    >
      <div class="calendar-time-input">
        <input
          v-model.number="dateTime.hours"
          type="text"
          maxlength="2"
          @input="dateTimeChange($event, 'hours')"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />:
        <input
          v-model.number="dateTime.minutes"
          type="text"
          maxlength="2"
          @input="dateTimeChange($event, 'minutes')"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />:
        <input
          v-model.number="dateTime.seconds"
          type="text"
          maxlength="2"
          @input="dateTimeChange($event, 'seconds')"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />
      </div>
      <a
        class="btn-time"
        v-if="
          props.type === 'datetime' ||
          (props.type === 'datetimeRange' && props.index === 1)
        "
        @click="selectConfirm"
        >确定</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { watch, ref } from 'vue'

  interface Day {
    d: number
    y: number
    m: number
    n?: boolean
    p?: boolean
  }

  /*  interface DateTime {
    hours: string
    minutes: string
    seconds: string
  }*/

  const props = withDefaults(
    defineProps<{
      value: Date // 显示于面板的值
      defaultDate: number // 传进来的初始值，在当前面板点击选中时会改变
      type: string
      disabledDate?: (val: Date, type: string) => boolean
      innerText?: (val: Date) => string
      index: number
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'click', val: { date: Date; type?: string }): void
  }>()
  watch(
    () => props.value,
    () => {
      getDaysList(props.value)
      if (props.defaultDate !== -1) {
        defaultDate.value = props.defaultDate
      }
    }
  )
  const daysList = ref([])
  const dateTime = ref({ hours: '', minutes: '', seconds: '' })
  const defaultDate = ref(props.defaultDate)
  const padStart = (number: number | string) => {
    return `${number}`.padStart(2, '0')
  }
  const getDaysList = (date: Date) => {
    const days: Day[] = []
    const year = date.getFullYear()
    const month = date.getMonth()
    const time = new Date(year, month, 1)
    // 计算上个月剩多少天
    time.setDate(0) // 切换到上个月的最后一天
    let lastDay = time.getDate() // 当月天数
    const week = time.getDay() // 星期几，前面已切换为上月最后一天，这里表示上个月最后一天是星期几
    let count = week + 1 // 星期天开始
    while (count > 0) {
      days.push({
        d: lastDay - count + 1,
        y: month > 0 ? year : year - 1, // 0为1月，即上一年
        m: month > 0 ? month - 1 : 11,
        p: true
      })
      count--
    }
    // 当前月
    time.setMonth(time.getMonth() + 2, 0) // 切换到当前月份的最后一天，+2是个月了，0再切换到上个月，即当前月
    lastDay = time.getDate() // 当月天数
    for (let i = 1; i <= lastDay; i++) {
      days.push({
        d: i,
        y: year,
        m: month
      })
    }
    // 下个月
    for (let i = 1; days.length < 42; i++) {
      days.push({
        d: i,
        y: month < 11 ? year : year + 1,
        m: month < 11 ? month + 1 : 0,
        n: true
      })
    }
    daysList.value = days
    dateTime.value = {
      hours: padStart(date.getHours()),
      minutes: padStart(date.getMinutes()),
      seconds: padStart(date.getSeconds())
    }
  }
  getDaysList(props.value)
  const isDisabled = (date: Date) => {
    return props.disabledDate && props.disabledDate(date, 'day')
  }
  const dayClass = (item: Day) => {
    // 添加相对应样式，今天、禁用
    const time = new Date(item.y, item.m, item.d)
    const time2 = new Date(defaultDate.value).toDateString() // 这里用初始值，否则选了上下年月，会一直选中一天
    return {
      'calendar-date-out': item.p || item.n, // 非当前月
      'calendar-date-today': time.toDateString() === new Date().toDateString(), // 今天的
      'calendar-date-select': time.toDateString() === time2, // 选中的
      'calendar-date-disabled': isDisabled(time) // 不能选择的
    }
  }
  const selectDay = (item: Day) => {
    const date = new Date(
      item.y,
      item.m,
      item.d,
      parseInt(dateTime.value.hours, 10),
      parseInt(dateTime.value.minutes, 10),
      parseInt(dateTime.value.seconds, 10)
    )
    if (!isDisabled(date)) {
      // const date = new Date(item.y, item.m, item.d)
      defaultDate.value = date.getTime()
      if (props.type === 'datetime') {
        // 有时分秒选择时不关闭，保存选中值
      } else {
        emits('click', { date: date })
      }
    }
  }
  const innerTextEvent = (item: Day) => {
    const time = new Date(item.y, item.m, item.d)
    return props.innerText && props.innerText(time)
  }
  const selectConfirm = () => {
    let newDate = props.value
    if (defaultDate.value !== -1) {
      newDate = new Date(defaultDate.value)
    }
    emits('click', { date: newDate, type: 'confirm' })
  }
  const dateTimeChange = (evt: MouseEvent, type: string) => {
    const { value } = evt.target as HTMLInputElement
    let newDate = props.value
    if (defaultDate.value !== -1) {
      newDate = new Date(defaultDate.value)
    }
    const num = parseInt(value, 10)
    if (type === 'hours' && num < 24) {
      newDate.setHours(num)
    }
    if (type === 'minutes' && num < 59) {
      newDate.setMinutes(num)
    }
    if (type === 'seconds' && num < 59) {
      newDate.setSeconds(num)
    }
    defaultDate.value = newDate.getTime()
    emits('click', { date: newDate })
  }
</script>
