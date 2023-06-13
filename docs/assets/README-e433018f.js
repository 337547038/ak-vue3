import{C as g}from"./codePreview-0428c270.js";import{d as m,h as p,r as d,o as u,c as k,f as a,b as t,F as y,a as b,_ as w,w as h,u as v,e as s,g as V}from"./index-96df29ae.js";/* empty css                                                                    */const x=m({__name:"README.md.Virtual7cd37784",setup(i){const l=p([{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p(1),j=p("2"),c=p(""),e=p("");return(r,o)=>{const f=d("ak-select");return u(),k(y,null,[a("p",null,[t(f,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=_=>n.value=_),placeholder:"请选择",options:l.value},null,8,["modelValue","options"])]),a("p",null,[t(f,{modelValue:j.value,"onUpdate:modelValue":o[1]||(o[1]=_=>j.value=_),placeholder:"请选择",options:l.value},null,8,["modelValue","options"])]),a("p",null,[t(f,{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=_=>c.value=_),placeholder:"禁用状态不能选择",options:l.value,disabled:!0},null,8,["modelValue","options"])]),a("p",null,[t(f,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=_=>e.value=_),placeholder:"设置最大下拉高度",options:l.value,downHeight:100},null,8,["modelValue","options"])])],64)}}}),C=m({__name:"README.md.Virtual0b6f40fc",setup(i){const l=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p("");return(j,c)=>{const e=d("ak-select");return u(),b(e,{placeholder:"请选择",options:l.value,modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=r=>n.value=r),clear:!0},null,8,["options","modelValue"])}}}),E={setup(){const i=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),l=p("");return{options:i,value1:l}}};function U(i,l,n,j,c,e){const r=d("ak-select");return u(),b(r,{placeholder:"请选择",options:j.options,modelValue:j.value1,"onUpdate:modelValue":l[0]||(l[0]=o=>j.value1=o),filterable:!0},null,8,["options","modelValue"])}const A=w(E,[["render",U]]),D=m({__name:"README.md.Virtual8ce0b2cf",setup(i){const l=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p(""),j=c=>{console.log(c),l.value=[{label:"输入搜索",value:"1"}]};return(c,e)=>{const r=d("ak-select");return u(),b(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),placeholder:"请选择",options:l.value,filterable:!0,async:!0,onInput:j},null,8,["modelValue","options"])}}}),M=m({__name:"README.md.Virtuald3c50abf",setup(i){const l=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p([]),j=()=>{alert("最多选择3项")};return(c,e)=>{const r=d("ak-select");return u(),b(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),placeholder:"请选择",options:l.value,multiple:!0,"multiple-limit":3,onLimitChange:j},null,8,["modelValue","options"])}}}),$=m({__name:"README.md.Virtual9010178d",setup(i){const l=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p([]),j=(e,r)=>{console.log("change"),console.log(e,r)},c=e=>(console.log(e),alert("不能选择"),!1);return(e,r)=>{const o=d("ak-select");return u(),b(o,{placeholder:"请选择",options:l.value,modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=f=>n.value=f),onChange:j,beforeChange:c},null,8,["options","modelValue"])}}}),R=m({__name:"README.md.Virtualaa2293e2",setup(i){const l=p("");return(n,j)=>{const c=d("ak-option"),e=d("ak-select");return u(),b(e,{placeholder:"请选择",modelValue:l.value,"onUpdate:modelValue":j[0]||(j[0]=r=>l.value=r)},{default:h(()=>[t(c,{value:"11",label:"选择一"})]),_:1},8,["modelValue"])}}}),N=m({__name:"README.md.Virtual7c9287a3",setup(i){const l=p([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p("");return(j,c)=>{const e=d("ak-select");return u(),b(e,{placeholder:"请选择",modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=r=>n.value=r),options:l.value,direction:2},null,8,["modelValue","options"])}}}),B=m({__name:"README.md.Virtual436a66c0",setup(i){const l=p([{key:"选项1",name:"1"},{key:"选项2",name:"2"},{key:"选项3",name:"3"},{key:"选项4",name:"4",disabled:!0},{key:"选项5",name:"5"},{key:"6"},{key:"选项7",name:"7"},{key:"选项8",name:"8"},{key:"选项9",name:"9"},{key:"选项10",name:"10",class:"red"}]),n=p("");return(j,c)=>{const e=d("ak-select");return u(),b(e,{width:"100px",placeholder:"请选择",modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=r=>n.value=r),options:l.value,optionsKey:{label:"key",value:"name"}},null,8,["modelValue","options"])}}}),O=m({__name:"README.md.Virtualca1ace32",setup(i){const l=p([{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),n=p([]),j=c=>{console.log(c)};return(c,e)=>{const r=d("ak-select");return u(),k("p",null,[t(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),placeholder:"请选择",options:l.value,multiple:"",filterable:"","allow-create":"",onDelete:j},null,8,["modelValue","options"])])}}}),S={class:"marked-body"},K=a("h1",{id:"select-下拉选择"},"select 下拉选择",-1),F=a("h3",{id:"基础用法"},"基础用法",-1),H=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"禁用状态不能选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"设置最大下拉高度"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},":downHeight"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
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
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value4 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),L=a("h3",{id:"可清空选项"},"可清空选项",-1),I=a("p",null,[a("code",null,"clear=true")],-1),P=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},":clear"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),T=a("h3",{id:"可搜索"},"可搜索",-1),z=a("p",null,[a("code",null,"filterable=true")],-1),q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},":filterable"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(`},
      {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(`}
    ])
    `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      options,
      value1
    }
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),G=a("h3",{id:"异步搜索"},"异步搜索",-1),J=a("p",null,[a("code",null,"filterable=true"),s(),a("code",null,'async="true"'),s(),a("code",null,'@input="searchChange"')],-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":filterable"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":async"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    @`),a("span",{class:"hljs-attr"},"input"),s("="),a("span",{class:"hljs-string"},'"searchChange"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"searchChange"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(val)
    options.`),a("span",{class:"hljs-property"},"value"),s(" = [{ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'输入搜索'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` }]
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=a("h3",{id:"可多选"},"可多选",-1),X=a("p",null,[a("code",null,"multiple=true"),s("。多选时"),a("code",null,"v-model"),s("必须是数组，同时可设置"),a("code",null,"multiple-limit"),s("最多选择的个数及提示信息")],-1),Y=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":multiple"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":multiple-limit"),s("="),a("span",{class:"hljs-string"},'"3"'),s(`
    @`),a("span",{class:"hljs-attr"},"limitChange"),s("="),a("span",{class:"hljs-string"},'"limitChange"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"limitChange"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'最多选择3项'"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),Z=a("h3",{id:"改变前拉截事件"},"改变前拉截事件",-1),ss=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
    `),a("span",{class:"hljs-attr"},":beforeChange"),s("="),a("span",{class:"hljs-string"},'"beforeChange"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"value: any, item: any"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'change'"),s(`)
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value, item)
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeChange"),s(" = ("),a("span",{class:"hljs-params"},"item: any"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item)
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'不能选择'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),as=a("h3",{id:"使用option组件，参数和select的option一致"},[s("使用"),a("code",null,"Option"),s("组件，参数和"),a("code",null,"select"),s("的"),a("code",null,"option"),s("一致")],-1),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-option"),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"11"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"选择一"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ns=a("h3",{id:"向上弹出选项面板"},"向上弹出选项面板",-1),ts=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":direction"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),es=a("h3",{id:"选择数据指定的label和value"},"选择数据指定的label和value",-1),cs=a("p",null,[s("使用"),a("code",null,"optionsKey"),s("指定取值的key的值")],-1),ps=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
    `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"100px"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":optionsKey"),s("="),a("span",{class:"hljs-string"},`"{ label: 'key', value: 'name' }"`),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'4'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项5'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'6'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项7'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'7'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项8'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'8'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项9'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'9'"),s(` },
    { `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'选项10'"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'10'"),s(", "),a("span",{class:"hljs-attr"},"class"),s(": "),a("span",{class:"hljs-string"},"'red'"),s(` }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),rs=a("h3",{id:"创建新的选项"},"创建新的选项",-1),hs=a("p",null,"可以创建并选中选项中不存在的条目",-1),js=a("p",null,[s("通过使用 "),a("code",null,"allow-create"),s(" 属性，用户可以通过输入框创建新项目。 为了使 allow-create 正确的工作， filterable 的值必须为 true. 按下回车就可以选中当前选项列表中的第一个选项。")],-1),os=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-select"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},"filterable"),s(`
      `),a("span",{class:"hljs-attr"},"allow-create"),s(`
      @`),a("span",{class:"hljs-attr"},"delete"),s("="),a("span",{class:"hljs-string"},'"deleteOptions"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
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
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"deleteOptions"),s(" = ("),a("span",{class:"hljs-params"},"index: number"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(index)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),is=V('<h2 id="api">API</h2><h3 id="select">Select</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string,array</td><td>通过v-model绑定，<code>multiple</code>时为<code>array</code></td></tr><tr><td>multiple</td><td>boolean/false</td><td>是否多选</td></tr><tr><td>multipleLimit</td><td>number/0</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr><tr><td>placeholder</td><td>string</td><td>占位符,value为空时显示。占位符为空时显示options第一项</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索，对当前下拉数据筛选</td></tr><tr><td>async</td><td>boolean/false</td><td>异步搜索，<code>filterable=true</code>时有效</td></tr><tr><td>options</td><td>array</td><td>下拉选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属性，默认{label:&#39;label&#39;,value:&#39;value&#39;}</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可以清空选项</td></tr><tr><td>downHeight</td><td>Number</td><td>最大下拉高度，默认200</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式，方便对单个select个性化设置，也可通过css控制</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类名</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>将下拉面板插入到body</td></tr><tr><td>direction</td><td>Number/0</td><td>下拉弹出方向，0自动，1向上，2向下</td></tr><tr><td>width</td><td>string</td><td>宽度</td></tr><tr><td>beforeChange</td><td>Function</td><td>选项改变前事件,<code>return false</code>阻止选择</td></tr><tr><td>size</td><td>string</td><td>添加的大小尺寸样式</td></tr><tr><td>allowCreate</td><td>boolean</td><td>允许动态创建</td></tr></tbody></table><h3 id="options-attributes">Options Attributes</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>string</td><td>选项的值</td></tr><tr><td>label</td><td>string</td><td>选项的标签，若不设置则默认与 value 相同</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用该选项</td></tr><tr><td>class</td><td>string</td><td>对当前项添加样式</td></tr></tbody></table><h3 id="select-events">Select Events</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td></tr><tr><td>limitChange</td><td>超出最大选择数时事件，仅<code>multiple=true</code>和设定了<code>multipleLimit</code>时有效</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="select-method">Select Method</h3><table><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>slideUp</td><td>用于收起下拉</td></tr></tbody></table>',9),vs={__name:"README",setup(i){return(l,n)=>(u(),k("div",S,[K,F,t(v(g),{code:""},{code:h(()=>[H]),default:h(()=>[t(x)]),_:1}),L,I,t(v(g),{code:""},{code:h(()=>[P]),default:h(()=>[t(C)]),_:1}),T,z,t(v(g),{code:""},{code:h(()=>[q]),default:h(()=>[t(A)]),_:1}),G,J,t(v(g),{code:""},{code:h(()=>[Q]),default:h(()=>[t(D)]),_:1}),W,X,t(v(g),{code:""},{code:h(()=>[Y]),default:h(()=>[t(M)]),_:1}),Z,t(v(g),{code:""},{code:h(()=>[ss]),default:h(()=>[t($)]),_:1}),as,t(v(g),{code:""},{code:h(()=>[ls]),default:h(()=>[t(R)]),_:1}),ns,t(v(g),{code:""},{code:h(()=>[ts]),default:h(()=>[t(N)]),_:1}),es,cs,t(v(g),{code:""},{code:h(()=>[ps]),default:h(()=>[t(B)]),_:1}),rs,hs,js,t(v(g),{code:""},{code:h(()=>[os]),default:h(()=>[t(O)]),_:1}),is]))}};export{vs as default};
