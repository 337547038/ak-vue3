<!--Created by 337547038 on 2018/1/26.-->
<template>
  <v-transition>
    <ul>
      <li v-for="item in dataTree" :key="item.id">
        <span
          class="tree-box"
          :class="{ 'has-child': item.hasChild, selected: selected(item) }"
          @click.stop="slideToggle(item)"
        >
          <i
            :class="{ 'open-child': item.open, [`${prefixCls}-icon`]: true }"
            class="icon-down"
          ></i>
          <Checkbox
            v-if="state.showCheckbox"
            v-model="item.checked"
            :class="{ 'some-select': item.someChecked }"
            @click.stop=""
            @change="checkboxChange(item)"
          />
          <span class="tree-label">{{ item.label }}</span>
          <span v-if="state.lazy && item.hasChild" class="lazy-loading">
            <Loading
              :model-value="item.id === state.loadingId"
              :key="item.id"
            />
          </span>
          <node-content :data="item" />
        </span>
        <tree-node
          v-if="item.hasChild"
          v-show="item.open"
          :key="item.id"
          :tid="item.id"
          @toggle="slideToggleChild"
        />
      </li>
    </ul>
  </v-transition>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { inject, computed, reactive, nextTick } from 'vue'
  import VTransition from '../transition/Transition.vue'
  import NodeContent from './NodeContent.vue'
  import Loading from '../loading/Loading.vue'
  import { Checkbox } from '../checkbox'
  interface TreeList {
    id: string
    label: string
    open?: boolean
    children?: any
    tid?: string
    hasChild?: boolean
    checked?: boolean
    someChecked?: boolean
    isLoad?: boolean
  }
  /*interface StateReactive {
    lazy: boolean
    showCheckbox: boolean
    itemRefs?: string[]
    loadingId: string
  }*/

  const props = withDefaults(
    defineProps<{
      tid?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'toggle', item: any, callback?: any): void
  }>()
  // const instance = getCurrentInstance()
  // const childList = instance.props.data
  const propsData = inject(`${prefixCls}PropsData`) as any
  const state = reactive({
    lazy: propsData.lazy,
    showCheckbox: propsData.showCheckbox,
    loadingId: ''
  })
  const dataTree = computed(() => {
    return propsData.dataList.filter((item: any) => {
      return item.tid === props.tid
    })
  })
  const slideToggle = (item: TreeList) => {
    if (state.loadingId) {
      // 表示正在加载中
      return
    }
    item.open = !item.open
    if (propsData.lazy && item.hasChild) {
      state.loadingId = item.id
    }
    emits('toggle', item, () => {
      if (propsData.lazy && item.hasChild) {
        state.loadingId = ''
      }
    })
  }
  const selected = (item: TreeList) => {
    if (typeof propsData.modelValue === 'object') {
      return propsData.modelValue.indexOf(item.id) !== -1
    } else {
      return propsData.modelValue === item.id && item.id
    }
  }
  const slideToggleChild = (item: TreeList) => {
    emits('toggle', item)
  }
  const change = inject(`${prefixCls}CheckboxChange`) as (
    item: TreeList
  ) => void
  const checkboxChange = (item: TreeList) => {
    nextTick(() => {
      change && change(item)
    })
  }
</script>
