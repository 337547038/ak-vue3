# Input 输入框

### 基本使用

```vue demo
<template>
   <p><ak-input></ak-input></p>
   <p><ak-input placeholder="请输入内容"></ak-input></p>
   <p><ak-input placeholder="请输入内容" v-model="defaultValue"></ak-input></p>
   <p><ak-input placeholder="禁用状态" :disabled="true"></ak-input></p>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
  const defaultValue = ref('初始默认值')
   return {
    defaultValue
   }
  }
}
</script>
```

### 显示清空按钮

设置`clear="true"`，在输入框不为空时显示清空按钮

```vue demo
<template>
 <ak-input placeholder="试着输入些什么看看" v-model="valueClear" :clear="true"></ak-input>
</template>
<script>
export default {
  data () {
    return {
      valueClear: '',
    }
  }
}
</script>
```

### 可显示密码明文

`type="password`时设置`showEye="true"`可显示密码明文

```vue demo
<template>
 <ak-input placeholder="请输入内容" v-model="value4" :showEye="true" type="password"></ak-input>
</template>
<script>
export default {
  data () {
    return {
     value4: '',
    }
  }
}
</script>
```

### 添加前后缀Icon

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot `prefix` 和 `suffix` 来放置图标。

```vue demo
<template>
<p>
   <ak-input 
      placeholder="请输入内容" 
      prefix-icon="icon-user">
   </ak-input>
   </p>
   <p>
   <ak-input 
      placeholder="请输入内容" 
      suffix-icon="icon-search">
   </ak-input>
   </p>
</template>
```

### 复合型输入框

可前置或后置元素，一般为标签或按钮

```vue demo
<template>
<p>
   <ak-input placeholder="请输入内容">
      <template #append>CM</template>
   </ak-input>
   </p>
   <p>
   <ak-input placeholder="请输入内容" >
      <template #prepend>http://</template>
   </ak-input>
   </p>
</template>
```

### 设置大小

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 normal

```vue demo
<template>
   <p><ak-input placeholder="默认尺寸" size="large"></ak-input></p>
   <p><ak-input placeholder="默认尺寸"></ak-input></p>
   <p><ak-input placeholder="sixe=small" size="small"></ak-input></p>
   <p><ak-input placeholder="sixe=mini" size="mini"></ak-input></p>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
  const defaultValue = ref('初始默认值')
   return {
    defaultValue
   }
  }
}
</script>
```

## API

### Input Props

|参数|类型|说明|
|----------|--------------|--------|
|v-model        | any            |输入框的值|
|clear          | boolean/false  |显示清空按钮|
|showEye        | boolean/false  |密码框显示明文切换|
|width          | string         |设置宽度属性|
|size           | string         |支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`|
|prefixIcon     | string         |前缀icon图标|
|suffixIcon     | string         |后缀icon图标|
|-              |                |其它原生所有属性|

### Input Slots

|参数|说明|
|----------|--------|
|prepend         |输入框前置内容|
|append          |输入框后置内容|
|prefix          |前缀icon图标|
|suffix          |后缀icon图标|
