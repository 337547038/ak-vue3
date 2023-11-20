import{C as A}from"./vue-e9df72da.js";import{r as h,a as v,o as m,c as B,g as a,d as s,t as o,b as n,e as D,f as C,w as j,u as g,h as _}from"./index-23cfbdad.js";/* empty css                                                            */const k=a("br",null,null,-1),y=a("br",null,null,-1),f=a("br",null,null,-1),F={__name:"README.md.Virtualb9482186",setup(E){const p=h(""),c=h("2019-06-01"),r=h("2019-06-01");return(d,e)=>{const t=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s("选择的值："+o(p.value),1),k,n(t,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),placeholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+o(c.value),1),y,n(t,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),placeholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+o(r.value),1),f,n(t,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=l=>c.value=l),placeholder:"请选择时间",disabled:!0},null,8,["modelValue"])])])}}},b=a("br",null,null,-1),w=a("br",null,null,-1),V=a("br",null,null,-1),M={__name:"README.md.Virtual8cf48151",setup(E){const p=new Date().getFullYear(),c=h(""),r=h(p.toString()),d=h(""),e=t=>{const l=t.getFullYear();return console.log(l),l<p-2||l>p+3};return(t,l)=>{const u=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s("选择的值："+o(c.value),1),b,n(u,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=i=>c.value=i),placeholder:"请选择时间",type:"year"},null,8,["modelValue"])]),a("p",null,[s("选择的值："+o(r.value),1),w,n(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),placeholder:"请选择时间",type:"year"},null,8,["modelValue"])]),a("p",null,[s("限制选择范围。选择的值："+o(r.value),1),V,n(u,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=i=>d.value=i),placeholder:"请选择时间",type:"year","disabled-date":e},null,8,["modelValue"])])])}}},x=a("br",null,null,-1),$=a("br",null,null,-1),R=a("br",null,null,-1),U={__name:"README.md.Virtuald583710e",setup(E){const p=new Date().getFullYear(),c=h(""),r=h(p+"/10"),d=h(""),e=(t,l)=>{if(l==="month"){const u=t.getMonth();return u<2||u>6}};return(t,l)=>{const u=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 选择的值："+o(c.value),1),x,n(u,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=i=>c.value=i),placeholder:"请选择时间",type:"month"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+o(r.value),1),$,n(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),placeholder:"请选择时间",type:"month"},null,8,["modelValue"])]),a("p",null,[s(" 限制选择范围。选择的值："+o(d.value),1),R,n(u,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=i=>d.value=i),placeholder:"请选择时间",type:"month","disabled-date":e},null,8,["modelValue"])])])}}},T=a("br",null,null,-1),S=a("br",null,null,-1),P=a("br",null,null,-1),Y={__name:"README.md.Virtual945e3de6",setup(E){const p=h(""),c=h(new Date().getTime().toString()),r=h(""),d=(e,t)=>{if(t==="day"){const l=e.getDay();return l===0||l===6}};return(e,t)=>{const l=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 选择的值："+o(p.value),1),T,n(l,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=u=>p.value=u),placeholder:"请选择时间",type:"date"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+o(c.value),1),S,n(l,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=u=>c.value=u),placeholder:"请选择时间",type:"date"},null,8,["modelValue"])]),a("p",null,[s(" 限制选择范围。选择的值："+o(r.value),1),P,n(l,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=u=>r.value=u),placeholder:"请选择时间",type:"date","disabled-date":d},null,8,["modelValue"])])])}}},N=a("br",null,null,-1),z=a("br",null,null,-1),I={__name:"README.md.Virtual5e1ec674",setup(E){const p=h(""),c=h(new Date().getTime().toString());return(r,d)=>{const e=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 选择的值："+o(p.value),1),N,n(e,{modelValue:p.value,"onUpdate:modelValue":d[0]||(d[0]=t=>p.value=t),placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+o(c.value),1),z,n(e,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=t=>c.value=t),placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])])])}}},O=a("br",null,null,-1),q={__name:"README.md.Virtual3111dbbe",setup(E){const p=h("2021-06-01");return(c,r)=>{const d=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 选择的值："+o(p.value),1),O,n(d,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),placeholder:"请选择时间",readonly:!1},null,8,["modelValue"])])])}}},G=D({__name:"README.md.Virtual18cf86a7",setup(E){const p=h(),c=d=>[14,15,16].includes(d.getDate())?"休":[17,18,19].includes(d.getDate())?"班":"",r=(d,e)=>{const t=d.getDay();return t===0||t===6};return(d,e)=>{const t=v("ak-date-picker");return m(),C(t,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),placeholder:"请选择时间",innerText:c,"disabled-date":r,readonly:!1},null,8,["modelValue"])}}}),H=a("br",null,null,-1),J=a("br",null,null,-1),K=a("br",null,null,-1),L={__name:"README.md.Virtualdef041b3",setup(E){const p=h("2021-06-01"),c=h("2021-06-01"),r=h("2021-06-01");return(d,e)=>{const t=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 月日小于10时，前面不加0。选择的值："+o(p.value),1),H,n(t,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),placeholder:"请选择时间",format:"y-M-d"},null,8,["modelValue"])]),a("p",null,[s(" 显示年月日格式。选择的值："+o(c.value),1),J,n(t,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),placeholder:"请选择时间",format:"y年MM月dd日 星期w","value-format":"y-MM-dd"},null,8,["modelValue"])]),a("p",null,[s(" 显示时间戳。选择的值："+o(r.value),1),K,n(t,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),placeholder:"请选择时间",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])}}},Q=a("br",null,null,-1),W=a("br",null,null,-1),X=a("br",null,null,-1),Z={__name:"README.md.Virtual4009b313",setup(E){const p=h([]),c=h([]),r=h([]);return(d,e)=>{const t=v("ak-date-picker");return m(),B("div",null,[a("p",null,[s(" 选择的值："+o(p.value),1),Q,n(t,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),type:"monthRange",placeholder:"请选择月份",endPlaceholder:"请选择月份"},null,8,["modelValue"])]),a("p",null,[s(" 显示年月日格式。选择的值："+o(c.value),1),W,n(t,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),type:"dateRange",placeholder:"请选择时间",endPlaceholder:"请选择时间"},null,8,["modelValue"])]),a("p",null,[s(" 选择的值："+o(r.value),1),X,n(t,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),type:"datetimeRange",placeholder:"请选择时间",endPlaceholder:"请选择时间"},null,8,["modelValue"])])])}}},ss={class:"marked-body"},as=a("h1",{id:"datepicker-日期选择"},"DatePicker 日期选择",-1),ls=a("h3",{id:"基本使用"},"基本使用",-1),ns=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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


`)])],-1),ps=a("h3",{id:"月份选择"},"月份选择",-1),cs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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


`)])],-1),rs=a("h3",{id:"年月日选择"},"年月日选择",-1),ds=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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


