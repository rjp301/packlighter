function j(){}const ot=t=>t;function R(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function at(){return Object.create(null)}function G(t){t.forEach(F)}function I(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function _t(t){return Object.keys(t).length===0}function H(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t){let e;return H(t,n=>e=n)(),e}function dt(t,e,n){t.$$.on_destroy.push(H(e,n))}function mt(t,e,n,i){if(t){const s=S(t,e,n,i);return t[0](s)}}function S(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function yt(t,e,n,i,s,l){if(s){const c=S(e,n,i,l);t.p(c,s)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Et(t,e,n){return t.set(n),e}function wt(t){return t&&I(t.destroy)?t.destroy:j}function vt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let y=!1;function Tt(){y=!0}function Nt(){y=!1}function z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:z(1,s,B=>e[n[B]].claim_order,a))-1;i[r]=n[u]+1;const k=u+1;n[k]=r,s=Math.max(k,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<l.length&&c[r].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[r],u)}}function W(t,e){t.appendChild(e)}function J(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=T("style");return e.textContent="/* empty */",K(J(t),e),e.sheet}function K(t,e){return W(t.head||t,e),e.sheet}function Q(t,e){if(y){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){y&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ct(){return N(" ")}function Dt(){return N("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ht(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Y=["width","height"];function Z(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Y.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function St(t,e){for(const n in e)A(t,n,e[n])}function $(t,e){Object.keys(e).forEach(n=>{tt(t,n,e[n])})}function tt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:A(t,e,n)}function Lt(t){return/-/.test(t)?$:Z}function Mt(t){return t.dataset.svelteH}function Pt(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){M(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Ot(t,e,n){return O(t,e,n,T)}function qt(t,e,n){return O(t,e,n,L)}function et(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function Bt(t){return et(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Rt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);M(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new g(e);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,l)}function Ft(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e){t.value=e??""}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function zt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ut(t){const e=t.querySelector(":checked");return e&&e.__value}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Wt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class it{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class g extends it{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}}function Jt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Kt(t){h().$$.on_mount.push(t)}function Qt(t){h().$$.after_update.push(t)}function Vt(t){h().$$.on_destroy.push(t)}function Xt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=nt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Yt(t,e){return h().$$.context.set(t,e),e}function Zt(t){return h().$$.context.get(t)}function $t(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],D=[];let _=[];const w=[],q=Promise.resolve();let v=!1;function st(){v||(v=!0,q.then(rt))}function te(){return st(),q}function ct(t){_.push(t)}function ee(t){w.push(t)}const x=new Set;let f=0;function rt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),lt(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;D.length;)D.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];x.has(n)||(x.add(n),n())}_.length=0}while(d.length);for(;w.length;)w.pop()();v=!1,x.clear(),b(t)}function lt(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function ne(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{zt as $,Q as A,j as B,dt as C,ot as D,xt as E,R as F,bt as G,g as H,Z as I,H as J,wt as K,Lt as L,jt as M,G as N,Mt as O,$t as P,I as Q,ee as R,Et as S,ct as T,L as U,qt as V,St as W,Gt as X,kt as Y,ft as Z,Ht as _,Ct as a,Ut as a0,ht as a1,vt as a2,Yt as a3,Zt as a4,Xt as a5,J as a6,At as a7,nt as a8,at as a9,rt as aa,_t as ab,ne as ac,p as ad,b as ae,F as af,d as ag,st as ah,Tt as ai,Nt as aj,Qt as b,Bt as c,E as d,Dt as e,T as f,Ot as g,Pt as h,X as i,A as j,It as k,N as l,et as m,Ft as n,Kt as o,D as p,Jt as q,mt as r,ut as s,te as t,yt as u,gt as v,pt as w,Vt as x,Wt as y,Rt as z};
