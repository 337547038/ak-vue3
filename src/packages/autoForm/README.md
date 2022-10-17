<!-- Created by 337547038 on 2021/6/18 0018. -->

# AutoForm 表单

通过json数据快速创建表单，支持格栅和tabs布局

### 基本使用

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" ref="autoFormEl" />
    <ak-button @click="submit">submit</ak-button>
    <ak-button @click="reset">reset</ak-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const data = [
    {
      type: 'text',
      name: '基本信息'
    },
    {
      type: 'input',
      name: 'text',
      formItem: {
        label: 'test'
      },
      control: {
        value: '',
        placeholder: '请输入'
      }
    },
    {
      type: 'input',
      name: 'userName',
      formItem: {
        label: 'userName',
        rules: [{ type: 'required', msg: '请输入用户名' }]
      },
      control: {
        value: ''
      }
    },
    {
      type: 'input',
      name: 'password',
      formItem: {
        label: 'password',
        rules: [{ type: 'required', msg: '请输入password' }]
      },
      control: {
        value: '',
        type: 'password'
      }
    },
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: [
          { label: '选项1', value: 'a1' },
          { label: '选项2', value: 'a2' },
          { label: '选项3', value: 'a3' },
          { label: '选项4', value: 'a4' },
          { label: '禁用', value: 'a5', disabled: true }
        ]
      }
    },
    {
      type: 'checkbox',
      name: 'checkbox',
      formItem: {
        label: 'checkbox'
      },
      control: {
        value: [],
        options: [
          { label: '选项1', value: 'a1' },
          { label: '选项2', value: 'a2' },
          { label: '选项3', value: 'a3' },
          { label: '选项4', value: 'a4' },
          { label: '禁用', value: 'a5', disabled: true }
        ]
      }
    },
    {
      type: 'datePicker',
      name: 'datePicker',
      formItem: {
        label: 'datePicker'
      },
      control: {
        value: '',
        placeholder: '请选择时间'
      }
    },
    {
      type: 'select',
      name: 'select',
      formItem: {
        label: 'select'
      },
      control: {
        value: '',
        placeholder: '请选择',
        options: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
          { label: '选项4', value: '4', disabled: true },
          { label: '选项5', value: '5' },
          { label: '6' },
          { label: '选项7', value: '7' },
          { label: '选项8', value: '8' },
          { label: '选项9', value: '9' },
          { label: '选项10', value: '10', class: 'red' }
        ]
      }
    },
    {
      type: 'switch',
      name: 'switch',
      formItem: {
        label: 'switch'
      },
      control: {
        value: false
      }
    },
    {
      type: 'textarea',
      name: 'textarea',
      formItem: {
        label: 'textarea'
      },
      control: {
        value: ''
      }
    },
    {
      type: 'timePicker',
      name: 'timePicker',
      formItem: {
        label: 'timePicker'
      },
      control: {
        value: '',
        placeholder: '请选择'
      }
    },
    {
      type: 'timeSelect',
      name: 'timeSelect',
      formItem: {
        label: 'timeSelect'
      },
      control: {
        value: '',
        placeholder: '请选择'
      }
    }
  ]
  const autoFormEl = ref()
  const submit = () => {
    autoFormEl.value
      .validate()
      .then((res) => {
        console.log(res)
      })
      .catch((res) => {
        console.log(res)
      })
  }
  const reset = () => {
    autoFormEl.value.resetForm()
  }
</script>

```

### Tabs布局

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  const data = [
    {
      type: 'input',
      name: 'test',
      formItem: {
        label: 'test'
      },
      control: {
        value: ''
      }
    },
    {
      type: 'tabs',
      tabs: {},
      columns: [
        {
          tabPane: {
            label: '选项1'
          },
          list: [
            {
              type: 'input',
              name: 'userName2',
              formItem: {
                label: 'userName',
                rules: [{ type: 'required', msg: '请输入用户名' }]
              },
              control: {
                value: ''
              }
            }
          ]
        },
        {
          tabPane: {
            label: '选项2'
          },
          list: [
            {
              type: 'input',
              name: 'userName2',
              formItem: {
                label: 'userName1'
              },
              control: {
                value: ''
              }
            },
            {
              type: 'input',
              name: 'userName5',
              formItem: {
                label: 'userName2'
              },
              control: {
                value: ''
              }
            }
          ]
        }
      ]
    }
  ]
</script>

```

