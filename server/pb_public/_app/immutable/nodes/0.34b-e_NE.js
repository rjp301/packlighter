import{s as m,r as b,u as v,v as S,w as k,o as q,x as C,H as E,e as h,y as T,z as D,d as f,A as I,B as c,a as L,c as O,i as Q}from"../chunks/scheduler.FxfIUB4r.js";import{S as d,i as _,a as r,t as i,b as p,d as $,m as y,e as w}from"../chunks/index.ZYkaB7Ah.js";import{Q as A,s as H,q as P}from"../chunks/query.KWViu12d.js";import{d as j,s as M,a as z,l as F}from"../chunks/mode.wZLOiohB.js";const U=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,B=!1,se=Object.freeze(Object.defineProperty({__proto__:null,ssr:B},Symbol.toStringTag,{value:"Module"}));function K(a){let n;const o=a[2].default,e=b(o,a,a[1],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,s){e&&e.m(t,s),n=!0},p(t,[s]){e&&e.p&&(!n||s&2)&&v(e,o,t,t[1],n?k(o,t[1],s,null):S(t[1]),null)},i(t){n||(r(e,t),n=!0)},o(t){i(e,t),n=!1},d(t){e&&e.d(t)}}}function G(a,n,o){let{$$slots:e={},$$scope:t}=n,{client:s=new A}=n;return q(()=>{s.mount()}),H(s),C(()=>{s.unmount()}),a.$$set=l=>{"client"in l&&o(0,s=l.client),"$$scope"in l&&o(1,t=l.$$scope)},[s,t,e]}class J extends d{constructor(n){super(),_(this,n,G,K,m,{client:0})}}const{document:u}=U;function N(a){let n,o='<script nonce="%sveltekit.nonce%">('+a[0]+")();<\/script>",e;return{c(){n=new E(!1),e=h(),this.h()},l(t){const s=T("svelte-184nin2",u.head);n=D(s,!1),e=h(),s.forEach(f),this.h()},h(){n.a=e},m(t,s){n.m(o,u.head),I(u.head,e)},p:c,i:c,o:c,d(t){t&&n.d(),f(e)}}}function R(){const a=document.documentElement,n=localStorage.getItem("mode")||"<DEFAULT_MODE>",o=n==="light"||n==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;a.classList[o?"remove":"add"]("dark"),a.style.colorScheme=o?"light":"dark",localStorage.setItem("mode",n)}function V(a,n,o){let{track:e=!0}=n,{defaultMode:t="system"}=n;q(()=>{const l=j.subscribe(()=>{});return M.tracking(e),M.query(),z(localStorage.getItem(F)||t),()=>{l()}});const s=R.toString().replace("<DEFAULT_MODE>",t);return a.$$set=l=>{"track"in l&&o(1,e=l.track),"defaultMode"in l&&o(2,t=l.defaultMode)},[s,e,t]}class W extends d{constructor(n){super(),_(this,n,V,N,m,{track:1,defaultMode:2})}}function X(a){let n;const o=a[0].default,e=b(o,a,a[1],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,s){e&&e.m(t,s),n=!0},p(t,s){e&&e.p&&(!n||s&2)&&v(e,o,t,t[1],n?k(o,t[1],s,null):S(t[1]),null)},i(t){n||(r(e,t),n=!0)},o(t){i(e,t),n=!1},d(t){e&&e.d(t)}}}function Y(a){let n,o,e,t;return n=new W({}),e=new J({props:{client:P,$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){p(n.$$.fragment),o=L(),p(e.$$.fragment)},l(s){$(n.$$.fragment,s),o=O(s),$(e.$$.fragment,s)},m(s,l){y(n,s,l),Q(s,o,l),y(e,s,l),t=!0},p(s,[l]){const g={};l&2&&(g.$$scope={dirty:l,ctx:s}),e.$set(g)},i(s){t||(r(n.$$.fragment,s),r(e.$$.fragment,s),t=!0)},o(s){i(n.$$.fragment,s),i(e.$$.fragment,s),t=!1},d(s){s&&f(o),w(n,s),w(e,s)}}}function Z(a,n,o){let{$$slots:e={},$$scope:t}=n;return a.$$set=s=>{"$$scope"in s&&o(1,t=s.$$scope)},[e,t]}class oe extends d{constructor(n){super(),_(this,n,Z,Y,m,{})}}export{oe as component,se as universal};