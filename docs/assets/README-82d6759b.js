import{C as _}from"./codePreview-0428c270.js";import{_ as k,r as o,o as e,a as f,w as l,f as a,c,F as h,j,b as n,e as s,t as i,u,g as b}from"./index-96df29ae.js";/* empty css                                                                    */const y={};function x(g,m){const r=o("ak-dropdown-item"),d=o("ak-dropdown");return e(),f(d,null,{dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,p=>n(r,{key:p},{default:l(()=>[s("菜单选项"+i(p),1)]),_:2},1024)),64))])]),default:l(()=>[s(" 下拉菜单 ")]),_:1})}const v=k(y,[["render",x]]),$={},D=a("i",{class:"icon-arrow"},null,-1),B=a("span",null,"文字无触发事件",-1),V=a("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1),C=a("i",{class:"icon-arrow"},null,-1),E=a("span",null,"点击箭头下拉",-1),N=a("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1);function S(g,m){const r=o("ak-button"),d=o("ak-dropdown-item"),p=o("ak-dropdown");return e(),c("div",null,[n(p,null,{dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,t=>n(d,{key:t},{default:l(()=>[s("2菜单选项"+i(t),1)]),_:2},1024)),64))])]),default:l(()=>[n(r,null,{default:l(()=>[s("下拉菜单"),D]),_:1})]),_:1}),n(p,{style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:l(()=>[V]),dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,t=>n(d,{key:t},{default:l(()=>[s("2菜单选项"+i(t),1)]),_:2},1024)),64))])]),default:l(()=>[B]),_:1}),n(p,{trigger:"click"},{dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,t=>n(d,{key:t},{default:l(()=>[s("2菜单选项"+i(t),1)]),_:2},1024)),64))])]),default:l(()=>[n(r,null,{default:l(()=>[s("点击下拉"),C]),_:1})]),_:1}),n(p,{trigger:"click",style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:l(()=>[N]),dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,t=>n(d,{key:t},{default:l(()=>[s("2菜单选项"+i(t),1)]),_:2},1024)),64))])]),default:l(()=>[E]),_:1})])}const A=k($,[["render",S]]),M={__name:"README.md.Virtualf59c4740",setup(g){const m=()=>{alert("菜单选项")};return(r,d)=>{const p=o("ak-dropdown-item"),t=o("ak-dropdown");return e(),f(t,{ref:"dropdown"},{dropdown:l(()=>[a("ul",null,[(e(),c(h,null,j(5,w=>n(p,{onClick:m,key:w},{default:l(()=>[s("菜单选项"+i(w),1)]),_:2},1024)),64))])]),default:l(()=>[s(" 下拉菜单 ")]),_:1},512)}}},F={class:"marked-body"},I=a("h1",{id:"dropdown-下拉菜单"},"Dropdown 下拉菜单",-1),P=a("h3",{id:"用法"},"用法",-1),R=a("p",null,[s("通过具名"),a("code",null,"slot"),s("为"),a("code",null,"dropdown"),s(" 来设置下拉菜单。默认情况下，下拉按钮只要"),a("code",null,"hover"),s("即可，无需点击也会显示下拉菜单")],-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
    下拉菜单
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
          >`)]),s(`菜单选项{{ item }}</ak-dropdown-item
        >
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),L=a("h3",{id:"触发对象"},"触发对象",-1),U=a("p",null,[s("通过具名"),a("code",null,"slot"),s("为"),a("code",null,"dropdown"),s(" 来设置下拉菜单。默认情况下，下拉按钮只要"),a("code",null,"hover"),s("即可，无需点击也会显示下拉菜单")],-1),q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("下拉菜单"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"i"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon-arrow"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"i"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
            >`)]),s(`2菜单选项{{ item }}</ak-dropdown-item
          >
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"border: 1px solid #ddd; padding: 8px 12px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("文字无触发事件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"trigger"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"i"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon-arrow"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 15px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"i"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
            >`)]),s(`2菜单选项{{ item }}</ak-dropdown-item
          >
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"click"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s("点击下拉"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"i"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon-arrow"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"i"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
            >`)]),s(`2菜单选项{{ item }}</ak-dropdown-item
          >
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(`
      `),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"click"'),s(`
      `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"border: 1px solid #ddd; padding: 8px 12px"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("点击箭头下拉"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"trigger"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"i"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon-arrow"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 15px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"i"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
            >`)]),s(`2菜单选项{{ item }}</ak-dropdown-item
          >
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),z=a("h3",{id:"事件"},"事件",-1),G=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"dropdown"'),s(">")]),s(`
    下拉菜单
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"dropdown"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-dropdown-item"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in 5"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(`
          >`)]),s(`菜单选项{{ item }}</ak-dropdown-item
        >
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ul"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-dropdown"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'菜单选项'"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),H=b('<h2 id="api">API</h2><h3 id="dropdown">Dropdown</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>trigger</td><td>String/hover</td><td>触发下拉的行为,hover和click</td></tr><tr><td>appendToBody</td><td>Boolean/false</td><td>插入到body</td></tr><tr><td>direction</td><td>Number/0</td><td>下拉弹出方向，0自动，1向上，2向下</td></tr><tr><td>downClass</td><td>string</td><td>展开面板类名</td></tr></tbody></table><h3 id="dropdownitem">DropdownItem</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>disabled</td><td>Boolean/false</td><td>禁用状态</td></tr><tr><td>className</td><td>String</td><td>类名</td></tr></tbody></table><h3 id="dropdown-event">Dropdown Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr><tr><td>toggle</td><td>展开或收起下拉事件,function(down){true为展开状态,false收起}</td></tr></tbody></table><h3 id="dropdown-methods">Dropdown Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>slideUp</td><td>用于收起下拉，仅当<code>trigger</code>为<code>click</code>时</td></tr></tbody></table><h3 id="dropdown-slot">Dropdown Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>dropdown</td><td>下拉内容</td></tr><tr><td>trigger</td><td>触发下拉标签</td></tr></tbody></table>',11),Q={__name:"README",setup(g){return(m,r)=>(e(),c("div",F,[I,P,R,n(u(_),{code:""},{code:l(()=>[T]),default:l(()=>[n(v)]),_:1}),L,U,n(u(_),{code:""},{code:l(()=>[q]),default:l(()=>[n(A)]),_:1}),z,n(u(_),{code:""},{code:l(()=>[G]),default:l(()=>[n(M)]),_:1}),H]))}};export{Q as default};
