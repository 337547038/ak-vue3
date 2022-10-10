import{r,v as f,o as i,c as h,x as k,f as n,q,a as v,e as x,w,b as _,_ as $,d as C,g as H,t as A,h as s,n as j,i as m,j as g}from"./index.41bb3964.js";const S={style:{width:"400px",height:"200px",border:"1px solid #ddd"}},L={__name:"README.md.vdpv_0",setup(t){const a=r(!0);return(d,p)=>{const l=f("loading");return i(),h("div",null,[k((i(),h("div",S,[n("\u5BB9\u5668\u533A\u57DF")])),[[l,a.value]])])}}},R={style:{width:"100%",height:"200px",border:"1px solid #ddd"},"ak-loading-text":"\u73A9\u547D\u52A0\u8F7D\u4E2D..","ak-loading-spinner":"ak-icon-loading","ak-loading-background":"rgba(0, 0, 0, 0.8)"},I={__name:"README.md.vdpv_1",setup(t){const a=r(!0);return(d,p)=>{const l=f("loading");return i(),h("div",null,[k((i(),h("div",R,[n("\u5BB9\u5668\u533A\u57DF")])),[[l,a.value]])])}}},E={__name:"README.md.vdpv_2",setup(t){const a=r(!1),d=()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)},p=q("Loading"),l=()=>{const e=p.loading();setTimeout(()=>{e.close()},3e3)};return(e,u)=>{const o=v("ak-button"),c=f("loading");return i(),h("div",null,[k((i(),x(o,{type:"primary",onClick:d},{default:w(()=>[n("\u52A0\u8F7D")]),_:1})),[[c,a.value,void 0,{el:!0,lock:!0}]]),_(o,{type:"primary",onClick:l},{default:w(()=>[n("\u670D\u52A1\u65B9\u5F0F")]),_:1})])}}},b=C({components:{vdpv_0:L,vdpv_1:I,vdpv_2:E},setup(t){const a=r(),d=r(),p=r(),l=[a,d,p],e=H({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:o=>{const c="vdpv_"+o;e[c+"Height"]===0?e[c+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:e[c+"Height"]=0},...A(e),vdpv_0Ref:a,vdpv_1Ref:d,vdpv_2Ref:p}}});b.$vd={matter:{},toc:[{content:"Loading \u52A0\u8F7D\u7B49\u5F85",anchor:"loading-\u52A0\u8F7D\u7B49\u5F85",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u81EA\u5B9A\u4E49",anchor:"\u81EA\u5B9A\u4E49",level:3},{content:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F",anchor:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F",level:3},{content:"API",anchor:"api",level:2},{content:"Loading",anchor:"loading",level:3}]};const D=b,B={class:"vuedoc"},F=g('<h1 id="loading-\u52A0\u8F7D\u7B49\u5F85" data-source-line="3"><a class="markdownIt-Anchor" href="#loading-\u52A0\u8F7D\u7B49\u5F85">#</a> Loading \u52A0\u8F7D\u7B49\u5F85</h1><p data-source-line="5">\u81EA\u5B9A\u4E49\u6307\u4EE4<code>v-loading</code>\uFF0C\u53EA\u9700\u8981\u7ED1\u5B9A<code>Boolean</code>\u5373\u53EF\u3002\u9ED8\u8BA4\u72B6\u51B5\u4E0B\uFF0C<code>Loading</code>\u4F1A\u63D2\u5165\u5230\u7ED1\u5B9A\u5143\u7D20\u7684\u5B50\u8282\u70B9</p><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',4),N={class:"vuedoc-demo"},T={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},V={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},z=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),P=[z],G=s("h3",{id:"\u81EA\u5B9A\u4E49","data-source-line":"28"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49"},"#"),n(" \u81EA\u5B9A\u4E49")],-1),J=s("p",{"data-source-line":"30"},[n("\u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848\u3001\u56FE\u6807\u548C\u80CC\u666F\u8272\u3002\u901A\u8FC7"),s("code",null,"ak-loading-text"),n("\u8BBE\u7F6E\u63D0\u793A\u6587\u5B57\uFF0C"),s("code",null,"ak-loading-spinner"),n("\u8BBE\u7F6E\u56FE\u6807\u7C7B\u540D\uFF0C"),s("code",null,"ak-loading-background"),n("\u8BBE\u7F6E\u80CC\u666F\u8272")],-1),K=s("pre",{style:{display:"none"}},null,-1),O={class:"vuedoc-demo"},Q={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},W={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},X=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),Y=[X],Z=s("h3",{id:"\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F","data-source-line":"54"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F"},"#"),n(" \u5176\u4ED6\u52A0\u8F7D\u65B9\u5F0F")],-1),ss=s("p",{"data-source-line":"56"},[n("\u652F\u6301"),s("code",null,"inject('Loading')"),n("\uFF0C"),s("code",null,"this.$msg()"),n("\uFF0C"),s("code",null,"getCurrentInstance().proxy.$loading()"),n("\u65B9\u5F0F\u5F15\u7528")],-1),as=s("pre",{style:{display:"none"}},null,-1),ns={class:"vuedoc-demo"},ts={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},es={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},os=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span></code></pre></div>`,1),ds=[os],ps=g('<h2 id="api" data-source-line="90"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="loading" data-source-line="92"><a class="markdownIt-Anchor" href="#loading">#</a> Loading</h3><table data-source-line="94"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848</td></tr><tr><td>background</td><td>String</td><td>\u906E\u7F69\u80CC\u666F\u8272</td></tr><tr><td>spinner</td><td>String</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u540D</td></tr><tr><td>lock</td><td>Boolean/false</td><td>\u9501\u5B9A\u6EDA\u52A8</td></tr><tr><td>zIndex</td><td>Number</td><td>\u5C42\u7EA7</td></tr><tr><td>el</td><td>\u6807\u7B7E\u5BF9\u8C61</td><td>\u5C06\u5185\u5BB9\u63D2\u5165\u5230\u6307\u5B9A\u6807\u7B7E\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6807\u7B7E</td></tr></tbody></table>',3);function cs(t,a,d,p,l,e){const u=v("vdpv_0"),o=v("vdpv_1"),c=v("vdpv_2");return i(),h("div",B,[F,s("div",N,[s("div",T,[s("div",M,[_(u)]),s("div",{style:j({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",V,P,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>t.toggleCode(0))},m(t.vdpv_0Height>0?"hidden":"show"),1)])]),G,J,K,s("div",O,[s("div",Q,[s("div",U,[_(o)]),s("div",{style:j({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",W,Y,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>t.toggleCode(1))},m(t.vdpv_1Height>0?"hidden":"show"),1)])]),Z,ss,as,s("div",ns,[s("div",ts,[s("div",ls,[_(c)]),s("div",{style:j({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",es,ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>t.toggleCode(2))},m(t.vdpv_2Height>0?"hidden":"show"),1)])]),ps])}const rs=$(D,[["render",cs]]);export{rs as default};
