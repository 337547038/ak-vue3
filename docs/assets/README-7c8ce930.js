import{a as r,o as u,e as T,w as j,g as s,u as q,r as g,c as k,b as e,f as t,h as N,t as h,p as B,_ as L,n as m,d as O,i as V,j as d}from"./index-6c3c2d70.js";const v=[{date:"2016-05-03",name:"张三",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男",children:[{date:"2016-05-00",name:"子级",province:"子级广东",city:"子级白云区",address:"子级广东省广州市白云区无名路888号",zip:200330,sex:0}]},{date:"2016-05-04",name:"李四",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男"},{date:"2016-05-05",name:"李四5",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-06",name:"李四6",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"男"},{date:"2016-05-07",name:"李四7",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-08",name:"李四8",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-09",name:"李四9",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"},{date:"2016-05-10",name:"李四10",province:"广东",city:"白云区",address:"广东省广州市白云区无名路888号",zip:200330,sex:"女"}],P=["onClick"],F={__name:"README.md.vdpv_0",setup(n){const a=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return u(),T(c,{data:q(v),columns:a},{control:j(i=>[s("a",{onClick:_=>l(i)},"删除",8,P)]),_:1},8,["data"])}}},W=["onClick"],G={__name:"README.md.vdpv_1",setup(n){const a=[{type:"selection",width:"50px"},{type:"index",label:"序号",width:"50px"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}],l=g(),o=y=>{alert(JSON.stringify(y))},p=()=>{l.value.toggleSelection(!0)},c=()=>{l.value.toggleSelection(!1)},i=()=>{const y=l.value.getSelectAll();console.log(y),alert(JSON.stringify(y))},_=y=>{[v[1],v[2]].forEach(x=>{l.value.toggleRowSelection(x,y)})};return(y,f)=>{const x=r("ak-table"),w=r("ak-button");return u(),k("div",null,[e(x,{ref_key:"tableEl",ref:l,data:q(v),columns:a},{control:j(C=>[s("a",{onClick:H=>o(C)},"删除",8,W)]),_:1},8,["data"]),s("p",null,[e(w,{onClick:p},{default:j(()=>[t("全选")]),_:1}),e(w,{onClick:c},{default:j(()=>[t("取消全选")]),_:1}),e(w,{onClick:i},{default:j(()=>[t("获取所选行")]),_:1}),e(w,{onClick:f[0]||(f[0]=C=>_(!0))},{default:j(()=>[t(" 将第2,3条设为选中状态 ")]),_:1}),e(w,{onClick:f[1]||(f[1]=C=>_(!1))},{default:j(()=>[t(" 取消第2,3条选中状态 ")]),_:1})])])}}},K={__name:"README.md.vdpv_2",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"},{label:"操作",prop:"control"}];return(l,o)=>{const p=r("ak-table");return u(),k("div",null,[e(p,{data:q(v),height:"200px",columns:a},null,8,["data"])])}}},Q={__name:"README.md.vdpv_3",setup(n){const a=[{type:"selection",width:"50px",fixed:"left",className:"fixed-left"},{type:"index",label:"序号",width:"50px"},{label:"日期",prop:"date",width:"50px"},{label:"姓名",prop:"name",width:"200px"},{label:"省份",prop:"province",width:"100px"},{label:"城市",prop:"city",width:"100px"},{label:"地址",prop:"address",width:"300px"},{label:"邮编",prop:"zip",width:"100px",fixed:"right",className:"fixed-right"}];return(l,o)=>{const p=r("ak-table");return u(),k("div",null,[e(p,{ref:"tableEl",data:q(v),columns:a,height:"200px",width:"600px"},null,8,["data"])])}}},U={__name:"README.md.vdpv_4",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date",sortBy:!0},{label:"姓名",prop:"name",sortBy:!0},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],l=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{ref:"tableEl",data:q(v),columns:a,onSortChange:l},null,8,["data"])])}}},X={__name:"README.md.vdpv_5",setup(n){const a=[{type:"selection",drag:!1},{type:"index",label:"序号",drag:!1},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],l=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{ref:"tableEl",data:q(v),columns:a,onDragChange:l},null,8,["data"])])}}},Y={__name:"README.md.vdpv_6",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],l=N({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0});return(o,p)=>{const c=r("ak-button"),i=r("ak-table");return u(),k("div",null,[s("p",null,[e(c,{onClick:p[0]||(p[0]=_=>l.showHeader=!l.showHeader)},{default:j(()=>[t("显示表头:"+h(l.showHeader),1)]),_:1}),e(c,{onClick:p[1]||(p[1]=_=>l.hover=!l.hover)},{default:j(()=>[t("hover高亮:"+h(l.hover),1)]),_:1}),e(c,{onClick:p[2]||(p[2]=_=>l.border=!l.border)},{default:j(()=>[t("显示边框:"+h(l.border),1)]),_:1}),e(c,{onClick:p[3]||(p[3]=_=>l.stripe=!l.stripe)},{default:j(()=>[t("显示斑马线:"+h(l.stripe),1)]),_:1}),e(c,{onClick:p[4]||(p[4]=_=>l.ellipsis=!l.ellipsis)},{default:j(()=>[t("溢出省略号:"+h(l.ellipsis),1)]),_:1}),e(c,{onClick:p[5]||(p[5]=_=>l.title=!l.title)},{default:j(()=>[t("鼠标滑动过提示:"+h(l.title),1)]),_:1}),e(c,{onClick:p[6]||(p[6]=_=>l.dragLine=!l.dragLine)},{default:j(()=>[t("拖动改变列宽时垂直线:"+h(l.dragLine),1)]),_:1})]),e(i,{data:q(v),"show-header":l.showHeader,hover:l.hover,border:l.border,stripe:l.stripe,ellipsis:l.ellipsis,"drag-line":l.dragLine,columns:a},null,8,["data","show-header","hover","border","stripe","ellipsis","drag-line"])])}}},Z=["onClick"],ss={__name:"README.md.vdpv_7",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"},{type:"extend",prop:"extend"}];return(l,o)=>{const p=r("ak-table");return u(),k("div",null,[e(p,{data:q(v),columns:a},{control:j(c=>[s("span",{onClick:i=>c.extend()},h(c.toggle?"收起":"展开"),9,Z)]),extend:j(c=>[t(" 返回当前行所有信息："+h(c),1)]),_:1},8,["data"])])}}},as=["onClick"],ns={__name:"README.md.vdpv_8",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"}];return(l,o)=>{const p=r("ak-table");return u(),k("div",null,[e(p,{data:q(v),"has-child":!0,columns:a},{control:j(c=>[c.row.children?(u(),k("span",{key:0,onClick:i=>c.extend()},h(c.toggle?"收起":"展开子级"),9,as)):B("",!0)]),_:1},8,["data"])])}}},ls=["onClick"],ts={__name:"README.md.vdpv_9",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"操作",prop:"control"}],l=(o,p)=>{console.log("row"),setTimeout(()=>{p([{name:"异步数据1",date:"2021"},{name:"异步数据2",date:"2021"}])},500)};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{data:q(v),"has-child":!0,"lazy-load":l,columns:a},{control:j(i=>[s("span",{onClick:_=>i.extend()},h(i.toggle?"收起":"加载子级"),9,ls)]),_:1},8,["data"])])}}},ps={__name:"README.md.vdpv_10",setup(n){const a=[{row:1,col:2,colSpan:2},{row:2,col:0,colSpan:2,rowSpan:2},{row:3,col:1,colSpan:0}],l=[{label:"日期",prop:"dateTime",children:[{label:"年份",prop:"date"},{label:"月份",prop:"date"}]},{prop:"name",label:"姓名"},{label:"收化地址",prop:"address2",children:[{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"}]},{prop:"control",label:"操作"}];return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{data:q(v),"row-col-span":a,columns:l},null,8,["data"])])}}},es=["onClick"],cs={__name:"README.md.vdpv_11",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"},{prop:"control",label:"操作"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{data:q(v),columns:a},{control:j(i=>[s("a",{onClick:_=>l(i)},"删除",8,es)]),"date-header":j(i=>[t(h(i.column.label)+"slot表头 ",1)]),_:1},8,["data"])])}}},os=["onClick"],rs={__name:"README.md.vdpv_12",setup(n){const a=[{label:"日期",prop:"dateTime",children:[{label:"年份",prop:"date"},{label:"月份",prop:"date"}]},{prop:"name",label:"姓名"},{label:"收化地址",prop:"address2",children:[{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"}]},{prop:"control",label:"操作"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{data:q(v),columns:a},{control:j(i=>[s("a",{onClick:_=>l(i)},"删除",8,os)]),_:1},8,["data"])])}}},hs={__name:"README.md.vdpv_13",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"邮编",prop:"zip"}],l={current:1,pageSize:3,onChange:o=>{console.log(o)}};return(o,p)=>{const c=r("ak-table");return u(),k("div",null,[e(c,{data:q(v),pagination:l,columns:a},null,8,["data"])])}}},ds={__name:"README.md.vdpv_14",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"邮编",prop:"zip"}];return(l,o)=>{const p=r("ak-table");return u(),T(p,{data:q(v),columns:a},null,8,["data"])}}},is={__name:"README.md.vdpv_15",setup(n){const a=[{type:"selection"},{type:"index",label:"序号"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"性别",prop:"sex",tag:{dict:{男:"info",女:"danger"}}},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}];return(l,o)=>{const p=r("ak-table");return u(),T(p,{data:q(v),columns:a},null,8,["data"])}}},js={__name:"README.md.vdpv_16",setup(n){const a=g([{date:"2022-10-1",sex:"男",status:1,type:"1"},{date:1592751467e3,sex:"女",status:"0",type:"2"},{date:"2019-01-29T16:00:00.000+0000",sex:"男",status:"0",type:"3"},{date:"",sex:"女",status:"1",type:"3"}]),l=[{type:"index",label:"序号"},{label:"日期",prop:"date",formatter:"dateTime"},{label:"性别",prop:"sex",tag:{dict:{男:"info",女:"danger"}}},{label:"状态",prop:"status",dict:{1:"启用",0:"禁用"}},{label:"类型",prop:"type",dict:{1:"类型1",2:"类型2",3:"类型3"},tag:{dict:{1:"danger",2:"success"}}}];return(o,p)=>{const c=r("ak-table");return u(),T(c,{data:a.value,columns:l},null,8,["data"])}}},M=O({components:{vdpv_0:F,vdpv_1:G,vdpv_2:K,vdpv_3:Q,vdpv_4:U,vdpv_5:X,vdpv_6:Y,vdpv_7:ss,vdpv_8:ns,vdpv_9:ts,vdpv_10:ps,vdpv_11:cs,vdpv_12:rs,vdpv_13:hs,vdpv_14:ds,vdpv_15:is,vdpv_16:js},setup(n){const a=g(),l=g(),o=g(),p=g(),c=g(),i=g(),_=g(),y=g(),f=g(),x=g(),w=g(),C=g(),H=g(),D=g(),E=g(),A=g(),z=g(),I=[a,l,o,p,c,i,_,y,f,x,w,C,H,D,E,A,z],S=N({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0,vdpv_16Height:0});return{toggleCode:$=>{const R="vdpv_"+$;S[R+"Height"]===0?S[R+"Height"]=(I[$].value?I[$].value.offsetHeight:0)||0:S[R+"Height"]=0},...V(S),vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:o,vdpv_3Ref:p,vdpv_4Ref:c,vdpv_5Ref:i,vdpv_6Ref:_,vdpv_7Ref:y,vdpv_8Ref:f,vdpv_9Ref:x,vdpv_10Ref:w,vdpv_11Ref:C,vdpv_12Ref:H,vdpv_13Ref:D,vdpv_14Ref:E,vdpv_15Ref:A,vdpv_16Ref:z}}});M.$vd={matter:{},toc:[{content:"Table 表格",anchor:"table-表格",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"添加序号和checkbox勾选",anchor:"添加序号和checkbox勾选",level:3},{content:"固定表头",anchor:"固定表头",level:3},{content:"固定头和列",anchor:"固定头和列",level:3},{content:"添加排序",anchor:"添加排序",level:3},{content:"拖动改变列宽",anchor:"拖动改变列宽",level:3},{content:"其他参数设置",anchor:"其他参数设置",level:3},{content:"扩展列",anchor:"扩展列",level:3},{content:"子级数据",anchor:"子级数据",level:3},{content:"子级异步加载",anchor:"子级异步加载",level:3},{content:"合并行或列",anchor:"合并行或列",level:3},{content:"表头参数也支持slots",anchor:"表头参数也支持slots",level:3},{content:"多级表头",anchor:"多级表头",level:3},{content:"带分页组件",anchor:"带分页组件",level:3},{content:"鼠标滑过tooltip提示",anchor:"鼠标滑过tooltip提示",level:3},{content:"使用Tag显示值",anchor:"使用tag显示值",level:3},{content:"横向滚动条固定在浏览器底部",anchor:"横向滚动条固定在浏览器底部",level:3},{content:"匹配字典/转换值",anchor:"匹配字典转换值",level:3},{content:"使用formatter",anchor:"使用formatter",level:3},{content:"示例数据",anchor:"示例数据",level:3},{content:"API",anchor:"api",level:2},{content:"Table",anchor:"table",level:3},{content:"Table Event",anchor:"table-event",level:3},{content:"Table Methods",anchor:"table-methods",level:3},{content:"Table-column",anchor:"table-column",level:3},{content:"Table-column Slot",anchor:"table-column-slot",level:3}]};const gs=M,us={class:"vuedoc"},_s=d('<h1 id="table-表格" data-source-line="3"><a class="markdownIt-Anchor" href="#table-表格">#</a> Table 表格</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),vs={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},bs={class:"vuedoc-demo__preview"},qs={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ks=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ys=[ks],fs=s("h3",{id:"添加序号和checkbox勾选","data-source-line":"34"},[s("a",{class:"markdownIt-Anchor",href:"#添加序号和checkbox勾选"},"#"),t(" 添加序号和checkbox勾选")],-1),ws=s("p",{"data-source-line":"36"},[s("code",null,'type="selection"'),t("添加勾选框,"),s("code",null,'type="index"'),t("添加序号,"),s("code",null,"getSelectAll"),t("方法可取已勾选行。支持按住"),s("code",null,"ctrl"),t("键一次勾选或取消多个")],-1),xs=s("pre",{style:{display:"none"}},null,-1),Cs={class:"vuedoc-demo"},Ss={class:"vuedoc-demo__inner"},Hs={class:"vuedoc-demo__preview"},$s={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Rs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;allSelect&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;unSelect&quot;</span>&gt;</span>取消全选<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getSelect&quot;</span>&gt;</span>获取所选行<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(true)&quot;</span>&gt;</span>
        将第2,3条设为选中状态
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(false)&quot;</span>&gt;</span>
        取消第2,3条选中状态
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]

  <span class="hljs-keyword">const</span> tableEl = ref()
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
  <span class="hljs-comment">// 全选</span>
  <span class="hljs-keyword">const</span> allSelect = <span class="hljs-function">() =&gt;</span> {
    tableEl.value.toggleSelection(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-comment">// 取消全选</span>
  <span class="hljs-keyword">const</span> unSelect = <span class="hljs-function">() =&gt;</span> {
    tableEl.value.toggleSelection(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-comment">// 获取当前勾选的所有值</span>
  <span class="hljs-keyword">const</span> getSelect = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> val = tableEl.value.getSelectAll()
    <span class="hljs-built_in">console</span>.log(val)
    alert(<span class="hljs-built_in">JSON</span>.stringify(val))
  }
  <span class="hljs-comment">// 选中或取消指定行</span>
  <span class="hljs-keyword">const</span> toggleRowSelection = <span class="hljs-function">(<span class="hljs-params">bool</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> row = [tableData[<span class="hljs-number">1</span>], tableData[<span class="hljs-number">2</span>]]
    row.forEach(<span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
      tableEl.value.toggleRowSelection(row, bool)
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ds=[Rs],Es=s("h3",{id:"固定表头","data-source-line":"104"},[s("a",{class:"markdownIt-Anchor",href:"#固定表头"},"#"),t(" 固定表头")],-1),As=s("p",{"data-source-line":"106"},[t("纵向内容过多时，可选择固定表头，添加指定高度即可"),s("code",null,"height")],-1),zs=s("pre",{style:{display:"none"}},null,-1),Is={class:"vuedoc-demo"},Ts={class:"vuedoc-demo__inner"},Js={class:"vuedoc-demo__preview"},Ns={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ms=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Bs=[Ms],Ls=s("h3",{id:"固定头和列","data-source-line":"131"},[s("a",{class:"markdownIt-Anchor",href:"#固定头和列"},"#"),t(" 固定头和列")],-1),Os=s("p",{"data-source-line":"133"},[t("横向内容过多时，可选择固定列。添加宽"),s("code",null,"width"),t("固定列宽；"),s("code",null,"column"),t("添加"),s("code",null,'fixed="left/right"'),t("。需要注意设置表格宽时同时要对每列设置固定宽，否则不会出现横向滚动条")],-1),Vs=s("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo"},Fs={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Gs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ks=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
      <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600px&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span>, <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#39;left&#39;</span>, <span class="hljs-attr">className</span>:<span class="hljs-string">&#39;fixed-left&#39;</span>},
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;200px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;300px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span>, <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#39;right&#39;</span>, <span class="hljs-attr">className</span>:<span class="hljs-string">&#39;fixed-right&#39;</span>}
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Qs=[Ks],Us=s("h3",{id:"添加排序","data-source-line":"164"},[s("a",{class:"markdownIt-Anchor",href:"#添加排序"},"#"),t(" 添加排序")],-1),Xs=s("p",{"data-source-line":"166"},[s("code",null,"column"),t("添加排序 "),s("code",null,'sortBy="true"'),t("表示当前列可排序。点击排序触发事件"),s("code",null,"sortChange"),t("。设置"),s("code",null,'sortSingle="true"'),t("时只允许一列排序")],-1),Ys=s("pre",{style:{display:"none"}},null,-1),Zs={class:"vuedoc-demo"},sa={class:"vuedoc-demo__inner"},aa={class:"vuedoc-demo__preview"},na={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},la=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
      @<span class="hljs-attr">sortChange</span>=<span class="hljs-string">&quot;sortChange&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>, <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> sortChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ta=[la],pa=s("h3",{id:"拖动改变列宽","data-source-line":"201"},[s("a",{class:"markdownIt-Anchor",href:"#拖动改变列宽"},"#"),t(" 拖动改变列宽")],-1),ea=s("p",{"data-source-line":"203"},[t("默认所有列允许拖动，当设置"),s("code",null,'drag="false"'),t("不允许拖动。或者是默认情况下对单个column设置"),s("code",null,'drag="false"'),t("表示当前列不可拖动。拖动改变列宽事件"),s("code",null,"dragChange"),t("可返回各列的宽，可用于和服务端对接")],-1),ca=s("pre",{style:{display:"none"}},null,-1),oa={class:"vuedoc-demo"},ra={class:"vuedoc-demo__inner"},ha={class:"vuedoc-demo__preview"},da={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ia=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
      @<span class="hljs-attr">dragChange</span>=<span class="hljs-string">&quot;dragChange&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">drag</span>: <span class="hljs-literal">false</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span>, <span class="hljs-attr">drag</span>: <span class="hljs-literal">false</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> dragChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ja=[ia],ga=s("h3",{id:"其他参数设置","data-source-line":"238"},[s("a",{class:"markdownIt-Anchor",href:"#其他参数设置"},"#"),t(" 其他参数设置")],-1),ua=s("pre",{style:{display:"none"}},null,-1),_a={class:"vuedoc-demo"},va={class:"vuedoc-demo__inner"},ma={class:"vuedoc-demo__preview"},ba={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},qa=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.showHeader = !state.showHeader&quot;</span>
        &gt;</span>显示表头:{{ state.showHeader }}&lt;/ak-button
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.hover = !state.hover&quot;</span>&gt;</span>hover高亮:{{ state.hover }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.border = !state.border&quot;</span>&gt;</span>显示边框:{{ state.border }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.stripe = !state.stripe&quot;</span>&gt;</span>显示斑马线:{{ state.stripe }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.ellipsis = !state.ellipsis&quot;</span>
        &gt;</span>溢出省略号:{{ state.ellipsis }}&lt;/ak-button
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.title = !state.title&quot;</span>&gt;</span>鼠标滑动过提示:{{ state.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.dragLine = !state.dragLine&quot;</span>
        &gt;</span>拖动改变列宽时垂直线:{{ state.dragLine }}&lt;/ak-button
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:show-header</span>=<span class="hljs-string">&quot;state.showHeader&quot;</span>
      <span class="hljs-attr">:hover</span>=<span class="hljs-string">&quot;state.hover&quot;</span>
      <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;state.border&quot;</span>
      <span class="hljs-attr">:stripe</span>=<span class="hljs-string">&quot;state.stripe&quot;</span>
      <span class="hljs-attr">:ellipsis</span>=<span class="hljs-string">&quot;state.ellipsis&quot;</span>
      <span class="hljs-attr">:drag-line</span>=<span class="hljs-string">&quot;state.dragLine&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
<span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">showHeader</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">hover</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">border</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">stripe</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">ellipsis</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">dragLine</span>: <span class="hljs-literal">true</span>
  })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),ka=[qa],ya=s("h3",{id:"扩展列","data-source-line":"296"},[s("a",{class:"markdownIt-Anchor",href:"#扩展列"},"#"),t(" 扩展列")],-1),fa=s("p",{"data-source-line":"298"},[s("code",null,'type="extend"'),t(",使用 "),s("code",null,"scope.extend()"),t("方法可展开或收起扩展行列，"),s("code",null,"scope.toggle"),t("返回当前展开或收起状态")],-1),wa=s("pre",{style:{display:"none"}},null,-1),xa={class:"vuedoc-demo"},Ca={class:"vuedoc-demo__inner"},Sa={class:"vuedoc-demo__preview"},Ha={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},$a=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;收起&#39; : &#39;展开&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extend</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span> 返回当前行所有信息：{{ scope }} <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>},
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;extend&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;extend&#39;</span> },
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Ra=[$a],Da=s("h3",{id:"子级数据","data-source-line":"330"},[s("a",{class:"markdownIt-Anchor",href:"#子级数据"},"#"),t(" 子级数据")],-1),Ea=s("p",{"data-source-line":"332"},[t("类似于扩展列，使用 "),s("code",null,"scope.extend()"),t("方法展开或收起子节点，"),s("code",null,"scope.toggle"),t("返回当前展开或收起状态。子节点scope数据除了row，还包含parentRow父级信息")],-1),Aa=s("pre",{style:{display:"none"}},null,-1),za={class:"vuedoc-demo"},Ia={class:"vuedoc-demo__inner"},Ta={class:"vuedoc-demo__preview"},Ja={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Na=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;scope.row.children&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;收起&#39; : &#39;展开子级&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ma=[Na],Ba=s("h3",{id:"子级异步加载","data-source-line":"366"},[s("a",{class:"markdownIt-Anchor",href:"#子级异步加载"},"#"),t(" 子级异步加载")],-1),La=s("p",{"data-source-line":"368"},[t("使用 "),s("code",null,"scope.extend()"),t("方法展开或收起子节点，会触发方法"),s("code",null,"lazyLoad"),t(",通过返回当前行信息以加载异步数据")],-1),Oa=s("pre",{style:{display:"none"}},null,-1),Va={class:"vuedoc-demo"},Pa={class:"vuedoc-demo__inner"},Fa={class:"vuedoc-demo__preview"},Wa={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},Ga=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
          scope.toggle ? &#39;收起&#39; : &#39;加载子级&#39;
        }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> lazyLoad = <span class="hljs-function">(<span class="hljs-params">row, resolve</span>) =&gt;</span> {
    <span class="hljs-comment">// row 当前点击行信息</span>
    <span class="hljs-comment">// 模拟请求加载</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;row&#39;</span>)
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> child = [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;异步数据1&#39;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2021&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;异步数据2&#39;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2021&#39;</span> }
      ]
      resolve(child)
    }, <span class="hljs-number">500</span>)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),Ka=[Ga],Qa=d('<h3 id="合并行或列" data-source-line="422"><a class="markdownIt-Anchor" href="#合并行或列">#</a> 合并行或列</h3><p data-source-line="424">多行或多列共用一个数据时，可以合并行或列。通过给传入<code>rowColSpan</code>合并数据可以实现合并行或列，参数(当前行号<code>row</code>,当前列号<code>col</code>,当前行合并行数<code>rowSpan</code>,合并列数<code>colSpan</code>)。当<code>rowSpan</code> 或<code>colSpan</code>为0时，表示隐藏当前行或列</p><pre style="display:none;"></pre>',3),Ua={class:"vuedoc-demo"},Xa={class:"vuedoc-demo__inner"},Ya={class:"vuedoc-demo__preview"},Za={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},sn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:row-col-span</span>=<span class="hljs-string">&quot;rowColSpan&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> rowColSpan = [
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">colSpan</span>: <span class="hljs-number">2</span>
    },
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">colSpan</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">rowSpan</span>: <span class="hljs-number">2</span>
    },
    {
      <span class="hljs-attr">row</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">col</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">colSpan</span>: <span class="hljs-number">0</span>
    }
  ]
  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;dateTime&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;年份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;月份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;收化地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address2&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),an=[sn],nn=s("h3",{id:"表头参数也支持slots","data-source-line":"499"},[s("a",{class:"markdownIt-Anchor",href:"#表头参数也支持slots"},"#"),t(" 表头参数也支持slots")],-1),ln=s("p",{"data-source-line":"501"},"默认slots为当前props，表头时为当前props-header",-1),tn=s("pre",{style:{display:"none"}},null,-1),pn={class:"vuedoc-demo"},en={class:"vuedoc-demo__inner"},cn={class:"vuedoc-demo__preview"},on={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},rn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">date-header</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        {{ scope.column.label }}slot表头
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>
    }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),hn=[rn],dn=s("h3",{id:"多级表头","data-source-line":"552"},[s("a",{class:"markdownIt-Anchor",href:"#多级表头"},"#"),t(" 多级表头")],-1),jn=s("p",{"data-source-line":"554"},[t("多级表头时，"),s("code",null,"prop"),t("作为唯一的key，不能为空或重复")],-1),gn=s("pre",{style:{display:"none"}},null,-1),un={class:"vuedoc-demo"},_n={class:"vuedoc-demo__inner"},vn={class:"vuedoc-demo__preview"},mn={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},bn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;dateTime&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;年份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;月份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;收化地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address2&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;操作&#39;</span>
    }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),qn=[bn],kn=s("h3",{id:"带分页组件","data-source-line":"619"},[s("a",{class:"markdownIt-Anchor",href:"#带分页组件"},"#"),t(" 带分页组件")],-1),yn=s("p",{"data-source-line":"621"},"内置分页组件",-1),fn=s("pre",{style:{display:"none"}},null,-1),wn={class:"vuedoc-demo"},xn={class:"vuedoc-demo__inner"},Cn={class:"vuedoc-demo__preview"},Sn={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Hn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:pagination</span>=<span class="hljs-string">&quot;pagination&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#39;left&#39;</span> }
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> pagination = {
    <span class="hljs-attr">current</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">onChange</span>: <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(v)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),$n=[Hn],Rn=d('<h3 id="鼠标滑过tooltip提示" data-source-line="657"><a class="markdownIt-Anchor" href="#鼠标滑过tooltip提示">#</a> 鼠标滑过tooltip提示</h3><p data-source-line="659">添加<code>tooltip=true</code>或<code>tooltip=&quot;{show:true,direction:&#39;left&#39;,..其他所有的tooltip属性}&quot;</code>即可在鼠标滑过时显示<code>tooltip</code>提示，不显示可以传<code>show:false</code> 默认为<code>true</code></p><pre style="display:none;"></pre>',3),Dn={class:"vuedoc-demo"},En={class:"vuedoc-demo__inner"},An={class:"vuedoc-demo__preview"},zn={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},In=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#39;left&#39;</span> }
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Tn=[In],Jn=d('<h3 id="使用tag显示值" data-source-line="688"><a class="markdownIt-Anchor" href="#使用tag显示值">#</a> 使用Tag显示值</h3><p data-source-line="690">使用<code>Tag</code>参数<code>tag={dict:{},...tag组件其他所有参数}</code>，即可在表格中显示<code>tag</code>样式</p><p data-source-line="692">其中<code>dict</code>为值对应的<code>tag</code>类型，如<code>dict:{&#39;男&#39;:&#39;info&#39;,&#39;女&#39;:&#39;danger&#39;}</code>，即值为男时显示tag类型为<code>info</code></p><pre style="display:none;"></pre>',4),Nn={class:"vuedoc-demo"},Mn={class:"vuedoc-demo__inner"},Bn={class:"vuedoc-demo__preview"},Ln={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},On=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;姓名&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>, <span class="hljs-attr">tag</span>: { <span class="hljs-attr">dict</span>: { 男: <span class="hljs-string">&#39;info&#39;</span>, 女: <span class="hljs-string">&#39;danger&#39;</span> } } },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;省份&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;城市&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;地址&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;邮编&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),Vn=[On],Pn=d('<h3 id="横向滚动条固定在浏览器底部" data-source-line="717"><a class="markdownIt-Anchor" href="#横向滚动条固定在浏览器底部">#</a> 横向滚动条固定在浏览器底部</h3><p data-source-line="719">通过设置<code>fixedBottomScroll</code>可将横向滚动条固定在浏览器底部，<code>true</code>时滚动主体为<code>document</code>，字符时为当前滚动的区域如<code>fixedBottomScroll=&#39;.scroll</code>’，则滚动区域为<code>scroll</code> ，注意：此设置会覆盖<code>height</code>属性的值</p><h3 id="匹配字典转换值" data-source-line="722"><a class="markdownIt-Anchor" href="#匹配字典转换值">#</a> 匹配字典/转换值</h3><p data-source-line="724">设置<code>dict</code>可对当前值进行转换，如示例状态字段转换；同时支持<code>tag</code>，如示例类型字段。对于时间类型时，<code>formatter</code>可设置为<code>date/dateTime</code>快速输出格式化时间</p><pre style="display:none;"></pre>',5),Fn={class:"vuedoc-demo"},Wn={class:"vuedoc-demo__inner"},Gn={class:"vuedoc-demo__preview"},Kn={ref:"vdpv_16Ref",class:"vuedoc-demo__sourceref"},Qn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> tableData = ref([
    {
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2022-10-1&#39;</span>,
      <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;男&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;1&#39;</span>
    },
    {
      <span class="hljs-attr">date</span>: <span class="hljs-number">1592751467000</span>,
      <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;女&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;2&#39;</span>
    },
    {
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2019-01-29T16:00:00.000+0000&#39;</span>,
      <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;男&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;3&#39;</span>
    },
    {
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;女&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;1&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;3&#39;</span>
    }
  ])
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;序号&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;日期&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">formatter</span>: <span class="hljs-string">&#39;dateTime&#39;</span>
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;性别&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>, <span class="hljs-attr">tag</span>: { <span class="hljs-attr">dict</span>: { 男: <span class="hljs-string">&#39;info&#39;</span>, 女: <span class="hljs-string">&#39;danger&#39;</span> } } },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;状态&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;status&#39;</span>, <span class="hljs-attr">dict</span>: { <span class="hljs-number">1</span>: <span class="hljs-string">&#39;启用&#39;</span>, <span class="hljs-number">0</span>: <span class="hljs-string">&#39;禁用&#39;</span> } },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;类型&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;type&#39;</span>,
      <span class="hljs-attr">dict</span>: { <span class="hljs-number">1</span>: <span class="hljs-string">&#39;类型1&#39;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&#39;类型2&#39;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&#39;类型3&#39;</span> },
      <span class="hljs-attr">tag</span>: { <span class="hljs-attr">dict</span>: { <span class="hljs-number">1</span>: <span class="hljs-string">&#39;danger&#39;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&#39;success&#39;</span> } }
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Un=[Qn],Xn=d(`<h3 id="使用formatter" data-source-line="779"><a class="markdownIt-Anchor" href="#使用formatter">#</a> 使用formatter</h3><p data-source-line="781">模板不支持lang=‘jsx’</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-html hljs--one-dark"><code>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;jsx&quot;</span>&gt;</span><span class="javascript">
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
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span></span>
    }
  }
]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code></pre><h3 id="示例数据" data-source-line="814"><a class="markdownIt-Anchor" href="#示例数据">#</a> 示例数据</h3><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>[
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-03&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;张三&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>,
    <span class="hljs-attr">&quot;children&quot;</span>: [
      {
        <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-00&quot;</span>,
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;子级&quot;</span>,
        <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;子级广东&quot;</span>,
        <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;子级白云区&quot;</span>,
        <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;子级广东省广州市白云区无名路888号&quot;</span>,
        <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
      }
    ]
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-04&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-05&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四5&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-06&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四6&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-07&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四7&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-08&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四8&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-09&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四9&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-10&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;李四10&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;广东&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;白云区&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;广东省广州市白云区无名路888号&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  }
]

</code></pre><h2 id="api" data-source-line="896"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="table" data-source-line="898"><a class="markdownIt-Anchor" href="#table">#</a> Table</h3><table data-source-line="900"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>array</td><td>列表数据</td></tr><tr><td>columns</td><td>array</td><td>表头数据</td></tr><tr><td>showHeader</td><td>boolean/true</td><td>是否显示表头</td></tr><tr><td>className</td><td>String</td><td>表格类名</td></tr><tr><td>hover</td><td>boolean/true</td><td>鼠标经过显示高亮</td></tr><tr><td>border</td><td>boolean/false</td><td>是否显示表格纵向边框</td></tr><tr><td>stripe</td><td>boolean/true</td><td>是否显示间隔斑马纹</td></tr><tr><td>height</td><td>String</td><td>table 的高，溢出显示滚动条，且表头固定</td></tr><tr><td>width</td><td>String</td><td>表格外层 div 的宽，当单元格总和大于表格 width 时，出现横向滚动条</td></tr><tr><td>ellipsis</td><td>boolean/true</td><td>表格单元格文字溢出显示…，在不指定列宽时，各列平分表格宽</td></tr><tr><td>emptyText</td><td>String</td><td>无数据时显示的文本</td></tr><tr><td>title</td><td>Boolean/true</td><td>鼠标滑过单元格时显示 title 提示</td></tr><tr><td>drag</td><td>boolean/false</td><td>允许拖动表头改变当前单元格宽度</td></tr><tr><td>dragLine</td><td>boolean/true</td><td>拖动时显示垂直线</td></tr><tr><td>dragWidth</td><td>array</td><td>允许拖动最大与最小宽度[min,max]</td></tr><tr><td>extendToggle</td><td>boolean/false</td><td>扩展行/子节点初始展开或收起状态</td></tr><tr><td>rowColSpan</td><td>function</td><td>合并行或列方法。通过给传入 rowColSpan 方法可以实现合并行或列，方法的参数(当前行号 rowIndex,当前列号 columnIndex,当前行 row,当前列 column)四个属性。该函数返回一个包含两个数字的数组，第一个 rowspan，第二个 colspan，即向纵向和横向合并多少个单元格</td></tr><tr><td>pagination</td><td>object</td><td>有相关参数时显示分页，参数的pagination组件参数</td></tr><tr><td>hasChild</td><td>boolean/true</td><td>是否包含子节点数据，为true时，当 <code>row</code> 中包含 <code>children</code> 字段时，被视为子节点数据</td></tr><tr><td>lazyLoad</td><td>function</td><td>设置了<code>lazyLoad</code>时，被视为子节点使用懒加载方式，function(row,resolve) row当前行信息</td></tr><tr><td>sortSingle</td><td>boolean/false</td><td>如果设置了排序功能，开启后只能按其中一个字段排序</td></tr><tr><td>fixedBottomScroll</td><td>boolean/string</td><td>固定横向滚动条在底部,可为节点类名</td></tr></tbody></table><h3 id="table-event" data-source-line="925"><a class="markdownIt-Anchor" href="#table-event">#</a> Table Event</h3><table data-source-line="927"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>selectClick</td><td>勾选单列事件，function(list,checked,row, index) list所有已勾选的row集合，checked当前状态，row当前点击行信息，index当前行序号</td></tr><tr><td>sortChange</td><td>排序点击事件</td></tr><tr><td>rowClick</td><td>当前行点击事件，即tr点击事件，function(row,index)</td></tr><tr><td>cellClick</td><td>当前列点击事件，即td点击事件，function(row,column,rowIndex, columnIndex)</td></tr><tr><td>dragChange</td><td>拖动改变列表事件，返回所有列的宽度信息</td></tr><tr><td>scroll</td><td>表时滚动时的滚动事件，function(scrollTop,bottom,el)，scrollTop滚动条的位置，bottom是否滚动到底部,el当前滚动的对象</td></tr></tbody></table><h3 id="table-methods" data-source-line="936"><a class="markdownIt-Anchor" href="#table-methods">#</a> Table Methods</h3><table data-source-line="938"><thead><tr><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>getSelectAll</td><td>返回所有选中的行</td></tr><tr><td>toggleRowSelection</td><td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） row, selected</td></tr><tr><td>toggleSelection</td><td>用于多选表格，切换所有行的选中/清空状态,true为选中，false取消选中，默认false</td></tr><tr><td>clearSort</td><td>用于清空排序条件</td></tr></tbody></table><h3 id="table-column" data-source-line="945"><a class="markdownIt-Anchor" href="#table-column">#</a> Table-column</h3><table data-source-line="947"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>prop</td><td>String</td><td>对应列内容的字段名，唯一的key，不能重复</td></tr><tr><td>label</td><td>String</td><td>显示的标题</td></tr><tr><td>width</td><td>String</td><td>对应列的宽度</td></tr><tr><td>className</td><td>String</td><td>对应列的类名</td></tr><tr><td>align</td><td>String</td><td>对齐方式，可选 left/center/right</td></tr><tr><td>type</td><td>String</td><td>对应列类型，可选 selection（多选）/index 序号/extend 扩展列</td></tr><tr><td>fixed</td><td>Boolean/false</td><td>固定列，可选 left/right</td></tr><tr><td>sortBy</td><td>Boolean/false</td><td>当前列显示排序按钮</td></tr><tr><td>title</td><td>Boolean/false</td><td>鼠标滑过单元格时显示 title 提示，仅当 table 的 title 为 false 时有效</td></tr><tr><td>drag</td><td>Boolean/true</td><td>允许当前单元格拖动，仅在table的drag=true时有效</td></tr><tr><td>formatter</td><td>function/string</td><td>用来格式化内容,Function(row, column, cellValue, index)；当为时间类型时，值可为<code>date,dateTime</code>快速输出格式化时间</td></tr><tr><td>tooltip</td><td>boolean/object</td><td>鼠标滑过显示<code>tooltip</code>，参数详见<code>tooltip</code>组件</td></tr><tr><td>tag</td><td>object</td><td>使用<code>tag</code>样式显示对应值，参数详见<code>tag</code></td></tr><tr><td>tag.dict</td><td>object</td><td>类型对应字典</td></tr><tr><td>dict</td><td>object</td><td>类型对应字典</td></tr><tr><td>placeholder</td><td>string</td><td>为空时输入值</td></tr></tbody></table><h3 id="table-column-slot" data-source-line="966"><a class="markdownIt-Anchor" href="#table-column-slot">#</a> Table-column Slot</h3><table data-source-line="968"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义列的内容，参数为 { row, index, extend }</td></tr><tr><td>header</td><td>自定义表头的内容，参数为 { column, index }</td></tr></tbody></table>`,18);function Yn(n,a,l,o,p,c){const i=r("vdpv_0"),_=r("vdpv_1"),y=r("vdpv_2"),f=r("vdpv_3"),x=r("vdpv_4"),w=r("vdpv_5"),C=r("vdpv_6"),H=r("vdpv_7"),D=r("vdpv_8"),E=r("vdpv_9"),A=r("vdpv_10"),z=r("vdpv_11"),I=r("vdpv_12"),S=r("vdpv_13"),J=r("vdpv_14"),$=r("vdpv_15"),R=r("vdpv_16");return u(),k("div",us,[_s,s("div",vs,[s("div",ms,[s("div",bs,[e(i)]),s("div",{style:m({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",qs,ys,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=b=>n.toggleCode(0))},h(n.vdpv_0Height>0?"hidden":"show"),1)])]),fs,ws,xs,s("div",Cs,[s("div",Ss,[s("div",Hs,[e(_)]),s("div",{style:m({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",$s,Ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=b=>n.toggleCode(1))},h(n.vdpv_1Height>0?"hidden":"show"),1)])]),Es,As,zs,s("div",Is,[s("div",Ts,[s("div",Js,[e(y)]),s("div",{style:m({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ns,Bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=b=>n.toggleCode(2))},h(n.vdpv_2Height>0?"hidden":"show"),1)])]),Ls,Os,Vs,s("div",Ps,[s("div",Fs,[s("div",Ws,[e(f)]),s("div",{style:m({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Gs,Qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=b=>n.toggleCode(3))},h(n.vdpv_3Height>0?"hidden":"show"),1)])]),Us,Xs,Ys,s("div",Zs,[s("div",sa,[s("div",aa,[e(x)]),s("div",{style:m({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",na,ta,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=b=>n.toggleCode(4))},h(n.vdpv_4Height>0?"hidden":"show"),1)])]),pa,ea,ca,s("div",oa,[s("div",ra,[s("div",ha,[e(w)]),s("div",{style:m({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",da,ja,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=b=>n.toggleCode(5))},h(n.vdpv_5Height>0?"hidden":"show"),1)])]),ga,ua,s("div",_a,[s("div",va,[s("div",ma,[e(C)]),s("div",{style:m({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",ba,ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=b=>n.toggleCode(6))},h(n.vdpv_6Height>0?"hidden":"show"),1)])]),ya,fa,wa,s("div",xa,[s("div",Ca,[s("div",Sa,[e(H)]),s("div",{style:m({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ha,Ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=b=>n.toggleCode(7))},h(n.vdpv_7Height>0?"hidden":"show"),1)])]),Da,Ea,Aa,s("div",za,[s("div",Ia,[s("div",Ta,[e(D)]),s("div",{style:m({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ja,Ma,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=b=>n.toggleCode(8))},h(n.vdpv_8Height>0?"hidden":"show"),1)])]),Ba,La,Oa,s("div",Va,[s("div",Pa,[s("div",Fa,[e(E)]),s("div",{style:m({height:n.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Wa,Ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=b=>n.toggleCode(9))},h(n.vdpv_9Height>0?"hidden":"show"),1)])]),Qa,s("div",Ua,[s("div",Xa,[s("div",Ya,[e(A)]),s("div",{style:m({height:n.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",Za,an,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[10]||(a[10]=b=>n.toggleCode(10))},h(n.vdpv_10Height>0?"hidden":"show"),1)])]),nn,ln,tn,s("div",pn,[s("div",en,[s("div",cn,[e(z)]),s("div",{style:m({height:n.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",on,hn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[11]||(a[11]=b=>n.toggleCode(11))},h(n.vdpv_11Height>0?"hidden":"show"),1)])]),dn,jn,gn,s("div",un,[s("div",_n,[s("div",vn,[e(I)]),s("div",{style:m({height:n.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",mn,qn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[12]||(a[12]=b=>n.toggleCode(12))},h(n.vdpv_12Height>0?"hidden":"show"),1)])]),kn,yn,fn,s("div",wn,[s("div",xn,[s("div",Cn,[e(S)]),s("div",{style:m({height:n.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",Sn,$n,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[13]||(a[13]=b=>n.toggleCode(13))},h(n.vdpv_13Height>0?"hidden":"show"),1)])]),Rn,s("div",Dn,[s("div",En,[s("div",An,[e(J)]),s("div",{style:m({height:n.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",zn,Tn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[14]||(a[14]=b=>n.toggleCode(14))},h(n.vdpv_14Height>0?"hidden":"show"),1)])]),Jn,s("div",Nn,[s("div",Mn,[s("div",Bn,[e($)]),s("div",{style:m({height:n.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ln,Vn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[15]||(a[15]=b=>n.toggleCode(15))},h(n.vdpv_15Height>0?"hidden":"show"),1)])]),Pn,s("div",Fn,[s("div",Wn,[s("div",Gn,[e(R)]),s("div",{style:m({height:n.vdpv_16Height+"px"}),class:"vuedoc-demo__source"},[s("div",Kn,Un,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[16]||(a[16]=b=>n.toggleCode(16))},h(n.vdpv_16Height>0?"hidden":"show"),1)])]),Xn])}const sl=L(gs,[["render",Yn]]);export{sl as default};
