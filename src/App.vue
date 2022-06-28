<template>
  <div v-if="visible" class="container">
    <div class="sidebar">
      <div class="logo"><img src="./assets/logo.jpg" alt="" />AK-Docs</div>
      <!-- <div class="version">
        <ak-select-down v-model="version" width="160px">
          <p><a href="https://337547038.github.io/akvue3/" target="_blank">Vue3.X</a></p>
        </ak-select-down>
      </div> -->
      <ul>
        <li v-for="item in routesListFilter" :key="item.name">
          <router-link :to="item.path">
            {{ getName(item.name) }}
          </router-link>
        </li>
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
  import routesList from 'virtual:generated-pages'
  import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  let visible = false
  const getName = (name: string) => {
    return name.substring(0, 1).toUpperCase() + name.substring(1)
  }

  let routesListFilter = ref<any>([])

  const sortBy = (sortValue: string) => {
    // 添加排序
    return function (a: any, b: any) {
      let val1 = a[sortValue]
      let val2 = b[sortValue]
      if (val1 < val2) {
        return -1 // 顺序，倒序1
      } else if (val1 > val2) {
        return 1
      }
    }
  }
  routesList.forEach((item: any) => {
    if (
      item.name.indexOf('-README') !== -1 &&
      item.name.indexOf('.bak') === -1
    ) {
      routesListFilter.value.push({
        name: item.name.replace('-README', ''),
        path: item.path.replace('/readme', '')
      })
    }
  })

  routesListFilter.value.sort(sortBy('name'))
  // const version = ref(["Vue3.X"]);
  /*const toPath = (path: string) => {
    // console.log(path)
    router.push({
      path: path
    })
  }*/
</script>
