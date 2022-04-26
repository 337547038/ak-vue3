// @ts-ignore
import axios from 'axios'

export const getObjectURL = (file: File) => {
  let url = null
  if (window.URL !== undefined) {
    // mozilla(firefox)兼容火狐
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}
export const axiosUpload = (file: any, data: any, callback: any) => {
  const param = new FormData()
  param.append(data.name, file, file.name)
  if (data.data) {
    for (const i in data.data) {
      param.append(i, data.data[i])
    }
  }
  const source = axios.CancelToken.source()
  const cancelToken = source.token
  callback(source, 'source') // 用于取消
  const config = {
    cancelToken,
    headers: Object.assign(
      { 'Content-Type': 'multipart/form-data' },
      data.headers
    ),
    timeout: data.timeout, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    onUploadProgress: (progressEvent: any) => {
      const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0
      // 上传进度
      console.log(complete)
      callback(complete, 'loaded') // 更新进度
    }
  }
  axios
    .post(data.action, param, config)
    .then((res: any) => {
      console.log(res)
      callback(res, 'success')
    })
    .catch((res: any) => {
      console.log(res, 'catch')
      callback(res, 'catch')
    })
}
