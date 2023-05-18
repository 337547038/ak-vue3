# ak-vue

填坑 Vue3 + Typescript + Vite，用于学习研究，欢迎交流，微信:337547038

## 演示地址 Demo

https://337547038.github.io/ak-vue3/

## 微信交流群

<img src="https://gitee.com/q337547038/vue-form-design/raw/main/qrcode.jpg" width ="200" alt=""/>

## 使用

1.将`/src/packages`复制到你的项目目录下，然后在`main.js`中引入并注册即可;

2.复制`/public/static/iconfont`到项目下，在`index.html`引入组件所需的字体图标；

```javascript
import AKUI from './packages'
app.use(AKUI)
```

喜欢发npm的同学可将项目克隆并运行起来，然后使用`build:lib`命令将组件打包，`package.json`配置可参考`vite`官网，完成打包后将配置好的`package.json`复制到生成的目录`dist`。最后发布到你npm。

## vue2 版本

<font color="#f00">vue2.x 版本的请点击这里进去</font>

https://github.com/337547038/Vue-UI-for-PC

https://gitee.com/q337547038/ak-vue

## react 版本

https://github.com/337547038/vite-react

## 组件 UI 库说明

组件库包含了 AutoForm 自动表单、BackTop 返回顶部、Breadcrumb 面包屑、 Button 按钮、Cascader 级联选择器、Checkbox 多选框、Collapse 折叠面板、ColorPicker
颜色选择器、DataPicker 时间选择器、Dialog 弹层对话框、Alert 弹框、Echarts 图形图表、Form 表单、Input 输入框、Lazy 图片延时加载、Loading 加载等待、Menu 菜单、Pagination
分页、Progress 进度条、Radio 单选框、Select 选择器、Steps 步骤条、Swiper 图片轮播、Switch 开关、Table 表格、Tabs 标签页、Textarea 文本框、Tooltip 提示、Transfer
穿梭框、Tree 树形、Upload 上传、Drawer 抽屉等常用组件

### 开发环境
| 名称           | 版本      |
|--------------|---------|
| node         | 18.16.x |
| yarn         | 1.22.19 |
| vite         | 4.3.x   |
| vue          | 3.3.x   |

```shell
pnpm install
pnpm dev
```
