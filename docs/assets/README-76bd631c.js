import{r as o,a as p,o as i,c as j,b as t,w as x,f as c,d as R,g as s,y as N,_ as P,n as u,t as m,h as D,i as F,j as d}from"./index-6c3c2d70.js";const V={__name:"README.md.vdpv_0",setup(n){const a=[{type:"text",name:"基本信息"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"请输入password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"请选择时间"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"请选择"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"请选择"}}],e=o(),r=()=>{e.value.validate().then(h=>{console.log(h)}).catch(h=>{console.log(h)})},l=()=>{e.value.resetForm()};return(h,g)=>{const b=p("ak-auto-form"),_=p("ak-button");return i(),j("div",null,[t(b,{data:a,ref_key:"autoFormEl",ref:e},null,512),t(_,{onClick:r},{default:x(()=>[c("submit")]),_:1}),t(_,{onClick:l},{default:x(()=>[c("reset")]),_:1})])}}},M={__name:"README.md.vdpv_1",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",tabs:{},columns:[{tabPane:{label:"选项1"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}}]},{tabPane:{label:"选项2"},list:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a})])}}},S={__name:"README.md.vdpv_2",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"div",control:{class:"div-test"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"请输入用户名"}]},control:{value:""}},{type:"input",name:"密码",formItem:{label:"password",rules:[{type:"required",msg:"请输入密码"}]},control:{type:"password",value:""}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}]}];return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a})])}}},K={__name:"README.md.vdpv_3",setup(n){const a=o({test:"123",radio:"a2"}),e=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}]}}];return(r,l)=>{const h=p("ak-auto-form");return i(),j("div",null,[t(h,{data:e,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=g=>a.value=g)},null,8,["modelValue"])])}}},B={__name:"README.md.vdpv_4",setup(n){const a=o({radio:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],checkbox:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{label:"选项4",value:"a4"},{label:"禁用",value:"a5",disabled:!0}],select:[{label:"选项1",value:1},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4",disabled:!0},{label:"选项5",value:"5"},{label:"6"},{label:"选项7",value:"7"},{label:"选项8",value:"8"},{label:"选项9",value:"9"},{label:"选项10",value:"10",class:"red"}]}),e=o([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[]}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"请选择",options:[]}},{type:"checkbox",name:"checkbox2",formItem:{label:"指定的dict"},control:{value:"",placeholder:"请选择",options:[]},config:{optionsKey:"select"}}]);return(r,l)=>{const h=p("ak-auto-form");return i(),j("div",null,[t(h,{data:e.value,dict:a.value},null,8,["data","dict"])])}}},T={__name:"README.md.vdpv_5",setup(n){const a=o([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json",method:"get",params:{},afterResponse:e=>(console.log("afterResponse"),e)}}]);return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},z={__name:"README.md.vdpv_6",setup(n){const a=o([{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"请输入"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json?name=${text}",method:"get",params:{}}}]);return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},U={__name:"README.md.vdpv_7",setup(n){const a=o([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"}]}},{type:"input",name:"text",formItem:{label:"隐藏"},control:{value:"",placeholder:"请输入"},config:{linkValue:'$.radio==="a2"'}},{type:"input",name:"text",formItem:{label:"禁用"},control:{value:"",placeholder:"radio为选项2时禁用"},config:{linkValue:'$.radio==="a2"',linkResult:"disabled"}}]);return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},G=["value"],J=R({__name:"test",props:{modelValue:{}},emits:["update:modelValue","change"],setup(n,{emit:a}){const e=r=>{const{value:l}=r.target;a("update:modelValue",l),a("change",l)};return(r,l)=>(i(),j("div",null,[s("input",{value:r.modelValue,onChange:e},null,40,G)]))}}),L={__name:"README.md.vdpv_8",setup(n){const a=o([{type:"component",name:"component",formItem:{label:"自定义组件"},control:{value:"6",placeholder:"请输入"},component:N(J)}]);return(e,r)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},A=R({components:{vdpv_0:V,vdpv_1:M,vdpv_2:S,vdpv_3:K,vdpv_4:B,vdpv_5:T,vdpv_6:z,vdpv_7:U,vdpv_8:L},setup(n){const a=o(),e=o(),r=o(),l=o(),h=o(),g=o(),b=o(),_=o(),w=o(),I=[a,e,r,l,h,g,b,_,w],f=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:y=>{const k="vdpv_"+y;f[k+"Height"]===0?f[k+"Height"]=(I[y].value?I[y].value.offsetHeight:0)||0:f[k+"Height"]=0},...F(f),vdpv_0Ref:a,vdpv_1Ref:e,vdpv_2Ref:r,vdpv_3Ref:l,vdpv_4Ref:h,vdpv_5Ref:g,vdpv_6Ref:b,vdpv_7Ref:_,vdpv_8Ref:w}}});A.$vd={matter:{},toc:[{content:"AutoForm 表单",anchor:"autoform-表单",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"Tabs布局",anchor:"tabs布局",level:3},{content:"Div布局",anchor:"div布局",level:3},{content:"使用v-model设置初始值",anchor:"使用v-model设置初始值",level:3},{content:"使用dict设置选项值",anchor:"使用dict设置选项值",level:3},{content:"使用url方式请求options",anchor:"使用url方式请求options",level:3},{content:"url获取options时带动态参数",anchor:"url获取options时带动态参数",level:3},{content:"联动显示隐藏或禁用",anchor:"联动显示隐藏或禁用",level:3},{content:"自定义组件",anchor:"自定义组件",level:3},{content:"API",anchor:"api",level:2},{content:"AutoForm Props",anchor:"autoform-props",level:3},{content:"AutoForm Event",anchor:"autoform-event",level:3},{content:"AutoForm Methods",anchor:"autoform-methods",level:3},{content:"AutoForm Data",anchor:"autoform-data",level:3},{content:"data.config",anchor:"dataconfig",level:2}]};const O=A,Q={class:"vuedoc"},W=d('<h1 id="autoform-表单" data-source-line="3"><a class="markdownIt-Anchor" href="#autoform-表单">#</a> AutoForm 表单</h1><p data-source-line="5">通过json数据快速创建表单，支持格栅和tabs布局</p><h3 id="基本使用" data-source-line="7"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><pre style="display:none;"></pre>',4),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},as=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;autoFormEl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;基本信息&#39;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
        <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入用户名&#39;</span> }]
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;password&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;password&#39;</span>,
        <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入password&#39;</span> }]
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;password&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
        ]
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;checkbox&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: [],
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
        ]
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;datePicker&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;datePicker&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;datePicker&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择时间&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;select&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>,
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
        ]
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;switch&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;switch&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;switch&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">false</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;textarea&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;textarea&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;textarea&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;timePicker&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;timePicker&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;timePicker&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;timeSelect&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;timeSelect&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;timeSelect&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>
      }
    }
  ]
  <span class="hljs-keyword">const</span> autoFormEl = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    autoFormEl.value
      .validate()
      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(res)
      })
  }
  <span class="hljs-keyword">const</span> reset = <span class="hljs-function">() =&gt;</span> {
    autoFormEl.value.resetForm()
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ns=[as],ls=s("h3",{id:"tabs布局","data-source-line":"188"},[s("a",{class:"markdownIt-Anchor",href:"#tabs布局"},"#"),c(" Tabs布局")],-1),ts=s("pre",{style:{display:"none"}},null,-1),ps={class:"vuedoc-demo"},es={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},rs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},os=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;test&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tabs&#39;</span>,
      <span class="hljs-attr">tabs</span>: {},
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">tabPane</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>
          },
          <span class="hljs-attr">list</span>: [
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName2&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
                <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入用户名&#39;</span> }]
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
              }
            }
          ]
        },
        {
          <span class="hljs-attr">tabPane</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>
          },
          <span class="hljs-attr">list</span>: [
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName2&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName1&#39;</span>
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
              }
            },
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName5&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName2&#39;</span>
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
              }
            }
          ]
        }
      ]
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),hs=[os],ds=s("h3",{id:"div布局","data-source-line":"264"},[s("a",{class:"markdownIt-Anchor",href:"#div布局"},"#"),c(" Div布局")],-1),is=s("p",{"data-source-line":"266"},"使用div将指定的组件包起来，可实现联动或通过编写样式实现不同布局",-1),js=s("pre",{style:{display:"none"}},null,-1),us={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},gs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},_s=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;test&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;div&#39;</span>,
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;div-test&#39;</span>
      },
      <span class="hljs-attr">list</span>: [
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName2&#39;</span>,
          <span class="hljs-attr">formItem</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
            <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入用户名&#39;</span> }]
          },
          <span class="hljs-attr">control</span>: {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
          }
        },
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;密码&#39;</span>,
          <span class="hljs-attr">formItem</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;password&#39;</span>,
            <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;请输入密码&#39;</span> }]
          },
          <span class="hljs-attr">control</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;password&#39;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
          }
        },
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
          <span class="hljs-attr">formItem</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;checkbox&#39;</span>
          },
          <span class="hljs-attr">control</span>: {
            <span class="hljs-attr">value</span>: [],
            <span class="hljs-attr">options</span>: [
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
            ]
          }
        }
      ]
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),bs=[_s],fs=s("h3",{id:"使用v-model设置初始值","data-source-line":"339"},[s("a",{class:"markdownIt-Anchor",href:"#使用v-model设置初始值"},"#"),c(" 使用v-model设置初始值")],-1),ys=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},xs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},qs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;model&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> model = ref({ <span class="hljs-attr">test</span>: <span class="hljs-string">&#39;123&#39;</span>, <span class="hljs-attr">radio</span>: <span class="hljs-string">&#39;a2&#39;</span> })
  <span class="hljs-keyword">const</span> data = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;test&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
        ]
      }
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Rs=[qs],As=d('<h3 id="使用dict设置选项值" data-source-line="383"><a class="markdownIt-Anchor" href="#使用dict设置选项值">#</a> 使用dict设置选项值</h3><p data-source-line="385">可设置<code>optionsKey</code>指定从<code>dict</code>里选择对应的数据项，默认通过<code>name</code>的值从<code>dict</code>里匹配。当设置<code>optionsKey=false</code>时，则不匹配</p><pre style="display:none;"></pre>',3),$s={class:"vuedoc-demo"},Hs={class:"vuedoc-demo__inner"},Es={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ns=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:dict</span>=<span class="hljs-string">&quot;dict&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> dict = ref({
    <span class="hljs-attr">radio</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
    ],
    <span class="hljs-attr">checkbox</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
    ],
    <span class="hljs-attr">select</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项7&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项8&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项9&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项10&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
    ]
  })
  <span class="hljs-keyword">const</span> data = ref([
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: []
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;checkbox&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: [],
        <span class="hljs-attr">options</span>: []
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;select&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>,
        <span class="hljs-attr">options</span>: []
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox2&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;指定的dict&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请选择&#39;</span>,
        <span class="hljs-attr">options</span>: []
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">optionsKey</span>: <span class="hljs-string">&#39;select&#39;</span> <span class="hljs-comment">// 可从dict里使用指定的key</span>
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ps=[Ns],Ds=s("h3",{id:"使用url方式请求options","data-source-line":"478"},[s("a",{class:"markdownIt-Anchor",href:"#使用url方式请求options"},"#"),c(" 使用url方式请求options")],-1),Fs=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},Ms={class:"vuedoc-demo__inner"},Ss={class:"vuedoc-demo__preview"},Ks={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Bs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> data = ref([
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: []
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;./static/mock/testData.json&#39;</span>,
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;get&#39;</span>,
        <span class="hljs-attr">params</span>: {}, <span class="hljs-comment">// 请求的参数</span>
        <span class="hljs-attr">afterResponse</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> { <span class="hljs-comment">// 请求结果，可对数据处理后返回</span>
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;afterResponse&#39;</span>)
          <span class="hljs-keyword">return</span> res
        }
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ts=[Bs],zs=s("h3",{id:"url获取options时带动态参数","data-source-line":"514"},[s("a",{class:"markdownIt-Anchor",href:"#url获取options时带动态参数"},"#"),c(" url获取options时带动态参数")],-1),Us=s("p",{"data-source-line":"516"},[c("使用url方式获取options时可带一个动态参数，如"),s("code",null,"name=${text}"),c("，其中text为当前表单name为text的组件，当该组件值发生改变时，会重新请求接口获取")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ls={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ws=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> data = ref([
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: []
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;./static/mock/testData.json?name=\${text}&#39;</span>,
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;get&#39;</span>,
        <span class="hljs-attr">params</span>: {}
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Xs=[Ws],Ys=s("h3",{id:"联动显示隐藏或禁用","data-source-line":"559"},[s("a",{class:"markdownIt-Anchor",href:"#联动显示隐藏或禁用"},"#"),c(" 联动显示隐藏或禁用")],-1),Zs=s("pre",{style:{display:"none"}},null,-1),sa={class:"vuedoc-demo"},aa={class:"vuedoc-demo__inner"},na={class:"vuedoc-demo__preview"},la={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},ta=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> data = ref([
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;radio&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> }
        ]
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;隐藏&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入&#39;</span>
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;$.radio===&quot;a2&quot;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;radio为选项2时禁用&#39;</span>
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;$.radio===&quot;a2&quot;&#39;</span>,
        <span class="hljs-attr">linkResult</span>: <span class="hljs-string">&#39;disabled&#39;</span>
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),pa=[ta],ea=s("h3",{id:"自定义组件","data-source-line":"619"},[s("a",{class:"markdownIt-Anchor",href:"#自定义组件"},"#"),c(" 自定义组件")],-1),ca=s("p",{"data-source-line":"621"},[s("code",null,"type='component'"),c("可设置为自定义组件。自定义组件应有"),s("code",null,"v-model"),c("和"),s("code",null,"change"),c("事件")],-1),ra=s("pre",{style:{display:"none"}},null,-1),oa={class:"vuedoc-demo"},ha={class:"vuedoc-demo__inner"},da={class:"vuedoc-demo__preview"},ia={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},ja=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref, markRaw } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> test <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./test.vue&#39;</span>
  <span class="hljs-keyword">const</span> data = ref([
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;component&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;component&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;自定义组件&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;6&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入&#39;</span>
      },
      <span class="hljs-attr">component</span>: markRaw(test)
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ua=[ja],ma=d('<h2 id="api" data-source-line="650"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="autoform-props" data-source-line="652"><a class="markdownIt-Anchor" href="#autoform-props">#</a> AutoForm Props</h3><table data-source-line="654"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>当前表单的值</td></tr><tr><td>data</td><td>object</td><td>表单数据</td></tr><tr><td>formData</td><td>object</td><td>表单props参数设置，详见<code>form</code>表单</td></tr><tr><td>dict</td><td>object/array</td><td>字典，适用于radio,checkbox,select等，当选项没有设置时则使用dict</td></tr></tbody></table><h3 id="autoform-event" data-source-line="661"><a class="markdownIt-Anchor" href="#autoform-event">#</a> AutoForm Event</h3><table data-source-line="663"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>组件改变事件function(val,name)</td></tr></tbody></table><h3 id="autoform-methods" data-source-line="667"><a class="markdownIt-Anchor" href="#autoform-methods">#</a> AutoForm Methods</h3><table data-source-line="669"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>对单个表单项进行校验的方法，Promise返回验证结果</td></tr><tr><td>resetForm</td><td>重置表单</td></tr></tbody></table><h3 id="autoform-data" data-source-line="674"><a class="markdownIt-Anchor" href="#autoform-data">#</a> AutoForm Data</h3><table data-source-line="676"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>组件类型，支持input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component</td></tr><tr><td>name</td><td>string</td><td>表单控件字段名，唯一性</td></tr><tr><td>formItem</td><td>object</td><td>组件formItem的props</td></tr><tr><td>control</td><td>object</td><td>对应类type型的props</td></tr><tr><td>config</td><td>object</td><td>配置信息</td></tr><tr><td>columns</td><td>array</td><td>type=tabs时有效，用于布局，表示多分多少列/有多少tabs</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs时有效，tabs的相关props</td></tr><tr><td>columns.list</td><td>array</td><td>type=tabs时有效，当前列下所有组件</td></tr></tbody></table><h2 id="dataconfig" data-source-line="687"><a class="markdownIt-Anchor" href="#dataconfig">#</a> data.config</h2>',10),va={"data-source-line":"689"},ga=s("thead",null,[s("tr",null,[s("th",null,"类型"),s("th",null,"类型"),s("th",null,"说明")])],-1),_a=s("td",null,"linkValue",-1),ba=s("td",null,"string",-1),fa={class:"katex"},ya={class:"katex-mathml"},ka=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0em"}}),s("span",{class:"strut bottom",style:{height:"0em","vertical-align":"0em"}}),s("span",{class:"base"})],-1),wa=s("tr",null,[s("td",null,"linkResult"),s("td",null,"string"),s("td",null,[c("联动显示结果，可选"),s("code",null,"disabled"),c("，默认隐藏")])],-1),Ia=s("tr",null,[s("td",null,"optionsKey"),s("td",null,"boolean"),s("td",null,"当前项options数据关联字典数据的标识，为false时表示不关联")],-1),xa=s("tr",null,[s("td",null,"url"),s("td",null,"string"),s("td",null,[c("通过url获取数据，可使用"),s("code",null,"${text}"),c("带一个动态参数")])],-1),qa=s("tr",null,[s("td",null,"method"),s("td",null,"string"),s("td",null,"可选get或post")],-1),Ra=s("tr",null,[s("td",null,"params"),s("td",null,"object"),s("td",null,"通过url获取数据请求参数，绝对false时不请求")],-1),Aa=s("tr",null,[s("td",null,"afterResponse"),s("td",null,"function"),s("td",null,"请求结果方法")],-1);function $a(n,a,e,r,l,h){const g=p("vdpv_0"),b=p("vdpv_1"),_=p("vdpv_2"),w=p("vdpv_3"),I=p("vdpv_4"),f=p("vdpv_5"),q=p("vdpv_6"),y=p("vdpv_7"),k=p("vdpv_8"),$=p("mrow"),H=p("annotation"),E=p("semantics"),C=p("math");return i(),j("div",Q,[W,s("div",X,[s("div",Y,[s("div",Z,[t(g)]),s("div",{style:u({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ss,ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=v=>n.toggleCode(0))},m(n.vdpv_0Height>0?"hidden":"show"),1)])]),ls,ts,s("div",ps,[s("div",es,[s("div",cs,[t(b)]),s("div",{style:u({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",rs,hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=v=>n.toggleCode(1))},m(n.vdpv_1Height>0?"hidden":"show"),1)])]),ds,is,js,s("div",us,[s("div",ms,[s("div",vs,[t(_)]),s("div",{style:u({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",gs,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=v=>n.toggleCode(2))},m(n.vdpv_2Height>0?"hidden":"show"),1)])]),fs,ys,s("div",ks,[s("div",ws,[s("div",Is,[t(w)]),s("div",{style:u({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",xs,Rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=v=>n.toggleCode(3))},m(n.vdpv_3Height>0?"hidden":"show"),1)])]),As,s("div",$s,[s("div",Hs,[s("div",Es,[t(I)]),s("div",{style:u({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,Ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=v=>n.toggleCode(4))},m(n.vdpv_4Height>0?"hidden":"show"),1)])]),Ds,Fs,s("div",Vs,[s("div",Ms,[s("div",Ss,[t(f)]),s("div",{style:u({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ks,Ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=v=>n.toggleCode(5))},m(n.vdpv_5Height>0?"hidden":"show"),1)])]),zs,Us,Gs,s("div",Js,[s("div",Ls,[s("div",Os,[t(q)]),s("div",{style:u({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qs,Xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=v=>n.toggleCode(6))},m(n.vdpv_6Height>0?"hidden":"show"),1)])]),Ys,Zs,s("div",sa,[s("div",aa,[s("div",na,[t(y)]),s("div",{style:u({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",la,pa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=v=>n.toggleCode(7))},m(n.vdpv_7Height>0?"hidden":"show"),1)])]),ea,ca,ra,s("div",oa,[s("div",ha,[s("div",da,[t(k)]),s("div",{style:u({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",ia,ua,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=v=>n.toggleCode(8))},m(n.vdpv_8Height>0?"hidden":"show"),1)])]),ma,s("table",va,[ga,s("tbody",null,[s("tr",null,[_a,ba,s("td",null,[c("联动条件设置,"),s("span",fa,[s("span",ya,[t(C,null,{default:x(()=>[t(E,null,{default:x(()=>[t($),t(H,{encoding:"application/x-tex"})]),_:1})]),_:1})]),ka]),c("表示当前表单的值")])]),wa,Ia,xa,qa,Ra,Aa])])])}const Ea=P(O,[["render",$a]]);export{Ea as default};
