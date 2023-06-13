<template>
  <button
    v-if="nativeType"
    v-bind="$attrs"
    :type="nativeType"
    :class="classStyle"
    :disabled="disabledOk"
    :style="{ width: btnWidth }"
    @click="handleClick"
  >
    <i v-if="icon2" :class="`icon-${[icon2]} ${prefixCls}-icon`"></i>
    <slot></slot>
  </button>
  <a
    v-else
    v-bind="$attrs"
    :class="classStyle"
    :href="disabledOk ? null : routerHref"
    :style="{ width: btnWidth }"
    @click="handleClick"
  >
    <i v-if="icon2" :class="`icon-${[icon2]} ${prefixCls}-icon`"></i>
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { computed, inject, ref } from 'vue'
  import { getFormDisabled } from '../util/form'

  export interface GroupPropConfig {
    disabled?: boolean
    round?: boolean
    size?: string
    width?: string
    plain?: boolean
  }

  const props = withDefaults(
    defineProps<{
      type?: string
      size?: string
      href?: string
      icon?: string
      round?: boolean
      disabled?: boolean
      nativeType?: '' | 'button' | 'submit' | 'reset'
      width?: string
      name?: string // btn group中作为唯一标识
      loading?: boolean // 是否加
      plain?: boolean // 是否为朴素按钮
      circle?: boolean // 是否为圆形
    }>(),
    {
      type: '',
      size: '',
      href: '',
      icon: '',
      round: false,
      disabled: false,
      nativeType: '',
      width: '',
      name: '', // btn group中作为唯一标识
      loading: false // 是否加
    }
  )
  const emits = defineEmits<{
    (e: 'click', event: MouseEvent): void
  }>()

  const groupConfig: GroupPropConfig = inject(`${prefixCls}GroupConfig`, {})
  const btnClick: any = inject(`${prefixCls}BtnClick`, '')
  const disabledOk = computed(() => {
    if (props.loading) {
      return true // loading情况下一定为禁用状态
    } else {
      return getFormDisabled(groupConfig.disabled || props.disabled) || false
    }
  })
  const btnWidth = ref(props.width || groupConfig.width)
  const classStyle = computed(() => {
    const size = props.size || groupConfig.size || ''
    return {
      [`${prefixCls}-btn`]: true,
      'is-round': props.round || groupConfig.round,
      [`${prefixCls}-btn-` + props.type]: props.type,
      disabled: disabledOk.value,
      [size]: size,
      'is-plain': props.plain || groupConfig.plain,
      'is-circle': props.circle || groupConfig.plain
    }
  })
  const routerHref = computed(() => {
    // 解释路由url，即<router-link :to="/button">转<a href="#/button">
    if (props.href) {
      return props.href
    } else {
      return null
    }
  })
  const handleClick = (event: MouseEvent) => {
    if (!disabledOk.value) {
      emits('click', event)
      btnClick && btnClick(event, props.name)
    }
  }
  const icon2 = computed(() => {
    // 使用加载状态的icon
    return props.loading ? 'loading' : props.icon
  })
</script>
