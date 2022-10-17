import{a as h,o as m,c as u,b as t,h as s,r as g,_ as y,d as f,g as w,t as q,n as v,i as _,j as d,f as b}from"./index.1ec213e4.js";const $=s("p",null,"dark\u4E3B\u9898",-1),C=s("p",null,"trigger=click",-1),A={__name:"README.md.vdpv_0",setup(n){const a=[{label:"\u7528\u6237\u7BA1\u7406",key:"user",icon:"user",children:[{label:"\u7528\u6237\u5217\u8868",key:"aa"},{label:"\u6DFB\u52A0\u7528\u6237",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"set",icon:"date",disabled:!0}];return(p,c)=>{const l=h("ak-menu");return m(),u("div",null,[t(l,{items:a,mode:"horizontal"}),$,t(l,{items:a,mode:"horizontal",theme:"dark"}),C,t(l,{items:a,mode:"horizontal",trigger:"click"})])}}},H={style:{width:"200px"}},I=s("p",null,"dark\u4E3B\u9898",-1),M={__name:"README.md.vdpv_1",setup(n){const a=[{label:"\u7528\u6237\u7BA1\u7406",key:"user",icon:"user",children:[{label:"\u7528\u6237\u5217\u8868",key:"aa"},{label:"\u6DFB\u52A0\u7528\u6237",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"set",icon:"date",disabled:!0}];return(p,c)=>{const l=h("ak-menu");return m(),u("div",H,[t(l,{items:a,mode:"vertical"}),I,t(l,{items:a,mode:"vertical",theme:"dark"})])}}},E={style:{width:"200px"}},R=s("p",null,"dark\u4E3B\u9898",-1),N={__name:"README.md.vdpv_2",setup(n){const a=g(!1),p=e=>{console.log("click"),console.log(e)},c=e=>{console.log("select"),console.log(e)},l=[{label:"\u7528\u6237\u7BA1\u7406",key:"user",icon:"user",children:[{label:"\u7528\u6237\u5217\u8868",key:"aa"},{label:"\u6DFB\u52A0\u7528\u6237",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"set",icon:"date",disabled:!0}];return(e,i)=>{const o=h("ak-switch"),r=h("ak-menu");return m(),u("div",E,[s("div",null,[t(o,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=j=>a.value=j)},null,8,["modelValue"])]),t(r,{items:l,mode:"vertical",collapse:a.value,onClick:p,onSelect:c},null,8,["collapse"]),R,t(r,{items:l,mode:"vertical",theme:"dark",collapse:a.value,onClick:p,onSelect:c},null,8,["collapse"])])}}},k=f({components:{vdpv_0:A,vdpv_1:M,vdpv_2:N},setup(n){const a=g(),p=g(),c=g(),l=[a,p,c],e=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:o=>{const r="vdpv_"+o;e[r+"Height"]===0?e[r+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:e[r+"Height"]=0},...q(e),vdpv_0Ref:a,vdpv_1Ref:p,vdpv_2Ref:c}}});k.$vd={matter:{},toc:[{content:"Menu \u83DC\u5355\u5BFC\u822A",anchor:"menu-\u83DC\u5355\u5BFC\u822A",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u5782\u76F4\u83DC\u5355",anchor:"\u5782\u76F4\u83DC\u5355",level:3},{content:"Collapse",anchor:"collapse",level:3},{content:"API",anchor:"api",level:2},{content:"Menu",anchor:"menu",level:3},{content:"Menu Items",anchor:"menu-items",level:3},{content:"Menu Event",anchor:"menu-event",level:3}]};const z=k,S={class:"vuedoc"},T=d('<h1 id="menu-\u83DC\u5355\u5BFC\u822A" data-source-line="1"><a class="markdownIt-Anchor" href="#menu-\u83DC\u5355\u5BFC\u822A">#</a> Menu \u83DC\u5355\u5BFC\u822A</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),V={class:"vuedoc-demo"},x={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},P=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>trigger=click<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&#39;click&#39;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">const</span> items = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u5217\u8868&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DFB\u52A0\u7528\u6237&#39;</span>,
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
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7CFB\u7EDF\u8BBE\u7F6E&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
  }
]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),K=[P],U=s("h3",{id:"\u5782\u76F4\u83DC\u5355","data-source-line":"71"},[s("a",{class:"markdownIt-Anchor",href:"#\u5782\u76F4\u83DC\u5355"},"#"),b(" \u5782\u76F4\u83DC\u5355")],-1),F=s("pre",{style:{display:"none"}},null,-1),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},L={class:"vuedoc-demo__preview"},O={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Q=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:200px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">const</span> items = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u5217\u8868&#39;</span>,
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DFB\u52A0\u7528\u6237&#39;</span>,
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
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7CFB\u7EDF\u8BBE\u7F6E&#39;</span>,
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
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>,
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u5217\u8868&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DFB\u52A0\u7528\u6237&#39;</span>,
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7CFB\u7EDF\u8BBE\u7F6E&#39;</span>,
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ts=[ls],es=d('<h2 id="api" data-source-line="231"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="menu" data-source-line="233"><a class="markdownIt-Anchor" href="#menu">#</a> Menu</h3><table data-source-line="235"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u5782\u76F4\u3001\u6C34\u5E73 <code>vertical\u3001 horizontal</code>\uFF0C\u9ED8\u8BA4<code>vertical</code></td></tr><tr><td>collapse</td><td>boolean</td><td>\u662F\u5426\u6C34\u5E73\u6298\u53E0\u6536\u8D77\u83DC\u5355\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09</td></tr><tr><td>items</td><td>Items[]</td><td>\u83DC\u5355\u5185\u5BB9</td></tr><tr><td>trigger</td><td>string</td><td>\u5B50\u83DC\u5355\u6253\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EA\u5728 mode \u4E3A horizontal \u65F6\u6709\u6548\uFF0C \u2018hover\u2019\uFF08\u9ED8\u8BA4\uFF09 \u3001 \u201Cclick\u201D</td></tr><tr><td>theme</td><td>string</td><td>\u4E3B\u9898\u989C\u8272 <code>light(\u9ED8\u8BA4) \u3001 dark</code></td></tr><tr><td>style</td><td>CSSProperties</td><td>\u6839\u8282\u70B9\u6837\u5F0F</td></tr><tr><td>liHeight</td><td>number</td><td>\u5B50\u83DC\u5355\u9879\u9AD8\uFF0C\u4EC5\u5728mode\u4E3Avertical\u65F6\uFF0C\u7528\u4E8E\u8BA1\u7B97\u9AD8\u5EA6\u5E73\u6ED1\u52A8\u753B\u6548\u679C</td></tr><tr><td>openKeys</td><td>string[]</td><td>\u521D\u59CB\u5C55\u5F00\u7684\u9879</td></tr><tr><td>router</td><td>boolean</td><td>\u662F\u5426\u542F\u7528router\u6A21\u5F0F\uFF0C\u5F00\u542F\u4F1A\u5728\u70B9\u51FB\u5BFC\u822A\u65F6\u4EE5key\u4F5C\u4E3Apath\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C</td></tr><tr><td>selectedKey</td><td>string</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u9879</td></tr></tbody></table><h3 id="menu-items" data-source-line="248"><a class="markdownIt-Anchor" href="#menu-items">#</a> Menu Items</h3><table data-source-line="250"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>\u663E\u793A\u7684\u540D\u79F0</td></tr><tr><td>key</td><td>string</td><td>\u552F\u4E00\u6807\u8BC6\u7B26</td></tr><tr><td>icon</td><td>string</td><td>\u540D\u79F0\u524Dicon\u56FE\u6807</td></tr><tr><td>disabled</td><td>boolean</td><td>\u662F\u5426\u53EF\u7528</td></tr></tbody></table><h3 id="menu-event" data-source-line="257"><a class="markdownIt-Anchor" href="#menu-event">#</a> Menu Event</h3><table data-source-line="259"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td></tr><tr><td>click</td><td>\u70B9\u51FBitem\u9879\u65F6\u8C03\u7528</td></tr></tbody></table>',7);function ps(n,a,p,c,l,e){const i=h("vdpv_0"),o=h("vdpv_1"),r=h("vdpv_2");return m(),u("div",S,[T,s("div",V,[s("div",x,[s("div",D,[t(i)]),s("div",{style:v({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",B,K,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=j=>n.toggleCode(0))},_(n.vdpv_0Height>0?"hidden":"show"),1)])]),U,F,s("div",G,[s("div",J,[s("div",L,[t(o)]),s("div",{style:v({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",O,W,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=j=>n.toggleCode(1))},_(n.vdpv_1Height>0?"hidden":"show"),1)])]),X,Y,s("div",Z,[s("div",ss,[s("div",as,[t(r)]),s("div",{style:v({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ns,ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=j=>n.toggleCode(2))},_(n.vdpv_2Height>0?"hidden":"show"),1)])]),es])}const rs=y(z,[["render",ps]]);export{rs as default};
