<!-- Created by 337547038 on 2021/6/22 0022. -->
<template>
  <component :is="currentComponent" v-model="fieldValue" v-bind="data" />
</template>

<script lang="ts" setup>
  import { ref, computed, markRaw, watch } from 'vue'
  import { Input } from '../input'
  import { RadioGroup } from '../radio'
  import { CheckboxGroup } from '../checkbox'
  import { DatePicker } from '../datePicker'
  import { Select } from '../select'
  import { Switch } from '../switch'
  import { Textarea } from '../textarea'
  import { TimePicker } from '../timePicker'
  import { TimeSelect } from '../timeSelect'
  const props = withDefaults(
    defineProps<{
      data?: any
      type?:
        | 'input'
        | 'radio'
        | 'checkbox'
        | 'datePicker'
        | 'select'
        | 'switch'
        | 'textarea'
        | 'timeSelect'
        | 'timePicker'
      modelValue?: any
    }>(),
    {
      type: 'input'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
  }>()
  const fieldValue = ref()
  const setFieldValue = () => {
    if (props.modelValue !== undefined) {
      fieldValue.value = props.modelValue
    } else {
      fieldValue.value = props.data?.value
    }
  }
  watch(
    () => props.modelValue,
    () => {
      setFieldValue()
    }
  )
  watch(
    () => fieldValue.value,
    (val: any) => {
      emits('update:modelValue', val)
    }
  )
  setFieldValue()
  const currentComponent = computed(() => {
    // input,radio,checkbox,datePicker,select,switch,textarea,grid,tabs,text
    switch (props.type) {
      case 'radio':
        return markRaw(RadioGroup)
      case 'checkbox':
        return markRaw(CheckboxGroup)
      case 'datePicker':
        return markRaw(DatePicker)
      case 'select':
        return markRaw(Select)
      case 'switch':
        return markRaw(Switch)
      case 'textarea':
        return markRaw(Textarea)
      case 'timePicker':
        return markRaw(TimePicker)
      case 'timeSelect':
        return markRaw(TimeSelect)
      default:
        return markRaw(Input)
    }
  })
</script>
