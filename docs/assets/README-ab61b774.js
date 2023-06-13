import{C as j}from"./codePreview-0428c270.js";import{h as _,q as g,o as e,c as h,f as a,s as p,e as s,F as w,j as u,b as l,w as t,u as d,g as y}from"./index-96df29ae.js";/* empty css                                                                    */const v={class:"lazy-demo"},z={"data-src":"http://www.33lc.com/article/UploadPic/2012-8/2012831462935573.jpg"},f=a("p",null,"图片不存在时",-1),P={"data-src":"lazy1.jpg"},U={__name:"README.md.Virtual0a7178a1",setup(r){const n=_("https://337547038.github.io/static/img/lazy1.jpg");return(i,o)=>{const c=g("lazy");return e(),h("div",v,[a("p",null,[p(a("img",null,null,512),[[c,n.value]])]),s(" 或者 "),a("p",null,[p(a("img",z,null,512),[[c]])]),f,a("p",null,[p(a("img",P,null,512),[[c]])])])}}},x={class:"lazy-demo"},b="default.jpg",L={__name:"README.md.Virtual2f8183fa",setup(r){return(n,i)=>{const o=g("lazy");return e(),h("div",x,[a("p",null,[p(a("img",{"data-src":"http://www.33lc.com/article/UploadPic/2012-8/2012831462935573.jpg","data-error":"error.jpg",src:b},null,512),[[o]])])])}}},$={id:"container",style:{height:"300px","overflow-y":"auto"},class:"lazy-demo"},E={style:{"min-height":"310px"}},k={__name:"README.md.Virtualac1c0cb1",setup(r){const n=["http://www.33lc.com/article/UploadPic/2012-8/2012831493534705.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831495398936.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831411282914.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831411736193.jpg","http://www.33lc.com/article/UploadPic/2012-8/20128314114848605.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831412430262.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831413277067.jpg","http://www.33lc.com/article/UploadPic/2012-8/2012831413873333.jpg","http://www.33lc.com/article/UploadPic/2012-8/20128314135357731.jpg"];return(i,o)=>{const c=g("lazy");return e(),h("div",$,[(e(),h(w,null,u(n,m=>a("p",E,[p(a("img",null,null,512),[[c,m,"container"]])])),64))])}}},V={class:"marked-body"},D=a("h1",{id:"lazy-图片懒加载（指令）"},"Lazy 图片懒加载（指令）",-1),A=a("h3",{id:"基本用法"},"基本用法",-1),S=a("p",null,[s("图片的"),a("code",null,"src"),s("可通过"),a("code",null,"v-lazy='src'"),s("或"),a("code",null,"data-src='src'"),s("两种方式传入")],-1),M=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-lazy"),s("="),a("span",{class:"hljs-string"},'"defaultLazy"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    或者
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"data-src"),s("="),a("span",{class:"hljs-string"},'"http://www.33lc.com/article/UploadPic/2012-8/2012831462935573.jpg"'),s(`
        `),a("span",{class:"hljs-attr"},"v-lazy"),s(`
    />`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("图片不存在时"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"data-src"),s("="),a("span",{class:"hljs-string"},'"lazy1.jpg"'),s(),a("span",{class:"hljs-attr"},"v-lazy"),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" defaultLazy = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'https://337547038.github.io/static/img/lazy1.jpg'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),N=a("h3",{id:"自定默认和错误时的图片"},"自定默认和错误时的图片",-1),R=a("p",null,[a("code",null,"data-src"),s("图片真实地址，"),a("code",null,"data-error"),s("加载错误显示的图片地址,"),a("code",null,"src"),s("默认初始显示图片地址")],-1),B=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
      >`)]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"data-src"),s("="),a("span",{class:"hljs-string"},'"http://www.33lc.com/article/UploadPic/2012-8/2012831462935573.jpg"'),s(`
        `),a("span",{class:"hljs-attr"},"data-error"),s("="),a("span",{class:"hljs-string"},'"error.jpg"'),s(`
        `),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"src"'),s(`
        `),a("span",{class:"hljs-attr"},"v-lazy"),s(`
    />`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" src = "),a("span",{class:"hljs-string"},"'default.jpg'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",{id:"在指定容器中滚动"},"在指定容器中滚动",-1),F=a("p",null,[s("指令后面指定容器"),a("code",null,"id"),s(),a("code",null,"v-lazy:container='src''")],-1),I=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"id"),s("="),a("span",{class:"hljs-string"},'"container"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 300px; overflow-y: auto"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in imgList"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"min-height: 310px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"v-lazy:container"),s("="),a("span",{class:"hljs-string"},'"item"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` imgList = [
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831493534705.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831495398936.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831411282914.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831411736193.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/20128314114848605.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831412430262.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831413277067.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/2012831413873333.jpg'"),s(`,
    `),a("span",{class:"hljs-string"},"'http://www.33lc.com/article/UploadPic/2012-8/20128314135357731.jpg'"),s(`
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),q=y(`<h2 id="api">API</h2><h3 id="全局设置">全局设置</h3><pre class="language-javascript"><code class="hljs"><span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazy</span>, {
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&#39;/static/img/lazy-default.gif&#39;</span>, <span class="hljs-comment">// 初始默认显示的图片</span>
  <span class="hljs-attr">error</span>: <span class="hljs-string">&#39;/static/img/lazy-error.png&#39;</span>, <span class="hljs-comment">// 加载错误时显示的图片</span>
  <span class="hljs-attr">fadeIn</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 加载完成时图片淡入</span>
  <span class="hljs-attr">threshold</span>: <span class="hljs-number">0</span> <span class="hljs-comment">// 图片离可视区域的距离。负值表示提前进入，正值表示延迟进入</span>
})</code></pre><h3 id="lazy-props">Lazy Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-lazy</td><td>String</td><td>图片真实地址，也可使用<code>data-src</code></td></tr><tr><td>src</td><td>String</td><td>初始默认显示的图片，一般不需要单独设置</td></tr><tr><td>data-error</td><td>String</td><td>加载错误时显示的图片，一般不需要单独设置</td></tr><tr><td>data-src</td><td>String</td><td>图片真实地址</td></tr></tbody></table>`,5),J={__name:"README",setup(r){return(n,i)=>(e(),h("div",V,[D,A,S,l(d(j),{code:""},{code:t(()=>[M]),default:t(()=>[l(U)]),_:1}),N,R,l(d(j),{code:""},{code:t(()=>[B]),default:t(()=>[l(L)]),_:1}),C,F,l(d(j),{code:""},{code:t(()=>[I]),default:t(()=>[l(k)]),_:1}),q]))}};export{J as default};
