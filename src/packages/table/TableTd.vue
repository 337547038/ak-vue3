<script lang="ts">
  import { h, defineComponent, ref, computed, inject, watch } from 'vue'
  import { Checkbox } from '../checkbox'
  import { Tooltip } from '../tooltip'
  import { Tag } from '../tag'
  import prefixCls from '../prefix'

  export default defineComponent({
    name: 'TableTd',
    components: { Checkbox, Tooltip, Tag },
    props: {
      column: {
        type: Object,
        default: () => {
          return {}
        }
      },
      columnIndex: {
        type: Number,
        default: 0
      }, //当前列号
      row: {
        type: Object,
        default: () => {
          return {}
        }
      },
      index: {
        type: Number,
        default: 0
      }, // 当前行号
      toggle: Boolean, // 扩展或子级展开收起状态
      parentRow: Object, //子级下拉时，包含的父级信息
      title: Boolean,
      checked: Boolean,
      colspan: {
        type: Number,
        default: 0
      }, // 扩展列时才有传
      rowColSpan: {
        type: Object,
        default: () => {
          return {}
        }
      },
      rowspanColspanList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    emits: ['cellClick', 'toggleExtend'],
    setup(props, { emit }) {
      /*onMounted(() => {
  })*/
      const setSelectedRows = inject(`${prefixCls}SetSelectedRows`) as any

      const classNameTd = ref(props.column.fixed)
      const pcl = ref(props.column.className)
      if (pcl.value && props.column.fixed) {
        classNameTd.value += ' ' + pcl.value
      } else if (pcl.value) {
        classNameTd.value = pcl.value
      }
      let display = false
      let rowspan = 0
      let colspan = ref(props.colspan).value
      if (Object.keys(props.rowColSpan).length > 0) {
        // 有合并项
        // 不显示
        display =
          props.rowColSpan.rowSpan === 0 || props.rowColSpan.colSpan === 0
        rowspan = props.rowColSpan && props.rowColSpan.rowSpan
        colspan = props.rowColSpan && props.rowColSpan.colSpan
      }
      // 鼠标滑过单元格时显示title提示，当设置为false时不显示，否则使用父级table的设置 todo 待优化
      const hoverTitle = computed(() => {
        if (
          !props.column.title ||
          props.column.tooltip === true ||
          (props.column.tooltip && props.column.tooltip.show)
        ) {
          return null // 当前设置了false不显示，或者是使用了tooltip时不显示
        } else {
          if (props.title) {
            return props.row[props.column.prop]
          }
        }
        return null
      })
      const onCellClick = () => {
        emit(
          'cellClick',
          props.row,
          props.column,
          props.index,
          props.columnIndex
        )
        // 单元格点击
        // evt.stopPropagation()
      }
      const checkValue = ref(props.checked)
      watch(
        () => props.checked,
        (val: boolean) => {
          checkValue.value = val
        }
      )
      const extendToggle = () => {
        emit('toggleExtend')
      }
      function pS(num: number) {
        return num.toString().padStart(2, '0')
      }
      const defaultSlots = () => {
        const val = props.row[props.column.prop]
        if (props.column.slots && props.column.slots.default) {
          return props.column.slots.default({
            row: props.row,
            index: props.index,
            extend: extendToggle,
            toggle: props.toggle,
            parentRow: props.parentRow
          })
        } else if (props.column.placeholder && val === '') {
          return props.column.placeholder
        } else if (props.column.formatter) {
          if (['date', 'dateTime'].includes(props.column.formatter)) {
            if (val) {
              const date = new Date(val)
              const ymd = `${date.getFullYear()}-${pS(
                date.getMonth() + 1
              )}-${pS(date.getDate())}`
              switch (props.column.formatter) {
                case 'dateTime':
                  return `${ymd} ${pS(date.getHours())}:${pS(
                    date.getMinutes()
                  )}:${pS(date.getSeconds())}`
                default:
                  return ymd
              }
            }
            return val
          }
          return props.column.formatter(
            props.row,
            props.column,
            val,
            props.index
          )
        } else if (props.column.type === 'selection') {
          return h(Checkbox, {
            modelValue: checkValue.value,
            onChange: (val: boolean) => {
              setSelectedRows(val, props.row, props.index)
              checkValue.value = val // 这里要手动更新，暂不清楚原因
            }
          })
        } else if (
          props.column.tooltip === true ||
          (props.column.tooltip && !props.column.tooltip.disabled)
        ) {
          let obj = { content: val, direction: 'top' }
          if (props.column.tooltip.disabled) {
            obj = Object.assign(obj, props.column.tooltip)
          }
          //return h(Tooltip, obj, h('span', { class: 'td-tooltip' }, val))
          /*return h(
          Tooltip,
          obj,
          h('span', { class: 'td-tooltip' }, () => {
            return val
          })
        )*/
          return h(Tooltip, obj, () => {
            return val
          })
        } else if (typeof props.column.tag === 'object') {
          if (!val) {
            return val
          }
          const obj = Object.assign({ size: 'small' }, props.column.tag, {
            type: props.column.tag.dict[val]
          })
          let dictVal = val
          if (typeof props.column.dict === 'object') {
            dictVal = props.column.dict[val]
          }
          //return h(Tag, obj, val)
          return h(Tag, obj, () => {
            return dictVal
          })
        } else if (props.column.type === 'index') {
          return props.index + 1
        } else if (typeof props.column.dict === 'object') {
          if (val) {
            return props.column.dict[val]
          }
          return val
        } else {
          return val
        }
      }
      /*const rowspanColspanList = (val: string) => {
      const list = props.rowspanColspanList
      if (list.indexOf(val) === -1) {
        // 没有才添加
        list.push(val)
      }
    }*/
      /*if (props.rowColSpan) {
      // 有合并方法
      const merge = props.rowColSpan(
        props.index,
        props.columnIndex,
        props.row,
        props.column
      )
      if (merge) {
        // 合并方法有返回值的单元格
        // 大于1时
        colspan = merge[1] > 1 ? merge[1] : 1
        rowspan = merge[0] > 1 ? merge[0] : 1
        // 计算出合并后不显示的单元格，如1和2合并=>显示1不显示2
        // 这里处理同一行
        for (let i = 1; i < colspan; i++) {
          const col = props.columnIndex + i
          rowspanColspanList(`${props.index}:${col}`)
        }
        // 这里处理不同行时，即纵向合并
        for (let j = 1; j < rowspan; j++) {
          for (let i = 0; i < colspan; i++) {
            const col = props.columnIndex + i
            const rol = props.index + j
            rowspanColspanList(`${rol}:${col}`)
          }
        }
      }
      const activeRowCol = `${props.index}:${props.columnIndex}`
      const displayArr = ref(props.rowspanColspanList).value
      if (displayArr) {
        if (displayArr.indexOf(activeRowCol) !== -1) {
          display = true
        }
      }
    }*/
      if (!display) {
        return () => [
          h(
            'td',
            {
              class: classNameTd.value,
              rowspan: rowspan > 1 ? rowspan : null,
              colspan: colspan > 1 ? colspan : null,
              style: 'text-align:' + props.column.align,
              title: hoverTitle.value,
              onClick: onCellClick
            },
            defaultSlots()
          )
        ]
      } else {
        return () => []
      }
    }
  })
</script>
