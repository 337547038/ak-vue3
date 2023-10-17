# SelectDown下拉

统一下拉组件，为`select`,`datePick`,`cascader`等提供统一交互

### 基础用法

```vue demo
<template>
  <ak-select-down v-model="modelValue" placeholder="placeholder">
    <p>21311</p>
    <p>基础用法</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref([])
</script>

```

### 禁用模式

```vue demo
<template>
  <ak-select-down v-model="modelValue" placeholder="placeholder" disabled>
    <p>21311</p>
    <p>禁用模式</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref([])
</script>

```

### 可清空

```vue demo
<template>
  <ak-select-down v-model="modelValue" placeholder="placeholder" clear>
    <p>21311</p>
    <p>可清空</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['可清空值'])
</script>

```

### 多选模式

```vue demo
<template>
  <ak-select-down v-model="modelValue" multiple placeholder="placeholder">
    <p>多选模式，同时设置vue项不能删除</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['reactive', 'form', {label:'vue',disabled:true}])
</script>

```

### 多选折叠模式

```vue demo
<template>
  <ak-select-down v-model="modelValue" multiple collapseTags placeholder="placeholder">
    <p>同时带有不能删除的选项</p>
    <p>多选折叠模式</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref([{label:'del',disabled:true},'reactive', 'form', 'vue'])
</script>

```

### 可输入模式

```vue demo
<template>
  <div>
    <ak-select-down
      v-model="modelValue"
      multiple
      filterable
      collapseTags
      placeholder="placeholder"
      @blur="blurEvent"
      @focus="focusEvent"
      @input="inputEvent"
    >
      <p>21311</p>
      <p>可输入模式</p>
    </ak-select-down>
    <div style="height: 20px"></div>
    <ak-select-down
      v-model="modelValue2"
      filterable
      placeholder="placeholder"
      @blur="blurEvent"
      @focus="focusEvent"
      @input="inputEvent"
    >
      <p>21311</p>
      <p>可输入模式</p>
    </ak-select-down>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['reactive', 'form', 'vue'])
  const modelValue2 = ref(['reactive'])
  const blurEvent = (val: string[]) => {
    console.log('blurEvent')
    console.log(val)
  }
  const focusEvent = (val: string[]) => {
    console.log('focusEvent')
    console.log(val)
  }
  const inputEvent = (val: string[]) => {
    console.log('inputEvent')
    console.log(val)
  }
</script>


```

### 插入到body中

```vue demo
<template>
  <ak-select-down v-model="modelValue" appendToBody placeholder="placeholder">
    <p>21311</p>
    <p>插入到body中</p>
  </ak-select-down>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref([])
</script>

```

### 其他设置

弹出下拉面板设置`down-class`、`down-style`、`down-height`

```vue demo
<template>
  <div>
    <ak-select-down
      v-model="modelValue"
      down-class="down-class"
      :down-style="{ width: '300px' }"
      :down-height="300"
      placeholder="placeholder"
    >
      <p>其他设置</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
    </ak-select-down>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['reactive'])
</script>

```

### 使用不同的图标

```vue demo
<template>
  <div>
    <ak-select-down
      v-model="modelValue"
      icon="down"
      placeholder="placeholder"
    >
      <p>使用不同的图标</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
      <p>21311</p>
    </ak-select-down>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['reactive'])
</script>

```

### 显示区间值

```vue demo
<template>
  <div>
    <ak-select-down
      v-model="modelValue"
      isRange
      endPlaceholder="结束点位符"
      placeholder="placeholder"
    >
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
      <p>显示区间值</p>
    </ak-select-down>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const modelValue = ref(['start', 'end'])
</script>

```

## API

### SelectDown Props

| 参数             | 类型            | 说明                      |
|----------------|---------------|-------------------------|
| v-model        | array         | 显示的值                    |
| width          | string        | 组件宽                     |
| multiple       | boolean/false | 多选模式                    |
| collapseTags   | boolean/false | 多选模式下是否折叠Tag            |
| clear          | boolean/false | 是否可清空                   |
| filterable     | boolean/false | 是否可搜索选项                 |
| size           | string        | 大小                      |
| placeholder    | string        | 占位符                     |
| disabled       | boolean/false | 禁用状态                    |
| direction      | number        | 下拉的方向动画，0自动(默认)　1向下　2向上 |
| downClass      | string        | 下拉面板类                   |
| downStyle      | object        | 下拉面板样式                  |
| appendToBody   | boolean/false | 下拉插入到body               |
| downHeight     | number        | 下拉的面板的高                 |
| icon           | string        | icon图标                  |
| fixedIcon      | boolean/false | 固定icon图标，即点击时不旋转        |
| isRange        | boolean/false | 显示区间，此时`multiple`无效     |
| rangeSeparator | string        | 区间分隔符，默认`To`            |
| endPlaceholder | string        | isRange为true时的，结束输入框点位符 |

### SelectDown Event

| 参数          | 说明                                                 |
|-------------|----------------------------------------------------|
| input       | 可输入时输入框改变事件,function(val,index) index区间选择时两个输入框的标识 |
| blur        | 可输入时输入框焦点事件                                        |
| focus       | 可输入时输入框获得焦点事件                                      |
| toggleClick | 点击展开收起事件                                           |
| clear       | 清空事件                                               |
| delete      | 删除单个选项,多选时有效，(index:number) -1从下拉列表点击删除            |

### SelectDown Methods

| 参数       | 说明             |
|----------|----------------|
| slideUp  | 收起下拉           |
