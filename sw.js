if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7ce2238d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-legacy.11c63f61.js",revision:"dc365f55982fe3519f320795a4d9e230"},{url:"assets/index.370ff28b.js",revision:"a72b46eef2f4b6796da60ced6155cd2c"},{url:"assets/index.5fe6a390.css",revision:"9f559fe0c7946ec055e7df9f491d7f83"},{url:"assets/polyfills-legacy.8bb78a7e.js",revision:"e91ed5b80a60b638bc15cddb5f47447b"},{url:"assets/vendor-legacy.56caf0de.js",revision:"2b48f1492a55093cfd75359eb87fb2d2"},{url:"assets/vendor.a05bf8d7.js",revision:"9cd618e140b7d969f51f73dc1427d7cd"},{url:"google693fb13de7a3ca39.html",revision:"bce4febdce55796900fcae2655654209"},{url:"index.html",revision:"2ff98055c1c3a1dda8747e64a663fb17"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"58d21f924e9a98f758fcca05409734c9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));