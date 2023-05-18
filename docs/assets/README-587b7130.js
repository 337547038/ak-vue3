import{h as v,a as h,o as m,c as _,g as a,b as o,w as r,f as l,t as d,F as q,_ as y,n as f,d as w,r as b,i as R,j as g}from"./index-6c3c2d70.js";const A={__name:"README.md.vdpv_0",setup(p){const s=v({radio1:!0,radio2:!1,radio3:!0,radio4:!1});return(c,n)=>{const e=h("ak-radio");return m(),_(q,null,[a("p",null,[o(e,{modelValue:s.radio1,"onUpdate:modelValue":n[0]||(n[0]=t=>s.radio1=t)},{default:r(()=>[l("选项1")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio1),1)]),a("p",null,[o(e,{modelValue:s.radio2,"onUpdate:modelValue":n[1]||(n[1]=t=>s.radio2=t)},{default:r(()=>[l("选项2")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio2),1)]),a("p",null,[o(e,{modelValue:s.radio3,"onUpdate:modelValue":n[2]||(n[2]=t=>s.radio3=t),disabled:!0},{default:r(()=>[l("禁用5")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio3),1)]),a("p",null,[o(e,{modelValue:s.radio4,"onUpdate:modelValue":n[3]||(n[3]=t=>s.radio4=t),disabled:!0},{default:r(()=>[l("禁用6")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio4),1)])],64)}}},E={__name:"README.md.vdpv_1",setup(p){const s=v({radio1:"",radio2:"",radio3:"",radio4:"ab"});return(c,n)=>{const e=h("ak-radio");return m(),_("div",null,[a("p",null,[o(e,{modelValue:s.radio1,"onUpdate:modelValue":n[0]||(n[0]=t=>s.radio1=t),value:"a"},{default:r(()=>[l("选项1")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio1),1)]),a("p",null,[o(e,{modelValue:s.radio2,"onUpdate:modelValue":n[1]||(n[1]=t=>s.radio2=t),value:1},{default:r(()=>[l("选项2")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio2),1)]),a("p",null,[o(e,{modelValue:s.radio3,"onUpdate:modelValue":n[2]||(n[2]=t=>s.radio3=t),value:!0},{default:r(()=>[l("选项3")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio3),1)]),a("p",null,[o(e,{modelValue:s.radio4,"onUpdate:modelValue":n[3]||(n[3]=t=>s.radio4=t),value:"ab"},{default:r(()=>[l("选项4")]),_:1},8,["modelValue"]),l(" 当前值："+d(s.radio4),1)])])}}},H={__name:"README.md.vdpv_2",setup(p){const s=v({radio1:"a2",radio2:"a3",data1:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}),c=(n,e)=>{console.log(n),console.log(e)};return(n,e)=>{const t=h("ak-radio-group");return m(),_(q,null,[a("p",null,[a("div",null,"当前值："+d(s.radio1),1),o(t,{options:s.data1,modelValue:s.radio1,"onUpdate:modelValue":e[0]||(e[0]=i=>s.radio1=i),onChange:c},null,8,["options","modelValue"])]),a("p",null,[a("div",null,"整个组不可选，当前值："+d(s.radio2),1),o(t,{options:s.data1,modelValue:s.radio2,"onUpdate:modelValue":e[1]||(e[1]=i=>s.radio2=i),disabled:!0},null,8,["options","modelValue"])])],64)}}},V=w({components:{vdpv_0:A,vdpv_1:E,vdpv_2:H},setup(p){const s=b(),c=b(),n=b(),e=[s,c,n],t=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:u=>{const j="vdpv_"+u;t[j+"Height"]===0?t[j+"Height"]=(e[u].value?e[u].value.offsetHeight:0)||0:t[j+"Height"]=0},...R(t),vdpv_0Ref:s,vdpv_1Ref:c,vdpv_2Ref:n}}});V.$vd={matter:{},toc:[{content:"Radio 单选框",anchor:"radio-单选框",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"指定选中状态的值",anchor:"指定选中状态的值",level:3},{content:"单选组",anchor:"单选组",level:3},{content:"API",anchor:"api",level:2},{content:"Radio",anchor:"radio",level:3},{content:"Radio Event",anchor:"radio-event",level:3},{content:"Radio Group",anchor:"radio-group",level:3},{content:"Radio Group Event",anchor:"radio-group-event",level:3},{content:"Radio Group options",anchor:"radio-group-options",level:3}]};const C=V,I={class:"vuedoc"},$=g('<h1 id="radio-单选框" data-source-line="3"><a class="markdownIt-Anchor" href="#radio-单选框">#</a> Radio 单选框</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="7">单个使用时，<code>v-model</code>为true时选中状态</p><pre style="display:none;"></pre>',4),U={class:"vuedoc-demo"},G={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    当前值：{{ state.radio1 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    当前值：{{ state.radio2 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio3&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>禁用5<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    当前值：{{ state.radio3 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio4&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>禁用6<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    当前值：{{ state.radio4 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">radio1</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">radio2</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">radio3</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">radio4</span>: <span class="hljs-literal">false</span>
  })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),N=[M],S=a("h3",{id:"指定选中状态的值","data-source-line":"42"},[a("a",{class:"markdownIt-Anchor",href:"#指定选中状态的值"},"#"),l(" 指定选中状态的值")],-1),x=a("p",{"data-source-line":"44"},[l("使用"),a("code",null,"value"),l("时，选中状态返回"),a("code",null,"value"),l("的值，当"),a("code",null,"v-model=value"),l("时为选中状态。")],-1),F=a("pre",{style:{display:"none"}},null,-1),P={class:"vuedoc-demo"},z={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},T={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},J=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      当前值：{{ state.radio1 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      当前值：{{ state.radio2 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio3&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      当前值：{{ state.radio3 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio4&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;ab&quot;</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      当前值：{{ state.radio4 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">radio1</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio2</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio3</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio4</span>: <span class="hljs-string">&#39;ab&#39;</span>
  })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),L=[J],O=a("h3",{id:"单选组","data-source-line":"81"},[a("a",{class:"markdownIt-Anchor",href:"#单选组"},"#"),l(" 单选组")],-1),Q=a("pre",{style:{display:"none"}},null,-1),W={class:"vuedoc-demo"},X={class:"vuedoc-demo__inner"},Y={class:"vuedoc-demo__preview"},Z={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ss=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>当前值：{{state.radio1}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.data1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeGroup&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>整个组不可选，当前值：{{state.radio2}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.data1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> state = reactive({
  <span class="hljs-attr">radio1</span>: <span class="hljs-string">&#39;a2&#39;</span>,
  <span class="hljs-attr">radio2</span>: <span class="hljs-string">&#39;a3&#39;</span>,
  <span class="hljs-attr">data1</span>: [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
})
<span class="hljs-keyword">const</span> changeGroup = <span class="hljs-function">(<span class="hljs-params">value,item</span>)=&gt;</span>{
  <span class="hljs-built_in">console</span>.log(value)
  <span class="hljs-built_in">console</span>.log(item)
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),as=[ss],ns=g('<h2 id="api" data-source-line="118"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="radio" data-source-line="120"><a class="markdownIt-Anchor" href="#radio">#</a> Radio</h3><table data-source-line="122"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string/boolean/number</td><td>Radio 的 v-model</td></tr><tr><td>value</td><td>string/boolean/number</td><td>选中的值，当v-model＝value时为选中状态</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr><tr><td>label</td><td>String</td><td>显示的文本值，也可以是slot</td></tr></tbody></table><h3 id="radio-event" data-source-line="129"><a class="markdownIt-Anchor" href="#radio-event">#</a> Radio Event</h3><table data-source-line="131"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="radio-group" data-source-line="135"><a class="markdownIt-Anchor" href="#radio-group">#</a> Radio Group</h3><table data-source-line="137"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>Radio组 的 v-model</td></tr><tr><td>options</td><td>array</td><td>组数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用组</td></tr></tbody></table><h3 id="radio-group-event" data-source-line="144"><a class="markdownIt-Anchor" href="#radio-group-event">#</a> Radio Group Event</h3><table data-source-line="146"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件,返回(value,item) value为当前选中的值，item为当前data中选中的项</td></tr></tbody></table><h3 id="radio-group-options" data-source-line="150"><a class="markdownIt-Anchor" href="#radio-group-options">#</a> Radio Group options</h3><table data-source-line="152"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的文本值</td></tr><tr><td>value</td><td>string</td><td>当前选项值</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用</td></tr></tbody></table>',11);function ts(p,s,c,n,e,t){const i=h("vdpv_0"),u=h("vdpv_1"),j=h("vdpv_2");return m(),_("div",I,[$,a("div",U,[a("div",G,[a("div",D,[o(i)]),a("div",{style:f({height:p.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[a("div",B,N,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=k=>p.toggleCode(0))},d(p.vdpv_0Height>0?"hidden":"show"),1)])]),S,x,F,a("div",P,[a("div",z,[a("div",K,[o(u)]),a("div",{style:f({height:p.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[a("div",T,L,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=k=>p.toggleCode(1))},d(p.vdpv_1Height>0?"hidden":"show"),1)])]),O,Q,a("div",W,[a("div",X,[a("div",Y,[o(j)]),a("div",{style:f({height:p.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[a("div",Z,as,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=k=>p.toggleCode(2))},d(p.vdpv_2Height>0?"hidden":"show"),1)])]),ns])}const es=y(C,[["render",ts]]);export{es as default};
