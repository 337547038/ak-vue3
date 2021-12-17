<template>
  <div>
    <ak-form v-model="formValue" :rules="formRules" ref="formEl">
      <ak-form-item label="userName" prop="userName">
        <ak-input v-model="formValue.userName" placeholder="请输入用户名" />
      </ak-form-item>
      <ak-form-item label="password" prop="password">
        <ak-input v-model="formValue.password" placeholder="请输入密码" />
      </ak-form-item>
      <ak-form-item label="password2" prop="password2">
        <ak-input v-model="formValue.password2" placeholder="请再次输入密码" />
      </ak-form-item>
    </ak-form>
    <ak-button @click="submit" type="primary">submit</ak-button>
    <ak-button @click="resetForm">reset</ak-button>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const formValue = ref({
      password: '',
      password2: '',
      userName: ''
    })
    const formRules = {
      password: [
        {type: 'required', msg: '密码不能为空'},
        {type: 'minLength', len: 6, msg: '密码不能小于6位'}
      ],
      password2: [
        {type: 'required', msg: '密码2不能为空'},
        {
          type: 'fn',
          msg: '两次输入的密码不一致',
          validator: val => {
            return val === formValue.value.password
          }
        }
      ],
      userName: [
        {type: 'required', msg: '用户名不能为空'}
      ]
    }
    const formEl = ref()
    // 重置
    const resetForm = () => {
      formEl.value.clearValidate(['password2'])
    }
    // 表单提交
    const submit = () => {
      formEl.value.validate()
        .then(res => {
          console.log(res)
        })
        .catch(res => {
          console.log(res)
        })
    }
    return {
      formValue,
      formRules,
      submit,
      resetForm,
      formEl
    }
  }
}
</script>
