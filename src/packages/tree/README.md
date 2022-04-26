<!-- Created by 337547038 on 2021/7/8. -->

# Tree 树

### 基本用法

```vue demo
<template>
  <ak-tree :data="data" />
</template>
<script setup>
  const data = [
    {
      label: '广东',
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
</script>

```

### 默认展开指定项

在列表数据`data`里使用`open="true"`可默认展开

```vue demo
<template>
  <ak-tree :data="data" />
</template>
<script setup>
  const data = [
    {
      label: '广东',
      open: true,
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
</script>

```

### 点击可选中值

使用`v-model="string/array"`，为`string`时单选，`array`时可多选，对应数据列表`data`的`id`值

```vue demo
<template>
  <p
    >当前选中值：{{ value }}
    <ak-tree :data="data" v-model="value" />
  </p>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('gd')
  const data = [
    {
      id: 'gd',
      label: '广东',
      children: [
        {
          id: 'gz',
          label: '广州',
          children: [
            { id: 'th', label: '天河区' },
            { id: 'by', label: '白云区' },
            { id: 'yx', label: '越秀区' },
            { id: 'hz', label: '海珠区' }
          ]
        },
        { id: 'sz', label: '深圳' },
        { id: 'dg', label: '东莞' },
        { id: 'fs', label: '佛山' }
      ]
    },
    { id: 'gx', label: '广西' },
    { id: 'bj', label: '北京' }
  ]
</script>

```

### 异步加载数据

使用`lazy="true"`，在点击展开时可异步加载数据，开启异步加载点击可返回回调方法，用于加载新数据。 返回当前项数据时会添加`isLoad`属性，用于表示当前项是否已经请求过数据，可减少重复请求

```vue demo
<template>
  <p>
    <ak-tree :data="data" @click="click" :lazy="true" />
  </p>
</template>
<script setup>
  const data = [
    { id: 'gd', label: '广东' },
    { id: 'gx', label: '广西' },
    { id: 'bj', label: '北京' },
    { id: 'sh', label: '上海', hasChild: false } // hasChild=false表示没有下级可加载
  ]
  const click = (item, resolve) => {
    if (!item.isLoad) {
      // false表示还没展开加载过
      let newData = []
      if (item.id === 'gd') {
        // 根据当前项的相关参数请求下一级
        newData = [
          { label: '天河区', hasChild: false },
          { label: '白云区', hasChild: false }
        ]
      }
      if (item.id === 'gx') {
        // 根据当前项的相关参数请求下一级
        newData = [
          { label: '桂林市', hasChild: false },
          { label: '南宁市', hasChild: false }
        ]
      }
      if (item.id === 'bj') {
        // 根据当前项的相关参数请求下一级
        newData = [
          { label: '朝阳区', hasChild: false },
          { label: '东城区', hasChild: false }
        ]
      }
      // 模拟请求数据
      setTimeout(() => {
        resolve && resolve(newData)
      }, 5000)
    }
  }
</script>

```

### 支持勾选

`showCheckbox="true"`可支持勾选，`change`为勾选改变事件

```vue demo
<template>
  <ak-tree :data="data" :showCheckbox="true" @change="change" />
</template>
<script setup>
  const data = [
    {
      label: '广东',
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
  const change = (obj) => {
    alert(JSON.stringify(obj))
  }
</script>


```

### 可使用slot自定义显示内容

```vue demo
<template>
  <ak-tree :data="data">
    <template #default="slot">
      <ak-button-group style="margin-left: 5px">
        <ak-button type="text" @click.stop="click(slot)">添加</ak-button>
        <ak-button type="text" @click.stop="click(slot)">修改</ak-button>
        <ak-button type="text" @click.stop="click(slot)">删除</ak-button>
      </ak-button-group>
    </template>
  </ak-tree>
</template>
<script setup>
  const data = [
    {
      label: '广东',
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
  const click = (obj) => {
    alert(JSON.stringify(obj))
  }
</script>

```

### 使用getValue取值

```vue demo
<template>
  <div>
    <ak-tree :data="data" :showCheckbox="true" ref="treeEl">
      <template #default="slot">
        <ak-button-group style="margin-left: 5px">
          <ak-button type="text" @click.stop="click(slot)">添加</ak-button>
          <ak-button type="text" @click.stop="click(slot)">修改</ak-button>
          <ak-button type="text" @click.stop="click(slot)">删除</ak-button>
        </ak-button-group>
      </template>
    </ak-tree>
    <p></p>
    <ak-button-group>
      <ak-button @click="getValue()">取值</ak-button>
      <ak-button @click="getValue(true)">取值(label)</ak-button>
    </ak-button-group>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const treeEl = ref()
  const data = [
    {
      label: '广东',
      children: [
        {
          label: '广州',
          children: [
            { label: '天河区' },
            { label: '白云区' },
            { label: '越秀区' },
            { label: '海珠区' }
          ]
        },
        { label: '深圳' },
        { label: '东莞' },
        { label: '佛山' }
      ]
    },
    { label: '广西' },
    { label: '北京' }
  ]
  const click = (obj) => {
    alert(JSON.stringify(obj))
  }
  const getValue = (bool) => {
    console.log(treeEl.value.getValue(bool))
  }
</script>


```

## API

### Tree Props

|参数|类型|说明|
|----------|--------------|--------|
|data           | Array         |列表数据|
|showCheckbox   | Boolean/false |显示勾选|
|lazy           | Boolean/false |是否异步加载|
|v-model        | Array/string  |选中的值，array时为多选|

### Tree Event

|参数|说明|
|----------|--------------|
|click     |点击事件|

### Tree Data

|参数|类型|说明|
|----------|--------------|--------|
|id             | string        |唯一值|
|checked        | Boolean/false |当前项为勾选状态，仅当showCheckbox=true时有效|
|open           | Boolean/false |是否展开当前项|
|hasChild       | Boolean/false |表示当前级下没有子级可加载。仅在`tree`里设置了异步加载`lazy="true"`时有效|
