var P=Object.defineProperty,F=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var O=(l,n,o)=>n in l?P(l,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[n]=o,L=(l,n)=>{for(var o in n||(n={}))G.call(n,o)&&O(l,o,n[o]);if(B)for(var o of B(n))K.call(n,o)&&O(l,o,n[o]);return l},E=(l,n)=>F(l,W(n));import{e as c,o as _,f as N,w as d,g as a,i as s,u as r,b as v,c as f,h as e,r as V,j,s as Q,_ as U,d as X,t as Y,n as q,a as g}from"./index.83204fe3.js";var m=[{date:"2016-05-03",name:"\u5F20\u4E09",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537",children:[{date:"2016-05-00",name:"\u5B50\u7EA7",province:"\u5B50\u7EA7\u5E7F\u4E1C",city:"\u5B50\u7EA7\u767D\u4E91\u533A",address:"\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:0}]},{date:"2016-05-04",name:"\u674E\u56DB",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-05",name:"\u674E\u56DB5",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-06",name:"\u674E\u56DB6",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-07",name:"\u674E\u56DB7",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-08",name:"\u674E\u56DB8",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-09",name:"\u674E\u56DB9",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-10",name:"\u674E\u56DB10",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"}];const Z=["onClick"],ss={setup(l){const n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),N(h,{data:r(m)},{default:d(()=>[a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"}),a(t,{label:"\u64CD\u4F5C"},{default:d(i=>[s("a",{onClick:u=>n(i)},"\u5220\u9664",8,Z)]),_:1})]),_:1},8,["data"])}}},as=["onClick"],ns=e("\u5168\u9009"),ts=e("\u53D6\u6D88\u5168\u9009"),ls=e("\u83B7\u53D6\u6240\u9009\u884C"),ps=e("\u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001"),es=e("\u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001"),os={setup(l){const n=v(),o=u=>{alert(JSON.stringify(u))},p=()=>{n.value.toggleSelection(!0)},t=()=>{n.value.toggleSelection(!1)},h=()=>{const u=n.value.getSelectAll();console.log(u),alert(JSON.stringify(u))},i=u=>{[m[1],m[2]].forEach(b=>{n.value.toggleRowSelection(b,u)})};return(u,y)=>{const b=c("ak-column"),C=c("ak-table"),w=c("ak-button");return _(),f("div",null,[a(C,{ref_key:"tableEl",ref:n,data:r(m)},{default:d(()=>[a(b,{type:"selection",width:"50px"}),a(b,{type:"index",label:"\u5E8F\u53F7",width:"50px"}),a(b,{label:"\u65E5\u671F",prop:"date"}),a(b,{label:"\u59D3\u540D",prop:"name"}),a(b,{label:"\u7701\u4EFD",prop:"province"}),a(b,{label:"\u57CE\u5E02",prop:"city"}),a(b,{label:"\u5730\u5740",prop:"address"}),a(b,{label:"\u90AE\u7F16",prop:"zip"}),a(b,{label:"\u64CD\u4F5C"},{default:d(x=>[s("a",{onClick:$=>o(x)},"\u5220\u9664",8,as)]),_:1})]),_:1},8,["data"]),s("p",null,[a(w,{onClick:p},{default:d(()=>[ns]),_:1}),a(w,{onClick:t},{default:d(()=>[ts]),_:1}),a(w,{onClick:h},{default:d(()=>[ls]),_:1}),a(w,{onClick:y[0]||(y[0]=x=>i(!0))},{default:d(()=>[ps]),_:1}),a(w,{onClick:y[1]||(y[1]=x=>i(!1))},{default:d(()=>[es]),_:1})])])}}},cs={setup(l){return(n,o)=>{const p=c("ak-column"),t=c("ak-table");return _(),f("div",null,[a(t,{data:r(m),height:"200px"},{default:d(()=>[a(p,{type:"selection"}),a(p,{type:"index",label:"\u5E8F\u53F7"}),a(p,{label:"\u65E5\u671F",prop:"date"}),a(p,{label:"\u59D3\u540D",prop:"name"}),a(p,{label:"\u7701\u4EFD",prop:"province"}),a(p,{label:"\u57CE\u5E02",prop:"city"}),a(p,{label:"\u5730\u5740",prop:"address"}),a(p,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data"])])}}},rs={setup(l){return(n,o)=>{const p=c("ak-column"),t=c("ak-table");return _(),f("div",null,[a(t,{data:r(m),height:"200px",width:"600px"},{default:d(()=>[a(p,{type:"selection",width:"50px",fixed:"left"}),a(p,{type:"index",label:"\u5E8F\u53F7",width:"50px"}),a(p,{label:"\u65E5\u671F",prop:"date",width:"200px"}),a(p,{label:"\u59D3\u540D",prop:"name",width:"100px"}),a(p,{label:"\u7701\u4EFD",prop:"province",width:"100px"}),a(p,{label:"\u57CE\u5E02",prop:"city",width:"100px"}),a(p,{label:"\u5730\u5740",prop:"address",width:"300px"}),a(p,{label:"\u90AE\u7F16",prop:"zip",width:"100px"})]),_:1},8,["data"])])}}},hs={setup(l){const n=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),onSortChange:n},{default:d(()=>[a(t,{type:"selection"}),a(t,{type:"index",label:"\u5E8F\u53F7"}),a(t,{label:"\u65E5\u671F",prop:"date",sortBy:!0}),a(t,{label:"\u59D3\u540D",prop:"name",sortBy:!0}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data"])])}}},ds={setup(l){const n=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),onDragChange:n},{default:d(()=>[a(t,{type:"selection",drag:!1}),a(t,{type:"index",label:"\u5E8F\u53F7",drag:!1}),a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data"])])}}},js={setup(l){const n=V({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0});return(o,p)=>{const t=c("ak-button"),h=c("ak-column"),i=c("ak-table");return _(),f("div",null,[s("p",null,[a(t,{onClick:p[0]||(p[0]=u=>r(n).showHeader=!r(n).showHeader)},{default:d(()=>[e("\u663E\u793A\u8868\u5934:"+j(r(n).showHeader),1)]),_:1}),a(t,{onClick:p[1]||(p[1]=u=>r(n).hover=!r(n).hover)},{default:d(()=>[e("hover\u9AD8\u4EAE:"+j(r(n).hover),1)]),_:1}),a(t,{onClick:p[2]||(p[2]=u=>r(n).border=!r(n).border)},{default:d(()=>[e("\u663E\u793A\u8FB9\u6846:"+j(r(n).border),1)]),_:1}),a(t,{onClick:p[3]||(p[3]=u=>r(n).stripe=!r(n).stripe)},{default:d(()=>[e("\u663E\u793A\u6591\u9A6C\u7EBF:"+j(r(n).stripe),1)]),_:1}),a(t,{onClick:p[4]||(p[4]=u=>r(n).ellipsis=!r(n).ellipsis)},{default:d(()=>[e("\u6EA2\u51FA\u7701\u7565\u53F7:"+j(r(n).ellipsis),1)]),_:1}),a(t,{onClick:p[5]||(p[5]=u=>r(n).title=!r(n).title)},{default:d(()=>[e("\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:"+j(r(n).title),1)]),_:1}),a(t,{onClick:p[6]||(p[6]=u=>r(n).dragLine=!r(n).dragLine)},{default:d(()=>[e("\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:"+j(r(n).dragLine),1)]),_:1})]),a(i,{data:r(m),"show-header":r(n).showHeader,hover:r(n).hover,border:r(n).border,stripe:r(n).stripe,ellipsis:r(n).ellipsis,"drag-line":r(n).dragLine},{default:d(()=>[a(h,{type:"selection"}),a(h,{type:"index",label:"\u5E8F\u53F7"}),a(h,{label:"\u65E5\u671F",prop:"date"}),a(h,{label:"\u59D3\u540D",prop:"name"}),a(h,{label:"\u7701\u4EFD",prop:"province"}),a(h,{label:"\u57CE\u5E02",prop:"city"}),a(h,{label:"\u5730\u5740",prop:"address"}),a(h,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data","show-header","hover","border","stripe","ellipsis","drag-line"])])}}},is=["onClick"],us={setup(l){return(n,o)=>{const p=c("ak-column"),t=c("ak-table");return _(),f("div",null,[a(t,{data:r(m)},{default:d(()=>[a(p,{type:"selection"}),a(p,{type:"index",label:"\u5E8F\u53F7"}),a(p,{label:"\u65E5\u671F",prop:"date"}),a(p,{label:"\u59D3\u540D",prop:"name"}),a(p,{label:"\u7701\u4EFD",prop:"province"}),a(p,{label:"\u57CE\u5E02",prop:"city"}),a(p,{label:"\u5730\u5740",prop:"address"}),a(p,{label:"\u90AE\u7F16",prop:"zip"}),a(p,{label:"\u64CD\u4F5C"},{default:d(h=>[s("span",{onClick:i=>h.extend()},j(h.toggle?"\u6536\u8D77":"\u5C55\u5F00"),9,is)]),_:1}),a(p,{type:"extend"},{default:d(h=>[e(" \u8FD4\u56DE\u5F53\u524D\u884C\u6240\u6709\u4FE1\u606F\uFF1A"+j(h),1)]),_:1})]),_:1},8,["data"])])}}},gs=["onClick"],ms={setup(l){return(n,o)=>{const p=c("ak-column"),t=c("ak-table");return _(),f("div",null,[a(t,{data:r(m),"has-child":!0},{default:d(()=>[a(p,{type:"selection"}),a(p,{type:"index",label:"\u5E8F\u53F7"}),a(p,{label:"\u65E5\u671F",prop:"date"}),a(p,{label:"\u59D3\u540D",prop:"name"}),a(p,{label:"\u7701\u4EFD",prop:"province"}),a(p,{label:"\u57CE\u5E02",prop:"city"}),a(p,{label:"\u5730\u5740",prop:"address"}),a(p,{label:"\u90AE\u7F16",prop:"zip"}),a(p,{label:"\u64CD\u4F5C"},{default:d(h=>[h.row.children?(_(),f("span",{key:0,onClick:i=>h.extend()},j(h.toggle?"\u6536\u8D77":"\u5C55\u5F00\u5B50\u7EA7"),9,gs)):Q("",!0)]),_:1})]),_:1},8,["data"])])}}},_s=["onClick"],vs={setup(l){const n=(o,p)=>{console.log("row"),setTimeout(()=>{p([{name:"\u5F02\u6B65\u6570\u636E1",date:"2021"},{name:"\u5F02\u6B65\u6570\u636E2",date:"2021"}])},500)};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),"has-child":!0,"lazy-load":n},{default:d(()=>[a(t,{type:"selection"}),a(t,{type:"index",label:"\u5E8F\u53F7"}),a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"}),a(t,{label:"\u64CD\u4F5C"},{default:d(i=>[s("span",{onClick:u=>i.extend()},j(i.toggle?"\u6536\u8D77":"\u52A0\u8F7D\u5B50\u7EA7"),9,_s)]),_:1})]),_:1},8,["data"])])}}},qs={setup(l){const n=(o,p)=>{if(o===0&&p===1)return[2,3]};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),"row-col-span":n},{default:d(()=>[a(t,{type:"selection"}),a(t,{type:"index",label:"\u5E8F\u53F7"}),a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data"])])}}},bs={setup(l){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"}];return(o,p)=>{const t=c("ak-table");return _(),f("div",null,[a(t,{data:r(m),columns:n},null,8,["data"])])}}},ks=["onClick"],fs={setup(l){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{prop:"control",label:"\u64CD\u4F5C"}],o=p=>{alert(JSON.stringify(p))};return(p,t)=>{const h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),columns:n},{control:d(i=>[s("a",{onClick:u=>o(i)},"\u5220\u9664",8,ks)]),"date-header":d(i=>[e(j(i.column.label)+"slot\u8868\u5934 ",1)]),_:1},8,["data"])])}}},ys=["onClick"],ws={setup(l){const n=[{label:"\u65E5\u671F",children:[{label:"\u5E74\u4EFD",prop:"date"},{label:"\u6708\u4EFD",prop:"date"}]},{prop:"name",label:"\u59D3\u540D",rowspan:2},{label:"\u6536\u5316\u5730\u5740",children:[{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"}]},{prop:"control",label:"\u64CD\u4F5C",rowspan:2}],o=p=>{alert(JSON.stringify(p))};return(p,t)=>{const h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),columns:n},{control:d(i=>[s("a",{onClick:u=>o(i)},"\u5220\u9664",8,ys)]),_:1},8,["data"])])}}},xs={setup(l){const n={current:1,pageSize:3,onChange:o=>{console.log(o)}};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),f("div",null,[a(h,{data:r(m),pagination:n},{default:d(()=>[a(t,{type:"selection"}),a(t,{type:"index",label:"\u5E8F\u53F7"}),a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"})]),_:1},8,["data"])])}}},Cs=["onClick"],Ss={setup(l){const n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),N(h,{data:r(m)},{default:d(()=>[a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address",tooltip:{show:!0,direction:"left"}}),a(t,{label:"\u90AE\u7F16",prop:"zip"}),a(t,{label:"\u64CD\u4F5C"},{default:d(i=>[s("a",{onClick:u=>n(i)},"\u5220\u9664",8,Cs)]),_:1})]),_:1},8,["data"])}}},$s=["onClick"],Hs={setup(l){const n=o=>{alert(JSON.stringify(o))};return(o,p)=>{const t=c("ak-column"),h=c("ak-table");return _(),N(h,{data:r(m)},{default:d(()=>[a(t,{label:"\u65E5\u671F",prop:"date"}),a(t,{label:"\u59D3\u540D",prop:"name"}),a(t,{label:"\u6027\u522B",prop:"sex",tag:{dict:{\u7537:"info",\u5973:"danger"}}}),a(t,{label:"\u7701\u4EFD",prop:"province"}),a(t,{label:"\u57CE\u5E02",prop:"city"}),a(t,{label:"\u5730\u5740",prop:"address"}),a(t,{label:"\u90AE\u7F16",prop:"zip"}),a(t,{label:"\u64CD\u4F5C"},{default:d(i=>[s("a",{onClick:u=>n(i)},"\u5220\u9664",8,$s)]),_:1})]),_:1},8,["data"])}}},M=X({components:{vdpv_0:ss,vdpv_1:os,vdpv_2:cs,vdpv_3:rs,vdpv_4:hs,vdpv_5:ds,vdpv_6:js,vdpv_7:us,vdpv_8:ms,vdpv_9:vs,vdpv_10:qs,vdpv_11:bs,vdpv_12:fs,vdpv_13:ws,vdpv_14:xs,vdpv_15:Ss,vdpv_16:Hs},setup(l){const n=v(),o=v(),p=v(),t=v(),h=v(),i=v(),u=v(),y=v(),b=v(),C=v(),w=v(),x=v(),$=v(),R=v(),D=v(),I=v(),J=v(),A=[n,o,p,t,h,i,u,y,b,C,w,x,$,R,D,I,J],S=V({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0,vdpv_16Height:0});return E(L({toggleCode:H=>{const z="vdpv_"+H;S[z+"Height"]===0?S[z+"Height"]=(A[H].value?A[H].value.offsetHeight:0)||0:S[z+"Height"]=0}},Y(S)),{vdpv_0Ref:n,vdpv_1Ref:o,vdpv_2Ref:p,vdpv_3Ref:t,vdpv_4Ref:h,vdpv_5Ref:i,vdpv_6Ref:u,vdpv_7Ref:y,vdpv_8Ref:b,vdpv_9Ref:C,vdpv_10Ref:w,vdpv_11Ref:x,vdpv_12Ref:$,vdpv_13Ref:R,vdpv_14Ref:D,vdpv_15Ref:I,vdpv_16Ref:J})}});M.$vd={matter:{},toc:[{content:"Table \u8868\u683C",anchor:"table-\u8868\u683C",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009",anchor:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009",level:3},{content:"\u56FA\u5B9A\u8868\u5934",anchor:"\u56FA\u5B9A\u8868\u5934",level:3},{content:"\u56FA\u5B9A\u5934\u548C\u5217",anchor:"\u56FA\u5B9A\u5934\u548C\u5217",level:3},{content:"\u6DFB\u52A0\u6392\u5E8F",anchor:"\u6DFB\u52A0\u6392\u5E8F",level:3},{content:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD",anchor:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD",level:3},{content:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E",anchor:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E",level:3},{content:"\u6269\u5C55\u5217",anchor:"\u6269\u5C55\u5217",level:3},{content:"\u5B50\u7EA7\u6570\u636E",anchor:"\u5B50\u7EA7\u6570\u636E",level:3},{content:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D",anchor:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D",level:3},{content:"\u5408\u5E76\u884C\u6216\u5217",anchor:"\u5408\u5E76\u884C\u6216\u5217",level:3},{content:"\u8868\u5934\u53C2\u6570\uFF0C\u4E0D\u4F7F\u7528table-column\u7EC4\u4EF6",anchor:"\u8868\u5934\u53C2\u6570\u4E0D\u4F7F\u7528table-column\u7EC4\u4EF6",level:3},{content:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots",anchor:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots",level:3},{content:"\u591A\u7EA7\u8868\u5934",anchor:"\u591A\u7EA7\u8868\u5934",level:3},{content:"\u5E26\u5206\u9875\u7EC4\u4EF6",anchor:"\u5E26\u5206\u9875\u7EC4\u4EF6",level:3},{content:"\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A",anchor:"\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A",level:3},{content:"\u4F7F\u7528Tag\u663E\u793A\u503C",anchor:"\u4F7F\u7528tag\u663E\u793A\u503C",level:3},{content:"\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8",anchor:"\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8",level:3},{content:"\u793A\u4F8B\u6570\u636E",anchor:"\u793A\u4F8B\u6570\u636E",level:3},{content:"API",anchor:"api",level:2},{content:"Table",anchor:"table",level:3},{content:"Table Event",anchor:"table-event",level:3},{content:"Table Methods",anchor:"table-methods",level:3},{content:"Table-column",anchor:"table-column",level:3},{content:"Table-column Slot",anchor:"table-column-slot",level:3}]};const zs=M,Rs={class:"vuedoc"},Ds=g('<h1 id="table-\u8868\u683C" data-source-line="3"><a class="markdownIt-Anchor" href="#table-\u8868\u683C">#</a> Table \u8868\u683C</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),Is={class:"vuedoc-demo"},Js={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Ns={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ts=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Bs=[Ts],Os=s("h3",{id:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009","data-source-line":"31"},[s("a",{class:"markdownIt-Anchor",href:"#\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009"},"#"),e(" \u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009")],-1),Ls=s("p",{"data-source-line":"33"},[s("code",null,'type="selection"'),e("\u6DFB\u52A0\u52FE\u9009\u6846,"),s("code",null,'type="index"'),e("\u6DFB\u52A0\u5E8F\u53F7,getSelectAll"),s("code",null,"\u65B9\u6CD5\u53EF\u53D6\u5DF2\u52FE\u9009\u884C\u3002\u652F\u6301\u6309\u4F4F"),e("ctrl`\u952E\u4E00\u6B21\u52FE\u9009\u6216\u53D6\u6D88\u591A\u4E2A")],-1),Es=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},Ms={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Fs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ws=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;50px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;50px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;allSelect&quot;</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;unSelect&quot;</span>&gt;</span>\u53D6\u6D88\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getSelect&quot;</span>&gt;</span>\u83B7\u53D6\u6240\u9009\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(true)&quot;</span>
        &gt;</span>\u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001&lt;/ak-button
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(false)&quot;</span>
        &gt;</span>\u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001&lt;/ak-button
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> tableEl = ref()
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
  <span class="hljs-comment">// \u5168\u9009</span>
  <span class="hljs-keyword">const</span> allSelect = <span class="hljs-function">() =&gt;</span> {
    tableEl.value.toggleSelection(<span class="hljs-literal">true</span>)
  }
  <span class="hljs-comment">// \u53D6\u6D88\u5168\u9009</span>
  <span class="hljs-keyword">const</span> unSelect = <span class="hljs-function">() =&gt;</span> {
    tableEl.value.toggleSelection(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-comment">// \u83B7\u53D6\u5F53\u524D\u52FE\u9009\u7684\u6240\u6709\u503C</span>
  <span class="hljs-keyword">const</span> getSelect = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> val = tableEl.value.getSelectAll()
    <span class="hljs-built_in">console</span>.log(val)
    alert(<span class="hljs-built_in">JSON</span>.stringify(val))
  }
  <span class="hljs-comment">// \u9009\u4E2D\u6216\u53D6\u6D88\u6307\u5B9A\u884C</span>
  <span class="hljs-keyword">const</span> toggleRowSelection = <span class="hljs-function">(<span class="hljs-params">bool</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> row = [tableData[<span class="hljs-number">1</span>], tableData[<span class="hljs-number">2</span>]]
    row.forEach(<span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
      tableEl.value.toggleRowSelection(row, bool)
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Gs=[Ws],Ks=s("h3",{id:"\u56FA\u5B9A\u8868\u5934","data-source-line":"98"},[s("a",{class:"markdownIt-Anchor",href:"#\u56FA\u5B9A\u8868\u5934"},"#"),e(" \u56FA\u5B9A\u8868\u5934")],-1),Qs=s("p",{"data-source-line":"100"},[e("\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\uFF0C\u6DFB\u52A0\u6307\u5B9A\u9AD8\u5EA6\u5373\u53EF"),s("code",null,"height")],-1),Us=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Ys={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},aa=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),na=[aa],ta=s("h3",{id:"\u56FA\u5B9A\u5934\u548C\u5217","data-source-line":"122"},[s("a",{class:"markdownIt-Anchor",href:"#\u56FA\u5B9A\u5934\u548C\u5217"},"#"),e(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),la=s("p",{"data-source-line":"124"},[e("\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002\u6DFB\u52A0\u5BBD"),s("code",null,"width"),e("\u56FA\u5B9A\u5217\u5BBD\uFF1B"),s("code",null,"column"),e("\u6DFB\u52A0"),s("code",null,'fixed="left/right"'),e("\u3002\u9700\u8981\u6CE8\u610F\u8BBE\u7F6E\u8868\u683C\u5BBD\u65F6\u540C\u65F6\u8981\u5BF9\u6BCF\u5217\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\uFF0C\u5426\u5219\u4E0D\u4F1A\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761")],-1),pa=s("pre",{style:{display:"none"}},null,-1),ea={class:"vuedoc-demo"},oa={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},ra={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ha=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;50px&quot;</span> <span class="hljs-attr">fixed</span>=<span class="hljs-string">&quot;left&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;50px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;200px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),da=[ha],ja=s("h3",{id:"\u6DFB\u52A0\u6392\u5E8F","data-source-line":"148"},[s("a",{class:"markdownIt-Anchor",href:"#\u6DFB\u52A0\u6392\u5E8F"},"#"),e(" \u6DFB\u52A0\u6392\u5E8F")],-1),ia=s("p",{"data-source-line":"150"},[s("code",null,"column"),e("\u6DFB\u52A0\u6392\u5E8F "),s("code",null,'sortBy="true"'),e("\u8868\u793A\u5F53\u524D\u5217\u53EF\u6392\u5E8F\u3002\u70B9\u51FB\u6392\u5E8F\u89E6\u53D1\u4E8B\u4EF6"),s("code",null,"sortChange"),e("\u3002\u8BBE\u7F6E"),s("code",null,'sortSingle="true"'),e("\u65F6\u53EA\u5141\u8BB8\u4E00\u5217\u6392\u5E8F")],-1),ua=s("pre",{style:{display:"none"}},null,-1),ga={class:"vuedoc-demo"},ma={class:"vuedoc-demo__inner"},_a={class:"vuedoc-demo__preview"},va={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},qa=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> @<span class="hljs-attr">sortChange</span>=<span class="hljs-string">&quot;sortChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">:sortBy</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">:sortBy</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> sortChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ba=[qa],ka=s("h3",{id:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD","data-source-line":"179"},[s("a",{class:"markdownIt-Anchor",href:"#\u62D6\u52A8\u6539\u53D8\u5217\u5BBD"},"#"),e(" \u62D6\u52A8\u6539\u53D8\u5217\u5BBD")],-1),fa=s("p",{"data-source-line":"181"},[e("\u9ED8\u8BA4\u6240\u6709\u5217\u5141\u8BB8\u62D6\u52A8\uFF0C\u5F53\u8BBE\u7F6E"),s("code",null,'drag="false"'),e("\u4E0D\u5141\u8BB8\u62D6\u52A8\u3002\u6216\u8005\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9\u5355\u4E2Acolumn\u8BBE\u7F6E"),s("code",null,'drag="false"'),e("\u8868\u793A\u5F53\u524D\u5217\u4E0D\u53EF\u62D6\u52A8\u3002\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u4E8B\u4EF6"),s("code",null,"dragChange"),e("\u53EF\u8FD4\u56DE\u5404\u5217\u7684\u5BBD\uFF0C\u53EF\u7528\u4E8E\u548C\u670D\u52A1\u7AEF\u5BF9\u63A5")],-1),ya=s("pre",{style:{display:"none"}},null,-1),wa={class:"vuedoc-demo"},xa={class:"vuedoc-demo__inner"},Ca={class:"vuedoc-demo__preview"},Sa={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},$a=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> @<span class="hljs-attr">dragChange</span>=<span class="hljs-string">&quot;dragChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> <span class="hljs-attr">:drag</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> <span class="hljs-attr">:drag</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> dragChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ha=[$a],za=s("h3",{id:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E","data-source-line":"210"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E"},"#"),e(" \u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E")],-1),Ra=s("pre",{style:{display:"none"}},null,-1),Da={class:"vuedoc-demo"},Ia={class:"vuedoc-demo__inner"},Ja={class:"vuedoc-demo__preview"},Aa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Na=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.showHeader = !state.showHeader&quot;</span>
        &gt;</span>\u663E\u793A\u8868\u5934:{{ state.showHeader }}&lt;/ak-button
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.hover = !state.hover&quot;</span>&gt;</span>hover\u9AD8\u4EAE:{{ state.hover }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.border = !state.border&quot;</span>&gt;</span>\u663E\u793A\u8FB9\u6846:{{ state.border }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.stripe = !state.stripe&quot;</span>&gt;</span>\u663E\u793A\u6591\u9A6C\u7EBF:{{ state.stripe }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.ellipsis = !state.ellipsis&quot;</span>
        &gt;</span>\u6EA2\u51FA\u7701\u7565\u53F7:{{ state.ellipsis }}&lt;/ak-button
      &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.title = !state.title&quot;</span>&gt;</span>\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:{{ state.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.dragLine = !state.dragLine&quot;</span>
        &gt;</span>\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:{{ state.dragLine }}&lt;/ak-button
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
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

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
</span></code></pre></div>`,1),Ta=[Na],Ba=s("h3",{id:"\u6269\u5C55\u5217","data-source-line":"266"},[s("a",{class:"markdownIt-Anchor",href:"#\u6269\u5C55\u5217"},"#"),e(" \u6269\u5C55\u5217")],-1),Oa=s("p",{"data-source-line":"268"},[s("code",null,'type="extend"'),e(",\u4F7F\u7528 "),s("code",null,"scope.extend()"),e("\u65B9\u6CD5\u53EF\u5C55\u5F00\u6216\u6536\u8D77\u6269\u5C55\u884C\u5217\uFF0C"),s("code",null,"scope.toggle"),e("\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001")],-1),La=s("pre",{style:{display:"none"}},null,-1),Ea={class:"vuedoc-demo"},Va={class:"vuedoc-demo__inner"},Ma={class:"vuedoc-demo__preview"},Pa={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Fa=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u5C55\u5F00&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;extend&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span> \u8FD4\u56DE\u5F53\u524D\u884C\u6240\u6709\u4FE1\u606F\uFF1A{{ scope }} <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Wa=[Fa],Ga=s("h3",{id:"\u5B50\u7EA7\u6570\u636E","data-source-line":"300"},[s("a",{class:"markdownIt-Anchor",href:"#\u5B50\u7EA7\u6570\u636E"},"#"),e(" \u5B50\u7EA7\u6570\u636E")],-1),Ka=s("p",{"data-source-line":"302"},[e("\u7C7B\u4F3C\u4E8E\u6269\u5C55\u5217\uFF0C\u4F7F\u7528 "),s("code",null,"scope.extend()"),e("\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C"),s("code",null,"scope.toggle"),e("\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001\u3002\u5B50\u8282\u70B9scope\u6570\u636E\u9664\u4E86row\uFF0C\u8FD8\u5305\u542BparentRow\u7236\u7EA7\u4FE1\u606F")],-1),Qa=s("pre",{style:{display:"none"}},null,-1),Ua={class:"vuedoc-demo"},Xa={class:"vuedoc-demo__inner"},Ya={class:"vuedoc-demo__preview"},Za={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},sn=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;scope.row.children&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u5C55\u5F00\u5B50\u7EA7&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),an=[sn],nn=s("h3",{id:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D","data-source-line":"332"},[s("a",{class:"markdownIt-Anchor",href:"#\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D"},"#"),e(" \u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D")],-1),tn=s("p",{"data-source-line":"334"},[e("\u4F7F\u7528 "),s("code",null,"scope.extend()"),e("\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C\u4F1A\u89E6\u53D1\u65B9\u6CD5"),s("code",null,"lazyLoad"),e(",\u901A\u8FC7\u8FD4\u56DE\u5F53\u524D\u884C\u4FE1\u606F\u4EE5\u52A0\u8F7D\u5F02\u6B65\u6570\u636E")],-1),ln=s("pre",{style:{display:"none"}},null,-1),pn={class:"vuedoc-demo"},en={class:"vuedoc-demo__inner"},on={class:"vuedoc-demo__preview"},cn={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},rn=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u52A0\u8F7D\u5B50\u7EA7&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> lazyLoad = <span class="hljs-function">(<span class="hljs-params">row, resolve</span>) =&gt;</span> {
    <span class="hljs-comment">// row \u5F53\u524D\u70B9\u51FB\u884C\u4FE1\u606F</span>
    <span class="hljs-comment">// \u6A21\u62DF\u8BF7\u6C42\u52A0\u8F7D</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;row&#39;</span>)
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> child = [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F02\u6B65\u6570\u636E1&#39;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2021&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F02\u6B65\u6570\u636E2&#39;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2021&#39;</span> }
      ]
      resolve(child)
    }, <span class="hljs-number">500</span>)
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),hn=[rn],dn=g('<h3 id="\u5408\u5E76\u884C\u6216\u5217" data-source-line="378"><a class="markdownIt-Anchor" href="#\u5408\u5E76\u884C\u6216\u5217">#</a> \u5408\u5E76\u884C\u6216\u5217</h3><p data-source-line="380">\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002\u901A\u8FC7\u7ED9\u4F20\u5165<code>rowColSpan</code>\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570(\u5F53\u524D\u884C\u53F7<code>rowIndex</code>,\u5F53\u524D\u5217\u53F7<code>columnIndex</code>,\u5F53\u524D\u884C<code>row</code>,\u5F53\u524D\u5217<code>column</code>) \u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A<code>rowspan</code>\uFF0C\u7B2C\u4E8C\u4E2A<code>colspan</code>\uFF0C\u5373\u5411\u7EB5\u5411\u548C\u6A2A\u5411\u5408\u5E76\u591A\u5C11\u4E2A\u5355\u5143\u683C\u3002</p><pre style="display:none;"></pre>',3),jn={class:"vuedoc-demo"},un={class:"vuedoc-demo__inner"},gn={class:"vuedoc-demo__preview"},mn={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},_n=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:row-col-span</span>=<span class="hljs-string">&quot;rowColSpan&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> rowColSpan = <span class="hljs-function">(<span class="hljs-params">rowIndex, columnIndex</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (rowIndex === <span class="hljs-number">0</span> &amp;&amp; columnIndex === <span class="hljs-number">1</span>) {
      <span class="hljs-keyword">return</span> [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>] <span class="hljs-comment">// \u8868\u793A\u5728rowIndex=0\u884C\uFF0CcolumnIndex = 1\u5217\u4F4D\u7F6E\uFF0C\u5411\u4E0B\u5408\u5E76\u4E24\u4E2A\u548C\u5411\u53F3\u5408\u5E763\u4E2A\u5355\u5143\u683C</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),vn=[_n],qn=s("h3",{id:"\u8868\u5934\u53C2\u6570\u4E0D\u4F7F\u7528table-column\u7EC4\u4EF6","data-source-line":"409"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5934\u53C2\u6570\u4E0D\u4F7F\u7528table-column\u7EC4\u4EF6"},"#"),e(" \u8868\u5934\u53C2\u6570\uFF0C\u4E0D\u4F7F\u7528table-column\u7EC4\u4EF6")],-1),bn=s("p",{"data-source-line":"411"},[e("\u4F7F\u7528"),s("code",null,"columns"),e("\u53C2\u6570\u7ED9\u8868\u5934\u4F20\u53C2\uFF0C\u53C2\u6570\u548Ccolumn\u7EC4\u4EF6\u4E00\u81F4\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u6CA1\u6709\u9ED8\u8BA4\u503C\u3002\u4F7F\u7528"),s("code",null,"columns"),e("\u7684\u65B9\u6CD5\u8BA9\u4EE3\u7801\u66F4\u7B80\u6D01\u3002")],-1),kn=s("pre",{style:{display:"none"}},null,-1),fn={class:"vuedoc-demo"},yn={class:"vuedoc-demo__inner"},wn={class:"vuedoc-demo__preview"},xn={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},Cn=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Sn=[Cn],$n=s("h3",{id:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots","data-source-line":"448"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots"},"#"),e(" \u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots")],-1),Hn=s("p",{"data-source-line":"450"},"\u9ED8\u8BA4slots\u4E3A\u5F53\u524Dprops\uFF0C\u8868\u5934\u65F6\u4E3A\u5F53\u524Dprops-header",-1),zn=s("pre",{style:{display:"none"}},null,-1),Rn={class:"vuedoc-demo"},Dn={class:"vuedoc-demo__inner"},In={class:"vuedoc-demo__preview"},Jn={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},An=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">date-header</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        {{ scope.column.label }}slot\u8868\u5934
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>
    }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Nn=[An],Tn=s("h3",{id:"\u591A\u7EA7\u8868\u5934","data-source-line":"501"},[s("a",{class:"markdownIt-Anchor",href:"#\u591A\u7EA7\u8868\u5934"},"#"),e(" \u591A\u7EA7\u8868\u5934")],-1),Bn=s("p",{"data-source-line":"503"},[e("\u4F7F\u7528"),s("code",null,"columns"),e("\u8868\u5934\u53C2\u6570\u53EF\u652F\u6301\u591A\u7EA7\u8868\u5934,\u76EE\u524D\u7EB5\u5411\u5408\u5E76\u9700\u8981\u624B\u52A8\u8BBE\u7F6E"),s("code",null,"rowspan")],-1),On=s("pre",{style:{display:"none"}},null,-1),Ln={class:"vuedoc-demo"},En={class:"vuedoc-demo__inner"},Vn={class:"vuedoc-demo__preview"},Mn={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Pn=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E74\u4EFD&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6708\u4EFD&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
      <span class="hljs-attr">rowspan</span>: <span class="hljs-number">2</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6536\u5316\u5730\u5740&#39;</span>,
      <span class="hljs-attr">children</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
        }
      ]
    },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>,
      <span class="hljs-attr">rowspan</span>: <span class="hljs-number">2</span>
    }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Fn=[Pn],Wn=s("h3",{id:"\u5E26\u5206\u9875\u7EC4\u4EF6","data-source-line":"568"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E26\u5206\u9875\u7EC4\u4EF6"},"#"),e(" \u5E26\u5206\u9875\u7EC4\u4EF6")],-1),Gn=s("p",{"data-source-line":"570"},"\u5185\u7F6E\u5206\u9875\u7EC4\u4EF6",-1),Kn=s("pre",{style:{display:"none"}},null,-1),Qn={class:"vuedoc-demo"},Un={class:"vuedoc-demo__inner"},Xn={class:"vuedoc-demo__preview"},Yn={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},Zn=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:pagination</span>=<span class="hljs-string">&quot;pagination&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;selection&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> pagination = {
    <span class="hljs-attr">current</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">onChange</span>: <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(v)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),st=[Zn],at=g('<h3 id="\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A" data-source-line="602"><a class="markdownIt-Anchor" href="#\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A">#</a> \u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A</h3><p data-source-line="604">\u6DFB\u52A0<code>tooltip=true</code>\u6216<code>tooltip=&quot;{show:true,direction:&#39;left&#39;,..\u5176\u4ED6\u6240\u6709\u7684tooltip\u5C5E\u6027}&quot;</code>\u5373\u53EF\u5728\u9F20\u6807\u6ED1\u8FC7\u65F6\u663E\u793A<code>tooltip</code>\u63D0\u793A\uFF0C\u4E0D\u663E\u793A\u53EF\u4EE5\u4F20<code>show:false</code> \u9ED8\u8BA4\u4E3A<code>true</code></p><pre style="display:none;"></pre>',3),nt={class:"vuedoc-demo"},tt={class:"vuedoc-demo__inner"},lt={class:"vuedoc-demo__preview"},pt={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},et=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span>
      <span class="hljs-attr">:tooltip</span>=<span class="hljs-string">&quot;{ show: true, direction: &#39;left&#39; }&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ot=[et],ct=g('<h3 id="\u4F7F\u7528tag\u663E\u793A\u503C" data-source-line="638"><a class="markdownIt-Anchor" href="#\u4F7F\u7528tag\u663E\u793A\u503C">#</a> \u4F7F\u7528Tag\u663E\u793A\u503C</h3><p data-source-line="640">\u4F7F\u7528<code>Tag</code>\u53C2\u6570<code>tab={dict:{},...\u5176\u4ED6\u6240\u6709\u53C2\u6570}</code>\uFF0C\u5373\u53EF\u5728\u8868\u683C\u4E2D\u663E\u793A<code>tag</code>\u6837\u5F0F</p><p data-source-line="642">\u5176\u4E2D<code>dict</code>\u4E3A\u503C\u5BF9\u5E94\u7684<code>tag</code>\u7C7B\u578B\uFF0C\u5982<code>dict:{&#39;\u7537&#39;:&#39;info&#39;,&#39;\u5973&#39;:&#39;danger&#39;}</code>\uFF0C\u5373\u503C\u4E3A\u7537\u65F6\u663E\u793Atag\u7C7B\u578B\u4E3A<code>info</code></p><pre style="display:none;"></pre>',4),rt={class:"vuedoc-demo"},ht={class:"vuedoc-demo__inner"},dt={class:"vuedoc-demo__preview"},jt={ref:"vdpv_16Ref",class:"vuedoc-demo__sourceref"},it=g(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u671F&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6027\u522B&quot;</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;sex&quot;</span>
      <span class="hljs-attr">:tag</span>=<span class="hljs-string">&quot;{ dict: { \u7537: &#39;info&#39;, \u5973: &#39;danger&#39; } }&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7701\u4EFD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;province&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;city&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u90AE\u7F16&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;zip&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-column</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ut=[it],gt=g(`<h3 id="\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8" data-source-line="676"><a class="markdownIt-Anchor" href="#\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8">#</a> \u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8</h3><p data-source-line="678">\u901A\u8FC7\u8BBE\u7F6E<code>fixedBottomScroll</code>\u53EF\u5C06\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8\uFF0C<code>true</code>\u65F6\u6EDA\u52A8\u4E3B\u4F53\u4E3A<code>document</code>\uFF0C\u5B57\u7B26\u65F6\u4E3A\u5F53\u524D\u6EDA\u52A8\u7684\u533A\u57DF\u5982<code>fixedBottomScroll=&#39;.scroll</code>\u2019\uFF0C\u5219\u6EDA\u52A8\u533A\u57DF\u4E3A<code>scroll</code> \uFF0C\u6CE8\u610F\uFF1A\u6B64\u8BBE\u7F6E\u4F1A\u8986\u76D6<code>height</code>\u5C5E\u6027\u7684\u503C</p><h3 id="\u793A\u4F8B\u6570\u636E" data-source-line="681"><a class="markdownIt-Anchor" href="#\u793A\u4F8B\u6570\u636E">#</a> \u793A\u4F8B\u6570\u636E</h3><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>[
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-03&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u5F20\u4E09&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>,
    <span class="hljs-attr">&quot;children&quot;</span>: [
      {
        <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-00&quot;</span>,
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7&quot;</span>,
        <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u5E7F\u4E1C&quot;</span>,
        <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u767D\u4E91\u533A&quot;</span>,
        <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
        <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
      }
    ]
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-04&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-05&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB5&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-06&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB6&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-07&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB7&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-08&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB8&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-09&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB9&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  },
  {
    <span class="hljs-attr">&quot;date&quot;</span>: <span class="hljs-string">&quot;2016-05-10&quot;</span>,
    <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u674E\u56DB10&quot;</span>,
    <span class="hljs-attr">&quot;province&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C&quot;</span>,
    <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;\u767D\u4E91\u533A&quot;</span>,
    <span class="hljs-attr">&quot;address&quot;</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7&quot;</span>,
    <span class="hljs-attr">&quot;zip&quot;</span>: <span class="hljs-number">200330</span>
  }
]

</code></pre><h2 id="api" data-source-line="763"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="table" data-source-line="765"><a class="markdownIt-Anchor" href="#table">#</a> Table</h3><table data-source-line="767"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>array</td><td>\u5217\u8868\u6570\u636E</td></tr><tr><td>columns</td><td>array</td><td>\u8868\u5934\u6570\u636E</td></tr><tr><td>showHeader</td><td>boolean/true</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td></tr><tr><td>className</td><td>String</td><td>\u8868\u683C\u7C7B\u540D</td></tr><tr><td>hover</td><td>boolean/true</td><td>\u9F20\u6807\u7ECF\u8FC7\u663E\u793A\u9AD8\u4EAE</td></tr><tr><td>border</td><td>boolean/true</td><td>\u662F\u5426\u663E\u793A\u8868\u683C\u7EB5\u5411\u8FB9\u6846</td></tr><tr><td>stripe</td><td>boolean/true</td><td>\u662F\u5426\u663E\u793A\u95F4\u9694\u6591\u9A6C\u7EB9</td></tr><tr><td>height</td><td>String</td><td>table \u7684\u9AD8\uFF0C\u6EA2\u51FA\u663E\u793A\u6EDA\u52A8\u6761\uFF0C\u4E14\u8868\u5934\u56FA\u5B9A</td></tr><tr><td>width</td><td>String</td><td>\u8868\u683C\u5916\u5C42 div \u7684\u5BBD\uFF0C\u5F53\u5355\u5143\u683C\u603B\u548C\u5927\u4E8E\u8868\u683C width \u65F6\uFF0C\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761</td></tr><tr><td>ellipsis</td><td>boolean/true</td><td>\u8868\u683C\u5355\u5143\u683C\u6587\u5B57\u6EA2\u51FA\u663E\u793A\u2026\uFF0C\u5728\u4E0D\u6307\u5B9A\u5217\u5BBD\u65F6\uFF0C\u5404\u5217\u5E73\u5206\u8868\u683C\u5BBD</td></tr><tr><td>emptyText</td><td>String</td><td>\u65E0\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C</td></tr><tr><td>title</td><td>Boolean/true</td><td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A</td></tr><tr><td>drag</td><td>boolean/false</td><td>\u5141\u8BB8\u62D6\u52A8\u8868\u5934\u6539\u53D8\u5F53\u524D\u5355\u5143\u683C\u5BBD\u5EA6</td></tr><tr><td>dragLine</td><td>boolean/true</td><td>\u62D6\u52A8\u65F6\u663E\u793A\u5782\u76F4\u7EBF</td></tr><tr><td>dragWidth</td><td>array</td><td>\u5141\u8BB8\u62D6\u52A8\u6700\u5927\u4E0E\u6700\u5C0F\u5BBD\u5EA6[min,max]</td></tr><tr><td>extendToggle</td><td>boolean/false</td><td>\u6269\u5C55\u884C/\u5B50\u8282\u70B9\u521D\u59CB\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</td></tr><tr><td>rowColSpan</td><td>function</td><td>\u5408\u5E76\u884C\u6216\u5217\u65B9\u6CD5\u3002\u901A\u8FC7\u7ED9\u4F20\u5165 rowColSpan \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570(\u5F53\u524D\u884C\u53F7 rowIndex,\u5F53\u524D\u5217\u53F7 columnIndex,\u5F53\u524D\u884C row,\u5F53\u524D\u5217 column)\u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A rowspan\uFF0C\u7B2C\u4E8C\u4E2A colspan\uFF0C\u5373\u5411\u7EB5\u5411\u548C\u6A2A\u5411\u5408\u5E76\u591A\u5C11\u4E2A\u5355\u5143\u683C</td></tr><tr><td>pagination</td><td>object</td><td>\u6709\u76F8\u5173\u53C2\u6570\u65F6\u663E\u793A\u5206\u9875\uFF0C\u53C2\u6570\u7684pagination\u7EC4\u4EF6\u53C2\u6570</td></tr><tr><td>hasChild</td><td>boolean/true</td><td>\u662F\u5426\u5305\u542B\u5B50\u8282\u70B9\u6570\u636E\uFF0C\u4E3Atrue\u65F6\uFF0C\u5F53 <code>row</code> \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u6570\u636E</td></tr><tr><td>lazyLoad</td><td>function</td><td>\u8BBE\u7F6E\u4E86<code>lazyLoad</code>\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u4F7F\u7528\u61D2\u52A0\u8F7D\u65B9\u5F0F\uFF0Cfunction(row,resolve) row\u5F53\u524D\u884C\u4FE1\u606F</td></tr><tr><td>sortSingle</td><td>boolean/false</td><td>\u5982\u679C\u8BBE\u7F6E\u4E86\u6392\u5E8F\u529F\u80FD\uFF0C\u5F00\u542F\u540E\u53EA\u80FD\u6309\u5176\u4E2D\u4E00\u4E2A\u5B57\u6BB5\u6392\u5E8F</td></tr><tr><td>fixedBottomScroll</td><td>boolean/string</td><td>\u56FA\u5B9A\u6A2A\u5411\u6EDA\u52A8\u6761\u5728\u5E95\u90E8,\u53EF\u4E3A\u8282\u70B9\u7C7B\u540D</td></tr></tbody></table><h3 id="table-event" data-source-line="792"><a class="markdownIt-Anchor" href="#table-event">#</a> Table Event</h3><table data-source-line="794"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selectClick</td><td>\u52FE\u9009\u5355\u5217\u4E8B\u4EF6\uFF0Cfunction(list,checked,row, index) list\u6240\u6709\u5DF2\u52FE\u9009\u7684row\u96C6\u5408\uFF0Cchecked\u5F53\u524D\u72B6\u6001\uFF0Crow\u5F53\u524D\u70B9\u51FB\u884C\u4FE1\u606F\uFF0Cindex\u5F53\u524D\u884C\u5E8F\u53F7</td></tr><tr><td>sortChange</td><td>\u6392\u5E8F\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td>rowClick</td><td>\u5F53\u524D\u884C\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373tr\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,index)</td></tr><tr><td>cellClick</td><td>\u5F53\u524D\u5217\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373td\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,column,rowIndex, columnIndex)</td></tr><tr><td>dragChange</td><td>\u62D6\u52A8\u6539\u53D8\u5217\u8868\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u6240\u6709\u5217\u7684\u5BBD\u5EA6\u4FE1\u606F</td></tr><tr><td>scroll</td><td>\u8868\u65F6\u6EDA\u52A8\u65F6\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0Cfunction(scrollTop,bottom,el)\uFF0CscrollTop\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\uFF0Cbottom\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u90E8,el\u5F53\u524D\u6EDA\u52A8\u7684\u5BF9\u8C61</td></tr></tbody></table><h3 id="table-methods" data-source-line="803"><a class="markdownIt-Anchor" href="#table-methods">#</a> Table Methods</h3><table data-source-line="805"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>getSelectAll</td><td>\u8FD4\u56DE\u6240\u6709\u9009\u4E2D\u7684\u884C</td></tr><tr><td>toggleRowSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09 row, selected</td></tr><tr><td>toggleSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u6240\u6709\u884C\u7684\u9009\u4E2D/\u6E05\u7A7A\u72B6\u6001,true\u4E3A\u9009\u4E2D\uFF0Cfalse\u53D6\u6D88\u9009\u4E2D\uFF0C\u9ED8\u8BA4false</td></tr><tr><td>clearSort</td><td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6</td></tr></tbody></table><h3 id="table-column" data-source-line="812"><a class="markdownIt-Anchor" href="#table-column">#</a> Table-column</h3><table data-source-line="814"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prop</td><td>String</td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D</td></tr><tr><td>label</td><td>String</td><td>\u663E\u793A\u7684\u6807\u9898</td></tr><tr><td>width</td><td>String</td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td></tr><tr><td>className</td><td>String</td><td>\u5BF9\u5E94\u5217\u7684\u7C7B\u540D</td></tr><tr><td>align</td><td>String</td><td>\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009 left/center/right</td></tr><tr><td>type</td><td>String</td><td>\u5BF9\u5E94\u5217\u7C7B\u578B\uFF0C\u53EF\u9009 selection\uFF08\u591A\u9009\uFF09/index \u5E8F\u53F7/extend \u6269\u5C55\u5217</td></tr><tr><td>fixed</td><td>Boolean/false</td><td>\u56FA\u5B9A\u5217\uFF0C\u53EF\u9009 left/right</td></tr><tr><td>sortBy</td><td>Boolean/false</td><td>\u5F53\u524D\u5217\u663E\u793A\u6392\u5E8F\u6309\u94AE</td></tr><tr><td>title</td><td>Boolean/false</td><td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A\uFF0C\u4EC5\u5F53 table \u7684 title \u4E3A false \u65F6\u6709\u6548</td></tr><tr><td>drag</td><td>Boolean/true</td><td>\u5141\u8BB8\u5F53\u524D\u5355\u5143\u683C\u62D6\u52A8\uFF0C\u4EC5\u5728table\u7684drag=true\u65F6\u6709\u6548</td></tr><tr><td>formatter</td><td>function</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9,Function(row, column, cellValue, index)</td></tr><tr><td>tooltip</td><td>boolean/object</td><td>\u9F20\u6807\u6ED1\u8FC7\u663E\u793A<code>tooltip</code>\uFF0C\u53C2\u6570\u8BE6\u89C1<code>tooltip</code>\u7EC4\u4EF6</td></tr><tr><td>tag</td><td>object</td><td>\u4F7F\u7528<code>tag</code>\u6837\u5F0F\u663E\u793A\u5BF9\u5E94\u503C\uFF0C\u53C2\u6570\u8BE6\u89C1<code>tag</code></td></tr><tr><td>tag.dict</td><td>object</td><td>\u7C7B\u578B\u5BF9\u5E94\u5B57\u5178</td></tr></tbody></table><h3 id="table-column-slot" data-source-line="831"><a class="markdownIt-Anchor" href="#table-column-slot">#</a> Table-column Slot</h3><table data-source-line="833"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, index, extend }</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { column, index }</td></tr></tbody></table>`,16);function mt(l,n,o,p,t,h){const i=c("vdpv_0"),u=c("vdpv_1"),y=c("vdpv_2"),b=c("vdpv_3"),C=c("vdpv_4"),w=c("vdpv_5"),x=c("vdpv_6"),$=c("vdpv_7"),R=c("vdpv_8"),D=c("vdpv_9"),I=c("vdpv_10"),J=c("vdpv_11"),A=c("vdpv_12"),S=c("vdpv_13"),T=c("vdpv_14"),H=c("vdpv_15"),z=c("vdpv_16");return _(),f("div",Rs,[Ds,s("div",Is,[s("div",Js,[s("div",As,[a(i)]),s("div",{style:q({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ns,Bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=k=>l.toggleCode(0))},j(l.vdpv_0Height>0?"hidden":"show"),1)])]),Os,Ls,Es,s("div",Vs,[s("div",Ms,[s("div",Ps,[a(u)]),s("div",{style:q({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fs,Gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=k=>l.toggleCode(1))},j(l.vdpv_1Height>0?"hidden":"show"),1)])]),Ks,Qs,Us,s("div",Xs,[s("div",Ys,[s("div",Zs,[a(y)]),s("div",{style:q({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",sa,na,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=k=>l.toggleCode(2))},j(l.vdpv_2Height>0?"hidden":"show"),1)])]),ta,la,pa,s("div",ea,[s("div",oa,[s("div",ca,[a(b)]),s("div",{style:q({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ra,da,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=k=>l.toggleCode(3))},j(l.vdpv_3Height>0?"hidden":"show"),1)])]),ja,ia,ua,s("div",ga,[s("div",ma,[s("div",_a,[a(C)]),s("div",{style:q({height:l.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",va,ba,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=k=>l.toggleCode(4))},j(l.vdpv_4Height>0?"hidden":"show"),1)])]),ka,fa,ya,s("div",wa,[s("div",xa,[s("div",Ca,[a(w)]),s("div",{style:q({height:l.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Sa,Ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[5]||(n[5]=k=>l.toggleCode(5))},j(l.vdpv_5Height>0?"hidden":"show"),1)])]),za,Ra,s("div",Da,[s("div",Ia,[s("div",Ja,[a(x)]),s("div",{style:q({height:l.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Aa,Ta,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[6]||(n[6]=k=>l.toggleCode(6))},j(l.vdpv_6Height>0?"hidden":"show"),1)])]),Ba,Oa,La,s("div",Ea,[s("div",Va,[s("div",Ma,[a($)]),s("div",{style:q({height:l.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Pa,Wa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[7]||(n[7]=k=>l.toggleCode(7))},j(l.vdpv_7Height>0?"hidden":"show"),1)])]),Ga,Ka,Qa,s("div",Ua,[s("div",Xa,[s("div",Ya,[a(R)]),s("div",{style:q({height:l.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Za,an,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[8]||(n[8]=k=>l.toggleCode(8))},j(l.vdpv_8Height>0?"hidden":"show"),1)])]),nn,tn,ln,s("div",pn,[s("div",en,[s("div",on,[a(D)]),s("div",{style:q({height:l.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",cn,hn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[9]||(n[9]=k=>l.toggleCode(9))},j(l.vdpv_9Height>0?"hidden":"show"),1)])]),dn,s("div",jn,[s("div",un,[s("div",gn,[a(I)]),s("div",{style:q({height:l.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",mn,vn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[10]||(n[10]=k=>l.toggleCode(10))},j(l.vdpv_10Height>0?"hidden":"show"),1)])]),qn,bn,kn,s("div",fn,[s("div",yn,[s("div",wn,[a(J)]),s("div",{style:q({height:l.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",xn,Sn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[11]||(n[11]=k=>l.toggleCode(11))},j(l.vdpv_11Height>0?"hidden":"show"),1)])]),$n,Hn,zn,s("div",Rn,[s("div",Dn,[s("div",In,[a(A)]),s("div",{style:q({height:l.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",Jn,Nn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[12]||(n[12]=k=>l.toggleCode(12))},j(l.vdpv_12Height>0?"hidden":"show"),1)])]),Tn,Bn,On,s("div",Ln,[s("div",En,[s("div",Vn,[a(S)]),s("div",{style:q({height:l.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",Mn,Fn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[13]||(n[13]=k=>l.toggleCode(13))},j(l.vdpv_13Height>0?"hidden":"show"),1)])]),Wn,Gn,Kn,s("div",Qn,[s("div",Un,[s("div",Xn,[a(T)]),s("div",{style:q({height:l.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",Yn,st,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[14]||(n[14]=k=>l.toggleCode(14))},j(l.vdpv_14Height>0?"hidden":"show"),1)])]),at,s("div",nt,[s("div",tt,[s("div",lt,[a(H)]),s("div",{style:q({height:l.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",pt,ot,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[15]||(n[15]=k=>l.toggleCode(15))},j(l.vdpv_15Height>0?"hidden":"show"),1)])]),ct,s("div",rt,[s("div",ht,[s("div",dt,[a(z)]),s("div",{style:q({height:l.vdpv_16Height+"px"}),class:"vuedoc-demo__source"},[s("div",jt,ut,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[16]||(n[16]=k=>l.toggleCode(16))},j(l.vdpv_16Height>0?"hidden":"show"),1)])]),gt])}var qt=U(zs,[["render",mt]]);export{qt as default};
