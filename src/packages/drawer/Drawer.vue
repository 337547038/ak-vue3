<template>
  <Dialog
    ref="dialogEl"
    v-model="visible"
    animation="slide"
    :class-name="`${prefixCls}-drawer ${prefixCls}-drawer-${direction}`"
  >
    <slot></slot>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { ref, watch } from 'vue'
  import { Dialog } from '../dialog'
  const props = withDefaults(
    defineProps<{
      modelValue?: boolean // rgb格式，初始值
      direction: string
    }>(),
    {
      modelValue: false,
      direction: 'right'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
  }>()

  const visible = ref(props.modelValue)
  watch(
    () => props.modelValue,
    (v: boolean) => {
      visible.value = v
    }
  )
  watch(
    () => visible.value,
    (v: boolean) => {
      emits('update:modelValue', v)
    }
  )
</script>
