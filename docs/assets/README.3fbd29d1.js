var M=Object.defineProperty,U=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var $=(t,a,l)=>a in t?M(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,D=(t,a)=>{for(var l in a||(a={}))A.call(a,l)&&$(t,l,a[l]);if(V)for(var l of V(a))I.call(a,l)&&$(t,l,a[l]);return t},H=(t,a)=>U(t,R(a));import{b as c,e as j,o as g,c as _,i as s,h as o,j as d,g as r,f as S,_ as T,d as x,r as B,t as P,n as m,a as v}from"./index.bb5e6dd5.js";const E=s("br",null,null,-1),F=s("br",null,null,-1),N=s("br",null,null,-1),z={setup(t){const a=c(""),l=c("2019-06-01"),u=c("2019-06-01");return(h,p)=>{const n=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),E,r(n,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=e=>a.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),F,r(n,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=e=>l.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+d(u.value),1),N,r(n,{modelValue:l.value,"onUpdate:modelValue":p[2]||(p[2]=e=>l.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",disabled:!0},null,8,["modelValue"])])])}}},Y=s("br",null,null,-1),O=s("br",null,null,-1),G=s("br",null,null,-1),J={setup(t){const a=c(""),l=c("2019"),u=c(""),h=p=>{const n=p.getFullYear();return n<2018||n>2023};return(p,n)=>{const e=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),Y,r(e,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),O,r(e,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=i=>l.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),G,r(e,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=i=>u.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year",disabledDate:h},null,8,["modelValue"])])])}}},K=s("br",null,null,-1),L=s("br",null,null,-1),Q=s("br",null,null,-1),W={setup(t){const a=c(""),l=c("2019"),u=c(""),h=(p,n)=>{if(n==="month"){const e=p.getMonth();return e<2||e>6}};return(p,n)=>{const e=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),K,r(e,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),L,r(e,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=i=>l.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),Q,r(e,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=i=>u.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month","disabled-date":h},null,8,["modelValue"])])])}}},X=s("br",null,null,-1),Z=s("br",null,null,-1),ss=s("br",null,null,-1),as={setup(t){const a=c(""),l=c("2019"),u=c(""),h=(p,n)=>{if(n==="day"){const e=p.getDay();return e===0||e===6}};return(p,n)=>{const e=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),X,r(e,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),Z,r(e,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=i=>l.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),ss,r(e,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=i=>u.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date","disabled-date":h},null,8,["modelValue"])])])}}},ns=s("br",null,null,-1),ls=s("br",null,null,-1),ts={setup(t){const a=c(""),l=c("2019");return(u,h)=>{const p=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),ns,r(p,{modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),ls,r(p,{modelValue:l.value,"onUpdate:modelValue":h[1]||(h[1]=n=>l.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])])])}}},es=s("br",null,null,-1),ps={setup(t){const a=c("2021-06-01");return(l,u)=>{const h=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),es,r(h,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=p=>a.value=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",readonly:!1},null,8,["modelValue"])])])}}},os={setup(t){const a=c("2019"),l=h=>{let p=new Date(2019,1,1),n=new Date(2019,1,7);if(h>=p&&h<=n)return"\u4F11";const e=new Date(2019,8,29);if(h.toString()===e.toString())return"\u73ED"},u=(h,p)=>{const n=h.getDay();return n===0||n===6};return(h,p)=>{const n=j("ak-date-picker");return g(),S(n,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=e=>a.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",innerText:l,"disabled-date":u,readonly:!1},null,8,["modelValue"])}}},cs=s("br",null,null,-1),ds=s("br",null,null,-1),rs=s("br",null,null,-1),hs={setup(t){const a=c("2021-06-01"),l=c("2021-06-01"),u=c("2021-06-01");return(h,p)=>{const n=j("ak-date-picker");return g(),_("div",null,[s("p",null,[o(" \u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(a.value),1),cs,r(n,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=e=>a.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y-M-d"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(l.value),1),ds,r(n,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=e=>l.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw","value-format":"y-MM-dd"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u65F6\u95F4\u6233\u3002\u9009\u62E9\u7684\u503C\uFF1A"+d(u.value),1),rs,r(n,{modelValue:u.value,"onUpdate:modelValue":p[2]||(p[2]=e=>u.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])}}},C=x({components:{vdpv_0:z,vdpv_1:J,vdpv_2:W,vdpv_3:as,vdpv_4:ts,vdpv_5:ps,vdpv_6:os,vdpv_7:hs},setup(t){const a=c(),l=c(),u=c(),h=c(),p=c(),n=c(),e=c(),i=c(),w=[a,l,u,h,p,n,e,i],y=B({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return H(D({toggleCode:f=>{const q="vdpv_"+f;y[q+"Height"]===0?y[q+"Height"]=(w[f].value?w[f].value.offsetHeight:0)||0:y[q+"Height"]=0}},P(y)),{vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:u,vdpv_3Ref:h,vdpv_4Ref:p,vdpv_5Ref:n,vdpv_6Ref:e,vdpv_7Ref:i})}});C.$vd={matter:{},toc:[{content:"DatePicker \u65E5\u671F\u9009\u62E9",anchor:"datepicker-\u65E5\u671F\u9009\u62E9",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u5E74\u4EFD\u9009\u62E9",anchor:"\u5E74\u4EFD\u9009\u62E9",level:3},{content:"\u6708\u4EFD\u9009\u62E9",anchor:"\u6708\u4EFD\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",level:3},{content:"\u624B\u52A8\u8F93\u5165",anchor:"\u624B\u52A8\u8F93\u5165",level:3},{content:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",anchor:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",level:3},{content:"\u65F6\u95F4\u683C\u5F0F\u5316",anchor:"\u65F6\u95F4\u683C\u5F0F\u5316",level:3},{content:"API",anchor:"api",level:2},{content:"DatePicker",anchor:"datepicker",level:3},{content:"DatePicker Event",anchor:"datepicker-event",level:3}]};const us=C,is={class:"vuedoc"},js=v('<h1 id="datepicker-\u65E5\u671F\u9009\u62E9" data-source-line="3"><a class="markdownIt-Anchor" href="#datepicker-\u65E5\u671F\u9009\u62E9">#</a> DatePicker \u65E5\u671F\u9009\u62E9</h1><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',3),vs={class:"vuedoc-demo"},gs={class:"vuedoc-demo__inner"},ms={class:"vuedoc-demo__preview"},_s={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ks=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{{ value3 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2019-06-01&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;2019-06-01&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ys=[ks],fs=s("h3",{id:"\u5E74\u4EFD\u9009\u62E9","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u4EFD\u9009\u62E9"},"#"),o(" \u5E74\u4EFD\u9009\u62E9")],-1),qs=s("pre",{style:{display:"none"}},null,-1),ws={class:"vuedoc-demo"},bs={class:"vuedoc-demo__inner"},Vs={class:"vuedoc-demo__preview"},$s={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ds=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year&quot;</span>
        <span class="hljs-attr">:disabledDate</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2019&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> day = date.getFullYear()
    <span class="hljs-keyword">return</span> day &lt; <span class="hljs-number">2018</span> || day &gt; <span class="hljs-number">2023</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Hs=[Ds],Cs=s("h3",{id:"\u6708\u4EFD\u9009\u62E9","data-source-line":"77"},[s("a",{class:"markdownIt-Anchor",href:"#\u6708\u4EFD\u9009\u62E9"},"#"),o(" \u6708\u4EFD\u9009\u62E9")],-1),Ms=s("pre",{style:{display:"none"}},null,-1),Us={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Is={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ss=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span>
        <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2019&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date, type</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
      <span class="hljs-keyword">const</span> day = date.getMonth()
      <span class="hljs-keyword">return</span> day &lt; <span class="hljs-number">2</span> || day &gt; <span class="hljs-number">6</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ts=[Ss],xs=s("h3",{id:"\u5E74\u6708\u65E5\u9009\u62E9","data-source-line":"118"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u9009\u62E9")],-1),Bs=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},Es={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Ns={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},zs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2019&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date, type</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
      <span class="hljs-keyword">const</span> day = date.getDay()
      <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ys=[zs],Os=s("h3",{id:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9","data-source-line":"159"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Ls={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ws=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2019&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Xs=[Ws],Zs=s("h3",{id:"\u624B\u52A8\u8F93\u5165","data-source-line":"192"},[s("a",{class:"markdownIt-Anchor",href:"#\u624B\u52A8\u8F93\u5165"},"#"),o(" \u624B\u52A8\u8F93\u5165")],-1),sa=s("pre",{style:{display:"none"}},null,-1),aa={class:"vuedoc-demo"},na={class:"vuedoc-demo__inner"},la={class:"vuedoc-demo__preview"},ta={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ea=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">:readonly</span>=<span class="hljs-string">&quot;false&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;2021-06-01&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),pa=[ea],oa=s("h3",{id:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26","data-source-line":"216"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26"},"#"),o(" \u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26")],-1),ca=s("pre",{style:{display:"none"}},null,-1),da={class:"vuedoc-demo"},ra={class:"vuedoc-demo__inner"},ha={class:"vuedoc-demo__preview"},ua={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},ia=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
    <span class="hljs-attr">:innerText</span>=<span class="hljs-string">&quot;innerText&quot;</span>
    <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
    <span class="hljs-attr">:readonly</span>=<span class="hljs-string">&quot;false&quot;</span>
  /&gt;</span>
  </span><span class="hljs-comment">&lt;!--  &lt;ak-date-picker v-model=&quot;value2&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot; /&gt;--&gt;</span><span class="xml">
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;2019&#39;</span>)
  <span class="hljs-comment">// const value2 = ref(&#39;2019a&#39;)</span>
  <span class="hljs-comment">/*setTimeout(() =&gt; {
  value1.value = &#39;2019&#39;
}, 1000)*/</span>
  <span class="hljs-keyword">const</span> innerText = <span class="hljs-function">(<span class="hljs-params">time</span>) =&gt;</span> {
    <span class="hljs-keyword">let</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
    <span class="hljs-keyword">let</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">1</span>, <span class="hljs-number">7</span>)
    <span class="hljs-keyword">if</span> (time &gt;= start &amp;&amp; time &lt;= end) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;\u4F11&#39;</span>
    }
    <span class="hljs-keyword">const</span> o = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">8</span>, <span class="hljs-number">29</span>)
    <span class="hljs-keyword">if</span> (time.toString() === o.toString()) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;\u73ED&#39;</span>
    }
  }
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">time, paneType</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> day = time.getDay()
    <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ja=[ia],va=s("h3",{id:"\u65F6\u95F4\u683C\u5F0F\u5316","data-source-line":"256"},[s("a",{class:"markdownIt-Anchor",href:"#\u65F6\u95F4\u683C\u5F0F\u5316"},"#"),o(" \u65F6\u95F4\u683C\u5F0F\u5316")],-1),ga=s("p",{"data-source-line":"258"},[o("\u4F7F\u7528"),s("code",null,"format"),o("\u6307\u5B9A\u8F93\u51FA\u663E\u793A\u7684\u7C7B\u578B\uFF0C\u5373\u8F93\u5165\u6846\u663E\u793A\u7684\u503C\u3002\u53EF\u4F7F\u7528y(\u5E74)\u3001M(\u6708)\u3001d(\u65E5)\u3001h(\u65F6)\u3001m(\u5206)\u3001s(\u79D2)\u3001w(\u661F\u671F) \u3001timestamp\uFF0CMM\u8868\u793A\u4F7F\u7528\u4E24\u4F4D\u8868\u793A\u6708\u4EFD\uFF0C\u4F7F\u7528"),s("code",null,"format"),o("\u5E94\u914D\u5408"),s("code",null,"value-format"),o("\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u5F53"),s("code",null,"format"),o("\u7684\u683C\u5F0F\u8F6C\u6362\u6210\u65F6\u95F4\u5F02\u5E38\uFF0C\u4F1A\u88AB\u8BA4\u4E3A\u662F\u65E0\u6548\u7684\u65F6\u95F4")],-1),ma=s("pre",{style:{display:"none"}},null,-1),_a={class:"vuedoc-demo"},ka={class:"vuedoc-demo__inner"},ya={class:"vuedoc-demo__preview"},fa={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},qa=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;y-M-d&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw&quot;</span>
        <span class="hljs-attr">value-format</span>=<span class="hljs-string">&quot;y-MM-dd&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u663E\u793A\u65F6\u95F4\u6233\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value3 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;timestamp&quot;</span>
        <span class="hljs-attr">value-format</span>=<span class="hljs-string">&quot;y-MM-dd&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;2021-06-01&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2021-06-01&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;2021-06-01&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),wa=[qa],ba=v('<h2 id="api" data-source-line="302"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="datepicker" data-source-line="304"><a class="markdownIt-Anchor" href="#datepicker">#</a> DatePicker</h3><table data-source-line="306"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C</td></tr><tr><td>placeholder</td><td>String</td><td>\u8F93\u5165\u6846\u63D0\u793A\u5360\u4F4D\u6587\u672C</td></tr><tr><td>clear</td><td>Boolean\uFF5Ctrue</td><td>\u663E\u793A\u6E05\u7A7A</td></tr><tr><td>disabledDate</td><td>Function</td><td>\u7981\u7528\u7684\u65F6\u95F4\uFF0Creturn true\u65F6\u5C06\u4E0D\u80FD\u9009\u62E9</td></tr><tr><td>disabled</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>type</td><td>String</td><td>\u9762\u677F\u65E5\u671F\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5C06\u6309\u6B64\u683C\u5F0F\u8FD4\u56DE\uFF0C\u5E74/\u5E74\u6708/\u5E74\u6708\u65E5/\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u3002\u53EF\u9009year,month,date,datetime</td></tr><tr><td>format</td><td>String</td><td>\u8F93\u5165\u6846\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u65F6\u6309type\u9ED8\u8BA4\u683C\u5F0F</td></tr><tr><td>valueFormat</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C\u683C\u5F0F\uFF0C\u5373v-model\u7684\u683C\u5F0F,\u5FC5\u987B\u8981\u662F\u5408\u6CD5\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u5219\u8F93\u5165format\u7684\u683C\u5F0F</td></tr><tr><td>innerText</td><td>Function</td><td>\u53EF\u4EE5\u5C06\u7279\u6B8A\u63D0\u793A\u7684\u6587\u672C\u63D2\u5165\u5230\u6307\u5B9A\u7684\u65E5\u671F\u91CC</td></tr><tr><td>appendToBody</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u65E5\u671F\u9762\u677F\u63D2\u5165\u5230body\u4E2D</td></tr><tr><td>downStyle</td><td>Object</td><td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F\uFF0C\u5FEB\u901F\u4E2A\u6027\u5316\u8BBE\u7F6E\u5355\u4E2A\u65E5\u671F\u4E0B\u62C9\u9762\u677F</td></tr><tr><td>downClass</td><td>string</td><td>\u4E0B\u62C9\u9762\u677F\u7C7B\u540D</td></tr><tr><td>readonly</td><td>Boolean\uFF5Ctrue</td><td>\u65E5\u671F\u8F93\u5165\u6846\u53EA\u8BFB\u6A21\u5F0F</td></tr><tr><td>size</td><td>string</td><td>\u6DFB\u52A0\u7684\u5927\u5C0F\u5C3A\u5BF8\u6837\u5F0F</td></tr></tbody></table><h3 id="datepicker-event" data-source-line="323"><a class="markdownIt-Anchor" href="#datepicker-event">#</a> DatePicker Event</h3><table data-source-line="325"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8\u4E8B\u4EF6</td></tr></tbody></table>',5);function Va(t,a,l,u,h,p){const n=j("vdpv_0"),e=j("vdpv_1"),i=j("vdpv_2"),w=j("vdpv_3"),y=j("vdpv_4"),b=j("vdpv_5"),f=j("vdpv_6"),q=j("vdpv_7");return g(),_("div",is,[js,s("div",vs,[s("div",gs,[s("div",ms,[r(n)]),s("div",{style:m({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",_s,ys,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=k=>t.toggleCode(0))},d(t.vdpv_0Height>0?"hidden":"show"),1)])]),fs,qs,s("div",ws,[s("div",bs,[s("div",Vs,[r(e)]),s("div",{style:m({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",$s,Hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=k=>t.toggleCode(1))},d(t.vdpv_1Height>0?"hidden":"show"),1)])]),Cs,Ms,s("div",Us,[s("div",Rs,[s("div",As,[r(i)]),s("div",{style:m({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Is,Ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=k=>t.toggleCode(2))},d(t.vdpv_2Height>0?"hidden":"show"),1)])]),xs,Bs,s("div",Ps,[s("div",Es,[s("div",Fs,[r(w)]),s("div",{style:m({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ns,Ys,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=k=>t.toggleCode(3))},d(t.vdpv_3Height>0?"hidden":"show"),1)])]),Os,Gs,s("div",Js,[s("div",Ks,[s("div",Ls,[r(y)]),s("div",{style:m({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qs,Xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=k=>t.toggleCode(4))},d(t.vdpv_4Height>0?"hidden":"show"),1)])]),Zs,sa,s("div",aa,[s("div",na,[s("div",la,[r(b)]),s("div",{style:m({height:t.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",ta,pa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=k=>t.toggleCode(5))},d(t.vdpv_5Height>0?"hidden":"show"),1)])]),oa,ca,s("div",da,[s("div",ra,[s("div",ha,[r(f)]),s("div",{style:m({height:t.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",ua,ja,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=k=>t.toggleCode(6))},d(t.vdpv_6Height>0?"hidden":"show"),1)])]),va,ga,ma,s("div",_a,[s("div",ka,[s("div",ya,[r(q)]),s("div",{style:m({height:t.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",fa,wa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=k=>t.toggleCode(7))},d(t.vdpv_7Height>0?"hidden":"show"),1)])]),ba])}var Ha=T(us,[["render",Va]]);export{Ha as default};
