<template>
  <div>
    <p>消息提示 成功 <span class="green" @click="alertOpen(1)">试一试</span></p>
    <p>消息提示 失败 <span class="green" @click="alertOpen(2)">试一试</span></p>
    <p>消息提示 提示 <span class="green" @click="alertOpen(3)">试一试</span></p>
    <p>消息提示 警告 <span class="green" @click="alertOpen(4)">试一试</span></p>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      alertOpen(type) {
        this.$msg('删除成功', {
          icon: type
        })
      }
    }
  }
</script>
