<!-- Created by 337547038 -->
<template>
  <div :class="[prefixCls+'-divider',direction]" :style="{'--divider-border-style':borderStyle}">
    <span v-if="$slots.default" class="divider-text" :class="[contentPosition]"><slot></slot></span>
  </div>
</template>

<script lang="ts" setup>
import pType from '../util/pType'
import {prefixCls} from '../prefix'

const props = defineProps({
  direction: pType.string(),
  borderStyle: pType.string('solid'),
  contentPosition: pType.oneOfString(['left', 'right', 'center'], 'center')
})

</script>
