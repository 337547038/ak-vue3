import{d as f,r as o,a as d,o as _,c as j,b as i,e as q,h as s,i as v,_ as y,g as b,t as S,n as u,j as g,f as k}from"./index.167b6bea.js";const z=f({__name:"README.md.vdpv_0",setup(n){const a=o(1);return(l,e)=>{const t=d("ak-pagination");return _(),j("div",null,[i(t,{total:50,current:a.value},null,8,["current"])])}}}),P={__name:"README.md.vdpv_1",setup(n){const a=o(1),l=o([10,20,30,50]),e=t=>{alert(t)};return(t,p)=>{const c=d("ak-pagination");return _(),q(c,{total:1050,current:a.value,showJumper:!0,pageSizes:l.value,pageSize:10,showTotal:!0,onChangePageSizes:e},null,8,["current","pageSizes"])}}},A={__name:"README.md.vdpv_2",setup(n){const a=o(1),l=e=>{alert(e)};return(e,t)=>{const p=d("ak-pagination");return _(),j("div",null,[s("p",null,"\u5F53\u524D\u9875\uFF1A"+v(a.value),1),i(p,{total:50,current:a.value,"onUpdate:current":t[0]||(t[0]=c=>a.value=c),onChange:l,pageSize:10},null,8,["current"])])}}},w=f({components:{vdpv_0:z,vdpv_1:P,vdpv_2:A},setup(n){const a=o(),l=o(),e=o(),t=[a,l,e],p=b({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:r=>{const h="vdpv_"+r;p[h+"Height"]===0?p[h+"Height"]=(t[r].value?t[r].value.offsetHeight:0)||0:p[h+"Height"]=0},...S(p),vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:e}}});w.$vd={matter:{},toc:[{content:"Pagination \u5206\u9875",anchor:"pagination-\u5206\u9875",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"\u5176\u4ED6\u9009\u9879\u53C2\u6570",anchor:"\u5176\u4ED6\u9009\u9879\u53C2\u6570",level:3},{content:"\u4E8B\u4EF6",anchor:"\u4E8B\u4EF6",level:3},{content:"API",anchor:"api",level:2},{content:"Pagination",anchor:"pagination",level:3},{content:"Pagination Event",anchor:"pagination-event",level:3}]};const C=w,H={class:"vuedoc"},E=g('<h1 id="pagination-\u5206\u9875" data-source-line="3"><a class="markdownIt-Anchor" href="#pagination-\u5206\u9875">#</a> Pagination \u5206\u9875</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),R={class:"vuedoc-demo"},$={class:"vuedoc-demo__inner"},I={class:"vuedoc-demo__preview"},D={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},B=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;page1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> page1 = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),M=[B],N=s("h3",{id:"\u5176\u4ED6\u9009\u9879\u53C2\u6570","data-source-line":"21"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u9009\u9879\u53C2\u6570"},"#"),k(" \u5176\u4ED6\u9009\u9879\u53C2\u6570")],-1),T=s("pre",{style:{display:"none"}},null,-1),V={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},x={class:"vuedoc-demo__preview"},U={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},F=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span>
    <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;1050&quot;</span>
    <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;page1&quot;</span>
    <span class="hljs-attr">:showJumper</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:pageSizes</span>=<span class="hljs-string">&quot;pageSizes&quot;</span>
    <span class="hljs-attr">:pageSize</span>=<span class="hljs-string">&quot;10&quot;</span>
    <span class="hljs-attr">:showTotal</span>=<span class="hljs-string">&quot;true&quot;</span>
    @<span class="hljs-attr">changePageSizes</span>=<span class="hljs-string">&quot;changePageSizes&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> page1 = ref(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> pageSizes = ref([<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">50</span>])
  <span class="hljs-keyword">const</span> changePageSizes = <span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> {
    alert(page)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),G=[F],K=s("h3",{id:"\u4E8B\u4EF6","data-source-line":"47"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E8B\u4EF6"},"#"),k(" \u4E8B\u4EF6")],-1),L=s("pre",{style:{display:"none"}},null,-1),O={class:"vuedoc-demo"},Q={class:"vuedoc-demo__inner"},W={class:"vuedoc-demo__preview"},X={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Y=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5F53\u524D\u9875\uFF1A{{ page }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span>
      <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;50&quot;</span>
      <span class="hljs-attr">v-model:current</span>=<span class="hljs-string">&quot;page&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
      <span class="hljs-attr">:pageSize</span>=<span class="hljs-string">&quot;10&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> page = ref(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> {
    alert(page)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Z=[Y],ss=g('<h2 id="api" data-source-line="72"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="pagination" data-source-line="74"><a class="markdownIt-Anchor" href="#pagination">#</a> Pagination</h3><table data-source-line="76"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301v-model</td></tr><tr><td>total</td><td>number</td><td>\u603B\u6761\u76EE\u6570</td></tr><tr><td>pageSize</td><td>number</td><td>\u6BCF\u9875\u663E\u793A\u6761\u6570</td></tr><tr><td>pagerCount</td><td>number/5</td><td>\u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>\u5FEB\u901F\u8DF3\u8F6C</td></tr><tr><td>pageSizes</td><td>number[]</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>\u663E\u793A\u603B\u8BB0\u5F55\u6761\u6570</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>\u5F53\u5C0F\u4E8E\u6216\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u663E\u793A</td></tr><tr><td>format</td><td>boolean/false</td><td>\u6570\u503C\u8F6C\u5343\u5206\u5236\u663E\u793A</td></tr></tbody></table><h3 id="pagination-event" data-source-line="88"><a class="markdownIt-Anchor" href="#pagination-event">#</a> Pagination Event</h3><table data-source-line="90"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>changePageSizes</td><td>\u6BCF\u9875\u663E\u793A\u6761\u6570\u6539\u53D8\u4E8B\u4EF6</td></tr><tr><td>change</td><td>\u9875\u7801\u70B9\u51FB\u6539\u53D8\u4E8B\u4EF6</td></tr></tbody></table>',5);function as(n,a,l,e,t,p){const c=d("vdpv_0"),r=d("vdpv_1"),h=d("vdpv_2");return _(),j("div",H,[E,s("div",R,[s("div",$,[s("div",I,[i(c)]),s("div",{style:u({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",D,M,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=m=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),N,T,s("div",V,[s("div",J,[s("div",x,[i(r)]),s("div",{style:u({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",U,G,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=m=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),K,L,s("div",O,[s("div",Q,[s("div",W,[i(h)]),s("div",{style:u({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",X,Z,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=m=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),ss])}const ts=y(C,[["render",as]]);export{ts as default};
