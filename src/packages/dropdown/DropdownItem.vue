<template>
  <li :class="{ disabled: disabled, className }" @click="itemClick">
    <slot></slot>
  </li>
</template>
<script lang="ts" setup>
  import { inject } from 'vue'
  import prefixCls from '../prefix'
  const props = withDefaults(
    defineProps<{
      disabled?: boolean
      className?: string
    }>(),
    {}
  )

  const item: any = inject(`${prefixCls}DropdownItemClick`, '')
  const itemClick = () => {
    if (!props.disabled) {
      item && item(this)
    }
  }
</script>
