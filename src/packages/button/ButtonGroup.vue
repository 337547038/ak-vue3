<!-- Created by 337547038 on 2021/5/21 0021. -->
<template>
  <div :class="{ [`${prefixCls}-btn-group`]: true }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { provide } from 'vue'

  const props = withDefaults(
    defineProps<{
      size?: string
      round?: boolean
      disabled?: boolean
      width?: string
      plain?: boolean
    }>(),
    {
      size: '',
      round: false,
      disabled: false,
      width: ''
    }
  )

  const emits = defineEmits<{
    (e: 'click', event: MouseEvent, name: string): void
  }>()

  provide(`${prefixCls}GroupConfig`, props)
  provide(`${prefixCls}BtnClick`, (event: MouseEvent, name: string) => {
    if (!props.disabled) {
      emits('click', event, name)
    }
  })
</script>
