<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker
        v-model="value1"
        placeholder="请选择月份"
        endPlaceholder="请选择月份"
      />
    </p>
    <p>
      显示年月日格式。选择的值：{{ value2 }}<br />
      <ak-date-picker
        v-model="value2"
        type="dateRange"
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </p>
    <p>
      选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value3"
        type="datetimeRange"
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref([])
  const value2 = ref([])
  const value3 = ref([])
</script>
