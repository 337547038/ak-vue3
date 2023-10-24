<!-- Created by 337547038 on 2019/9/10 0010. -->
<template>
  <div :class="`${prefixCls}-upload-crop`">
    <div
      ref="mainCrop"
      class="main-crop"
      :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }"
    >
      <a
        v-show="!state.drawImg.img"
        href="javascript:;"
        class="select-img"
        :style="{ lineHeight: boxHeight + 'px' }"
        @click="selectImg"
        >{{ text[0] }}</a
      >
      <!--裁切框，zIndex为最顶层-->
      <div
        v-show="state.drawImg.img !== null"
        class="control-box"
        :style="controlBoxStyle"
        @mousedown="controlBoxMouseDown"
      >
        <div class="select-area-tips">
          w:{{ parseInt(state.controlBox.width) }} h:{{
            parseInt(state.controlBox.height)
          }}
          (x:{{ parseInt(state.controlBox.left) }},y:{{
            parseInt(state.controlBox.top)
          }},scale:{{ scale }})
        </div>
        <span
          v-for="(item, index) in state.controlBtnList"
          :key="index"
          :class="item"
          class="control-btn"
          @mousedown="controlBtnMouseDown($event, item)"
        ></span>
        <div class="box-line box-line-1"></div>
        <div class="box-line box-line-2"></div>
        <div class="box-line box-line-3"></div>
        <div class="box-line box-line-4"></div>
      </div>
      <!--显示裁切框和遮罩层-->
      <canvas
        v-show="state.drawImg.img"
        ref="canvasSelectBox"
        class="canvas-crop"
        :width="boxWidth"
        :height="boxHeight"
        @mousedown="controlCanvasMouseDown"
      ></canvas>
      <!--将图片画在这里作为底图，zIndex为最底层-->
      <canvas
        v-show="state.drawImg.img"
        ref="canvas"
        class="canvas-crop-img"
        :width="boxWidth"
        :height="boxHeight"
      ></canvas>
    </div>
    <div class="crop-btn">
      <a
        v-if="text[1]"
        href="javascript:;"
        class="crop-select"
        @click="selectImg"
        >{{ text[1] }}</a
      >
      <a href="javascript:;" class="crop-upload" @click="cropPicture">
        {{ text[2] }}
      </a>
    </div>
    <form ref="formReset">
      <input
        ref="inputFile"
        type="file"
        accept="image/*"
        class="image-file"
        @change="fileChange"
      />
    </form>
    <span v-if="state.progress" class="progress"
      ><i :style="{ width: state.progress + '%' }"></i
    ></span>
  </div>
</template>

