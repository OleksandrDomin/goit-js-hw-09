!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r,i,u,a=o("h6c0i"),c=document.querySelector(".form"),l=document.querySelector('button[type="submit"]');function d(e,t){var n=r+e*t,o=e+1;return new Promise((function(e,t){var r=Math.random()>.5;setTimeout((function(){r?e({position:o,delay:n}):t({position:o,delay:n})}),n)}))}c.addEventListener("submit",(function(e){e.preventDefault(),l.disabled=!0,r=Number(e.currentTarget.delay.value),i=Number(e.currentTarget.step.value),u=Number(e.currentTarget.amount.value),t=r,n=i,o=u,setTimeout((function(){l.disabled=!1}),t+o*n);var t,n,o;for(var c=0;c<u;c+=1){d(c,i).then((function(e){var t=e.position,n=e.delay;a.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;a.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.cc47771d.js.map
