<template>
  <div :class="`${prefixCls}-tabs`">
    <slot></slot>
    <div class="tabs-nav">
      <div
        v-for="(item, index) in paneSlots"
        :key="index"
        class="tabs-tab"
        :class="{ disabled: item.props?.disabled || false, active: getShow(item, index) }"
        @click="tabsClick(item, index)">
        <span v-if="item.props?.label">{{ item.props?.label }}</span>
        <span v-else-if="item.children['label']">
          <RenderSlot :slots="item.children['label']()" />
        </span>
      </div>
    </div>
    <slot name="content"></slot>
    <div v-if="showContent" class="tabs-content">
      <div v-for="(slot, index) in paneSlots" :key="index">
        <template v-if="slot.type['name'] === `${prefixCls}TabPane`">
          <div v-show="getShow(slot, index)">
            <RenderSlot :slots="slot.children['default']()" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {prefixCls} from '../prefix'
import {defineComponent, computed, ref, onMounted} from 'vue'
import pType from '../util/pType'
import RenderSlot from './renderSlot'
export default defineComponent({
  name: `${prefixCls}Tabs`,
  components: {RenderSlot},
  props: {
    modelValue: pType.string('tab-1'),
    beforeLeave: pType.func(true),
    showContent: pType.bool(true)// 是否显示切换内容
  },
  emits: ['change', 'update:modelValue'],
  setup(props, {emit, slots}) {
    const activeKey = ref(props.modelValue)
    const tabsClick = (item: any, index: number) => {
      if (props.beforeLeave && props.beforeLeave(item)) {
        // 判断阻止点击
        activeKey.value = item.props?.name || 'tab-' + (index + 1)
        emit('change', item, index)
        emit('update:modelValue', activeKey.value)
      }
    }

    const paneSlots = computed(() => {
      if (slots.default) {
        return slots.default()
      } else {
        return []
      }
    })
    const getShow = (item: any, index: number) => {
      if (item.props?.name) {
        return item.props?.name === activeKey.value
      } else {
        // 没有指定name时
        return activeKey.value === 'tab-' + (index + 1)
      }
    }

    onMounted(() => {
      const slots = paneSlots.value
      if (slots && slots.length > 0 && slots[0].props && slots[0].props.name) {
        activeKey.value = slots[0].props.name
      }
    })
    return {
      paneSlots,
      prefixCls,
      activeKey,
      tabsClick,
      getShow
    }
  }
})
</script>
