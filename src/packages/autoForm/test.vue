<!--自定义组件示例-->
<template>
  <div><input :value="modelValue" @change="change" /></div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      modelValue?: any
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
    (e: 'change', val: any): void
  }>()
  const change = (evt: Event) => {
    const { value } = evt.target as HTMLInputElement
    emits('update:modelValue', value)
    emits('change', value)
  }
</script>
