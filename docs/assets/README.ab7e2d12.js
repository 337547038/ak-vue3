var q=Object.defineProperty,F=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(n,s,t)=>s in n?q(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,I=(n,s)=>{for(var t in s||(s={}))A.call(s,t)&&k(n,t,s[t]);if(y)for(var t of y(s))P.call(s,t)&&k(n,t,s[t]);return n},w=(n,s)=>F(n,x(s));import{b as u,e as h,o as v,c as b,f as p,w as g,g as d,_ as C,d as E,r as $,t as H,h as a,n as _,i as f,a as m}from"./index.f64dd1e4.js";const V=d("submit"),L=d("setValue"),S=d("reset"),R={setup(n){const s=[{type:"text",name:"\u57FA\u672C\u4FE1\u606F"},{type:"input",name:"text",formItem:{label:"test"},control:{value:"",placeholder:"\u8BF7\u8F93\u5165"}},{type:"input",name:"userName",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}},{type:"input",name:"password",formItem:{label:"password",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165password"}]},control:{value:"",type:"password"}},{type:"radio",name:"radio",formItem:{label:"radio"},control:{value:"",options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"checkbox",name:"checkbox",formItem:{label:"checkbox"},control:{value:[],options:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"}},{type:"select",name:"select",formItem:{label:"select"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"},{label:"\u9009\u98794",value:"4",disabled:!0},{label:"\u9009\u98795",value:"5"},{label:"6"},{label:"\u9009\u98797",value:"7"},{label:"\u9009\u98798",value:"8"},{label:"\u9009\u98799",value:"9"},{label:"\u9009\u987910",value:"10",class:"red"}]}},{type:"switch",name:"switch",formItem:{label:"switch"},control:{value:!1}},{type:"textarea",name:"textarea",formItem:{label:"textarea"},control:{value:""}},{type:"timePicker",name:"timePicker",formItem:{label:"timePicker"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}},{type:"timeSelect",name:"timeSelect",formItem:{label:"timeSelect"},control:{value:"",placeholder:"\u8BF7\u9009\u62E9"}}],t=u(),r=()=>{t.value.validate().then(e=>{console.log(e)}).catch(e=>{console.log(e)})},l=()=>{t.value.setValue({userName:"12345"})},c=()=>{t.value.resetForm()};return(e,o)=>{const j=h("ak-auto-form"),i=h("ak-button");return v(),b("div",null,[p(j,{data:s,ref_key:"autoFormEl",ref:t},null,512),p(i,{onClick:r},{default:g(()=>[V]),_:1}),p(i,{onClick:l},{default:g(()=>[L]),_:1}),p(i,{onClick:c},{default:g(()=>[S]),_:1})])}}},D=d("submit"),M={setup(n){const s=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"grid",columns:[{span:6,controlList:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}}]},{span:6,controlList:[{type:"select",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u9009\u9879",value:1}]}}]},{span:12,controlList:[{type:"radio",name:"userName3",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:"",placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u9009\u98791",value:"a1"}]}}]}]}],t=u(),r=()=>{t.value.validate().then(l=>{console.log(l)}).catch(l=>{console.log(l)})};return(l,c)=>{const e=h("ak-auto-form"),o=h("ak-button");return v(),b("div",null,[p(e,{data:s,ref_key:"autoFormEl",ref:t},null,512),p(o,{onClick:r},{default:g(()=>[D]),_:1})])}}},B={setup(n){const s=[{type:"input",name:"test",formItem:{label:"test"},control:{value:""}},{type:"tabs",columns:[{tabs:{label:"\u9009\u98791"},controlList:[{type:"input",name:"userName2",formItem:{label:"userName",rules:[{type:"required",msg:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},control:{value:""}}]},{tabs:{label:"\u9009\u98792"},controlList:[{type:"input",name:"userName2",formItem:{label:"userName1"},control:{value:""}},{type:"input",name:"userName5",formItem:{label:"userName2"},control:{value:""}}]}]}];return(t,r)=>{const l=h("ak-auto-form");return v(),b("div",null,[p(l,{data:s})])}}},N=E({components:{vdpv_0:R,vdpv_1:M,vdpv_2:B},setup(n){const s=u(),t=u(),r=u(),l=[s,t,r],c=$({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return w(I({toggleCode:o=>{const j="vdpv_"+o;c[j+"Height"]===0?c[j+"Height"]=(l[o].value?l[o].value.offsetHeight:0)||0:c[j+"Height"]=0}},H(c)),{vdpv_0Ref:s,vdpv_1Ref:t,vdpv_2Ref:r})}});N.$vd={matter:{},toc:[{content:"AutoForm \u8868\u5355",anchor:"autoform-\u8868\u5355",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u683C\u6805\u5E03\u5C40",anchor:"\u683C\u6805\u5E03\u5C40",level:3},{content:"Tabs\u5E03\u5C40",anchor:"tabs\u5E03\u5C40",level:3},{content:"API",anchor:"api",level:2},{content:"AutoForm Props",anchor:"autoform-props",level:3},{content:"AutoForm Methods",anchor:"autoform-methods",level:3},{content:"AutoForm Data",anchor:"autoform-data",level:3}]};const T=N,z={class:"vuedoc"},W=m('<h1 id="autoform-\u8868\u5355" data-source-line="3"><a class="markdownIt-Anchor" href="#autoform-\u8868\u5355">#</a> AutoForm \u8868\u5355</h1><p data-source-line="5">\u901A\u8FC7json\u6570\u636E\u5FEB\u901F\u521B\u5EFA\u8868\u5355\uFF0C\u652F\u6301\u683C\u6805\u548Ctabs\u5E03\u5C40</p><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="7"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',4),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},O={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Q=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;autoFormEl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setValue&quot;</span>&gt;</span>setValue<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
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
  <span class="hljs-keyword">const</span> setValue = <span class="hljs-function">() =&gt;</span> {
    autoFormEl.value.setValue({ <span class="hljs-attr">userName</span>: <span class="hljs-string">&#39;12345&#39;</span> })
  }
  <span class="hljs-keyword">const</span> reset = <span class="hljs-function">() =&gt;</span> {
    autoFormEl.value.resetForm()
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),U=[Q],X=a("h3",{id:"\u683C\u6805\u5E03\u5C40","data-source-line":"192"},[a("a",{class:"markdownIt-Anchor",href:"#\u683C\u6805\u5E03\u5C40"},"#"),d(" \u683C\u6805\u5E03\u5C40")],-1),Y=a("pre",{style:{display:"none"}},null,-1),Z={class:"vuedoc-demo"},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ts=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-auto-form</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;autoFormEl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
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
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;grid&#39;</span>,
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">span</span>: <span class="hljs-number">6</span>,
          <span class="hljs-attr">controlList</span>: [
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
          <span class="hljs-attr">span</span>: <span class="hljs-number">6</span>,
          <span class="hljs-attr">controlList</span>: [
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName2&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
                <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span> }]
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
                <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>,
                <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u9879&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> }]
              }
            }
          ]
        },
        {
          <span class="hljs-attr">span</span>: <span class="hljs-number">12</span>,
          <span class="hljs-attr">controlList</span>: [
            {
              <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName3&#39;</span>,
              <span class="hljs-attr">formItem</span>: {
                <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;userName&#39;</span>,
                <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span> }]
              },
              <span class="hljs-attr">control</span>: {
                <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
                <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u9009\u62E9&#39;</span>,
                <span class="hljs-attr">options</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span> }]
              }
            }
          ]
        }
      ]
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
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ls=[ts],ps=a("h3",{id:"tabs\u5E03\u5C40","data-source-line":"288"},[a("a",{class:"markdownIt-Anchor",href:"#tabs\u5E03\u5C40"},"#"),d(" Tabs\u5E03\u5C40")],-1),es=a("pre",{style:{display:"none"}},null,-1),rs={class:"vuedoc-demo"},cs={class:"vuedoc-demo__inner"},os={class:"vuedoc-demo__preview"},hs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},js=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">tabs</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>
          },
          <span class="hljs-attr">controlList</span>: [
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
          <span class="hljs-attr">tabs</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>
          },
          <span class="hljs-attr">controlList</span>: [
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

</span></code></pre></div>`,1),is=[js],ds=m('<h2 id="api" data-source-line="363"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="autoform-props" data-source-line="365"><a class="markdownIt-Anchor" href="#autoform-props">#</a> AutoForm Props</h3><table data-source-line="367"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>object</td><td>\u8868\u5355\u6570\u636E</td></tr><tr><td>showMessage</td><td>boolean/true</td><td>\u663E\u793A\u9519\u8BEF\u63D0\u793A</td></tr><tr><td>trigger</td><td>string/change</td><td>\u8868\u5355\u63A7\u4EF6\u6821\u9A8C\u89E6\u53D1\u7C7B\u578B\uFF0Cchange\u548Cblur\u4E24\u79CD</td></tr><tr><td>labelWidth</td><td>string</td><td>label\u7684\u5BBD\u5EA6</td></tr><tr><td>required</td><td>boolean/true</td><td>\u662F\u5426\u6839\u636E\u9A8C\u8BC1\u89C4\u5219\u81EA\u52A8\u751F\u6210\u5FC5\u586B\u6837\u5F0F\u540D</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u7981\u7528\u8868\u5355\u6240\u6709\u63A7\u4EF6</td></tr></tbody></table><h3 id="autoform-methods" data-source-line="376"><a class="markdownIt-Anchor" href="#autoform-methods">#</a> AutoForm Methods</h3><table data-source-line="378"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u5355\u4E2A\u8868\u5355\u9879\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0CPromise\u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C</td></tr><tr><td>resetForm</td><td>\u91CD\u7F6E\u8868\u5355</td></tr><tr><td>setValue</td><td>\u4F7F\u7528resetForm\u529F\u80FD\u65F6\uFF0C\u5F53\u8868\u5355\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u9700\u4F7F\u7528setValue\u8BBE\u7F6E</td></tr></tbody></table><h3 id="autoform-data" data-source-line="384"><a class="markdownIt-Anchor" href="#autoform-data">#</a> AutoForm Data</h3><table data-source-line="386"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301input,radio,checkbox,datePicker,timePicker,timeSelect,select,switch,textarea,grid,tabs,text</td></tr><tr><td>name</td><td>string</td><td>\u8868\u5355\u63A7\u4EF6\u5B57\u6BB5\u540D\uFF0C\u552F\u4E00\u6027</td></tr><tr><td>formItem</td><td>object</td><td>\u7EC4\u4EF6formItem\u7684props</td></tr><tr><td>control</td><td>object</td><td>\u5BF9\u5E94\u7C7Btype\u578B\u7684props</td></tr><tr><td>columns</td><td>array</td><td>type=grid/tabs\u65F6\u6709\u6548\uFF0C\u7528\u4E8E\u5E03\u5C40\uFF0C\u8868\u591A\u5206\u591A\u5C11\u5217/\u6709\u591A\u5C11tabs</td></tr><tr><td>columns.span</td><td>number</td><td>type=grid\u65F6\u6709\u6548\uFF0C\u5F53\u524D\u680F\u7684\u5BBD\u5EA6\u6BD4\u4F8B</td></tr><tr><td>columns.tabs</td><td>object</td><td>type=tabs\u65F6\u6709\u6548\uFF0Ctabs\u7684\u76F8\u5173props</td></tr><tr><td>columns.controlList</td><td>array</td><td>type=grid/tabs\u65F6\u6709\u6548\uFF0C\u5F53\u524D\u5217\u4E0B\u6240\u6709\u7EC4\u4EF6</td></tr></tbody></table>',7);function us(n,s,t,r,l,c){const e=h("vdpv_0"),o=h("vdpv_1"),j=h("vdpv_2");return v(),b("div",z,[W,a("div",G,[a("div",J,[a("div",K,[p(e)]),a("div",{style:_({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[a("div",O,U,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=i=>n.toggleCode(0))},f(n.vdpv_0Height>0?"hidden":"show"),1)])]),X,Y,a("div",Z,[a("div",ss,[a("div",as,[p(o)]),a("div",{style:_({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[a("div",ns,ls,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=i=>n.toggleCode(1))},f(n.vdpv_1Height>0?"hidden":"show"),1)])]),ps,es,a("div",rs,[a("div",cs,[a("div",os,[p(j)]),a("div",{style:_({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[a("div",hs,is,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=i=>n.toggleCode(2))},f(n.vdpv_2Height>0?"hidden":"show"),1)])]),ds])}var vs=C(T,[["render",us]]);export{vs as default};
