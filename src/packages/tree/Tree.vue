<!--Created by 337547038 on 2018/1/26.-->
<template>
  <div :class="`${prefixCls}-tree`">
    <treeNode @toggle="toggle" />
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import treeNode from './TreeNode.vue'
  import { provide, toRefs, watch, reactive, useSlots } from 'vue'
  interface TreeList {
    id: string
    label: string
    open?: boolean
    children?: any
    tid?: string
    hasChild?: boolean
    checked?: boolean
    someChecked?: boolean
    isLoad?: boolean
  }
  const props = withDefaults(
    defineProps<{
      data?: string[]
      lazy?: boolean
      showCheckbox?: boolean // 显示checkbox
      modelValue?: string | string[]
    }>(),
    {
      data: () => []
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: any): void
    (e: 'change', modelValue: any): void
    (e: 'click', obj: any, callback?: any): void
  }>()
  const slots = useSlots()
  const { modelValue } = toRefs(props)
  const state = reactive({
    dataList: [],
    lazy: props.lazy,
    showCheckbox: props.showCheckbox,
    modelValue: props.modelValue
  })
  provide(`${prefixCls}PropsData`, state)
  provide(`${prefixCls}TreeSlots`, slots)
  // checkbox点击事件
  const checkboxChange = (item: TreeList) => {
    emits('change', item)
    // console.log(item)
    item.tid && setParentChecked(item.tid) // 设置父级
    setChildChecked(item.id, item.checked as boolean) // 设置子级
  }
  // 将父节点全选或全不选
  const setParentChecked = (id: string) => {
    if (!id) {
      return
    }
    let parent: any = {}
    let checked = true
    let someChecked = false
    state.dataList.forEach((item: TreeList) => {
      if (item.id === id) {
        parent = item
      }
      if (item.tid === id) {
        // 兄弟节点，其中有一条没选，则false
        if (!item.checked) {
          checked = false
        }
        // 有其中一条选择了，则有部分选择
        if (item.checked) {
          someChecked = true
        }
      }
    })
    parent.checked = checked
    if (checked) {
      // 全选时，修改部分选择为false
      someChecked = false
    }
    parent.someChecked = someChecked
    // 继续上一层
    setParentChecked(parent.tid)
  }
  // 设置子级
  const setChildChecked = (id: string, bool: boolean) => {
    state.dataList.forEach((item: TreeList) => {
      if (item.tid === id) {
        item.checked = bool
        if (item.hasChild) {
          setChildChecked(item.id, bool)
        }
      }
    })
  }
  provide(`${prefixCls}CheckboxChange`, checkboxChange)
  watch(
    () => props.data,
    (val: any) => {
      formatData(val)
    }
  )
  watch(
    () => props.modelValue,
    (val: any) => {
      state.modelValue = val
    }
  )
  const getRandom = (label: string) => {
    return label + '-' + Math.random().toString(36).substr(2, 8)
  }
  // 格式化数据
  const formatData = (data: any, tid?: string) => {
    data &&
      data.forEach((item: TreeList) => {
        const newItem = JSON.parse(JSON.stringify(item))
        delete newItem.children
        // 异步加载时，当前项没有设置lazy属性时也为true，
        const hasChild =
          (item.children && item.children.length > 0) ||
          (props.lazy && item.hasChild !== false)
        let checked = {}
        if (props.showCheckbox) {
          // 添加选中属性
          checked = { checked: false, someChecked: false }
        }
        // 如果没有id时，根据label自动生成一个
        if (!newItem.id) {
          newItem.id = getRandom(item.label)
        }
        state.dataList.push(
          Object.assign({}, checked, newItem, {
            tid: tid,
            hasChild: hasChild
          })
        )
        if (hasChild) {
          formatData(item.children, newItem.id)
        }
      })
  }
  formatData(props.data)
  const toggle = (item: TreeList, loading: any) => {
    if (props.lazy && item.hasChild !== false) {
      // 异步加载时
      emits('click', item, (result: any) => {
        item.isLoad = true // 用来表示已经加载过数据了
        item.hasChild = true // 添加有子节点标识，才会展开子级
        loading && loading(false) // 关闭加载等待
        let checked = {}
        if (props.showCheckbox) {
          // 添加选中属性
          checked = { checked: false }
        }
        // 将数据添加上父节点信息，追加到数据列表
        result.forEach((re: TreeList) => {
          if (!re.id) {
            re.id = getRandom(re.label)
          }
          state.dataList.push(Object.assign({}, checked, re, { tid: item.id }))
        })
      })
    } else {
      emits('click', item)
    }
    // 更新v-model
    if (typeof props.modelValue === 'object') {
      const temp = (modelValue.value && modelValue.value) as string[]
      const index = temp.indexOf(item.id)
      if (index !== -1) {
        // 表示存在，则删除
        temp.splice(index, 1)
      } else {
        temp.push(item.id)
      }
      emits('update:modelValue', temp)
    } else {
      emits('update:modelValue', item.id)
    }
  }
  // 提供方法用于取值
  const getValue = (bool: boolean) => {
    const temp: any = []
    const tempId: string[] = []
    state.dataList.forEach((item: TreeList) => {
      if (item.checked) {
        temp.push({
          id: item.id,
          label: item.label
        })
        tempId.push(item.id)
      }
    })
    return bool ? temp : tempId
  }
  defineExpose({ getValue })
</script>
