import{d as q,r as h,a as g,o as v,c as m,g as s,f as e,b as c,w as i,F as D,_ as H,n as f,t as k,h as R,i as A,j as u}from"./index-6c3c2d70.js";const E=s("p",null,"窗口内容，可包含任何内容",-1),I=s("p",null,"就是样式丑了点点",-1),x=q({__name:"README.md.vdpv_0",setup(t){const a=h(!1);return(d,n)=>{const l=g("ak-dialog");return v(),m("div",null,[s("p",null,[e(" 使用参数visible显示隐藏 "),s("span",{onClick:n[0]||(n[0]=p=>a.value=!0),class:"green"},"试一试")]),c(l,{title:"title",modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p)},{default:i(()=>[E,I]),_:1},8,["modelValue"]),s("p",null,[e(" 使用组件open方法打开 "),s("span",{onClick:n[2]||(n[2]=p=>d.$refs.openDialog.open()),class:"green"},"试一试")]),c(l,{title:"title",ref:"openDialog",class:"test-dialog"},{default:i(()=>[e("窗口内容，可包含任何内容 ")]),_:1},512)])}}}),M=s("p",null,"这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题",-1),U=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),S=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),N=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),z=s("p",null,"这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题",-1),B=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),T=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),F=s("p",null,"这是一个通过slot设标题的 dialog 弹窗",-1),P=q({__name:"README.md.vdpv_1",setup(t){const a=h(!1),d=h(!1);return(n,l)=>{const p=g("ak-dialog");return v(),m("div",null,[s("p",null,[e(" slot设置的标题 "),s("span",{onClick:l[0]||(l[0]=o=>a.value=!0),class:"green"},"试一试")]),c(p,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value=o)},{title:i(()=>[e("通过slot设标题")]),default:i(()=>[M,U,S,N]),_:1},8,["modelValue"]),s("p",null,[e(" 没有标题的弹窗"),s("span",{onClick:l[2]||(l[2]=o=>d.value=!0),class:"green"},"试一试")]),c(p,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=o=>d.value=o)},{default:i(()=>[z,B,T,F]),_:1},8,["modelValue"])])}}}),G=s("p",null,"设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条",-1),J=s("p",{style:{height:"200px"}},null,-1),K=s("p",null,"设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条",-1),L={__name:"README.md.vdpv_2",setup(t){const a=h(!1);return(d,n)=>{const l=g("ak-dialog");return v(),m(D,null,[s("span",{onClick:n[0]||(n[0]=p=>a.value=!0),class:"green"},"试一试"),c(l,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p),title:"title",width:"400px",height:"200px"},{default:i(()=>[G,J,K]),_:1},8,["modelValue"])],64)}}},O=s("p",null,"这是按钮的 dialog 弹窗内容",-1),Q=s("p",null,"默认情况下点击按钮后将关闭窗口",-1),W=s("p",null,"绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭",-1),X=s("p",null,"绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭",-1),Y=q({__name:"README.md.vdpv_3",setup(t){const a=h(!1),d=h(!1),n=h(!1),l=o=>{alert("确认关闭"),o()},p=o=>{alert("你点击了"+o+"，可使用return true或使用close方法可关闭")};return(o,r)=>{const _=g("ak-dialog");return v(),m("div",null,[s("p",null,[e(" 添加确认和取消按钮"),s("span",{class:"green",onClick:r[0]||(r[0]=j=>a.value=!0)},"试一试")]),c(_,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=j=>a.value=j),title:"title",confirm:"confirm",cancel:"cancel"},{default:i(()=>[O,Q]),_:1},8,["modelValue"]),s("p",null,[e(" 绑定callback方法"),s("span",{class:"green",onClick:r[2]||(r[2]=j=>d.value=!0)},"试一试")]),c(_,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=j=>d.value=j),title:"title",confirm:"confirm",cancel:"cancel",callback:l},{default:i(()=>[W]),_:1},8,["modelValue"]),s("p",null,[e(" 绑定beforeClose方法"),s("span",{class:"green",onClick:r[4]||(r[4]=j=>n.value=!0)},"试一试")]),c(_,{modelValue:n.value,"onUpdate:modelValue":r[5]||(r[5]=j=>n.value=j),title:"title",confirm:"confirm",cancel:"cancel","before-close":p},{default:i(()=>[X]),_:1},8,["modelValue"])])}}}),Z=s("p",null,"这是的 dialog 弹窗内容",-1),ss=s("p",null,"这是一个会自动关闭的弹窗",-1),as=q({__name:"README.md.vdpv_4",setup(t){const a=h(!1);return(d,n)=>{const l=g("ak-dialog");return v(),m("div",null,[s("span",{class:"green",onClick:n[0]||(n[0]=p=>a.value=!0)},"试一试"),c(l,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p),title:"title","auto-close":10},{default:i(()=>[Z,ss]),_:1},8,["modelValue"])])}}}),ns=s("p",null,"这是的 dialog 弹窗内容",-1),ls=s("p",null," ",-1),ts=s("a",{href:"javascript:;",class:"green"},"点击这里打开内层弹窗口",-1),ps=[ts],es=s("p",null," ",-1),os=s("p",null,"这是的 dialog 弹窗内容",-1),cs=s("p",null,null,-1),ds=q({__name:"README.md.vdpv_5",setup(t){const a=h(!1),d=h(!1);return(n,l)=>{const p=g("ak-dialog");return v(),m("div",null,[s("span",{class:"green",onClick:l[0]||(l[0]=o=>a.value=!0)},"试一试"),c(p,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value=o),title:"title"},{default:i(()=>[ns,ls,s("p",{onClick:l[1]||(l[1]=o=>d.value=!0)},ps),es,os,cs]),_:1},8,["modelValue"]),c(p,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=o=>d.value=o),title:"title",width:"300px"},{default:i(()=>[e("内层弹窗")]),_:1},8,["modelValue"])])}}}),hs=s("p",null,"这是的 dialog 弹窗内容",-1),is=s("p",null,null,-1),rs=q({__name:"README.md.vdpv_6",setup(t){const a=h(!1);return(d,n)=>{const l=g("ak-button"),p=g("ak-dialog");return v(),m("div",null,[s("span",{class:"green",onClick:n[0]||(n[0]=o=>a.value=!0)},"试一试"),c(p,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=o=>a.value=o),title:"title"},{footer:i(()=>[c(l,null,{default:i(()=>[e("取消")]),_:1}),c(l,{type:"primary"},{default:i(()=>[e("确定")]),_:1}),c(l,{type:"primary"},{default:i(()=>[e("提交")]),_:1})]),default:i(()=>[hs,is]),_:1},8,["modelValue"])])}}}),gs=s("p",null,"这是的 dialog 弹窗内容",-1),js=s("p",null,"可通过点击标题栏移动窗口位置",-1),us=q({__name:"README.md.vdpv_7",setup(t){const a=h(!1);return(d,n)=>{const l=g("ak-dialog");return v(),m("div",null,[s("span",{class:"green",onClick:n[0]||(n[0]=p=>a.value=!0)},"试一试"),c(l,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p),title:"title",move:!0},{default:i(()=>[gs,js]),_:1},8,["modelValue"])])}}}),V=q({components:{vdpv_0:x,vdpv_1:P,vdpv_2:L,vdpv_3:Y,vdpv_4:as,vdpv_5:ds,vdpv_6:rs,vdpv_7:us},setup(t){const a=h(),d=h(),n=h(),l=h(),p=h(),o=h(),r=h(),_=h(),j=[a,d,n,l,p,o,r,_],y=R({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return{toggleCode:w=>{const $="vdpv_"+w;y[$+"Height"]===0?y[$+"Height"]=(j[w].value?j[w].value.offsetHeight:0)||0:y[$+"Height"]=0},...A(y),vdpv_0Ref:a,vdpv_1Ref:d,vdpv_2Ref:n,vdpv_3Ref:l,vdpv_4Ref:p,vdpv_5Ref:o,vdpv_6Ref:r,vdpv_7Ref:_}}});V.$vd={matter:{},toc:[{content:"Dialog 弹层对话框",anchor:"dialog-弹层对话框",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"标题设置",anchor:"标题设置",level:3},{content:"设定窗宽高",anchor:"设定窗宽高",level:3},{content:"按钮事件",anchor:"按钮事件",level:3},{content:"自动关闭",anchor:"自动关闭",level:3},{content:"嵌套弹窗",anchor:"嵌套弹窗",level:3},{content:'使用slot="footer"自定按钮',anchor:"使用slotfooter自定按钮",level:3},{content:"可拖动",anchor:"可拖动",level:3},{content:"API",anchor:"api",level:2},{content:"Dialog",anchor:"dialog",level:3},{content:"Dialog Slot",anchor:"dialog-slot",level:3},{content:"Dialog Methods",anchor:"dialog-methods",level:3}]};const vs=V,ms={class:"vuedoc"},_s=u('<h1 id="dialog-弹层对话框" data-source-line="3"><a class="markdownIt-Anchor" href="#dialog-弹层对话框">#</a> Dialog 弹层对话框</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),fs={class:"vuedoc-demo"},ks={class:"vuedoc-demo__inner"},qs={class:"vuedoc-demo__preview"},bs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ys=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      使用参数visible显示隐藏
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>窗口内容，可包含任何内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>就是样式丑了点点<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      使用组件open方法打开
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.openDialog.open()&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;openDialog&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;test-dialog&quot;</span>
      &gt;</span>窗口内容，可包含任何内容
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ws=[ys],$s=s("h3",{id:"标题设置","data-source-line":"35"},[s("a",{class:"markdownIt-Anchor",href:"#标题设置"},"#"),e(" 标题设置")],-1),Cs=s("p",{"data-source-line":"37"},"标题可设置为空或通过slot设置，以满足各种不同的使用环境",-1),Vs=s("pre",{style:{display:"none"}},null,-1),Ds={class:"vuedoc-demo"},Hs={class:"vuedoc-demo__inner"},Rs={class:"vuedoc-demo__preview"},As={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Es=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      slot设置的标题 <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>通过slot设标题<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      没有标题的弹窗<span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗，当然也可以是不设置标题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个通过slot设标题的 dialog 弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Is=[Es],xs=s("h3",{id:"设定窗宽高","data-source-line":"72"},[s("a",{class:"markdownIt-Anchor",href:"#设定窗宽高"},"#"),e(" 设定窗宽高")],-1),Ms=s("p",{"data-source-line":"74"},[e("一般情况不需要设"),s("code",null,"height"),e("，这个高是指弹窗主体内容的高，适用于弹窗内容区需要滚动的时候")],-1),Us=s("pre",{style:{display:"none"}},null,-1),Ss={class:"vuedoc-demo"},Ns={class:"vuedoc-demo__inner"},zs={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ts=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置了宽高的 dialog 弹窗，设定了高时，内容溢出将显示纵向滚动条<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Fs=[Ts],Ps=u('<h3 id="按钮事件" data-source-line="93"><a class="markdownIt-Anchor" href="#按钮事件">#</a> 按钮事件</h3><p data-source-line="95">默认下点击按钮是关闭弹窗口的，可通过<code>beforeClose</code>接收点击事件，根据实现按需关闭。<code>callback</code>同<code>beforeClose</code>，<code>callback</code>只针对确认事件。<code>beforeClose </code>它将会阻止窗口的关闭事件，需另外调用方法关闭</p><pre style="display:none;"></pre>',3),Gs={class:"vuedoc-demo"},Js={class:"vuedoc-demo__inner"},Ks={class:"vuedoc-demo__preview"},Ls={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Os=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      添加确认和取消按钮<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span>
        &gt;</span>试一试&lt;/span
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
      <span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      <span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancel&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是按钮的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>默认情况下点击按钮后将关闭窗口<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      绑定callback方法<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible1&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
      <span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      <span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancel&quot;</span>
      <span class="hljs-attr">:callback</span>=<span class="hljs-string">&quot;callback&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      绑定beforeClose方法<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = true&quot;</span>
        &gt;</span>试一试&lt;/span
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible2&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
      <span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      <span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancel&quot;</span>
      <span class="hljs-attr">:before-close</span>=<span class="hljs-string">&quot;beforeClose&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>绑定callback方法后，点击确定不会关闭弹窗，可使用回调方法手动关闭<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> visible2 = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> callback = <span class="hljs-function">(<span class="hljs-params">close: () =&gt; <span class="hljs-keyword">void</span></span>) =&gt;</span> {
    alert(<span class="hljs-string">&#39;确认关闭&#39;</span>)
    close()
  }
  <span class="hljs-keyword">const</span> beforeClose = <span class="hljs-function">(<span class="hljs-params">type: string</span>) =&gt;</span> {
    alert(<span class="hljs-string">&#39;你点击了&#39;</span> + type + <span class="hljs-string">&#39;，可使用return true或使用close方法可关闭&#39;</span>)
    <span class="hljs-comment">// return true</span>
    <span class="hljs-comment">// close()</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Qs=[Os],Ws=s("h3",{id:"自动关闭","data-source-line":"163"},[s("a",{class:"markdownIt-Anchor",href:"#自动关闭"},"#"),e(" 自动关闭")],-1),Xs=s("p",{"data-source-line":"165"},[e("通过设定"),s("code",null,"auto-close"),e("设置关闭时间，可自动关闭窗。同时可使用"),s("code",null,"closeTips"),e("修改倒计时提示语")],-1),Ys=s("pre",{style:{display:"none"}},null,-1),Zs={class:"vuedoc-demo"},sa={class:"vuedoc-demo__inner"},aa={class:"vuedoc-demo__preview"},na={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},la=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:auto-close</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一个会自动关闭的弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ta=[la],pa=s("h3",{id:"嵌套弹窗","data-source-line":"186"},[s("a",{class:"markdownIt-Anchor",href:"#嵌套弹窗"},"#"),e(" 嵌套弹窗")],-1),ea=s("pre",{style:{display:"none"}},null,-1),oa={class:"vuedoc-demo"},ca={class:"vuedoc-demo__inner"},da={class:"vuedoc-demo__preview"},ha={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ia=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>
        &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;javascript:;&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>点击这里打开内层弹窗口<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>&lt;/p
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300px&quot;</span>
      &gt;</span>内层弹窗&lt;/ak-dialog
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ra=[ia],ga=s("h3",{id:"使用slotfooter自定按钮","data-source-line":"217"},[s("a",{class:"markdownIt-Anchor",href:"#使用slotfooter自定按钮"},"#"),e(' 使用slot="footer"自定按钮')],-1),ja=s("pre",{style:{display:"none"}},null,-1),ua={class:"vuedoc-demo"},va={class:"vuedoc-demo__inner"},ma={class:"vuedoc-demo__preview"},_a={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},fa=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确定<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>提交<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ka=[fa],qa=s("h3",{id:"可拖动","data-source-line":"242"},[s("a",{class:"markdownIt-Anchor",href:"#可拖动"},"#"),e(" 可拖动")],-1),ba=s("p",{"data-source-line":"244"},[e("通过设置"),s("code",null,'move="true"'),e("可拖动改变窗口位置")],-1),ya=s("pre",{style:{display:"none"}},null,-1),wa={class:"vuedoc-demo"},$a={class:"vuedoc-demo__inner"},Ca={class:"vuedoc-demo__preview"},Va={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Da=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span>&gt;</span>试一试<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:move</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是的 dialog 弹窗内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>可通过点击标题栏移动窗口位置<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dialog</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ha=[Da],Ra=u('<h2 id="api" data-source-line="264"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="dialog" data-source-line="266"><a class="markdownIt-Anchor" href="#dialog">#</a> Dialog</h3><table data-source-line="268"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>boolean/false</td><td>显示隐藏 Dialog</td></tr><tr><td>title</td><td>string</td><td>Dialog 的标题，也可通过具名 slot 方式</td></tr><tr><td>content</td><td>null</td><td>Dialog 的内容，建议使用slot方式</td></tr><tr><td>width</td><td>string</td><td>Dialog 的宽度</td></tr><tr><td>height</td><td>string</td><td>Dialog 的高度，这里是指弹窗内容区域的高度，溢出时显示滚动条，一般情况下不需要设置</td></tr><tr><td>top</td><td>string</td><td>Dialog 距离浏览器顶部的距离，设置了<code>center</code>后样式会被覆盖</td></tr><tr><td>className</td><td>string</td><td>Dialog 样式名</td></tr><tr><td>confirm</td><td>string</td><td>确认按钮，点击默认关闭窗口</td></tr><tr><td>cancel</td><td>string</td><td>取消按钮，点击默认关闭窗口</td></tr><tr><td>beforeClose</td><td>function</td><td>关闭前的回调，会阻止 Dialog 的关闭。function(type,close),type=close/confirm/cancel/modal 表示点了哪里关闭，close 方法用于关闭 Dialog</td></tr><tr><td>callback</td><td>function</td><td>确定回调比较常用而添加，同<code>beforeClose</code>，相当于type=confirm，减少对type的判断。根据需求和<code>beforeClose</code>二选一使用</td></tr><tr><td>modal</td><td>boolean/true</td><td>是否需要遮罩层</td></tr><tr><td>closeModal</td><td>boolean/true</td><td>是否可以通过点击 modal 关闭 Dialog</td></tr><tr><td>appendToBody</td><td>boolean/true</td><td>Dialog 自身是否插入至 body 元素上</td></tr><tr><td>lockScroll</td><td>boolean/true</td><td>是否在 Dialog 出现时将 body 滚动锁定</td></tr><tr><td>showClose</td><td>boolean/true</td><td>是否显示关闭按钮，点击默认关闭窗口</td></tr><tr><td>move</td><td>boolean/false</td><td>允许拖动窗口</td></tr><tr><td>autoClose</td><td>number/0</td><td>自动关闭时间，单位秒。0为不自动关闭</td></tr><tr><td>closeTips</td><td>string</td><td>自动关闭倒计时提示语，默认<code>S秒后自动关闭</code>大写S会被替换成实际时间</td></tr><tr><td>animation</td><td>string</td><td>动画样式名，可选<code>zoom</code>,<code>fade</code></td></tr><tr><td>center</td><td>boolean/true</td><td>居中对齐</td></tr><tr><td>icon</td><td>number/0</td><td>用于展示常见的alert提示显示对应的icon图标，1成功，2失败，3提示，4警告。其它的可通过添加样式控制</td></tr><tr><td>zIndex</td><td>number</td><td>弹层的z-index样式</td></tr></tbody></table><h3 id="dialog-slot" data-source-line="294"><a class="markdownIt-Anchor" href="#dialog-slot">#</a> Dialog Slot</h3><table data-source-line="296"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>尾部内容</td></tr></tbody></table><h3 id="dialog-methods" data-source-line="301"><a class="markdownIt-Anchor" href="#dialog-methods">#</a> Dialog Methods</h3><table data-source-line="303"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>打开窗口，使用此方法打开时不支持v-model双向绑定</td></tr><tr><td>close</td><td>关闭窗口</td></tr></tbody></table>',7);function Aa(t,a,d,n,l,p){const o=g("vdpv_0"),r=g("vdpv_1"),_=g("vdpv_2"),j=g("vdpv_3"),y=g("vdpv_4"),C=g("vdpv_5"),w=g("vdpv_6"),$=g("vdpv_7");return v(),m("div",ms,[_s,s("div",fs,[s("div",ks,[s("div",qs,[c(o)]),s("div",{style:f({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",bs,ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=b=>t.toggleCode(0))},k(t.vdpv_0Height>0?"hidden":"show"),1)])]),$s,Cs,Vs,s("div",Ds,[s("div",Hs,[s("div",Rs,[c(r)]),s("div",{style:f({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,Is,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=b=>t.toggleCode(1))},k(t.vdpv_1Height>0?"hidden":"show"),1)])]),xs,Ms,Us,s("div",Ss,[s("div",Ns,[s("div",zs,[c(_)]),s("div",{style:f({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Bs,Fs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=b=>t.toggleCode(2))},k(t.vdpv_2Height>0?"hidden":"show"),1)])]),Ps,s("div",Gs,[s("div",Js,[s("div",Ks,[c(j)]),s("div",{style:f({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ls,Qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=b=>t.toggleCode(3))},k(t.vdpv_3Height>0?"hidden":"show"),1)])]),Ws,Xs,Ys,s("div",Zs,[s("div",sa,[s("div",aa,[c(y)]),s("div",{style:f({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",na,ta,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=b=>t.toggleCode(4))},k(t.vdpv_4Height>0?"hidden":"show"),1)])]),pa,ea,s("div",oa,[s("div",ca,[s("div",da,[c(C)]),s("div",{style:f({height:t.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",ha,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=b=>t.toggleCode(5))},k(t.vdpv_5Height>0?"hidden":"show"),1)])]),ga,ja,s("div",ua,[s("div",va,[s("div",ma,[c(w)]),s("div",{style:f({height:t.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",_a,ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=b=>t.toggleCode(6))},k(t.vdpv_6Height>0?"hidden":"show"),1)])]),qa,ba,ya,s("div",wa,[s("div",$a,[s("div",Ca,[c($)]),s("div",{style:f({height:t.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Va,Ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=b=>t.toggleCode(7))},k(t.vdpv_7Height>0?"hidden":"show"),1)])]),Ra])}const Ia=H(vs,[["render",Aa]]);export{Ia as default};
