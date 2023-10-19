<!-- Created by 337547038 on 2022/7/8. -->
<template>
  <div
    :class="{ [prefixCls + '-image']: true, border: border }"
    :style="{ 'border-radius': radius }"
  >
    <slot name="placeholder" v-if="status === 'loading'">
      <div class="default-placeholder">
        <Loading :model-value="true" background="none" />
      </div>
    </slot>
    <slot name="error" v-else-if="status === 'error'">
      <div class="default-error">FAILED</div>
    </slot>
    <img
      :src="src"
      :alt="alt"
      :style="{ 'object-fit': fit }"
      v-else
      @click="imgClick"
    />
    <transition name="image-fade">
      <div
        v-if="previewSrcList?.length > 0"
        v-show="imageVisible"
        :class="{ [prefixCls + '-image-preview']: true }"
        ref="imagePreview"
      >
        <i class="icon-error" @click="closePreview"></i>
        <i
          class="icon-arrow-r prev"
          @click="prevNext(0)"
          :class="{ disabled: active <= 0 }"
        ></i>
        <i
          class="icon-arrow-r next"
          @click="prevNext(1)"
          :class="{ disabled: active >= previewSrcList.length - 1 }"
        ></i>
        <div class="preview-loading" v-if="previewStatus === 'loading'">
          <Loading :model-value="true" background="none" :zIndex="10" />
        </div>
        <div class="preview-error" v-else-if="previewStatus === 'error'">
          FAILED
        </div>
        <img
          class="img"
          ref="previewImg"
          :style="previewStyle"
          :src="previewSrcList[active]"
          @mousedown="mouseDown"
          v-else-if="previewSrcList?.length > 0"
        />
        <div class="control-tool">
          <i class="icon-zoom-out" @click="toolClick('out')"></i>
          <i class="icon-zoom-in" @click="toolClick('in')"></i>
          <i class="icon-default" @click="toolClick('default')"></i>
          <i class="icon-rotateLeft" @click="toolClick('rotateLeft')"></i>
          <i class="icon-rotateRight" @click="toolClick('rotateRight')"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import {
    ref,
    watch,
    onMounted,
    onBeforeUnmount,
    nextTick,
    computed
  } from 'vue'
  import prefixCls from '../prefix'
  import Loading from '../loading/Loading.vue'

  /*interface Transform {
    rotate?: number
    scale?: number
    x?: number
    y?: number
    duration?: string
  }*/

  const props = withDefaults(
    defineProps<{
      src: string
      fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
      alt?: string
      previewSrcList?: string[]
      previewCls?: string
      zIndex?: number
      border?: boolean
      radius?: string
    }>(),
    {
      previewSrcList: () => {
        return []
      },
      radius: '2px'
    }
  )
  const status = ref('loading')
  const previewStatus = ref('loading')
  const imagePreview = ref()
  const previewImg = ref()
  const imageVisible = ref(false)
  const transform = ref({})
  const previewStyle = computed(() => {
    const {
      rotate = 0,
      scale = 1,
      x = 0,
      y = 0,
      duration = ''
    } = transform.value
    return {
      transform: `scale(${scale}) rotate(${rotate}deg) translate(${x}px, ${y}px)`,
      transitionDuration: duration
    }
  })
  const active = ref(0)
  const imgOnload = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      if (!props.src) {
        return reject()
      }
      const img = new Image()
      img.onload = function () {
        resolve()
      }
      img.onerror = function () {
        reject()
      }
      img.src = src
    })
  }
  const setStatus = () => {
    imgOnload(props.src)
      .then(() => {
        status.value = 'success'
      })
      .catch(() => {
        status.value = 'error'
      })
  }
  watch(
    () => props.src,
    () => {
      setStatus()
    }
  )
  setStatus()
  const imgClick = () => {
    if (props.previewSrcList && props.previewSrcList.length > 0) {
      imageVisible.value = true
      active.value = 0
      loadPreviewImg()
    }
  }
  const closePreview = () => {
    imageVisible.value = false
    // reset
    transform.value = {}
  }
  const prevNext = (direction: number) => {
    if (direction) {
      if (active.value < props.previewSrcList?.length - 1) {
        active.value++
      } else {
        return
      }
    } else {
      if (active.value > 0) {
        active.value--
      } else {
        return
      }
    }
    transform.value = {}
    loadPreviewImg()
  }
  const toolClick = (type: string) => {
    const { rotate = 0, scale = 1 } = transform.value
    switch (type) {
      case 'out':
        transform.value.scale = scale / 1.4
        if (transform.value.scale <= 0) {
          transform.value.scale = 0
        }
        break
      case 'in':
        transform.value.scale = scale * 1.4
        if (transform.value.scale >= 10) {
          transform.value.scale = 10
        }
        break
      case 'default':
        transform.value = {}
        break
      case 'rotateLeft':
        transform.value.rotate = rotate - 90
        break
      case 'rotateRight':
        transform.value.rotate = rotate + 90
        break
    }
  }
  const loadPreviewImg = () => {
    previewStatus.value = 'loading'
    imgOnload(props.previewSrcList[active.value])
      .then(() => {
        previewStatus.value = 'success'
      })
      .catch(() => {
        previewStatus.value = 'error'
      })
  }
  const mouseDown = (evt: MouseEvent) => {
    let moveFlag = false
    if (previewImg.value) {
      const x = evt.pageX - (transform.value.x || 0)
      const y = evt.pageY - (transform.value.y || 0)
      moveFlag = true
      document.onmousemove = (evt: MouseEvent) => {
        if (moveFlag) {
          transform.value.x = evt.pageX - x
          transform.value.y = evt.pageY - y
          transform.value.duration = '0s' // 拖动时要设为0，否则拖动很慢的感觉
        }
        return false
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        transform.value.duration = ''
        moveFlag = false
      }
    }
  }
  onMounted(() => {
    nextTick(() => {
      //document.body.appendChild(imagePreview.value)
    })
  })
  onBeforeUnmount(() => {
    /*if (imagePreview.value && imagePreview.value.parentNode) {
      imagePreview.value.parentNode.removeChild(imagePreview.value)
    }*/
  })
</script>
