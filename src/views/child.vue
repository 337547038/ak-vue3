<!-- Created by 337547038 on 2021/6/28 0028. -->
<template>
  <div></div>
</template>

<script>

export default {
  data() {
    return {}
  },
  beforeCreate() {
    console.log('child beforeCreate')
  },
  created() {
    console.log('child created')
  },
  beforeMount() {
    console.log('child beforeMounted')
  },
  mounted() {
    console.log('child mounted')
  }
}
</script>
