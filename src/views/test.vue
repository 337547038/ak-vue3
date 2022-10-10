<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref, markRaw } from 'vue'
  import test from '../packages/autoForm/test.vue'
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
      type: 'component',
      name: 'component',
      formItem: {
        label: 'test'
      },
      control: {
        value: '',
        placeholder: '请输入'
      },
      component: markRaw(test)
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
    }
  ])
</script>
