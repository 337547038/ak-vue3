<!-- Created by 337547038 -->
<template>
  <div :class="[prefixCls + '-divider', direction]" :style="borderTopOrLeft">
    <span class="divider-text" :class="[contentPosition]">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      direction?: 'vertical' | ''
      borderStyle?: 'dashed' | 'dotted' | 'solid'
      contentPosition?: 'left' | 'right' | 'center'
      padding?: String
    }>(),
    {
      direction: '',
      borderStyle: 'solid',
      contentPosition: 'center'
    }
  )
  const borderTopOrLeft = computed(() => {
    let position = 'borderTopStyle'
    // 水平返回上下边距，垂直返回左右边距
    let padding = props.padding ? `0 ${props.padding}` : ''
    if (props.direction === 'vertical') {
      position = 'borderLeftStyle'
      padding = props.padding ? `${props.padding} 0` : ''
    }
    return {
      [position]: props.borderStyle,
      margin: padding
    }
  })
</script>
