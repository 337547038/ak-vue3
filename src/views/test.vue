<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader
      checkAny
      v-model="value1"
      placeholder="请选择"
      :options="options" />
    <br><br><br>
    <p>当前值：{{ value2 }}</p>
    <ak-cascader
      checkAny
      v-model="value2"
      placeholder="请选择"
      :options="options" />
    <br><br><br>
    <p>当前值：{{ value3 }}</p>
    <ak-cascader v-model="value3" placeholder="请选择" multiple :options="options" checkAny />
    <br><br><br>
    <p>当前值：{{ value4 }}</p>
    <ak-cascader v-model="value4" placeholder="请选择" multiple :options="options" checkAny />
  </div>
</template>
<script setup>
import {ref} from 'vue'
import options from '../packages/cascader/demo.json'

const value1 = ref(['广东,广州,白云'])
const value2 = ref([])
const value3 = ref(['广东,广州,白云', '广东,深圳'])
const value4 = ref([])
</script>
