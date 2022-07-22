var $=Object.defineProperty,H=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var V=(t,a,n)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,y=(t,a)=>{for(var n in a||(a={}))F.call(a,n)&&V(t,n,a[n]);if(k)for(var n of k(a))A.call(a,n)&&V(t,n,a[n]);return t},b=(t,a)=>H(t,x(a));import{d as w,r as u,a as c,o as g,c as i,b as s,e as l,_ as m,w as N,i as v,f as I,g as R,n as j,t as _,h}from"./index.ba58d902.js";const S=w({setup(t){const a=u();return(n,o)=>{const p=c("ak-progress");return g(),i("div",null,[s("p",null,[l(p,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e)},null,8,["modelValue"])]),s("p",null,[l(p,{modelValue:30})]),s("p",null,[l(p,{modelValue:50,status:"success"})]),s("p",null,[l(p,{modelValue:60,status:"warning"})]),s("p",null,[l(p,{modelValue:70,status:"danger"})]),s("p",null,[l(p,{modelValue:100})])])}}}),T={},P=s("p",null,"\u8BBE\u7F6E\u5BBD\u9AD8",-1),B=s("p",null,"\u8BBE\u7F6E\u80CC\u666F\u548C\u8FDB\u5EA6\u989C\u8272",-1),E=s("p",null,"\u8FDB\u5EA6\u6587\u5B57\u56FA\u5B9A\u4F4D\u7F6E",-1);function D(t,a){const n=c("ak-progress");return g(),i("div",null,[P,s("p",null,[l(n,{modelValue:50,radius:300,border:10})]),B,s("p",null,[l(n,{modelValue:30,color:"#D9E5F1FF",borderColor:"#9907C1FF"})]),E,s("p",null,[l(n,{modelValue:80,followText:!1})])])}var z=m(T,[["render",D]]);const M={},U=v("\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9");function G(t,a){const n=c("ak-progress");return g(),i("div",null,[l(n,{"model-value":0,radius:50,border:8,type:"circle"}),l(n,{modelValue:30,radius:50,border:8,type:"circle",status:"success"}),l(n,{modelValue:50,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,color:"#ddd",borderColor:"#f60",type:"circle"}),l(n,{modelValue:100,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,type:"circle",showText:!1},{default:N(()=>[U]),_:1})])}var J=m(M,[["render",G]]);const C=w({components:{vdpv_0:S,vdpv_1:z,vdpv_2:J},setup(t){const a=u(),n=u(),o=u(),p=[a,n,o],e=I({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return b(y({toggleCode:r=>{const d="vdpv_"+r;e[d+"Height"]===0?e[d+"Height"]=(p[r].value?p[r].value.offsetHeight:0)||0:e[d+"Height"]=0}},R(e)),{vdpv_0Ref:a,vdpv_1Ref:n,vdpv_2Ref:o})}});C.$vd={matter:{},toc:[{content:"Progress \u8FDB\u5EA6\u6761",anchor:"progress-\u8FDB\u5EA6\u6761",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"\u5176\u4ED6\u7528\u6CD5",anchor:"\u5176\u4ED6\u7528\u6CD5",level:3},{content:"\u73AF\u5F62\u8FDB\u5EA6\u6761",anchor:"\u73AF\u5F62\u8FDB\u5EA6\u6761",level:3},{content:"API",anchor:"api",level:2},{content:"Progress",anchor:"progress",level:3}]};const K=C,L={class:"vuedoc"},O=h('<h1 id="progress-\u8FDB\u5EA6\u6761" data-source-line="3"><a class="markdownIt-Anchor" href="#progress-\u8FDB\u5EA6\u6761">#</a> Progress \u8FDB\u5EA6\u6761</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),Q={class:"vuedoc-demo"},W={class:"vuedoc-demo__inner"},X={class:"vuedoc-demo__preview"},Y={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Z=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;danger&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;100&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref()
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ss=[Z],as=s("h3",{id:"\u5176\u4ED6\u7528\u6CD5","data-source-line":"37"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u7528\u6CD5"},"#"),v(" \u5176\u4ED6\u7528\u6CD5")],-1),ns=s("pre",{style:{display:"none"}},null,-1),ts={class:"vuedoc-demo"},ls={class:"vuedoc-demo__inner"},ps={class:"vuedoc-demo__preview"},es={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},os=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8BBE\u7F6E\u5BBD\u9AD8<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8BBE\u7F6E\u80CC\u666F\u548C\u8FDB\u5EA6\u989C\u8272<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#D9E5F1FF&quot;</span> <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#9907C1FF&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FDB\u5EA6\u6587\u5B57\u56FA\u5B9A\u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">:followText</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),cs=[os],rs=s("h3",{id:"\u73AF\u5F62\u8FDB\u5EA6\u6761","data-source-line":"59"},[s("a",{class:"markdownIt-Anchor",href:"#\u73AF\u5F62\u8FDB\u5EA6\u6761"},"#"),v(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),ds=s("pre",{style:{display:"none"}},null,-1),hs={class:"vuedoc-demo"},us={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},is={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},js=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span>
      <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span>
      <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span>
      <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>
      <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span>
    /&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span>
      <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span>
      <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span>
      <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ddd&quot;</span>
      <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#f60&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>
    /&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span>
      <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span>
      <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span>
      <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>
      <span class="hljs-attr">:showText</span>=<span class="hljs-string">&quot;false&quot;</span>
      &gt;</span>\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9&lt;/ak-progress
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),_s=[js],ms=h('<h2 id="api" data-source-line="100"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="progress" data-source-line="102"><a class="markdownIt-Anchor" href="#progress">#</a> Progress</h3><table data-source-line="104"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>Number</td><td>\u8FDB\u5EA6\u503C</td></tr><tr><td>type</td><td>String</td><td>\u8FDB\u5EA6\u6761\u7C7B\u578B\uFF0C\u652F\u6301\u4E24\u79CDline\u76F4\u7EBF\u3001circle\u5706\u73AF</td></tr><tr><td>radius</td><td>Number</td><td>\u5706\u73AF\u534A\u5F84\uFF0C\u5355\u4F4Dpx\u3002line\u65F6\u4E3A\u5BBD</td></tr><tr><td>border</td><td>Number</td><td>\u8FDB\u5EA6\u6761\u5BBD\uFF0C\u5355\u4F4Dpx\u3002line\u65F6\u4E3A\u9AD8</td></tr><tr><td>color</td><td>String</td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>borderColor</td><td>String</td><td>\u8FDB\u5EA6\u989C\u8272</td></tr><tr><td>duration</td><td>Number/1000</td><td>\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td>showText</td><td>Boolean/true</td><td>\u663E\u793A\u8FDB\u5EA6\u6587\u5B57</td></tr><tr><td>followText</td><td>Boolean/true</td><td>\u8FDB\u5EA6\u6587\u5B57\u8DDF\u968F\u8FDB\u5EA6\u7684\u4F4D\u7F6E,type=line\u65F6\u6709\u6548</td></tr><tr><td>className</td><td>String</td><td>\u6837\u5F0F\u7C7B\u540D</td></tr><tr><td>status</td><td>String</td><td>\u652F\u6301 <code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code> \u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>primary</code>\u3002</td></tr></tbody></table>',3);function vs(t,a,n,o,p,e){const q=c("vdpv_0"),r=c("vdpv_1"),d=c("vdpv_2");return g(),i("div",L,[O,s("div",Q,[s("div",W,[s("div",X,[l(q)]),s("div",{style:j({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Y,ss,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=f=>t.toggleCode(0))},_(t.vdpv_0Height>0?"hidden":"show"),1)])]),as,ns,s("div",ts,[s("div",ls,[s("div",ps,[l(r)]),s("div",{style:j({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",es,cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=f=>t.toggleCode(1))},_(t.vdpv_1Height>0?"hidden":"show"),1)])]),rs,ds,s("div",hs,[s("div",us,[s("div",gs,[l(d)]),s("div",{style:j({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",is,_s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=f=>t.toggleCode(2))},_(t.vdpv_2Height>0?"hidden":"show"),1)])]),ms])}var ks=m(K,[["render",vs]]);export{ks as default};
