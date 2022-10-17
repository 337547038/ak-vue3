import{r,a as p,o as i,c as j,b as t,w as x,f as c,d as R,h as s,y as N,_ as P,g as D,t as F,n as u,i as m,j as d}from"./index.1ec213e4.js";const V={__name:"README.md.vdpv_0",setup(n){const a=[{type:"text",name:"\u57FA\u672C\u4FE1\u606F"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}}],e=r(),o=()=>{e.value.validate().then(h=>{console.log(h)}).catch(h=>{console.log(h)})},l=()=>{e.value.resetForm()};return(h,g)=>{const b=p("ak-auto-form"),_=p("ak-button");return i(),j("div",null,[t(b,{data:a,ref_key:"autoFormEl",ref:e},null,512),t(_,{onClick:o},{default:x(()=>[c("submit")]),_:1}),t(_,{onClick:l},{default:x(()=>[c("reset")]),_:1})])}}},M={__name:"README.md.vdpv_1",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",tabs:{},columns:[{tabPane:{label:"\u9009\u98791"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}}]},{tabPane:{label:"\u9009\u98792"},list:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a})])}}},S={__name:"README.md.vdpv_2",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"div",control:{class:"div-test"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}},{type:"input",name:"\u5BC6\u7801",formItem:{label:"password",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},control:{type:"password",value:""}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}}]}];return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a})])}}},K={__name:"README.md.vdpv_3",setup(n){const a=r({test:"123",radio:"a2"}),e=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}}];return(o,l)=>{const h=p("ak-auto-form");return i(),j("div",null,[t(h,{data:e,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=g=>a.value=g)},null,8,["modelValue"])])}}},B={__name:"README.md.vdpv_4",setup(n){const a=r({radio:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}],checkbox:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}],select:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}]}),e=r([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[]}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[]}},{type:"checkbox",name:"checkbox2",formItem:{label:"\u6307\u5B9A\u7684dict"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[]},config:{optionsKey:"select"}}]);return(o,l)=>{const h=p("ak-auto-form");return i(),j("div",null,[t(h,{data:e.value,dict:a.value},null,8,["data","dict"])])}}},T={__name:"README.md.vdpv_5",setup(n){const a=r([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json",method:"get",params:{},afterResponse:e=>(console.log("afterResponse"),e)}}]);return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},z={__name:"README.md.vdpv_6",setup(n){const a=r([{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json?name=${text}",method:"get",params:{}}}]);return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},U={__name:"README.md.vdpv_7",setup(n){const a=r([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"}]}},{type:"input",name:"text",formItem:{label:"\u9690\u85CF"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"},config:{linkValue:'$.radio==="a2"'}},{type:"input",name:"text",formItem:{label:"\u7981\u7528"},control:{value:"",placeholder:"radio\u4E3A\u9009\u98792\u65F6\u7981\u7528"},config:{linkValue:'$.radio==="a2"',linkResult:"disabled"}}]);return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},G=["value"],J=R({__name:"test",props:{modelValue:null},emits:["update:modelValue","change"],setup(n,{emit:a}){const e=o=>{const{value:l}=o.target;a("update:modelValue",l),a("change",l)};return(o,l)=>(i(),j("div",null,[s("input",{value:n.modelValue,onChange:e},null,40,G)]))}}),L={__name:"README.md.vdpv_8",setup(n){const a=r([{type:"component",name:"component",formItem:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},control:{value:"6",placeholder:"\u8BF7\u8F93\u5165"},component:N(J)}]);return(e,o)=>{const l=p("ak-auto-form");return i(),j("div",null,[t(l,{data:a.value},null,8,["data"])])}}},A=R({components:{vdpv_0:V,vdpv_1:M,vdpv_2:S,vdpv_3:K,vdpv_4:B,vdpv_5:T,vdpv_6:z,vdpv_7:U,vdpv_8:L},setup(n){const a=r(),e=r(),o=r(),l=r(),h=r(),g=r(),b=r(),_=r(),w=r(),I=[a,e,o,l,h,g,b,_,w],f=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:y=>{const k="vdpv_"+y;f[k+"Height"]===0?f[k+"Height"]=(I[y].value?I[y].value.offsetHeight:0)||0:f[k+"Height"]=0},...F(f),vdpv_0Ref:a,vdpv_1Ref:e,vdpv_2Ref:o,vdpv_3Ref:l,vdpv_4Ref:h,vdpv_5Ref:g,vdpv_6Ref:b,vdpv_7Ref:_,vdpv_8Ref:w}}});A.$vd={matter:{},toc:[{content:"AutoForm \u8868\u5355",anchor:"autoform-\u8868\u5355",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"Tabs\u5E03\u5C40",anchor:"tabs\u5E03\u5C40",level:3},{content:"Div\u5E03\u5C40",anchor:"div\u5E03\u5C40",level:3},{content:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C",anchor:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C",level:3},{content:"\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C",anchor:"\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C",level:3},{content:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options",anchor:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options",level:3},{content:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570",anchor:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570",level:3},{content:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528",anchor:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528",level:3},{content:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:3},{content:"API",anchor:"api",level:2},{content:"AutoForm Props",anchor:"autoform-props",level:3},{content:"AutoForm Event",anchor:"autoform-event",level:3},{content:"AutoForm Methods",anchor:"autoform-methods",level:3},{content:"AutoForm Data",anchor:"autoform-data",level:3},{content:"data.config",anchor:"dataconfig",level:2}]};const O=A,Q={class:"vuedoc"},W=d('<h1 id="autoform-\u8868\u5355" data-source-line="3"><a class="markdownIt-Anchor" href="#autoform-\u8868\u5355">#</a> AutoForm \u8868\u5355</h1><p data-source-line="5">\u901A\u8FC7json\u6570\u636E\u5FEB\u901F\u521B\u5EFA\u8868\u5355\uFF0C\u652F\u6301\u683C\u6805\u548Ctabs\u5E03\u5C40</p><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',4),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},as=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u57FA\u672C\u4FE1\u606F&#39;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;test&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
        <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span> }]
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
        <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165password&#39;</span> }]
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
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
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
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</span>
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>,
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98795&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98797&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98798&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98799&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u987910&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>
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

</span></code></pre></div>`,1),ns=[as],ls=s("h3",{id:"tabs\u5E03\u5C40","data-source-line":"188"},[s("a",{class:"markdownIt-Anchor",href:"#tabs\u5E03\u5C40"},"#"),c(" Tabs\u5E03\u5C40")],-1),ts=s("pre",{style:{display:"none"}},null,-1),ps={class:"vuedoc-demo"},es={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},rs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},os=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>
          },
          <span class="hljs-attr">list</span>: [
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName2&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
                <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span> }]
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
              }
            }
          ]
        },
        {
          <span class="hljs-attr">tabPane</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>
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

</span></code></pre></div>`,1),hs=[os],ds=s("h3",{id:"div\u5E03\u5C40","data-source-line":"264"},[s("a",{class:"markdownIt-Anchor",href:"#div\u5E03\u5C40"},"#"),c(" Div\u5E03\u5C40")],-1),is=s("p",{"data-source-line":"266"},"\u4F7F\u7528div\u5C06\u6307\u5B9A\u7684\u7EC4\u4EF6\u5305\u8D77\u6765\uFF0C\u53EF\u5B9E\u73B0\u8054\u52A8\u6216\u901A\u8FC7\u7F16\u5199\u6837\u5F0F\u5B9E\u73B0\u4E0D\u540C\u5E03\u5C40",-1),js=s("pre",{style:{display:"none"}},null,-1),us={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},gs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},_s=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
            <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span> }]
          },
          <span class="hljs-attr">control</span>: {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>
          }
        },
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5BC6\u7801&#39;</span>,
          <span class="hljs-attr">formItem</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;password&#39;</span>,
            <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span> }]
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
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
            ]
          }
        }
      ]
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),bs=[_s],fs=s("h3",{id:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C","data-source-line":"339"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C"},"#"),c(" \u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C")],-1),ys=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},xs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},qs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
        ]
      }
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Rs=[qs],As=d('<h3 id="\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C" data-source-line="383"><a class="markdownIt-Anchor" href="#\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C">#</a> \u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C</h3><p data-source-line="385">\u53EF\u8BBE\u7F6E<code>optionsKey</code>\u6307\u5B9A\u4ECE<code>dict</code>\u91CC\u9009\u62E9\u5BF9\u5E94\u7684\u6570\u636E\u9879\uFF0C\u9ED8\u8BA4\u901A\u8FC7<code>name</code>\u7684\u503C\u4ECE<code>dict</code>\u91CC\u5339\u914D\u3002\u5F53\u8BBE\u7F6E<code>optionsKey=false</code>\u65F6\uFF0C\u5219\u4E0D\u5339\u914D</p><pre style="display:none;"></pre>',3),$s={class:"vuedoc-demo"},Hs={class:"vuedoc-demo__inner"},Es={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ns=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:dict</span>=<span class="hljs-string">&quot;dict&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> dict = ref({
    <span class="hljs-attr">radio</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
    ],
    <span class="hljs-attr">checkbox</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
    ],
    <span class="hljs-attr">select</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98795&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;5&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;6&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98797&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;7&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98798&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;8&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98799&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;9&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u987910&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;10&#39;</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;red&#39;</span> }
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>,
        <span class="hljs-attr">options</span>: []
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox2&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6307\u5B9A\u7684dict&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>,
        <span class="hljs-attr">options</span>: []
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">optionsKey</span>: <span class="hljs-string">&#39;select&#39;</span> <span class="hljs-comment">// \u53EF\u4ECEdict\u91CC\u4F7F\u7528\u6307\u5B9A\u7684key</span>
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ps=[Ns],Ds=s("h3",{id:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options","data-source-line":"478"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options"},"#"),c(" \u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options")],-1),Fs=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},Ms={class:"vuedoc-demo__inner"},Ss={class:"vuedoc-demo__preview"},Ks={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Bs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">params</span>: {}, <span class="hljs-comment">// \u8BF7\u6C42\u7684\u53C2\u6570</span>
        <span class="hljs-attr">afterResponse</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> { <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF0C\u53EF\u5BF9\u6570\u636E\u5904\u7406\u540E\u8FD4\u56DE</span>
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;afterResponse&#39;</span>)
          <span class="hljs-keyword">return</span> res
        }
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ts=[Bs],zs=s("h3",{id:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570","data-source-line":"514"},[s("a",{class:"markdownIt-Anchor",href:"#url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570"},"#"),c(" url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570")],-1),Us=s("p",{"data-source-line":"516"},[c("\u4F7F\u7528url\u65B9\u5F0F\u83B7\u53D6options\u65F6\u53EF\u5E26\u4E00\u4E2A\u52A8\u6001\u53C2\u6570\uFF0C\u5982"),s("code",null,"name=${text}"),c("\uFF0C\u5176\u4E2Dtext\u4E3A\u5F53\u524D\u8868\u5355name\u4E3Atext\u7684\u7EC4\u4EF6\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Js={class:"vuedoc-demo"},Ls={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Qs={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ws=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165&#39;</span>
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

</span></code></pre></div>`,1),Xs=[Ws],Ys=s("h3",{id:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528","data-source-line":"559"},[s("a",{class:"markdownIt-Anchor",href:"#\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528"},"#"),c(" \u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528")],-1),Zs=s("pre",{style:{display:"none"}},null,-1),sa={class:"vuedoc-demo"},aa={class:"vuedoc-demo__inner"},na={class:"vuedoc-demo__preview"},la={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},ta=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span> }
        ]
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9690\u85CF&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165&#39;</span>
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;$.radio===&quot;a2&quot;&#39;</span>
      }
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
      <span class="hljs-attr">formItem</span>: {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;radio\u4E3A\u9009\u98792\u65F6\u7981\u7528&#39;</span>
      },
      <span class="hljs-attr">config</span>: {
        <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;$.radio===&quot;a2&quot;&#39;</span>,
        <span class="hljs-attr">linkResult</span>: <span class="hljs-string">&#39;disabled&#39;</span>
      }
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),pa=[ta],ea=s("h3",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"619"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),c(" \u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),ca=s("p",{"data-source-line":"621"},[s("code",null,"type='component'"),c("\u53EF\u8BBE\u7F6E\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5E94\u6709"),s("code",null,"v-model"),c("\u548C"),s("code",null,"change"),c("\u4E8B\u4EF6")],-1),ra=s("pre",{style:{display:"none"}},null,-1),oa={class:"vuedoc-demo"},ha={class:"vuedoc-demo__inner"},da={class:"vuedoc-demo__preview"},ia={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},ja=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u7EC4\u4EF6&#39;</span>
      },
      <span class="hljs-attr">control</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;6&#39;</span>,
        <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165&#39;</span>
      },
      <span class="hljs-attr">component</span>: markRaw(test)
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ua=[ja],ma=d('<h2 id="api" data-source-line="650"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="autoform-props" data-source-line="652"><a class="markdownIt-Anchor" href="#autoform-props">#</a> AutoForm Props</h3><table data-source-line="654"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>\u5F53\u524D\u8868\u5355\u7684\u503C</td></tr><tr><td>data</td><td>object</td><td>\u8868\u5355\u6570\u636E</td></tr><tr><td>formData</td><td>object</td><td>\u8868\u5355props\u53C2\u6570\u8BBE\u7F6E\uFF0C\u8BE6\u89C1<code>form</code>\u8868\u5355</td></tr><tr><td>dict</td><td>object/array</td><td>\u5B57\u5178\uFF0C\u9002\u7528\u4E8Eradio,checkbox,select\u7B49\uFF0C\u5F53\u9009\u9879\u6CA1\u6709\u8BBE\u7F6E\u65F6\u5219\u4F7F\u7528dict</td></tr></tbody></table><h3 id="autoform-event" data-source-line="661"><a class="markdownIt-Anchor" href="#autoform-event">#</a> AutoForm Event</h3><table data-source-line="663"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u7EC4\u4EF6\u6539\u53D8\u4E8B\u4EF6function(val,name)</td></tr></tbody></table><h3 id="autoform-methods" data-source-line="667"><a class="markdownIt-Anchor" href="#autoform-methods">#</a> AutoForm Methods</h3><table data-source-line="669"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td></tr><tr><td>resetForm</td><td>\u91CD\u7F6E\u8868\u5355</td></tr></tbody></table><h3 id="autoform-data" data-source-line="674"><a class="markdownIt-Anchor" href="#autoform-data">#</a> AutoForm Data</h3><table data-source-line="676"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component</td></tr><tr><td>name</td><td>string</td><td>\u8868\u5355\u63A7\u4EF6\u5B57\u6BB5\u540D\uFF0C\u552F\u4E00\u6027</td></tr><tr><td>formItem</td><td>object</td><td>\u7EC4\u4EF6formItem\u7684props</td></tr><tr><td>control</td><td>object</td><td>\u5BF9\u5E94\u7C7Btype\u578B\u7684props</td></tr><tr><td>config</td><td>object</td><td>\u914D\u7F6E\u4FE1\u606F</td></tr><tr><td>columns</td><td>array</td><td>type=tabs\u65F6\u6709\u6548\uFF0C\u7528\u4E8E\u5E03\u5C40\uFF0C\u8868\u793A\u591A\u5206\u591A\u5C11\u5217/\u6709\u591A\u5C11tabs</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs\u65F6\u6709\u6548\uFF0Ctabs\u7684\u76F8\u5173props</td></tr><tr><td>columns.list</td><td>array</td><td>type=tabs\u65F6\u6709\u6548\uFF0C\u5F53\u524D\u5217\u4E0B\u6240\u6709\u7EC4\u4EF6</td></tr></tbody></table><h2 id="dataconfig" data-source-line="687"><a class="markdownIt-Anchor" href="#dataconfig">#</a> data.config</h2>',10),va={"data-source-line":"689"},ga=s("thead",null,[s("tr",null,[s("th",null,"\u7C7B\u578B"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u8BF4\u660E")])],-1),_a=s("td",null,"linkValue",-1),ba=s("td",null,"string",-1),fa={class:"katex"},ya={class:"katex-mathml"},ka=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0em"}}),s("span",{class:"strut bottom",style:{height:"0em","vertical-align":"0em"}}),s("span",{class:"base"})],-1),wa=s("tr",null,[s("td",null,"linkResult"),s("td",null,"string"),s("td",null,[c("\u8054\u52A8\u663E\u793A\u7ED3\u679C\uFF0C\u53EF\u9009"),s("code",null,"disabled"),c("\uFF0C\u9ED8\u8BA4\u9690\u85CF")])],-1),Ia=s("tr",null,[s("td",null,"optionsKey"),s("td",null,"boolean"),s("td",null,"\u5F53\u524D\u9879options\u6570\u636E\u5173\u8054\u5B57\u5178\u6570\u636E\u7684\u6807\u8BC6\uFF0C\u4E3Afalse\u65F6\u8868\u793A\u4E0D\u5173\u8054")],-1),xa=s("tr",null,[s("td",null,"url"),s("td",null,"string"),s("td",null,[c("\u901A\u8FC7url\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F7F\u7528"),s("code",null,"${text}"),c("\u5E26\u4E00\u4E2A\u52A8\u6001\u53C2\u6570")])],-1),qa=s("tr",null,[s("td",null,"method"),s("td",null,"string"),s("td",null,"\u53EF\u9009get\u6216post")],-1),Ra=s("tr",null,[s("td",null,"params"),s("td",null,"object"),s("td",null,"\u901A\u8FC7url\u83B7\u53D6\u6570\u636E\u8BF7\u6C42\u53C2\u6570\uFF0C\u7EDD\u5BF9false\u65F6\u4E0D\u8BF7\u6C42")],-1),Aa=s("tr",null,[s("td",null,"afterResponse"),s("td",null,"function"),s("td",null,"\u8BF7\u6C42\u7ED3\u679C\u65B9\u6CD5")],-1);function $a(n,a,e,o,l,h){const g=p("vdpv_0"),b=p("vdpv_1"),_=p("vdpv_2"),w=p("vdpv_3"),I=p("vdpv_4"),f=p("vdpv_5"),q=p("vdpv_6"),y=p("vdpv_7"),k=p("vdpv_8"),$=p("mrow"),H=p("annotation"),E=p("semantics"),C=p("math");return i(),j("div",Q,[W,s("div",X,[s("div",Y,[s("div",Z,[t(g)]),s("div",{style:u({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ss,ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=v=>n.toggleCode(0))},m(n.vdpv_0Height>0?"hidden":"show"),1)])]),ls,ts,s("div",ps,[s("div",es,[s("div",cs,[t(b)]),s("div",{style:u({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",rs,hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=v=>n.toggleCode(1))},m(n.vdpv_1Height>0?"hidden":"show"),1)])]),ds,is,js,s("div",us,[s("div",ms,[s("div",vs,[t(_)]),s("div",{style:u({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",gs,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=v=>n.toggleCode(2))},m(n.vdpv_2Height>0?"hidden":"show"),1)])]),fs,ys,s("div",ks,[s("div",ws,[s("div",Is,[t(w)]),s("div",{style:u({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",xs,Rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=v=>n.toggleCode(3))},m(n.vdpv_3Height>0?"hidden":"show"),1)])]),As,s("div",$s,[s("div",Hs,[s("div",Es,[t(I)]),s("div",{style:u({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,Ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=v=>n.toggleCode(4))},m(n.vdpv_4Height>0?"hidden":"show"),1)])]),Ds,Fs,s("div",Vs,[s("div",Ms,[s("div",Ss,[t(f)]),s("div",{style:u({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ks,Ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=v=>n.toggleCode(5))},m(n.vdpv_5Height>0?"hidden":"show"),1)])]),zs,Us,Gs,s("div",Js,[s("div",Ls,[s("div",Os,[t(q)]),s("div",{style:u({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qs,Xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=v=>n.toggleCode(6))},m(n.vdpv_6Height>0?"hidden":"show"),1)])]),Ys,Zs,s("div",sa,[s("div",aa,[s("div",na,[t(y)]),s("div",{style:u({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",la,pa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=v=>n.toggleCode(7))},m(n.vdpv_7Height>0?"hidden":"show"),1)])]),ea,ca,ra,s("div",oa,[s("div",ha,[s("div",da,[t(k)]),s("div",{style:u({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",ia,ua,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=v=>n.toggleCode(8))},m(n.vdpv_8Height>0?"hidden":"show"),1)])]),ma,s("table",va,[ga,s("tbody",null,[s("tr",null,[_a,ba,s("td",null,[c("\u8054\u52A8\u6761\u4EF6\u8BBE\u7F6E,"),s("span",fa,[s("span",ya,[t(C,null,{default:x(()=>[t(E,null,{default:x(()=>[t($),t(H,{encoding:"application/x-tex"})]),_:1})]),_:1})]),ka]),c("\u8868\u793A\u5F53\u524D\u8868\u5355\u7684\u503C")])]),wa,Ia,xa,qa,Ra,Aa])])])}const Ea=P(O,[["render",$a]]);export{Ea as default};
