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

export {TreeList}
