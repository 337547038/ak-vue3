<!-- Created by 337547038 on 2021/6/27. -->
# AK UI

AK UI是一个vue3的组件库，基于 Vue3 + Typescript + Vite + pnpm。

常用基础组件，代码简洁，满足常见项目，组件类名可自定义，全程无红线语法报错，便于二次开发，无缝衔接项目

主题可调，只需10分钟即可定义一套全新的组件样式

用于学习研究，欢迎交流，QQ/微信:337547038

## 全局引入（推荐）

将资源包复制到项目，如 src 目录下，然后在入口页面 main.ts 中如下配置：

```javascript
import Component from "../packages/index";
// 全局注册基础组件
Vue.use(Component);
```

## 按需引用

在当前页面 import 所需组件

```javascript
import Button from "../packages/button.vue";
```

## 可打包

可使用命令`npm run build:lib`将组件资源打包成一个js文件
