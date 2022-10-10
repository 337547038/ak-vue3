<!-- Created by 337547038 on 2018/9/7 0007. -->
<template>
  <label
    :class="{
      disabled: disabledOk,
      checked: checked,
      [prefixCls + '-radio']: true
    }"
    @click="changeHandler"
  >
    <span>
      <span class="radio-inner"></span>
      <span v-if="$slots.default" class="radio-text">
        <slot></slot>
      </span>
      <span v-if="label" class="radio-text" v-html="label"></span>
    </span>
  </label>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { inject, computed, onMounted, watch } from 'vue'
  import { getFormDisabled } from '../util/form'
  const props = withDefaults(
    defineProps<{
      disabled?: boolean
      value?: string | boolean | number
      modelValue?: string | boolean | number
      label?: string
    }>(),
    {
      disabled: false
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
    (e: 'change', modelValue: any): void
  }>()

  const disabledOk = computed(() => {
    return getFormDisabled(props.disabled)
  })
  const checked = computed(() => {
    // 存在value时，当v-model=value时为选中状态
    // 不存在value时，当v-model=true时为选中状态
    let bool
    if (props.value) {
      bool = props.value === props.modelValue
    } else {
      bool = !!props.modelValue
    }
    return bool
  })
  // formItem
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const changeHandler = () => {
    // 点击后只有选中状态
    if (disabledOk.value) {
      return
    }
    const val = props.value || true
    emits('change', val)
    emits('update:modelValue', val)
    controlChange && controlChange(val, 'change')
  }
  watch(
    () => props.modelValue,
    (v: any) => {
      controlChange && controlChange(v, 'mounted')
    }
  )
  onMounted(() => {
    controlChange && controlChange(props.modelValue, 'mounted')
  })
</script>
