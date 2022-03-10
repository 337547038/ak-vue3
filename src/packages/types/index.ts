export interface AnyPropName {
    [propName: string]: any
}

export interface VoidFun {
    (d?: any): void
}
// radio/checkbox/select
export interface FormControlOption {
    [key: string]: any // 使用动态变量时不会报错
    label:string
    value:[string|number]
    disabled?:boolean
    _disabled?:boolean
}
