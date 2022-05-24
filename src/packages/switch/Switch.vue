<!--Created by 337547038 on 2021/6.-->
<template>
  <span
    :class="{
      [prefixCls + '-switch']: true,
      'switch-checked': status,
      disabled: disabledOk,
      [size]: size
    }"
    :style="style"
    @click="click"
  >
    <i :class="`${prefixCls}-switch-inner`"></i>
    <span class="switch-text">
      <slot v-if="status" name="open"></slot>
      <slot v-else name="close"></slot>
    </span>
  </span>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { inject, computed, watch, onMounted } from 'vue'
  import { getFormDisabled } from '../util/form'

  const props = withDefaults(
    defineProps<{
      modelValue?: string | number | boolean
      disabled?: boolean
      activeColor?: string // 打开时的颜色
      closeColor?: string // 关闭时的颜色
      activeValue?: string | number // switch 打开时的值
      closeValue?: string | number // switch 关闭时的值
      beforeChange?: Function
      size?: string
    }>(),
    {
      modelValue: false,
      disabled: false
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string | number | boolean): void
    (e: 'change', modelValue: string | number | boolean): void
  }>()

  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const status = computed(() => {
    if (props.activeValue) {
      // 指定了选中值时
      return props.modelValue === props.activeValue
    } else {
      return props.modelValue
    }
  })
  const style = computed(() => {
    let elStyle = {}
    if (props.modelValue && props.activeColor) {
      // 打开状态，并设置了打开时的颜色
      elStyle = {
        borderColor: props.activeColor,
        backgroundColor: props.activeColor
      }
    }
    if (!props.modelValue && props.closeColor) {
      elStyle = {
        borderColor: props.closeColor,
        backgroundColor: props.closeColor
      }
    }
    return elStyle
  })
  const disabledOk = computed(() => {
    return getFormDisabled(props.disabled)
  })
  const click = () => {
    if (!disabledOk.value) {
      if (props.beforeChange && !props.beforeChange()) {
        return
      }
      let checked
      if (!status.value) {
        if (props.activeValue) {
          checked = props.activeValue
        } else {
          checked = true
        }
      } else {
        if (props.closeValue) {
          checked = props.closeValue
        } else {
          checked = false
        }
      }
      emits('update:modelValue', checked)
      emits('change', checked)
      controlChangeEvent(checked)
    }
  }
  const controlChangeEvent = (val: any, type?: string) => {
    controlChange && controlChange(val, type)
  }
  watch(
    () => props.modelValue,
    (v: any) => {
      controlChangeEvent(v, 'mounted')
    }
  )
  onMounted(() => {
    controlChangeEvent(props.modelValue, 'mounted')
  })
</script>
