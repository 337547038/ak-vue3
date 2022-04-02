import { AnyPropName } from '../types'
import { inject } from 'vue'
import prefixCls from '../prefix'

export const getFormDisabled = (bool: boolean) => {
  // 如果form里设置了，使用form的
  const formProps: AnyPropName = inject(`${prefixCls.value}FormProps`, {})
  if (formProps && formProps.disabled) {
    return true
  } else {
    return bool
  }
}
/*
export const getFormSize = (size: string) => {
  const formProps: AnyPropName = inject('formProps', {})
  // 如果size有设置，则使用设置，否则使用表单的统一设置
  if (size) {
    return size
  } else if (formProps && formProps.size) {
    return formProps.size
  } else {
    return size
  }
  // console.log(formProps.size)
}
*/
