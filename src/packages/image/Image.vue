<!-- Created by 337547038 on 2022/7/8. -->
<template>
  <div :class="{ [prefixCls + '-image']: true }">
    <slot name="placeholder" v-if="status==='loading'">
<Loading></Loading>
    </slot>
    <slot name="error" v-else-if="status==='error'"></slot>
    <img :src="src" :alt="alt" :style="{'object-fit': fit}" v-else>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import prefixCls from '../prefix'
  import Loading from '../loading/Loading.vue'
  const props = withDefaults(
    defineProps<{
      src: string
      fit?: 'fill'|'contain'|'cover'|'none'|'scale-down'
      alt?: string
      previewSrcList?: string[]
      zIndex?:number
    }>(),
    {
    }
  )
  const status=ref('loading')
  const loadImg=(imgSrc:string)=> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function () {
        resolve(img.src)
      }
      img.onerror = function () {
        const error = 'error'
        reject(error)
      }
      img.src = imgSrc
    })
  }
</script>
