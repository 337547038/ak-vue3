import{C as r}from"./codePreview-0428c270.js";import{h as j,q as g,o as e,c,s as u,e as s,n as v,r as f,a as y,w as l,b as t,u as h,f as a,g as b}from"./index-96df29ae.js";/* empty css                                                                    */const x={style:{width:"400px",height:"200px",border:"1px solid #ddd"}},w={__name:"README.md.Virtual2f333198",setup(d){const n=j(!0);return(i,p)=>{const o=g("loading");return e(),c("div",null,[u((e(),c("div",x,[s("容器区域")])),[[o,n.value]])])}}},S={style:{width:"100%",height:"200px",border:"1px solid #ddd"},"ak-loading-text":"玩命加载中..","ak-loading-spinner":"ak-icon-loading","ak-loading-background":"rgba(0, 0, 0, 0.8)"},E={__name:"README.md.Virtual472a277c",setup(d){const n=j(!0);return(i,p)=>{const o=g("loading");return e(),c("div",null,[u((e(),c("div",S,[s("容器区域")])),[[o,n.value]])])}}},L={__name:"README.md.Virtualbe9439a4",setup(d){const n=j(!1),i=()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)},p=v("Loading"),o=()=>{const _=p.loading();setTimeout(()=>{_.close()},3e3)};return(_,P)=>{const m=f("ak-button"),k=g("loading");return e(),c("div",null,[u((e(),y(m,{type:"primary",onClick:i},{default:l(()=>[s("加载")]),_:1})),[[k,n.value,void 0,{el:!0,lock:!0}]]),t(m,{type:"primary",onClick:o},{default:l(()=>[s("服务方式")]),_:1})])}}},C={class:"marked-body"},V=a("h1",{id:"loading-加载等待"},"Loading 加载等待",-1),$=a("p",null,[s("自定义指令"),a("code",null,"v-loading"),s("，只需要绑定"),a("code",null,"Boolean"),s("即可。默认状况下，"),a("code",null,"Loading"),s("会插入到绑定元素的子节点")],-1),B=a("h3",{id:"基本用法"},"基本用法",-1),D=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
      `),a("span",{class:"hljs-attr"},"v-loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
      `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 400px; height: 200px; border: 1px solid #ddd"'),s(`
      >`)]),s(`容器区域</div
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" loading = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),F=a("h3",{id:"自定义"},"自定义",-1),A=a("p",null,[s("可自定义加载文案、图标和背景色。通过"),a("code",null,"ak-loading-text"),s("设置提示文字，"),a("code",null,"ak-loading-spinner"),s("设置图标类名，"),a("code",null,"ak-loading-background"),s("设置背景色")],-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
      `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 100%; height: 200px; border: 1px solid #ddd"'),s(`
      `),a("span",{class:"hljs-attr"},"v-loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
      `),a("span",{class:"hljs-attr"},"ak-loading-text"),s("="),a("span",{class:"hljs-string"},'"玩命加载中.."'),s(`
      `),a("span",{class:"hljs-attr"},"ak-loading-spinner"),s("="),a("span",{class:"hljs-string"},'"ak-icon-loading"'),s(`
      `),a("span",{class:"hljs-attr"},"ak-loading-background"),s("="),a("span",{class:"hljs-string"},'"rgba(0, 0, 0, 0.8)"'),s(`
      >`)]),s(`容器区域</div
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" loading = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),T=a("h3",{id:"其他加载方式"},"其他加载方式",-1),M=a("p",null,[s("支持"),a("code",null,"inject('Loading')"),s("，"),a("code",null,"this.$msg()"),s("，"),a("code",null,"getCurrentInstance().proxy.$loading()"),s("方式引用")],-1),R=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(`
      `),a("span",{class:"hljs-attr"},"v-loading.el.lock"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openFullScreen"'),s(`
      >`)]),s(`加载</ak-button
    >
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openFullScreen2"'),s(">")]),s("服务方式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, inject } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" loading = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openFullScreen"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    loading.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      loading.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
    }, `),a("span",{class:"hljs-number"},"3000"),s(`)
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title class_"},"Loading"),s(" = "),a("span",{class:"hljs-title function_"},"inject"),s("("),a("span",{class:"hljs-string"},"'Loading'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"openFullScreen2"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" loading = "),a("span",{class:"hljs-title class_"},"Loading"),s("."),a("span",{class:"hljs-title function_"},"loading"),s(`()
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      loading.`),a("span",{class:"hljs-title function_"},"close"),s(`()
    }, `),a("span",{class:"hljs-number"},"3000"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),I=b('<h2 id="api">API</h2><h3 id="loading">Loading</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>显示在加载图标下方的加载文案</td></tr><tr><td>background</td><td>String</td><td>遮罩背景色</td></tr><tr><td>spinner</td><td>String</td><td>自定义加载图标类名</td></tr><tr><td>lock</td><td>Boolean/false</td><td>锁定滚动</td></tr><tr><td>zIndex</td><td>Number</td><td>层级</td></tr><tr><td>el</td><td>标签对象</td><td>将内容插入到指定标签，默认为当前标签</td></tr></tbody></table>',3),H={__name:"README",setup(d){return(n,i)=>(e(),c("div",C,[V,$,B,t(h(r),{code:""},{code:l(()=>[D]),default:l(()=>[t(w)]),_:1}),F,A,t(h(r),{code:""},{code:l(()=>[N]),default:l(()=>[t(E)]),_:1}),T,M,t(h(r),{code:""},{code:l(()=>[R]),default:l(()=>[t(L)]),_:1}),I]))}};export{H as default};
