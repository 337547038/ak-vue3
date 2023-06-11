import{C as A}from"./codePreview-683280a5.js";import{r as h,o as i,a as B,w as t,f as a,u as r,h as f,c as g,b as l,e as s,l as v,t as b,m as x,g as _}from"./index-4b83c618.js";/* empty css                                                                    */const j=[{date:"2016-05-03",name:"张三",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男",children:[{date:"2016-05-00",name:"子级",province:"子级广东",city:"子级白云区",address:"子级广东省广州市白云区无名路888号",zip:200330,sex:0}]},{date:"2016-05-04",name:"李四",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男"},{date:"2016-05-05",name:"李四5",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-06",name:"李四6",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男"},{date:"2016-05-07",name:"李四7",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-08",name:"李四8",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-09",name:"李四9",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-10",name:"李四10",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"}],w=["onClick"],q={__name:"README.md.Virtual2c2c24fd",setup(d){const e=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}],n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=h("ak-table");return i(),B(c,{data:r(j),columns:e},{control:t(u=>[a("a",{onClick:m=>n(u)},"删除",8,w)]),_:1},8,["data"])}}},F=["onClick"],S={__name:"README.md.Virtual89a677f0",setup(d){const e=[{type:"selection",width:"50px"},{type:"index",label:"序号",width:"50px"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}],n=f(),o=E=>{alert(JSON.stringify(E))},p=()=>{n.value.toggleSelection(!0)},c=()=>{n.value.toggleSelection(!1)},u=()=>{const E=n.value.getSelectAll();console.log(E),alert(JSON.stringify(E))},m=E=>{[j[1],j[2]].forEach(k=>{n.value.toggleRowSelection(k,E)})};return(E,C)=>{const k=h("ak-table"),D=h("ak-button");return i(),g("div",null,[l(k,{ref_key:"tableEl",ref:n,data:r(j),columns:e},{control:t(y=>[a("a",{onClick:Ks=>o(y)},"删除",8,F)]),_:1},8,["data"]),a("p",null,[l(D,{onClick:p},{default:t(()=>[s("全选")]),_:1}),l(D,{onClick:c},{default:t(()=>[s("取消全选")]),_:1}),l(D,{onClick:u},{default:t(()=>[s("获取所选行")]),_:1}),l(D,{onClick:C[0]||(C[0]=y=>m(!0))},{default:t(()=>[s(" 将第2,3条设为选中状态 ")]),_:1}),l(D,{onClick:C[1]||(C[1]=y=>m(!1))},{default:t(()=>[s(" 取消第2,3条选中状态 ")]),_:1})])])}}},z={__name:"README.md.Virtual78767e00",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}];return(n,o)=>{const p=h("ak-table");return i(),g("div",null,[l(p,{data:r(j),height:"200px",columns:e},null,8,["data"])])}}},J={__name:"README.md.Virtual0eec06a6",setup(d){const e=[{type:"selection",width:"50px",fixed:"left",className:"fixed-left"},{type:"index",label:"序号",width:"50px"},{label:"日期",prop:"date",width:"50px"},{label:"姓名",prop:"name",width:"200px"},{label:"省份",prop:"province",width:"100px"},{label:"城市",prop:"city",width:"100px"},{label:"地址",prop:"address",width:"300px"},{label:"邮编",prop:"zip",width:"100px",fixed:"right",className:"fixed-right"}];return(n,o)=>{const p=h("ak-table");return i(),g("div",null,[l(p,{ref:"tableEl",data:r(j),columns:e,height:"200px",width:"600px"},null,8,["data"])])}}},$={__name:"README.md.Virtual246babb2",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date",sortBy:!0},{label:"姓名",prop:"name",sortBy:!0},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],n=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{ref:"tableEl",data:r(j),columns:e,onSortChange:n},null,8,["data"])])}}},N={__name:"README.md.Virtuald902e52e",setup(d){const e=[{type:"selection",drag:!1},{type:"index",label:"序号",drag:!1},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],n=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{ref:"tableEl",data:r(j),columns:e,onDragChange:n},null,8,["data"])])}}},R={__name:"README.md.Virtual16550bfc",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],n=v({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0});return(o,p)=>{const c=h("ak-button"),u=h("ak-table");return i(),g("div",null,[a("p",null,[l(c,{onClick:p[0]||(p[0]=m=>n.showHeader=!n.showHeader)},{default:t(()=>[s("显示表头:"+b(n.showHeader),1)]),_:1}),l(c,{onClick:p[1]||(p[1]=m=>n.hover=!n.hover)},{default:t(()=>[s("hover高亮:"+b(n.hover),1)]),_:1}),l(c,{onClick:p[2]||(p[2]=m=>n.border=!n.border)},{default:t(()=>[s("显示边框:"+b(n.border),1)]),_:1}),l(c,{onClick:p[3]||(p[3]=m=>n.stripe=!n.stripe)},{default:t(()=>[s("显示斑马线:"+b(n.stripe),1)]),_:1}),l(c,{onClick:p[4]||(p[4]=m=>n.ellipsis=!n.ellipsis)},{default:t(()=>[s("溢出省略号:"+b(n.ellipsis),1)]),_:1}),l(c,{onClick:p[5]||(p[5]=m=>n.title=!n.title)},{default:t(()=>[s("鼠标滑动过提示:"+b(n.title),1)]),_:1}),l(c,{onClick:p[6]||(p[6]=m=>n.dragLine=!n.dragLine)},{default:t(()=>[s("拖动改变列宽时垂直线:"+b(n.dragLine),1)]),_:1})]),l(u,{data:r(j),"show-header":n.showHeader,hover:n.hover,border:n.border,stripe:n.stripe,ellipsis:n.ellipsis,"drag-line":n.dragLine,columns:e},null,8,["data","show-header","hover","border","stripe","ellipsis","drag-line"])])}}},T=["onClick"],L={__name:"README.md.Virtual53f100b1",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"},{type:"extend",prop:"extend"}];return(n,o)=>{const p=h("ak-table");return i(),g("div",null,[l(p,{data:r(j),columns:e},{control:t(c=>[a("span",{onClick:u=>c.extend()},b(c.toggle?"收起":"展开"),9,T)]),extend:t(c=>[s(" 返回当前行所有信息："+b(c),1)]),_:1},8,["data"])])}}},V=["onClick"],O={__name:"README.md.Virtual9795c394",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"}];return(n,o)=>{const p=h("ak-table");return i(),g("div",null,[l(p,{data:r(j),"has-child":!0,columns:e},{control:t(c=>[c.row.children?(i(),g("span",{key:0,onClick:u=>c.extend()},b(c.toggle?"收起":"展开子级"),9,V)):x("",!0)]),_:1},8,["data"])])}}},M=["onClick"],H={__name:"README.md.Virtualbf3cee66",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"}],n=(o,p)=>{console.log("row"),setTimeout(()=>{p([{name:"异步数据1",date:"2021"},{name:"异步数据2",date:"2021"}])},500)};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{data:r(j),"has-child":!0,"lazy-load":n,columns:e},{control:t(u=>[a("span",{onClick:m=>u.extend()},b(u.toggle?"收起":"加载子级"),9,M)]),_:1},8,["data"])])}}},I={__name:"README.md.Virtual0bef277b",setup(d){const e=[{row:1,col:2,colSpan:2},{row:2,col:0,colSpan:2,rowSpan:2},{row:3,col:1,colSpan:0}],n=[{label:"日期",prop:"dateTime",children:[{label:"年份",prop:"date"},{label:"月份",prop:"date"}]},{prop:"name",label:"姓名"},{label:"收化地址",prop:"address2",children:[{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"}]},{prop:"control",label:"操作"}];return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{data:r(j),"row-col-span":e,columns:n},null,8,["data"])])}}},P=["onClick"],W={__name:"README.md.Virtual0a4b507b",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"},{prop:"control",label:"操作"}],n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{data:r(j),columns:e},{control:t(u=>[a("a",{onClick:m=>n(u)},"删除",8,P)]),"date-header":t(u=>[s(b(u.column.label)+"slot表头 ",1)]),_:1},8,["data"])])}}},G=["onClick"],K={__name:"README.md.Virtual59823809",setup(d){const e=[{label:"日期",prop:"dateTime",children:[{label:"年份",prop:"date"},{label:"月份",prop:"date"}]},{prop:"name",label:"姓名"},{label:"收化地址",prop:"address2",children:[{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"}]},{prop:"control",label:"操作"}],n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{data:r(j),columns:e},{control:t(u=>[a("a",{onClick:m=>n(u)},"删除",8,G)]),_:1},8,["data"])])}}},Q={__name:"README.md.Virtual216de933",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"邮编",prop:"zip"}],n={current:1,pageSize:3,onChange:o=>{console.log(o)}};return(o,p)=>{const c=h("ak-table");return i(),g("div",null,[l(c,{data:r(j),pagination:n,columns:e},null,8,["data"])])}}},U={__name:"README.md.Virtual3b2d1e9e",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"邮编",prop:"zip"}];return(n,o)=>{const p=h("ak-table");return i(),B(p,{data:r(j),columns:e},null,8,["data"])}}},X={__name:"README.md.Virtualcf1c72f2",setup(d){const e=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex",tag:{dict:{男:"info",女:"danger"}}},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}];return(n,o)=>{const p=h("ak-table");return i(),B(p,{data:r(j),columns:e},null,8,["data"])}}},Y={__name:"README.md.Virtualdd443fd4",setup(d){const e=f([{date:"2022-10-1",sex:"男",status:1,type:"1"},{date:1592751467e3,sex:"女",status:"0",type:"2"},{date:"2019-01-29T16:00:00.000+0000",sex:"男",status:"0",type:"3"},{date:"",sex:"女",status:"1",type:"3"}]),n=[{type:"index",label:"序号"},{label:"日期",prop:"date",formatter:"dateTime"},{label:"性别",prop:"sex",tag:{dict:{男:"info",女:"danger"}}},{label:"状态",prop:"status",dict:{1:"启用",0:"禁用"}},{label:"类型",prop:"type",dict:{1:"类型1",2:"类型2",3:"类型3"},tag:{dict:{1:"danger",2:"success"}}}];return(o,p)=>{const c=h("ak-table");return i(),B(c,{data:e.value,columns:n},null,8,["data"])}}},Z={class:"marked-body"},ss=a("h1",{id:"table-表格"},"Table 表格",-1),as=a("h3",{id:"基本用法"},"基本用法",-1),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"delClick(scope)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),ns=a("h3",{id:"添加序号和checkbox勾选"},"添加序号和checkbox勾选",-1),ts=a("p",null,[a("code",null,'type="selection"'),s("添加勾选框,"),a("code",null,'type="index"'),s("添加序号,"),a("code",null,"getSelectAll"),s("方法可取已勾选行。支持按住"),a("code",null,"ctrl"),s("键一次勾选或取消多个")],-1),ps=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"tableEl"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"delClick(scope)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"allSelect"'),s(">")]),s("全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"unSelect"'),s(">")]),s("取消全选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getSelect"'),s(">")]),s("获取所选行"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleRowSelection(true)"'),s(">")]),s(`
        将第2,3条设为选中状态
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleRowSelection(false)"'),s(">")]),s(`
        取消第2,3条选中状态
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'50px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'50px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` }
  ]

  `),a("span",{class:"hljs-keyword"},"const"),s(" tableEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item))
  }
  `),a("span",{class:"hljs-comment"},"// 全选"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"allSelect"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    tableEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleSelection"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
  }
  `),a("span",{class:"hljs-comment"},"// 取消全选"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"unSelect"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    tableEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleSelection"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  }
  `),a("span",{class:"hljs-comment"},"// 获取当前勾选的所有值"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getSelect"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" val = tableEl."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"getSelectAll"),s(`()
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(val)
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(val))
  }
  `),a("span",{class:"hljs-comment"},"// 选中或取消指定行"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"toggleRowSelection"),s(" = ("),a("span",{class:"hljs-params"},"bool"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" row = [tableData["),a("span",{class:"hljs-number"},"1"),s("], tableData["),a("span",{class:"hljs-number"},"2"),s(`]]
    row.`),a("span",{class:"hljs-title function_"},"forEach"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"row"),s(") =>")]),s(` {
      tableEl.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"toggleRowSelection"),s(`(row, bool)
    })
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),cs=a("h3",{id:"固定表头"},"固定表头",-1),es=a("p",null,[s("纵向内容过多时，可选择固定表头，添加指定高度即可"),a("code",null,"height")],-1),rs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200px"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),os=a("h3",{id:"固定头和列"},"固定头和列",-1),hs=a("p",null,[s("横向内容过多时，可选择固定列。添加宽"),a("code",null,"width"),s("固定列宽；"),a("code",null,"column"),s("添加"),a("code",null,'fixed="left/right"'),s("。需要注意设置表格宽时同时要对每列设置固定宽，否则不会出现横向滚动条")],-1),is=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(`
      `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"tableEl"'),s(`
      `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
      `),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"200px"'),s(`
      `),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"600px"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'50px'"),s(", "),a("span",{class:"hljs-attr"},"fixed"),s(": "),a("span",{class:"hljs-string"},"'left'"),s(", "),a("span",{class:"hljs-attr"},"className"),s(":"),a("span",{class:"hljs-string"},"'fixed-left'"),s(`},
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'50px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'50px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'200px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'100px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'100px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'300px'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-string"},"'100px'"),s(", "),a("span",{class:"hljs-attr"},"fixed"),s(": "),a("span",{class:"hljs-string"},"'right'"),s(", "),a("span",{class:"hljs-attr"},"className"),s(":"),a("span",{class:"hljs-string"},"'fixed-right'"),s(`}
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),js=a("h3",{id:"添加排序"},"添加排序",-1),ds=a("p",null,[a("code",null,"column"),s("添加排序 "),a("code",null,'sortBy="true"'),s("表示当前列可排序。点击排序触发事件"),a("code",null,"sortChange"),s("。设置"),a("code",null,'sortSingle="true"'),s("时只允许一列排序")],-1),As=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(`
      `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"tableEl"'),s(`
      `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
      @`),a("span",{class:"hljs-attr"},"sortChange"),s("="),a("span",{class:"hljs-string"},'"sortChange"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(", "),a("span",{class:"hljs-attr"},"sortBy"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(", "),a("span",{class:"hljs-attr"},"sortBy"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"sortChange"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(obj)
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),us=a("h3",{id:"拖动改变列宽"},"拖动改变列宽",-1),gs=a("p",null,[s("默认所有列允许拖动，当设置"),a("code",null,'drag="false"'),s("不允许拖动。或者是默认情况下对单个column设置"),a("code",null,'drag="false"'),s("表示当前列不可拖动。拖动改变列宽事件"),a("code",null,"dragChange"),s("可返回各列的宽，可用于和服务端对接")],-1),ms=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(`
      `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"tableEl"'),s(`
      `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
      @`),a("span",{class:"hljs-attr"},"dragChange"),s("="),a("span",{class:"hljs-string"},'"dragChange"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(", "),a("span",{class:"hljs-attr"},"drag"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(", "),a("span",{class:"hljs-attr"},"drag"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"dragChange"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(obj)
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),bs=a("h3",{id:"其他参数设置"},"其他参数设置",-1),Es=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.showHeader = !state.showHeader"'),s(`
        >`)]),s(`显示表头:{{ state.showHeader }}</ak-button
      >
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.hover = !state.hover"'),s(">")]),s("hover高亮:{{ state.hover }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.border = !state.border"'),s(">")]),s("显示边框:{{ state.border }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.stripe = !state.stripe"'),s(">")]),s("显示斑马线:{{ state.stripe }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.ellipsis = !state.ellipsis"'),s(`
        >`)]),s(`溢出省略号:{{ state.ellipsis }}</ak-button
      >
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.title = !state.title"'),s(">")]),s("鼠标滑动过提示:{{ state.title }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"state.dragLine = !state.dragLine"'),s(`
        >`)]),s(`拖动改变列宽时垂直线:{{ state.dragLine }}</ak-button
      >
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(`
      `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(`
      `),a("span",{class:"hljs-attr"},":show-header"),s("="),a("span",{class:"hljs-string"},'"state.showHeader"'),s(`
      `),a("span",{class:"hljs-attr"},":hover"),s("="),a("span",{class:"hljs-string"},'"state.hover"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"state.border"'),s(`
      `),a("span",{class:"hljs-attr"},":stripe"),s("="),a("span",{class:"hljs-string"},'"state.stripe"'),s(`
      `),a("span",{class:"hljs-attr"},":ellipsis"),s("="),a("span",{class:"hljs-string"},'"state.ellipsis"'),s(`
      `),a("span",{class:"hljs-attr"},":drag-line"),s("="),a("span",{class:"hljs-string"},'"state.dragLine"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
`),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
    `),a("span",{class:"hljs-attr"},"showHeader"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"hover"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"border"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"stripe"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"ellipsis"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"dragLine"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),Cs=a("h3",{id:"扩展列"},"扩展列",-1),Ds=a("p",null,[a("code",null,'type="extend"'),s(",使用 "),a("code",null,"scope.extend()"),s("方法可展开或收起扩展行列，"),a("code",null,"scope.toggle"),s("返回当前展开或收起状态")],-1),Bs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"scope.extend()"'),s(">")]),s(`{{
            scope.toggle ? '收起' : '展开'
          }}`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extend"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(" 返回当前行所有信息：{{ scope }} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`},
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'extend'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'extend'"),s(` },
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),_s=a("h3",{id:"子级数据"},"子级数据",-1),ks=a("p",null,[s("类似于扩展列，使用 "),a("code",null,"scope.extend()"),s("方法展开或收起子节点，"),a("code",null,"scope.toggle"),s("返回当前展开或收起状态。子节点scope数据除了row，还包含parentRow父级信息")],-1),ys=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":has-child"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"scope.row.children"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"scope.extend()"'),s(">")]),s(`{{
            scope.toggle ? '收起' : '展开子级'
          }}`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),fs=a("h3",{id:"子级异步加载"},"子级异步加载",-1),vs=a("p",null,[s("使用 "),a("code",null,"scope.extend()"),s("方法展开或收起子节点，会触发方法"),a("code",null,"lazyLoad"),s(",通过返回当前行信息以加载异步数据")],-1),xs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(`
      `),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(`
      `),a("span",{class:"hljs-attr"},":has-child"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
      `),a("span",{class:"hljs-attr"},":lazy-load"),s("="),a("span",{class:"hljs-string"},'"lazyLoad"'),s(`
      `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"scope.extend()"'),s(">")]),s(`{{
          scope.toggle ? '收起' : '加载子级'
        }}`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"lazyLoad"),s(" = ("),a("span",{class:"hljs-params"},"row, resolve"),s(`) => {
    `),a("span",{class:"hljs-comment"},"// row 当前点击行信息"),s(`
    `),a("span",{class:"hljs-comment"},"// 模拟请求加载"),s(`
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'row'"),s(`)
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-keyword"},"const"),s(` child = [
        { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'异步数据1'"),s(", "),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2021'"),s(` },
        { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'异步数据2'"),s(", "),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2021'"),s(` }
      ]
      `),a("span",{class:"hljs-title function_"},"resolve"),s(`(child)
    }, `),a("span",{class:"hljs-number"},"500"),s(`)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),ws=_('<h3 id="合并行或列">合并行或列</h3><p>多行或多列共用一个数据时，可以合并行或列。通过给传入<code>rowColSpan</code>合并数据可以实现合并行或列，参数(当前行号<code>row</code>,当前列号<code>col</code>,当前行合并行数<code>rowSpan</code>,合并列数<code>colSpan</code>)。当<code>rowSpan</code> 或<code>colSpan</code>为0时，表示隐藏当前行或列</p>',2),qs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":row-col-span"),s("="),a("span",{class:"hljs-string"},'"rowColSpan"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` rowColSpan = [
    {
      `),a("span",{class:"hljs-attr"},"row"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
      `),a("span",{class:"hljs-attr"},"col"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
      `),a("span",{class:"hljs-attr"},"colSpan"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"row"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
      `),a("span",{class:"hljs-attr"},"col"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
      `),a("span",{class:"hljs-attr"},"colSpan"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
      `),a("span",{class:"hljs-attr"},"rowSpan"),s(": "),a("span",{class:"hljs-number"},"2"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"row"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
      `),a("span",{class:"hljs-attr"},"col"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
      `),a("span",{class:"hljs-attr"},"colSpan"),s(": "),a("span",{class:"hljs-number"},"0"),s(`
    }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'dateTime'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'年份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'月份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'收化地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address2'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Fs=a("h3",{id:"表头参数也支持slots"},"表头参数也支持slots",-1),Ss=a("p",null,"默认slots为当前props，表头时为当前props-header",-1),zs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"delClick(scope)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"date-header"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
        {{ scope.column.label }}slot表头
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`
    }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),Js=a("h3",{id:"多级表头"},"多级表头",-1),$s=a("p",null,[s("多级表头时，"),a("code",null,"prop"),s("作为唯一的key，不能为空或重复")],-1),Ns=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"control"),s("="),a("span",{class:"hljs-string"},'"scope"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"a"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"delClick(scope)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"a"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'dateTime'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'年份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'月份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'收化地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address2'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
          `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`
        }
      ]
    },
    {
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'control'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`
    }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"delClick"),s(" = ("),a("span",{class:"hljs-params"},"item"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(item))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),Rs=a("h3",{id:"带分页组件"},"带分页组件",-1),Ts=a("p",null,"内置分页组件",-1),Ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":pagination"),s("="),a("span",{class:"hljs-string"},'"pagination"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
      `),a("span",{class:"hljs-attr"},"tooltip"),s(": { "),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"direction"),s(": "),a("span",{class:"hljs-string"},"'left'"),s(` }
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(` pagination = {
    `),a("span",{class:"hljs-attr"},"current"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
    `),a("span",{class:"hljs-attr"},"pageSize"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
    `),a("span",{class:"hljs-attr"},"onChange"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"v"),s(") =>")]),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(v)
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Vs=a("h3",{id:"鼠标滑过tooltip提示"},"鼠标滑过tooltip提示",-1),Os=a("p",null,[s("添加"),a("code",null,"tooltip=true"),s("或"),a("code",null,`tooltip="{show:true,direction:'left',..其他所有的tooltip属性}"`),s("即可在鼠标滑过时显示"),a("code",null,"tooltip"),s("提示，不显示可以传"),a("code",null,"show:false"),s(" 默认为"),a("code",null,"true")],-1),Ms=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
      `),a("span",{class:"hljs-attr"},"tooltip"),s(": { "),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"direction"),s(": "),a("span",{class:"hljs-string"},"'left'"),s(` }
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),Hs=_('<h3 id="使用tag显示值">使用Tag显示值</h3><p>使用<code>Tag</code>参数<code>tag={dict:{},...tag组件其他所有参数}</code>，即可在表格中显示<code>tag</code>样式</p><p>其中<code>dict</code>为值对应的<code>tag</code>类型，如<code>dict:{&#39;男&#39;:&#39;info&#39;,&#39;女&#39;:&#39;danger&#39;}</code>，即值为男时显示tag类型为<code>info</code></p>',3),Is=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" tableData "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./demoJs.json'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'selection'"),s(` },
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(", "),a("span",{class:"hljs-attr"},"tag"),s(": { "),a("span",{class:"hljs-attr"},"dict"),s(": { 男: "),a("span",{class:"hljs-string"},"'info'"),s(", 女: "),a("span",{class:"hljs-string"},"'danger'"),s(` } } },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'省份'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'province'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'城市'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'city'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'地址'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'邮编'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'zip'"),s(` }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`


`)])],-1),Ps=_('<h3 id="横向滚动条固定在浏览器底部">横向滚动条固定在浏览器底部</h3><p>通过设置<code>fixedBottomScroll</code>可将横向滚动条固定在浏览器底部，<code>true</code>时滚动主体为<code>document</code>，字符时为当前滚动的区域如<code>fixedBottomScroll=&#39;.scroll</code>&#39;，则滚动区域为<code>scroll</code> ，注意：此设置会覆盖<code>height</code>属性的值</p><h3 id="匹配字典转换值">匹配字典/转换值</h3><p>设置<code>dict</code>可对当前值进行转换，如示例状态字段转换；同时支持<code>tag</code>，如示例类型字段。对于时间类型时，<code>formatter</code>可设置为<code>date/dateTime</code>快速输出格式化时间</p>',4),Ws=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-table"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"tableData"'),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" tableData = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2022-10-1'"),s(`,
      `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
      `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-number"},"1592751467000"),s(`,
      `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
      `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"'2019-01-29T16:00:00.000+0000'"),s(`,
      `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
      `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'0'"),s(`,
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(`
    },
    {
      `),a("span",{class:"hljs-attr"},"date"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
      `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'女'"),s(`,
      `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(`,
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(`
    }
  ])
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
    { `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'index'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'序号'"),s(` },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'date'"),s(`,
      `),a("span",{class:"hljs-attr"},"formatter"),s(": "),a("span",{class:"hljs-string"},"'dateTime'"),s(`
    },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(", "),a("span",{class:"hljs-attr"},"tag"),s(": { "),a("span",{class:"hljs-attr"},"dict"),s(": { 男: "),a("span",{class:"hljs-string"},"'info'"),s(", 女: "),a("span",{class:"hljs-string"},"'danger'"),s(` } } },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'状态'"),s(", "),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'status'"),s(", "),a("span",{class:"hljs-attr"},"dict"),s(": { "),a("span",{class:"hljs-number"},"1"),s(": "),a("span",{class:"hljs-string"},"'启用'"),s(", "),a("span",{class:"hljs-number"},"0"),s(": "),a("span",{class:"hljs-string"},"'禁用'"),s(` } },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'类型'"),s(`,
      `),a("span",{class:"hljs-attr"},"prop"),s(": "),a("span",{class:"hljs-string"},"'type'"),s(`,
      `),a("span",{class:"hljs-attr"},"dict"),s(": { "),a("span",{class:"hljs-number"},"1"),s(": "),a("span",{class:"hljs-string"},"'类型1'"),s(", "),a("span",{class:"hljs-number"},"2"),s(": "),a("span",{class:"hljs-string"},"'类型2'"),s(", "),a("span",{class:"hljs-number"},"3"),s(": "),a("span",{class:"hljs-string"},"'类型3'"),s(` },
      `),a("span",{class:"hljs-attr"},"tag"),s(": { "),a("span",{class:"hljs-attr"},"dict"),s(": { "),a("span",{class:"hljs-number"},"1"),s(": "),a("span",{class:"hljs-string"},"'danger'"),s(", "),a("span",{class:"hljs-number"},"2"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(` } }
    }
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Gs=_(`<h3 id="使用formatter">使用formatter</h3><p>模板不支持lang=&#39;jsx&#39;</p><pre class="language-html"><code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;jsx&quot;</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

<span class="hljs-keyword">const</span> columns = [
  {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>},
  {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>},
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>,
    <span class="hljs-attr">formatter</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span></span>
    }
  }
]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3 id="示例数据">示例数据</h3><pre class="language-json"><code class="hljs"><span class="hljs-punctuation">[</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-03&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;张三&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;children&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
      <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-00&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;子级&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;子级广东&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;子级白云区&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;子级广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
      <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">]</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-04&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-05&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四5&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-06&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四6&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-07&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四7&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-08&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四8&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-09&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四9&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;date&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-05-10&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;李四10&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;province&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;city&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;白云区&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;address&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zip&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200330</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">]</span>
</code></pre><h2 id="api">API</h2><h3 id="table">Table</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>array</td><td>列表数据</td></tr><tr><td>columns</td><td>array</td><td>表头数据</td></tr><tr><td>showHeader</td><td>boolean/true</td><td>是否显示表头</td></tr><tr><td>className</td><td>String</td><td>表格类名</td></tr><tr><td>hover</td><td>boolean/true</td><td>鼠标经过显示高亮</td></tr><tr><td>border</td><td>boolean/false</td><td>是否显示表格纵向边框</td></tr><tr><td>stripe</td><td>boolean/true</td><td>是否显示间隔斑马纹</td></tr><tr><td>height</td><td>String</td><td>table 的高，溢出显示滚动条，且表头固定</td></tr><tr><td>width</td><td>String</td><td>表格外层 div 的宽，当单元格总和大于表格 width 时，出现横向滚动条</td></tr><tr><td>ellipsis</td><td>boolean/true</td><td>表格单元格文字溢出显示...，在不指定列宽时，各列平分表格宽</td></tr><tr><td>emptyText</td><td>String</td><td>无数据时显示的文本</td></tr><tr><td>title</td><td>Boolean/true</td><td>鼠标滑过单元格时显示 title 提示</td></tr><tr><td>drag</td><td>boolean/false</td><td>允许拖动表头改变当前单元格宽度</td></tr><tr><td>dragLine</td><td>boolean/true</td><td>拖动时显示垂直线</td></tr><tr><td>dragWidth</td><td>array</td><td>允许拖动最大与最小宽度[min,max]</td></tr><tr><td>extendToggle</td><td>boolean/false</td><td>扩展行/子节点初始展开或收起状态</td></tr><tr><td>rowColSpan</td><td>function</td><td>合并行或列方法。通过给传入 rowColSpan 方法可以实现合并行或列，方法的参数(当前行号 rowIndex,当前列号 columnIndex,当前行 row,当前列 column)四个属性。该函数返回一个包含两个数字的数组，第一个 rowspan，第二个 colspan，即向纵向和横向合并多少个单元格</td></tr><tr><td>pagination</td><td>object</td><td>有相关参数时显示分页，参数的pagination组件参数</td></tr><tr><td>hasChild</td><td>boolean/true</td><td>是否包含子节点数据，为true时，当 <code>row</code> 中包含 <code>children</code> 字段时，被视为子节点数据</td></tr><tr><td>lazyLoad</td><td>function</td><td>设置了<code>lazyLoad</code>时，被视为子节点使用懒加载方式，function(row,resolve) row当前行信息</td></tr><tr><td>sortSingle</td><td>boolean/false</td><td>如果设置了排序功能，开启后只能按其中一个字段排序</td></tr><tr><td>fixedBottomScroll</td><td>boolean/string</td><td>固定横向滚动条在底部,可为节点类名</td></tr></tbody></table><h3 id="table-event">Table Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>selectClick</td><td>勾选单列事件，function(list,checked,row, index) list所有已勾选的row集合，checked当前状态，row当前点击行信息，index当前行序号</td></tr><tr><td>sortChange</td><td>排序点击事件</td></tr><tr><td>rowClick</td><td>当前行点击事件，即tr点击事件，function(row,index)</td></tr><tr><td>cellClick</td><td>当前列点击事件，即td点击事件，function(row,column,rowIndex, columnIndex)</td></tr><tr><td>dragChange</td><td>拖动改变列表事件，返回所有列的宽度信息</td></tr><tr><td>scroll</td><td>表时滚动时的滚动事件，function(scrollTop,bottom,el)，scrollTop滚动条的位置，bottom是否滚动到底部,el当前滚动的对象</td></tr></tbody></table><h3 id="table-methods">Table Methods</h3><table><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>getSelectAll</td><td>返回所有选中的行</td></tr><tr><td>toggleRowSelection</td><td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） row, selected</td></tr><tr><td>toggleSelection</td><td>用于多选表格，切换所有行的选中/清空状态,true为选中，false取消选中，默认false</td></tr><tr><td>clearSort</td><td>用于清空排序条件</td></tr></tbody></table><h3 id="table-column">Table-column</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>prop</td><td>String</td><td>对应列内容的字段名，唯一的key，不能重复</td></tr><tr><td>label</td><td>String</td><td>显示的标题</td></tr><tr><td>width</td><td>String</td><td>对应列的宽度</td></tr><tr><td>className</td><td>String</td><td>对应列的类名</td></tr><tr><td>align</td><td>String</td><td>对齐方式，可选 left/center/right</td></tr><tr><td>type</td><td>String</td><td>对应列类型，可选 selection（多选）/index 序号/extend 扩展列</td></tr><tr><td>fixed</td><td>Boolean/false</td><td>固定列，可选 left/right</td></tr><tr><td>sortBy</td><td>Boolean/false</td><td>当前列显示排序按钮</td></tr><tr><td>title</td><td>Boolean/false</td><td>鼠标滑过单元格时显示 title 提示，仅当 table 的 title 为 false 时有效</td></tr><tr><td>drag</td><td>Boolean/true</td><td>允许当前单元格拖动，仅在table的drag=true时有效</td></tr><tr><td>formatter</td><td>function/string</td><td>用来格式化内容,Function(row, column, cellValue, index)；当为时间类型时，值可为<code>date,dateTime</code>快速输出格式化时间</td></tr><tr><td>tooltip</td><td>boolean/object</td><td>鼠标滑过显示<code>tooltip</code>，参数详见<code>tooltip</code>组件</td></tr><tr><td>tag</td><td>object</td><td>使用<code>tag</code>样式显示对应值，参数详见<code>tag</code></td></tr><tr><td>tag.dict</td><td>object</td><td>类型对应字典</td></tr><tr><td>dict</td><td>object</td><td>类型对应字典</td></tr><tr><td>placeholder</td><td>string</td><td>为空时输入值</td></tr></tbody></table><h3 id="table-column-slot">Table-column Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义列的内容，参数为 { row, index, extend }</td></tr><tr><td>header</td><td>自定义表头的内容，参数为 { column, index }</td></tr></tbody></table>`,16),Ys={__name:"README",setup(d){return(e,n)=>(i(),g("div",Z,[ss,as,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%3Ca%20%40click%3D%22delClick(scope)%22%3E%E5%88%A0%E9%99%A4%3C%2Fa%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fak-table%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%0A%20%20%5D%0A%20%20const%20delClick%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(item))%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[ls]),default:t(()=>[l(q)]),_:1}),ns,ts,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20ref%3D%22tableEl%22%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%3Ca%20%40click%3D%22delClick(scope)%22%3E%E5%88%A0%E9%99%A4%3C%2Fa%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22allSelect%22%3E%E5%85%A8%E9%80%89%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22unSelect%22%3E%E5%8F%96%E6%B6%88%E5%85%A8%E9%80%89%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22getSelect%22%3E%E8%8E%B7%E5%8F%96%E6%89%80%E9%80%89%E8%A1%8C%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22toggleRowSelection(true)%22%3E%0A%20%20%20%20%20%20%20%20%E5%B0%86%E7%AC%AC2%2C3%E6%9D%A1%E8%AE%BE%E4%B8%BA%E9%80%89%E4%B8%AD%E7%8A%B6%E6%80%81%0A%20%20%20%20%20%20%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22toggleRowSelection(false)%22%3E%0A%20%20%20%20%20%20%20%20%E5%8F%96%E6%B6%88%E7%AC%AC2%2C3%E6%9D%A1%E9%80%89%E4%B8%AD%E7%8A%B6%E6%80%81%0A%20%20%20%20%20%20%3C%2Fak-button%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%2C%20width%3A%20'50px'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%2C%20width%3A%20'50px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%0A%20%20%5D%0A%0A%20%20const%20tableEl%20%3D%20ref()%0A%20%20const%20delClick%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(item))%0A%20%20%7D%0A%20%20%2F%2F%20%E5%85%A8%E9%80%89%0A%20%20const%20allSelect%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20tableEl.value.toggleSelection(true)%0A%20%20%7D%0A%20%20%2F%2F%20%E5%8F%96%E6%B6%88%E5%85%A8%E9%80%89%0A%20%20const%20unSelect%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20tableEl.value.toggleSelection(false)%0A%20%20%7D%0A%20%20%2F%2F%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E5%8B%BE%E9%80%89%E7%9A%84%E6%89%80%E6%9C%89%E5%80%BC%0A%20%20const%20getSelect%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20val%20%3D%20tableEl.value.getSelectAll()%0A%20%20%20%20console.log(val)%0A%20%20%20%20alert(JSON.stringify(val))%0A%20%20%7D%0A%20%20%2F%2F%20%E9%80%89%E4%B8%AD%E6%88%96%E5%8F%96%E6%B6%88%E6%8C%87%E5%AE%9A%E8%A1%8C%0A%20%20const%20toggleRowSelection%20%3D%20(bool)%20%3D%3E%20%7B%0A%20%20%20%20const%20row%20%3D%20%5BtableData%5B1%5D%2C%20tableData%5B2%5D%5D%0A%20%20%20%20row.forEach((row)%20%3D%3E%20%7B%0A%20%20%20%20%20%20tableEl.value.toggleRowSelection(row%2C%20bool)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[ps]),default:t(()=>[l(S)]),_:1}),cs,es,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20height%3D%22200px%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E"},{code:t(()=>[rs]),default:t(()=>[l(z)]),_:1}),os,hs,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%0A%20%20%20%20%20%20ref%3D%22tableEl%22%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20height%3D%22200px%22%0A%20%20%20%20%20%20width%3D%22600px%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%2C%20width%3A%20'50px'%2C%20fixed%3A%20'left'%2C%20className%3A'fixed-left'%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%2C%20width%3A%20'50px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%2C%20width%3A%20'50px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%2C%20width%3A%20'200px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%2C%20width%3A%20'100px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%2C%20width%3A%20'100px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%2C%20width%3A%20'300px'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%2C%20width%3A%20'100px'%2C%20fixed%3A%20'right'%2C%20className%3A'fixed-right'%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[is]),default:t(()=>[l(J)]),_:1}),js,ds,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%0A%20%20%20%20%20%20ref%3D%22tableEl%22%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%40sortChange%3D%22sortChange%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%2C%20sortBy%3A%20true%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%2C%20sortBy%3A%20true%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%20%20const%20sortChange%20%3D%20(obj)%20%3D%3E%20%7B%0A%20%20%20%20console.log(obj)%0A%20%20%20%20alert(JSON.stringify(obj))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[As]),default:t(()=>[l($)]),_:1}),us,gs,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%0A%20%20%20%20%20%20ref%3D%22tableEl%22%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%40dragChange%3D%22dragChange%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%2C%20drag%3A%20false%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%2C%20drag%3A%20false%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%20%20const%20dragChange%20%3D%20(obj)%20%3D%3E%20%7B%0A%20%20%20%20console.log(obj)%0A%20%20%20%20alert(JSON.stringify(obj))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[ms]),default:t(()=>[l(N)]),_:1}),bs,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.showHeader%20%3D%20!state.showHeader%22%0A%20%20%20%20%20%20%20%20%3E%E6%98%BE%E7%A4%BA%E8%A1%A8%E5%A4%B4%3A%7B%7B%20state.showHeader%20%7D%7D%3C%2Fak-button%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.hover%20%3D%20!state.hover%22%3Ehover%E9%AB%98%E4%BA%AE%3A%7B%7B%20state.hover%20%7D%7D%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.border%20%3D%20!state.border%22%3E%E6%98%BE%E7%A4%BA%E8%BE%B9%E6%A1%86%3A%7B%7B%20state.border%20%7D%7D%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.stripe%20%3D%20!state.stripe%22%3E%E6%98%BE%E7%A4%BA%E6%96%91%E9%A9%AC%E7%BA%BF%3A%7B%7B%20state.stripe%20%7D%7D%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.ellipsis%20%3D%20!state.ellipsis%22%0A%20%20%20%20%20%20%20%20%3E%E6%BA%A2%E5%87%BA%E7%9C%81%E7%95%A5%E5%8F%B7%3A%7B%7B%20state.ellipsis%20%7D%7D%3C%2Fak-button%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.title%20%3D%20!state.title%22%3E%E9%BC%A0%E6%A0%87%E6%BB%91%E5%8A%A8%E8%BF%87%E6%8F%90%E7%A4%BA%3A%7B%7B%20state.title%20%7D%7D%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Cak-button%20%40click%3D%22state.dragLine%20%3D%20!state.dragLine%22%0A%20%20%20%20%20%20%20%20%3E%E6%8B%96%E5%8A%A8%E6%94%B9%E5%8F%98%E5%88%97%E5%AE%BD%E6%97%B6%E5%9E%82%E7%9B%B4%E7%BA%BF%3A%7B%7B%20state.dragLine%20%7D%7D%3C%2Fak-button%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cak-table%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%3Ashow-header%3D%22state.showHeader%22%0A%20%20%20%20%20%20%3Ahover%3D%22state.hover%22%0A%20%20%20%20%20%20%3Aborder%3D%22state.border%22%0A%20%20%20%20%20%20%3Astripe%3D%22state.stripe%22%0A%20%20%20%20%20%20%3Aellipsis%3D%22state.ellipsis%22%0A%20%20%20%20%20%20%3Adrag-line%3D%22state.dragLine%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20reactive%20%7D%20from%20'vue'%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0Aconst%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%20%20const%20state%20%3D%20reactive(%7B%0A%20%20%20%20showHeader%3A%20true%2C%0A%20%20%20%20hover%3A%20true%2C%0A%20%20%20%20border%3A%20true%2C%0A%20%20%20%20stripe%3A%20true%2C%0A%20%20%20%20ellipsis%3A%20true%2C%0A%20%20%20%20title%3A%20true%2C%0A%20%20%20%20dragLine%3A%20true%0A%20%20%7D)%0A%3C%2Fscript%3E"},{code:t(()=>[Es]),default:t(()=>[l(R)]),_:1}),Cs,Ds,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20%40click%3D%22scope.extend()%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scope.toggle%20%3F%20'%E6%94%B6%E8%B5%B7'%20%3A%20'%E5%B1%95%E5%BC%80'%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23extend%3D%22scope%22%3E%20%E8%BF%94%E5%9B%9E%E5%BD%93%E5%89%8D%E8%A1%8C%E6%89%80%E6%9C%89%E4%BF%A1%E6%81%AF%EF%BC%9A%7B%7B%20scope%20%7D%7D%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'extend'%2C%20prop%3A%20'extend'%20%7D%2C%0A%20%20%5D%0A%3C%2Fscript%3E"},{code:t(()=>[Bs]),default:t(()=>[l(L)]),_:1}),_s,ks,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Ahas-child%3D%22true%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20v-if%3D%22scope.row.children%22%20%40click%3D%22scope.extend()%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scope.toggle%20%3F%20'%E6%94%B6%E8%B5%B7'%20%3A%20'%E5%B1%95%E5%BC%80%E5%AD%90%E7%BA%A7'%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[ys]),default:t(()=>[l(O)]),_:1}),fs,vs,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%3Ahas-child%3D%22true%22%0A%20%20%20%20%20%20%3Alazy-load%3D%22lazyLoad%22%0A%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20%40click%3D%22scope.extend()%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20%20%20scope.toggle%20%3F%20'%E6%94%B6%E8%B5%B7'%20%3A%20'%E5%8A%A0%E8%BD%BD%E5%AD%90%E7%BA%A7'%0A%20%20%20%20%20%20%20%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%20prop%3A%20'control'%20%7D%0A%20%20%5D%0A%20%20const%20lazyLoad%20%3D%20(row%2C%20resolve)%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20row%20%E5%BD%93%E5%89%8D%E7%82%B9%E5%87%BB%E8%A1%8C%E4%BF%A1%E6%81%AF%0A%20%20%20%20%2F%2F%20%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E5%8A%A0%E8%BD%BD%0A%20%20%20%20console.log('row')%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20child%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%BC%82%E6%AD%A5%E6%95%B0%E6%8D%AE1'%2C%20date%3A%20'2021'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%BC%82%E6%AD%A5%E6%95%B0%E6%8D%AE2'%2C%20date%3A%20'2021'%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20resolve(child)%0A%20%20%20%20%7D%2C%20500)%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%0A"},{code:t(()=>[xs]),default:t(()=>[l(H)]),_:1}),ws,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Arow-col-span%3D%22rowColSpan%22%20%3Acolumns%3D%22columns%22%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20rowColSpan%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20row%3A%201%2C%0A%20%20%20%20%20%20col%3A%202%2C%0A%20%20%20%20%20%20colSpan%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20row%3A%202%2C%0A%20%20%20%20%20%20col%3A%200%2C%0A%20%20%20%20%20%20colSpan%3A%202%2C%0A%20%20%20%20%20%20rowSpan%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20row%3A%203%2C%0A%20%20%20%20%20%20col%3A%201%2C%0A%20%20%20%20%20%20colSpan%3A%200%0A%20%20%20%20%7D%0A%20%20%5D%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0A%20%20%20%20%20%20prop%3A%20'dateTime'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'date'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%9C%88%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'date'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'name'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%A7%93%E5%90%8D'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%94%B6%E5%8C%96%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address2'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'province'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'city'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'address'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'control'%2C%0A%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C'%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[qs]),default:t(()=>[l(I)]),_:1}),Fs,Ss,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%3Ca%20%40click%3D%22delClick(scope)%22%3E%E5%88%A0%E9%99%A4%3C%2Fa%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23date-header%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20scope.column.label%20%7D%7Dslot%E8%A1%A8%E5%A4%B4%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'selection'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'index'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%BA%8F%E5%8F%B7'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'name'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%A7%93%E5%90%8D'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'address'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'control'%2C%0A%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C'%0A%20%20%20%20%7D%0A%20%20%5D%0A%20%20const%20delClick%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(item))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[zs]),default:t(()=>[l(W)]),_:1}),Js,$s,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23control%3D%22scope%22%3E%0A%20%20%20%20%20%20%20%20%3Ca%20%40click%3D%22delClick(scope)%22%3E%E5%88%A0%E9%99%A4%3C%2Fa%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0A%20%20%20%20%20%20prop%3A%20'dateTime'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'date'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%9C%88%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'date'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'name'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%A7%93%E5%90%8D'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%94%B6%E5%8C%96%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address2'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'province'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'city'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20prop%3A%20'address'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20prop%3A%20'control'%2C%0A%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C'%0A%20%20%20%20%7D%0A%20%20%5D%0A%20%20const%20delClick%20%3D%20(item)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(item))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[Ns]),default:t(()=>[l(K)]),_:1}),Rs,Ts,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Apagination%3D%22pagination%22%20%3Acolumns%3D%22columns%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address'%2C%0A%20%20%20%20%20%20tooltip%3A%20%7B%20show%3A%20true%2C%20direction%3A%20'left'%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%20%20const%20pagination%20%3D%20%7B%0A%20%20%20%20current%3A%201%2C%0A%20%20%20%20pageSize%3A%203%2C%0A%20%20%20%20onChange%3A%20(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(v)%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[Ls]),default:t(()=>[l(Q)]),_:1}),Vs,Os,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%0A%20%20%20%20%20%20prop%3A%20'address'%2C%0A%20%20%20%20%20%20tooltip%3A%20%7B%20show%3A%20true%2C%20direction%3A%20'left'%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A%0A"},{code:t(()=>[Ms]),default:t(()=>[l(U)]),_:1}),Hs,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20tableData%20from%20'.%2FdemoJs.json'%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'selection'%20%7D%2C%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%20prop%3A%20'date'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%A7%93%E5%90%8D'%2C%20prop%3A%20'name'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%2C%20tag%3A%20%7B%20dict%3A%20%7B%20%E7%94%B7%3A%20'info'%2C%20%E5%A5%B3%3A%20'danger'%20%7D%20%7D%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%9C%81%E4%BB%BD'%2C%20prop%3A%20'province'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9F%8E%E5%B8%82'%2C%20prop%3A%20'city'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E5%9C%B0%E5%9D%80'%2C%20prop%3A%20'address'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E9%82%AE%E7%BC%96'%2C%20prop%3A%20'zip'%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A%0A%0A"},{code:t(()=>[Is]),default:t(()=>[l(X)]),_:1}),Ps,l(r(A),{code:"%3Ctemplate%3E%0A%20%20%3Cak-table%20%3Adata%3D%22tableData%22%20%3Acolumns%3D%22columns%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20tableData%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20date%3A%20'2022-10-1'%2C%0A%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20status%3A%201%2C%0A%20%20%20%20%20%20type%3A%20'1'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20date%3A%201592751467000%2C%0A%20%20%20%20%20%20sex%3A%20'%E5%A5%B3'%2C%0A%20%20%20%20%20%20status%3A%20'0'%2C%0A%20%20%20%20%20%20type%3A%20'2'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20date%3A%20'2019-01-29T16%3A00%3A00.000%2B0000'%2C%0A%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20status%3A%20'0'%2C%0A%20%20%20%20%20%20type%3A%20'3'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20date%3A%20''%2C%0A%20%20%20%20%20%20sex%3A%20'%E5%A5%B3'%2C%0A%20%20%20%20%20%20status%3A%20'1'%2C%0A%20%20%20%20%20%20type%3A%20'3'%0A%20%20%20%20%7D%0A%20%20%5D)%0A%20%20const%20columns%20%3D%20%5B%0A%20%20%20%20%7B%20type%3A%20'index'%2C%20label%3A%20'%E5%BA%8F%E5%8F%B7'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0A%20%20%20%20%20%20formatter%3A%20'dateTime'%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20prop%3A%20'sex'%2C%20tag%3A%20%7B%20dict%3A%20%7B%20%E7%94%B7%3A%20'info'%2C%20%E5%A5%B3%3A%20'danger'%20%7D%20%7D%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'%E7%8A%B6%E6%80%81'%2C%20prop%3A%20'status'%2C%20dict%3A%20%7B%201%3A%20'%E5%90%AF%E7%94%A8'%2C%200%3A%20'%E7%A6%81%E7%94%A8'%20%7D%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E7%B1%BB%E5%9E%8B'%2C%0A%20%20%20%20%20%20prop%3A%20'type'%2C%0A%20%20%20%20%20%20dict%3A%20%7B%201%3A%20'%E7%B1%BB%E5%9E%8B1'%2C%202%3A%20'%E7%B1%BB%E5%9E%8B2'%2C%203%3A%20'%E7%B1%BB%E5%9E%8B3'%20%7D%2C%0A%20%20%20%20%20%20tag%3A%20%7B%20dict%3A%20%7B%201%3A%20'danger'%2C%202%3A%20'success'%20%7D%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:t(()=>[Ws]),default:t(()=>[l(Y)]),_:1}),Gs]))}};export{Ys as default};
