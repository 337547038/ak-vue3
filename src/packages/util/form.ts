import { inject } from 'vue'
import prefixCls from '../prefix'

export const getFormDisabled = (bool: boolean) => {
  // 如果form里设置了，使用form的
  const formProps: any = inject(`${prefixCls}FormProps`, {})
  if (formProps && formProps.disabled) {
    return true
  } else {
    return bool
  }
}
