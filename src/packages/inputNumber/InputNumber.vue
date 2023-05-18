<template>
  <div :class="{ disabled: disabled, [prefixCls + '-input-number']: true }">
    <input
      type="text"
      :value="modelValue"
      :class="{
        disabled: disabled,
        [prefixCls + '-input-control']: true,
        [size || '']: size
      }"
      :disabled="disabled"
      :readOnly="readOnly"
      :placeholder="placeholder"
      onkeyup="this.value=this.value.replace(/[^0-9\.]/g,'')"
      @focus="focus"
      @blur="blur"
      @input="input"
    />
    <span class="number-control">
      <a
        class="icon-minus"
        :class="{ disabled: min && modelValue <= min }"
        @click="numberControl(-1)"
      ></a>
      <a
        class="icon-plus"
        :class="{ disabled: max && modelValue >= max }"
        @click="numberControl(1)"
      ></a>
    </span>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { inject, onMounted, watch } from 'vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: number
      max?: number
      min?: number
      step?: number // 每次增加或减少的数
      disabled?: boolean
      placeholder?: string
      readOnly?: boolean
      size?: string
    }>(),
    {
      modelValue: 0,
      step: 1, // 每次增加或减少的数
      readOnly: false
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: number): void
    (e: 'focus', event: FocusEvent): void
    (e: 'blur', event: FocusEvent): void
    (e: 'change', modelValue: number): void
  }>()

  const focus = (e: FocusEvent) => {
    if (!props.disabled) {
      emits('focus', e)
    }
  }
  const blur = (evt: FocusEvent) => {
    // 判断有没超过最大值和低于最小值
    const { value } = evt.target as HTMLInputElement
    if (props.max && !isNaN(props.max) && parseInt(value) > props.max) {
      emitComm(props.max)
    }
    if (props.min && !isNaN(props.min) && parseInt(value) < props.min) {
      emitComm(props.min)
    }
    emits('blur', evt)
  }
  const input = (evt: any): void => {
    console.log(evt)
    const { value } = evt.target as HTMLInputElement
    emitComm(parseInt(value))
  }
  const numberControl = (type: number) => {
    const inputValue = props.modelValue || 0
    if (!isNaN(inputValue) && !props.disabled) {
      let val = 0
      if (type > 0) {
        // add
        if (
          props.max &&
          !isNaN(props.max) &&
          inputValue + props.step > props.max
        ) {
          // 设有最大值时，且没超出设置时
          val = props.max
        } else {
          // 没有设置最大值，直接相加
          val = inputValue + props.step
        }
      } else {
        // less
        if (
          props.min &&
          !isNaN(props.min) &&
          inputValue - props.step < props.min
        ) {
          // 设有最小值时
          val = props.min
        } else {
          val = inputValue - props.step
        }
      }
      const stepString = props.step + ''
      if (stepString.indexOf('.') !== -1) {
        // 表示有小数字点，小数点相加有时精度会丢失 0.2+0.1=0.300000000  或0.29999999999之类的
        const num = stepString.substring(stepString.indexOf('.') + 1).length // 取几位小数
        val = Number(val.toFixed(num))
      }
      emitComm(val)
    }
  }
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const controlChangeEvent = (val: any, type?: string) => {
    controlChange && controlChange(val, type)
  }
  const emitComm = (val: number) => {
    emits('change', val)
    emits('update:modelValue', val)
    controlChangeEvent(val)
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
