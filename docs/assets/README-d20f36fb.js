import{d as b,r as n,a as h,o as g,c as H,g as s,b as i,F as E,e as k,_ as A,w as I,n as _,t as m,h as U,i as D,j,f as d}from"./index-6c3c2d70.js";const M=b({__name:"README.md.vdpv_0",setup(l){const a=n([{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n(1),o=n("2"),p=n(""),e=n("");return(c,r)=>{const v=h("ak-select");return g(),H(E,null,[s("p",null,[i(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=u=>t.value=u),placeholder:"请选择",options:a.value},null,8,["modelValue","options"])]),s("p",null,[i(v,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=u=>o.value=u),placeholder:"请选择",options:a.value},null,8,["modelValue","options"])]),s("p",null,[i(v,{modelValue:p.value,"onUpdate:modelValue":r[2]||(r[2]=u=>p.value=u),placeholder:"禁用状态不能选择",options:a.value,disabled:!0},null,8,["modelValue","options"])]),s("p",null,[i(v,{modelValue:e.value,"onUpdate:modelValue":r[3]||(r[3]=u=>e.value=u),placeholder:"设置最大下拉高度",options:a.value,downHeight:100},null,8,["modelValue","options"])])],64)}}}),S=b({__name:"README.md.vdpv_1",setup(l){const a=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n("");return(o,p)=>{const e=h("ak-select");return g(),k(e,{placeholder:"请选择",options:a.value,modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=c=>t.value=c),clear:!0},null,8,["options","modelValue"])}}}),x={setup(){const l=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),a=n("");return{options:l,value1:a}}};function O(l,a,t,o,p,e){const c=h("ak-select");return g(),k(c,{placeholder:"请选择",options:o.options,modelValue:o.value1,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value1=r),filterable:!0},null,8,["options","modelValue"])}const N=A(x,[["render",O]]),B=b({__name:"README.md.vdpv_3",setup(l){const a=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n(""),o=p=>{console.log(p),a.value=[{label:"输入搜索",value:"1"}]};return(p,e)=>{const c=h("ak-select");return g(),k(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),placeholder:"请选择",options:a.value,filterable:!0,async:!0,onInput:o},null,8,["modelValue","options"])}}}),K=b({__name:"README.md.vdpv_4",setup(l){const a=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n([]),o=()=>{alert("最多选择3项")};return(p,e)=>{const c=h("ak-select");return g(),k(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),placeholder:"请选择",options:a.value,multiple:!0,"multiple-limit":3,onLimitChange:o},null,8,["modelValue","options"])}}}),F=b({__name:"README.md.vdpv_5",setup(l){const a=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n([]),o=(e,c)=>{console.log("change"),console.log(e,c)},p=e=>(console.log(e),alert("不能选择"),!1);return(e,c)=>{const r=h("ak-select");return g(),k(r,{placeholder:"请选择",options:a.value,modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=v=>t.value=v),onChange:o,beforeChange:p},null,8,["options","modelValue"])}}}),L=b({__name:"README.md.vdpv_6",setup(l){const a=n("");return(t,o)=>{const p=h("ak-option"),e=h("ak-select");return g(),k(e,{placeholder:"请选择",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=c=>a.value=c)},{default:I(()=>[i(p,{value:"11",label:"选择一"})]),_:1},8,["modelValue"])}}}),z=b({__name:"README.md.vdpv_7",setup(l){const a=n([{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n("");return(o,p)=>{const e=h("ak-select");return g(),k(e,{placeholder:"请选择",modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=c=>t.value=c),options:a.value,direction:2},null,8,["modelValue","options"])}}}),P=b({__name:"README.md.vdpv_8",setup(l){const a=n([{key:"选项1",name:"1"},{key:"选项2",name:"2"},{key:"选项3",name:"3"},{key:"选项4",name:"4",disabled:!0},{key:"选项5",name:"5"},{key:"6"},{key:"选项7",name:"7"},{key:"选项8",name:"8"},{key:"选项9",name:"9"},{key:"选项10",name:"10",class:"red"}]),t=n("");return(o,p)=>{const e=h("ak-select");return g(),k(e,{width:"100px",placeholder:"请选择",modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=c=>t.value=c),options:a.value,optionsKey:{label:"key",value:"name"}},null,8,["modelValue","options"])}}}),T=b({__name:"README.md.vdpv_9",setup(l){const a=n([{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]),t=n([]),o=p=>{console.log(p)};return(p,e)=>{const c=h("ak-select");return g(),H("p",null,[i(c,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),placeholder:"请选择",options:a.value,multiple:"",filterable:"","allow-create":"",onDelete:o},null,8,["modelValue","options"])])}}}),$=b({components:{vdpv_0:M,vdpv_1:S,vdpv_2:N,vdpv_3:B,vdpv_4:K,vdpv_5:F,vdpv_6:L,vdpv_7:z,vdpv_8:P,vdpv_9:T},setup(l){const a=n(),t=n(),o=n(),p=n(),e=n(),c=n(),r=n(),v=n(),u=n(),C=n(),V=[a,t,o,p,e,c,r,v,u,C],y=U({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0});return{toggleCode:q=>{const w="vdpv_"+q;y[w+"Height"]===0?y[w+"Height"]=(V[q].value?V[q].value.offsetHeight:0)||0:y[w+"Height"]=0},...D(y),vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:o,vdpv_3Ref:p,vdpv_4Ref:e,vdpv_5Ref:c,vdpv_6Ref:r,vdpv_7Ref:v,vdpv_8Ref:u,vdpv_9Ref:C}}});$.$vd={matter:{},toc:[{content:"select 下拉选择",anchor:"select-下拉选择",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"可清空选项",anchor:"可清空选项",level:3},{content:"可搜索",anchor:"可搜索",level:3},{content:"异步搜索",anchor:"异步搜索",level:3},{content:"可多选",anchor:"可多选",level:3},{content:"改变前拉截事件",anchor:"改变前拉截事件",level:3},{content:"使用`Option`组件，参数和`select`的`option`一致",anchor:"使用option组件参数和select的option一致",level:3},{content:"向上弹出选项面板",anchor:"向上弹出选项面板",level:3},{content:"选择数据指定的label和value",anchor:"选择数据指定的label和value",level:3},{content:"创建新的选项",anchor:"创建新的选项",level:3},{content:"API",anchor:"api",level:2},{content:"Select",anchor:"select",level:3},{content:"Options Attributes",anchor:"options-attributes",level:3},{content:"Select Events",anchor:"select-events",level:3},{content:"Select Method",anchor:"select-method",level:3}]};const G=$,J={class:"vuedoc"},Q=j('<h1 id="select-下拉选择" data-source-line="3"><a class="markdownIt-Anchor" href="#select-下拉选择">#</a> select 下拉选择</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),W={class:"vuedoc-demo"},X={class:"vuedoc-demo__inner"},Y={class:"vuedoc-demo__preview"},Z={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ss=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;禁用状态不能选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;设置最大下拉高度&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">:downHeight</span>=<span class="hljs-string">&quot;100&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;2&#39;</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value4 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),as=[ss],ls=s("h3",{id:"可清空选项","data-source-line":"55"},[s("a",{class:"markdownIt-Anchor",href:"#可清空选项"},"#"),d(" 可清空选项")],-1),ns=s("p",{"data-source-line":"57"},[s("code",null,"clear=true")],-1),ts=s("pre",{style:{display:"none"}},null,-1),es={class:"vuedoc-demo"},ps={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},os={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},rs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),hs=[rs],ds=s("h3",{id:"可搜索","data-source-line":"88"},[s("a",{class:"markdownIt-Anchor",href:"#可搜索"},"#"),d(" 可搜索")],-1),is=s("p",{"data-source-line":"90"},[s("code",null,"filterable=true")],-1),js=s("pre",{style:{display:"none"}},null,-1),us={class:"vuedoc-demo"},vs={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},_s={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ms=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:filterable</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> options = ref([
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span>},
      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span>}
    ])
    <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
    <span class="hljs-keyword">return</span> {
      options,
      value1
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),bs=[ms],fs=s("h3",{id:"异步搜索","data-source-line":"123"},[s("a",{class:"markdownIt-Anchor",href:"#异步搜索"},"#"),d(" 异步搜索")],-1),ks=s("p",{"data-source-line":"125"},[s("code",null,"filterable=true"),d(),s("code",null,'async="true"'),d(),s("code",null,'@input="searchChange"')],-1),ys=s("pre",{style:{display:"none"}},null,-1),qs={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Hs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">:filterable</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:async</span>=<span class="hljs-string">&quot;true&quot;</span>
    @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;searchChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> searchChange = <span class="hljs-function">(<span class="hljs-params">val: string</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    options.value = [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;输入搜索&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> }]
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Rs=[Hs],As=s("h3",{id:"可多选","data-source-line":"162"},[s("a",{class:"markdownIt-Anchor",href:"#可多选"},"#"),d(" 可多选")],-1),$s=s("p",{"data-source-line":"164"},[s("code",null,"multiple=true"),d("。多选时"),s("code",null,"v-model"),d("必须是数组，同时可设置"),s("code",null,"multiple-limit"),d("最多选择的个数及提示信息")],-1),Es=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},Us={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ss=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:multiple-limit</span>=<span class="hljs-string">&quot;3&quot;</span>
    @<span class="hljs-attr">limitChange</span>=<span class="hljs-string">&quot;limitChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref([])
  <span class="hljs-keyword">const</span> limitChange = <span class="hljs-function">() =&gt;</span> {
    alert(<span class="hljs-string">&#39;最多选择3项&#39;</span>)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),xs=[Ss],Os=s("h3",{id:"改变前拉截事件","data-source-line":"200"},[s("a",{class:"markdownIt-Anchor",href:"#改变前拉截事件"},"#"),d(" 改变前拉截事件")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),Bs={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Ls={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},zs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
    <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref([])
  <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: any, item: any</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>)
    <span class="hljs-built_in">console</span>.log(value, item)
  }
  <span class="hljs-keyword">const</span> beforeChange = <span class="hljs-function">(<span class="hljs-params">item: any</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(item)
    alert(<span class="hljs-string">&#39;不能选择&#39;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ps=[zs],Ts=s("h3",{id:"使用option组件参数和select的option一致","data-source-line":"242"},[s("a",{class:"markdownIt-Anchor",href:"#使用option组件参数和select的option一致"},"#"),d(" 使用"),s("code",null,"Option"),d("组件，参数和"),s("code",null,"select"),d("的"),s("code",null,"option"),d("一致")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Qs={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Xs={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ys=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;11&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择一&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Zs=[Ys],sa=s("h3",{id:"向上弹出选项面板","data-source-line":"257"},[s("a",{class:"markdownIt-Anchor",href:"#向上弹出选项面板"},"#"),d(" 向上弹出选项面板")],-1),aa=s("pre",{style:{display:"none"}},null,-1),la={class:"vuedoc-demo"},na={class:"vuedoc-demo__inner"},ta={class:"vuedoc-demo__preview"},ea={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},pa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">:direction</span>=<span class="hljs-string">&quot;2&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ca=[pa],oa=s("h3",{id:"选择数据指定的label和value","data-source-line":"287"},[s("a",{class:"markdownIt-Anchor",href:"#选择数据指定的label和value"},"#"),d(" 选择数据指定的label和value")],-1),ra=s("p",{"data-source-line":"289"},[d("使用"),s("code",null,"optionsKey"),d("指定取值的key的值")],-1),ha=s("pre",{style:{display:"none"}},null,-1),da={class:"vuedoc-demo"},ia={class:"vuedoc-demo__inner"},ja={class:"vuedoc-demo__preview"},ua={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},va=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    <span class="hljs-attr">:optionsKey</span>=<span class="hljs-string">&quot;{ label: &#39;key&#39;, value: &#39;name&#39; }&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ga=[va],_a=j('<h3 id="创建新的选项" data-source-line="320"><a class="markdownIt-Anchor" href="#创建新的选项">#</a> 创建新的选项</h3><p data-source-line="322">可以创建并选中选项中不存在的条目</p><p data-source-line="324">通过使用 <code>allow-create</code> 属性，用户可以通过输入框创建新项目。 为了使 allow-create 正确的工作， filterable 的值必须为 true. 按下回车就可以选中当前选项列表中的第一个选项。</p><pre style="display:none;"></pre>',4),ma={class:"vuedoc-demo"},ba={class:"vuedoc-demo__inner"},fa={class:"vuedoc-demo__preview"},ka={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},ya=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">filterable</span>
      <span class="hljs-attr">allow-create</span>
      @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;deleteOptions&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> options = ref([
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
  ])
  <span class="hljs-keyword">const</span> value1 = ref([])
  <span class="hljs-keyword">const</span> deleteOptions = <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(index)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),qa=[ya],wa=j('<h2 id="api" data-source-line="363"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="select" data-source-line="365"><a class="markdownIt-Anchor" href="#select">#</a> Select</h3><table data-source-line="367"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string,array</td><td>通过v-model绑定，<code>multiple</code>时为<code>array</code></td></tr><tr><td>multiple</td><td>boolean/false</td><td>是否多选</td></tr><tr><td>multipleLimit</td><td>number/0</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr><tr><td>placeholder</td><td>string</td><td>占位符,value为空时显示。占位符为空时显示options第一项</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索，对当前下拉数据筛选</td></tr><tr><td>async</td><td>boolean/false</td><td>异步搜索，<code>filterable=true</code>时有效</td></tr><tr><td>options</td><td>array</td><td>下拉选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属性，默认{label:‘label’,value:‘value’}</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可以清空选项</td></tr><tr><td>downHeight</td><td>Number</td><td>最大下拉高度，默认200</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式，方便对单个select个性化设置，也可通过css控制</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类名</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>将下拉面板插入到body</td></tr><tr><td>direction</td><td>Number/0</td><td>下拉弹出方向，0自动，1向上，2向下</td></tr><tr><td>width</td><td>string</td><td>宽度</td></tr><tr><td>beforeChange</td><td>Function</td><td>选项改变前事件,<code>return false</code>阻止选择</td></tr><tr><td>size</td><td>string</td><td>添加的大小尺寸样式</td></tr><tr><td>allowCreate</td><td>boolean</td><td>允许动态创建</td></tr></tbody></table><h3 id="options-attributes" data-source-line="389"><a class="markdownIt-Anchor" href="#options-attributes">#</a> Options Attributes</h3><table data-source-line="391"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>string</td><td>选项的值</td></tr><tr><td>label</td><td>string</td><td>选项的标签，若不设置则默认与 value 相同</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用该选项</td></tr><tr><td>class</td><td>string</td><td>对当前项添加样式</td></tr></tbody></table><h3 id="select-events" data-source-line="398"><a class="markdownIt-Anchor" href="#select-events">#</a> Select Events</h3><table data-source-line="400"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td></tr><tr><td>limitChange</td><td>超出最大选择数时事件，仅<code>multiple=true</code>和设定了<code>multipleLimit</code>时有效</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="select-method" data-source-line="410"><a class="markdownIt-Anchor" href="#select-method">#</a> Select Method</h3><table data-source-line="412"><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>slideUp</td><td>用于收起下拉</td></tr></tbody></table>',9);function Ca(l,a,t,o,p,e){const c=h("vdpv_0"),r=h("vdpv_1"),v=h("vdpv_2"),u=h("vdpv_3"),C=h("vdpv_4"),V=h("vdpv_5"),y=h("vdpv_6"),R=h("vdpv_7"),q=h("vdpv_8"),w=h("vdpv_9");return g(),H("div",J,[Q,s("div",W,[s("div",X,[s("div",Y,[i(c)]),s("div",{style:_({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Z,as,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=f=>l.toggleCode(0))},m(l.vdpv_0Height>0?"hidden":"show"),1)])]),ls,ns,ts,s("div",es,[s("div",ps,[s("div",cs,[i(r)]),s("div",{style:_({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",os,hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=f=>l.toggleCode(1))},m(l.vdpv_1Height>0?"hidden":"show"),1)])]),ds,is,js,s("div",us,[s("div",vs,[s("div",gs,[i(v)]),s("div",{style:_({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",_s,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=f=>l.toggleCode(2))},m(l.vdpv_2Height>0?"hidden":"show"),1)])]),fs,ks,ys,s("div",qs,[s("div",ws,[s("div",Cs,[i(u)]),s("div",{style:_({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Vs,Rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=f=>l.toggleCode(3))},m(l.vdpv_3Height>0?"hidden":"show"),1)])]),As,$s,Es,s("div",Is,[s("div",Us,[s("div",Ds,[i(C)]),s("div",{style:_({height:l.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ms,xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=f=>l.toggleCode(4))},m(l.vdpv_4Height>0?"hidden":"show"),1)])]),Os,Ns,s("div",Bs,[s("div",Ks,[s("div",Fs,[i(V)]),s("div",{style:_({height:l.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ls,Ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=f=>l.toggleCode(5))},m(l.vdpv_5Height>0?"hidden":"show"),1)])]),Ts,Gs,s("div",Js,[s("div",Qs,[s("div",Ws,[i(y)]),s("div",{style:_({height:l.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xs,Zs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=f=>l.toggleCode(6))},m(l.vdpv_6Height>0?"hidden":"show"),1)])]),sa,aa,s("div",la,[s("div",na,[s("div",ta,[i(R)]),s("div",{style:_({height:l.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",ea,ca,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=f=>l.toggleCode(7))},m(l.vdpv_7Height>0?"hidden":"show"),1)])]),oa,ra,ha,s("div",da,[s("div",ia,[s("div",ja,[i(q)]),s("div",{style:_({height:l.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",ua,ga,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=f=>l.toggleCode(8))},m(l.vdpv_8Height>0?"hidden":"show"),1)])]),_a,s("div",ma,[s("div",ba,[s("div",fa,[i(w)]),s("div",{style:_({height:l.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",ka,qa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=f=>l.toggleCode(9))},m(l.vdpv_9Height>0?"hidden":"show"),1)])]),wa])}const Ha=A(G,[["render",Ca]]);export{Ha as default};
