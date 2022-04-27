<template>
  <div>
    <ak-field type="input" :data="inputData" v-model="value1" />
    <ak-field type="select" :data="selectData" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref()
  const inputData = ref({ value: 'abc' })
  const selectData = ref({
    value: '112',
    options: [{ label: '选项1' }],
    placeholder: '请选择'
  })
  // 模拟延时设值
  setTimeout(() => {
    value1.value = '123'
  }, 1000)
</script>
