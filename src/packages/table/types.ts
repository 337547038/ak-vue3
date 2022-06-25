export interface RowColSpan {
  row: number // 当前行号
  col: number // 当前列号
  rowSpan?: number // 行合并
  colSpan?: number // 列合并
}

export interface Columns {
  prop: string // 参数
  label: string // 显示的th名称
  width?: string
  className?: string
  align?: 'left' | 'center' | 'right' // 对齐方式，可选left/center/right
  type?: 'selection' | 'index' | 'extend' // 可选selection（多选）/index序号
  fixed?: 'left' | 'right' // 固定当前列，可选left/right
  sortBy?: boolean // 当前列显示排序按钮
  title?: boolean // 鼠标滑过单元格时是否显示title提示语
  drag?: boolean // 当前单元格允许拖动，仅在table设置drag＝true时有效
  formatter?: (rowIndex: number, colIndex: number, row: any, col: any) => void
  tooltip?: boolean | object
  tag?: boolean | object
}
