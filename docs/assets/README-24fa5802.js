import{d as k,r as u,a as c,o as g,c as i,g as s,b as a,_ as m,w as y,f as v,n as j,t as _,h as b,i as w,j as h}from"./index-6c3c2d70.js";const C=k({__name:"README.md.vdpv_0",setup(l){const t=u();return(n,o)=>{const p=c("ak-progress");return g(),i("div",null,[s("p",null,[a(p,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,["modelValue"])]),s("p",null,[a(p,{modelValue:30})]),s("p",null,[a(p,{modelValue:50,status:"success"})]),s("p",null,[a(p,{modelValue:60,status:"warning"})]),s("p",null,[a(p,{modelValue:70,status:"danger"})]),s("p",null,[a(p,{modelValue:100})])])}}}),$={},H=s("p",null,"设置宽高",-1),x=s("p",null,"设置背景和进度颜色",-1),A=s("p",null,"进度文字固定位置",-1);function F(l,t){const n=c("ak-progress");return g(),i("div",null,[H,s("p",null,[a(n,{modelValue:50,radius:300,border:10})]),x,s("p",null,[a(n,{modelValue:30,color:"#D9E5F1FF",borderColor:"#9907C1FF"})]),A,s("p",null,[a(n,{modelValue:80,followText:!1})])])}const N=m($,[["render",F]]),R={};function I(l,t){const n=c("ak-progress");return g(),i("div",null,[a(n,{"model-value":0,radius:50,border:8,type:"circle"}),a(n,{modelValue:30,radius:50,border:8,type:"circle",status:"success"}),a(n,{modelValue:50,radius:50,border:8,type:"circle"}),a(n,{modelValue:80,radius:50,border:8,color:"#ddd",borderColor:"#f60",type:"circle"}),a(n,{modelValue:100,radius:50,border:8,type:"circle"}),a(n,{modelValue:80,radius:50,border:8,type:"circle",showText:!1},{default:y(()=>[v("自定义显示内容")]),_:1})])}const S=m(R,[["render",I]]),V=k({components:{vdpv_0:C,vdpv_1:N,vdpv_2:S},setup(l){const t=u(),n=u(),o=u(),p=[t,n,o],e=b({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:r=>{const d="vdpv_"+r;e[d+"Height"]===0?e[d+"Height"]=(p[r].value?p[r].value.offsetHeight:0)||0:e[d+"Height"]=0},...w(e),vdpv_0Ref:t,vdpv_1Ref:n,vdpv_2Ref:o}}});V.$vd={matter:{},toc:[{content:"Progress 进度条",anchor:"progress-进度条",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"其他用法",anchor:"其他用法",level:3},{content:"环形进度条",anchor:"环形进度条",level:3},{content:"API",anchor:"api",level:2},{content:"Progress",anchor:"progress",level:3}]};const E=V,T={class:"vuedoc"},P=h('<h1 id="progress-进度条" data-source-line="3"><a class="markdownIt-Anchor" href="#progress-进度条">#</a> Progress 进度条</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),B={class:"vuedoc-demo"},D={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},z={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},U=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),G=[U],J=s("h3",{id:"其他用法","data-source-line":"37"},[s("a",{class:"markdownIt-Anchor",href:"#其他用法"},"#"),v(" 其他用法")],-1),K=s("pre",{style:{display:"none"}},null,-1),L={class:"vuedoc-demo"},O={class:"vuedoc-demo__inner"},Q={class:"vuedoc-demo__preview"},W={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},X=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置宽高<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置背景和进度颜色<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#D9E5F1FF&quot;</span> <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#9907C1FF&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>进度文字固定位置<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">:followText</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),Y=[X],Z=s("h3",{id:"环形进度条","data-source-line":"59"},[s("a",{class:"markdownIt-Anchor",href:"#环形进度条"},"#"),v(" 环形进度条")],-1),ss=s("pre",{style:{display:"none"}},null,-1),as={class:"vuedoc-demo"},ns={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},ls={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ps=h(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      &gt;</span>自定义显示内容&lt;/ak-progress
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),es=[ps],os=h('<h2 id="api" data-source-line="100"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="progress" data-source-line="102"><a class="markdownIt-Anchor" href="#progress">#</a> Progress</h3><table data-source-line="104"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Number</td><td>进度值</td></tr><tr><td>type</td><td>String</td><td>进度条类型，支持两种line直线、circle圆环</td></tr><tr><td>radius</td><td>Number</td><td>圆环半径，单位px。line时为宽</td></tr><tr><td>border</td><td>Number</td><td>进度条宽，单位px。line时为高</td></tr><tr><td>color</td><td>String</td><td>背景颜色</td></tr><tr><td>borderColor</td><td>String</td><td>进度颜色</td></tr><tr><td>duration</td><td>Number/1000</td><td>持续时间，单位毫秒</td></tr><tr><td>showText</td><td>Boolean/true</td><td>显示进度文字</td></tr><tr><td>followText</td><td>Boolean/true</td><td>进度文字跟随进度的位置,type=line时有效</td></tr><tr><td>className</td><td>String</td><td>样式类名</td></tr><tr><td>status</td><td>String</td><td>支持 <code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 类型，默认为 <code>primary</code>。</td></tr></tbody></table>',3);function cs(l,t,n,o,p,e){const q=c("vdpv_0"),r=c("vdpv_1"),d=c("vdpv_2");return g(),i("div",T,[P,s("div",B,[s("div",D,[s("div",M,[a(q)]),s("div",{style:j({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",z,G,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:t[0]||(t[0]=f=>l.toggleCode(0))},_(l.vdpv_0Height>0?"hidden":"show"),1)])]),J,K,s("div",L,[s("div",O,[s("div",Q,[a(r)]),s("div",{style:j({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",W,Y,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:t[1]||(t[1]=f=>l.toggleCode(1))},_(l.vdpv_1Height>0?"hidden":"show"),1)])]),Z,ss,s("div",as,[s("div",ns,[s("div",ts,[a(d)]),s("div",{style:j({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:t[2]||(t[2]=f=>l.toggleCode(2))},_(l.vdpv_2Height>0?"hidden":"show"),1)])]),os])}const ds=m(E,[["render",cs]]);export{ds as default};
