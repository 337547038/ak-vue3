/**
 * Created by 337547038 on 2018/9/5 0005.
 */
/**
 * 方法一
 * <div v-loading="loading1">容器区域</div>
 *
 * 方法二
 * this.$loading({})
 * **/
import akLoading from './Loading.vue'
import prefixCls from '../prefix'
//import { App } from 'vue'
import { createApp } from 'vue'

const appendChild = (opt: any) => {
  const app = createApp(akLoading, opt)
  if (opt.el === document.body || !opt.el) {
    const container = document.createElement('div')
    document.body.appendChild(container)
    return app.mount(container)
  } else {
    // 插入到当前标签
    return app.mount(opt.el)
  }
}
const loading = (opt?: any) => {
  const component: any = appendChild(opt || {})
  component && component.open()
  return component
}
const vLoading = (app: any) => {
  app.directive('loading', {
    mounted(el: any, binding: any) {
      el.style.position = 'relative'
      const text = el.getAttribute(`${prefixCls}-loading-text`) || ''
      const spinner = el.getAttribute(`${prefixCls}-loading-spinner`) || ''
      const background =
        el.getAttribute(`${prefixCls}-loading-background`) || ''
      const zIndex = el.getAttribute(`${prefixCls}-loading-zIndex`) || ''
      let bodyEl
      if (binding.modifiers.el) {
        // 插入到body
        bodyEl = document.body
      }
      const component: any = appendChild({
        text: text,
        spinner: spinner,
        background: background,
        lock: binding.modifiers.lock,
        zIndex: parseInt(zIndex),
        el: bodyEl || el
      })
      console.log('component')
      console.log(component)
      if (binding.value) {
        component && component.open()
      }
      el.component = component // 保存当前组件和样式，更新时调用
    },
    updated(el: any, binding: any) {
      if (binding.value) {
        el.component.open()
      } else {
        el.component.close()
      }
    }
  })
}
export { loading, vLoading }