<script lang="ts" setup>
  import prefixCls from '../prefix'
  import {
    reactive,
    ref,
    computed,
    onMounted,
    nextTick,
    onUnmounted
  } from 'vue'
  import { getObjectURL, axiosUpload } from './Comm'
  //import button from '../button/Button.vue'

  const props = withDefaults(
    defineProps<{
      boxWidth?: number // 显示的宽
      boxHeight?: number
      imgWidth?: number // 裁切图片的最小宽
      imgHeight?: number // 最小高
      fixedScale?: boolean // 约束比例
      maxSize?: number // 最大上传限制kb,
      name?: string // input标签的 name 属性,
      data?: Object // 附加请求的参数
      headers?: Object // 上传请求 header 数据
      action?: string
      timeout?: number // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
      text?: string[]
    }>(),
    {
      boxWidth: 600,
      boxHeight: 400,
      imgWidth: 150,
      imgHeight: 150,
      fixedScale: true,
      maxSize: 0,
      name: 'file',
      timeout: 0,
      text: () => ['选择图片', '重新选择', '确定']
    }
  )
  const emits = defineEmits<{
    (e: 'error', val: any): void
    (e: 'success', res: any): void
  }>()

  const mainCrop = ref()
  const inputFile = ref()
  const canvas = ref()
  const canvasSelectBox = ref()
  const formReset = ref()
  const state: any = reactive({
    fileName: '', // 上传的文件名
    imgRealWidth: 0, // 上传图片实际宽
    drawImg: {
      img: null, // 规定要使用的图像、画布或视频
      x: 0, // 在画布上放置图像的 x 坐标位置
      y: 0, // 在画布上放置图像的 y 坐标位置
      width: 0, // 要使用的图像的宽度
      height: 0 // 要使用的图像的高度
    },
    controlBox: {
      // 裁切框
      width: props.imgWidth, // 这里初始设为裁切图片的最小宽
      height: props.imgHeight,
      left: props.boxWidth / 2 - props.imgWidth / 2, // 初始显示位置 这里应该设置为居中
      top: props.boxHeight / 2 - props.imgHeight / 2
    },
    controlBtnList: [
      'leftUp',
      'leftDown',
      'rightUp',
      'rightDown',
      'topCenter',
      'downCenter',
      'leftCenter',
      'rightCenter'
    ], // 显示改变大小的8个位置点名
    progress: 0 // 上传进度
  })
  const controlBoxStyle = computed(() => {
    const { height, width, left, top } = state.controlBox
    return {
      height: height + 'px',
      width: width + 'px',
      left: left + 'px',
      top: top + 'px',
      position: 'absolute',
      cursor: 'move'
    }
  })
  const scale = computed(() => {
    return (state.drawImg.width / state.imgRealWidth).toFixed(2)
  })
  // 选择上传图片
  const selectImg = () => {
    inputFile.value.click()
  }
  // file改变时
  const fileChange = (e: any) => {
    const fileObj = e.target
    if (fileObj && fileObj.files && fileObj.files[0]) {
      state.fileName = fileObj.files[0].name
      const blob = getObjectURL(fileObj.files[0])
      imgToCanvas(blob, fileObj.files[0])
    }
  }
  const imgToCanvas = (src: any, file: any) => {
    // console.log(file)
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = (e: any) => {
      const imgHeight = img.height
      const imgWidth = img.width
      const boxHeight = props.boxHeight
      const boxWidth = props.boxWidth
      state.imgRealWidth = img.width
      let imgSize = e.target.fileSize
      if (file && file.size) {
        imgSize = file.size
      }
      console.log('imgSize')
      console.log(imgSize)
      if (imgSize && imgSize && props.maxSize > props.maxSize * 1024) {
        emitEvent(1)
        return
      }
      const rFilter = /^(image\/jpeg|image\/png|image\/jpg)$/i
      if (file && !rFilter.test(file.type)) {
        emitEvent(3)
        return
      }
      let rate
      if (imgHeight < boxHeight && imgWidth < boxWidth) {
        rate = 1
      } else {
        if (imgWidth / imgHeight <= boxWidth / boxHeight) {
          // 计算宽高比
          rate = boxHeight / imgHeight
        } else {
          rate = boxWidth / imgWidth
        }
      }
      state.drawImg = {
        img: img, // 规定要使用的图像、画布或视频
        x: (boxWidth - imgWidth * rate) / 2, // 在画布上放置图像的 x 坐标位置
        y: (boxHeight - imgHeight * rate) / 2, // 在画布上放置图像的 y 坐标位置
        width: imgWidth * rate, // 要使用的图像的宽度
        height: imgHeight * rate // 要使用的图像的高度
      }
      drawImg()
    }
    img.src = src
    drawControlBox()
  }
  // 在canvas上画图
  const drawImg = () => {
    /*console.log('drawImg')
    console.log(state.drawImg.img)
    console.log(canvas.value)*/
    if (state.drawImg.img) {
      const c = canvas.value
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.drawImage(
        state.drawImg.img,
        state.drawImg.x,
        state.drawImg.y,
        state.drawImg.width,
        state.drawImg.height
      )
      // console.log('drawImagedrawImagedrawImage')
    }
  }
  // 裁切框
  const drawControlBox = () => {
    // eslint-disable-next-line prefer-const
    let { width, height, left, top } = state.controlBox
    // 限制框的位置
    if (left < 0) {
      left = 0
    }
    if (top < 0) {
      top = 0
    }
    if (left + width > props.boxWidth) {
      left = props.boxWidth - width
    }
    if (top + height > props.boxHeight) {
      top = props.boxHeight - height
    }
    // 设置位置
    state.controlBox.left = left
    state.controlBox.top = top
    // 同时在画布上画一个拖动层
    const c = canvasSelectBox.value
    const ctx = c.getContext('2d')
    ctx.fillStyle = 'rgba(0,0,0,0.6)' // 遮罩层颜色
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.clearRect(left, top, width, height)
  }
  // 裁切框鼠标事件
  const controlBoxMouseDown = (e: any) => {
    let flag = true
    if (flag) {
      const offSetX = state.controlBox.left
      const offSetY = state.controlBox.top
      const x = e.pageX - offSetX
      const y = e.pageY - offSetY
      document.onmousemove = ev => {
        console.log('_controlBoxonmousemove')
        const left = ev.pageX - x
        const top = ev.pageY - y
        // 修改值
        state.controlBox.left = left
        state.controlBox.top = top
        // 同步画布上的框位置
        drawControlBox()
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        flag = false
      }
    }
  }
  // 裁切框拖放改变大小
  const controlBtnMouseDown = (e: any, direction: string) => {
    let flag = true
    if (flag) {
      const x = e.pageX
      const y = e.pageY
      const { width, height, left, top } = state.controlBox
      document.onmousemove = ev => {
        const mx = ev.pageX - x // 移动的位置
        const my = ev.pageY - y
        let mWidth = width // 移动后的宽
        let mHeight = height
        let mLeft = left
        let mTop = top
        // 宽高比例
        const scaleHeight = props.imgWidth / props.imgHeight
        const scaleWidth = props.imgHeight / props.imgWidth
        switch (direction) {
          case 'leftUp':
            // 左上
            mWidth = width - mx
            if (props.fixedScale) {
              // 约束比例时
              mHeight = mWidth * scaleWidth
              mTop = top - (mHeight - height) // 原来的top+所增加的高（移动后的高－原来的高＝增加的高）
            } else {
              mHeight = height - my
              mTop = top + my
            }
            mLeft = left + mx
            break
          case 'leftCenter':
            // 向左
            mWidth = width - mx
            mLeft = left + mx
            if (props.fixedScale) {
              // 先简单往下增加高，应该是上下两边同时增加高才适合点的
              mHeight = mWidth * scaleWidth
            }
            break
          case 'leftDown':
            // 左下
            mWidth = width - mx
            mLeft = left + mx
            if (props.fixedScale) {
              mHeight = mWidth * scaleWidth
            } else {
              mHeight = height + my
            }
            break
          case 'topCenter':
            mHeight = height - my
            mTop = top + my
            if (props.fixedScale) {
              mWidth = mHeight * scaleHeight
            }
            break
          case 'downCenter':
            mHeight = height + my
            if (props.fixedScale) {
              mWidth = mHeight * scaleHeight
            }
            break
          case 'rightUp':
            mWidth = width + mx
            if (props.fixedScale) {
              mHeight = mWidth * scaleWidth
              mTop = top - (mHeight - height)
            } else {
              mHeight = height - my
              mTop = top + my
            }
            break
          case 'rightCenter':
            mWidth = width + mx
            if (props.fixedScale) {
              mHeight = mWidth * scaleWidth
            }
            break
          case 'rightDown':
            mWidth = width + mx
            if (props.fixedScale) {
              mHeight = mWidth * scaleWidth
            } else {
              mHeight = height + my
            }
            break
        }
        // 重新设置值
        // 限制最小选择范围
        if (mWidth < props.imgWidth || mHeight < props.imgHeight) {
          return
        }
        state.controlBox = {
          width: mWidth,
          height: mHeight,
          left: mLeft,
          top: mTop
        }
        // 同步画布
        drawControlBox()
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        flag = false
        console.log('onmouseup0000')
      }
    }
    e.stopPropagation()
  }
  // 控制底层canvas图片大小位置
  const controlCanvasMouseDown = (e: any) => {
    let flag = true
    if (flag) {
      const x = e.pageX - state.drawImg.x
      const y = e.pageY - state.drawImg.y
      document.onmousemove = ev => {
        state.drawImg.x = ev.pageX - x // 移动的位置
        state.drawImg.y = ev.pageY - y // 移动的位置
        drawImg() // 重绘
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        flag = false
      }
    }
  }
  // 鼠标滚轮事件
  const scaleImgWheel = (e: any) => {
    // console.log('_scaleImgWheel')
    if (state.drawImg.img) {
      let scale
      // e是FF的事件。window.event是chrome/ie/opera的事件
      const ee = e || window.event
      if (ee.wheelDelta) {
        // IE/Opera/Chrome
        scale = -(ee.wheelDelta / 40)
      } else if (ee.detail) {
        // Firefox
        scale = ee.detail
      }
      const { x, y, height, width } = state.drawImg
      state.drawImg.x = x + scale * 3
      state.drawImg.y = y + scale * 3
      state.drawImg.width = width - scale * 9
      state.drawImg.height = (width - scale * 9) / (width / height)
      drawImg()
    }
    return false
  }
  // 导出图片
  const cropPicture = () => {
    // 原理：先将底层canvas图片导出，再写到canvas里通过裁切，最后再导出
    if (!state.drawImg.img) {
      emitEvent(2)
      return
    }
    const tempImg = new Image()
    const { left, top } = state.controlBox // 裁切框的大小和位置
    const width = state.controlBox.width
    const height = state.controlBox.height
    const imgWidth = props.imgWidth
    const imgHeight = props.imgHeight
    tempImg.onload = () => {
      // 这里新创建一个canvas
      const newCanv = document.createElement('canvas')
      newCanv.width = imgWidth
      newCanv.height = imgHeight
      const ctx = newCanv.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, imgWidth, imgHeight)
        ctx.drawImage(
          tempImg,
          left,
          top,
          width,
          height,
          0,
          0,
          imgWidth,
          imgHeight
        )
      }
      const data = {
        fileName: state.fileName, // 上传文件名，如123.jpg
        name: props.name, // 文件域的name值
        action: props.action,
        headers: props.headers,
        data: props.data,
        timeout: props.timeout
      }
      const img1 = dataURLtoBlobToFile(newCanv.toDataURL('image/png', 1))
      axiosUpload(img1, data, uploadStatus)
    }
    tempImg.src = canvas.value.toDataURL()
  }
  // 上传回调事件
  const uploadStatus = (res: any, type: string) => {
    /*console.log('_uploadStatus')
    console.log(res)
    console.log(type)*/
    switch (type) {
      case 'loaded':
        state.progress = res
        break
      case 'success':
        emits('success', res)
        reset()
        break
      case 'catch':
        emitEvent(4, res)
        reset()
        break
    }
  }
  const emitEvent = (type: number, res?: any) => {
    const error = { code: type, msg: '', data: '' }
    switch (type) {
      case 1:
        error.msg = '超出上传限制'
        break
      case 2:
        error.msg = '请选择上传图片'
        break
      case 3:
        error.msg = '请选择jpg、jpeg或png格式的图片'
        break
      case 4:
        error.msg = '请求异常'
        error.data = res
        break
    }
    emits('error', error)
  }
  // 将blob转换为file
  const dataURLtoBlobToFile = (dataurl: any) => {
    // const blob = this._dataURLtoBlob(dataurl)
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const blob: any = new Blob([u8arr], { type: mime })
    // eslint-disable-next-line
      blob.lastModifiedDate = new Date()
    // eslint-disable-next-line
      blob.name = state.fileName
    return blob
  }
  // 重置，上传成功或提供给外部调用
  const reset = () => {
    state.drawImg = {
      img: null, // 规定要使用的图像、画布或视频
      x: 0, // 在画布上放置图像的 x 坐标位置
      y: 0, // 在画布上放置图像的 y 坐标位置
      width: 0, // 要使用的图像的宽度
      height: 0 // 要使用的图像的高度
    }
    formReset.value.reset()
  }
  onMounted(() => {
    nextTick(() => {
      const mousewheelevt = /Firefox/i.test(navigator.userAgent)
        ? 'DOMMouseScroll'
        : 'mousewheel'
      if (mousewheelevt === 'mousewheel') {
        mainCrop.value.onmousewheel = scaleImgWheel
      } else {
        mainCrop.value.addEventListener('DOMMouseScroll', scaleImgWheel)
      }
    })
  })
  onUnmounted(() => {
    if (mainCrop.value) {
      mainCrop.value.removeEventListener('DOMMouseScroll', scaleImgWheel)
    }
  })
</script>
