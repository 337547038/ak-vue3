
# Drawer 抽屉对话框

### 基本用法
用法和所有参数同`Dialog`一样
```vue demo

<template>
  <div style="margin: 100px">
    <div class="tooltip-demo">
      <ak-tooltip direction="top" trigger="click">
        <ak-button>内容为slot</ak-button>
        <template #content>
          这里是提示内容
        </template>
      </ak-tooltip>
    </div>
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
|direction        | string/right  |显示方向，left/right/top/bottom|
|-                | -             |其他所有参数同[dialog](/#/dialog)|