### Div布局

使用div将指定的组件包起来，可实现联动或通过编写样式实现不同布局

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  const data = [
    {
      type: 'input',
      name: 'test',
      formItem: {
        label: 'test'
      },
      control: {
        value: ''
      }
    },
    {
      type: 'div',
      control: {
        class: 'div-test'
      },
      list: [
        {
          type: 'input',
          name: 'userName2',
          formItem: {
            label: 'userName',
            rules: [{ type: 'required', msg: '请输入用户名' }]
          },
          control: {
            value: ''
          }
        },
        {
          type: 'input',
          name: '密码',
          formItem: {
            label: 'password',
            rules: [{ type: 'required', msg: '请输入密码' }]
          },
          control: {
            type: 'password',
            value: ''
          }
        },
        {
          type: 'checkbox',
          name: 'checkbox',
          formItem: {
            label: 'checkbox'
          },
          control: {
            value: [],
            options: [
              { label: '选项1', value: 'a1' },
              { label: '选项2', value: 'a2' },
              { label: '选项3', value: 'a3' },
              { label: '选项4', value: 'a4' },
              { label: '禁用', value: 'a5', disabled: true }
            ]
          }
        }
      ]
    }
  ]
</script>

```

### 使用v-model设置初始值

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" v-model="model" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const model = ref({ test: '123', radio: 'a2' })
  const data = [
    {
      type: 'input',
      name: 'test',
      formItem: {
        label: 'test'
      },
      control: {
        value: ''
      }
    },
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: [
          { label: '选项1', value: 'a1' },
          { label: '选项2', value: 'a2' },
          { label: '选项3', value: 'a3' },
          { label: '选项4', value: 'a4' },
          { label: '禁用', value: 'a5', disabled: true }
        ]
      }
    }
  ]
</script>

```

### 使用dict设置选项值

可设置`optionsKey`指定从`dict`里选择对应的数据项，默认通过`name`的值从`dict`里匹配。当设置`optionsKey=false`时，则不匹配

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" :dict="dict" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const dict = ref({
    radio: [
      { label: '选项1', value: 'a1' },
      { label: '选项2', value: 'a2' },
      { label: '选项3', value: 'a3' },
      { label: '选项4', value: 'a4' },
      { label: '禁用', value: 'a5', disabled: true }
    ],
    checkbox: [
      { label: '选项1', value: 'a1' },
      { label: '选项2', value: 'a2' },
      { label: '选项3', value: 'a3' },
      { label: '选项4', value: 'a4' },
      { label: '禁用', value: 'a5', disabled: true }
    ],
    select: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' },
      { label: '选项4', value: '4', disabled: true },
      { label: '选项5', value: '5' },
      { label: '6' },
      { label: '选项7', value: '7' },
      { label: '选项8', value: '8' },
      { label: '选项9', value: '9' },
      { label: '选项10', value: '10', class: 'red' }
    ]
  })
  const data = ref([
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: []
      }
    },
    {
      type: 'checkbox',
      name: 'checkbox',
      formItem: {
        label: 'checkbox'
      },
      control: {
        value: [],
        options: []
      }
    },
    {
      type: 'select',
      name: 'select',
      formItem: {
        label: 'select'
      },
      control: {
        value: '',
        placeholder: '请选择',
        options: []
      }
    },
    {
      type: 'checkbox',
      name: 'checkbox2',
      formItem: {
        label: '指定的dict'
      },
      control: {
        value: '',
        placeholder: '请选择',
        options: []
      },
      config: {
        optionsKey: 'select' // 可从dict里使用指定的key
      }
    }
  ])
</script>

```

### 使用url方式请求options

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const data = ref([
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: []
      },
      config: {
        url: './static/mock/testData.json',
        method: 'get',
        params: {}, // 请求的参数
        afterResponse: (res) => { // 请求结果，可对数据处理后返回
          console.log('afterResponse')
          return res
        }
      }
    }
  ])
</script>

```

