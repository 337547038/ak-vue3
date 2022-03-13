<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      lazy
      :lazy-load="lazyLoad"
      @searchChange="searchChange" />
    <br><br><br>
    <p>当前值：{{ value2 }}</p>
    <ak-cascader v-model="value2" placeholder="请选择（没有初始值）" lazy :lazy-load="lazyLoad" />
    <br><br><br>
    <p>可搜索异步加载</p>
    <p>当前值：{{ value3 }}</p>
    <ak-cascader
      v-model="value3"
      placeholder="请选择"
      lazy
      :lazy-load="lazyLoad"
      :options="options"
      filterable
      @searchChange="searchChange" />
  </div>
</template>
<script setup>
import {ref} from 'vue'

const value1 = ref(['广东,广州,白云'])
const value2 = ref([])
const value3 = ref([])
const options = ref([])
const lazyLoad = (obj, resolve) => {
  setTimeout(() => {
    let temp = []
    if (!obj) {
      // 加载第一级
      temp = [
        {
          'value': '广东',
          'label': '广东',
          children: []
        },
        {
          'value': '北京',
          'label': '北京',
          children: []
        },
        {
          'value': '上海',
          'label': '上海'
        }
      ]
      //resolve(temp)
    }
    if (obj && obj.value === '广东') {
      temp = [
        {
          'value': '广州',
          'label': '广州'
        },
        {
          'value': '深圳',
          'label': '深圳'
        }
      ]
    }
    if (obj && obj.value === '广州') {
      temp = [
        {
          'value': '天河',
          'label': '天河'
        },
        {
          'value': '白云',
          'label': '白云'
        }
      ]
    }
    resolve(temp)
  }, 1000)
}
const searchChange = val => {
  // console.log('12')
  if (val) {
    options.value = [
      {
        'value': '广东',
        'label': '广东',
        children: [
          {
            'value': '深圳',
            'label': '深圳'
          }
        ]
      }
    ]
  }
}
</script>
