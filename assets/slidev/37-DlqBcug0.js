import{o as e,c as o,k as n,q as a,s as r,A as s,e as l}from"../modules/vue-D_1tdyWU.js";import{I as i}from"./default-CEkqKfgz.js";import{b as _,aj as t}from"../index-C1kyXy8w.js";import{p as u,u as c,f as p}from"./context-CnKUQPZD.js";import"../modules/shiki-BLoV2MwH.js";const d=l("h1",null,"参数与约定",-1),m=l("p",null,"4",-1),h=l("p",null,[l("strong",null,"starling")],-1),f=l("ol",null,[l("li",null,"BeamWidth(W) = 4"),l("li",null,"threads = 8."),l("li",null,"使用了异步io，访存和计算并非完全串行"),l("li",null,"经过读取测试(读取了1b的那个数据)，服务器io速度为5.2GB/s")],-1),g=l("p",null,[l("strong",null,"CognitiveSSD")],-1),B=l("ol",null,[l("li",null,"在访存时间计算方面，我们使用读一个访存页需要75us来算"),l("li",null,"PageSize = 16KB"),l("li",null,"源码使用了page_search算法，搭配了缓存机制使用。是beam_search算法的改进。我们使用的仍然是diskann的beam_search算法"),l("li",null,"计算我们的模型时尽可能地使用之前说的优化技术。"),l("li",null,"并行的flash模块使用M = 4")],-1),x={__name:"37",setup(b){return u(t),c(),(k,v)=>(e(),o(i,a(r(s(p)(s(t),36))),{default:n(()=>[d,m,h,f,g,B]),_:1},16))}},I=_(x,[["__file","/@slidev/slides/37.md"]]);export{I as default};