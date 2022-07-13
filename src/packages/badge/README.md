# Badge 标记

### 基础用法

```vue demo
<template>
  <div>
    <ak-badge :value="12">
      <ak-button>评论</ak-button>
    </ak-badge>
    <ak-badge :value="2">
      <ak-button>回复</ak-button>
    </ak-badge>
  </div>
</template>
```

### 最大值

可自定义最大值，当 value 为 Number 时

```vue demo
<template>
  <div>
    <ak-badge :value="220" :max="99">
      <ak-button>回复</ak-button>
    </ak-badge>
    <ak-badge :value="220" :max="9"> 回复 </ak-badge>
  </div>
</template>
```

### 小圆点

以红点的形式标注需要关注的内容

```vue demo
<template>
  <div>
    <ak-badge :value="220" :dot="true">
      <ak-button>回复</ak-button>
    </ak-badge>
    <ak-badge :value="220" :dot="true"> 评论 </ak-badge>
  </div>
</template>
```

### 自定义内容

自定义显示内容

```vue demo
<template>
  <div>
    <ak-badge value="hot">
      <ak-button>回复</ak-button>
    </ak-badge>
    <ak-badge value="new"> 回复 </ak-badge>
  </div>
</template>
```

### 显示不同主题

支持 `default`、`primary`、`success`、`warning`、`danger`、五种类型，默认为 `danger`。

```vue demo
<template>
  <div>
    <ak-badge :value="12" type="primary">
      <ak-button>评论</ak-button>
    </ak-badge>
    <ak-badge :value="2" type="success">
      <ak-button>回复</ak-button>
    </ak-badge>
    <ak-badge :value="12" type="warning">
      <ak-button>评论</ak-button>
    </ak-badge>
    <ak-badge :value="2" type="danger">
      <ak-button>回复</ak-button>
    </ak-badge>
  </div>
</template>
```

## API

### Badge

| 参数  | 类型          | 说明                                                                    |
| ----- | ------------- |-----------------------------------------------------------------------|
| value | String/Number | 显示值                                                                   |
| max   | Number        | 最大值，value 为 Number 有效，默认99                                            |
| dot   | boolean/false | 显示小圆点                                                                 |
| type  | String        | 支持 `default`、`primary`、`success`、`warning`、`danger`、五种类型，默认为 `danger` |
