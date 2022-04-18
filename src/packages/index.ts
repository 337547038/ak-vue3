/**
 * Created by 337547038 on 2018/8/31 0031.
 */
import type { App, Component } from 'vue'
// 所有需要全局注册的组件入口
import './theme/index.scss'
import prefixCls from './prefix'

export default {
  install(app: App) {
    const moduleFilesTs = import.meta.globEager('./*/index.ts')
    console.log(moduleFilesTs)
    Object.keys(moduleFilesTs).forEach((key: string) => {
      const componentOptions: Record<string, Component> =
        moduleFilesTs[key]?.default
      //console.log(componentOptions)
      if (componentOptions) {
        Object.keys(componentOptions).forEach((el: string) => {
          app.component(prefixCls.value + el, componentOptions[el])
        })
      }
    })
  }
}
