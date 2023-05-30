import{d as g,r as p,a as v,o as _,c as f,g as s,t as d,b as r,_ as b,n as q,h as V,i as A,j as m,f as u}from"./index-6c3c2d70.js";const H={class:"demo-slider"},R=g({__name:"README.md.vdpv_0",setup(l){const a=p(0),t=p(50),h=p(25),n=p(25),o=e=>e+"%";return(e,c)=>{const j=v("ak-slider");return _(),f("div",H,[s("p",null,"基础用法："+d(a.value),1),s("div",null,[r(j,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=i=>a.value=i)},null,8,["modelValue"])]),s("p",null,"隐藏提示："+d(t.value),1),s("div",null,[r(j,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=i=>t.value=i),showTooltip:!1},null,8,["modelValue"])]),s("p",null,"格式化提示："+d(h.value),1),s("div",null,[r(j,{modelValue:h.value,"onUpdate:modelValue":c[2]||(c[2]=i=>h.value=i),formatTooltip:o},null,8,["modelValue"])]),s("p",null,"禁用状态："+d(n.value),1),s("div",null,[r(j,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=i=>n.value=i),disabled:!0},null,8,["modelValue"])])])}}}),$=g({__name:"README.md.vdpv_1",setup(l){const a=p(30),t=p(30);return(h,n)=>{const o=v("ak-slider");return _(),f("div",null,[s("p",null,"指定滑动步长："+d(a.value),1),s("div",null,[r(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),step:10},null,8,["modelValue"])]),s("p",null,"显示间断点："+d(t.value),1),s("div",null,[r(o,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),step:10,showStops:!0},null,8,["modelValue"])])])}}}),E=g({__name:"README.md.vdpv_2",setup(l){const a=p(30);return(t,h)=>{const n=v("ak-slider");return _(),f("div",null,[s("p",null,"指定最大值和最小值："+d(a.value),1),s("div",null,[r(n,{modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=o=>a.value=o),min:10,max:80},null,8,["modelValue"])])])}}}),C=g({__name:"README.md.vdpv_3",setup(l){const a=p([30,60]),t=p([30,50]);return(h,n)=>{const o=v("ak-slider");return _(),f("div",null,[s("p",null,"选择范围"+d(a.value),1),s("div",null,[r(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e)},null,8,["modelValue"])]),s("p",null,"选择范围，并指定最大最小值"+d(t.value),1),s("div",null,[r(o,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),min:10,max:80},null,8,["modelValue"])])])}}}),S=g({__name:"README.md.vdpv_4",setup(l){const a=p(80),t=p({0:"start",25:"25%",50:"center",75:"75%",100:'<i style="color:red">end</i>'});return(h,n)=>{const o=v("ak-slider");return _(),f("div",null,[s("p",null,"展示标记"+d(a.value),1),s("div",null,[r(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),marks:t.value},null,8,["modelValue","marks"])])])}}}),w=g({components:{vdpv_0:R,vdpv_1:$,vdpv_2:E,vdpv_3:C,vdpv_4:S},setup(l){const a=p(),t=p(),h=p(),n=p(),o=p(),e=[a,t,h,n,o],c=V({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:i=>{const k="vdpv_"+i;c[k+"Height"]===0?c[k+"Height"]=(e[i].value?e[i].value.offsetHeight:0)||0:c[k+"Height"]=0},...A(c),vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:h,vdpv_3Ref:n,vdpv_4Ref:o}}});w.$vd={matter:{},toc:[{content:"Slider 滑块",anchor:"slider-滑块",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"指定滑动步长",anchor:"指定滑动步长",level:3},{content:"设置最小值和最大值",anchor:"设置最小值和最大值",level:3},{content:"设定选择范围",anchor:"设定选择范围",level:3},{content:"展示标记",anchor:"展示标记",level:3},{content:"API",anchor:"api",level:2},{content:"Slider",anchor:"slider",level:3},{content:"Slider Event",anchor:"slider-event",level:3}]};const I=w,T={class:"vuedoc"},U=m('<h1 id="slider-滑块" data-source-line="1"><a class="markdownIt-Anchor" href="#slider-滑块">#</a> Slider 滑块</h1><h3 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),x={class:"vuedoc-demo"},N={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-slider&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>基础用法：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>隐藏提示：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:showTooltip</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>格式化提示：{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span> <span class="hljs-attr">:formatTooltip</span>=<span class="hljs-string">&quot;formatTooltip&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>禁用状态：{{ value4 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">0</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-number">50</span>)
  <span class="hljs-keyword">const</span> value3 = ref(<span class="hljs-number">25</span>)
  <span class="hljs-keyword">const</span> value4 = ref(<span class="hljs-number">25</span>)
  <span class="hljs-keyword">const</span> formatTooltip = <span class="hljs-function">(<span class="hljs-params">value: number</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> value + <span class="hljs-string">&#39;%&#39;</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),F=[M],P=s("h3",{id:"指定滑动步长","data-source-line":"34"},[s("a",{class:"markdownIt-Anchor",href:"#指定滑动步长"},"#"),u(" 指定滑动步长")],-1),z=s("p",{"data-source-line":"36"},[u("步长"),s("code",null,"step=10")],-1),G=s("pre",{style:{display:"none"}},null,-1),J={class:"vuedoc-demo"},K={class:"vuedoc-demo__inner"},L={class:"vuedoc-demo__preview"},O={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Q=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>指定滑动步长：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>显示间断点：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">:showStops</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">30</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-number">30</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),W=[Q],X=s("h3",{id:"设置最小值和最大值","data-source-line":"56"},[s("a",{class:"markdownIt-Anchor",href:"#设置最小值和最大值"},"#"),u(" 设置最小值和最大值")],-1),Y=s("p",{"data-source-line":"58"},[s("code",null,"min"),u("最小值10，"),s("code",null,"max"),u("最大值80")],-1),Z=s("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ts=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>指定最大值和最小值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">30</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),es=[ts],ps=s("h3",{id:"设定选择范围","data-source-line":"74"},[s("a",{class:"markdownIt-Anchor",href:"#设定选择范围"},"#"),u(" 设定选择范围")],-1),os=s("p",{"data-source-line":"76"},[u("通用"),s("code",null,"value"),u("传入两个值即可")],-1),cs=s("pre",{style:{display:"none"}},null,-1),ds={class:"vuedoc-demo"},rs={class:"vuedoc-demo__inner"},hs={class:"vuedoc-demo__preview"},is={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},vs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>选择范围{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>选择范围，并指定最大最小值{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-number">30</span>, <span class="hljs-number">60</span>])
  <span class="hljs-keyword">const</span> value2 = ref([<span class="hljs-number">30</span>, <span class="hljs-number">50</span>])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),us=[vs],js=s("h3",{id:"展示标记","data-source-line":"96"},[s("a",{class:"markdownIt-Anchor",href:"#展示标记"},"#"),u(" 展示标记")],-1),ms=s("p",{"data-source-line":"98"},"key表示当前所占百分比位置",-1),gs=s("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo"},fs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},qs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},ys=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>展示标记{{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:marks</span>=<span class="hljs-string">&quot;marks&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-slider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value1=ref(<span class="hljs-number">80</span>)
  <span class="hljs-keyword">const</span> marks=ref({
          <span class="hljs-number">0</span>: <span class="hljs-string">&#39;start&#39;</span>,
          <span class="hljs-number">25</span>: <span class="hljs-string">&#39;25%&#39;</span>,
          <span class="hljs-number">50</span>: <span class="hljs-string">&#39;center&#39;</span>,
          <span class="hljs-number">75</span>: <span class="hljs-string">&#39;75%&#39;</span>,
          <span class="hljs-number">100</span>: <span class="hljs-string">&#39;&lt;i style=&quot;color:red&quot;&gt;end&lt;/i&gt;&#39;</span>
        })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),ws=[ys],bs=m('<h2 id="api" data-source-line="122"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="slider" data-source-line="124"><a class="markdownIt-Anchor" href="#slider">#</a> Slider</h3><table data-source-line="126"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>Number,Array</td><td>当前值，默认为0。Array时为范围选择</td></tr><tr><td>min</td><td>Number/0</td><td>最小值</td></tr><tr><td>max</td><td>Number/100</td><td>最大值</td></tr><tr><td>step</td><td>Number/1</td><td>步长</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>是否禁用</td></tr><tr><td>showStops</td><td>Boolean/false</td><td>是否显示间断点</td></tr><tr><td>showTooltip</td><td>Boolean/false</td><td>是否显示 tooltip</td></tr><tr><td>formatTooltip</td><td>Function</td><td>格式化 tooltip message，仅当showTooltip为true时</td></tr><tr><td>marks</td><td>Function</td><td>标记， key 的类型必须为number，表示当前位置</td></tr><tr><td>trigger</td><td>String</td><td>触发改变事件，默认为鼠标弹起时触发，其他值时为鼠标移动时触发</td></tr></tbody></table><h3 id="slider-event" data-source-line="139"><a class="markdownIt-Anchor" href="#slider-event">#</a> Slider Event</h3><table data-source-line="141"><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>change</td><td>值改变时触发</td></tr></tbody></table>',5);function Vs(l,a,t,h,n,o){const e=v("vdpv_0"),c=v("vdpv_1"),j=v("vdpv_2"),i=v("vdpv_3"),k=v("vdpv_4");return _(),f("div",T,[U,s("div",x,[s("div",N,[s("div",D,[r(e)]),s("div",{style:q({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",B,F,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>l.toggleCode(0))},d(l.vdpv_0Height>0?"hidden":"show"),1)])]),P,z,G,s("div",J,[s("div",K,[s("div",L,[r(c)]),s("div",{style:q({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",O,W,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>l.toggleCode(1))},d(l.vdpv_1Height>0?"hidden":"show"),1)])]),X,Y,Z,s("div",ss,[s("div",as,[s("div",ns,[r(j)]),s("div",{style:q({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>l.toggleCode(2))},d(l.vdpv_2Height>0?"hidden":"show"),1)])]),ps,os,cs,s("div",ds,[s("div",rs,[s("div",hs,[r(i)]),s("div",{style:q({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",is,us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>l.toggleCode(3))},d(l.vdpv_3Height>0?"hidden":"show"),1)])]),js,ms,gs,s("div",_s,[s("div",fs,[s("div",ks,[r(k)]),s("div",{style:q({height:l.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",qs,ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>l.toggleCode(4))},d(l.vdpv_4Height>0?"hidden":"show"),1)])]),bs])}const Hs=b(I,[["render",Vs]]);export{Hs as default};