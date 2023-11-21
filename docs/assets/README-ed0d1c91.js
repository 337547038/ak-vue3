import{C as g}from"./vue-4a2b12f2.js";import{r as h,a as C,o as m,c as E,g as a,t as A,b as n,u as p,w as r,d as s,h as _}from"./index-dd3aacc0.js";/* empty css                                                            */const i=[{value:"广东",label:"广东",children:[{value:"广州",label:"广州",children:[{value:"天河",label:"天河"},{value:"白云",label:"白云"},{value:"越秀",label:"越秀"},{value:"海珠",label:"海珠"}]},{value:"深圳",label:"深圳",children:[{value:"罗湖区",label:"罗湖区"},{value:"宝安区",label:"宝安区"},{value:"南山区",label:"南山区"},{value:"龙岗区",label:"龙岗区"},{value:"盐田区",label:"盐田区"}]},{value:"东莞",label:"东莞",children:[{value:"长安",label:"长安"},{value:"虎门",label:"虎门"},{value:"茶山",label:"茶山"}]},{label:"禁用测试",disabled:!0,value:"1",children:[{label:"禁用测试2",value:"2"}]}]},{value:"北京",label:"北京",children:[{value:"西城区",label:"西城区"},{value:"崇文区",label:"崇文区"},{value:"宣武区",label:"宣武区"},{value:"朝阳区",label:"朝阳区"},{value:"丰台区",label:"丰台区"},{value:"海淀区",label:"海淀区"}]},{value:"上海",label:"上海",children:[{value:"黄浦区",label:"黄浦区"},{value:"卢湾区",label:"卢湾区"},{value:"徐汇区",label:"徐汇区"}]}],b={__name:"README.md.Virtual88fa639b",setup(v){const l=h([]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},f={__name:"README.md.Virtual7e10c4f6",setup(v){const l=h(["广东,广州,白云"]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},F={__name:"README.md.Virtual5e86d592",setup(v){const l=h(["广东,广州,白云"]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"])])}}},y={__name:"README.md.Virtual741056d7",setup(v){const l=h(["广东,广州,白云"]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),clear:!0},null,8,["modelValue","options"])])}}},k=a("p",null,"使用`collapseTags`折叠多选项",-1),w={__name:"README.md.Virtual36d62c72",setup(v){const l=h(["广东,广州,白云","上海,黄浦区"]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),multiple:!0},null,8,["modelValue","options"]),k,n(e,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),placeholder:"请选择",options:p(i),multiple:!0,collapseTags:""},null,8,["modelValue","options"])])}}},V=a("p",null,"单选可搜索",-1),z=a("p",null,"多选可搜索",-1),$={__name:"README.md.Virtual9cb3e582",setup(v){const l=h(["广东,广州,白云"]);return(d,t)=>{const e=C("ak-cascader");return m(),E("div",null,[V,n(e,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),placeholder:"请选择",options:p(i),filterable:""},null,8,["modelValue","options"]),z,n(e,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),placeholder:"请选择",options:p(i),filterable:"",multiple:""},null,8,["modelValue","options"])])}}},x=a("br",null,null,-1),U=a("br",null,null,-1),T=a("br",null,null,-1),L=a("br",null,null,-1),M=a("br",null,null,-1),R=a("br",null,null,-1),S=a("p",null,"可搜索异步加载",-1),N={__name:"README.md.Virtuald146d9ba",setup(v){const l=h(["广东,广州,白云"]),d=h([]),t=h([]),e=h([]),c=(j,o)=>{setTimeout(()=>{let B=[];j||(B=[{value:"广东",label:"广东",children:[]},{value:"北京",label:"北京",children:[]},{value:"上海",label:"上海"}]),j&&j.value==="广东"&&(B=[{value:"广州",label:"广州"},{value:"深圳",label:"深圳"}]),j&&j.value==="广州"&&(B=[{value:"天河",label:"天河"},{value:"白云",label:"白云"}]),o(B)},1e3)},u=j=>{j&&(e.value=[{value:"广东",label:"广东",children:[{value:"深圳",label:"深圳"}]}])};return(j,o)=>{const B=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(B,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=D=>l.value=D),placeholder:"请选择",lazy:"","lazy-load":c,onSearchChange:u},null,8,["modelValue"]),x,U,T,a("p",null,"当前值："+A(d.value),1),n(B,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=D=>d.value=D),placeholder:"请选择（没有初始值）",lazy:"","lazy-load":c},null,8,["modelValue"]),L,M,R,S,a("p",null,"当前值："+A(t.value),1),n(B,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=D=>t.value=D),placeholder:"请选择",lazy:"","lazy-load":c,options:e.value,filterable:"",onSearchChange:u},null,8,["modelValue","options"])])}}},P=a("br",null,null,-1),H=a("br",null,null,-1),I=a("br",null,null,-1),K=a("br",null,null,-1),O=a("br",null,null,-1),q=a("br",null,null,-1),G=a("br",null,null,-1),J=a("br",null,null,-1),Q=a("br",null,null,-1),W={__name:"README.md.Virtualdf844ecc",setup(v){const l=h(["广东,广州,白云"]),d=h([]),t=h(["广东,广州,白云","广东,深圳"]),e=h([]);return(c,u)=>{const j=C("ak-cascader");return m(),E("div",null,[a("p",null,"当前值："+A(l.value),1),n(j,{checkAny:"",modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=o=>l.value=o),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"]),P,H,I,a("p",null,"当前值："+A(d.value),1),n(j,{checkAny:"",modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=o=>d.value=o),placeholder:"请选择",options:p(i)},null,8,["modelValue","options"]),K,O,q,a("p",null,"当前值："+A(t.value),1),n(j,{modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value=o),placeholder:"请选择",multiple:"",options:p(i),checkAny:""},null,8,["modelValue","options"]),G,J,Q,a("p",null,"当前值："+A(e.value),1),n(j,{modelValue:e.value,"onUpdate:modelValue":u[3]||(u[3]=o=>e.value=o),placeholder:"请选择",multiple:"",options:p(i),checkAny:""},null,8,["modelValue","options"])])}}},X={class:"marked-body"},Y=a("h1",{id:"cascader-级联选择器"},"Cascader 级联选择器",-1),Z=a("h3",{id:"基础用法"},"基础用法",-1),ss=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),rs=a("h3",{id:"多选并可折叠选择"},"多选并可折叠选择",-1),ds=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'广东,广州,白云'"),s(", "),a("span",{class:"hljs-string"},"'上海,黄浦区'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),hs=a("h3",{id:"可搜索"},"可搜索",-1),js=a("p",null,[s("开启"),a("code",null,"filterable"),s("可以快捷地搜索选项并选择")],-1),is=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),us=a("h3",{id:"异步加载"},"异步加载",-1),As=a("p",null,[s("通过"),a("code",null,"lazy"),s("开启异步加载，并通过"),a("code",null,"lazyload"),s("来设置加载数据源的方法。 "),a("code",null,"lazyload"),s("方法有两个参数，第一个参数"),a("code",null,"node"),s("为当前点击的节点，第二个"),a("code",null,"resolve"),s("为数据加载完成的回调(必须调用)")],-1),ms=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),Es=a("h3",{id:"选择任意项"},"选择任意项",-1),vs=a("p",null,[s("使用"),a("code",null,"checkAny"),s("可选择任意项")],-1),Bs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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

