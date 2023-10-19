import{C as i}from"./vue-bd913f12.js";import{_ as h,a as o,o as E,f as c,g as t,b as n,w as a,e as s,u as A,h as B}from"./index-9bf4afa7.js";/* empty css                                                            */const r={},j={class:"tooltip-demo"},m={class:"tooltip-demo"},g=t("span",null,null,-1),F={class:"tooltip-demo"};function C(e,p){const l=o("ak-tooltip");return E(),c("div",null,[t("div",j,[n(l,{content:"这是提示内容这是提示内容"},{default:a(()=>[s("上左")]),_:1}),n(l,{content:"这是提示内容这是提示内容，direction＝'top'",direction:"top"},{default:a(()=>[s("上边")]),_:1}),n(l,{content:"这是提示内容direction='top-right'",direction:"top-right"},{default:a(()=>[s("上右")]),_:1})]),t("div",m,[n(l,{direction:"left",content:"这是提示内容direction=left"},{default:a(()=>[s(" 左边 ")]),_:1}),g,n(l,{direction:"right",content:"这是提示内容direction=right"},{default:a(()=>[s("右边")]),_:1})]),t("div",F,[n(l,{direction:"bottom-left",content:"这是提示内容direction=bottom-left"},{default:a(()=>[s("下左")]),_:1}),n(l,{direction:"bottom",content:"这是提示内容direction=bottom"},{default:a(()=>[s("下边")]),_:1}),n(l,{direction:"bottom-right",content:"这是提示内容direction=bottom-right"},{default:a(()=>[s("下右")]),_:1})])])}const _=h(r,[["render",C]]),D={},k={class:"tooltip-demo"},u={class:"tooltip-demo"},f=t("span",null,null,-1),v={class:"tooltip-demo"},b=t("span",null,"下边",-1),x=t("span",null,"下右",-1);function $(e,p){const l=o("ak-tooltip");return E(),c("div",null,[t("div",k,[n(l,{content:"提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"},{default:a(()=>[s("上左")]),_:1}),n(l,{content:"上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽",direction:"top"},{default:a(()=>[s("上边")]),_:1}),n(l,{content:"这里跟上左类型，计算的是到浏览器左边的距离",direction:"top-right",maxWidth:200},{default:a(()=>[s("上右")]),_:1})]),t("div",u,[n(l,{direction:"left",content:"受当前标签到浏览器左边的距离影响"},{default:a(()=>[s(" 左边 ")]),_:1}),f,n(l,{direction:"right",content:"受当前标签到浏览器左边的距离影响",maxWidth:200},{default:a(()=>[s("右边")]),_:1})]),t("div",v,[n(l,{direction:"bottom-left",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:a(()=>[s("下左")]),_:1}),n(l,{direction:"bottom",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"},{default:a(()=>[b]),_:1}),n(l,{direction:"bottom-right",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:a(()=>[x]),_:1})])])}const y=h(D,[["render",$]]),w={},V=t("i",{class:"tooltip-icon"},"?",-1),N=t("i",{class:"tooltip-icon"},"?",-1);function W(e,p){const l=o("ak-tooltip"),d=o("ak-button");return E(),c("div",null,[n(l,{content:"这里是提示文字，因为icon比较小，可使用x微调",x:-10},{default:a(()=>[V]),_:1}),n(l,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10},{default:a(()=>[N]),_:1}),n(l,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10},{default:a(()=>[n(d,{type:"primary"},{default:a(()=>[s("按钮形式")]),_:1})]),_:1})])}const S=h(w,[["render",W]]),T={},P={class:"tooltip-demo"},X=t("span",null,"always",-1);function I(e,p){const l=o("ak-tooltip");return E(),c("div",P,[n(l,{content:"一直都显示的",always:!0,direction:"top"},{default:a(()=>[X]),_:1})])}const M=h(T,[["render",I]]),R={},q={class:"tooltip-demo"};function z(e,p){const l=o("ak-button"),d=o("ak-tooltip");return E(),c("div",q,[n(d,{direction:"top"},{content:a(()=>[s(" 这里是提示内容 ")]),default:a(()=>[n(l,null,{default:a(()=>[s("内容为slot")]),_:1})]),_:1})])}const G=h(R,[["render",z]]),H={},J={class:"tooltip-demo"};function K(e,p){const l=o("ak-button"),d=o("ak-tooltip");return E(),c("div",J,[n(d,{direction:"top",delay:300},{content:a(()=>[s(" 这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等 ")]),default:a(()=>[n(l,null,{default:a(()=>[s("设置延时关闭")]),_:1})]),_:1})])}const L=h(H,[["render",K]]),O={class:"marked-body"},Q=t("h1",{id:"tooltip-提示"},"Tooltip 提示",-1),U=t("h3",{id:"基本用法"},"基本用法",-1),Y=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容这是提示内容"'),s(`
        >`)]),s(`上左</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},`"这是提示内容这是提示内容，direction＝'top'"`),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top"'),s(`
        >`)]),s(`上边</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},`"这是提示内容direction='top-right'"`),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top-right"'),s(`
        >`)]),s(`上右</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"left"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容direction=left"'),s(">")]),s(`
        左边
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"right"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容direction=right"'),s(`
        >`)]),s(`右边</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom-left"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容direction=bottom-left"'),s(`
        >`)]),s(`下左</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容direction=bottom"'),s(`
        >`)]),s(`下边</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom-right"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容direction=bottom-right"'),s(`
        >`)]),s(`下右</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),Z=t("h3",{id:"多文字自动换行"},"多文字自动换行",-1),ss=t("p",null,"可通过设置最大宽度自动换行",-1),ts=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"'),s(`
        >`)]),s(`上左</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽"'),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top"'),s(`
        >`)]),s(`上边</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这里跟上左类型，计算的是到浏览器左边的距离"'),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top-right"'),s(`
        `),t("span",{class:"hljs-attr"},":maxWidth"),s("="),t("span",{class:"hljs-string"},'"200"'),s(`
        >`)]),s(`上右</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"left"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"受当前标签到浏览器左边的距离影响"'),s(">")]),s(`
        左边
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"right"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"受当前标签到浏览器左边的距离影响"'),s(`
        `),t("span",{class:"hljs-attr"},":maxWidth"),s("="),t("span",{class:"hljs-string"},'"200"'),s(`
        >`)]),s(`右边</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom-left"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容，如果内容超过设定的最大宽时则自动换行。"'),s(`
        >`)]),s(`下左</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"'),s(`
        >`)]),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(">")]),s("下边"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`</ak-tooltip
      >
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(`
        `),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"bottom-right"'),s(`
        `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"'),s(`
        >`)]),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(">")]),s("下右"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`</ak-tooltip
      >
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),as=t("h3",{id:"支持多种效果"},"支持多种效果",-1),ns=t("p",null,"可自定样式",-1),ls=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这里是提示文字，因为icon比较小，可使用x微调"'),s(),t("span",{class:"hljs-attr"},":x"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"i"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-icon"'),s(">")]),s("?"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"i"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这里是提示文字。使用x轴微调将箭头和icon对齐"'),s(),t("span",{class:"hljs-attr"},":x"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(`
      >`)]),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"i"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-icon"'),s(">")]),s("?"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"i"),s(">")]),s(`</ak-tooltip
    >
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"这里是提示文字。使用x轴微调将箭头和icon对齐"'),s(),t("span",{class:"hljs-attr"},":x"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(`
      >`)]),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("按钮形式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`</ak-tooltip
    >
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),os=t("h3",{id:"固定显示"},"固定显示",-1),Es=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"一直都显示的"'),s(),t("span",{class:"hljs-attr"},":always"),s("="),t("span",{class:"hljs-string"},'"true"'),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(">")]),s("always"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),cs=t("h3",{id:"内容参数可使用-slots-形式"},"内容参数可使用 slots 形式",-1),es=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s("内容为slot"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"content"),s(">")]),s(" 这里是提示内容 "),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),ps=t("h3",{id:"设置延时关闭"},"设置延时关闭",-1),is=t("p",null,[s("通过"),t("code",null,"delay"),s("设置延时关闭，可将鼠标移至提示语上，例如实现提示语上的点击事件")],-1),As=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"tooltip-demo"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-tooltip"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"top"'),s(),t("span",{class:"hljs-attr"},":delay"),s("="),t("span",{class:"hljs-string"},'"300"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s("设置延时关闭"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"content"),s(">")]),s(`
        这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")])])],-1),hs=B('<h2 id="api">API</h2><h3 id="tooltip-props">Tooltip Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>String</td><td>显示的内容，也可以是 slot</td></tr><tr><td>direction</td><td>String</td><td>显示方向。有 top-left、top、top-right、left、right、bottom-left、bottom、bottom-right 共 8 个方向，默认 top-left</td></tr><tr><td>maxWidth</td><td>Number/500</td><td>最大显示宽</td></tr><tr><td>delay</td><td>Number/0</td><td>延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等</td></tr><tr><td>always</td><td>Boolean/false</td><td>是否总是可见</td></tr><tr><td>x</td><td>Number</td><td>弹出窗距离触发点 x 轴方向的距离，可用于微调距离</td></tr><tr><td>y</td><td>Number</td><td>弹出窗距离触发点 y 轴方向的距离，可用于微调距离</td></tr><tr><td>transition</td><td>String</td><td>自定义显示隐藏过渡动画名称，需要手动添加相应的 css 样式</td></tr><tr><td>className</td><td>String</td><td>自定样式类名</td></tr><tr><td>trigger</td><td>String/hover</td><td>事件触发方式，hover/click 两种</td></tr></tbody></table><h3 id="tooltip-event">Tooltip Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件，trigger=click 时</td></tr></tbody></table>',5),js={__name:"README",setup(e){return(p,l)=>(E(),c("div",O,[Q,U,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E5%B7%A6%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8Cdirection%EF%BC%9D'top'%22%0A%20%20%20%20%20%20%20%20direction%3D%22top%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E8%BE%B9%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3D'top-right'%22%0A%20%20%20%20%20%20%20%20direction%3D%22top-right%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E5%8F%B3%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%20direction%3D%22left%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dleft%22%3E%0A%20%20%20%20%20%20%20%20%E5%B7%A6%E8%BE%B9%0A%20%20%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%20%20%20%20%3Cspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cak-tooltip%20direction%3D%22right%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dright%22%0A%20%20%20%20%20%20%20%20%3E%E5%8F%B3%E8%BE%B9%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22bottom-left%22%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom-left%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8B%E5%B7%A6%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%20direction%3D%22bottom%22%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8B%E8%BE%B9%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22bottom-right%22%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9direction%3Dbottom-right%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8B%E5%8F%B3%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[Y]),default:a(()=>[n(_)]),_:1}),Z,ss,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20content%3D%22%E6%8F%90%E7%A4%BA%E8%AF%AD%E7%9A%84%E5%B7%A6%E8%BE%B9%E4%BD%8D%E7%BD%AE%E8%B7%9F%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%AF%B9%E9%BD%90%EF%BC%8C%E5%A6%82%E6%8F%90%E7%A4%BA%E8%AF%ADX%E8%BD%B4%E4%BD%8D%E7%BD%AE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%B0%8F%E4%BA%8E%E6%9C%80%E5%A4%A7%E5%AE%BD%EF%BC%8C%E5%B0%86%E4%BB%A5%E6%9C%80%E5%B0%8F%E5%AE%BD%E6%98%BE%E7%A4%BA%E5%B9%B6%E6%8D%A2%E8%A1%8C%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E5%B7%A6%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20content%3D%22%E4%B8%8A%E8%BE%B9%E6%8F%90%E7%A4%BA%E6%98%AF%E6%A0%B9%E6%8D%AE%E6%98%AF%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E4%B8%AD%E9%97%B4%E4%BD%8D%E7%BD%AE%EF%BC%8C%E5%90%91%E5%B7%A6%E5%81%8F%E7%A7%BB50%25%E5%AE%9E%E7%8E%B0%E5%B1%85%E4%B8%AD%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%B0%8F%E4%BA%8E%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%EF%BC%8C%E5%AE%9E%E9%99%85%E6%98%BE%E7%A4%BA%E5%AE%BD%E4%B8%BA%E5%88%B0%E8%BE%B9%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%B3%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%EF%BC%8C%E5%B9%B6%E4%B8%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E5%AE%BD%22%0A%20%20%20%20%20%20%20%20direction%3D%22top%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E8%BE%B9%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E9%87%8C%E8%B7%9F%E4%B8%8A%E5%B7%A6%E7%B1%BB%E5%9E%8B%EF%BC%8C%E8%AE%A1%E7%AE%97%E7%9A%84%E6%98%AF%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%22%0A%20%20%20%20%20%20%20%20direction%3D%22top-right%22%0A%20%20%20%20%20%20%20%20%3AmaxWidth%3D%22200%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8A%E5%8F%B3%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%20direction%3D%22left%22%20content%3D%22%E5%8F%97%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%BD%B1%E5%93%8D%22%3E%0A%20%20%20%20%20%20%20%20%E5%B7%A6%E8%BE%B9%0A%20%20%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%20%20%20%20%3Cspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22right%22%0A%20%20%20%20%20%20%20%20content%3D%22%E5%8F%97%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A6%E8%BE%B9%E7%9A%84%E8%B7%9D%E7%A6%BB%E5%BD%B1%E5%93%8D%22%0A%20%20%20%20%20%20%20%20%3AmaxWidth%3D%22200%22%0A%20%20%20%20%20%20%20%20%3E%E5%8F%B3%E8%BE%B9%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22bottom-left%22%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%22%0A%20%20%20%20%20%20%20%20%3E%E4%B8%8B%E5%B7%A6%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22bottom%22%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%22%0A%20%20%20%20%20%20%20%20%3E%3Cspan%3E%E4%B8%8B%E8%BE%B9%3C%2Fspan%3E%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-tooltip%0A%20%20%20%20%20%20%20%20direction%3D%22bottom-right%22%0A%20%20%20%20%20%20%20%20content%3D%22%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%E8%BF%99%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%86%85%E5%AE%B9%E8%B6%85%E8%BF%87%E8%AE%BE%E5%AE%9A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%AE%BD%E6%97%B6%E5%88%99%E8%87%AA%E5%8A%A8%E6%8D%A2%E8%A1%8C%E3%80%82%22%0A%20%20%20%20%20%20%20%20%3E%3Cspan%3E%E4%B8%8B%E5%8F%B3%3C%2Fspan%3E%3C%2Fak-tooltip%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[ts]),default:a(()=>[n(y)]),_:1}),as,ns,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-tooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%EF%BC%8C%E5%9B%A0%E4%B8%BAicon%E6%AF%94%E8%BE%83%E5%B0%8F%EF%BC%8C%E5%8F%AF%E4%BD%BF%E7%94%A8x%E5%BE%AE%E8%B0%83%22%20%3Ax%3D%22-10%22%3E%0A%20%20%20%20%20%20%3Ci%20class%3D%22tooltip-icon%22%3E%3F%3C%2Fi%3E%0A%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%20%20%3Cak-tooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%E3%80%82%E4%BD%BF%E7%94%A8x%E8%BD%B4%E5%BE%AE%E8%B0%83%E5%B0%86%E7%AE%AD%E5%A4%B4%E5%92%8Cicon%E5%AF%B9%E9%BD%90%22%20%3Ax%3D%22-10%22%0A%20%20%20%20%20%20%3E%3Ci%20class%3D%22tooltip-icon%22%3E%3F%3C%2Fi%3E%3C%2Fak-tooltip%0A%20%20%20%20%3E%0A%20%20%20%20%3Cak-tooltip%20content%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%E3%80%82%E4%BD%BF%E7%94%A8x%E8%BD%B4%E5%BE%AE%E8%B0%83%E5%B0%86%E7%AE%AD%E5%A4%B4%E5%92%8Cicon%E5%AF%B9%E9%BD%90%22%20%3Ax%3D%22-10%22%0A%20%20%20%20%20%20%3E%3Cak-button%20type%3D%22primary%22%3E%E6%8C%89%E9%92%AE%E5%BD%A2%E5%BC%8F%3C%2Fak-button%3E%3C%2Fak-tooltip%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[ls]),default:a(()=>[n(S)]),_:1}),os,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%3Cak-tooltip%20content%3D%22%E4%B8%80%E7%9B%B4%E9%83%BD%E6%98%BE%E7%A4%BA%E7%9A%84%22%20%3Aalways%3D%22true%22%20direction%3D%22top%22%3E%0A%20%20%20%20%20%20%3Cspan%3Ealways%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[Es]),default:a(()=>[n(M)]),_:1}),cs,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%3Cak-tooltip%20direction%3D%22top%22%3E%0A%20%20%20%20%20%20%3Cak-button%3E%E5%86%85%E5%AE%B9%E4%B8%BAslot%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23content%3E%20%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[es]),default:a(()=>[n(G)]),_:1}),ps,is,n(A(i),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22tooltip-demo%22%3E%0A%20%20%20%20%3Cak-tooltip%20direction%3D%22top%22%20%3Adelay%3D%22300%22%3E%0A%20%20%20%20%20%20%3Cak-button%3E%E8%AE%BE%E7%BD%AE%E5%BB%B6%E6%97%B6%E5%85%B3%E9%97%AD%3C%2Fak-button%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%E8%BF%99%E9%87%8C%E6%98%AF%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%EF%BC%8C%E9%BC%A0%E6%A0%87%E5%8F%AF%E4%BB%A5%E7%A7%BB%E5%8A%A8%E5%88%B0%E4%B8%8A%E9%9D%A2%EF%BC%8C%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E4%B8%8D%E4%BC%9A%E6%B6%88%E5%A4%B1%EF%BC%8C%E5%8F%AF%E5%AE%9E%E7%8E%B0%E4%BB%8E%E8%BF%99%E9%87%8C%E7%82%B9%E5%87%BB%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5%E7%AD%89%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-tooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:a(()=>[As]),default:a(()=>[n(L)]),_:1}),hs]))}};export{js as default};
