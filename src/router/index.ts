import { createRouter, createWebHashHistory } from 'vue-router'
import routesList from 'virtual:generated-pages'

// console.log(routesList)
const expand: any = {
  autoForm: {
    title: '自动表单',
    group: 'form'
  },
  backTop: {
    title: '返回顶部',
    group: 'other'
  },
  badge: {
    title: '徽标数',
    group: 'data'
  },
  breadcrumb: {
    title: '面包屑',
    group: 'nav'
  },
  button: {
    title: '按钮',
    group: 'comm'
  },
  carousel: {
    title: '轮播图',
    group: 'data'
  },
  cascader: {
    title: '级联选择',
    group: 'form'
  },
  checkbox: {
    title: '多选柜',
    group: 'form'
  },
  collapse: {
    title: '折叠面板',
    group: 'data'
  },
  colorPicker: {
    title: '颜色选择器',
    group: 'form'
  },
  datePicker: {
    title: '日期选择框',
    group: 'form'
  },
  dialog: {
    title: '对话框',
    group: 'feedback'
  },
  divider: {
    title: '分割线',
    group: 'other'
  },
  drawer: {
    title: '抽屉',
    group: 'feedback'
  },
  dropdown: {
    title: '下拉菜单',
    group: 'nav'
  },
  form: {
    title: '表单',
    group: 'form'
  },
  formItem: {
    title: '表单项',
    group: 'form'
  },
  icon: {
    title: '图标',
    group: 'comm'
  },
  image: {
    title: '图片',
    group: 'data'
  },
  input: {
    title: '输入框',
    group: 'form'
  },
  inputNumber: {
    title: '数字输入框',
    group: 'form'
  },
  lazy: {
    title: '懒加载',
    group: 'feedback'
  },
  loading: {
    title: '加载等待',
    group: 'feedback'
  },
  menu: {
    title: '菜单',
    group: 'nav'
  },
  message: {
    title: '信息提示',
    group: 'feedback'
  },
  pagination: {
    title: '分页',
    group: 'nav'
  },
  popover: {
    title: '气泡卡片',
    group: 'data'
  },
  progress: {
    title: '进度条',
    group: 'feedback'
  },
  radio: {
    title: '单选框',
    group: 'form'
  },
  select: {
    title: '选择器',
    group: 'form'
  },
  selectDown: {
    title: '通用下拉选择',
    group: 'form'
  },
  switch: {
    title: '开关',
    group: 'form'
  },
  table: {
    title: '表格',
    group: 'data'
  },
  tabs: {
    title: '标签页',
    group: 'data'
  },
  tag: {
    title: '标签',
    group: 'data'
  },
  textarea: {
    title: '文本框',
    group: 'form'
  },
  timePicker: {
    title: '时间选择',
    group: 'form'
  },
  timeSelect: {
    title: '时间选择',
    group: 'form'
  },
  tooltip: {
    title: '文字提示',
    group: 'data'
  },
  tree: {
    title: '树形控件',
    group: 'data'
  },
  upload: {
    title: '上传',
    group: 'form'
  },
  slider: {
    title: '滑块',
    group: 'data'
  },
  marquee: {
    title: '滚动',
    group: 'other'
  }
}
export const routes: any = []
routesList.forEach((item: any) => {
  const name = item.name.replace('-README', '')
  const path = item.path === '/readme' ? '/' : item.path.replace('/readme', '')
  routes.push({
    name: name,
    path: path,
    component: item.component,
    meta: expand[name]
  })
})
routes.push({
  path: '/test',
  name: 'test',
  component: () => import('../views/test.vue')
})
const router = createRouter({
  // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  // @ts-ignore
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  // history: createWebHistory(), // 路由的history模式
  history: createWebHashHistory(),
  routes
})

export default router
