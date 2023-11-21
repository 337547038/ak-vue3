import{C as j}from"./vue-4a2b12f2.js";import{r as d,a as h,o as p,c as o,b as l,w as e,d as s,e as v,g as a,A as C,u as i,h as E}from"./index-dd3aacc0.js";/* empty css                                                            */const B={__name:"README.md.Virtual2a2f1596",setup(A){const t=[{type:"text",name:"基本信息"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"请输入password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"请选择时间"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"请选择"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"请选择"}}],r=d(),c=()=>{r.value.validate().then(m=>{console.log(m)}).catch(m=>{console.log(m)})},n=()=>{r.value.resetForm()};return(m,u)=>{const b=h("ak-auto-form"),g=h("ak-button");return p(),o("div",null,[l(b,{data:t,ref_key:"autoFormEl",ref:r},null,512),l(g,{onClick:c},{default:e(()=>[s("submit")]),_:1}),l(g,{onClick:n},{default:e(()=>[s("reset")]),_:1})])}}},D={__name:"README.md.Virtual6adab0b8",setup(A){const t=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",tabs:{},columns:[{tabPane:{label:"选项1"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}}]},{tabPane:{label:"选项2"},list:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t})])}}},f={__name:"README.md.Virtual267dc7e1",setup(A){const t=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"div",control:{class:"div-test"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"密码",formItem:{label:"password",rules:[{type:"required",msg:"请输入密码"}]},control:{type:"password",value:""}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}]}];return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t})])}}},_={__name:"README.md.Virtualed9e8148",setup(A){const t=d({test:"123",radio:"a2"}),r=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}];return(c,n)=>{const m=h("ak-auto-form");return p(),o("div",null,[l(m,{data:r,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u)},null,8,["modelValue"])])}}},y={__name:"README.md.Virtuale8412189",setup(A){const t=d({radio:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],checkbox:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],select:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}),r=d([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[]}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[]}},{type:"checkbox",name:"checkbox2",formItem:{label:"指定的dict"},control:{value:"",placeholder:"请选择",options:[]},config:{optionsKey:"select"}}]);return(c,n)=>{const m=h("ak-auto-form");return p(),o("div",null,[l(m,{data:r.value,dict:t.value},null,8,["data","dict"])])}}},k={__name:"README.md.Virtual16be939d",setup(A){const t=d([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json",method:"get",params:{},afterResponse:r=>(console.log("afterResponse"),r)}}]);return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t.value},null,8,["data"])])}}},F={__name:"README.md.Virtual7bd33bf1",setup(A){const t=d([{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json?name=${text}",method:"get",params:{}}}]);return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t.value},null,8,["data"])])}}},I={__name:"README.md.Virtual8bc00d96",setup(A){const t=d([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"}]}},{type:"input",name:"text",formItem:{label:"隐藏"},control:{value:"",placeholder:"请输入"},config:{linkValue:'$.radio==="a2"'}},{type:"input",name:"text",formItem:{label:"禁用"},control:{value:"",placeholder:"radio为选项2时禁用"},config:{linkValue:'$.radio==="a2"',linkResult:"disabled"}}]);return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t.value},null,8,["data"])])}}},x=["value"],w=v({__name:"test",props:{modelValue:{}},emits:["update:modelValue","change"],setup(A,{emit:t}){const r=c=>{const{value:n}=c.target;t("update:modelValue",n),t("change",n)};return(c,n)=>(p(),o("div",null,[a("input",{value:c.modelValue,onChange:r},null,40,x)]))}}),N={__name:"README.md.Virtualdcf9a7dc",setup(A){const t=d([{type:"component",name:"component",formItem:{label:"自定义组件"},control:{value:"6",placeholder:"请输入"},component:C(w)}]);return(r,c)=>{const n=h("ak-auto-form");return p(),o("div",null,[l(n,{data:t.value},null,8,["data"])])}}},P={class:"marked-body"},V=a("h1",{id:"autoform-表单"},"AutoForm 表单",-1),R=a("p",null,"通过json数据快速创建表单，支持格栅和tabs布局",-1),$=a("h3",{id:"基本使用"},"基本使用",-1),q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),M=a("h3",{id:"tabs布局"},"Tabs布局",-1),S=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),K=a("h3",{id:"div布局"},"Div布局",-1),T=a("p",null,"使用div将指定的组件包起来，可实现联动或通过编写样式实现不同布局",-1),U=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),Z=a("h3",{id:"联动显示隐藏或禁用"},"联动显示隐藏或禁用",-1),s0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),a0=a("h3",{id:"自定义组件"},"自定义组件",-1),l0=a("p",null,[a("code",null,"type='component'"),s("可设置为自定义组件。自定义组件应有"),a("code",null,"v-model"),s("和"),a("code",null,"change"),s("事件")],-1),t0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),n0=E('<h2 id="api">API</h2><h3 id="autoform-props">AutoForm Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>当前表单的值</td></tr><tr><td>data</td><td>object</td><td>表单数据</td></tr><tr><td>formData</td><td>object</td><td>表单props参数设置，详见<code>form</code>表单</td></tr><tr><td>dict</td><td>object/array</td><td>字典，适用于radio,checkbox,select等，当选项没有设置时则使用dict</td></tr></tbody></table><h3 id="autoform-event">AutoForm Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>组件改变事件function(val,name)</td></tr></tbody></table><h3 id="autoform-methods">AutoForm Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr></tbody></table><h3 id="autoform-data">AutoForm Data</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component</td></tr><tr><td>name</td><td>string</td><td>表单控件字段名，唯一性</td></tr><tr><td>formItem</td><td>object</td><td>组件formItem的props</td></tr><tr><td>control</td><td>object</td><td>对应类type型的props</td></tr><tr><td>config</td><td>object</td><td>配置信息</td></tr><tr><td>columns</td><td>array</td><td>type=tabs时有效，用于布局，表示多分多少列/有多少tabs</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs时有效，tabs的相关props</td></tr><tr><td>columns.list</td><td>array</td><td>type=tabs时有效，当前列下所有组件</td></tr></tbody></table><h2 id="dataconfig">data.config</h2><table><thead><tr><th>类型</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>linkValue</td><td>string</td><td>联动条件设置,<code>$</code>表示当前表单的值</td></tr><tr><td>linkResult</td><td>string</td><td>联动显示结果，可选<code>disabled</code>，默认隐藏</td></tr><tr><td>optionsKey</td><td>boolean</td><td>当前项options数据关联字典数据的标识，为false时表示不关联</td></tr><tr><td>url</td><td>string</td><td>通过url获取数据，可使用<code>${text}</code>带一个动态参数</td></tr><tr><td>method</td><td>string</td><td>可选get或post</td></tr><tr><td>params</td><td>object</td><td>通过url获取数据请求参数，绝对false时不请求</td></tr><tr><td>afterResponse</td><td>function</td><td>请求结果方法</td></tr></tbody></table>',11),p0={__name:"README",setup(A){return(t,r)=>(p(),o("div",P,[V,R,$,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20ref%3D%22autoFormEl%22%20%2F%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22submit%22%3Esubmit%3C%2Fak-button%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22reset%22%3Ereset%3C%2Fak-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'text'%2C%0A%20%20%20%20%20%20name%3A%20'%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'text'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'userName'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'userName'%2C%0A%20%20%20%20%20%20%20%20rules%3A%20%5B%7B%20type%3A%20'required'%2C%20msg%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%20%7D%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'password'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'password'%2C%0A%20%20%20%20%20%20%20%20rules%3A%20%5B%7B%20type%3A%20'required'%2C%20msg%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5password'%20%7D%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20type%3A%20'password'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'checkbox'%2C%0A%20%20%20%20%20%20name%3A%20'checkbox'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'checkbox'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'datePicker'%2C%0A%20%20%20%20%20%20name%3A%20'datePicker'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'datePicker'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'select'%2C%0A%20%20%20%20%20%20name%3A%20'select'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'select'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%201%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B95'%2C%20value%3A%20'5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'6'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B97'%2C%20value%3A%20'7'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B98'%2C%20value%3A%20'8'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B99'%2C%20value%3A%20'9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B910'%2C%20value%3A%20'10'%2C%20class%3A%20'red'%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20name%3A%20'switch'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'switch'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20false%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'textarea'%2C%0A%20%20%20%20%20%20name%3A%20'textarea'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'textarea'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'timePicker'%2C%0A%20%20%20%20%20%20name%3A%20'timePicker'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'timePicker'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'timeSelect'%2C%0A%20%20%20%20%20%20name%3A%20'timeSelect'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'timeSelect'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%20%20const%20autoFormEl%20%3D%20ref()%0A%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20autoFormEl.value%0A%20%20%20%20%20%20.validate()%0A%20%20%20%20%20%20.then((res)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(res)%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((res)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log(res)%0A%20%20%20%20%20%20%7D)%0A%20%20%7D%0A%20%20const%20reset%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20autoFormEl.value.resetForm()%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:e(()=>[q]),default:e(()=>[l(B)]),_:1}),M,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'test'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'tabs'%2C%0A%20%20%20%20%20%20tabs%3A%20%7B%7D%2C%0A%20%20%20%20%20%20columns%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20tabPane%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E9%80%89%E9%A1%B91'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'userName2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'userName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%7B%20type%3A%20'required'%2C%20msg%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20tabPane%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E9%80%89%E9%A1%B92'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'userName2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'userName1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'userName5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'userName2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:e(()=>[S]),default:e(()=>[l(D)]),_:1}),K,T,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'test'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'div'%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20class%3A%20'div-test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'userName2'%2C%0A%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'userName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%7B%20type%3A%20'required'%2C%20msg%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AF%86%E7%A0%81'%2C%0A%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'password'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%7B%20type%3A%20'required'%2C%20msg%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81'%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'password'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'checkbox'%2C%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'checkbox'%2C%0A%20%20%20%20%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'checkbox'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:e(()=>[U]),default:e(()=>[l(f)]),_:1}),z,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20v-model%3D%22model%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20model%20%3D%20ref(%7B%20test%3A%20'123'%2C%20radio%3A%20'a2'%20%7D)%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'test'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:e(()=>[G]),default:e(()=>[l(_)]),_:1}),H,J,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%3Adict%3D%22dict%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20dict%20%3D%20ref(%7B%0A%20%20%20%20radio%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20checkbox%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'a4'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E7%A6%81%E7%94%A8'%2C%20value%3A%20'a5'%2C%20disabled%3A%20true%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20select%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%201%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'2'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'3'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B94'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B95'%2C%20value%3A%20'5'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'6'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B97'%2C%20value%3A%20'7'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B98'%2C%20value%3A%20'8'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B99'%2C%20value%3A%20'9'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B910'%2C%20value%3A%20'10'%2C%20class%3A%20'red'%20%7D%0A%20%20%20%20%5D%0A%20%20%7D)%0A%20%20const%20data%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'checkbox'%2C%0A%20%20%20%20%20%20name%3A%20'checkbox'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'checkbox'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'select'%2C%0A%20%20%20%20%20%20name%3A%20'select'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'select'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'checkbox'%2C%0A%20%20%20%20%20%20name%3A%20'checkbox2'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%8C%87%E5%AE%9A%E7%9A%84dict'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%20%7B%0A%20%20%20%20%20%20%20%20optionsKey%3A%20'select'%20%2F%2F%20%E5%8F%AF%E4%BB%8Edict%E9%87%8C%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AE%9A%E7%9A%84key%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:e(()=>[L]),default:e(()=>[l(y)]),_:1}),O,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20data%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%20%7B%0A%20%20%20%20%20%20%20%20url%3A%20'.%2Fstatic%2Fmock%2FtestData.json'%2C%0A%20%20%20%20%20%20%20%20method%3A%20'get'%2C%0A%20%20%20%20%20%20%20%20params%3A%20%7B%7D%2C%20%2F%2F%20%E8%AF%B7%E6%B1%82%E7%9A%84%E5%8F%82%E6%95%B0%0A%20%20%20%20%20%20%20%20afterResponse%3A%20(res)%20%3D%3E%20%7B%20%2F%2F%20%E8%AF%B7%E6%B1%82%E7%BB%93%E6%9E%9C%EF%BC%8C%E5%8F%AF%E5%AF%B9%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E5%90%8E%E8%BF%94%E5%9B%9E%0A%20%20%20%20%20%20%20%20%20%20console.log('afterResponse')%0A%20%20%20%20%20%20%20%20%20%20return%20res%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:e(()=>[Q]),default:e(()=>[l(k)]),_:1}),W,X,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20data%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'text'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'test'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%20%7B%0A%20%20%20%20%20%20%20%20url%3A%20'.%2Fstatic%2Fmock%2FtestData.json%3Fname%3D%24%7Btext%7D'%2C%0A%20%20%20%20%20%20%20%20method%3A%20'get'%2C%0A%20%20%20%20%20%20%20%20params%3A%20%7B%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:e(()=>[Y]),default:e(()=>[l(F)]),_:1}),Z,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20data%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'radio'%2C%0A%20%20%20%20%20%20name%3A%20'radio'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'radio'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%20'a1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%20'a2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%20'a3'%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'text'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E9%9A%90%E8%97%8F'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%20%7B%0A%20%20%20%20%20%20%20%20linkValue%3A%20'%24.radio%3D%3D%3D%22a2%22'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20name%3A%20'text'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E7%A6%81%E7%94%A8'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20''%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'radio%E4%B8%BA%E9%80%89%E9%A1%B92%E6%97%B6%E7%A6%81%E7%94%A8'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%20%7B%0A%20%20%20%20%20%20%20%20linkValue%3A%20'%24.radio%3D%3D%3D%22a2%22'%2C%0A%20%20%20%20%20%20%20%20linkResult%3A%20'disabled'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:e(()=>[s0]),default:e(()=>[l(I)]),_:1}),a0,l0,l(i(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-auto-form%20%3Adata%3D%22data%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%2C%20markRaw%20%7D%20from%20'vue'%0A%20%20import%20test%20from%20'.%2Ftest.vue'%0A%20%20const%20data%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'component'%2C%0A%20%20%20%20%20%20name%3A%20'component'%2C%0A%20%20%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20control%3A%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20'6'%2C%0A%20%20%20%20%20%20%20%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20component%3A%20markRaw(test)%0A%20%20%20%20%7D%0A%20%20%5D)%0A%3C%2Fscript%3E%0A"},{code:e(()=>[t0]),default:e(()=>[l(N)]),_:1}),n0]))}};export{p0 as default};
