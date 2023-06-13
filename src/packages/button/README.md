## Button 按钮

默认情况下输出 a 标签

### 基础用法

按钮支持 `default`、`primary`、`success`、`warning`、`danger`、`text` 六种类型，默认为 `default`。

```vue demo

<template>
  <div class="row">
    <ak-button :loading="false">默认按钮</ak-button>
    <ak-button type="primary">主要按钮</ak-button>
    <ak-button type="success">成功按钮</ak-button>
    <ak-button type="danger">危险按钮</ak-button>
    <ak-button type="warning">警告按钮</ak-button>
    <ak-button type="text">文字按钮</ak-button>
  </div>
  <div class="row">
    <ak-button :round="true">默认按钮</ak-button>
    <ak-button :round="true" type="primary">主要按钮</ak-button>
    <ak-button :round="true" type="success">成功按钮</ak-button>
    <ak-button :round="true" type="danger">危险按钮</ak-button>
    <ak-button :round="true" type="warning">警告按钮</ak-button>
    <ak-button :round="true" type="text">文字按钮</ak-button>
  </div>
  <div class="row">
    <ak-button :plain="true">默认按钮</ak-button>
    <ak-button :plain="true" type="primary">主要按钮</ak-button>
    <ak-button :plain="true" type="success">成功按钮</ak-button>
    <ak-button :plain="true" type="danger">危险按钮</ak-button>
    <ak-button :plain="true" type="warning">警告按钮</ak-button>
    <ak-button :plain="true" type="text">文字按钮</ak-button>
  </div>
  <div class="row">
    <ak-button :plain="true" circle>默</ak-button>
    <ak-button :plain="true" type="primary" circle>主</ak-button>
    <ak-button :plain="true" type="success" circle icon="success"></ak-button>
    <ak-button :plain="true" type="danger" circle>危</ak-button>
    <ak-button :plain="true" type="warning" circle>警</ak-button>
    <ak-button :plain="true" type="text" circle>文</ak-button>
  </div>
</template>
<style>
.row {margin-bottom: 10px}
</style>
```

### 禁用状态

使用`disabled="true"`禁用

```vue demo

<template>
  <div>
    <ak-button :disabled="true">默认按钮</ak-button>
    <ak-button :disabled="true" type="primary">确认按钮</ak-button>
    <ak-button :disabled="true" type="success">取消按钮</ak-button>
    <ak-button :disabled="true" type="text">文字按钮</ak-button>
  </div>
</template>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 normal

```vue demo

<template>
  <div class="row">
    <ak-button size="large" type="primary">大号按钮</ak-button>
    <ak-button type="primary">正常按钮</ak-button>
    <ak-button size="small" type="primary">小号按钮</ak-button>
    <ak-button size="mini" type="primary">迷你按钮</ak-button>
  </div>
  <div class="row">
    <ak-button size="large" type="primary" :round="true">大号按钮</ak-button>
    <ak-button type="primary" :round="true">正常按钮</ak-button>
    <ak-button size="small" type="primary" :round="true">小号按钮</ak-button>
    <ak-button size="mini" type="primary" :round="true">迷你按钮</ak-button>
  </div>
</template>
```

### 带 Icon 图标

```vue demo

<template>
  <div>
    <ak-button icon="search">默认按钮</ak-button>
    <ak-button icon="search" type="primary">确认按钮</ak-button>
    <ak-button icon="search" type="success">成功按钮</ak-button>
    <ak-button icon="search" type="text">文字按钮</ak-button>
  </div>
</template>
```

### 带链接地址

```vue demo

<template>
  <div>
    <p>直接添加标签属性</p>
    <ak-button href="/button">默认按钮</ak-button>
    <ak-button href="/button" type="primary">确认按钮</ak-button>
    <ak-button href="/button" type="success">成功按钮</ak-button>
    <ak-button href="/button" type="text">文字按钮</ak-button>
  </div>
</template>
```

### 输出原始按钮

使用`nativeType="button/submit/reset"`输出 button

```vue demo

<template>
  <div>
    <ak-button nativeType="button">Button</ak-button>
    <ak-button nativeType="submit" type="primary">Submit</ak-button>
    <ak-button nativeType="reset" type="success">Reset</ak-button>
  </div>
</template>
```

### 按钮组

可统一设置组内按钮`size`,`disabled`,`width`,`round`属性和`click`点击事件

```vue demo

<template>
  <p>
    <ak-button-group size="mini" @click="btnGroupClick">
      <ak-button name="btn1">默认按钮</ak-button>
      <ak-button type="primary" name="btn2">确认按钮</ak-button>
      <ak-button type="success" name="btn3">成功按钮</ak-button>
      <ak-button type="text" name="btn4">文字按钮</ak-button>
    </ak-button-group>
  </p>
  <p>
    <ak-button-group :disabled="true" @click="groupClick">
      <ak-button>默认按钮</ak-button>
      <ak-button type="primary" @click="groupSingleClick">确认按钮</ak-button>
      <ak-button type="success">成功按钮</ak-button>
      <ak-button type="text">文字按钮</ak-button>
    </ak-button-group>
  </p>
</template>
<script lang="ts" setup>
const btnGroupClick = (evt: MouseEvent, name: string) => {
  console.log(name) // 用于区分点击了哪个按钮
}
const groupClick = () => {
  console.log('groupClick')
}
const groupSingleClick = () => {
  console.log('groupClick')
}
</script>

```

## API

### Button Props

| 参数         | 类型            | 说明                                                                      |
|------------|---------------|-------------------------------------------------------------------------|
| type       | String        | 类型，实际是给按钮添加类名，支持`default`、`primary`、`success`、`warning`、`danger`、`text` |
| size       | String        | 大小尺寸，支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`               |
| width      | String        | 按钮宽                                                                     |
| round      | boolean/false | 是否圆角按钮                                                                  |
| plain      | boolean/false | 是否为朴素按钮                                                                 |
| href       | String        | a 标签链接地址                                                                |
| disabled   | boolean/false | 是否禁用状态                                                                  |
| icon       | String        | 前缀 icon                                                                 |
| loading    | boolean/false | 是否加载中状态                                                                 |
| nativeType | String        | 原生 type 属性，button / submit / reset                                      |
| name       | String        | 按钮组时有效，按钮组点击事件时返回当前按钮唯一标识                                               |
| -          | -             | 其它原生属性                                                                  |

### Button Event

| 参数    | 说明 |
|-------|----|
| click | -  |

### Button Group

| 参数       | 类型            | 说明                            |
|----------|---------------|-------------------------------|
| size     | String        | 大小尺寸，可选 medium / small / mini |
| width    | String        | 按钮宽                           |
| round    | boolean/false | 是否圆角按钮                        |
| disabled | boolean/false | 是否禁用状态                        |

### Button Group Event

| 参数    | 说明 |
|-------|----|
| click | -  |
