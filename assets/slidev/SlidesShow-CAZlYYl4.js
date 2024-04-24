function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DG7-1hPK.js","assets/modules/unplugin-icons-BoI_U9_Z.js","assets/modules/vue-D_1tdyWU.js","assets/modules/shiki-BLoV2MwH.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-D_Kgq9Kb.js","assets/index-D_3_TOrq.js","assets/index-CgYvd3w8.css","assets/slidev/bottom-CJiTOUwH.js","assets/bottom-DbIWt59F.css","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-CTgIQ_9b.js","assets/slidev/context-Czb5MoX_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as O,a8 as Pt,a9 as Ot,y as A,aa as L,ab as K,U as Ft,D as me,ac as Vt,d as U,ad as Bt,C as st,$ as jt,Y as Gt,b as u,e as N,f as le,h as ce,i as F,o as a,a6 as Ve,x as Q,F as H,Z as ke,A as h,l as b,a0 as Ee,a5 as Kt,ae as Wt,c as x,g as S,a7 as zt,k as R,af as nt,M as Ie,r as Ht,ag as qt,ah as Ut,a1 as ot,ai as it,j as he,aj as Yt,N as Qt,m as Xt,ak as Jt,p as Zt,a as es}from"../modules/vue-D_1tdyWU.js";import{u as se,m as ts,t as Re,f as we,a as be,s as ss,c as re,g as ns,b as q,n as ze,_ as rt,o as os,p as He,d as at,C as lt,j as qe,l as Se,q as Ue}from"../index-D_3_TOrq.js";import{u as Be,D as is}from"./DrawingPreview-D_Kgq9Kb.js";import{b as G,t as Ae,m as Z,n as ct,o as ut,q as rs,r as as,u as ls,v as dt,k as Me,x as Ne,s as fe,p as cs,y as us,f as Ye,z as ae,w as $e,S as ht,g as ft,G as ds,a as hs}from"./bottom-CJiTOUwH.js";import{e as fs,f as ps,g as _s,h as vs,i as gs,j as ms,k as ys,l as pt,m as ks,n as ws,o as bs,p as Ss,q as Ms,r as $s,s as Cs,t as xs,u as Es,v as Is}from"../modules/unplugin-icons-BoI_U9_Z.js";import{t as Rs}from"../modules/shiki-BLoV2MwH.js";function Ii(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:i}=Be(),r=O(0),{direction:l,distanceX:c,distanceY:d}=Pt(t,{pointerTypes:["touch"],onSwipeStart(){i.value||(r.value=Ot())},onSwipeEnd(){if(!r.value||i.value)return;const f=Math.abs(c.value),p=Math.abs(d.value);f/window.innerWidth>.3||f>75?l.value==="left"?e():n():(p/window.innerHeight>.4||p>200)&&(l.value==="down"?o():s())}})}const ve=O(1),ge=A(()=>ts.value.length),P=O(0),je=O(0);function As(){P.value>ve.value&&(P.value-=1)}function Ns(){P.value<ge.value&&(P.value+=1)}function Ls(){if(P.value>ve.value){let t=P.value-je.value;t<ve.value&&(t=ve.value),P.value=t}}function Ds(){if(P.value<ge.value){let t=P.value+je.value;t>ge.value&&(t=ge.value),P.value=t}}const Ts=[];function Ps(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:i,prevSlide:r}=se(),{drawingEnabled:l}=Be(),{escape:c,space:d,shift:f,left:p,right:_,up:v,down:k,enter:g,d:$,g:M,o:I,"`":w}=ct,D={next:n,prev:i,nextSlide:o,prevSlide:r,go:t,goFirst:e,goLast:s,downloadPDF:ut,toggleDark:Re,toggleOverview:Ae,toggleDrawing:()=>l.value=!l.value,escapeOverview:()=>G.value=!1,showGotoDialog:()=>Z.value=!Z.value};let m=[{name:"next_space",key:L(d,K(f)),fn:n,autoRepeat:!0},{name:"prev_space",key:L(d,f),fn:i,autoRepeat:!0},{name:"next_right",key:L(_,K(f),K(G)),fn:n,autoRepeat:!0},{name:"prev_left",key:L(p,K(f),K(G)),fn:i,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:i,autoRepeat:!0},{name:"next_down",key:L(k,K(G)),fn:o,autoRepeat:!0},{name:"prev_up",key:L(v,K(G)),fn:()=>r(!1),autoRepeat:!0},{name:"next_shift",key:L(_,f),fn:o,autoRepeat:!0},{name:"prev_shift",key:L(p,f),fn:()=>r(!1),autoRepeat:!0},{name:"toggle_dark",key:L($,K(l)),fn:Re},{name:"toggle_overview",key:L(Ft(I,w),K(l)),fn:Ae},{name:"hide_overview",key:L(c,K(l)),fn:()=>G.value=!1},{name:"goto",key:L(M,K(l)),fn:()=>Z.value=!Z.value},{name:"next_overview",key:L(_,G),fn:Ns},{name:"prev_overview",key:L(p,G),fn:As},{name:"up_overview",key:L(v,G),fn:Ls},{name:"down_overview",key:L(k,G),fn:Ds},{name:"goto_from_overview",key:L(g,G),fn:()=>{t(P.value),G.value=!1}}];const T=new Set(m.map(C=>C.name));for(const C of Ts){const B=C(D,m);m=m.concat(B)}if(m.filter(C=>C.name&&T.has(C.name)).length===0){const C=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(C),console.warn(C)}return m}const _t=L(K(ls),K(as),rs);function Os(t,e,s=!1){typeof t=="string"&&(t=ct[t]);const n=L(t,_t);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}s&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return me(n,r,{flush:"sync"})}function Fs(t,e){return Vt(t,s=>{_t.value&&(s.repeat||e())})}function Ri(){const t=Ps();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Os(s.key,s.fn,s.autoRepeat)}),Fs("f",()=>dt.toggle())}const Vs=U({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=O(),i=Bt(o),r=A(()=>e.width?e.width:i.width.value),l=A(()=>e.width?e.width/we.value:i.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${l.value}px`)});const c=A(()=>r.value/l.value),d=A(()=>e.scale&&!n.value?e.scale:c.value<we.value?r.value/be.value:l.value*we.value/be.value),f=A(()=>({height:`${ss.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${d.value})`,"--slidev-slide-scale":d.value})),p=A(()=>({"select-none":!re.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&jt(A(()=>`
    :root {
      --slidev-slide-scale: ${d.value};
    }
  `)),Gt(ns,d),(_,v)=>(a(),u("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",p.value])},[N("div",{id:"slide-content",class:"slidev-slide-content",style:ce(f.value)},[le(_.$slots,"default")],4),le(_.$slots,"controls")],2))}}),Bs=q(Vs,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/SlideContainer.vue"]]),js={class:"select-list"},Gs={class:"title"},Ks={class:"items"},Ws=["onClick"],zs=U({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0});return(i,r)=>{const l=fs;return a(),u("div",js,[N("div",Gs,Q(t.title),1),N("div",Ks,[(a(!0),u(H,null,ke(t.items,c=>(a(),u("div",{key:c.value,class:F(["item",{active:h(o)===c.value}]),onClick:()=>{var d;o.value=c.value,(d=c.onClick)==null||d.call(c)}},[b(l,{class:F(["text-green-500",{"opacity-0":h(o)!==c.value}])},null,8,["class"]),Ee(" "+Q(c.display||c.value),1)],10,Ws))),128))])])}}}),Hs=q(zs,[["__scopeId","data-v-3f89fa11"],["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/SelectList.vue"]]),qs={class:"text-sm"},Us=U({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(a(),u("div",qs,[b(Hs,{modelValue:h(Me),"onUpdate:modelValue":n[0]||(n[0]=o=>Kt(Me)?Me.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Ys=q(Us,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/Settings.vue"]]),Qs={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Xs=U({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0}),i=O();return Wt(i,()=>{o.value=!1}),(r,l)=>(a(),u("div",{ref_key:"el",ref:i,class:"flex relative"},[N("button",{class:F({disabled:t.disabled}),onClick:l[0]||(l[0]=c=>o.value=!h(o))},[le(r.$slots,"button",{class:F({disabled:t.disabled})})],2),(a(),x(zt,null,[h(o)?(a(),u("div",Qs,[le(r.$slots,"menu")])):S("v-if",!0)],1024))],512))}}),Js=q(Xs,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/MenuButton.vue"]]),Zs={},en={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function tn(t,e){return a(),u("div",en)}const pe=q(Zs,[["render",tn],["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),sn={class:"sr-only"},nn=U({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(a(),x(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[N("span",sn,Q(e.title),1),le(e.$slots,"default",{},()=>[N("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),z=q(nn,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/IconButton.vue"]]),on={render(){return[]}},rn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},an={class:"my-auto"},ln={class:"opacity-50"},cn=U({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:i,isEmbedded:r,isPresenter:l,isPresenterAvailable:c,next:d,prev:f,total:p}=se(),{brush:_,drawingEnabled:v}=Be(),k=Ne.smaller("md"),{isFullscreen:g,toggle:$}=dt,M=A(()=>s.value.query.password),I=A(()=>M.value?`?password=${M.value}`:""),w=A(()=>`${ze(n.value,!0)}${I.value}`),D=A(()=>`${ze(n.value,!1)}${I.value}`),m=O();function T(){m.value&&ae.value&&m.value.contains(ae.value)&&ae.value.blur()}const E=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),C=Ie(),B=Ie();return rt(()=>import("./DrawingControls-DG7-1hPK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(ie=>B.value=ie.default),(ie,V)=>{const J=ps,Ke=_s,j=vs,ne=gs,ue=Ss,$t=ms,Ct=ys,xt=pt,Et=ks,It=ws,Rt=Ms,We=Ht("RouterLink"),At=$s,Nt=Cs,Lt=xs,Dt=Es,Tt=bs;return a(),u("nav",{ref_key:"root",ref:m,class:"flex flex-col"},[N("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:T},[h(r)?S("v-if",!0):(a(),x(z,{key:0,title:h(g)?"Close fullscreen":"Enter fullscreen",onClick:h($)},{default:R(()=>[h(g)?(a(),x(J,{key:0})):(a(),x(Ke,{key:1}))]),_:1},8,["title","onClick"])),b(z,{class:F({disabled:!h(i)}),title:"Go to previous slide",onClick:h(f)},{default:R(()=>[b(j)]),_:1},8,["class","onClick"]),b(z,{class:F({disabled:!h(o)}),title:"Go to next slide",onClick:h(d)},{default:R(()=>[b(ne)]),_:1},8,["class","onClick"]),h(r)?S("v-if",!0):(a(),x(z,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=de=>h(Ae)())},{default:R(()=>[b(ue)]),_:1})),h(os)?S("v-if",!0):(a(),x(z,{key:2,title:h(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=de=>h(Re)())},{default:R(()=>[h(He)?(a(),x($t,{key:0})):(a(),x(Ct,{key:1}))]),_:1},8,["title"])),b(pe),h(r)?S("v-if",!0):(a(),u(H,{key:3},[!h(l)&&!h(k)&&C.value?(a(),u(H,{key:0},[b(h(C)),b(pe)],64)):S("v-if",!0),h(l)?(a(),x(z,{key:1,title:h(fe)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=de=>fe.value=!h(fe))},{default:R(()=>[h(fe)?(a(),x(xt,{key:0})):(a(),x(Et,{key:1}))]),_:1},8,["title"])):S("v-if",!0)],64)),(!h(re).drawings.presenterOnly||h(l))&&!h(r)?(a(),u(H,{key:4},[b(z,{class:"relative",title:h(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=de=>v.value=!h(v))},{default:R(()=>[b(It),h(v)?(a(),u("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ce({background:h(_).color})},null,4)):S("v-if",!0)]),_:1},8,["title"]),b(pe)],64)):S("v-if",!0),h(r)?S("v-if",!0):(a(),u(H,{key:5},[h(l)?(a(),x(We,{key:0,to:D.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[b(Rt)]),_:1},8,["to"])):S("v-if",!0),h(c)?(a(),x(We,{key:1,to:w.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[b(At)]),_:1},8,["to"])):S("v-if",!0),S("v-if",!0),h(l)?(a(),x(z,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:h(us)},{default:R(()=>[b(Nt),Ee(" "+Q(h(cs)),1)]),_:1},8,["onClick"])):S("v-if",!0)],64)),(a(),u(H,{key:6},[h(re).download?(a(),x(z,{key:0,title:"Download as PDF",onClick:h(ut)},{default:R(()=>[b(Lt)]),_:1},8,["onClick"])):S("v-if",!0)],64)),!h(l)&&h(re).info&&!h(r)?(a(),x(z,{key:7,title:"Show info",onClick:V[5]||(V[5]=de=>Ye.value=!h(Ye))},{default:R(()=>[b(Dt)]),_:1})):S("v-if",!0),!h(l)&&!h(r)?(a(),x(Js,{key:8},{button:R(()=>[b(z,{title:"Adjust settings"},{default:R(()=>[b(Tt)]),_:1})]),menu:R(()=>[b(Ys)]),_:1})):S("v-if",!0),h(r)?S("v-if",!0):(a(),x(pe,{key:9})),N("div",rn,[N("div",an,[Ee(Q(h(n))+" ",1),N("span",ln,"/ "+Q(h(p)),1)])]),b(h(on))],34)],512)}}}),Ai=q(cn,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/NavControls.vue"]]),un=["onClick"],dn={class:"text-green font-bold"},hn={class:"opacity-50"},fn={key:1,class:"opacity-50"},pn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},Ce=4*16*2,Qe=2*16,_n=U({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Ve(t,"modelValue",e),{currentSlideNo:i,go:r,slides:l}=se();function c(){o.value=!1}function d($){r($),c()}function f($){return $===P.value}const p=Ne.smaller("xs"),_=Ne.smaller("sm"),v=A(()=>p.value?$e.width.value-Ce:_.value?($e.width.value-Ce-Qe)/2:300),k=A(()=>Math.floor(($e.width.value-Ce)/(v.value+Qe))),g=O("");return qt("keypress",$=>{if(!G.value){g.value="";return}if($.key==="Enter"){$.preventDefault(),g.value?(d(+g.value),g.value=""):d(P.value);return}const M=Number.parseInt($.key.replace(/[^0-9]/g,""));if(Number.isNaN(M)){g.value="";return}if(!g.value&&M===0)return;if(g.value+=String(M),+g.value>=l.value.length){g.value="";return}const I=l.value.findIndex(w=>`/${w.no}`===g.value);I!==-1&&(P.value=I+1),+g.value*10>l.value.length&&(d(+g.value),g.value="")}),st(()=>{P.value=i.value,je.value=k.value}),($,M)=>{const I=Is;return a(),u(H,null,[b(Ut,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(N("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:M[0]||(M[0]=w=>c())},[N("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ce(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(a(!0),u(H,null,ke(h(l),(w,D)=>(a(),u("div",{key:w.no,class:"relative"},[N("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",f(D+1)||h(P)===D+1?"border-primary":"border-main"]),onClick:m=>d(w.no)},[(a(),x(Bs,{key:w.no,width:v.value,class:"pointer-events-none"},{default:R(()=>[w!=null&&w.component?(a(),x(ht,{key:0,is:w.component,"clicks-context":h(at)(w,h(lt)),class:F(h(ft)(w)),route:w,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):S("v-if",!0),b(is,{page:w.no},null,8,["page"])]),_:2},1032,["width"]))],10,un),N("div",{class:"absolute top-0",style:ce(`left: ${v.value+5}px`)},[g.value&&String(D+1).startsWith(g.value)?(a(),u(H,{key:0},[N("span",dn,Q(g.value),1),N("span",hn,Q(String(D+1).slice(g.value.length)),1)],64)):(a(),u("span",fn,Q(D+1),1))],4)]))),128))],4)],512),[[it,h(o)]])]),_:1}),h(o)?(a(),u("div",pn,[b(z,{title:"Close",class:"text-2xl",onClick:c},{default:R(()=>[b(I)]),_:1}),S("v-if",!0)])):S("v-if",!0)],64)}}}),Ni=q(_n,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function X(t){return Array.isArray?Array.isArray(t):mt(t)==="[object Array]"}const vn=1/0;function gn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-vn?"-0":e}function mn(t){return t==null?"":gn(t)}function Y(t){return typeof t=="string"}function vt(t){return typeof t=="number"}function yn(t){return t===!0||t===!1||kn(t)&&mt(t)=="[object Boolean]"}function gt(t){return typeof t=="object"}function kn(t){return gt(t)&&t!==null}function W(t){return t!=null}function xe(t){return!t.trim().length}function mt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const wn="Incorrect 'index' type",bn=t=>`Invalid value for key ${t}`,Sn=t=>`Pattern length exceeds max of ${t}.`,Mn=t=>`Missing ${t} property in key`,$n=t=>`Property 'weight' in key '${t}' must be a positive integer`,Xe=Object.prototype.hasOwnProperty;class Cn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=yt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function yt(t){let e=null,s=null,n=null,o=1,i=null;if(Y(t)||X(t))n=t,e=Je(t),s=Le(t);else{if(!Xe.call(t,"name"))throw new Error(Mn("name"));const r=t.name;if(n=r,Xe.call(t,"weight")&&(o=t.weight,o<=0))throw new Error($n(r));e=Je(r),s=Le(r),i=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:i}}function Je(t){return X(t)?t:t.split(".")}function Le(t){return X(t)?t.join("."):t}function xn(t,e){let s=[],n=!1;const o=(i,r,l)=>{if(W(i))if(!r[l])s.push(i);else{let c=r[l];const d=i[c];if(!W(d))return;if(l===r.length-1&&(Y(d)||vt(d)||yn(d)))s.push(mn(d));else if(X(d)){n=!0;for(let f=0,p=d.length;f<p;f+=1)o(d[f],r,l+1)}else r.length&&o(d,r,l+1)}};return o(t,Y(e)?e.split("."):e,0),n?s:s[0]}const En={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},In={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Rn={location:0,threshold:.6,distance:100},An={useExtendedSearch:!1,getFn:xn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var y={...In,...En,...Rn,...An};const Nn=/[^ ]+/g;function Ln(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(Nn).length;if(s.has(i))return s.get(i);const r=1/Math.pow(i,.5*t),l=parseFloat(Math.round(r*n)/n);return s.set(i,l),l},clear(){s.clear()}}}class Ge{constructor({getFn:e=y.getFn,fieldNormWeight:s=y.fieldNormWeight}={}){this.norm=Ln(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Y(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Y(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!W(e)||xe(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(W(r)){if(X(r)){let l=[];const c=[{nestedArrIndex:-1,value:r}];for(;c.length;){const{nestedArrIndex:d,value:f}=c.pop();if(W(f))if(Y(f)&&!xe(f)){let p={v:f,i:d,n:this.norm.get(f)};l.push(p)}else X(f)&&f.forEach((p,_)=>{c.push({nestedArrIndex:_,value:p})})}n.$[i]=l}else if(Y(r)&&!xe(r)){let l={v:r,n:this.norm.get(r)};n.$[i]=l}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function kt(t,e,{getFn:s=y.getFn,fieldNormWeight:n=y.fieldNormWeight}={}){const o=new Ge({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(yt)),o.setSources(e),o.create(),o}function Dn(t,{getFn:e=y.getFn,fieldNormWeight:s=y.fieldNormWeight}={}){const{keys:n,records:o}=t,i=new Ge({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(o),i}function _e(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=y.distance,ignoreLocation:i=y.ignoreLocation}={}){const r=e/t.length;if(i)return r;const l=Math.abs(n-s);return o?r+l/o:l?1:r}function Tn(t=[],e=y.minMatchCharLength){let s=[],n=-1,o=-1,i=0;for(let r=t.length;i<r;i+=1){let l=t[i];l&&n===-1?n=i:!l&&n!==-1&&(o=i-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const te=32;function Pn(t,e,s,{location:n=y.location,distance:o=y.distance,threshold:i=y.threshold,findAllMatches:r=y.findAllMatches,minMatchCharLength:l=y.minMatchCharLength,includeMatches:c=y.includeMatches,ignoreLocation:d=y.ignoreLocation}={}){if(e.length>te)throw new Error(Sn(te));const f=e.length,p=t.length,_=Math.max(0,Math.min(n,p));let v=i,k=_;const g=l>1||c,$=g?Array(p):[];let M;for(;(M=t.indexOf(e,k))>-1;){let E=_e(e,{currentLocation:M,expectedLocation:_,distance:o,ignoreLocation:d});if(v=Math.min(E,v),k=M+f,g){let C=0;for(;C<f;)$[M+C]=1,C+=1}}k=-1;let I=[],w=1,D=f+p;const m=1<<f-1;for(let E=0;E<f;E+=1){let C=0,B=D;for(;C<B;)_e(e,{errors:E,currentLocation:_+B,expectedLocation:_,distance:o,ignoreLocation:d})<=v?C=B:D=B,B=Math.floor((D-C)/2+C);D=B;let ie=Math.max(1,_-B+1),V=r?p:Math.min(_+B,p)+f,J=Array(V+2);J[V+1]=(1<<E)-1;for(let j=V;j>=ie;j-=1){let ne=j-1,ue=s[t.charAt(ne)];if(g&&($[ne]=+!!ue),J[j]=(J[j+1]<<1|1)&ue,E&&(J[j]|=(I[j+1]|I[j])<<1|1|I[j+1]),J[j]&m&&(w=_e(e,{errors:E,currentLocation:ne,expectedLocation:_,distance:o,ignoreLocation:d}),w<=v)){if(v=w,k=ne,k<=_)break;ie=Math.max(1,2*_-k)}}if(_e(e,{errors:E+1,currentLocation:_,expectedLocation:_,distance:o,ignoreLocation:d})>v)break;I=J}const T={isMatch:k>=0,score:Math.max(.001,w)};if(g){const E=Tn($,l);E.length?c&&(T.indices=E):T.isMatch=!1}return T}function On(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class wt{constructor(e,{location:s=y.location,threshold:n=y.threshold,distance:o=y.distance,includeMatches:i=y.includeMatches,findAllMatches:r=y.findAllMatches,minMatchCharLength:l=y.minMatchCharLength,isCaseSensitive:c=y.isCaseSensitive,ignoreLocation:d=y.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:d},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(_,v)=>{this.chunks.push({pattern:_,alphabet:On(_),startIndex:v})},p=this.pattern.length;if(p>te){let _=0;const v=p%te,k=p-v;for(;_<k;)f(this.pattern.substr(_,te),_),_+=te;if(v){const g=p-te;f(this.pattern.substr(g),g)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let k={isMatch:!0,score:0};return n&&(k.indices=[[0,e.length-1]]),k}const{location:o,distance:i,threshold:r,findAllMatches:l,minMatchCharLength:c,ignoreLocation:d}=this.options;let f=[],p=0,_=!1;this.chunks.forEach(({pattern:k,alphabet:g,startIndex:$})=>{const{isMatch:M,score:I,indices:w}=Pn(e,k,g,{location:o+$,distance:i,threshold:r,findAllMatches:l,minMatchCharLength:c,includeMatches:n,ignoreLocation:d});M&&(_=!0),p+=I,M&&w&&(f=[...f,...w])});let v={isMatch:_,score:_?p/this.chunks.length:1};return _&&n&&(v.indices=f),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return Ze(e,this.multiRegex)}static isSingleMatch(e){return Ze(e,this.singleRegex)}search(){}}function Ze(t,e){const s=t.match(e);return s?s[1]:null}class Fn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Vn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Gn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Kn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class bt extends ee{constructor(e,{location:s=y.location,threshold:n=y.threshold,distance:o=y.distance,includeMatches:i=y.includeMatches,findAllMatches:r=y.findAllMatches,minMatchCharLength:l=y.minMatchCharLength,isCaseSensitive:c=y.isCaseSensitive,ignoreLocation:d=y.ignoreLocation}={}){super(e),this._bitapSearch=new wt(e,{location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class St extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,o.push([n,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const De=[Fn,St,Bn,jn,Kn,Gn,Vn,bt],et=De.length,Wn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,zn="|";function Hn(t,e={}){return t.split(zn).map(s=>{let n=s.trim().split(Wn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const l=n[i];let c=!1,d=-1;for(;!c&&++d<et;){const f=De[d];let p=f.isMultiMatch(l);p&&(o.push(new f(p,e)),c=!0)}if(!c)for(d=-1;++d<et;){const f=De[d];let p=f.isSingleMatch(l);if(p){o.push(new f(p,e));break}}}return o})}const qn=new Set([bt.type,St.type]);class Un{constructor(e,{isCaseSensitive:s=y.isCaseSensitive,includeMatches:n=y.includeMatches,minMatchCharLength:o=y.minMatchCharLength,ignoreLocation:i=y.ignoreLocation,findAllMatches:r=y.findAllMatches,location:l=y.location,threshold:c=y.threshold,distance:d=y.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:l,threshold:c,distance:d},this.pattern=s?e:e.toLowerCase(),this.query=Hn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],l=0;for(let c=0,d=s.length;c<d;c+=1){const f=s[c];r.length=0,i=0;for(let p=0,_=f.length;p<_;p+=1){const v=f[p],{isMatch:k,indices:g,score:$}=v.search(e);if(k){if(i+=1,l+=$,n){const M=v.constructor.type;qn.has(M)?r=[...r,...g]:r.push(g)}}else{l=0,i=0,r.length=0;break}}if(i){let p={isMatch:!0,score:l/i};return n&&(p.indices=r),p}}return{isMatch:!1,score:1}}}const Te=[];function Yn(...t){Te.push(...t)}function Pe(t,e){for(let s=0,n=Te.length;s<n;s+=1){let o=Te[s];if(o.condition(t,e))return new o(t,e)}return new wt(t,e)}const ye={AND:"$and",OR:"$or"},Oe={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),Qn=t=>!!t[Oe.PATH],Xn=t=>!X(t)&&gt(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Mt(t,e,{auto:s=!0}={}){const n=o=>{let i=Object.keys(o);const r=Qn(o);if(!r&&i.length>1&&!Fe(o))return n(tt(o));if(Xn(o)){const c=r?o[Oe.PATH]:i[0],d=r?o[Oe.PATTERN]:o[c];if(!Y(d))throw new Error(bn(c));const f={keyId:Le(c),pattern:d};return s&&(f.searcher=Pe(d,e)),f}let l={children:[],operator:i[0]};return i.forEach(c=>{const d=o[c];X(d)&&d.forEach(f=>{l.children.push(n(f))})}),l};return Fe(t)||(t=tt(t)),n(t)}function Jn(t,{ignoreFieldNorm:e=y.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:i,score:r})=>{const l=o?o.weight:null;n*=Math.pow(r===0&&l?Number.EPSILON:r,(l||1)*(e?1:i))}),s.score=n})}function Zn(t,e){const s=t.matches;e.matches=[],W(s)&&s.forEach(n=>{if(!W(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function eo(t,e){e.score=t.score}function to(t,e,{includeMatches:s=y.includeMatches,includeScore:n=y.includeScore}={}){const o=[];return s&&o.push(Zn),n&&o.push(eo),t.map(i=>{const{idx:r}=i,l={item:e[r],refIndex:r};return o.length&&o.forEach(c=>{c(i,l)}),l})}class oe{constructor(e,s={},n){this.options={...y,...s},this.options.useExtendedSearch,this._keyStore=new Cn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ge))throw new Error(wn);this._myIndex=s||kt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:l}=this.options;let c=Y(e)?Y(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Jn(c,{ignoreFieldNorm:l}),i&&c.sort(r),vt(s)&&s>-1&&(c=c.slice(0,s)),to(c,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:l})=>{if(!W(i))return;const{isMatch:c,score:d,indices:f}=s.searchIn(i);c&&o.push({item:i,idx:r,matches:[{score:d,value:i,norm:l,indices:f}]})}),o}_searchLogical(e){const s=Mt(e,this.options),n=(l,c,d)=>{if(!l.children){const{keyId:p,searcher:_}=l,v=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(c,p),searcher:_});return v&&v.length?[{idx:d,item:c,matches:v}]:[]}const f=[];for(let p=0,_=l.children.length;p<_;p+=1){const v=l.children[p],k=n(v,c,d);if(k.length)f.push(...k);else if(l.operator===ye.AND)return[]}return f},o=this._myIndex.records,i={},r=[];return o.forEach(({$:l,i:c})=>{if(W(l)){let d=n(s,l,c);d.length&&(i[c]||(i[c]={idx:c,item:l,matches:[]},r.push(i[c])),d.forEach(({matches:f})=>{i[c].matches.push(...f)}))}}),r}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:l})=>{if(!W(r))return;let c=[];n.forEach((d,f)=>{c.push(...this._findMatches({key:d,value:r[f],searcher:s}))}),c.length&&i.push({idx:l,item:r,matches:c})}),i}_findMatches({key:e,value:s,searcher:n}){if(!W(s))return[];let o=[];if(X(s))s.forEach(({v:i,i:r,n:l})=>{if(!W(i))return;const{isMatch:c,score:d,indices:f}=n.searchIn(i);c&&o.push({score:d,key:e,value:i,idx:r,norm:l,indices:f})});else{const{v:i,n:r}=s,{isMatch:l,score:c,indices:d}=n.searchIn(i);l&&o.push({score:c,key:e,value:i,norm:r,indices:d})}return o}}oe.version="7.0.0";oe.createIndex=kt;oe.parseIndex=Dn;oe.config=y;oe.parseQuery=Mt;Yn(Un);const so={key:0},no={key:1},oo={key:2},io={key:3},ro={key:4},ao={key:5},lo={key:6},co={key:7},uo={key:8},ho={key:9},fo={key:10},po={key:11},_o={key:12},vo={key:13},go={key:14},mo={key:15},yo={key:16},ko={key:17},wo={key:18},bo={key:19},So={key:20},Mo={key:21},$o={key:22},Co={key:23},xo={key:24},Eo={key:25},Io={key:26},Ro={key:27},Ao={key:28},No={key:29},Lo={key:30},Do={key:31},To={key:32},Po={key:33},Oo={key:34},Fo={key:35},Vo={key:36},Bo={key:37},jo={key:38},Go={key:39},Ko={key:40},Wo={key:41},zo={key:42},Ho={key:43},qo={key:44},Uo={key:45},Yo={key:46},Qo={key:47},Xo={key:48},Jo={key:49},Zo={key:50},ei={key:51},ti={key:52},si={key:53},ni={key:54},oi={key:55},ii={key:56},ri={key:57},ai={key:58},li={key:59},ci=U({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(a(),u("div",null,[+e.no==1?(a(),u("p",so,"survey presentation")):+e.no==2?(a(),u("p",no,"目录")):+e.no==3?(a(),u("p",oo,"方案一: SmartSSD")):+e.no==4?(a(),u("p",io,"约定")):+e.no==5?(a(),u("p",ro,"约定")):+e.no==6?(a(),u("p",ao,"步骤分析")):+e.no==7?(a(),u("p",lo,"步骤分析")):+e.no==8?(a(),u("p",co,"步骤分析")):+e.no==9?(a(),u("p",uo,"单个query分析")):+e.no==10?(a(),u("p",ho,"单个query分析")):+e.no==11?(a(),u("p",fo,"单个query分析")):+e.no==12?(a(),u("p",po,"多query查询分析")):+e.no==13?(a(),u("p",_o,"多query查询分析")):+e.no==14?(a(),u("p",vo,"多query查询分析")):+e.no==15?(a(),u("p",go,"优化1：相邻节点放一起，利用局部性")):+e.no==16?(a(),u("p",mo,"优化2：缓存、预取策略")):+e.no==17?(a(),u("p",yo,"优化3：多ssd并行")):+e.no==18?(a(),u("p",ko,"优化4：图二级索引选择迭代起始点")):+e.no==19?(a(),u("p",wo,"优化5：是否使用量化技术")):+e.no==20?(a(),u("p",bo,"CognitiveSSD方案")):+e.no==21?(a(),u("p",So,"约定")):+e.no==22?(a(),u("p",Mo,"单个query分析")):+e.no==23?(a(),u("p",$o,"单个query分析")):+e.no==24?(a(),u("p",Co,"单个query分析")):+e.no==25?(a(),u("p",xo,"多个query分析")):+e.no==26?(a(),u("p",Eo,"优化1：相邻节点放一起+二级索引")):+e.no==27?(a(),u("p",Io,"优化2：缓存、预取策略")):+e.no==28?(a(),u("p",Ro,"方案讨论与选择")):+e.no==29?(a(),u("p",Ao,"方案讨论与选择")):+e.no==30?(a(),u("h1",No,"方案讨论与选择")):+e.no==31?(a(),u("p",Lo,"方案讨论与选择")):+e.no==32?(a(),u("p",Do,"方案讨论与选择")):+e.no==33?(a(),u("p",To,"实验与性能估计")):+e.no==34?(a(),u("p",Po,"Setup")):+e.no==35?(a(),u("p",Oo,"starling测试")):+e.no==36?(a(),u("p",Fo,"starling测试")):+e.no==37?(a(),u("p",Vo,"参数与约定")):+e.no==38?(a(),u("p",Bo,"结果")):+e.no==39?(a(),u("p",jo,"资源估计")):+e.no==40?(a(),u("p",Go,"资源估计")):+e.no==41?(a(),u("p",Ko,"params")):+e.no==42?(a(),u("p",Wo,"params")):+e.no==43?(a(),u("p",zo,"访存时间")):+e.no==44?(a(),u("p",Ho,"计算时间")):+e.no==45?(a(),u("p",qo,"加法链结构")):+e.no==46?(a(),u("p",Uo,"加法链结构")):+e.no==47?(a(),u("p",Yo,"乘加树结构")):+e.no==48?(a(),u("p",Qo,"乘加树结构")):+e.no==49?(a(),u("p",Xo,"Flash总容量估计")):+e.no==50?(a(),u("p",Jo,"DRAM&Buffer容量估计")):+e.no==51?(a(),u("p",Zo,"DRAM&Buffer容量估计")):+e.no==52?(a(),u("p",ei,"batch设计的讨论")):+e.no==53?(a(),u("p",ti,"batch设计的讨论")):+e.no==54?(a(),u("p",si,"batch设计的讨论")):+e.no==55?(a(),u("p",ni,"结果")):+e.no==56?(a(),u("p",oi,"结果")):+e.no==57?(a(),u("p",ii,"结果")):+e.no==58?(a(),u("p",ri,"910b 性能估计")):+e.no==59?(a(),u("p",ai,"910b 性能估计")):+e.no==60?(a(),u("p",li,"910b 性能估计")):S("v-if",!0)]))}}),ui=q(ci,[["__file","/@slidev/title-renderer.md"]]),di={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},hi=["value","disabled"],fi=["border","onClick"],pi={"w-4":"","text-right":"",op50:"","text-sm":""},_i=U({__name:"Goto",setup(t){const e=O(),s=O(),n=O(),o=O(),i=O(""),r=O(0),{go:l,slides:c}=se();function d(m){return m!=null}const f=A(()=>new oe(c.value.map(m=>{var T;return(T=m.meta)==null?void 0:T.slide}).filter(d),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=A(()=>i.value.startsWith("/")?i.value.substring(1):i.value),_=A(()=>f.value.search(p.value).map(m=>m.item)),v=A(()=>!!_.value.length);function k(){if(v.value){const m=_.value.at(r.value||0);m&&l(m.no)}g()}function g(){i.value="",Z.value=!1}function $(m){m.preventDefault(),r.value++,r.value>=_.value.length&&(r.value=0),I()}function M(m){m.preventDefault(),r.value--,r.value<=-2&&(r.value=_.value.length-1),I()}function I(){var T;const m=(T=o.value)==null?void 0:T[r.value];m&&n.value&&(m.offsetTop+m.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:m.offsetTop+m.offsetHeight-n.value.offsetHeight+1}):m.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:m.offsetTop}))}function w(m){r.value=0,i.value=m.target.value}function D(m){l(m),g()}return me(Z,async m=>{var T;m?(i.value="",r.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(T=s.value)==null||T.blur()}),me(ae,()=>{var m;(m=e.value)!=null&&m.contains(ae.value)||g()}),(m,T)=>(a(),u("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",h(Z)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[N("div",di,[N("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:i.value,type:"text",disabled:!h(Z),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&i.value}]),placeholder:"Goto...",onKeydown:[he(k,["enter"]),he(g,["escape"]),he($,["down"]),he(M,["up"])],onInput:w},null,42,hi)]),_.value.length>0?(a(),u("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(a(!0),u(H,null,ke(_.value,(E,C)=>(a(),u("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:C===0?"":"t main",class:F(r.value===C?"bg-active op100":"op80"),onClick:Yt(B=>D(E.no),["stop","prevent"])},[N("div",pi,Q(E.no),1),b(h(ui),{no:E.no},null,8,["no"])],10,fi))),128))],512)):S("v-if",!0)],2))}}),Li=q(_i,[["__scopeId","data-v-f5ee02a7"],["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/Goto.vue"]]);function vi(){const t=Qt(),e=O(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((i,r)=>{var g,$,M,I;const l=(g=qe(r.params.no))==null?void 0:g.meta,c=($=qe(i.params.no))==null?void 0:$.meta,d=(M=l==null?void 0:l.slide)==null?void 0:M.no,f=(I=c==null?void 0:c.slide)==null?void 0:I.no;if((d!=null&&f!=null&&((d<f?l==null?void 0:l.transition:c==null?void 0:c.transition)??re.transition))!=="view-transition"){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const _=new Promise((w,D)=>{s=w,n=D});let v;const k=new Promise(w=>v=w);return setTimeout(()=>{document.startViewTransition(()=>(v(),_))},50),k}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const gi={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},mi=U({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=pt;return h(Se).cursor?(a(),u("div",gi,[b(n,{class:"absolute",style:ce({left:`${h(Se).cursor.x}%`,top:`${h(Se).cursor.y}%`})},null,8,["style"])])):S("v-if",!0)}}}),yi=q(mi,[["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ki=t=>(Zt("data-v-afb4231e"),t=t(),es(),t),wi=ki(()=>N("div",{id:"twoslash-container"},null,-1)),bi=U({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:i,slides:r,isPrintMode:l,isPrintWithClicks:c}=se();me(e,()=>{var v,k;(v=e.value)!=null&&v.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(k=i.value)!=null&&k.meta&&i.value.meta.preload!==!1&&(i.value.meta.__preloaded=!0)},{immediate:!0});const d=vi(),f=Ie();rt(()=>import("./DrawingLayer-CTgIQ_9b.js"),__vite__mapDeps([11,2,12,6,3,4,7,5,8,9])).then(v=>f.value=v.default);const p=A(()=>r.value.filter(v=>{var k;return((k=v.meta)==null?void 0:k.__preloaded)||v===e.value}));function _(){Ue.value=!0,Rs()}return(v,k)=>(a(),u(H,null,[S(" Global Bottom "),b(h(ds)),S(" Slides "),(a(),x(nt(h(d)?"div":Jt),Xt(h(Ue)?{}:h(s),{id:"slideshow",tag:"div",onAfterLeave:_}),{default:R(()=>[(a(!0),u(H,null,ke(p.value,g=>ot((a(),u("div",{key:g.no},[b(ht,{is:g.component,"clicks-context":h(l)&&!h(c)?h(at)(g,h(lt)):h(n)(g),class:F([h(ft)(g),"overflow-hidden"]),route:g,"render-context":v.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[it,g===h(e)]])),128))]),_:1},16)),wi,S(" Global Top "),b(h(hs)),f.value?(a(),x(h(f),{key:0})):S("v-if",!0),h(o)?S("v-if",!0):(a(),x(yi,{key:1}))],64))}}),Di=q(bi,[["__scopeId","data-v-afb4231e"],["__file","D:/暑研/梁胜文老师/huawei/survey/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Li as G,z as I,Ai as N,Ni as Q,Bs as S,pe as V,Di as a,Ri as r,Ii as u};