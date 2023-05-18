<!--Created by 337547038 on 2017/12/14.-->
<template>
  <div :class="[`${prefixCls}-progress`, status]">
    <div
      v-if="type === 'line'"
      :style="{
        width: radius ? radius + 'px' : '',
        background: color,
        minHeight: border ? border + 'px' : ''
      }"
      :class="[className, prefixCls + '-progress-line']"
    >
      <slot></slot>
      <span class="progress-bar" :style="lineStyle">
        <span v-if="showText && followText" class="progress-text">
          <b>{{ state.percent }}</b
          >%
        </span>
      </span>
      <span
        v-if="showText && !followText"
        class="progress-text progress-fixed-text"
      >
        <b>{{ state.percent }}</b
        >%
      </span>
    </div>

    <div
      v-else-if="type === 'circle'"
      :style="circleStyle('pro')"
      :class="[className, prefixCls + '-progress-circle']"
    >
      <div class="custom-content">
        <slot></slot>
      </div>
      <span v-if="showText" class="progress-text">
        <b>{{ state.percent }}</b
        >%
      </span>
      <!--      circleStyle2-->
      <div :style="circleStyle('circle')" class="circle-circle">
        <!--        circleRotateStyle-->
        <span :style="circleStyle('left')" class="circle-left"></span>
        <span
          v-if="state.percent >= 50"
          :style="circleStyle('right')"
          class="circle-right"
        ></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { reactive, computed, onMounted } from 'vue'
  import { circleStyleAttr } from './type'

  const props = withDefaults(
    defineProps<{
      type?: 'line' | 'circle'
      modelValue?: number
      radius?: number // 外半径
      border?: number // 边框
      color?: string // 底环颜色
      borderColor?: string // 进度条颜色
      duration?: number // 动画持续时间，单位毫秒
      showText?: boolean // 显示进度数字
      followText?: boolean // 进度数字跟进进度
      className?: string
      status?: 'primary' | 'success' | 'warning' | 'danger'
    }>(),
    {
      type: 'line',
      modelValue: 0,
      radius: 0, // 外半径
      border: 0, // 边框
      // color: '#999', // 底环颜色
      // borderColor: '#41a259', // 进度条颜色
      duration: 1000, // 动画持续时间，单位毫秒
      showText: true, // 显示进度数字
      followText: true // 进度数字跟进进度
    }
  )

  const state = reactive({
    percent: 0
  })
  const lineStyle = computed(() => {
    return {
      height: props.border ? props.border + 'px' : '',
      width: state.percent + '%',
      background: props.borderColor,
      transition: `all ${props.duration / 1000}s`
    }
  })
  const animation = () => {
    // 这里还是用js控制，css控制不了，因为大于50%后还要处理其他
    let clearTime = -1
    clearTime = window.setInterval(() => {
      if (state.percent < props.modelValue && state.percent < 100) {
        state.percent++
      } else {
        clearInterval(clearTime)
      }
    }, props.duration / props.modelValue)
  }
  const circleStyle = (type: string) => {
    const style: circleStyleAttr = {}
    style.width = props.radius * 2 + 'px'
    style.height = props.radius * 2 + 'px'
    if (type === 'pro') {
      // style.border = `${props.border}px solid ${props.color || 'transparent'}`
      style.borderWidth = `${props.border}px`
      style.borderColor = props.color
    } else if (type === 'circle') {
      style.left = `-${props.border}px`
      style.top = `-${props.border}px`
      if (state.percent > 50) {
        style.clip = 'rect(auto,auto,auto,auto)'
      } else {
        style.clip = `rect(0,${props.radius * 2}px,${props.radius * 2}px,${
          props.radius
        }px)`
      }
    } else if (type === 'left') {
      //style.border = `${props.border}px solid ${borderColor}`
      style.borderWidth = `${props.border}px`
      style.borderColor = props.borderColor
      style.clip = `rect(0, ${props.radius}px, ${props.radius * 2}px, 0px)`
      style.transform = 'rotate(' + 3.6 * state.percent + 'deg)'
    } else if (type === 'right') {
      //style.border = `${props.border}px solid ${borderColor}`
      style.borderWidth = `${props.border}px`
      style.borderColor = props.borderColor
      style.clip = `rect(0, ${props.radius * 2}px, ${props.radius * 2}px, ${
        props.radius
      }px)`
    }
    return style
  }
  onMounted(() => {
    if (props.type === 'circle') {
      animation()
    } else if (props.type === 'line') {
      // 这里用css3动画的transition，设置下延时
      setTimeout(() => {
        state.percent = props.modelValue
      }, 10)
    }
  })
</script>
