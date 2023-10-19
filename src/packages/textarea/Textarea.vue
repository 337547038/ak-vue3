<!-- Created by 337547038 on 2021/6 0006. -->
<template>
  <div :class="[`${prefixCls}-textarea`]">
    <textarea
      ref="textareaEl"
      v-bind="$attrs"
      :value="textValue"
      :class="{ [`${prefixCls}-input-control`]: true, disabled: disabledOk }"
      :style="style"
      :disabled="disabledOk"
      :maxlength="maxlength"
      @input="change"
    ></textarea>
    <span v-if="showWordLimit && maxlength" class="input-count"
      >{{ textValue.length }}/{{ maxlength }}</span
    >
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { inject, computed, ref, onMounted, watch } from 'vue'
  import { getFormDisabled } from '../util/form'
  import { debounce } from '../util'
  const props = withDefaults(
    defineProps<{
      modelValue?: string
      autoHeight?: boolean
      width?: string
      height?: string
      disabled?: boolean
      maxlength?: number
      showWordLimit?: boolean
      maxHeight?: string
    }>(),
    {
      autoHeight: true,
      width: '100%',
      height: '80px',
      disabled: false,
      modelValue: ''
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
  }>()

  const textValue = ref(props.modelValue)
  watch(
    () => props.modelValue,
    (val: any) => {
      textValue.value = val
    }
  )
  const border = ref(2)
  const textareaEl = ref()
  const height = ref(props.height)
  const overflow = ref(props.autoHeight ? 'hidden' : '')
  const disabledOk = computed(() => {
    return getFormDisabled(props.disabled)
  })
  const style = computed(() => {
    return {
      width: props.width,
      height: height.value,
      minHeight: props.height,
      maxHeight: props.maxHeight,
      overflow: overflow.value
    }
  })
  const setAutoHeight = debounce(() => {
    if (props.autoHeight) {
      const sHeight = textareaEl.value.scrollHeight + border.value
      height.value = sHeight + 'px'
      if (sHeight > parseInt(props.maxHeight || '')) {
        overflow.value = 'auto'
      }
    }
  })
  const getBorder = () => {
    // 取下边框的高，计算会准确点
    border.value = textareaEl.value.offsetHeight - textareaEl.value.clientHeight
  }
  const change = (evt: Event) => {
    const { value } = evt.target as HTMLInputElement
    emitChange(value)
    setAutoHeight()
  }
  const controlChange: any = inject(`${prefixCls}ControlChange`, '')
  const emitChange = (value: string) => {
    emits('update:modelValue', value)
    controlChangeEvent(value)
  }
  onMounted(() => {
    getBorder()
    controlChangeEvent(props.modelValue, 'mounted')
  })
  /*  watch(textValue, (value: any) => {
    emitChange(value)
    if (props.autoHeight) {
      textareaEl.value.style.height = 'auto'
      textareaEl.value.style.height =
        textareaEl.value.scrollHeight + border.value + 'px'
    }
  })*/
  const controlChangeEvent = (val: any, type?: string) => {
    controlChange && controlChange(val, type)
  }
  watch(
    () => props.modelValue,
    (v: any) => {
      controlChangeEvent(v, 'mounted')
    }
  )
</script>
