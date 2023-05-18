import{_ as q,a as r,o as c,e as b,w as a,g as s,c as g,F as j,l as m,b as l,f as t,t as i,n as k,d as $,r as f,h as D,i as A,j as w}from"./index-6c3c2d70.js";const I={};function C(p,e){const h=r("ak-dropdown-item"),d=r("ak-dropdown");return c(),b(d,null,{dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,o=>l(h,{key:o},{default:a(()=>[t("菜单选项"+i(o),1)]),_:2},1024)),64))])]),default:a(()=>[t(" 下拉菜单 ")]),_:1})}const H=q(I,[["render",C]]),R={},B=s("i",{class:"icon-arrow"},null,-1),E=s("span",null,"文字无触发事件",-1),S=s("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1),N=s("i",{class:"icon-arrow"},null,-1),M=s("span",null,"点击箭头下拉",-1),V=s("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1);function F(p,e){const h=r("ak-button"),d=r("ak-dropdown-item"),o=r("ak-dropdown");return c(),g("div",null,[l(o,null,{dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,n=>l(d,{key:n},{default:a(()=>[t("2菜单选项"+i(n),1)]),_:2},1024)),64))])]),default:a(()=>[l(h,null,{default:a(()=>[t("下拉菜单"),B]),_:1})]),_:1}),l(o,{style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:a(()=>[S]),dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,n=>l(d,{key:n},{default:a(()=>[t("2菜单选项"+i(n),1)]),_:2},1024)),64))])]),default:a(()=>[E]),_:1}),l(o,{trigger:"click"},{dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,n=>l(d,{key:n},{default:a(()=>[t("2菜单选项"+i(n),1)]),_:2},1024)),64))])]),default:a(()=>[l(h,null,{default:a(()=>[t("点击下拉"),N]),_:1})]),_:1}),l(o,{trigger:"click",style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:a(()=>[V]),dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,n=>l(d,{key:n},{default:a(()=>[t("2菜单选项"+i(n),1)]),_:2},1024)),64))])]),default:a(()=>[M]),_:1})])}const P=q(R,[["render",F]]),T={__name:"README.md.vdpv_2",setup(p){const e=()=>{alert("菜单选项")};return(h,d)=>{const o=r("ak-dropdown-item"),n=r("ak-dropdown");return c(),b(n,{ref:"dropdown"},{dropdown:a(()=>[s("ul",null,[(c(),g(j,null,m(5,u=>l(o,{onClick:e,key:u},{default:a(()=>[t("菜单选项"+i(u),1)]),_:2},1024)),64))])]),default:a(()=>[t(" 下拉菜单 ")]),_:1},512)}}},x=$({components:{vdpv_0:H,vdpv_1:P,vdpv_2:T},setup(p){const e=f(),h=f(),d=f(),o=[e,h,d],n=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:_=>{const v="vdpv_"+_;n[v+"Height"]===0?n[v+"Height"]=(o[_].value?o[_].value.offsetHeight:0)||0:n[v+"Height"]=0},...A(n),vdpv_0Ref:e,vdpv_1Ref:h,vdpv_2Ref:d}}});x.$vd={matter:{},toc:[{content:"Dropdown 下拉菜单",anchor:"dropdown-下拉菜单",level:1},{content:"用法",anchor:"用法",level:3},{content:"触发对象",anchor:"触发对象",level:3},{content:"事件",anchor:"事件",level:3},{content:"API",anchor:"api",level:2},{content:"Dropdown",anchor:"dropdown",level:3},{content:"DropdownItem",anchor:"dropdownitem",level:3},{content:"Dropdown Event",anchor:"dropdown-event",level:3},{content:"Dropdown Methods",anchor:"dropdown-methods",level:3},{content:"Dropdown Slot",anchor:"dropdown-slot",level:3}]};const z=x,L={class:"vuedoc"},U=w('<h1 id="dropdown-下拉菜单" data-source-line="1"><a class="markdownIt-Anchor" href="#dropdown-下拉菜单">#</a> Dropdown 下拉菜单</h1><h3 id="用法" data-source-line="3"><a class="markdownIt-Anchor" href="#用法">#</a> 用法</h3><p data-source-line="5">通过具名<code>slot</code>为<code>dropdown</code> 来设置下拉菜单。默认情况下，下拉按钮只要<code>hover</code>即可，无需点击也会显示下拉菜单</p><pre style="display:none;"></pre>',4),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},O={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Q=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>&gt;</span>
    下拉菜单
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
          &gt;</span>菜单选项{{ item }}&lt;/ak-dropdown-item
        &gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>


</span></code></pre></div>`,1),W=[Q],X=s("h3",{id:"触发对象","data-source-line":"24"},[s("a",{class:"markdownIt-Anchor",href:"#触发对象"},"#"),t(" 触发对象")],-1),Y=s("p",{"data-source-line":"26"},[t("通过具名"),s("code",null,"slot"),t("为"),s("code",null,"dropdown"),t(" 来设置下拉菜单。默认情况下，下拉按钮只要"),s("code",null,"hover"),t("即可，无需点击也会显示下拉菜单")],-1),Z=s("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ts={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ls=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item
          &gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid #ddd; padding: 8px 12px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字无触发事件<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">trigger</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 15px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item
          &gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>点击下拉<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item
          &gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>
      <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;click&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid #ddd; padding: 8px 12px&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>点击箭头下拉<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">trigger</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 15px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item
          &gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">&lt;/script&gt;


</span></code></pre></div>`,1),ps=[ls],es=s("h3",{id:"事件","data-source-line":"87"},[s("a",{class:"markdownIt-Anchor",href:"#事件"},"#"),t(" 事件")],-1),os=s("pre",{style:{display:"none"}},null,-1),ds={class:"vuedoc-demo"},cs={class:"vuedoc-demo__inner"},rs={class:"vuedoc-demo__preview"},hs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},is=w(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dropdown&quot;</span>&gt;</span>
    下拉菜单
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
          &gt;</span>菜单选项{{ item }}&lt;/ak-dropdown-item
        &gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">() =&gt;</span> {
    alert(<span class="hljs-string">&#39;菜单选项&#39;</span>)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),gs=[is],js=w('<h2 id="api" data-source-line="111"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="dropdown" data-source-line="113"><a class="markdownIt-Anchor" href="#dropdown">#</a> Dropdown</h3><table data-source-line="115"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>trigger</td><td>String/hover</td><td>触发下拉的行为,hover和click</td></tr><tr><td>appendToBody</td><td>Boolean/false</td><td>插入到body</td></tr><tr><td>direction</td><td>Number/0</td><td>下拉弹出方向，0自动，1向上，2向下</td></tr><tr><td>downClass</td><td>string</td><td>展开面板类名</td></tr></tbody></table><h3 id="dropdownitem" data-source-line="122"><a class="markdownIt-Anchor" href="#dropdownitem">#</a> DropdownItem</h3><table data-source-line="124"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>disabled</td><td>Boolean/false</td><td>禁用状态</td></tr><tr><td>className</td><td>String</td><td>类名</td></tr></tbody></table><h3 id="dropdown-event" data-source-line="129"><a class="markdownIt-Anchor" href="#dropdown-event">#</a> Dropdown Event</h3><table data-source-line="131"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr><tr><td>toggle</td><td>展开或收起下拉事件,function(down){true为展开状态,false收起}</td></tr></tbody></table><h3 id="dropdown-methods" data-source-line="136"><a class="markdownIt-Anchor" href="#dropdown-methods">#</a> Dropdown Methods</h3><table data-source-line="138"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>slideUp</td><td>用于收起下拉，仅当<code>trigger</code>为<code>click</code>时</td></tr></tbody></table><h3 id="dropdown-slot" data-source-line="143"><a class="markdownIt-Anchor" href="#dropdown-slot">#</a> Dropdown Slot</h3><table data-source-line="145"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>dropdown</td><td>下拉内容</td></tr><tr><td>trigger</td><td>触发下拉标签</td></tr></tbody></table>',11);function ms(p,e,h,d,o,n){const u=r("vdpv_0"),_=r("vdpv_1"),v=r("vdpv_2");return c(),g("div",L,[U,s("div",G,[s("div",J,[s("div",K,[l(u)]),s("div",{style:k({height:p.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",O,W,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[0]||(e[0]=y=>p.toggleCode(0))},i(p.vdpv_0Height>0?"hidden":"show"),1)])]),X,Y,Z,s("div",ss,[s("div",as,[s("div",ns,[l(_)]),s("div",{style:k({height:p.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ts,ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[1]||(e[1]=y=>p.toggleCode(1))},i(p.vdpv_1Height>0?"hidden":"show"),1)])]),es,os,s("div",ds,[s("div",cs,[s("div",rs,[l(v)]),s("div",{style:k({height:p.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",hs,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:e[2]||(e[2]=y=>p.toggleCode(2))},i(p.vdpv_2Height>0?"hidden":"show"),1)])]),js])}const _s=q(z,[["render",ms]]);export{_s as default};
