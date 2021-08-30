<!-- Created by 337547038 on 2021/8/30. -->
<template>
  <tooltip
    ref="el"
    :class-name="cls"
    :trigger="trigger"
    @click="click">
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </tooltip>
</template>

<script lang="ts">
import {prefixCls} from '../prefix'
import {defineComponent, reactive, toRefs, ref, watch, computed} from 'vue'
import Tooltip from '../tooltip/index.vue'
import pType from '../util/pType'

export default defineComponent({
  name: `${prefixCls}Popover`,
  components: {Tooltip},
  props: {
    modelValue: pType.bool(),
    trigger: pType.oneOfString(['hover', 'click'], 'click'),
    className: pType.string()
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const el = ref()
    const state = reactive({})
    watch(() => props.modelValue, (bool: boolean) => {
      if (!bool) {
        // 关闭
        el.value.close()
      }
    })
    const cls = computed(() => {
      if (props.className) {
        return `${prefixCls}-popover ${props.className}`
      } else {
        return `${prefixCls}-popover`
      }
    })
    const click = (bool: boolean) => {
      emit('update:modelValue', bool)
    }
    return {
      prefixCls,
      ...toRefs(state),
      el,
      click,
      cls
    }
  }
})
</script>
