# ak-vue

填坑 Vue3 + Typescript + Vite，用于学习研究，欢迎交流，QQ/微信:337547038

## 演示地址 Demo

https://337547038.github.io/ak-vue3/

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

## 移植完成的组件

- [x] AutoForm 自动表单
- [x] BackTop 返回顶部
- [x] Badge 标记
- [x] Breadcrumb 面包屑
- [x] Button 按钮
- [x] Carousel 跑马灯
- [x] Cascader 级联选择器
- [x] Checkbox 多选框
- [x] Collapse 折叠面板
- [x] ColorPicker 颜色选择器
- [x] DataPicker 时间选择器
- [x] Dialog 弹层对话框
- [x] Divider 分割线
- [x] Alert 弹框
- [x] Form 表单
- [x] Input 输入框
- [x] Lazy 图片延时加载
- [x] Loading 加载等待
- [x] Menu 菜单
- [x] Dropdown 下拉菜单
- [x] Pagination 分页
- [x] Progress 进度条
- [x] Radio 单选框
- [x] Select 选择器
- [x] Switch 开关
- [x] Table 表格
- [x] Tabs 标签页
- [x] Textarea 文本框
- [x] Tooltip 提示
- [ ] Transfer 穿梭框
- [x] Tree 树形
- [x] Upload 上传
- [x] Image 图片
- [x] Drawer 抽屉
- [x] Tag 标签
- [x] Popover 提示框
- [x] Slider 滑块

## 开发

```shell
pnpm install
pnpm dev
```
