<!-- Created by 337547038 -->
<template>
  <v-form v-bind="formData" ref="autoFormEl">
    <template v-for="(item, index) in data" :key="index">
      <template v-if="getShow(item, index)">
        <template v-if="item.type === 'tabs'">
          <Tabs v-bind="item.tabs">
            <TabPane
              v-for="(tab, tabIndex) in item.columns"
              :key="`pane${tabIndex}`"
              :label="tab.tabPane.label"
            >
              <template v-for="(tabs, sIndex) in tab.list" :key="sIndex">
                <form-item
                  v-if="tabs.type === 'component'"
                  v-bind="tabs.formItem"
                >
                  <component
                    :is="tabs.component"
                    v-model="state.formValue[tabs.name]"
                    v-bind="tabs.control"
                    @change="formItemChange($event, tabs.name)"
                  />
                </form-item>
                <form-item
                  v-else
                  v-bind="tabs.formItem"
                  :type="tabs.type"
                  v-model="state.formValue[tabs.name]"
                  :data="tabs.control"
                  @change="formItemChange($event, tabs.name)"
                />
              </template>
            </TabPane>
          </Tabs>
        </template>
        <div
          v-else-if="item.type === 'div'"
          v-bind="item.control"
          class="div-row"
        >
          <template v-for="(list, listIndex) in item.list" :key="listIndex">
            <form-item v-if="list.type === 'component'" v-bind="list.formItem">
              <component
                :is="list.component"
                v-model="state.formValue[list.name]"
                v-bind="list.control"
                @change="formItemChange($event, list.name)"
              />
            </form-item>
            <form-item
              v-else
              v-bind="list.formItem"
              :type="list.type"
              v-model="state.formValue[list.name]"
              :data="list.control"
              @change="formItemChange($event, list.name)"
            />
          </template>
        </div>
        <div
          v-else-if="item.type === 'text'"
          class="form-title"
          v-html="item.name"
          v-bind="item.control"
        ></div>
        <form-item v-else-if="item.type === 'component'" v-bind="item.formItem">
          <component
            :is="item.component"
            v-model="state.formValue[item.name]"
            v-bind="item.control"
            @change="formItemChange($event, item.name)"
          />
        </form-item>
        <form-item
          v-else
          v-bind="item.formItem"
          v-model="state.formValue[item.name]"
          :type="item.type"
          :data="item.control"
          @change="formItemChange($event, item.name)"
        />
      </template>
    </template>
  </v-form>
</template>

