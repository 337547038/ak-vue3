<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const data = ref([
    {
      type: 'input',
      name: 'text',
      formItem: {
        label: 'test'
      },
      control: {
        value: '',
        placeholder: '请输入'
      }
    },
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: []
      },
      config: {
        url: './static/mock/testData.json?name=${text}',
        method: 'get',
        params: {}
      }
    }
  ])
</script>
