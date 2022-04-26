<!-- Created by 337547038 on 2021/8/30. -->
<template>
  <tooltip ref="el" :class-name="cls" :trigger="trigger" @click="click">
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </tooltip>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { ref, watch, computed } from 'vue'
  import { Tooltip } from '../tooltip'
  const props = withDefaults(
    defineProps<{
      modelValue?: boolean
      trigger?: 'hover' | 'click'
      className?: string
    }>(),
    {
      modelValue: false,
      trigger: 'click'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
  }>()

  const el = ref()
  watch(
    () => props.modelValue,
    (bool: boolean) => {
      if (!bool) {
        // 关闭
        el.value.close()
      }
    }
  )
  const cls = computed(() => {
    if (props.className) {
      return `${prefixCls}-popover ${props.className}`
    } else {
      return `${prefixCls}-popover`
    }
  })
  const click = (bool: boolean) => {
    emits('update:modelValue', bool)
  }
</script>
