<!-- Created by 337547038 on 2021/6/15 0015. -->

# Switch 开关

### 基本用法

```vue demo
<template>
  <p>
    <ak-switch v-model="switch1" />
  </p>
  <p>
    <ak-switch v-model="switch2" />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(false)
  const switch2 = ref(true)
</script>

```

### 自定显示文本

```vue demo
<template>
  <ak-switch v-model="switch1">
    <template #open>开</template>
    <template #close>关</template>
  </ak-switch>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(false)
</script>

```

### 禁用

```vue demo
<template>
  <p>
    <ak-switch v-model="switch1" :disabled="true" />
  </p>
  <p>
    <ak-switch v-model="switch2" :disabled="true" />
  </p>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const switch1 = ref(false)
  const switch2 = ref(true)
</script>

```

### 设置开关状态时的颜色

`closeColor`设置关闭状态颜色，`activeColor`设置打开状态颜色

```vue demo
<template>
  <p
    >{{ switch1 }}
    <ak-switch v-model="switch1" close-color="#999" active-color="red" />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(true)
</script>


```

### 设置开关状态时的值

`closeValue`设置关闭状态时的值，`activeValue`设置打开状态的值，当`v-model=activeValue`时选中状态

```vue demo
<template>
  <p
    >{{ switch1 }}
    <ak-switch v-model="switch1" close-value="a" active-value="b" />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(true)
</script>

```

### 异步控制

`beforeChange`切换前事件，`return false`阻止切换

```vue demo
<template>
  <p>
    <ak-switch v-model="switch1" :beforeChange="beforeChange" />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(false)
  const beforeChange = () => {
    alert('不能切换')
    return false
  }
</script>

```

### 设置大小

```vue demo
<template>
  <p>
    <ak-switch v-model="switch1" size='large'/>
    <ak-switch v-model="switch2" size='normal'/>
    <ak-switch v-model="switch3" size='small'/>
    <ak-switch v-model="switch4" size='mini'/>
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const switch1 = ref(false)
  const switch2 = ref(false)
  const switch3 = ref(false)
  const switch4 = ref(false)
</script>

```

## API

### Switch

|参数|类型|说明|
|----------|--------------|--------|
|v-model        | boolean/false  |指定当前是否选中|
|disabled       | boolean/false  |是否禁用状态|
|closeColor     | String         |设置关闭时颜色值|
|activeColor    | String         |设置打开时颜色值|
|closeValue     | String         |设置关闭状态时的值|
|activeValue    | String         |设置打开状态时的值|
| size       | String        | 大小尺寸，支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
|beforeChange   | Function       |选项改变前事件,return false阻止选择|

### Switch Event

|参数|说明|
|----------|--------------|
|change           | 改变事件|

### Switch Slot

|参数|说明|
|----------|--------------|
|open           | 自定义显示打开时的内容|
|close          | 自定义显示关闭时的内容|
