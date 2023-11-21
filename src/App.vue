<template>
  <div v-if="visible" class="container">
    <div class="sidebar">
      <div class="logo"><img src="./assets/logo.jpg" alt="" />AK-UI Docs</div>
      <ul>
        <template v-for="item in groupList" :key="item.group">
          <h3>
            <span>{{ item.title }}</span>
          </h3>
          <li v-for="child in item.children" :key="child.name">
            <router-link :to="child.path">
              {{ getName(child.name) }}<span>{{ child.meta?.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="main-">
      <router-view v-slot="{ Component }">
        <transition name="left-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <router-view v-else />
</template>
<script lang="ts" setup>
  import { routes } from './router'

  const visible = true
  const getName = (name: string) => {
    return name.substring(0, 1).toUpperCase() + name.substring(1)
  }
  console.log(routes)
  const routesListFilter = routes.filter(
    (item: any) => !['README', 'test'].includes(item.name)
  )

  const groupList = [
    {
      group: 'comm',
      title: '通用',
      children: []
    },
    {
      group: 'data',
      title: '数据展示',
      children: []
    },
    {
      group: 'form',
      title: '数据录入',
      children: []
    },
    {
      group: 'nav',
      title: '导航',
      children: []
    },
    {
      group: 'feedback',
      title: '反馈',
      children: []
    },
    {
      group: 'other',
      title: '其他',
      children: []
    }
  ]
  groupList.forEach(item => {
    item.children = routesListFilter.filter(
      (fi: any) => fi.meta?.group === item.group
    )
  })
  /*

  const sortBy = (sortValue: string) => {
    // 添加排序
    return function (a: any, b: any) {
      let val1 = a.meta[sortValue]
      let val2 = b.meta[sortValue]
      if (val1 < val2) {
        return -1 // 顺序，倒序1
      } else if (val1 > val2) {
        return 1
      }
    }
  }

  routesListFilter.sort(sortBy('group'))*/
</script>
