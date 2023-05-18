import{d as v,r as d,a as c,o as _,e as k,_ as y,c as H,g as s,b as u,n as j,t as g,h as V,i as q,j as i,f as w}from"./index-6c3c2d70.js";const T=v({__name:"README.md.vdpv_0",setup(a){const o=d(new Date().toLocaleTimeString());return(p,l)=>{const n=c("ak-time-picker");return _(),k(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t)},null,8,["modelValue"])}}}),A=v({__name:"README.md.vdpv_1",setup(a){const o=d(new Date().toLocaleTimeString());return(p,l)=>{const n=c("ak-time-picker");return _(),k(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),filterable:""},null,8,["modelValue"])}}}),C=v({__name:"README.md.vdpv_2",setup(a){const o=d(new Date().toLocaleTimeString()),p=(l,n)=>{const{a:t,h:r}=l;if(n==="h")return![9,10,11,12,14,15,16,17,18].includes(t);if(n==="m")return r===9&&t<30||r===18&&t>30};return(l,n)=>{const t=c("ak-time-picker");return _(),k(t,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=r=>o.value=r),"disabled-time":p},null,8,["modelValue"])}}}),R=v({__name:"README.md.vdpv_3",setup(a){const e=d([]);return(o,p)=>{const l=c("ak-time-picker");return _(),k(l,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=n=>e.value=n),"is-range":""},null,8,["modelValue"])}}}),b=v({components:{vdpv_0:T,vdpv_1:A,vdpv_2:C,vdpv_3:R},setup(a){const e=d(),o=d(),p=d(),l=d(),n=[e,o,p,l],t=V({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return{toggleCode:h=>{const m="vdpv_"+h;t[m+"Height"]===0?t[m+"Height"]=(n[h].value?n[h].value.offsetHeight:0)||0:t[m+"Height"]=0},...q(t),vdpv_0Ref:e,vdpv_1Ref:o,vdpv_2Ref:p,vdpv_3Ref:l}}});b.$vd={matter:{},toc:[{content:"TimePicker 时间选择",anchor:"timepicker-时间选择",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"可输入",anchor:"可输入",level:3},{content:"限制时间范围",anchor:"限制时间范围",level:3},{content:"区间选择",anchor:"区间选择",level:3},{content:"API",anchor:"api",level:2},{content:"TimeSelect Props",anchor:"timeselect-props",level:3},{content:"TimeSelect Event",anchor:"timeselect-event",level:3}]};const S=b,E={class:"vuedoc"},$=i('<h1 id="timepicker-时间选择" data-source-line="1"><a class="markdownIt-Anchor" href="#timepicker-时间选择">#</a> TimePicker 时间选择</h1><h3 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),D={class:"vuedoc-demo"},I={class:"vuedoc-demo__inner"},L={class:"vuedoc-demo__preview"},P={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},B=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
  <span class="hljs-keyword">const</span> value = ref(date.toLocaleTimeString())
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),M=[B],N=s("h3",{id:"可输入","data-source-line":"18"},[s("a",{class:"markdownIt-Anchor",href:"#可输入"},"#"),w(" 可输入")],-1),U=s("pre",{style:{display:"none"}},null,-1),x={class:"vuedoc-demo"},z={class:"vuedoc-demo__inner"},F={class:"vuedoc-demo__preview"},G={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},J=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">filterable</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
  <span class="hljs-keyword">const</span> value = ref(date.toLocaleTimeString())
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),K=[J],O=i('<h3 id="限制时间范围" data-source-line="33"><a class="markdownIt-Anchor" href="#限制时间范围">#</a> 限制时间范围</h3><p data-source-line="35">使用<code>disabled-time</code>限制时间选择范围</p><p data-source-line="37">示例限制时间范围上午 9-12，下午 14-18 点</p><p data-source-line="39">选择 9 点时，9:30 可选，选择 18 点时，18:30 之前可选</p><pre style="display:none;"></pre>',5),Q={class:"vuedoc-demo"},W={class:"vuedoc-demo__inner"},X={class:"vuedoc-demo__preview"},Y={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Z=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:disabled-time</span>=<span class="hljs-string">&quot;disabledHours&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()
  <span class="hljs-keyword">const</span> value = ref(date.toLocaleTimeString())

  interface Time {
    <span class="hljs-attr">h</span>: number <span class="hljs-comment">// 时</span>
    <span class="hljs-attr">m</span>: number <span class="hljs-comment">// 分</span>
    <span class="hljs-attr">s</span>: number <span class="hljs-comment">// 秒</span>
    <span class="hljs-attr">a</span>: number <span class="hljs-comment">// 当前值</span>
  }

  <span class="hljs-keyword">const</span> disabledHours = <span class="hljs-function">(<span class="hljs-params">time: Time, type: string</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> { a, h } = time
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;h&#39;</span>) {
      <span class="hljs-comment">// return (a &lt; 9 || a &gt; 12) &amp;&amp; (a &lt; 14 || a &gt; 18)</span>
      <span class="hljs-keyword">return</span> ![<span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>].includes(a) <span class="hljs-comment">// 返回9-12 14-18</span>
    }
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;m&#39;</span>) {
      <span class="hljs-comment">// 从9:30开始可选，18点时分钟最大可选30分钟</span>
      <span class="hljs-keyword">return</span> (h === <span class="hljs-number">9</span> &amp;&amp; a &lt; <span class="hljs-number">30</span>) || (h === <span class="hljs-number">18</span> &amp;&amp; a &gt; <span class="hljs-number">30</span>)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ss=[Z],as=s("h3",{id:"区间选择","data-source-line":"73"},[s("a",{class:"markdownIt-Anchor",href:"#区间选择"},"#"),w(" 区间选择")],-1),es=s("pre",{style:{display:"none"}},null,-1),ts={class:"vuedoc-demo"},ns={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},os={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ps=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;modelValue&quot;</span> <span class="hljs-attr">is-range</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> modelValue = ref([])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ds=[ps],cs=i('<h2 id="api" data-source-line="85"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="timeselect-props" data-source-line="87"><a class="markdownIt-Anchor" href="#timeselect-props">#</a> TimeSelect Props</h3><table data-source-line="89"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>显示的值</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>可输入</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0 默认　 1 向下　 2 向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到 body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon 图标</td></tr></tbody></table><h3 id="timeselect-event" data-source-line="105"><a class="markdownIt-Anchor" href="#timeselect-event">#</a> TimeSelect Event</h3><table data-source-line="107"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>toggleClick</td><td>点击展开收起事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>blur</td><td>失焦事件</td></tr></tbody></table>',5);function rs(a,e,o,p,l,n){const t=c("vdpv_0"),r=c("vdpv_1"),h=c("vdpv_2"),m=c("vdpv_3");return _(),H("div",E,[$,s("div",D,[s("div",I,[s("div",L,[u(t)]),s("div",{style:j({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",P,M,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[0]||(e[0]=f=>a.toggleCode(0))},g(a.vdpv_0Height>0?"hidden":"show"),1)])]),N,U,s("div",x,[s("div",z,[s("div",F,[u(r)]),s("div",{style:j({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",G,K,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[1]||(e[1]=f=>a.toggleCode(1))},g(a.vdpv_1Height>0?"hidden":"show"),1)])]),O,s("div",Q,[s("div",W,[s("div",X,[u(h)]),s("div",{style:j({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Y,ss,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[2]||(e[2]=f=>a.toggleCode(2))},g(a.vdpv_2Height>0?"hidden":"show"),1)])]),as,es,s("div",ts,[s("div",ns,[s("div",ls,[u(m)]),s("div",{style:j({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",os,ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[3]||(e[3]=f=>a.toggleCode(3))},g(a.vdpv_3Height>0?"hidden":"show"),1)])]),cs])}const hs=y(S,[["render",rs]]);export{hs as default};
