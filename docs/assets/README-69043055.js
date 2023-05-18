import{d as k,q as C,o as d,c as i,g as s,f as n,s as $,_ as q,a as j,b as v,n as u,t as m,r as _,h as w,i as A,j as g}from"./index-6c3c2d70.js";const O=k({__name:"README.md.vdpv_0",setup(l){const a=C("Message"),p=c=>{a.alert("这是alert的内容",{icon:c})};return(c,e)=>(d(),i("div",null,[s("p",null,[n("模拟Alert 成功 "),s("span",{class:"green",onClick:e[0]||(e[0]=t=>p(1))},"试一试")]),s("p",null,[n("模拟Alert 失败 "),s("span",{class:"green",onClick:e[1]||(e[1]=t=>p(2))},"试一试")]),s("p",null,[n("模拟Alert 警告 "),s("span",{class:"green",onClick:e[2]||(e[2]=t=>p(3))},"试一试")])]))}}),H={__name:"README.md.vdpv_1",setup(l){const a=$(),p=()=>{a.proxy.$confirm("这是alert的内容",{icon:2,callback:c=>{alert("确认回调事件"),c()}})};return(c,e)=>(d(),i("div",null,[s("p",null,[n("模拟Confirm "),s("span",{class:"green",onClick:p},"试一试")])]))}},I={data(){return{}},methods:{alertOpen(l){this.$msg("删除成功",{icon:l})}}};function M(l,a,p,c,e,t){return d(),i("div",null,[s("p",null,[n("消息提示 成功 "),s("span",{class:"green",onClick:a[0]||(a[0]=o=>t.alertOpen(1))},"试一试")]),s("p",null,[n("消息提示 失败 "),s("span",{class:"green",onClick:a[1]||(a[1]=o=>t.alertOpen(2))},"试一试")]),s("p",null,[n("消息提示 提示 "),s("span",{class:"green",onClick:a[2]||(a[2]=o=>t.alertOpen(3))},"试一试")]),s("p",null,[n("消息提示 警告 "),s("span",{class:"green",onClick:a[3]||(a[3]=o=>t.alertOpen(4))},"试一试")])])}const R=q(I,[["render",M]]),y=k({components:{vdpv_0:O,vdpv_1:H,vdpv_2:R},setup(l){const a=_(),p=_(),c=_(),e=[a,p,c],t=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return{toggleCode:r=>{const h="vdpv_"+r;t[h+"Height"]===0?t[h+"Height"]=(e[r].value?e[r].value.offsetHeight:0)||0:t[h+"Height"]=0},...A(t),vdpv_0Ref:a,vdpv_1Ref:p,vdpv_2Ref:c}}});y.$vd={matter:{},toc:[{content:"Message 信息弹窗",anchor:"message-信息弹窗",level:1},{content:"Alert",anchor:"alert",level:3},{content:"Confirm",anchor:"confirm",level:3},{content:"Msg",anchor:"msg",level:3},{content:"API",anchor:"api",level:2}]};const D=y,E={class:"vuedoc"},x=g('<h1 id="message-信息弹窗" data-source-line="3"><a class="markdownIt-Anchor" href="#message-信息弹窗">#</a> Message 信息弹窗</h1><p data-source-line="5">为方便使用，定义了<code>Dialog</code>,<code>Alert</code>,<code>Confirm</code>,<code>Msg</code>三种以适应不同场景，如果需要弹出较为复杂的内容，请使用 <code>Dialog</code>。可使用<code>inject</code>,<code>getCurrentInstance</code>和<code>Vue2</code>选项卡的方式，使用<code>this.$msg()</code>方式调用。同时定义了<code>clear</code>用于移除所有<code>message</code>提示</p><h3 id="alert" data-source-line="7"><a class="markdownIt-Anchor" href="#alert">#</a> Alert</h3><p data-source-line="9">使用<code>inject</code>注入方式调用</p><pre style="display:none;"></pre>',5),V={class:"vuedoc-demo"},b={class:"vuedoc-demo__inner"},N={class:"vuedoc-demo__preview"},B={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},S=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>模拟Alert 成功 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(1)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>&lt;/p
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>模拟Alert 失败 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(2)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>&lt;/p
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
      &gt;</span>模拟Alert 警告 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(3)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>&lt;/p
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> message: any = inject(<span class="hljs-string">&#39;Message&#39;</span>)
  <span class="hljs-keyword">const</span> alertOpen = <span class="hljs-function">(<span class="hljs-params">type: string</span>) =&gt;</span> {
    message.alert(<span class="hljs-string">&#39;这是alert的内容&#39;</span>, { <span class="hljs-attr">icon</span>: type })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),P=[S],z=s("h3",{id:"confirm","data-source-line":"36"},[s("a",{class:"markdownIt-Anchor",href:"#confirm"},"#"),n(" Confirm")],-1),T=s("p",{"data-source-line":"38"},[n("使用"),s("code",null,"getCurrentInstance"),n("方式打开")],-1),F=s("pre",{style:{display:"none"}},null,-1),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},L={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Q=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>模拟Confirm <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> instance = getCurrentInstance()
  <span class="hljs-keyword">const</span> alertOpen = <span class="hljs-function">() =&gt;</span> {
    instance.proxy.$confirm(<span class="hljs-string">&#39;这是alert的内容&#39;</span>, {
      <span class="hljs-attr">icon</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">close</span>) =&gt;</span> {
        alert(<span class="hljs-string">&#39;确认回调事件&#39;</span>)
        close()
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),U=[Q],W=s("h3",{id:"msg","data-source-line":"64"},[s("a",{class:"markdownIt-Anchor",href:"#msg"},"#"),n(" Msg")],-1),X=s("p",{"data-source-line":"66"},[s("code",null,"Vue2"),n("选项卡的方式，使用"),s("code",null,"this.$msg()"),n("打开")],-1),Y=s("pre",{style:{display:"none"}},null,-1),Z={class:"vuedoc-demo"},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ls=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>消息提示 成功 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(1)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>消息提示 失败 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(2)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>消息提示 提示 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(3)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>消息提示 警告 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alertOpen(4)&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {}
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">alertOpen</span>(<span class="hljs-params">type</span>)</span> {
        <span class="hljs-built_in">this</span>.$msg(<span class="hljs-string">&#39;删除成功&#39;</span>, {
          <span class="hljs-attr">icon</span>: type
        })
      }
    }
  }
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ts=[ls],es=s("h2",{id:"api","data-source-line":"95"},[s("a",{class:"markdownIt-Anchor",href:"#api"},"#"),n(" API")],-1),ps=s("p",{"data-source-line":"97"},[n("所有参数详见"),s("a",{href:"/#/dialog"},"Dialog")],-1);function cs(l,a,p,c,e,t){const o=j("vdpv_0"),r=j("vdpv_1"),h=j("vdpv_2");return d(),i("div",E,[x,s("div",V,[s("div",b,[s("div",N,[v(o)]),s("div",{style:u({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",B,P,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=f=>l.toggleCode(0))},m(l.vdpv_0Height>0?"hidden":"show"),1)])]),z,T,F,s("div",G,[s("div",J,[s("div",K,[v(r)]),s("div",{style:u({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",L,U,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=f=>l.toggleCode(1))},m(l.vdpv_1Height>0?"hidden":"show"),1)])]),W,X,Y,s("div",Z,[s("div",ss,[s("div",as,[v(h)]),s("div",{style:u({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ns,ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=f=>l.toggleCode(2))},m(l.vdpv_2Height>0?"hidden":"show"),1)])]),es,ps])}const rs=q(D,[["render",cs]]);export{rs as default};
