<!-- Created by 337547038. -->
<template>
  <div :class="`${prefixCls}-collapse`">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { provide, reactive } from 'vue'
  const props = withDefaults(
    defineProps<{
      modelValue?: string[]
      accordion?: boolean // 风琴模式
    }>(),
    {
      modelValue: () => []
    }
  )
  const emits = defineEmits<{
    (e: 'change', modelValue: boolean): void
  }>()

  const provideChangePanel = (v: boolean) => {
    /*console.log(v)
      console.log('provideChangePanel')*/
    emits('change', v)
  }
  provide(`${prefixCls}ChangePanel`, provideChangePanel)
  provide(
    `${prefixCls}Props`,
    reactive({
      modelValue: props.modelValue,
      accordion: props.accordion
    })
  )
</script>
