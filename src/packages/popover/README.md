# popover（Tooltip） 弹出框


### 基本用法
  基于`tooltip`提示
```vue demo
<template>
  <div>
    <div class="tooltip-demo">
      <ak-popover v-model="visible">
        <ak-button>内容为slot</ak-button>
        <template #content>
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <ak-button size="mini" type="cancel" @click="visible = false"
              >取消</ak-button
            >
            <ak-button type="primary" size="mini" @click="visible = false"
              >确定</ak-button
            >
          </div>
        </template>
      </ak-popover>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
</script>


```

## API

### Popover Props

|参数|类型|说明|
|----------|--------------|--------|
|v-model        | bool/false         |仅可用于关闭当前提示层|
|-              | -                  |其他同[Tooltip](/#/tooltip)|
