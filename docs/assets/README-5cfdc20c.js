import{C as V}from"./codePreview-0428c270.js";import{d as x,h as f,r as c,o as v,c as _,b as l,w as r,e as s,u as w,f as a,g as M}from"./index-96df29ae.js";/* empty css                                                                    */const A=x({__name:"README.md.Virtual3c336cec",setup(y){const n=f({password:"",password2:"",userName:""}),d={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:i=>i===n.value.password}],userName:[{type:"required",msg:"用户名不能为空"}]},g=f(),u=()=>{g.value.resetForm()},k=()=>{g.value.validate().then(i=>{console.log(i)}).catch(i=>{console.log(i)})};return(i,o)=>{const h=c("ak-input"),t=c("ak-form-item"),m=c("ak-form"),p=c("ak-button");return v(),_("div",null,[l(m,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=j=>n.value=j),rules:d,ref_key:"formEl",ref:g},{default:r(()=>[l(t,{label:"userName",prop:"userName"},{default:r(()=>[l(h,{modelValue:n.value.userName,"onUpdate:modelValue":o[0]||(o[0]=j=>n.value.userName=j),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),l(t,{label:"password",prop:"password"},{default:r(()=>[l(h,{modelValue:n.value.password,"onUpdate:modelValue":o[1]||(o[1]=j=>n.value.password=j),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),l(t,{label:"password2",prop:"password2"},{default:r(()=>[l(h,{modelValue:n.value.password2,"onUpdate:modelValue":o[2]||(o[2]=j=>n.value.password2=j),placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),l(p,{onClick:k,type:"primary"},{default:r(()=>[s("submit")]),_:1}),l(p,{onClick:u},{default:r(()=>[s("reset")]),_:1})])}}}),L=x({__name:"README.md.Virtual0bc58bcc",setup(y){const n=f({userName:"",password:"",mobile:"",mail:"",digits:"",number:"100.00",tel:"",city:"",area:"",cascader:[],select:"",checkbox:!1,checkboxGroup:[],switch:!1,textarea:"",radio:"",datePicker:"",timePicker:"",timeSelect:""}),d=[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}],g={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:h=>h===n.value.password}],userName:[{type:"required",msg:"用户名不能为空"}],mobile:[{type:"required",msg:"请输入手机号"},{type:"mobile",msg:"手机号格式不正确"}],mail:[{type:"mail",msg:"邮箱格式不正确"}],digits:[{type:"digits",msg:"只能输入正整数"}],number:[{type:"number",msg:"只能输入数字"}],tel:[{type:"tel",msg:"电话号码格式不正确"}],city:[{type:"required",msg:"城市不能为空"}],area:[{type:"required",msg:"地区不能为空"}],select:[{type:"required",msg:"下拉不能为空"}],checkbox:[{type:"required",msg:"必须同意协议"}],checkboxGroup:[{type:"required",msg:"不能为空"}],textarea:[{type:"required",msg:"textarea不能为空"}],radio:[{type:"required",msg:"radio不能为空"}],datePicker:[{type:"required",msg:"请选择日期"}],timePicker:[{type:"required",msg:"请选择时间"}],timeSelect:[{type:"required",msg:"请选择时间"}]},u=f(),k=()=>{u.value.resetForm()},i=()=>{u.value.validate().then(h=>{console.log(h)}).catch(h=>{console.log(h)})},o=()=>{u.value.validate(["userName","password"]).then(h=>{alert("验证通过"),console.log(h)}).catch(h=>{alert(h),console.log(h)})};return(h,t)=>{const m=c("ak-input"),p=c("ak-form-item"),j=c("ak-cascader"),q=c("ak-radio-group"),N=c("ak-checkbox-group"),P=c("ak-select"),U=c("ak-textarea"),E=c("ak-date-picker"),F=c("ak-switch"),S=c("ak-time-picker"),C=c("ak-time-select"),G=c("ak-checkbox"),R=c("ak-form"),b=c("ak-button");return v(),_("div",null,[l(R,{ref_key:"formEl",ref:u,modelValue:n.value,"onUpdate:modelValue":t[19]||(t[19]=e=>n.value=e),rules:g,size:"mini"},{default:r(()=>[l(p,{label:"用户名",prop:"userName"},{default:r(()=>[l(m,{modelValue:n.value.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value.userName=e),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),l(p,{label:"密码",prop:"password",modelValue:n.value.password,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value.password=e),data:{placeholder:"请输入密码"},type:"password"},null,8,["modelValue"]),l(p,{prop:"mobile"},{label:r(()=>[s("手机号")]),default:r(()=>[l(m,{modelValue:n.value.mobile,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),l(p,{prop:"mail",label:"邮箱"},{default:r(()=>[l(m,{modelValue:n.value.mail,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value.mail=e),placeholder:"请输入邮箱地址"},null,8,["modelValue"])]),_:1}),l(p,{prop:"digits",label:"digits",type:"input",modelValue:n.value.digits,"onUpdate:modelValue":t[4]||(t[4]=e=>n.value.digits=e)},null,8,["modelValue"]),l(p,{prop:"number",label:"number"},{default:r(()=>[l(m,{modelValue:n.value.number,"onUpdate:modelValue":t[5]||(t[5]=e=>n.value.number=e)},null,8,["modelValue"])]),_:1}),l(p,{prop:"tel",label:"tel"},{default:r(()=>[l(m,{modelValue:n.value.tel,"onUpdate:modelValue":t[6]||(t[6]=e=>n.value.tel=e),placeholder:"请输入电话号码"},null,8,["modelValue"])]),_:1}),l(p,{label:"城市"},{default:r(()=>[l(p,{prop:"city"},{default:r(()=>[l(m,{modelValue:n.value.city,"onUpdate:modelValue":t[7]||(t[7]=e=>n.value.city=e)},null,8,["modelValue"])]),_:1}),l(p,{prop:"area",modelValue:n.value.area,"onUpdate:modelValue":t[8]||(t[8]=e=>n.value.area=e),type:"input"},null,8,["modelValue"])]),_:1}),l(p,{label:"地区选择",verify:"required"},{default:r(()=>[l(j,{modelValue:n.value.cascader,"onUpdate:modelValue":t[9]||(t[9]=e=>n.value.cascader=e),placeholder:"请选择",options:[{label:"广东",value:"1",children:[{label:"广州",value:"2"}]}]},null,8,["modelValue"])]),_:1}),l(p,{label:"radio",prop:"radio"},{default:r(()=>[l(q,{modelValue:n.value.radio,"onUpdate:modelValue":t[10]||(t[10]=e=>n.value.radio=e),options:d},null,8,["modelValue"])]),_:1}),l(p,{label:"checkbox",prop:"checkboxGroup"},{default:r(()=>[l(N,{modelValue:n.value.checkboxGroup,"onUpdate:modelValue":t[11]||(t[11]=e=>n.value.checkboxGroup=e),options:d},null,8,["modelValue"])]),_:1}),l(p,{prop:"select",label:"select"},{default:r(()=>[l(P,{modelValue:n.value.select,"onUpdate:modelValue":t[12]||(t[12]=e=>n.value.select=e),options:d,clear:!0,placeholder:"请选择"},null,8,["modelValue"])]),_:1}),l(p,{label:"textarea",prop:"textarea"},{default:r(()=>[l(U,{modelValue:n.value.textarea,"onUpdate:modelValue":t[13]||(t[13]=e=>n.value.textarea=e)},null,8,["modelValue"])]),_:1}),l(p,{label:"datePicker",prop:"datePicker"},{default:r(()=>[l(E,{modelValue:n.value.datePicker,"onUpdate:modelValue":t[14]||(t[14]=e=>n.value.datePicker=e),placeholder:"请选择"},null,8,["modelValue"])]),_:1}),l(p,{label:"switch"},{default:r(()=>[l(F,{modelValue:n.value.switch,"onUpdate:modelValue":t[15]||(t[15]=e=>n.value.switch=e)},null,8,["modelValue"])]),_:1}),l(p,{label:"timePicker",prop:"timePicker"},{default:r(()=>[l(S,{modelValue:n.value.timePicker,"onUpdate:modelValue":t[16]||(t[16]=e=>n.value.timePicker=e)},null,8,["modelValue"])]),_:1}),l(p,{label:"timeSelect",prop:"timeSelect"},{default:r(()=>[l(C,{modelValue:n.value.timeSelect,"onUpdate:modelValue":t[17]||(t[17]=e=>n.value.timeSelect=e)},null,8,["modelValue"])]),_:1}),l(p,{prop:"checkbox"},{default:r(()=>[l(G,{modelValue:n.value.checkbox,"onUpdate:modelValue":t[18]||(t[18]=e=>n.value.checkbox=e)},{default:r(()=>[s("我已阅读并同意……")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),l(b,{type:"primary",onClick:i},{default:r(()=>[s("提交")]),_:1}),l(b,{type:"primary",onClick:o},{default:r(()=>[s("仅对用户名密码验证")]),_:1}),l(b,{onClick:k},{default:r(()=>[s("重置表单")]),_:1})])}}}),z={class:"marked-body"},B=a("h1",{id:"form-表单"},"Form 表单",-1),D=a("h3",{id:"基本使用"},"基本使用",-1),I=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"formRules"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"formEl"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"userName"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"userName"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.userName"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入用户名"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"password"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.password"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入密码"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password2"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"password2"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.password2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请再次输入密码"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"resetForm"'),s(">")]),s("reset"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" formValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"password2"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"userName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
  })
  `),a("span",{class:"hljs-keyword"},"const"),s(` formRules = {
    `),a("span",{class:"hljs-attr"},"password"),s(`: [
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能为空'"),s(` },
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'minLength'"),s(", "),a("span",{class:"hljs-attr"},"len"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能小于6位'"),s(` }
    ],
    `),a("span",{class:"hljs-attr"},"password2"),s(`: [
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码2不能为空'"),s(` },
      {
        `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'fn'"),s(`,
        `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'两次输入的密码不一致'"),s(`,
        `),a("span",{class:"hljs-attr"},"validator"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(" val === formValue."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"password"),s(`
        }
      }
    ],
    `),a("span",{class:"hljs-attr"},"userName"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'用户名不能为空'"),s(` }]
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(" formEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-comment"},"// 重置"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"resetForm"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"resetForm"),s(`()
  }
  `),a("span",{class:"hljs-comment"},"// 表单提交"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s(`()
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),$=a("h3",{id:"表单校验"},"表单校验",-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"formEl"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"formRules"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"mini"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"用户名"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"userName"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.userName"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入用户名"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(`
        `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"密码"'),s(`
        `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.password"'),s(`
        `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},`"{ placeholder: '请输入密码' }"`),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"mobile"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"label"),s(">")]),s("手机号"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.mobile"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入手机号"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"mail"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"邮箱"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.mail"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入邮箱地址"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(`
        `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"digits"'),s(`
        `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"digits"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.digits"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"number"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"number"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.number"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"tel"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"tel"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.tel"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入电话号码"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"城市"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"city"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.city"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"area"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.area"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"地区选择"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"required"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
          `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.cascader"'),s(`
          `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
          `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},`"[
            {
              label: '广东',
              value: '1',
              children: [{ label: '广州', value: '2' }]
            }
          ]"`),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"radio"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"radio"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.radio"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"checkboxGroup"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox-group"),s(`
          `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.checkboxGroup"'),s(`
          `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"select"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
          `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.select"'),s(`
          `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
          `),a("span",{class:"hljs-attr"},":clear"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
          `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"textarea"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"textarea"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-textarea"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.textarea"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"datePicker"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"datePicker"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.datePicker"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"switch"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.switch"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"timePicker"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"timePicker"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.timePicker"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"timeSelect"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"timeSelect"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.timeSelect"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formValue.checkbox"'),s(">")]),s("我已阅读并同意……"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("提交"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit2"'),s(">")]),s("仅对用户名密码验证"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"resetForm"'),s(">")]),s("重置表单"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" formValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"userName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"mobile"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"mail"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"digits"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"number"),s(": "),a("span",{class:"hljs-string"},"'100.00'"),s(`,
    `),a("span",{class:"hljs-attr"},"tel"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"city"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"area"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"cascader"),s(`: [],
    `),a("span",{class:"hljs-attr"},"select"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"checkbox"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
    `),a("span",{class:"hljs-attr"},"checkboxGroup"),s(`: [],
    `),a("span",{class:"hljs-attr"},"switch"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
    `),a("span",{class:"hljs-attr"},"textarea"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"radio"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"datePicker"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"timePicker"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"timeSelect"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
  })
  `),a("span",{class:"hljs-keyword"},"const"),s(` options = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(` formRules = {
    `),a("span",{class:"hljs-attr"},"password"),s(`: [
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能为空'"),s(` },
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'minLength'"),s(", "),a("span",{class:"hljs-attr"},"len"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能小于6位'"),s(` }
    ],
    `),a("span",{class:"hljs-attr"},"password2"),s(`: [
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码2不能为空'"),s(` },
      {
        `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'fn'"),s(`,
        `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'两次输入的密码不一致'"),s(`,
        `),a("span",{class:"hljs-attr"},"validator"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val: string"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(" val === formValue."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"password"),s(`
        }
      }
    ],
    `),a("span",{class:"hljs-attr"},"userName"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'用户名不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"mobile"),s(`: [
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入手机号'"),s(` },
      { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'mobile'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'手机号格式不正确'"),s(` }
    ],
    `),a("span",{class:"hljs-attr"},"mail"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'mail'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'邮箱格式不正确'"),s(` }],
    `),a("span",{class:"hljs-attr"},"digits"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'digits'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入正整数'"),s(` }],
    `),a("span",{class:"hljs-attr"},"number"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'number'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入数字'"),s(` }],
    `),a("span",{class:"hljs-attr"},"tel"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tel'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'电话号码格式不正确'"),s(` }],
    `),a("span",{class:"hljs-attr"},"city"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'城市不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"area"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'地区不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"select"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'下拉不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"checkbox"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'必须同意协议'"),s(` }],
    `),a("span",{class:"hljs-attr"},"checkboxGroup"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"textarea"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'textarea不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"radio"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'radio不能为空'"),s(` }],
    `),a("span",{class:"hljs-attr"},"datePicker"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请选择日期'"),s(` }],
    `),a("span",{class:"hljs-attr"},"timePicker"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请选择时间'"),s(` }],
    `),a("span",{class:"hljs-attr"},"timeSelect"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请选择时间'"),s(` }]
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(" formEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-comment"},"// 重置"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"resetForm"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"resetForm"),s(`()
  }
  `),a("span",{class:"hljs-comment"},"// 表单提交"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s(`()
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit2"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s("(["),a("span",{class:"hljs-string"},"'userName'"),s(", "),a("span",{class:"hljs-string"},"'password'"),s(`])
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'验证通过'"),s(`)
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: string[]"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-title function_"},"alert"),s(`(res)
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),W=M('<h2 id="api">API</h2><h3 id="form-props">Form Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>表单值</td></tr><tr><td>rules</td><td>object</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示</td></tr><tr><td>trigger</td><td>string/change</td><td>表单控件校验触发类型，change和blur两种</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸，medium / small / mini</td></tr><tr><td>disabled</td><td>boolean/true</td><td>表单禁用状态，影响子级formItem,button及formItem下所有表单控件</td></tr></tbody></table><h3 id="form-methods">Form Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果，可接受一个参数用于对指定项校验</td></tr><tr><td>clearValidate</td><td>移除表单项的校验结果。传入待移除的表单项的 prop 组成的数组，如不传则移除整个表单的校验结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr><tr><td>setValue</td><td>使用resetForm功能时，当表单数据发生改变，需使用setValue设置</td></tr></tbody></table>',5),O={__name:"README",setup(y){return(n,d)=>(v(),_("div",z,[B,D,l(w(V),{code:""},{code:r(()=>[I]),default:r(()=>[l(A)]),_:1}),$,l(w(V),{code:""},{code:r(()=>[T]),default:r(()=>[l(L)]),_:1}),W]))}};export{O as default};
