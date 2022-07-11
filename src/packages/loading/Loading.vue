<!-- Created by 337547038 on 2018/9/5 0005. -->
<template>
  <transition :name="`${prefixCls}-loading-fade`">
    <div
      v-show="state.visible"
      :style="{ backgroundColor: background || '', 'z-index': zIndex }"
      :class="{
        'no-background': background === 'none',
        [prefixCls + '-loading-full']: !el,
        [prefixCls + '-loading']: true
      }"
    >
      <div :class="`${prefixCls}-loading-spinner`">
        <i v-if="spinner" :class="[spinner, [prefixCls + '-icon-rotate']]"></i>
        <svg v-else viewBox="0 0 50 50" class="loading-svg">
          <circle class="svg-path" cx="25" cy="25" r="20" fill="none" />
        </svg>
        <p v-if="text" :class="`${prefixCls}-loading-text`">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { reactive, onMounted, nextTick, watch } from 'vue'
  import { getScrollbarWidth } from '../util/dom'

  const props = withDefaults(
    defineProps<{
      text?: string // 显示在加载图标下方的加载文案
      background?: string // 遮罩背景色
      spinner?: string // 自定义加载图标类名
      lock?: boolean
      el?: Object
      zIndex?: number
      modelValue?: boolean
    }>(),
    {
      modelValue: false,
      el: () => {
        return {}
      }
    }
  )

  const state = reactive({
    visible: props.modelValue,
    scrollbarWidth: 17
  })
  watch(
    () => props.modelValue,
    (bool: boolean) => {
      state.visible = bool
    }
  )
  onMounted(() => {
    nextTick(() => {
      state.scrollbarWidth = getScrollbarWidth() as number
    })
  })
  /*    onBeforeUnmount(() => {

    })*/
  const open = () => {
    // console.log('open')
    state.visible = true
    if (props.lock) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = state.scrollbarWidth + 'px'
    }
  }
  const close = () => {
    // remove false通过指令引用，这时不能移除
    state.visible = false
    if (props.lock) {
      // 解锁
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
  defineExpose({ close, open })
</script>
