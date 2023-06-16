import {defineConfig} from 'vite'
import vitePluginVuedoc from 'vite-plugin-doc-preview'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import {resolve} from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 表格使用formatter时需要添加vueJsx这个，要不会出错。页面同时需要添加 lang="jsx"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx({}),
    vitePluginVuedoc({ previewId: 'vue demo' }),
    vue({
      include: [/\.vue$/, /\.md$/] // 2. Must include .md | .vd files
    }),
    Pages({
      pagesDir: 'src/packages',
      extensions: ['md']
      // exclude: ['**/components/*.vue']
    })
  ],
  base: './',
  build: {
    outDir: 'docs'
    // 去除console
    /*terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }*/
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: resolve(__dirname, 'src') + '/'
      }
    ],

    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  server: {
    // 是否开启 https
    https: false,
    port: 3002,
    host: '0.0.0.0',
    open: false
  }
})
