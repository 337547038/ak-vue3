import{C as v}from"./codePreview-0428c270.js";import{h as d,r as k,o as m,c as y,f as a,e as s,t as j,b as n,d as f,a as b,w as o,u as _,g as w}from"./index-96df29ae.js";/* empty css                                                                    */const V=a("br",null,null,-1),D=a("br",null,null,-1),$=a("br",null,null,-1),M={__name:"README.md.Virtualb9482186",setup(g){const c=d(""),p=d("2019-06-01"),r=d("2019-06-01");return(h,e)=>{const t=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s("选择的值："+j(c.value),1),V,n(t,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),placeholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+j(p.value),1),D,n(t,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),placeholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+j(r.value),1),$,n(t,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=l=>p.value=l),placeholder:"请选择时间",disabled:!0},null,8,["modelValue"])])])}}},x=a("br",null,null,-1),E=a("br",null,null,-1),U=a("br",null,null,-1),R={__name:"README.md.Virtual8cf48151",setup(g){const c=new Date().getFullYear(),p=d(""),r=d(c.toString()),h=d(""),e=t=>{const l=t.getFullYear();return console.log(l),l<c-2||l>c+3};return(t,l)=>{const u=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s("选择的值："+j(p.value),1),x,n(u,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=i=>p.value=i),placeholder:"请选择时间",type:"year"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+j(r.value),1),E,n(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),placeholder:"请选择时间",type:"year"},null,8,["modelValue"])]),a("p",null,[s("限制选择范围。选择的值："+j(r.value),1),U,n(u,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=i=>h.value=i),placeholder:"请选择时间",type:"year","disabled-date":e},null,8,["modelValue"])])])}}},S=a("br",null,null,-1),T=a("br",null,null,-1),A=a("br",null,null,-1),P={__name:"README.md.Virtuald583710e",setup(g){const c=new Date().getFullYear(),p=d(""),r=d(c+"/10"),h=d(""),e=(t,l)=>{if(l==="month"){const u=t.getMonth();return u<2||u>6}};return(t,l)=>{const u=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 选择的值："+j(p.value),1),S,n(u,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=i=>p.value=i),placeholder:"请选择时间",type:"month"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+j(r.value),1),T,n(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),placeholder:"请选择时间",type:"month"},null,8,["modelValue"])]),a("p",null,[s(" 限制选择范围。选择的值："+j(h.value),1),A,n(u,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=i=>h.value=i),placeholder:"请选择时间",type:"month","disabled-date":e},null,8,["modelValue"])])])}}},B=a("br",null,null,-1),F=a("br",null,null,-1),C=a("br",null,null,-1),Y={__name:"README.md.Virtual945e3de6",setup(g){const c=d(""),p=d(new Date().getTime().toString()),r=d(""),h=(e,t)=>{if(t==="day"){const l=e.getDay();return l===0||l===6}};return(e,t)=>{const l=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 选择的值："+j(c.value),1),B,n(l,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=u=>c.value=u),placeholder:"请选择时间",type:"date"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+j(p.value),1),F,n(l,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=u=>p.value=u),placeholder:"请选择时间",type:"date"},null,8,["modelValue"])]),a("p",null,[s(" 限制选择范围。选择的值："+j(r.value),1),C,n(l,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=u=>r.value=u),placeholder:"请选择时间",type:"date","disabled-date":h},null,8,["modelValue"])])])}}},N=a("br",null,null,-1),z=a("br",null,null,-1),I={__name:"README.md.Virtual5e1ec674",setup(g){const c=d(""),p=d(new Date().getTime().toString());return(r,h)=>{const e=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 选择的值："+j(c.value),1),N,n(e,{modelValue:c.value,"onUpdate:modelValue":h[0]||(h[0]=t=>c.value=t),placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+j(p.value),1),z,n(e,{modelValue:p.value,"onUpdate:modelValue":h[1]||(h[1]=t=>p.value=t),placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])])])}}},O=a("br",null,null,-1),q={__name:"README.md.Virtual3111dbbe",setup(g){const c=d("2021-06-01");return(p,r)=>{const h=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 选择的值："+j(c.value),1),O,n(h,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=e=>c.value=e),placeholder:"请选择时间",readonly:!1},null,8,["modelValue"])])])}}},G=f({__name:"README.md.Virtual18cf86a7",setup(g){const c=d(),p=h=>[14,15,16].includes(h.getDate())?"休":[17,18,19].includes(h.getDate())?"班":"",r=(h,e)=>{const t=h.getDay();return t===0||t===6};return(h,e)=>{const t=k("ak-date-picker");return m(),b(t,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),placeholder:"请选择时间",innerText:p,"disabled-date":r,readonly:!1},null,8,["modelValue"])}}}),H=a("br",null,null,-1),J=a("br",null,null,-1),K=a("br",null,null,-1),L={__name:"README.md.Virtualdef041b3",setup(g){const c=d("2021-06-01"),p=d("2021-06-01"),r=d("2021-06-01");return(h,e)=>{const t=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 月日小于10时，前面不加0。选择的值："+j(c.value),1),H,n(t,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),placeholder:"请选择时间",format:"y-M-d"},null,8,["modelValue"])]),a("p",null,[s(" 显示年月日格式。选择的值："+j(p.value),1),J,n(t,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),placeholder:"请选择时间",format:"y年MM月dd日 星期w","value-format":"y-MM-dd"},null,8,["modelValue"])]),a("p",null,[s(" 显示时间戳。选择的值："+j(r.value),1),K,n(t,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),placeholder:"请选择时间",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])}}},Q=a("br",null,null,-1),W=a("br",null,null,-1),X=a("br",null,null,-1),Z={__name:"README.md.Virtual4009b313",setup(g){const c=d([]),p=d([]),r=d([]);return(h,e)=>{const t=k("ak-date-picker");return m(),y("div",null,[a("p",null,[s(" 选择的值："+j(c.value),1),Q,n(t,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),type:"monthRange",placeholder:"请选择月份",endPlaceholder:"请选择月份"},null,8,["modelValue"])]),a("p",null,[s(" 显示年月日格式。选择的值："+j(p.value),1),W,n(t,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),type:"dateRange",placeholder:"请选择时间",endPlaceholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+j(r.value),1),X,n(t,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),type:"datetimeRange",placeholder:"请选择时间",endPlaceholder:"请选择时间"},null,8,["modelValue"])])])}}},ss={class:"marked-body"},as=a("h1",{id:"datepicker-日期选择"},"DatePicker 日期选择",-1),ls=a("h3",{id:"基本使用"},"基本使用",-1),ns=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("选择的值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("选择的值：{{ value2 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("选择的值：{{ value3 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2019-06-01'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2019-06-01'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),es=a("h3",{id:"年份选择"},"年份选择",-1),ts=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("选择的值：{{ value1 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"year"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("选择的值：{{ value2 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"year"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),s("限制选择范围。选择的值：{{ value2 }}"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"year"'),s(`
        `),a("span",{class:"hljs-attr"},":disabled-date"),s("="),a("span",{class:"hljs-string"},'"disabledDate"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" current = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("()."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("(current."),a("span",{class:"hljs-title function_"},"toString"),s(`())
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledDate"),s(" = ("),a("span",{class:"hljs-params"},"date"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" day = date."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`()
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(day)
    `),a("span",{class:"hljs-keyword"},"return"),s(" day < current - "),a("span",{class:"hljs-number"},"2"),s(" || day > current + "),a("span",{class:"hljs-number"},"3"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),cs=a("h3",{id:"月份选择"},"月份选择",-1),ps=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"month"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value2 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"month"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      限制选择范围。选择的值：{{ value3 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"month"'),s(`
        `),a("span",{class:"hljs-attr"},":disabled-date"),s("="),a("span",{class:"hljs-string"},'"disabledDate"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" current = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("()."),a("span",{class:"hljs-title function_"},"getFullYear"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("(current + "),a("span",{class:"hljs-string"},"'/'"),s(" + "),a("span",{class:"hljs-string"},"'10'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledDate"),s(" = ("),a("span",{class:"hljs-params"},"date, type"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'month'"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" day = date."),a("span",{class:"hljs-title function_"},"getMonth"),s(`()
      `),a("span",{class:"hljs-keyword"},"return"),s(" day < "),a("span",{class:"hljs-number"},"2"),s(" || day > "),a("span",{class:"hljs-number"},"6"),s(`
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),rs=a("h3",{id:"年月日选择"},"年月日选择",-1),hs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"date"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value2 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"date"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      限制选择范围。选择的值：{{ value3 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"date"'),s(`
        `),a("span",{class:"hljs-attr"},":disabled-date"),s("="),a("span",{class:"hljs-string"},'"disabledDate"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("()."),a("span",{class:"hljs-title function_"},"getTime"),s("()."),a("span",{class:"hljs-title function_"},"toString"),s(`())
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledDate"),s(" = ("),a("span",{class:"hljs-params"},"date, type"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'day'"),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" day = date."),a("span",{class:"hljs-title function_"},"getDay"),s(`()
      `),a("span",{class:"hljs-keyword"},"return"),s(" day === "),a("span",{class:"hljs-number"},"0"),s(" || day === "),a("span",{class:"hljs-number"},"6"),s(`
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),ds=a("h3",{id:"年月日时分秒选择"},"年月日时分秒选择",-1),js=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetime"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value2 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetime"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s("()."),a("span",{class:"hljs-title function_"},"getTime"),s("()."),a("span",{class:"hljs-title function_"},"toString"),s(`())
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),os=a("h3",{id:"手动输入"},"手动输入",-1),us=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},":readonly"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2021-06-01'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),is=a("h3",{id:"自定显示特殊字符"},"自定显示特殊字符",-1),ms=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
    `),a("span",{class:"hljs-attr"},":innerText"),s("="),a("span",{class:"hljs-string"},'"innerText"'),s(`
    `),a("span",{class:"hljs-attr"},":disabled-date"),s("="),a("span",{class:"hljs-string"},'"disabledDate"'),s(`
    `),a("span",{class:"hljs-attr"},":readonly"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-comment"},'<!--  <ak-date-picker v-model="value2" placeholder="请选择时间" />-->'),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"innerText"),s(" = ("),a("span",{class:"hljs-params"},[s("time: "),a("span",{class:"hljs-built_in"},"Date")]),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (["),a("span",{class:"hljs-number"},"14"),s(", "),a("span",{class:"hljs-number"},"15"),s(", "),a("span",{class:"hljs-number"},"16"),s("]."),a("span",{class:"hljs-title function_"},"includes"),s("(time."),a("span",{class:"hljs-title function_"},"getDate"),s(`())) {
      `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'休'"),s(`
    }
    `),a("span",{class:"hljs-keyword"},"if"),s(" (["),a("span",{class:"hljs-number"},"17"),s(", "),a("span",{class:"hljs-number"},"18"),s(", "),a("span",{class:"hljs-number"},"19"),s("]."),a("span",{class:"hljs-title function_"},"includes"),s("(time."),a("span",{class:"hljs-title function_"},"getDate"),s(`())) {
      `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'班'"),s(`
    }
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"''"),s(`
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledDate"),s(" = ("),a("span",{class:"hljs-params"},[s("time: "),a("span",{class:"hljs-built_in"},"Date"),s(", paneType: string")]),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" day = time."),a("span",{class:"hljs-title function_"},"getDay"),s(`()
    `),a("span",{class:"hljs-keyword"},"return"),s(" day === "),a("span",{class:"hljs-number"},"0"),s(" || day === "),a("span",{class:"hljs-number"},"6"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),gs=a("h3",{id:"时间格式化"},"时间格式化",-1),vs=a("p",null,[s("使用"),a("code",null,"format"),s("指定输出显示的类型，即输入框显示的值。可使用y(年)、M(月)、d(日)、h(时)、m(分)、s(秒)、w(星期) 、timestamp，MM表示使用两位表示月份，使用"),a("code",null,"format"),s("应配合"),a("code",null,"value-format"),s("一起使用，否则当"),a("code",null,"format"),s("的格式转换成时间异常，会被认为是无效的时间")],-1),_s=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      月日小于10时，前面不加0。选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"y-M-d"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      显示年月日格式。选择的值：{{ value2 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"y年MM月dd日 星期w"'),s(`
        `),a("span",{class:"hljs-attr"},"value-format"),s("="),a("span",{class:"hljs-string"},'"y-MM-dd"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      显示时间戳。选择的值：{{ value3 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"timestamp"'),s(`
        `),a("span",{class:"hljs-attr"},"value-format"),s("="),a("span",{class:"hljs-string"},'"y-MM-dd"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2021-06-01'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2021-06-01'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'2021-06-01'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),ks=a("h3",{id:"区间选择"},"区间选择",-1),ys=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value1 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"monthRange"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择月份"'),s(`
        `),a("span",{class:"hljs-attr"},"endPlaceholder"),s("="),a("span",{class:"hljs-string"},'"请选择月份"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      显示年月日格式。选择的值：{{ value2 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"dateRange"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"endPlaceholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      选择的值：{{ value3 }}`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-date-picker"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"datetimeRange"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
        `),a("span",{class:"hljs-attr"},"endPlaceholder"),s("="),a("span",{class:"hljs-string"},'"请选择时间"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value2 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
  `),a("span",{class:"hljs-keyword"},"const"),s(" value3 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),fs=w('<h2 id="api">API</h2><h3 id="datepicker">DatePicker</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>placeholder</td><td>String</td><td>输入框提示占位文本</td></tr><tr><td>clear</td><td>Boolean｜true</td><td>显示清空</td></tr><tr><td>disabledDate</td><td>Function</td><td>禁用的时间，return true时将不能选择</td></tr><tr><td>disabled</td><td>Boolean｜true</td><td>是否禁用</td></tr><tr><td>type</td><td>String</td><td>面板日期类型，选择后将按此格式返回，年/年月/年月日/年月日时分秒。可选<code>year,month,date,datetime,monthRange,dateRange,datetimeRange</code></td></tr><tr><td>format</td><td>String</td><td>输入框显示的格式，为空时按type默认格式</td></tr><tr><td>valueFormat</td><td>String</td><td>绑定的值格式，即v-model的格式,必须要是合法的日期格式，为空则输入format的格式</td></tr><tr><td>innerText</td><td>Function</td><td>可以将特殊提示的文本插入到指定的日期里</td></tr><tr><td>appendToBody</td><td>Boolean｜true</td><td>是否将弹出日期面板插入到body中</td></tr><tr><td>downStyle</td><td>Object</td><td>下拉面板样式，快速个性化设置单个日期下拉面板</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类名</td></tr><tr><td>readonly</td><td>Boolean｜true</td><td>日期输入框只读模式</td></tr><tr><td>size</td><td>string</td><td>添加的大小尺寸样式</td></tr></tbody></table><h3 id="datepicker-event">DatePicker Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table>',5),Ds={__name:"README",setup(g){return(c,p)=>(m(),y("div",ss,[as,ls,n(_(v),{code:""},{code:o(()=>[ns]),default:o(()=>[n(M)]),_:1}),es,n(_(v),{code:""},{code:o(()=>[ts]),default:o(()=>[n(R)]),_:1}),cs,n(_(v),{code:""},{code:o(()=>[ps]),default:o(()=>[n(P)]),_:1}),rs,n(_(v),{code:""},{code:o(()=>[hs]),default:o(()=>[n(Y)]),_:1}),ds,n(_(v),{code:""},{code:o(()=>[js]),default:o(()=>[n(I)]),_:1}),os,n(_(v),{code:""},{code:o(()=>[us]),default:o(()=>[n(q)]),_:1}),is,n(_(v),{code:""},{code:o(()=>[ms]),default:o(()=>[n(G)]),_:1}),gs,vs,n(_(v),{code:""},{code:o(()=>[_s]),default:o(()=>[n(L)]),_:1}),ks,n(_(v),{code:""},{code:o(()=>[ys]),default:o(()=>[n(Z)]),_:1}),fs]))}};export{Ds as default};
