var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{r,a as o,o as c,c as h,e as u,w as j,i as m,d as i,D as d,G as g,b as f,q,t as k,U as b}from"./vendor.66660a0e.js";const v={setup(){const s=r({password:"",password2:"",userName:""}),a={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:a=>a===s.value.password}],userName:[{type:"required",msg:"用户名不能为空"}]},n=r();return{formValue:s,formRules:a,submit:()=>{n.value.validate().then((s=>{console.log(s)})).catch((s=>{console.log(s)}))},resetForm:()=>{n.value.resetForm()},formEl:n}}},V=m("submit"),y=m("reset");v.render=function(s,a,n,l,t,p){const e=o("ak-input"),r=o("ak-form-item"),m=o("ak-form"),i=o("ak-button");return c(),h("div",null,[u(m,{modelValue:l.formValue,"onUpdate:modelValue":a[3]||(a[3]=s=>l.formValue=s),rules:l.formRules,ref:"formEl"},{default:j((()=>[u(r,{label:"userName",prop:"userName"},{default:j((()=>[u(e,{modelValue:l.formValue.userName,"onUpdate:modelValue":a[0]||(a[0]=s=>l.formValue.userName=s),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),u(r,{label:"password",prop:"password"},{default:j((()=>[u(e,{modelValue:l.formValue.password,"onUpdate:modelValue":a[1]||(a[1]=s=>l.formValue.password=s),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),u(r,{label:"password2",prop:"password2"},{default:j((()=>[u(e,{modelValue:l.formValue.password2,"onUpdate:modelValue":a[2]||(a[2]=s=>l.formValue.password2=s),placeholder:"请再次输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","rules"]),u(i,{onClick:l.submit,type:"primary"},{default:j((()=>[V])),_:1},8,["onClick"]),u(i,{onClick:l.resetForm},{default:j((()=>[y])),_:1},8,["onClick"])])};const w={setup(){const s=r({userName:"",password:"",mobile:"",mail:"",digits:"",number:"100.00",tel:"",city:"",area:"",cascader:[],select:"",checkbox:!1,checkboxGroup:[],switch:!1,textarea:"",radio:"",datePicker:""}),a={password:[{type:"required",msg:"密码不能为空"},{type:"minLength",len:6,msg:"密码不能小于6位"}],password2:[{type:"required",msg:"密码2不能为空"},{type:"fn",msg:"两次输入的密码不一致",validator:a=>a===s.value.password}],userName:[{type:"required",msg:"用户名不能为空"}],mobile:[{type:"required",msg:"请输入手机号"},{type:"mobile",msg:"手机号格式不正确"}],mail:[{type:"mail",msg:"邮箱格式不正确"}],digits:[{type:"digits",msg:"只能输入正整数"}],number:[{type:"number",msg:"只能输入数字"}],tel:[{type:"tel",msg:"电话号码格式不正确"}],city:[{type:"required",msg:"城市不能为空"}],area:[{type:"required",msg:"地区不能为空"}],select:[{type:"required",msg:"下拉不能为空"}],checkbox:[{type:"required",msg:"必须同意协议"}],checkboxGroup:[{type:"required",msg:"不能为空"}],textarea:[{type:"required",msg:"textarea不能为空"}],radio:[{type:"required",msg:"radio不能为空"}],datePicker:[{type:"required",msg:"请选择日期"}]},n=r();return{formValue:s,formRules:a,submit:()=>{n.value.validate().then((s=>{console.log(s)})).catch((s=>{console.log(s)}))},resetForm:()=>{n.value.resetForm()},formEl:n,submit2:()=>{n.value.validate(["userName","password"]).then((s=>{alert("验证通过"),console.log(s)})).catch((s=>{alert(s),console.log(s)}))},options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]}}},_=m("手机号"),x=m("我已阅读并同意……"),U=m("提交"),F=m("仅对用户名密码验证"),N=m("重置表单");w.render=function(s,a,n,l,t,p){const e=o("ak-input"),r=o("ak-form-item"),m=o("ak-cascader"),i=o("ak-radio-group"),d=o("ak-checkbox-group"),g=o("ak-select"),f=o("ak-textarea"),q=o("ak-date-picker"),k=o("ak-switch"),b=o("ak-checkbox"),v=o("ak-form"),V=o("ak-button");return c(),h("div",null,[u(v,{ref:"formEl",modelValue:l.formValue,"onUpdate:modelValue":a[17]||(a[17]=s=>l.formValue=s),rules:l.formRules,size:"mini"},{default:j((()=>[u(r,{label:"用户名",prop:"userName"},{default:j((()=>[u(e,{modelValue:l.formValue.userName,"onUpdate:modelValue":a[0]||(a[0]=s=>l.formValue.userName=s),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),u(r,{label:"密码",prop:"password"},{default:j((()=>[u(e,{modelValue:l.formValue.password,"onUpdate:modelValue":a[1]||(a[1]=s=>l.formValue.password=s),placeholder:"请输入密码",type:"password"},null,8,["modelValue"])])),_:1}),u(r,{prop:"mobile"},{label:j((()=>[_])),default:j((()=>[u(e,{modelValue:l.formValue.mobile,"onUpdate:modelValue":a[2]||(a[2]=s=>l.formValue.mobile=s),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),u(r,{prop:"mail",label:"邮箱"},{default:j((()=>[u(e,{modelValue:l.formValue.mail,"onUpdate:modelValue":a[3]||(a[3]=s=>l.formValue.mail=s),placeholder:"请输入邮箱地址"},null,8,["modelValue"])])),_:1}),u(r,{prop:"digits",label:"digits"},{default:j((()=>[u(e,{modelValue:l.formValue.digits,"onUpdate:modelValue":a[4]||(a[4]=s=>l.formValue.digits=s)},null,8,["modelValue"])])),_:1}),u(r,{prop:"number",label:"number"},{default:j((()=>[u(e,{modelValue:l.formValue.number,"onUpdate:modelValue":a[5]||(a[5]=s=>l.formValue.number=s)},null,8,["modelValue"])])),_:1}),u(r,{prop:"tel",label:"tel"},{default:j((()=>[u(e,{modelValue:l.formValue.tel,"onUpdate:modelValue":a[6]||(a[6]=s=>l.formValue.tel=s),placeholder:"请输入电话号码"},null,8,["modelValue"])])),_:1}),u(r,{label:"城市"},{default:j((()=>[u(r,{prop:"city"},{default:j((()=>[u(e,{modelValue:l.formValue.city,"onUpdate:modelValue":a[7]||(a[7]=s=>l.formValue.city=s)},null,8,["modelValue"])])),_:1}),u(r,{prop:"area"},{default:j((()=>[u(e,{modelValue:l.formValue.area,"onUpdate:modelValue":a[8]||(a[8]=s=>l.formValue.area=s)},null,8,["modelValue"])])),_:1})])),_:1}),u(r,{label:"地区选择",verify:"required"},{default:j((()=>[u(m,{modelValue:l.formValue.cascader,"onUpdate:modelValue":a[9]||(a[9]=s=>l.formValue.cascader=s),placeholder:"请选择"},null,8,["modelValue"])])),_:1}),u(r,{label:"radio",prop:"radio"},{default:j((()=>[u(i,{modelValue:l.formValue.radio,"onUpdate:modelValue":a[10]||(a[10]=s=>l.formValue.radio=s),options:l.options},null,8,["modelValue","options"])])),_:1}),u(r,{label:"checkbox",prop:"checkboxGroup"},{default:j((()=>[u(d,{modelValue:l.formValue.checkboxGroup,"onUpdate:modelValue":a[11]||(a[11]=s=>l.formValue.checkboxGroup=s),options:l.options},null,8,["modelValue","options"])])),_:1}),u(r,{prop:"select",label:"select"},{default:j((()=>[u(g,{modelValue:l.formValue.select,"onUpdate:modelValue":a[12]||(a[12]=s=>l.formValue.select=s),options:l.options,clear:!0,placeholder:"请选择"},null,8,["modelValue","options"])])),_:1}),u(r,{label:"textarea",prop:"textarea"},{default:j((()=>[u(f,{modelValue:l.formValue.textarea,"onUpdate:modelValue":a[13]||(a[13]=s=>l.formValue.textarea=s)},null,8,["modelValue"])])),_:1}),u(r,{label:"datePicker",prop:"datePicker"},{default:j((()=>[u(q,{modelValue:l.formValue.datePicker,"onUpdate:modelValue":a[14]||(a[14]=s=>l.formValue.datePicker=s),placeholder:"请选择"},null,8,["modelValue"])])),_:1}),u(r,{label:"switch"},{default:j((()=>[u(k,{modelValue:l.formValue.switch,"onUpdate:modelValue":a[15]||(a[15]=s=>l.formValue.switch=s)},null,8,["modelValue"])])),_:1}),u(r,{prop:"checkbox"},{default:j((()=>[u(b,{modelValue:l.formValue.checkbox,"onUpdate:modelValue":a[16]||(a[16]=s=>l.formValue.checkbox=s)},{default:j((()=>[x])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue","rules"]),u(V,{type:"primary",onClick:l.submit},{default:j((()=>[U])),_:1},8,["onClick"]),u(V,{type:"primary",onClick:l.submit2},{default:j((()=>[F])),_:1},8,["onClick"]),u(V,{onClick:l.resetForm},{default:j((()=>[N])),_:1},8,["onClick"])])};const P=i({components:{vdpv_0:v,vdpv_1:w},setup(s){const o=r(),c=r(),h=[o,c],u=d({vdpv_0Height:0,vdpv_1Height:0});return j=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&e(s,n,a[n]);if(l)for(var n of l(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===u[a+"Height"]?u[a+"Height"]=(h[s].value?h[s].value.offsetHeight:0)||0:u[a+"Height"]=0}},g(u)),a(j,n({vdpv_0Ref:o,vdpv_1Ref:c}));var j}});P.$vd={matter:{},toc:[{content:"Form 表单",anchor:"form-表单",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"表单校验",anchor:"表单校验",level:3},{content:"API",anchor:"api",level:2},{content:"Form Props",anchor:"form-props",level:3},{content:"Form Methods",anchor:"form-methods",level:3}]};const E=P,C={class:"vuedoc  "},R=b('<h1 id="form-表单" data-source-line="3"><a class="markdownIt-Anchor" href="#form-表单">#</a> Form 表单</h1><h3 id="基本使用" data-source-line="5"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><pre style="display:none;"></pre>',3),I={class:"vuedoc-demo "},G={class:"vuedoc-demo__inner"},H={class:"vuedoc-demo__preview"},O={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},A=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;userName&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入密码&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password2&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password2&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请再次输入密码&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetForm&quot;</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> formValue = ref({\n      <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">password2</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">userName</span>: <span class="hljs-string">&#39;&#39;</span>\n    })\n    <span class="hljs-keyword">const</span> formRules = {\n      <span class="hljs-attr">password</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能为空&#39;</span>},\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能小于6位&#39;</span>}\n      ],\n      <span class="hljs-attr">password2</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码2不能为空&#39;</span>},\n        {\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,\n          <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;两次输入的密码不一致&#39;</span>,\n          <span class="hljs-attr">validator</span>: <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n            <span class="hljs-keyword">return</span> val === formValue.value.password\n          }\n        }\n      ],\n      <span class="hljs-attr">userName</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;用户名不能为空&#39;</span>}\n      ]\n    }\n    <span class="hljs-keyword">const</span> formEl = ref()\n    <span class="hljs-comment">// 重置</span>\n    <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {\n      formEl.value.resetForm()\n    }\n    <span class="hljs-comment">// 表单提交</span>\n    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {\n      formEl.value.validate()\n        .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n        .catch(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n    }\n    <span class="hljs-keyword">return</span> {\n      formValue,\n      formRules,\n      submit,\n      resetForm,\n      formEl\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],L=f("h3",{id:"表单校验","data-source-line":"82"},[f("a",{class:"markdownIt-Anchor",href:"#表单校验"},"#"),m(" 表单校验")],-1),z=f("pre",{style:{display:"none"}},null,-1),M={class:"vuedoc-demo "},D={class:"vuedoc-demo__inner"},S={class:"vuedoc-demo__preview"},W={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},$=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;用户名&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;密码&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入密码&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">label</span>&gt;</span>手机号<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mobile&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入手机号&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mail&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;邮箱&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mail&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入邮箱地址&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;digits&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;digits&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.digits&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;number&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.number&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.tel&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入电话号码&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;城市&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.city&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;area&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.area&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区选择&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.cascader&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.radio&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.checkboxGroup&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;select&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.select&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.textarea&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;datePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;datePicker&quot;</span>&gt;</span>\n         <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.datePicker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.switch&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.checkbox&quot;</span>&gt;</span>我已阅读并同意……<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>提交<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit2&quot;</span>&gt;</span>仅对用户名密码验证<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetForm&quot;</span>&gt;</span>重置表单<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> formValue = ref({\n      <span class="hljs-attr">userName</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">mobile</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">mail</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">digits</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">number</span>: <span class="hljs-string">&#39;100.00&#39;</span>,\n      <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">city</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">area</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">cascader</span>: [],\n      <span class="hljs-attr">select</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">checkbox</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">checkboxGroup</span>: [],\n      <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">textarea</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">radio</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">datePicker</span>: <span class="hljs-string">&#39;&#39;</span>\n    })\n    <span class="hljs-keyword">const</span> options = [\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span>}\n    ]\n    <span class="hljs-keyword">const</span> formRules = {\n      <span class="hljs-attr">password</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能为空&#39;</span>},\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码不能小于6位&#39;</span>}\n      ],\n      <span class="hljs-attr">password2</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;密码2不能为空&#39;</span>},\n        {\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,\n          <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;两次输入的密码不一致&#39;</span>,\n          <span class="hljs-attr">validator</span>: <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n            <span class="hljs-keyword">return</span> val === formValue.value.password\n          }\n        }\n      ],\n      <span class="hljs-attr">userName</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;用户名不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">mobile</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入手机号&#39;</span>},\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mobile&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;手机号格式不正确&#39;</span>}\n      ],\n      <span class="hljs-attr">mail</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mail&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;邮箱格式不正确&#39;</span>}\n      ],\n      <span class="hljs-attr">digits</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;digits&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入正整数&#39;</span>}\n      ],\n      <span class="hljs-attr">number</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;只能输入数字&#39;</span>}\n      ],\n      <span class="hljs-attr">tel</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tel&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;电话号码格式不正确&#39;</span>}\n      ],\n      <span class="hljs-attr">city</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;城市不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">area</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;地区不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">select</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;下拉不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">checkbox</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;必须同意协议&#39;</span>}\n      ],\n      <span class="hljs-attr">checkboxGroup</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">textarea</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;textarea不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">radio</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;radio不能为空&#39;</span>}\n      ],\n      <span class="hljs-attr">datePicker</span>: [\n        {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请选择日期&#39;</span>}\n      ]\n    }\n    <span class="hljs-keyword">const</span> formEl = ref()\n    <span class="hljs-comment">// 重置</span>\n    <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {\n      formEl.value.resetForm()\n    }\n    <span class="hljs-comment">// 表单提交</span>\n    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {\n      formEl.value.validate()\n        .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n        .catch(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n    }\n    <span class="hljs-keyword">const</span> submit2 = <span class="hljs-function">() =&gt;</span> {\n      formEl.value.validate([<span class="hljs-string">&#39;userName&#39;</span>, <span class="hljs-string">&#39;password&#39;</span>])\n        .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          alert(<span class="hljs-string">&#39;验证通过&#39;</span>)\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n        .catch(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          alert(res)\n          <span class="hljs-built_in">console</span>.log(res)\n        })\n    }\n    <span class="hljs-keyword">return</span> {\n      formValue,\n      formRules,\n      submit,\n      resetForm,\n      formEl,\n      submit2,\n      options\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],B=b('<h2 id="api" data-source-line="277"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="form-props" data-source-line="279"><a class="markdownIt-Anchor" href="#form-props">#</a> Form Props</h3><table data-source-line="281"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>表单值</td></tr><tr><td>rules</td><td>object</td><td>校验规则</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>显示错误提示</td></tr><tr><td>trigger</td><td>string/change</td><td>表单控件校验触发类型，change和blur两种</td></tr><tr><td>labelWidth</td><td>string</td><td>label的宽度</td></tr><tr><td>required</td><td>boolean/true</td><td>是否根据验证规则自动生成必填样式名</td></tr><tr><td>size</td><td>string</td><td>用于控制该表单内组件的尺寸，medium / small / mini</td></tr><tr><td>disabled</td><td>boolean/true</td><td>表单禁用状态，影响子级formItem,button及formItem下所有表单控件</td></tr></tbody></table><h3 id="form-methods" data-source-line="292"><a class="markdownIt-Anchor" href="#form-methods">#</a> Form Methods</h3><table data-source-line="294"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>clearValidate</td><td>移除表单项的校验结果。传入待移除的表单项的 prop 组成的数组，如不传则移除整个表单的校验结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr><tr><td>setValue</td><td>使用resetForm功能时，当表单数据发生改变，需使用setValue设置</td></tr></tbody></table>',5);E.render=function(s,a,n,l,t,p){const e=o("vdpv_0"),r=o("vdpv_1");return c(),h("div",C,[R,f("div",I,[f("div",G,[f("div",H,[u(e)]),f("div",{style:q({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[f("div",O,A,512)],4),f("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},k(s.vdpv_0Height>0?"hidden":"show"),1)])]),L,z,f("div",M,[f("div",D,[f("div",S,[u(r)]),f("div",{style:q({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[f("div",W,$,512)],4),f("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},k(s.vdpv_1Height>0?"hidden":"show"),1)])]),B])};export{E as default};
