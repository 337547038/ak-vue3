<!-- Created by 337547038 on 2021/12/1. -->
<template>
<!--  <ul>
    <li v-for="(item,index) in dataList" :key="index" :title="item.label">
      <a @click="childrenClick(item)" v-text="item.label"></a>
      <for-each-item
        v-if="item.children"
        :data-list="item.children" />
    </li>
  </ul>-->
  <ul v-for="(item,index) in dataList" :key="index">
    <li v-for="li in item" :key="li.label">
      <a @click="childrenClick(item)" v-text="li.label"></a>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import {prefixCls} from '../prefix'
import pType from '../util/pType'

export default defineComponent({
  name: 'ForEachItem',
  components: {},
  props: {
    dataList:pType.array()
  },
  setup() {
    const ItemClick: any = inject(`${prefixCls}ItemClick`, '')
    const childrenClick = (item: any) => {
      ItemClick && ItemClick(item)
    }
    return {
      childrenClick
    }
  }
})
</script>
