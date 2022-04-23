# TimeSelect 时间选择


### 基础用法

```vue demo
<template>
  <ak-time-select v-model="value" placeholder="请选择时间" />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref('')
</script>


```
### 选择开始和结束时间

```vue demo
<template>
  <ak-time-select
    v-model="value"
    placeholder="请选择时间"
    start="00:00"
    end="07:00"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref('')
</script>


```
### 固定时间范围

```vue demo
<template>
  <ak-time-select
    v-model="value"
    placeholder="请选择时间"
    min-time="13:00"
    max-time="15:00"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref('')
</script>


```

## API

### TimeSelect Props

| 参数           | 类型            | 说明                        |
|--------------|---------------|---------------------------|
| v-model      | string        | 显示的值                      |
| start        | string        | 开始时间 09:00                |
| end          | string        | 结束时间 18:00                |
| step         | string        | 间隔时间 00:30                |
| min-time     | string        | 最早时间点，早于该时间的时间段将被禁用|
| max-time     | string        | 最晚时间点，晚于该时间的时间段将被禁用       |
| disabled     | boolean/false | 禁用状态                      |
| width        | string        | 组件宽                       |
| clear        | boolean/false | 是否可清空                     |
| size         | string        | 大小                        |
| placeholder  | string        | 占位符                       |
| direction    | number        | 下拉的方向动画，0默认　1向下　2向上|
| downClass    | string        | 下拉面板类                     |
| downStyle    | object        | 下拉面板样式                    |
| appendToBody | boolean/false | 下拉插入到body                 |
| downHeight   | number        | 下拉的面板的高                   |
| icon         | string        | icon图标                    |

### TimeSelect Event

| 参数          | 说明             |
|-------------|----------------|
| change      | modelValue改变事件 |
| toggleClick | 点击展开收起事件       |
| clear       | 清空事件           |
