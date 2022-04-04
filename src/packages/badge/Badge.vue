<!-- Created by 337547038 on $. -->
<template>
  <span :class="{ [prefixCls + '-badge']: true, dot: isDot, [type]: true }">
    <slot></slot>
    <sup>{{ showValue }}</sup>
  </span>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      value: number | string
      dot?: boolean
      max?: number
      type?: 'primary' | 'success' | 'warning' | 'danger'
    }>(),
    {
      dot: false,
      max: 99,
      type: 'danger'
    }
  )

  const showValue = computed(() => {
    if (
      typeof props.value === 'number' &&
      !isNaN(props.value) &&
      props.value > props.max
    ) {
      return props.max + '+'
    } else {
      return props.value
    }
  })
  // value有值，并dot为true时
  const isDot = computed(() => {
    return props.value && props.dot
  })
</script>
