<!--Created by 337547038 on 2017/12/19.-->
<template>
  <span ref="el" :class="[`${prefixCls}-tooltip-box`]">
    <slot></slot>
    <transition :name="`tooltip-${transition}`">
      <div
        v-if="getIf($slots)"
        v-show="state.visible"
        ref="tooltipEl"
        :class="[`${prefixCls}-tooltip`, direction, className]"
        :style="state.tooltipStyle"
        @click.stop=""
      >
        <i class="arrow"></i>
        <span v-if="content" v-html="content"></span>
        <slot v-else name="content"></slot>
      </div>
    </transition>
  </span>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import {
    reactive,
    ref,
    onMounted,
    onBeforeUnmount,
    nextTick,
    watch
  } from 'vue'
  import { getOffset, getWindow } from '../util/dom'

  interface CssStyle {
    maxWidth: string
    left?: string
    bottom?: string
    transform?: string
    top?: string
    right?: string
  }

  const props = withDefaults(
    defineProps<{
      content?: string // rgb格式，初始值
      direction?: string
      maxWidth?: number
      delay?: number // 鼠标移开后延时移除时间，主要能够让鼠标移动提示文字上，单位毫秒
      always?: boolean
      appendToBody?: boolean
      transition?: string
      x?: number // x轴微调
      y?: number // 当前标签与提示语之间的距离，用于微调/
      className?: string
      trigger?: 'hover' | 'click'
      style?: Object
      disabled?: boolean
    }>(),
    {
      direction: 'top-left',
      maxWidth: 500,
      delay: 0,
      appendToBody: true, // 这个样式及定位没兼容，设置false时需自定义样式
      transition: 'fade',
      x: 0,
      y: 0,
      trigger: 'hover',
      disabled: false
    }
  )
  const emits = defineEmits<{
    (e: 'click', val: boolean): void
  }>()
  const tooltipEl = ref()
  const state = reactive({
    clearTime: 0,
    visible: false,
    tooltipStyle: {}
  })
  const el = ref()
  const hasAppendToBody = ref(false)
  //const instance = getCurrentInstance()
  watch(
    () => props.disabled,
    (val: boolean) => {
      nextTick(() => {
        if (
          !val &&
          props.appendToBody &&
          tooltipEl.value &&
          !hasAppendToBody.value
        ) {
          document.body.appendChild(tooltipEl.value)
          hasAppendToBody.value = true
        }
      })
    }
  )
  onMounted(() => {
    nextTick(() => {
      /*const sel =
        instance && instance.proxy && instance.proxy.$el.nextElementSibling
      if (!sel) {
        return
      }
      // console.log(gel)
      el.value = sel*/
      if (props.always) {
        // 一直显示的
        state.visible = true
        setPosition()
      }
      if (props.trigger === 'click') {
        document.addEventListener('click', mouseClick, false)
      } else {
        el.value.addEventListener('mouseenter', mouseEnter, false)
        el.value.addEventListener('mouseleave', mouseLeave, false)
      }
      if (props.appendToBody && tooltipEl.value) {
        document.body.appendChild(tooltipEl.value)
        hasAppendToBody.value = true
      }
    })
  })
  onBeforeUnmount(() => {
    if (props.trigger === 'click') {
      document.removeEventListener('click', mouseClick, false)
    } else {
      el.value.removeEventListener('mouseenter', mouseEnter, false)
      el.value.removeEventListener('mouseleave', mouseLeave, false)
    }
    if (props.appendToBody && tooltipEl.value) {
      document.body.removeChild(tooltipEl.value)
    }
  })
  const getIf = (slot: any) => {
    if (props.disabled) {
      // 不可用状态
      return false
    }
    return props.content || slot.content
  }
  const translate = (px: number) => {
    // 通过transform平移标签时，如平移的单位为非偶数，会出现字体模糊，这里强制取偶
    if (px % 2 === 0) {
      // 偶数
      return px
    } else {
      return px + 1
    }
  }
  const setPosition = () => {
    const offset = getOffset(el.value)
    const windowWidth = getWindow().width
    const space = props.y + 8 // 当前标签与提示语之间的距离
    const style: CssStyle = {
      maxWidth: props.maxWidth + 'px'
    }
    if (props.appendToBody) {
      const windowHeight = getWindow().height
      const bottom = windowHeight - offset.top + space + 'px'
      switch (props.direction) {
        case 'top-left':
          style.left = offset.left + props.x + 'px'
          style.bottom = bottom
          break
        case 'top':
          // 先让提示左边和当前标签中间对齐（偏移位置+标签宽的一半），再向左移50%
          style.transform = 'translateX(-50%)'
          style.left =
            translate(offset.left + offset.width / 2 + props.x) + 'px'
          style.bottom = bottom
          break
        case 'top-right':
          style.right =
            windowWidth - (offset.left + offset.width + props.x) + 'px'
          style.bottom = bottom
          break
        case 'left':
          // top先让提示语顶部跟标签中间对齐，再上移50%
          style.right = windowWidth - (offset.left - 8 + props.x) + 'px'
          style.top = translate(offset.top + offset.height / 2) + 'px'
          style.transform = 'translateY(-50%)'
          break
        case 'right':
          // top和左边一样
          style.left = offset.left + offset.width + 8 + props.x + 'px'
          style.top = translate(offset.top + offset.height / 2) + 'px'
          style.transform = 'translateY(-50%)'
          break
        case 'bottom-left':
          style.left = offset.left + props.x + 'px'
          style.top = offset.top + offset.height + space + 'px'
          break
        case 'bottom':
          style.left =
            translate(offset.left + offset.width / 2 + props.x) + 'px'
          style.transform = 'translateX(-50%)'
          style.top = offset.top + offset.height + space + 'px'
          break
        case 'bottom-right':
          style.right =
            windowWidth - (offset.left + offset.width + props.x) + 'px'
          style.top = offset.top + offset.height + space + 'px'
          break
      }
    }
    state.tooltipStyle = Object.assign({}, props.style, style)
  }
  const mouseEnter = () => {
    if (props.disabled) {
      return
    }
    if (!props.always) {
      setPosition()
      window.clearTimeout(state.clearTime)
      state.visible = true
      // 提示内容上添加鼠标事件
      if (props.delay && tooltipEl.value) {
        tooltipEl.value.addEventListener('mouseenter', toolTipEnter, false)
        tooltipEl.value.addEventListener('mouseleave', toolTipLeave, false)
      }
    }
  }
  const mouseLeave = () => {
    state.clearTime = window.setTimeout(() => {
      state.visible = false
    }, props.delay)
  }
  const toolTipEnter = () => {
    window.clearTimeout(state.clearTime)
  }
  const toolTipLeave = () => {
    mouseLeave()
    // 同时移除事件
    tooltipEl.value.removeEventListener('mouseenter', toolTipEnter, false)
    tooltipEl.value.removeEventListener('mouseleave', toolTipLeave, false)
  }
  const mouseClick = (e: MouseEvent) => {
    if (!props.always) {
      if (e && el.value.contains(e.target)) {
        setPosition()
        state.visible = true
      } else {
        state.visible = false
      }
    }
    emits('click', state.visible)
  }
  // 提供一个关闭的方法
  const close = () => {
    state.visible = false
  }
  defineExpose({ close })
</script>
