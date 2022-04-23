<!-- Created by 337547038 on 2020/4/22 0022. -->
<template>
  <i :class="[prefixCls + '-icon', 'icon-' + icon]" @click="iconClick"> </i>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  withDefaults(
    defineProps<{
      icon?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'click'): void
  }>()

  const iconClick = () => {
    emits('click')
  }
</script>
