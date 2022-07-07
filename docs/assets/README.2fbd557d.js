var z=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(o,s,e)=>s in o?z(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,w=(o,s)=>{for(var e in s||(s={}))T.call(s,e)&&E(o,e,s[e]);if(F)for(var e of F(s))W.call(s,e)&&E(o,e,s[e]);return o},A=(o,s)=>L(o,M(s));import{d as b,b as f,e as r,o as y,c as V,f as a,w as t,g as q,_ as J,r as K,t as O,h,n as B,i as D,a as v}from"./index.710b33da.js";const Q=q("submit"),X=q("reset"),Y=b({setup(o){const s=f({password:"",password2:"",userName:""}),e={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],password2:[{type:"required",msg:"\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:i=>i===s.value.password}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]},m=f(),j=()=>{m.value.resetForm()},k=()=>{m.value.validate().then(i=>{console.log(i)}).catch(i=>{console.log(i)})};return(i,u)=>{const c=r("ak-input"),n=r("ak-form-item"),g=r("ak-form"),p=r("ak-button");return y(),V("div",null,[a(g,{modelValue:s.value,"onUpdate:modelValue":u[3]||(u[3]=d=>s.value=d),rules:e,ref_key:"formEl",ref:m},{default:t(()=>[a(n,{label:"userName",prop:"userName"},{default:t(()=>[a(c,{modelValue:s.value.userName,"onUpdate:modelValue":u[0]||(u[0]=d=>s.value.userName=d),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),a(n,{label:"password",prop:"password"},{default:t(()=>[a(c,{modelValue:s.value.password,"onUpdate:modelValue":u[1]||(u[1]=d=>s.value.password=d),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(n,{label:"password2",prop:"password2"},{default:t(()=>[a(c,{modelValue:s.value.password2,"onUpdate:modelValue":u[2]||(u[2]=d=>s.value.password2=d),placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(p,{onClick:k,type:"primary"},{default:t(()=>[Q]),_:1}),a(p,{onClick:j},{default:t(()=>[X]),_:1})])}}}),Z=q("\u624B\u673A\u53F7"),ss=q("\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u2026\u2026"),as=q("\u63D0\u4EA4"),ns=q("\u4EC5\u5BF9\u7528\u6237\u540D\u5BC6\u7801\u9A8C\u8BC1"),ls=q("\u91CD\u7F6E\u8868\u5355"),ts=b({setup(o){const s=f({userName:"",password:"",mobile:"",mail:"",digits:"",number:"100.00",tel:"",city:"",area:"",cascader:[],select:"",checkbox:!1,checkboxGroup:[],switch:!1,textarea:"",radio:"",datePicker:"",timePicker:"",timeSelect:""}),e=[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}],m={password:[{type:"required",msg:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{type:"minLength",len:6,msg:"\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"}],password2:[{type:"required",msg:"\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A"},{type:"fn",msg:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",validator:c=>c===s.value.password}],userName:[{type:"required",msg:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],mobile:[{type:"required",msg:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{type:"mobile",msg:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],mail:[{type:"mail",msg:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"}],digits:[{type:"digits",msg:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"}],number:[{type:"number",msg:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57"}],tel:[{type:"tel",msg:"\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E"}],city:[{type:"required",msg:"\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A"}],area:[{type:"required",msg:"\u5730\u533A\u4E0D\u80FD\u4E3A\u7A7A"}],select:[{type:"required",msg:"\u4E0B\u62C9\u4E0D\u80FD\u4E3A\u7A7A"}],checkbox:[{type:"required",msg:"\u5FC5\u987B\u540C\u610F\u534F\u8BAE"}],checkboxGroup:[{type:"required",msg:"\u4E0D\u80FD\u4E3A\u7A7A"}],textarea:[{type:"required",msg:"textarea\u4E0D\u80FD\u4E3A\u7A7A"}],radio:[{type:"required",msg:"radio\u4E0D\u80FD\u4E3A\u7A7A"}],datePicker:[{type:"required",msg:"\u8BF7\u9009\u62E9\u65E5\u671F"}],timePicker:[{type:"required",msg:"\u8BF7\u9009\u62E9\u65F6\u95F4"}],timeSelect:[{type:"required",msg:"\u8BF7\u9009\u62E9\u65F6\u95F4"}]},j=f(),k=()=>{j.value.resetForm()},i=()=>{j.value.validate().then(c=>{console.log(c)}).catch(c=>{console.log(c)})},u=()=>{j.value.validate(["userName","password"]).then(c=>{alert("\u9A8C\u8BC1\u901A\u8FC7"),console.log(c)}).catch(c=>{alert(c),console.log(c)})};return(c,n)=>{const g=r("ak-input"),p=r("ak-form-item"),d=r("ak-cascader"),C=r("ak-radio-group"),P=r("ak-checkbox-group"),N=r("ak-select"),U=r("ak-textarea"),S=r("ak-date-picker"),$=r("ak-switch"),R=r("ak-time-picker"),H=r("ak-time-select"),I=r("ak-checkbox"),G=r("ak-form"),_=r("ak-button");return y(),V("div",null,[a(G,{ref_key:"formEl",ref:j,modelValue:s.value,"onUpdate:modelValue":n[19]||(n[19]=l=>s.value=l),rules:m,size:"mini"},{default:t(()=>[a(p,{label:"\u7528\u6237\u540D",prop:"userName"},{default:t(()=>[a(g,{modelValue:s.value.userName,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value.userName=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u5BC6\u7801",prop:"password",modelValue:s.value.password,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value.password=l),data:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},type:"password"},null,8,["modelValue"]),a(p,{prop:"mobile"},{label:t(()=>[Z]),default:t(()=>[a(g,{modelValue:s.value.mobile,"onUpdate:modelValue":n[2]||(n[2]=l=>s.value.mobile=l),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),a(p,{prop:"mail",label:"\u90AE\u7BB1"},{default:t(()=>[a(g,{modelValue:s.value.mail,"onUpdate:modelValue":n[3]||(n[3]=l=>s.value.mail=l),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740"},null,8,["modelValue"])]),_:1}),a(p,{prop:"digits",label:"digits",type:"input",modelValue:s.value.digits,"onUpdate:modelValue":n[4]||(n[4]=l=>s.value.digits=l)},null,8,["modelValue"]),a(p,{prop:"number",label:"number"},{default:t(()=>[a(g,{modelValue:s.value.number,"onUpdate:modelValue":n[5]||(n[5]=l=>s.value.number=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"tel",label:"tel"},{default:t(()=>[a(g,{modelValue:s.value.tel,"onUpdate:modelValue":n[6]||(n[6]=l=>s.value.tel=l),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u57CE\u5E02"},{default:t(()=>[a(p,{prop:"city"},{default:t(()=>[a(g,{modelValue:s.value.city,"onUpdate:modelValue":n[7]||(n[7]=l=>s.value.city=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"area",modelValue:s.value.area,"onUpdate:modelValue":n[8]||(n[8]=l=>s.value.area=l),type:"input"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u5730\u533A\u9009\u62E9",verify:"required"},{default:t(()=>[a(d,{modelValue:s.value.cascader,"onUpdate:modelValue":n[9]||(n[9]=l=>s.value.cascader=l),placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u5E7F\u4E1C",value:"1",children:[{label:"\u5E7F\u5DDE",value:"2"}]}]},null,8,["modelValue"])]),_:1}),a(p,{label:"radio",prop:"radio"},{default:t(()=>[a(C,{modelValue:s.value.radio,"onUpdate:modelValue":n[10]||(n[10]=l=>s.value.radio=l),options:e},null,8,["modelValue"])]),_:1}),a(p,{label:"checkbox",prop:"checkboxGroup"},{default:t(()=>[a(P,{modelValue:s.value.checkboxGroup,"onUpdate:modelValue":n[11]||(n[11]=l=>s.value.checkboxGroup=l),options:e},null,8,["modelValue"])]),_:1}),a(p,{prop:"select",label:"select"},{default:t(()=>[a(N,{modelValue:s.value.select,"onUpdate:modelValue":n[12]||(n[12]=l=>s.value.select=l),options:e,clear:!0,placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue"])]),_:1}),a(p,{label:"textarea",prop:"textarea"},{default:t(()=>[a(U,{modelValue:s.value.textarea,"onUpdate:modelValue":n[13]||(n[13]=l=>s.value.textarea=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"datePicker",prop:"datePicker"},{default:t(()=>[a(S,{modelValue:s.value.datePicker,"onUpdate:modelValue":n[14]||(n[14]=l=>s.value.datePicker=l),placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue"])]),_:1}),a(p,{label:"switch"},{default:t(()=>[a($,{modelValue:s.value.switch,"onUpdate:modelValue":n[15]||(n[15]=l=>s.value.switch=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"timePicker",prop:"timePicker"},{default:t(()=>[a(R,{modelValue:s.value.timePicker,"onUpdate:modelValue":n[16]||(n[16]=l=>s.value.timePicker=l)},null,8,["modelValue"])]),_:1}),a(p,{label:"timeSelect",prop:"timeSelect"},{default:t(()=>[a(H,{modelValue:s.value.timeSelect,"onUpdate:modelValue":n[17]||(n[17]=l=>s.value.timeSelect=l)},null,8,["modelValue"])]),_:1}),a(p,{prop:"checkbox"},{default:t(()=>[a(I,{modelValue:s.value.checkbox,"onUpdate:modelValue":n[18]||(n[18]=l=>s.value.checkbox=l)},{default:t(()=>[ss]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(_,{type:"primary",onClick:i},{default:t(()=>[as]),_:1}),a(_,{type:"primary",onClick:u},{default:t(()=>[ns]),_:1}),a(_,{onClick:k},{default:t(()=>[ls]),_:1})])}}}),x=b({components:{vdpv_0:Y,vdpv_1:ts},setup(o){const s=f(),e=f(),m=[s,e],j=K({vdpv_0Height:0,vdpv_1Height:0});return A(w({toggleCode:i=>{const u="vdpv_"+i;j[u+"Height"]===0?j[u+"Height"]=(m[i].value?m[i].value.offsetHeight:0)||0:j[u+"Height"]=0}},O(j)),{vdpv_0Ref:s,vdpv_1Ref:e})}});x.$vd={matter:{},toc:[{content:"Form \u8868\u5355",anchor:"form-\u8868\u5355",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u8868\u5355\u6821\u9A8C",anchor:"\u8868\u5355\u6821\u9A8C",level:3},{content:"API",anchor:"api",level:2},{content:"Form Props",anchor:"form-props",level:3},{content:"Form Methods",anchor:"form-methods",level:3}]};const ps=x,es={class:"vuedoc"},rs=v('<h1 id="form-\u8868\u5355" data-source-line="3"><a class="markdownIt-Anchor" href="#form-\u8868\u5355">#</a> Form \u8868\u5355</h1><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',3),os={class:"vuedoc-demo"},cs={class:"vuedoc-demo__inner"},us={class:"vuedoc-demo__preview"},hs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},is=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;userName&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password2&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801&quot;</span> /&gt;</span>
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
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&#39;</span> }
    ],
    <span class="hljs-attr">password2</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4&#39;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> val === formValue.value.password
        }
      }
    ],
    <span class="hljs-attr">userName</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }]
  }
  <span class="hljs-keyword">const</span> formEl = ref()
  <span class="hljs-comment">// \u91CD\u7F6E</span>
  <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {
    formEl.value.resetForm()
  }
  <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4</span>
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


</span></code></pre></div>`,1),js=[is],ms=h("h3",{id:"\u8868\u5355\u6821\u9A8C","data-source-line":"71"},[h("a",{class:"markdownIt-Anchor",href:"#\u8868\u5355\u6821\u9A8C"},"#"),q(" \u8868\u5355\u6821\u9A8C")],-1),ds=h("pre",{style:{display:"none"}},null,-1),gs={class:"vuedoc-demo"},qs={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},ks={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},vs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formEl&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;formRules&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;userName&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.userName&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
        <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.password&quot;</span>
        <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;{ placeholder: &#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39; }&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">label</span>&gt;</span>\u624B\u673A\u53F7<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mobile&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;mail&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7BB1&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.mail&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740&quot;</span> /&gt;</span>
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
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.tel&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.city&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;area&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.area&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A\u9009\u62E9&quot;</span> <span class="hljs-attr">verify</span>=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.cascader&quot;</span>
          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
          <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;[
            {
              label: &#39;\u5E7F\u4E1C&#39;,
              value: &#39;1&#39;,
              children: [{ label: &#39;\u5E7F\u5DDE&#39;, value: &#39;2&#39; }]
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
          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.textarea&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;datePicker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;datePicker&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.datePicker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> /&gt;</span>
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
        <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formValue.checkbox&quot;</span>&gt;</span>\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u2026\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit2&quot;</span>&gt;</span>\u4EC5\u5BF9\u7528\u6237\u540D\u5BC6\u7801\u9A8C\u8BC1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetForm&quot;</span>&gt;</span>\u91CD\u7F6E\u8868\u5355<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
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
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> formRules = {
    <span class="hljs-attr">password</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;minLength&#39;</span>, <span class="hljs-attr">len</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&#39;</span> }
    ],
    <span class="hljs-attr">password2</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5BC6\u78012\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> },
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fn&#39;</span>,
        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4&#39;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val: string</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> val === formValue.value.password
        }
      }
    ],
    <span class="hljs-attr">userName</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">mobile</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&#39;</span> },
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mobile&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E&#39;</span> }
    ],
    <span class="hljs-attr">mail</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mail&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E&#39;</span> }],
    <span class="hljs-attr">digits</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;digits&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570&#39;</span> }],
    <span class="hljs-attr">number</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u53EA\u80FD\u8F93\u5165\u6570\u5B57&#39;</span> }],
    <span class="hljs-attr">tel</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tel&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E&#39;</span> }],
    <span class="hljs-attr">city</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">area</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5730\u533A\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">select</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">checkbox</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u5FC5\u987B\u540C\u610F\u534F\u8BAE&#39;</span> }],
    <span class="hljs-attr">checkboxGroup</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">textarea</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;textarea\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">radio</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;radio\u4E0D\u80FD\u4E3A\u7A7A&#39;</span> }],
    <span class="hljs-attr">datePicker</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u65E5\u671F&#39;</span> }],
    <span class="hljs-attr">timePicker</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</span> }],
    <span class="hljs-attr">timeSelect</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</span> }]
  }
  <span class="hljs-keyword">const</span> formEl = ref()
  <span class="hljs-comment">// \u91CD\u7F6E</span>
  <span class="hljs-keyword">const</span> resetForm = <span class="hljs-function">() =&gt;</span> {
    formEl.value.resetForm()
  }
  <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4</span>
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
        alert(<span class="hljs-string">&#39;\u9A8C\u8BC1\u901A\u8FC7&#39;</span>)
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res: string[]</span>) =&gt;</span> {
        alert(res)
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),_s=[vs],bs=v('<h2 id="api" data-source-line="263"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="form-props" data-source-line="265"><a class="markdownIt-Anchor" href="#form-props">#</a> Form Props</h3><table data-source-line="267"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>\u8868\u5355\u503C</td></tr><tr><td>rules</td><td>object</td><td>\u6821\u9A8C\u89C4\u5219</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>\u663E\u793A\u9519\u8BEF\u63D0\u793A</td></tr><tr><td>trigger</td><td>string/change</td><td>\u8868\u5355\u63A7\u4EF6\u6821\u9A8C\u89E6\u53D1\u7C7B\u578B\uFF0Cchange\u548Cblur\u4E24\u79CD</td></tr><tr><td>labelWidth</td><td>string</td><td>label\u7684\u5BBD\u5EA6</td></tr><tr><td>required</td><td>boolean/true</td><td>\u662F\u5426\u6839\u636E\u9A8C\u8BC1\u89C4\u5219\u81EA\u52A8\u751F\u6210\u5FC5\u586B\u6837\u5F0F\u540D</td></tr><tr><td>size</td><td>string</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8\uFF0Cmedium / small / mini</td></tr><tr><td>disabled</td><td>boolean/true</td><td>\u8868\u5355\u7981\u7528\u72B6\u6001\uFF0C\u5F71\u54CD\u5B50\u7EA7formItem,button\u53CAformItem\u4E0B\u6240\u6709\u8868\u5355\u63A7\u4EF6</td></tr></tbody></table><h3 id="form-methods" data-source-line="278"><a class="markdownIt-Anchor" href="#form-methods">#</a> Form Methods</h3><table data-source-line="280"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td></tr><tr><td>resetForm</td><td>\u91CD\u7F6E\u8868\u5355</td></tr><tr><td>setValue</td><td>\u4F7F\u7528resetForm\u529F\u80FD\u65F6\uFF0C\u5F53\u8868\u5355\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u9700\u4F7F\u7528setValue\u8BBE\u7F6E</td></tr></tbody></table>',5);function ys(o,s,e,m,j,k){const i=r("vdpv_0"),u=r("vdpv_1");return y(),V("div",es,[rs,h("div",os,[h("div",cs,[h("div",us,[a(i)]),h("div",{style:B({height:o.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",hs,js,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=c=>o.toggleCode(0))},D(o.vdpv_0Height>0?"hidden":"show"),1)])]),ms,ds,h("div",gs,[h("div",qs,[h("div",fs,[a(u)]),h("div",{style:B({height:o.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[h("div",ks,_s,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=c=>o.toggleCode(1))},D(o.vdpv_1Height>0?"hidden":"show"),1)])]),bs])}var Es=J(ps,[["render",ys]]);export{Es as default};
