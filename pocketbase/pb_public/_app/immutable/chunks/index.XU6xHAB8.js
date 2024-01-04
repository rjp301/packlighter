import{r as h,n as y,m as w,p as S,l as N,q as j,v,w as C,x as O,y as b,z as B,A as I,B as L}from"./scheduler.c5sfA243.js";let $=!1;function P(){$=!0}function T(){$=!1}function q(e,t,n,i){for(;e<t;){const a=e+(t-e>>1);n(a)<=i?e=a+1:t=a}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let a=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(a>0&&t[n[a]].claim_order<=s?a+1:q(1,a,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,a=Math.max(u,a)}const f=[],l=[];let c=t.length-1;for(let r=n[a]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);c>=r;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<f.length&&l[r].claim_order>=f[s].claim_order;)s++;const o=s<f.length?f[s]:null;e.insertBefore(l[r],o)}}function D(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?D(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function ne(){return p(" ")}function ie(){return p("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function A(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const R=["width","height"];function U(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&R.indexOf(i)===-1?e[i]=t[i]:A(e,i,t[i])}function V(e,t){Object.keys(t).forEach(n=>{W(e,n,t[n])})}function W(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:A(e,t,n)}function se(e){return/-/.test(e)?V:U}function le(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,a=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function J(e,t,n,i){return E(e,a=>a.nodeName===t,a=>{const f=[];for(let l=0;l<a.attributes.length;l++){const c=a.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>a.removeAttribute(l))},()=>i(t))}function ae(e,t,n){return J(e,t,n,M)}function K(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>p(t),!0)}function ce(e){return K(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ue(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function oe(e,t){return new e(t)}const m=new Set;let _;function _e(){_={r:0,c:[],p:_}}function de(){_.r||h(_.c),_=_.p}function Q(e,t){e&&e.i&&(m.delete(e),e.i(t))}function me(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),v(()=>{const f=e.$$.on_mount.map(B).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),a.forEach(v)}function Y(e,t){const n=e.$$;n.fragment!==null&&(C(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(I.push(e),L(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,i,a,f,l=null,c=[-1]){const r=O;b(e);const s=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:a,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};l&&l(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(u,d,...x)=>{const g=x.length?x[0]:d;return s.ctx&&a(s.ctx[u],s.ctx[u]=g)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](g),o&&Z(e,u)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){P();const u=F(t.target);s.fragment&&s.fragment.l(u),u.forEach(H)}else s.fragment&&s.fragment.c();t.intro&&Q(e.$$.fragment),X(e,t.target,t.anchor),T(),S()}b(r)}class pe{$$=void 0;$$set=void 0;$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!N(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{le as A,pe as S,te as a,de as b,ce as c,Q as d,ie as e,H as f,M as g,ae as h,ye as i,F as j,A as k,ue as l,p as m,K as n,fe as o,_e as p,oe as q,he as r,ne as s,me as t,$e as u,X as v,Y as w,D as x,se as y,re as z};
