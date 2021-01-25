/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fancyapps_fancybox_dist_jquery_fancybox_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svgxuse_svgxuse_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svgxuse_svgxuse_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svgxuse_svgxuse_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _assets_js___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
// JS 
window.jQuery = window.$ = $;


 // SCSS

 // CSS 


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, AOS, Swiper) {$(document).ready(function () {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
  });
  var sliderSolution = new Swiper('.solutions-slider>.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 8
      }
    },
    navigation: {
      nextEl: '.solutions-slider__next',
      prevEl: '.solutions-slider__prev'
    },
    autoplay: {
      delay: 5000
    },
    scrollbar: {
      el: '.solutions-slider__scrollbar',
      hide: false,
      draggable: true
    }
  });
  var sliderLamps = new Swiper('.lamps-slider>.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 8,
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: '.lamps-slider__next',
      prevEl: '.lamps-slider__prev'
    }
  });
  var sliderReviews = new Swiper('.reviews-slider>.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 9,
    breakpoints: {
      650: {
        slidesPerView: 2
      }
    },
    scrollbar: {
      el: '.reviews-slider__scrollbar',
      hide: false,
      draggable: true
    }
  });
  var sliderProjects = new Swiper('.projects-slider>.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.projects-slider__next',
      prevEl: '.projects-slider__prev'
    },
    scrollbar: {
      el: '.projects-slider__scrollbar',
      hide: false,
      draggable: true
    }
  });
  var sliderInformation = new Swiper('.information-slider>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.information-slider__pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000
    }
  });
  var sliderNews = new Swiper('.news-slider>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.news-slider__pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000
    }
  });
  var sliderProjectsMaterials = new Swiper('.projects-materials__slider .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    scrollbar: {
      el: '.projects-materials__scrollbar',
      hide: false,
      draggable: true
    }
  });
  var sliderProjectsThumbs = new Swiper('.projects-gallery__thumbs .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true,
    scrollbar: {
      el: '.projects-gallery__scrollbar',
      hide: false,
      draggable: true
    }
  });
  var sliderProjectsGalleryTop = new Swiper('.projects-gallery__top .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.projects-gallery__next',
      prevEl: '.projects-gallery__prew'
    }
  });

  if (window.location.pathname == '/project-details.html') {
    sliderProjectsThumbs.controller.control = sliderProjectsGalleryTop;
    sliderProjectsGalleryTop.controller.control = sliderProjectsThumbs;
  }

  var sliderProductThumbs = new Swiper('.product-gallery__thumbs>.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true
  });
  var sliderProductGalleryTop = new Swiper('.product-gallery__top>.swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1
  });

  if (window.location.pathname == '/product-details.html') {
    sliderProductThumbs.controller.control = sliderProductGalleryTop;
    sliderProductGalleryTop.controller.control = sliderProductThumbs;
  }

  var sliderNewsMain = new Swiper('.news-main__slider>.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.news-main__slider>.swiper-pagination',
      clickable: true
    }
  });
  var sliderSolutionMain = new Swiper('.solution-main-slider>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.solution-main-slider__next',
      prevEl: '.solution-main-slider__prev'
    },
    pagination: {
      el: '.solution-main-slider__pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  });
  var sliderContactsMain = new Swiper('.contacts-main__slider>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.contacts-main__next',
      prevEl: '.contacts-main__prev'
    },
    pagination: {
      el: '.contacts-main__pagination',
      clickable: true
    }
  });
  var sliderProductList = new Swiper('.product-list__slider>.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-list__slider .slider-arrows__arrow_next',
      prevEl: '.product-list__slider .slider-arrows__arrow_prew'
    }
  });
  var cooperationMenu = ['Дилерам', 'Заказчикам', 'Архитекторам'];
  var sliderCooperationMain = new Swiper('.cooperation-main-slider>.swiper-container', {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 60,
    navigation: {
      nextEl: '.cooperation-main-slider__next',
      prevEl: '.cooperation-main-slider__prev'
    },
    pagination: {
      el: '.cooperation-main-slider__pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<div class="col-4 ' + className + '"><div class="cooperation-num"> <p class="cooperation-num__num">0' + (index + 1) + '</p><p class="cooperation-num__text">' + cooperationMenu[index] + '</p></div></div>';
      }
    }
  });
  $('body').on('click', '[data-toglle="menu"]', function () {
    $('.main-menu').toggleClass('open');
    $(this).toggleClass('active');
    $('.main-menu__submenu').removeClass('open');
  });
  $('body').on('click', '[data-open="submenu"]', function () {
    $(this).parents('.main-menu__col').children('.main-menu__submenu').addClass('open');
  });
  $('body').on('click', '[data-close="submenu"]', function () {
    $(this).parents('.main-menu__col').children('.main-menu__submenu').removeClass('open');
  });
  $('body').on('click', '[data-toglle="requisites"]', function () {
    $(this).next().slideToggle();
  });
  $('body').on('click', '[data-toggle="map-city-info"]', function () {
    $('.about-map__info').removeClass('active');
    $(this).addClass('active');
    $('.about-map__info').find('.about-map__deskr').removeClass('active');
    setTimeout(function () {
      $('.about-map__info').find('.about-map__deskr').addClass('active');
    }, 200);
  });
  $('body').on('click', '[data-toglle="city"]', function () {
    var activeCity = $(this).data('city');
    $('.contacts-main__toggle').removeClass('active');
    $(this).addClass('active');
    $('.contacts-main__city').removeClass('active');
    $("#city-".concat(activeCity)).addClass('active');
    $("#city-".concat(activeCity)).addClass('opacity');
    setTimeout(function () {
      $("#city-".concat(activeCity)).removeClass('opacity');
    }, 150);
  });
  $('body').on('click', '[data-product-toggle="tabs"]', function () {
    $('.product-more__title').removeClass('active');
    $(this).addClass('active');
    var activeTab = $(this).data('product-more');
    $('.product-more__content').removeClass('active');
    $(".".concat(activeTab)).addClass('active');
  });

  if (window.location.pathname == '/contacts.html') {
    var init = function init() {
      var myMap = new ymaps.Map('contacts-map', {
        center: [55.787229, 37.670896],
        zoom: 12,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      });

      var placeMark = function placeMark(city) {
        return new ymaps.Placemark(city, {
          hintContent: 'ОРТГРАФ Свет'
        }, {
          iconLayout: 'default#image',
          iconImageHref: '/assets/img/icons/icon-map.png'
        });
      };

      var adreesList = [[55.787229, 37.670896], [55.751518, 37.670097], [59.92138, 30.286179], [45.054767, 39.001409], [47.244729, 39.723187], [55.826306, 49.107474], [55.643002, 49.205849]];
      adreesList.forEach(function (adress) {
        myMap.geoObjects.add(placeMark(adress));
      });
      var city_1 = [55.767195, 37.630382];
      var city_2 = [59.92138, 30.286179];
      var city_3 = [45.054767, 39.001409];
      var city_4 = [47.244729, 39.723187];
      var city_5 = [55.826306, 49.107474];
      var city_6 = [55.643002, 49.205849];
      myMap.setCenter(city_1);
      $('body').on('click', '[data-toglle="city"]', function () {
        var $this = $(this);
        $('.contacts-main__toggle').removeClass('active');

        if (!$this.hasClass('active')) {
          $this.addClass('active');
          var city = "city_".concat($this.data('city'));
          myMap.setCenter(eval(city));
          myMap.setZoom(12);
        }

        ;
      });
    };

    ymaps.ready(init);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(6), __webpack_require__(8)))

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);