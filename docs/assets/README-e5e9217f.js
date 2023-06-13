import{C as i}from"./codePreview-0428c270.js";import{d as _,h as r,r as j,o as h,c as u,b as n,a as f,f as a,t as b,w as e,u as g,g as k,e as s}from"./index-96df29ae.js";/* empty css                                                                    */const v=_({__name:"README.md.Virtual9cdaf419",setup(o){const t=r(1);return(c,p)=>{const l=j("ak-pagination");return h(),u("div",null,[n(l,{total:50,current:t.value},null,8,["current"])])}}}),w={__name:"README.md.Virtualf9c468f9",setup(o){const t=r(1),c=r([10,20,30,50]),p=l=>{alert(l)};return(l,m)=>{const d=j("ak-pagination");return h(),f(d,{total:1050,current:t.value,showJumper:!0,pageSizes:c.value,pageSize:10,showTotal:!0,onChangePageSizes:p},null,8,["current","pageSizes"])}}},S={__name:"README.md.Virtual33beafb3",setup(o){const t=r(1),c=p=>{alert(p)};return(p,l)=>{const m=j("ak-pagination");return h(),u("div",null,[a("p",null,"当前页："+b(t.value),1),n(m,{total:50,current:t.value,"onUpdate:current":l[0]||(l[0]=d=>t.value=d),onChange:c,pageSize:10},null,8,["current"])])}}},y={class:"marked-body"},z=a("h1",{id:"pagination-分页"},"Pagination 分页",-1),P=a("h3",{id:"基础用法"},"基础用法",-1),x=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-pagination"),s(),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"page1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),E=a("h3",{id:"其他选项参数"},"其他选项参数",-1),C=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),V=a("h3",{id:"事件"},"事件",-1),A=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),D=k('<h2 id="api">API</h2><h3 id="pagination">Pagination</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>当前页数，支持v-model</td></tr><tr><td>total</td><td>number</td><td>总条目数</td></tr><tr><td>pageSize</td><td>number</td><td>每页显示条数</td></tr><tr><td>pagerCount</td><td>number/5</td><td>页码按钮的数量，当总页数超过该值时会折叠</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>快速跳转</td></tr><tr><td>pageSizes</td><td>number[]</td><td>每页显示个数选择器的选项设置</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>显示总记录条数</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>当小于或只有一页时是否隐藏显示</td></tr><tr><td>format</td><td>boolean/false</td><td>数值转千分制显示</td></tr></tbody></table><h3 id="pagination-event">Pagination Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>changePageSizes</td><td>每页显示条数改变事件</td></tr><tr><td>change</td><td>页码点击改变事件</td></tr></tbody></table>',5),R={__name:"README",setup(o){return(t,c)=>(h(),u("div",y,[z,P,n(g(i),{code:""},{code:e(()=>[x]),default:e(()=>[n(v)]),_:1}),E,n(g(i),{code:""},{code:e(()=>[C]),default:e(()=>[n(w)]),_:1}),V,n(g(i),{code:""},{code:e(()=>[A]),default:e(()=>[n(S)]),_:1}),D]))}};export{R as default};
