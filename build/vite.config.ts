// https://vitejs.cn/guide/build.html#library-mode
// @ts-ignore
import path from 'path'
// @ts-ignore
import fs from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

fs.createReadStream('../README.md').pipe(fs.createWriteStream('./README.md'))

const checkDirExist = function (dir) {
  try {
    return fs.statSync(dir).isDirectory()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    }
  }
}
const copyIconfont = function (from, dist) {
  if (!checkDirExist(from)) {
    console.error('可复制的文件或者目录不存在')
    return false
  }
  if (!checkDirExist(dist)) {
    fs.mkdirSync(dist)
  }
  const dir = fs.readdirSync(from)
  dir.forEach((file) => {
    const filePath = path.resolve(from, file)
    fs.stat(filePath, (_, stat) => {
      if (stat.isFile()) {
        // 创建读取流
        const readStream = fs.createReadStream(filePath)
        // 创建写入流
        const writeStream = fs.createWriteStream(path.resolve(dist, file))
        // 复制写入文件
        readStream.pipe(writeStream)
      } else if (stat.isDirectory()) {
        copyIconfont(filePath, path.resolve(dist, file))
      }
    })
  })
}

copyIconfont('../public/static/iconfont', './iconfont')

export default defineConfig({
  publicDir: false,
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, '../src/packages'),
      name: 'ak-vue3',
      //fileName: format => `ak-vue3.${format}.js`
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vueRouter'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
