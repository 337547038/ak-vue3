<!-- Created by 337547038 on 2021/11/25. -->
<template>
  <div
    ref="el"
    :class="{'is-down':visible,[prefixCls+'-select-down']:true,disabled:disabledOk}"
    :style="{width:width}"
    @click="downToggle">
    <div class="select-control" @click="selectControlClick">
      <div
        v-if="multiple"
        :class="inputCls"
        class="multiple-text">
        <ul :placeholder="placeholder">
          <template v-if="collapseTags">
            <li v-if="valueLabel.length>0">
              <span v-text="valueLabel[0]"></span>
              <i class="icon-error" @click.stop="deleteText(0)"></i>
            </li>
            <li v-if="valueLabel.length>1">
              <tag size="mini" type="info">
                +{{ valueLabel.length }}
              </tag>
            </li>
          </template>
          <template v-else>
            <li v-for="(item,index) in valueLabel" :key="index">
              <span v-text="item"></span>
              <i class="icon-error" @click.stop="deleteText(index)"></i>
            </li>
          </template>
          <li v-if="filterable" class="input">
            <input
              type="text"
              :disabled="disabledOk"
              :placeholder="valueLabel.length===0?placeholder:''"
              @input="inputInput"
              @change="inputChange"
              @blur="inputBlur($event,1)">
          </li>
        </ul>
      </div>
      <input
        v-else
        v-model="valueLabel[0]"
        :readonly="!filterable"
        :placeholder="placeholder"
        :class="inputCls"
        :disabled="disabledOk"
        @input="inputInput"
        @change="inputChange"
        @blur="inputBlur">
      <span class="group-icon">
        <i
          v-if="clear&&modelValue.length>0"
          class="icon-close"
          title="清空"
          @click="clearClick"></i>
        <i :class="{'down':visible,[`icon-${icon}`]:true}"></i>
      </span>
    </div>
    <transition :name="direction2===2?'slide-toggle-top':'slide-toggle'">
      <div
        v-show="visible"
        ref="selectDown"
        :class="{[prefixCls+'-select-down-pane']:true,[downClass]:downClass,top:direction2===2}"
        :style="downPanelStyle">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {prefixCls} from '../prefix'
import {reactive, toRefs, ref, computed, defineComponent, onMounted, onBeforeUnmount, nextTick, watch} from 'vue'
import pType from '../util/pType'
import {getFormDisabled} from '../util/form'
import Tag from '../tag/index.vue'
import {getOffset, getWindow} from '../util/dom'

