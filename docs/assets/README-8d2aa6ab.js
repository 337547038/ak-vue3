import{C as o}from"./codePreview-0428c270.js";import{d as i,h as m,r as g,o as p,c as u,b as e,a as _,w as n,u as j,f as a,e as s,g as x}from"./index-96df29ae.js";/* empty css                                                                    */const f=i({__name:"README.md.Virtual5b09006a",setup(h){const l=m("");return(d,t)=>{const c=g("ak-textarea");return p(),u("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"placeholder"},null,8,["modelValue"])])}}}),v=i({__name:"README.md.Virtualbfe15264",setup(h){const l=m("不能输入");return(d,t)=>{const c=g("ak-textarea");return p(),u("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"placeholder",disabled:"disabled"},null,8,["modelValue"])])}}}),k=i({__name:"README.md.Virtual5f6be70f",setup(h){const l=m("输入些文字回车换行试试");return(d,t)=>{const c=g("ak-textarea");return p(),_(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"placeholder"},null,8,["modelValue"])}}}),w=i({__name:"README.md.Virtual33bcb6ba",setup(h){const l=m("");return(d,t)=>{const c=g("ak-textarea");return p(),u("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"placeholder",maxlength:10,showWordLimit:""},null,8,["modelValue"])])}}}),V={class:"marked-body"},b=a("h1",{id:"textarea-文本框"},"Textarea 文本框",-1),y=a("h3",{id:"基本用法"},"基本用法",-1),E=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-textarea"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"textarea1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"placeholder"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" textarea1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=a("h3",{id:"禁用"},"禁用",-1),C=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-textarea"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"textarea1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"placeholder"'),s(`
      `),a("span",{class:"hljs-attr"},"disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" textarea1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'不能输入'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=a("h3",{id:"自动高"},"自动高",-1),M=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-textarea"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"textarea1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"placeholder"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" textarea1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'输入些文字回车换行试试'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),R=a("h3",{id:"显示输入字数"},"显示输入字数",-1),S=a("p",null,[s("在使用 "),a("code",null,"maxlength"),s(" 属性限制最大输入长度的同时，可通过设置 "),a("code",null,"show-word-limit"),s(" 属性来展示字数统计")],-1),B=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-textarea"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"textarea1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"placeholder"'),s(`
      `),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
      `),a("span",{class:"hljs-attr"},"showWordLimit"),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" textarea1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),N=x('<h2 id="api">API</h2><h3 id="textarea">Textarea</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>autoHeight</td><td>boolean/true</td><td>自动高</td></tr><tr><td>width</td><td>String</td><td>要带单位px/%</td></tr><tr><td>height</td><td>String</td><td>要带单位px</td></tr><tr><td>maxHeight</td><td>String</td><td>最大高度</td></tr><tr><td>showWordLimit</td><td>boolena/false</td><td>原生属性，最大输入长度</td></tr><tr><td>maxlength</td><td>number</td><td>是否显示输入字数统计</td></tr></tbody></table>',3),T={__name:"README",setup(h){return(l,d)=>(p(),u("div",V,[b,y,e(j(o),{code:""},{code:n(()=>[E]),default:n(()=>[e(f)]),_:1}),A,e(j(o),{code:""},{code:n(()=>[C]),default:n(()=>[e(v)]),_:1}),D,e(j(o),{code:""},{code:n(()=>[M]),default:n(()=>[e(k)]),_:1}),R,S,e(j(o),{code:""},{code:n(()=>[B]),default:n(()=>[e(w)]),_:1}),N]))}};export{T as default};
