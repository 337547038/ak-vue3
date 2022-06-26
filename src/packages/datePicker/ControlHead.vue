<!-- Created by 337547038 on 2022/6/25. -->
<template>
  <div class="calendar-head">
    <a class="calendar-prev-year" @click="yearClick(0)" v-if="isShow(0)">«</a>
    <a
      v-if="activePanel === 'day'"
      class="calendar-prev-month"
      @click="monthClick(0)"
      >‹</a
    >
    <span>
      <a class="calendar-year-select" @click="panelTypeClick('year')">
        {{
          activePanel === 'year' ? `${year - 2}年－${year + 8}年` : `${year}年`
        }}
      </a>
      <a
        v-if="activePanel === 'day'"
        class="calendar-year-month"
        @click="panelTypeClick('month')"
        >{{ month + 1 }}月</a
      >
    </span>
    <a
      v-if="activePanel === 'day'"
      class="calendar-next-month"
      @click="monthClick(1)"
      >›</a
    >
    <a class="calendar-next-year" @click="yearClick(1)" v-if="isShow(0)">»</a>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  const props = withDefaults(
    defineProps<{
      activePanel: string // 当前面板
      value: Date
      type: string
      position?: 'left' | 'right' // 区间选择时有左右两个
    }>(),
    {
      position: 'left'
    }
  )
  const emits = defineEmits<{
    (e: 'change', value: Date | string): void
  }>()
  const year = computed(() => {
    return props.value.getFullYear()
  })
  const month = computed(() => {
    return props.value.getMonth()
  })
  const yearClick = (type: number) => {
    // 前后年切换点击
    // type=0表示减，1表示加
    // 仅在年面板时，+－10，其它时间+-1
    let num = 1
    if (props.activePanel === 'year') {
      num = 10
    }
    if (type === 0) {
      num = -num
    }
    const nextDate = new Date(props.value.setFullYear(year.value + num))
    emits('change', nextDate)
    //props.onChange(nextDate, props.position)
  }
  const monthClick = (type: number) => {
    // 前后月切换点击，只有在日期面板时显示，年或年月面板不显示
    // type=0表示减，1表示加
    let num = 1
    if (type === 0) {
      num = -num
    }
    const nextDate = new Date(props.value.setMonth(month.value + num))
    emits('change', nextDate)
  }
  const panelTypeClick = (type: string) => {
    emits('change', type)
  }
  const isShow = (type: number) => {
    // 0 往前 1 向后
    if (props.type.includes('Range')) {
      // 表示为区间
      if (props.position === 'left' && type) {
        // 隐藏右边的
        return false
      }
      if (props.position === 'right' && !type) {
        // 隐藏左边的
        return false
      }
    }
    return true
  }
</script>
