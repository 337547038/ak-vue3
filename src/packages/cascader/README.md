<!-- Created by 337547038 on 2021/6 0028. -->

# Cascader 级联选择器

### 基础用法

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader v-model="value1" placeholder="请选择" :options="options" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref([])
</script>

```

### 默认初始值

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader v-model="value1" placeholder="请选择" :options="options" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref(['广东,广州,白云'])
</script>

```

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader v-model="value1" placeholder="请选择" :options="options"/>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref(['广东,广州,白云'])
</script>

```

### 可清空

设置 `clear` 可用于清空选择

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      :options="options"
      :clear="true"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref(['广东,广州,白云'])
</script>

```

### 多选并可折叠选择

```vue demo
<template>
  <div>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      :options="options"
      :multiple="true"
    />
    <p>使用`collapseTags`折叠多选项</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      :options="options"
      :multiple="true"
      collapseTags
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref(['广东,广州,白云', '上海,黄浦区'])
</script>

```

### 可搜索

开启`filterable`可以快捷地搜索选项并选择

```vue demo
<template>
  <div>
    <p>单选可搜索</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      :options="options"
      filterable
    />
    <p>多选可搜索</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      :options="options"
      filterable
      multiple
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'
  const value1 = ref(['广东,广州,白云'])
</script>

```

### 异步加载

通过`lazy`开启异步加载，并通过`lazyload`来设置加载数据源的方法。 `lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader
      v-model="value1"
      placeholder="请选择"
      lazy
      :lazy-load="lazyLoad"
      @searchChange="searchChange"
    />
    <br /><br /><br />
    <p>当前值：{{ value2 }}</p>
    <ak-cascader
      v-model="value2"
      placeholder="请选择（没有初始值）"
      lazy
      :lazy-load="lazyLoad"
    />
    <br /><br /><br />
    <p>可搜索异步加载</p>
    <p>当前值：{{ value3 }}</p>
    <ak-cascader
      v-model="value3"
      placeholder="请选择"
      lazy
      :lazy-load="lazyLoad"
      :options="options"
      filterable
      @searchChange="searchChange"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref(['广东,广州,白云'])
  const value2 = ref([])
  const value3 = ref([])
  const options = ref([])
  const lazyLoad = (obj, resolve) => {
    setTimeout(() => {
      let temp = []
      if (!obj) {
        // 加载第一级
        temp = [
          {
            value: '广东',
            label: '广东',
            children: []
          },
          {
            value: '北京',
            label: '北京',
            children: []
          },
          {
            value: '上海',
            label: '上海'
          }
        ]
        //resolve(temp)
      }
      if (obj && obj.value === '广东') {
        temp = [
          {
            value: '广州',
            label: '广州'
          },
          {
            value: '深圳',
            label: '深圳'
          }
        ]
      }
      if (obj && obj.value === '广州') {
        temp = [
          {
            value: '天河',
            label: '天河'
          },
          {
            value: '白云',
            label: '白云'
          }
        ]
      }
      resolve(temp)
    }, 1000)
  }
  const searchChange = (val) => {
    // console.log('12')
    if (val) {
      options.value = [
        {
          value: '广东',
          label: '广东',
          children: [
            {
              value: '深圳',
              label: '深圳'
            }
          ]
        }
      ]
    }
  }
</script>

```

### 选择任意项

使用`checkAny`可选择任意项

```vue demo
<template>
  <div>
    <p>当前值：{{ value1 }}</p>
    <ak-cascader
      checkAny
      v-model="value1"
      placeholder="请选择"
      :options="options"
    />
    <br /><br /><br />
    <p>当前值：{{ value2 }}</p>
    <ak-cascader
      checkAny
      v-model="value2"
      placeholder="请选择"
      :options="options"
    />
    <br /><br /><br />
    <p>当前值：{{ value3 }}</p>
    <ak-cascader
      v-model="value3"
      placeholder="请选择"
      multiple
      :options="options"
      checkAny
    />
    <br /><br /><br />
    <p>当前值：{{ value4 }}</p>
    <ak-cascader
      v-model="value4"
      placeholder="请选择"
      multiple
      :options="options"
      checkAny
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import options from './demo.json'

  const value1 = ref(['广东,广州,白云'])
  const value2 = ref([])
  const value3 = ref(['广东,广州,白云', '广东,深圳'])
  const value4 = ref([])
</script>


```

## API

### Cascader

| 参数            | 类型            | 说明                                                                                            |
|---------------|---------------|-----------------------------------------------------------------------------------------------|
| v-model       | array         | 显示的值                                                                                          |
| width         | string        | 组件宽                                                                                           |
| multiple      | boolean/false | 多选模式                                                                                          |
| collapseTags  | boolean/false | 多选模式下是否折叠Tag                                                                                  |
| clear         | boolean/false | 是否可清空                                                                                         |
| filterable    | boolean/false | 是否可搜索选项                                                                                       |
| size          | string        | 大小                                                                                            |
| placeholder   | string        | 占位符                                                                                           |
| disabled      | boolean/false | 禁用状态                                                                                          |
| direction     | number        | 下拉的方向动画，0默认　1向下　2向上                                                                           |
| downClass     | string        | 下拉面板类                                                                                         |
| downStyle     | object        | 下拉面板样式                                                                                        |
| appendToBody  | boolean/false | 下拉插入到body                                                                                     |
| downHeight    | number        | 下拉的面板的高                                                                                       |
| icon          | string        | icon图标                                                                                        |
| options       | object        | 下拉面板选项数据                                                                                      |
| optionsKey    | object        | 指定选择数据的`label`和`value`属于，默认{label:'label',value:'value'}                                      |
| showAllLevels | boolean/true  | 定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级                                                             |
| lazy          | boolean/false | 是否动态加载子节点，需与 `lazyLoad` 方法结合使用                                                                |
| lazyLoad      | function      | 加载动态数据的方法，仅在 `lazy` 为 `true` 时有效,function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用) |
| checkAny      | boolean/false | 启用该功能后，选择任意一级选项。                                                                              |
| emptyText     | string        | 无下拉数据提示文案                                                                                     |

### Cascader Event

| 参数     | 说明            |
|--------|---------------|
| change | 选择事件          |
| input  | 可搜索时输入框改变事件   |
| blur   | 可搜索时输入框焦点事件   |
| focus  | 可搜索时输入框获得焦点事件 |
| clear  | 清空事件          |
| delete | 删除单个选项,多选时有效  |

### Cascader Options

| 参数       | 类型            | 说明            |
|----------|---------------|---------------|
| label    | String        | 选项名称          |
| value    | String/number | 选项对应的值，应唯一    |
| disabled | boolean       | 禁用当前项         |
| children | Array         | 子级数据，见自定义数据格式 |
