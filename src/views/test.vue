<template>
  <div>
    <p>展示标记{{ value1 }}</p>
    <div><ak-slider v-model="value1" :marks="marks" /></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(80)
  const marks = ref({
    0: 'start',
    25: '25%',
    50: 'center',
    75: '75%',
    100: '<i style="color:red">end</i>'
  })
</script>
