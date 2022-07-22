# Slider 滑块

### 基础用法

```vue demo
<template>
  <div class="demo-slider">
    <p>基础用法：{{ value1 }}</p>
    <div><ak-slider v-model="value1" /></div>

    <p>隐藏提示：{{ value2 }}</p>
    <div><ak-slider v-model="value2" :showTooltip="false" /></div>

    <p>格式化提示：{{ value3 }}</p>
    <div><ak-slider v-model="value3" :formatTooltip="formatTooltip" /></div>

    <p>禁用状态：{{ value4 }}</p>
    <div><ak-slider v-model="value4" :disabled="true" /></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(0)
  const value2 = ref(50)
  const value3 = ref(25)
  const value4 = ref(25)
  const formatTooltip = (value: number) => {
    return value + '%'
  }
</script>

```

### 指定滑动步长

步长`step=10`

```vue demo
<template>
  <div>
    <p>指定滑动步长：{{ value1 }}</p>
    <div><ak-slider v-model="value1" :step="10" /></div>

    <p>显示间断点：{{ value2 }}</p>
    <div><ak-slider v-model="value2" :step="10" :showStops="true" /></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(30)
  const value2 = ref(30)
</script>

```

### 设置最小值和最大值

`min`最小值10，`max`最大值80

```vue demo
<template>
  <div>
    <p>指定最大值和最小值：{{ value1 }}</p>
    <div><ak-slider v-model="value1" :min="10" :max="80" /></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(30)
</script>

```

### 设定选择范围

通用`value`传入两个值即可

```vue demo
<template>
  <div>
    <p>选择范围{{ value1 }}</p>
    <div><ak-slider v-model="value1" /></div>

    <p>选择范围，并指定最大最小值{{ value2 }}</p>
    <div><ak-slider v-model="value2" :min="10" :max="80" /></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref([30, 60])
  const value2 = ref([30, 50])
</script>

```

### 展示标记

key表示当前所占百分比位置

```vue demo
<template>
  <div>
  
    <p>展示标记{{value1}}</p>
    <div><ak-slider v-model="value1" :marks="marks"></ak-slider></div>
    
  </div>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const value1=ref(80)
  const marks=ref({
          0: 'start',
          25: '25%',
          50: 'center',
          75: '75%',
          100: '<i style="color:red">end</i>'
        })
</script>
```

## API

### Slider

| 参数            | 类型              | 说明                            |
|---------------|-----------------|-------------------------------|
| value         | Number,Array    | 当前值，默认为0。Array时为范围选择          |
| min           | Number/0        | 最小值                           |
| max           | Number/100      | 最大值                           |
| step          | Number/1        | 步长                            |
| disabled      | Boolean/false   | 是否禁用                          |
| showStops     | Boolean/false   | 是否显示间断点                       |
| showTooltip   | Boolean/false   | 是否显示 tooltip                  |
| formatTooltip | Function        | 格式化 tooltip message，仅当showTooltip为true时 |
| marks         | Function　　　     | 标记， key 的类型必须为number，表示当前位置   |
| trigger       | String 　　　      | 触发改变事件，默认为鼠标弹起时触发，其他值时为鼠标移动时触发|

### Slider Event

|参数|类型|
|----------|--------------|
|change            |值改变时触发|

