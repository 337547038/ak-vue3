import{a as o,o as k,e as C,r as u,c as x,f as p,t as b,b as e,w as d,k as q,g as s,_ as H,n as f,d as A,h as E,i as R,j as _}from"./index-6c3c2d70.js";const D={__name:"README.md.vdpv_0",setup(n){const a=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(h,t)=>{const c=o("ak-tree");return k(),C(c,{data:a})}}},V={__name:"README.md.vdpv_1",setup(n){const a=[{label:"广东",open:!0,children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(h,t)=>{const c=o("ak-tree");return k(),C(c,{data:a})}}},I={__name:"README.md.vdpv_2",setup(n){const a=u("gd"),h=[{id:"gd",label:"广东",children:[{id:"gz",label:"广州",children:[{id:"th",label:"天河区"},{id:"by",label:"白云区"},{id:"yx",label:"越秀区"},{id:"hz",label:"海珠区"}]},{id:"sz",label:"深圳"},{id:"dg",label:"东莞"},{id:"fs",label:"佛山"}]},{id:"gx",label:"广西"},{id:"bj",label:"北京"}];return(t,c)=>{const l=o("ak-tree");return k(),x("p",null,[p("当前选中值："+b(a.value)+" ",1),e(l,{data:h,modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=r=>a.value=r)},null,8,["modelValue"])])}}},z={__name:"README.md.vdpv_3",setup(n){const a=[{id:"gd",label:"广东"},{id:"gx",label:"广西"},{id:"bj",label:"北京"},{id:"sh",label:"上海",hasChild:!1}],h=(t,c)=>{if(!t.isLoad){let l=[];t.id==="gd"&&(l=[{label:"天河区",hasChild:!1},{label:"白云区",hasChild:!1}]),t.id==="gx"&&(l=[{label:"桂林市",hasChild:!1},{label:"南宁市",hasChild:!1}]),t.id==="bj"&&(l=[{label:"朝阳区",hasChild:!1},{label:"东城区",hasChild:!1}]),setTimeout(()=>{c&&c(l)},5e3)}};return(t,c)=>{const l=o("ak-tree");return k(),x("p",null,[e(l,{data:a,onClick:h,lazy:!0})])}}},T={__name:"README.md.vdpv_4",setup(n){const a=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],h=t=>{alert(JSON.stringify(t))};return(t,c)=>{const l=o("ak-tree");return k(),C(l,{data:a,showCheckbox:!0,onChange:h})}}},N={__name:"README.md.vdpv_5",setup(n){const a=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],h=t=>{alert(JSON.stringify(t))};return(t,c)=>{const l=o("ak-button"),r=o("ak-button-group"),i=o("ak-tree");return k(),C(i,{data:a},{default:d(j=>[e(r,{style:{"margin-left":"5px"}},{default:d(()=>[e(l,{type:"text",onClick:q(g=>h(j),["stop"])},{default:d(()=>[p("添加")]),_:2},1032,["onClick"]),e(l,{type:"text",onClick:q(g=>h(j),["stop"])},{default:d(()=>[p("修改")]),_:2},1032,["onClick"]),e(l,{type:"text",onClick:q(g=>h(j),["stop"])},{default:d(()=>[p("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})}}},B=s("p",null,null,-1),M={__name:"README.md.vdpv_6",setup(n){const a=u(),h=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],t=l=>{alert(JSON.stringify(l))},c=l=>{console.log(a.value.getValue(l))};return(l,r)=>{const i=o("ak-button"),j=o("ak-button-group"),g=o("ak-tree");return k(),x("div",null,[e(g,{data:h,showCheckbox:!0,ref_key:"treeEl",ref:a},{default:d(v=>[e(j,{style:{"margin-left":"5px"}},{default:d(()=>[e(i,{type:"text",onClick:q(m=>t(v),["stop"])},{default:d(()=>[p("添加")]),_:2},1032,["onClick"]),e(i,{type:"text",onClick:q(m=>t(v),["stop"])},{default:d(()=>[p("修改")]),_:2},1032,["onClick"]),e(i,{type:"text",onClick:q(m=>t(v),["stop"])},{default:d(()=>[p("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},512),B,e(j,null,{default:d(()=>[e(i,{onClick:r[0]||(r[0]=v=>c())},{default:d(()=>[p("取值")]),_:1}),e(i,{onClick:r[1]||(r[1]=v=>c(!0))},{default:d(()=>[p("取值(label)")]),_:1})]),_:1})])}}},$=A({components:{vdpv_0:D,vdpv_1:V,vdpv_2:I,vdpv_3:z,vdpv_4:T,vdpv_5:N,vdpv_6:M},setup(n){const a=u(),h=u(),t=u(),c=u(),l=u(),r=u(),i=u(),j=[a,h,t,c,l,r,i],g=E({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return{toggleCode:m=>{const w="vdpv_"+m;g[w+"Height"]===0?g[w+"Height"]=(j[m].value?j[m].value.offsetHeight:0)||0:g[w+"Height"]=0},...R(g),vdpv_0Ref:a,vdpv_1Ref:h,vdpv_2Ref:t,vdpv_3Ref:c,vdpv_4Ref:l,vdpv_5Ref:r,vdpv_6Ref:i}}});$.$vd={matter:{},toc:[{content:"Tree 树",anchor:"tree-树",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"默认展开指定项",anchor:"默认展开指定项",level:3},{content:"点击可选中值",anchor:"点击可选中值",level:3},{content:"异步加载数据",anchor:"异步加载数据",level:3},{content:"支持勾选",anchor:"支持勾选",level:3},{content:"可使用slot自定义显示内容",anchor:"可使用slot自定义显示内容",level:3},{content:"使用getValue取值",anchor:"使用getvalue取值",level:3},{content:"API",anchor:"api",level:2},{content:"Tree Props",anchor:"tree-props",level:3},{content:"Tree Event",anchor:"tree-event",level:3},{content:"Tree Data",anchor:"tree-data",level:3}]};const S=$,J={class:"vuedoc"},O=_('<h1 id="tree-树" data-source-line="3"><a class="markdownIt-Anchor" href="#tree-树">#</a> Tree 树</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),P={class:"vuedoc-demo"},L={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},F={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},G=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),K=[G],Q=s("h3",{id:"默认展开指定项","data-source-line":"37"},[s("a",{class:"markdownIt-Anchor",href:"#默认展开指定项"},"#"),p(" 默认展开指定项")],-1),W=s("p",{"data-source-line":"39"},[p("在列表数据"),s("code",null,"data"),p("里使用"),s("code",null,'open="true"'),p("可默认展开")],-1),X=s("pre",{style:{display:"none"}},null,-1),Y={class:"vuedoc-demo"},Z={class:"vuedoc-demo__inner"},ss={class:"vuedoc-demo__preview"},as={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ns=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">open</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ls=[ns],ts=_('<h3 id="点击可选中值" data-source-line="72"><a class="markdownIt-Anchor" href="#点击可选中值">#</a> 点击可选中值</h3><p data-source-line="74">使用<code>v-model=&quot;string/array&quot;</code>，为<code>string</code>时单选，<code>array</code>时可多选，对应数据列表<code>data</code>的<code>id</code>值</p><pre style="display:none;"></pre>',3),ps={class:"vuedoc-demo"},es={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},os={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},hs=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
    &gt;</span>当前选中值：{{ value }}
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;gd&#39;</span>)
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gz&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;th&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;by&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;yx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;hz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;dg&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;fs&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),rs=[hs],ds=s("h3",{id:"异步加载数据","data-source-line":"113"},[s("a",{class:"markdownIt-Anchor",href:"#异步加载数据"},"#"),p(" 异步加载数据")],-1),is=s("p",{"data-source-line":"115"},[p("使用"),s("code",null,'lazy="true"'),p("，在点击展开时可异步加载数据，开启异步加载点击可返回回调方法，用于加载新数据。 返回当前项数据时会添加"),s("code",null,"isLoad"),p("属性，用于表示当前项是否已经请求过数据，可减少重复请求")],-1),js=s("pre",{style:{display:"none"}},null,-1),gs={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},us={class:"vuedoc-demo__preview"},vs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ms=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> <span class="hljs-attr">:lazy</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sh&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;上海&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> } <span class="hljs-comment">// hasChild=false表示没有下级可加载</span>
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">item, resolve</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (!item.isLoad) {
      <span class="hljs-comment">// false表示还没展开加载过</span>
      <span class="hljs-keyword">let</span> newData = []
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gd&#39;</span>) {
        <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gx&#39;</span>) {
        <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;桂林市&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;南宁市&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;bj&#39;</span>) {
        <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;朝阳区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东城区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-comment">// 模拟请求数据</span>
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        resolve &amp;&amp; resolve(newData)
      }, <span class="hljs-number">5000</span>)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),bs=[ms],ks=s("h3",{id:"支持勾选","data-source-line":"165"},[s("a",{class:"markdownIt-Anchor",href:"#支持勾选"},"#"),p(" 支持勾选")],-1),fs=s("p",{"data-source-line":"167"},[s("code",null,'showCheckbox="true"'),p("可支持勾选，"),s("code",null,"change"),p("为勾选改变事件")],-1),ys=s("pre",{style:{display:"none"}},null,-1),qs={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},xs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},$s=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Hs=[$s],As=s("h3",{id:"可使用slot自定义显示内容","data-source-line":"203"},[s("a",{class:"markdownIt-Anchor",href:"#可使用slot自定义显示内容"},"#"),p(" 可使用slot自定义显示内容")],-1),Es=s("pre",{style:{display:"none"}},null,-1),Rs={class:"vuedoc-demo"},Ds={class:"vuedoc-demo__inner"},Vs={class:"vuedoc-demo__preview"},Is={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},zs=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>修改<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ts=[zs],Ns=s("h3",{id:"使用getvalue取值","data-source-line":"246"},[s("a",{class:"markdownIt-Anchor",href:"#使用getvalue取值"},"#"),p(" 使用getValue取值")],-1),Bs=s("pre",{style:{display:"none"}},null,-1),Ms={class:"vuedoc-demo"},Ss={class:"vuedoc-demo__inner"},Js={class:"vuedoc-demo__preview"},Os={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ps=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;treeEl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>修改<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue()&quot;</span>&gt;</span>取值<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue(true)&quot;</span>&gt;</span>取值(label)<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> treeEl = ref()
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
  <span class="hljs-keyword">const</span> getValue = <span class="hljs-function">(<span class="hljs-params">bool</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(treeEl.value.getValue(bool))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ls=[Ps],Us=_('<h2 id="api" data-source-line="303"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tree-props" data-source-line="305"><a class="markdownIt-Anchor" href="#tree-props">#</a> Tree Props</h3><table data-source-line="307"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>列表数据</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>显示勾选</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>是否异步加载</td></tr><tr><td>v-model</td><td>Array/string</td><td>选中的值，array时为多选</td></tr></tbody></table><h3 id="tree-event" data-source-line="314"><a class="markdownIt-Anchor" href="#tree-event">#</a> Tree Event</h3><table data-source-line="316"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr></tbody></table><h3 id="tree-data" data-source-line="320"><a class="markdownIt-Anchor" href="#tree-data">#</a> Tree Data</h3><table data-source-line="322"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>唯一值</td></tr><tr><td>checked</td><td>Boolean/false</td><td>当前项为勾选状态，仅当showCheckbox=true时有效</td></tr><tr><td>open</td><td>Boolean/false</td><td>是否展开当前项</td></tr><tr><td>hasChild</td><td>Boolean/false</td><td>表示当前级下没有子级可加载。仅在<code>tree</code>里设置了异步加载<code>lazy=&quot;true&quot;</code>时有效</td></tr></tbody></table>',7);function Fs(n,a,h,t,c,l){const r=o("vdpv_0"),i=o("vdpv_1"),j=o("vdpv_2"),g=o("vdpv_3"),v=o("vdpv_4"),m=o("vdpv_5"),w=o("vdpv_6");return k(),x("div",J,[O,s("div",P,[s("div",L,[s("div",U,[e(r)]),s("div",{style:f({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",F,K,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>n.toggleCode(0))},b(n.vdpv_0Height>0?"hidden":"show"),1)])]),Q,W,X,s("div",Y,[s("div",Z,[s("div",ss,[e(i)]),s("div",{style:f({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",as,ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>n.toggleCode(1))},b(n.vdpv_1Height>0?"hidden":"show"),1)])]),ts,s("div",ps,[s("div",es,[s("div",cs,[e(j)]),s("div",{style:f({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",os,rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>n.toggleCode(2))},b(n.vdpv_2Height>0?"hidden":"show"),1)])]),ds,is,js,s("div",gs,[s("div",_s,[s("div",us,[e(g)]),s("div",{style:f({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",vs,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>n.toggleCode(3))},b(n.vdpv_3Height>0?"hidden":"show"),1)])]),ks,fs,ys,s("div",qs,[s("div",ws,[s("div",Cs,[e(v)]),s("div",{style:f({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",xs,Hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>n.toggleCode(4))},b(n.vdpv_4Height>0?"hidden":"show"),1)])]),As,Es,s("div",Rs,[s("div",Ds,[s("div",Vs,[e(m)]),s("div",{style:f({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Is,Ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>n.toggleCode(5))},b(n.vdpv_5Height>0?"hidden":"show"),1)])]),Ns,Bs,s("div",Ms,[s("div",Ss,[s("div",Js,[e(w)]),s("div",{style:f({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Os,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>n.toggleCode(6))},b(n.vdpv_6Height>0?"hidden":"show"),1)])]),Us])}const Ks=H(S,[["render",Fs]]);export{Ks as default};
