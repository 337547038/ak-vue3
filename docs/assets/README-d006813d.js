import{C as v}from"./codePreview-0428c270.js";import{d as x,h as u,r as i,o as m,c as k,f as a,b as n,w as t,e as s,t as g,F as f,u as _,g as V}from"./index-96df29ae.js";/* empty css                                                                    */const y=a("p",null,"选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）",-1),w=x({__name:"README.md.Virtual2c82cd84",setup(b){const l=u(!0),o=u(!1),c=u("1"),p=u(["4"]),h=u([]);return(e,j)=>{const d=i("ak-checkbox");return m(),k(f,null,[a("p",null,[n(d,{modelValue:l.value,"onUpdate:modelValue":j[0]||(j[0]=r=>l.value=r)},{default:t(()=>[s("选项1")]),_:1},8,["modelValue"]),s(" "+g(l.value),1)]),a("p",null,[n(d,{modelValue:o.value,"onUpdate:modelValue":j[1]||(j[1]=r=>o.value=r)},{default:t(()=>[s("选项2")]),_:1},8,["modelValue"]),s(" "+g(o.value),1)]),a("p",null,[n(d,{modelValue:c.value,"onUpdate:modelValue":j[2]||(j[2]=r=>c.value=r)},{default:t(()=>[s("选项3")]),_:1},8,["modelValue"]),s(" "+g(c.value)+"（v-model的值只要为true都会是勾选状态） ",1)]),y,a("p",null,[n(d,{modelValue:p.value,"onUpdate:modelValue":j[3]||(j[3]=r=>p.value=r),value:"4"},{default:t(()=>[s("选项4")]),_:1},8,["modelValue"]),s(" "+g(p.value),1)]),a("p",null,[n(d,{modelValue:h.value,"onUpdate:modelValue":j[4]||(j[4]=r=>h.value=r),value:"5"},{default:t(()=>[s("选项5")]),_:1},8,["modelValue"]),s(" "+g(h.value),1)])],64)}}}),C=x({__name:"README.md.Virtual16a76cec",setup(b){const l=u(!0),o=u(!1);return(c,p)=>{const h=i("ak-checkbox");return m(),k(f,null,[a("p",null,[n(h,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),disabled:!0},{default:t(()=>[s("选项1")]),_:1},8,["modelValue"]),s(" "+g(l.value),1)]),a("p",null,[n(h,{modelValue:o.value,"onUpdate:modelValue":p[1]||(p[1]=e=>o.value=e),disabled:!0},{default:t(()=>[s("选项2")]),_:1},8,["modelValue"]),s(" "+g(o.value),1)])],64)}}}),D=x({__name:"README.md.Virtuala16ab8d2",setup(b){const l=u(["a1","a6"]),o=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}];return(c,p)=>{const h=i("ak-checkbox-group");return m(),k(f,null,[a("p",null,"已选值："+g(l.value),1),a("p",null,[n(h,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),options:o},null,8,["modelValue"])])],64)}}}),E=x({__name:"README.md.Virtual0ad829ca",setup(b){const l=u(["a6"]),o=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{value:"a5"},{label:"禁用",value:"a6",disabled:!0},{label:"勾选禁用",value:"a7",disabled:!0}];return(c,p)=>{const h=i("ak-checkbox-group");return m(),k(f,null,[a("p",null,"已选值："+g(l.value),1),a("p",null,[n(h,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),options:o,min:2,max:4},null,8,["modelValue"])])],64)}}}),U=x({__name:"README.md.Virtual65efe60d",setup(b){const l=u(["a1","a6"]),o=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}],c=u(),p=()=>{const h=c.value.getValue();console.log(h)};return(h,e)=>{const j=i("ak-checkbox-group"),d=i("ak-button");return m(),k(f,null,[a("p",null,"已选值："+g(l.value),1),a("p",null,[n(j,{ref_key:"checkGroup",ref:c,modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),options:o},null,8,["modelValue"])]),a("p",null,[n(d,{onClick:e[1]||(e[1]=r=>h.$refs.checkGroup.toggleSelect(!0))},{default:t(()=>[s("全选")]),_:1}),n(d,{onClick:e[2]||(e[2]=r=>h.$refs.checkGroup.toggleSelect(!1))},{default:t(()=>[s("全不选")]),_:1}),n(d,{onClick:p},{default:t(()=>[s("获取值")]),_:1})])],64)}}}),$=x({__name:"README.md.Virtualc072f29c",setup(b){const l=u(["a1"]);return(o,c)=>{const p=i("ak-checkbox"),h=i("ak-button");return m(),k(f,null,[a("p",null,"当前选中值："+g(l.value),1),a("p",null,[n(p,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),value:"a1"},{default:t(()=>[s("选项1")]),_:1},8,["modelValue"])]),a("p",null,[n(p,{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=e=>l.value=e),value:"a2"},{default:t(()=>[s("选项2")]),_:1},8,["modelValue"])]),a("p",null,[n(p,{modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=e=>l.value=e),value:"a3"},{default:t(()=>[s("选项3")]),_:1},8,["modelValue"])]),a("p",null,[n(p,{modelValue:l.value,"onUpdate:modelValue":c[3]||(c[3]=e=>l.value=e),value:"a4"},{default:t(()=>[s("选项4")]),_:1},8,["modelValue"])]),a("p",null,[n(h,{onClick:c[4]||(c[4]=e=>l.value=["a1","a2","a3","a4"])},{default:t(()=>[s("全选")]),_:1}),n(h,{onClick:c[5]||(c[5]=e=>l.value=[])},{default:t(()=>[s("全不选")]),_:1})])],64)}}}),A=x({__name:"README.md.Virtual42469f69",setup(b){const l=u(""),o=u(["a1"]),c=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"}],p=()=>(console.log("return false 阻止勾选"),!1);return(h,e)=>{const j=i("ak-checkbox"),d=i("ak-checkbox-group");return m(),k(f,null,[a("p",null,[n(j,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),value:"a1",beforeChange:p},{default:t(()=>[s("选项1")]),_:1},8,["modelValue"])]),a("p",null,[n(d,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value=r),options:c,beforeChange:p},null,8,["modelValue"])])],64)}}}),G={class:"marked-body"},S=a("h1",{id:"checkbox-多选框"},"Checkbox 多选框",-1),M=a("h3",{id:"基础用法"},"基础用法",-1),R=a("p",null,[s("单一的"),a("code",null,"checkbox"),s("中，默认绑定变量的值会是"),a("code",null,"Boolean"),s("，选中为"),a("code",null,"true"),s("。如选中时需要返回指定的值，则添加"),a("code",null,"value")],-1),B=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox1 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox2 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox3 }}（v-model的值只要为true都会是勾选状态）
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
    >`)]),s(`选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）</p
  >
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox4"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("选项4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox4 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox5"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("选项5"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox5 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox4 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'4'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox5 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),F=a("h3",{id:"禁用状态"},"禁用状态",-1),N=a("p",null,"多选框不可用状态",-1),P=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox1 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
    {{ checkbox2 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",{id:"多选框组"},"多选框组",-1),K=a("p",null,"options中选项label可为空",-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("已选值：{{ checkbox }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"groupData"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'a1'"),s(", "),a("span",{class:"hljs-string"},"'a6'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(` groupData = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'勾选禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a6'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),q=a("h3",{id:"可选项目数量的限制"},"可选项目数量的限制",-1),z=a("p",null,[s("例子最多可选"),a("code",null,"max=4"),s("，最少需选"),a("code",null,"min=2")],-1),H=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("已选值：{{ checkbox }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox-group"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"groupData"'),s(`
      `),a("span",{class:"hljs-attr"},":min"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
      `),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"4"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'a6'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(` groupData = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
    { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a6'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'勾选禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a7'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),J=a("h3",{id:"组全选或全不选方法"},"组全选或全不选方法",-1),L=a("p",null,[a("code",null,"toggleSelect(true/false)全选或取消全选"),s("，可使用 "),a("code",null,"getValue"),s(" 取方法取得已勾选的项集合")],-1),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("已选值：{{ checkbox }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox-group"),s(`
      `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"checkGroup"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"groupData"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.checkGroup.toggleSelect(true)"'),s(">")]),s("全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.checkGroup.toggleSelect(false)"'),s(">")]),s("全不选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getValue"'),s(">")]),s("获取值"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'a1'"),s(","),a("span",{class:"hljs-string"},"'a6'"),s(`])

  `),a("span",{class:"hljs-keyword"},"const"),s(` groupData = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(` },
    { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'勾选禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a6'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkGroup = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getValue"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = checkGroup."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"getValue"),s(`()
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),Q=a("h3",{id:"多个单一组成的组"},"多个单一组成的组",-1),W=a("p",null,[s("组group有一定的局限性，组内的"),a("code",null,"checkbox"),s("是紧密相连的。由多个单一"),a("code",null,"checkbox"),s("自由组成可实现灵活布局。同时也很方便的实现全选或全不选")],-1),X=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前选中值：{{ checkbox }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a4"'),s(">")]),s("选项4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"checkbox = ['a1', 'a2', 'a3', 'a4']"`),s(">")]),s("全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"checkbox = []"'),s(">")]),s("全不选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'a1'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",{id:"阻止改变事件"},"阻止改变事件",-1),Z=a("p",null,[s("使用"),a("code",null,"beforeChange"),s("可阻止事件改变")],-1),ss=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a1"'),s(),a("span",{class:"hljs-attr"},":beforeChange"),s("="),a("span",{class:"hljs-string"},'"beforeChange"'),s(`
      >`)]),s(`选项1</ak-checkbox
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-checkbox-group"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"checkbox2"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"groupData"'),s(`
      `),a("span",{class:"hljs-attr"},":beforeChange"),s("="),a("span",{class:"hljs-string"},'"beforeChange"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" checkbox2 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'a1'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(` groupData = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeChange"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'return false 阻止勾选'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),as=V('<h2 id="api">API</h2><h3 id="checkbox">Checkbox</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String, Boolean, Array</td><td>选中值</td></tr><tr><td>label</td><td>String</td><td>显示的文本值，也可以是slot形式</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkbox-event">Checkbox Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="checkboxgroup">CheckboxGroup</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Array</td><td>当前选中的值</td></tr><tr><td>options</td><td>Array</td><td>选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属于，默认{label:&#39;label&#39;,value:&#39;value&#39;}</td></tr><tr><td>max</td><td>number</td><td>可被勾选的 checkbox 的最大数量</td></tr><tr><td>min</td><td>number</td><td>可被勾选的 checkbox 的最小数量</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用组</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkboxgroup-methods">CheckboxGroup Methods</h3><table><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>toggleSelect</td><td>全选true/取消false当前组所有选项</td></tr><tr><td>getValue</td><td>获取当前所有勾选项的集合</td></tr></tbody></table><h3 id="checkboxgroup-event">CheckboxGroup Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table>',11),es={__name:"README",setup(b){return(l,o)=>(m(),k("div",G,[S,M,R,n(_(v),{code:""},{code:t(()=>[B]),default:t(()=>[n(w)]),_:1}),F,N,n(_(v),{code:""},{code:t(()=>[P]),default:t(()=>[n(C)]),_:1}),I,K,n(_(v),{code:""},{code:t(()=>[T]),default:t(()=>[n(D)]),_:1}),q,z,n(_(v),{code:""},{code:t(()=>[H]),default:t(()=>[n(E)]),_:1}),J,L,n(_(v),{code:""},{code:t(()=>[O]),default:t(()=>[n(U)]),_:1}),Q,W,n(_(v),{code:""},{code:t(()=>[X]),default:t(()=>[n($)]),_:1}),Y,Z,n(_(v),{code:""},{code:t(()=>[ss]),default:t(()=>[n(A)]),_:1}),as]))}};export{es as default};
