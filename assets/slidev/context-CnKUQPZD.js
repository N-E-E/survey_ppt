import{aw as n,ar as r,t as u,y as j,Y as v,ax as $}from"../modules/vue-D_1tdyWU.js";import{g as p,z as x,a4 as l,i as C,y as S,v as R,w as T,r as g,a5 as k,a6 as E}from"../index-C1kyXy8w.js";function F(){const t=n(C),s=r(t,"nav"),a=n(S).value,e=r(a,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(g,void 0),m=n(p,u(1)),f=n(x,j(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;v(l,t);const{$slidev:s,$page:a}=F(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,s){return{...$(t,s===0?k:E),frontmatter:t}}export{b as f,O as p,F as u};