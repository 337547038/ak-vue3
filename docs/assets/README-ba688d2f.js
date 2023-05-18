import{r as e,a as r,o as _,e as R,w as m,b as l,_ as I,c as k,F as V,f as u,g as s,n as g,t as f,d as A,h as $,i as C,j as v}from"./index-6c3c2d70.js";const D={__name:"README.md.vdpv_0",setup(t){const a=e("");return(c,p)=>{const i=r("ak-input"),n=r("ak-form-item");return _(),R(n,{label:"title"},{default:m(()=>[l(i,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=o=>a.value=o)},null,8,["modelValue"])]),_:1})}}},E={setup(){const t=e(""),a=e(""),c=e([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return{value:t,value2:a,rules:c}}};function F(t,a,c,p,i,n){const o=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[l(h,{label:"title",rules:p.rules},{default:m(()=>[l(o,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=d=>p.value=d),placeholder:"输入时触发"},null,8,["modelValue"])]),_:1},8,["rules"]),l(h,{label:"title",rules:p.rules,trigger:"blur"},{default:m(()=>[l(o,{modelValue:p.value2,"onUpdate:modelValue":a[1]||(a[1]=d=>p.value2=d),placeholder:"失去焦点触发"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}const P=I(E,[["render",F]]),x={__name:"README.md.vdpv_2",setup(t){const a=e(""),c=e(""),p=e([{type:"tips",msg:"获取焦点提示信息"},{type:"required",msg:"必填项"},{type:"number",msg:"只能输入数字"}]);return(i,n)=>{const o=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[l(h,{label:"title",verify:"mobile"},{default:m(()=>[l(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=d=>a.value=d),placeholder:"手机号验证"},null,8,["modelValue"])]),_:1}),l(h,{label:"title",rules:p.value,verify:"mobile"},{default:m(()=>[l(o,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=d=>c.value=d),placeholder:"手机号和必填验证"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},M={__name:"README.md.vdpv_3",setup(t){const a=e(),c=e(""),p=e([{type:"required",msg:"年龄不能为空"},{type:"rule",msg:"年龄必须大于1岁，且不能超过120岁",rule:"/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}]),i=()=>{a.value.validate().then(n=>{console.log(n)}).catch(n=>{console.log(n)})};return(n,o)=>{const h=r("ak-input"),d=r("ak-form-item"),j=r("ak-button");return _(),k(V,null,[l(d,{label:"age",rules:p.value,ref_key:"formItemEl",ref:a},{default:m(()=>[l(h,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=w=>c.value=w),placeholder:"请输入年龄"},null,8,["modelValue"])]),_:1},8,["rules"]),l(j,{onClick:i},{default:m(()=>[u("submit")]),_:1})],64)}}},U={__name:"README.md.vdpv_4",setup(t){const a=e(""),c=e(""),p=e([{type:"required",msg:"密码不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:i=>i===a.value}]);return(i,n)=>{const o=r("ak-input"),h=r("ak-form-item");return _(),k(V,null,[l(h,{label:"password",verify:"required"},{default:m(()=>[l(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=d=>a.value=d),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),l(h,{label:"password",rules:p.value},{default:m(()=>[l(o,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=d=>c.value=d),placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1},8,["rules"])],64)}}},S={__name:"README.md.vdpv_5",setup(t){const a=e({value:"abc"}),c=e({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return(p,i)=>{const n=r("ak-form-item");return _(),k("div",null,[l(n,{label:"input",type:"input",data:a.value},null,8,["data"]),l(n,{label:"select",type:"select",data:c.value},null,8,["data"])])}}},B=s("br",null,null,-1),N=s("br",null,null,-1),T={__name:"README.md.vdpv_6",setup(t){const a=e(),c=e({value:"abc"}),p=e({value:"112",options:[{label:"选项1"}],placeholder:"请选择"});return setTimeout(()=>{a.value="123"},1e3),(i,n)=>{const o=r("ak-field");return _(),k("div",null,[l(o,{type:"input",data:c.value,modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=h=>a.value=h)},null,8,["data","modelValue"]),B,N,l(o,{type:"select",data:p.value},null,8,["data"])])}}},H=A({components:{vdpv_0:D,vdpv_1:P,vdpv_2:x,vdpv_3:M,vdpv_4:U,vdpv_5:S,vdpv_6:T},setup(t){const a=e(),c=e(),p=e(),i=e(),n=e(),o=e(),h=e(),d=[a,c,p,i,n,o,h],j=$({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return{toggleCode:q=>{const b="vdpv_"+q;j[b+"Height"]===0?j[b+"Height"]=(d[q].value?d[q].value.offsetHeight:0)||0:j[b+"Height"]=0},...C(j),vdpv_0Ref:a,vdpv_1Ref:c,vdpv_2Ref:p,vdpv_3Ref:i,vdpv_4Ref:n,vdpv_5Ref:o,vdpv_6Ref:h}}});H.$vd={matter:{},toc:[{content:"FormItem 表单集合",anchor:"formitem-表单集合",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"校验",anchor:"校验",level:3},{content:"快速校验",anchor:"快速校验",level:3},{content:"自定义验证规则",anchor:"自定义验证规则",level:3},{content:"回调验证",anchor:"回调验证",level:3},{content:"快速输入常见组件类型",anchor:"快速输入常见组件类型",level:3},{content:"可单独使用`Field`",anchor:"可单独使用field",level:3},{content:"API",anchor:"api",level:2},{content:"FormItem Props",anchor:"formitem-props",level:3},{content:"FormItem Rules 验证规则",anchor:"formitem-rules-验证规则",level:3},{content:"FormItem Methods",anchor:"formitem-methods",level:3},{content:"Field Props",anchor:"field-props",level:3}]};const z=H,L={class:"vuedoc"},O=v('<h1 id="formitem-表单集合" data-source-line="3"><a class="markdownIt-Anchor" href="#formitem-表单集合">#</a> FormItem 表单集合</h1><p data-source-line="5">强大的校验功能，使用简单快捷</p><h3 id="基本使用" data-source-line="7"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><pre style="display:none;"></pre>',4),W={class:"vuedoc-demo"},G={class:"vuedoc-demo__inner"},J={class:"vuedoc-demo__preview"},K={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Q=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),X=[Q],Y=s("h3",{id:"校验","data-source-line":"23"},[s("a",{class:"markdownIt-Anchor",href:"#校验"},"#"),u(" 校验")],-1),Z=s("p",{"data-source-line":"25"},[u("使用"),s("code",null,"rules"),u("规则校验")],-1),ss=s("pre",{style:{display:"none"}},null,-1),as={class:"vuedoc-demo"},ts={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},es=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;输入时触发&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;blur&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;失去焦点触发&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
    <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
    <span class="hljs-keyword">const</span> rules = ref([
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tips&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;获取焦点提示信息&#39;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;必填项&#39;</span>},
      {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入数字&#39;</span>}
    ])
    <span class="hljs-keyword">return</span> {
      value,
      value2,
      rules
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ps=[es],os=s("h3",{id:"快速校验","data-source-line":"59"},[s("a",{class:"markdownIt-Anchor",href:"#快速校验"},"#"),u(" 快速校验")],-1),cs=s("p",{"data-source-line":"61"},[u("对于大量的表单验证不需要精确提示时，如验证为空时统一提示为必填字段，可通过设置"),s("code",null,"verify"),u("，多个用逗号隔开，也可同时和"),s("code",null,"rules"),u("规则校验一起使用")],-1),rs=s("pre",{style:{display:"none"}},null,-1),ds={class:"vuedoc-demo"},hs={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},us={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ms=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;手机号验证&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;手机号和必填验证&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tips&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;获取焦点提示信息&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;必填项&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入数字&#39;</span> }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),vs=[ms],js=s("h3",{id:"自定义验证规则","data-source-line":"88"},[s("a",{class:"markdownIt-Anchor",href:"#自定义验证规则"},"#"),u(" 自定义验证规则")],-1),_s=s("pre",{style:{display:"none"}},null,-1),gs={class:"vuedoc-demo"},fs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},ys={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},qs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formItemEl&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入年龄&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formItemEl = ref()
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;年龄不能为空&#39;</span> },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;rule&#39;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;年龄必须大于1岁，且不能超过120岁&#39;</span>,
      <span class="hljs-attr">rule</span>: <span class="hljs-string">&#39;/^(?:[1-9][0-9]?|1[01][0-9]|120)$/&#39;</span>
    }
  ])
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formItemEl.value
      .validate()
      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),bs=[qs],ws=s("h3",{id:"回调验证","data-source-line":"124"},[s("a",{class:"markdownIt-Anchor",href:"#回调验证"},"#"),u(" 回调验证")],-1),Vs=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},Hs={class:"vuedoc-demo__inner"},Rs={class:"vuedoc-demo__preview"},As={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},$s=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入密码&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请再次输入密码&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> value2 = ref(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> rules = ref([
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能为空&#39;</span> },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
      <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;两次输入的密码不一致&#39;</span>,
      <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> val === value.value
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Cs=[$s],Ds=s("h3",{id:"快速输入常见组件类型","data-source-line":"154"},[s("a",{class:"markdownIt-Anchor",href:"#快速输入常见组件类型"},"#"),u(" 快速输入常见组件类型")],-1),Es=s("p",{"data-source-line":"156"},[u("支持类型 "),s("code",null,"'input'、'radio'、'checkbox'、'datePicker'、'select'、'switch'、'textarea'、'timeSelect'、'timePicker'")],-1),Fs=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},xs={class:"vuedoc-demo__inner"},Ms={class:"vuedoc-demo__preview"},Us={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ss=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;inputData&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;selectData&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> inputData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;abc&#39;</span> })
  <span class="hljs-keyword">const</span> selectData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;112&#39;</span>, <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span> }], <span class="hljs-attr">placeholder</span>:<span class="hljs-string">&#39;请选择&#39;</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Bs=[Ss],Ns=s("h3",{id:"可单独使用field","data-source-line":"173"},[s("a",{class:"markdownIt-Anchor",href:"#可单独使用field"},"#"),u(" 可单独使用"),s("code",null,"Field")],-1),Ts=s("p",{"data-source-line":"175"},"可使用data.value对控件设置值，也可以是v-model(优先)",-1),zs=s("pre",{style:{display:"none"}},null,-1),Ls={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Gs={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Js=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;inputData&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;selectData&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value1 = ref()
  <span class="hljs-keyword">const</span> inputData = ref({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;abc&#39;</span> })
  <span class="hljs-keyword">const</span> selectData = ref({
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;112&#39;</span>,
    <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span> }],
    <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>
  })
  <span class="hljs-comment">// 模拟延时设值</span>
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    value1.value = <span class="hljs-string">&#39;123&#39;</span>
  }, <span class="hljs-number">1000</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ks=[Js],Qs=v('<h2 id="api" data-source-line="203"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="formitem-props" data-source-line="205"><a class="markdownIt-Anchor" href="#formitem-props">#</a> FormItem Props</h3><table data-source-line="207"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的标签名</td></tr><tr><td>labelVisible</td><td>boolean/false</td><td>隐藏label</td></tr><tr><td>prop</td><td>string</td><td>表单校验时关联表单的校验规则</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>verify</td><td>string</td><td>快速验证，支持required, mobile, tel, mail, digits, number,phone 多个用逗号隔开</td></tr><tr><td>rules</td><td>array</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示，在form使用时，优先使用form的设置</td></tr><tr><td>trigger</td><td>string/change</td><td>change和blur两种，在form使用时，优先使用form的设置</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸,支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>error</td><td>string</td><td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td></tr><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>仅在type不为空时，对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>仅在type不为空时，当前控件的值</td></tr></tbody></table><h3 id="formitem-rules-验证规则" data-source-line="224"><a class="markdownIt-Anchor" href="#formitem-rules-验证规则">#</a> FormItem Rules 验证规则</h3><table data-source-line="226"><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>required</td><td>为空</td></tr><tr><td>maxLength</td><td>最大字符</td></tr><tr><td>minLength</td><td>最小字符</td></tr><tr><td>mobile</td><td>手机号格式</td></tr><tr><td>tel</td><td>固话</td></tr><tr><td>phone</td><td>固话或手机</td></tr><tr><td>mail</td><td>邮箱格式</td></tr><tr><td>digits</td><td>正整数</td></tr><tr><td>number</td><td>数字</td></tr><tr><td>tips</td><td>获得焦点且值为空时显示输入提示</td></tr><tr><td>rule</td><td>自定义验证规则</td></tr><tr><td>fn</td><td>回调验证</td></tr></tbody></table><h3 id="formitem-methods" data-source-line="241"><a class="markdownIt-Anchor" href="#formitem-methods">#</a> FormItem Methods</h3><table data-source-line="243"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td></td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>clearTips</td><td></td><td>用于清空验证提示信息，恢复初始状态</td></tr></tbody></table><h3 id="field-props" data-source-line="248"><a class="markdownIt-Anchor" href="#field-props">#</a> Field Props</h3><table data-source-line="250"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>可快速输出控件类型，可选<code>input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker</code></td></tr><tr><td>data</td><td>Object</td><td>对应当前组件的props所有参数</td></tr><tr><td>v-model</td><td>any</td><td>当前控件的值</td></tr></tbody></table>',9);function Xs(t,a,c,p,i,n){const o=r("vdpv_0"),h=r("vdpv_1"),d=r("vdpv_2"),j=r("vdpv_3"),w=r("vdpv_4"),q=r("vdpv_5"),b=r("vdpv_6");return _(),k("div",L,[O,s("div",W,[s("div",G,[s("div",J,[l(o)]),s("div",{style:g({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",K,X,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=y=>t.toggleCode(0))},f(t.vdpv_0Height>0?"hidden":"show"),1)])]),Y,Z,ss,s("div",as,[s("div",ts,[s("div",ns,[l(h)]),s("div",{style:g({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=y=>t.toggleCode(1))},f(t.vdpv_1Height>0?"hidden":"show"),1)])]),os,cs,rs,s("div",ds,[s("div",hs,[s("div",is,[l(d)]),s("div",{style:g({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",us,vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=y=>t.toggleCode(2))},f(t.vdpv_2Height>0?"hidden":"show"),1)])]),js,_s,s("div",gs,[s("div",fs,[s("div",ks,[l(j)]),s("div",{style:g({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ys,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=y=>t.toggleCode(3))},f(t.vdpv_3Height>0?"hidden":"show"),1)])]),ws,Vs,s("div",Is,[s("div",Hs,[s("div",Rs,[l(w)]),s("div",{style:g({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,Cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=y=>t.toggleCode(4))},f(t.vdpv_4Height>0?"hidden":"show"),1)])]),Ds,Es,Fs,s("div",Ps,[s("div",xs,[s("div",Ms,[l(q)]),s("div",{style:g({height:t.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Us,Bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=y=>t.toggleCode(5))},f(t.vdpv_5Height>0?"hidden":"show"),1)])]),Ns,Ts,zs,s("div",Ls,[s("div",Os,[s("div",Ws,[l(b)]),s("div",{style:g({height:t.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Gs,Ks,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=y=>t.toggleCode(6))},f(t.vdpv_6Height>0?"hidden":"show"),1)])]),Qs])}const Zs=I(z,[["render",Xs]]);export{Zs as default};
