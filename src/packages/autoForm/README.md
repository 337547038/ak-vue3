<!-- Created by 337547038 on 2021/6/18 0018. -->

# AutoForm 表单

通过json数据快速创建表单，支持格栅和tabs布局

### 基本使用

```vue demo
<template>
  <div>
    <ak-auto-form :data="data" ref="autoFormEl" />
    <ak-button @click="submit">submit</ak-button>
    <ak-button @click="setValue">setValue</ak-button>
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
        value: ''
      }
    },
    {
      type: 'input',
      name: 'userName',
      formItem: {
        label: 'userName'
      },
      control: {
        value: ''
      },
      rules: [{ type: 'required', msg: '请输入用户名' }]
    },
    {
      type: 'input',
      name: 'password',
      formItem: {
        label: 'password'
      },
      control: {
        value: '',
        type: 'password'
      },
      rules: [{ type: 'required', msg: '请输入用户名' }]
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
  const setValue = () => {
    autoFormEl.value.setValue({ userName: '12345' })
  }
  const reset = () => {
    autoFormEl.value.resetForm()
  }
</script>


```

### 格栅布局

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
      type: 'grid',
      columns: [
        {
          span: 6,
          controlList: [
            {
              type: 'input',
              name: 'userName2',
              formItem: {
                label: 'userName'
              },
              control: {
                value: ''
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        },
        {
          span: 6,
          controlList: [
            {
              type: 'select',
              name: 'userName2',
              formItem: {
                label: 'userName'
              },
              control: {
                value: '',
                placeholder: '请选择',
                options: [{ label: '选项', value: 1 }]
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        },
        {
          span: 12,
          controlList: [
            {
              type: 'radio',
              name: 'userName3',
              formItem: {
                label: 'userName'
              },
              control: {
                value: '',
                placeholder: '请选择',
                options: [{ label: '选项1', value: 'a1' }]
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        }
      ]
    }
  ]
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
      type: 'grid',
      columns: [
        {
          span: 6,
          controlList: [
            {
              type: 'input',
              name: 'userName2',
              formItem: {
                label: 'userName'
              },
              control: {
                value: ''
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        },
        {
          span: 6,
          controlList: [
            {
              type: 'select',
              name: 'userName2',
              formItem: {
                label: 'userName'
              },
              control: {
                value: '',
                placeholder: '请选择',
                options: [{ label: '选项', value: 1 }]
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        },
        {
          span: 12,
          controlList: [
            {
              type: 'radio',
              name: 'userName3',
              formItem: {
                label: 'userName'
              },
              control: {
                value: '',
                placeholder: '请选择',
                options: [{ label: '选项1', value: 'a1' }]
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        }
      ]
    },
    {
      type: 'tabs',
      columns: [
        {
          tabs: {
            label: '选项1'
          },
          controlList: [
            {
              type: 'input',
              name: 'userName2',
              formItem: {
                label: 'userName'
              },
              control: {
                value: ''
              },
              rules: [{ type: 'required', msg: '请输入用户名' }]
            }
          ]
        },
        {
          tabs: {
            label: '选项2'
          },
          controlList: [
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

### Filed 快速输入formItem及子表单控件
```vue demo
<template>
  <div>
    <ak-filed :data="data" ref="filed1" />
  </div>
</template>
<script setup>
  import { ref, nextTick } from 'vue'
  const data = {
    type: 'input',
    name: 'text222',
    formItem: {
      label: 'filed'
    },
    control: {
      value: ''
    }
  }
  const filed1 = ref()
  nextTick(() => {
    filed1.value.setValue({ text222: '123' })
  })
  //filed1.value.setValue({ text222: '123' })
</script>

```

## API

### AutoForm Props

|参数|类型|说明|
|----------|--------------|--------|
|data           | object         |表单数据|
|showMessage    | boolean/true   |显示错误提示|
|trigger        | string/change  |表单控件校验触发类型，change和blur两种|
|labelWidth     | string         |label的宽度|
|required       | boolean/true   |是否根据验证规则自动生成必填样式名|
|disabled       | boolean/false  |禁用表单所有控件|

### AutoForm Methods

|参数|说明|
|----------|--------|
|validate       |对单个表单项进行校验的方法，Promise返回验证结果|
|resetForm      |重置表单|
|setValue       |使用resetForm功能时，当表单数据发生改变，需使用setValue设置|

### AutoForm Data

|参数|类型| 说明                                                                  |
|----------|--------------|---------------------------------------------------------------------|
|type           | string         | 组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,grid,tabs,text |
|name           | string   | 表单控件字段名，唯一性                                                         |  
|formItem       | object   | 组件formItem的props                                                    |
|control        | object   | 对应类type型的props                                                      |
|columns        | array    | type=grid/tabs时有效，用于布局，表多分多少列/有多少tabs                               |
|columns.span   | number   | type=grid时有效，当前栏的宽度比例                                               |
|columns.tabs   | object   | type=tabs时有效，tabs的相关props                                           |
|columns.controlList | array   | type=grid/tabs时有效，当前列下所有组件                                          |

### Filed Data
|参数|类型| 说明                                                                  |
|----------|--------------|---------------------------------------------------------------------|
|type           | string         | 组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea |
|name           | string   | 表单控件字段名，唯一性                                                         |  
|formItem       | object   | 组件formItem的props                                                    |
|control        | object   | 对应类type型的props                                                      |