export default defineComponent({
  name: `${prefixCls}SelectDown`,
  components: {Tag},
  props: {
    modelValue: pType.array([]),
    width: pType.string(),
    multiple: pType.bool(),
    collapseTags: pType.bool(), // 多选模式下是否折叠Tag
    clear: pType.bool(),// 是否支持清空选项
    filterable: pType.bool(),// 是否可搜索选项
    size: pType.string(), // 尺寸
    placeholder: pType.string(),
    disabled: pType.bool(),
    direction: pType.number(0),//0自动　1向下　2向上
    downClass: pType.string(),
    downStyle: pType.object(),
    appendToBody: pType.bool(false),
    downHeight: pType.number(0), // 显示下拉最大高度，超出显示滚动条
    options: pType.array(), // 参数非必要，来自于select
    icon: pType.string('arrow')
  },
  emits: ['update:modelValue', 'change', 'blur', 'toggleClick', 'clear', 'delete', 'input'],
  setup(props, {emit}) {
    const el = ref()
    const selectDown = ref()
    const state = reactive({
      visible: false,
      valueLabel: JSON.parse(JSON.stringify(props.modelValue || [])),
      appendStyle: {
        top: '',
        width: '',
        bottom: '',
        left: '',
        '--var-min-width': ''
      },
      direction2: props.direction
    })
    watch(() => props.modelValue, (val: any) => {
      state.valueLabel = JSON.parse(JSON.stringify(val))
    })
    const disabledOk = computed(() => {
      return getFormDisabled(props.disabled)
    })
    // 输入框类名
    const inputCls = computed(() => {
      const cls = [`${prefixCls}-input-control`]
      if (props.size) {
        cls.push(props.size)
      }
      if (disabledOk.value) {
        cls.push('disabled')
      }
      return cls.join(' ')
    })
    const downToggle = (evt: MouseEvent) => {
      if (evt && el.value.contains(evt.target)) {
        if (!disabledOk.value) {
          // 非禁用状态下才能点击
          state.visible = true
          setPosition(evt)
        }
        setAppendToBodyStyle()
      } else {
        state.visible = false
      }
      emit('toggleClick', evt, state.visible)
      evt.stopPropagation()
    }
    // 添加一个事件，在展开的时候点击收起
    const selectControlClick = (evt: MouseEvent) => {
      if (state.visible) {
        slideUp()
        evt.stopPropagation()
      }
    }
    const deleteText = (index: number) => {
      state.valueLabel.splice(index, 1)
      updateModel()
      emit('delete', index)
    }
    // 清空
    const clearClick = (evt: MouseEvent) => {
      state.valueLabel = []
      updateModel()
      emit('clear')
      evt.stopPropagation()
    }
    const slideUp = () => {
      state.visible = false
    }
    const updateModel = () => {
      emit('update:modelValue', state.valueLabel)
    }
    const inputChange = (e: Event) => {
      if (props.filterable) {
        const {value} = e.target as HTMLInputElement
        emit('change', value)
      }
    }
    const inputInput = (e: Event) => {
      if (props.filterable) {
        const {value} = e.target as HTMLInputElement
        emit('input', value)
      }
    }
    const inputBlur = (e: any, type?: number) => {
      if (props.filterable) {
        const {value} = e.target as HTMLInputElement
        emit('blur', value)
        /*if (props.multiple) {
          e.target.value = ''
        }*/
        // 恢复输入框的值
        state.valueLabel = JSON.parse(JSON.stringify(props.modelValue || []))
        if (type === 1) {
          e.target.value = ''
        }
      }
    }
    // 计算插入body的位置样式
    const setAppendToBodyStyle = () => {
      if (props.appendToBody) {
        // let {getWindow, getOffset} = getDom()
        const ww = getWindow()
        const offset = getOffset(el.value)
        state.appendStyle = {
          bottom: 'auto',
          width: offset.width + 'px',
          left: offset.left + 'px',
          top: (offset.top + offset.height) + 'px',
          '--var-min-width': offset.width + 'px'
        }
        if (state.direction2 === 2) { // 向上
          state.appendStyle.top = 'auto'
          state.appendStyle.bottom = (ww.height - offset.top) + 'px'
        }
      }
    }
    const setPosition = (evt: MouseEvent) => {
      if (props.direction === 0) {
        // 计算弹出方向
        const wh = document.documentElement.clientHeight || document.body.clientHeight
        const clientY = evt.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
        // 最大下拉高度
        let downMaxHeight = props.downHeight
        if (!downMaxHeight && props.options) {
          downMaxHeight = props.options.length * 25 // 按每项高25px算
        }
        if ((downMaxHeight > wh - clientY) && clientY > downMaxHeight) {
          // 向上
          state.direction2 = 2
        }
      }
    }
    // 下拉面板style样式
    const downPanelStyle = computed(() => {
      let style = {}
      if (props.downHeight) {
        style = {
          'max-height': props.downHeight + 'px',
          overflowY: 'auto'
        }
      }
      style = Object.assign({}, state.appendStyle, props.downStyle || {}, style)
      return style
    })
    onMounted(() => {
      nextTick(() => {
        document.addEventListener('click', slideUp)
        if (props.appendToBody) {
          document.body.appendChild(selectDown.value)
        }
      })
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', slideUp)
      if (props.appendToBody && selectDown.value) {
        document.body.removeChild(selectDown.value)
      }
    })
    return {
      ...toRefs(state),
      downToggle,
      selectControlClick,
      deleteText,
      clearClick,
      disabledOk,
      el,
      selectDown,
      inputCls,
      inputChange,
      inputInput,
      inputBlur,
      downPanelStyle,
      slideUp,
      prefixCls
    }
  }
})
</script>
