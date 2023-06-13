import{C as d}from"./codePreview-0428c270.js";import{d as u,h as _,r as o,o as r,c as p,f as a,b as l,_ as i,w as t,e as s,u as j,g as f}from"./index-96df29ae.js";/* empty css                                                                    */const V=u({__name:"README.md.Virtual74e3425f",setup(h){const c=_();return(n,g)=>{const e=o("ak-progress");return r(),p("div",null,[a("p",null,[l(e,{modelValue:c.value,"onUpdate:modelValue":g[0]||(g[0]=m=>c.value=m)},null,8,["modelValue"])]),a("p",null,[l(e,{modelValue:30})]),a("p",null,[l(e,{modelValue:50,status:"success"})]),a("p",null,[l(e,{modelValue:60,status:"warning"})]),a("p",null,[l(e,{modelValue:70,status:"danger"})]),a("p",null,[l(e,{modelValue:100})])])}}}),b={},k=a("p",null,"设置宽高",-1),v=a("p",null,"设置背景和进度颜色",-1),y=a("p",null,"进度文字固定位置",-1);function x(h,c){const n=o("ak-progress");return r(),p("div",null,[k,a("p",null,[l(n,{modelValue:50,radius:300,border:10})]),v,a("p",null,[l(n,{modelValue:30,color:"#D9E5F1FF",borderColor:"#9907C1FF"})]),y,a("p",null,[l(n,{modelValue:80,followText:!1})])])}const w=i(b,[["render",x]]),C={};function F(h,c){const n=o("ak-progress");return r(),p("div",null,[l(n,{"model-value":0,radius:50,border:8,type:"circle"}),l(n,{modelValue:30,radius:50,border:8,type:"circle",status:"success"}),l(n,{modelValue:50,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,color:"#ddd",borderColor:"#f60",type:"circle"}),l(n,{modelValue:100,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,type:"circle",showText:!1},{default:t(()=>[s("自定义显示内容")]),_:1})])}const N=i(C,[["render",F]]),E={class:"marked-body"},T=a("h1",{id:"progress-进度条"},"Progress 进度条",-1),$=a("h3",{id:"基础用法"},"基础用法",-1),S=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"60"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"70"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"100"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=a("h3",{id:"其他用法"},"其他用法",-1),D=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置宽高"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"300"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"10"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置背景和进度颜色"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#D9E5F1FF"'),s(),a("span",{class:"hljs-attr"},"borderColor"),s("="),a("span",{class:"hljs-string"},'"#9907C1FF"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("进度文字固定位置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(),a("span",{class:"hljs-attr"},":followText"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])])],-1),P=a("h3",{id:"环形进度条"},"环形进度条",-1),A=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
      `),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"success"'),s(`
    />`)]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ddd"'),s(`
      `),a("span",{class:"hljs-attr"},"borderColor"),s("="),a("span",{class:"hljs-string"},'"#f60"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
    />`)]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
      `),a("span",{class:"hljs-attr"},":showText"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
      >`)]),s(`自定义显示内容</ak-progress
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M=f('<h2 id="api">API</h2><h3 id="progress">Progress</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Number</td><td>进度值</td></tr><tr><td>type</td><td>String</td><td>进度条类型，支持两种line直线、circle圆环</td></tr><tr><td>radius</td><td>Number</td><td>圆环半径，单位px。line时为宽</td></tr><tr><td>border</td><td>Number</td><td>进度条宽，单位px。line时为高</td></tr><tr><td>color</td><td>String</td><td>背景颜色</td></tr><tr><td>borderColor</td><td>String</td><td>进度颜色</td></tr><tr><td>duration</td><td>Number/1000</td><td>持续时间，单位毫秒</td></tr><tr><td>showText</td><td>Boolean/true</td><td>显示进度文字</td></tr><tr><td>followText</td><td>Boolean/true</td><td>进度文字跟随进度的位置,type=line时有效</td></tr><tr><td>className</td><td>String</td><td>样式类名</td></tr><tr><td>status</td><td>String</td><td>支持 <code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 类型，默认为 <code>primary</code>。</td></tr></tbody></table>',3),q={__name:"README",setup(h){return(c,n)=>(r(),p("div",E,[T,$,l(j(d),{code:""},{code:t(()=>[S]),default:t(()=>[l(V)]),_:1}),B,l(j(d),{code:""},{code:t(()=>[D]),default:t(()=>[l(w)]),_:1}),P,l(j(d),{code:""},{code:t(()=>[A]),default:t(()=>[l(N)]),_:1}),M]))}};export{q as default};