`)])],-1),hs=a("h3",{id:"年月日时分秒选择"},"年月日时分秒选择",-1),os=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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


`)])],-1),js=a("h3",{id:"手动输入"},"手动输入",-1),us=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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

`)])],-1),Es=a("h3",{id:"时间格式化"},"时间格式化",-1),As=a("p",null,[s("使用"),a("code",null,"format"),s("指定输出显示的类型，即输入框显示的值。可使用y(年)、M(月)、d(日)、h(时)、m(分)、s(秒)、w(星期) 、timestamp，MM表示使用两位表示月份，使用"),a("code",null,"format"),s("应配合"),a("code",null,"value-format"),s("一起使用，否则当"),a("code",null,"format"),s("的格式转换成时间异常，会被认为是无效的时间")],-1),gs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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

`)])],-1),vs=a("h3",{id:"区间选择"},"区间选择",-1),Bs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),Ds=_('<h2 id="api">API</h2><h3 id="datepicker">DatePicker</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>placeholder</td><td>String</td><td>输入框提示占位文本</td></tr><tr><td>clear</td><td>Boolean｜true</td><td>显示清空</td></tr><tr><td>disabledDate</td><td>Function</td><td>禁用的时间，return true时将不能选择</td></tr><tr><td>disabled</td><td>Boolean｜true</td><td>是否禁用</td></tr><tr><td>type</td><td>String</td><td>面板日期类型，选择后将按此格式返回，年/年月/年月日/年月日时分秒。可选<code>year,month,date,datetime,monthRange,dateRange,datetimeRange</code></td></tr><tr><td>format</td><td>String</td><td>输入框显示的格式，为空时按type默认格式</td></tr><tr><td>valueFormat</td><td>String</td><td>绑定的值格式，即v-model的格式,必须要是合法的日期格式，为空则输入format的格式</td></tr><tr><td>innerText</td><td>Function</td><td>可以将特殊提示的文本插入到指定的日期里</td></tr><tr><td>appendToBody</td><td>Boolean｜true</td><td>是否将弹出日期面板插入到body中</td></tr><tr><td>downStyle</td><td>Object</td><td>下拉面板样式，快速个性化设置单个日期下拉面板</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类名</td></tr><tr><td>readonly</td><td>Boolean｜true</td><td>日期输入框只读模式</td></tr><tr><td>size</td><td>string</td><td>添加的大小尺寸样式</td></tr></tbody></table><h3 id="datepicker-event">DatePicker Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table>',5),ys={__name:"README",setup(E){return(p,c)=>(m(),B("div",ss,[as,ls,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22true%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref('2019-06-01')%0A%20%20const%20value3%20%3D%20ref('2019-06-01')%0A%3C%2Fscript%3E%0A"},{code:j(()=>[ns]),default:j(()=>[n(F)]),_:1}),es,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22year%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22year%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%0A%20%20%20%20%20%20%3E%E9%99%90%E5%88%B6%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20type%3D%22year%22%0A%20%20%20%20%20%20%20%20%3Adisabled-date%3D%22disabledDate%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20current%20%3D%20new%20Date().getFullYear()%0A%20%20const%20value1%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref(current.toString())%0A%20%20const%20value3%20%3D%20ref('')%0A%20%20const%20disabledDate%20%3D%20(date)%20%3D%3E%20%7B%0A%20%20%20%20const%20day%20%3D%20date.getFullYear()%0A%20%20%20%20console.log(day)%0A%20%20%20%20return%20day%20%3C%20current%20-%202%20%7C%7C%20day%20%3E%20current%20%2B%203%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%0A"},{code:j(()=>[ts]),default:j(()=>[n(M)]),_:1}),ps,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22month%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22month%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%99%90%E5%88%B6%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20type%3D%22month%22%0A%20%20%20%20%20%20%20%20%3Adisabled-date%3D%22disabledDate%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20current%20%3D%20new%20Date().getFullYear()%0A%20%20const%20value1%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref(current%20%2B%20'%2F'%20%2B%20'10')%0A%20%20const%20value3%20%3D%20ref('')%0A%20%20const%20disabledDate%20%3D%20(date%2C%20type)%20%3D%3E%20%7B%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'month')%20%7B%0A%20%20%20%20%20%20const%20day%20%3D%20date.getMonth()%0A%20%20%20%20%20%20return%20day%20%3C%202%20%7C%7C%20day%20%3E%206%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%0A"},{code:j(()=>[cs]),default:j(()=>[n(U)]),_:1}),rs,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value1%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22date%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20type%3D%22date%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%99%90%E5%88%B6%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20type%3D%22date%22%0A%20%20%20%20%20%20%20%20%3Adisabled-date%3D%22disabledDate%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref(new%20Date().getTime().toString())%0A%20%20const%20value3%20%3D%20ref('')%0A%20%20const%20disabledDate%20%3D%20(date%2C%20type)%20%3D%3E%20%7B%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'day')%20%7B%0A%20%20%20%20%20%20const%20day%20%3D%20date.getDay()%0A%20%20%20%20%20%20return%20day%20%3D%3D%3D%200%20%7C%7C%20day%20%3D%3D%3D%206%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%0A"},{code:j(()=>[ds]),default:j(()=>[n(Y)]),_:1}),hs,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20type%3D%22datetime%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20type%3D%22datetime%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref('')%0A%20%20const%20value2%20%3D%20ref(new%20Date().getTime().toString())%0A%3C%2Fscript%3E%0A%0A%0A"},{code:j(()=>[os]),default:j(()=>[n(I)]),_:1}),js,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20%3Areadonly%3D%22false%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref('2021-06-01')%0A%3C%2Fscript%3E%0A%0A%0A"},{code:j(()=>[us]),default:j(()=>[n(q)]),_:1}),is,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-date-picker%0A%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%3AinnerText%3D%22innerText%22%0A%20%20%20%20%3Adisabled-date%3D%22disabledDate%22%0A%20%20%20%20%3Areadonly%3D%22false%22%0A%20%20%2F%3E%0A%20%20%3C!--%20%20%3Cak-date-picker%20v-model%3D%22value2%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20%2F%3E--%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value1%20%3D%20ref()%0A%20%20const%20innerText%20%3D%20(time%3A%20Date)%20%3D%3E%20%7B%0A%20%20%20%20if%20(%5B14%2C%2015%2C%2016%5D.includes(time.getDate()))%20%7B%0A%20%20%20%20%20%20return%20'%E4%BC%91'%0A%20%20%20%20%7D%0A%20%20%20%20if%20(%5B17%2C%2018%2C%2019%5D.includes(time.getDate()))%20%7B%0A%20%20%20%20%20%20return%20'%E7%8F%AD'%0A%20%20%20%20%7D%0A%20%20%20%20return%20''%0A%20%20%7D%0A%20%20const%20disabledDate%20%3D%20(time%3A%20Date%2C%20paneType%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20const%20day%20%3D%20time.getDay()%0A%20%20%20%20return%20day%20%3D%3D%3D%200%20%7C%7C%20day%20%3D%3D%3D%206%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:j(()=>[ms]),default:j(()=>[n(G)]),_:1}),Es,As,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E6%9C%88%E6%97%A5%E5%B0%8F%E4%BA%8E10%E6%97%B6%EF%BC%8C%E5%89%8D%E9%9D%A2%E4%B8%8D%E5%8A%A00%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20format%3D%22y-M-d%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E6%98%BE%E7%A4%BA%E5%B9%B4%E6%9C%88%E6%97%A5%E6%A0%BC%E5%BC%8F%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20format%3D%22y%E5%B9%B4MM%E6%9C%88dd%E6%97%A5%20%E6%98%9F%E6%9C%9Fw%22%0A%20%20%20%20%20%20%20%20value-format%3D%22y-MM-dd%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E6%98%BE%E7%A4%BA%E6%97%B6%E9%97%B4%E6%88%B3%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20format%3D%22timestamp%22%0A%20%20%20%20%20%20%20%20value-format%3D%22y-MM-dd%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref('2021-06-01')%0A%20%20const%20value2%20%3D%20ref('2021-06-01')%0A%20%20const%20value3%20%3D%20ref('2021-06-01')%0A%3C%2Fscript%3E%0A%0A"},{code:j(()=>[gs]),default:j(()=>[n(L)]),_:1}),vs,n(g(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value1%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value1%22%0A%20%20%20%20%20%20%20%20type%3D%22monthRange%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%9C%88%E4%BB%BD%22%0A%20%20%20%20%20%20%20%20endPlaceholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%9C%88%E4%BB%BD%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E6%98%BE%E7%A4%BA%E5%B9%B4%E6%9C%88%E6%97%A5%E6%A0%BC%E5%BC%8F%E3%80%82%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value2%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value2%22%0A%20%20%20%20%20%20%20%20type%3D%22dateRange%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20endPlaceholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%E9%80%89%E6%8B%A9%E7%9A%84%E5%80%BC%EF%BC%9A%7B%7B%20value3%20%7D%7D%3Cbr%20%2F%3E%0A%20%20%20%20%20%20%3Cak-date-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22value3%22%0A%20%20%20%20%20%20%20%20type%3D%22datetimeRange%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20endPlaceholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20value1%20%3D%20ref(%5B%5D)%0A%20%20const%20value2%20%3D%20ref(%5B%5D)%0A%20%20const%20value3%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{code:j(()=>[Bs]),default:j(()=>[n(Z)]),_:1}),Ds]))}};export{ys as default};
