<!--Created by 337547038 on 2019.8.-->
<template>
  <div
    ref="element"
    :class="`${prefixCls}-back-top`"
    :style="{right:right+'px',bottom:bottom+'px',opacity:show?1:0,visibility:show?'visible':'hidden'}"
    @click.stop="elClick">
    <a href="javascript:;" class="icon-top" v-text="text"></a>
  </div>
</template>
<script lang="ts">
import {scrollTop} from '../util/dom'
import {prefixCls} from '../prefix'
import pType from '../util/pType'
import {defineComponent, ref, onMounted, nextTick, onBeforeUnmount} from 'vue'

export default defineComponent({
  name: `${prefixCls}BackTop`,
  props: {
    text: pType.string('返回顶部'),
    height: pType.number(200),
    bottom: pType.number(30),
    right: pType.number(30)
  },
  emits: ['click'],
  setup(props, {emit}) {
    /* let {scrollTop} = dom()*/
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
          window.scrollTo(0, currentScroll - (currentScroll / 5))
        }
      }

      emit('click')
    }
    const documentClick = () => {
      stop && window.cancelAnimationFrame(stop)//可以取消该次动画
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
    return {
      prefixCls,
      element,
      show,
      elClick
    }
  }
})
</script>
