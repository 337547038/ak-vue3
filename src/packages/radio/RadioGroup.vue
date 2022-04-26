<!-- Created by 337547038 on 2018/9/7 0007. -->
<template>
  <div :class="`${prefixCls}-radio-group`">
    <Radio
      v-for="(item, index) in options"
      :key="index"
      v-model="groupValue"
      :value="item[optionsKey.value]"
      :disabled="disabled || item.disabled"
      @change="change($event, item)"
    >
      {{ item[optionsKey.label] }}
    </Radio>
  </div>
</template>
<script lang="ts" setup>
  import Radio from './Radio.vue'
  import prefixCls from '../prefix'
  import { ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      options?: any
      optionsKey?: { label: string; value: string }
      disabled?: boolean // 控制整个组
    }>(),
    {
      disabled: false,
      optionsKey: () => {
        return { label: 'label', value: 'value' }
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
    (e: 'change', modelValue: any, item: any): void
  }>()

  const groupValue = ref(props.modelValue)
  const change = (val: [string | number], item: any) => {
    emits('update:modelValue', val)
    emits('change', val, item)
  }
</script>
