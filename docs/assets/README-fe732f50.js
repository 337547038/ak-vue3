import{C as g}from"./codePreview-0428c270.js";import{r,o as i,a as f,h as C,c as y,e as s,t as v,b as l,w as n,i as _,f as a,u as b,g as w}from"./index-96df29ae.js";/* empty css                                                                    */const E={__name:"README.md.Virtual1f97c144",setup(o){const e=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(h,c)=>{const p=r("ak-tree");return i(),f(p,{data:e})}}},V={__name:"README.md.Virtual004345b5",setup(o){const e=[{label:"广东",open:!0,children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(h,c)=>{const p=r("ak-tree");return i(),f(p,{data:e})}}},D={__name:"README.md.Virtualf5660fb6",setup(o){const e=C("gd"),h=[{id:"gd",label:"广东",children:[{id:"gz",label:"广州",children:[{id:"th",label:"天河区"},{id:"by",label:"白云区"},{id:"yx",label:"越秀区"},{id:"hz",label:"海珠区"}]},{id:"sz",label:"深圳"},{id:"dg",label:"东莞"},{id:"fs",label:"佛山"}]},{id:"gx",label:"广西"},{id:"bj",label:"北京"}];return(c,p)=>{const t=r("ak-tree");return i(),y("p",null,[s("当前选中值："+v(e.value)+" ",1),l(t,{data:h,modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=j=>e.value=j)},null,8,["modelValue"])])}}},$={__name:"README.md.Virtuald4f6bf64",setup(o){const e=[{id:"gd",label:"广东"},{id:"gx",label:"广西"},{id:"bj",label:"北京"},{id:"sh",label:"上海",hasChild:!1}],h=(c,p)=>{if(!c.isLoad){let t=[];c.id==="gd"&&(t=[{label:"天河区",hasChild:!1},{label:"白云区",hasChild:!1}]),c.id==="gx"&&(t=[{label:"桂林市",hasChild:!1},{label:"南宁市",hasChild:!1}]),c.id==="bj"&&(t=[{label:"朝阳区",hasChild:!1},{label:"东城区",hasChild:!1}]),setTimeout(()=>{p&&p(t)},5e3)}};return(c,p)=>{const t=r("ak-tree");return i(),y("p",null,[l(t,{data:e,onClick:h,lazy:!0})])}}},z={__name:"README.md.Virtual9c3c9c1b",setup(o){const e=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],h=c=>{alert(JSON.stringify(c))};return(c,p)=>{const t=r("ak-tree");return i(),f(t,{data:e,showCheckbox:!0,onChange:h})}}},A={__name:"README.md.Virtual5e90679d",setup(o){const e=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],h=c=>{alert(JSON.stringify(c))};return(c,p)=>{const t=r("ak-button"),j=r("ak-button-group"),d=r("ak-tree");return i(),f(d,{data:e},{default:n(u=>[l(j,{style:{"margin-left":"5px"}},{default:n(()=>[l(t,{type:"text",onClick:_(k=>h(u),["stop"])},{default:n(()=>[s("添加")]),_:2},1032,["onClick"]),l(t,{type:"text",onClick:_(k=>h(u),["stop"])},{default:n(()=>[s("修改")]),_:2},1032,["onClick"]),l(t,{type:"text",onClick:_(k=>h(u),["stop"])},{default:n(()=>[s("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})}}},N=a("p",null,null,-1),B={__name:"README.md.Virtual4c1026db",setup(o){const e=C(),h=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],c=t=>{alert(JSON.stringify(t))},p=t=>{console.log(e.value.getValue(t))};return(t,j)=>{const d=r("ak-button"),u=r("ak-button-group"),k=r("ak-tree");return i(),y("div",null,[l(k,{data:h,showCheckbox:!0,ref_key:"treeEl",ref:e},{default:n(m=>[l(u,{style:{"margin-left":"5px"}},{default:n(()=>[l(d,{type:"text",onClick:_(x=>c(m),["stop"])},{default:n(()=>[s("添加")]),_:2},1032,["onClick"]),l(d,{type:"text",onClick:_(x=>c(m),["stop"])},{default:n(()=>[s("修改")]),_:2},1032,["onClick"]),l(d,{type:"text",onClick:_(x=>c(m),["stop"])},{default:n(()=>[s("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},512),N,l(u,null,{default:n(()=>[l(d,{onClick:j[0]||(j[0]=m=>p())},{default:n(()=>[s("取值")]),_:1}),l(d,{onClick:j[1]||(j[1]=m=>p(!0))},{default:n(()=>[s("取值(label)")]),_:1})]),_:1})])}}},M={class:"marked-body"},R=a("h1",{id:"tree-树"},"Tree 树",-1),S=a("h3",{id:"基本用法"},"基本用法",-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),J=a("h3",{id:"默认展开指定项"},"默认展开指定项",-1),O=a("p",null,[s("在列表数据"),a("code",null,"data"),s("里使用"),a("code",null,'open="true"'),s("可默认展开")],-1),L=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"open"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=a("h3",{id:"点击可选中值"},"点击可选中值",-1),q=a("p",null,[s("使用"),a("code",null,'v-model="string/array"'),s("，为"),a("code",null,"string"),s("时单选，"),a("code",null,"array"),s("时可多选，对应数据列表"),a("code",null,"data"),s("的"),a("code",null,"id"),s("值")],-1),I=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
    >`)]),s(`当前选中值：{{ value }}
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'gd'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gd'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gz'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'th'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'by'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'yx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'hz'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'sz'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'dg'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'fs'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'bj'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),U=a("h3",{id:"异步加载数据"},"异步加载数据",-1),F=a("p",null,[s("使用"),a("code",null,'lazy="true"'),s("，在点击展开时可异步加载数据，开启异步加载点击可返回回调方法，用于加载新数据。 返回当前项数据时会添加"),a("code",null,"isLoad"),s("属性，用于表示当前项是否已经请求过数据，可减少重复请求")],-1),G=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(),a("span",{class:"hljs-attr"},":lazy"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gd'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(` },
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'bj'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` },
    { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'sh'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(" } "),a("span",{class:"hljs-comment"},"// hasChild=false表示没有下级可加载"),s(`
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"item, resolve"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (!item."),a("span",{class:"hljs-property"},"isLoad"),s(`) {
      `),a("span",{class:"hljs-comment"},"// false表示还没展开加载过"),s(`
      `),a("span",{class:"hljs-keyword"},"let"),s(` newData = []
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'gd'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` }
        ]
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'gx'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'桂林市'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'南宁市'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` }
        ]
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'bj'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` },
          { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东城区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` }
        ]
      }
      `),a("span",{class:"hljs-comment"},"// 模拟请求数据"),s(`
      `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        resolve && `),a("span",{class:"hljs-title function_"},"resolve"),s(`(newData)
      }, `),a("span",{class:"hljs-number"},"5000"),s(`)
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),H=a("h3",{id:"支持勾选"},"支持勾选",-1),K=a("p",null,[a("code",null,'showCheckbox="true"'),s("可支持勾选，"),a("code",null,"change"),s("为勾选改变事件")],-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":showCheckbox"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),W=a("h3",{id:"可使用slot自定义显示内容"},"可使用slot自定义显示内容",-1),X=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"slot"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button-group"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 5px"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("修改"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-tree"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Y=a("h3",{id:"使用getvalue取值"},"使用getValue取值",-1),Z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":showCheckbox"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"treeEl"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"slot"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button-group"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 5px"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("修改"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-tree"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getValue()"'),s(">")]),s("取值"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getValue(true)"'),s(">")]),s("取值(label)"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" treeEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(` },
            { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(` }
          ]
        },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(` },
        { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(` }
      ]
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getValue"),s(" = ("),a("span",{class:"hljs-params"},"bool"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(treeEl."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"getValue"),s(`(bool))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),ss=w('<h2 id="api">API</h2><h3 id="tree-props">Tree Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>列表数据</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>显示勾选</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>是否异步加载</td></tr><tr><td>v-model</td><td>Array/string</td><td>选中的值，array时为多选</td></tr></tbody></table><h3 id="tree-event">Tree Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr></tbody></table><h3 id="tree-data">Tree Data</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>唯一值</td></tr><tr><td>checked</td><td>Boolean/false</td><td>当前项为勾选状态，仅当showCheckbox=true时有效</td></tr><tr><td>open</td><td>Boolean/false</td><td>是否展开当前项</td></tr><tr><td>hasChild</td><td>Boolean/false</td><td>表示当前级下没有子级可加载。仅在<code>tree</code>里设置了异步加载<code>lazy=&quot;true&quot;</code>时有效</td></tr></tbody></table>',7),ts={__name:"README",setup(o){return(e,h)=>(i(),y("div",M,[R,S,l(b(g),{code:""},{code:n(()=>[T]),default:n(()=>[l(E)]),_:1}),J,O,l(b(g),{code:""},{code:n(()=>[L]),default:n(()=>[l(V)]),_:1}),P,q,l(b(g),{code:""},{code:n(()=>[I]),default:n(()=>[l(D)]),_:1}),U,F,l(b(g),{code:""},{code:n(()=>[G]),default:n(()=>[l($)]),_:1}),H,K,l(b(g),{code:""},{code:n(()=>[Q]),default:n(()=>[l(z)]),_:1}),W,l(b(g),{code:""},{code:n(()=>[X]),default:n(()=>[l(A)]),_:1}),Y,l(b(g),{code:""},{code:n(()=>[Z]),default:n(()=>[l(B)]),_:1}),ss]))}};export{ts as default};
