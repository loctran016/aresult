if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7ce2238d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-legacy.abd5d049.js",revision:"1409a05450653f0282d304ae7c8af32a"},{url:"assets/index.a10317e4.js",revision:"38d08d25c182a172e20c19511dbacb09"},{url:"assets/index.b579e710.css",revision:"a570698ef0442fde94b537a1b59c6664"},{url:"assets/polyfills-legacy.8bb78a7e.js",revision:"e91ed5b80a60b638bc15cddb5f47447b"},{url:"assets/vendor-legacy.02398a8c.js",revision:"97b9391657dbc04d5e5ff2caba95cf6f"},{url:"assets/vendor.ea609eec.js",revision:"ef33514754fb7ae2ab42d153865e6a31"},{url:"google693fb13de7a3ca39.html",revision:"bce4febdce55796900fcae2655654209"},{url:"index.html",revision:"6f369ee97fc9a9cc8d9e60144717ea66"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"58d21f924e9a98f758fcca05409734c9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));