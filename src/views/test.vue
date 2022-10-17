<template>
  <div>
    <ak-auto-form :data="data" :dict="dict" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const dict = ref({
    radio: [
      { label: '选项1', value: 'a1' },
      { label: '选项2', value: 'a2' },
      { label: '选项3', value: 'a3' },
      { label: '选项4', value: 'a4' },
      { label: '禁用', value: 'a5', disabled: true }
    ],
    checkbox: [
      { label: '选项1', value: 'a1' },
      { label: '选项2', value: 'a2' },
      { label: '选项3', value: 'a3' },
      { label: '选项4', value: 'a4' },
      { label: '禁用', value: 'a5', disabled: true }
    ],
    select: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' },
      { label: '选项4', value: '4', disabled: true },
      { label: '选项5', value: '5' },
      { label: '6' },
      { label: '选项7', value: '7' },
      { label: '选项8', value: '8' },
      { label: '选项9', value: '9' },
      { label: '选项10', value: '10', class: 'red' }
    ]
  })
  const data = ref([
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: []
      }
    },
    {
      type: 'checkbox',
      name: 'checkbox',
      formItem: {
        label: 'checkbox'
      },
      control: {
        value: [],
        options: []
      }
    },
    {
      type: 'select',
      name: 'select',
      formItem: {
        label: 'select'
      },
      control: {
        value: '',
        placeholder: '请选择',
        options: []
      },
      config: {
        optionsKey: false // 可从dict里使用指定的key
      }
    },
    {
      type: 'checkbox',
      name: 'checkbox2',
      formItem: {
        label: '指定的dict'
      },
      control: {
        value: '',
        placeholder: '请选择',
        options: []
      },
      config: {
        optionsKey: 'select' // 可从dict里使用指定的key
      }
    }
  ])
</script>
