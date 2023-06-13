import{C as m}from"./codePreview-0428c270.js";import{d as u,h as _,r as g,o,a as k,c as f,b as c,w as r,u as j,f as a,e as s,g as b}from"./index-96df29ae.js";/* empty css                                                                    */const w=u({__name:"README.md.Virtuale7c428c1",setup(h){const l=_(new Date().toLocaleTimeString());return(p,e)=>{const t=g("ak-time-picker");return o(),k(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n)},null,8,["modelValue"])}}}),v=u({__name:"README.md.Virtuald5527e3f",setup(h){const l=_(new Date().toLocaleTimeString());return(p,e)=>{const t=g("ak-time-picker");return o(),k(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),filterable:""},null,8,["modelValue"])}}}),y=u({__name:"README.md.Virtual86445329",setup(h){const l=_(new Date().toLocaleTimeString()),p=(e,t)=>{const{a:n,h:i}=e;if(t==="h")return![9,10,11,12,14,15,16,17,18].includes(n);if(t==="m")return i===9&&n<30||i===18&&n>30};return(e,t)=>{const n=g("ak-time-picker");return o(),k(n,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=i=>l.value=i),"disabled-time":p},null,8,["modelValue"])}}}),V=u({__name:"README.md.Virtual912dcc8c",setup(h){const d=_([]);return(l,p)=>{const e=g("ak-time-picker");return o(),k(e,{modelValue:d.value,"onUpdate:modelValue":p[0]||(p[0]=t=>d.value=t),"is-range":""},null,8,["modelValue"])}}}),T={class:"marked-body"},x=a("h1",{id:"timepicker-时间选择"},"TimePicker 时间选择",-1),E=a("h3",{id:"基础用法"},"基础用法",-1),D=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=a("h3",{id:"可输入"},"可输入",-1),C=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"filterable"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",{id:"限制时间范围"},"限制时间范围",-1),L=a("p",null,[s("使用"),a("code",null,"disabled-time"),s("限制时间选择范围")],-1),B=a("p",null,"示例限制时间范围上午 9-12，下午 14-18 点",-1),M=a("p",null,"选择 9 点时，9:30 可选，选择 18 点时，18:30 之前可选",-1),R=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":disabled-time"),s("="),a("span",{class:"hljs-string"},'"disabledHours"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())

  interface `),a("span",{class:"hljs-title class_"},"Time"),s(` {
    `),a("span",{class:"hljs-attr"},"h"),s(": number "),a("span",{class:"hljs-comment"},"// 时"),s(`
    `),a("span",{class:"hljs-attr"},"m"),s(": number "),a("span",{class:"hljs-comment"},"// 分"),s(`
    `),a("span",{class:"hljs-attr"},"s"),s(": number "),a("span",{class:"hljs-comment"},"// 秒"),s(`
    `),a("span",{class:"hljs-attr"},"a"),s(": number "),a("span",{class:"hljs-comment"},"// 当前值"),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledHours"),s(" = ("),a("span",{class:"hljs-params"},"time: Time, type: string"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(` { a, h } = time
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'h'"),s(`) {
      `),a("span",{class:"hljs-comment"},"// return (a < 9 || a > 12) && (a < 14 || a > 18)"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(" !["),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"11"),s(", "),a("span",{class:"hljs-number"},"12"),s(", "),a("span",{class:"hljs-number"},"14"),s(", "),a("span",{class:"hljs-number"},"15"),s(", "),a("span",{class:"hljs-number"},"16"),s(", "),a("span",{class:"hljs-number"},"17"),s(", "),a("span",{class:"hljs-number"},"18"),s("]."),a("span",{class:"hljs-title function_"},"includes"),s("(a) "),a("span",{class:"hljs-comment"},"// 返回9-12 14-18"),s(`
    }
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'m'"),s(`) {
      `),a("span",{class:"hljs-comment"},"// 从9:30开始可选，18点时分钟最大可选30分钟"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(" (h === "),a("span",{class:"hljs-number"},"9"),s(" && a < "),a("span",{class:"hljs-number"},"30"),s(") || (h === "),a("span",{class:"hljs-number"},"18"),s(" && a > "),a("span",{class:"hljs-number"},"30"),s(`)
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",{id:"区间选择"},"区间选择",-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"modelValue"'),s(),a("span",{class:"hljs-attr"},"is-range"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" modelValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=b('<h2 id="api">API</h2><h3 id="timeselect-props">TimeSelect Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>显示的值</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>可输入</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0 默认　 1 向下　 2 向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到 body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon 图标</td></tr></tbody></table><h3 id="timeselect-event">TimeSelect Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>toggleClick</td><td>点击展开收起事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>blur</td><td>失焦事件</td></tr></tbody></table>',5),I={__name:"README",setup(h){return(d,l)=>(o(),f("div",T,[x,E,c(j(m),{code:""},{code:r(()=>[D]),default:r(()=>[c(w)]),_:1}),S,c(j(m),{code:""},{code:r(()=>[C]),default:r(()=>[c(v)]),_:1}),A,L,B,M,c(j(m),{code:""},{code:r(()=>[R]),default:r(()=>[c(y)]),_:1}),H,c(j(m),{code:""},{code:r(()=>[N]),default:r(()=>[c(V)]),_:1}),P]))}};export{I as default};
