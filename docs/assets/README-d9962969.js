import{d as C,r as h,a as c,o as i,c as f,g as s,b as l,F as w,e as $,_ as y,w as I,f as t,n as _,t as v,h as R,i as A,j as r}from"./index-6c3c2d70.js";const V=C({__name:"README.md.vdpv_0",setup(n){const a=h("初始默认值");return(e,p)=>{const o=c("ak-input");return i(),f(w,null,[s("p",null,[l(o)]),s("p",null,[l(o,{placeholder:"请输入内容"})]),s("p",null,[l(o,{placeholder:"请输入内容",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d)},null,8,["modelValue"])]),s("p",null,[l(o,{placeholder:"禁用状态",disabled:!0})])],64)}}}),b={__name:"README.md.vdpv_1",setup(n){const a=h("");return(e,p)=>{const o=c("ak-input");return i(),$(o,{placeholder:"试着输入些什么看看",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d),clear:!0},null,8,["modelValue"])}}},E=C({__name:"README.md.vdpv_2",setup(n){const a=h("");return(e,p)=>{const o=c("ak-input");return i(),$(o,{placeholder:"请输入内容",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d),showEye:!0,type:"password"},null,8,["modelValue"])}}}),z={};function M(n,a){const e=c("ak-input");return i(),f(w,null,[s("p",null,[l(e,{placeholder:"请输入内容","prefix-icon":"icon-user"})]),s("p",null,[l(e,{placeholder:"请输入内容","suffix-icon":"icon-search"})])],64)}const D=y(z,[["render",M]]),S={};function B(n,a){const e=c("ak-input");return i(),f(w,null,[s("p",null,[l(e,{placeholder:"请输入内容"},{append:I(()=>[t("CM")]),_:1})]),s("p",null,[l(e,{placeholder:"请输入内容"},{prepend:I(()=>[t("http://")]),_:1})])],64)}const N=y(S,[["render",B]]),P={};function U(n,a){const e=c("ak-input");return i(),f(w,null,[s("p",null,[l(e,{placeholder:"默认尺寸",size:"large"})]),s("p",null,[l(e,{placeholder:"默认尺寸"})]),s("p",null,[l(e,{placeholder:"sixe=small",size:"small"})]),s("p",null,[l(e,{placeholder:"sixe=mini",size:"mini"})])],64)}const F=y(P,[["render",U]]),x=C({components:{vdpv_0:V,vdpv_1:b,vdpv_2:E,vdpv_3:D,vdpv_4:N,vdpv_5:F},setup(n){const a=h(),e=h(),p=h(),o=h(),d=h(),k=h(),q=[a,e,p,o,d,k],u=R({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return{toggleCode:g=>{const j="vdpv_"+g;u[j+"Height"]===0?u[j+"Height"]=(q[g].value?q[g].value.offsetHeight:0)||0:u[j+"Height"]=0},...A(u),vdpv_0Ref:a,vdpv_1Ref:e,vdpv_2Ref:p,vdpv_3Ref:o,vdpv_4Ref:d,vdpv_5Ref:k}}});x.$vd={matter:{},toc:[{content:"Input 输入框",anchor:"input-输入框",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"显示清空按钮",anchor:"显示清空按钮",level:3},{content:"可显示密码明文",anchor:"可显示密码明文",level:3},{content:"添加前后缀Icon",anchor:"添加前后缀icon",level:3},{content:"复合型输入框",anchor:"复合型输入框",level:3},{content:"设置大小",anchor:"设置大小",level:3},{content:"API",anchor:"api",level:2},{content:"Input Props",anchor:"input-props",level:3},{content:"Input Slots",anchor:"input-slots",level:3}]};const T=x,G={class:"vuedoc"},J=r('<h1 id="input-输入框" data-source-line="1"><a class="markdownIt-Anchor" href="#input-输入框">#</a> Input 输入框</h1><h3 id="基本使用" data-source-line="3"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><pre style="display:none;"></pre>',3),K={class:"vuedoc-demo"},L={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},Q={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},W=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;defaultValue&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;禁用状态&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> defaultValue = ref(<span class="hljs-string">&#39;初始默认值&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),X=[W],Y=s("h3",{id:"显示清空按钮","data-source-line":"19"},[s("a",{class:"markdownIt-Anchor",href:"#显示清空按钮"},"#"),t(" 显示清空按钮")],-1),Z=s("p",{"data-source-line":"21"},[t("设置"),s("code",null,'clear="true"'),t("，在输入框不为空时显示清空按钮")],-1),ss=s("pre",{style:{display:"none"}},null,-1),as={class:"vuedoc-demo"},ns={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},es=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;试着输入些什么看看&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;valueClear&quot;</span>
    <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> valueClear = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ps=[es],os=s("h3",{id:"可显示密码明文","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#可显示密码明文"},"#"),t(" 可显示密码明文")],-1),cs=s("p",{"data-source-line":"40"},[s("code",null,'type="password'),t("时设置"),s("code",null,'showEye="true"'),t("可显示密码明文")],-1),ds=s("pre",{style:{display:"none"}},null,-1),hs={class:"vuedoc-demo"},rs={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},us={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},_s=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">:showEye</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),vs=[_s],gs=s("h3",{id:"添加前后缀icon","data-source-line":"58"},[s("a",{class:"markdownIt-Anchor",href:"#添加前后缀icon"},"#"),t(" 添加前后缀Icon")],-1),js=s("p",{"data-source-line":"60"},[t("可以通过 "),s("code",null,"prefix-icon"),t(" 和 "),s("code",null,"suffix-icon"),t(" 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot "),s("code",null,"prefix"),t(" 和 "),s("code",null,"suffix"),t(" 来放置图标。")],-1),ms=s("pre",{style:{display:"none"}},null,-1),fs={class:"vuedoc-demo"},ks={class:"vuedoc-demo__inner"},qs={class:"vuedoc-demo__preview"},ws={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ys=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span> <span class="hljs-attr">prefix-icon</span>=<span class="hljs-string">&quot;icon-user&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span> <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">&quot;icon-search&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Cs=[ys],Hs=s("h3",{id:"复合型输入框","data-source-line":"74"},[s("a",{class:"markdownIt-Anchor",href:"#复合型输入框"},"#"),t(" 复合型输入框")],-1),Is=s("p",{"data-source-line":"76"},"可前置或后置元素，一般为标签或按钮",-1),$s=s("pre",{style:{display:"none"}},null,-1),xs={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},bs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append</span>&gt;</span>CM<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend</span>&gt;</span>http://<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Es=[bs],zs=s("h3",{id:"设置大小","data-source-line":"94"},[s("a",{class:"markdownIt-Anchor",href:"#设置大小"},"#"),t(" 设置大小")],-1),Ms=s("p",{"data-source-line":"96"},[t("支持 "),s("code",null,"large"),t("、"),s("code",null,"normal"),t("、"),s("code",null,"small"),t("、"),s("code",null,"mini"),t(" 四种尺寸，默认为 normal")],-1),Ds=s("pre",{style:{display:"none"}},null,-1),Ss={class:"vuedoc-demo"},Bs={class:"vuedoc-demo__inner"},Ns={class:"vuedoc-demo__preview"},Ps={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Us=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;默认尺寸&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;默认尺寸&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sixe=small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sixe=mini&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Fs=[Us],Ts=r('<h2 id="api" data-source-line="108"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="input-props" data-source-line="110"><a class="markdownIt-Anchor" href="#input-props">#</a> Input Props</h3><table data-source-line="112"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>any</td><td>输入框的值</td></tr><tr><td>clear</td><td>boolean/false</td><td>显示清空按钮</td></tr><tr><td>showEye</td><td>boolean/false</td><td>密码框显示明文切换</td></tr><tr><td>width</td><td>string</td><td>设置宽度属性</td></tr><tr><td>size</td><td>string</td><td>支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>prefixIcon</td><td>string</td><td>前缀icon图标</td></tr><tr><td>suffixIcon</td><td>string</td><td>后缀icon图标</td></tr><tr><td>-</td><td></td><td>其它原生所有属性</td></tr></tbody></table><h3 id="input-slots" data-source-line="123"><a class="markdownIt-Anchor" href="#input-slots">#</a> Input Slots</h3><table data-source-line="125"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>prepend</td><td>输入框前置内容</td></tr><tr><td>append</td><td>输入框后置内容</td></tr><tr><td>prefix</td><td>前缀icon图标</td></tr><tr><td>suffix</td><td>后缀icon图标</td></tr></tbody></table>',5);function Gs(n,a,e,p,o,d){const k=c("vdpv_0"),q=c("vdpv_1"),u=c("vdpv_2"),H=c("vdpv_3"),g=c("vdpv_4"),j=c("vdpv_5");return i(),f("div",G,[J,s("div",K,[s("div",L,[s("div",O,[l(k)]),s("div",{style:_({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Q,X,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=m=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),Y,Z,ss,s("div",as,[s("div",ns,[s("div",ts,[l(q)]),s("div",{style:_({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=m=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),os,cs,ds,s("div",hs,[s("div",rs,[s("div",is,[l(u)]),s("div",{style:_({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",us,vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=m=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),gs,js,ms,s("div",fs,[s("div",ks,[s("div",qs,[l(H)]),s("div",{style:_({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ws,Cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=m=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),Hs,Is,$s,s("div",xs,[s("div",Rs,[s("div",As,[l(g)]),s("div",{style:_({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Vs,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=m=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])]),zs,Ms,Ds,s("div",Ss,[s("div",Bs,[s("div",Ns,[l(j)]),s("div",{style:_({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ps,Fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=m=>n.toggleCode(5))},v(n.vdpv_5Height>0?"hidden":"show"),1)])]),Ts])}const Ks=y(T,[["render",Gs]]);export{Ks as default};