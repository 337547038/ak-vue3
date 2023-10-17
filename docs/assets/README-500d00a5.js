import{C as r}from"./vue-e6e5ba2d.js";import{r as g,q as j,o as e,f as c,s as u,e as s,n as E,a as v,c as k,w as l,b as t,u as h,g as a,h as f}from"./index-33e56033.js";/* empty css                                                            */const D={style:{width:"400px",height:"200px",border:"1px solid #ddd"}},C={__name:"README.md.Virtual2f333198",setup(d){const n=g(!0);return(i,p)=>{const o=j("loading");return e(),c("div",null,[u((e(),c("div",D,[s("容器区域")])),[[o,n.value]])])}}},y={style:{width:"100%",height:"200px",border:"1px solid #ddd"},"ak-loading-text":"玩命加载中..","ak-loading-spinner":"ak-icon-loading","ak-loading-background":"rgba(0, 0, 0, 0.8)"},b={__name:"README.md.Virtual472a277c",setup(d){const n=g(!0);return(i,p)=>{const o=j("loading");return e(),c("div",null,[u((e(),c("div",y,[s("容器区域")])),[[o,n.value]])])}}},x={__name:"README.md.Virtualbe9439a4",setup(d){const n=g(!1),i=()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)},p=E("Loading"),o=()=>{const m=p.loading();setTimeout(()=>{m.close()},3e3)};return(m,P)=>{const A=v("ak-button"),_=j("loading");return e(),c("div",null,[u((e(),k(A,{type:"primary",onClick:i},{default:l(()=>[s("加载")]),_:1})),[[_,n.value,void 0,{el:!0,lock:!0}]]),t(A,{type:"primary",onClick:o},{default:l(()=>[s("服务方式")]),_:1})])}}},B={class:"marked-body"},F=a("h1",{id:"loading-加载等待"},"Loading 加载等待",-1),w=a("p",null,[s("自定义指令"),a("code",null,"v-loading"),s("，只需要绑定"),a("code",null,"Boolean"),s("即可。默认状况下，"),a("code",null,"Loading"),s("会插入到绑定元素的子节点")],-1),S=a("h3",{id:"基本用法"},"基本用法",-1),L=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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

`)])],-1),T=a("h3",{id:"自定义"},"自定义",-1),V=a("p",null,[s("可自定义加载文案、图标和背景色。通过"),a("code",null,"ak-loading-text"),s("设置提示文字，"),a("code",null,"ak-loading-spinner"),s("设置图标类名，"),a("code",null,"ak-loading-background"),s("设置背景色")],-1),$=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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

`)])],-1),N=a("h3",{id:"其他加载方式"},"其他加载方式",-1),M=a("p",null,[s("支持"),a("code",null,"inject('Loading')"),s("，"),a("code",null,"this.$msg()"),s("，"),a("code",null,"getCurrentInstance().proxy.$loading()"),s("方式引用")],-1),R=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),I=f('<h2 id="api">API</h2><h3 id="loading">Loading</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>显示在加载图标下方的加载文案</td></tr><tr><td>background</td><td>String</td><td>遮罩背景色</td></tr><tr><td>spinner</td><td>String</td><td>自定义加载图标类名</td></tr><tr><td>lock</td><td>Boolean/false</td><td>锁定滚动</td></tr><tr><td>zIndex</td><td>Number</td><td>层级</td></tr><tr><td>el</td><td>标签对象</td><td>将内容插入到指定标签，默认为当前标签</td></tr></tbody></table>',3),H={__name:"README",setup(d){return(n,i)=>(e(),c("div",B,[F,w,S,t(h(r),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20v-loading%3D%22loading%22%0A%20%20%20%20%20%20style%3D%22width%3A%20400px%3B%20height%3A%20200px%3B%20border%3A%201px%20solid%20%23ddd%22%0A%20%20%20%20%20%20%3E%E5%AE%B9%E5%99%A8%E5%8C%BA%E5%9F%9F%3C%2Fdiv%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20loading%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A%0A"},{code:l(()=>[L]),default:l(()=>[t(C)]),_:1}),T,V,t(h(r),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style%3D%22width%3A%20100%25%3B%20height%3A%20200px%3B%20border%3A%201px%20solid%20%23ddd%22%0A%20%20%20%20%20%20v-loading%3D%22loading%22%0A%20%20%20%20%20%20ak-loading-text%3D%22%E7%8E%A9%E5%91%BD%E5%8A%A0%E8%BD%BD%E4%B8%AD..%22%0A%20%20%20%20%20%20ak-loading-spinner%3D%22ak-icon-loading%22%0A%20%20%20%20%20%20ak-loading-background%3D%22rgba(0%2C%200%2C%200%2C%200.8)%22%0A%20%20%20%20%20%20%3E%E5%AE%B9%E5%99%A8%E5%8C%BA%E5%9F%9F%3C%2Fdiv%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20loading%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A%0A"},{code:l(()=>[$]),default:l(()=>[t(b)]),_:1}),N,M,t(h(r),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-button%0A%20%20%20%20%20%20v-loading.el.lock%3D%22loading%22%0A%20%20%20%20%20%20type%3D%22primary%22%0A%20%20%20%20%20%20%40click%3D%22openFullScreen%22%0A%20%20%20%20%20%20%3E%E5%8A%A0%E8%BD%BD%3C%2Fak-button%0A%20%20%20%20%3E%0A%20%20%20%20%3Cak-button%20type%3D%22primary%22%20%40click%3D%22openFullScreen2%22%3E%E6%9C%8D%E5%8A%A1%E6%96%B9%E5%BC%8F%3C%2Fak-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%2C%20inject%20%7D%20from%20'vue'%0A%0A%20%20const%20loading%20%3D%20ref(false)%0A%20%20const%20openFullScreen%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%7D%2C%203000)%0A%20%20%7D%0A%20%20const%20Loading%20%3D%20inject('Loading')%0A%20%20const%20openFullScreen2%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20loading%20%3D%20Loading.loading()%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20loading.close()%0A%20%20%20%20%7D%2C%203000)%0A%20%20%7D%0A%3C%2Fscript%3E"},{code:l(()=>[R]),default:l(()=>[t(x)]),_:1}),I]))}};export{H as default};
