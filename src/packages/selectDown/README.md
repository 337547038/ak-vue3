# SelectDown下拉

统一下拉组件，为select,datePick,cascader提交统一交互

### 基础用法

```vue demo
<template>
  <ak-select-down
    v-model="modelValue"
    placeholder="placeholder">
    <p>21311</p>
    <p>21311</p>
  </ak-select-down>
</template>
<script>
import {reactive, toRefs} from 'vue'

export default {
  components: {},
  setup() {
    const state = reactive({
      modelValue: []
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

```

### 多选模式

```vue demo
<template>
  <ak-select-down
    v-model="modelValue"
    :multiple="true"
    placeholder="placeholder">
    <p>21311</p>
    <p>21311</p>
  </ak-select-down>
</template>
<script>
import {reactive, toRefs} from 'vue'

export default {
  components: {},
  setup() {
    const state = reactive({
      modelValue: ['reactive','form','placeholder']
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

```

### 多选折叠模式

```vue demo
<template>
  <ak-select-down
    v-model="modelValue"
    :multiple="true"
    :collapseTags="true"
    placeholder="placeholder">
    <p>21311</p>
    <p>21311</p>
  </ak-select-down>
</template>
<script>
import {reactive, toRefs} from 'vue'

export default {
  components: {},
  setup() {
    const state = reactive({
      modelValue: ['reactive','form','placeholder']
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

```

### 可输入模式

```vue demo
<template>
  <ak-select-down
    v-model="modelValue"
    :multiple="true"
    :filterable="true"
    :collapseTags="true"
    placeholder="placeholder">
    <p>21311</p>
    <p>21311</p>
  </ak-select-down>
</template>
<script>
import {reactive, toRefs} from 'vue'

export default {
  components: {},
  setup() {
    const state = reactive({
      modelValue: ['reactive','form','placeholder']
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

```

## API

### SelectDown Props

|参数|类型|说明|
|----------|--------------|--------|
|v-model     | array             |显示的值|
|width       | string            |组件宽|
|multiple    | boolean/false     |多选模式|
|collapseTags| boolean/false     |多选模式下是否折叠Tag|
|clear       | boolean/false     |是否可清空|
|filterable  | boolean/false     |是否可搜索选项|
|size        | string            |大小|
|placeholder | string            |占位符|
|disabled    | boolean/false     |禁用状态|
|direction   | number            |下拉的方向动画，0默认　1向下　2向上|
|downClass   | string            |下拉面板类|
|downStyle   | object            |下拉面板样式|
|appendToBody| boolean/false     |下拉插入到body|
|downHeight  | number            |下拉的面板的高|
|icon        | string            |icon图标|

### SelectDown Event

|参数|说明|
|----------|--------------|
|change       |可搜索时输入框改变事件|
|input        |可搜索时输入框改变事件|
|blur         |可搜索时输入框焦点事件|
|toggleClick  |点击展开收起事件|
|clear        |清空事件|
|delete       |删除单个选项|

### SelectDown Methods

|参数|说明|
|----------|--------------|
|slideUp       |收起下拉|
