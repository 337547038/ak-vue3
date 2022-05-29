var D=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var H=(t,a,n)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,$=(t,a)=>{for(var n in a||(a={}))x.call(a,n)&&H(t,n,a[n]);if(I)for(var n of I(a))U.call(a,n)&&H(t,n,a[n]);return t},C=(t,a)=>F(t,P(a));import{b as p,e as r,o as _,f as E,w as m,g as e,_ as R,c as k,F as V,h as u,i as s,d as S,r as B,t as M,n as g,j as f,a as v}from"./index.83204fe3.js";const N={setup(t){const a=p("");return(n,o)=>{const i=r("ak-input"),l=r("ak-form-item");return _(),E(l,{label:"title"},{default:m(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=c=>a.value=c)},null,8,["modelValue"])]),_:1})}}},T={setup(){const t=p(""),a=p(""),n=p([{type:"tips",msg:"\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F"},{type:"required",msg:"\u5FC5\u586B\u9879"},{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}]);return{value:t,value2:a,rules:n}}};function z(t,a,n,o,i,l){const c=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[e(h,{label:"title",rules:o.rules},{default:m(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),placeholder:"\u8F93\u5165\u65F6\u89E6\u53D1"},null,8,["modelValue"])]),_:1},8,["rules"]),e(h,{label:"title",rules:o.rules,trigger:"blur"},{default:m(()=>[e(c,{modelValue:o.value2,"onUpdate:modelValue":a[1]||(a[1]=d=>o.value2=d),placeholder:"\u5931\u53BB\u7126\u70B9\u89E6\u53D1"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}var L=R(T,[["render",z]]);const O={setup(t){const a=p(""),n=p(""),o=p([{type:"tips",msg:"\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F"},{type:"required",msg:"\u5FC5\u586B\u9879"},{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}]);return(i,l)=>{const c=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[e(h,{label:"title",verify:"tel"},{default:m(()=>[e(c,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=d=>a.value=d),placeholder:"\u624B\u673A\u53F7\u9A8C\u8BC1"},null,8,["modelValue"])]),_:1}),e(h,{label:"title",rules:o.value,verify:"tel"},{default:m(()=>[e(c,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=d=>n.value=d),placeholder:"\u624B\u673A\u53F7\u548C\u5FC5\u586B\u9A8C\u8BC1"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},W=u("submit"),G={setup(t){const a=p(),n=p(""),o=p([{type:"required",msg:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"rule",msg:"\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E1\u5C81\uFF0C\u4E14\u4E0D\u80FD\u8D85\u8FC7120\u5C81",rule:"/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}]),i=()=>{a.value.validate().then(l=>{console.log(l)}).catch(l=>{console.log(l)})};return(l,c)=>{const h=r("ak-input"),d=r("ak-form-item"),j=r("ak-button");return _(),k(V,null,[e(d,{label:"age",rules:o.value,ref_key:"formItemEl",ref:a},{default:m(()=>[e(h,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=w=>n.value=w),placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1},8,["rules"]),e(j,{onClick:i},{default:m(()=>[W]),_:1})],64)}}},J={setup(t){const a=p(""),n=p(""),o=p([{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:i=>i===a.value}]);return(i,l)=>{const c=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[e(h,{label:"password",verify:"required"},{default:m(()=>[e(c,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=d=>a.value=d),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(h,{label:"password",rules:o.value},{default:m(()=>[e(c,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=d=>n.value=d),placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},K={setup(t){const a=p({value:"abc"}),n=p({value:"112",options:[{label:"\u9009\u98791"}],placeholder:"\u8BF7\u9009\u62E9"});return(o,i)=>{const l=r("ak-form-item");return _(),k("div",null,[e(l,{label:"input",type:"input",data:a.value},null,8,["data"]),e(l,{label:"select",type:"select",data:n.value},null,8,["data"])])}}},Q=s("br",null,null,-1),X=s("br",null,null,-1),Y={setup(t){const a=p(),n=p({value:"abc"}),o=p({value:"112",options:[{label:"\u9009\u98791"}],placeholder:"\u8BF7\u9009\u62E9"});return setTimeout(()=>{a.value="123"},1e3),(i,l)=>{const c=r("ak-field");return _(),k("div",null,[e(c,{type:"input",data:n.value,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=h=>a.value=h)},null,8,["data","modelValue"]),Q,X,e(c,{type:"select",data:o.value},null,8,["data"])])}}},A=S({components:{vdpv_0:N,vdpv_1:L,vdpv_2:O,vdpv_3:G,vdpv_4:J,vdpv_5:K,vdpv_6:Y},setup(t){const a=p(),n=p(),o=p(),i=p(),l=p(),c=p(),h=p(),d=[a,n,o,i,l,c,h],j=B({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return C($({toggleCode:q=>{const b="vdpv_"+q;j[b+"Height"]===0?j[b+"Height"]=(d[q].value?d[q].value.offsetHeight:0)||0:j[b+"Height"]=0}},M(j)),{vdpv_0Ref:a,vdpv_1Ref:n,vdpv_2Ref:o,vdpv_3Ref:i,vdpv_4Ref:l,vdpv_5Ref:c,vdpv_6Ref:h})}});A.$vd={matter:{},toc:[{content:"FormItem \u8868\u5355\u96C6\u5408",anchor:"formitem-\u8868\u5355\u96C6\u5408",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u6821\u9A8C",anchor:"\u6821\u9A8C",level:3},{content:"\u5FEB\u901F\u6821\u9A8C",anchor:"\u5FEB\u901F\u6821\u9A8C",level:3},{content:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219",anchor:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219",level:3},{content:"\u56DE\u8C03\u9A8C\u8BC1",anchor:"\u56DE\u8C03\u9A8C\u8BC1",level:3},{content:"\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B",anchor:"\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B",level:3},{content:"\u53EF\u5355\u72EC\u4F7F\u7528`Field`",anchor:"\u53EF\u5355\u72EC\u4F7F\u7528field",level:3},{content:"API",anchor:"api",level:2},{content:"FormItem Props",anchor:"formitem-props",level:3},{content:"FormItem Rules \u9A8C\u8BC1\u89C4\u5219",anchor:"formitem-rules-\u9A8C\u8BC1\u89C4\u5219",level:3},{content:"FormItem Methods",anchor:"formitem-methods",level:3},{content:"Field Props",anchor:"field-props",level:3}]};const Z=A,ss={class:"vuedoc"},as=v('<h1 id="formitem-\u8868\u5355\u96C6\u5408" data-source-line="3"><a class="markdownIt-Anchor" href="#formitem-\u8868\u5355\u96C6\u5408">#</a> FormItem \u8868\u5355\u96C6\u5408</h1><p data-source-line="5">\u5F3A\u5927\u7684\u6821\u9A8C\u529F\u80FD\uFF0C\u4F7F\u7528\u7B80\u5355\u5FEB\u6377</p><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',4),ts={class:"vuedoc-demo"},ns={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},es={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ps=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),os=[ps],cs=s("h3",{id:"\u6821\u9A8C","data-source-line":"23"},[s("a",{class:"markdownIt-Anchor",href:"#\u6821\u9A8C"},"#"),u(" \u6821\u9A8C")],-1),rs=s("p",{"data-source-line":"25"},[u("\u4F7F\u7528"),s("code",null,"rules"),u("\u89C4\u5219\u6821\u9A8C")],-1),ds=s("pre",{style:{display:"none"}},null,-1),hs={class:"vuedoc-demo"},is={class:"vuedoc-demo__inner"},us={class:"vuedoc-demo__preview"},ms={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},vs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8F93\u5165\u65F6\u89E6\u53D1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;blur&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5931\u53BB\u7126\u70B9\u89E6\u53D1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
    <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
    <span class="hljs-keyword">const</span> rules = ref([
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tips&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F&#39;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5FC5\u586B\u9879&#39;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#39;</span>}
    ])
    <span class="hljs-keyword">return</span> {
      value,
      value2,
      rules
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),js=[vs],_s=s("h3",{id:"\u5FEB\u901F\u6821\u9A8C","data-source-line":"59"},[s("a",{class:"markdownIt-Anchor",href:"#\u5FEB\u901F\u6821\u9A8C"},"#"),u(" \u5FEB\u901F\u6821\u9A8C")],-1),gs=s("p",{"data-source-line":"61"},[u("\u5BF9\u4E8E\u5927\u91CF\u7684\u8868\u5355\u9A8C\u8BC1\u4E0D\u9700\u8981\u7CBE\u786E\u63D0\u793A\u65F6\uFF0C\u5982\u9A8C\u8BC1\u4E3A\u7A7A\u65F6\u7EDF\u4E00\u63D0\u793A\u4E3A\u5FC5\u586B\u5B57\u6BB5\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E"),s("code",null,"verify"),u("\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00\uFF0C\u4E5F\u53EF\u540C\u65F6\u548C"),s("code",null,"rules"),u("\u89C4\u5219\u6821\u9A8C\u4E00\u8D77\u4F7F\u7528")],-1),fs=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ys={class:"vuedoc-demo__inner"},qs={class:"vuedoc-demo__preview"},bs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ws=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7\u9A8C\u8BC1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7\u548C\u5FC5\u586B\u9A8C\u8BC1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tips&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u83B7\u53D6\u7126\u70B9\u63D0\u793A\u4FE1\u606F&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5FC5\u586B\u9879&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#39;</span> }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Vs=[ws],Is=s("h3",{id:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219","data-source-line":"87"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219"},"#"),u(" \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219")],-1),Hs=s("pre",{style:{display:"none"}},null,-1),$s={class:"vuedoc-demo"},Cs={class:"vuedoc-demo__inner"},Rs={class:"vuedoc-demo__preview"},As={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ds=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formItemEl&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formItemEl = ref()
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;rule&#39;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E1\u5C81\uFF0C\u4E14\u4E0D\u80FD\u8D85\u8FC7120\u5C81&#39;</span>,
      <span class="hljs-attr">rule</span>: <span class="hljs-string">&#39;/^(?:[1-9][0-9]?|1[01][0-9]|120)$/&#39;</span>
    }
  ])
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formItemEl.value
      .validate()
      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Fs=[Ds],Ps=s("h3",{id:"\u56DE\u8C03\u9A8C\u8BC1","data-source-line":"123"},[s("a",{class:"markdownIt-Anchor",href:"#\u56DE\u8C03\u9A8C\u8BC1"},"#"),u(" \u56DE\u8C03\u9A8C\u8BC1")],-1),xs=s("pre",{style:{display:"none"}},null,-1),Us={class:"vuedoc-demo"},Es={class:"vuedoc-demo__inner"},Ss={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ms=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4&#39;</span>,
      <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> val === value.value
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ns=[Ms],Ts=s("h3",{id:"\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B","data-source-line":"153"},[s("a",{class:"markdownIt-Anchor",href:"#\u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B"},"#"),u(" \u5FEB\u901F\u8F93\u5165\u5E38\u89C1\u7EC4\u4EF6\u7C7B\u578B")],-1),zs=s("p",{"data-source-line":"155"},[u("\u652F\u6301\u7C7B\u578B "),s("code",null,"'input'\u3001'radio'\u3001'checkbox'\u3001'datePicker'\u3001'select'\u3001'switch'\u3001'textarea'\u3001'timeSelect'\u3001'timePicker'")],-1),Ls=s("pre",{style:{display:"none"}},null,-1),Os={class:"vuedoc-demo"},Ws={class:"vuedoc-demo__inner"},Gs={class:"vuedoc-demo__preview"},Js={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ks=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;inputData&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;selectData&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> inputData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;abc&#39;</span> })
  <span class="hljs-keyword">const</span> selectData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;112&#39;</span>, <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span> }], <span class="hljs-attr">placeholder</span>:<span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Qs=[Ks],Xs=s("h3",{id:"\u53EF\u5355\u72EC\u4F7F\u7528field","data-source-line":"172"},[s("a",{class:"markdownIt-Anchor",href:"#\u53EF\u5355\u72EC\u4F7F\u7528field"},"#"),u(" \u53EF\u5355\u72EC\u4F7F\u7528"),s("code",null,"Field")],-1),Ys=s("p",{"data-source-line":"174"},"\u53EF\u4F7F\u7528data.value\u5BF9\u63A7\u4EF6\u8BBE\u7F6E\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662Fv-model(\u4F18\u5148)",-1),Zs=s("pre",{style:{display:"none"}},null,-1),sa={class:"vuedoc-demo"},aa={class:"vuedoc-demo__inner"},ta={class:"vuedoc-demo__preview"},na={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},la=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;inputData&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;selectData&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref()
  <span class="hljs-keyword">const</span> inputData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;abc&#39;</span> })
  <span class="hljs-keyword">const</span> selectData = ref({
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;112&#39;</span>,
    <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span> }],
    <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>
  })
  <span class="hljs-comment">// \u6A21\u62DF\u5EF6\u65F6\u8BBE\u503C</span>
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    value1.value = <span class="hljs-string">&#39;123&#39;</span>
  }, <span class="hljs-number">1000</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ea=[la],pa=v('<h2 id="api" data-source-line="202"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="formitem-props" data-source-line="204"><a class="markdownIt-Anchor" href="#formitem-props">#</a> FormItem Props</h3><table data-source-line="206"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>\u663E\u793A\u7684\u6807\u7B7E\u540D</td></tr><tr><td>labelVisible</td><td>boolean/false</td><td>\u9690\u85CFlabel</td></tr><tr><td>prop</td><td>string</td><td>\u8868\u5355\u6821\u9A8C\u65F6\u5173\u8054\u8868\u5355\u7684\u6821\u9A8C\u89C4\u5219</td></tr><tr><td>required</td><td>boolean/true</td><td>\u662F\u5426\u6839\u636E\u9A8C\u8BC1\u89C4\u5219\u81EA\u52A8\u751F\u6210\u5FC5\u586B\u6837\u5F0F\u540D</td></tr><tr><td>verify</td><td>string</td><td>\u5FEB\u901F\u9A8C\u8BC1\uFF0C\u652F\u6301required, mobile, tel, mail, digits, number,phone \u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00</td></tr><tr><td>rules</td><td>array</td><td>\u6821\u9A8C\u89C4\u5219</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u5728form\u4F7F\u7528\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528form\u7684\u8BBE\u7F6E</td></tr><tr><td>trigger</td><td>string/change</td><td>change\u548Cblur\u4E24\u79CD\uFF0C\u5728form\u4F7F\u7528\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528form\u7684\u8BBE\u7F6E</td></tr><tr><td>labelWidth</td><td>string</td><td>label\u7684\u5BBD\u5EA6</td></tr><tr><td>size</td><td>string</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8\uFF0Cmedium / small / mini</td></tr><tr><td>error</td><td>string</td><td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3Aerror\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td></tr><tr><td>type</td><td>string</td><td>\u53EF\u5FEB\u901F\u8F93\u51FA\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009<code>input\u3001radio\u3001checkbox\u3001datePicker\u3001select\u3001switch\u3001textarea\u3001timeSelect\u3001timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>\u4EC5\u5728type\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5BF9\u5E94\u5F53\u524D\u7EC4\u4EF6\u7684props\u6240\u6709\u53C2\u6570</td></tr><tr><td>v-model</td><td>any</td><td>\u4EC5\u5728type\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u7684\u503C</td></tr></tbody></table><h3 id="formitem-rules-\u9A8C\u8BC1\u89C4\u5219" data-source-line="223"><a class="markdownIt-Anchor" href="#formitem-rules-\u9A8C\u8BC1\u89C4\u5219">#</a> FormItem Rules \u9A8C\u8BC1\u89C4\u5219</h3><table data-source-line="225"><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>required</td><td>\u4E3A\u7A7A</td></tr><tr><td>maxLength</td><td>\u6700\u5927\u5B57\u7B26</td></tr><tr><td>minLength</td><td>\u6700\u5C0F\u5B57\u7B26</td></tr><tr><td>mobile</td><td>\u624B\u673A\u53F7\u683C\u5F0F</td></tr><tr><td>tel</td><td>\u56FA\u8BDD</td></tr><tr><td>phone</td><td>\u56FA\u8BDD\u6216\u624B\u673A</td></tr><tr><td>mail</td><td>\u90AE\u7BB1\u683C\u5F0F</td></tr><tr><td>digits</td><td>\u6B63\u6574\u6570</td></tr><tr><td>number</td><td>\u6570\u5B57</td></tr><tr><td>tips</td><td>\u83B7\u5F97\u7126\u70B9\u4E14\u503C\u4E3A\u7A7A\u65F6\u663E\u793A\u8F93\u5165\u63D0\u793A</td></tr><tr><td>rule</td><td>\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219</td></tr><tr><td>fn</td><td>\u56DE\u8C03\u9A8C\u8BC1</td></tr></tbody></table><h3 id="formitem-methods" data-source-line="240"><a class="markdownIt-Anchor" href="#formitem-methods">#</a> FormItem Methods</h3><table data-source-line="242"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td></td><td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td></tr><tr><td>clearTips</td><td></td><td>\u7528\u4E8E\u6E05\u7A7A\u9A8C\u8BC1\u63D0\u793A\u4FE1\u606F\uFF0C\u6062\u590D\u521D\u59CB\u72B6\u6001</td></tr></tbody></table><h3 id="field-props" data-source-line="247"><a class="markdownIt-Anchor" href="#field-props">#</a> Field Props</h3><table data-source-line="249"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u53EF\u5FEB\u901F\u8F93\u51FA\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009<code>input\u3001radio\u3001checkbox\u3001datePicker\u3001select\u3001switch\u3001textarea\u3001timeSelect\u3001timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>\u5BF9\u5E94\u5F53\u524D\u7EC4\u4EF6\u7684props\u6240\u6709\u53C2\u6570</td></tr><tr><td>v-model</td><td>any</td><td>\u5F53\u524D\u63A7\u4EF6\u7684\u503C</td></tr></tbody></table>',9);function oa(t,a,n,o,i,l){const c=r("vdpv_0"),h=r("vdpv_1"),d=r("vdpv_2"),j=r("vdpv_3"),w=r("vdpv_4"),q=r("vdpv_5"),b=r("vdpv_6");return _(),k("div",ss,[as,s("div",ts,[s("div",ns,[s("div",ls,[e(c)]),s("div",{style:g({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",es,os,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>t.toggleCode(0))},f(t.vdpv_0Height>0?"hidden":"show"),1)])]),cs,rs,ds,s("div",hs,[s("div",is,[s("div",us,[e(h)]),s("div",{style:g({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ms,js,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>t.toggleCode(1))},f(t.vdpv_1Height>0?"hidden":"show"),1)])]),_s,gs,fs,s("div",ks,[s("div",ys,[s("div",qs,[e(d)]),s("div",{style:g({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",bs,Vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>t.toggleCode(2))},f(t.vdpv_2Height>0?"hidden":"show"),1)])]),Is,Hs,s("div",$s,[s("div",Cs,[s("div",Rs,[e(j)]),s("div",{style:g({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,Fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>t.toggleCode(3))},f(t.vdpv_3Height>0?"hidden":"show"),1)])]),Ps,xs,s("div",Us,[s("div",Es,[s("div",Ss,[e(w)]),s("div",{style:g({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Bs,Ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>t.toggleCode(4))},f(t.vdpv_4Height>0?"hidden":"show"),1)])]),Ts,zs,Ls,s("div",Os,[s("div",Ws,[s("div",Gs,[e(q)]),s("div",{style:g({height:t.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Js,Qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>t.toggleCode(5))},f(t.vdpv_5Height>0?"hidden":"show"),1)])]),Xs,Ys,Zs,s("div",sa,[s("div",aa,[s("div",ta,[e(b)]),s("div",{style:g({height:t.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",na,ea,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>t.toggleCode(6))},f(t.vdpv_6Height>0?"hidden":"show"),1)])]),pa])}var da=R(Z,[["render",oa]]);export{da as default};