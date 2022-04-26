# Dropdown 下拉菜单

### 用法

通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单

```vue demo
<template>
  <ak-dropdown>
    下拉菜单
    <template #dropdown>
      <ul>
        <ak-dropdown-item v-for="item in 5" :key="item"
          >菜单选项{{ item }}</ak-dropdown-item
        >
      </ul>
    </template>
  </ak-dropdown>
</template>


```

### 触发对象

通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单

```vue demo
<template>
  <div>
    <ak-dropdown>
      <ak-button>下拉菜单<i class="icon-arrow"></i></ak-button>
      <template #dropdown>
        <ul>
          <ak-dropdown-item v-for="item in 5" :key="item"
            >2菜单选项{{ item }}</ak-dropdown-item
          >
        </ul>
      </template>
    </ak-dropdown>
    <ak-dropdown style="border: 1px solid #ddd; padding: 8px 12px">
      <span>文字无触发事件</span>
      <template #trigger>
        <i class="icon-arrow" style="margin-left: 15px"></i>
      </template>
      <template #dropdown>
        <ul>
          <ak-dropdown-item v-for="item in 5" :key="item"
            >2菜单选项{{ item }}</ak-dropdown-item
          >
        </ul>
      </template>
    </ak-dropdown>
    <ak-dropdown trigger="click">
      <ak-button>点击下拉<i class="icon-arrow"></i></ak-button>
      <template #dropdown>
        <ul>
          <ak-dropdown-item v-for="item in 5" :key="item"
            >2菜单选项{{ item }}</ak-dropdown-item
          >
        </ul>
      </template>
    </ak-dropdown>
    <ak-dropdown
      trigger="click"
      style="border: 1px solid #ddd; padding: 8px 12px"
    >
      <span>点击箭头下拉</span>
      <template #trigger>
        <i class="icon-arrow" style="margin-left: 15px"></i>
      </template>
      <template #dropdown>
        <ul>
          <ak-dropdown-item v-for="item in 5" :key="item"
            >2菜单选项{{ item }}</ak-dropdown-item
          >
        </ul>
      </template>
    </ak-dropdown>
  </div>
</template>
<script></script>


```

### 事件

```vue demo
<template>
  <ak-dropdown ref="dropdown">
    下拉菜单
    <template #dropdown>
      <ul>
        <ak-dropdown-item v-for="item in 5" @click="click" :key="item"
          >菜单选项{{ item }}</ak-dropdown-item
        >
      </ul>
    </template>
  </ak-dropdown>
</template>
<script setup>
  const click = () => {
    alert('菜单选项')
  }
</script>


```

## API

### Dropdown

|参数| 类型            | 说明                     |
|-------|---------------|------------------------|
|trigger        | String/hover  | 触发下拉的行为,hover和click    |
|appendToBody   | Boolean/false | 插入到body                |
|direction      | Number/0      | 下拉弹出方向，0自动，1向上，2向下 |
|downClass      | string        | 展开面板类名                 |

### DropdownItem

|参数|类型|说明|
|-------|-------|--------|
|disabled       | Boolean/false  |禁用状态|
|className      | String         |类名|

### Dropdown Event

|参数|说明|
|------|------|
|click      |点击事件|
| toggle  | 展开或收起下拉事件,function(down){true为展开状态,false收起} |

### Dropdown Methods

| 参数      | 说明                                          |
|---------|---------------------------------------------|
| slideUp | 用于收起下拉，仅当`trigger`为`click`时                 |


### Dropdown Slot

|参数| 说明     |
|------|--------|
|dropdown      | 下拉内容   |
|trigger      | 触发下拉标签 |
