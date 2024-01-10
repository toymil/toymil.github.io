import{s as P,n as L,q as F,u as U,v as z,w as G}from"../chunks/scheduler.YAOc3RFa.js";import{S as V,i as q,e as $,s as k,c as b,a as E,A as B,f as j,d,o as f,g as w,h as v,B as J,t as H,b as R,C as K,D as Q,u as W,v as X,w as Y,n as D,l as I,x as Z}from"../chunks/index.ox63BBL5.js";import{e as T,u as ee,d as te,f as A,P as M}from"../chunks/prepend_app_level_absolute_path_with_base.p2RLN_dK.js";import{g as se,s as le,a as ae}from"../chunks/color_scheme_selector.dqa5hCpA.js";const re=!0,ne=!0,oe="never",ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:re,ssr:ne,trailingSlash:oe},Symbol.toStringTag,{value:"Module"}));function O(_,e,s){const t=_.slice();return t[4]=e[s].id,t[5]=e[s].value,t[6]=e[s].label,t[7]=e[s].checked,t}function N(_,e){let s,t,c,i=e[6]+"",n,y,u,g,a;return u=J(e[3][0]),{key:_,first:null,c(){s=$("div"),t=$("input"),c=$("label"),n=H(i),y=k(),this.h()},l(l){s=b(l,"DIV",{class:!0});var o=E(s);t=b(o,"INPUT",{type:!0,name:!0,id:!0,class:!0}),c=b(o,"LABEL",{for:!0,class:!0});var m=E(c);n=R(m,i),m.forEach(d),y=j(o),o.forEach(d),this.h()},h(){f(t,"type","radio"),f(t,"name","color_scheme"),f(t,"id",e[4]),t.__value=e[5],K(t,t.__value),t.required=!0,t.checked=e[7],f(t,"class","svelte-1tjx4wn"),f(c,"for",e[4]),f(c,"class","svelte-1tjx4wn"),f(s,"class","radio svelte-1tjx4wn"),u.p(t),this.first=s},m(l,o){w(l,s,o),v(s,t),t.checked=t.__value===e[0],v(s,c),v(c,n),v(s,y),g||(a=Q(t,"change",e[2]),g=!0)},p(l,o){e=l,o&1&&(t.checked=t.__value===e[0])},d(l){l&&d(s),u.r(),g=!1,a()}}}function ce(_){let e,s,t="Color Scheme",c,i,n=[],y=new Map,u=T(_[1]);const g=a=>a[4];for(let a=0;a<u.length;a+=1){let l=O(_,u,a),o=g(l);y.set(o,n[a]=N(o,l))}return{c(){e=$("fieldset"),s=$("legend"),s.textContent=t,c=k(),i=$("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"FIELDSET",{class:!0});var l=E(e);s=b(l,"LEGEND",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-1w46gxm"&&(s.textContent=t),c=j(l),i=b(l,"DIV",{class:!0});var o=E(i);for(let m=0;m<n.length;m+=1)n[m].l(o);o.forEach(d),l.forEach(d),this.h()},h(){f(s,"class","svelte-1tjx4wn"),f(i,"class","group svelte-1tjx4wn"),f(e,"class","svelte-1tjx4wn")},m(a,l){w(a,e,l),v(e,s),v(e,c),v(e,i);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(i,null)},p(a,[l]){l&3&&(u=T(a[1]),n=ee(n,l,g,1,a,u,y,i,te,N,null,O))},i:L,o:L,d(a){a&&d(e);for(let l=0;l<n.length;l+=1)n[l].d()}}}function ie(_,e,s){let t=se();const c=[{id:"color_scheme_system",value:"system",label:"OS",checked:!0},{id:"color_scheme_light",value:"light",label:"Light"},{id:"color_scheme_dark",value:"dark",label:"Dark"}],i=[[]];function n(){t=this.__value,s(0,t)}return _.$$.update=()=>{_.$$.dirty&1&&(le(t),ae(t))},[t,c,n,i]}class _e extends V{constructor(e){super(),q(this,e,ie,ce,P,{})}}function ue(_){let e,s,t,c,i,n,y,u,g,a,l,o=`<a href="${A("/rss.xml")}" class="svelte-1scmrxj">RSS</a>`,m;u=new _e({});const x=_[1].default,p=F(x,_,_[0],null);return{c(){e=$("header"),s=$("nav"),t=$("a"),c=H(M),i=k(),n=$("div"),y=k(),W(u.$$.fragment),g=k(),p&&p.c(),a=k(),l=$("footer"),l.innerHTML=o,this.h()},l(r){e=b(r,"HEADER",{class:!0});var h=E(e);s=b(h,"NAV",{class:!0});var S=E(s);t=b(S,"A",{class:!0,href:!0});var C=E(t);c=R(C,M),C.forEach(d),S.forEach(d),i=j(h),n=b(h,"DIV",{class:!0}),E(n).forEach(d),y=j(h),X(u.$$.fragment,h),h.forEach(d),g=j(r),p&&p.l(r),a=j(r),l=b(r,"FOOTER",{class:!0,"data-svelte-h":!0}),B(l)!=="svelte-1onpbm2"&&(l.innerHTML=o),this.h()},h(){f(t,"class","home svelte-1scmrxj"),f(t,"href",A("/")),f(s,"class","svelte-1scmrxj"),f(n,"class","spacer svelte-1scmrxj"),f(e,"class","svelte-1scmrxj"),f(l,"class","svelte-1scmrxj")},m(r,h){w(r,e,h),v(e,s),v(s,t),v(t,c),v(e,i),v(e,n),v(e,y),Y(u,e,null),w(r,g,h),p&&p.m(r,h),w(r,a,h),w(r,l,h),m=!0},p(r,[h]){p&&p.p&&(!m||h&1)&&U(p,x,r,r[0],m?G(x,r[0],h,null):z(r[0]),null)},i(r){m||(D(u.$$.fragment,r),D(p,r),m=!0)},o(r){I(u.$$.fragment,r),I(p,r),m=!1},d(r){r&&(d(e),d(g),d(a),d(l)),Z(u),p&&p.d(r)}}}function fe(_,e,s){let{$$slots:t={},$$scope:c}=e;return _.$$set=i=>{"$$scope"in i&&s(0,c=i.$$scope)},[c,t]}class ge extends V{constructor(e){super(),q(this,e,fe,ue,P,{})}}export{ge as component,ve as universal};
