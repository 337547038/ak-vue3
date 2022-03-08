<template>
  <li :class="{'disabled':disabled,className}" @click="itemClick">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import {inject, defineComponent} from 'vue'
import pType from '../util/pType'
import {prefixCls} from '../prefix'

export default defineComponent({
  name: `${prefixCls}DropdownItem`,
  components: {},
  props: {
    disabled: pType.bool(),
    className: pType.string()
  },
  setup(props) {
    const item: any = inject(`${prefixCls}DropdownItemClick`, '')
    const itemClick = () => {
      if (!props.disabled) {
        item && item(this)
      }
    }
    return {
      itemClick
    }
  }
})
</script>
