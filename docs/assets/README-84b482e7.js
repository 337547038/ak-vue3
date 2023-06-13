import{C as g}from"./codePreview-0428c270.js";import{h as r,r as d,o as m,a as y,w as e,b as l,_ as w,c as f,F as v,e as s,f as a,u as _,g as V}from"./index-96df29ae.js";/* empty css                                                                    */const x={__name:"README.md.Virtuala37616e7",setup(u){const t=r("");return(p,c)=>{const j=d("ak-input"),n=d("ak-form-item");return m(),y(n,{label:"title"},{default:e(()=>[l(j,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=h=>t.value=h)},null,8,["modelValue"])]),_:1})}}},E={setup(){const u=r(""),t=r(""),p=r([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return{value:u,value2:t,rules:p}}};function D(u,t,p,c,j,n){const h=d("ak-input"),i=d("ak-form-item");return m(),f(v,null,[l(i,{label:"title",rules:c.rules},{default:e(()=>[l(h,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=o=>c.value=o),placeholder:"输入时触发"},null,8,["modelValue"])]),_:1},8,["rules"]),l(i,{label:"title",rules:c.rules,trigger:"blur"},{default:e(()=>[l(h,{modelValue:c.value2,"onUpdate:modelValue":t[1]||(t[1]=o=>c.value2=o),placeholder:"失去焦点触发"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}const q=w(E,[["render",D]]),P={__name:"README.md.Virtual3b2ec681",setup(u){const t=r(""),p=r(""),c=r([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return(j,n)=>{const h=d("ak-input"),i=d("ak-form-item");return m(),f(v,null,[l(i,{label:"title",verify:"mobile"},{default:e(()=>[l(h,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),placeholder:"手机号验证"},null,8,["modelValue"])]),_:1}),l(i,{label:"title",rules:c.value,verify:"mobile"},{default:e(()=>[l(h,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=o=>p.value=o),placeholder:"手机号和必填验证"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},I={__name:"README.md.Virtual730e068c",setup(u){const t=r(),p=r(""),c=r([{type:"required",msg:"年龄不能为空"},{type:"rule",msg:"年龄必须大于1岁，且不能超过120岁",rule:"/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}]),j=()=>{t.value.validate().then(n=>{console.log(n)}).catch(n=>{console.log(n)})};return(n,h)=>{const i=d("ak-input"),o=d("ak-form-item"),k=d("ak-button");return m(),f(v,null,[l(o,{label:"age",rules:c.value,ref_key:"formItemEl",ref:t},{default:e(()=>[l(i,{modelValue:p.value,"onUpdate:modelValue":h[0]||(h[0]=b=>p.value=b),placeholder:"请输入年龄"},null,8,["modelValue"])]),_:1},8,["rules"]),l(k,{onClick:j},{default:e(()=>[s("submit")]),_:1})],64)}}},M={__name:"README.md.Virtual9ad72475",setup(u){const t=r(""),p=r(""),c=r([{type:"required",msg:"密码不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:j=>j===t.value}]);return(j,n)=>{const h=d("ak-input"),i=d("ak-form-item");return m(),f(v,null,[l(i,{label:"password",verify:"required"},{default:e(()=>[l(h,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),l(i,{label:"password",rules:c.value},{default:e(()=>[l(h,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=o=>p.value=o),placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},U={__name:"README.md.Virtualcb2d9f75",setup(u){const t=r({value:"abc"}),p=r({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return(c,j)=>{const n=d("ak-form-item");return m(),f("div",null,[l(n,{label:"input",type:"input",data:t.value},null,8,["data"]),l(n,{label:"select",type:"select",data:p.value},null,8,["data"])])}}},$=a("br",null,null,-1),A=a("br",null,null,-1),F={__name:"README.md.Virtual74e1eb99",setup(u){const t=r(),p=r({value:"abc"}),c=r({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return setTimeout(()=>{t.value="123"},1e3),(j,n)=>{const h=d("ak-field");return m(),f("div",null,[l(h,{type:"input",data:p.value,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i)},null,8,["data","modelValue"]),$,A,l(h,{type:"select",data:c.value},null,8,["data"])])}}},R={class:"marked-body"},C=a("h1",{id:"formitem-表单集合"},"FormItem 表单集合",-1),B=a("p",null,"强大的校验功能，使用简单快捷",-1),N=a("h3",{id:"基本使用"},"基本使用",-1),S=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),T=a("h3",{id:"校验"},"校验",-1),L=a("p",null,[s("使用"),a("code",null,"rules"),s("规则校验")],-1),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"输入时触发"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"blur"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"失去焦点触发"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tips'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'获取焦点提示信息'"),s(`},
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'必填项'"),s(`},
      {`),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'number'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入数字'"),s(`}
    ])
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value,
      value2,
      rules
    }
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),z=a("h3",{id:"快速校验"},"快速校验",-1),W=a("p",null,[s("对于大量的表单验证不需要精确提示时，如验证为空时统一提示为必填字段，可通过设置"),a("code",null,"verify"),s("，多个用逗号隔开，也可同时和"),a("code",null,"rules"),s("规则校验一起使用")],-1),G=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"mobile"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"手机号验证"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"mobile"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"手机号和必填验证"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tips'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'获取焦点提示信息'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'必填项'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'number'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'只能输入数字'"),s(` }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),H=a("h3",{id:"自定义验证规则"},"自定义验证规则",-1),J=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"age"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"formItemEl"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入年龄"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" formItemEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'年龄不能为空'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'rule'"),s(`,
      `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'年龄必须大于1岁，且不能超过120岁'"),s(`,
      `),a("span",{class:"hljs-attr"},"rule"),s(": "),a("span",{class:"hljs-string"},"'/^(?:[1-9][0-9]?|1[01][0-9]|120)$/'"),s(`
    }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    formItemEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s(`()
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),K=a("h3",{id:"回调验证"},"回调验证",-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password"'),s(),a("span",{class:"hljs-attr"},"verify"),s("="),a("span",{class:"hljs-string"},'"required"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入密码"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"password"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请再次输入密码"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-form-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" rules = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'密码不能为空'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'fn'"),s(`,
      `),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'两次输入的密码不一致'"),s(`,
      `),a("span",{class:"hljs-attr"},"validator"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(" val === value."),a("span",{class:"hljs-property"},"value"),s(`
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),X=a("h3",{id:"快速输入常见组件类型"},"快速输入常见组件类型",-1),Y=a("p",null,[s("支持类型 "),a("code",null,"'input'、'radio'、'checkbox'、'datePicker'、'select'、'switch'、'textarea'、'timeSelect'、'timePicker'")],-1),Z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"inputData"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"selectData"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" inputData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'abc'"),s(` })
  `),a("span",{class:"hljs-keyword"},"const"),s(" selectData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'112'"),s(", "),a("span",{class:"hljs-attr"},"options"),s(": [{ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(" }], "),a("span",{class:"hljs-attr"},"placeholder"),s(":"),a("span",{class:"hljs-string"},"'请选择'"),s(` })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ss=a("h3",{id:"可单独使用field"},[s("可单独使用"),a("code",null,"Field")],-1),as=a("p",null,"可使用data.value对控件设置值，也可以是v-model(优先)",-1),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-field"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"input"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"inputData"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-field"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"select"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"selectData"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" inputData = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'abc'"),s(` })
  `),a("span",{class:"hljs-keyword"},"const"),s(" selectData = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'112'"),s(`,
    `),a("span",{class:"hljs-attr"},"options"),s(": [{ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(` }],
    `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`
  })
  `),a("span",{class:"hljs-comment"},"// 模拟延时设值"),s(`
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    value1.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},"'123'"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ts=V('<h2 id="api">API</h2><h3 id="formitem-props">FormItem Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的标签名</td></tr><tr><td>labelVisible</td><td>boolean/false</td><td>隐藏label</td></tr><tr><td>prop</td><td>string</td><td>表单校验时关联表单的校验规则</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>verify</td><td>string</td><td>快速验证，支持required, mobile, tel, mail, digits, number,phone 多个用逗号隔开</td></tr><tr><td>rules</td><td>array</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示，在form使用时，优先使用form的设置</td></tr><tr><td>trigger</td><td>string/change</td><td>change和blur两种，在form使用时，优先使用form的设置</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸,支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>error</td><td>string</td><td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td></tr><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>仅在type不为空时，对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>仅在type不为空时，当前控件的值</td></tr></tbody></table><h3 id="formitem-rules-验证规则">FormItem Rules 验证规则</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>required</td><td>为空</td></tr><tr><td>maxLength</td><td>最大字符</td></tr><tr><td>minLength</td><td>最小字符</td></tr><tr><td>mobile</td><td>手机号格式</td></tr><tr><td>tel</td><td>固话</td></tr><tr><td>phone</td><td>固话或手机</td></tr><tr><td>mail</td><td>邮箱格式</td></tr><tr><td>digits</td><td>正整数</td></tr><tr><td>number</td><td>数字</td></tr><tr><td>tips</td><td>获得焦点且值为空时显示输入提示</td></tr><tr><td>rule</td><td>自定义验证规则</td></tr><tr><td>fn</td><td>回调验证</td></tr></tbody></table><h3 id="formitem-methods">FormItem Methods</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td></td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>clearTips</td><td></td><td>用于清空验证提示信息，恢复初始状态</td></tr></tbody></table><h3 id="field-props">Field Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>当前控件的值</td></tr></tbody></table>',9),rs={__name:"README",setup(u){return(t,p)=>(m(),f("div",R,[C,B,N,l(_(g),{code:""},{code:e(()=>[S]),default:e(()=>[l(x)]),_:1}),T,L,l(_(g),{code:""},{code:e(()=>[O]),default:e(()=>[l(q)]),_:1}),z,W,l(_(g),{code:""},{code:e(()=>[G]),default:e(()=>[l(P)]),_:1}),H,l(_(g),{code:""},{code:e(()=>[J]),default:e(()=>[l(I)]),_:1}),K,l(_(g),{code:""},{code:e(()=>[Q]),default:e(()=>[l(M)]),_:1}),X,Y,l(_(g),{code:""},{code:e(()=>[Z]),default:e(()=>[l(U)]),_:1}),ss,as,l(_(g),{code:""},{code:e(()=>[ls]),default:e(()=>[l(F)]),_:1}),ts]))}};export{rs as default};
