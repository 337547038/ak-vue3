<template>
  <div>
    {{files}}
    <ak-upload
      v-model="files"
      :action="url"
      :multiple="true"
      :max-size="1024"
      format="jpg,gif"
      @success="success"
      @error="error">
      上传图片
    </ak-upload>
  </div>
</template>
<script>
import {ref, reactive, toRefs} from 'vue'

export default {
  setup() {
    const state = reactive({
      files: [],
      url: 'http://192.168.2.102/uploadTest/upload.php'
    })
    const success = (res,callback) => {
      console.log('success')
      callback(res.data)
    }
    const error = (obj) => {
      console.log('error')
      console.log(obj)
    }
    return {
      ...toRefs(state),
      error,
      success
    }
  }
}
</script>
