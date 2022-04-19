<template>
  <ak-time-picker v-model="modelValue" is-range />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const modelValue = ref([])
</script>
