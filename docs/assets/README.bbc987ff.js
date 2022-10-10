import{r as c,a as e,o as d,c as i,b as t,w as q,g as r,m as A,_ as H,d as $,h as E,t as C,e as s,n as u,i as v,j}from"./index.63698d83.js";import{_ as N}from"./test.vue_vue_type_script_setup_true_lang.3f7ed045.js";const P={__name:"README.md.vdpv_0",setup(n){const a=[{type:"text",name:"\u57FA\u672C\u4FE1\u606F"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}}],p=c(),o=()=>{p.value.validate().then(h=>{console.log(h)}).catch(h=>{console.log(h)})},l=()=>{p.value.resetForm()};return(h,g)=>{const b=e("ak-auto-form"),_=e("ak-button");return d(),i("div",null,[t(b,{data:a,ref_key:"autoFormEl",ref:p},null,512),t(_,{onClick:o},{default:q(()=>[r("submit")]),_:1}),t(_,{onClick:l},{default:q(()=>[r("reset")]),_:1})])}}},D={__name:"README.md.vdpv_1",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",tabs:{},columns:[{tabPane:{label:"\u9009\u98791"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}}]},{tabPane:{label:"\u9009\u98792"},list:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a})])}}},F={__name:"README.md.vdpv_2",setup(n){const a=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"div",control:{class:"div-test"},list:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}},{type:"input",name:"\u5BC6\u7801",formItem:{label:"password",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},control:{type:"password",value:""}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}}]}];return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a})])}}},M={__name:"README.md.vdpv_3",setup(n){const a=c({test:"123",radio:"a2"}),p=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}}];return(o,l)=>{const h=e("ak-auto-form");return d(),i("div",null,[t(h,{data:p,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=g=>a.value=g)},null,8,["modelValue"])])}}},V={__name:"README.md.vdpv_4",setup(n){const a=c({radio:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}],checkbox:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}],select:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}]}),p=c([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[]}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[]}}]);return(o,l)=>{const h=e("ak-auto-form");return d(),i("div",null,[t(h,{data:p.value,dict:a.value},null,8,["data","dict"])])}}},S={__name:"README.md.vdpv_5",setup(n){const a=c([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json",method:"get",params:{},afterResponse:p=>(console.log("afterResponse"),p)}}]);return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a.value},null,8,["data"])])}}},B={__name:"README.md.vdpv_6",setup(n){const a=c([{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[]},config:{url:"./static/mock/testData.json?name=${text}",method:"get",params:{}}}]);return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a.value},null,8,["data"])])}}},T={__name:"README.md.vdpv_7",setup(n){const a=c([{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"}]}},{type:"input",name:"text",formItem:{label:"\u9690\u85CF"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"},config:{linkValue:'$.radio==="a2"'}},{type:"input",name:"text",formItem:{label:"\u7981\u7528"},control:{value:"",placeholder:"radio\u4E3A\u9009\u98792\u65F6\u7981\u7528"},config:{linkValue:'$.radio==="a2"',linkResult:"disabled"}}]);return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a.value},null,8,["data"])])}}},z={__name:"README.md.vdpv_8",setup(n){const a=c([{type:"component",name:"component",formItem:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},control:{value:"6",placeholder:"\u8BF7\u8F93\u5165"},component:A(N)}]);return(p,o)=>{const l=e("ak-auto-form");return d(),i("div",null,[t(l,{data:a.value},null,8,["data"])])}}},R=$({components:{vdpv_0:P,vdpv_1:D,vdpv_2:F,vdpv_3:M,vdpv_4:V,vdpv_5:S,vdpv_6:B,vdpv_7:T,vdpv_8:z},setup(n){const a=c(),p=c(),o=c(),l=c(),h=c(),g=c(),b=c(),_=c(),w=c(),I=[a,p,o,l,h,g,b,_,w],f=E({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0});return{toggleCode:y=>{const k="vdpv_"+y;f[k+"Height"]===0?f[k+"Height"]=(I[y].value?I[y].value.offsetHeight:0)||0:f[k+"Height"]=0},...C(f),vdpv_0Ref:a,vdpv_1Ref:p,vdpv_2Ref:o,vdpv_3Ref:l,vdpv_4Ref:h,vdpv_5Ref:g,vdpv_6Ref:b,vdpv_7Ref:_,vdpv_8Ref:w}}});R.$vd={matter:{},toc:[{content:"AutoForm \u8868\u5355",anchor:"autoform-\u8868\u5355",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"Tabs\u5E03\u5C40",anchor:"tabs\u5E03\u5C40",level:3},{content:"Div\u5E03\u5C40",anchor:"div\u5E03\u5C40",level:3},{content:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C",anchor:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C",level:3},{content:"\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C",anchor:"\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C",level:3},{content:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options",anchor:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options",level:3},{content:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570",anchor:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570",level:3},{content:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528",anchor:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528",level:3},{content:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:3},{content:"API",anchor:"api",level:2},{content:"AutoForm Props",anchor:"autoform-props",level:3},{content:"AutoForm Event",anchor:"autoform-event",level:3},{content:"AutoForm Methods",anchor:"autoform-methods",level:3},{content:"AutoForm Data",anchor:"autoform-data",level:3}]};const U=R,G={class:"vuedoc"},J=j('<h1 id="autoform-\u8868\u5355" data-source-line="3"><a class="markdownIt-Anchor" href="#autoform-\u8868\u5355">#</a> AutoForm \u8868\u5355</h1><p data-source-line="5">\u901A\u8FC7json\u6570\u636E\u5FEB\u901F\u521B\u5EFA\u8868\u5355\uFF0C\u652F\u6301\u683C\u6805\u548Ctabs\u5E03\u5C40</p><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',4),K={class:"vuedoc-demo"},L={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},Q={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},W=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),X=[W],Y=s("h3",{id:"tabs\u5E03\u5C40","data-source-line":"188"},[s("a",{class:"markdownIt-Anchor",href:"#tabs\u5E03\u5C40"},"#"),r(" Tabs\u5E03\u5C40")],-1),Z=s("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ts=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),ps=[ts],es=s("h3",{id:"div\u5E03\u5C40","data-source-line":"264"},[s("a",{class:"markdownIt-Anchor",href:"#div\u5E03\u5C40"},"#"),r(" Div\u5E03\u5C40")],-1),cs=s("p",{"data-source-line":"266"},"\u4F7F\u7528div\u5C06\u6307\u5B9A\u7684\u7EC4\u4EF6\u5305\u8D77\u6765\uFF0C\u53EF\u5B9E\u73B0\u8054\u52A8\u6216\u901A\u8FC7\u7F16\u5199\u6837\u5F0F\u5B9E\u73B0\u4E0D\u540C\u5E03\u5C40",-1),rs=s("pre",{style:{display:"none"}},null,-1),os={class:"vuedoc-demo"},hs={class:"vuedoc-demo__inner"},js={class:"vuedoc-demo__preview"},ds={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},is=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),us=[is],vs=s("h3",{id:"\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C","data-source-line":"339"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C"},"#"),r(" \u4F7F\u7528v-model\u8BBE\u7F6E\u521D\u59CB\u503C")],-1),ms=s("pre",{style:{display:"none"}},null,-1),gs={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},bs={class:"vuedoc-demo__preview"},fs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ys=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),ks=[ys],ws=s("h3",{id:"\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C","data-source-line":"383"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C"},"#"),r(" \u4F7F\u7528dict\u8BBE\u7F6E\u9009\u9879\u503C")],-1),Is=s("pre",{style:{display:"none"}},null,-1),xs={class:"vuedoc-demo"},qs={class:"vuedoc-demo__inner"},Rs={class:"vuedoc-demo__preview"},As={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Hs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
    }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),$s=[Hs],Es=s("h3",{id:"\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options","data-source-line":"461"},[s("a",{class:"markdownIt-Anchor",href:"#\u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options"},"#"),r(" \u4F7F\u7528url\u65B9\u5F0F\u8BF7\u6C42options")],-1),Cs=s("pre",{style:{display:"none"}},null,-1),Ns={class:"vuedoc-demo"},Ps={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Fs={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ms=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Vs=[Ms],Ss=s("h3",{id:"url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570","data-source-line":"497"},[s("a",{class:"markdownIt-Anchor",href:"#url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570"},"#"),r(" url\u83B7\u53D6options\u65F6\u5E26\u52A8\u6001\u53C2\u6570")],-1),Bs=s("p",{"data-source-line":"499"},[r("\u4F7F\u7528url\u65B9\u5F0F\u83B7\u53D6options\u65F6\u53EF\u5E26\u4E00\u4E2A\u52A8\u6001\u53C2\u6570\uFF0C\u5982"),s("code",null,"name=${text}"),r("\uFF0C\u5176\u4E2Dtext\u4E3A\u5F53\u524D\u8868\u5355name\u4E3Atext\u7684\u7EC4\u4EF6\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6")],-1),Ts=s("pre",{style:{display:"none"}},null,-1),zs={class:"vuedoc-demo"},Us={class:"vuedoc-demo__inner"},Gs={class:"vuedoc-demo__preview"},Js={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ks=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ls=[Ks],Os=s("h3",{id:"\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528","data-source-line":"542"},[s("a",{class:"markdownIt-Anchor",href:"#\u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528"},"#"),r(" \u8054\u52A8\u663E\u793A\u9690\u85CF\u6216\u7981\u7528")],-1),Qs=s("pre",{style:{display:"none"}},null,-1),Ws={class:"vuedoc-demo"},Xs={class:"vuedoc-demo__inner"},Ys={class:"vuedoc-demo__preview"},Zs={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},sa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),aa=[sa],na=s("h3",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"602"},[s("a",{class:"markdownIt-Anchor",href:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),r(" \u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),la=s("p",{"data-source-line":"604"},[s("code",null,"type='component'"),r("\u53EF\u8BBE\u7F6E\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5E94\u6709"),s("code",null,"v-model"),r("\u548C"),s("code",null,"change"),r("\u4E8B\u4EF6")],-1),ta=s("pre",{style:{display:"none"}},null,-1),pa={class:"vuedoc-demo"},ea={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},ra={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},oa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),ha=[oa],ja=j('<h2 id="api" data-source-line="633"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="autoform-props" data-source-line="635"><a class="markdownIt-Anchor" href="#autoform-props">#</a> AutoForm Props</h3><table data-source-line="637"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>object</td><td>\u5F53\u524D\u8868\u5355\u7684\u503C</td></tr><tr><td>data</td><td>object</td><td>\u8868\u5355\u6570\u636E</td></tr><tr><td>formData</td><td>object</td><td>\u8868\u5355props\u53C2\u6570\u8BBE\u7F6E\uFF0C\u8BE6\u89C1<code>form</code>\u8868\u5355</td></tr><tr><td>dict</td><td>object/array</td><td>\u5B57\u5178\uFF0C\u9002\u7528\u4E8Eradio,checkbox,select\u7B49\uFF0C\u5F53\u9009\u9879\u6CA1\u6709\u8BBE\u7F6E\u65F6\u5219\u4F7F\u7528dict</td></tr></tbody></table><h3 id="autoform-event" data-source-line="644"><a class="markdownIt-Anchor" href="#autoform-event">#</a> AutoForm Event</h3><table data-source-line="646"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u7EC4\u4EF6\u6539\u53D8\u4E8B\u4EF6function(val,name)</td></tr></tbody></table><h3 id="autoform-methods" data-source-line="650"><a class="markdownIt-Anchor" href="#autoform-methods">#</a> AutoForm Methods</h3><table data-source-line="652"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td></tr><tr><td>resetForm</td><td>\u91CD\u7F6E\u8868\u5355</td></tr></tbody></table><h3 id="autoform-data" data-source-line="657"><a class="markdownIt-Anchor" href="#autoform-data">#</a> AutoForm Data</h3><table data-source-line="659"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,tabs,text,div,component</td></tr><tr><td>name</td><td>string</td><td>\u8868\u5355\u63A7\u4EF6\u5B57\u6BB5\u540D\uFF0C\u552F\u4E00\u6027</td></tr><tr><td>formItem</td><td>object</td><td>\u7EC4\u4EF6formItem\u7684props</td></tr><tr><td>control</td><td>object</td><td>\u5BF9\u5E94\u7C7Btype\u578B\u7684props</td></tr><tr><td>config</td><td>object</td><td>\u914D\u7F6E\u4FE1\u606F</td></tr><tr><td>columns</td><td>array</td><td>type=tabs\u65F6\u6709\u6548\uFF0C\u7528\u4E8E\u5E03\u5C40\uFF0C\u8868\u793A\u591A\u5206\u591A\u5C11\u5217/\u6709\u591A\u5C11tabs</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs\u65F6\u6709\u6548\uFF0Ctabs\u7684\u76F8\u5173props</td></tr><tr><td>columns.list</td><td>array</td><td>type=tabs\u65F6\u6709\u6548\uFF0C\u5F53\u524D\u5217\u4E0B\u6240\u6709\u7EC4\u4EF6</td></tr></tbody></table>',9);function da(n,a,p,o,l,h){const g=e("vdpv_0"),b=e("vdpv_1"),_=e("vdpv_2"),w=e("vdpv_3"),I=e("vdpv_4"),f=e("vdpv_5"),x=e("vdpv_6"),y=e("vdpv_7"),k=e("vdpv_8");return d(),i("div",G,[J,s("div",K,[s("div",L,[s("div",O,[t(g)]),s("div",{style:u({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Q,X,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=m=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),Y,Z,s("div",ss,[s("div",as,[s("div",ns,[t(b)]),s("div",{style:u({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=m=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),es,cs,rs,s("div",os,[s("div",hs,[s("div",js,[t(_)]),s("div",{style:u({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",ds,us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=m=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),vs,ms,s("div",gs,[s("div",_s,[s("div",bs,[t(w)]),s("div",{style:u({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",fs,ks,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=m=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),ws,Is,s("div",xs,[s("div",qs,[s("div",Rs,[t(I)]),s("div",{style:u({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,$s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=m=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])]),Es,Cs,s("div",Ns,[s("div",Ps,[s("div",Ds,[t(f)]),s("div",{style:u({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fs,Vs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=m=>n.toggleCode(5))},v(n.vdpv_5Height>0?"hidden":"show"),1)])]),Ss,Bs,Ts,s("div",zs,[s("div",Us,[s("div",Gs,[t(x)]),s("div",{style:u({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Js,Ls,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=m=>n.toggleCode(6))},v(n.vdpv_6Height>0?"hidden":"show"),1)])]),Os,Qs,s("div",Ws,[s("div",Xs,[s("div",Ys,[t(y)]),s("div",{style:u({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Zs,aa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=m=>n.toggleCode(7))},v(n.vdpv_7Height>0?"hidden":"show"),1)])]),na,la,ta,s("div",pa,[s("div",ea,[s("div",ca,[t(k)]),s("div",{style:u({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",ra,ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=m=>n.toggleCode(8))},v(n.vdpv_8Height>0?"hidden":"show"),1)])]),ja])}const va=H(U,[["render",da]]);export{va as default};
