import { Dialog } from '../dialog'
import { createApp } from 'vue'
import prefixCls from '../prefix'

const dialogCom = (opt: any) => {
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  Object.assign(opt, {
    isAlert: true,
    closeModal: false,
    // modelValue: true,
    remove: () => {
      app.unmount()
      document.body.removeChild(mountNode)
    }
  })
  const app = createApp(Dialog, opt)
  const component: any = app.mount(mountNode)
  component.open() // 使用open方式打开
  return component
}
const dialog = (opt: any) => {
  return dialogCom(opt || {})
}
const confirm = (content: string, opt?: any) => {
  if (!opt) {
    opt = {}
  }
  return dialogCom(
    Object.assign(
      {},
      {
        title: opt.title || '信息',
        content: content,
        confirm: opt.confirm || '确定',
        cancel: '取消',
        className: 'dialog-confirm'
      },
      opt
    )
  )
}
const alert = (content: string, opt?: any) => {
  if (!opt) {
    opt = {}
  }
  return dialogCom(
    Object.assign(
      {},
      {
        title: opt.title || '信息',
        content: content,
        confirm: opt.confirm || '确定',
        className: 'dialog-alert'
      },
      opt
    )
  )
}
const msg = (content: string, opt?: any) => {
  if (!opt) {
    opt = {}
  }
  return dialogCom(
    Object.assign(
      {},
      {
        content: content,
        className: 'dialog-msg',
        showClose: false,
        autoClose: opt.autoClose || 3,
        modal: (opt && opt.modal) || false
      },
      opt
    )
  )
}
const clear = () => {
  // 添加一个简单粗暴的方法，用于清除所有alert弹窗
  const dialog = document.querySelectorAll(`.${prefixCls}-dialog-isAlert`)
  if (dialog && dialog.length > 0) {
    dialog.forEach(item => {
      document.body.removeChild(item)
      // 锁定body解锁
      document.body.style.overflow = ''
      document.body.style.paddingRight = '' // 滚动条的宽，防抖动
    })
  }
}
export { dialog, confirm, alert, msg, clear }
