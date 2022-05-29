<!-- Created by 337547038 on 2021/6/22 0022. -->

<script lang="ts">
  import { defineComponent, inject, onMounted } from 'vue'
  import prefixCls from '../prefix'

  export default defineComponent({
    props: {
      prop: String, // 参数
      label: String, // 显示的th名称
      width: String,
      className: String,
      //align: pType.oneOfString(['left', 'center', 'right']), // 对齐方式，可选left/center/right
      align: {
        validator(value: string) {
          return ['left', 'center', 'right'].includes(value)
        }
      }, // 对齐方式，可选left/center/right
      type: {
        validator(value: string) {
          return ['selection', 'index', 'extend'].includes(value)
        }
      }, // 可选selection（多选）/index序号
      fixed: {
        validator(value: string) {
          return ['left', 'right'].includes(value)
        }
      }, // 固定当前列，可选left/right
      sortBy: Boolean, // 当前列显示排序按钮
      title: { type: Boolean, default: true }, // 鼠标滑过单元格时是否显示title提示语
      drag: { type: Boolean, default: true }, // 当前单元格允许拖动，仅在table设置drag＝true时有效
      formatter: Function,
      tooltip: [Boolean, Object],
      tag: [Boolean, Object]
    },
    setup(props, { slots }) {
      onMounted(() => {
        const columnsType: boolean = inject(`${prefixCls}ColumnsType`, false)
        if (!columnsType) {
          // 没有通过表头参数传参时
          const getColumns = inject(`${prefixCls}GetColumns`) as any
          const columns = getColumns.value
          // 判断下不重复添加
          let has = false
          const addData = Object.assign({}, props, { slots: slots, _layer: 1 })
          columns &&
            columns.forEach((item: any) => {
              if (JSON.stringify(item) === JSON.stringify(addData)) {
                // 表示有
                has = true
              }
            })
          if (!has) {
            columns && columns.push(addData)
          }
        }
      })
    },
    render() {
      return null
      // return h('div', {}, this.$slots.default)
    }
  })
</script>
