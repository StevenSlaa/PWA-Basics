if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const p=e||("document"in self?document.currentScript.src:"")||location.href;if(s[p])return;let o={};const l=e=>a(e,p),r={module:{uri:p},exports:o,require:l};s[p]=Promise.all(i.map((e=>r[e]||l(e)))).then((e=>(c(...e),o)))}}define(["./workbox-72b3af16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/styles/app.css",revision:"973177cd57f7c47d12f4b26eb58d6e15"},{url:"docs/images/Application Menu.png",revision:"6ba4fc9bcb8aa4d1894dc3e48552c75e"},{url:"docs/images/Chrome Port-forwarding.png",revision:"6d92dc86fcd431d5a03ea21c14d3cd40"},{url:"docs/images/Lighouse Categories.png",revision:"fd1a9e74952f276f7a05649b989ac5de"},{url:"docs/images/Live Server Extension.png",revision:"af2ea20f77d29ac3b5ad33423b3d700e"},{url:"docs/images/logo.png",revision:"bbedb234d84686e7b37068a9786e5f8f"},{url:"docs/images/screenshot.jpg",revision:"ebe8bdbe953a0a2c964e9a450fed2efb"},{url:"docs/images/Tutorial Logo.png",revision:"c8f4353523bdc7d73bee7a13738f9dc5"},{url:"favicon.ico",revision:"c0791f4171c0600f4947b6224ff31884"},{url:"icons/apple-icon-180.png",revision:"df01347cd4abcd35f699a94fdeda352f"},{url:"icons/apple-splash-1125-2436.jpg",revision:"efc2579337ed2a003e4d2b385c1ddd24"},{url:"icons/apple-splash-1136-640.jpg",revision:"d5445c0aaf789529ef60c1f4b2cb7797"},{url:"icons/apple-splash-1170-2532.jpg",revision:"0f1d0d42a36b23867336b34e7fe0dbdf"},{url:"icons/apple-splash-1179-2556.jpg",revision:"efa5ad779ec90f14b80ec7c6f96afa8c"},{url:"icons/apple-splash-1242-2208.jpg",revision:"daa2c0b62f2d85e2652a42d846f7276d"},{url:"icons/apple-splash-1242-2688.jpg",revision:"aa8858e118f86e169ac487f865044f65"},{url:"icons/apple-splash-1284-2778.jpg",revision:"71e3e7f680152f6d73f28a64f65c8c5f"},{url:"icons/apple-splash-1290-2796.jpg",revision:"24539c0bc9bc0dbecf086d0c1215a866"},{url:"icons/apple-splash-1334-750.jpg",revision:"187920a54a552da67b52e7bf9e724537"},{url:"icons/apple-splash-1536-2048.jpg",revision:"39ce2fb8acca969b6dceb1e34fcd20f4"},{url:"icons/apple-splash-1620-2160.jpg",revision:"3e7e17928c4e02d8147350263d7df168"},{url:"icons/apple-splash-1668-2224.jpg",revision:"faf737cdbf9090c5d8b9a973474cec15"},{url:"icons/apple-splash-1668-2388.jpg",revision:"a870c6cf675d9b0140e19b4adbec34ac"},{url:"icons/apple-splash-1792-828.jpg",revision:"da7213183930764a850cfd4a79aab960"},{url:"icons/apple-splash-2048-1536.jpg",revision:"dd8bb0d6f3d32ea6fca602a1400b7f7e"},{url:"icons/apple-splash-2048-2732.jpg",revision:"b3a5a96e5573ac25daba34e46b3603a4"},{url:"icons/apple-splash-2160-1620.jpg",revision:"8b1de33899cd14d2fad11666989784d4"},{url:"icons/apple-splash-2208-1242.jpg",revision:"e2e480c833bf4f8c55a5284e8be907de"},{url:"icons/apple-splash-2224-1668.jpg",revision:"aa99d8e0150ca31de18e35f5def717aa"},{url:"icons/apple-splash-2388-1668.jpg",revision:"4892e2a0c60cb71615185c89509a5f87"},{url:"icons/apple-splash-2436-1125.jpg",revision:"cef60e1ea80b16c6bd3f2bb8fa074a73"},{url:"icons/apple-splash-2532-1170.jpg",revision:"7c65c04106fcc8decee0edd6f96fc5c6"},{url:"icons/apple-splash-2556-1179.jpg",revision:"54e8ef8f496eb398aa6fae9505d99104"},{url:"icons/apple-splash-2688-1242.jpg",revision:"90d16b203d912a29a9f91961262a159b"},{url:"icons/apple-splash-2732-2048.jpg",revision:"2ae72d6975e88f6d6ced1859b2ef5d9b"},{url:"icons/apple-splash-2778-1284.jpg",revision:"e5f78a442d0fd7376470b85caf7499c0"},{url:"icons/apple-splash-2796-1290.jpg",revision:"e67c3fa5d0a4f70dd2fae0abf6827af6"},{url:"icons/apple-splash-640-1136.jpg",revision:"15d145bfcf37bf587a15107ef8f09381"},{url:"icons/apple-splash-750-1334.jpg",revision:"cad971780f15a1181c06159405ea20e5"},{url:"icons/apple-splash-828-1792.jpg",revision:"71f59b8ee9e97b117ea51384d6c21401"},{url:"icons/manifest-icon-192.maskable.png",revision:"8338e679aa9d9e479a835ec73ef54c69"},{url:"icons/manifest-icon-512.maskable.png",revision:"a0ea4ed36d7e5a391c56b2a732d432f7"},{url:"index.html",revision:"5d8f8f60d0ec6fe8406fbf5c9250b27e"},{url:"logo.png",revision:"bbedb234d84686e7b37068a9786e5f8f"},{url:"manifest.json",revision:"98536d5dc7c73f15fa8e843d91c2a3d3"},{url:"README.md",revision:"4b48a3ead55baa3f46fe04e4915d350c"},{url:"service-worker (basic).js",revision:"6d90e26c178e45f69bd11cbf439849a1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
