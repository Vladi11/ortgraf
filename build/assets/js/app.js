!function(e){function n(n){for(var i,s,a=n[0],l=n[1],c=n[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(t,s)&&t[s]&&d.push(t[s][0]),t[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(p&&p(n);d.length;)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,n=0;n<o.length;n++){for(var r=o[n],i=!0,a=1;a<r.length;a++){var l=r[a];0!==t[l]&&(i=!1)}i&&(o.splice(n--,1),e=s(s.s=r[0]))}return e}var i={},t={0:0},o=[];function s(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,n,r){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(r,i,function(n){return e[n]}.bind(null,i));return r},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var p=l;o.push([9,1]),r()}([,,,,function(e,n,r){var i=r(5);"string"==typeof i&&(i=[[e.i,i,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(1)(i,t);i.locals&&(e.exports=i.locals)},function(e,n,r){},,function(e,n,r){var i=r(8);"string"==typeof i&&(i=[[e.i,i,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(1)(i,t);i.locals&&(e.exports=i.locals)},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var i=r(0),t=r(2),o=r.n(t);$(document).ready((function(){o.a.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});new i.a(".solutions-slider>.swiper-container",{slidesPerView:1,spaceBetween:8,navigation:{nextEl:".solutions-slider__next",prevEl:".solutions-slider__prev"},autoplay:{delay:5e3},breakpoints:{768:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:4,spaceBetween:30}},scrollbar:{el:".solutions-slider__scrollbar",hide:!1,draggable:!0}}),new i.a(".lamps-slider>.swiper-container",{slidesPerView:2,spaceBetween:8,navigation:{nextEl:".lamps-slider__next",prevEl:".lamps-slider__prev"},breakpoints:{768:{slidesPerView:4},992:{slidesPerView:6}}}),new i.a(".reviews-slider>.swiper-container",{slidesPerView:2,spaceBetween:9,scrollbar:{el:".reviews-slider__scrollbar",hide:!1,draggable:!0},breakpoints:{650:{slidesPerView:3}}}),new i.a(".projects-slider>.swiper-container",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".projects-slider__next",prevEl:".projects-slider__prev"},scrollbar:{el:".projects-slider__scrollbar",hide:!1,draggable:!0},breakpoints:{768:{slidesPerView:3},992:{slidesPerView:4}}}),new i.a(".information-slider>.swiper-container",{slidesPerView:1,loop:!0,pagination:{el:".information-slider__pagination",clickable:!0},autoplay:{delay:3e3}}),new i.a(".news-slider>.swiper-container",{slidesPerView:1,loop:!0,pagination:{el:".news-slider__pagination",clickable:!0},autoplay:{delay:3e3}});$(".burger").on("click",(function(){$(".main-menu").toggleClass("open"),$(this).toggleClass("active"),$(".main-menu__submenu").removeClass("open")})),$(".main-menu__title_open").on("click",(function(){$(this).parents(".main-menu__col").children(".main-menu__submenu").addClass("open")})),$(".main-menu__title_close").on("click",(function(){$(this).parents(".main-menu__col").children(".main-menu__submenu").removeClass("open")}))}));r(4),r(7)}]);