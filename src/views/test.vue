<template>
  <div>
    <ak-radio-group v-model="position" :options="options" />
    <ak-tabs :tab-position="position">
      <ak-tab-pane label="用户管理">用户管理</ak-tab-pane>
      <ak-tab-pane label="配置管理">配置管理</ak-tab-pane>
      <ak-tab-pane label="角色管理">角色管理</ak-tab-pane>
      <ak-tab-pane label="定时任务补偿">定时任务补偿</ak-tab-pane>
    </ak-tabs>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const position = ref('top')
  const options = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' }
  ]
</script>
