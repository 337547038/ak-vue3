<!-- Created by 337547038 on 2021/8/30. -->
<template>
  <tooltip ref="el" :class-name="cls" :trigger="trigger">
    <slot></slot>
    <template #content>
      <div class="content">
        {{ content }}
        <slot name="content" v-if="!content"></slot>
      </div>
      <div class="footer">
        <Button v-if="cancel" size="mini" @click="cancelClick">
          {{ cancel }}
        </Button>
        <Button v-if="confirm" size="mini" type="primary" @click="confirmClick"
          >{{ confirm }}
        </Button>
      </div>
    </template>
  </tooltip>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { ref, computed } from 'vue'
  import { Tooltip } from '../tooltip'
  import { Button } from '../button'

  const props = withDefaults(
    defineProps<{
      trigger?: 'hover' | 'click'
      className?: string
      confirm?: string
      cancel?: string
      callback?: () => void
      content?: string
    }>(),
    {
      trigger: 'click'
    }
  )
  /*  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
  }>()*/

  const el = ref()
  /*watch(
    () => props.modelValue,
    (bool: boolean) => {
      if (!bool) {
        // 关闭
        el.value.close()
      }
    }
  )*/
  const cls = computed(() => {
    if (props.className) {
      return `${prefixCls}-popover ${props.className}`
    } else {
      return `${prefixCls}-popover`
    }
  })
  /*  const click = (bool: boolean) => {
    emits('update:modelValue', bool)
  }*/
  const cancelClick = () => {
    // 关闭
    el.value.close()
  }
  const confirmClick = () => {
    cancelClick()
    props.callback && props.callback()
  }
</script>
