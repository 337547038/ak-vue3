import {AnyPropName} from '../types'
import {inject} from 'vue'

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
