var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,c=(e,c)=>{for(var l in c||(c={}))n.call(c,l)&&r(e,l,c[l]);if(t)for(var l of t(c))o.call(c,l)&&r(e,l,c[l]);return e};function l(){}function i(e,t){for(const n in t)e[n]=t[n];return e}function a(e){return e()}function d(){return Object.create(null)}function u(e){e.forEach(a)}function s(e){return"function"==typeof e}function p(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let m,f;function h(e,t){return m||(m=document.createElement("a")),m.href=t,e===m.href}function g(e,...t){if(null==e)return l;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function y(e,t,n){e.$$.on_destroy.push(g(t,n))}function b(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function x(){return k(" ")}function _(){return k("")}function T(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function L(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)null==t[o]?e.removeAttribute(o):"style"===o?e.style.cssText=t[o]:"__value"===o?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:S(e,o,t[o])}function E(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function O(e,t,n){e.classList[n?"add":"remove"](t)}class j{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}function C(e){f=e}function P(){if(!f)throw new Error("Function called outside component initialization");return f}function D(){const e=P();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(t,n);o.slice().forEach((t=>{t.call(e,r)}))}}}function M(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const I=[],J=[],G=[],z=[],U=Promise.resolve();let H=!1;function V(e){G.push(e)}function q(e){z.push(e)}let B=!1;const F=new Set;function R(){if(!B){B=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];C(t),W(t.$$)}for(C(null),I.length=0;J.length;)J.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];F.has(t)||(F.add(t),t())}G.length=0}while(I.length);for(;z.length;)z.pop()();H=!1,B=!1,F.clear()}}function W(e){if(null!==e.fragment){e.update(),u(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const K=new Set;let Q;function X(){Q={r:0,c:[],p:Q}}function Y(){Q.r||u(Q.c),Q=Q.p}function Z(e,t){e&&e.i&&(K.delete(e),e.i(t))}function ee(e,t,n,o){if(e&&e.o){if(K.has(e))return;K.add(e),Q.c.push((()=>{K.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const te="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ne(e,t){const n={},o={},r={$$scope:1};let c=e.length;for(;c--;){const l=e[c],i=t[c];if(i){for(const e in l)e in i||(o[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[c]=i}else for(const e in l)r[e]=1}for(const l in o)l in n||(n[l]=void 0);return n}function oe(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function re(e){e&&e.c()}function ce(e,t,n,o){const{fragment:r,on_mount:c,on_destroy:l,after_update:i}=e.$$;r&&r.m(t,n),o||V((()=>{const t=c.map(a).filter(s);l?l.push(...t):u(t),e.$$.on_mount=[]})),i.forEach(V)}function le(e,t){const n=e.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){-1===e.$$.dirty[0]&&(I.push(e),H||(H=!0,U.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,o,r,c,i,a=[-1]){const s=f;C(e);const p=e.$$={fragment:null,ctx:null,props:c,update:l,not_equal:r,bound:d(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:t.context||[]),callbacks:d(),dirty:a,skip_bound:!1,root:t.target||s.$$.root};i&&i(p.root);let m=!1;if(p.ctx=n?n(e,t.props||{},((t,n,...o)=>{const c=o.length?o[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),m&&ie(e,t)),n})):[],p.update(),m=!0,u(p.before_update),p.fragment=!!o&&o(p.ctx),t.target){if(t.hydrate){const e=(h=t.target,Array.from(h.childNodes));p.fragment&&p.fragment.l(e),e.forEach(N)}else p.fragment&&p.fragment.c();t.intro&&Z(e.$$.fragment),ce(e,t.target,t.anchor,t.customElement),R()}var h;C(s)}class de{$destroy(){le(this,1),this.$destroy=l}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ue(e){let t,n,o,r,c;return{c(){t=w("button"),n=w("span"),n.innerHTML='<span class="hamburger-inner"></span>',S(n,"class","hamburger-box"),S(t,"class",o="hamburger hamburger--"+e[1]+" "+(e[0]&&"is-active"))},m(o,l){v(o,t,l),b(t,n),r||(c=[T(t,"click",e[2]),T(t,"click",e[3])],r=!0)},p(e,[n]){3&n&&o!==(o="hamburger hamburger--"+e[1]+" "+(e[0]&&"is-active"))&&S(t,"class",o)},i:l,o:l,d(e){e&&N(t),r=!1,u(c)}}}function se(e,t,n){let{open:o}=t,{type:r="spin"}=t;return e.$$set=e=>{"open"in e&&n(0,o=e.open),"type"in e&&n(1,r=e.type)},[o,r,function(t){M.call(this,e,t)},()=>n(0,o=!o)]}class pe extends de{constructor(e){super(),ae(this,e,se,ue,p,{open:0,type:1})}}function me(e,t,n){let{theme:o="dark"}=t,{key:r="theme"}=t;const c={dark:"dark",light:"light"},l=D(),i=e=>e in c,a=e=>n(0,o=e.matches?c.dark:c.light);var d;return d=()=>{const e=matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem(r);return i(t)?n(0,o=t):n(0,o=e.matches?c.dark:c.light),e.addEventListener("change",a),()=>{e.removeEventListener("change",a)}},P().$$.on_mount.push(d),function(e){P().$$.after_update.push(e)}((()=>{i(o)&&(l("change",o),localStorage.setItem(r,o))})),e.$$set=e=>{"theme"in e&&n(0,o=e.theme),"key"in e&&n(1,r=e.key)},[o,r]}class fe extends de{constructor(e){super(),ae(this,e,me,null,p,{theme:0,key:1})}}const he=[];function ge(e,t=l){let n;const o=new Set;function r(t){if(p(e,t)&&(e=t,n)){const t=!he.length;for(const n of o)n[1](),he.push(n,e);if(t){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(c,i=l){const a=[c,i];return o.add(a),1===o.size&&(n=t(r)||l),c(e),()=>{o.delete(a),0===o.size&&(n(),n=null)}}}}var ye={};function be(e,t){const n="undefined"!=typeof localStorage;function o(e,t){n&&localStorage.setItem(e,JSON.stringify(t))}if(!ye[e]){const r=ge(t,(t=>{const o=n?localStorage.getItem(e):null;if(o&&t(JSON.parse(o)),n){const n=n=>{n.key===e&&t(n.newValue?JSON.parse(n.newValue):null)};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}})),{subscribe:c,set:l}=r;ye[e]={set(t){o(e,t),l(t)},update(t){const n=t(function(e){let t;return g(e,(e=>t=e))(),t}(r));o(e,n),l(n)},subscribe:c}}return ye[e]}function ve(e,t,n){const o=e.slice();return o[15]=t[n],o}function Ne(e,t,n){const o=e.slice();return o[15]=t[n],o}function $e(e,t,n){const o=e.slice();return o[20]=t[n],o}function we(e,t,n){const o=e.slice();return o[23]=t[n],o}function ke(e,t,n){const o=e.slice();return o[15]=t[n],o}function xe(e,t,n){const o=e.slice();return o[37]=t[n],o}function _e(e,t,n){const o=e.slice();return o[40]=t[n],o}function Te(e,t,n){const o=e.slice();return o[43]=t[n],o}function Se(e,t,n){const o=e.slice();return o[15]=t[n],o}function Le(e,t,n){const o=e.slice();return o[28]=t[n],o}function Ee(e,t,n){const o=e.slice();return o[15]=t[n],o}function Ae(e,t,n){const o=e.slice();return o[28]=t[n],o}function Oe(e,t,n){const o=e.slice();return o[46]=t[n],o}function je(e){return document.title=e[0],{c:l,m:l,d:l}}function Ce(e){let t;return{c(){t=w("meta"),S(t,"name","description"),S(t,"content",e[3])},m(e,n){v(e,t,n)},p(e,n){8&n[0]&&S(t,"content",e[3])},d(e){e&&N(t)}}}function Pe(e){let t;return{c(){t=w("link"),S(t,"rel","canonical"),S(t,"href",e[9])},m(e,n){v(e,t,n)},p(e,n){512&n[0]&&S(t,"href",e[9])},d(e){e&&N(t)}}}function De(e){let t,n,o;return{c(){t=w("link"),S(t,"rel","alternate"),S(t,"media",n=e[4].media),S(t,"href",o=e[4].href)},m(e,n){v(e,t,n)},p(e,r){16&r[0]&&n!==(n=e[4].media)&&S(t,"media",n),16&r[0]&&o!==(o=e[4].href)&&S(t,"href",o)},d(e){e&&N(t)}}}function Me(e){let t,n=e[5],o=[];for(let r=0;r<n.length;r+=1)o[r]=Ie(Oe(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(32&r[0]){let c;for(n=e[5],c=0;c<n.length;c+=1){const l=Oe(e,n,c);o[c]?o[c].p(l,r):(o[c]=Ie(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function Ie(e){let t,n,o;return{c(){t=w("link"),S(t,"rel","alternate"),S(t,"hreflang",n=e[46].hrefLang),S(t,"href",o=e[46].href)},m(e,n){v(e,t,n)},p(e,r){32&r[0]&&n!==(n=e[46].hrefLang)&&S(t,"hreflang",n),32&r[0]&&o!==(o=e[46].href)&&S(t,"href",o)},d(e){e&&N(t)}}}function Je(e){let t,n,o,r=e[6].cardType&&Ge(e),c=e[6].site&&ze(e),l=e[6].handle&&Ue(e);return{c(){r&&r.c(),t=x(),c&&c.c(),n=x(),l&&l.c(),o=_()},m(e,i){r&&r.m(e,i),v(e,t,i),c&&c.m(e,i),v(e,n,i),l&&l.m(e,i),v(e,o,i)},p(e,i){e[6].cardType?r?r.p(e,i):(r=Ge(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),e[6].site?c?c.p(e,i):(c=ze(e),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),e[6].handle?l?l.p(e,i):(l=Ue(e),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(e){r&&r.d(e),e&&N(t),c&&c.d(e),e&&N(n),l&&l.d(e),e&&N(o)}}}function Ge(e){let t,n;return{c(){t=w("meta"),S(t,"name","twitter:card"),S(t,"content",n=e[6].cardType)},m(e,n){v(e,t,n)},p(e,o){64&o[0]&&n!==(n=e[6].cardType)&&S(t,"content",n)},d(e){e&&N(t)}}}function ze(e){let t,n;return{c(){t=w("meta"),S(t,"name","twitter:site"),S(t,"content",n=e[6].site)},m(e,n){v(e,t,n)},p(e,o){64&o[0]&&n!==(n=e[6].site)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ue(e){let t,n;return{c(){t=w("meta"),S(t,"name","twitter:creator"),S(t,"content",n=e[6].handle)},m(e,n){v(e,t,n)},p(e,o){64&o[0]&&n!==(n=e[6].handle)&&S(t,"content",n)},d(e){e&&N(t)}}}function He(e){let t,n;return{c(){t=w("meta"),S(t,"property","fb:app_id"),S(t,"content",n=e[7].appId)},m(e,n){v(e,t,n)},p(e,o){128&o[0]&&n!==(n=e[7].appId)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ve(e){let t,n,o,r,c,l,i,a,d=(e[8].url||e[9])&&qe(e),u=e[8].type&&Be(e),s=(e[8].title||e[0])&&St(e),p=(e[8].description||e[3])&&Lt(e),m=e[8].images&&e[8].images.length&&Et(e),f=e[8].videos&&e[8].videos.length&&Pt(e),h=e[8].locale&&Ut(e),g=e[8].site_name&&Ht(e);return{c(){d&&d.c(),t=x(),u&&u.c(),n=x(),s&&s.c(),o=x(),p&&p.c(),r=x(),m&&m.c(),c=x(),f&&f.c(),l=x(),h&&h.c(),i=x(),g&&g.c(),a=_()},m(e,y){d&&d.m(e,y),v(e,t,y),u&&u.m(e,y),v(e,n,y),s&&s.m(e,y),v(e,o,y),p&&p.m(e,y),v(e,r,y),m&&m.m(e,y),v(e,c,y),f&&f.m(e,y),v(e,l,y),h&&h.m(e,y),v(e,i,y),g&&g.m(e,y),v(e,a,y)},p(e,y){e[8].url||e[9]?d?d.p(e,y):(d=qe(e),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null),e[8].type?u?u.p(e,y):(u=Be(e),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null),e[8].title||e[0]?s?s.p(e,y):(s=St(e),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),e[8].description||e[3]?p?p.p(e,y):(p=Lt(e),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null),e[8].images&&e[8].images.length?m?m.p(e,y):(m=Et(e),m.c(),m.m(c.parentNode,c)):m&&(m.d(1),m=null),e[8].videos&&e[8].videos.length?f?f.p(e,y):(f=Pt(e),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null),e[8].locale?h?h.p(e,y):(h=Ut(e),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null),e[8].site_name?g?g.p(e,y):(g=Ht(e),g.c(),g.m(a.parentNode,a)):g&&(g.d(1),g=null)},d(e){d&&d.d(e),e&&N(t),u&&u.d(e),e&&N(n),s&&s.d(e),e&&N(o),p&&p.d(e),e&&N(r),m&&m.d(e),e&&N(c),f&&f.d(e),e&&N(l),h&&h.d(e),e&&N(i),g&&g.d(e),e&&N(a)}}}function qe(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:url"),S(t,"content",n=e[8].url||e[9])},m(e,n){v(e,t,n)},p(e,o){768&o[0]&&n!==(n=e[8].url||e[9])&&S(t,"content",n)},d(e){e&&N(t)}}}function Be(e){let t,n,o,r,c,l,i,a;function d(e,t){return(null==r||256&t[0])&&(r=!("profile"!==e[8].type.toLowerCase()||!e[8].profile)),r?Ke:((null==c||256&t[0])&&(c=!("book"!==e[8].type.toLowerCase()||!e[8].book)),c?We:((null==l||256&t[0])&&(l=!("article"!==e[8].type.toLowerCase()||!e[8].article)),l?Re:((null==i||256&t[0])&&(i=!!("video.movie"===e[8].type.toLowerCase()||"video.episode"===e[8].type.toLowerCase()||"video.tv_show"===e[8].type.toLowerCase()||"video.other"===e[8].type.toLowerCase()&&e[8].video)),i?Fe:void 0)))}let u=d(e,[-1,-1]),s=u&&u(e);return{c(){t=w("meta"),o=x(),s&&s.c(),a=_(),S(t,"property","og:type"),S(t,"content",n=e[8].type.toLowerCase())},m(e,n){v(e,t,n),v(e,o,n),s&&s.m(e,n),v(e,a,n)},p(e,o){256&o[0]&&n!==(n=e[8].type.toLowerCase())&&S(t,"content",n),u===(u=d(e,o))&&s?s.p(e,o):(s&&s.d(1),s=u&&u(e),s&&(s.c(),s.m(a.parentNode,a)))},d(e){e&&N(t),e&&N(o),s&&s.d(e),e&&N(a)}}}function Fe(e){let t,n,o,r,c,l,i,a=e[8].video.actors&&e[8].video.actors.length&&Qe(e),d=e[8].video.directors&&e[8].video.directors.length&&et(e),u=e[8].video.writers&&e[8].video.writers.length&&nt(e),s=e[8].video.duration&&rt(e),p=e[8].video.releaseDate&&ct(e),m=e[8].video.tags&&e[8].video.tags.length&&lt(e),f=e[8].video.series&&at(e);return{c(){a&&a.c(),t=x(),d&&d.c(),n=x(),u&&u.c(),o=x(),s&&s.c(),r=x(),p&&p.c(),c=x(),m&&m.c(),l=x(),f&&f.c(),i=_()},m(e,h){a&&a.m(e,h),v(e,t,h),d&&d.m(e,h),v(e,n,h),u&&u.m(e,h),v(e,o,h),s&&s.m(e,h),v(e,r,h),p&&p.m(e,h),v(e,c,h),m&&m.m(e,h),v(e,l,h),f&&f.m(e,h),v(e,i,h)},p(e,h){e[8].video.actors&&e[8].video.actors.length?a?a.p(e,h):(a=Qe(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),e[8].video.directors&&e[8].video.directors.length?d?d.p(e,h):(d=et(e),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null),e[8].video.writers&&e[8].video.writers.length?u?u.p(e,h):(u=nt(e),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),e[8].video.duration?s?s.p(e,h):(s=rt(e),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null),e[8].video.releaseDate?p?p.p(e,h):(p=ct(e),p.c(),p.m(c.parentNode,c)):p&&(p.d(1),p=null),e[8].video.tags&&e[8].video.tags.length?m?m.p(e,h):(m=lt(e),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),e[8].video.series?f?f.p(e,h):(f=at(e),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},d(e){a&&a.d(e),e&&N(t),d&&d.d(e),e&&N(n),u&&u.d(e),e&&N(o),s&&s.d(e),e&&N(r),p&&p.d(e),e&&N(c),m&&m.d(e),e&&N(l),f&&f.d(e),e&&N(i)}}}function Re(e){let t,n,o,r,c,l,i=e[8].article.publishedTime&&dt(e),a=e[8].article.modifiedTime&&ut(e),d=e[8].article.expirationTime&&st(e),u=e[8].article.authors&&e[8].article.authors.length&&pt(e),s=e[8].article.section&&ft(e),p=e[8].article.tags&&e[8].article.tags.length&&ht(e);return{c(){i&&i.c(),t=x(),a&&a.c(),n=x(),d&&d.c(),o=x(),u&&u.c(),r=x(),s&&s.c(),c=x(),p&&p.c(),l=_()},m(e,m){i&&i.m(e,m),v(e,t,m),a&&a.m(e,m),v(e,n,m),d&&d.m(e,m),v(e,o,m),u&&u.m(e,m),v(e,r,m),s&&s.m(e,m),v(e,c,m),p&&p.m(e,m),v(e,l,m)},p(e,m){e[8].article.publishedTime?i?i.p(e,m):(i=dt(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),e[8].article.modifiedTime?a?a.p(e,m):(a=ut(e),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null),e[8].article.expirationTime?d?d.p(e,m):(d=st(e),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),e[8].article.authors&&e[8].article.authors.length?u?u.p(e,m):(u=pt(e),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),e[8].article.section?s?s.p(e,m):(s=ft(e),s.c(),s.m(c.parentNode,c)):s&&(s.d(1),s=null),e[8].article.tags&&e[8].article.tags.length?p?p.p(e,m):(p=ht(e),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},d(e){i&&i.d(e),e&&N(t),a&&a.d(e),e&&N(n),d&&d.d(e),e&&N(o),u&&u.d(e),e&&N(r),s&&s.d(e),e&&N(c),p&&p.d(e),e&&N(l)}}}function We(e){let t,n,o,r,c=e[8].book.authors&&e[8].book.authors.length&&yt(e),l=e[8].book.isbn&&vt(e),i=e[8].book.releaseDate&&Nt(e),a=e[8].book.tags&&e[8].book.tags.length&&$t(e);return{c(){c&&c.c(),t=x(),l&&l.c(),n=x(),i&&i.c(),o=x(),a&&a.c(),r=_()},m(e,d){c&&c.m(e,d),v(e,t,d),l&&l.m(e,d),v(e,n,d),i&&i.m(e,d),v(e,o,d),a&&a.m(e,d),v(e,r,d)},p(e,d){e[8].book.authors&&e[8].book.authors.length?c?c.p(e,d):(c=yt(e),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),e[8].book.isbn?l?l.p(e,d):(l=vt(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),e[8].book.releaseDate?i?i.p(e,d):(i=Nt(e),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null),e[8].book.tags&&e[8].book.tags.length?a?a.p(e,d):(a=$t(e),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},d(e){c&&c.d(e),e&&N(t),l&&l.d(e),e&&N(n),i&&i.d(e),e&&N(o),a&&a.d(e),e&&N(r)}}}function Ke(e){let t,n,o,r,c=e[8].profile.firstName&&kt(e),l=e[8].profile.lastName&&xt(e),i=e[8].profile.username&&_t(e),a=e[8].profile.gender&&Tt(e);return{c(){c&&c.c(),t=x(),l&&l.c(),n=x(),i&&i.c(),o=x(),a&&a.c(),r=_()},m(e,d){c&&c.m(e,d),v(e,t,d),l&&l.m(e,d),v(e,n,d),i&&i.m(e,d),v(e,o,d),a&&a.m(e,d),v(e,r,d)},p(e,d){e[8].profile.firstName?c?c.p(e,d):(c=kt(e),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),e[8].profile.lastName?l?l.p(e,d):(l=xt(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),e[8].profile.username?i?i.p(e,d):(i=_t(e),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null),e[8].profile.gender?a?a.p(e,d):(a=Tt(e),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},d(e){c&&c.d(e),e&&N(t),l&&l.d(e),e&&N(n),i&&i.d(e),e&&N(o),a&&a.d(e),e&&N(r)}}}function Qe(e){let t,n=e[8].video.actors,o=[];for(let r=0;r<n.length;r+=1)o[r]=Ze(Te(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].video.actors,c=0;c<n.length;c+=1){const l=Te(e,n,c);o[c]?o[c].p(l,r):(o[c]=Ze(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function Xe(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:actor"),S(t,"content",n=e[43].profile)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[43].profile)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ye(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:actor:role"),S(t,"content",n=e[43].role)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[43].role)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ze(e){let t,n,o=e[43].profile&&Xe(e),r=e[43].role&&Ye(e);return{c(){o&&o.c(),t=x(),r&&r.c(),n=_()},m(e,c){o&&o.m(e,c),v(e,t,c),r&&r.m(e,c),v(e,n,c)},p(e,c){e[43].profile?o?o.p(e,c):(o=Xe(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),e[43].role?r?r.p(e,c):(r=Ye(e),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(e){o&&o.d(e),e&&N(t),r&&r.d(e),e&&N(n)}}}function et(e){let t,n=e[8].video.directors,o=[];for(let r=0;r<n.length;r+=1)o[r]=tt(_e(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].video.directors,c=0;c<n.length;c+=1){const l=_e(e,n,c);o[c]?o[c].p(l,r):(o[c]=tt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function tt(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:director"),S(t,"content",n=e[40])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[40])&&S(t,"content",n)},d(e){e&&N(t)}}}function nt(e){let t,n=e[8].video.writers,o=[];for(let r=0;r<n.length;r+=1)o[r]=ot(xe(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].video.writers,c=0;c<n.length;c+=1){const l=xe(e,n,c);o[c]?o[c].p(l,r):(o[c]=ot(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function ot(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:writer"),S(t,"content",n=e[37])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[37])&&S(t,"content",n)},d(e){e&&N(t)}}}function rt(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:duration"),S(t,"content",n=e[8].video.duration.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].video.duration.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function ct(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:release_date"),S(t,"content",n=e[8].video.releaseDate)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].video.releaseDate)&&S(t,"content",n)},d(e){e&&N(t)}}}function lt(e){let t,n=e[8].video.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=it(ke(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].video.tags,c=0;c<n.length;c+=1){const l=ke(e,n,c);o[c]?o[c].p(l,r):(o[c]=it(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function it(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:tag"),S(t,"content",n=e[15])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[15])&&S(t,"content",n)},d(e){e&&N(t)}}}function at(e){let t,n;return{c(){t=w("meta"),S(t,"property","video:series"),S(t,"content",n=e[8].video.series)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].video.series)&&S(t,"content",n)},d(e){e&&N(t)}}}function dt(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:published_time"),S(t,"content",n=e[8].article.publishedTime)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].article.publishedTime)&&S(t,"content",n)},d(e){e&&N(t)}}}function ut(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:modified_time"),S(t,"content",n=e[8].article.modifiedTime)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].article.modifiedTime)&&S(t,"content",n)},d(e){e&&N(t)}}}function st(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:expiration_time"),S(t,"content",n=e[8].article.expirationTime)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].article.expirationTime)&&S(t,"content",n)},d(e){e&&N(t)}}}function pt(e){let t,n=e[8].article.authors,o=[];for(let r=0;r<n.length;r+=1)o[r]=mt(Le(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].article.authors,c=0;c<n.length;c+=1){const l=Le(e,n,c);o[c]?o[c].p(l,r):(o[c]=mt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function mt(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:author"),S(t,"content",n=e[28])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[28])&&S(t,"content",n)},d(e){e&&N(t)}}}function ft(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:section"),S(t,"content",n=e[8].article.section)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].article.section)&&S(t,"content",n)},d(e){e&&N(t)}}}function ht(e){let t,n=e[8].article.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=gt(Se(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].article.tags,c=0;c<n.length;c+=1){const l=Se(e,n,c);o[c]?o[c].p(l,r):(o[c]=gt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function gt(e){let t,n;return{c(){t=w("meta"),S(t,"property","article:tag"),S(t,"content",n=e[15])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[15])&&S(t,"content",n)},d(e){e&&N(t)}}}function yt(e){let t,n=e[8].book.authors,o=[];for(let r=0;r<n.length;r+=1)o[r]=bt(Ae(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].book.authors,c=0;c<n.length;c+=1){const l=Ae(e,n,c);o[c]?o[c].p(l,r):(o[c]=bt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function bt(e){let t,n;return{c(){t=w("meta"),S(t,"property","book:author"),S(t,"content",n=e[28])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[28])&&S(t,"content",n)},d(e){e&&N(t)}}}function vt(e){let t,n;return{c(){t=w("meta"),S(t,"property","book:isbn"),S(t,"content",n=e[8].book.isbn)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].book.isbn)&&S(t,"content",n)},d(e){e&&N(t)}}}function Nt(e){let t,n;return{c(){t=w("meta"),S(t,"property","book:release_date"),S(t,"content",n=e[8].book.releaseDate)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].book.releaseDate)&&S(t,"content",n)},d(e){e&&N(t)}}}function $t(e){let t,n=e[8].book.tags,o=[];for(let r=0;r<n.length;r+=1)o[r]=wt(Ee(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].book.tags,c=0;c<n.length;c+=1){const l=Ee(e,n,c);o[c]?o[c].p(l,r):(o[c]=wt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function wt(e){let t,n;return{c(){t=w("meta"),S(t,"property","book:tag"),S(t,"content",n=e[15])},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[15])&&S(t,"content",n)},d(e){e&&N(t)}}}function kt(e){let t,n;return{c(){t=w("meta"),S(t,"property","profile:first_name"),S(t,"content",n=e[8].profile.firstName)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].profile.firstName)&&S(t,"content",n)},d(e){e&&N(t)}}}function xt(e){let t,n;return{c(){t=w("meta"),S(t,"property","profile:last_name"),S(t,"content",n=e[8].profile.lastName)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].profile.lastName)&&S(t,"content",n)},d(e){e&&N(t)}}}function _t(e){let t,n;return{c(){t=w("meta"),S(t,"property","profile:username"),S(t,"content",n=e[8].profile.username)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].profile.username)&&S(t,"content",n)},d(e){e&&N(t)}}}function Tt(e){let t,n;return{c(){t=w("meta"),S(t,"property","profile:gender"),S(t,"content",n=e[8].profile.gender)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].profile.gender)&&S(t,"content",n)},d(e){e&&N(t)}}}function St(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:title"),S(t,"content",n=e[8].title||e[0])},m(e,n){v(e,t,n)},p(e,o){257&o[0]&&n!==(n=e[8].title||e[0])&&S(t,"content",n)},d(e){e&&N(t)}}}function Lt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:description"),S(t,"content",n=e[8].description||e[3])},m(e,n){v(e,t,n)},p(e,o){264&o[0]&&n!==(n=e[8].description||e[3])&&S(t,"content",n)},d(e){e&&N(t)}}}function Et(e){let t,n=e[8].images,o=[];for(let r=0;r<n.length;r+=1)o[r]=Ct(we(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].images,c=0;c<n.length;c+=1){const l=we(e,n,c);o[c]?o[c].p(l,r):(o[c]=Ct(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function At(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:image:alt"),S(t,"content",n=e[23].alt)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[23].alt)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ot(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:image:width"),S(t,"content",n=e[23].width.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[23].width.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function jt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:image:height"),S(t,"content",n=e[23].height.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[23].height.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function Ct(e){let t,n,o,r,c,l,i=e[23].alt&&At(e),a=e[23].width&&Ot(e),d=e[23].height&&jt(e);return{c(){t=w("meta"),o=x(),i&&i.c(),r=x(),a&&a.c(),c=x(),d&&d.c(),l=_(),S(t,"property","og:image"),S(t,"content",n=e[23].url)},m(e,n){v(e,t,n),v(e,o,n),i&&i.m(e,n),v(e,r,n),a&&a.m(e,n),v(e,c,n),d&&d.m(e,n),v(e,l,n)},p(e,o){256&o[0]&&n!==(n=e[23].url)&&S(t,"content",n),e[23].alt?i?i.p(e,o):(i=At(e),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null),e[23].width?a?a.p(e,o):(a=Ot(e),a.c(),a.m(c.parentNode,c)):a&&(a.d(1),a=null),e[23].height?d?d.p(e,o):(d=jt(e),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null)},d(e){e&&N(t),e&&N(o),i&&i.d(e),e&&N(r),a&&a.d(e),e&&N(c),d&&d.d(e),e&&N(l)}}}function Pt(e){let t,n=e[8].videos,o=[];for(let r=0;r<n.length;r+=1)o[r]=zt($e(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(256&r[0]){let c;for(n=e[8].videos,c=0;c<n.length;c+=1){const l=$e(e,n,c);o[c]?o[c].p(l,r):(o[c]=zt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function Dt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:video:alt"),S(t,"content",n=e[20].alt)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[20].alt)&&S(t,"content",n)},d(e){e&&N(t)}}}function Mt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:video:width"),S(t,"content",n=e[20].width.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[20].width.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function It(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:video:height"),S(t,"content",n=e[20].height.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[20].height.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function Jt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:video:secure_url"),S(t,"content",n=e[20].secureUrl.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[20].secureUrl.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function Gt(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:video:type"),S(t,"content",n=e[20].type.toString())},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[20].type.toString())&&S(t,"content",n)},d(e){e&&N(t)}}}function zt(e){let t,n,o,r,c,l,i,a,d=e[20].alt&&Dt(e),u=e[20].width&&Mt(e),s=e[20].height&&It(e),p=e[20].secureUrl&&Jt(e),m=e[20].type&&Gt(e);return{c(){t=w("meta"),o=x(),d&&d.c(),r=x(),u&&u.c(),c=x(),s&&s.c(),l=x(),p&&p.c(),i=x(),m&&m.c(),a=_(),S(t,"property","og:video"),S(t,"content",n=e[20].url)},m(e,n){v(e,t,n),v(e,o,n),d&&d.m(e,n),v(e,r,n),u&&u.m(e,n),v(e,c,n),s&&s.m(e,n),v(e,l,n),p&&p.m(e,n),v(e,i,n),m&&m.m(e,n),v(e,a,n)},p(e,o){256&o[0]&&n!==(n=e[20].url)&&S(t,"content",n),e[20].alt?d?d.p(e,o):(d=Dt(e),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null),e[20].width?u?u.p(e,o):(u=Mt(e),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null),e[20].height?s?s.p(e,o):(s=It(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),e[20].secureUrl?p?p.p(e,o):(p=Jt(e),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null),e[20].type?m?m.p(e,o):(m=Gt(e),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},d(e){e&&N(t),e&&N(o),d&&d.d(e),e&&N(r),u&&u.d(e),e&&N(c),s&&s.d(e),e&&N(l),p&&p.d(e),e&&N(i),m&&m.d(e),e&&N(a)}}}function Ut(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:locale"),S(t,"content",n=e[8].locale)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].locale)&&S(t,"content",n)},d(e){e&&N(t)}}}function Ht(e){let t,n;return{c(){t=w("meta"),S(t,"property","og:site_name"),S(t,"content",n=e[8].site_name)},m(e,n){v(e,t,n)},p(e,o){256&o[0]&&n!==(n=e[8].site_name)&&S(t,"content",n)},d(e){e&&N(t)}}}function Vt(e){let t,n=e[10],o=[];for(let r=0;r<n.length;r+=1)o[r]=qt(Ne(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(1024&r[0]){let c;for(n=e[10],c=0;c<n.length;c+=1){const l=Ne(e,n,c);o[c]?o[c].p(l,r):(o[c]=qt(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function qt(e){let t,n=[e[15]],o={};for(let r=0;r<n.length;r+=1)o=i(o,n[r]);return{c(){t=w("meta"),L(t,o)},m(e,n){v(e,t,n)},p(e,r){L(t,o=ne(n,[1024&r[0]&&e[15]]))},d(e){e&&N(t)}}}function Bt(e){let t,n=e[11],o=[];for(let r=0;r<n.length;r+=1)o[r]=Ft(ve(e,n,r));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=_()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);v(e,t,n)},p(e,r){if(2048&r[0]){let c;for(n=e[11],c=0;c<n.length;c+=1){const l=ve(e,n,c);o[c]?o[c].p(l,r):(o[c]=Ft(l),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(e){$(o,e),e&&N(t)}}}function Ft(e){let t,n=[e[15]],o={};for(let r=0;r<n.length;r+=1)o=i(o,n[r]);return{c(){t=w("link"),L(t,o)},m(e,n){v(e,t,n)},p(e,r){L(t,o=ne(n,[2048&r[0]&&e[15]]))},d(e){e&&N(t)}}}function Rt(e){let t,n,o=`<script type="application/ld+json">${JSON.stringify(c({"@context":"https://schema.org"},e[12]))+"<"}/script>`;return{c(){t=new j,n=_(),t.a=n},m(e,r){t.m(o,e,r),v(e,n,r)},p(e,n){4096&n[0]&&o!==(o=`<script type="application/ld+json">${JSON.stringify(c({"@context":"https://schema.org"},e[12]))+"<"}/script>`)&&t.p(o)},d(e){e&&N(n),e&&t.d()}}}function Wt(e){var t;let n,o,r,c,i,a,d,u,s,p,m,f,h,g,y=e[0]&&je(e),v=e[3]&&Ce(e),$=e[9]&&Pe(e),k=e[4]&&De(e),x=e[5]&&e[5].length>0&&Me(e),T=e[6]&&Je(e),L=e[7]&&He(e),E=e[8]&&Ve(e),A=e[10]&&e[10].length>0&&Vt(e),O=(null==(t=e[11])?void 0:t.length)&&Bt(e),j=e[12]&&Rt(e);return{c(){y&&y.c(),n=w("meta"),r=w("meta"),v&&v.c(),i=_(),$&&$.c(),a=_(),k&&k.c(),d=_(),x&&x.c(),u=_(),T&&T.c(),s=_(),L&&L.c(),p=_(),E&&E.c(),m=_(),A&&A.c(),f=_(),O&&O.c(),h=_(),j&&j.c(),g=_(),S(n,"name","robots"),S(n,"content",o=`${e[1]?"noindex":"index"},${e[2]?"nofollow":"follow"}${e[13]}`),S(r,"name","googlebot"),S(r,"content",c=`${e[1]?"noindex":"index"},${e[2]?"nofollow":"follow"}${e[13]}`)},m(e,t){y&&y.m(document.head,null),b(document.head,n),b(document.head,r),v&&v.m(document.head,null),b(document.head,i),$&&$.m(document.head,null),b(document.head,a),k&&k.m(document.head,null),b(document.head,d),x&&x.m(document.head,null),b(document.head,u),T&&T.m(document.head,null),b(document.head,s),L&&L.m(document.head,null),b(document.head,p),E&&E.m(document.head,null),b(document.head,m),A&&A.m(document.head,null),b(document.head,f),O&&O.m(document.head,null),b(document.head,h),j&&j.m(document.head,null),b(document.head,g)},p(e,t){var l;e[0]?y||(y=je(e),y.c(),y.m(n.parentNode,n)):y&&(y.d(1),y=null),8198&t[0]&&o!==(o=`${e[1]?"noindex":"index"},${e[2]?"nofollow":"follow"}${e[13]}`)&&S(n,"content",o),8198&t[0]&&c!==(c=`${e[1]?"noindex":"index"},${e[2]?"nofollow":"follow"}${e[13]}`)&&S(r,"content",c),e[3]?v?v.p(e,t):(v=Ce(e),v.c(),v.m(i.parentNode,i)):v&&(v.d(1),v=null),e[9]?$?$.p(e,t):($=Pe(e),$.c(),$.m(a.parentNode,a)):$&&($.d(1),$=null),e[4]?k?k.p(e,t):(k=De(e),k.c(),k.m(d.parentNode,d)):k&&(k.d(1),k=null),e[5]&&e[5].length>0?x?x.p(e,t):(x=Me(e),x.c(),x.m(u.parentNode,u)):x&&(x.d(1),x=null),e[6]?T?T.p(e,t):(T=Je(e),T.c(),T.m(s.parentNode,s)):T&&(T.d(1),T=null),e[7]?L?L.p(e,t):(L=He(e),L.c(),L.m(p.parentNode,p)):L&&(L.d(1),L=null),e[8]?E?E.p(e,t):(E=Ve(e),E.c(),E.m(m.parentNode,m)):E&&(E.d(1),E=null),e[10]&&e[10].length>0?A?A.p(e,t):(A=Vt(e),A.c(),A.m(f.parentNode,f)):A&&(A.d(1),A=null),(null==(l=e[11])?void 0:l.length)?O?O.p(e,t):(O=Bt(e),O.c(),O.m(h.parentNode,h)):O&&(O.d(1),O=null),e[12]?j?j.p(e,t):(j=Rt(e),j.c(),j.m(g.parentNode,g)):j&&(j.d(1),j=null)},i:l,o:l,d(e){y&&y.d(e),N(n),N(r),v&&v.d(e),N(i),$&&$.d(e),N(a),k&&k.d(e),N(d),x&&x.d(e),N(u),T&&T.d(e),N(s),L&&L.d(e),N(p),E&&E.d(e),N(m),A&&A.d(e),N(f),O&&O.d(e),N(h),j&&j.d(e),N(g)}}}function Kt(e,t,n){let{title:o}=t,{noindex:r=!1}=t,{nofollow:c=!1}=t,{robotsProps:l}=t,{description:i}=t,{mobileAlternate:a}=t,{languageAlternates:d}=t,{twitter:u}=t,{facebook:s}=t,{openGraph:p}=t,{canonical:m}=t,{additionalMetaTags:f}=t,{additionalLinkTags:h}=t,{jsonLd:g}=t,y="";if(l){const{nosnippet:e,maxSnippet:t,maxImagePreview:n,maxVideoPreview:o,noarchive:r,noimageindex:c,notranslate:i,unavailableAfter:a}=l;y=`${e?",nosnippet":""}${t?`,max-snippet:${t}`:""}${n?`,max-image-preview:${n}`:""}${r?",noarchive":""}${a?`,unavailable_after:${a}`:""}${c?",noimageindex":""}${o?`,max-video-preview:${o}`:""}${i?",notranslate":""}`}return void 0!==g&&console.warn("[WARNING]: JSON-LD will soon be completely separated from the <MetaTags/> component and will no longer work. Please import and use `JsonLd`."),e.$$set=e=>{"title"in e&&n(0,o=e.title),"noindex"in e&&n(1,r=e.noindex),"nofollow"in e&&n(2,c=e.nofollow),"robotsProps"in e&&n(14,l=e.robotsProps),"description"in e&&n(3,i=e.description),"mobileAlternate"in e&&n(4,a=e.mobileAlternate),"languageAlternates"in e&&n(5,d=e.languageAlternates),"twitter"in e&&n(6,u=e.twitter),"facebook"in e&&n(7,s=e.facebook),"openGraph"in e&&n(8,p=e.openGraph),"canonical"in e&&n(9,m=e.canonical),"additionalMetaTags"in e&&n(10,f=e.additionalMetaTags),"additionalLinkTags"in e&&n(11,h=e.additionalLinkTags),"jsonLd"in e&&n(12,g=e.jsonLd)},[o,r,c,i,a,d,u,s,p,m,f,h,g,y,l]}class Qt extends de{constructor(e){super(),ae(this,e,Kt,Wt,p,{title:0,noindex:1,nofollow:2,robotsProps:14,description:3,mobileAlternate:4,languageAlternates:5,twitter:6,facebook:7,openGraph:8,canonical:9,additionalMetaTags:10,additionalLinkTags:11,jsonLd:12},null,[-1,-1])}}export{Y as A,$ as B,_ as C,fe as D,O as E,u as F,te as G,pe as H,Qt as M,de as S,S as a,v as b,J as c,N as d,w as e,oe as f,re as g,x as h,ae as i,b as j,q as k,T as l,ce as m,l as n,ee as o,le as p,k as q,A as r,p as s,Z as t,h as u,E as v,be as w,ge as x,y,X as z};