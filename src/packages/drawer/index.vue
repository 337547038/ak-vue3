<template>
  <Dialog
    ref="dialogEl"
    v-model="visible"
    animation="slide"
    :class-name="`${prefixCls}-drawer ${prefixCls}-drawer-${direction}`">
    <slot></slot>
  </Dialog>
</template>

<script lang="ts">
import {prefixCls} from '../prefix'
import {defineComponent, ref, reactive, toRefs, computed, onMounted, watch} from 'vue'
import pType from '../util/pType'
import Dialog from '../dialog/index.vue'

export default defineComponent({
  name: `${prefixCls}Drawer`,
  components: {Dialog},
  props: {
    modelValue: pType.bool(false),
    direction: pType.string('right')
    // width: pType.string()
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    //const dialogEl = ref()
    const visible = ref(props.modelValue)
    watch(() => props.modelValue, (v: boolean) => {
      visible.value = v
    })
    watch(() => visible.value, (v: boolean) => {
      emit('update:modelValue', v)
    })
    /*onMounted(() => {
    })*/
    return {
      prefixCls,
      // dialogEl,
      visible
    }
  }
})
</script>
