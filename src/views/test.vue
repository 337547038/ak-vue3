<template>
  <div class="image-demo">
    <ak-image
      :src="url"
      class="cls"
      style="width: 100px; height: 100px"
      :previewSrcList="previewSrcList"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const url = ref('./image/img2.png')
  const previewSrcList = ['./image/img1.png', './image/img2.png']
</script>
