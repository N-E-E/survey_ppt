function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-Cx5J8fky.js","assets/modules/vue-CTgvBLQu.js","assets/index-ChUrun_E.js","assets/modules/shiki-BHubiYO5.js","assets/modules/shiki-BSchMNmt.css","assets/index-B_uO6-Sl.css","assets/slidev/bottom-B0EdzV30.js","assets/bottom-DbIWt59F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as r,M as R,Y as E,J as F,o as i,b as u,l as d,A as e,i as L,c as m,g as k,h as q,F as p,Z as A,e as y,f as M,C as V,_ as j}from"../modules/vue-CTgvBLQu.js";import{t as z}from"../modules/shiki-BHubiYO5.js";import{G,g as W,S as I,a as O,w as T}from"./bottom-B0EdzV30.js";import{p as H}from"./chunk-YNRNLEBD-DKdYZNHt.js";import{s as J,a as g,_ as K,c as C,i as X,b as h,u as S,d as D,C as Y,e as $,f,g as Z}from"../index-ChUrun_E.js";import{P as Q}from"./PrintStyle-BO5FTr4M.js";const U=["id"],ee=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(o){const{nav:t}=o,s=r(()=>t.currentSlideRoute.value),l=r(()=>({height:`${J.value}px`,width:`${g.value}px`})),n=R();K(()=>import("./DrawingPreview-Cx5J8fky.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>n.value=a.default);const c=r(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return E(X,F({nav:t,configs:C,themeConfigs:r(()=>C.themeConfig)})),(a,w)=>(i(),u("div",{id:c.value,class:"print-slide-container",style:q(l.value)},[d(e(G)),d(I,{is:s.value.component,"clicks-context":a.nav.clicksContext.value,class:L(e(W)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),n.value?(i(),m(e(n),{key:0,page:s.value.no},null,8,["page"])):k("v-if",!0),d(e(O))],12,U))}}),N=h(ee,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(o){const{route:t}=o,{isPrintWithClicks:s}=S(),l=D(t,s.value?0:Y);return(n,c)=>(i(),u(p,null,[d(N,{"clicks-context":e(l),nav:e($)(n.route,e(l))},null,8,["clicks-context","nav"]),e(s)?(i(!0),u(p,{key:0},A(e(l).total,a=>(i(),m(N,{key:a,nav:e($)(n.route,e(D)(n.route,a))},null,8,["nav"]))),128)):k("v-if",!0)],64))}}),se=h(te,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ne={id:"print-content"},ae=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(o){const t=o,{slides:s,currentRoute:l}=S(),n=r(()=>t.width),c=r(()=>t.width/f.value),a=r(()=>n.value/c.value),w=r(()=>a.value<f.value?n.value/g.value:c.value*f.value/g.value);let v=s.value;l.value.query.range&&(v=H(v.length,l.value.query.range).map(b=>v[b-1]));const B=r(()=>({"select-none":!C.selectable}));return E(Z,w),(P,b)=>(i(),u("div",{id:"print-container",class:L(B.value)},[y("div",ne,[(i(!0),u(p,null,A(e(v),x=>(i(),m(se,{key:x.no,route:x},null,8,["route"]))),128))]),M(P.$slots,"controls")],2))}}),ie=h(ae,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/PrintContainer.vue"]]),le={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},re=y("div",{id:"twoslash-container"},null,-1),oe=_({__name:"print",setup(o){const{isPrintMode:t}=S();return V(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),j(()=>{z()}),(s,l)=>(i(),u(p,null,[e(t)?(i(),m(Q,{key:0})):k("v-if",!0),y("div",le,[d(ie,{class:"w-full h-full",style:q({background:"var(--slidev-slide-container-background, black)"}),width:e(T).width.value},null,8,["style","width"])]),re],64))}}),me=h(oe,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/pages/print.vue"]]);export{me as default};
