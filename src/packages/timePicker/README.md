# TimePicker 时间选择

### 基础用法

```vue demo
<template>
  <ak-time-picker v-model="value" />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const date = new Date()
  const value = ref(date.toLocaleTimeString())
</script>

```

### 可输入

```vue demo
<template>
  <ak-time-picker v-model="value" filterable />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const date = new Date()
  const value = ref(date.toLocaleTimeString())
</script>

```

### 限制时间范围

使用`disabled-time`限制时间选择范围

示例限制时间范围上午 9-12，下午 14-18 点

选择 9 点时，9:30 可选，选择 18 点时，18:30 之前可选

```vue demo
<template>
  <ak-time-picker v-model="value" :disabled-time="disabledHours" />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const date = new Date()
  const value = ref(date.toLocaleTimeString())

  interface Time {
    h: number // 时
    m: number // 分
    s: number // 秒
    a: number // 当前值
  }

  const disabledHours = (time: Time, type: string) => {
    const { a, h } = time
    if (type === 'h') {
      // return (a < 9 || a > 12) && (a < 14 || a > 18)
      return ![9, 10, 11, 12, 14, 15, 16, 17, 18].includes(a) // 返回9-12 14-18
    }
    if (type === 'm') {
      // 从9:30开始可选，18点时分钟最大可选30分钟
      return (h === 9 && a < 30) || (h === 18 && a > 30)
    }
  }
</script>

```

### 区间选择
```vue demo
<template>
  <ak-time-picker v-model="modelValue" is-range />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const modelValue = ref([])
</script>

```

## API

### TimeSelect Props

| 参数         | 类型          | 说明                                     |
| ------------ | ------------- | ---------------------------------------- |
| v-model      | string        | 显示的值                                 |
| disabled     | boolean/false | 禁用状态                                 |
| width        | string        | 组件宽                                   |
| clear        | boolean/false | 是否可清空                               |
| filterable   | boolean/false | 可输入                                   |
| size         | string        | 大小                                     |
| placeholder  | string        | 占位符                                   |
| direction    | number        | 下拉的方向动画，0 默认　 1 向下　 2 向上 |
| downClass    | string        | 下拉面板类                               |
| downStyle    | object        | 下拉面板样式                             |
| appendToBody | boolean/false | 下拉插入到 body                          |
| downHeight   | number        | 下拉的面板的高                           |
| icon         | string        | icon 图标                                |

### TimeSelect Event

| 参数          | 说明      |
|-------------|---------|
| toggleClick | 点击展开收起事件 |
| clear       | 清空事件    |
| blur        | 失焦事件    |
