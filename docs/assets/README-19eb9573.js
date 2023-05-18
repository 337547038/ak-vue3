import{d as _,r as v,a as e,o as y,c as V,b as a,w as t,f as q,_ as G,g as c,n as w,t as x,h as $,i as M,j as k}from"./index-6c3c2d70.js";const z=_({__name:"README.md.vdpv_0",setup(j){const s=v({password:"",password2:"",userName:""}),i={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:h=>h===s.value.password}],userName:[{type:"required",msg:"用户名不能为空"}]},m=v(),u=()=>{m.value.resetForm()},f=()=>{m.value.validate().then(h=>{console.log(h)}).catch(h=>{console.log(h)})};return(h,o)=>{const r=e("ak-input"),n=e("ak-form-item"),g=e("ak-form"),p=e("ak-button");return y(),V("div",null,[a(g,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=d=>s.value=d),rules:i,ref_key:"formEl",ref:m},{default:t(()=>[a(n,{label:"userName",prop:"userName"},{default:t(()=>[a(r,{modelValue:s.value.userName,"onUpdate:modelValue":o[0]||(o[0]=d=>s.value.userName=d),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(n,{label:"password",prop:"password"},{default:t(()=>[a(r,{modelValue:s.value.password,"onUpdate:modelValue":o[1]||(o[1]=d=>s.value.password=d),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),a(n,{label:"password2",prop:"password2"},{default:t(()=>[a(r,{modelValue:s.value.password2,"onUpdate:modelValue":o[2]||(o[2]=d=>s.value.password2=d),placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(p,{onClick:f,type:"primary"},{default:t(()=>[q("submit")]),_:1}),a(p,{onClick:u},{default:t(()=>[q("reset")]),_:1})])}}}),D=_({__name:"README.md.vdpv_1",setup(j){const s=v({userName:"",password:"",mobile:"",mail:"",digits:"",number:"100.00",tel:"",city:"",area:"",cascader:[],select:"",checkbox:!1,checkboxGroup:[],switch:!1,textarea:"",radio:"",datePicker:"",timePicker:"",timeSelect:""}),i=[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}],m={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:r=>r===s.value.password}],userName:[{type:"required",msg:"用户名不能为空"}],mobile:[{type:"required",msg:"请输入手机号"},{type:"mobile",msg:"手机号格式不正确"}],mail:[{type:"mail",msg:"邮箱格式不正确"}],digits:[{type:"digits",msg:"只能输入正整数"}],number:[{type:"number",msg:"只能输入数字"}],tel:[{type:"tel",msg:"电话号码格式不正确"}],city:[{type:"required",msg:"城市不能为空"}],area:[{type:"required",msg:"地区不能为空"}],select:[{type:"required",msg:"下拉不能为空"}],checkbox:[{type:"required",msg:"必须同意协议"}],checkboxGroup:[{type:"required",msg:"不能为空"}],textarea:[{type:"required",msg:"textarea不能为空"}],radio:[{type:"required",msg:"radio不能为空"}],datePicker:[{type:"required",msg:"请选择日期"}],timePicker:[{type:"required",msg:"请选择时间"}],timeSelect:[{type:"required",msg:"请选择时间"}]},u=v(),f=()=>{u.value.resetForm()},h=()=>{u.value.validate().then(r=>{console.log(r)}).catch(r=>{console.log(r)})},o=()=>{u.value.validate(["userName","password"]).then(r=>{alert("验证通过"),console.log(r)}).catch(r=>{alert(r),console.log(r)})};return(r,n)=>{const g=e("ak-input"),p=e("ak-form-item"),d=e("ak-cascader"),N=e("ak-radio-group"),U=e("ak-checkbox-group"),E=e("ak-select"),F=e("ak-textarea"),C=e("ak-date-picker"),R=e("ak-switch"),S=e("ak-time-picker"),A=e("ak-time-select"),H=e("ak-checkbox"),I=e("ak-form"),b=e("ak-button");return y(),V("div",null,[a(I,{ref_key:"formEl",ref:u,modelValue:s.value,"onUpdate:modelValue":n[19]||(n[19]=l=>s.value=l),rules:m,size:"mini"},{default:t(()=>[a(p,{label:"用户名",prop:"userName"},{default:t(()=>[a(g,{modelValue:s.value.userName,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value.userName=l),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(p,{label:"密码",prop:"password",modelValue:s.value.password,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value.password=l),data:{placeholder:"请输入密码"},type:"password"},null,8,["modelValue"]),a(p,{prop:"mobile"},{label:t(()=>[q("手机号")]),default:t(()=>[a(g,{modelValue:s.value.mobile,"onUpdate:modelValue":n[2]||(n[2]=l=>s.value.mobile=l),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),a(p,{prop:"mail",label:"邮箱"},{default:t(()=>[a(g,{modelValue:s.value.mail,"onUpdate:modelValue":n[3]||(n[3]=l=>s.value.mail=l),placeholder:"请输入邮箱地址"},null,8,["modelValue"])]),_:1}),a(p,{prop:"digits",label:"digits",type:"input",modelValue:s.value.digits,"onUpdate:modelValue":n[4]||(n[4]=l=>s.value.digits=l)},null,8,["modelValue"]),a(p,{prop:"number",label:"number"},{default:t(()=>[a(g,{modelValue:s.value.number,"onUpdate:modelValue":n[5]||(n[5]=l=>s.value.number=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"tel",label:"tel"},{default:t(()=>[a(g,{modelValue:s.value.tel,"onUpdate:modelValue":n[6]||(n[6]=l=>s.value.tel=l),placeholder:"请输入电话号码"},null,8,["modelValue"])]),_:1}),a(p,{label:"城市"},{default:t(()=>[a(p,{prop:"city"},{default:t(()=>[a(g,{modelValue:s.value.city,"onUpdate:modelValue":n[7]||(n[7]=l=>s.value.city=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"area",modelValue:s.value.area,"onUpdate:modelValue":n[8]||(n[8]=l=>s.value.area=l),type:"input"},null,8,["modelValue"])]),_:1}),a(p,{label:"地区选择",verify:"required"},{default:t(()=>[a(d,{modelValue:s.value.cascader,"onUpdate:modelValue":n[9]||(n[9]=l=>s.value.cascader=l),placeholder:"请选择",options:[{label:"广东",value:"1",children:[{label:"广州",value:"2"}]}]},null,8,["modelValue"])]),_:1}),a(p,{label:"radio",prop:"radio"},{default:t(()=>[a(N,{modelValue:s.value.radio,"onUpdate:modelValue":n[10]||(n[10]=l=>s.value.radio=l),options:i},null,8,["modelValue"])]),_:1}),a(p,{label:"checkbox",prop:"checkboxGroup"},{default:t(()=>[a(U,{modelValue:s.value.checkboxGroup,"onUpdate:modelValue":n[11]||(n[11]=l=>s.value.checkboxGroup=l),options:i},null,8,["modelValue"])]),_:1}),a(p,{prop:"select",label:"select"},{default:t(()=>[a(E,{modelValue:s.value.select,"onUpdate:modelValue":n[12]||(n[12]=l=>s.value.select=l),options:i,clear:!0,placeholder:"请选择"},null,8,["modelValue"])]),_:1}),a(p,{label:"textarea",prop:"textarea"},{default:t(()=>[a(F,{modelValue:s.value.textarea,"onUpdate:modelValue":n[13]||(n[13]=l=>s.value.textarea=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"datePicker",prop:"datePicker"},{default:t(()=>[a(C,{modelValue:s.value.datePicker,"onUpdate:modelValue":n[14]||(n[14]=l=>s.value.datePicker=l),placeholder:"请选择"},null,8,["modelValue"])]),_:1}),a(p,{label:"switch"},{default:t(()=>[a(R,{modelValue:s.value.switch,"onUpdate:modelValue":n[15]||(n[15]=l=>s.value.switch=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"timePicker",prop:"timePicker"},{default:t(()=>[a(S,{modelValue:s.value.timePicker,"onUpdate:modelValue":n[16]||(n[16]=l=>s.value.timePicker=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"timeSelect",prop:"timeSelect"},{default:t(()=>[a(A,{modelValue:s.value.timeSelect,"onUpdate:modelValue":n[17]||(n[17]=l=>s.value.timeSelect=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"checkbox"},{default:t(()=>[a(H,{modelValue:s.value.checkbox,"onUpdate:modelValue":n[18]||(n[18]=l=>s.value.checkbox=l)},{default:t(()=>[q("我已阅读并同意……")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(b,{type:"primary",onClick:h},{default:t(()=>[q("提交")]),_:1}),a(b,{type:"primary",onClick:o},{default:t(()=>[q("仅对用户名密码验证")]),_:1}),a(b,{onClick:f},{default:t(()=>[q("重置表单")]),_:1})])}}}),P=_({components:{vdpv_0:z,vdpv_1:D},setup(j){const s=v(),i=v(),m=[s,i],u=$({vdpv_0Height:0,vdpv_1Height:0});return{toggleCode:h=>{const o="vdpv_"+h;u[o+"Height"]===0?u[o+"Height"]=(m[h].value?m[h].value.offsetHeight:0)||0:u[o+"Height"]=0},...M(u),vdpv_0Ref:s,vdpv_1Ref:i}}});P.$vd={matter:{},toc:[{content:"Form 表单",anchor:"form-表单",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"表单校验",anchor:"表单校验",level:3},{content:"API",anchor:"api",level:2},{content:"Form Props",anchor:"form-props",level:3},{content:"Form Methods",anchor:"form-methods",level:3}]};const L=P,B={class:"vuedoc"},T=k('<h1 id="form-表单" data-source-line="3"><a class="markdownIt-Anchor" href="#form-表单">#</a> Form 表单</h1><h3 id="基本使用" data-source-line="5"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><pre style="display:none;"></pre>',3),W={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},O={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Q=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;userName&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入密码&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password2&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请再次输入密码&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetForm&quot;</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formValue = ref({
    <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">password2</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">userName</span>: <span class="hljs-string">&#39;&#39;</span>
  })
  <span class="hljs-keyword">const</span> formRules = {
    <span class="hljs-attr">password</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能为空&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能小于6位&#39;</span> }
    ],
    <span class="hljs-attr">password2</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码2不能为空&#39;</span> },
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;两次输入的密码不一致&#39;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> val === formValue.value.password
        }
      }
    ],
    <span class="hljs-attr">userName</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;用户名不能为空&#39;</span> }]
  }
  <span class="hljs-keyword">const</span> formEl = ref()
  <span class="hljs-comment">// 重置</span>
  <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {
    formEl.value.resetForm()
  }
  <span class="hljs-comment">// 表单提交</span>
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formEl.value
      .validate()
      .then(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),X=[Q],Y=c("h3",{id:"表单校验","data-source-line":"71"},[c("a",{class:"markdownIt-Anchor",href:"#表单校验"},"#"),q(" 表单校验")],-1),Z=c("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ts=k(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;用户名&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;密码&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span>
        <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;{ placeholder: &#39;请输入密码&#39; }&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">label</span>&gt;</span>手机号<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mobile&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入手机号&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mail&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;邮箱&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mail&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入邮箱地址&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;digits&quot;</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;digits&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.digits&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;number&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.number&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.tel&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入电话号码&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;城市&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.city&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;area&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.area&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区选择&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.cascader&quot;</span>
          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
          <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;[
            {
              label: &#39;广东&#39;,
              value: &#39;1&#39;,
              children: [{ label: &#39;广州&#39;, value: &#39;2&#39; }]
            }
          ]&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.radio&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.checkboxGroup&quot;</span>
          <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.select&quot;</span>
          <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
          <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>
          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.textarea&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;datePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;datePicker&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.datePicker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.switch&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;timePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;timePicker&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.timePicker&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;timeSelect&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;timeSelect&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-time-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.timeSelect&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.checkbox&quot;</span>&gt;</span>我已阅读并同意……<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>提交<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit2&quot;</span>&gt;</span>仅对用户名密码验证<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetForm&quot;</span>&gt;</span>重置表单<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formValue = ref({
    <span class="hljs-attr">userName</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">mobile</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">mail</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">digits</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">number</span>: <span class="hljs-string">&#39;100.00&#39;</span>,
    <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">city</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">area</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">cascader</span>: [],
    <span class="hljs-attr">select</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">checkbox</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">checkboxGroup</span>: [],
    <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">textarea</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">datePicker</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">timePicker</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">timeSelect</span>: <span class="hljs-string">&#39;&#39;</span>
  })
  <span class="hljs-keyword">const</span> options = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> formRules = {
    <span class="hljs-attr">password</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能为空&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能小于6位&#39;</span> }
    ],
    <span class="hljs-attr">password2</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码2不能为空&#39;</span> },
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;两次输入的密码不一致&#39;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val: string</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> val === formValue.value.password
        }
      }
    ],
    <span class="hljs-attr">userName</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;用户名不能为空&#39;</span> }],
    <span class="hljs-attr">mobile</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入手机号&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mobile&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;手机号格式不正确&#39;</span> }
    ],
    <span class="hljs-attr">mail</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mail&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;邮箱格式不正确&#39;</span> }],
    <span class="hljs-attr">digits</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;digits&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入正整数&#39;</span> }],
    <span class="hljs-attr">number</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入数字&#39;</span> }],
    <span class="hljs-attr">tel</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tel&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;电话号码格式不正确&#39;</span> }],
    <span class="hljs-attr">city</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;城市不能为空&#39;</span> }],
    <span class="hljs-attr">area</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;地区不能为空&#39;</span> }],
    <span class="hljs-attr">select</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;下拉不能为空&#39;</span> }],
    <span class="hljs-attr">checkbox</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;必须同意协议&#39;</span> }],
    <span class="hljs-attr">checkboxGroup</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;不能为空&#39;</span> }],
    <span class="hljs-attr">textarea</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;textarea不能为空&#39;</span> }],
    <span class="hljs-attr">radio</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;radio不能为空&#39;</span> }],
    <span class="hljs-attr">datePicker</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请选择日期&#39;</span> }],
    <span class="hljs-attr">timePicker</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请选择时间&#39;</span> }],
    <span class="hljs-attr">timeSelect</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请选择时间&#39;</span> }]
  }
  <span class="hljs-keyword">const</span> formEl = ref()
  <span class="hljs-comment">// 重置</span>
  <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {
    formEl.value.resetForm()
  }
  <span class="hljs-comment">// 表单提交</span>
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formEl.value
      .validate()
      .then(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
  <span class="hljs-keyword">const</span> submit2 = <span class="hljs-function">() =&gt;</span> {
    formEl.value
      .validate([<span class="hljs-string">&#39;userName&#39;</span>, <span class="hljs-string">&#39;password&#39;</span>])
      .then(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        alert(<span class="hljs-string">&#39;验证通过&#39;</span>)
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        alert(res)
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ps=[ts],es=k('<h2 id="api" data-source-line="263"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="form-props" data-source-line="265"><a class="markdownIt-Anchor" href="#form-props">#</a> Form Props</h3><table data-source-line="267"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>表单值</td></tr><tr><td>rules</td><td>object</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示</td></tr><tr><td>trigger</td><td>string/change</td><td>表单控件校验触发类型，change和blur两种</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸，medium / small / mini</td></tr><tr><td>disabled</td><td>boolean/true</td><td>表单禁用状态，影响子级formItem,button及formItem下所有表单控件</td></tr></tbody></table><h3 id="form-methods" data-source-line="278"><a class="markdownIt-Anchor" href="#form-methods">#</a> Form Methods</h3><table data-source-line="280"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果，可接受一个参数用于对指定项校验</td></tr><tr><td>clearValidate</td><td>移除表单项的校验结果。传入待移除的表单项的 prop 组成的数组，如不传则移除整个表单的校验结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr><tr><td>setValue</td><td>使用resetForm功能时，当表单数据发生改变，需使用setValue设置</td></tr></tbody></table>',5);function rs(j,s,i,m,u,f){const h=e("vdpv_0"),o=e("vdpv_1");return y(),V("div",B,[T,c("div",W,[c("div",J,[c("div",K,[a(h)]),c("div",{style:w({height:j.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[c("div",O,X,512)],4),c("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=r=>j.toggleCode(0))},x(j.vdpv_0Height>0?"hidden":"show"),1)])]),Y,Z,c("div",ss,[c("div",as,[c("div",ns,[a(o)]),c("div",{style:w({height:j.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[c("div",ls,ps,512)],4),c("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=r=>j.toggleCode(1))},x(j.vdpv_1Height>0?"hidden":"show"),1)])]),es])}const cs=G(L,[["render",rs]]);export{cs as default};
