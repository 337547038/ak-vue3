import{d as m,r,a as g,o as k,c as b,g as s,b as c,w as v,f as n,t as j,F as x,_ as $,n as f,h as A,i as H,j as _}from"./index-6c3c2d70.js";const R=s("p",null,"选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）",-1),D=m({__name:"README.md.vdpv_0",setup(t){const a=r(!0),d=r(!1),e=r("1"),p=r(["4"]),h=r([]);return(l,u)=>{const i=g("ak-checkbox");return k(),b(x,null,[s("p",null,[c(i,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value=o)},{default:v(()=>[n("选项1")]),_:1},8,["modelValue"]),n(" "+j(a.value),1)]),s("p",null,[c(i,{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=o=>d.value=o)},{default:v(()=>[n("选项2")]),_:1},8,["modelValue"]),n(" "+j(d.value),1)]),s("p",null,[c(i,{modelValue:e.value,"onUpdate:modelValue":u[2]||(u[2]=o=>e.value=o)},{default:v(()=>[n("选项3")]),_:1},8,["modelValue"]),n(" "+j(e.value)+"（v-model的值只要为true都会是勾选状态） ",1)]),R,s("p",null,[c(i,{modelValue:p.value,"onUpdate:modelValue":u[3]||(u[3]=o=>p.value=o),value:"4"},{default:v(()=>[n("选项4")]),_:1},8,["modelValue"]),n(" "+j(p.value),1)]),s("p",null,[c(i,{modelValue:h.value,"onUpdate:modelValue":u[4]||(u[4]=o=>h.value=o),value:"5"},{default:v(()=>[n("选项5")]),_:1},8,["modelValue"]),n(" "+j(h.value),1)])],64)}}}),E=m({__name:"README.md.vdpv_1",setup(t){const a=r(!0),d=r(!1);return(e,p)=>{const h=g("ak-checkbox");return k(),b(x,null,[s("p",null,[c(h,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=l=>a.value=l),disabled:!0},{default:v(()=>[n("选项1")]),_:1},8,["modelValue"]),n(" "+j(a.value),1)]),s("p",null,[c(h,{modelValue:d.value,"onUpdate:modelValue":p[1]||(p[1]=l=>d.value=l),disabled:!0},{default:v(()=>[n("选项2")]),_:1},8,["modelValue"]),n(" "+j(d.value),1)])],64)}}}),I=m({__name:"README.md.vdpv_2",setup(t){const a=r(["a1","a6"]),d=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}];return(e,p)=>{const h=g("ak-checkbox-group");return k(),b(x,null,[s("p",null,"已选值："+j(a.value),1),s("p",null,[c(h,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=l=>a.value=l),options:d},null,8,["modelValue"])])],64)}}}),U=m({__name:"README.md.vdpv_3",setup(t){const a=r(["a6"]),d=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{value:"a5"},{label:"禁用",value:"a6",disabled:!0},{label:"勾选禁用",value:"a7",disabled:!0}];return(e,p)=>{const h=g("ak-checkbox-group");return k(),b(x,null,[s("p",null,"已选值："+j(a.value),1),s("p",null,[c(h,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=l=>a.value=l),options:d,min:2,max:4},null,8,["modelValue"])])],64)}}}),G=m({__name:"README.md.vdpv_4",setup(t){const a=r(["a1","a6"]),d=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}],e=r(),p=()=>{const h=e.value.getValue();console.log(h)};return(h,l)=>{const u=g("ak-checkbox-group"),i=g("ak-button");return k(),b(x,null,[s("p",null,"已选值："+j(a.value),1),s("p",null,[c(u,{ref_key:"checkGroup",ref:e,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),options:d},null,8,["modelValue"])]),s("p",null,[c(i,{onClick:l[1]||(l[1]=o=>h.$refs.checkGroup.toggleSelect(!0))},{default:v(()=>[n("全选")]),_:1}),c(i,{onClick:l[2]||(l[2]=o=>h.$refs.checkGroup.toggleSelect(!1))},{default:v(()=>[n("全不选")]),_:1}),c(i,{onClick:p},{default:v(()=>[n("获取值")]),_:1})])],64)}}}),S=m({__name:"README.md.vdpv_5",setup(t){const a=r(["a1"]);return(d,e)=>{const p=g("ak-checkbox"),h=g("ak-button");return k(),b(x,null,[s("p",null,"当前选中值："+j(a.value),1),s("p",null,[c(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),value:"a1"},{default:v(()=>[n("选项1")]),_:1},8,["modelValue"])]),s("p",null,[c(p,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),value:"a2"},{default:v(()=>[n("选项2")]),_:1},8,["modelValue"])]),s("p",null,[c(p,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),value:"a3"},{default:v(()=>[n("选项3")]),_:1},8,["modelValue"])]),s("p",null,[c(p,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),value:"a4"},{default:v(()=>[n("选项4")]),_:1},8,["modelValue"])]),s("p",null,[c(h,{onClick:e[4]||(e[4]=l=>a.value=["a1","a2","a3","a4"])},{default:v(()=>[n("全选")]),_:1}),c(h,{onClick:e[5]||(e[5]=l=>a.value=[])},{default:v(()=>[n("全不选")]),_:1})])],64)}}}),M=m({__name:"README.md.vdpv_6",setup(t){const a=r(""),d=r(["a1"]),e=[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"}],p=()=>(console.log("return false 阻止勾选"),!1);return(h,l)=>{const u=g("ak-checkbox"),i=g("ak-checkbox-group");return k(),b(x,null,[s("p",null,[c(u,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),value:"a1",beforeChange:p},{default:v(()=>[n("选项1")]),_:1},8,["modelValue"])]),s("p",null,[c(i,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=o=>d.value=o),options:e,beforeChange:p},null,8,["modelValue"])])],64)}}}),C=m({components:{vdpv_0:D,vdpv_1:E,vdpv_2:I,vdpv_3:U,vdpv_4:G,vdpv_5:S,vdpv_6:M},setup(t){const a=r(),d=r(),e=r(),p=r(),h=r(),l=r(),u=r(),i=[a,d,e,p,h,l,u],o=A({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return{toggleCode:y=>{const w="vdpv_"+y;o[w+"Height"]===0?o[w+"Height"]=(i[y].value?i[y].value.offsetHeight:0)||0:o[w+"Height"]=0},...H(o),vdpv_0Ref:a,vdpv_1Ref:d,vdpv_2Ref:e,vdpv_3Ref:p,vdpv_4Ref:h,vdpv_5Ref:l,vdpv_6Ref:u}}});C.$vd={matter:{},toc:[{content:"Checkbox 多选框",anchor:"checkbox-多选框",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"禁用状态",anchor:"禁用状态",level:3},{content:"多选框组",anchor:"多选框组",level:3},{content:"可选项目数量的限制",anchor:"可选项目数量的限制",level:3},{content:"组全选或全不选方法",anchor:"组全选或全不选方法",level:3},{content:"多个单一组成的组",anchor:"多个单一组成的组",level:3},{content:"阻止改变事件",anchor:"阻止改变事件",level:3},{content:"API",anchor:"api",level:2},{content:"Checkbox",anchor:"checkbox",level:3},{content:"Checkbox Event",anchor:"checkbox-event",level:3},{content:"CheckboxGroup",anchor:"checkboxgroup",level:3},{content:"CheckboxGroup Methods",anchor:"checkboxgroup-methods",level:3},{content:"CheckboxGroup Event",anchor:"checkboxgroup-event",level:3}]};const B=C,F={class:"vuedoc"},N=_('<h1 id="checkbox-多选框" data-source-line="3"><a class="markdownIt-Anchor" href="#checkbox-多选框">#</a> Checkbox 多选框</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="7">单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。如选中时需要返回指定的值，则添加<code>value</code></p><pre style="display:none;"></pre>',4),P={class:"vuedoc-demo"},z={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},T={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},J=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox1&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox1 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox2 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox3&quot;</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox3 }}（v-model的值只要为true都会是勾选状态）
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
    &gt;</span>选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）&lt;/p
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox4&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox4 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox5&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>选项5<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox5 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> checkbox1 = ref(<span class="hljs-literal">true</span>)
  <span class="hljs-keyword">const</span> checkbox2 = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> checkbox3 = ref(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">const</span> checkbox4 = ref([<span class="hljs-string">&#39;4&#39;</span>])
  <span class="hljs-keyword">const</span> checkbox5 = ref([])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),L=[J],O=s("h3",{id:"禁用状态","data-source-line":"47"},[s("a",{class:"markdownIt-Anchor",href:"#禁用状态"},"#"),n(" 禁用状态")],-1),Q=s("p",{"data-source-line":"49"},"多选框不可用状态",-1),W=s("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},as=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox1 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
    {{ checkbox2 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> checkbox1 = ref(<span class="hljs-literal">true</span>)
  <span class="hljs-keyword">const</span> checkbox2 = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ns=[as],ls=s("h3",{id:"多选框组","data-source-line":"71"},[s("a",{class:"markdownIt-Anchor",href:"#多选框组"},"#"),n(" 多选框组")],-1),ts=s("p",{"data-source-line":"73"},"options中选项label可为空",-1),es=s("pre",{style:{display:"none"}},null,-1),ps={class:"vuedoc-demo"},cs={class:"vuedoc-demo__inner"},os={class:"vuedoc-demo__preview"},hs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ds=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{ checkbox }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> checkbox = ref([<span class="hljs-string">&#39;a1&#39;</span>, <span class="hljs-string">&#39;a6&#39;</span>])
  <span class="hljs-keyword">const</span> groupData = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
    { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),rs=[ds],us=s("h3",{id:"可选项目数量的限制","data-source-line":"99"},[s("a",{class:"markdownIt-Anchor",href:"#可选项目数量的限制"},"#"),n(" 可选项目数量的限制")],-1),js=s("p",{"data-source-line":"101"},[n("例子最多可选"),s("code",null,"max=4"),n("，最少需选"),s("code",null,"min=2")],-1),gs=s("pre",{style:{display:"none"}},null,-1),vs={class:"vuedoc-demo"},is={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},ms={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ks=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{ checkbox }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span>
      <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;2&quot;</span>
      <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;4&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> checkbox = ref([<span class="hljs-string">&#39;a6&#39;</span>])
  <span class="hljs-keyword">const</span> groupData = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
    { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a7&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),bs=[ks],fs=s("h3",{id:"组全选或全不选方法","data-source-line":"132"},[s("a",{class:"markdownIt-Anchor",href:"#组全选或全不选方法"},"#"),n(" 组全选或全不选方法")],-1),xs=s("p",{"data-source-line":"134"},[s("code",null,"toggleSelect(true/false)全选或取消全选"),n("，可使用 "),s("code",null,"getValue"),n(" 取方法取得已勾选的项集合")],-1),qs=s("pre",{style:{display:"none"}},null,-1),ys={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Vs={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},$s=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{ checkbox }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkGroup&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.checkGroup.toggleSelect(true)&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.checkGroup.toggleSelect(false)&quot;</span>&gt;</span>全不选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue&quot;</span>&gt;</span>获取值<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> checkbox = ref([<span class="hljs-string">&#39;a1&#39;</span>,<span class="hljs-string">&#39;a6&#39;</span>])

  <span class="hljs-keyword">const</span> groupData = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
    { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
  ]
  <span class="hljs-keyword">const</span> checkGroup = ref()
  <span class="hljs-keyword">const</span> getValue = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> value = checkGroup.value.getValue()
    <span class="hljs-built_in">console</span>.log(value)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),As=[$s],Hs=s("h3",{id:"多个单一组成的组","data-source-line":"174"},[s("a",{class:"markdownIt-Anchor",href:"#多个单一组成的组"},"#"),n(" 多个单一组成的组")],-1),Rs=s("p",{"data-source-line":"176"},[n("组group有一定的局限性，组内的"),s("code",null,"checkbox"),n("是紧密相连的。由多个单一"),s("code",null,"checkbox"),n("自由组成可实现灵活布局。同时也很方便的实现全选或全不选")],-1),Ds=s("pre",{style:{display:"none"}},null,-1),Es={class:"vuedoc-demo"},Is={class:"vuedoc-demo__inner"},Us={class:"vuedoc-demo__preview"},Gs={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ss=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前选中值：{{ checkbox }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a1&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a2&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a3&quot;</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a4&quot;</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkbox = [&#39;a1&#39;, &#39;a2&#39;, &#39;a3&#39;, &#39;a4&#39;]&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkbox = []&quot;</span>&gt;</span>全不选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> checkbox = ref([<span class="hljs-string">&#39;a1&#39;</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ms=[Ss],Bs=s("h3",{id:"阻止改变事件","data-source-line":"205"},[s("a",{class:"markdownIt-Anchor",href:"#阻止改变事件"},"#"),n(" 阻止改变事件")],-1),Fs=s("p",{"data-source-line":"207"},[n("使用"),s("code",null,"beforeChange"),n("可阻止事件改变")],-1),Ns=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},zs={class:"vuedoc-demo__inner"},Ks={class:"vuedoc-demo__preview"},Ts={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Js=_(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a1&quot;</span> <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>
      &gt;</span>选项1&lt;/ak-checkbox
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span>
      <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> checkbox = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> checkbox2 = ref([<span class="hljs-string">&#39;a1&#39;</span>])
  <span class="hljs-keyword">const</span> groupData = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> beforeChange = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;return false 阻止勾选&#39;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ls=[Js],Os=_('<h2 id="api" data-source-line="240"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="checkbox" data-source-line="242"><a class="markdownIt-Anchor" href="#checkbox">#</a> Checkbox</h3><table data-source-line="244"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String, Boolean, Array</td><td>选中值</td></tr><tr><td>label</td><td>String</td><td>显示的文本值，也可以是slot形式</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkbox-event" data-source-line="251"><a class="markdownIt-Anchor" href="#checkbox-event">#</a> Checkbox Event</h3><table data-source-line="253"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="checkboxgroup" data-source-line="257"><a class="markdownIt-Anchor" href="#checkboxgroup">#</a> CheckboxGroup</h3><table data-source-line="260"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Array</td><td>当前选中的值</td></tr><tr><td>options</td><td>Array</td><td>选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>max</td><td>number</td><td>可被勾选的 checkbox 的最大数量</td></tr><tr><td>min</td><td>number</td><td>可被勾选的 checkbox 的最小数量</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用组</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkboxgroup-methods" data-source-line="270"><a class="markdownIt-Anchor" href="#checkboxgroup-methods">#</a> CheckboxGroup Methods</h3><table data-source-line="272"><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>toggleSelect</td><td>全选true/取消false当前组所有选项</td></tr><tr><td>getValue</td><td>获取当前所有勾选项的集合</td></tr></tbody></table><h3 id="checkboxgroup-event" data-source-line="277"><a class="markdownIt-Anchor" href="#checkboxgroup-event">#</a> CheckboxGroup Event</h3><table data-source-line="279"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table>',11);function Qs(t,a,d,e,p,h){const l=g("vdpv_0"),u=g("vdpv_1"),i=g("vdpv_2"),o=g("vdpv_3"),V=g("vdpv_4"),y=g("vdpv_5"),w=g("vdpv_6");return k(),b("div",F,[N,s("div",P,[s("div",z,[s("div",K,[c(l)]),s("div",{style:f({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",T,L,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=q=>t.toggleCode(0))},j(t.vdpv_0Height>0?"hidden":"show"),1)])]),O,Q,W,s("div",X,[s("div",Y,[s("div",Z,[c(u)]),s("div",{style:f({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ss,ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=q=>t.toggleCode(1))},j(t.vdpv_1Height>0?"hidden":"show"),1)])]),ls,ts,es,s("div",ps,[s("div",cs,[s("div",os,[c(i)]),s("div",{style:f({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",hs,rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=q=>t.toggleCode(2))},j(t.vdpv_2Height>0?"hidden":"show"),1)])]),us,js,gs,s("div",vs,[s("div",is,[s("div",_s,[c(o)]),s("div",{style:f({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ms,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=q=>t.toggleCode(3))},j(t.vdpv_3Height>0?"hidden":"show"),1)])]),fs,xs,qs,s("div",ys,[s("div",ws,[s("div",Vs,[c(V)]),s("div",{style:f({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,As,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=q=>t.toggleCode(4))},j(t.vdpv_4Height>0?"hidden":"show"),1)])]),Hs,Rs,Ds,s("div",Es,[s("div",Is,[s("div",Us,[c(y)]),s("div",{style:f({height:t.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Gs,Ms,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=q=>t.toggleCode(5))},j(t.vdpv_5Height>0?"hidden":"show"),1)])]),Bs,Fs,Ns,s("div",Ps,[s("div",zs,[s("div",Ks,[c(w)]),s("div",{style:f({height:t.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ts,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=q=>t.toggleCode(6))},j(t.vdpv_6Height>0?"hidden":"show"),1)])]),Os])}const Xs=$(B,[["render",Qs]]);export{Xs as default};
