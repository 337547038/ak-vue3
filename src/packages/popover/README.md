# popover（Tooltip） 弹出框

### 基本用法

基于`tooltip`提示

```vue demo
<template>
    <div class="popover-demo">
      <ak-popover
        content="这是一段内容这是一段内容确定删除吗？"
        confirm="确定"
        cancel="取消"
        :callback="callback"
      >
        <ak-button>删除确认</ak-button>
      </ak-popover>
     
      <ak-popover confirm="确定" cancel="取消" :callback="callback">
        <ak-button>删除确认</ak-button>
        <template #content> 这是一段内容这是一段内容确定删除吗？ </template>
      </ak-popover>
    </div>
</template>
<script setup>
  const callback = () => {
    alert('点击了确定')
  }
</script>


```

## API

### Popover Props

| 参数        | 类型       | 说明                       |
|-----------|----------|--------------------------|
| confirm   | string   | 确认按钮文案                   |
| cancel    | string   | 取消按钮文案                   |
| callback  | function | 确认按钮事件                   |
| -         | -        | 其他同[Tooltip](/#/tooltip) |
