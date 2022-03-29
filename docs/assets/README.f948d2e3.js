var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,c=(s,a)=>{for(var n in a||(a={}))e.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))t.call(a,n)&&p(s,n,a[n]);return s},o=(s,l)=>a(s,n(l));import{D as h,G as r,a as d,o as u,c as j,b as g,e as i,w as v,i as k,t as m,F as b,r as x,d as _,q as f,U as y}from"./vendor.66660a0e.js";const w={setup(){const s=h({checkbox1:!0,checkbox2:!1,checkbox3:"1",checkbox4:["4"],checkbox5:[]});return c({},r(s))}},q=k("选项1"),V=k("选项2"),C=k("选项3"),R=g("p",null,"选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）",-1),H=k("选项4"),D=k("选项5");w.render=function(s,a,n,l,e,t){const p=d("ak-checkbox");return u(),j(b,null,[g("p",null,[i(p,{modelValue:s.checkbox1,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox1=a)},{default:v((()=>[q])),_:1},8,["modelValue"]),k(" "+m(s.checkbox1),1)]),g("p",null,[i(p,{modelValue:s.checkbox2,"onUpdate:modelValue":a[1]||(a[1]=a=>s.checkbox2=a)},{default:v((()=>[V])),_:1},8,["modelValue"]),k(" "+m(s.checkbox2),1)]),g("p",null,[i(p,{modelValue:s.checkbox3,"onUpdate:modelValue":a[2]||(a[2]=a=>s.checkbox3=a)},{default:v((()=>[C])),_:1},8,["modelValue"]),k(" "+m(s.checkbox3)+"（v-model的值只要为true都会是勾选状态） ",1)]),R,g("p",null,[i(p,{modelValue:s.checkbox4,"onUpdate:modelValue":a[3]||(a[3]=a=>s.checkbox4=a),value:"4"},{default:v((()=>[H])),_:1},8,["modelValue"]),k(" "+m(s.checkbox4),1)]),g("p",null,[i(p,{modelValue:s.checkbox5,"onUpdate:modelValue":a[4]||(a[4]=a=>s.checkbox5=a),value:"5"},{default:v((()=>[D])),_:1},8,["modelValue"]),k(" "+m(s.checkbox5),1)])],64)};const A={setup(){const s=h({checkbox6:!0,checkbox7:!1});return c({},r(s))}},G=k("选项1"),I=k("选项2");A.render=function(s,a,n,l,e,t){const p=d("ak-checkbox");return u(),j(b,null,[g("p",null,[i(p,{modelValue:s.checkbox6,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox6=a),disabled:!0},{default:v((()=>[G])),_:1},8,["modelValue"]),k(" "+m(s.checkbox6),1)]),g("p",null,[i(p,{modelValue:s.checkbox7,"onUpdate:modelValue":a[1]||(a[1]=a=>s.checkbox7=a),disabled:!0},{default:v((()=>[I])),_:1},8,["modelValue"]),k(" "+m(s.checkbox7),1)])],64)};const U={setup(){const s=h({checkbox8:["a1","a6"]});return o(c({},r(s)),{groupData:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}]})}};U.render=function(s,a,n,l,e,t){const p=d("ak-checkbox-group");return u(),j(b,null,[g("p",null,"已选值："+m(s.checkbox8),1),g("p",null,[i(p,{modelValue:s.checkbox8,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox8=a),options:l.groupData},null,8,["modelValue","options"])])],64)};const O={setup(){const s=h({checkbox9:["a5"]});return o(c({},r(s)),{groupData:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}]})}};O.render=function(s,a,n,l,e,t){const p=d("ak-checkbox-group");return u(),j(b,null,[g("p",null,"已选值："+m(s.checkbox9),1),g("p",null,[i(p,{modelValue:s.checkbox9,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox9=a),options:l.groupData,min:2,max:4},null,8,["modelValue","options"])])],64)};const S={setup(){const s=h({checkbox11:["a1"]}),a=x();return o(c({},r(s)),{groupData:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"},{label:"选项3",value:"a3"},{value:"a4"},{label:"禁用",value:"a5",disabled:!0},{label:"勾选禁用",value:"a6",disabled:!0}],checkGroup:a,getValue:()=>{const s=a.value.getValue();console.log(s)}})}},P=k("全选"),E=k("全不选"),$=k("获取值");S.render=function(s,a,n,l,e,t){const p=d("ak-checkbox-group"),c=d("ak-button");return u(),j(b,null,[g("p",null,"已选值："+m(s.checkbox11),1),g("p",null,[i(p,{ref:"checkGroup",modelValue:s.checkbox11,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox11=a),options:l.groupData},null,8,["modelValue","options"])]),g("p",null,[i(c,{onClick:a[1]||(a[1]=a=>s.$refs.checkGroup.toggleSelect(!0))},{default:v((()=>[P])),_:1}),i(c,{onClick:a[2]||(a[2]=a=>s.$refs.checkGroup.toggleSelect(!1))},{default:v((()=>[E])),_:1}),i(c,{onClick:l.getValue},{default:v((()=>[$])),_:1},8,["onClick"])])],64)};const B={setup(){const s=h({checkbox10:["a1"]});return c({},r(s))}},F=k("选项1"),M=k("选项2"),K=k("选项3"),z=k("选项4"),J=k("全选"),L=k("全不选");B.render=function(s,a,n,l,e,t){const p=d("ak-checkbox"),c=d("ak-button");return u(),j(b,null,[g("p",null,"当前选中值："+m(s.checkbox10),1),g("p",null,[i(p,{modelValue:s.checkbox10,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox10=a),value:"a1"},{default:v((()=>[F])),_:1},8,["modelValue"])]),g("p",null,[i(p,{modelValue:s.checkbox10,"onUpdate:modelValue":a[1]||(a[1]=a=>s.checkbox10=a),value:"a2"},{default:v((()=>[M])),_:1},8,["modelValue"])]),g("p",null,[i(p,{modelValue:s.checkbox10,"onUpdate:modelValue":a[2]||(a[2]=a=>s.checkbox10=a),value:"a3"},{default:v((()=>[K])),_:1},8,["modelValue"])]),g("p",null,[i(p,{modelValue:s.checkbox10,"onUpdate:modelValue":a[3]||(a[3]=a=>s.checkbox10=a),value:"a4"},{default:v((()=>[z])),_:1},8,["modelValue"])]),g("p",null,[i(c,{onClick:a[4]||(a[4]=a=>s.checkbox10=["a1","a2","a3","a4"])},{default:v((()=>[J])),_:1}),i(c,{onClick:a[5]||(a[5]=a=>s.checkbox10=[])},{default:v((()=>[L])),_:1})])],64)};const N={setup(){const s=h({checkbox:"",checkbox2:["a1"]});return o(c({},r(s)),{groupData:[{label:"选项1",value:"a1"},{label:"选项2",value:"a2"}],beforeChange:()=>(console.log("return false 阻止勾选"),!1)})}},Q=k("选项1");N.render=function(s,a,n,l,e,t){const p=d("ak-checkbox"),c=d("ak-checkbox-group");return u(),j(b,null,[g("p",null,[i(p,{modelValue:s.checkbox,"onUpdate:modelValue":a[0]||(a[0]=a=>s.checkbox=a),value:"a1",beforeChange:l.beforeChange},{default:v((()=>[Q])),_:1},8,["modelValue","beforeChange"])]),g("p",null,[i(c,{modelValue:s.checkbox2,"onUpdate:modelValue":a[1]||(a[1]=a=>s.checkbox2=a),options:l.groupData,beforeChange:l.beforeChange},null,8,["modelValue","options","beforeChange"])])],64)};const T=_({components:{vdpv_0:w,vdpv_1:A,vdpv_2:U,vdpv_3:O,vdpv_4:S,vdpv_5:B,vdpv_6:N},setup(s){const a=x(),n=x(),l=x(),e=x(),t=x(),p=x(),d=x(),u=[a,n,l,e,t,p,d],j=h({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return o(c({toggleCode:s=>{const a="vdpv_"+s;0===j[a+"Height"]?j[a+"Height"]=(u[s].value?u[s].value.offsetHeight:0)||0:j[a+"Height"]=0}},r(j)),{vdpv_0Ref:a,vdpv_1Ref:n,vdpv_2Ref:l,vdpv_3Ref:e,vdpv_4Ref:t,vdpv_5Ref:p,vdpv_6Ref:d})}});T.$vd={matter:{},toc:[{content:"Checkbox 多选框",anchor:"checkbox-多选框",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"禁用状态",anchor:"禁用状态",level:3},{content:"多选框组",anchor:"多选框组",level:3},{content:"可选项目数量的限制",anchor:"可选项目数量的限制",level:3},{content:"组全选或全不选方法",anchor:"组全选或全不选方法",level:3},{content:"多个单一组成的组",anchor:"多个单一组成的组",level:3},{content:"阻止改变事件",anchor:"阻止改变事件",level:3},{content:"API",anchor:"api",level:2},{content:"Checkbox",anchor:"checkbox",level:3},{content:"Checkbox Event",anchor:"checkbox-event",level:3},{content:"CheckboxGroup",anchor:"checkboxgroup",level:3},{content:"CheckboxGroup Methods",anchor:"checkboxgroup-methods",level:3},{content:"CheckboxGroup Event",anchor:"checkboxgroup-event",level:3}]};const W=T,X={class:"vuedoc  "},Y=y('<h1 id="checkbox-多选框" data-source-line="3"><a class="markdownIt-Anchor" href="#checkbox-多选框">#</a> Checkbox 多选框</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="7">单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。如选中时需要返回指定的值，则添加<code>value</code></p><pre style="display:none;"></pre>',4),Z={class:"vuedoc-demo "},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ls=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox1&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox1}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox2}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox3&quot;</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox3}}（v-model的值只要为true都会是勾选状态）\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>选中时返回指定值（v-model=value或是value存在于v-model数组中，即选中状态）<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox4&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox4}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox5&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>选项5<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox5}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox1</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">checkbox2</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">checkbox3</span>: <span class="hljs-string">&#39;1&#39;</span>,\n      <span class="hljs-attr">checkbox4</span>: [<span class="hljs-string">&#39;4&#39;</span>],\n      <span class="hljs-attr">checkbox5</span>: []\n    })\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],es=g("h3",{id:"禁用状态","data-source-line":"54"},[g("a",{class:"markdownIt-Anchor",href:"#禁用状态"},"#"),k(" 禁用状态")],-1),ts=g("p",{"data-source-line":"56"},"多选框不可用状态",-1),ps=g("pre",{style:{display:"none"}},null,-1),cs={class:"vuedoc-demo "},os={class:"vuedoc-demo__inner"},hs={class:"vuedoc-demo__preview"},rs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ds=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox6&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox6}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox7&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n    {{checkbox7}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox6</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">checkbox7</span>: <span class="hljs-literal">false</span>\n    })\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],us=g("h3",{id:"多选框组","data-source-line":"87"},[g("a",{class:"markdownIt-Anchor",href:"#多选框组"},"#"),k(" 多选框组")],-1),js=g("p",{"data-source-line":"89"},"options中选项label可为空",-1),gs=g("pre",{style:{display:"none"}},null,-1),is={class:"vuedoc-demo "},vs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},ms={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},bs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{checkbox8}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox8&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox8</span>: [<span class="hljs-string">&#39;a1&#39;</span>, <span class="hljs-string">&#39;a6&#39;</span>]\n    })\n    <span class="hljs-keyword">const</span> groupData = [\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span>},\n      {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n    ]\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      groupData\n\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],xs=g("h3",{id:"可选项目数量的限制","data-source-line":"126"},[g("a",{class:"markdownIt-Anchor",href:"#可选项目数量的限制"},"#"),k(" 可选项目数量的限制")],-1),_s=g("p",{"data-source-line":"128"},[k("例子最多可选"),g("code",null,"max=4"),k("，最少需选"),g("code",null,"min=2")],-1),fs=g("pre",{style:{display:"none"}},null,-1),ys={class:"vuedoc-demo "},ws={class:"vuedoc-demo__inner"},qs={class:"vuedoc-demo__preview"},Vs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Cs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{checkbox9}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox9&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox9</span>: [<span class="hljs-string">&#39;a5&#39;</span>]\n    })\n    <span class="hljs-keyword">const</span> groupData = [\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span>},\n      {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n    ]\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      groupData\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],Rs=g("h3",{id:"组全选或全不选方法","data-source-line":"164"},[g("a",{class:"markdownIt-Anchor",href:"#组全选或全不选方法"},"#"),k(" 组全选或全不选方法")],-1),Hs=g("p",{"data-source-line":"166"},[g("code",null,"toggleSelect(true/false)全选或取消全选"),k("，可使用 "),g("code",null,"getValue"),k(" 取方法取得已勾选的项集合")],-1),Ds=g("pre",{style:{display:"none"}},null,-1),As={class:"vuedoc-demo "},Gs={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},Us={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Os=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>已选值：{{ checkbox11 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkGroup&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox11&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.checkGroup.toggleSelect(true)&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.checkGroup.toggleSelect(false)&quot;</span>&gt;</span>全不选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue&quot;</span>&gt;</span>获取值<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox11</span>: [<span class="hljs-string">&#39;a1&#39;</span>]\n    })\n    <span class="hljs-keyword">const</span> groupData = [\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span>},\n      {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;勾选禁用&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a6&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n    ]\n    <span class="hljs-keyword">const</span> checkGroup=ref()\n    <span class="hljs-keyword">const</span> getValue=<span class="hljs-function">()=&gt;</span>{\n      <span class="hljs-keyword">const</span> value=checkGroup.value.getValue()\n      <span class="hljs-built_in">console</span>.log(value)\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      groupData,\n      checkGroup,\n      getValue\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],Ss=g("h3",{id:"多个单一组成的组","data-source-line":"214"},[g("a",{class:"markdownIt-Anchor",href:"#多个单一组成的组"},"#"),k(" 多个单一组成的组")],-1),Ps=g("p",{"data-source-line":"216"},[k("组group有一定的局限性，组内的"),g("code",null,"checkbox"),k("是紧密相连的。由多个单一"),g("code",null,"checkbox"),k("自由组成可实现灵活布局。同时也很方便的实现全选或全不选")],-1),Es=g("pre",{style:{display:"none"}},null,-1),$s={class:"vuedoc-demo "},Bs={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ks=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前选中值：{{checkbox10}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox10&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a1&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox10&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a2&quot;</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox10&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a3&quot;</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox10&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a4&quot;</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkbox10=[&#39;a1&#39;,&#39;a2&#39;,&#39;a3&#39;,&#39;a4&#39;]&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkbox10=[]&quot;</span>&gt;</span>全不选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox10</span>: [<span class="hljs-string">&#39;a1&#39;</span>]\n    })\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],zs=g("h3",{id:"阻止改变事件","data-source-line":"255"},[g("a",{class:"markdownIt-Anchor",href:"#阻止改变事件"},"#"),k(" 阻止改变事件")],-1),Js=g("p",{"data-source-line":"257"},[k("使用"),g("code",null,"beforeChange"),k("可阻止事件改变")],-1),Ls=g("pre",{style:{display:"none"}},null,-1),Ns={class:"vuedoc-demo "},Qs={class:"vuedoc-demo__inner"},Ts={class:"vuedoc-demo__preview"},Ws={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Xs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a1&quot;</span> <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;groupData&quot;</span> <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-checkbox-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">checkbox</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">checkbox2</span>: [<span class="hljs-string">&#39;a1&#39;</span>],\n    })\n    <span class="hljs-keyword">const</span> groupData = [\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>}\n    ]\n    <span class="hljs-keyword">const</span> beforeChange = <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;return false 阻止勾选&#39;</span>)\n      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      groupData,\n      beforeChange\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Ys=y('<h2 id="api" data-source-line="296"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="checkbox" data-source-line="298"><a class="markdownIt-Anchor" href="#checkbox">#</a> Checkbox</h3><table data-source-line="300"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String, Boolean, Array</td><td>选中值</td></tr><tr><td>label</td><td>String</td><td>显示的文本值，也可以是slot形式</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkbox-event" data-source-line="307"><a class="markdownIt-Anchor" href="#checkbox-event">#</a> Checkbox Event</h3><table data-source-line="309"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="checkboxgroup" data-source-line="313"><a class="markdownIt-Anchor" href="#checkboxgroup">#</a> CheckboxGroup</h3><table data-source-line="316"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Array</td><td>当前选中的值</td></tr><tr><td>options</td><td>Array</td><td>选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的label和value属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>max</td><td>number</td><td>可被勾选的 checkbox 的最大数量</td></tr><tr><td>min</td><td>number</td><td>可被勾选的 checkbox 的最小数量</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁用组</td></tr><tr><td>beforeChange</td><td>Function</td><td>点击改变前的事件，返回false阻止事件</td></tr></tbody></table><h3 id="checkboxgroup-methods" data-source-line="326"><a class="markdownIt-Anchor" href="#checkboxgroup-methods">#</a> CheckboxGroup Methods</h3><table data-source-line="328"><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>toggleSelect</td><td>全选true/取消false当前组所有选项</td></tr><tr><td>getValue</td><td>获取当前所有勾选项的集合</td></tr></tbody></table><h3 id="checkboxgroup-event" data-source-line="333"><a class="markdownIt-Anchor" href="#checkboxgroup-event">#</a> CheckboxGroup Event</h3><table data-source-line="335"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table>',11);W.render=function(s,a,n,l,e,t){const p=d("vdpv_0"),c=d("vdpv_1"),o=d("vdpv_2"),h=d("vdpv_3"),r=d("vdpv_4"),v=d("vdpv_5"),k=d("vdpv_6");return u(),j("div",X,[Y,g("div",Z,[g("div",ss,[g("div",as,[i(p)]),g("div",{style:f({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[g("div",ns,ls,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},m(s.vdpv_0Height>0?"hidden":"show"),1)])]),es,ts,ps,g("div",cs,[g("div",os,[g("div",hs,[i(c)]),g("div",{style:f({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[g("div",rs,ds,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},m(s.vdpv_1Height>0?"hidden":"show"),1)])]),us,js,gs,g("div",is,[g("div",vs,[g("div",ks,[i(o)]),g("div",{style:f({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[g("div",ms,bs,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},m(s.vdpv_2Height>0?"hidden":"show"),1)])]),xs,_s,fs,g("div",ys,[g("div",ws,[g("div",qs,[i(h)]),g("div",{style:f({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[g("div",Vs,Cs,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},m(s.vdpv_3Height>0?"hidden":"show"),1)])]),Rs,Hs,Ds,g("div",As,[g("div",Gs,[g("div",Is,[i(r)]),g("div",{style:f({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[g("div",Us,Os,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},m(s.vdpv_4Height>0?"hidden":"show"),1)])]),Ss,Ps,Es,g("div",$s,[g("div",Bs,[g("div",Fs,[i(v)]),g("div",{style:f({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[g("div",Ms,Ks,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},m(s.vdpv_5Height>0?"hidden":"show"),1)])]),zs,Js,Ls,g("div",Ns,[g("div",Qs,[g("div",Ts,[i(k)]),g("div",{style:f({height:s.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[g("div",Ws,Xs,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(6))},m(s.vdpv_6Height>0?"hidden":"show"),1)])]),Ys])};export{W as default};
