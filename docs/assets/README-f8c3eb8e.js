import{C as u}from"./codePreview-0428c270.js";import{l as g,r as v,o as c,c as h,f as a,b as d,w as r,e as s,t as o,F as _,u as m,g as b}from"./index-96df29ae.js";/* empty css                                                                    */const f={__name:"README.md.Virtual3ef91d1e",setup(i){const l=g({radio1:!0,radio2:!1,radio3:!0,radio4:!1});return(p,t)=>{const e=v("ak-radio");return c(),h(_,null,[a("p",null,[d(e,{modelValue:l.radio1,"onUpdate:modelValue":t[0]||(t[0]=n=>l.radio1=n)},{default:r(()=>[s("选项1")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio1),1)]),a("p",null,[d(e,{modelValue:l.radio2,"onUpdate:modelValue":t[1]||(t[1]=n=>l.radio2=n)},{default:r(()=>[s("选项2")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio2),1)]),a("p",null,[d(e,{modelValue:l.radio3,"onUpdate:modelValue":t[2]||(t[2]=n=>l.radio3=n),disabled:!0},{default:r(()=>[s("禁用5")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio3),1)]),a("p",null,[d(e,{modelValue:l.radio4,"onUpdate:modelValue":t[3]||(t[3]=n=>l.radio4=n),disabled:!0},{default:r(()=>[s("禁用6")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio4),1)])],64)}}},k={__name:"README.md.Virtual460e6e15",setup(i){const l=g({radio1:"",radio2:"",radio3:"",radio4:"ab"});return(p,t)=>{const e=v("ak-radio");return c(),h("div",null,[a("p",null,[d(e,{modelValue:l.radio1,"onUpdate:modelValue":t[0]||(t[0]=n=>l.radio1=n),value:"a"},{default:r(()=>[s("选项1")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio1),1)]),a("p",null,[d(e,{modelValue:l.radio2,"onUpdate:modelValue":t[1]||(t[1]=n=>l.radio2=n),value:1},{default:r(()=>[s("选项2")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio2),1)]),a("p",null,[d(e,{modelValue:l.radio3,"onUpdate:modelValue":t[2]||(t[2]=n=>l.radio3=n),value:!0},{default:r(()=>[s("选项3")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio3),1)]),a("p",null,[d(e,{modelValue:l.radio4,"onUpdate:modelValue":t[3]||(t[3]=n=>l.radio4=n),value:"ab"},{default:r(()=>[s("选项4")]),_:1},8,["modelValue"]),s(" 当前值："+o(l.radio4),1)])])}}},V={__name:"README.md.Virtuala7d6aa2b",setup(i){const l=g({radio1:"a2",radio2:"a3",data1:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}),p=(t,e)=>{console.log(t),console.log(e)};return(t,e)=>{const n=v("ak-radio-group");return c(),h(_,null,[a("div",null,[a("div",null,"当前值："+o(l.radio1),1),d(n,{options:l.data1,modelValue:l.radio1,"onUpdate:modelValue":e[0]||(e[0]=j=>l.radio1=j),onChange:p},null,8,["options","modelValue"])]),a("div",null,[a("div",null,"整个组不可选，当前值："+o(l.radio2),1),d(n,{options:l.data1,modelValue:l.radio2,"onUpdate:modelValue":e[1]||(e[1]=j=>l.radio2=j),disabled:!0},null,8,["options","modelValue"])])],64)}}},y={class:"marked-body"},w=a("h1",{id:"radio-单选框"},"Radio 单选框",-1),R=a("h3",{id:"基础用法"},"基础用法",-1),E=a("p",null,[s("单个使用时，"),a("code",null,"v-model"),s("为true时选中状态")],-1),x=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
    当前值：{{ state.radio1 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
    当前值：{{ state.radio2 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio3"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s("禁用5"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
    当前值：{{ state.radio3 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio4"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s("禁用6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
    当前值：{{ state.radio4 }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
    `),a("span",{class:"hljs-attr"},"radio1"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"radio2"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
    `),a("span",{class:"hljs-attr"},"radio3"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"radio4"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),U=a("h3",{id:"指定选中状态的值"},"指定选中状态的值",-1),G=a("p",null,[s("使用"),a("code",null,"value"),s("时，选中状态返回"),a("code",null,"value"),s("的值，当"),a("code",null,"v-model=value"),s("时为选中状态。")],-1),A=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio1"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"a"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
      当前值：{{ state.radio1 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio2"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
      当前值：{{ state.radio2 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio3"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
      当前值：{{ state.radio3 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio4"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"ab"'),s(">")]),s("选项4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-radio"),s(">")]),s(`
      当前值：{{ state.radio4 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
    `),a("span",{class:"hljs-attr"},"radio1"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"radio2"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"radio3"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
    `),a("span",{class:"hljs-attr"},"radio4"),s(": "),a("span",{class:"hljs-string"},"'ab'"),s(`
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),C=a("h3",{id:"单选组"},"单选组",-1),D=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("当前值：{{state.radio1}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio-group"),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.data1"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio1"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeGroup"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("整个组不可选，当前值：{{state.radio2}}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-radio-group"),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"state.data1"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.radio2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {reactive} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
  `),a("span",{class:"hljs-attr"},"radio1"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(`,
  `),a("span",{class:"hljs-attr"},"radio2"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(`,
  `),a("span",{class:"hljs-attr"},"data1"),s(`: [
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a1'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a2'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项3'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a3'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选项4'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a4'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'a5'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`}
  ]
})
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeGroup"),s(" = ("),a("span",{class:"hljs-params"},"value,item"),s(`)=>{
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value)
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=b('<h2 id="api">API</h2><h3 id="radio">Radio</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string/boolean/number</td><td>Radio 的 v-model</td></tr><tr><td>value</td><td>string/boolean/number</td><td>选中的值，当v-model＝value时为选中状态</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr><tr><td>label</td><td>String</td><td>显示的文本值，也可以是slot</td></tr></tbody></table><h3 id="radio-event">Radio Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="radio-group">Radio Group</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>Radio组 的 v-model</td></tr><tr><td>options</td><td>array</td><td>组数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属于，默认{label:&#39;label&#39;,value:&#39;value&#39;}</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用组</td></tr></tbody></table><h3 id="radio-group-event">Radio Group Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件,返回(value,item) value为当前选中的值，item为当前data中选中的项</td></tr></tbody></table><h3 id="radio-group-options">Radio Group options</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的文本值</td></tr><tr><td>value</td><td>string</td><td>当前选项值</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr></tbody></table>',11),$={__name:"README",setup(i){return(l,p)=>(c(),h("div",y,[w,R,E,d(m(u),{code:""},{code:r(()=>[x]),default:r(()=>[d(f)]),_:1}),U,G,d(m(u),{code:""},{code:r(()=>[A]),default:r(()=>[d(k)]),_:1}),C,d(m(u),{code:""},{code:r(()=>[D]),default:r(()=>[d(V)]),_:1}),B]))}};export{$ as default};
