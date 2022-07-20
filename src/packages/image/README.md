# Image 图片

### 基本使用

通过`fit`确定图片如何适应到容器框

```vue demo
<template>
  <div class="image-demo">
    <div v-for="fit in fits" :key="fit" class="list">
      <span>{{ fit }}</span>
      <ak-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
  <div>
    <p>fill:默认，不保证保持原有的比例，内容拉伸填充整个内容容器</p>
    <p>contain:保持原有尺寸比例。内容被缩放</p>
    <p>cover:保持原有尺寸比例。但部分内容可能被剪切</p>
    <p>none:保留原有元素内容的长度和宽度，也就是说内容不会被重置</p>
    <p>scale-down:保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些</p>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  const url = './image/img2.png'
</script>

```

### 设置边框圆角

```vue demo
<template>
  <div class="image-demo">
    <ak-image style="width: 100px; height: 100px" src="./image/img2.png" border fit="contain"/>
    <ak-image style="width: 100px; height: 100px" src="./image/img2.png" radius="50%"/>
  </div>
</template>

```

### 占位符，加载状态，加载异常

```vue demo
<template>
  <div class="image-demo">
    <ak-image style="width: 100px; height: 100px" src="./image/img2.png">
    <template #placeholder>
      加载中...
    </template>
    </ak-image>
    <ak-image style="width: 100px; height: 100px" src="./image/img20.png">
    <template #error>
      自定义加载失败
    </template>
    </ak-image>
    <ak-image style="width: 100px; height: 100px" src="./image/img20.png">
    </ak-image>
  </div>
</template>

```

### 预览

```vue demo
<template>
  <div class="image-demo">
    <ak-image
      :src="url"
      class="cls"
      style="width: 100px; height: 100px"
      :previewSrcList="previewSrcList"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const url = ref('./image/img2.png')
  const previewSrcList = ['./image/img1.png', './image/img2.png']
</script>

```

## API

### Image Props

| 参数               | 类型       | 说明                 |
|------------------|----------|--------------------|
| src              | string   | 图片源地址，同原生属性一致      |
| fit              | string   | 图片如何适应容器框，同原生 object-fit，可选`'fill'｜'contain'｜'cover'｜'none'｜'scale-down'` |
| alt              | string   | 原生alt属性            |
| preview-src-list | string[] | 开启图片预览功能           |
| z-index          | number   | 设置图片预览的 z-index    |
| previewCls       | string   | 图片预览窗口类名           |
| border           | boolean  | 显示边框               |
| radius           | string   | 圆角  |

### Image Slots

|参数|说明|
|----------|--------|
|error         |加载失败内容|
|placeholder   |自定义占位内容|
