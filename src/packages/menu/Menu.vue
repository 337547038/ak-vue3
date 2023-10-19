<template>
  <div
    :class="{
      [`${prefixCls}-menu`]: true,
      [mode]: true,
      [theme]: true,
      collapse: collapse && mode === 'vertical'
    }"
  >
    <MenuLi :items="items" @click="click" @select="select" />
  </div>
</template>

<script setup lang="ts">
  import { provide, ref, onMounted, onBeforeUnmount } from 'vue'
  import prefixCls from '../prefix'
  import type { Items } from './types'
  import MenuLi from './MenuLi.vue'

  const props = withDefaults(
    defineProps<{
      mode?: 'horizontal' | 'vertical'
      items: Items[]
      className?: string
      trigger?: 'hover' | 'click' // 子菜单打开的触发方式，只在 mode 为 horizontal 时有效
      theme?: 'light' | 'dark'
      liHeight?: number // 子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果
      openKeys?: string[]
      selectedKey?: string
      router?: boolean
      collapse?: boolean
    }>(),
    {
      mode: 'vertical',
      trigger: 'hover',
      theme: 'light',
      liHeight: 40,
      openKeys: () => {
        return []
      },
      selectedKey: ''
    }
  )
  const emits = defineEmits<{
    (e: 'click', item: Items): void
    (e: 'select', item: Items): void
  }>()
  provide(`${prefixCls}MenuProps`, props)
  // 展开的项集合
  const visibleList = ref(props.openKeys)
  provide(`${prefixCls}MenuVisibleList`, visibleList)
  provide(`${prefixCls}MenuVisibleListChange`, (key: string, add: boolean) => {
    if (add) {
      visibleList.value.push(key)
    } else {
      const index = visibleList.value.indexOf(key)
      visibleList.value.splice(index, 1)
    }
  })
  // 当前选中的项
  const selectKey = ref(props.selectedKey)
  provide(`${prefixCls}MenuSelectKey`, selectKey)
  provide(`${prefixCls}MenuSelectKeyChange`, (val: string) => {
    selectKey.value = val
  })
  // 收起全部
  const slideUp = () => {
    visibleList.value = []
    selectKey.value = ''
  }
  const click = (item: Items) => {
    emits('click', item)
  }
  const select = (item: Items) => {
    emits('select', item)
  }
  onMounted(() => {
    if (props.trigger === 'click' && props.mode === 'horizontal') {
      document.addEventListener('click', slideUp, false)
    }
  })
  onBeforeUnmount(() => {
    if (props.trigger === 'click' && props.mode === 'horizontal') {
      document.removeEventListener('click', slideUp, false)
    }
  })
</script>
