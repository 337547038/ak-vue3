<template>
  <div
    :class="{
      'calendar-year': pane === 'year',
      'calendar-months': pane === 'month'
    }"
  >
    <a
      v-for="(item, index) in list"
      :key="item"
      :class="getClass(item, index)"
      @click="selectDate(item, index)"
      >{{ item }}</a
    >
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, watch } from 'vue'

  const props = withDefaults(
    defineProps<{
      value: Date // 显示于面板的值
      defaultDate: number // 时间戳
      disabledDate?: (val: Date, type: string) => boolean
      pane: string
    }>(),
    {
      pane: 'year'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string | string[]): void
    (e: 'click', value: Date): void
  }>()
  const checkedValue = ref(props.defaultDate)
  watch(
    () => props.defaultDate,
    () => {
      checkedValue.value = props.defaultDate
    }
  )
  const list = computed(() => {
    let temp: string[] = []
    if (props.pane === 'year') {
      // 每次显示十年，显示前面四年，后面7年
      const year = props.value.getFullYear()
      for (let i = year - 4; i <= year + 7; i++) {
        temp.push(i.toString())
      }
    } else if (props.pane === 'month') {
      temp = [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ]
    }
    return temp
  })

  const isDisabled = (date: Date) => {
    return props.disabledDate && props.disabledDate(date, props.pane)
  }
  const getClass = (item: string, index: number) => {
    let time = new Date(item)
    const defaultDate = new Date(checkedValue.value)
    let dateSelect = item === defaultDate.getFullYear().toString() // 年
    const current = new Date()
    let today = time.getFullYear() === current.getFullYear()
    if (props.pane === 'month') {
      time = new Date(props.value.getFullYear(), index)
      if (props.value.getFullYear() === defaultDate.getFullYear()) {
        // 年相同时才存在选中的月分
        dateSelect = index === defaultDate.getMonth()
      }
      const fullYear = props.value.getFullYear()
      today =
        current.getFullYear().toString() + current.getMonth() ===
        fullYear.toString() + index
    }
    return {
      'calendar-date-today': today, // 当年或当前月
      'calendar-date-select': dateSelect,
      'calendar-date-disabled': isDisabled(time) // 不能选择的
    }
  }
  const selectDate = (year: string, index: number) => {
    let time = new Date(parseInt(year), props.value.getMonth())
    if (props.pane === 'month') {
      time = new Date(props.value.getFullYear(), index)
    }
    // 点击后更新当前组件默认值，可展示选中样式
    // console.log(time)
    if (!isDisabled(time)) {
      checkedValue.value = time.getTime()
      emits('click', time)
    }
  }
</script>
