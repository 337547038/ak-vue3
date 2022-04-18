<template>
  <ak-time-picker v-model="value" filterable/>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'

  const date = new Date()
  //const value = ref(date.toLocaleTimeString())
  const value = ref('')
</script>
