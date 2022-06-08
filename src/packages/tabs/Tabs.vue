<template>
  <div :class="`${prefixCls}-tabs`">
    <slot></slot>
    <div class="tabs-nav">
      <div
        v-for="(item, index) in paneSlots"
        :key="index"
        class="tabs-tab"
        :class="{
          disabled: item.disabled,
          active: getShow(item, index)
        }"
        @click="tabsClick(item, index)"
      >
        <span v-if="item.label">{{ item.label }}</span>
        <span v-else-if="item.slots">
          <RenderSlot :slots="item.slots" />
        </span>
      </div>
    </div>
    <slot name="content"></slot>
    <div v-if="showContent" class="tabs-content">
      <template v-for="(slot, index) in paneSlots" :key="index">
        <div v-show="getShow(slot, index)">
          <RenderSlot :slots="slot.slots" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { ref, onMounted, provide } from 'vue'
  import RenderSlot from './RenderSlot'
  const props = withDefaults(
    defineProps<{
      modelValue?: string
      beforeLeave?: Function
      showContent?: boolean // 是否显示切换内容
    }>(),
    {
      modelValue: 'tab-1',
      showContent: true
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', index: string): void
    (e: 'change', props: string, index: number): void
  }>()

  const activeKey = ref(props.modelValue)
  const tabsClick = (item: any, index: number) => {
    if (item.disabled) {
      return
    }
    if (props.beforeLeave) {
      if (!props.beforeLeave(item)) {
        console.log('阻止点击')
        return false
      }
    }
    activeKey.value = item.name || 'tab-' + (index + 1)
    emits('change', item, index)
    emits('update:modelValue', activeKey.value)
  }
  const paneSlots: any = ref([])
  provide(`${prefixCls}ChildrenList`, (slots: any) => {
    paneSlots.value.push(slots)
  })
  // tabPane动态时返回的是空的
  /*const paneSlots = computed(() => {
    if (slots.default) {
      // 只返回tabPane
      return slots.default().filter((item: any) => {
        return typeof item === 'object' && item.type?.name === 'TabPane'
      })
    } else {
      return []
    }
  })*/
  const getShow = (item: any, index: number) => {
    if (item.name) {
      return item.name === activeKey.value
    } else {
      // 没有指定name时
      return activeKey.value === 'tab-' + (index + 1)
    }
  }
  const setActiveKey = () => {
    //设置了name的值
    paneSlots.value.forEach((item: any) => {
      if (item.name === props.modelValue) {
        activeKey.value = item.name
      }
    })
  }
  onMounted(() => {
    setActiveKey()
  })
</script>
