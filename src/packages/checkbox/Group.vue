<!--Created by 337547038 on 2021/6.-->
<template>
  <div :class="`${prefixCls}-checkbox-group`">
    <Checkbox
      v-for="(item, index) in options"
      :key="index"
      v-model="groupValue"
      :value="item[optionsKey.value]"
      :label="item[optionsKey.label] || item[optionsKey.value]"
      :disabled="disabled || disabledList[index] || item.disabled"
      :class="item.class"
      :before-change="beforeChange"
      @change="change($event, item)"
    />
  </div>
</template>
<script lang="ts" setup>
  import Checkbox from './Checkbox.vue'
  import prefixCls from '../prefix'
  import { ref, watch, toRefs } from 'vue'

  const props = withDefaults(
    defineProps<{
      options?: any
      optionsKey?: { label: string; value: string }
      modelValue?: string[]
      name?: string
      max?: number
      min?: number
      disabled?: boolean
      beforeChange?: Function
    }>(),
    {
      options: () => [],
      optionsKey: () => {
        return { label: 'label', value: 'value' }
      },
      modelValue: () => [],
      min: 0,
      max: 0
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
    (e: 'change', modelValue: any, obj: any): void
  }>()
  const groupValue = ref(props.modelValue)
  watch(
    () => props.modelValue,
    (v: any) => {
      groupValue.value = v
    }
  )
  const { optionsKey } = toRefs(props)
  const optValue = optionsKey.value.value
  const disabledList: any = ref({})
  const setChecked = (arr: string[]) => {
    const newLen = arr.length
    disabledList.value = {}
    if (newLen >= props.max && props.max > 0) {
      // 将所有未勾选的设为禁用状态
      props.options.forEach((item: any, index: number) => {
        if (arr.indexOf(item[optValue]) === -1) {
          // item._disabled = true
          disabledList.value[index] = true
        }
      })
    } else if (newLen <= props.min && props.min > 0) {
      // 将所有已勾选的设为禁用状态
      props.options.forEach((item: any, index: number) => {
        if (arr.indexOf(item[optValue]) !== -1) {
          // item._disabled = true
          disabledList.value[index] = true
        }
      })
    } else if (props.min > 0 || props.max > 0) {
      // 将所有_disabled去掉
      props.options.forEach((item: any, index: number) => {
        // item._disabled = false
        disabledList.value[index] = false
      })
    }
  }
  const change = (val: any, item: any) => {
    setChecked(val)
    emits('update:modelValue', val)
    emits('change', val, item)
  }
  // 全选或全不选
  const toggleSelect = (boolean: boolean) => {
    const value: string[] = props.modelValue
    disabledList.value = {}
    props.options &&
      props.options.forEach((item: any, index: number) => {
        const val = item[optValue]
        if (boolean) {
          // 全选时，将没勾选且不是禁用的选中，同时不能超过最大选择数
          if (!item.disabled || props.modelValue.includes(val)) {
            if (props.max > 0) {
              // 设置有最大限制
              if (value.length < props.max) {
                pushValue(val)
              } else {
                // 将剩下的设置为disabled
                disabledList.value[index] = true
              }
            } else {
              pushValue(val)
            }
          }
        } else {
          // 取消选择时
          if (!item.disabled) {
            const indexOf = props.modelValue.indexOf(val)
            if (indexOf !== -1) {
              if (props.min > 0) {
                if (value.length > props.min) {
                  value.splice(indexOf, 1)
                } else {
                  // 将不能取消的设置为disabled
                  disabledList.value[index] = true
                }
              } else {
                value.splice(indexOf, 1)
              }
            }
          }
        }
      })
    function pushValue(val: string) {
      if (!value.includes(val)) {
        value.push(val)
      }
    }
    emits('update:modelValue', value)
  }
  // 返回所选值
  const getValue = () => {
    return props.options.filter((item: any) => {
      return props.modelValue.indexOf(item[optValue]) !== -1
    })
  }
  defineExpose({ toggleSelect, getValue })
</script>
