<!-- Created by 337547038 on 2021/6/22 0022. -->
<template>
  <FormItem v-bind="data.formItem" ref="formItem" :rules="data.rules">
    <component
      :is="currentComponent"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="data.control"
    />
  </FormItem>
</template>

<script lang="ts" setup>
  import { ref, computed, markRaw } from 'vue'
  import { FormItem } from '../formItem'
  import { Input } from '../input'
  import { RadioGroup } from '../radio'
  import { CheckboxGroup } from '../checkbox'
  import { DatePicker } from '../datePicker'
  import { Select } from '../select'
  import { Switch } from '../switch'
  import { Textarea } from '../textarea'
  import { TimePicker } from '../timePicker'
  import { TimeSelect } from '../timeSelect'
  /*  interface itemObj {
    control: any
    name: string
  }*/
  const props = withDefaults(
    defineProps<{
      data: any
      disabled?: boolean
    }>(),
    {}
  )

  const modelValue = ref(props.data?.control?.value)
  const formItem = ref()
  const currentComponent = computed(() => {
    // input,radio,checkbox,datePicker,select,switch,textarea,grid,tabs,text
    switch (props.data?.type) {
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
  const validate = () => {
    return new Promise((resolve, reject) => {
      formItem.value
        .validate()
        .then((res: any) => {
          resolve({ name: props.data.name, value: res })
        })
        .catch((res: any) => {
          reject(res)
        })
    })
  }
  const setValue = (obj: { [key: string]: any }) => {
    /*for (let key in obj) {
        if (props.item.name === key) {
          modelValue.value = obj[key]
        }
      }*/
    if (obj[props.data.name] !== undefined) {
      modelValue.value = obj[props.data.name]
    }
  }
  const clearTips = (obj?: any) => {
    formItem.value.clearTips()
    // 恢复填写的数据
    modelValue.value = props.data.control.value
    setValue(obj)
  }
  defineExpose({ validate, setValue, clearTips })
</script>
