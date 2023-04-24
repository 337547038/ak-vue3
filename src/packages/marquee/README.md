<!-- Created by 337547038 -->

# Marquee 滚动

### 基本使用

```vue demo
<template>
  <div>
  <div>从上到下</div>
  <ak-marquee direction="top" width="200px" height="200px">
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
    </ak-marquee>
  <div>从下到上</div>
  <ak-marquee direction="bottom" width="200px" height="200px">
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
    </ak-marquee>
  <div>从左到右</div>
    <ak-marquee direction="left" width="600px" height="200px">
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
    </ak-marquee>
    <div>从右到左</div>
  <ak-marquee direction="right" width="600px" height="200px">
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
    </ak-marquee>
  </div>
</template>

```

### 间断滚动

```vue demo
<template>
  <div>
  <div>每秒滚动一张</div>
  <ak-marquee direction="left" width="600px" height="200px" :speed="1000" :step="200">
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img1.png" style="width:200px;height:150px"/></div>
      <div><img src="../../../public/image/img2.png" style="width:200px;height:150px"/></div>
    </ak-marquee>
  <div>同样支持文字滚动</div>
  <ak-marquee direction="top" width="300px" height="30px" :speed="1000" :step="30">
      <div style="line-height:30px">
      <div>1.向上滚动的文字</div>
      <div>2.每次滚动一行</div>
      <div>3.向上滚动的文字</div>
      <div>4.每次滚动一行</div>
      </div>
    </ak-marquee>
  </div>
</template>

```

## API

### Marquee Props

| 参数        | 类型     | 说明                                     |
|-----------|--------|----------------------------------------|
| width     | string | 滚动区域的宽度                                |
| height    | string | 滚动区域的高度                                |
| speed     | number | 每多少毫秒滚动的一次，数字越大速度越慢，默认30               |
| direction | string | 滚动方向。`left,right,top,bottom`四个方向，默认top |
| step      | number | 每个单位时间距离的距离，默认1即平滑滚动                   |
