<template>
  <div :class="`${prefixCls}-tabs ${tabPosition}`" ref="tabsEl">
    <slot></slot>
    <div class="tabs-nav" :style="{ width: tabsWidth ? tabsWidth + 'px' : '' }">
      <slot name="leftExtra"></slot>
      <a
        class="tabs-prev icon-arrow"
        v-if="isScroll"
        @click="prevNext(0)"
        :class="{ disabled: prevDisabled }"
      ></a>
      <div class="tabs-scroll" ref="tabsScrollEl">
        <div class="tabs-tab" ref="tabsTabEl" :style="transformStyle">
          <div
            v-for="(item, index) in paneSlots"
            :key="index"
            class="tabs-item"
            :class="{
              disabled: item.disabled,
              active: getShow(item, index)
            }"
            @click="tabsClick(item, index)"
          >
            <span v-if="item.label"
              >{{ item.label }}
              <i
                class="icon-close"
                @click.stop="delClick(index, item.closable || closable)"
                v-if="item.closable || closable"
              ></i
            ></span>
            <span v-else-if="item.slots?.label">
              <RenderSlot :slots="item.slots?.label()" />
            </span>
          </div>
        </div>
      </div>
      <a
        class="tabs-next icon-arrow"
        v-if="isScroll"
        @click="prevNext(1)"
        :class="{ disabled: nextDisabled }"
      ></a>
      <slot name="rightExtra"></slot>
    </div>
    <slot name="content"></slot>
    <div v-if="showContent" class="tabs-content">
      <template v-for="(slot, index) in paneSlots" :key="index">
        <!--        <transition :name="`${prefixCls}-tabs-transition`">-->
        <div v-show="getShow(slot, index)">
          <RenderSlot :slots="slot.slots" />
        </div>
        <!--        </transition>-->
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import {
    ref,
    onMounted,
    provide,
    computed,
    nextTick,
    onBeforeUnmount,
    watch
  } from 'vue'
  import RenderSlot from './RenderSlot'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      beforeLeave?: Function
      showContent?: boolean // 是否显示切换内容
      tabPosition?: 'top' | 'right' | 'bottom' | 'left'
      closable?: boolean // 显示关闭标签
    }>(),
    {
      modelValue: 'tab-1',
      showContent: true,
      tabPosition: 'top',
      closable: false
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
  const tabsEl = ref()
  const tabsTabEl = ref()
  const tabsScrollEl = ref() // 滚动区域
  const isScroll = ref(false) // 是否需要滚动
  const moveWidth = ref(0) // 已经移动的宽
  const tabsWidth = ref()
  const prevDisabled = ref(true)
  const nextDisabled = ref(false)
  const transformStyle = computed(() => {
    return {
      transform: `translateX(-${moveWidth.value}px)`
    }
  })
  const scrollInit = () => {
    nextTick(() => {
      if (['top', 'bottom'].includes(props.tabPosition)) {
        const width = tabsEl.value.offsetWidth // 可视宽
        const width2 = tabsTabEl.value.offsetWidth // 实际宽
        isScroll.value = width <= width2
        tabsWidth.value = width
      }
    })
  }
  const prevNext = (type: number) => {
    if (['top', 'bottom'].includes(props.tabPosition)) {
      const scrollWidth = tabsScrollEl.value.offsetWidth
      const sw = Math.abs(scrollWidth - 100) // 每次滚动的距离为可见宽减100左右
      const width2 = tabsTabEl.value.offsetWidth // 实际宽
      let w = 0
      if (type) {
        if (nextDisabled.value) {
          return
        }
        prevDisabled.value = false
        nextDisabled.value = false
        // 移动次数＝当前已移动的距离+每次移动的距离
        w = moveWidth.value + sw
        if (w > width2 - scrollWidth) {
          w = width2 - scrollWidth
          nextDisabled.value = true
        }
      } else {
        if (prevDisabled.value) {
          return
        }
        nextDisabled.value = false
        prevDisabled.value = false
        w = moveWidth.value - sw
        if (w < 0) {
          w = 0
          prevDisabled.value = true
        }
      }
      moveWidth.value = w
    }
  }
  const delClick = (index: number, closable: boolean) => {
    if (!closable) {
      return
    }
    paneSlots.value.splice(index, 1)
  }
  // 确保在动态切换时，清空上或下配置时设置的宽信息
  watch(
    () => props.tabPosition,
    (val: string) => {
      if (['left', 'right'].includes(val)) {
        moveWidth.value = 0
        tabsWidth.value = 0
      } else {
        scrollInit()
      }
    }
  )
  onMounted(() => {
    setActiveKey()
    scrollInit()
    window.addEventListener('resize', scrollInit, false)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', scrollInit, false)
  })
</script>
