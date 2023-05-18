<!--Created by 337547038 on 2019.8.-->
<template>
  <div
    ref="element"
    :class="`${prefixCls}-back-top`"
    :style="{
      right: right + 'px',
      bottom: bottom + 'px',
      opacity: show ? 1 : 0,
      visibility: show ? 'visible' : 'hidden'
    }"
    @click.stop="elClick"
  >
    <a href="javascript:" class="icon-top" v-text="text"></a>
  </div>
</template>
<script lang="ts" setup>
  import { scrollTop } from '../util/dom'
  import prefixCls from '../prefix'
  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'

  const props = withDefaults(
    defineProps<{
      text?: string
      height?: number
      bottom?: number
      right?: number
    }>(),
    {
      text: '返回顶部',
      height: 200,
      bottom: 30,
      right: 30
    }
  )

  const emits = defineEmits<{
    (e: 'click'): void
  }>()

  const show = ref(false)
  // const element = ref<HTMLInputElement>()
  const element = ref()
  let stop: any = null
  const elClick = () => {
    smoothscroll()
    function smoothscroll() {
      const currentScroll = scrollTop()
      if (currentScroll > 0) {
        stop = window.requestAnimationFrame(smoothscroll)
        window.scrollTo(0, currentScroll - currentScroll / 5)
      }
    }

    emits('click')
  }
  const documentClick = () => {
    stop && window.cancelAnimationFrame(stop) //可以取消该次动画
  }
  onMounted(() => {
    nextTick(() => {
      document.body.appendChild(element.value)
      window.addEventListener('scroll', windowScroll)
      document.addEventListener('click', documentClick)
    })
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', windowScroll)
    document.removeEventListener('click', documentClick)
    if (element.value && element.value.parentNode) {
      element.value.parentNode.removeChild(element.value)
    }
  })
  const windowScroll = () => {
    show.value = scrollTop() > props.height
  }
</script>
