function g(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function S(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t,n,e){t.$$.on_destroy.push(v(n,e))}function P(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function C(t,n,e,o,c,l){if(c){const f=y(n,e,o,l);t.p(f,c)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function I(t){return t&&E(t.destroy)?t.destroy:g}let i;function d(t){i=t}function m(){if(!i)throw new Error("Function called outside component initialization");return i}function J(t){m().$$.on_mount.push(t)}function K(t){m().$$.after_update.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],p=[];let s=[];const b=[],k=Promise.resolve();let h=!1;function O(){h||(h=!0,k.then(z))}function N(){return O(),k}function q(t){s.push(t)}const _=new Set;let r=0;function z(){if(r!==0)return;const t=i;do{try{for(;r<a.length;){const n=a[r];r++,d(n),M(n.$$)}}catch(n){throw a.length=0,r=0,n}for(d(null),a.length=0,r=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(a.length);for(;b.length;)b.pop()();h=!1,_.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function Q(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{a as A,O as B,K as a,p as b,P as c,U as d,F as e,H as f,D as g,x as h,G as i,L as j,I as k,E as l,S as m,g as n,J as o,z as p,B as q,j as r,A as s,N as t,C as u,q as v,Q as w,i as x,d as y,w as z};
