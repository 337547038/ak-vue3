var I=Object.defineProperty,z=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var H=(n,a,l)=>a in n?I(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,A=(n,a)=>{for(var l in a||(a={}))D.call(a,l)&&H(n,l,a[l]);if($)for(var l of $(a))E.call(a,l)&&H(n,l,a[l]);return n},R=(n,a)=>z(n,T(a));import{e as h,o as k,f as C,b as u,c as x,h as e,j as m,g as c,w as d,x as q,i as s,_ as N,d as B,r as S,t as J,n as f,a as _}from"./index.bb5e6dd5.js";const O={setup(n){const a=[{label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",children:[{label:"\u5929\u6CB3\u533A"},{label:"\u767D\u4E91\u533A"},{label:"\u8D8A\u79C0\u533A"},{label:"\u6D77\u73E0\u533A"}]},{label:"\u6DF1\u5733"},{label:"\u4E1C\u839E"},{label:"\u4F5B\u5C71"}]},{label:"\u5E7F\u897F"},{label:"\u5317\u4EAC"}];return(l,p)=>{const o=h("ak-tree");return k(),C(o,{data:a})}}},P={setup(n){const a=[{label:"\u5E7F\u4E1C",open:!0,children:[{label:"\u5E7F\u5DDE",children:[{label:"\u5929\u6CB3\u533A"},{label:"\u767D\u4E91\u533A"},{label:"\u8D8A\u79C0\u533A"},{label:"\u6D77\u73E0\u533A"}]},{label:"\u6DF1\u5733"},{label:"\u4E1C\u839E"},{label:"\u4F5B\u5C71"}]},{label:"\u5E7F\u897F"},{label:"\u5317\u4EAC"}];return(l,p)=>{const o=h("ak-tree");return k(),C(o,{data:a})}}},L={setup(n){const a=u("gd"),l=[{id:"gd",label:"\u5E7F\u4E1C",children:[{id:"gz",label:"\u5E7F\u5DDE",children:[{id:"th",label:"\u5929\u6CB3\u533A"},{id:"by",label:"\u767D\u4E91\u533A"},{id:"yx",label:"\u8D8A\u79C0\u533A"},{id:"hz",label:"\u6D77\u73E0\u533A"}]},{id:"sz",label:"\u6DF1\u5733"},{id:"dg",label:"\u4E1C\u839E"},{id:"fs",label:"\u4F5B\u5C71"}]},{id:"gx",label:"\u5E7F\u897F"},{id:"bj",label:"\u5317\u4EAC"}];return(p,o)=>{const t=h("ak-tree");return k(),x("p",null,[e("\u5F53\u524D\u9009\u4E2D\u503C\uFF1A"+m(a.value)+" ",1),c(t,{data:l,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r)},null,8,["modelValue"])])}}},M={setup(n){const a=[{id:"gd",label:"\u5E7F\u4E1C"},{id:"gx",label:"\u5E7F\u897F"},{id:"bj",label:"\u5317\u4EAC"},{id:"sh",label:"\u4E0A\u6D77",hasChild:!1}],l=(p,o)=>{if(!p.isLoad){let t=[];p.id==="gd"&&(t=[{label:"\u5929\u6CB3\u533A",hasChild:!1},{label:"\u767D\u4E91\u533A",hasChild:!1}]),p.id==="gx"&&(t=[{label:"\u6842\u6797\u5E02",hasChild:!1},{label:"\u5357\u5B81\u5E02",hasChild:!1}]),p.id==="bj"&&(t=[{label:"\u671D\u9633\u533A",hasChild:!1},{label:"\u4E1C\u57CE\u533A",hasChild:!1}]),setTimeout(()=>{o&&o(t)},5e3)}};return(p,o)=>{const t=h("ak-tree");return k(),x("p",null,[c(t,{data:a,onClick:l,lazy:!0})])}}},U={setup(n){const a=[{label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",children:[{label:"\u5929\u6CB3\u533A"},{label:"\u767D\u4E91\u533A"},{label:"\u8D8A\u79C0\u533A"},{label:"\u6D77\u73E0\u533A"}]},{label:"\u6DF1\u5733"},{label:"\u4E1C\u839E"},{label:"\u4F5B\u5C71"}]},{label:"\u5E7F\u897F"},{label:"\u5317\u4EAC"}],l=p=>{alert(JSON.stringify(p))};return(p,o)=>{const t=h("ak-tree");return k(),C(t,{data:a,showCheckbox:!0,onChange:l})}}},F=e("\u6DFB\u52A0"),G=e("\u4FEE\u6539"),K=e("\u5220\u9664"),Q={setup(n){const a=[{label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",children:[{label:"\u5929\u6CB3\u533A"},{label:"\u767D\u4E91\u533A"},{label:"\u8D8A\u79C0\u533A"},{label:"\u6D77\u73E0\u533A"}]},{label:"\u6DF1\u5733"},{label:"\u4E1C\u839E"},{label:"\u4F5B\u5C71"}]},{label:"\u5E7F\u897F"},{label:"\u5317\u4EAC"}],l=p=>{alert(JSON.stringify(p))};return(p,o)=>{const t=h("ak-button"),r=h("ak-button-group"),i=h("ak-tree");return k(),C(i,{data:a},{default:d(j=>[c(r,{style:{"margin-left":"5px"}},{default:d(()=>[c(t,{type:"text",onClick:q(g=>l(j),["stop"])},{default:d(()=>[F]),_:2},1032,["onClick"]),c(t,{type:"text",onClick:q(g=>l(j),["stop"])},{default:d(()=>[G]),_:2},1032,["onClick"]),c(t,{type:"text",onClick:q(g=>l(j),["stop"])},{default:d(()=>[K]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})}}},W=e("\u6DFB\u52A0"),X=e("\u4FEE\u6539"),Y=e("\u5220\u9664"),Z=s("p",null,null,-1),ss=e("\u53D6\u503C"),as=e("\u53D6\u503C(label)"),ns={setup(n){const a=u(),l=[{label:"\u5E7F\u4E1C",children:[{label:"\u5E7F\u5DDE",children:[{label:"\u5929\u6CB3\u533A"},{label:"\u767D\u4E91\u533A"},{label:"\u8D8A\u79C0\u533A"},{label:"\u6D77\u73E0\u533A"}]},{label:"\u6DF1\u5733"},{label:"\u4E1C\u839E"},{label:"\u4F5B\u5C71"}]},{label:"\u5E7F\u897F"},{label:"\u5317\u4EAC"}],p=t=>{alert(JSON.stringify(t))},o=t=>{console.log(a.value.getValue(t))};return(t,r)=>{const i=h("ak-button"),j=h("ak-button-group"),g=h("ak-tree");return k(),x("div",null,[c(g,{data:l,showCheckbox:!0,ref_key:"treeEl",ref:a},{default:d(v=>[c(j,{style:{"margin-left":"5px"}},{default:d(()=>[c(i,{type:"text",onClick:q(b=>p(v),["stop"])},{default:d(()=>[W]),_:2},1032,["onClick"]),c(i,{type:"text",onClick:q(b=>p(v),["stop"])},{default:d(()=>[X]),_:2},1032,["onClick"]),c(i,{type:"text",onClick:q(b=>p(v),["stop"])},{default:d(()=>[Y]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},512),Z,c(j,null,{default:d(()=>[c(i,{onClick:r[0]||(r[0]=v=>o())},{default:d(()=>[ss]),_:1}),c(i,{onClick:r[1]||(r[1]=v=>o(!0))},{default:d(()=>[as]),_:1})]),_:1})])}}},V=B({components:{vdpv_0:O,vdpv_1:P,vdpv_2:L,vdpv_3:M,vdpv_4:U,vdpv_5:Q,vdpv_6:ns},setup(n){const a=u(),l=u(),p=u(),o=u(),t=u(),r=u(),i=u(),j=[a,l,p,o,t,r,i],g=S({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return R(A({toggleCode:b=>{const w="vdpv_"+b;g[w+"Height"]===0?g[w+"Height"]=(j[b].value?j[b].value.offsetHeight:0)||0:g[w+"Height"]=0}},J(g)),{vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:p,vdpv_3Ref:o,vdpv_4Ref:t,vdpv_5Ref:r,vdpv_6Ref:i})}});V.$vd={matter:{},toc:[{content:"Tree \u6811",anchor:"tree-\u6811",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u9879",anchor:"\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u9879",level:3},{content:"\u70B9\u51FB\u53EF\u9009\u4E2D\u503C",anchor:"\u70B9\u51FB\u53EF\u9009\u4E2D\u503C",level:3},{content:"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E",anchor:"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E",level:3},{content:"\u652F\u6301\u52FE\u9009",anchor:"\u652F\u6301\u52FE\u9009",level:3},{content:"\u53EF\u4F7F\u7528slot\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9",anchor:"\u53EF\u4F7F\u7528slot\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9",level:3},{content:"\u4F7F\u7528getValue\u53D6\u503C",anchor:"\u4F7F\u7528getvalue\u53D6\u503C",level:3},{content:"API",anchor:"api",level:2},{content:"Tree Props",anchor:"tree-props",level:3},{content:"Tree Event",anchor:"tree-event",level:3},{content:"Tree Data",anchor:"tree-data",level:3}]};const ls=V,ts={class:"vuedoc"},ps=_('<h1 id="tree-\u6811" data-source-line="3"><a class="markdownIt-Anchor" href="#tree-\u6811">#</a> Tree \u6811</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),es={class:"vuedoc-demo"},cs={class:"vuedoc-demo__inner"},os={class:"vuedoc-demo__preview"},hs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},rs=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ds=[rs],is=s("h3",{id:"\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u9879","data-source-line":"37"},[s("a",{class:"markdownIt-Anchor",href:"#\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u9879"},"#"),e(" \u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u9879")],-1),js=s("p",{"data-source-line":"39"},[e("\u5728\u5217\u8868\u6570\u636E"),s("code",null,"data"),e("\u91CC\u4F7F\u7528"),s("code",null,'open="true"'),e("\u53EF\u9ED8\u8BA4\u5C55\u5F00")],-1),gs=s("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo"},us={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},bs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ms=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">open</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ks=[ms],fs=_('<h3 id="\u70B9\u51FB\u53EF\u9009\u4E2D\u503C" data-source-line="72"><a class="markdownIt-Anchor" href="#\u70B9\u51FB\u53EF\u9009\u4E2D\u503C">#</a> \u70B9\u51FB\u53EF\u9009\u4E2D\u503C</h3><p data-source-line="74">\u4F7F\u7528<code>v-model=&quot;string/array&quot;</code>\uFF0C\u4E3A<code>string</code>\u65F6\u5355\u9009\uFF0C<code>array</code>\u65F6\u53EF\u591A\u9009\uFF0C\u5BF9\u5E94\u6570\u636E\u5217\u8868<code>data</code>\u7684<code>id</code>\u503C</p><pre style="display:none;"></pre>',3),ys={class:"vuedoc-demo"},qs={class:"vuedoc-demo__inner"},ws={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},xs=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
    &gt;</span>\u5F53\u524D\u9009\u4E2D\u503C\uFF1A{{ value }}
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;gd&#39;</span>)
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gz&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;th&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;by&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;yx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;hz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;dg&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;fs&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),$s=[xs],Hs=s("h3",{id:"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E","data-source-line":"113"},[s("a",{class:"markdownIt-Anchor",href:"#\u5F02\u6B65\u52A0\u8F7D\u6570\u636E"},"#"),e(" \u5F02\u6B65\u52A0\u8F7D\u6570\u636E")],-1),As=s("p",{"data-source-line":"115"},[e("\u4F7F\u7528"),s("code",null,'lazy="true"'),e("\uFF0C\u5728\u70B9\u51FB\u5C55\u5F00\u65F6\u53EF\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\uFF0C\u5F00\u542F\u5F02\u6B65\u52A0\u8F7D\u70B9\u51FB\u53EF\u8FD4\u56DE\u56DE\u8C03\u65B9\u6CD5\uFF0C\u7528\u4E8E\u52A0\u8F7D\u65B0\u6570\u636E\u3002 \u8FD4\u56DE\u5F53\u524D\u9879\u6570\u636E\u65F6\u4F1A\u6DFB\u52A0"),s("code",null,"isLoad"),e("\u5C5E\u6027\uFF0C\u7528\u4E8E\u8868\u793A\u5F53\u524D\u9879\u662F\u5426\u5DF2\u7ECF\u8BF7\u6C42\u8FC7\u6570\u636E\uFF0C\u53EF\u51CF\u5C11\u91CD\u590D\u8BF7\u6C42")],-1),Rs=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},Is={class:"vuedoc-demo__inner"},zs={class:"vuedoc-demo__preview"},Ts={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ds=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> <span class="hljs-attr">:lazy</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sh&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> } <span class="hljs-comment">// hasChild=false\u8868\u793A\u6CA1\u6709\u4E0B\u7EA7\u53EF\u52A0\u8F7D</span>
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">item, resolve</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (!item.isLoad) {
      <span class="hljs-comment">// false\u8868\u793A\u8FD8\u6CA1\u5C55\u5F00\u52A0\u8F7D\u8FC7</span>
      <span class="hljs-keyword">let</span> newData = []
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gd&#39;</span>) {
        <span class="hljs-comment">// \u6839\u636E\u5F53\u524D\u9879\u7684\u76F8\u5173\u53C2\u6570\u8BF7\u6C42\u4E0B\u4E00\u7EA7</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gx&#39;</span>) {
        <span class="hljs-comment">// \u6839\u636E\u5F53\u524D\u9879\u7684\u76F8\u5173\u53C2\u6570\u8BF7\u6C42\u4E0B\u4E00\u7EA7</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6842\u6797\u5E02&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5357\u5B81\u5E02&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;bj&#39;</span>) {
        <span class="hljs-comment">// \u6839\u636E\u5F53\u524D\u9879\u7684\u76F8\u5173\u53C2\u6570\u8BF7\u6C42\u4E0B\u4E00\u7EA7</span>
        newData = [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u57CE\u533A&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span> }
        ]
      }
      <span class="hljs-comment">// \u6A21\u62DF\u8BF7\u6C42\u6570\u636E</span>
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        resolve &amp;&amp; resolve(newData)
      }, <span class="hljs-number">5000</span>)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Es=[Ds],Ns=s("h3",{id:"\u652F\u6301\u52FE\u9009","data-source-line":"165"},[s("a",{class:"markdownIt-Anchor",href:"#\u652F\u6301\u52FE\u9009"},"#"),e(" \u652F\u6301\u52FE\u9009")],-1),Bs=s("p",{"data-source-line":"167"},[s("code",null,'showCheckbox="true"'),e("\u53EF\u652F\u6301\u52FE\u9009\uFF0C"),s("code",null,"change"),e("\u4E3A\u52FE\u9009\u6539\u53D8\u4E8B\u4EF6")],-1),Ss=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Ls={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ms=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Us=[Ms],Fs=s("h3",{id:"\u53EF\u4F7F\u7528slot\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9","data-source-line":"203"},[s("a",{class:"markdownIt-Anchor",href:"#\u53EF\u4F7F\u7528slot\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9"},"#"),e(" \u53EF\u4F7F\u7528slot\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Qs={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Xs={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ys=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u4FEE\u6539<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Zs=[Ys],sa=s("h3",{id:"\u4F7F\u7528getvalue\u53D6\u503C","data-source-line":"246"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528getvalue\u53D6\u503C"},"#"),e(" \u4F7F\u7528getValue\u53D6\u503C")],-1),aa=s("pre",{style:{display:"none"}},null,-1),na={class:"vuedoc-demo"},la={class:"vuedoc-demo__inner"},ta={class:"vuedoc-demo__preview"},pa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},ea=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;treeEl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u4FEE\u6539<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue()&quot;</span>&gt;</span>\u53D6\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue(true)&quot;</span>&gt;</span>\u53D6\u503C(label)<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> treeEl = ref()
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u767D\u4E91\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6D77\u73E0\u533A&#39;</span> }
          ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E1C\u839E&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4F5B\u5C71&#39;</span> }
      ]
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
  <span class="hljs-keyword">const</span> getValue = <span class="hljs-function">(<span class="hljs-params">bool</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(treeEl.value.getValue(bool))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ca=[ea],oa=_('<h2 id="api" data-source-line="303"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tree-props" data-source-line="305"><a class="markdownIt-Anchor" href="#tree-props">#</a> Tree Props</h3><table data-source-line="307"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>\u5217\u8868\u6570\u636E</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>\u663E\u793A\u52FE\u9009</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>\u662F\u5426\u5F02\u6B65\u52A0\u8F7D</td></tr><tr><td>v-model</td><td>Array/string</td><td>\u9009\u4E2D\u7684\u503C\uFF0Carray\u65F6\u4E3A\u591A\u9009</td></tr></tbody></table><h3 id="tree-event" data-source-line="314"><a class="markdownIt-Anchor" href="#tree-event">#</a> Tree Event</h3><table data-source-line="316"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table><h3 id="tree-data" data-source-line="320"><a class="markdownIt-Anchor" href="#tree-data">#</a> Tree Data</h3><table data-source-line="322"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u552F\u4E00\u503C</td></tr><tr><td>checked</td><td>Boolean/false</td><td>\u5F53\u524D\u9879\u4E3A\u52FE\u9009\u72B6\u6001\uFF0C\u4EC5\u5F53showCheckbox=true\u65F6\u6709\u6548</td></tr><tr><td>open</td><td>Boolean/false</td><td>\u662F\u5426\u5C55\u5F00\u5F53\u524D\u9879</td></tr><tr><td>hasChild</td><td>Boolean/false</td><td>\u8868\u793A\u5F53\u524D\u7EA7\u4E0B\u6CA1\u6709\u5B50\u7EA7\u53EF\u52A0\u8F7D\u3002\u4EC5\u5728<code>tree</code>\u91CC\u8BBE\u7F6E\u4E86\u5F02\u6B65\u52A0\u8F7D<code>lazy=&quot;true&quot;</code>\u65F6\u6709\u6548</td></tr></tbody></table>',7);function ha(n,a,l,p,o,t){const r=h("vdpv_0"),i=h("vdpv_1"),j=h("vdpv_2"),g=h("vdpv_3"),v=h("vdpv_4"),b=h("vdpv_5"),w=h("vdpv_6");return k(),x("div",ts,[ps,s("div",es,[s("div",cs,[s("div",os,[c(r)]),s("div",{style:f({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",hs,ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>n.toggleCode(0))},m(n.vdpv_0Height>0?"hidden":"show"),1)])]),is,js,gs,s("div",_s,[s("div",us,[s("div",vs,[c(i)]),s("div",{style:f({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",bs,ks,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>n.toggleCode(1))},m(n.vdpv_1Height>0?"hidden":"show"),1)])]),fs,s("div",ys,[s("div",qs,[s("div",ws,[c(j)]),s("div",{style:f({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,$s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>n.toggleCode(2))},m(n.vdpv_2Height>0?"hidden":"show"),1)])]),Hs,As,Rs,s("div",Vs,[s("div",Is,[s("div",zs,[c(g)]),s("div",{style:f({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ts,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>n.toggleCode(3))},m(n.vdpv_3Height>0?"hidden":"show"),1)])]),Ns,Bs,Ss,s("div",Js,[s("div",Os,[s("div",Ps,[c(v)]),s("div",{style:f({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ls,Us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>n.toggleCode(4))},m(n.vdpv_4Height>0?"hidden":"show"),1)])]),Fs,Gs,s("div",Ks,[s("div",Qs,[s("div",Ws,[c(b)]),s("div",{style:f({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xs,Zs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>n.toggleCode(5))},m(n.vdpv_5Height>0?"hidden":"show"),1)])]),sa,aa,s("div",na,[s("div",la,[s("div",ta,[c(w)]),s("div",{style:f({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",pa,ca,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>n.toggleCode(6))},m(n.vdpv_6Height>0?"hidden":"show"),1)])]),oa])}var ia=N(ls,[["render",ha]]);export{ia as default};
