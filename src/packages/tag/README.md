# Tag 标签

### 基本使用

由`type`属性来选择`tag`的类型

```vue demo
<template>
  <div>
    <ak-tag>标签一</ak-tag>
    <ak-tag type="info">标签二</ak-tag>
    <ak-tag type="warning">标签三</ak-tag>
    <ak-tag type="danger">标签四</ak-tag>
  </div>
</template>
<script>
</script>

```

### 不同尺寸

`Tag` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```vue demo
<template>
   <div>
    <ak-tag>默认标签</ak-tag>
    <ak-tag size="medium">中等标签</ak-tag>
    <ak-tag size="small">小型标签</ak-tag>
    <ak-tag size="mini">超小标签</ak-tag>
   </div>
</template>
<script>
</script>
```

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除

```vue demo
<template>
   <div>
    <ak-tag :closable="true">标签一</ak-tag>
    <ak-tag :closable="true" type='info'>标签二</ak-tag>
    <ak-tag :closable="true" type='warning'>标签三</ak-tag>
    <ak-tag :closable="true" type='danger'>标签四</ak-tag>
   </div>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
}
</script>
```

### 动态编辑标签

```vue demo
<template>
  <div>
    <ak-tag v-for="(item,index) in list" :key="item" :closable="true" @close="closeClick(index)">{{ item }}</ak-tag>
    <ak-input v-model="newTag" size="small" @keyup.enter="handleInputConfirm" />
  </div>
</template>
<script>

import {ref} from 'vue'

export default {
  setup() {
    const list = ref(['标签一', '标签二', '标签三'])
    const newTag = ref()
    const closeClick = index => {
      list.value.splice(index, 1)
    }
    const handleInputConfirm = () => {
      list.value.push(newTag.value)
      newTag.value = ''
    }
    return {
      list,
      closeClick,
      newTag,
      handleInputConfirm
    }
  }
}
</script>
```

## API

### Tag Props

|参数|类型|说明|
|----------|--------------|--------|
|type           | string         |类型，success/info/warning/danger|
|closable       | boolean/false  |是否可关闭|
|color          | string         |字体颜色|
|bgColor        | string         |背景色|
|borderColor    | string         |边框颜色|
|size           | string         |尺寸，medium / small / mini|
