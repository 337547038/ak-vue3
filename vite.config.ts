import { defineConfig } from 'vite'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVuedoc({}),
    vue({
      include: [...vueDocFiles] // 2. Must include .md | .vd files
    }),
    Pages({
      pagesDir: 'src/packages',
      extensions: ['md']
      // exclude: ['**/components/*.vue']
    })
  ],
  base: './',
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
    port: 3000,
    host: '0.0.0.0',
    open: false
  }
})
