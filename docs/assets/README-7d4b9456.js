import{r as o,a as u,o as b,c as y,g as s,t as d,b as p,u as _,_ as A,n as k,d as H,h as z,i as R,j as f,f as v}from"./index-6c3c2d70.js";const m=[{value:"广东",label:"广东",children:[{value:"广州",label:"广州",children:[{value:"天河",label:"天河"},{value:"白云",label:"白云"},{value:"越秀",label:"越秀"},{value:"海珠",label:"海珠"}]},{value:"深圳",label:"深圳",children:[{value:"罗湖区",label:"罗湖区"},{value:"宝安区",label:"宝安区"},{value:"南山区",label:"南山区"},{value:"龙岗区",label:"龙岗区"},{value:"盐田区",label:"盐田区"}]},{value:"东莞",label:"东莞",children:[{value:"长安",label:"长安"},{value:"虎门",label:"虎门"},{value:"茶山",label:"茶山"}]},{label:"禁用测试",disabled:!0,value:"1",children:[{label:"禁用测试2",value:"2"}]}]},{value:"北京",label:"北京",children:[{value:"西城区",label:"西城区"},{value:"崇文区",label:"崇文区"},{value:"宣武区",label:"宣武区"},{value:"朝阳区",label:"朝阳区"},{value:"丰台区",label:"丰台区"},{value:"海淀区",label:"海淀区"}]},{value:"上海",label:"上海",children:[{value:"黄浦区",label:"黄浦区"},{value:"卢湾区",label:"卢湾区"},{value:"徐汇区",label:"徐汇区"},{value:"广州1",label:"广州"}]}],E={__name:"README.md.vdpv_0",setup(n){const a=o([]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m)},null,8,["modelValue","options"])])}}},I={__name:"README.md.vdpv_1",setup(n){const a=o(["广东,广州,白云"]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m)},null,8,["modelValue","options"])])}}},U={__name:"README.md.vdpv_2",setup(n){const a=o(["广东,广州,白云"]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m)},null,8,["modelValue","options"])])}}},T={__name:"README.md.vdpv_3",setup(n){const a=o(["广东,广州,白云"]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m),clear:!0},null,8,["modelValue","options"])])}}},D=s("p",null,"使用`collapseTags`折叠多选项",-1),M={__name:"README.md.vdpv_4",setup(n){const a=o(["广东,广州,白云","上海,黄蒲区"]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m),multiple:!0},null,8,["modelValue","options"]),D,p(t,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),placeholder:"请选择",options:_(m),multiple:!0,collapseTags:""},null,8,["modelValue","options"])])}}},L=s("p",null,"单选可搜索",-1),S=s("p",null,"多选可搜索",-1),B={__name:"README.md.vdpv_5",setup(n){const a=o(["广东,广州,白云"]);return(h,l)=>{const t=u("ak-cascader");return b(),y("div",null,[L,p(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"请选择",options:_(m),filterable:""},null,8,["modelValue","options"]),S,p(t,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),placeholder:"请选择",options:_(m),filterable:"",multiple:""},null,8,["modelValue","options"])])}}},N=s("br",null,null,-1),x=s("br",null,null,-1),O=s("br",null,null,-1),P=s("br",null,null,-1),K=s("br",null,null,-1),F=s("br",null,null,-1),G=s("p",null,"可搜索异步加载",-1),J={__name:"README.md.vdpv_6",setup(n){const a=o(["广东,广州,白云"]),h=o([]),l=o([]),t=o([]),e=(r,c)=>{setTimeout(()=>{let j=[];r||(j=[{value:"广东",label:"广东",children:[]},{value:"北京",label:"北京",children:[]},{value:"上海",label:"上海"}]),r&&r.value==="广东"&&(j=[{value:"广州",label:"广州"},{value:"深圳",label:"深圳"}]),r&&r.value==="广州"&&(j=[{value:"天河",label:"天河"},{value:"白云",label:"白云"}]),c(j)},1e3)},i=r=>{r&&(t.value=[{value:"广东",label:"广东",children:[{value:"深圳",label:"深圳"}]}])};return(r,c)=>{const j=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(j,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=g=>a.value=g),placeholder:"请选择",lazy:"","lazy-load":e,onSearchChange:i},null,8,["modelValue"]),N,x,O,s("p",null,"当前值："+d(h.value),1),p(j,{modelValue:h.value,"onUpdate:modelValue":c[1]||(c[1]=g=>h.value=g),placeholder:"请选择（没有初始值）",lazy:"","lazy-load":e},null,8,["modelValue"]),P,K,F,G,s("p",null,"当前值："+d(l.value),1),p(j,{modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=g=>l.value=g),placeholder:"请选择",lazy:"","lazy-load":e,options:t.value,filterable:"",onSearchChange:i},null,8,["modelValue","options"])])}}},Q=s("br",null,null,-1),W=s("br",null,null,-1),X=s("br",null,null,-1),Y=s("br",null,null,-1),Z=s("br",null,null,-1),ss=s("br",null,null,-1),as=s("br",null,null,-1),ns=s("br",null,null,-1),ls=s("br",null,null,-1),ts={__name:"README.md.vdpv_7",setup(n){const a=o(["广东,广州,白云"]),h=o([]),l=o(["广东,广州,白云","广东,深圳"]),t=o([]);return(e,i)=>{const r=u("ak-cascader");return b(),y("div",null,[s("p",null,"当前值："+d(a.value),1),p(r,{checkAny:"",modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=c=>a.value=c),placeholder:"请选择",options:_(m)},null,8,["modelValue","options"]),Q,W,X,s("p",null,"当前值："+d(h.value),1),p(r,{checkAny:"",modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=c=>h.value=c),placeholder:"请选择",options:_(m)},null,8,["modelValue","options"]),Y,Z,ss,s("p",null,"当前值："+d(l.value),1),p(r,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=c=>l.value=c),placeholder:"请选择",multiple:"",options:_(m),checkAny:""},null,8,["modelValue","options"]),as,ns,ls,s("p",null,"当前值："+d(t.value),1),p(r,{modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=c=>t.value=c),placeholder:"请选择",multiple:"",options:_(m),checkAny:""},null,8,["modelValue","options"])])}}},C=H({components:{vdpv_0:E,vdpv_1:I,vdpv_2:U,vdpv_3:T,vdpv_4:M,vdpv_5:B,vdpv_6:J,vdpv_7:ts},setup(n){const a=o(),h=o(),l=o(),t=o(),e=o(),i=o(),r=o(),c=o(),j=[a,h,l,t,e,i,r,c],g=z({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return{toggleCode:w=>{const V="vdpv_"+w;g[V+"Height"]===0?g[V+"Height"]=(j[w].value?j[w].value.offsetHeight:0)||0:g[V+"Height"]=0},...R(g),vdpv_0Ref:a,vdpv_1Ref:h,vdpv_2Ref:l,vdpv_3Ref:t,vdpv_4Ref:e,vdpv_5Ref:i,vdpv_6Ref:r,vdpv_7Ref:c}}});C.$vd={matter:{},toc:[{content:"Cascader 级联选择器",anchor:"cascader-级联选择器",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"默认初始值",anchor:"默认初始值",level:3},{content:"禁用选项",anchor:"禁用选项",level:3},{content:"可清空",anchor:"可清空",level:3},{content:"多选并可折叠选择",anchor:"多选并可折叠选择",level:3},{content:"可搜索",anchor:"可搜索",level:3},{content:"异步加载",anchor:"异步加载",level:3},{content:"选择任意项",anchor:"选择任意项",level:3},{content:"API",anchor:"api",level:2},{content:"Cascader",anchor:"cascader",level:3},{content:"Cascader Event",anchor:"cascader-event",level:3},{content:"Cascader Options",anchor:"cascader-options",level:3}]};const es=C,ps={class:"vuedoc"},os=f('<h1 id="cascader-级联选择器" data-source-line="3"><a class="markdownIt-Anchor" href="#cascader-级联选择器">#</a> Cascader 级联选择器</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),cs={class:"vuedoc-demo"},ds={class:"vuedoc-demo__inner"},rs={class:"vuedoc-demo__preview"},hs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},is=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),us=[is],vs=s("h3",{id:"默认初始值","data-source-line":"22"},[s("a",{class:"markdownIt-Anchor",href:"#默认初始值"},"#"),v(" 默认初始值")],-1),js=s("pre",{style:{display:"none"}},null,-1),gs={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},ms={class:"vuedoc-demo__preview"},fs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},bs=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ys=[bs],ks=s("h3",{id:"禁用选项","data-source-line":"39"},[s("a",{class:"markdownIt-Anchor",href:"#禁用选项"},"#"),v(" 禁用选项")],-1),qs=s("p",{"data-source-line":"41"},[v("通过在数据源中设置 "),s("code",null,"disabled"),v(" 字段来声明该选项是禁用的")],-1),ws=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},$s={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},As={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Hs=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),zs=[Hs],Rs=s("h3",{id:"可清空","data-source-line":"58"},[s("a",{class:"markdownIt-Anchor",href:"#可清空"},"#"),v(" 可清空")],-1),Es=s("p",{"data-source-line":"60"},[v("设置 "),s("code",null,"clear"),v(" 可用于清空选择")],-1),Is=s("pre",{style:{display:"none"}},null,-1),Us={class:"vuedoc-demo"},Ts={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ls=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ss=[Ls],Bs=s("h3",{id:"多选并可折叠选择","data-source-line":"82"},[s("a",{class:"markdownIt-Anchor",href:"#多选并可折叠选择"},"#"),v(" 多选并可折叠选择")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),xs={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Ks={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Fs=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>使用\`collapseTags\`折叠多选项<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">collapseTags</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>, <span class="hljs-string">&#39;上海,黄蒲区&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Gs=[Fs],Js=s("h3",{id:"可搜索","data-source-line":"111"},[s("a",{class:"markdownIt-Anchor",href:"#可搜索"},"#"),v(" 可搜索")],-1),Qs=s("p",{"data-source-line":"113"},[v("开启"),s("code",null,"filterable"),v("可以快捷地搜索选项并选择")],-1),Ws=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Ys={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},aa=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>单选可搜索<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">filterable</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>多选可搜索<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">filterable</span>
      <span class="hljs-attr">multiple</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),na=[aa],la=f('<h3 id="异步加载" data-source-line="143"><a class="markdownIt-Anchor" href="#异步加载">#</a> 异步加载</h3><p data-source-line="145">通过<code>lazy</code>开启异步加载，并通过<code>lazyload</code>来设置加载数据源的方法。 <code>lazyload</code>方法有两个参数，第一个参数<code>node</code>为当前点击的节点，第二个<code>resolve</code>为数据加载完成的回调(必须调用)</p><pre style="display:none;"></pre>',3),ta={class:"vuedoc-demo"},ea={class:"vuedoc-demo__inner"},pa={class:"vuedoc-demo__preview"},oa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},ca=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">lazy</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>
      @<span class="hljs-attr">searchChange</span>=<span class="hljs-string">&quot;searchChange&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择（没有初始值）&quot;</span>
      <span class="hljs-attr">lazy</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>可搜索异步加载<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">lazy</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">filterable</span>
      @<span class="hljs-attr">searchChange</span>=<span class="hljs-string">&quot;searchChange&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
  <span class="hljs-keyword">const</span> value2 = ref([])
  <span class="hljs-keyword">const</span> value3 = ref([])
  <span class="hljs-keyword">const</span> options = ref([])
  <span class="hljs-keyword">const</span> lazyLoad = <span class="hljs-function">(<span class="hljs-params">obj, resolve</span>) =&gt;</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">let</span> temp = []
      <span class="hljs-keyword">if</span> (!obj) {
        <span class="hljs-comment">// 加载第一级</span>
        temp = [
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;广东&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
            <span class="hljs-attr">children</span>: []
          },
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;北京&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>,
            <span class="hljs-attr">children</span>: []
          },
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;上海&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;上海&#39;</span>
          }
        ]
        <span class="hljs-comment">//resolve(temp)</span>
      }
      <span class="hljs-keyword">if</span> (obj &amp;&amp; obj.value === <span class="hljs-string">&#39;广东&#39;</span>) {
        temp = [
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;广州&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>
          },
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;深圳&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>
          }
        ]
      }
      <span class="hljs-keyword">if</span> (obj &amp;&amp; obj.value === <span class="hljs-string">&#39;广州&#39;</span>) {
        temp = [
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;天河&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河&#39;</span>
          },
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;白云&#39;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云&#39;</span>
          }
        ]
      }
      resolve(temp)
    }, <span class="hljs-number">1000</span>)
  }
  <span class="hljs-keyword">const</span> searchChange = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-comment">// console.log(&#39;12&#39;)</span>
    <span class="hljs-keyword">if</span> (val) {
      options.value = [
        {
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;广东&#39;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>,
          <span class="hljs-attr">children</span>: [
            {
              <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;深圳&#39;</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>
            }
          ]
        }
      ]
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),da=[ca],ra=s("h3",{id:"选择任意项","data-source-line":"258"},[s("a",{class:"markdownIt-Anchor",href:"#选择任意项"},"#"),v(" 选择任意项")],-1),ha=s("p",{"data-source-line":"260"},[v("使用"),s("code",null,"checkAny"),v("可选择任意项")],-1),ia=s("pre",{style:{display:"none"}},null,-1),ua={class:"vuedoc-demo"},va={class:"vuedoc-demo__inner"},ja={class:"vuedoc-demo__preview"},ga={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},_a=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">checkAny</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">checkAny</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">checkAny</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value4 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">checkAny</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])
  <span class="hljs-keyword">const</span> value2 = ref([])
  <span class="hljs-keyword">const</span> value3 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>, <span class="hljs-string">&#39;广东,深圳&#39;</span>])
  <span class="hljs-keyword">const</span> value4 = ref([])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ma=[_a],fa=f('<h2 id="api" data-source-line="313"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="cascader" data-source-line="315"><a class="markdownIt-Anchor" href="#cascader">#</a> Cascader</h3><table data-source-line="317"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>array</td><td>显示的值</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>multiple</td><td>boolean/false</td><td>多选模式</td></tr><tr><td>collapseTags</td><td>boolean/false</td><td>多选模式下是否折叠Tag</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索选项</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr><tr><td>options</td><td>object</td><td>下拉面板选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的<code>label</code>和<code>value</code>属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>showAllLevels</td><td>boolean/true</td><td>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</td></tr><tr><td>lazy</td><td>boolean/false</td><td>是否动态加载子节点，需与 <code>lazyLoad</code> 方法结合使用</td></tr><tr><td>lazyLoad</td><td>function</td><td>加载动态数据的方法，仅在 <code>lazy</code> 为 <code>true</code> 时有效,function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)</td></tr><tr><td>checkAny</td><td>boolean/false</td><td>启用该功能后，选择任意一级选项。</td></tr><tr><td>emptyText</td><td>string</td><td>无下拉数据提示文案</td></tr></tbody></table><h3 id="cascader-event" data-source-line="342"><a class="markdownIt-Anchor" href="#cascader-event">#</a> Cascader Event</h3><table data-source-line="344"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择事件</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="cascader-options" data-source-line="353"><a class="markdownIt-Anchor" href="#cascader-options">#</a> Cascader Options</h3><table data-source-line="355"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>选项名称</td></tr><tr><td>value</td><td>String/number</td><td>选项对应的值，应唯一</td></tr><tr><td>disabled</td><td>boolean</td><td>禁用当前项</td></tr><tr><td>children</td><td>Array</td><td>子级数据，见自定义数据格式</td></tr></tbody></table>',7);function ba(n,a,h,l,t,e){const i=u("vdpv_0"),r=u("vdpv_1"),c=u("vdpv_2"),j=u("vdpv_3"),g=u("vdpv_4"),$=u("vdpv_5"),w=u("vdpv_6"),V=u("vdpv_7");return b(),y("div",ps,[os,s("div",cs,[s("div",ds,[s("div",rs,[p(i)]),s("div",{style:k({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",hs,us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=q=>n.toggleCode(0))},d(n.vdpv_0Height>0?"hidden":"show"),1)])]),vs,js,s("div",gs,[s("div",_s,[s("div",ms,[p(r)]),s("div",{style:k({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",fs,ys,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=q=>n.toggleCode(1))},d(n.vdpv_1Height>0?"hidden":"show"),1)])]),ks,qs,ws,s("div",Vs,[s("div",$s,[s("div",Cs,[p(c)]),s("div",{style:k({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,zs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=q=>n.toggleCode(2))},d(n.vdpv_2Height>0?"hidden":"show"),1)])]),Rs,Es,Is,s("div",Us,[s("div",Ts,[s("div",Ds,[p(j)]),s("div",{style:k({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ms,Ss,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=q=>n.toggleCode(3))},d(n.vdpv_3Height>0?"hidden":"show"),1)])]),Bs,Ns,s("div",xs,[s("div",Os,[s("div",Ps,[p(g)]),s("div",{style:k({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ks,Gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=q=>n.toggleCode(4))},d(n.vdpv_4Height>0?"hidden":"show"),1)])]),Js,Qs,Ws,s("div",Xs,[s("div",Ys,[s("div",Zs,[p($)]),s("div",{style:k({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",sa,na,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=q=>n.toggleCode(5))},d(n.vdpv_5Height>0?"hidden":"show"),1)])]),la,s("div",ta,[s("div",ea,[s("div",pa,[p(w)]),s("div",{style:k({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",oa,da,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=q=>n.toggleCode(6))},d(n.vdpv_6Height>0?"hidden":"show"),1)])]),ra,ha,ia,s("div",ua,[s("div",va,[s("div",ja,[p(V)]),s("div",{style:k({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",ga,ma,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=q=>n.toggleCode(7))},d(n.vdpv_7Height>0?"hidden":"show"),1)])]),fa])}const ka=A(es,[["render",ba]]);export{ka as default};