`)])],-1),gs=_('<h2 id="api">API</h2><h3 id="cascader">Cascader</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>array</td><td>显示的值</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>multiple</td><td>boolean/false</td><td>多选模式</td></tr><tr><td>collapseTags</td><td>boolean/false</td><td>多选模式下是否折叠Tag</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索选项</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr><tr><td>options</td><td>object</td><td>下拉面板选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的<code>label</code>和<code>value</code>属于，默认{label:&#39;label&#39;,value:&#39;value&#39;}</td></tr><tr><td>showAllLevels</td><td>boolean/true</td><td>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</td></tr><tr><td>lazy</td><td>boolean/false</td><td>是否动态加载子节点，需与 <code>lazyLoad</code> 方法结合使用</td></tr><tr><td>lazyLoad</td><td>function</td><td>加载动态数据的方法，仅在 <code>lazy</code> 为 <code>true</code> 时有效,function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)</td></tr><tr><td>checkAny</td><td>boolean/false</td><td>启用该功能后，选择任意一级选项。</td></tr><tr><td>emptyText</td><td>string</td><td>无下拉数据提示文案</td></tr></tbody></table><h3 id="cascader-event">Cascader Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择事件</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="cascader-options">Cascader Options</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>选项名称</td></tr><tr><td>value</td><td>String/number</td><td>选项对应的值，应唯一</td></tr><tr><td>disabled</td><td>boolean</td><td>禁用当前项</td></tr><tr><td>children</td><td>Array</td><td>子级数据，见自定义数据格式</td></tr></tbody></table>',7),bs={__name:"README",setup(v){return(l,d)=>(m(),E("div",X,[Y,Z,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[ss]),default:r(()=>[n(b)]),_:1}),as,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[ls]),default:r(()=>[n(f)]),_:1}),ns,ts,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options%22%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[es]),default:r(()=>[n(F)]),_:1}),cs,ps,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Aclear%3D%22true%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[os]),default:r(()=>[n(y)]),_:1}),rs,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Amultiple%3D%22true%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cp%3E%E4%BD%BF%E7%94%A8%60collapseTags%60%E6%8A%98%E5%8F%A0%E5%A4%9A%E9%80%89%E9%A1%B9%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Amultiple%3D%22true%22%0A%20%20%20%20%20%20collapseTags%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%2C%20'%E4%B8%8A%E6%B5%B7%2C%E9%BB%84%E6%B5%A6%E5%8C%BA'%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[ds]),default:r(()=>[n(w)]),_:1}),hs,js,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%8D%95%E9%80%89%E5%8F%AF%E6%90%9C%E7%B4%A2%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20filterable%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%A4%9A%E9%80%89%E5%8F%AF%E6%90%9C%E7%B4%A2%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20filterable%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%3C%2Fscript%3E%0A"},{code:r(()=>[is]),default:r(()=>[n($)]),_:1}),us,As,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20lazy%0A%20%20%20%20%20%20%3Alazy-load%3D%22lazyLoad%22%0A%20%20%20%20%20%20%40searchChange%3D%22searchChange%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3Cbr%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%EF%BC%88%E6%B2%A1%E6%9C%89%E5%88%9D%E5%A7%8B%E5%80%BC%EF%BC%89%22%0A%20%20%20%20%20%20lazy%0A%20%20%20%20%20%20%3Alazy-load%3D%22lazyLoad%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3Cbr%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%8F%AF%E6%90%9C%E7%B4%A2%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20lazy%0A%20%20%20%20%20%20%3Alazy-load%3D%22lazyLoad%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20filterable%0A%20%20%20%20%20%20%40searchChange%3D%22searchChange%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%20%20const%20value2%20%3D%20ref(%5B%5D)%0A%20%20const%20value3%20%3D%20ref(%5B%5D)%0A%20%20const%20options%20%3D%20ref(%5B%5D)%0A%20%20const%20lazyLoad%20%3D%20(obj%2C%20resolve)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20let%20temp%20%3D%20%5B%5D%0A%20%20%20%20%20%20if%20(!obj)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E5%8A%A0%E8%BD%BD%E7%AC%AC%E4%B8%80%E7%BA%A7%0A%20%20%20%20%20%20%20%20temp%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E5%8C%97%E4%BA%AC'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%8C%97%E4%BA%AC'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E4%B8%8A%E6%B5%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%8A%E6%B5%B7'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%2F%2Fresolve(temp)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(obj%20%26%26%20obj.value%20%3D%3D%3D%20'%E5%B9%BF%E4%B8%9C')%20%7B%0A%20%20%20%20%20%20%20%20temp%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E6%B7%B1%E5%9C%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%B7%B1%E5%9C%B3'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(obj%20%26%26%20obj.value%20%3D%3D%3D%20'%E5%B9%BF%E5%B7%9E')%20%7B%0A%20%20%20%20%20%20%20%20temp%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E5%A4%A9%E6%B2%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%A4%A9%E6%B2%B3'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E7%99%BD%E4%BA%91'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%99%BD%E4%BA%91'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20resolve(temp)%0A%20%20%20%20%7D%2C%201000)%0A%20%20%7D%0A%20%20const%20searchChange%20%3D%20(val)%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20console.log('12')%0A%20%20%20%20if%20(val)%20%7B%0A%20%20%20%20%20%20options.value%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E6%B7%B1%E5%9C%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%B7%B1%E5%9C%B3'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:r(()=>[ms]),default:r(()=>[n(N)]),_:1}),Es,vs,n(p(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20checkAny%0A%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3Cbr%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20checkAny%0A%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3Cbr%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20checkAny%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3Cbr%20%2F%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E5%80%BC%EF%BC%9A%7B%7B%20value4%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cak-cascader%0A%20%20%20%20%20%20v-model%3D%22value4%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20checkAny%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20options%20from%20'.%2Fdemo.json'%0A%0A%20%20const%20value1%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%5D)%0A%20%20const%20value2%20%3D%20ref(%5B%5D)%0A%20%20const%20value3%20%3D%20ref(%5B'%E5%B9%BF%E4%B8%9C%2C%E5%B9%BF%E5%B7%9E%2C%E7%99%BD%E4%BA%91'%2C%20'%E5%B9%BF%E4%B8%9C%2C%E6%B7%B1%E5%9C%B3'%5D)%0A%20%20const%20value4%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A%0A"},{code:r(()=>[Bs]),default:r(()=>[n(W)]),_:1}),gs]))}};export{bs as default};
