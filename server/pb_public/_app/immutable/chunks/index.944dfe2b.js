function E(){}const bt=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Z(){return Object.create(null)}function T(t){t.forEach(st)}function F(t){return typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Yt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function $t(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t){let e;return rt(t,n=>e=n)(),e}function te(t,e,n){t.$$.on_destroy.push(rt(e,n))}function ee(t,e,n,i){if(t){const s=ot(t,e,n,i);return t[0](s)}}function ot(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function ne(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function ie(t,e,n,i,s,c){if(s){const r=ot(e,n,i,c);t.p(r,s)}}function se(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function re(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function oe(t){const e={};for(const n in t)e[n]=!0;return e}function le(t,e,n){return t.set(n),e}function ce(t){return t&&F(t.destroy)?t.destroy:E}function ae(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let xt=lt?()=>window.performance.now():()=>Date.now(),U=lt?t=>requestAnimationFrame(t):E;const M=new Set;function ct(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&U(ct)}function vt(t){let e;return M.size===0&&U(ct),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const Et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Et;let W=!1;function Tt(){W=!0}function Nt(){W=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function At(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:kt(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[f]+1;const d=f+1;n[d]=l,s=Math.max(d,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[l],f)}}function Mt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=V("style");return Ct(at(t),e),e.sheet}function Ct(t,e){return Mt(t.head||t,e),e.sheet}function Dt(t,e){if(W){for(At(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Pt(t,e,n){W&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function fe(){return X(" ")}function de(){return X("")}function _e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function me(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function pe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){ft(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function _t(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ye(t,e,n){return _t(t,e,n,V)}function ge(t,e,n){return _t(t,e,n,ut)}function jt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function be(t){return jt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function we(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);ft(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(c,e)}function $e(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e){t.value=e??""}function ve(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Te(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class qt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class et extends qt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Pt(this.t,this.n[n],e)}}function Ne(t,e){return new t(e)}const R=new Map;let B=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:St(e),rules:{}};return R.set(t,n),n}function nt(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*c(y);a+=y*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Ot(f)}_${o}`,h=at(t),{stylesheet:u,rules:_}=R.get(h)||Rt(h,t);_[d]||(_[d]=!0,u.insertRule(`@keyframes ${d} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,B+=1,d}function Bt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||zt())}function zt(){U(()=>{B||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),R.clear())})}let P;function D(t){P=t}function Y(){if(!P)throw new Error("Function called outside component initialization");return P}function ke(t){Y().$$.on_mount.push(t)}function Ae(t){Y().$$.after_update.push(t)}function Me(){const t=Y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Se(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],it=[];let S=[];const K=[],mt=Promise.resolve();let Q=!1;function pt(){Q||(Q=!0,mt.then(yt))}function Ce(){return pt(),mt}function z(t){S.push(t)}function De(t){K.push(t)}const I=new Set;let k=0;function yt(){if(k!==0)return;const t=P;do{try{for(;k<A.length;){const e=A[k];k++,D(e),Ft(e.$$)}}catch(e){throw A.length=0,k=0,e}for(D(null),A.length=0,k=0;it.length;)it.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];I.has(n)||(I.add(n),n())}S.length=0}while(A.length);for(;K.length;)K.pop()();Q=!1,I.clear(),D(t)}function Ft(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Wt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let C;function Gt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function J(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const O=new Set;let $;function Le(){$={r:0,c:[],p:$}}function Pe(){$.r||T($.c),$=$.p}function gt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function It(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),$.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Jt={duration:0};function He(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,a=null;function f(){a&&Bt(t,a)}function d(u,_){const p=u.b-r;return _*=Math.abs(p),{a:r,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:y=bt,tick:g=E,css:x}=c||Jt,N={start:xt()+_,b:u};u||(N.group=$,$.r+=1),o||l?l=N:(x&&(f(),a=nt(t,r,u,p,_,y,x)),u&&g(0,1),o=d(N,p),z(()=>J(t,u,"start")),vt(v=>{if(l&&v>l.start&&(o=d(l,p),l=null,J(t,o.b,"start"),x&&(f(),a=nt(t,r,o.b,o.duration,0,y,c.css))),o){if(v>=o.end)g(r=o.b,1-r),J(t,o.b,"end"),l||(o.b?f():--o.group.r||T(o.group.c)),o=null;else if(v>=o.start){const H=v-o.start;r=o.a+o.d*y(H/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(u){F(c)?Gt().then(()=>{c=c(s),h(u)}):h(u)},end(){f(),o=l=null}}}function je(t,e){It(t,1,1,()=>{e.delete(t.key)})}function qe(t,e,n,i,s,c,r,o,l,a,f,d){let h=t.length,u=c.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,x=new Map,N=[];for(_=u;_--;){const m=d(s,c,_),b=n(m);let w=r.get(b);w?i&&N.push(()=>w.p(m,e)):(w=a(b,m),w.c()),g.set(b,y[_]=w),b in p&&x.set(b,Math.abs(_-p[b]))}const v=new Set,H=new Set;function G(m){gt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,u--}for(;h&&u;){const m=y[u-1],b=t[h-1],w=m.key,j=b.key;m===b?(f=m.first,h--,u--):g.has(j)?!r.has(w)||v.has(w)?G(m):H.has(j)?h--:x.get(w)>x.get(j)?(H.add(w),G(m)):(v.add(j),h--):(l(b,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||l(m,r)}for(;u;)G(y[u-1]);return T(N),y}const Kt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Kt];function Oe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Re(t){t&&t.c()}function Be(t,e){t&&t.l(e)}function Qt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(st).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),c.forEach(z)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(A.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ze(t,e,n,i,s,c,r,o=[-1]){const l=P;D(t);const a=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&s(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),f&&Vt(t,d)),h}):[],a.update(),f=!0,T(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Tt();const d=Ht(e.target);a.fragment&&a.fragment.l(d),d.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),Nt(),yt()}D(l)}class Fe{$destroy(){Ut(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Te as $,Qt as A,Ut as B,ut as C,ge as D,Dt as E,E as F,Zt as G,bt as H,ae as I,ee as J,ie as K,se as L,ne as M,oe as N,wt as O,re as P,_e as Q,Se as R,Fe as S,te as T,Me as U,Et as V,ce as W,z as X,He as Y,T as Z,et as _,fe as a,we as a0,le as a1,Ee as a2,ue as a3,xe as a4,he as a5,F as a6,Oe as a7,De as a8,me as a9,Yt as aa,qe as ab,je as ac,Pt as b,be as c,It as d,de as e,Pe as f,gt as g,L as h,ze as i,Ae as j,V as k,ye as l,Ht as m,pe as n,ke as o,ve as p,X as q,jt as r,Xt as s,Ce as t,$e as u,Le as v,it as w,Ne as x,Re as y,Be as z};
