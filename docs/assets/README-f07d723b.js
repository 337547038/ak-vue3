import{a as h,o as m,c as u,b as t,g as s,r as g,_ as y,n as v,t as _,d as f,h as w,i as q,j as d,f as b}from"./index-6c3c2d70.js";const $=s("p",null,"dark主题",-1),C=s("p",null,"trigger=click",-1),A={__name:"README.md.vdpv_0",setup(n){const a=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(p,c)=>{const l=h("ak-menu");return m(),u("div",null,[t(l,{items:a,mode:"horizontal"}),$,t(l,{items:a,mode:"horizontal",theme:"dark"}),C,t(l,{items:a,mode:"horizontal",trigger:"click"})])}}},H={style:{width:"200px"}},I=s("p",null,"dark主题",-1),M={__name:"README.md.vdpv_1",setup(n){const a=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(p,c)=>{const l=h("ak-menu");return m(),u("div",H,[t(l,{items:a,mode:"vertical"}),I,t(l,{items:a,mode:"vertical",theme:"dark"})])}}},E={style:{width:"200px"}},R=s("p",null,"dark主题",-1),N={__name:"README.md.vdpv_2",setup(n){const a=g(!1),p=e=>{console.log("click"),console.log(e)},c=e=>{console.log("select"),console.log(e)},l=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(e,i)=>{const o=h("ak-switch"),r=h("ak-menu");return m(),u("div",E,[s("div",null,[t(o,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=j=>a.value=j)},null,8,["modelValue"])]),t(r,{items:l,mode:"vertical",collapse:a.value,onClick:p,onSelect:c},null,8,["collapse"]),R,t(r,{items:l,mode:"vertical",theme:"dark",collapse:a.value,onClick:p,onSelect:c},null,8,["collapse"])])}}},k=f({components:{vdpv_0:A,vdpv_1:M,vdpv_2:N},setup(n){const a=g(),p=g(),c=g(),l=[a,p,c],e=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:o=>{const r="vdpv_"+o;e[r+"Height"]===0?e[r+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:e[r+"Height"]=0},...q(e),vdpv_0Ref:a,vdpv_1Ref:p,vdpv_2Ref:c}}});k.$vd={matter:{},toc:[{content:"Menu 菜单导航",anchor:"menu-菜单导航",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"垂直菜单",anchor:"垂直菜单",level:3},{content:"Collapse",anchor:"collapse",level:3},{content:"API",anchor:"api",level:2},{content:"Menu",anchor:"menu",level:3},{content:"Menu Items",anchor:"menu-items",level:3},{content:"Menu Event",anchor:"menu-event",level:3}]};const z=k,S={class:"vuedoc"},T=d('<h1 id="menu-菜单导航" data-source-line="1"><a class="markdownIt-Anchor" href="#menu-菜单导航">#</a> Menu 菜单导航</h1><h3 id="基本用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),V={class:"vuedoc-demo"},x={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},P=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>trigger=click<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&#39;click&#39;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">const</span> items = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>
      }
    ]
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,
            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>,
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,
            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>,
          }
        ]
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>,
      }
    ]
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
  }
]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),K=[P],U=s("h3",{id:"垂直菜单","data-source-line":"71"},[s("a",{class:"markdownIt-Anchor",href:"#垂直菜单"},"#"),b(" 垂直菜单")],-1),F=s("pre",{style:{display:"none"}},null,-1),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},L={class:"vuedoc-demo__preview"},O={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Q=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:200px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">const</span> items = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>
      }
    ]
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,
            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>,
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,
            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>,
          }
        ]
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>,
      }
    ]
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
  }
]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),W=[Q],X=s("h3",{id:"collapse","data-source-line":"137"},[s("a",{class:"markdownIt-Anchor",href:"#collapse"},"#"),b(" Collapse")],-1),Y=s("pre",{style:{display:"none"}},null,-1),Z={class:"vuedoc-demo"},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ls=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;collapse&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span>
      <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span>
      <span class="hljs-attr">:collapse</span>=<span class="hljs-string">&quot;collapse&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>
      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;select&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span>
      <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span>
      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>
      <span class="hljs-attr">:collapse</span>=<span class="hljs-string">&quot;collapse&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>
      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;select&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> collapse = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;click&#39;</span>)
    <span class="hljs-built_in">console</span>.log(item)
  }
  <span class="hljs-keyword">const</span> select = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;select&#39;</span>)
    <span class="hljs-built_in">console</span>.log(item)
  }
  <span class="hljs-keyword">const</span> items = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,
          <span class="hljs-attr">children</span>: [
            {
              <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,
              <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>
            },
            {
              <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,
              <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>
            }
          ]
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ts=[ls],es=d('<h2 id="api" data-source-line="231"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="menu" data-source-line="233"><a class="markdownIt-Anchor" href="#menu">#</a> Menu</h3><table data-source-line="235"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>菜单类型，现在垂直、水平 <code>vertical、 horizontal</code>，默认<code>vertical</code></td></tr><tr><td>collapse</td><td>boolean</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td></tr><tr><td>items</td><td>Items[]</td><td>菜单内容</td></tr><tr><td>trigger</td><td>string</td><td>子菜单打开的触发方式，只在 mode 为 horizontal 时有效， ‘hover’（默认） 、 “click”</td></tr><tr><td>theme</td><td>string</td><td>主题颜色 <code>light(默认) 、 dark</code></td></tr><tr><td>style</td><td>CSSProperties</td><td>根节点样式</td></tr><tr><td>liHeight</td><td>number</td><td>子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果</td></tr><tr><td>openKeys</td><td>string[]</td><td>初始展开的项</td></tr><tr><td>router</td><td>boolean</td><td>是否启用router模式，开启会在点击导航时以key作为path进行路由跳转</td></tr><tr><td>selectedKey</td><td>string</td><td>当前选中的项</td></tr></tbody></table><h3 id="menu-items" data-source-line="248"><a class="markdownIt-Anchor" href="#menu-items">#</a> Menu Items</h3><table data-source-line="250"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的名称</td></tr><tr><td>key</td><td>string</td><td>唯一标识符</td></tr><tr><td>icon</td><td>string</td><td>名称前icon图标</td></tr><tr><td>disabled</td><td>boolean</td><td>是否可用</td></tr></tbody></table><h3 id="menu-event" data-source-line="257"><a class="markdownIt-Anchor" href="#menu-event">#</a> Menu Event</h3><table data-source-line="259"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td></tr><tr><td>click</td><td>点击item项时调用</td></tr></tbody></table>',7);function ps(n,a,p,c,l,e){const i=h("vdpv_0"),o=h("vdpv_1"),r=h("vdpv_2");return m(),u("div",S,[T,s("div",V,[s("div",x,[s("div",D,[t(i)]),s("div",{style:v({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",B,K,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=j=>n.toggleCode(0))},_(n.vdpv_0Height>0?"hidden":"show"),1)])]),U,F,s("div",G,[s("div",J,[s("div",L,[t(o)]),s("div",{style:v({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",O,W,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=j=>n.toggleCode(1))},_(n.vdpv_1Height>0?"hidden":"show"),1)])]),X,Y,s("div",Z,[s("div",ss,[s("div",as,[t(r)]),s("div",{style:v({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ns,ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=j=>n.toggleCode(2))},_(n.vdpv_2Height>0?"hidden":"show"),1)])]),es])}const rs=y(z,[["render",ps]]);export{rs as default};
