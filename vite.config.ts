import {defineConfig} from 'vite'
import vitePluginVuedoc, {vueDocFiles} from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 表格使用formatter时需要添加vueJsx这个，要不会出错。页面同时需要添加 lang="jsx"
export default defineConfig({
  plugins: [vueJsx({}), vitePluginVuedoc({}), vue({
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
    alias: {
      '@/': '/src/'
    }
  },
  build: {
    outDir: 'docs'
    // 去除console
    /*terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }*/
    /*rollupOptions: {
      output: {
        assetFileNames: 'css/[name].[hash].css',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    },
    lib: {
      entry: 'src/packages/index.ts',
      name: 'MyLib'
    },
    outDir: 'dist/'*/
  }
})


/*
export default ({command,mode})=>{
  //....
  return defineConfig({
    //.....
  })
}*/
/*
注入环境变量到html模板中
https://github.com/anncwb/vite-plugin-html
// gzip插件，打包压缩代码成gzip
文档： https://github.com/anncwb/vite-plugin-compression
*/
