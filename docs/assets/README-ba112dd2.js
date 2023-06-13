import{C as _}from"./codePreview-0428c270.js";import{d as v,h as i,r,o as d,c as g,f as a,e as s,b as c,w as l,F as b,u as f,g as y}from"./index-96df29ae.js";/* empty css                                                                    */const $=a("p",null,"窗口内容，可包含任何内容",-1),V=a("p",null,"就是样式丑了点点",-1),w=v({__name:"README.md.Virtual3ea09e8c",setup(m){const n=i(!1);return(o,t)=>{const e=r("ak-dialog");return d(),g("div",null,[a("p",null,[s(" 使用参数visible显示隐藏 "),a("span",{onClick:t[0]||(t[0]=p=>n.value=!0),class:"green"},"试一试")]),c(e,{title:"title",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=p=>n.value=p)},{default:l(()=>[$,V]),_:1},8,["modelValue"]),a("p",null,[s(" 使用组件open方法打开 "),a("span",{onClick:t[2]||(t[2]=p=>o.$refs.openDialog.open()),class:"green"},"试一试")]),c(e,{title:"title",ref:"openDialog",class:"test-dialog"},{default:l(()=>[s("窗口内容，可包含任何内容 ")]),_:1},512)])}}}),C=a("p",null,"这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题",-1),x=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),D=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),E=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),U=a("p",null,"这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题",-1),M=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),A=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),R=a("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),N=v({__name:"README.md.Virtualb70fcffa",setup(m){const n=i(!1),o=i(!1);return(t,e)=>{const p=r("ak-dialog");return d(),g("div",null,[a("p",null,[s(" slot设置的标题 "),a("span",{onClick:e[0]||(e[0]=h=>n.value=!0),class:"green"},"试一试")]),c(p,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=h=>n.value=h)},{title:l(()=>[s("通过slot设标题")]),default:l(()=>[C,x,D,E]),_:1},8,["modelValue"]),a("p",null,[s(" 没有标题的弹窗"),a("span",{onClick:e[2]||(e[2]=h=>o.value=!0),class:"green"},"试一试")]),c(p,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=h=>o.value=h)},{default:l(()=>[U,M,A,R]),_:1},8,["modelValue"])])}}}),S=a("p",null,"设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条",-1),B=a("p",{style:{height:"200px"}},null,-1),T=a("p",null,"设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条",-1),z={__name:"README.md.Virtual11f365a5",setup(m){const n=i(!1);return(o,t)=>{const e=r("ak-dialog");return d(),g(b,null,[a("span",{onClick:t[0]||(t[0]=p=>n.value=!0),class:"green"},"试一试"),c(e,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=p=>n.value=p),title:"title",width:"400px",height:"200px"},{default:l(()=>[S,B,T]),_:1},8,["modelValue"])],64)}}},F=a("p",null,"这是按钮的 dialog 弹窗内容",-1),I=a("p",null,"默认情况下点击按钮后将关闭窗口",-1),P=a("p",null,"绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭",-1),q=a("p",null,"绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭",-1),G=v({__name:"README.md.Virtual285566d7",setup(m){const n=i(!1),o=i(!1),t=i(!1),e=h=>{alert("确认关闭"),h()},p=h=>{alert("你点击了"+h+"，可使用return true或使用close方法可关闭")};return(h,j)=>{const k=r("ak-dialog");return d(),g("div",null,[a("p",null,[s(" 添加确认和取消按钮"),a("span",{class:"green",onClick:j[0]||(j[0]=u=>n.value=!0)},"试一试")]),c(k,{modelValue:n.value,"onUpdate:modelValue":j[1]||(j[1]=u=>n.value=u),title:"title",confirm:"confirm",cancel:"cancel"},{default:l(()=>[F,I]),_:1},8,["modelValue"]),a("p",null,[s(" 绑定callback方法"),a("span",{class:"green",onClick:j[2]||(j[2]=u=>o.value=!0)},"试一试")]),c(k,{modelValue:o.value,"onUpdate:modelValue":j[3]||(j[3]=u=>o.value=u),title:"title",confirm:"confirm",cancel:"cancel",callback:e},{default:l(()=>[P]),_:1},8,["modelValue"]),a("p",null,[s(" 绑定beforeClose方法"),a("span",{class:"green",onClick:j[4]||(j[4]=u=>t.value=!0)},"试一试")]),c(k,{modelValue:t.value,"onUpdate:modelValue":j[5]||(j[5]=u=>t.value=u),title:"title",confirm:"confirm",cancel:"cancel","before-close":p},{default:l(()=>[q]),_:1},8,["modelValue"])])}}}),H=a("p",null,"这是的 dialog 弹窗内容",-1),J=a("p",null,"这是一个会自动关闭的弹窗",-1),K=v({__name:"README.md.Virtual2df34769",setup(m){const n=i(!1);return(o,t)=>{const e=r("ak-dialog");return d(),g("div",null,[a("span",{class:"green",onClick:t[0]||(t[0]=p=>n.value=!0)},"试一试"),c(e,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=p=>n.value=p),title:"title","auto-close":10},{default:l(()=>[H,J]),_:1},8,["modelValue"])])}}}),L=a("p",null,"这是的 dialog 弹窗内容",-1),O=a("p",null," ",-1),Q=a("a",{href:"javascript:;",class:"green"},"点击这里打开内层弹窗口",-1),W=[Q],X=a("p",null," ",-1),Y=a("p",null,"这是的 dialog 弹窗内容",-1),Z=a("p",null,null,-1),ss=v({__name:"README.md.Virtual96ab6ba6",setup(m){const n=i(!1),o=i(!1);return(t,e)=>{const p=r("ak-dialog");return d(),g("div",null,[a("span",{class:"green",onClick:e[0]||(e[0]=h=>n.value=!0)},"试一试"),c(p,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=h=>n.value=h),title:"title"},{default:l(()=>[L,O,a("p",{onClick:e[1]||(e[1]=h=>o.value=!0)},W),X,Y,Z]),_:1},8,["modelValue"]),c(p,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=h=>o.value=h),title:"title",width:"300px"},{default:l(()=>[s("内层弹窗")]),_:1},8,["modelValue"])])}}}),as=a("p",null,"这是的 dialog 弹窗内容",-1),ls=a("p",null,null,-1),ns=v({__name:"README.md.Virtual2323f2d3",setup(m){const n=i(!1);return(o,t)=>{const e=r("ak-button"),p=r("ak-dialog");return d(),g("div",null,[a("span",{class:"green",onClick:t[0]||(t[0]=h=>n.value=!0)},"试一试"),c(p,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=h=>n.value=h),title:"title"},{footer:l(()=>[c(e,null,{default:l(()=>[s("取消")]),_:1}),c(e,{type:"primary"},{default:l(()=>[s("确定")]),_:1}),c(e,{type:"primary"},{default:l(()=>[s("提交")]),_:1})]),default:l(()=>[as,ls]),_:1},8,["modelValue"])])}}}),ts=a("p",null,"这是的 dialog 弹窗内容",-1),es=a("p",null,"可通过点击标题栏移动窗口位置",-1),cs=v({__name:"README.md.Virtualdb68d60e",setup(m){const n=i(!1);return(o,t)=>{const e=r("ak-dialog");return d(),g("div",null,[a("span",{class:"green",onClick:t[0]||(t[0]=p=>n.value=!0)},"试一试"),c(e,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=p=>n.value=p),title:"title",move:!0},{default:l(()=>[ts,es]),_:1},8,["modelValue"])])}}}),ps={class:"marked-body"},hs=a("h1",{id:"dialog-弹层对话框"},"Dialog 弹层对话框",-1),os=a("h3",{id:"基本用法"},"基本用法",-1),js=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      使用参数visible显示隐藏
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible1 = true"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("窗口内容，可包含任何内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("就是样式丑了点点"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      使用组件open方法打开
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.openDialog.open()"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"openDialog"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test-dialog"'),s(`
      >`)]),s(`窗口内容，可包含任何内容
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),is=a("h3",{id:"标题设置"},"标题设置",-1),rs=a("p",null,"标题可设置为空或通过slot设置，以满足各种不同的使用环境",-1),ds=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      slot设置的标题 `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("通过slot设标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      没有标题的弹窗`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible1 = true"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个通过slot设标题的 dialog 弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" visible1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),gs=a("h3",{id:"设定窗宽高"},"设定窗宽高",-1),ms=a("p",null,[s("一般情况不需要设"),a("code",null,"height"),s("，这个高是指弹窗主体内容的高，适用于弹窗内容区需要滚动的时候")],-1),us=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"400px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_s=a("h3",{id:"按钮事件"},"按钮事件",-1),fs=a("p",null,[s("默认下点击按钮是关闭弹窗口的，可通过"),a("code",null,"beforeClose"),s("接收点击事件，根据实现按需关闭。"),a("code",null,"callback"),s("同"),a("code",null,"beforeClose"),s("，"),a("code",null,"callback"),s("只针对确认事件。"),a("code",null,"beforeClose "),s("它将会阻止窗口的关闭事件，需另外调用方法关闭")],-1),vs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      添加确认和取消按钮`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(`
        >`)]),s(`试一试</span
      >
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(`
      `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
      `),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
      `),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是按钮的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("默认情况下点击按钮后将关闭窗口"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      绑定callback方法`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible1 = true"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible1"'),s(`
      `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
      `),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
      `),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(`
      `),a("span",{class:"hljs-attr"},":callback"),s("="),a("span",{class:"hljs-string"},'"callback"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      绑定beforeClose方法`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible2 = true"'),s(`
        >`)]),s(`试一试</span
      >
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible2"'),s(`
      `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
      `),a("span",{class:"hljs-attr"},"confirm"),s("="),a("span",{class:"hljs-string"},'"confirm"'),s(`
      `),a("span",{class:"hljs-attr"},"cancel"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(`
      `),a("span",{class:"hljs-attr"},":before-close"),s("="),a("span",{class:"hljs-string"},'"beforeClose"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" visible1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" visible2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"callback"),s(" = ("),a("span",{class:"hljs-params"},[s("close: () => "),a("span",{class:"hljs-keyword"},"void")]),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'确认关闭'"),s(`)
    `),a("span",{class:"hljs-title function_"},"close"),s(`()
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeClose"),s(" = ("),a("span",{class:"hljs-params"},"type: string"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'你点击了'"),s(" + type + "),a("span",{class:"hljs-string"},"'，可使用return true或使用close方法可关闭'"),s(`)
    `),a("span",{class:"hljs-comment"},"// return true"),s(`
    `),a("span",{class:"hljs-comment"},"// close()"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),ks=a("h3",{id:"自动关闭"},"自动关闭",-1),bs=a("p",null,[s("通过设定"),a("code",null,"auto-close"),s("设置关闭时间，可自动关闭窗。同时可使用"),a("code",null,"closeTips"),s("修改倒计时提示语")],-1),ys=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":auto-close"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是一个会自动关闭的弹窗"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),$s=a("h3",{id:"嵌套弹窗"},"嵌套弹窗",-1),Vs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-symbol"},"&nbsp;"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible1 = true"'),s(`
        >`)]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(),a("span",{class:"hljs-attr"},"href"),s("="),a("span",{class:"hljs-string"},'"javascript:;"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(">")]),s("点击这里打开内层弹窗口"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`</p
      >
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-symbol"},"&nbsp;"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible1"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"300px"'),s(`
      >`)]),s(`内层弹窗</ak-dialog
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" visible1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),ws=a("h3",{id:"使用slotfooter自定按钮"},'使用slot="footer"自定按钮',-1),Cs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("取消"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("确定"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("提交"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),xs=a("h3",{id:"可拖动"},"可拖动",-1),Ds=a("p",null,[s("通过设置"),a("code",null,'move="true"'),s("可拖动改变窗口位置")],-1),Es=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"green"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"visible = true"'),s(">")]),s("试一试"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dialog"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"visible"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},":move"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("这是的 dialog 弹窗内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("可通过点击标题栏移动窗口位置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dialog"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" visible = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Us=y('<h2 id="api">API</h2><h3 id="dialog">Dialog</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>boolean/false</td><td>显示隐藏 Dialog</td></tr><tr><td>title</td><td>string</td><td>Dialog 的标题，也可通过具名 slot 方式</td></tr><tr><td>content</td><td>null</td><td>Dialog 的内容，建议使用slot方式</td></tr><tr><td>width</td><td>string</td><td>Dialog 的宽度</td></tr><tr><td>height</td><td>string</td><td>Dialog 的高度，这里是指弹窗内容区域的高度，溢出时显示滚动条，一般情况下不需要设置</td></tr><tr><td>top</td><td>string</td><td>Dialog 距离浏览器顶部的距离，设置了<code>center</code>后样式会被覆盖</td></tr><tr><td>className</td><td>string</td><td>Dialog 样式名</td></tr><tr><td>confirm</td><td>string</td><td>确认按钮，点击默认关闭窗口</td></tr><tr><td>cancel</td><td>string</td><td>取消按钮，点击默认关闭窗口</td></tr><tr><td>beforeClose</td><td>function</td><td>关闭前的回调，会阻止 Dialog 的关闭。function(type,close),type=close/confirm/cancel/modal 表示点了哪里关闭，close 方法用于关闭 Dialog</td></tr><tr><td>callback</td><td>function</td><td>确定回调比较常用而添加，同<code>beforeClose</code>，相当于type=confirm，减少对type的判断。根据需求和<code>beforeClose</code>二选一使用</td></tr><tr><td>modal</td><td>boolean/true</td><td>是否需要遮罩层</td></tr><tr><td>closeModal</td><td>boolean/true</td><td>是否可以通过点击 modal 关闭 Dialog</td></tr><tr><td>appendToBody</td><td>boolean/true</td><td>Dialog 自身是否插入至 body 元素上</td></tr><tr><td>lockScroll</td><td>boolean/true</td><td>是否在 Dialog 出现时将 body 滚动锁定</td></tr><tr><td>showClose</td><td>boolean/true</td><td>是否显示关闭按钮，点击默认关闭窗口</td></tr><tr><td>move</td><td>boolean/false</td><td>允许拖动窗口</td></tr><tr><td>autoClose</td><td>number/0</td><td>自动关闭时间，单位秒。0为不自动关闭</td></tr><tr><td>closeTips</td><td>string</td><td>自动关闭倒计时提示语，默认<code>S秒后自动关闭</code>大写S会被替换成实际时间</td></tr><tr><td>animation</td><td>string</td><td>动画样式名，可选<code>zoom</code>,<code>fade</code></td></tr><tr><td>center</td><td>boolean/true</td><td>居中对齐</td></tr><tr><td>icon</td><td>number/0</td><td>用于展示常见的alert提示显示对应的icon图标，1成功，2失败，3提示，4警告。其它的可通过添加样式控制</td></tr><tr><td>zIndex</td><td>number</td><td>弹层的z-index样式</td></tr></tbody></table><h3 id="dialog-slot">Dialog Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>尾部内容</td></tr></tbody></table><h3 id="dialog-methods">Dialog Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>打开窗口，使用此方法打开时不支持v-model双向绑定</td></tr><tr><td>close</td><td>关闭窗口</td></tr></tbody></table>',7),Ns={__name:"README",setup(m){return(n,o)=>(d(),g("div",ps,[hs,os,c(f(_),{code:""},{code:l(()=>[js]),default:l(()=>[c(w)]),_:1}),is,rs,c(f(_),{code:""},{code:l(()=>[ds]),default:l(()=>[c(N)]),_:1}),gs,ms,c(f(_),{code:""},{code:l(()=>[us]),default:l(()=>[c(z)]),_:1}),_s,fs,c(f(_),{code:""},{code:l(()=>[vs]),default:l(()=>[c(G)]),_:1}),ks,bs,c(f(_),{code:""},{code:l(()=>[ys]),default:l(()=>[c(K)]),_:1}),$s,c(f(_),{code:""},{code:l(()=>[Vs]),default:l(()=>[c(ss)]),_:1}),ws,c(f(_),{code:""},{code:l(()=>[Cs]),default:l(()=>[c(ns)]),_:1}),xs,Ds,c(f(_),{code:""},{code:l(()=>[Es]),default:l(()=>[c(cs)]),_:1}),Us]))}};export{Ns as default};
