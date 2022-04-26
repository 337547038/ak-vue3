<!-- Created by 337547038 on 2021/6/22 0022. -->
<template>
  <form-item v-bind="item.formItem" ref="formItem" :rules="item.rules">
    <control-input
      v-if="item.type === 'input' || item.type === 'password'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
      :type="item.type === 'password' ? 'password' : 'text'"
    />
    <radio-group
      v-if="item.type === 'radio'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <checkbox-group
      v-if="item.type === 'checkbox'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <date-picker
      v-if="item.type === 'datePicker'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <Select
      v-if="item.type === 'select'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <control-switch
      v-if="item.type === 'switch'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <Textarea
      v-if="item.type === 'textarea'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <time-picker
      v-if="item.type === 'timePicker'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
    <time-select
      v-if="item.type === 'timeSelect'"
      v-model="modelValue"
      :disabled="disabled"
      v-bind="item.control"
    />
  </form-item>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import ControlInput from '../input/Input.vue'
  import RadioGroup from '../radio/RadioGroup.vue'
  import CheckboxGroup from '../checkbox/Group.vue'
  import DatePicker from '../datePicker/DatePicker.vue'
  import Select from '../select/Select.vue'
  import ControlSwitch from '../switch/Switch.vue'
  import Textarea from '../textarea/Textarea.vue'
  import FormItem from '../formItem/FormItem.vue'
  import TimePicker from '../timePicker/TimePicker.vue'
  import TimeSelect from '../timeSelect/TimeSelect.vue'
  /*  interface itemObj {
    control: any
    name: string
  }*/
  const props = withDefaults(
    defineProps<{
      item: any
      disabled: boolean
    }>(),
    {}
  )

  const modelValue = ref(props.item?.control?.value)
  const formItem = ref()
  const validate = () => {
    return new Promise((resolve, reject) => {
      formItem.value
        .validate()
        .then((res: any) => {
          resolve({ name: props.item.name, value: res })
        })
        .catch((res: any) => {
          reject(res)
        })
    })
  }
  const setValue = (obj: { [index: number]: any }) => {
    /*for (let key in obj) {
        if (props.item.name === key) {
          modelValue.value = obj[key]
        }
      }*/
    if (obj[props.item.name] !== undefined) {
      modelValue.value = obj[props.item.name]
    }
  }
  const clearTips = (obj?: any) => {
    formItem.value.clearTips()
    // 恢复填写的数据
    modelValue.value = props.item.control.value
    setValue(obj)
  }
  defineExpose({ validate, setValue, clearTips })
</script>
