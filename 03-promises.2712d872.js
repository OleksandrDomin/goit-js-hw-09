var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");const i=document.querySelector(".form"),u=document.querySelector('button[type="submit"]');let l,a,d;function s(e,t){const r=l+e*t,o=e+1;return new Promise(((e,t)=>{const n=Math.random()>.5;setTimeout((()=>{n?e({position:o,delay:r}):t({position:o,delay:r})}),r)}))}i.addEventListener("submit",(function(e){e.preventDefault(),u.disabled=!0,l=Number(e.currentTarget.delay.value),a=Number(e.currentTarget.step.value),d=Number(e.currentTarget.amount.value),t=l,r=a,o=d,setTimeout((()=>{u.disabled=!1}),t+o*r);var t,r,o;for(let e=0;e<d;e+=1){s(e,a).then((({position:e,delay:t})=>{n.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.2712d872.js.map