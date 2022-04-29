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
        v-for="(item, index) in days"
        :key="index"
        :class="[dayClass(item)]"
        @click="selectDay(item)"
      >
        {{ item.d }}
        <span v-if="innerText(item)" v-text="innerText(item)"></span>
      </a>
    </div>
    <div v-if="type === 'datetime'" class="calendar-time">
      <div class="calendar-time-input">
        <input
          v-model="state.hours"
          type="text"
          maxlength="2"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />:
        <input
          v-model="state.minutes"
          type="text"
          maxlength="2"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />:
        <input
          v-model="state.seconds"
          type="text"
          maxlength="2"
          oninput="value=value.replace(/[^\d]/g,'')"
          onfocus="this.select()"
        />
      </div>
      <a class="btn-time" @click="selectConfirm">确定</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, inject, watch } from 'vue'
  import prefixCls from '../prefix'
  interface Day {
    d: number
    y: number
    m: number
    n: number
    p: boolean
  }
  const props = withDefaults(
    defineProps<{
      modelValue: Date
      bodyValue: Date
      type: string // 日期类型
    }>(),
    {
      clear: true,
      readonly: true,
      direction: 0,
      type: 'date'
    }
  )
  const emits = defineEmits<{
    (e: 'click', value: Date): void
  }>()

  const state = reactive({
    selectValue: props.bodyValue,
    hours: props.modelValue.getHours(),
    minutes: props.modelValue.getMinutes(),
    seconds: props.modelValue.getSeconds()
  })
  watch(
    () => props.bodyValue,
    (val: Date) => {
      state.selectValue = val
    }
  )
  const setInnerText: any = inject(`${prefixCls}SetInnerText`, '')
  const setDisabledDate: any = inject(`${prefixCls}SetDisabledDate`, '')
  const days = computed(() => {
    let days = []
    const year = props.modelValue.getFullYear()
    const month = props.modelValue.getMonth()
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
    return days
  })
  const dayClass = (item: any) => {
    // 添加相对应样式，今天、禁用
    let time = new Date(item.y, item.m, item.d)
    let time2 = state.selectValue.toDateString() // 这里用初始值，否则选了上下年月，会一直选中一天
    return {
      'calendar-date-out': item.p || item.n, // 非当前月
      'calendar-date-today': time.toDateString() === new Date().toDateString(), // 今天的
      'calendar-date-select': time.toDateString() === time2, // 选中的
      'calendar-date-disabled': setDisabledDate && setDisabledDate(time, 'day') // 不能选择的
    }
  }
  const selectDay = (item: any) => {
    const disabledCls = dayClass(item)
    if (!disabledCls['calendar-date-disabled']) {
      const date = new Date(item.y, item.m, item.d)
      if (props.type === 'datetime') {
        // 有时分秒选择时不关闭，保存选中值
        state.selectValue = date
      } else {
        emits('click', date)
      }
    }
  }
  const selectConfirm = () => {
    state.hours = state.hours > 23 ? 23 : state.hours
    state.minutes = state.minutes > 59 ? 59 : state.minutes
    state.seconds = state.seconds > 59 ? 59 : state.seconds
    state.selectValue.setHours(state.hours)
    state.selectValue.setMinutes(state.minutes)
    state.selectValue.setSeconds(state.seconds)
    emits('click', state.selectValue)
  }
  const innerText = (item: any): string => {
    let time = new Date(item.y, item.m, item.d)
    return setInnerText && setInnerText(time)
  }
</script>
