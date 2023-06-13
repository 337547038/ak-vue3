import{C as i}from"./codePreview-0428c270.js";import{h as u,r as o,o as p,c as h,b as l,w as e,e as s,d as _,f as a,A as f,u as d,g as y}from"./index-96df29ae.js";/* empty css                                                                    */const k={__name:"README.md.Virtual2a2f1596",setup(j){const t=[{type:"text",name:"基本信息"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"请输入password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"请选择时间"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"请选择"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"请选择"}}],c=u(),r=()=>{c.value.validate().then(m=>{console.log(m)}).catch(m=>{console.log(m)})},n=()=>{c.value.resetForm()};return(m,g)=>{const v=o("ak-auto-form"),b=o("ak-button");return p(),h("div",null,[l(v,{data:t,ref_key:"autoFormEl",ref:c},null,512),l(b,{onClick:r},{default:e(()=>[s("submit")]),_:1}),l(b,{onClick:n},{default:e(()=>[s("reset")]),_:1})])}}},x={__name:"README.md.Virtual6adab0b8",setup(j){const t=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",tabs:{},columns:[{tabPane:{label:"选项1"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}}]},{tabPane:{label:"选项2"},list:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t})])}}},I={__name:"README.md.Virtual267dc7e1",setup(j){const t=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"div",control:{class:"div-test"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"密码",formItem:{label:"password",rules:[{type:"required",msg:"请输入密码"}]},control:{type:"password",value:""}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}]}];return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t})])}}},w={__name:"README.md.Virtualed9e8148",setup(j){const t=u({test:"123",radio:"a2"}),c=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}];return(r,n)=>{const m=o("ak-auto-form");return p(),h("div",null,[l(m,{data:c,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=g=>t.value=g)},null,8,["modelValue"])])}}},E={__name:"README.md.Virtuale8412189",setup(j){const t=u({radio:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],checkbox:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],select:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}),c=u([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[]}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[]}},{type:"checkbox",name:"checkbox2",formItem:{label:"指定的dict"},control:{value:"",placeholder:"请选择",options:[]},config:{optionsKey:"select"}}]);return(r,n)=>{const m=o("ak-auto-form");return p(),h("div",null,[l(m,{data:c.value,dict:t.value},null,8,["data","dict"])])}}},V={__name:"README.md.Virtual16be939d",setup(j){const t=u([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json",method:"get",params:{},afterResponse:c=>(console.log("afterResponse"),c)}}]);return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t.value},null,8,["data"])])}}},N={__name:"README.md.Virtual7bd33bf1",setup(j){const t=u([{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json?name=${text}",method:"get",params:{}}}]);return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t.value},null,8,["data"])])}}},P={__name:"README.md.Virtual8bc00d96",setup(j){const t=u([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"}]}},{type:"input",name:"text",formItem:{label:"隐藏"},control:{value:"",placeholder:"请输入"},config:{linkValue:'$.radio==="a2"'}},{type:"input",name:"text",formItem:{label:"禁用"},control:{value:"",placeholder:"radio为选项2时禁用"},config:{linkValue:'$.radio==="a2"',linkResult:"disabled"}}]);return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t.value},null,8,["data"])])}}},R=["value"],$=_({__name:"test",props:{modelValue:{}},emits:["update:modelValue","change"],setup(j,{emit:t}){const c=r=>{const{value:n}=r.target;t("update:modelValue",n),t("change",n)};return(r,n)=>(p(),h("div",null,[a("input",{value:r.modelValue,onChange:c},null,40,R)]))}}),A={__name:"README.md.Virtualdcf9a7dc",setup(j){const t=u([{type:"component",name:"component",formItem:{label:"自定义组件"},control:{value:"6",placeholder:"请输入"},component:f($)}]);return(c,r)=>{const n=o("ak-auto-form");return p(),h("div",null,[l(n,{data:t.value},null,8,["data"])])}}},D={class:"marked-body"},F=a("h1",{id:"autoform-表单"},"AutoForm 表单",-1),M=a("p",null,"通过json数据快速创建表单，支持格栅和tabs布局",-1),q=a("h3",{id:"基本使用"},"基本使用",-1),C=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"autoFormEl"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"reset"'),s(">")]),s("reset"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'text'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'基本信息'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'text'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入'"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'userName'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'userName'"),s(`,
        `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入用户名'"),s(` }]
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`,
        `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入password'"),s(` }]
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
        ]
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(`: [],
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
        ]
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'datePicker'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'datePicker'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'datePicker'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择时间'"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
        ]
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'switch'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'switch'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'switch'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'textarea'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'textarea'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'textarea'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'timePicker'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'timePicker'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'timePicker'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'timeSelect'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'timeSelect'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'timeSelect'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`
      }
    }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(" autoFormEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    autoFormEl.`),a("span",{class:"hljs-property"},"value"),s(`
      .`),a("span",{class:"hljs-title function_"},"validate"),s(`()
      .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
      .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(res)
      })
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"reset"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    autoFormEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"resetForm"),s(`()
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=a("h3",{id:"tabs布局"},"Tabs布局",-1),K=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'tabs'"),s(`,
      `),a("span",{class:"hljs-attr"},"tabs"),s(`: {},
      `),a("span",{class:"hljs-attr"},"columns"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"tabPane"),s(`: {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(`
          },
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'userName2'"),s(`,
              `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
                `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'userName'"),s(`,
                `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入用户名'"),s(` }]
              },
              `),a("span",{class:"hljs-attr"},"control"),s(`: {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
              }
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"tabPane"),s(`: {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(`
          },
          `),a("span",{class:"hljs-attr"},"list"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'userName2'"),s(`,
              `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
                `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'userName1'"),s(`
              },
              `),a("span",{class:"hljs-attr"},"control"),s(`: {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
              }
            },
            {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
              `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'userName5'"),s(`,
              `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
                `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'userName2'"),s(`
              },
              `),a("span",{class:"hljs-attr"},"control"),s(`: {
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
              }
            }
          ]
        }
      ]
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=a("h3",{id:"div布局"},"Div布局",-1),T=a("p",null,"使用div将指定的组件包起来，可实现联动或通过编写样式实现不同布局",-1),U=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'div'"),s(`,
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'div-test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"list"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'userName2'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'userName'"),s(`,
            `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入用户名'"),s(` }]
          },
          `),a("span",{class:"hljs-attr"},"control"),s(`: {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
          }
        },
        {
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'密码'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`,
            `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'required'"),s(", "),a("span",{class:"hljs-attr"},"msg"),s(": "),a("span",{class:"hljs-string"},"'请输入密码'"),s(` }]
          },
          `),a("span",{class:"hljs-attr"},"control"),s(`: {
            `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`,
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
          }
        },
        {
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`
          },
          `),a("span",{class:"hljs-attr"},"control"),s(`: {
            `),a("span",{class:"hljs-attr"},"value"),s(`: [],
            `),a("span",{class:"hljs-attr"},"options"),s(`: [
              { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
              { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
              { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
              { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
              { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
            ]
          }
        }
      ]
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),z=a("h3",{id:"使用v-model设置初始值"},"使用v-model设置初始值",-1),G=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"model"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" model = "),a("span",{class:"hljs-title function_"},"ref"),s("({ "),a("span",{class:"hljs-attr"},"test"),s(": "),a("span",{class:"hljs-string"},"'123'"),s(", "),a("span",{class:"hljs-attr"},"radio"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` })
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
        ]
      }
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",{id:"使用dict设置选项值"},"使用dict设置选项值",-1),J=a("p",null,[s("可设置"),a("code",null,"optionsKey"),s("指定从"),a("code",null,"dict"),s("里选择对应的数据项，默认通过"),a("code",null,"name"),s("的值从"),a("code",null,"dict"),s("里匹配。当设置"),a("code",null,"optionsKey=false"),s("时，则不匹配")],-1),L=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":dict"),s("="),a("span",{class:"hljs-string"},'"dict"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" dict = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"radio"),s(`: [
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
    ],
    `),a("span",{class:"hljs-attr"},"checkbox"),s(`: [
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
    ],
    `),a("span",{class:"hljs-attr"},"select"),s(`: [
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
    ]
  })
  `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(`: [],
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'checkbox'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'checkbox2'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'指定的dict'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请选择'"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      },
      `),a("span",{class:"hljs-attr"},"config"),s(`: {
        `),a("span",{class:"hljs-attr"},"optionsKey"),s(": "),a("span",{class:"hljs-string"},"'select'"),s(),a("span",{class:"hljs-comment"},"// 可从dict里使用指定的key"),s(`
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),O=a("h3",{id:"使用url方式请求options"},"使用url方式请求options",-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      },
      `),a("span",{class:"hljs-attr"},"config"),s(`: {
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'./static/mock/testData.json'"),s(`,
        `),a("span",{class:"hljs-attr"},"method"),s(": "),a("span",{class:"hljs-string"},"'get'"),s(`,
        `),a("span",{class:"hljs-attr"},"params"),s(": {}, "),a("span",{class:"hljs-comment"},"// 请求的参数"),s(`
        `),a("span",{class:"hljs-attr"},"afterResponse"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(" { "),a("span",{class:"hljs-comment"},"// 请求结果，可对数据处理后返回"),s(`
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'afterResponse'"),s(`)
          `),a("span",{class:"hljs-keyword"},"return"),s(` res
        }
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=a("h3",{id:"url获取options时带动态参数"},"url获取options时带动态参数",-1),X=a("p",null,[s("使用url方式获取options时可带一个动态参数，如"),a("code",null,"name=${text}"),s("，其中text为当前表单name为text的组件，当该组件值发生改变时，会重新请求接口获取")],-1),Y=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'text'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入'"),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: []
      },
      `),a("span",{class:"hljs-attr"},"config"),s(`: {
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'./static/mock/testData.json?name=${text}'"),s(`,
        `),a("span",{class:"hljs-attr"},"method"),s(": "),a("span",{class:"hljs-string"},"'get'"),s(`,
        `),a("span",{class:"hljs-attr"},"params"),s(`: {}
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",{id:"联动显示隐藏或禁用"},"联动显示隐藏或禁用",-1),ss=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"options"),s(`: [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` }
        ]
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'text'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'隐藏'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"config"),s(`: {
        `),a("span",{class:"hljs-attr"},"linkValue"),s(": "),a("span",{class:"hljs-string"},`'$.radio==="a2"'`),s(`
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'input'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'text'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'radio为选项2时禁用'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"config"),s(`: {
        `),a("span",{class:"hljs-attr"},"linkValue"),s(": "),a("span",{class:"hljs-string"},`'$.radio==="a2"'`),s(`,
        `),a("span",{class:"hljs-attr"},"linkResult"),s(": "),a("span",{class:"hljs-string"},"'disabled'"),s(`
      }
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),as=a("h3",{id:"自定义组件"},"自定义组件",-1),ls=a("p",null,[a("code",null,"type='component'"),s("可设置为自定义组件。自定义组件应有"),a("code",null,"v-model"),s("和"),a("code",null,"change"),s("事件")],-1),ts=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-auto-form"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, markRaw } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" test "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./test.vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'component'"),s(`,
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'component'"),s(`,
      `),a("span",{class:"hljs-attr"},"formItem"),s(`: {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'自定义组件'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"control"),s(`: {
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(`,
        `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入'"),s(`
      },
      `),a("span",{class:"hljs-attr"},"component"),s(": "),a("span",{class:"hljs-title function_"},"markRaw"),s(`(test)
    }
  ])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ns=y('<h2 id="api">API</h2><h3 id="autoform-props">AutoForm Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>当前表单的值</td></tr><tr><td>data</td><td>object</td><td>表单数据</td></tr><tr><td>formData</td><td>object</td><td>表单props参数设置，详见<code>form</code>表单</td></tr><tr><td>dict</td><td>object/array</td><td>字典，适用于radio,checkbox,select等，当选项没有设置时则使用dict</td></tr></tbody></table><h3 id="autoform-event">AutoForm Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>组件改变事件function(val,name)</td></tr></tbody></table><h3 id="autoform-methods">AutoForm Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr></tbody></table><h3 id="autoform-data">AutoForm Data</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component</td></tr><tr><td>name</td><td>string</td><td>表单控件字段名，唯一性</td></tr><tr><td>formItem</td><td>object</td><td>组件formItem的props</td></tr><tr><td>control</td><td>object</td><td>对应类type型的props</td></tr><tr><td>config</td><td>object</td><td>配置信息</td></tr><tr><td>columns</td><td>array</td><td>type=tabs时有效，用于布局，表示多分多少列/有多少tabs</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs时有效，tabs的相关props</td></tr><tr><td>columns.list</td><td>array</td><td>type=tabs时有效，当前列下所有组件</td></tr></tbody></table><h2 id="dataconfig">data.config</h2><table><thead><tr><th>类型</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>linkValue</td><td>string</td><td>联动条件设置,<code>$</code>表示当前表单的值</td></tr><tr><td>linkResult</td><td>string</td><td>联动显示结果，可选<code>disabled</code>，默认隐藏</td></tr><tr><td>optionsKey</td><td>boolean</td><td>当前项options数据关联字典数据的标识，为false时表示不关联</td></tr><tr><td>url</td><td>string</td><td>通过url获取数据，可使用<code>${text}</code>带一个动态参数</td></tr><tr><td>method</td><td>string</td><td>可选get或post</td></tr><tr><td>params</td><td>object</td><td>通过url获取数据请求参数，绝对false时不请求</td></tr><tr><td>afterResponse</td><td>function</td><td>请求结果方法</td></tr></tbody></table>',11),ps={__name:"README",setup(j){return(t,c)=>(p(),h("div",D,[F,M,q,l(d(i),{code:""},{code:e(()=>[C]),default:e(()=>[l(k)]),_:1}),S,l(d(i),{code:""},{code:e(()=>[K]),default:e(()=>[l(x)]),_:1}),B,T,l(d(i),{code:""},{code:e(()=>[U]),default:e(()=>[l(I)]),_:1}),z,l(d(i),{code:""},{code:e(()=>[G]),default:e(()=>[l(w)]),_:1}),H,J,l(d(i),{code:""},{code:e(()=>[L]),default:e(()=>[l(E)]),_:1}),O,l(d(i),{code:""},{code:e(()=>[Q]),default:e(()=>[l(V)]),_:1}),W,X,l(d(i),{code:""},{code:e(()=>[Y]),default:e(()=>[l(N)]),_:1}),Z,l(d(i),{code:""},{code:e(()=>[ss]),default:e(()=>[l(P)]),_:1}),as,ls,l(d(i),{code:""},{code:e(()=>[ts]),default:e(()=>[l(A)]),_:1}),ns]))}};export{ps as default};
