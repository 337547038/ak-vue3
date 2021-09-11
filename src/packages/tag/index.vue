<!-- Created by 337547038 on 2021/8/27. -->
<template>
  <span v-show="visible" :class="{[prefixCls+'-tag']:true,[prefixCls+'-tag-'+type]:type,[prefixCls+'-tag-'+size]:size}" :style="{background:bgColor,borderColor:borderColor,color:color}" @click="click">
    <slot></slot>
    <i v-if="closable" class="icon-close" @click="closeClick"></i>
  </span>
</template>

<script lang="ts">
import {prefixCls} from '../prefix'
import pType from '../util/pType'
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: `${prefixCls}Tag`,
  props: {
    type: pType.string(),
    closable: pType.bool(),
    color: pType.string(),
    borderColor: pType.string(),
    bgColor: pType.string(),
    size: pType.string()
  },
  emits: ['click', 'close'],
  setup(props, {emit}) {
    const state = reactive({
      visible: true
    })
    const closeClick = () => {
      state.visible = false
      emit('close')
    }
    const click = () => {
      emit('click')
    }
    return {
      prefixCls,
      closeClick,
      click,
      ...toRefs(state)
    }
  }
})
</script>
