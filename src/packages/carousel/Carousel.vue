<!-- Created by 337547038 on -->
<template>
  <div
    ref="domEl"
    :class="{
      [prefixCls + '-carousel']: true,
      vertical: direction === 'v',
      [type]: type
    }"
    @mouseleave="mouseLeaveDom"
    @mouseover="mouseOverDom"
  >
    <div class="carousel-container" :style="containerStyle">
      <slot></slot>
      <div :style="style" class="carousel-transform clearfix">
        <item-list
          v-for="(item, index) in state.children"
          :key="`item${index}`"
          :child-item="item"
          :class-name="getItemClass(index as number)"
          :style-cls="{ width: state.width + 'px', height: itemHeight + 'px' }"
        />
      </div>
    </div>
    <div v-if="directionNav" class="direction-nav">
      <a
        class="carousel-prev"
        :class="{ disabled: !loop && state.index <= 1 }"
        @click="directionNavClick(-1)"
      ></a>
      <a
        class="carousel-next"
        :class="{ disabled: !loop && state.index >= state.maxMove }"
        @click="directionNavClick(1)"
      ></a>
    </div>
    <div v-if="controlNav" class="control-nav">
      <a
        v-for="item in state.maxMove"
        :key="item"
        href="javascript:"
        :class="{ 'control-nav-active': state.index === item }"
        @click="controlNavClick(item)"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
  import ItemList from './ItemList.vue'
  import prefixCls from '../prefix'
  import {
    computed,
    reactive,
    ref,
    onMounted,
    nextTick,
    onUnmounted,
    provide
  } from 'vue'
  const props = withDefaults(
    defineProps<{
      loop?: boolean
      move?: number // 每次移动单位个数
      itemWidth?: number
      itemHeight?: number
      active?: number // 当前，从1开始
      duration?: number // transition-duration过渡时间，单位毫秒
      showTime?: number // 自动播放时动画停留时间，单位毫秒
      autoPlay?: boolean
      pauseOnHover?: boolean // 鼠标滑过暂停
      controlNav?: boolean // 显示分页小圆点
      directionNav?: boolean // 显示前后控制
      showNumber?: number // 可见个数
      direction?: 'h' | 'v'
      type?: 'card' | ''
    }>(),
    {
      move: 1,
      active: 1,
      duration: 500,
      showTime: 3000,
      pauseOnHover: true,
      controlNav: true,
      directionNav: true,
      showNumber: 1,
      direction: 'h',
      type: ''
    }
  )
  const emits = defineEmits<{
    (e: 'slideBefore', index: number): void
    (e: 'slideAfter', index: number): void
  }>()

  const state = reactive({
    children: [],
    index: props.active, // 从1开始
    width: 0,
    duration2: 0,
    // timer: 0, // 控制自动播放
    maxMove: 0,
    isAnimation: false,
    moveDirection: 0, // 移动方向1右-1左
    defaultMove: 0 // 初始移动位置
  })
  provide(`${prefixCls}ChildrenList`, state.children)
  const domEl = ref()
  const style = computed(() => {
    const len = state.children.length
    let distance: any = state.width
    let translate = 'translateX'
    const obj = reactive({
      width: ''
    })
    if (props.direction === 'v') {
      // 垂直方向
      distance = props.itemHeight
      translate = 'translateY'
    } else {
      obj.width = len * distance + 'px'
    }
    if (distance && len > 0) {
      const moveWidth = -distance * props.move // 每次移动的宽
      let transformWidth = moveWidth * state.moveDirection
      if (props.loop) {
        transformWidth += moveWidth
      } else {
        transformWidth = moveWidth * (state.index - 1)
        if (props.direction === 'h') {
          const maxX = domEl.value.offsetWidth - len * distance // 最大可移动距离
          if (transformWidth < maxX) {
            transformWidth = maxX // 仿止右边出现空白
          }
        }
      }
      return Object.assign(
        {
          overflow: 'hidden',
          transform: `${translate}(${transformWidth}px)`,
          transition: `transform ${state.duration2}ms`
        },
        obj
      )
    } else {
      return {}
    }
  })
  const containerStyle = computed(() => {
    const obj = reactive({
      'overflow-x': 'hidden',
      height: '',
      'overflow-y': ''
    })
    if (state.width) {
      Object.assign(obj, { width: state.width * props.showNumber + 'px' })
    }
    if (props.direction === 'v') {
      if (props.itemHeight) {
        obj.height = props.itemHeight * props.showNumber + 'px'
      }
      obj['overflow-y'] = 'hidden'
    }
    return obj
  })
  const init = () => {
    let showPage = 0
    if (!props.loop && props.showNumber > 1) {
      showPage = Math.ceil(props.showNumber / props.move) - 1 // 可视个数所占的页数
    }
    state.maxMove = Math.ceil((state.children.length - showPage) / props.move)
    // 总个数大于每次单位移动个数时
    if (props.loop && state.children.length >= props.move) {
      // 截取后面移动单位个数移动到前面,
      unShiftPush(-1)
    }
  }
  const directionNavClick = (type: number) => {
    if (state.isAnimation) {
      return
    }
    if (type === 1) {
      // 下一页
      if (state.maxMove > state.index) {
        state.index++
      } else {
        if (props.loop) {
          state.index = 1
        } else {
          return
        }
      }
    } else {
      // 上一页
      if (state.index > 1) {
        state.index--
      } else {
        if (props.loop) {
          state.index = state.maxMove
        } else {
          return
        }
      }
    }
    state.isAnimation = true
    emits('slideBefore', state.index)
    state.moveDirection = type
    state.duration2 = props.duration
    setTimeOutReset(type)
  }
  const setTimeOutReset = (type: number) => {
    // 动画完成后回到初始translate
    setTimeout(() => {
      if (props.loop) {
        state.moveDirection = 0
        state.duration2 = 0
        unShiftPush(type)
      }
      state.isAnimation = false
      emits('slideAfter', state.index)
    }, props.duration)
  }
  const unShiftPush = (type: number, move?: number) => {
    if (!props.loop) {
      return
    }
    const moveNum = move || props.move
    if (type === 1) {
      // 删除前面第N个，追加到最后
      const pre = state.children.slice(0, moveNum)
      state.children.splice(0, moveNum)
      pre.forEach((item: any) => {
        state.children.push(item)
      })
    } else {
      // 将数组最后N条移动到最前面
      const next = state.children.slice(state.children.length - moveNum)
      for (let i = next.length; i > 0; i--) {
        state.children.unshift(next[i - 1])
      }
      state.children.splice(state.children.length - moveNum)
    }
  }
  const controlNavClick = (page: number) => {
    if (page > state.index) {
      // 相当于下一页
      unShiftPush(1, page - state.index)
    } else {
      unShiftPush(-1, state.index - page)
    }
    state.index = page
  }
  let timer: any = 0
  const autoPlay = () => {
    if (props.autoPlay) {
      timer = setInterval(() => {
        // 每隔一定的时单，点下一个
        directionNavClick(1)
      }, props.showTime)
    }
  }
  const mouseOverDom = () => {
    // 如果鼠标滑动过时暂停和自动播放时，鼠标移上暂停
    if (props.pauseOnHover && props.autoPlay) {
      clearInterval(timer)
    }
  }
  const mouseLeaveDom = () => {
    autoPlay()
  }
  const getItemClass = (index: number) => {
    if (props.type === 'card') {
      // 实现卡片模式
      const obj: { [index: number]: any } = { 3: 2, 5: 3, 7: 4 } // 每屏可视个数3,5,7个，中间的添加样式
      // const obj = {3: 2, 5: 3, 7: 4} // 语法报错
      let bigIndex = obj[props.showNumber] - 2 + state.index
      let loopIndex = 0
      if (props.loop) {
        bigIndex = obj[props.showNumber] + state.moveDirection
        loopIndex = obj[props.showNumber]
      }
      let cls = ''
      if (bigIndex === index) {
        cls = 'big-size'
      }
      if (loopIndex === index) {
        cls += ' normal-size'
      }
      return cls
    }
  }
  const getItemWidth = () => {
    if (props.itemWidth) {
      state.width = props.itemWidth
    } else {
      state.width = domEl.value.offsetWidth / props.showNumber
    }
  }
  const resize = () => {
    getItemWidth()
  }
  onMounted(() => {
    init()
    nextTick(() => {
      getItemWidth()
    })
    autoPlay()
    window.addEventListener('resize', resize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    state.children = []
  })
</script>
