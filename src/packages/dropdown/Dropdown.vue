<!-- Created by 337547038 on 2020/12/2 0002. -->
<template>
  <div
    ref="el"
    :class="{ [prefixCls + '-dropdown']: true }"
    @mouseenter="mouseOver"
    @mouseleave="mouseLeave"
    @click.stop="click"
  >
    <slot></slot>
    <span
      v-if="$slots.trigger"
      @mouseenter.stop="mouseOver($event, 'slot')"
      @click.stop="click($event, 'slot')"
    >
      <slot name="trigger"></slot>
    </span>
    <transition name="slide-toggle">
      <div
        v-show="state.visible"
        ref="dropdown"
        :class="{
          [prefixCls + '-dropdown-menu']: true,
          top: state.position,
          [downClass]: downClass
        }"
        :style="state.dropdownStyle"
        @mouseenter="menuMouseOver"
        @mouseleave="menuMouseLeave"
        @click.stop="clickStop"
      >
        <slot name="dropdown"></slot>
        <span class="arrow"></span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import {
    provide,
    onMounted,
    onBeforeUnmount,
    reactive,
    nextTick,
    ref,
    useSlots
  } from 'vue'
  import { getOffset, getWindow } from '../util/dom'
  const slots = useSlots()
  const props = withDefaults(
    defineProps<{
      trigger?: string
      appendToBody?: boolean
      downClass?: string
      direction?: number // 下拉弹出方向，0自动，1向上，2向下
    }>(),
    {
      trigger: 'hover',
      direction: 0,
      downClass: ''
    }
  )
  const emits = defineEmits<{
    (e: 'click', modelValue: any): void
    (e: 'toggle', modelValue: boolean): void
  }>()

  const dropdown = ref()
  const el = ref()
  const state = reactive<any>({
    visible: false,
    timer: 0,
    position: '',
    dropdownStyle: {
      left: '',
      top: '',
      bottom: '',
      position: '',
      '--ak-dropdown-left': ''
    }
  })
  provide(`${prefixCls}DropdownItemClick`, (obj: any) => {
    emits('click', obj)
  })
  const slideUp = () => {
    if (props.trigger === 'click') {
      state.visible = false
    }
  }
  const mouseOver = (e: MouseEvent, type: string): void => {
    if (!state.visible) {
      // 已展开时不重复
      control('hover', type, true, e)
    }
    emits('toggle', true)
  }
  const mouseLeave = () => {
    clearTimeout(state.timer)
    if (props.trigger === 'hover') {
      state.timer = window.setTimeout(() => {
        state.visible = false
      }, 500)
    }
    emits('toggle', false)
  }
  const click = (e: MouseEvent | any, type: string) => {
    control('click', type, !state.visible, e)
    emits('toggle', !state.visible)
  }
  const menuMouseOver = () => {
    if (props.trigger === 'hover') {
      clearTimeout(state.timer)
      state.visible = true
      emits('toggle', true)
    }
  }
  const menuMouseLeave = () => {
    if (props.trigger === 'hover') {
      state.visible = false
      emits('toggle', false)
    }
  }
  const clickStop = (e: MouseEvent) => {
    e.stopPropagation()
  }
  const control = (
    triggle: string,
    type: string,
    show: boolean,
    e: MouseEvent
  ) => {
    if (props.trigger === triggle) {
      if (slots.trigger) {
        if (type) {
          state.visible = show
        }
      } else {
        if (!type) {
          state.visible = show
        }
      }
    }
    nextTick(() => {
      state.position = setPosition(e)
      const width = dropdown.value.offsetWidth
      state.dropdownStyle['--ak-dropdown-left'] = `${-width / 2}px`
      if (state.visible && props.appendToBody) {
        // 插入到body
        const ww = getWindow()
        const offset = getOffset(el.value)
        state.dropdownStyle.left = offset.left + offset.width / 2 + 'px'
        if (state.position === 'top') {
          state.dropdownStyle.bottom = ww.height - offset.top + 'px'
          state.dropdownStyle.top = 'auto'
        } else {
          state.dropdownStyle.top = offset.top + offset.height + 'px'
        }
      }
    })
  }
  const setPosition = (evt: MouseEvent) => {
    let position = ''
    /*if (props.maxHeight && e) {
        // 设有距浏览器底部高度时
        const wh = document.documentElement.clientHeight || document.body.clientHeight
        const clientY = e.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
        if (props.maxHeight > wh - clientY) {
          position = 'top'
        }
      }*/
    if (props.direction === 1) {
      position = 'top'
    }
    if (props.direction === 0) {
      // 计算弹出方向
      const wh =
        document.documentElement.clientHeight || document.body.clientHeight
      const clientY = evt.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
      const height = dropdown.value.offsetHeight
      if (height > wh - clientY && clientY > height) {
        // 向上
        position = 'top'
      }
    }
    return position
  }
  onMounted(() => {
    document.addEventListener('click', slideUp)
    if (props.appendToBody) {
      state.dropdownStyle.position = 'fixed'
      document.body.appendChild(dropdown.value)
    }
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', slideUp)
    if (props.appendToBody) {
      document.body.removeChild(dropdown.value)
    }
  })
  defineExpose({ slideUp })
</script>
