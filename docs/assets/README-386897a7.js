import{C as h}from"./codePreview-0428c270.js";import{d as u,r as p,o as r,a as j,w as l,b as n,e as s,c as _,u as i,f as t,g}from"./index-96df29ae.js";/* empty css                                                                    */const b="http://localhost/upload/upload.php",k=u({__name:"README.md.Virtual95ef732d",setup(o){const d=(c,a)=>{a(c.data,2)};return(c,a)=>{const e=p("ak-button"),m=p("ak-upload");return r(),j(m,{action:b,onSuccess:d},{default:l(()=>[n(e,{type:"primary"},{default:l(()=>[s("图片上传")]),_:1})]),_:1})}}}),y="http://localhost/upload/upload.php",f=u({__name:"README.md.Virtualebb5e68e",setup(o){const d=(c,a)=>{a("",2)};return(c,a)=>{const e=p("ak-upload");return r(),j(e,{action:y,listType:"picture",multiple:!0,onSuccess:d})}}}),x="http://localhost/upload/upload.php",E=u({__name:"README.md.Virtuala67aed9b",setup(o){const d=(c,a)=>{a("",2)};return(c,a)=>{const e=p("ak-upload");return r(),j(e,{action:x,drag:!0,listType:"picture",multiple:!0,onSuccess:d})}}}),w="http://localhost/upload/upload.php",v=u({__name:"README.md.Virtual1af36af8",setup(o){return(d,c)=>{const a=p("ak-img-crop");return r(),j(a,{action:w})}}}),B={class:"marked-body"},V=t("h1",{id:"upload-文件上传"},"Upload 文件上传",-1),A=t("h3",{id:"基本用法"},"基本用法",-1),S=t("p",null,"图片上传需要显示上传进度和状态时，需要在上传完成后通过回调事件更新图片地址和状态",-1),$=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-upload"),s(),t("span",{class:"hljs-attr"},":action"),s("="),t("span",{class:"hljs-string"},'"action"'),s(" @"),t("span",{class:"hljs-attr"},"success"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("图片上传"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-upload"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),s(`

  `),t("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"success"),s(" = ("),t("span",{class:"hljs-params"},"res: any, callback: any"),s(`) => {
    `),t("span",{class:"hljs-title function_"},"callback"),s("(res."),t("span",{class:"hljs-property"},"data"),s(", "),t("span",{class:"hljs-number"},"2"),s(`)
  }
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=t("h3",{id:"图片列表"},"图片列表",-1),M=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-upload"),s(`
    `),t("span",{class:"hljs-attr"},":action"),s("="),t("span",{class:"hljs-string"},'"action"'),s(`
    `),t("span",{class:"hljs-attr"},"listType"),s("="),t("span",{class:"hljs-string"},'"picture"'),s(`
    `),t("span",{class:"hljs-attr"},":multiple"),s("="),t("span",{class:"hljs-string"},'"true"'),s(`
    @`),t("span",{class:"hljs-attr"},"success"),s("="),t("span",{class:"hljs-string"},'"success"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),s(`

  `),t("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"success"),s(" = ("),t("span",{class:"hljs-params"},"res: any, callback: any"),s(`) => {
    `),t("span",{class:"hljs-title function_"},"callback"),s("("),t("span",{class:"hljs-string"},"''"),s(", "),t("span",{class:"hljs-number"},"2"),s(`)
  }
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=t("h3",{id:"拖动上传"},"拖动上传",-1),T=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-upload"),s(`
    `),t("span",{class:"hljs-attr"},":action"),s("="),t("span",{class:"hljs-string"},'"action"'),s(`
    `),t("span",{class:"hljs-attr"},":drag"),s("="),t("span",{class:"hljs-string"},'"true"'),s(`
    `),t("span",{class:"hljs-attr"},"listType"),s("="),t("span",{class:"hljs-string"},'"picture"'),s(`
    `),t("span",{class:"hljs-attr"},":multiple"),s("="),t("span",{class:"hljs-string"},'"true"'),s(`
    @`),t("span",{class:"hljs-attr"},"success"),s("="),t("span",{class:"hljs-string"},'"success"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),s(`

  `),t("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"success"),s(" = ("),t("span",{class:"hljs-params"},"res: any, callback: any"),s(`) => {
    `),t("span",{class:"hljs-title function_"},"callback"),s("("),t("span",{class:"hljs-string"},"''"),s(", "),t("span",{class:"hljs-number"},"2"),s(`)
  }
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=t("h3",{id:"裁切上传"},"裁切上传",-1),O=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-img-crop"),s(),t("span",{class:"hljs-attr"},":action"),s("="),t("span",{class:"hljs-string"},'"action"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),N=g('<h2 id="api">API</h2><h3 id="upload-props">Upload Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>modelValue</td><td>Array/Object</td><td>上传的文件，单个文件时为object</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>multiple</td><td>Boolean/false</td><td>是否支持多选文件</td></tr><tr><td>accept</td><td>string</td><td>h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>format</td><td>string</td><td>支持的文件后缀类型，多个用豆号隔开</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>auto</td><td>Boolean/true</td><td>是否自动上传文件</td></tr><tr><td>drag</td><td>Boolean/false</td><td>允许拖动上传</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁止上传状态</td></tr><tr><td>limit</td><td>number</td><td>允许上传的最大数量</td></tr><tr><td>showFileList</td><td>Boolean/true</td><td>是否显示已上传文件列表</td></tr><tr><td>listType</td><td>string/text</td><td>文件列表展示类型text/picture</td></tr></tbody></table><h3 id="upload-event">Upload Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择上传文件时触发的事件</td></tr><tr><td>error</td><td>上传错误事件</td></tr><tr><td>success</td><td>上传成功事件</td></tr><tr><td>remove</td><td>移除上传文件事件</td></tr></tbody></table><h3 id="upload-methods">Upload Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>cancelRequest</td><td>取消上传方法</td></tr><tr><td>upload</td><td>手动上传方法</td></tr></tbody></table><h3 id="imgcrop-props-图片裁切上传">ImgCrop Props 图片裁切上传</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>boxWidth</td><td>number</td><td>裁切画布的宽</td></tr><tr><td>boxHeight</td><td>number</td><td>裁切画布的高</td></tr><tr><td>imgWidth</td><td>number</td><td>裁切图片的宽</td></tr><tr><td>imgHeight</td><td>number</td><td>裁切图片的高</td></tr><tr><td>fixedScale</td><td>Boolean/true</td><td>约束比例</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>text</td><td>array</td><td>文案</td></tr></tbody></table>',9),H={__name:"README",setup(o){return(d,c)=>(r(),_("div",B,[V,A,S,n(i(h),{code:""},{code:l(()=>[$]),default:l(()=>[n(k)]),_:1}),C,n(i(h),{code:""},{code:l(()=>[M]),default:l(()=>[n(f)]),_:1}),R,n(i(h),{code:""},{code:l(()=>[T]),default:l(()=>[n(E)]),_:1}),D,n(i(h),{code:""},{code:l(()=>[O]),default:l(()=>[n(v)]),_:1}),N]))}};export{H as default};
