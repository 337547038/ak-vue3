import{_ as i,a as e,o as h,c as r,g as s,b as a,w as n,f as l,n as g,t as j,d as x,r as u,h as H,i as C,j as d}from"./index-6c3c2d70.js";const R={},A={class:"tooltip-demo"},I={class:"tooltip-demo"},N=s("span",null,null,-1),S={class:"tooltip-demo"};function T(o,p){const t=e("ak-tooltip");return h(),r("div",null,[s("div",A,[a(t,{content:"这是提示内容这是提示内容"},{default:n(()=>[l("上左")]),_:1}),a(t,{content:"这是提示内容这是提示内容，direction＝'top'",direction:"top"},{default:n(()=>[l("上边")]),_:1}),a(t,{content:"这是提示内容direction='top-right'",direction:"top-right"},{default:n(()=>[l("上右")]),_:1})]),s("div",I,[a(t,{direction:"left",content:"这是提示内容direction=left"},{default:n(()=>[l(" 左边 ")]),_:1}),N,a(t,{direction:"right",content:"这是提示内容direction=right"},{default:n(()=>[l("右边")]),_:1})]),s("div",S,[a(t,{direction:"bottom-left",content:"这是提示内容direction=bottom-left"},{default:n(()=>[l("下左")]),_:1}),a(t,{direction:"bottom",content:"这是提示内容direction=bottom"},{default:n(()=>[l("下边")]),_:1}),a(t,{direction:"bottom-right",content:"这是提示内容direction=bottom-right"},{default:n(()=>[l("下右")]),_:1})])])}const E=i(R,[["render",T]]),W={},B={class:"tooltip-demo"},P={class:"tooltip-demo"},V=s("span",null,null,-1),D={class:"tooltip-demo"},X=s("span",null,"下边",-1),z=s("span",null,"下右",-1);function M(o,p){const t=e("ak-tooltip");return h(),r("div",null,[s("div",B,[a(t,{content:"提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"},{default:n(()=>[l("上左")]),_:1}),a(t,{content:"上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽",direction:"top"},{default:n(()=>[l("上边")]),_:1}),a(t,{content:"这里跟上左类型，计算的是到浏览器左边的距离",direction:"top-right",maxWidth:200},{default:n(()=>[l("上右")]),_:1})]),s("div",P,[a(t,{direction:"left",content:"受当前标签到浏览器左边的距离影响"},{default:n(()=>[l(" 左边 ")]),_:1}),V,a(t,{direction:"right",content:"受当前标签到浏览器左边的距离影响",maxWidth:200},{default:n(()=>[l("右边")]),_:1})]),s("div",D,[a(t,{direction:"bottom-left",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:n(()=>[l("下左")]),_:1}),a(t,{direction:"bottom",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"},{default:n(()=>[X]),_:1}),a(t,{direction:"bottom-right",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:n(()=>[z]),_:1})])])}const F=i(W,[["render",M]]),G={},J=s("i",{class:"tooltip-icon"},"?",-1),K=s("i",{class:"tooltip-icon"},"?",-1);function L(o,p){const t=e("ak-tooltip"),c=e("ak-button");return h(),r("div",null,[a(t,{content:"这里是提示文字，因为icon比较小，可使用x微调",x:-10},{default:n(()=>[J]),_:1}),a(t,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10},{default:n(()=>[K]),_:1}),a(t,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10},{default:n(()=>[a(c,{type:"primary"},{default:n(()=>[l("按钮形式")]),_:1})]),_:1})])}const O=i(G,[["render",L]]),Q={},U={class:"tooltip-demo"},Y=s("span",null,"always",-1);function Z(o,p){const t=e("ak-tooltip");return h(),r("div",U,[a(t,{content:"一直都显示的",always:!0,direction:"top"},{default:n(()=>[Y]),_:1})])}const ss=i(Q,[["render",Z]]),ts={},as={class:"tooltip-demo"};function ns(o,p){const t=e("ak-button"),c=e("ak-tooltip");return h(),r("div",as,[a(c,{direction:"top"},{content:n(()=>[l(" 这里是提示内容 ")]),default:n(()=>[a(t,null,{default:n(()=>[l("内容为slot")]),_:1})]),_:1})])}const ls=i(ts,[["render",ns]]),os={},ps={class:"tooltip-demo"};function es(o,p){const t=e("ak-button"),c=e("ak-tooltip");return h(),r("div",ps,[a(c,{direction:"top",delay:300},{content:n(()=>[l(" 这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等 ")]),default:n(()=>[a(t,null,{default:n(()=>[l("设置延时关闭")]),_:1})]),_:1})])}const cs=i(os,[["render",es]]),w=x({components:{vdpv_0:E,vdpv_1:F,vdpv_2:O,vdpv_3:ss,vdpv_4:ls,vdpv_5:cs},setup(o){const p=u(),t=u(),c=u(),b=u(),y=u(),q=u(),k=[p,t,c,b,y,q],_=H({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return{toggleCode:v=>{const m="vdpv_"+v;_[m+"Height"]===0?_[m+"Height"]=(k[v].value?k[v].value.offsetHeight:0)||0:_[m+"Height"]=0},...C(_),vdpv_0Ref:p,vdpv_1Ref:t,vdpv_2Ref:c,vdpv_3Ref:b,vdpv_4Ref:y,vdpv_5Ref:q}}});w.$vd={matter:{},toc:[{content:"Tooltip 提示",anchor:"tooltip-提示",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"多文字自动换行",anchor:"多文字自动换行",level:3},{content:"支持多种效果",anchor:"支持多种效果",level:3},{content:"固定显示",anchor:"固定显示",level:3},{content:"内容参数可使用 slots 形式",anchor:"内容参数可使用-slots-形式",level:3},{content:"设置延时关闭",anchor:"设置延时关闭",level:3},{content:"API",anchor:"api",level:2},{content:"Tooltip Props",anchor:"tooltip-props",level:3},{content:"Tooltip Event",anchor:"tooltip-event",level:3}]};const ds=w,is={class:"vuedoc"},hs=d('<h1 id="tooltip-提示" data-source-line="3"><a class="markdownIt-Anchor" href="#tooltip-提示">#</a> Tooltip 提示</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),rs={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},us=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容这是提示内容&quot;</span>
        &gt;</span>上左&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容这是提示内容，direction＝&#39;top&#39;&quot;</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>
        &gt;</span>上边&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=&#39;top-right&#39;&quot;</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top-right&quot;</span>
        &gt;</span>上右&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=left&quot;</span>&gt;</span>
        左边
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=right&quot;</span>
        &gt;</span>右边&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom-left&quot;</span>
        &gt;</span>下左&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom&quot;</span>
        &gt;</span>下边&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom-right&quot;</span>
        &gt;</span>下右&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),vs=[us],ms=s("h3",{id:"多文字自动换行","data-source-line":"53"},[s("a",{class:"markdownIt-Anchor",href:"#多文字自动换行"},"#"),l(" 多文字自动换行")],-1),fs=s("p",{"data-source-line":"55"},"可通过设置最大宽度自动换行",-1),qs=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},bs={class:"vuedoc-demo__inner"},ys={class:"vuedoc-demo__preview"},$s={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ws=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行&quot;</span>
        &gt;</span>上左&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽&quot;</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>
        &gt;</span>上边&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里跟上左类型，计算的是到浏览器左边的距离&quot;</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top-right&quot;</span>
        <span class="hljs-attr">:maxWidth</span>=<span class="hljs-string">&quot;200&quot;</span>
        &gt;</span>上右&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;受当前标签到浏览器左边的距离影响&quot;</span>&gt;</span>
        左边
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;right&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;受当前标签到浏览器左边的距离影响&quot;</span>
        <span class="hljs-attr">:maxWidth</span>=<span class="hljs-string">&quot;200&quot;</span>
        &gt;</span>右边&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。&quot;</span>
        &gt;</span>下左&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行&quot;</span>
        &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>&lt;/ak-tooltip
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。&quot;</span>
        &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下右<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>&lt;/ak-tooltip
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),xs=[ws],Hs=s("h3",{id:"支持多种效果","data-source-line":"110"},[s("a",{class:"markdownIt-Anchor",href:"#支持多种效果"},"#"),l(" 支持多种效果")],-1),Cs=s("p",{"data-source-line":"112"},"可自定样式",-1),Rs=s("pre",{style:{display:"none"}},null,-1),As={class:"vuedoc-demo"},Is={class:"vuedoc-demo__inner"},Ns={class:"vuedoc-demo__preview"},Ss={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ts=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里是提示文字，因为icon比较小，可使用x微调&quot;</span> <span class="hljs-attr">:x</span>=<span class="hljs-string">&quot;-10&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-icon&quot;</span>&gt;</span>?<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里是提示文字。使用x轴微调将箭头和icon对齐&quot;</span> <span class="hljs-attr">:x</span>=<span class="hljs-string">&quot;-10&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-icon&quot;</span>&gt;</span>?<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>&lt;/ak-tooltip
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里是提示文字。使用x轴微调将箭头和icon对齐&quot;</span> <span class="hljs-attr">:x</span>=<span class="hljs-string">&quot;-10&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮形式<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>&lt;/ak-tooltip
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),Es=[Ts],Ws=s("h3",{id:"固定显示","data-source-line":"130"},[s("a",{class:"markdownIt-Anchor",href:"#固定显示"},"#"),l(" 固定显示")],-1),Bs=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},Vs={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Xs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},zs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;一直都显示的&quot;</span> <span class="hljs-attr">:always</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>always<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),Ms=[zs],Fs=s("h3",{id:"内容参数可使用-slots-形式","data-source-line":"142"},[s("a",{class:"markdownIt-Anchor",href:"#内容参数可使用-slots-形式"},"#"),l(" 内容参数可使用 slots 形式")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Ls={class:"vuedoc-demo__preview"},Os={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Qs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>内容为slot<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span> 这里是提示内容 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),Us=[Qs],Ys=s("h3",{id:"设置延时关闭","data-source-line":"155"},[s("a",{class:"markdownIt-Anchor",href:"#设置延时关闭"},"#"),l(" 设置延时关闭")],-1),Zs=s("p",{"data-source-line":"157"},[l("通过"),s("code",null,"delay"),l("设置延时关闭，可将鼠标移至提示语上，例如实现提示语上的点击事件")],-1),st=s("pre",{style:{display:"none"}},null,-1),tt={class:"vuedoc-demo"},at={class:"vuedoc-demo__inner"},nt={class:"vuedoc-demo__preview"},lt={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ot=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:delay</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>设置延时关闭<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
        这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre></div>`,1),pt=[ot],et=d('<h2 id="api" data-source-line="172"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tooltip-props" data-source-line="174"><a class="markdownIt-Anchor" href="#tooltip-props">#</a> Tooltip Props</h3><table data-source-line="176"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>String</td><td>显示的内容，也可以是 slot</td></tr><tr><td>direction</td><td>String</td><td>显示方向。有 top-left、top、top-right、left、right、bottom-left、bottom、bottom-right 共 8 个方向，默认 top-left</td></tr><tr><td>maxWidth</td><td>Number/500</td><td>最大显示宽</td></tr><tr><td>delay</td><td>Number/0</td><td>延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等</td></tr><tr><td>always</td><td>Boolean/false</td><td>是否总是可见</td></tr><tr><td>x</td><td>Number</td><td>弹出窗距离触发点 x 轴方向的距离，可用于微调距离</td></tr><tr><td>y</td><td>Number</td><td>弹出窗距离触发点 y 轴方向的距离，可用于微调距离</td></tr><tr><td>transition</td><td>String</td><td>自定义显示隐藏过渡动画名称，需要手动添加相应的 css 样式</td></tr><tr><td>className</td><td>String</td><td>自定样式类名</td></tr><tr><td>trigger</td><td>String/hover</td><td>事件触发方式，hover/click 两种</td></tr></tbody></table><h3 id="tooltip-event" data-source-line="189"><a class="markdownIt-Anchor" href="#tooltip-event">#</a> Tooltip Event</h3><table data-source-line="191"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件，trigger=click 时</td></tr></tbody></table>',5);function ct(o,p,t,c,b,y){const q=e("vdpv_0"),k=e("vdpv_1"),_=e("vdpv_2"),$=e("vdpv_3"),v=e("vdpv_4"),m=e("vdpv_5");return h(),r("div",is,[hs,s("div",rs,[s("div",_s,[s("div",gs,[a(q)]),s("div",{style:g({height:o.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[0]||(p[0]=f=>o.toggleCode(0))},j(o.vdpv_0Height>0?"hidden":"show"),1)])]),ms,fs,qs,s("div",ks,[s("div",bs,[s("div",ys,[a(k)]),s("div",{style:g({height:o.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",$s,xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[1]||(p[1]=f=>o.toggleCode(1))},j(o.vdpv_1Height>0?"hidden":"show"),1)])]),Hs,Cs,Rs,s("div",As,[s("div",Is,[s("div",Ns,[a(_)]),s("div",{style:g({height:o.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ss,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[2]||(p[2]=f=>o.toggleCode(2))},j(o.vdpv_2Height>0?"hidden":"show"),1)])]),Ws,Bs,s("div",Ps,[s("div",Vs,[s("div",Ds,[a($)]),s("div",{style:g({height:o.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xs,Ms,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[3]||(p[3]=f=>o.toggleCode(3))},j(o.vdpv_3Height>0?"hidden":"show"),1)])]),Fs,Gs,s("div",Js,[s("div",Ks,[s("div",Ls,[a(v)]),s("div",{style:g({height:o.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Os,Us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[4]||(p[4]=f=>o.toggleCode(4))},j(o.vdpv_4Height>0?"hidden":"show"),1)])]),Ys,Zs,st,s("div",tt,[s("div",at,[s("div",nt,[a(m)]),s("div",{style:g({height:o.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",lt,pt,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:p[5]||(p[5]=f=>o.toggleCode(5))},j(o.vdpv_5Height>0?"hidden":"show"),1)])]),et])}const it=i(ds,[["render",ct]]);export{it as default};
