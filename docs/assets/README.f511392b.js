import{r as d,a as j,o as m,c as k,e as s,g as o,i as r,b as h,d as D,f as R,_ as H,h as M,t as A,n as _,j as g}from"./index.c6de7dce.js";const E=s("br",null,null,-1),C=s("br",null,null,-1),U=s("br",null,null,-1),I={__name:"README.md.vdpv_0",setup(e){const a=d(""),p=d("2019-06-01"),c=d("2019-06-01");return(u,l)=>{const t=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),E,h(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),C,h(t,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=n=>p.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),U,h(t,{modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=n=>p.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",disabled:!0},null,8,["modelValue"])])])}}},S=s("br",null,null,-1),P=s("br",null,null,-1),F=s("br",null,null,-1),T={__name:"README.md.vdpv_1",setup(e){const a=new Date().getFullYear(),p=d(""),c=d(a.toString()),u=d(""),l=t=>{const n=t.getFullYear();return console.log(n),n<a-2||n>a+3};return(t,n)=>{const i=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),S,h(i,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=v=>p.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),P,h(i,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=v=>c.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year"},null,8,["modelValue"])]),s("p",null,[o("\u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),F,h(i,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=v=>u.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"year","disabled-date":l},null,8,["modelValue"])])])}}},B=s("br",null,null,-1),x=s("br",null,null,-1),Y=s("br",null,null,-1),N={__name:"README.md.vdpv_2",setup(e){const a=new Date().getFullYear(),p=d(""),c=d(a+"/10"),u=d(""),l=(t,n)=>{if(n==="month"){const i=t.getMonth();return i<2||i>6}};return(t,n)=>{const i=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),B,h(i,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=v=>p.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),x,h(i,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=v=>c.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(u.value),1),Y,h(i,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=v=>u.value=v),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"month","disabled-date":l},null,8,["modelValue"])])])}}},z=s("br",null,null,-1),O=s("br",null,null,-1),G=s("br",null,null,-1),J={__name:"README.md.vdpv_3",setup(e){const a=d(""),p=d(new Date().getTime().toString()),c=d(""),u=(l,t)=>{if(t==="day"){const n=l.getDay();return n===0||n===6}};return(l,t)=>{const n=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),z,h(n,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),O,h(n,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=i=>p.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date"},null,8,["modelValue"])]),s("p",null,[o(" \u9650\u5236\u9009\u62E9\u8303\u56F4\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),G,h(n,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=i=>c.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"date","disabled-date":u},null,8,["modelValue"])])])}}},K=s("br",null,null,-1),L=s("br",null,null,-1),Q={__name:"README.md.vdpv_4",setup(e){const a=d(""),p=d(new Date().getTime().toString());return(c,u)=>{const l=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),K,h(l,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=t=>a.value=t),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),L,h(l,{modelValue:p.value,"onUpdate:modelValue":u[1]||(u[1]=t=>p.value=t),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"datetime"},null,8,["modelValue"])])])}}},W=s("br",null,null,-1),X={__name:"README.md.vdpv_5",setup(e){const a=d("2021-06-01");return(p,c)=>{const u=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),W,h(u,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=l=>a.value=l),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",readonly:!1},null,8,["modelValue"])])])}}},Z=D({__name:"README.md.vdpv_6",setup(e){const a=d(),p=u=>[14,15,16].includes(u.getDate())?"\u4F11":[17,18,19].includes(u.getDate())?"\u73ED":"",c=(u,l)=>{const t=u.getDay();return t===0||t===6};return(u,l)=>{const t=j("ak-date-picker");return m(),R(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",innerText:p,"disabled-date":c,readonly:!1},null,8,["modelValue"])}}}),ss=s("br",null,null,-1),as=s("br",null,null,-1),ns=s("br",null,null,-1),ls={__name:"README.md.vdpv_7",setup(e){const a=d("2021-06-01"),p=d("2021-06-01"),c=d("2021-06-01");return(u,l)=>{const t=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u6708\u65E5\u5C0F\u4E8E10\u65F6\uFF0C\u524D\u9762\u4E0D\u52A00\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),ss,h(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y-M-d"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),as,h(t,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=n=>p.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"y\u5E74MM\u6708dd\u65E5 \u661F\u671Fw","value-format":"y-MM-dd"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u65F6\u95F4\u6233\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),ns,h(t,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=n=>c.value=n),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])}}},ts=s("br",null,null,-1),es=s("br",null,null,-1),ps=s("br",null,null,-1),os={__name:"README.md.vdpv_8",setup(e){const a=d([]),p=d([]),c=d([]);return(u,l)=>{const t=j("ak-date-picker");return m(),k("div",null,[s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(a.value),1),ts,h(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),type:"monthRange",placeholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",endPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD"},null,8,["modelValue"])]),s("p",null,[o(" \u663E\u793A\u5E74\u6708\u65E5\u683C\u5F0F\u3002\u9009\u62E9\u7684\u503C\uFF1A"+r(p.value),1),es,h(t,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=n=>p.value=n),type:"dateRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("p",null,[o(" \u9009\u62E9\u7684\u503C\uFF1A"+r(c.value),1),ps,h(t,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=n=>c.value=n),type:"datetimeRange",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",endPlaceholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])])])}}},$=D({components:{vdpv_0:I,vdpv_1:T,vdpv_2:N,vdpv_3:J,vdpv_4:Q,vdpv_5:X,vdpv_6:Z,vdpv_7:ls,vdpv_8:os},setup(e){const a=d(),p=d(),c=d(),u=d(),l=d(),t=d(),n=d(),i=d(),v=d(),b=[a,p,c,u,l,t,n,i,v],f=M({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:q=>{const w="vdpv_"+q;f[w+"Height"]===0?f[w+"Height"]=(b[q].value?b[q].value.offsetHeight:0)||0:f[w+"Height"]=0},...A(f),vdpv_0Ref:a,vdpv_1Ref:p,vdpv_2Ref:c,vdpv_3Ref:u,vdpv_4Ref:l,vdpv_5Ref:t,vdpv_6Ref:n,vdpv_7Ref:i,vdpv_8Ref:v}}});$.$vd={matter:{},toc:[{content:"DatePicker \u65E5\u671F\u9009\u62E9",anchor:"datepicker-\u65E5\u671F\u9009\u62E9",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u5E74\u4EFD\u9009\u62E9",anchor:"\u5E74\u4EFD\u9009\u62E9",level:3},{content:"\u6708\u4EFD\u9009\u62E9",anchor:"\u6708\u4EFD\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u9009\u62E9",level:3},{content:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",anchor:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9",level:3},{content:"\u624B\u52A8\u8F93\u5165",anchor:"\u624B\u52A8\u8F93\u5165",level:3},{content:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",anchor:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26",level:3},{content:"\u65F6\u95F4\u683C\u5F0F\u5316",anchor:"\u65F6\u95F4\u683C\u5F0F\u5316",level:3},{content:"\u533A\u95F4\u9009\u62E9",anchor:"\u533A\u95F4\u9009\u62E9",level:3},{content:"API",anchor:"api",level:2},{content:"DatePicker",anchor:"datepicker",level:3},{content:"DatePicker Event",anchor:"datepicker-event",level:3}]};const cs=$,ds={class:"vuedoc"},rs=g('<h1 id="datepicker-\u65E5\u671F\u9009\u62E9" data-source-line="3"><a class="markdownIt-Anchor" href="#datepicker-\u65E5\u671F\u9009\u62E9">#</a> DatePicker \u65E5\u671F\u9009\u62E9</h1><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',3),hs={class:"vuedoc-demo"},us={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},vs=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),gs=[vs],ms=s("h3",{id:"\u5E74\u4EFD\u9009\u62E9","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u4EFD\u9009\u62E9"},"#"),o(" \u5E74\u4EFD\u9009\u62E9")],-1),_s=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ys={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},qs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ws=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),bs=[ws],Vs=s("h3",{id:"\u6708\u4EFD\u9009\u62E9","data-source-line":"79"},[s("a",{class:"markdownIt-Anchor",href:"#\u6708\u4EFD\u9009\u62E9"},"#"),o(" \u6708\u4EFD\u9009\u62E9")],-1),Ds=s("pre",{style:{display:"none"}},null,-1),$s={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},Hs={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},As=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),Es=[As],Cs=s("h3",{id:"\u5E74\u6708\u65E5\u9009\u62E9","data-source-line":"121"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u9009\u62E9")],-1),Us=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},Ss={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Fs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ts=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),Bs=[Ts],xs=s("h3",{id:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9","data-source-line":"163"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9"},"#"),o(" \u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9")],-1),Ys=s("pre",{style:{display:"none"}},null,-1),Ns={class:"vuedoc-demo"},zs={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Gs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Js=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),Ks=[Js],Ls=s("h3",{id:"\u624B\u52A8\u8F93\u5165","data-source-line":"197"},[s("a",{class:"markdownIt-Anchor",href:"#\u624B\u52A8\u8F93\u5165"},"#"),o(" \u624B\u52A8\u8F93\u5165")],-1),Qs=s("pre",{style:{display:"none"}},null,-1),Ws={class:"vuedoc-demo"},Xs={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},aa=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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



</span></code></pre></div>`,1),na=[aa],la=s("h3",{id:"\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26","data-source-line":"222"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26"},"#"),o(" \u81EA\u5B9A\u663E\u793A\u7279\u6B8A\u5B57\u7B26")],-1),ta=s("pre",{style:{display:"none"}},null,-1),ea={class:"vuedoc-demo"},pa={class:"vuedoc-demo__inner"},oa={class:"vuedoc-demo__preview"},ca={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},da=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),ra=[da],ha=s("h3",{id:"\u65F6\u95F4\u683C\u5F0F\u5316","data-source-line":"256"},[s("a",{class:"markdownIt-Anchor",href:"#\u65F6\u95F4\u683C\u5F0F\u5316"},"#"),o(" \u65F6\u95F4\u683C\u5F0F\u5316")],-1),ua=s("p",{"data-source-line":"258"},[o("\u4F7F\u7528"),s("code",null,"format"),o("\u6307\u5B9A\u8F93\u51FA\u663E\u793A\u7684\u7C7B\u578B\uFF0C\u5373\u8F93\u5165\u6846\u663E\u793A\u7684\u503C\u3002\u53EF\u4F7F\u7528y(\u5E74)\u3001M(\u6708)\u3001d(\u65E5)\u3001h(\u65F6)\u3001m(\u5206)\u3001s(\u79D2)\u3001w(\u661F\u671F) \u3001timestamp\uFF0CMM\u8868\u793A\u4F7F\u7528\u4E24\u4F4D\u8868\u793A\u6708\u4EFD\uFF0C\u4F7F\u7528"),s("code",null,"format"),o("\u5E94\u914D\u5408"),s("code",null,"value-format"),o("\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u5F53"),s("code",null,"format"),o("\u7684\u683C\u5F0F\u8F6C\u6362\u6210\u65F6\u95F4\u5F02\u5E38\uFF0C\u4F1A\u88AB\u8BA4\u4E3A\u662F\u65E0\u6548\u7684\u65F6\u95F4")],-1),ia=s("pre",{style:{display:"none"}},null,-1),ja={class:"vuedoc-demo"},va={class:"vuedoc-demo__inner"},ga={class:"vuedoc-demo__preview"},ma={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},_a=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),ka=[_a],ya=s("h3",{id:"\u533A\u95F4\u9009\u62E9","data-source-line":"303"},[s("a",{class:"markdownIt-Anchor",href:"#\u533A\u95F4\u9009\u62E9"},"#"),o(" \u533A\u95F4\u9009\u62E9")],-1),fa=s("pre",{style:{display:"none"}},null,-1),qa={class:"vuedoc-demo"},wa={class:"vuedoc-demo__inner"},ba={class:"vuedoc-demo__preview"},Va={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Da=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),$a=[Da],Ra=g('<h2 id="api" data-source-line="346"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="datepicker" data-source-line="348"><a class="markdownIt-Anchor" href="#datepicker">#</a> DatePicker</h3><table data-source-line="350"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C</td></tr><tr><td>placeholder</td><td>String</td><td>\u8F93\u5165\u6846\u63D0\u793A\u5360\u4F4D\u6587\u672C</td></tr><tr><td>clear</td><td>Boolean\uFF5Ctrue</td><td>\u663E\u793A\u6E05\u7A7A</td></tr><tr><td>disabledDate</td><td>Function</td><td>\u7981\u7528\u7684\u65F6\u95F4\uFF0Creturn true\u65F6\u5C06\u4E0D\u80FD\u9009\u62E9</td></tr><tr><td>disabled</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>type</td><td>String</td><td>\u9762\u677F\u65E5\u671F\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5C06\u6309\u6B64\u683C\u5F0F\u8FD4\u56DE\uFF0C\u5E74/\u5E74\u6708/\u5E74\u6708\u65E5/\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u3002\u53EF\u9009<code>year,month,date,datetime,monthRange,dateRange,datetimeRange</code></td></tr><tr><td>format</td><td>String</td><td>\u8F93\u5165\u6846\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u65F6\u6309type\u9ED8\u8BA4\u683C\u5F0F</td></tr><tr><td>valueFormat</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C\u683C\u5F0F\uFF0C\u5373v-model\u7684\u683C\u5F0F,\u5FC5\u987B\u8981\u662F\u5408\u6CD5\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u7A7A\u5219\u8F93\u5165format\u7684\u683C\u5F0F</td></tr><tr><td>innerText</td><td>Function</td><td>\u53EF\u4EE5\u5C06\u7279\u6B8A\u63D0\u793A\u7684\u6587\u672C\u63D2\u5165\u5230\u6307\u5B9A\u7684\u65E5\u671F\u91CC</td></tr><tr><td>appendToBody</td><td>Boolean\uFF5Ctrue</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u65E5\u671F\u9762\u677F\u63D2\u5165\u5230body\u4E2D</td></tr><tr><td>downStyle</td><td>Object</td><td>\u4E0B\u62C9\u9762\u677F\u6837\u5F0F\uFF0C\u5FEB\u901F\u4E2A\u6027\u5316\u8BBE\u7F6E\u5355\u4E2A\u65E5\u671F\u4E0B\u62C9\u9762\u677F</td></tr><tr><td>downClass</td><td>string</td><td>\u4E0B\u62C9\u9762\u677F\u7C7B\u540D</td></tr><tr><td>readonly</td><td>Boolean\uFF5Ctrue</td><td>\u65E5\u671F\u8F93\u5165\u6846\u53EA\u8BFB\u6A21\u5F0F</td></tr><tr><td>size</td><td>string</td><td>\u6DFB\u52A0\u7684\u5927\u5C0F\u5C3A\u5BF8\u6837\u5F0F</td></tr></tbody></table><h3 id="datepicker-event" data-source-line="367"><a class="markdownIt-Anchor" href="#datepicker-event">#</a> DatePicker Event</h3><table data-source-line="369"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8\u4E8B\u4EF6</td></tr></tbody></table>',5);function Ha(e,a,p,c,u,l){const t=j("vdpv_0"),n=j("vdpv_1"),i=j("vdpv_2"),v=j("vdpv_3"),b=j("vdpv_4"),f=j("vdpv_5"),V=j("vdpv_6"),q=j("vdpv_7"),w=j("vdpv_8");return m(),k("div",ds,[rs,s("div",hs,[s("div",us,[s("div",is,[h(t)]),s("div",{style:_({height:e.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>e.toggleCode(0))},r(e.vdpv_0Height>0?"hidden":"show"),1)])]),ms,_s,s("div",ks,[s("div",ys,[s("div",fs,[h(n)]),s("div",{style:_({height:e.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",qs,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>e.toggleCode(1))},r(e.vdpv_1Height>0?"hidden":"show"),1)])]),Vs,Ds,s("div",$s,[s("div",Rs,[s("div",Hs,[h(i)]),s("div",{style:_({height:e.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ms,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>e.toggleCode(2))},r(e.vdpv_2Height>0?"hidden":"show"),1)])]),Cs,Us,s("div",Is,[s("div",Ss,[s("div",Ps,[h(v)]),s("div",{style:_({height:e.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fs,Bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>e.toggleCode(3))},r(e.vdpv_3Height>0?"hidden":"show"),1)])]),xs,Ys,s("div",Ns,[s("div",zs,[s("div",Os,[h(b)]),s("div",{style:_({height:e.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Gs,Ks,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>e.toggleCode(4))},r(e.vdpv_4Height>0?"hidden":"show"),1)])]),Ls,Qs,s("div",Ws,[s("div",Xs,[s("div",Zs,[h(f)]),s("div",{style:_({height:e.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",sa,na,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>e.toggleCode(5))},r(e.vdpv_5Height>0?"hidden":"show"),1)])]),la,ta,s("div",ea,[s("div",pa,[s("div",oa,[h(V)]),s("div",{style:_({height:e.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",ca,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>e.toggleCode(6))},r(e.vdpv_6Height>0?"hidden":"show"),1)])]),ha,ua,ia,s("div",ja,[s("div",va,[s("div",ga,[h(q)]),s("div",{style:_({height:e.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",ma,ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=y=>e.toggleCode(7))},r(e.vdpv_7Height>0?"hidden":"show"),1)])]),ya,fa,s("div",qa,[s("div",wa,[s("div",ba,[h(w)]),s("div",{style:_({height:e.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Va,$a,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=y=>e.toggleCode(8))},r(e.vdpv_8Height>0?"hidden":"show"),1)])]),Ra])}const Aa=H(cs,[["render",Ha]]);export{Aa as default};
