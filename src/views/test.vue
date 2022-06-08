<template>
  <div style="margin: 150px">
    <div class="tooltip-demo">
      <ak-popover confirm="确定" cancel="取消" :callback="callback" style="margin-right:10px ">
        <ak-button>删除确认</ak-button>
        <template #content> 这是一段内容这是一段内容确定删除吗？ </template>
      </ak-popover>
    </div>
  </div>
</template>
<script setup>
  const callback = () => {
    alert('点击了确定')
  }
</script>
