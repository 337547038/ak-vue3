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
      const componentOptions: Record<string, Component> = moduleFilesTs[key]
      const exclude = ['./lazy', './loading', './message', './util']
      const replaceKey = key.replace(/\/index.ts/, '')
      if (exclude.includes(replaceKey)) {
        switch (replaceKey) {
          case './lazy':
            app.use(componentOptions.default as () => void)
            break
          case './loading':
            app.config.globalProperties.$loading = componentOptions.loading
            app.provide('Loading', componentOptions)
            app.use(componentOptions.vLoading as () => void)
            break
          case './message':
            // console.log(componentOptions)
            app.provide('Message', componentOptions)
            // 支持this.$alert写法
            Object.keys(componentOptions).forEach((el: string) => {
              app.config.globalProperties[`$${el}`] = componentOptions[el]
            })
            break
        }
      } else {
        if (componentOptions) {
          Object.keys(componentOptions).forEach((el: string) => {
            app.component(prefixCls + el, componentOptions[el])
          })
        }
      }
    })
  }
}