### url获取options时带动态参数

使用url方式获取options时可带一个动态参数，如`name=${text}`，其中text为当前表单name为text的组件，当该组件值发生改变时，会重新请求接口获取

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const data = ref([
    {
      type: 'input',
      name: 'text',
      formItem: {
        label: 'test'
      },
      control: {
        value: '',
        placeholder: '请输入'
      }
    },
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: []
      },
      config: {
        url: './static/mock/testData.json?name=${text}',
        method: 'get',
        params: {}
      }
    }
  ])
</script>

```

### 联动显示隐藏或禁用

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const data = ref([
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: 'radio'
      },
      control: {
        value: '',
        options: [
          { label: '选项1', value: 'a1' },
          { label: '选项2', value: 'a2' },
          { label: '选项3', value: 'a3' }
        ]
      }
    },
    {
      type: 'input',
      name: 'text',
      formItem: {
        label: '隐藏'
      },
      control: {
        value: '',
        placeholder: '请输入'
      },
      config: {
        linkValue: '$.radio==="a2"'
      }
    },
    {
      type: 'input',
      name: 'text',
      formItem: {
        label: '禁用'
      },
      control: {
        value: '',
        placeholder: 'radio为选项2时禁用'
      },
      config: {
        linkValue: '$.radio==="a2"',
        linkResult: 'disabled'
      }
    }
  ])
</script>

```

### 自定义组件

`type='component'`可设置为自定义组件。自定义组件应有`v-model`和`change`事件

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" />
  </div>
</template>
<script setup>
  import { ref, markRaw } from 'vue'
  import test from './test.vue'
  const data = ref([
    {
      type: 'component',
      name: 'component',
      formItem: {
        label: '自定义组件'
      },
      control: {
        value: '6',
        placeholder: '请输入'
      },
      component: markRaw(test)
    }
  ])
</script>

```

## API

### AutoForm Props

| 参数       | 类型           | 说明                                           |
|----------|--------------|----------------------------------------------|
| v-model  | object       | 当前表单的值                                       |
| data     | object       | 表单数据                                         |
| formData | object       | 表单props参数设置，详见`form`表单                       |
| dict     | object/array | 字典，适用于radio,checkbox,select等，当选项没有设置时则使用dict |

### AutoForm Event

| 参数        | 说明                       |
|-----------|--------------------------|
| change    | 组件改变事件function(val,name) |

### AutoForm Methods

| 参数        | 说明                                     |
|-----------|----------------------------------------|
| validate  | 对单个表单项进行校验的方法，Promise返回验证结果            |
| resetForm | 重置表单                                   |

### AutoForm Data

| 参数           | 类型     | 说明                                                                                                          |
|--------------|--------|-------------------------------------------------------------------------------------------------------------|
| type         | string | 组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component |
| name         | string | 表单控件字段名，唯一性                                                                                                 |  
| formItem     | object | 组件formItem的props                                                                                            |
| control      | object | 对应类type型的props                                                                                              |
| config       | object | 配置信息                                                                                                        |
| columns      | array  | type=tabs时有效，用于布局，表示多分多少列/有多少tabs                                                                           |
| columns.tabs | object | type=tabs时有效，tabs的相关props                                                                                   |
| columns.list | array  | type=tabs时有效，当前列下所有组件                                                                                       |

## data.config

| 类型            | 类型       | 说明                                 |
|---------------|----------|------------------------------------|
| linkValue     | string   | 联动条件设置,`$`表示当前表单的值                 |
| linkResult    | string   | 联动显示结果，可选`disabled`，默认隐藏           |
| optionsKey    | boolean  | 当前项options数据关联字典数据的标识，为false时表示不关联 |
| url           | string   | 通过url获取数据，可使用`${text}`带一个动态参数      |
| method        | string   | 可选get或post                         |
| params        | object   | 通过url获取数据请求参数，绝对false时不请求          |
| afterResponse | function | 请求结果方法                             |
