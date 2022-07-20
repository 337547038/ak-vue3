var M=Object.defineProperty,A=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var D=(l,a,t)=>a in l?M(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,H=(l,a)=>{for(var t in a||(a={}))S.call(a,t)&&D(l,t,a[t]);if($)for(var t of $(a))P.call(a,t)&&D(l,t,a[t]);return l},R=(l,a)=>A(l,I(a));import{f as d,r as j,o as m,c as k,h as s,g as o,i as r,a as h,d as C,j as F,_ as T,b as B,t as x,n as _,e as g}from"./index.65091ddf.js";const E=s("br",null,null,-1),Y=s("br",null,null,-1),N=s("br",null,null,-1),z={setup(l){const a=d(""),t=d("2019-06-01"),c=d("2019-06-01");return(u,e)=>{const p=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),E,h(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),Y,h(p,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),N,h(p,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=n=>t.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",disabled:!0},null,8,["modelValue"])])])}}},O=s("br",null,null,-1),G=s("br",null,null,-1),J=s("br",null,null,-1),K={setup(l){const a=new Date().getFullYear(),t=d(""),c=d(a.toString()),u=d(""),e=p=>{const n=p.getFullYear();return console.log(n),n<a-2||n>a+3};return(p,n)=>{const i=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),O,h(i,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=v=>t.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),G,h(i,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=v=>c.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),J,h(i,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=v=>u.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year","disabled-date":e},null,8,["modelValue"])])])}}},L=s("br",null,null,-1),Q=s("br",null,null,-1),W=s("br",null,null,-1),X={setup(l){const a=new Date().getFullYear(),t=d(""),c=d(a+"/10"),u=d(""),e=(p,n)=>{if(n==="month"){const i=p.getMonth();return i<2||i>6}};return(p,n)=>{const i=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),L,h(i,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=v=>t.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),Q,h(i,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=v=>c.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(u.value),1),W,h(i,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=v=>u.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month","disabled-date":e},null,8,["modelValue"])])])}}},Z=s("br",null,null,-1),ss=s("br",null,null,-1),as=s("br",null,null,-1),ns={setup(l){const a=d(""),t=d(new Date().getTime().toString()),c=d(""),u=(e,p)=>{if(p==="day"){const n=e.getDay();return n===0||n===6}};return(e,p)=>{const n=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),Z,h(n,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=i=>a.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),ss,h(n,{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=i=>t.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),as,h(n,{modelValue:c.value,"onUpdate:modelValue":p[2]||(p[2]=i=>c.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date","disabled-date":u},null,8,["modelValue"])])])}}},ls=s("br",null,null,-1),ts=s("br",null,null,-1),es={setup(l){const a=d(""),t=d(new Date().getTime().toString());return(c,u)=>{const e=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),ls,h(e,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=p=>a.value=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),ts,h(e,{modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=p=>t.value=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])])])}}},ps=s("br",null,null,-1),os={setup(l){const a=d("2021-06-01");return(t,c)=>{const u=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),ps,h(u,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=e=>a.value=e),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",readonly:!1},null,8,["modelValue"])])])}}},cs=C({setup(l){const a=d(),t=u=>[14,15,16].includes(u.getDate())?"\u4F11":[17,18,19].includes(u.getDate())?"\u73ED":"",c=(u,e)=>{const p=u.getDay();return p===0||p===6};return(u,e)=>{const p=j("ak-date-picker");return m(),F(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",innerText:t,"disabled-date":c,readonly:!1},null,8,["modelValue"])}}}),ds=s("br",null,null,-1),rs=s("br",null,null,-1),hs=s("br",null,null,-1),us={setup(l){const a=d("2021-06-01"),t=d("2021-06-01"),c=d("2021-06-01");return(u,e)=>{const p=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),ds,h(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y-M-d"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),rs,h(p,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw","value-format":"y-MM-dd"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u65F6\u95F4\u6233\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),hs,h(p,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=n=>c.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])}}},is=s("br",null,null,-1),js=s("br",null,null,-1),vs=s("br",null,null,-1),gs={setup(l){const a=d([]),t=d([]),c=d([]);return(u,e)=>{const p=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),is,h(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),type:"monthRange",placeholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",endPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(t.value),1),js,h(p,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value=n),type:"dateRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),vs,h(p,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=n=>c.value=n),type:"datetimeRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])])])}}},U=C({components:{vdpv_0:z,vdpv_1:K,vdpv_2:X,vdpv_3:ns,vdpv_4:es,vdpv_5:os,vdpv_6:cs,vdpv_7:us,vdpv_8:gs},setup(l){const a=d(),t=d(),c=d(),u=d(),e=d(),p=d(),n=d(),i=d(),v=d(),b=[a,t,c,u,e,p,n,i,v],f=B({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return R(H({toggleCode:q=>{const w="vdpv_"+q;f[w+"Height"]===0?f[w+"Height"]=(b[q].value?b[q].value.offsetHeight:0)||0:f[w+"Height"]=0}},x(f)),{vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:c,vdpv_3Ref:u,vdpv_4Ref:e,vdpv_5Ref:p,vdpv_6Ref:n,vdpv_7Ref:i,vdpv_8Ref:v})}});U.$vd={matter:{},toc:[{content:"DatePicker \u65E5\u671F\u9009\u62E9",anchor:"datepicker-\u65E5\u671F\u9009\u62E9",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u5E74\u4EFD\u9009\u62E9",anchor:"\u5E74\u4EFD\u9009\u62E9",level:3},{content:"\u6708\u4EFD\u9009\u62E9",anchor:"\u6708\u4EFD\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",level:3},{content:"\u624B\u52A8\u8F93\u5165",anchor:"\u624B\u52A8\u8F93\u5165",level:3},{content:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",anchor:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",level:3},{content:"\u65F6\u95F4\u683C\u5F0F\u5316",anchor:"\u65F6\u95F4\u683C\u5F0F\u5316",level:3},{content:"\u533A\u95F4\u9009\u62E9",anchor:"\u533A\u95F4\u9009\u62E9",level:3},{content:"API",anchor:"api",level:2},{content:"DatePicker",anchor:"datepicker",level:3},{content:"DatePicker Event",anchor:"datepicker-event",level:3}]};const ms=U,_s={class:"vuedoc"},ks=g('<h1 id="datepicker-\u65E5\u671F\u9009\u62E9" data-source-line="3"><a class="markdownIt-Anchor" href="#datepicker-\u65E5\u671F\u9009\u62E9">#</a> DatePicker \u65E5\u671F\u9009\u62E9</h1><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',3),ys={class:"vuedoc-demo"},fs={class:"vuedoc-demo__inner"},qs={class:"vuedoc-demo__preview"},ws={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},bs=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Vs=[bs],$s=s("h3",{id:"\u5E74\u4EFD\u9009\u62E9","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u4EFD\u9009\u62E9"},"#"),o(" \u5E74\u4EFD\u9009\u62E9")],-1),Ds=s("pre",{style:{display:"none"}},null,-1),Hs={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},Us={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ms=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> current = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getFullYear()
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(current.toString())
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> day = date.getFullYear()
    <span class="hljs-built_in">console</span>.log(day)
    <span class="hljs-keyword">return</span> day &lt; current - <span class="hljs-number">2</span> || day &gt; current + <span class="hljs-number">3</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),As=[Ms],Is=s("h3",{id:"\u6708\u4EFD\u9009\u62E9","data-source-line":"79"},[s("a",{class:"markdownIt-Anchor",href:"#\u6708\u4EFD\u9009\u62E9"},"#"),o(" \u6708\u4EFD\u9009\u62E9")],-1),Ss=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},Fs={class:"vuedoc-demo__inner"},Ts={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},xs=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value3 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
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
  <span class="hljs-keyword">const</span> current = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getFullYear()
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(current + <span class="hljs-string">&#39;/&#39;</span> + <span class="hljs-string">&#39;10&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date, type</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
      <span class="hljs-keyword">const</span> day = date.getMonth()
      <span class="hljs-keyword">return</span> day &lt; <span class="hljs-number">2</span> || day &gt; <span class="hljs-number">6</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),Es=[xs],Ys=s("h3",{id:"\u5E74\u6708\u65E5\u9009\u62E9","data-source-line":"121"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u9009\u62E9")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),zs={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Gs={class:"vuedoc-demo__preview"},Js={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ks=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value3 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
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
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime().toString())
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">date, type</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
      <span class="hljs-keyword">const</span> day = date.getDay()
      <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),Ls=[Ks],Qs=s("h3",{id:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9","data-source-line":"163"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9")],-1),Ws=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Zs={class:"vuedoc-demo__inner"},sa={class:"vuedoc-demo__preview"},aa={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},na=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime().toString())
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),la=[na],ta=s("h3",{id:"\u624B\u52A8\u8F93\u5165","data-source-line":"197"},[s("a",{class:"markdownIt-Anchor",href:"#\u624B\u52A8\u8F93\u5165"},"#"),o(" \u624B\u52A8\u8F93\u5165")],-1),ea=s("pre",{style:{display:"none"}},null,-1),pa={class:"vuedoc-demo"},oa={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},da={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ra=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),ha=[ra],ua=s("h3",{id:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26","data-source-line":"222"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26"},"#"),o(" \u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26")],-1),ia=s("pre",{style:{display:"none"}},null,-1),ja={class:"vuedoc-demo"},va={class:"vuedoc-demo__inner"},ga={class:"vuedoc-demo__preview"},ma={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},_a=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
    <span class="hljs-attr">:innerText</span>=<span class="hljs-string">&quot;innerText&quot;</span>
    <span class="hljs-attr">:disabled-date</span>=<span class="hljs-string">&quot;disabledDate&quot;</span>
    <span class="hljs-attr">:readonly</span>=<span class="hljs-string">&quot;false&quot;</span>
  /&gt;</span>
  </span><span class="hljs-comment">&lt;!--  &lt;ak-date-picker v-model=&quot;value2&quot; placeholder=&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot; /&gt;--&gt;</span><span class="xml">
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref()
  <span class="hljs-keyword">const</span> innerText = <span class="hljs-function">(<span class="hljs-params">time: <span class="hljs-built_in">Date</span></span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> ([<span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>].includes(time.getDate())) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;\u4F11&#39;</span>
    }
    <span class="hljs-keyword">if</span> ([<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>].includes(time.getDate())) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;\u73ED&#39;</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;&#39;</span>
  }
  <span class="hljs-keyword">const</span> disabledDate = <span class="hljs-function">(<span class="hljs-params">time: <span class="hljs-built_in">Date</span>, paneType: string</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> day = time.getDay()
    <span class="hljs-keyword">return</span> day === <span class="hljs-number">0</span> || day === <span class="hljs-number">6</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ka=[_a],ya=s("h3",{id:"\u65F6\u95F4\u683C\u5F0F\u5316","data-source-line":"256"},[s("a",{class:"markdownIt-Anchor",href:"#\u65F6\u95F4\u683C\u5F0F\u5316"},"#"),o(" \u65F6\u95F4\u683C\u5F0F\u5316")],-1),fa=s("p",{"data-source-line":"258"},[o("\u4F7F\u7528"),s("code",null,"format"),o("\u6307\u5B9A\u8F93\u51FA\u663E\u793A\u7684\u7C7B\u578B\uFF0C\u5373\u8F93\u5165\u6846\u663E\u793A\u7684\u503C\u3002\u53EF\u4F7F\u7528y(\u5E74)\u3001M(\u6708)\u3001d(\u65E5)\u3001h(\u65F6)\u3001m(\u5206)\u3001s(\u79D2)\u3001w(\u661F\u671F) \u3001timestamp\uFF0CMM\u8868\u793A\u4F7F\u7528\u4E24\u4F4D\u8868\u793A\u6708\u4EFD\uFF0C\u4F7F\u7528"),s("code",null,"format"),o("\u5E94\u914D\u5408"),s("code",null,"value-format"),o("\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u5F53"),s("code",null,"format"),o("\u7684\u683C\u5F0F\u8F6C\u6362\u6210\u65F6\u95F4\u5F02\u5E38\uFF0C\u4F1A\u88AB\u8BA4\u4E3A\u662F\u65E0\u6548\u7684\u65F6\u95F4")],-1),qa=s("pre",{style:{display:"none"}},null,-1),wa={class:"vuedoc-demo"},ba={class:"vuedoc-demo__inner"},Va={class:"vuedoc-demo__preview"},$a={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Da=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),Ha=[Da],Ra=s("h3",{id:"\u533A\u95F4\u9009\u62E9","data-source-line":"303"},[s("a",{class:"markdownIt-Anchor",href:"#\u533A\u95F4\u9009\u62E9"},"#"),o(" \u533A\u95F4\u9009\u62E9")],-1),Ca=s("pre",{style:{display:"none"}},null,-1),Ua={class:"vuedoc-demo"},Ma={class:"vuedoc-demo__inner"},Aa={class:"vuedoc-demo__preview"},Ia={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Sa=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value1 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;monthRange&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6708\u4EFD&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6708\u4EFD&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A{{ value2 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dateRange&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      \u9009\u62E9\u7684\u503C\uFF1A{{ value3 }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetimeRange&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref([])
  <span class="hljs-keyword">const</span> value2 = ref([])
  <span class="hljs-keyword">const</span> value3 = ref([])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Pa=[Sa],Fa=g('<h2 id="api" data-source-line="346"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="datepicker" data-source-line="348"><a class="markdownIt-Anchor" href="#datepicker">#</a> DatePicker</h3><table data-source-line="350"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C</td></tr><tr><td>placeholder</td><td>String</td><td>\u8F93\u5165\u6846\u63D0\u793A\u5360\u4F4D\u6587\u672C</td></tr><tr><td>clear</td><td>Boolean\uFF5Ctrue</td><td>\u663E\u793A\u6E05\u7A7A</td></tr><tr><td>disabledDate</td><td>Function</td><td>\u7981\u7528\u7684\u65F6\u95F4\uFF0Creturn true\u65F6\u5C06\u4E0D\u80FD\u9009\u62E9</td></tr><tr><td>disabled</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>type</td><td>String</td><td>\u9762\u677F\u65E5\u671F\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5C06\u6309\u6B64\u683C\u5F0F\u8FD4\u56DE\uFF0C\u5E74/\u5E74\u6708/\u5E74\u6708\u65E5/\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u3002\u53EF\u9009<code>year,month,date,datetime,monthRange,dateRange,datetimeRange</code></td></tr><tr><td>format</td><td>String</td><td>\u8F93\u5165\u6846\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u65F6\u6309type\u9ED8\u8BA4\u683C\u5F0F</td></tr><tr><td>valueFormat</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C\u683C\u5F0F\uFF0C\u5373v-model\u7684\u683C\u5F0F,\u5FC5\u987B\u8981\u662F\u5408\u6CD5\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u5219\u8F93\u5165format\u7684\u683C\u5F0F</td></tr><tr><td>innerText</td><td>Function</td><td>\u53EF\u4EE5\u5C06\u7279\u6B8A\u63D0\u793A\u7684\u6587\u672C\u63D2\u5165\u5230\u6307\u5B9A\u7684\u65E5\u671F\u91CC</td></tr><tr><td>appendToBody</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u65E5\u671F\u9762\u677F\u63D2\u5165\u5230body\u4E2D</td></tr><tr><td>downStyle</td><td>Object</td><td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F\uFF0C\u5FEB\u901F\u4E2A\u6027\u5316\u8BBE\u7F6E\u5355\u4E2A\u65E5\u671F\u4E0B\u62C9\u9762\u677F</td></tr><tr><td>downClass</td><td>string</td><td>\u4E0B\u62C9\u9762\u677F\u7C7B\u540D</td></tr><tr><td>readonly</td><td>Boolean\uFF5Ctrue</td><td>\u65E5\u671F\u8F93\u5165\u6846\u53EA\u8BFB\u6A21\u5F0F</td></tr><tr><td>size</td><td>string</td><td>\u6DFB\u52A0\u7684\u5927\u5C0F\u5C3A\u5BF8\u6837\u5F0F</td></tr></tbody></table><h3 id="datepicker-event" data-source-line="367"><a class="markdownIt-Anchor" href="#datepicker-event">#</a> DatePicker Event</h3><table data-source-line="369"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8\u4E8B\u4EF6</td></tr></tbody></table>',5);function Ta(l,a,t,c,u,e){const p=j("vdpv_0"),n=j("vdpv_1"),i=j("vdpv_2"),v=j("vdpv_3"),b=j("vdpv_4"),f=j("vdpv_5"),V=j("vdpv_6"),q=j("vdpv_7"),w=j("vdpv_8");return m(),k("div",_s,[ks,s("div",ys,[s("div",fs,[s("div",qs,[h(p)]),s("div",{style:_({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ws,Vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>l.toggleCode(0))},r(l.vdpv_0Height>0?"hidden":"show"),1)])]),$s,Ds,s("div",Hs,[s("div",Rs,[s("div",Cs,[h(n)]),s("div",{style:_({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Us,As,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>l.toggleCode(1))},r(l.vdpv_1Height>0?"hidden":"show"),1)])]),Is,Ss,s("div",Ps,[s("div",Fs,[s("div",Ts,[h(i)]),s("div",{style:_({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Bs,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>l.toggleCode(2))},r(l.vdpv_2Height>0?"hidden":"show"),1)])]),Ys,Ns,s("div",zs,[s("div",Os,[s("div",Gs,[h(v)]),s("div",{style:_({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Js,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>l.toggleCode(3))},r(l.vdpv_3Height>0?"hidden":"show"),1)])]),Qs,Ws,s("div",Xs,[s("div",Zs,[s("div",sa,[h(b)]),s("div",{style:_({height:l.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",aa,la,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>l.toggleCode(4))},r(l.vdpv_4Height>0?"hidden":"show"),1)])]),ta,ea,s("div",pa,[s("div",oa,[s("div",ca,[h(f)]),s("div",{style:_({height:l.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",da,ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>l.toggleCode(5))},r(l.vdpv_5Height>0?"hidden":"show"),1)])]),ua,ia,s("div",ja,[s("div",va,[s("div",ga,[h(V)]),s("div",{style:_({height:l.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",ma,ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>l.toggleCode(6))},r(l.vdpv_6Height>0?"hidden":"show"),1)])]),ya,fa,qa,s("div",wa,[s("div",ba,[s("div",Va,[h(q)]),s("div",{style:_({height:l.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",$a,Ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=y=>l.toggleCode(7))},r(l.vdpv_7Height>0?"hidden":"show"),1)])]),Ra,Ca,s("div",Ua,[s("div",Ma,[s("div",Aa,[h(w)]),s("div",{style:_({height:l.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ia,Pa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=y=>l.toggleCode(8))},r(l.vdpv_8Height>0?"hidden":"show"),1)])]),Fa])}var Ea=T(ms,[["render",Ta]]);export{Ea as default};
