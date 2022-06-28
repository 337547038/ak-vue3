# Menu 菜单导航

### 基本用法

```vue demo
<template>
  <div>
    <ak-menu :items=items mode="horizontal" />
    <p>dark主题</p>
    <ak-menu :items=items mode="horizontal" theme='dark' />
    <p>trigger=click</p>
    <ak-menu :items=items mode="horizontal" trigger='click' />
  </div>
</template>
<script setup>
const items = [
  {
    label: '用户管理',
    key: 'user',
    icon: 'user',
    children: [
      {
        label: '用户列表',
        key: 'aa'
      },
      {
        label: '添加用户',
        key: 'ab'
      }
    ]
  },
  {
    label: 'Navigator Two',
    key: 'b',
    icon: 'search',
    children: [
      {
        label: 'item one',
        key: 'b1',
        children: [
          {
            label: 'item two',
            key: 'b2',
          },
          {
            label: 'item three',
            key: 'b3',
          }
        ]
      },
      {
        label: 'item one',
        key: 'b4',
      },
      {
        label: 'item one',
        key: 'b5',
      }
    ]
  },
  {
    label: '系统设置',
    key: 'set',
    icon: 'date',
    disabled: true
  }
]
</script>
```

### 垂直菜单

```vue demo
<template>
  <div style="width:200px">
    <ak-menu :items=items mode="vertical" />
    <p>dark主题</p>
    <ak-menu :items=items mode="vertical" theme='dark' />
  </div>
</template>
<script setup>
const items = [
  {
    label: '用户管理',
    key: 'user',
    icon: 'user',
    children: [
      {
        label: '用户列表',
        key: 'aa'
      },
      {
        label: '添加用户',
        key: 'ab'
      }
    ]
  },
  {
    label: 'Navigator Two',
    key: 'b',
    icon: 'search',
    children: [
      {
        label: 'item one',
        key: 'b1',
        children: [
          {
            label: 'item two',
            key: 'b2',
          },
          {
            label: 'item three',
            key: 'b3',
          }
        ]
      },
      {
        label: 'item one',
        key: 'b4',
      },
      {
        label: 'item one',
        key: 'b5',
      }
    ]
  },
  {
    label: '系统设置',
    key: 'set',
    icon: 'date',
    disabled: true
  }
]
</script>
```

### Collapse

```vue demo
<template>
  <div style="width: 200px">
    <div>
      <ak-switch v-model="collapse" />
    </div>
    <ak-menu
      :items="items"
      mode="vertical"
      :collapse="collapse"
      @click="click"
      @select="select"
    />
    <p>dark主题</p>
    <ak-menu
      :items="items"
      mode="vertical"
      theme="dark"
      :collapse="collapse"
      @click="click"
      @select="select"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const collapse = ref(false)
  const click = (item) => {
    console.log('click')
    console.log(item)
  }
  const select = (item) => {
    console.log('select')
    console.log(item)
  }
  const items = [
    {
      label: '用户管理',
      key: 'user',
      icon: 'user',
      children: [
        {
          label: '用户列表',
          key: 'aa'
        },
        {
          label: '添加用户',
          key: 'ab'
        }
      ]
    },
    {
      label: 'Navigator Two',
      key: 'b',
      icon: 'search',
      children: [
        {
          label: 'item one',
          key: 'b1',
          children: [
            {
              label: 'item two',
              key: 'b2'
            },
            {
              label: 'item three',
              key: 'b3'
            }
          ]
        },
        {
          label: 'item one',
          key: 'b4'
        },
        {
          label: 'item one',
          key: 'b5'
        }
      ]
    },
    {
      label: '系统设置',
      key: 'set',
      icon: 'date',
      disabled: true
    }
  ]
</script>

```

## API

### Menu

| 参数          | 类型            | 说明            |
|-------------|---------------|---------------|
| mode        | string        | 菜单类型，现在垂直、水平  `vertical、 horizontal`，默认`vertical` |
| collapse    | boolean      | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）    |
| items       | Items[]       | 菜单内容          |
| trigger     | string        | 子菜单打开的触发方式，只在 mode 为 horizontal 时有效， 'hover'（默认） 、 "click" |
| theme       | string        | 主题颜色  `light(默认) 、 dark` |
| style       | CSSProperties | 根节点样式         |
| liHeight    | number        | 子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果 |
| openKeys    | string[]      | 初始展开的项        |
| router      | boolean       | 是否启用router模式，开启会在点击导航时以key作为path进行路由跳转 |
| selectedKey | string        | 当前选中的项        |

### Menu Items

| 参数       | 类型      | 说明        |
|----------|---------|-----------|
| label    | string  | 显示的名称     |
| key      | string  | 唯一标识符     |
| icon     | string  | 名称前icon图标 |
| disabled | boolean | 是否可用      |

### Menu Event

| 参数      | 说明      |
|---------|---------|
| select  | 被选中时调用       |
| click   | 点击item项时调用    |

