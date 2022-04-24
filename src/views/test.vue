<template>
  <ak-select
    width="100px"
    placeholder="请选择"
    v-model="value1"
    :options="options"
    :optionsKey="{ label: 'key', value: 'name' }"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const options = ref([])
  const value1 = ref('')
</script>
