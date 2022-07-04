var H=Object.defineProperty,S=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(n,a,t)=>a in n?H(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,q=(n,a)=>{for(var t in a||(a={}))I.call(a,t)&&b(n,t,a[t]);if(w)for(var t of w(a))A.call(a,t)&&b(n,t,a[t]);return n},$=(n,a)=>S(n,L(a));import{b as r,l as f,o as i,c as h,m as k,g as l,p as R,e as _,j as B,w as x,i as v,_ as F,d as N,r as T,t as D,f as s,n as j,h as m,a as g}from"./index.8e9b675c.js";const V={style:{width:"400px",height:"200px",border:"1px solid #ddd"}},E=l("\u5BB9\u5668\u533A\u57DF"),z=[E],P={setup(n){const a=r(!0);return(t,c)=>{const e=f("loading");return i(),h("div",null,[k((i(),h("div",V,z)),[[e,a.value]])])}}},M={style:{width:"100%",height:"200px",border:"1px solid #ddd"},"ak-loading-text":"\u73A9\u547D\u52A0\u8F7D\u4E2D..","ak-loading-spinner":"ak-icon-loading","ak-loading-background":"rgba(0, 0, 0, 0.8)"},G=l("\u5BB9\u5668\u533A\u57DF"),J=[G],K={setup(n){const a=r(!0);return(t,c)=>{const e=f("loading");return i(),h("div",null,[k((i(),h("div",M,J)),[[e,a.value]])])}}},O=l("\u52A0\u8F7D"),Q=l("\u670D\u52A1\u65B9\u5F0F"),U={setup(n){const a=r(!1),t=()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)},c=R("Loading"),e=()=>{const o=c.loading();setTimeout(()=>{o.close()},3e3)};return(o,u)=>{const d=_("ak-button"),p=f("loading");return i(),h("div",null,[k((i(),B(d,{type:"primary",onClick:t},{default:x(()=>[O]),_:1})),[[p,a.value,void 0,{el:!0,lock:!0}]]),v(d,{type:"primary",onClick:e},{default:x(()=>[Q]),_:1})])}}},C=N({components:{vdpv_0:P,vdpv_1:K,vdpv_2:U},setup(n){const a=r(),t=r(),c=r(),e=[a,t,c],o=T({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return $(q({toggleCode:d=>{const p="vdpv_"+d;o[p+"Height"]===0?o[p+"Height"]=(e[d].value?e[d].value.offsetHeight:0)||0:o[p+"Height"]=0}},D(o)),{vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:c})}});C.$vd={matter:{},toc:[{content:"Loading \u52A0\u8F7D\u7B49\u5F85",anchor:"loading-\u52A0\u8F7D\u7B49\u5F85",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u81EA\u5B9A\u4E49",anchor:"\u81EA\u5B9A\u4E49",level:3},{content:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F",anchor:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F",level:3},{content:"API",anchor:"api",level:2},{content:"Loading",anchor:"loading",level:3}]};const W=C,X={class:"vuedoc"},Y=g('<h1 id="loading-\u52A0\u8F7D\u7B49\u5F85" data-source-line="3"><a class="markdownIt-Anchor" href="#loading-\u52A0\u8F7D\u7B49\u5F85">#</a> Loading \u52A0\u8F7D\u7B49\u5F85</h1><p data-source-line="5">\u81EA\u5B9A\u4E49\u6307\u4EE4<code>v-loading</code>\uFF0C\u53EA\u9700\u8981\u7ED1\u5B9A<code>Boolean</code>\u5373\u53EF\u3002\u9ED8\u8BA4\u72B6\u51B5\u4E0B\uFF0C<code>Loading</code>\u4F1A\u63D2\u5165\u5230\u7ED1\u5B9A\u5143\u7D20\u7684\u5B50\u8282\u70B9</p><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',4),Z={class:"vuedoc-demo"},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ts=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 400px; height: 200px; border: 1px solid #ddd&quot;</span>
      &gt;</span>\u5BB9\u5668\u533A\u57DF&lt;/div
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ls=[ts],es=s("h3",{id:"\u81EA\u5B9A\u4E49","data-source-line":"28"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49"},"#"),l(" \u81EA\u5B9A\u4E49")],-1),os=s("p",{"data-source-line":"30"},[l("\u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848\u3001\u56FE\u6807\u548C\u80CC\u666F\u8272\u3002\u901A\u8FC7"),s("code",null,"ak-loading-text"),l("\u8BBE\u7F6E\u63D0\u793A\u6587\u5B57\uFF0C"),s("code",null,"ak-loading-spinner"),l("\u8BBE\u7F6E\u56FE\u6807\u7C7B\u540D\uFF0C"),s("code",null,"ak-loading-background"),l("\u8BBE\u7F6E\u80CC\u666F\u8272")],-1),ds=s("pre",{style:{display:"none"}},null,-1),cs={class:"vuedoc-demo"},ps={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},rs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},hs=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 200px; border: 1px solid #ddd&quot;</span>
      <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">ak-loading-text</span>=<span class="hljs-string">&quot;\u73A9\u547D\u52A0\u8F7D\u4E2D..&quot;</span>
      <span class="hljs-attr">ak-loading-spinner</span>=<span class="hljs-string">&quot;ak-icon-loading&quot;</span>
      <span class="hljs-attr">ak-loading-background</span>=<span class="hljs-string">&quot;rgba(0, 0, 0, 0.8)&quot;</span>
      &gt;</span>\u5BB9\u5668\u533A\u57DF&lt;/div
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),gs=[hs],_s=s("h3",{id:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F","data-source-line":"54"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F"},"#"),l(" \u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F")],-1),vs=s("p",{"data-source-line":"56"},[l("\u652F\u6301"),s("code",null,"inject('Loading')"),l("\uFF0C"),s("code",null,"this.$msg()"),l("\uFF0C"),s("code",null,"getCurrentInstance().proxy.$loading()"),l("\u65B9\u5F0F\u5F15\u7528")],-1),us=s("pre",{style:{display:"none"}},null,-1),js={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},ks={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ys=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>
      <span class="hljs-attr">v-loading.el.lock</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openFullScreen&quot;</span>
      &gt;</span>\u52A0\u8F7D&lt;/ak-button
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openFullScreen2&quot;</span>&gt;</span>\u670D\u52A1\u65B9\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> openFullScreen = <span class="hljs-function">() =&gt;</span> {
    loading.value = <span class="hljs-literal">true</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      loading.value = <span class="hljs-literal">false</span>
    }, <span class="hljs-number">3000</span>)
  }
  <span class="hljs-keyword">const</span> Loading = inject(<span class="hljs-string">&#39;Loading&#39;</span>)
  <span class="hljs-keyword">const</span> openFullScreen2 = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> loading = Loading.loading()
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      loading.close()
    }, <span class="hljs-number">3000</span>)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),ws=[ys],bs=g('<h2 id="api" data-source-line="90"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="loading" data-source-line="92"><a class="markdownIt-Anchor" href="#loading">#</a> Loading</h3><table data-source-line="94"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848</td></tr><tr><td>background</td><td>String</td><td>\u906E\u7F69\u80CC\u666F\u8272</td></tr><tr><td>spinner</td><td>String</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u540D</td></tr><tr><td>lock</td><td>Boolean/false</td><td>\u9501\u5B9A\u6EDA\u52A8</td></tr><tr><td>zIndex</td><td>Number</td><td>\u5C42\u7EA7</td></tr><tr><td>el</td><td>\u6807\u7B7E\u5BF9\u8C61</td><td>\u5C06\u5185\u5BB9\u63D2\u5165\u5230\u6307\u5B9A\u6807\u7B7E\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6807\u7B7E</td></tr></tbody></table>',3);function qs(n,a,t,c,e,o){const u=_("vdpv_0"),d=_("vdpv_1"),p=_("vdpv_2");return i(),h("div",X,[Y,s("div",Z,[s("div",ss,[s("div",as,[v(u)]),s("div",{style:j({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ns,ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>n.toggleCode(0))},m(n.vdpv_0Height>0?"hidden":"show"),1)])]),es,os,ds,s("div",cs,[s("div",ps,[s("div",is,[v(d)]),s("div",{style:j({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",rs,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>n.toggleCode(1))},m(n.vdpv_1Height>0?"hidden":"show"),1)])]),_s,vs,us,s("div",js,[s("div",ms,[s("div",fs,[v(p)]),s("div",{style:j({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ks,ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>n.toggleCode(2))},m(n.vdpv_2Height>0?"hidden":"show"),1)])]),bs])}var Cs=F(W,[["render",qs]]);export{Cs as default};
