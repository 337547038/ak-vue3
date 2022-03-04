<!-- Created by 337547038 on 2021/6 0006. -->
<template>
  <div :class="[`${prefixCls}-textarea`]">
    <textarea
      ref="textareaEl"
      v-bind="$attrs"
      v-model="textValue"
      :class="{[`${prefixCls}-input-control`]:true,disabled:disabledOk}"
      :style="style"
      :disabled="disabledOk"
      :maxlength="maxlength"
      @input="change"></textarea>
    <span v-if="showWordLimit&&maxlength" class="input-count">{{textValue.length}}/{{maxlength}}</span>
  </div>
</template>
<script lang="ts">
import {prefixCls} from '../prefix'
import pType from '../util/pType'
import {defineComponent, inject, computed, ref, onMounted, watch} from 'vue'
import {getFormDisabled} from '../util/form'

export default defineComponent({
  name: `${prefixCls}Textarea`,
  // inheritAttrs: false,
  props: {
    modelValue: pType.string(),
    autoHeight: pType.bool(true),
    width: pType.string('100%'),
    height: pType.string('80px'),
    disabled: pType.bool(),
    maxlength: pType.number(),
    showWordLimit: pType.bool()
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const textValue = ref(props.modelValue)
    const border = ref(2)
    const textareaEl = ref()
    const disabledOk = computed(() => {
      return getFormDisabled(props.disabled)
    })
    const style = computed(() => {
      return {
        width: props.width,
        height: props.height,
        minHeight: props.height,
        overflow: props.autoHeight ? 'hidden' : '',
        boxSizing: 'border-box'
      }
    })
    const getBorder = () => {
      // 取下边框的高，计算会准确点
      border.value = textareaEl.value.offsetHeight - textareaEl.value.clientHeight
    }
    const change = (evt: Event) => {
      const {value} = evt.target as HTMLInputElement
      emitChange(value)
    }
    const controlChange: any = inject(`${prefixCls}ControlChange`, '')
    const emitChange = (value: string) => {
      emit('update:modelValue', value)
      controlChangeEvent(value)
    }
    onMounted(() => {
      getBorder()
      controlChangeEvent(props.modelValue, 'mounted')
    })
    watch(textValue, (value: string) => {
      emitChange(value)
      if (props.autoHeight) {
        textareaEl.value.style.height = 'auto'
        textareaEl.value.style.height = (textareaEl.value.scrollHeight + border.value) + 'px'
      }
    })
    const controlChangeEvent = (val: any, type?: string) => {
      controlChange && controlChange(val, type)
    }
    watch(() => props.modelValue, (v: any) => {
      controlChangeEvent(v, 'mounted')
    })
    return {
      prefixCls,
      textValue,
      style,
      textareaEl,
      change,
      disabledOk
    }
  }
})
</script>
