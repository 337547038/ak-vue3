<!--Created by 337547038 on 2019/2.-->
<template>
  <div :class="`${prefixCls}-upload`">
    <label :for="randomId" class="upload-file" :class="{'drag-file':drag}" @dragover="fileDragOver" @drop="fileDrop">
      <slot></slot>
    </label>
    <input
      :id="randomId"
      ref="inputEl"
      type="file"
      :multiple="multiple"
      :accept="accept"
      :name="name"
      @change="onFileChange">
  </div>
</template>
<script lang="ts">
import {prefixCls} from '../prefix'
import {defineComponent, reactive, toRefs, ref} from 'vue'
import pType from '../util/pType'
import {AnyPropName} from '../types'
import axios from 'axios'

export default defineComponent({
  name: `${prefixCls}Upload`,
  props: {
    modelValue: pType.oneOfType([pType.array(), pType.object()]),
    name: pType.string('file'), // input标签的 name 属性
    action: pType.string(), // 上传地址
    multiple: pType.bool(),// 是否支持多选文件
    accept: pType.string(), // h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型
    data: pType.object(), // 附加请求的参数
    headers: pType.object(), // 上传请求 header 数据
    format: pType.string(), // 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用，多个用豆号隔开
    maxSize: pType.number(1024), // 最大上传限制kb
    timeout: pType.number(0), // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    auto: pType.bool(true),  // 是否需要点击按钮上传,false需要点击
    drag: pType.bool() // 允许拖动上传
  },
  emits: ['change', 'update:modelValue', 'error', 'success'],
  setup(props, {emit}) {
    const inputEl = ref()
    const state = reactive<AnyPropName>({
      randomId: Math.random().toString(36).substr(2, 10),
      tempFiles: [],
      tempUpload: [], // 存储待上传文件，用于手动上传
      index: 0, // 批量上传时记录当前第几个，用于更新当前进度
      source: ''
    })
    const axiosUpload = (file: File, index: number) => {
      let param = new FormData()
      // 图片裁切时是通过base64转为blob数据流，因此要在后面添加文件名，否则上传的是一个blob文件
      param.append(props.name, file, file.name)
      if (props.data) {
        for (let i in props.data) {
          param.append(i, props.data[i])
        }
      }
      state.source = axios.CancelToken.source()
      const cancelToken = state.source.token
      let config = {
        cancelToken,
        headers: Object.assign({'Content-Type': 'multipart/form-data'}, props.headers),
        timeout: props.timeout, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
        onUploadProgress: (progressEvent: AnyPropName) => {
          const complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
          // 上传进度
          console.log(complete)
          state.tempFiles[index].loaded = complete // 更新进度
        }
      }
      state.tempFiles[index].status = 1 // 更新状态
      axios.post(props.action, param, config)
        .then((res: any) => {
          console.log(res)
          emit('success', res, (url?: string, status?: number) => {
            state.tempFiles[index].status = status || 2
            if (url) {
              state.tempFiles[index].src = url // 使用服务端返回的地址
            }
          })
        })
        .catch((res: any) => {
          console.log(res, 'catch')
          emit('error', res)
          state.tempFiles[index].status = -1
        })
    }
    const getObjectURL = (file: File) => {
      let url = null
      if (window.URL !== undefined) { // mozilla(firefox)兼容火狐
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    }
    // 单位换算
    const unitFormat = (size: number) => {
      if (size === 0) return '0B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(size) / Math.log(k))
      return (size / Math.pow(k, i)).toPrecision(3) + sizes[i]
    }
    // 检查文件合法性
    const check = (file: File) => {
      let error = {
        code: 0,
        msg: ''
      }
      let name = file.name
      let suffix = (name.substr(name.length - 3, 3)).toLocaleLowerCase()
      if (props.format) {
        if (props.format.toLocaleLowerCase().indexOf(suffix) !== -1) {
        } else {
          let format = props.format ? props.format.toString() : ''
          error = {code: 2, msg: '只支持上传类型为：' + format}
        }
      }
      let fileSize = file.size
      if (fileSize && fileSize > props.maxSize * 1024) {
        error = {code: 1, msg: '超出上传限制'}
      }
      return error
    }
    const onFileChange = (evt: any, type: string) => {
      emit('change', evt)
      if (!props.multiple) { // 多个时上传后再清除
        state.tempFiles = []
        state.tempUpload = []
      }
      let file = evt
      if (type !== 'drag') {
        file = evt.target && evt.target.files
      }
      if (file) {
        for (let i = 0; i < file.length; i++) {
          const checkResult = check(file[i])
          console.log(checkResult)
          if (!checkResult.code) {
            // 校验通过
            let src = undefined
            if (/image\/\w+/.test(file[i].type)) {
              src = getObjectURL(file[i])
            }
            state.tempFiles.push({
              size: unitFormat(file[i].size), // 大小
              loaded: '0%', // 上传进度
              name: file[i].name,
              src: src, // 预览用的src
              type: file[i].type,
              status: 0 // 上传状态，0等待上传，1正在上传，2成功，-1失败，由接口返回后修改
              // verify: checkResult // 验证结果，批量上传时
            })
            if (props.auto) {
              axiosUpload(file[i], i)
            } else {
              // 手动上传时保存
              state.tempUpload.push({file: file[i], index: i})
            }
          } else {
            // 存在没有校验通过的
            if (!props.multiple) {
              // 单个文件上传时，放error里提示
              emit('error', checkResult)
              return false
            }
          }
        }
      }
      if (props.multiple) { // 多个时返回数组
        emit('update:modelValue', state.tempFiles)
      } else { // 单个时返回object
        emit('update:modelValue', state.tempFiles[0])
      }
    }
    const fileDrop = () => {
    }
    const fileDragOver = () => {
    }
    // 取消事件
    const cancelRequest = () => { // 给点击取消的元素绑定上即可 ， 取消上传请求
      if (state.source) {
        state.source.cancel('cancel upload') // 这里传递的什么字符串，在上面的rej.message值就是什么
        inputEl.value.value = ''
      }
    }
    return {
      prefixCls,
      ...toRefs(state),
      onFileChange,
      fileDrop,
      fileDragOver,
      cancelRequest,
      inputEl
    }
  }
})
</script>
