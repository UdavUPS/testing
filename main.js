(()=>{"use strict";function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}var r=document.querySelectorAll(".cards__card-item");function n(t){var r=t.split("");return 4==r[0]?"Visa":5==r[0]&&r[1]>0&&r[1]<6?"MasterCard":2==r[0]?"Mir":void 0}var e=document.querySelector(".cards-number"),a=document.querySelector(".check-but"),i=document.querySelectorAll(".cards__card-item");e.addEventListener("keypress",(function(t){return function(t){(t.which<48||t.which>57)&&t.preventDefault()}(t)})),e.addEventListener("input",(function(){return function(){var n,e=function(r,n){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,n){if(r){if("string"==typeof r)return t(r,n);var e={}.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){e&&(r=e);var a=0,i=function(){};return{s:i,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){e=e.call(r)},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw o}}}}(r);try{for(e.s();!(n=e.n()).done;){var a=n.value;a.classList.contains("curtain")||a.classList.add("curtain")}}catch(t){e.e(t)}finally{e.f()}}()})),a.addEventListener("click",(function(){if((r=e.value.split("")).length<16?(alert("Вы ввели номер не полностью"),0):!(r.length>16&&(alert("Вы ввели лишние цифры"),1)))for(var t=0;t<i.length;t++)i[t].classList.contains(n(e.value))&&i[t].classList.remove("curtain");var r}))})();