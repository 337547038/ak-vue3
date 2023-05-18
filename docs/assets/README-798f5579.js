import{d as u,r as o,a as p,o as m,c as f,b as c,e as q,_ as y,g as s,n as g,t as j,h as H,i as V,j as i,f as h}from"./index-6c3c2d70.js";const A=u({__name:"README.md.vdpv_0",setup(t){const a=o("");return(d,e)=>{const n=p("ak-textarea");return m(),f("div",null,[c(n,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),placeholder:"placeholder"},null,8,["modelValue"])])}}}),R=u({__name:"README.md.vdpv_1",setup(t){const a=o("不能输入");return(d,e)=>{const n=p("ak-textarea");return m(),f("div",null,[c(n,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),placeholder:"placeholder",disabled:"disabled"},null,8,["modelValue"])])}}}),$=u({__name:"README.md.vdpv_2",setup(t){const a=o("输入些文字回车换行试试");return(d,e)=>{const n=p("ak-textarea");return m(),q(n,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),placeholder:"placeholder"},null,8,["modelValue"])}}}),b=u({__name:"README.md.vdpv_3",setup(t){const a=o("");return(d,e)=>{const n=p("ak-textarea");return m(),f("div",null,[c(n,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),placeholder:"placeholder",maxlength:10,showWordLimit:""},null,8,["modelValue"])])}}}),w=u({components:{vdpv_0:A,vdpv_1:R,vdpv_2:$,vdpv_3:b},setup(t){const a=o(),d=o(),e=o(),n=o(),l=[a,d,e,n],r=H({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return{toggleCode:v=>{const _="vdpv_"+v;r[_+"Height"]===0?r[_+"Height"]=(l[v].value?l[v].value.offsetHeight:0)||0:r[_+"Height"]=0},...V(r),vdpv_0Ref:a,vdpv_1Ref:d,vdpv_2Ref:e,vdpv_3Ref:n}}});w.$vd={matter:{},toc:[{content:"Textarea 文本框",anchor:"textarea-文本框",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"禁用",anchor:"禁用",level:3},{content:"自动高",anchor:"自动高",level:3},{content:"显示输入字数",anchor:"显示输入字数",level:3},{content:"API",anchor:"api",level:2},{content:"Textarea",anchor:"textarea",level:3}]};const C=w,E={class:"vuedoc"},I=i('<h1 id="textarea-文本框" data-source-line="3"><a class="markdownIt-Anchor" href="#textarea-文本框">#</a> Textarea 文本框</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),S={class:"vuedoc-demo"},D={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},T={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},B=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),N=[B],U=s("h3",{id:"禁用","data-source-line":"21"},[s("a",{class:"markdownIt-Anchor",href:"#禁用"},"#"),h(" 禁用")],-1),L=s("pre",{style:{display:"none"}},null,-1),W={class:"vuedoc-demo"},P={class:"vuedoc-demo__inner"},z={class:"vuedoc-demo__preview"},F={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},G=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
      <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;不能输入&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),J=[G],K=s("h3",{id:"自动高","data-source-line":"41"},[s("a",{class:"markdownIt-Anchor",href:"#自动高"},"#"),h(" 自动高")],-1),O=s("pre",{style:{display:"none"}},null,-1),Q={class:"vuedoc-demo"},X={class:"vuedoc-demo__inner"},Y={class:"vuedoc-demo__preview"},Z={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ss=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;输入些文字回车换行试试&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),as=[ss],ts=s("h3",{id:"显示输入字数","data-source-line":"56"},[s("a",{class:"markdownIt-Anchor",href:"#显示输入字数"},"#"),h(" 显示输入字数")],-1),es=s("p",{"data-source-line":"57"},[h("在使用 "),s("code",null,"maxlength"),h(" 属性限制最大输入长度的同时，可通过设置 "),s("code",null,"show-word-limit"),h(" 属性来展示字数统计")],-1),ns=s("pre",{style:{display:"none"}},null,-1),ls={class:"vuedoc-demo"},os={class:"vuedoc-demo__inner"},ps={class:"vuedoc-demo__preview"},ds={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},cs=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
      <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;10&quot;</span>
      <span class="hljs-attr">showWordLimit</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),rs=[cs],hs=i('<h2 id="api" data-source-line="77"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="textarea" data-source-line="79"><a class="markdownIt-Anchor" href="#textarea">#</a> Textarea</h3><table data-source-line="81"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>autoHeight</td><td>boolean/true</td><td>自动高</td></tr><tr><td>width</td><td>String</td><td>要带单位px/%</td></tr><tr><td>height</td><td>String</td><td>要带单位px</td></tr><tr><td>maxHeight</td><td>String</td><td>最大高度</td></tr><tr><td>showWordLimit</td><td>boolena/false</td><td>原生属性，最大输入长度</td></tr><tr><td>maxlength</td><td>number</td><td>是否显示输入字数统计</td></tr></tbody></table>',3);function is(t,a,d,e,n,l){const r=p("vdpv_0"),k=p("vdpv_1"),v=p("vdpv_2"),_=p("vdpv_3");return m(),f("div",E,[I,s("div",S,[s("div",D,[s("div",M,[c(r)]),s("div",{style:g({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",T,N,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=x=>t.toggleCode(0))},j(t.vdpv_0Height>0?"hidden":"show"),1)])]),U,L,s("div",W,[s("div",P,[s("div",z,[c(k)]),s("div",{style:g({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",F,J,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=x=>t.toggleCode(1))},j(t.vdpv_1Height>0?"hidden":"show"),1)])]),K,O,s("div",Q,[s("div",X,[s("div",Y,[c(v)]),s("div",{style:g({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Z,as,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=x=>t.toggleCode(2))},j(t.vdpv_2Height>0?"hidden":"show"),1)])]),ts,es,ns,s("div",ls,[s("div",os,[s("div",ps,[c(_)]),s("div",{style:g({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ds,rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=x=>t.toggleCode(3))},j(t.vdpv_3Height>0?"hidden":"show"),1)])]),hs])}const _s=y(C,[["render",is]]);export{_s as default};
