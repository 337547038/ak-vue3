<template>
  <ak-tree
    :data="data"
    :showCheckbox="true"
    @change="change"
    v-model="value"
    ref="treeEl"
  />
  <ak-button @click="getValue">getValue</ak-button>
</template>
<script setup>
  import { ref } from 'vue'
  const data = [
    {
      label: '广东',
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
  const change = obj => {
    //console.log(obj)
  }

  const treeEl = ref()
  const value = ref([])
  const getValue = () => {
    console.log(treeEl.value.getValue())
  }
</script>
