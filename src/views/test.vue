
<template>
  <div>
    <span class="green" @click="visible=true">试一试</span>
    <ak-dialog v-model="visible" title="title" move>
      <p>这是的 dialog 弹窗内容</p>
      <p>这是一个会自动关闭的弹窗</p>
    </ak-dialog>
  </div>
</template>
<script>
  import {ref} from 'vue'

  export default {
    setup() {
      const visible = ref(false)
      return {
        visible
      }
    }
  }
</script>
