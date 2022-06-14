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
