<!-- Created by 337547038 on 2021/6/14. -->

# Radio 单选框

### 基础用法

单个使用时，`v-model`为true时选中状态

```vue demo
<template>
  <p>
    <ak-radio v-model="state.radio1">选项1</ak-radio>
    当前值：{{ state.radio1 }}
  </p>
  <p>
    <ak-radio v-model="state.radio2">选项2</ak-radio>
    当前值：{{ state.radio2 }}
  </p>
  <p>
    <ak-radio v-model="state.radio3" :disabled="true">禁用5</ak-radio>
    当前值：{{ state.radio3 }}
  </p>
  <p>
    <ak-radio v-model="state.radio4" :disabled="true">禁用6</ak-radio>
    当前值：{{ state.radio4 }}
  </p>
</template>
<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    radio1: true,
    radio2: false,
    radio3: true,
    radio4: false
  })
</script>


```

### 指定选中状态的值

使用`value`时，选中状态返回`value`的值，当`v-model=value`时为选中状态。

```vue demo
<template>
  <div>
    <p>
      <ak-radio v-model="state.radio1" value="a">选项1</ak-radio>
      当前值：{{ state.radio1 }}
    </p>
    <p>
      <ak-radio v-model="state.radio2" :value="1">选项2</ak-radio>
      当前值：{{ state.radio2 }}
    </p>
    <p>
      <ak-radio v-model="state.radio3" :value="true">选项3</ak-radio>
      当前值：{{ state.radio3 }}
    </p>
    <p>
      <ak-radio v-model="state.radio4" value="ab">选项4</ak-radio>
      当前值：{{ state.radio4 }}
    </p>
  </div>
</template>
<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    radio1: '',
    radio2: '',
    radio3: '',
    radio4: 'ab'
  })
</script>


```

### 单选组

```vue demo

<template>
  <div>
  <div>当前值：{{state.radio1}}</div>
  <ak-radio-group :options="state.data1" v-model="state.radio1" @change="changeGroup"/>
  </div>
  <div>
  <div>整个组不可选，当前值：{{state.radio2}}</div>
  <ak-radio-group :options="state.data1" v-model="state.radio2" :disabled="true"/>
  </div>
</template>

<script setup>
import {reactive} from 'vue'

const state = reactive({
  radio1: 'a2',
  radio2: 'a3',
  data1: [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {label: '选项4', value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true}
  ]
})
const changeGroup = (value,item)=>{
  console.log(value)
  console.log(item)
}
</script>

```

## API

### Radio

|参数|类型|说明|
|----------|--------------|--------|
|v-model       | string/boolean/number    |Radio 的 v-model|
|value         | string/boolean/number    |选中的值，当v-model＝value时为选中状态|
|disabled      | boolean/false  |是否禁用|
|label         | String         |显示的文本值，也可以是slot|

### Radio Event

|参数|说明|
|----------|--------------|
|change          |  改变事件|

### Radio Group

|参数|类型|说明|
|----------|--------------|--------|
|v-model         | string         |Radio组 的 v-model|
|options         | array          |组数据|
| optionsKey    | object        | 指定选择数据的label和value属于，默认{label:'label',value:'value'} |
|disabled        | Boolean/false   |禁用组|

### Radio Group Event

|参数|说明|
|----------|--------------|
|change          | 改变事件,返回(value,item) value为当前选中的值，item为当前data中选中的项|

### Radio Group options

|参数|类型|说明|
|----------|--------------|--------|
|label          | string         |显示的文本值|
|value          | string         |当前选项值|
|disabled       | boolean/false  |是否禁用|
