import{C as j}from"./codePreview-0428c270.js";import{r as p,o,c as r,b as l,w as t,e as s,u as i,f as a,g as m}from"./index-96df29ae.js";/* empty css                                                                    */const _={class:"popover-demo"},g={__name:"README.md.Virtuala175c0d0",setup(h){const n=()=>{alert("点击了确定")};return(d,E)=>{const c=p("ak-button"),e=p("ak-popover");return o(),r("div",_,[l(e,{content:"这是一段内容这是一段内容确定删除吗？",confirm:"确定",cancel:"取消",callback:n},{default:t(()=>[l(c,null,{default:t(()=>[s("删除确认")]),_:1})]),_:1}),l(e,{confirm:"确定",cancel:"取消",callback:n},{content:t(()=>[s(" 这是一段内容这是一段内容确定删除吗？ ")]),default:t(()=>[l(c,null,{default:t(()=>[s("删除确认")]),_:1})]),_:1})])}}},u={class:"marked-body"},k=a("h1",{id:"popover（tooltip）-弹出框"},"popover（Tooltip） 弹出框",-1),b=a("h3",{id:"基本用法"},"基本用法",-1),f=a("p",null,[s("基于"),a("code",null,"tooltip"),s("提示")],-1),v=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"popover-demo"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-popover"),s(`
        `),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"这是一段内容这是一段内容确定删除吗？"'),s(`
        `),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"确定"'),s(`
        `),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(`
        `),a("span",{class:"hljs-attr"},":callback"),s("="),a("span",{class:"hljs-string"},'"callback"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("删除确认"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-popover"),s(">")]),s(`
     
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-popover"),s(),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"确定"'),s(),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"取消"'),s(),a("span",{class:"hljs-attr"},":callback"),s("="),a("span",{class:"hljs-string"},'"callback"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("删除确认"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(" 这是一段内容这是一段内容确定删除吗？ "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-popover"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"callback"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'点击了确定'"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),x=m('<h2 id="api">API</h2><h3 id="popover-props">Popover Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>confirm</td><td>string</td><td>确认按钮文案</td></tr><tr><td>cancel</td><td>string</td><td>取消按钮文案</td></tr><tr><td>callback</td><td>function</td><td>确认按钮事件</td></tr><tr><td>-</td><td>-</td><td>其他同<a href="/#/tooltip">Tooltip</a></td></tr></tbody></table>',3),C={__name:"README",setup(h){return(n,d)=>(o(),r("div",u,[k,b,f,l(i(j),{code:""},{code:t(()=>[v]),default:t(()=>[l(g)]),_:1}),x]))}};export{C as default};