<script lang="ts" setup>
  import { reactive, onMounted, ref, watch } from 'vue'
  import { Form as VForm } from '../form'
  import { FormItem } from '../formItem'
  import { Tabs, TabPane } from '../tabs'
  import axios from '../util/request' // 在实际项目中建议引用全局统一的设置
  const props = withDefaults(
    defineProps<{
      modelValue?: any
      data: any
      formData?: any // form表单所有props
      dict?: any // 字典，适用于radio,checkbox,select等，当选项没有设置时则使用dict
    }>(),
    {
      data: () => {
        return []
      },
      formData: () => {
        return {}
      },
      dict: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
    (e: 'change', val: any, name: string): void
  }>()
  const autoFormEl = ref()
  const state = reactive({
    formValue: Object.assign({}, props.modelValue),
    urlLink: {}
  })
  const validate = (field?: string[]) => {
    return new Promise((resolve, reject) => {
      autoFormEl.value
        .validate(field)
        .then(() => {
          resolve(state.formValue) // 验证通过时返回当前表单的值
        })
        .catch((res: any) => {
          reject(res)
        })
    })
  }
  const resetForm = () => {
    autoFormEl.value.resetForm()
  }
  const getUrlLink = (data: any, type?: string) => {
    data.forEach((item: any) => {
      switch (item.type) {
        case 'div':
          getUrlLink(item.list)
          break
        case 'tabs':
          item.columns.forEach((col: any) => {
            getUrlLink(col.list)
          })
          break
        case 'text':
          break
        case 'component':
          // 自定义组件时赋初始值
          state.formValue[item.name] = item.control.value
          break
        default:
          if (type === 'dict') {
            // dict变化时重新设置
            // 只有左侧的值为null或undefined的时候才使用右侧的值
            const dictObj = formatDict(item.config?.optionsKey ?? item.name)
            if (dictObj) {
              item.control.options = dictObj
            }
          } else {
            // 提取需动态获取options的选项
            if (item.config && item.config.url) {
              const key = getOptionsKey(item.config.url)
              if (key) {
                state.urlLink[key] = item
              }
            }
            // 获取options数据
            getItemData(item)
          }
          break
      }
    })
  }
  const getOptionsKey = (url: string) => {
    const iReg = new RegExp('(?<=\\${)(.*?)(?=})', 'g')
    const key = url.match(iReg)
    return key && key[0]
  }
  watch(
    () => state.formValue,
    (val: any) => {
      emits('update:modelValue', val)
    },
    { deep: true }
  )
  watch(
    () => props.dict,
    () => {
      getUrlLink(props.data, 'dict')
    },
    { deep: true }
  )
  // 组件值改变事件
  const formItemChange = (val: any, name: string) => {
    emits('change', val, name)
    // 存在动态联动时
    if (state.urlLink[name]) {
      getUrlOptions(state.urlLink[name], true)
    }
  }
  // 根据条件从dict/url里获取options
  const getItemData = (obj: any) => {
    if (['radio', 'checkbox', 'select'].includes(obj.type)) {
      // 从接口获取，这里存在多次请求的可能，当前表单值改变时都会重新执行
      if (obj.config && obj.config.url) {
        getUrlOptions(obj)
      } else {
        // 当里面没有设置options时，则引用dict的
        const dictObj = formatDict(obj.config?.optionsKey ?? obj.name)
        if (obj.control.options?.length === 0 && dictObj) {
          obj.control.options = dictObj
        }
      }
    }
    return obj.control
  }
  const formatDict = (key: string | boolean) => {
    // dict支持两种格式select:{1:'选项1',2:'选项2'}或select:[{label:'选项1',value:'1'}]
    if (key === false) {
      return []
    }
    const obj = props.dict[key as string]
    if (obj && Object.prototype.toString.call(obj) === '[object Object]') {
      // object时,转为array
      const temp = []
      for (const key in obj) {
        temp.push({
          label: obj[key],
          value: key
        })
      }
      return temp
    }
    return obj
  }
  // 处理显示与隐藏
  const getShow = (obj: any, index: number) => {
    const linkValue = obj.config?.linkValue
    const linkResult = obj.config?.linkResult
    if (linkValue) {
      const Fn = new Function('$', `return (${linkValue})`)
      const pass = Fn(state.formValue)
      if (linkResult === 'disabled') {
        // 设置为disabled后返回显示状态
        // eslint-disable-next-line vue/no-mutating-props
        props.data[index].control.disabled = pass
        return true
      } else {
        return pass
      }
    }
    return true
  }
  // 数据处理
  const getUrlOptions = (obj: any, load?: boolean) => {
    const { url, method = 'post', params = {}, afterResponse } = obj.config
    const key = getOptionsKey(url)
    let replaceUrl = url
    let urlParams = params
    if (key) {
      // url包含了动态值时
      replaceUrl = url.replace('${' + key + '}', state.formValue[key])
      // 同时将参数提取到data
      const urlSplit = url.split('?')[1].split('&')
      let keyName = ''
      if (urlSplit) {
        for (const i in urlSplit) {
          if (urlSplit[i].includes('${' + key + '}')) {
            keyName = urlSplit[i].split('=')[0]
          }
        }
      }
      urlParams = Object.assign({}, params, { [keyName]: state.formValue[key] })
    }
    const storage = window.sessionStorage.getItem(obj.name)
    if (storage && !load) {
      obj.control.options = JSON.parse(storage)
    } else {
      ;(axios as any)({
        method: method,
        url: replaceUrl,
        data: urlParams,
        params: method === 'get' ? params : {}
      })
        .then((res: any) => {
          let result = res.data.data
          if (typeof afterResponse === 'function') {
            result = afterResponse(result)
          }
          obj.control.options = result
          window.sessionStorage.setItem(obj.name, JSON.stringify(result)) // 缓存
        })
        .catch((res: any) => {
          if (typeof afterResponse === 'function') {
            afterResponse(res, 'catch')
          }
          obj.control.options = []
        })
    }
  }
  onMounted(() => {
    getUrlLink(props.data)
  })
  defineExpose({ validate, resetForm })
</script>
