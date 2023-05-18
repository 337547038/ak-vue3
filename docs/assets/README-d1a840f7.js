import{r,v as f,o as i,c as h,x as k,f as n,q,a as v,e as x,w,b as _,_ as $,g as s,n as j,t as m,d as C,h as H,i as A,j as g}from"./index-6c3c2d70.js";const S={style:{width:"400px",height:"200px",border:"1px solid #ddd"}},L={__name:"README.md.vdpv_0",setup(t){const a=r(!0);return(d,p)=>{const l=f("loading");return i(),h("div",null,[k((i(),h("div",S,[n("容器区域")])),[[l,a.value]])])}}},R={style:{width:"100%",height:"200px",border:"1px solid #ddd"},"ak-loading-text":"玩命加载中..","ak-loading-spinner":"ak-icon-loading","ak-loading-background":"rgba(0, 0, 0, 0.8)"},I={__name:"README.md.vdpv_1",setup(t){const a=r(!0);return(d,p)=>{const l=f("loading");return i(),h("div",null,[k((i(),h("div",R,[n("容器区域")])),[[l,a.value]])])}}},E={__name:"README.md.vdpv_2",setup(t){const a=r(!1),d=()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)},p=q("Loading"),l=()=>{const e=p.loading();setTimeout(()=>{e.close()},3e3)};return(e,u)=>{const o=v("ak-button"),c=f("loading");return i(),h("div",null,[k((i(),x(o,{type:"primary",onClick:d},{default:w(()=>[n("加载")]),_:1})),[[c,a.value,void 0,{el:!0,lock:!0}]]),_(o,{type:"primary",onClick:l},{default:w(()=>[n("服务方式")]),_:1})])}}},b=C({components:{vdpv_0:L,vdpv_1:I,vdpv_2:E},setup(t){const a=r(),d=r(),p=r(),l=[a,d,p],e=H({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:o=>{const c="vdpv_"+o;e[c+"Height"]===0?e[c+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:e[c+"Height"]=0},...A(e),vdpv_0Ref:a,vdpv_1Ref:d,vdpv_2Ref:p}}});b.$vd={matter:{},toc:[{content:"Loading 加载等待",anchor:"loading-加载等待",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"自定义",anchor:"自定义",level:3},{content:"其他加载方式",anchor:"其他加载方式",level:3},{content:"API",anchor:"api",level:2},{content:"Loading",anchor:"loading",level:3}]};const D=b,B={class:"vuedoc"},F=g('<h1 id="loading-加载等待" data-source-line="3"><a class="markdownIt-Anchor" href="#loading-加载等待">#</a> Loading 加载等待</h1><p data-source-line="5">自定义指令<code>v-loading</code>，只需要绑定<code>Boolean</code>即可。默认状况下，<code>Loading</code>会插入到绑定元素的子节点</p><h3 id="基本用法" data-source-line="7"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',4),N={class:"vuedoc-demo"},T={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},V={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},z=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 400px; height: 200px; border: 1px solid #ddd&quot;</span>
      &gt;</span>容器区域&lt;/div
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),P=[z],G=s("h3",{id:"自定义","data-source-line":"28"},[s("a",{class:"markdownIt-Anchor",href:"#自定义"},"#"),n(" 自定义")],-1),J=s("p",{"data-source-line":"30"},[n("可自定义加载文案、图标和背景色。通过"),s("code",null,"ak-loading-text"),n("设置提示文字，"),s("code",null,"ak-loading-spinner"),n("设置图标类名，"),s("code",null,"ak-loading-background"),n("设置背景色")],-1),K=s("pre",{style:{display:"none"}},null,-1),O={class:"vuedoc-demo"},Q={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},W={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},X=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 200px; border: 1px solid #ddd&quot;</span>
      <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">ak-loading-text</span>=<span class="hljs-string">&quot;玩命加载中..&quot;</span>
      <span class="hljs-attr">ak-loading-spinner</span>=<span class="hljs-string">&quot;ak-icon-loading&quot;</span>
      <span class="hljs-attr">ak-loading-background</span>=<span class="hljs-string">&quot;rgba(0, 0, 0, 0.8)&quot;</span>
      &gt;</span>容器区域&lt;/div
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Y=[X],Z=s("h3",{id:"其他加载方式","data-source-line":"54"},[s("a",{class:"markdownIt-Anchor",href:"#其他加载方式"},"#"),n(" 其他加载方式")],-1),ss=s("p",{"data-source-line":"56"},[n("支持"),s("code",null,"inject('Loading')"),n("，"),s("code",null,"this.$msg()"),n("，"),s("code",null,"getCurrentInstance().proxy.$loading()"),n("方式引用")],-1),as=s("pre",{style:{display:"none"}},null,-1),ns={class:"vuedoc-demo"},ts={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},es={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},os=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>
      <span class="hljs-attr">v-loading.el.lock</span>=<span class="hljs-string">&quot;loading&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openFullScreen&quot;</span>
      &gt;</span>加载&lt;/ak-button
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openFullScreen2&quot;</span>&gt;</span>服务方式<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
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
</span></code></pre></div>`,1),ds=[os],ps=g('<h2 id="api" data-source-line="90"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="loading" data-source-line="92"><a class="markdownIt-Anchor" href="#loading">#</a> Loading</h3><table data-source-line="94"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>显示在加载图标下方的加载文案</td></tr><tr><td>background</td><td>String</td><td>遮罩背景色</td></tr><tr><td>spinner</td><td>String</td><td>自定义加载图标类名</td></tr><tr><td>lock</td><td>Boolean/false</td><td>锁定滚动</td></tr><tr><td>zIndex</td><td>Number</td><td>层级</td></tr><tr><td>el</td><td>标签对象</td><td>将内容插入到指定标签，默认为当前标签</td></tr></tbody></table>',3);function cs(t,a,d,p,l,e){const u=v("vdpv_0"),o=v("vdpv_1"),c=v("vdpv_2");return i(),h("div",B,[F,s("div",N,[s("div",T,[s("div",M,[_(u)]),s("div",{style:j({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",V,P,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>t.toggleCode(0))},m(t.vdpv_0Height>0?"hidden":"show"),1)])]),G,J,K,s("div",O,[s("div",Q,[s("div",U,[_(o)]),s("div",{style:j({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",W,Y,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>t.toggleCode(1))},m(t.vdpv_1Height>0?"hidden":"show"),1)])]),Z,ss,as,s("div",ns,[s("div",ts,[s("div",ls,[_(c)]),s("div",{style:j({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",es,ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>t.toggleCode(2))},m(t.vdpv_2Height>0?"hidden":"show"),1)])]),ps])}const rs=$(D,[["render",cs]]);export{rs as default};
