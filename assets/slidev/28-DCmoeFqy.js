import{o as n,c as e,k as o,q as m,s as i,A as a,e as s,a0 as t}from"../modules/vue-CTgvBLQu.js";import{I as r}from"./default-D39ggLHL.js";import{b as p,aa as l}from"../index-ChUrun_E.js";import{p as c,u as h,f as u}from"./context-CIVgM6Zk.js";import"../modules/shiki-BHubiYO5.js";const d=s("h1",null,"优化4：图二级索引选择迭代起始点",-1),_=s("p",null,"2.4",-1),g=s("p",null,"这个主要是软件优化了。优点是减少了整个搜索过程的round，并且可能提升精度。",-1),f=s("p",null,[t("当然，由于二级索引(还是比较大的)存放在host中，会有一定的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"t"),s("mrow",null,[s("mi",null,"f"),s("mi",null,"e"),s("mi",null,"t"),s("mi",null,"c"),s("mi",null,"h")])])]),s("annotation",{encoding:"application/x-tex"},"t_{fetch}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9012em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mord mathnormal mtight"},"e"),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mord mathnormal mtight"},"c"),s("span",{class:"mord mathnormal mtight"},"h")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),t("开销")],-1),v=s("p",null,"后面会提到，CognitiveSSD在实现上可以比较好地结合硬件",-1),x=s("p",null,[s("strong",null,"优点"),t("：减少总搜索时间，提升精度")],-1),w=s("p",null,[s("strong",null,"不足"),t("：并没有解决访存和计算不匹配问题")],-1),y={__name:"28",setup(k){return c(l),h(),(b,z)=>(n(),e(r,m(i(a(u)(a(l),27))),{default:o(()=>[d,_,g,f,v,x,w]),_:1},16))}},I=p(y,[["__file","/@slidev/slides/28.md"]]);export{I as default};
