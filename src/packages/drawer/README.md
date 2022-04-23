# Drawer 抽屉对话框

### 基本用法

用法和所有参数同`Dialog`一样

```vue demo
<template>
  <div>
    <ak-button @click="open('left')">左边</ak-button>
    <ak-button @click="open('top')">项部</ak-button>
    <ak-button @click="open('right')">右边</ak-button>
    <ak-button @click="open('bottom')">底部</ak-button>
    <ak-drawer v-model="visible" title="title" :direction="direction"
      >this content</ak-drawer
    >
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const direction = ref('left')
  const visible = ref(false)
  const open = (type: string) => {
    direction.value = type
    visible.value = true
  }
</script>


```

## API

### Drawer

|参数|类型|说明|
|----------|--------------|--------|
|direction        | string/right  |显示方向，left/right/top/bottom|
|-                | -             |其他所有参数同[dialog](/#/dialog)|
