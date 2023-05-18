<template>
  <transition
    name="menu"
    @before-enter="beforeEvent"
    @after-enter="afterEvent"
    @after-leave="afterEvent"
    @before-leave="beforeEvent"
  >
    <ul
      :class="{ ['layer-' + layer]: true, 'is-child': itemUl }"
      v-show="!itemUl || visibleList.includes(itemUl.key)"
      :data-height="getUlHeight(itemUl)"
    >
      <li
        v-for="item in items"
        :key="item.key"
        :class="{
          disabled: item.disabled,
          'is-down': visibleList.includes(item.key),
          selected: item.key === selectedKey
        }"
        @mouseenter="mouseenter(item)"
        @mouseleave="mouseleave(item)"
        @click="click(item, $event)"
      >
        <span class="menu-title">
          <Tooltip
            :content="item.label"
            direction="right"
            :x="15"
            :disabled="!(layer === 0 && !item.children && menuProps.collapse)"
          >
            <i class="icon" :class="`icon-${item.icon}`" v-if="item.icon"></i>
          </Tooltip>
          <span class="name">{{ item.label }}</span>
          <i class="icon-arrow" v-if="item.children"></i>
        </span>
        <MenuLi
          v-if="item.children"
          :items="item.children"
          :itemUl="item"
          :layer="layer + 1"
          @click="clickEmit"
          @select="select"
        />
      </li>
    </ul>
  </transition>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'
  import { useRouter } from 'vue-router'
  import type { Items } from './types'
  import { Tooltip } from '../tooltip'
  import prefixCls from '../prefix'

  withDefaults(
    defineProps<{
      items: Items[]
      itemUl?: Items
      layer?: number
    }>(),
    {
      layer: 0
    }
  )
  const emits = defineEmits<{
    (e: 'click', item: Items): void
    (e: 'select', item: Items): void
  }>()
  const router = useRouter()
  // 处理所有展开的项
  const visibleList: any = inject(`${prefixCls}MenuVisibleList`, [])
  const menuVisibleListChange: any = inject(`${prefixCls}MenuVisibleListChange`)
  // 当前选中的项
  const selectedKey = inject(`${prefixCls}MenuSelectKey`, '')
  const selectedKeyChange: any = inject(`${prefixCls}MenuSelectKeyChange`)
  const menuProps: any = inject(`${prefixCls}MenuProps`, {})
  const mouseenter = (item: Items) => {
    if (item.children && item?.children.length > 0) {
      onMouseEvent(item, true)
    }
  }
  const mouseleave = (item: Items) => {
    if (item.children && item?.children.length > 0) {
      onMouseEvent(item, false)
    }
  }
  const onMouseEvent = (item: Items, add: boolean) => {
    if (
      (menuProps.trigger === 'hover' && menuProps.mode === 'horizontal') ||
      (menuProps.mode === 'vertical' && menuProps.collapse)
    ) {
      pushOrSplice(item, add)
    }
  }
  const click = (item: Items, evt: MouseEvent) => {
    if (item.disabled) {
      return
    }
    if (menuProps.trigger === 'click' || menuProps.mode === 'vertical') {
      pushOrSplice(item, !visibleList.value.includes(item.key))
    }
    // 如果没有子级，设置当前选中项
    if (!item.children) {
      selectedKeyChange && selectedKeyChange(item.key)
      emits('select', item)
      menuProps.router && router.push(item.key)
    }
    emits('click', item)
    evt.stopPropagation()
  }
  const pushOrSplice = (item: Items, add: boolean) => {
    if (item.disabled) {
      return
    }
    if (add) {
      // 有子级时才处理
      if (item.children && !visibleList.value.includes(item.key)) {
        menuVisibleListChange && menuVisibleListChange(item.key, add)
      }
    } else {
      menuVisibleListChange && menuVisibleListChange(item.key, add)
    }
  }
  const getUlHeight = (item?: Items) => {
    if (item && item.children) {
      return item.children.length * menuProps.liHeight + (item.childHeight || 0)
    }
    return null
  }
  const select = (item: Items) => {
    emits('select', item)
  }
  const clickEmit = (item: Items) => {
    emits('click', item)
  }
  // 高度展开动画
  const beforeEvent = (node: HTMLElement) => {
    const height = node.getAttribute('data-height')
    if (height) {
      node.style.height = height + 'px'
      node.style.overflow = 'hidden'
    }
  }
  const afterEvent = (node: HTMLElement) => {
    node.style.height = ''
    node.style.overflow = ''
  }
</script>
