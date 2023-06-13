import{C as f}from"./codePreview-0428c270.js";import{h as d,r as y,o as g,c as v,f as a,t as m,b as n,u as p,w as r,e as s,g as w}from"./index-96df29ae.js";/* empty css                                                                    */const i=[{value:"广东",label:"广东",children:[{value:"广州",label:"广州",children:[{value:"天河",label:"天河"},{value:"白云",label:"白云"},{value:"越秀",label:"越秀"},{value:"海珠",label:"海珠"}]},{value:"深圳",label:"深圳",children:[{value:"罗湖区",label:"罗湖区"},{value:"宝安区",label:"宝安区"},{value:"南山区",label:"南山区"},{value:"龙岗区",label:"龙岗区"},{value:"盐田区",label:"盐田区"}]},{value:"东莞",label:"东莞",children:[{value:"长安",label:"长安"},{value:"虎门",label:"虎门"},{value:"茶山",label:"茶山"}]},{label:"禁用测试",disabled:!0,value:"1",children:[{label:"禁用测试2",value:"2"}]}]},{value:"北京",label:"北京",children:[{value:"西城区",label:"西城区"},{value:"崇文区",label:"崇文区"},{value:"宣武区",label:"宣武区"},{value:"朝阳区",label:"朝阳区"},{value:"丰台区",label:"丰台区"},{value:"海淀区",label:"海淀区"}]},{value:"上海",label:"上海",children:[{value:"黄浦区",label:"黄浦区"},{value:"卢湾区",label:"卢湾区"},{value:"徐汇区",label:"徐汇区"},{value:"广州1",label:"广州"}]}],V={__name:"README.md.Virtual88fa639b",setup(_){const l=d([]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},$={__name:"README.md.Virtual7e10c4f6",setup(_){const l=d(["广东,广州,白云"]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},z={__name:"README.md.Virtual5e86d592",setup(_){const l=d(["广东,广州,白云"]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},A={__name:"README.md.Virtual741056d7",setup(_){const l=d(["广东,广州,白云"]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),clear:!0},null,8,["modelValue","options"])])}}},x=a("p",null,"使用`collapseTags`折叠多选项",-1),E={__name:"README.md.Virtualdf394997",setup(_){const l=d(["广东,广州,白云","上海,黄蒲区"]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),multiple:!0},null,8,["modelValue","options"]),x,n(e,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),placeholder:"请选择",options:p(i),multiple:!0,collapseTags:""},null,8,["modelValue","options"])])}}},C=a("p",null,"单选可搜索",-1),U=a("p",null,"多选可搜索",-1),T={__name:"README.md.Virtual9cb3e582",setup(_){const l=d(["广东,广州,白云"]);return(h,t)=>{const e=y("ak-cascader");return g(),v("div",null,[C,n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),filterable:""},null,8,["modelValue","options"]),U,n(e,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),placeholder:"请选择",options:p(i),filterable:"",multiple:""},null,8,["modelValue","options"])])}}},D=a("br",null,null,-1),M=a("br",null,null,-1),R=a("br",null,null,-1),L=a("br",null,null,-1),S=a("br",null,null,-1),B=a("br",null,null,-1),N=a("p",null,"可搜索异步加载",-1),P={__name:"README.md.Virtuald146d9ba",setup(_){const l=d(["广东,广州,白云"]),h=d([]),t=d([]),e=d([]),c=(j,o)=>{setTimeout(()=>{let b=[];j||(b=[{value:"广东",label:"广东",children:[]},{value:"北京",label:"北京",children:[]},{value:"上海",label:"上海"}]),j&&j.value==="广东"&&(b=[{value:"广州",label:"广州"},{value:"深圳",label:"深圳"}]),j&&j.value==="广州"&&(b=[{value:"天河",label:"天河"},{value:"白云",label:"白云"}]),o(b)},1e3)},u=j=>{j&&(e.value=[{value:"广东",label:"广东",children:[{value:"深圳",label:"深圳"}]}])};return(j,o)=>{const b=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(b,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=k=>l.value=k),placeholder:"请选择",lazy:"","lazy-load":c,onSearchChange:u},null,8,["modelValue"]),D,M,R,a("p",null,"当前值："+m(h.value),1),n(b,{modelValue:h.value,"onUpdate:modelValue":o[1]||(o[1]=k=>h.value=k),placeholder:"请选择（没有初始值）",lazy:"","lazy-load":c},null,8,["modelValue"]),L,S,B,N,a("p",null,"当前值："+m(t.value),1),n(b,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=k=>t.value=k),placeholder:"请选择",lazy:"","lazy-load":c,options:e.value,filterable:"",onSearchChange:u},null,8,["modelValue","options"])])}}},H=a("br",null,null,-1),I=a("br",null,null,-1),K=a("br",null,null,-1),O=a("br",null,null,-1),q=a("br",null,null,-1),F=a("br",null,null,-1),G=a("br",null,null,-1),J=a("br",null,null,-1),Q=a("br",null,null,-1),W={__name:"README.md.Virtualdf844ecc",setup(_){const l=d(["广东,广州,白云"]),h=d([]),t=d(["广东,广州,白云","广东,深圳"]),e=d([]);return(c,u)=>{const j=y("ak-cascader");return g(),v("div",null,[a("p",null,"当前值："+m(l.value),1),n(j,{checkAny:"",modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=o=>l.value=o),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"]),H,I,K,a("p",null,"当前值："+m(h.value),1),n(j,{checkAny:"",modelValue:h.value,"onUpdate:modelValue":u[1]||(u[1]=o=>h.value=o),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"]),O,q,F,a("p",null,"当前值："+m(t.value),1),n(j,{modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value=o),placeholder:"请选择",multiple:"",options:p(i),checkAny:""},null,8,["modelValue","options"]),G,J,Q,a("p",null,"当前值："+m(e.value),1),n(j,{modelValue:e.value,"onUpdate:modelValue":u[3]||(u[3]=o=>e.value=o),placeholder:"请选择",multiple:"",options:p(i),checkAny:""},null,8,["modelValue","options"])])}}},X={class:"marked-body"},Y=a("h1",{id:"cascader-级联选择器"},"Cascader 级联选择器",-1),Z=a("h3",{id:"基础用法"},"基础用法",-1),ss=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),as=a("h3",{id:"默认初始值"},"默认初始值",-1),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ns=a("h3",{id:"禁用选项"},"禁用选项",-1),ts=a("p",null,[s("通过在数据源中设置 "),a("code",null,"disabled"),s(" 字段来声明该选项是禁用的")],-1),es=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),cs=a("h3",{id:"可清空"},"可清空",-1),ps=a("p",null,[s("设置 "),a("code",null,"clear"),s(" 可用于清空选择")],-1),os=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},":clear"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),rs=a("h3",{id:"多选并可折叠选择"},"多选并可折叠选择",-1),hs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},":multiple"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("使用`collapseTags`折叠多选项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},":multiple"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
      `),a("span",{class:"hljs-attr"},"collapseTags"),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(", "),a("span",{class:"hljs-string"},"'上海,黄蒲区'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ds=a("h3",{id:"可搜索"},"可搜索",-1),js=a("p",null,[s("开启"),a("code",null,"filterable"),s("可以快捷地搜索选项并选择")],-1),is=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("单选可搜索"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"filterable"),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("多选可搜索"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"filterable"),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),us=a("h3",{id:"异步加载"},"异步加载",-1),ms=a("p",null,[s("通过"),a("code",null,"lazy"),s("开启异步加载，并通过"),a("code",null,"lazyload"),s("来设置加载数据源的方法。 "),a("code",null,"lazyload"),s("方法有两个参数，第一个参数"),a("code",null,"node"),s("为当前点击的节点，第二个"),a("code",null,"resolve"),s("为数据加载完成的回调(必须调用)")],-1),gs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},"lazy"),s(`
      `),a("span",{class:"hljs-attr"},":lazy-load"),s("="),a("span",{class:"hljs-string"},'"lazyLoad"'),s(`
      @`),a("span",{class:"hljs-attr"},"searchChange"),s("="),a("span",{class:"hljs-string"},'"searchChange"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value2 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择（没有初始值）"'),s(`
      `),a("span",{class:"hljs-attr"},"lazy"),s(`
      `),a("span",{class:"hljs-attr"},":lazy-load"),s("="),a("span",{class:"hljs-string"},'"lazyLoad"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("可搜索异步加载"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value3 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},"lazy"),s(`
      `),a("span",{class:"hljs-attr"},":lazy-load"),s("="),a("span",{class:"hljs-string"},'"lazyLoad"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"filterable"),s(`
      @`),a("span",{class:"hljs-attr"},"searchChange"),s("="),a("span",{class:"hljs-string"},'"searchChange"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"lazyLoad"),s(" = ("),a("span",{class:"hljs-params"},"obj, resolve"),s(`) => {
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-keyword"},"let"),s(` temp = []
      `),a("span",{class:"hljs-keyword"},"if"),s(` (!obj) {
        `),a("span",{class:"hljs-comment"},"// 加载第一级"),s(`
        temp = [
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: []
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: []
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(`
          }
        ]
        `),a("span",{class:"hljs-comment"},"//resolve(temp)"),s(`
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (obj && obj."),a("span",{class:"hljs-property"},"value"),s(" === "),a("span",{class:"hljs-string"},"'广东'"),s(`) {
        temp = [
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`
          }
        ]
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (obj && obj."),a("span",{class:"hljs-property"},"value"),s(" === "),a("span",{class:"hljs-string"},"'广州'"),s(`) {
        temp = [
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'天河'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'白云'"),s(`,
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云'"),s(`
          }
        ]
      }
      `),a("span",{class:"hljs-title function_"},"resolve"),s(`(temp)
    }, `),a("span",{class:"hljs-number"},"1000"),s(`)
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"searchChange"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
    `),a("span",{class:"hljs-comment"},"// console.log('12')"),s(`
    `),a("span",{class:"hljs-keyword"},"if"),s(` (val) {
      options.`),a("span",{class:"hljs-property"},"value"),s(` = [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`
            }
          ]
        }
      ]
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),vs=a("h3",{id:"选择任意项"},"选择任意项",-1),_s=a("p",null,[s("使用"),a("code",null,"checkAny"),s("可选择任意项")],-1),bs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"checkAny"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value2 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"checkAny"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value3 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"checkAny"),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前值：{{ value4 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"checkAny"),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" options "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demo.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(", "),a("span",{class:"hljs-string"},"'广东,深圳'"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value4 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),fs=w('<h2 id="api">API</h2><h3 id="cascader">Cascader</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>array</td><td>显示的值</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>multiple</td><td>boolean/false</td><td>多选模式</td></tr><tr><td>collapseTags</td><td>boolean/false</td><td>多选模式下是否折叠Tag</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索选项</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr><tr><td>options</td><td>object</td><td>下拉面板选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的<code>label</code>和<code>value</code>属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>showAllLevels</td><td>boolean/true</td><td>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</td></tr><tr><td>lazy</td><td>boolean/false</td><td>是否动态加载子节点，需与 <code>lazyLoad</code> 方法结合使用</td></tr><tr><td>lazyLoad</td><td>function</td><td>加载动态数据的方法，仅在 <code>lazy</code> 为 <code>true</code> 时有效,function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)</td></tr><tr><td>checkAny</td><td>boolean/false</td><td>启用该功能后，选择任意一级选项。</td></tr><tr><td>emptyText</td><td>string</td><td>无下拉数据提示文案</td></tr></tbody></table><h3 id="cascader-event">Cascader Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择事件</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="cascader-options">Cascader Options</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>选项名称</td></tr><tr><td>value</td><td>String/number</td><td>选项对应的值，应唯一</td></tr><tr><td>disabled</td><td>boolean</td><td>禁用当前项</td></tr><tr><td>children</td><td>Array</td><td>子级数据，见自定义数据格式</td></tr></tbody></table>',7),Vs={__name:"README",setup(_){return(l,h)=>(g(),v("div",X,[Y,Z,n(p(f),{code:""},{code:r(()=>[ss]),default:r(()=>[n(V)]),_:1}),as,n(p(f),{code:""},{code:r(()=>[ls]),default:r(()=>[n($)]),_:1}),ns,ts,n(p(f),{code:""},{code:r(()=>[es]),default:r(()=>[n(z)]),_:1}),cs,ps,n(p(f),{code:""},{code:r(()=>[os]),default:r(()=>[n(A)]),_:1}),rs,n(p(f),{code:""},{code:r(()=>[hs]),default:r(()=>[n(E)]),_:1}),ds,js,n(p(f),{code:""},{code:r(()=>[is]),default:r(()=>[n(T)]),_:1}),us,ms,n(p(f),{code:""},{code:r(()=>[gs]),default:r(()=>[n(P)]),_:1}),vs,_s,n(p(f),{code:""},{code:r(()=>[bs]),default:r(()=>[n(W)]),_:1}),fs]))}};export{Vs as default};
