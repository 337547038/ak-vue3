<template>
  <div>
    <ak-date-picker v-model="value1" placeholder="请选择时间" class="text" />
    <ak-date-picker v-model="value2" placeholder="请选择时间" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref('2022/12/12')
</script>
