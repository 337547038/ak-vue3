<!--Created by 337547038 on 2019/2.-->
<template>
  <div
    :class="{
      [`${prefixCls}-upload`]: true,
      disabled: disabled,
      ['upload-' + listType]: listType
    }"
  >
    <label
      v-if="!(limit && limit <= state.tempFiles.length)"
      class="upload-file"
      :class="{ 'drag-file': drag }"
      @dragover="fileDragOver"
      @drop="fileDrop"
    >
      <input
        ref="inputEl"
        style="display: none"
        type="file"
        :multiple="multiple"
        :accept="accept"
        :name="name"
        :disabled="disabled"
        @change="onFileChange"
      />
      <slot v-if="$slots.default"></slot>
      <i v-else class="default-btn icon-plus"></i>
    </label>
    <div v-if="showFileList" class="upload-list">
      <ul>
        <li
          v-for="(item, index) in state.tempFiles"
          :key="item.url"
          :class="['status-' + (item.status || '')]"
        >
          <span v-if="listType === 'text'">{{ item.name }}</span>
          <img v-else :src="item.url" alt="" />
          <span v-if="item.status !== undefined" class="status">
            <b>{{ getStatusName(item) }}</b>
            <i
              v-if="item.status === 1"
              class="progress"
              :style="{ width: item.loaded + '%' }"
            ></i>
          </span>
          <i class="icon-del" @click="remove(index)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { reactive, ref } from 'vue'
  import { getObjectURL, axiosUpload } from './Comm'

  const props = withDefaults(
    defineProps<{
      modelValue?: any
      name?: string // input标签的 name 属性
      action?: string // 上传地址
      multiple?: boolean // 是否支持多选文件
      accept?: string // h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型
      data?: Object // 附加请求的参数
      headers?: Object // 上传请求 header 数据
      format?: string // 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用，多个用豆号隔开
      maxSize?: number // 最大上传限制kb，0不限制
      timeout?: number // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
      auto?: boolean // 是否需要点击按钮上传,false需要点击
      drag?: boolean // 允许拖动上传
      disabled?: boolean
      limit?: number // 允许上传的最大数量0不限制
      showFileList?: boolean // 是否显示已上传文件列表
      listType?: string // 文件列表的类型 text/picture
    }>(),
    {
      name: 'file',
      listType: 'text',
      auto: true,
      showFileList: true,
      maxSize: 0,
      timeout: 0,
      limit: 0
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
    (e: 'change', modelValue: any): void
    (e: 'error', val: any): void
    (e: 'success', res: any, callback: any): void
    (e: 'remove', val: any): void
  }>()

  const isObject =
    Object.prototype.toString.call(props.modelValue) === '[object Object]'
  const inputEl = ref()
  const state: any = reactive({
    tempFiles: isObject ? [props.modelValue] : props.modelValue || [],
    tempUpload: [], // 存储待上传文件，用于手动上传
    source: ''
  })
  const onFileChange = (evt: any, type: string) => {
    emits('change', evt)
    if (!props.multiple) {
      // 多个时上传后再清除
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
          const id = file[i].size + new Date().getTime().toString() // 弄个唯一标识
          // 判断超出个数限制
          if (props.limit && state.tempFiles.length >= props.limit) {
            return
          }
          state.tempFiles.push({
            size: unitFormat(file[i].size), // 大小
            loaded: 0, // 上传进度
            name: file[i].name,
            url: src, // 预览用的src
            type: file[i].type,
            status: 0, // 上传状态，0等待上传，1正在上传，2成功，-1失败，由接口返回后修改
            id: id
          })
          if (props.auto) {
            getAxiosUpload(file[i], id)
          } else {
            // 手动上传时保存
            state.tempUpload.push({ file: file[i], index: id })
          }
        } else {
          // 存在没有校验通过的
          if (!props.multiple) {
            // 单个文件上传时，放error里提示
            emits('error', checkResult)
            return
          }
        }
      }
    }
    updateModelValue()
  }
  const getAxiosUpload = (file: File, id: string) => {
    const data = {
      fileName: state.fileName, // 上传文件名，如123.jpg
      name: props.name, // 文件域的name值
      action: props.action,
      headers: props.headers,
      data: props.data,
      timeout: props.timeout
    }
    let index = 0
    state.tempFiles.forEach((item: any, i: number) => {
      if (item.id === id) {
        index = i
      }
    })
    state.tempFiles[index].status = 1 // 更新状态正在上传
    axiosUpload(file, data, (res: any, type: string) => {
      switch (type) {
        case 'source':
          state.source = res
          break
        case 'loaded':
          state.tempFiles[index].loaded = res
          break
        case 'success':
          emits('success', res, (url?: string, status?: number) => {
            state.tempFiles[index].status = status || 2
            if (url) {
              state.tempFiles[index].url = url // 使用服务端返回的地址
            }
          })
          clear()
          break
        case 'error':
          emits('error', res)
          state.tempFiles[index].status = -1
          clear()
          break
      }
    })
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
    const name = file.name
    const suffix = name.substr(name.length - 3, 3).toLocaleLowerCase()
    if (props.format) {
      if (props.format.toLocaleLowerCase().indexOf(suffix) !== -1) {
        /* empty */
      } else {
        const format = props.format ? props.format.toString() : ''
        error = { code: 2, msg: '只支持上传类型为：' + format }
      }
    }
    const fileSize = file.size
    if (fileSize && fileSize && props.maxSize > props.maxSize * 1024) {
      error = { code: 1, msg: '超出上传限制' }
    }
    return error
  }
  const fileDrop = (e: any) => {
    e.preventDefault()
    // const file = e.dataTransfer.files[0] // 获取到第一个上传的文件对象
    onFileChange(e.dataTransfer.files, 'drag')
  }
  const fileDragOver = (e: any) => {
    e.preventDefault()
  }
  // 取消事件
  const cancelRequest = () => {
    // 给点击取消的元素绑定上即可 ， 取消上传请求
    if (state.source) {
      state.source.cancel('cancel upload') // 这里传递的什么字符串，在上面的rej.message值就是什么
      clear()
    }
  }
  // 删除事件
  const remove = (index: number) => {
    emits('remove', state.tempFiles[index])
    state.tempFiles.splice(index, 1)
    updateModelValue()
  }
  const updateModelValue = () => {
    if (props.multiple) {
      // 多个时返回数组
      emits('update:modelValue', state.tempFiles)
    } else {
      // 单个时返回object
      emits('update:modelValue', state.tempFiles[0] || {})
    }
  }
  // 手动上传
  const upload = () => {
    if (!props.auto) {
      state.tempUpload.forEach(async (item: any) => {
        getAxiosUpload(item.file, item.index)
      })
    }
  }
  // 上传后清空input的值，否则不能上传相同的
  const clear = () => {
    inputEl.value.value = ''
  }
  const getStatusName = (obj: any) => {
    let text = ''
    switch (obj.status) {
      case 0:
        text = '待上传'
        break
      case 1:
        text = '正在上传' + obj.loaded + '%'
        break
      case 2:
        text = '上传成功'
        break
      case -1:
        text = '上传失败'
        break
    }
    return text
  }
  defineExpose({ upload, cancelRequest })
</script>
