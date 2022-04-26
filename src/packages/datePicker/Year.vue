<!-- Created by 337547038 on 2018/12/24 0024. -->
<!--年面板-->
<template>
  <div class="calendar-year">
    <a
      v-for="(item, index) in yearList"
      :key="index"
      :class="[getClass(item)]"
      @click="selectYear(item, $event)"
      v-text="item"
    ></a>
  </div>
</template>

<script lang="ts" setup>
  import { computed, inject } from 'vue'
  import prefixCls from '../prefix'
  const props = withDefaults(
    defineProps<{
      modelValue: Date
      bodyValue: Date
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'click', value: string): void
  }>()
  const yearList = computed(() => {
    // 每次显示十年，显示前面四年，后面7年
    let array = []
    const year = props.bodyValue.getFullYear()
    for (let i = year - 4; i <= year + 7; i++) {
      array.push(i)
    }
    return array
  })
  const selectYear = (item: number) => {
    // 点击后直接将所选值交给父组件处理
    // 如果带有样式calendar-date-disabled的，不能点击
    let disabledCls = getClass(item)
    if (!disabledCls['calendar-date-disabled']) {
      emits('click', item.toString())
    }
  }
  const setDisabledDate: any = inject(`${prefixCls}SetDisabledDate`, '')
  const getClass = (item: number) => {
    let time = new Date(item.toString())
    return {
      'calendar-date-select': item === props.modelValue.getFullYear(),
      'calendar-date-disabled': setDisabledDate && setDisabledDate(time, 'year') // 不能选择的
    }
  }
</script>
