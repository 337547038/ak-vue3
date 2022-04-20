<template>
  <ak-select
    width="100px"
    placeholder="请选择"
    v-model="value1"
    :options="options"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' },
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref('')
</script>
