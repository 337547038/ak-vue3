<!-- Created by 337547038 on 2021/6/15 0015. -->

# select 下拉选择

### 基础用法

```vue demo
<template>
  <p>
    <ak-select v-model="value1" placeholder="请选择" :options="options" />
  </p>
  <p>
    <ak-select v-model="value2" placeholder="请选择" :options="options" />
  </p>
  <p>
    <ak-select
      v-model="value3"
      placeholder="禁用状态不能选择"
      :options="options"
      :disabled="true"
    />
  </p>
  <p>
    <ak-select
      v-model="value4"
      placeholder="设置最大下拉高度"
      :options="options"
      :downHeight="100"
    />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref(1)
  const value2 = ref('2')
  const value3 = ref('')
  const value4 = ref('')
</script>

```

### 可清空选项

`clear=true`

```vue demo
<template>
  <ak-select
    placeholder="请选择"
    :options="options"
    v-model="value1"
    :clear="true"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref('')
</script>

```

### 可搜索

`filterable=true`

```vue demo
<template>
  <ak-select placeholder="请选择" :options="options" v-model="value1" :filterable="true" />
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const options = ref([
      {label: '选项1', value: '1'},
      {label: '选项2', value: '2'},
      {label: '选项3', value: '3'},
      {label: '选项4', value: '4', disabled: true},
      {label: '选项5', value: '5'},
      {label: '6'},
      {label: '选项7', value: '7'},
      {label: '选项8', value: '8'},
      {label: '选项9', value: '9'},
      {label: '选项10', value: '10', class: 'red'}
    ])
    const value1 = ref('')
    return {
      options,
      value1
    }
  }
}
</script>
```

### 异步搜索

`filterable=true` `async="true"` `@input="searchChange"`

```vue demo
<template>
  <ak-select
    v-model="value1"
    placeholder="请选择"
    :options="options"
    :filterable="true"
    :async="true"
    @input="searchChange"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref('')
  const searchChange = (val: string) => {
    console.log(val)
    options.value = [{ label: '输入搜索', value: '1' }]
  }
</script>

```

### 可多选

`multiple=true`。多选时`v-model`必须是数组，同时可设置`multiple-limit`最多选择的个数及提示信息

```vue demo
<template>
  <ak-select
    v-model="value1"
    placeholder="请选择"
    :options="options"
    :multiple="true"
    :multiple-limit="3"
    @limitChange="limitChange"
  />
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref([])
  const limitChange = () => {
    alert('最多选择3项')
  }
</script>


```

### 改变前拉截事件

```vue demo
<template>
  <ak-select
    placeholder="请选择"
    :options="options"
    v-model="value1"
    @change="change"
    :beforeChange="beforeChange"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref([])
  const change = (value: any, item: any) => {
    console.log('change')
    console.log(value, item)
  }
  const beforeChange = (item: any) => {
    console.log(item)
    alert('不能选择')
    return false
  }
</script>


```

### 使用`Option`组件，参数和`select`的`option`一致

```vue demo
<template>
  <ak-select placeholder="请选择" v-model="value1">
    <ak-option value="11" label="选择一" />
  </ak-select>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>

```

### 向上弹出选项面板

```vue demo
<template>
  <ak-select
    placeholder="请选择"
    v-model="value1"
    :options="options"
    :direction="2"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const options = ref([
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref('')
</script>

```

### 选择数据指定的label和value

使用`optionsKey`指定取值的key的值

```vue demo
<template>
  <ak-select
    width="100px"
    placeholder="请选择"
    v-model="value1"
    :options="options"
    :optionsKey="{ label: 'key', value: 'name' }"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const options = ref([
    { key: '选项1', name: '1' },
    { key: '选项2', name: '2' },
    { key: '选项3', name: '3' },
    { key: '选项4', name: '4', disabled: true },
    { key: '选项5', name: '5' },
    { key: '6' },
    { key: '选项7', name: '7' },
    { key: '选项8', name: '8' },
    { key: '选项9', name: '9' },
    { key: '选项10', name: '10', class: 'red' }
  ])
  const value1 = ref('')
</script>

```

### 创建新的选项

可以创建并选中选项中不存在的条目

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 allow-create 正确的工作， filterable 的值必须为 true. 按下回车就可以选中当前选项列表中的第一个选项。

```vue demo
<template>
  <p>
    <ak-select
      v-model="value1"
      placeholder="请选择"
      :options="options"
      multiple
      filterable
      allow-create
      @delete="deleteOptions"
    />
  </p>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4', disabled: true },
    { label: '选项5', value: '5' },
    { label: '6' },
    { label: '选项7', value: '7' },
    { label: '选项8', value: '8' },
    { label: '选项9', value: '9' },
    { label: '选项10', value: '10', class: 'red' }
  ])
  const value1 = ref([])
  const deleteOptions = (index: number) => {
    console.log(index)
  }
</script>

```

## API

### Select

| 参数            | 类型            | 说明                                                   |
|---------------|---------------|------------------------------------------------------|
| v-model       | string,array  | 通过v-model绑定，`multiple`时为`array`                      |
| multiple      | boolean/false | 是否多选                                                 |
| multipleLimit | number/0      | 多选时用户最多可以选择的项目数，为 0 则不限制                             |
| disabled      | boolean/false | 是否禁用                                                 |
| placeholder   | string        | 占位符,value为空时显示。占位符为空时显示options第一项                    |
| filterable    | boolean/false | 是否可搜索，对当前下拉数据筛选                                      |
| async         | boolean/false | 异步搜索，`filterable=true`时有效                            |
| options       | array         | 下拉选项数据                                               |
| optionsKey    | object        | 指定选择数据的label和value属性，默认{label:'label',value:'value'} |
| clear         | boolean/false | 是否可以清空选项                                             |
| downHeight    | Number        | 最大下拉高度，默认200                                         |
| downStyle     | object        | 下拉面板样式，方便对单个select个性化设置，也可通过css控制                    |
| downClass     | string        | 下拉面板类名                                               |
| appendToBody  | boolean/false | 将下拉面板插入到body                                         |
| direction     | Number/0      | 下拉弹出方向，0自动，1向上，2向下                                   |
| width         | string        | 宽度                                                   |
| beforeChange  | Function      | 选项改变前事件,`return false`阻止选择                           |
| size          | string        | 添加的大小尺寸样式                                            |
| allowCreate   | boolean       | 允许动态创建                                               |

### Options Attributes

|参数|类型|说明|
|----------|--------------|--------|
|value            | string                |选项的值|
|label            | string                |选项的标签，若不设置则默认与 value 相同|
|disabled         | boolean/false         |是否禁用该选项|
|class            | string                |对当前项添加样式|

### Select Events

| 参数          | 说明                                                |
|-------------|---------------------------------------------------|
| change      | 选中值发生变化时触发                                        |
| limitChange | 超出最大选择数时事件，仅`multiple=true`和设定了`multipleLimit`时有效 |
| input       | 可搜索时输入框改变事件                                       |
| blur        | 可搜索时输入框焦点事件                                       |
| focus       | 可搜索时输入框获得焦点事件                                     |
| clear       | 清空事件                                              |
| delete      | 删除单个选项,多选时有效                                      |

### Select Method

|参数|类型|
|----------|--------------|
|slideUp            |用于收起下拉|

