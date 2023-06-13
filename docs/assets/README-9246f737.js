import{C as h}from"./codePreview-0428c270.js";import{d as m,h as j,r as u,o as r,a as g,c as _,b as e,w as n,u as i,f as t,g as v,e as s}from"./index-96df29ae.js";/* empty css                                                                    */const f=m({__name:"README.md.Virtual95c8301d",setup(p){const a=j("");return(o,l)=>{const d=u("ak-time-select");return r(),g(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),placeholder:"请选择时间"},null,8,["modelValue"])}}}),k=m({__name:"README.md.Virtuale7c9532c",setup(p){const a=j("");return(o,l)=>{const d=u("ak-time-select");return r(),g(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),placeholder:"请选择时间",start:"00:00",end:"07:00"},null,8,["modelValue"])}}}),b=m({__name:"README.md.Virtuald714b58b",setup(p){const a=j("");return(o,l)=>{const d=u("ak-time-select");return r(),g(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),placeholder:"请选择时间","min-time":"13:00","max-time":"15:00"},null,8,["modelValue"])}}}),y={class:"marked-body"},V=t("h1",{id:"timeselect-时间选择"},"TimeSelect 时间选择",-1),w=t("h3",{id:"基础用法"},"基础用法",-1),x=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-time-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),E=t("h3",{id:"选择开始和结束时间"},"选择开始和结束时间",-1),C=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-time-select"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(`
    `),t("span",{class:"hljs-attr"},"start"),s("="),t("span",{class:"hljs-string"},'"00:00"'),s(`
    `),t("span",{class:"hljs-attr"},"end"),s("="),t("span",{class:"hljs-string"},'"07:00"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),A=t("h3",{id:"固定时间范围"},"固定时间范围",-1),B=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-time-select"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(`
    `),t("span",{class:"hljs-attr"},"min-time"),s("="),t("span",{class:"hljs-string"},'"13:00"'),s(`
    `),t("span",{class:"hljs-attr"},"max-time"),s("="),t("span",{class:"hljs-string"},'"15:00"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),S=v('<h2 id="api">API</h2><h3 id="timeselect-props">TimeSelect Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>显示的值</td></tr><tr><td>start</td><td>string</td><td>开始时间 09:00</td></tr><tr><td>end</td><td>string</td><td>结束时间 18:00</td></tr><tr><td>step</td><td>string</td><td>间隔时间 00:30</td></tr><tr><td>min-time</td><td>string</td><td>最早时间点，早于该时间的时间段将被禁用</td></tr><tr><td>max-time</td><td>string</td><td>最晚时间点，晚于该时间的时间段将被禁用</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr></tbody></table><h3 id="timeselect-event">TimeSelect Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>modelValue改变事件</td></tr><tr><td>toggleClick</td><td>点击展开收起事件</td></tr><tr><td>clear</td><td>清空事件</td></tr></tbody></table>',5),N={__name:"README",setup(p){return(a,o)=>(r(),_("div",y,[V,w,e(i(h),{code:""},{code:n(()=>[x]),default:n(()=>[e(f)]),_:1}),E,e(i(h),{code:""},{code:n(()=>[C]),default:n(()=>[e(k)]),_:1}),A,e(i(h),{code:""},{code:n(()=>[B]),default:n(()=>[e(b)]),_:1}),S]))}};export{N as default};
