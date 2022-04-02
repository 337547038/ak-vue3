# Divider 分割线

### 基础用法

对段落间的文本进行分割

```vue demo
<template>
  <div>
    这是文本内容
    <ak-divider />
    <p>也可以是虚线 borderStyle="dashed"</p>
    <ak-divider borderStyle="dashed" />
    <p>这是文本内容 borderStyle="dotted"</p>
    <ak-divider borderStyle="dotted" />
    <p>这是文本内容</p>
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
    <ak-divider direction="vertical"></ak-divider>
    <span>查看</span>
    <ak-divider direction="vertical"></ak-divider>
    <span>删除</span>
  </div>
</template>
```
