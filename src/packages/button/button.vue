<!-- Created by 337547038 on 2018/8/27 0027. -->
<!--
 <Button>默认按钮</Button>
-->
<template>
  <button
    v-if="nativeType"
    v-bind="$attrs"
    :type="nativeType"
    :class="classStyle"
    :disabled="disabledOk"
    :style="{width:btnWidth}"
    @click="handleClick">
    <i v-if="icon2" :class="`icon-${[icon2]} ${prefixCls}-icon`"></i>
    <slot></slot>
  </button>
  <a
    v-else
    v-bind="$attrs"
    :class="classStyle"
    :href="disabledOk?null:routerHref"
    :style="{width:btnWidth}"
    @click="handleClick">
    <i v-if="icon2" :class="`icon-${[icon2]} ${prefixCls}-icon`"></i>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import {prefixCls} from '../prefix'
import pType from '../util/pType'
import {computed, defineComponent, inject, ref} from 'vue'
import {useRouter} from 'vue-router'
import {GroupConfig} from '../types/button'
import {getFormDisabled} from '../util/form'

export default defineComponent({
  name: `${prefixCls}Button`,
  props: {
    type: pType.string(),
    size: pType.string(),
    routerTo: pType.string(),
    href: pType.string(),
    icon: pType.string(),
    round: pType.bool(),
    disabled: pType.bool(),
    nativeType: pType.oneOfString(['', 'button', 'submit', 'reset']),
    width: pType.string(),
    name: pType.string(), // btn group中作为唯一标识
    loading: pType.bool() // 是否加载中状态
  },
  emits: ['click'],
  setup(props, {emit}) {
    const groupConfig: GroupConfig = inject(`${prefixCls}GroupConfig`, {})
    const btnClick: any = inject(`${prefixCls}BtnClick`, '')
    const disabledOk = computed(() => {
      if (props.loading) {
        return true // loading情况下一定为禁用状态
      } else {
        return getFormDisabled(groupConfig.disabled || props.disabled)
      }
    })
    const btnWidth = ref(props.width || groupConfig.width)
    const classStyle = computed(() => {
      let size = props.size || groupConfig.size || ''
      return {
        [`${prefixCls}-btn`]: true,
        'is-round': props.round || groupConfig.round,
        [`${prefixCls}-btn-` + props.type]: props.type,
        'disabled': disabledOk.value,
        [size]: size
      }
    })
    const routerHref = computed(() => {
      // 解释路由url，即<router-link :to="/button">转<a href="#/button">
      if (props.routerTo) {
        const $router = useRouter()
        let routeData = $router.resolve({path: props.routerTo})
        return routeData.href
      } else if (props.href) {
        return props.href
      } else {
        return null
      }
    })
    const handleClick = (event: Element) => {
      if (!disabledOk.value) {
        emit('click', event)
        btnClick && btnClick(event, props.name)
      }
    }
    const icon2 = computed(() => {
      // 使用加载状态的icon
      return props.loading ? 'loading' : props.icon
    })
    return {
      classStyle,
      routerHref,
      handleClick,
      btnWidth,
      prefixCls,
      icon2,
      disabledOk
    }
  }
})
</script>
