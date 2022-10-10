<!-- Created by 337547038 on 2021.6 0015. -->
<template>
  <div
    :class="{
      [prefixCls + '-form-input']: true,
      'input-prepend': $slots.prepend,
      'input-append': $slots.append
    }"
    :style="{ width: width }"
  >
    <div v-if="$slots.prepend" class="prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      autocomplete="off"
      v-bind="$attrs"
      ref="inputEl"
      :value="modelValue"
      :type="inputType"
      :class="{
        disabled: disabledOk,
        [prefixCls + '-input-control']: true,
        'has-prefix': $slots.prefix || prefixIcon,
        [size]: size
      }"
      :disabled="disabledOk"
      @input="inputHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <div v-if="$slots.append" class="append">
      <slot name="append"></slot>
    </div>
    <span v-if="$slots.prefix || prefixIcon" class="prefix-icon">
      <i v-if="prefixIcon" :class="[prefixIcon]"></i>
      <slot name="prefix"></slot>
    </span>
    <span class="suffix-icon">
      <slot name="suffix"></slot>
      <i v-if="suffixIcon" :class="[suffixIcon]"></i>
      <i
        v-if="clear && modelValue"
        class="icon-close"
        @click.stop="clearValue"
      ></i>
      <i
        v-if="modelValue && showEye && type === 'password'"
        :class="{ 'icon-eye-close': eyeShow, 'icon-eye': !eyeShow }"
        @click.stop="eyeShow = !eyeShow"
      ></i>
    </span>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { ref, computed, watch, inject, onMounted } from 'vue'
  import { getFormDisabled } from '../util/form'

  const props = withDefaults(
    defineProps<{
      modelValue?: any
      disabled?: boolean
      type?: string
      clear?: boolean
      showEye?: boolean
      prefixIcon?: string
      suffixIcon?: string
      width?: string
      size?: string
    }>(),
    {
      modelValue: '',
      disabled: false,
      type: 'text',
      clear: false,
      showEye: false,
      prefixIcon: '',
      suffixIcon: '',
      width: '',
      size: ''
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
    (e: 'change', modelValue: any): void
    (e: 'blur', modelValue: any): void
    (e: 'focus', modelValue: any): void
  }>()

  const inputEl = ref()
  const eyeShow = ref(false)
  const disabledOk = computed(() => {
    return getFormDisabled(props.disabled)
  })
  const inputType = computed(() => {
    if (eyeShow.value) {
      return 'text'
    } else {
      return props.type
    }
  })
  const blurHandler = (e: Event) => {
    emits('blur', e)
    const { value } = e.target as HTMLInputElement
    controlChangeEvent(value, 'blur')
  }
  const focusHandler = (e: Event) => {
    emits('focus', e)
    const { value } = e.target as HTMLInputElement
    controlChangeEvent(value, 'focus')
  }
  const inputHandler = (e: Event) => {
    const { value } = e.target as HTMLInputElement
    emits('update:modelValue', value)
    controlChangeEvent(value, 'change')
  }
  const clearValue = () => {
    emits('update:modelValue', '')
    emits('change', '')
  }

  const focus = () => {
    inputEl.value.focus()
  }
  const blur = () => {
    inputEl.value.blur()
  }
  watch(
    () => props.modelValue,
    (v: any) => {
      controlChangeEvent(v, 'mounted')
    }
  )
  // formItem
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const controlChangeEvent = (val: any, type?: string) => {
    controlChange && controlChange(val, type)
  }
  onMounted(() => {
    controlChangeEvent(props.modelValue, 'mounted')
  })

  defineExpose({ blur, focus })
</script>
