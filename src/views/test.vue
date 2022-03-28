<template>
  <ak-tabs>
    <ak-tab-pane label="用户管理">
      用户管理
      <span v-show="isDisplay" :style="{ color: 'red' }">我是用户</span>
    </ak-tab-pane>
    <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
    <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
    <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
  </ak-tabs>
  <ak-button type="text" @click="() => isDisplay = !isDisplay">改变显示</ak-button>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const isDisplay = ref(true)
    return {
      isDisplay
    }
  }
}
</script>