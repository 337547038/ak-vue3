<!-- Created by 337547038 on 2021/6/25. -->

# Tabs 标签页

### 基本用法

```vue demo
<template>
  <ak-tabs>
    <ak-tab-pane label="用户管理">人生若只如初见，何事秋风悲画扇</ak-tab-pane>
    <ak-tab-pane label="配置管理">众里寻他千百度，蓦然回首，那人却在，灯火阑珊处</ak-tab-pane>
    <ak-tab-pane label="角色管理">问世间情为何物，直教生死相许</ak-tab-pane>
    <ak-tab-pane label="定时任务补偿">同是天涯沦落人，相逢何必曾相识</ak-tab-pane>
  </ak-tabs>
</template>
```

### 可设置禁用项

可通过`disabled`设置禁用状态

```vue demo
<template>
  <akTabs>
    <ak-tab-pane label="用户管理">人生若只如初见，何事秋风悲画扇</ak-tab-pane>
    <ak-tab-pane label="配置管理" :disabled="true">众里寻他千百度，蓦然回首，那人却在，灯火阑珊处</ak-tab-pane>
    <ak-tab-pane label="角色管理">问世间情为何物，直教生死相许</ak-tab-pane>
    <ak-tab-pane label="定时任务补偿">同是天涯沦落人，相逢何必曾相识</ak-tab-pane>
  </akTabs>
</template>
```

### 自定义标签页

可以通过具名`slot`来实现自定义标签页的内容

```vue demo
<template>
  <akTabs>
    <ak-tab-pane>
     <template #label><i class="icon-user"></i> 用户管理</template>
    用户管理内容
    </ak-tab-pane>
    <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
    <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
    <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
  </akTabs>
</template>
```

### 可自定初始显示项

通过添加`v-model`和`name`指定初始显示项。也可以只设置value值(`tab-*`*从1开始按顺序生成)，name为空

```vue demo
<template>
  <div>
    <ak-tabs v-model="tab2">
      <ak-tab-pane label="用户管理" name="tab1">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理" name="tab2">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理" name="tab3">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿" name="tab4">定时任务补偿</ak-tab-pane>
    </ak-tabs>
    <p>只设置value值</p>
    <ak-tabs v-model="tab3">
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const tab2 = ref('tab2')
  const tab3 = ref('tab-2')
</script>

```

### 可在Tabs内加入其他内容

可以通过具名`slot` 在标题和内容间显示其它内容

```vue demo
<template>
  <akTabs>
    <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
    <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
    <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
    <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    <template #content>这里可以加其他内容</template>
  </akTabs>
</template>
```

### 可不显示切换内容

很多时候并不需要通过显示和隐藏来切换内容，而是在点击选项卡标题时去动态加载数据，这时可设置`showContent:false`

```vue demo
<template>
  <div>
    <ak-tabs :show-content="false" @change="change">
      <ak-tab-pane label="用户管理" name="user" />
      <ak-tab-pane label="配置管理" />
      <ak-tab-pane label="角色管理" name="role"
        >角色管理，这里不需要有内容</ak-tab-pane
      >
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
    <div class="ajax-content">
      ajax content
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const content = ref('')
  const change = (obj, index) => {
    console.log(obj)
    content.value = `当前点击选项的name值：${obj.name || ''}；label为：${
      obj.label
    }`
  }
</script>

```

### 阻止事件

切换标签之前的钩子`beforeLeave`，若返回` false`，则阻止切换

```vue demo
<template>
  <div>
    <ak-tabs :beforeLeave="beforeLeave">
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup>
  const beforeLeave = (item) => {
    console.log(item)
    return false
  }
</script>

```

### 标签位置的设置
```vue demo
<template>
  <div>
    <ak-radio-group v-model="position" :options="options" />
    <ak-tabs :tab-position="position">
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const position = ref('top')
  const options = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' }
  ]
</script>


```

### 多个超出时可左右滚动


```vue demo
<template>
  <div style="width:500px">
    <ak-tabs>
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
      <ak-tab-pane label="用户管理2">用户管理2</ak-tab-pane>
      <ak-tab-pane label="配置管理2">配置管理2</ak-tab-pane>
      <ak-tab-pane label="角色管理2">角色管理2</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿2">定时任务补偿2</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup>
  
</script>

```

### 可关闭标签
```vue demo
<template>
  <div>
    <ak-tabs :closable="true">
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup>

</script>

```

## API

### Tabs

| 参数            | 类型       | 说明                                        |
|---------------|----------|-------------------------------------------|
| v-model       | string   | 绑定值。对应选项卡的 name，为空时自动生成`tab-*`，初始默认显示第一项  |
| beforeLeave   | function | 切换标签之前的钩子，若返回 false，则阻止切换                 |
| tabPosition   | string   | 显示方向 'top' 、'right'、'bottom'、'left',默认top |
| closable      | boolean  | 显示可关闭按钮，默认false                           |

### Tabs Event

|参数|说明|
|----------|--------------|
|change         | 点击改变事件,function(item, index)|

### Tabs Slot

| 参数         | 说明                |
|------------|-------------------|
| content    | 显示于标题和内容之间的其他内容信息 |
| leftExtra  | 左边扩展              |
| rightExtra | 右边扩展              |

### TabPane

|参数|类型|说明|
|----------|--------------|--------|
|name           | string         |对应 Tabs 的 v-model 值，为空时自动生成。一般可不填写|
|label          | string         |标签名称|
|disabled       | boolean/false  |禁用选顶|
| closable      | boolean  | 显示可关闭按钮，默认false                           |

### TabPane Slot

|参数|说明|
|----------|--------------|
|label          | |
