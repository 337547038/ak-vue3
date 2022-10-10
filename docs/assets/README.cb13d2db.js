import{a as r,o as _,e as I,w as i,h as s,u as b,r as v,c as k,b as e,f as t,g as T,i as h,p as M,_ as B,d as L,t as O,n as m,j}from"./index.41bb3964.js";const u=[{date:"2016-05-03",name:"\u5F20\u4E09",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537",children:[{date:"2016-05-00",name:"\u5B50\u7EA7",province:"\u5B50\u7EA7\u5E7F\u4E1C",city:"\u5B50\u7EA7\u767D\u4E91\u533A",address:"\u5B50\u7EA7\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:0}]},{date:"2016-05-04",name:"\u674E\u56DB",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-05",name:"\u674E\u56DB5",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-06",name:"\u674E\u56DB6",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u7537"},{date:"2016-05-07",name:"\u674E\u56DB7",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-08",name:"\u674E\u56DB8",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-09",name:"\u674E\u56DB9",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"},{date:"2016-05-10",name:"\u674E\u56DB10",province:"\u5E7F\u4E1C",city:"\u767D\u4E91\u533A",address:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u767D\u4E91\u533A\u65E0\u540D\u8DEF888\u53F7",zip:200330,sex:"\u5973"}],V=["onClick"],P={__name:"README.md.vdpv_0",setup(n){const a=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"},{label:"\u64CD\u4F5C",prop:"control"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return _(),I(c,{data:b(u),columns:a},{control:i(d=>[s("a",{onClick:g=>l(d)},"\u5220\u9664",8,V)]),_:1},8,["data"])}}},F=["onClick"],W={__name:"README.md.vdpv_1",setup(n){const a=[{type:"selection",width:"50px"},{type:"index",label:"\u5E8F\u53F7",width:"50px"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"},{label:"\u64CD\u4F5C",prop:"control"}],l=v(),o=y=>{alert(JSON.stringify(y))},p=()=>{l.value.toggleSelection(!0)},c=()=>{l.value.toggleSelection(!1)},d=()=>{const y=l.value.getSelectAll();console.log(y),alert(JSON.stringify(y))},g=y=>{[u[1],u[2]].forEach(x=>{l.value.toggleRowSelection(x,y)})};return(y,f)=>{const x=r("ak-table"),w=r("ak-button");return _(),k("div",null,[e(x,{ref_key:"tableEl",ref:l,data:b(u),columns:a},{control:i(C=>[s("a",{onClick:H=>o(C)},"\u5220\u9664",8,F)]),_:1},8,["data"]),s("p",null,[e(w,{onClick:p},{default:i(()=>[t("\u5168\u9009")]),_:1}),e(w,{onClick:c},{default:i(()=>[t("\u53D6\u6D88\u5168\u9009")]),_:1}),e(w,{onClick:d},{default:i(()=>[t("\u83B7\u53D6\u6240\u9009\u884C")]),_:1}),e(w,{onClick:f[0]||(f[0]=C=>g(!0))},{default:i(()=>[t(" \u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001 ")]),_:1}),e(w,{onClick:f[1]||(f[1]=C=>g(!1))},{default:i(()=>[t(" \u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001 ")]),_:1})])])}}},G={__name:"README.md.vdpv_2",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"},{label:"\u64CD\u4F5C",prop:"control"}];return(l,o)=>{const p=r("ak-table");return _(),k("div",null,[e(p,{data:b(u),height:"200px",columns:a},null,8,["data"])])}}},K={__name:"README.md.vdpv_3",setup(n){const a=[{type:"selection",width:"50px",fixed:"left",className:"fixed-left"},{type:"index",label:"\u5E8F\u53F7",width:"50px"},{label:"\u65E5\u671F",prop:"date",width:"50px"},{label:"\u59D3\u540D",prop:"name",width:"200px"},{label:"\u7701\u4EFD",prop:"province",width:"100px"},{label:"\u57CE\u5E02",prop:"city",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"300px"},{label:"\u90AE\u7F16",prop:"zip",width:"100px",fixed:"right",className:"fixed-right"}];return(l,o)=>{const p=r("ak-table");return _(),k("div",null,[e(p,{ref:"tableEl",data:b(u),columns:a,height:"200px",width:"600px"},null,8,["data"])])}}},Q={__name:"README.md.vdpv_4",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date",sortBy:!0},{label:"\u59D3\u540D",prop:"name",sortBy:!0},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"}],l=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{ref:"tableEl",data:b(u),columns:a,onSortChange:l},null,8,["data"])])}}},U={__name:"README.md.vdpv_5",setup(n){const a=[{type:"selection",drag:!1},{type:"index",label:"\u5E8F\u53F7",drag:!1},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"}],l=o=>{console.log(o),alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{ref:"tableEl",data:b(u),columns:a,onDragChange:l},null,8,["data"])])}}},X={__name:"README.md.vdpv_6",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"}],l=T({showHeader:!0,hover:!0,border:!0,stripe:!0,ellipsis:!0,title:!0,dragLine:!0});return(o,p)=>{const c=r("ak-button"),d=r("ak-table");return _(),k("div",null,[s("p",null,[e(c,{onClick:p[0]||(p[0]=g=>l.showHeader=!l.showHeader)},{default:i(()=>[t("\u663E\u793A\u8868\u5934:"+h(l.showHeader),1)]),_:1}),e(c,{onClick:p[1]||(p[1]=g=>l.hover=!l.hover)},{default:i(()=>[t("hover\u9AD8\u4EAE:"+h(l.hover),1)]),_:1}),e(c,{onClick:p[2]||(p[2]=g=>l.border=!l.border)},{default:i(()=>[t("\u663E\u793A\u8FB9\u6846:"+h(l.border),1)]),_:1}),e(c,{onClick:p[3]||(p[3]=g=>l.stripe=!l.stripe)},{default:i(()=>[t("\u663E\u793A\u6591\u9A6C\u7EBF:"+h(l.stripe),1)]),_:1}),e(c,{onClick:p[4]||(p[4]=g=>l.ellipsis=!l.ellipsis)},{default:i(()=>[t("\u6EA2\u51FA\u7701\u7565\u53F7:"+h(l.ellipsis),1)]),_:1}),e(c,{onClick:p[5]||(p[5]=g=>l.title=!l.title)},{default:i(()=>[t("\u9F20\u6807\u6ED1\u52A8\u8FC7\u63D0\u793A:"+h(l.title),1)]),_:1}),e(c,{onClick:p[6]||(p[6]=g=>l.dragLine=!l.dragLine)},{default:i(()=>[t("\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u65F6\u5782\u76F4\u7EBF:"+h(l.dragLine),1)]),_:1})]),e(d,{data:b(u),"show-header":l.showHeader,hover:l.hover,border:l.border,stripe:l.stripe,ellipsis:l.ellipsis,"drag-line":l.dragLine,columns:a},null,8,["data","show-header","hover","border","stripe","ellipsis","drag-line"])])}}},Y=["onClick"],Z={__name:"README.md.vdpv_7",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u64CD\u4F5C",prop:"control"},{type:"extend",prop:"extend"}];return(l,o)=>{const p=r("ak-table");return _(),k("div",null,[e(p,{data:b(u),columns:a},{control:i(c=>[s("span",{onClick:d=>c.extend()},h(c.toggle?"\u6536\u8D77":"\u5C55\u5F00"),9,Y)]),extend:i(c=>[t(" \u8FD4\u56DE\u5F53\u524D\u884C\u6240\u6709\u4FE1\u606F\uFF1A"+h(c),1)]),_:1},8,["data"])])}}},ss=["onClick"],as={__name:"README.md.vdpv_8",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u64CD\u4F5C",prop:"control"}];return(l,o)=>{const p=r("ak-table");return _(),k("div",null,[e(p,{data:b(u),"has-child":!0,columns:a},{control:i(c=>[c.row.children?(_(),k("span",{key:0,onClick:d=>c.extend()},h(c.toggle?"\u6536\u8D77":"\u5C55\u5F00\u5B50\u7EA7"),9,ss)):M("",!0)]),_:1},8,["data"])])}}},ns=["onClick"],ls={__name:"README.md.vdpv_9",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u64CD\u4F5C",prop:"control"}],l=(o,p)=>{console.log("row"),setTimeout(()=>{p([{name:"\u5F02\u6B65\u6570\u636E1",date:"2021"},{name:"\u5F02\u6B65\u6570\u636E2",date:"2021"}])},500)};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{data:b(u),"has-child":!0,"lazy-load":l,columns:a},{control:i(d=>[s("span",{onClick:g=>d.extend()},h(d.toggle?"\u6536\u8D77":"\u52A0\u8F7D\u5B50\u7EA7"),9,ns)]),_:1},8,["data"])])}}},ts={__name:"README.md.vdpv_10",setup(n){const a=[{row:1,col:2,colSpan:2},{row:2,col:0,colSpan:2,rowSpan:2},{row:3,col:1,colSpan:0}],l=[{label:"\u65E5\u671F",prop:"dateTime",children:[{label:"\u5E74\u4EFD",prop:"date"},{label:"\u6708\u4EFD",prop:"date"}]},{prop:"name",label:"\u59D3\u540D"},{label:"\u6536\u5316\u5730\u5740",prop:"address2",children:[{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"}]},{prop:"control",label:"\u64CD\u4F5C"}];return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{data:b(u),"row-col-span":a,columns:l},null,8,["data"])])}}},ps=["onClick"],es={__name:"README.md.vdpv_11",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{prop:"control",label:"\u64CD\u4F5C"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{data:b(u),columns:a},{control:i(d=>[s("a",{onClick:g=>l(d)},"\u5220\u9664",8,ps)]),"date-header":i(d=>[t(h(d.column.label)+"slot\u8868\u5934 ",1)]),_:1},8,["data"])])}}},cs=["onClick"],os={__name:"README.md.vdpv_12",setup(n){const a=[{label:"\u65E5\u671F",prop:"dateTime",children:[{label:"\u5E74\u4EFD",prop:"date"},{label:"\u6708\u4EFD",prop:"date"}]},{prop:"name",label:"\u59D3\u540D"},{label:"\u6536\u5316\u5730\u5740",prop:"address2",children:[{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"}]},{prop:"control",label:"\u64CD\u4F5C"}],l=o=>{alert(JSON.stringify(o))};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{data:b(u),columns:a},{control:i(d=>[s("a",{onClick:g=>l(d)},"\u5220\u9664",8,cs)]),_:1},8,["data"])])}}},rs={__name:"README.md.vdpv_13",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"\u90AE\u7F16",prop:"zip"}],l={current:1,pageSize:3,onChange:o=>{console.log(o)}};return(o,p)=>{const c=r("ak-table");return _(),k("div",null,[e(c,{data:b(u),pagination:l,columns:a},null,8,["data"])])}}},hs={__name:"README.md.vdpv_14",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address",tooltip:{show:!0,direction:"left"}},{label:"\u90AE\u7F16",prop:"zip"}];return(l,o)=>{const p=r("ak-table");return _(),I(p,{data:b(u),columns:a},null,8,["data"])}}},ds={__name:"README.md.vdpv_15",setup(n){const a=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex",tag:{dict:{\u7537:"info",\u5973:"danger"}}},{label:"\u7701\u4EFD",prop:"province"},{label:"\u57CE\u5E02",prop:"city"},{label:"\u5730\u5740",prop:"address"},{label:"\u90AE\u7F16",prop:"zip"}];return(l,o)=>{const p=r("ak-table");return _(),I(p,{data:b(u),columns:a},null,8,["data"])}}},N=L({components:{vdpv_0:P,vdpv_1:W,vdpv_2:G,vdpv_3:K,vdpv_4:Q,vdpv_5:U,vdpv_6:X,vdpv_7:Z,vdpv_8:as,vdpv_9:ls,vdpv_10:ts,vdpv_11:es,vdpv_12:os,vdpv_13:rs,vdpv_14:hs,vdpv_15:ds},setup(n){const a=v(),l=v(),o=v(),p=v(),c=v(),d=v(),g=v(),y=v(),f=v(),x=v(),w=v(),C=v(),H=v(),D=v(),E=v(),z=v(),A=[a,l,o,p,c,d,g,y,f,x,w,C,H,D,E,z],S=T({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0});return{toggleCode:$=>{const R="vdpv_"+$;S[R+"Height"]===0?S[R+"Height"]=(A[$].value?A[$].value.offsetHeight:0)||0:S[R+"Height"]=0},...O(S),vdpv_0Ref:a,vdpv_1Ref:l,vdpv_2Ref:o,vdpv_3Ref:p,vdpv_4Ref:c,vdpv_5Ref:d,vdpv_6Ref:g,vdpv_7Ref:y,vdpv_8Ref:f,vdpv_9Ref:x,vdpv_10Ref:w,vdpv_11Ref:C,vdpv_12Ref:H,vdpv_13Ref:D,vdpv_14Ref:E,vdpv_15Ref:z}}});N.$vd={matter:{},toc:[{content:"Table \u8868\u683C",anchor:"table-\u8868\u683C",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009",anchor:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009",level:3},{content:"\u56FA\u5B9A\u8868\u5934",anchor:"\u56FA\u5B9A\u8868\u5934",level:3},{content:"\u56FA\u5B9A\u5934\u548C\u5217",anchor:"\u56FA\u5B9A\u5934\u548C\u5217",level:3},{content:"\u6DFB\u52A0\u6392\u5E8F",anchor:"\u6DFB\u52A0\u6392\u5E8F",level:3},{content:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD",anchor:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD",level:3},{content:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E",anchor:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E",level:3},{content:"\u6269\u5C55\u5217",anchor:"\u6269\u5C55\u5217",level:3},{content:"\u5B50\u7EA7\u6570\u636E",anchor:"\u5B50\u7EA7\u6570\u636E",level:3},{content:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D",anchor:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D",level:3},{content:"\u5408\u5E76\u884C\u6216\u5217",anchor:"\u5408\u5E76\u884C\u6216\u5217",level:3},{content:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots",anchor:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots",level:3},{content:"\u591A\u7EA7\u8868\u5934",anchor:"\u591A\u7EA7\u8868\u5934",level:3},{content:"\u5E26\u5206\u9875\u7EC4\u4EF6",anchor:"\u5E26\u5206\u9875\u7EC4\u4EF6",level:3},{content:"\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A",anchor:"\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A",level:3},{content:"\u4F7F\u7528Tag\u663E\u793A\u503C",anchor:"\u4F7F\u7528tag\u663E\u793A\u503C",level:3},{content:"\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8",anchor:"\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8",level:3},{content:"\u4F7F\u7528formatter",anchor:"\u4F7F\u7528formatter",level:3},{content:"\u793A\u4F8B\u6570\u636E",anchor:"\u793A\u4F8B\u6570\u636E",level:3},{content:"API",anchor:"api",level:2},{content:"Table",anchor:"table",level:3},{content:"Table Event",anchor:"table-event",level:3},{content:"Table Methods",anchor:"table-methods",level:3},{content:"Table-column",anchor:"table-column",level:3},{content:"Table-column Slot",anchor:"table-column-slot",level:3}]};const is=N,js={class:"vuedoc"},gs=j('<h1 id="table-\u8868\u683C" data-source-line="3"><a class="markdownIt-Anchor" href="#table-\u8868\u683C">#</a> Table \u8868\u683C</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),us={class:"vuedoc-demo"},_s={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},ms={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},bs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),qs=[bs],ks=s("h3",{id:"\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009","data-source-line":"34"},[s("a",{class:"markdownIt-Anchor",href:"#\u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009"},"#"),t(" \u6DFB\u52A0\u5E8F\u53F7\u548Ccheckbox\u52FE\u9009")],-1),ys=s("p",{"data-source-line":"36"},[s("code",null,'type="selection"'),t("\u6DFB\u52A0\u52FE\u9009\u6846,"),s("code",null,'type="index"'),t("\u6DFB\u52A0\u5E8F\u53F7,"),s("code",null,"getSelectAll"),t("\u65B9\u6CD5\u53EF\u53D6\u5DF2\u52FE\u9009\u884C\u3002\u652F\u6301\u6309\u4F4F"),s("code",null,"ctrl"),t("\u952E\u4E00\u6B21\u52FE\u9009\u6216\u53D6\u6D88\u591A\u4E2A")],-1),fs=s("pre",{style:{display:"none"}},null,-1),ws={class:"vuedoc-demo"},xs={class:"vuedoc-demo__inner"},Cs={class:"vuedoc-demo__preview"},Ss={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Hs=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableEl&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;delClick(scope)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;allSelect&quot;</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;unSelect&quot;</span>&gt;</span>\u53D6\u6D88\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getSelect&quot;</span>&gt;</span>\u83B7\u53D6\u6240\u9009\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(true)&quot;</span>&gt;</span>
        \u5C06\u7B2C2,3\u6761\u8BBE\u4E3A\u9009\u4E2D\u72B6\u6001
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRowSelection(false)&quot;</span>&gt;</span>
        \u53D6\u6D88\u7B2C2,3\u6761\u9009\u4E2D\u72B6\u6001
      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]

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

</span></code></pre></div>`,1),$s=[Hs],Rs=s("h3",{id:"\u56FA\u5B9A\u8868\u5934","data-source-line":"104"},[s("a",{class:"markdownIt-Anchor",href:"#\u56FA\u5B9A\u8868\u5934"},"#"),t(" \u56FA\u5B9A\u8868\u5934")],-1),Ds=s("p",{"data-source-line":"106"},[t("\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\uFF0C\u6DFB\u52A0\u6307\u5B9A\u9AD8\u5EA6\u5373\u53EF"),s("code",null,"height")],-1),Es=s("pre",{style:{display:"none"}},null,-1),zs={class:"vuedoc-demo"},As={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},Js={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ts=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200px&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Ns=[Ts],Ms=s("h3",{id:"\u56FA\u5B9A\u5934\u548C\u5217","data-source-line":"131"},[s("a",{class:"markdownIt-Anchor",href:"#\u56FA\u5B9A\u5934\u548C\u5217"},"#"),t(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Bs=s("p",{"data-source-line":"133"},[t("\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002\u6DFB\u52A0\u5BBD"),s("code",null,"width"),t("\u56FA\u5B9A\u5217\u5BBD\uFF1B"),s("code",null,"column"),t("\u6DFB\u52A0"),s("code",null,'fixed="left/right"'),t("\u3002\u9700\u8981\u6CE8\u610F\u8BBE\u7F6E\u8868\u683C\u5BBD\u65F6\u540C\u65F6\u8981\u5BF9\u6BCF\u5217\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\uFF0C\u5426\u5219\u4E0D\u4F1A\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761")],-1),Ls=s("pre",{style:{display:"none"}},null,-1),Os={class:"vuedoc-demo"},Vs={class:"vuedoc-demo__inner"},Ps={class:"vuedoc-demo__preview"},Fs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Ws=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;50px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;200px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;300px&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span>, <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#39;right&#39;</span>, <span class="hljs-attr">className</span>:<span class="hljs-string">&#39;fixed-right&#39;</span>}
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Gs=[Ws],Ks=s("h3",{id:"\u6DFB\u52A0\u6392\u5E8F","data-source-line":"164"},[s("a",{class:"markdownIt-Anchor",href:"#\u6DFB\u52A0\u6392\u5E8F"},"#"),t(" \u6DFB\u52A0\u6392\u5E8F")],-1),Qs=s("p",{"data-source-line":"166"},[s("code",null,"column"),t("\u6DFB\u52A0\u6392\u5E8F "),s("code",null,'sortBy="true"'),t("\u8868\u793A\u5F53\u524D\u5217\u53EF\u6392\u5E8F\u3002\u70B9\u51FB\u6392\u5E8F\u89E6\u53D1\u4E8B\u4EF6"),s("code",null,"sortChange"),t("\u3002\u8BBE\u7F6E"),s("code",null,'sortSingle="true"'),t("\u65F6\u53EA\u5141\u8BB8\u4E00\u5217\u6392\u5E8F")],-1),Us=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Ys={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},aa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>, <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">sortBy</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> sortChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),na=[aa],la=s("h3",{id:"\u62D6\u52A8\u6539\u53D8\u5217\u5BBD","data-source-line":"201"},[s("a",{class:"markdownIt-Anchor",href:"#\u62D6\u52A8\u6539\u53D8\u5217\u5BBD"},"#"),t(" \u62D6\u52A8\u6539\u53D8\u5217\u5BBD")],-1),ta=s("p",{"data-source-line":"203"},[t("\u9ED8\u8BA4\u6240\u6709\u5217\u5141\u8BB8\u62D6\u52A8\uFF0C\u5F53\u8BBE\u7F6E"),s("code",null,'drag="false"'),t("\u4E0D\u5141\u8BB8\u62D6\u52A8\u3002\u6216\u8005\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9\u5355\u4E2Acolumn\u8BBE\u7F6E"),s("code",null,'drag="false"'),t("\u8868\u793A\u5F53\u524D\u5217\u4E0D\u53EF\u62D6\u52A8\u3002\u62D6\u52A8\u6539\u53D8\u5217\u5BBD\u4E8B\u4EF6"),s("code",null,"dragChange"),t("\u53EF\u8FD4\u56DE\u5404\u5217\u7684\u5BBD\uFF0C\u53EF\u7528\u4E8E\u548C\u670D\u52A1\u7AEF\u5BF9\u63A5")],-1),pa=s("pre",{style:{display:"none"}},null,-1),ea={class:"vuedoc-demo"},ca={class:"vuedoc-demo__inner"},oa={class:"vuedoc-demo__preview"},ra={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ha=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">drag</span>: <span class="hljs-literal">false</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> dragChange = <span class="hljs-function">(<span class="hljs-params">obj</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(obj)
    alert(<span class="hljs-built_in">JSON</span>.stringify(obj))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),da=[ha],ia=s("h3",{id:"\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E","data-source-line":"238"},[s("a",{class:"markdownIt-Anchor",href:"#\u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E"},"#"),t(" \u5176\u4ED6\u53C2\u6570\u8BBE\u7F6E")],-1),ja=s("pre",{style:{display:"none"}},null,-1),ga={class:"vuedoc-demo"},ua={class:"vuedoc-demo__inner"},_a={class:"vuedoc-demo__preview"},va={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},ma=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
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
</span></code></pre></div>`,1),ba=[ma],qa=s("h3",{id:"\u6269\u5C55\u5217","data-source-line":"296"},[s("a",{class:"markdownIt-Anchor",href:"#\u6269\u5C55\u5217"},"#"),t(" \u6269\u5C55\u5217")],-1),ka=s("p",{"data-source-line":"298"},[s("code",null,'type="extend"'),t(",\u4F7F\u7528 "),s("code",null,"scope.extend()"),t("\u65B9\u6CD5\u53EF\u5C55\u5F00\u6216\u6536\u8D77\u6269\u5C55\u884C\u5217\uFF0C"),s("code",null,"scope.toggle"),t("\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001")],-1),ya=s("pre",{style:{display:"none"}},null,-1),fa={class:"vuedoc-demo"},wa={class:"vuedoc-demo__inner"},xa={class:"vuedoc-demo__preview"},Ca={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Sa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u5C55\u5F00&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extend</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span> \u8FD4\u56DE\u5F53\u524D\u884C\u6240\u6709\u4FE1\u606F\uFF1A{{ scope }} <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>},
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;extend&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;extend&#39;</span> },
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Ha=[Sa],$a=s("h3",{id:"\u5B50\u7EA7\u6570\u636E","data-source-line":"330"},[s("a",{class:"markdownIt-Anchor",href:"#\u5B50\u7EA7\u6570\u636E"},"#"),t(" \u5B50\u7EA7\u6570\u636E")],-1),Ra=s("p",{"data-source-line":"332"},[t("\u7C7B\u4F3C\u4E8E\u6269\u5C55\u5217\uFF0C\u4F7F\u7528 "),s("code",null,"scope.extend()"),t("\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C"),s("code",null,"scope.toggle"),t("\u8FD4\u56DE\u5F53\u524D\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001\u3002\u5B50\u8282\u70B9scope\u6570\u636E\u9664\u4E86row\uFF0C\u8FD8\u5305\u542BparentRow\u7236\u7EA7\u4FE1\u606F")],-1),Da=s("pre",{style:{display:"none"}},null,-1),Ea={class:"vuedoc-demo"},za={class:"vuedoc-demo__inner"},Aa={class:"vuedoc-demo__preview"},Ia={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Ja=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;scope.row.children&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
            scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u5C55\u5F00\u5B50\u7EA7&#39;
          }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ta=[Ja],Na=s("h3",{id:"\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D","data-source-line":"366"},[s("a",{class:"markdownIt-Anchor",href:"#\u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D"},"#"),t(" \u5B50\u7EA7\u5F02\u6B65\u52A0\u8F7D")],-1),Ma=s("p",{"data-source-line":"368"},[t("\u4F7F\u7528 "),s("code",null,"scope.extend()"),t("\u65B9\u6CD5\u5C55\u5F00\u6216\u6536\u8D77\u5B50\u8282\u70B9\uFF0C\u4F1A\u89E6\u53D1\u65B9\u6CD5"),s("code",null,"lazyLoad"),t(",\u901A\u8FC7\u8FD4\u56DE\u5F53\u524D\u884C\u4FE1\u606F\u4EE5\u52A0\u8F7D\u5F02\u6B65\u6570\u636E")],-1),Ba=s("pre",{style:{display:"none"}},null,-1),La={class:"vuedoc-demo"},Oa={class:"vuedoc-demo__inner"},Va={class:"vuedoc-demo__preview"},Pa={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},Fa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:has-child</span>=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>
      <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;scope.extend()&quot;</span>&gt;</span>{{
          scope.toggle ? &#39;\u6536\u8D77&#39; : &#39;\u52A0\u8F7D\u5B50\u7EA7&#39;
        }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;control&#39;</span> }
  ]
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



</span></code></pre></div>`,1),Wa=[Fa],Ga=j('<h3 id="\u5408\u5E76\u884C\u6216\u5217" data-source-line="422"><a class="markdownIt-Anchor" href="#\u5408\u5E76\u884C\u6216\u5217">#</a> \u5408\u5E76\u884C\u6216\u5217</h3><p data-source-line="424">\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002\u901A\u8FC7\u7ED9\u4F20\u5165<code>rowColSpan</code>\u5408\u5E76\u6570\u636E\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u53C2\u6570(\u5F53\u524D\u884C\u53F7<code>row</code>,\u5F53\u524D\u5217\u53F7<code>col</code>,\u5F53\u524D\u884C\u5408\u5E76\u884C\u6570<code>rowSpan</code>,\u5408\u5E76\u5217\u6570<code>colSpan</code>)\u3002\u5F53<code>rowSpan</code>\u6216<code>colSpan</code>\u4E3A0\u65F6\uFF0C\u8868\u793A\u9690\u85CF\u5F53\u524D\u884C\u6216\u5217</p><pre style="display:none;"></pre>',3),Ka={class:"vuedoc-demo"},Qa={class:"vuedoc-demo__inner"},Ua={class:"vuedoc-demo__preview"},Xa={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},Ya=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;dateTime&#39;</span>,
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6536\u5316\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address2&#39;</span>,
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>
    }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Za=[Ya],sn=s("h3",{id:"\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots","data-source-line":"498"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots"},"#"),t(" \u8868\u5934\u53C2\u6570\u4E5F\u652F\u6301slots")],-1),an=s("p",{"data-source-line":"500"},"\u9ED8\u8BA4slots\u4E3A\u5F53\u524Dprops\uFF0C\u8868\u5934\u65F6\u4E3A\u5F53\u524Dprops-header",-1),nn=s("pre",{style:{display:"none"}},null,-1),ln={class:"vuedoc-demo"},tn={class:"vuedoc-demo__inner"},pn={class:"vuedoc-demo__preview"},en={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},cn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),on=[cn],rn=s("h3",{id:"\u591A\u7EA7\u8868\u5934","data-source-line":"551"},[s("a",{class:"markdownIt-Anchor",href:"#\u591A\u7EA7\u8868\u5934"},"#"),t(" \u591A\u7EA7\u8868\u5934")],-1),hn=s("p",{"data-source-line":"553"},[t("\u591A\u7EA7\u8868\u5934\u65F6\uFF0C"),s("code",null,"prop"),t("\u4F5C\u4E3A\u552F\u4E00\u7684key\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\u6216\u91CD\u590D")],-1),dn=s("pre",{style:{display:"none"}},null,-1),jn={class:"vuedoc-demo"},gn={class:"vuedoc-demo__inner"},un={class:"vuedoc-demo__preview"},_n={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},vn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;dateTime&#39;</span>,
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6536\u5316\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address2&#39;</span>,
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
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>
    }
  ]
  <span class="hljs-keyword">const</span> delClick = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(item))
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),mn=[vn],bn=s("h3",{id:"\u5E26\u5206\u9875\u7EC4\u4EF6","data-source-line":"618"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E26\u5206\u9875\u7EC4\u4EF6"},"#"),t(" \u5E26\u5206\u9875\u7EC4\u4EF6")],-1),qn=s("p",{"data-source-line":"620"},"\u5185\u7F6E\u5206\u9875\u7EC4\u4EF6",-1),kn=s("pre",{style:{display:"none"}},null,-1),yn={class:"vuedoc-demo"},fn={class:"vuedoc-demo__inner"},wn={class:"vuedoc-demo__preview"},xn={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Cn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:pagination</span>=<span class="hljs-string">&quot;pagination&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#39;left&#39;</span> }
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
  <span class="hljs-keyword">const</span> pagination = {
    <span class="hljs-attr">current</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">onChange</span>: <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(v)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Sn=[Cn],Hn=j('<h3 id="\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A" data-source-line="656"><a class="markdownIt-Anchor" href="#\u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A">#</a> \u9F20\u6807\u6ED1\u8FC7tooltip\u63D0\u793A</h3><p data-source-line="658">\u6DFB\u52A0<code>tooltip=true</code>\u6216<code>tooltip=&quot;{show:true,direction:&#39;left&#39;,..\u5176\u4ED6\u6240\u6709\u7684tooltip\u5C5E\u6027}&quot;</code>\u5373\u53EF\u5728\u9F20\u6807\u6ED1\u8FC7\u65F6\u663E\u793A<code>tooltip</code>\u63D0\u793A\uFF0C\u4E0D\u663E\u793A\u53EF\u4EE5\u4F20<code>show:false</code> \u9ED8\u8BA4\u4E3A<code>true</code></p><pre style="display:none;"></pre>',3),$n={class:"vuedoc-demo"},Rn={class:"vuedoc-demo__inner"},Dn={class:"vuedoc-demo__preview"},En={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},zn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>,
      <span class="hljs-attr">tooltip</span>: { <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#39;left&#39;</span> }
    },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),An=[zn],In=j('<h3 id="\u4F7F\u7528tag\u663E\u793A\u503C" data-source-line="687"><a class="markdownIt-Anchor" href="#\u4F7F\u7528tag\u663E\u793A\u503C">#</a> \u4F7F\u7528Tag\u663E\u793A\u503C</h3><p data-source-line="689">\u4F7F\u7528<code>Tag</code>\u53C2\u6570<code>tab={dict:{},...\u5176\u4ED6\u6240\u6709\u53C2\u6570}</code>\uFF0C\u5373\u53EF\u5728\u8868\u683C\u4E2D\u663E\u793A<code>tag</code>\u6837\u5F0F</p><p data-source-line="691">\u5176\u4E2D<code>dict</code>\u4E3A\u503C\u5BF9\u5E94\u7684<code>tag</code>\u7C7B\u578B\uFF0C\u5982<code>dict:{&#39;\u7537&#39;:&#39;info&#39;,&#39;\u5973&#39;:&#39;danger&#39;}</code>\uFF0C\u5373\u503C\u4E3A\u7537\u65F6\u663E\u793Atag\u7C7B\u578B\u4E3A<code>info</code></p><pre style="display:none;"></pre>',4),Jn={class:"vuedoc-demo"},Tn={class:"vuedoc-demo__inner"},Nn={class:"vuedoc-demo__preview"},Mn={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},Bn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>
  <span class="hljs-keyword">const</span> columns = [
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span> },
    { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>, <span class="hljs-attr">tag</span>: { <span class="hljs-attr">dict</span>: { \u7537: <span class="hljs-string">&#39;info&#39;</span>, \u5973: <span class="hljs-string">&#39;danger&#39;</span> } } },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u90AE\u7F16&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;zip&#39;</span> }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



</span></code></pre></div>`,1),Ln=[Bn],On=j(`<h3 id="\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8" data-source-line="716"><a class="markdownIt-Anchor" href="#\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8">#</a> \u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8</h3><p data-source-line="718">\u901A\u8FC7\u8BBE\u7F6E<code>fixedBottomScroll</code>\u53EF\u5C06\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8\uFF0C<code>true</code>\u65F6\u6EDA\u52A8\u4E3B\u4F53\u4E3A<code>document</code>\uFF0C\u5B57\u7B26\u65F6\u4E3A\u5F53\u524D\u6EDA\u52A8\u7684\u533A\u57DF\u5982<code>fixedBottomScroll=&#39;.scroll</code>\u2019\uFF0C\u5219\u6EDA\u52A8\u533A\u57DF\u4E3A<code>scroll</code> \uFF0C\u6CE8\u610F\uFF1A\u6B64\u8BBE\u7F6E\u4F1A\u8986\u76D6<code>height</code>\u5C5E\u6027\u7684\u503C</p><h3 id="\u4F7F\u7528formatter" data-source-line="721"><a class="markdownIt-Anchor" href="#\u4F7F\u7528formatter">#</a> \u4F7F\u7528formatter</h3><p data-source-line="723">\u6A21\u677F\u4E0D\u652F\u6301lang=\u2018jsx\u2019</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-html hljs--one-dark"><code><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;jsx&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> tableData <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demoJs.json&#39;</span>

  <span class="hljs-keyword">const</span> columns = [
  {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>},
  {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;date&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;name&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;sex&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7701\u4EFD&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;province&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u57CE\u5E02&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;city&#39;</span>},
  {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;address&#39;</span>},
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>,
    <span class="hljs-attr">formatter</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span></span>
  }
  }
  ]
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code></pre><h3 id="\u793A\u4F8B\u6570\u636E" data-source-line="755"><a class="markdownIt-Anchor" href="#\u793A\u4F8B\u6570\u636E">#</a> \u793A\u4F8B\u6570\u636E</h3><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>[
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

</code></pre><h2 id="api" data-source-line="837"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="table" data-source-line="839"><a class="markdownIt-Anchor" href="#table">#</a> Table</h3><table data-source-line="841"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>array</td><td>\u5217\u8868\u6570\u636E</td></tr><tr><td>columns</td><td>array</td><td>\u8868\u5934\u6570\u636E</td></tr><tr><td>showHeader</td><td>boolean/true</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td></tr><tr><td>className</td><td>String</td><td>\u8868\u683C\u7C7B\u540D</td></tr><tr><td>hover</td><td>boolean/true</td><td>\u9F20\u6807\u7ECF\u8FC7\u663E\u793A\u9AD8\u4EAE</td></tr><tr><td>border</td><td>boolean/false</td><td>\u662F\u5426\u663E\u793A\u8868\u683C\u7EB5\u5411\u8FB9\u6846</td></tr><tr><td>stripe</td><td>boolean/true</td><td>\u662F\u5426\u663E\u793A\u95F4\u9694\u6591\u9A6C\u7EB9</td></tr><tr><td>height</td><td>String</td><td>table \u7684\u9AD8\uFF0C\u6EA2\u51FA\u663E\u793A\u6EDA\u52A8\u6761\uFF0C\u4E14\u8868\u5934\u56FA\u5B9A</td></tr><tr><td>width</td><td>String</td><td>\u8868\u683C\u5916\u5C42 div \u7684\u5BBD\uFF0C\u5F53\u5355\u5143\u683C\u603B\u548C\u5927\u4E8E\u8868\u683C width \u65F6\uFF0C\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761</td></tr><tr><td>ellipsis</td><td>boolean/true</td><td>\u8868\u683C\u5355\u5143\u683C\u6587\u5B57\u6EA2\u51FA\u663E\u793A\u2026\uFF0C\u5728\u4E0D\u6307\u5B9A\u5217\u5BBD\u65F6\uFF0C\u5404\u5217\u5E73\u5206\u8868\u683C\u5BBD</td></tr><tr><td>emptyText</td><td>String</td><td>\u65E0\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C</td></tr><tr><td>title</td><td>Boolean/true</td><td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A</td></tr><tr><td>drag</td><td>boolean/false</td><td>\u5141\u8BB8\u62D6\u52A8\u8868\u5934\u6539\u53D8\u5F53\u524D\u5355\u5143\u683C\u5BBD\u5EA6</td></tr><tr><td>dragLine</td><td>boolean/true</td><td>\u62D6\u52A8\u65F6\u663E\u793A\u5782\u76F4\u7EBF</td></tr><tr><td>dragWidth</td><td>array</td><td>\u5141\u8BB8\u62D6\u52A8\u6700\u5927\u4E0E\u6700\u5C0F\u5BBD\u5EA6[min,max]</td></tr><tr><td>extendToggle</td><td>boolean/false</td><td>\u6269\u5C55\u884C/\u5B50\u8282\u70B9\u521D\u59CB\u5C55\u5F00\u6216\u6536\u8D77\u72B6\u6001</td></tr><tr><td>rowColSpan</td><td>function</td><td>\u5408\u5E76\u884C\u6216\u5217\u65B9\u6CD5\u3002\u901A\u8FC7\u7ED9\u4F20\u5165 rowColSpan \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570(\u5F53\u524D\u884C\u53F7 rowIndex,\u5F53\u524D\u5217\u53F7 columnIndex,\u5F53\u524D\u884C row,\u5F53\u524D\u5217 column)\u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A rowspan\uFF0C\u7B2C\u4E8C\u4E2A colspan\uFF0C\u5373\u5411\u7EB5\u5411\u548C\u6A2A\u5411\u5408\u5E76\u591A\u5C11\u4E2A\u5355\u5143\u683C</td></tr><tr><td>pagination</td><td>object</td><td>\u6709\u76F8\u5173\u53C2\u6570\u65F6\u663E\u793A\u5206\u9875\uFF0C\u53C2\u6570\u7684pagination\u7EC4\u4EF6\u53C2\u6570</td></tr><tr><td>hasChild</td><td>boolean/true</td><td>\u662F\u5426\u5305\u542B\u5B50\u8282\u70B9\u6570\u636E\uFF0C\u4E3Atrue\u65F6\uFF0C\u5F53 <code>row</code> \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u6570\u636E</td></tr><tr><td>lazyLoad</td><td>function</td><td>\u8BBE\u7F6E\u4E86<code>lazyLoad</code>\u65F6\uFF0C\u88AB\u89C6\u4E3A\u5B50\u8282\u70B9\u4F7F\u7528\u61D2\u52A0\u8F7D\u65B9\u5F0F\uFF0Cfunction(row,resolve) row\u5F53\u524D\u884C\u4FE1\u606F</td></tr><tr><td>sortSingle</td><td>boolean/false</td><td>\u5982\u679C\u8BBE\u7F6E\u4E86\u6392\u5E8F\u529F\u80FD\uFF0C\u5F00\u542F\u540E\u53EA\u80FD\u6309\u5176\u4E2D\u4E00\u4E2A\u5B57\u6BB5\u6392\u5E8F</td></tr><tr><td>fixedBottomScroll</td><td>boolean/string</td><td>\u56FA\u5B9A\u6A2A\u5411\u6EDA\u52A8\u6761\u5728\u5E95\u90E8,\u53EF\u4E3A\u8282\u70B9\u7C7B\u540D</td></tr></tbody></table><h3 id="table-event" data-source-line="866"><a class="markdownIt-Anchor" href="#table-event">#</a> Table Event</h3><table data-source-line="868"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selectClick</td><td>\u52FE\u9009\u5355\u5217\u4E8B\u4EF6\uFF0Cfunction(list,checked,row, index) list\u6240\u6709\u5DF2\u52FE\u9009\u7684row\u96C6\u5408\uFF0Cchecked\u5F53\u524D\u72B6\u6001\uFF0Crow\u5F53\u524D\u70B9\u51FB\u884C\u4FE1\u606F\uFF0Cindex\u5F53\u524D\u884C\u5E8F\u53F7</td></tr><tr><td>sortChange</td><td>\u6392\u5E8F\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td>rowClick</td><td>\u5F53\u524D\u884C\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373tr\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,index)</td></tr><tr><td>cellClick</td><td>\u5F53\u524D\u5217\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5373td\u70B9\u51FB\u4E8B\u4EF6\uFF0Cfunction(row,column,rowIndex, columnIndex)</td></tr><tr><td>dragChange</td><td>\u62D6\u52A8\u6539\u53D8\u5217\u8868\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u6240\u6709\u5217\u7684\u5BBD\u5EA6\u4FE1\u606F</td></tr><tr><td>scroll</td><td>\u8868\u65F6\u6EDA\u52A8\u65F6\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0Cfunction(scrollTop,bottom,el)\uFF0CscrollTop\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\uFF0Cbottom\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u90E8,el\u5F53\u524D\u6EDA\u52A8\u7684\u5BF9\u8C61</td></tr></tbody></table><h3 id="table-methods" data-source-line="877"><a class="markdownIt-Anchor" href="#table-methods">#</a> Table Methods</h3><table data-source-line="879"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>getSelectAll</td><td>\u8FD4\u56DE\u6240\u6709\u9009\u4E2D\u7684\u884C</td></tr><tr><td>toggleRowSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09 row, selected</td></tr><tr><td>toggleSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u6240\u6709\u884C\u7684\u9009\u4E2D/\u6E05\u7A7A\u72B6\u6001,true\u4E3A\u9009\u4E2D\uFF0Cfalse\u53D6\u6D88\u9009\u4E2D\uFF0C\u9ED8\u8BA4false</td></tr><tr><td>clearSort</td><td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6</td></tr></tbody></table><h3 id="table-column" data-source-line="886"><a class="markdownIt-Anchor" href="#table-column">#</a> Table-column</h3><table data-source-line="888"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prop</td><td>String</td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C\u552F\u4E00\u7684key\uFF0C\u4E0D\u80FD\u91CD\u590D</td></tr><tr><td>label</td><td>String</td><td>\u663E\u793A\u7684\u6807\u9898</td></tr><tr><td>width</td><td>String</td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td></tr><tr><td>className</td><td>String</td><td>\u5BF9\u5E94\u5217\u7684\u7C7B\u540D</td></tr><tr><td>align</td><td>String</td><td>\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009 left/center/right</td></tr><tr><td>type</td><td>String</td><td>\u5BF9\u5E94\u5217\u7C7B\u578B\uFF0C\u53EF\u9009 selection\uFF08\u591A\u9009\uFF09/index \u5E8F\u53F7/extend \u6269\u5C55\u5217</td></tr><tr><td>fixed</td><td>Boolean/false</td><td>\u56FA\u5B9A\u5217\uFF0C\u53EF\u9009 left/right</td></tr><tr><td>sortBy</td><td>Boolean/false</td><td>\u5F53\u524D\u5217\u663E\u793A\u6392\u5E8F\u6309\u94AE</td></tr><tr><td>title</td><td>Boolean/false</td><td>\u9F20\u6807\u6ED1\u8FC7\u5355\u5143\u683C\u65F6\u663E\u793A title \u63D0\u793A\uFF0C\u4EC5\u5F53 table \u7684 title \u4E3A false \u65F6\u6709\u6548</td></tr><tr><td>drag</td><td>Boolean/true</td><td>\u5141\u8BB8\u5F53\u524D\u5355\u5143\u683C\u62D6\u52A8\uFF0C\u4EC5\u5728table\u7684drag=true\u65F6\u6709\u6548</td></tr><tr><td>formatter</td><td>function</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9,Function(row, column, cellValue, index)</td></tr><tr><td>tooltip</td><td>boolean/object</td><td>\u9F20\u6807\u6ED1\u8FC7\u663E\u793A<code>tooltip</code>\uFF0C\u53C2\u6570\u8BE6\u89C1<code>tooltip</code>\u7EC4\u4EF6</td></tr><tr><td>tag</td><td>object</td><td>\u4F7F\u7528<code>tag</code>\u6837\u5F0F\u663E\u793A\u5BF9\u5E94\u503C\uFF0C\u53C2\u6570\u8BE6\u89C1<code>tag</code></td></tr><tr><td>tag.dict</td><td>object</td><td>\u7C7B\u578B\u5BF9\u5E94\u5B57\u5178</td></tr></tbody></table><h3 id="table-column-slot" data-source-line="905"><a class="markdownIt-Anchor" href="#table-column-slot">#</a> Table-column Slot</h3><table data-source-line="907"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, index, extend }</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { column, index }</td></tr></tbody></table>`,20);function Vn(n,a,l,o,p,c){const d=r("vdpv_0"),g=r("vdpv_1"),y=r("vdpv_2"),f=r("vdpv_3"),x=r("vdpv_4"),w=r("vdpv_5"),C=r("vdpv_6"),H=r("vdpv_7"),D=r("vdpv_8"),E=r("vdpv_9"),z=r("vdpv_10"),A=r("vdpv_11"),S=r("vdpv_12"),J=r("vdpv_13"),$=r("vdpv_14"),R=r("vdpv_15");return _(),k("div",js,[gs,s("div",us,[s("div",_s,[s("div",vs,[e(d)]),s("div",{style:m({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ms,qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=q=>n.toggleCode(0))},h(n.vdpv_0Height>0?"hidden":"show"),1)])]),ks,ys,fs,s("div",ws,[s("div",xs,[s("div",Cs,[e(g)]),s("div",{style:m({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ss,$s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=q=>n.toggleCode(1))},h(n.vdpv_1Height>0?"hidden":"show"),1)])]),Rs,Ds,Es,s("div",zs,[s("div",As,[s("div",Is,[e(y)]),s("div",{style:m({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Js,Ns,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=q=>n.toggleCode(2))},h(n.vdpv_2Height>0?"hidden":"show"),1)])]),Ms,Bs,Ls,s("div",Os,[s("div",Vs,[s("div",Ps,[e(f)]),s("div",{style:m({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fs,Gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=q=>n.toggleCode(3))},h(n.vdpv_3Height>0?"hidden":"show"),1)])]),Ks,Qs,Us,s("div",Xs,[s("div",Ys,[s("div",Zs,[e(x)]),s("div",{style:m({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",sa,na,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=q=>n.toggleCode(4))},h(n.vdpv_4Height>0?"hidden":"show"),1)])]),la,ta,pa,s("div",ea,[s("div",ca,[s("div",oa,[e(w)]),s("div",{style:m({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",ra,da,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=q=>n.toggleCode(5))},h(n.vdpv_5Height>0?"hidden":"show"),1)])]),ia,ja,s("div",ga,[s("div",ua,[s("div",_a,[e(C)]),s("div",{style:m({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",va,ba,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=q=>n.toggleCode(6))},h(n.vdpv_6Height>0?"hidden":"show"),1)])]),qa,ka,ya,s("div",fa,[s("div",wa,[s("div",xa,[e(H)]),s("div",{style:m({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ca,Ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=q=>n.toggleCode(7))},h(n.vdpv_7Height>0?"hidden":"show"),1)])]),$a,Ra,Da,s("div",Ea,[s("div",za,[s("div",Aa,[e(D)]),s("div",{style:m({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ia,Ta,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=q=>n.toggleCode(8))},h(n.vdpv_8Height>0?"hidden":"show"),1)])]),Na,Ma,Ba,s("div",La,[s("div",Oa,[s("div",Va,[e(E)]),s("div",{style:m({height:n.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Pa,Wa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=q=>n.toggleCode(9))},h(n.vdpv_9Height>0?"hidden":"show"),1)])]),Ga,s("div",Ka,[s("div",Qa,[s("div",Ua,[e(z)]),s("div",{style:m({height:n.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xa,Za,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[10]||(a[10]=q=>n.toggleCode(10))},h(n.vdpv_10Height>0?"hidden":"show"),1)])]),sn,an,nn,s("div",ln,[s("div",tn,[s("div",pn,[e(A)]),s("div",{style:m({height:n.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",en,on,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[11]||(a[11]=q=>n.toggleCode(11))},h(n.vdpv_11Height>0?"hidden":"show"),1)])]),rn,hn,dn,s("div",jn,[s("div",gn,[s("div",un,[e(S)]),s("div",{style:m({height:n.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",_n,mn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[12]||(a[12]=q=>n.toggleCode(12))},h(n.vdpv_12Height>0?"hidden":"show"),1)])]),bn,qn,kn,s("div",yn,[s("div",fn,[s("div",wn,[e(J)]),s("div",{style:m({height:n.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",xn,Sn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[13]||(a[13]=q=>n.toggleCode(13))},h(n.vdpv_13Height>0?"hidden":"show"),1)])]),Hn,s("div",$n,[s("div",Rn,[s("div",Dn,[e($)]),s("div",{style:m({height:n.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",En,An,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[14]||(a[14]=q=>n.toggleCode(14))},h(n.vdpv_14Height>0?"hidden":"show"),1)])]),In,s("div",Jn,[s("div",Tn,[s("div",Nn,[e(R)]),s("div",{style:m({height:n.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",Mn,Ln,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[15]||(a[15]=q=>n.toggleCode(15))},h(n.vdpv_15Height>0?"hidden":"show"),1)])]),On])}const Fn=B(is,[["render",Vn]]);export{Fn as default};
