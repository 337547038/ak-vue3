import{C as g}from"./vue-4a2b12f2.js";import{e as _,r,a as j,o,c as u,b as n,f as A,g as a,t as f,w as l,u as d,d as s,h as D}from"./index-dd3aacc0.js";/* empty css                                                            */const E=_({__name:"README.md.Virtual9cdaf419",setup(h){const t=r(1);return(p,c)=>{const e=j("ak-pagination");return o(),u("div",null,[n(e,{total:50,current:t.value},null,8,["current"])])}}}),v={__name:"README.md.Virtualf9c468f9",setup(h){const t=r(1),p=r([10,20,30,50]),c=e=>{alert(e)};return(e,m)=>{const i=j("ak-pagination");return o(),A(i,{total:1050,current:t.value,showJumper:!0,pageSizes:p.value,pageSize:10,showTotal:!0,onChangePageSizes:c},null,8,["current","pageSizes"])}}},C={__name:"README.md.Virtual33beafb3",setup(h){const t=r(1),p=c=>{alert(c)};return(c,e)=>{const m=j("ak-pagination");return o(),u("div",null,[a("p",null,"当前页："+f(t.value),1),n(m,{total:50,current:t.value,"onUpdate:current":e[0]||(e[0]=i=>t.value=i),onChange:p,pageSize:10},null,8,["current"])])}}},S={class:"marked-body"},b=a("h1",{id:"pagination-分页"},"Pagination 分页",-1),k=a("h3",{id:"基础用法"},"基础用法",-1),z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-pagination"),s(),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"page1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=a("h3",{id:"其他选项参数"},"其他选项参数",-1),y=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-pagination"),s(`
    `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"1050"'),s(`
    `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"page1"'),s(`
    `),a("span",{class:"hljs-attr"},":showJumper"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":pageSizes"),s("="),a("span",{class:"hljs-string"},'"pageSizes"'),s(`
    `),a("span",{class:"hljs-attr"},":pageSize"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
    `),a("span",{class:"hljs-attr"},":showTotal"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    @`),a("span",{class:"hljs-attr"},"changePageSizes"),s("="),a("span",{class:"hljs-string"},'"changePageSizes"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" pageSizes = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"50"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changePageSizes"),s(" = ("),a("span",{class:"hljs-params"},"page"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s(`(page)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),B=a("h3",{id:"事件"},"事件",-1),P=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前页：{{ page }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-pagination"),s(`
      `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:current"),s("="),a("span",{class:"hljs-string"},'"page"'),s(`
      @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
      `),a("span",{class:"hljs-attr"},":pageSize"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"page"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s(`(page)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),F=D('<h2 id="api">API</h2><h3 id="pagination">Pagination</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>当前页数，支持v-model</td></tr><tr><td>total</td><td>number</td><td>总条目数</td></tr><tr><td>pageSize</td><td>number</td><td>每页显示条数</td></tr><tr><td>pagerCount</td><td>number/5</td><td>页码按钮的数量，当总页数超过该值时会折叠</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>快速跳转</td></tr><tr><td>pageSizes</td><td>number[]</td><td>每页显示个数选择器的选项设置</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>显示总记录条数</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>当小于或只有一页时是否隐藏显示</td></tr><tr><td>format</td><td>boolean/false</td><td>数值转千分制显示</td></tr></tbody></table><h3 id="pagination-event">Pagination Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>changePageSizes</td><td>每页显示条数改变事件</td></tr><tr><td>change</td><td>页码点击改变事件</td></tr></tbody></table>',5),J={__name:"README",setup(h){return(t,p)=>(o(),u("div",S,[b,k,n(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-pagination%20%3Atotal%3D%2250%22%20%3Acurrent%3D%22page1%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page1%20%3D%20ref(1)%0A%3C%2Fscript%3E%0A"},{code:l(()=>[z]),default:l(()=>[n(E)]),_:1}),w,n(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Cak-pagination%0A%20%20%20%20%3Atotal%3D%221050%22%0A%20%20%20%20%3Acurrent%3D%22page1%22%0A%20%20%20%20%3AshowJumper%3D%22true%22%0A%20%20%20%20%3ApageSizes%3D%22pageSizes%22%0A%20%20%20%20%3ApageSize%3D%2210%22%0A%20%20%20%20%3AshowTotal%3D%22true%22%0A%20%20%20%20%40changePageSizes%3D%22changePageSizes%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page1%20%3D%20ref(1)%0A%20%20const%20pageSizes%20%3D%20ref(%5B10%2C%2020%2C%2030%2C%2050%5D)%0A%20%20const%20changePageSizes%20%3D%20(page)%20%3D%3E%20%7B%0A%20%20%20%20alert(page)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:l(()=>[y]),default:l(()=>[n(v)]),_:1}),B,n(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E9%A1%B5%EF%BC%9A%7B%7B%20page%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-pagination%0A%20%20%20%20%20%20%3Atotal%3D%2250%22%0A%20%20%20%20%20%20v-model%3Acurrent%3D%22page%22%0A%20%20%20%20%20%20%40change%3D%22change%22%0A%20%20%20%20%20%20%3ApageSize%3D%2210%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page%20%3D%20ref(1)%0A%20%20const%20change%20%3D%20(page)%20%3D%3E%20%7B%0A%20%20%20%20alert(page)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:l(()=>[P]),default:l(()=>[n(C)]),_:1}),F]))}};export{J as default};
