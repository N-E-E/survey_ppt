import{o,c as s,k as n,q as a,s as r,A as t,e as l}from"../modules/vue-CTgvBLQu.js";import{I as i}from"./default-CDeB6eFa.js";import{b as u,V as e}from"../index-uhPvOsXr.js";import{p as f,u as _,f as p}from"./context-CtqG0lVd.js";import"../modules/shiki-BHubiYO5.js";const c=l("h1",null,"约定",-1),m=l("p",null,"2.1",-1),d=l("ol",null,[l("li",null,"架构如图。"),l("li",null,"M个flash模块可以并行访问"),l("li",null,"存图方式: 如图。各个节点的offset应相应记录方便并行读取。具体见优化1"),l("li",null,"各个节点的vector数据存放在专用DRAM中，且经过量化"),l("li",null,"算法中的L、V放在buffer中(假定空间足够)"),l("li",null,"从flash中取得的邻居放在buffer中(假定空间足够)，用过了且淘汰的节点就丢弃"),l("li",null,"距离计算和维护top-k优先队列(排序)由Distance Computation Element(DCE)模块实现"),l("li",null,"不考虑图算法的缓存。"),l("li",null,"flash读取时间计算，只考虑需要读取的容量(多少page)和flash的吞吐量。注意，根据架构，可采用并行读取方式。"),l("li",null,"获取邻居节点时使用束搜索，一次获取W个邻居信息"),l("li",null,"一般来说构建的图平均邻居是70个(根据DiskANN)")],-1),h=l("p",null,[l("strong",null,"由于步骤分析基本相同，下面直接在query分析中讲解不同之处")],-1),k={__name:"21",setup(x){return f(e),_(),(v,C)=>(o(),s(i,a(r(t(p)(t(e),20))),{default:n(()=>[c,m,d,h]),_:1},16))}},N=u(k,[["__file","/@slidev/slides/21.md"]]);export{N as default};
