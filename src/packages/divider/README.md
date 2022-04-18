# Divider 分割线

### 基础用法

对段落间的文本进行分割

```vue demo
<template>
  <div>
    这是文本内容
    <ak-divider />
    <p>也可以是虚线 borderStyle="dashed"</p>
    <ak-divider borderStyle="dashed" padding="10px" />
    <p>这是文本内容 borderStyle="dotted"</p>
    <ak-divider borderStyle="dotted" />
    <p>这是文本内容</p>
    <ak-divider borderStyle="double" />
  </div>
</template>
```

### 设置文案提示

对段落间的文本进行分割

```vue demo
<template>
  <div>
    这是文本内容
    <ak-divider contentPosition="left">标题</ak-divider>
    <p>这是文本内容</p>
  </div>
</template>
```

### 垂直分隔线

对段落间的文本进行分割

```vue demo
<template>
  <div>
    <span>编辑</span>
    <ak-divider direction="vertical" borderStyle="dashed"></ak-divider>
    <span>查看</span>
    <ak-divider direction="vertical"></ak-divider>
    <span>删除</span>
  </div>
</template>
```

## API

### Divider

| 参数             | 类型   | 说明                                                |
| ---------------- | ------ | --------------------------------------------------- |
| direction        | string | 设置分割线方向，可选 horizontal / vertical          |
| border-style     | string | 线条类型，可选`dashed`、`dotted`、`soild`           |
| content-position | string | 设置分割线文案的位置，可选`left`、`right`、`center` |
| padding          | string | 上下/左右边距                                       |
