import{d as f,r as o,a as d,o as _,c as j,b as i,e as q,g as s,t as v,_ as y,n as u,h as b,i as S,j as g,f as k}from"./index-6c3c2d70.js";const z=f({__name:"README.md.vdpv_0",setup(n){const a=o(1);return(l,e)=>{const t=d("ak-pagination");return _(),j("div",null,[i(t,{total:50,current:a.value},null,8,["current"])])}}}),P={__name:"README.md.vdpv_1",setup(n){const a=o(1),l=o([10,20,30,50]),e=t=>{alert(t)};return(t,p)=>{const c=d("ak-pagination");return _(),q(c,{total:1050,current:a.value,showJumper:!0,pageSizes:l.value,pageSize:10,showTotal:!0,onChangePageSizes:e},null,8,["current","pageSizes"])}}},A={__name:"README.md.vdpv_2",setup(n){const a=o(1),l=e=>{alert(e)};return(e,t)=>{const p=d("ak-pagination");return _(),j("div",null,[s("p",null,"当前页："+v(a.value),1),i(p,{total:50,current:a.value,"onUpdate:current":t[0]||(t[0]=c=>a.value=c),onChange:l,pageSize:10},null,8,["current"])])}}},w=f({components:{vdpv_0:z,vdpv_1:P,vdpv_2:A},setup(n){const a=o(),l=o(),e=o(),t=[a,l,e],p=b({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:r=>{const h="vdpv_"+r;p[h+"Height"]===0?p[h+"Height"]=(t[r].value?t[r].value.offsetHeight:0)||0:p[h+"Height"]=0},...S(p),vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:e}}});w.$vd={matter:{},toc:[{content:"Pagination 分页",anchor:"pagination-分页",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"其他选项参数",anchor:"其他选项参数",level:3},{content:"事件",anchor:"事件",level:3},{content:"API",anchor:"api",level:2},{content:"Pagination",anchor:"pagination",level:3},{content:"Pagination Event",anchor:"pagination-event",level:3}]};const C=w,H={class:"vuedoc"},E=g('<h1 id="pagination-分页" data-source-line="3"><a class="markdownIt-Anchor" href="#pagination-分页">#</a> Pagination 分页</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),R={class:"vuedoc-demo"},$={class:"vuedoc-demo__inner"},I={class:"vuedoc-demo__preview"},D={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},B=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;page1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> page1 = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),M=[B],N=s("h3",{id:"其他选项参数","data-source-line":"21"},[s("a",{class:"markdownIt-Anchor",href:"#其他选项参数"},"#"),k(" 其他选项参数")],-1),T=s("pre",{style:{display:"none"}},null,-1),V={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},x={class:"vuedoc-demo__preview"},U={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},F=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),G=[F],K=s("h3",{id:"事件","data-source-line":"47"},[s("a",{class:"markdownIt-Anchor",href:"#事件"},"#"),k(" 事件")],-1),L=s("pre",{style:{display:"none"}},null,-1),O={class:"vuedoc-demo"},Q={class:"vuedoc-demo__inner"},W={class:"vuedoc-demo__preview"},X={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Y=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前页：{{ page }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
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

</span></code></pre></div>`,1),Z=[Y],ss=g('<h2 id="api" data-source-line="72"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="pagination" data-source-line="74"><a class="markdownIt-Anchor" href="#pagination">#</a> Pagination</h3><table data-source-line="76"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>当前页数，支持v-model</td></tr><tr><td>total</td><td>number</td><td>总条目数</td></tr><tr><td>pageSize</td><td>number</td><td>每页显示条数</td></tr><tr><td>pagerCount</td><td>number/5</td><td>页码按钮的数量，当总页数超过该值时会折叠</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>快速跳转</td></tr><tr><td>pageSizes</td><td>number[]</td><td>每页显示个数选择器的选项设置</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>显示总记录条数</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>当小于或只有一页时是否隐藏显示</td></tr><tr><td>format</td><td>boolean/false</td><td>数值转千分制显示</td></tr></tbody></table><h3 id="pagination-event" data-source-line="88"><a class="markdownIt-Anchor" href="#pagination-event">#</a> Pagination Event</h3><table data-source-line="90"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>changePageSizes</td><td>每页显示条数改变事件</td></tr><tr><td>change</td><td>页码点击改变事件</td></tr></tbody></table>',5);function as(n,a,l,e,t,p){const c=d("vdpv_0"),r=d("vdpv_1"),h=d("vdpv_2");return _(),j("div",H,[E,s("div",R,[s("div",$,[s("div",I,[i(c)]),s("div",{style:u({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",D,M,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=m=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),N,T,s("div",V,[s("div",J,[s("div",x,[i(r)]),s("div",{style:u({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",U,G,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=m=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),K,L,s("div",O,[s("div",Q,[s("div",W,[i(h)]),s("div",{style:u({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",X,Z,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=m=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),ss])}const ts=y(C,[["render",as]]);export{ts as default};
