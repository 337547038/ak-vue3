<template>
  <div>
    <p>
      月日小于10时，前面不加0。选择的值：{{ value1 }}<br>
      <ak-date-picker v-model="value1" placeholder="请选择时间" format="y-M-d" />
    </p>
    <p>
      显示年月日格式。选择的值：{{ value2 }}<br>
      <ak-date-picker v-model="value2" placeholder="请选择时间" format="y年MM月dd日 星期w" value-format="y-MM-dd" />
    </p>
    <p>
      显示时间戳。选择的值：{{ value3 }}<br>
      <ak-date-picker v-model="value3" placeholder="请选择时间" format="timestamp" value-format="y-MM-dd" />
    </p>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const value1 = ref('2021-06-01')
    const value2 = ref('2021-06-01')
    const value3 = ref('2021-06-01')
    return {
      value1,
      value2,
      value3
    }
  }
}
</script>
