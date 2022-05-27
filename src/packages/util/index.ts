export default {}
// 防抖
export function debounce(fn: any, delay = 500) {
  let timer: NodeJS.Timeout
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}

// 节流
/*
export function throttle(fn, delay = 500) {
  let canUse = true // 设置一个开关
  return function () {
    if (!canUse) {
      return false // 如果开关已经关掉了就不用往下了
    }
    canUse = false // 利用闭包刚进来的时候关闭开关
    setTimeout(() => {
      fn.apply(this, arguments)
      canUse = true // 执行完才打开开关
    }, delay)
  }
}*/
