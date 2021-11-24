<template>
  <ak-upload
    :action="action"
    listType="picture"
    :multiple="true"
    @success="success">
  </ak-upload>
</template>
<script>
import {reactive, toRefs, ref} from 'vue'

export default {
  setup() {
    const state = reactive({
      action: 'http://localhost/upload/upload.php'
    })
    // 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功
    const success = (res, callback) => {
      // callback(res.data, 2)
    }
    return {
      ...toRefs(state),
      success
    }
  }
}
</script>
