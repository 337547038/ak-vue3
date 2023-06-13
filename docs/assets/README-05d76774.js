import{C as d}from"./codePreview-0428c270.js";import{r as p,o as i,c as j,b as l,f as a,h as _,w as e,u as g,g as y,e as s}from"./index-96df29ae.js";/* empty css                                                                    */const v=a("p",null,"dark主题",-1),w=a("p",null,"trigger=click",-1),f={__name:"README.md.Virtual7cf3dfe7",setup(o){const n=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(c,r)=>{const t=p("ak-menu");return i(),j("div",null,[l(t,{items:n,mode:"horizontal"}),v,l(t,{items:n,mode:"horizontal",theme:"dark"}),w,l(t,{items:n,mode:"horizontal",trigger:"click"})])}}},x={style:{width:"200px"}},E=a("p",null,"dark主题",-1),N={__name:"README.md.Virtual210ccbf8",setup(o){const n=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(c,r)=>{const t=p("ak-menu");return i(),j("div",x,[l(t,{items:n,mode:"vertical"}),E,l(t,{items:n,mode:"vertical",theme:"dark"})])}}},V={style:{width:"200px"}},$=a("p",null,"dark主题",-1),z={__name:"README.md.Virtual911a1eed",setup(o){const n=_(!1),c=h=>{console.log("click"),console.log(h)},r=h=>{console.log("select"),console.log(h)},t=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(h,m)=>{const k=p("ak-switch"),b=p("ak-menu");return i(),j("div",V,[a("div",null,[l(k,{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=u=>n.value=u)},null,8,["modelValue"])]),l(b,{items:t,mode:"vertical",collapse:n.value,onClick:c,onSelect:r},null,8,["collapse"]),$,l(b,{items:t,mode:"vertical",theme:"dark",collapse:n.value,onClick:c,onSelect:r},null,8,["collapse"])])}}},C={class:"marked-body"},M=a("h1",{id:"menu-菜单导航"},"Menu 菜单导航",-1),T=a("h3",{id:"基本用法"},"基本用法",-1),A=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},"items"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("dark主题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},"items"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},"'dark'"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("trigger=click"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},"items"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},"'click'"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"const"),s(` items = [
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户管理'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户列表'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'aa'"),s(`
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'添加用户'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'ab'"),s(`
      }
    ]
  },
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Navigator Two'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'search'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b1'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item two'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b2'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item three'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b3'"),s(`,
          }
        ]
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b4'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b5'"),s(`,
      }
    ]
  },
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'系统设置'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'set'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`,
    `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
  }
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),S=a("h3",{id:"垂直菜单"},"垂直菜单",-1),D=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width:200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},"items"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("dark主题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},"items"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},"'dark'"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"const"),s(` items = [
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户管理'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户列表'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'aa'"),s(`
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'添加用户'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'ab'"),s(`
      }
    ]
  },
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Navigator Two'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'search'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b1'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item two'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b2'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item three'"),s(`,
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b3'"),s(`,
          }
        ]
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b4'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b5'"),s(`,
      }
    ]
  },
  {
    `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'系统设置'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'set'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`,
    `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
  }
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),R=a("h3",{id:"collapse"},"Collapse",-1),B=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"collapse"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(`
      `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
      `),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
      `),a("span",{class:"hljs-attr"},":collapse"),s("="),a("span",{class:"hljs-string"},'"collapse"'),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(`
      @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"select"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("dark主题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-menu"),s(`
      `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
      `),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
      `),a("span",{class:"hljs-attr"},"theme"),s("="),a("span",{class:"hljs-string"},'"dark"'),s(`
      `),a("span",{class:"hljs-attr"},":collapse"),s("="),a("span",{class:"hljs-string"},'"collapse"'),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(`
      @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"select"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" collapse = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'click'"),s(`)
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item)
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"select"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'select'"),s(`)
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item)
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(` items = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户管理'"),s(`,
      `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
      `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'user'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'用户列表'"),s(`,
          `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'aa'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'添加用户'"),s(`,
          `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'ab'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Navigator Two'"),s(`,
      `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b'"),s(`,
      `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'search'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
          `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item two'"),s(`,
              `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b2'"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item three'"),s(`,
              `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b3'"),s(`
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
          `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b4'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'item one'"),s(`,
          `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'b5'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'系统设置'"),s(`,
      `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'set'"),s(`,
      `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`,
      `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=y('<h2 id="api">API</h2><h3 id="menu">Menu</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>菜单类型，现在垂直、水平 <code>vertical、 horizontal</code>，默认<code>vertical</code></td></tr><tr><td>collapse</td><td>boolean</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td></tr><tr><td>items</td><td>Items[]</td><td>菜单内容</td></tr><tr><td>trigger</td><td>string</td><td>子菜单打开的触发方式，只在 mode 为 horizontal 时有效， &#39;hover&#39;（默认） 、 &quot;click&quot;</td></tr><tr><td>theme</td><td>string</td><td>主题颜色 <code>light(默认) 、 dark</code></td></tr><tr><td>style</td><td>CSSProperties</td><td>根节点样式</td></tr><tr><td>liHeight</td><td>number</td><td>子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果</td></tr><tr><td>openKeys</td><td>string[]</td><td>初始展开的项</td></tr><tr><td>router</td><td>boolean</td><td>是否启用router模式，开启会在点击导航时以key作为path进行路由跳转</td></tr><tr><td>selectedKey</td><td>string</td><td>当前选中的项</td></tr></tbody></table><h3 id="menu-items">Menu Items</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的名称</td></tr><tr><td>key</td><td>string</td><td>唯一标识符</td></tr><tr><td>icon</td><td>string</td><td>名称前icon图标</td></tr><tr><td>disabled</td><td>boolean</td><td>是否可用</td></tr></tbody></table><h3 id="menu-event">Menu Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td></tr><tr><td>click</td><td>点击item项时调用</td></tr></tbody></table>',7),H={__name:"README",setup(o){return(n,c)=>(i(),j("div",C,[M,T,l(g(d),{code:""},{code:e(()=>[A]),default:e(()=>[l(f)]),_:1}),S,l(g(d),{code:""},{code:e(()=>[D]),default:e(()=>[l(N)]),_:1}),R,l(g(d),{code:""},{code:e(()=>[B]),default:e(()=>[l(z)]),_:1}),I]))}};export{H as default};
