<!-- Created by 337547038 on 2021/6/22 0022. -->
<template>
  <vForm
    :show-message="showMessage"
    :trigger="trigger"
    :label-width="labelWidth"
    :required="required"
  >
    <template v-for="(item, index) in data" :key="index">
      <div v-if="item.type === 'grid'" class="grid-row">
        <div
          v-for="(col, colIndex) in item.columns"
          :key="colIndex"
          class="grid-col"
          :style="{ width: (col.span / 24) * 100 + '%' }"
        >
          <template
            v-for="(list, listIndex) in col.controlList"
            :key="listIndex"
          >
            <filed :ref="formControlEl" :data="list" :disabled="disabled" />
          </template>
        </div>
      </div>
      <template v-else-if="item.type === 'tabs'">
        <Tabs v-bind="item.tabs">
          <TabPane
            v-for="(tab, tabIndex) in item.columns"
            :key="`pane${tabIndex}`"
            :label="tab.tabs.label"
          >
            <template v-for="(tabs, sIndex) in tab.controlList" :key="sIndex">
              <filed :data="tabs" :disabled="disabled" />
            </template>
          </TabPane>
        </Tabs>
      </template>
      <div
        v-else-if="item.type === 'text'"
        class="form-title"
        v-html="item.name"
      ></div>
      <filed v-else :ref="formControlEl" :data="item" :disabled="disabled" />
    </template>
  </vForm>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue'
  import { Form as vForm } from '../form'
  import Filed from './Filed.vue'
  import { Tabs, TabPane } from '../tabs'
  const props = withDefaults(
    defineProps<{
      data: any
      showMessage?: boolean
      trigger?: 'change' | 'blur'
      labelWidth?: string
      required?: boolean
      disabled?: boolean
    }>(),
    {
      data: () => [],
      showMessage: true,
      trigger: 'change',
      required: true,
      labelWidth: ''
    }
  )

  const state = reactive<any>({
    itemRefs: [],
    formValue: [],
    defaultValue: ''
  })
  const formControlEl = (el: any) => {
    if (el) {
      state.itemRefs.push(el)
    }
  }
  const validate = (field?: string[]) => {
    let allTips: string[] = []
    let validateFields = state.itemRefs
    if (field && field.length > 0) {
      // 指定校验字段时
      validateFields = state.itemRefs.filter((fi: any) => {
        // console.log(fi.item.name)
        return field.indexOf(fi.item.name) !== -1
      })
    }
    state.formValue = []
    return new Promise((resolve, reject) => {
      if (validateFields.length === 0) {
        resolve(state.formValue)
      }
      validateFields.forEach((item: any) => {
        item
          .validate()
          .then((res: any) => {
            allTips.push('true')
            state.formValue.push(res)
            returnResult() // 通过
          })
          .catch((res: string) => {
            allTips.push(res)
            returnResult()
          })
      })
      const returnResult = () => {
        if (allTips.length === validateFields.length) {
          const tips = allTips.filter((fi) => {
            return fi !== 'true'
          })
          if (tips.length > 0) {
            // console.log('不通过')
            reject(tips)
          } else {
            resolve(state.formValue)
          }
        }
      }
    })
  }
  const resetForm = () => {
    state.itemRefs.forEach((item: any) => {
      item.clearTips(JSON.parse(state.defaultValue))
    })
  }
  const setValue = (obj: { [index: number]: any }) => {
    state.itemRefs.forEach((item: any) => {
      item.setValue(obj)
    })
    state.defaultValue = JSON.stringify(obj)
  }
  const setDefaultValue = () => {
    state.defaultValue = JSON.stringify(props.data)
  }
  onMounted(() => {
    setDefaultValue()
  })
  defineExpose({ validate, resetForm, setValue })
</script>
