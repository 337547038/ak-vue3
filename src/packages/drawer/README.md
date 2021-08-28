
# Drawer 抽屉对话框

### 基本用法
用法和所有参数同`Dialog`一样
```vue demo

<template>
  <div>
    <p>打开抽屉 <span @click="visible1=true" class="green">试一试</span></p>
    <ak-drawer
      v-model="visible1"
      title="我是标题"
      :direction="direction"
      width="400px">
      <span>我来啦!</span>
    </ak-drawer>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const visible1 = ref(false)
    return {
      visible1
    }
  }
}
</script>
```

## API

### Drawer

|参数|类型|说明|
|----------|--------------|--------|
|direction        | string/right  |显示方向|
|-                | -             |其他所有参数同[dialog](/#/dialog)|
