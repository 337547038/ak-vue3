import{C as g}from"./codePreview-0428c270.js";import{d,n as u,o as j,c as o,f as a,e as s,p as _,_ as f,b as p,w as r,u as m,g as k}from"./index-96df29ae.js";/* empty css                                                                    */const v=d({__name:"README.md.Virtual3e6766af",setup(h){const n=u("Message"),e=t=>{n.alert("这是alert的内容",{icon:t})};return(t,l)=>(j(),o("div",null,[a("p",null,[s("模拟Alert 成功 "),a("span",{class:"green",onClick:l[0]||(l[0]=c=>e(1))},"试一试")]),a("p",null,[s("模拟Alert 失败 "),a("span",{class:"green",onClick:l[1]||(l[1]=c=>e(2))},"试一试")]),a("p",null,[s("模拟Alert 警告 "),a("span",{class:"green",onClick:l[2]||(l[2]=c=>e(3))},"试一试")])]))}}),C={__name:"README.md.Virtualdaa7ede8",setup(h){const n=_(),e=()=>{n.proxy.$confirm("这是alert的内容",{icon:2,callback:t=>{alert("确认回调事件"),t()}})};return(t,l)=>(j(),o("div",null,[a("p",null,[s("模拟Confirm "),a("span",{class:"green",onClick:e},"试一试")])]))}},y={data(){return{}},methods:{alertOpen(h){this.$msg("删除成功",{icon:h})}}};function O(h,n,e,t,l,c){return j(),o("div",null,[a("p",null,[s("消息提示 成功 "),a("span",{class:"green",onClick:n[0]||(n[0]=i=>c.alertOpen(1))},"试一试")]),a("p",null,[s("消息提示 失败 "),a("span",{class:"green",onClick:n[1]||(n[1]=i=>c.alertOpen(2))},"试一试")]),a("p",null,[s("消息提示 提示 "),a("span",{class:"green",onClick:n[2]||(n[2]=i=>c.alertOpen(3))},"试一试")]),a("p",null,[s("消息提示 警告 "),a("span",{class:"green",onClick:n[3]||(n[3]=i=>c.alertOpen(4))},"试一试")])])}const $=f(y,[["render",O]]),w={class:"marked-body"},x=k('<h1 id="message-信息弹窗">Message 信息弹窗</h1><p>为方便使用，定义了<code>Dialog</code>,<code>Alert</code>,<code>Confirm</code>,<code>Msg</code>三种以适应不同场景，如果需要弹出较为复杂的内容，请使用 <code>Dialog</code>。可使用<code>inject</code>,<code>getCurrentInstance</code>和<code>Vue2</code>选项卡的方式，使用<code>this.$msg()</code>方式调用。同时定义了<code>clear</code>用于移除所有<code>message</code>提示</p><h3 id="alert">Alert</h3><p>使用<code>inject</code>注入方式调用</p>',4),A=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 成功 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(1)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 失败 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(2)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("模拟Alert 警告 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(3)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`</p
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { inject } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"message"),s(": any = "),a("span",{class:"hljs-title function_"},"inject"),s("("),a("span",{class:"hljs-string"},"'Message'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"alertOpen"),s(" = ("),a("span",{class:"hljs-params"},"type: string"),s(`) => {
    message.`),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'这是alert的内容'"),s(", { "),a("span",{class:"hljs-attr"},"icon"),s(`: type })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),V=a("h3",{id:"confirm"},"Confirm",-1),M=a("p",null,[s("使用"),a("code",null,"getCurrentInstance"),s("方式打开")],-1),b=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("模拟Confirm "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { getCurrentInstance } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" instance = "),a("span",{class:"hljs-title function_"},"getCurrentInstance"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"alertOpen"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    instance.`),a("span",{class:"hljs-property"},"proxy"),s(".$confirm("),a("span",{class:"hljs-string"},"'这是alert的内容'"),s(`, {
      `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
      `),a("span",{class:"hljs-attr"},"callback"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"close"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'确认回调事件'"),s(`)
        `),a("span",{class:"hljs-title function_"},"close"),s(`()
      }
    })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),E=a("h3",{id:"msg"},"Msg",-1),D=a("p",null,[a("code",null,"Vue2"),s("选项卡的方式，使用"),a("code",null,"this.$msg()"),s("打开")],-1),I=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 成功 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(1)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 失败 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(2)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 提示 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(3)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("消息提示 警告 "),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"alertOpen(4)"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"data"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {}
    },
    `),a("span",{class:"hljs-attr"},"methods"),s(`: {
      `),a("span",{class:"hljs-title function_"},"alertOpen"),s("("),a("span",{class:"hljs-params"},"type"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"this"),s(".$msg("),a("span",{class:"hljs-string"},"'删除成功'"),s(`, {
          `),a("span",{class:"hljs-attr"},"icon"),s(`: type
        })
      }
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),N=a("h2",{id:"api"},"API",-1),B=a("p",null,[s("所有参数详见"),a("a",{href:"/#/dialog"},"Dialog")],-1),T={__name:"README",setup(h){return(n,e)=>(j(),o("div",w,[x,p(m(g),{code:""},{code:r(()=>[A]),default:r(()=>[p(v)]),_:1}),V,M,p(m(g),{code:""},{code:r(()=>[b]),default:r(()=>[p(C)]),_:1}),E,D,p(m(g),{code:""},{code:r(()=>[I]),default:r(()=>[p($)]),_:1}),N,B]))}};export{T as default};
