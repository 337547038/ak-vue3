import{C as j}from"./vue-4a2b12f2.js";import{a as h,o as p,c as A,b as l,g as a,r as u,w as e,u as d,d as s,h as C}from"./index-dd3aacc0.js";/* empty css                                                            */const y=a("p",null,"dark主题",-1),E=a("p",null,"trigger=click",-1),B={__name:"README.md.Virtual7cf3dfe7",setup(o){const t=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(c,r)=>{const n=h("ak-menu");return p(),A("div",null,[l(n,{items:t,mode:"horizontal"}),y,l(n,{items:t,mode:"horizontal",theme:"dark"}),E,l(n,{items:t,mode:"horizontal",trigger:"click"})])}}},D={style:{width:"200px"}},_=a("p",null,"dark主题",-1),v={__name:"README.md.Virtual210ccbf8",setup(o){const t=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(c,r)=>{const n=h("ak-menu");return p(),A("div",D,[l(n,{items:t,mode:"vertical"}),_,l(n,{items:t,mode:"vertical",theme:"dark"})])}}},w={style:{width:"200px"}},f=a("p",null,"dark主题",-1),F={__name:"README.md.Virtual911a1eed",setup(o){const t=u(!1),c=i=>{console.log("click"),console.log(i)},r=i=>{console.log("select"),console.log(i)},n=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(i,m)=>{const b=h("ak-switch"),g=h("ak-menu");return p(),A("div",w,[a("div",null,[l(b,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=k=>t.value=k)},null,8,["modelValue"])]),l(g,{items:n,mode:"vertical",collapse:t.value,onClick:c,onSelect:r},null,8,["collapse"]),f,l(g,{items:n,mode:"vertical",theme:"dark",collapse:t.value,onClick:c,onSelect:r},null,8,["collapse"])])}}},x={class:"marked-body"},N=a("h1",{id:"menu-菜单导航"},"Menu 菜单导航",-1),z=a("h3",{id:"基本用法"},"基本用法",-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),V=a("h3",{id:"垂直菜单"},"垂直菜单",-1),$=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),M=a("h3",{id:"collapse"},"Collapse",-1),S=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),R=C('<h2 id="api">API</h2><h3 id="menu">Menu</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>菜单类型，现在垂直、水平 <code>vertical、 horizontal</code>，默认<code>vertical</code></td></tr><tr><td>collapse</td><td>boolean</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td></tr><tr><td>items</td><td>Items[]</td><td>菜单内容</td></tr><tr><td>trigger</td><td>string</td><td>子菜单打开的触发方式，只在 mode 为 horizontal 时有效， &#39;hover&#39;（默认） 、 &quot;click&quot;</td></tr><tr><td>theme</td><td>string</td><td>主题颜色 <code>light(默认) 、 dark</code></td></tr><tr><td>style</td><td>CSSProperties</td><td>根节点样式</td></tr><tr><td>liHeight</td><td>number</td><td>子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果</td></tr><tr><td>openKeys</td><td>string[]</td><td>初始展开的项</td></tr><tr><td>router</td><td>boolean</td><td>是否启用router模式，开启会在点击导航时以key作为path进行路由跳转</td></tr><tr><td>selectedKey</td><td>string</td><td>当前选中的项</td></tr></tbody></table><h3 id="menu-items">Menu Items</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的名称</td></tr><tr><td>key</td><td>string</td><td>唯一标识符</td></tr><tr><td>icon</td><td>string</td><td>名称前icon图标</td></tr><tr><td>disabled</td><td>boolean</td><td>是否可用</td></tr></tbody></table><h3 id="menu-event">Menu Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td></tr><tr><td>click</td><td>点击item项时调用</td></tr></tbody></table>',7),K={__name:"README",setup(o){return(t,c)=>(p(),A("div",x,[N,z,l(d(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-menu%20%3Aitems%3Ditems%20mode%3D%22horizontal%22%20%2F%3E%0A%20%20%20%20%3Cp%3Edark%E4%B8%BB%E9%A2%98%3C%2Fp%3E%0A%20%20%20%20%3Cak-menu%20%3Aitems%3Ditems%20mode%3D%22horizontal%22%20theme%3D'dark'%20%2F%3E%0A%20%20%20%20%3Cp%3Etrigger%3Dclick%3C%2Fp%3E%0A%20%20%20%20%3Cak-menu%20%3Aitems%3Ditems%20mode%3D%22horizontal%22%20trigger%3D'click'%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aconst%20items%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86'%2C%0A%20%20%20%20key%3A%20'user'%2C%0A%20%20%20%20icon%3A%20'user'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'aa'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'ab'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Navigator%20Two'%2C%0A%20%20%20%20key%3A%20'b'%2C%0A%20%20%20%20icon%3A%20'search'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20two'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b2'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20three'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b3'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b4'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b5'%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE'%2C%0A%20%20%20%20key%3A%20'set'%2C%0A%20%20%20%20icon%3A%20'date'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%0A%5D%0A%3C%2Fscript%3E"},{code:e(()=>[T]),default:e(()=>[l(B)]),_:1}),V,l(d(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22width%3A200px%22%3E%0A%20%20%20%20%3Cak-menu%20%3Aitems%3Ditems%20mode%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%3Cp%3Edark%E4%B8%BB%E9%A2%98%3C%2Fp%3E%0A%20%20%20%20%3Cak-menu%20%3Aitems%3Ditems%20mode%3D%22vertical%22%20theme%3D'dark'%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aconst%20items%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86'%2C%0A%20%20%20%20key%3A%20'user'%2C%0A%20%20%20%20icon%3A%20'user'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'aa'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'ab'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'Navigator%20Two'%2C%0A%20%20%20%20key%3A%20'b'%2C%0A%20%20%20%20icon%3A%20'search'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20two'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b2'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20three'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b3'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b4'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'b5'%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE'%2C%0A%20%20%20%20key%3A%20'set'%2C%0A%20%20%20%20icon%3A%20'date'%2C%0A%20%20%20%20disabled%3A%20true%0A%20%20%7D%0A%5D%0A%3C%2Fscript%3E"},{code:e(()=>[$]),default:e(()=>[l(v)]),_:1}),M,l(d(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22width%3A%20200px%22%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cak-switch%20v-model%3D%22collapse%22%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cak-menu%0A%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20mode%3D%22vertical%22%0A%20%20%20%20%20%20%3Acollapse%3D%22collapse%22%0A%20%20%20%20%20%20%40click%3D%22click%22%0A%20%20%20%20%20%20%40select%3D%22select%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cp%3Edark%E4%B8%BB%E9%A2%98%3C%2Fp%3E%0A%20%20%20%20%3Cak-menu%0A%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20mode%3D%22vertical%22%0A%20%20%20%20%20%20theme%3D%22dark%22%0A%20%20%20%20%20%20%3Acollapse%3D%22collapse%22%0A%20%20%20%20%20%20%40click%3D%22click%22%0A%20%20%20%20%20%20%40select%3D%22select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20collapse%20%3D%20ref(false)%0A%20%20const%20click%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20console.log('click')%0A%20%20%20%20console.log(item)%0A%20%20%7D%0A%20%20const%20select%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20console.log('select')%0A%20%20%20%20console.log(item)%0A%20%20%7D%0A%20%20const%20items%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86'%2C%0A%20%20%20%20%20%20key%3A%20'user'%2C%0A%20%20%20%20%20%20icon%3A%20'user'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'aa'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'ab'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'Navigator%20Two'%2C%0A%20%20%20%20%20%20key%3A%20'b'%2C%0A%20%20%20%20%20%20icon%3A%20'search'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'b1'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20two'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20three'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'b3'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'b4'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'item%20one'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'b5'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE'%2C%0A%20%20%20%20%20%20key%3A%20'set'%2C%0A%20%20%20%20%20%20icon%3A%20'date'%2C%0A%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:e(()=>[S]),default:e(()=>[l(F)]),_:1}),R]))}};export{K as default};
