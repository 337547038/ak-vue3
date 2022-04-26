# Upload 文件上传

### 基本用法

图片上传需要显示上传进度和状态时，需要在上传完成后通过回调事件更新图片地址和状态

```vue demo
<template>
  <ak-upload :action="action" @success="success">
    <ak-button type="primary">图片上传</ak-button>
  </ak-upload>
</template>
<script lang="ts" setup>
  const action = 'http://localhost/upload/upload.php'

  // 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功
  const success = (res: any, callback: any) => {
    callback(res.data, 2)
  }
</script>

```

### 图片列表
```vue demo
<template>
  <ak-upload
    :action="action"
    listType="picture"
    :multiple="true"
    @success="success"
  />
</template>
<script lang="ts" setup>
  const action = 'http://localhost/upload/upload.php'

  // 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功
  const success = (res: any, callback: any) => {
    callback('', 2)
  }
</script>

```

### 拖动上传
```vue demo
<template>
  <ak-upload
    :action="action"
    :drag="true"
    listType="picture"
    :multiple="true"
    @success="success"
  />
</template>
<script lang="ts" setup>
  const action = 'http://localhost/upload/upload.php'

  // 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功
  const success = (res: any, callback: any) => {
    callback('', 2)
  }
</script>

```

### 裁切上传
```vue demo
<template>
  <ak-img-crop :action="action" />
</template>
<script lang="ts" setup>
  const action = 'http://localhost/upload/upload.php'
</script>

```

## API

### Upload Props

|参数|类型|说明|
|----------|--------------|--------|
|modelValue 　| Array/Object   |上传的文件，单个文件时为object|
|name 　　　   | string 　　　　  |上传的文件字段名|
|action 　　   | string 　　　　 |必选参数，上传的地址|
|multiple 　| Boolean/false  |是否支持多选文件|
|accept 　    | string         |h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型|
|data 　      | Object         |上传时附带的额外参数|
|headers 　   | Object         |设置上传的请求头部|
|format 　    | string         |支持的文件后缀类型，多个用豆号隔开|
|maxSize 　   | number         |最大上传限制kb|
|timeout 　   | number         |指定请求超时的毫秒数|
|auto 　| Boolean/true   |是否自动上传文件|
|drag 　      | Boolean/false  |允许拖动上传|
|disabled 　  | Boolean/false  |禁止上传状态|
|limit 　     | number         |允许上传的最大数量|
|showFileList | Boolean/true   |是否显示已上传文件列表|
|listType 　  | string/text    |文件列表展示类型text/picture|

### Upload Event

|参数|说明|
|----------|--------------|
|change     |选择上传文件时触发的事件|
|error      |上传错误事件|
|success    |上传成功事件|
|remove     |移除上传文件事件|

### Upload Methods

|参数|说明|
|----------|--------------|
|cancelRequest     |取消上传方法|
|upload　　　　　    |手动上传方法|

### ImgCrop Props 图片裁切上传

|参数|类型|说明|
|----------|--------------|--------|
|boxWidth     |number     |裁切画布的宽|
|boxHeight    |number     |裁切画布的高|
|imgWidth     |number     |裁切图片的宽|
|imgHeight    |number      |裁切图片的高|
|fixedScale   |Boolean/true|约束比例|
|maxSize 　   | number      |最大上传限制kb|
|name 　　　   | string 　　 |上传的文件字段名|
|data 　      | Object      |上传时附带的额外参数|
|headers 　   | Object      |设置上传的请求头部|
|action 　　   | string 　　　|必选参数，上传的地址|
|timeout 　   | number       |指定请求超时的毫秒数|
|text　　　　　 |array         |文案|

