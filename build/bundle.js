/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/background-video.js"
/*!********************************!*\
  !*** ./js/background-video.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBackgroundVideo: () => (/* binding */ initBackgroundVideo)
/* harmony export */ });
function initBackgroundVideo() {
  var video = document.querySelector('.story-background-video');
  var button = document.querySelector('.story-video-toggle');
  if (!video || !button) return;
  var preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var updateLabel = function updateLabel() {
    button.textContent = video.paused ? 'Play background video' : 'Pause background video';
  };
  var play = function play() {
    video.muted = true;
    video.play()["catch"](updateLabel);
  };
  var applyPreference = function applyPreference() {
    if (preference.matches) video.pause();else play();
    updateLabel();
  };
  button.addEventListener('click', function () {
    if (video.paused) play();else video.pause();
  });
  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);
  video.addEventListener('error', function () {
    button.textContent = 'Background video unavailable';
    button.disabled = true;
  });
  preference.addEventListener('change', applyPreference);
  applyPreference();
}

/***/ },

/***/ "./js/carousel.js"
/*!************************!*\
  !*** ./js/carousel.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarousel: () => (/* binding */ initCarousel)
/* harmony export */ });
/**
 * "From bean to cup" carousel: cycles three slides via the arrow buttons.
 */

function initCarousel() {
  var slides = Array.from(document.querySelectorAll('.carousel-slide'));
  var previousButton = document.querySelector('.carousel-button--previous');
  var nextButton = document.querySelector('.carousel-button--next');
  if (slides.length < 3 || !previousButton || !nextButton) {
    return;
  }
  var currentIndex = 0;
  function showSlide(newIndex) {
    currentIndex = (newIndex + slides.length) % slides.length;
    slides.forEach(function (slide, index) {
      var isActive = index === currentIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
  }
  previousButton.addEventListener('click', function () {
    return showSlide(currentIndex - 1);
  });
  nextButton.addEventListener('click', function () {
    return showSlide(currentIndex + 1);
  });
  showSlide(0);
}

/***/ },

/***/ "./js/coffee-data.js"
/*!***************************!*\
  !*** ./js/coffee-data.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coffeeDetails: () => (/* binding */ coffeeDetails)
/* harmony export */ });
/**
 * Copy shown in the coffee detail modal, keyed by the `data-coffee`
 * attribute on each menu card.
 */

var coffeeDetails = {
  espresso: {
    title: 'Espresso',
    image: 'assets/coffeeAssets/Espresso.png',
    description: 'A small, concentrated coffee with a bold aroma, rich body, and lasting caramel finish.',
    details: 'Finely ground coffee and pressurized hot water. Served as a compact shot with a layer of crema.'
  },
  americano: {
    title: 'Americano',
    image: 'assets/coffeeAssets/Americano.png',
    description: 'A smooth, aromatic cup that keeps the character of espresso while offering a lighter body.',
    details: 'Espresso combined with hot water. Simple, balanced, and easy to enjoy throughout the day.'
  },
  latte: {
    title: 'Latte',
    image: 'assets/coffeeAssets/Latte.png',
    description: 'A mellow espresso drink with a creamy texture and a gentle roasted-coffee flavor.',
    details: 'Espresso, plenty of steamed milk, and a thin layer of milk foam.'
  },
  cappuccino: {
    title: 'Cappuccino',
    image: 'assets/coffeeAssets/Cappuccino.png',
    description: 'A rich but airy drink where espresso and milk remain equally noticeable.',
    details: 'Espresso with equal portions of steamed milk and thick, velvety milk foam.'
  },
  mocha: {
    title: 'Mocha',
    image: 'assets/coffeeAssets/Mocha.png',
    description: 'A comforting combination of roasted coffee, creamy milk, and chocolate sweetness.',
    details: 'Espresso, chocolate, steamed milk, and a light topping of milk foam.'
  },
  coldBrew: {
    title: 'Cold Brew',
    image: 'assets/coffeeAssets/ColdBrew.png',
    description: 'A refreshing coffee with low acidity, natural sweetness, and a smooth finish.',
    details: 'Coarse coffee grounds steeped slowly in cool water, then filtered and served over ice.'
  }
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./js/navbar.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.js */ "./js/carousel.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./js/modal.js");
/* harmony import */ var _background_video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-video.js */ "./js/background-video.js");
/**
 * Daily Brew Coffee — behaviour entry point.
 *
 * Each interactive part of the page lives in its own module and exposes a
 * single `init` function, so this file only wires them up.
 */





(0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.initNavbar)();
(0,_carousel_js__WEBPACK_IMPORTED_MODULE_1__.initCarousel)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.initCoffeeModal)();
(0,_background_video_js__WEBPACK_IMPORTED_MODULE_3__.initBackgroundVideo)();

/***/ },

/***/ "./js/modal.js"
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCoffeeModal: () => (/* binding */ initCoffeeModal)
/* harmony export */ });
/* harmony import */ var _coffee_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee-data.js */ "./js/coffee-data.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) { n[e] = r[e]; } return n; }
/**
 * Coffee detail modal: opened from a menu card, closed with the close button,
 * a click on the backdrop, or the Escape key.
 */

;
function initCoffeeModal() {
  var cards = document.querySelectorAll('[data-coffee]');
  var modal = document.querySelector('#coffee-modal');
  var closeButton = document.querySelector('.coffee-modal__close');
  var image = document.querySelector('#coffee-modal-image');
  var title = document.querySelector('#coffee-modal-title');
  var description = document.querySelector('#coffee-modal-description');
  var details = document.querySelector('#coffee-modal-details');
  if (!modal || !closeButton) {
    return;
  }
  var lastFocusedElement = null;
  var backgroundState = [];
  function openModal(coffeeKey) {
    var coffee = _coffee_data_js__WEBPACK_IMPORTED_MODULE_0__.coffeeDetails[coffeeKey];
    if (!coffee) {
      return;
    }
    lastFocusedElement = document.activeElement;
    image.src = coffee.image;
    image.alt = "Illustration of ".concat(coffee.title);
    title.textContent = coffee.title;
    description.textContent = coffee.description;
    details.textContent = coffee.details;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    backgroundState = _toConsumableArray(document.querySelectorAll('body > header, body > main, body > footer')).map(function (element) {
      return {
        element: element,
        inert: element.inert
      };
    });
    backgroundState.forEach(function (_ref) {
      var element = _ref.element;
      element.inert = true;
    });
    closeButton.focus();
  }
  function closeModal() {
    if (modal.hidden) {
      return;
    }
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    backgroundState.forEach(function (_ref2) {
      var element = _ref2.element,
        inert = _ref2.inert;
      element.inert = inert;
    });
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      return openModal(card.dataset.coffee);
    });
  });
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
    }
    if (event.key === 'Tab') {
      var focusable = _toConsumableArray(modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')).filter(function (element) {
        return !element.disabled && element.tabIndex >= 0 && element.getClientRects().length;
      });
      var first = focusable[0] || closeButton;
      var last = focusable[focusable.length - 1] || closeButton;
      if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

/***/ },

/***/ "./js/navbar.js"
/*!**********************!*\
  !*** ./js/navbar.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initNavbar: () => (/* binding */ initNavbar)
/* harmony export */ });
/**
 * Sticky navigation bar: shrinks on scroll and highlights the section the
 * reader is currently looking at.
 */

var SHRINK_THRESHOLD = 20;

/**
 * Mark the navigation link that points at `sectionId` as current.
 * @param {NodeListOf<HTMLAnchorElement>} links
 * @param {string} sectionId
 */
function highlightNavigationLink(links, sectionId) {
  links.forEach(function (link) {
    var isCurrentSection = link.getAttribute('href') === "#".concat(sectionId);
    link.classList.toggle('active', isCurrentSection);
    if (isCurrentSection) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}
function initNavbar() {
  var header = document.querySelector('.site-header');
  var links = document.querySelectorAll('.main-navigation a');
  var sections = document.querySelectorAll('.page-section');
  if (!header || sections.length === 0) {
    return;
  }
  function updateNavbarSize() {
    header.classList.toggle('site-header--small', window.scrollY > SHRINK_THRESHOLD);
  }
  function updatePositionIndicator() {
    var pageBottom = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    // At the very bottom the last section may be too short to reach the
    // navbar, so highlight it explicitly.
    if (pageBottom >= documentHeight - 2) {
      highlightNavigationLink(links, sections[sections.length - 1].id);
      return;
    }
    var readingPosition = header.getBoundingClientRect().bottom + 1;
    var currentSection = sections[0];
    sections.forEach(function (section) {
      var box = section.getBoundingClientRect();
      if (box.top <= readingPosition && box.bottom > readingPosition) {
        currentSection = section;
      }
    });
    highlightNavigationLink(links, currentSection.id);
  }
  function updatePageOnScroll() {
    updateNavbarSize();
    updatePositionIndicator();
  }
  window.addEventListener('scroll', updatePageOnScroll);
  window.addEventListener('resize', updatePositionIndicator);

  // Section heights change as media and fonts load, so recompute on resize.
  var layoutObserver = new ResizeObserver(updatePositionIndicator);
  layoutObserver.observe(header);
  sections.forEach(function (section) {
    return layoutObserver.observe(section);
  });
  updateNavbarSize();
  updatePositionIndicator();
}

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/our-story-background.jpg */ "./assets/our-story-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 82px;
}
@media (max-width: 768px) {
  html {
    scroll-padding-top: 107px;
  }
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #3e2a20;
  background-color: #fffaf4;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 24px;
  font-size: 56px;
}
@media (max-width: 1100px) {
  h1 {
    font-size: 48px;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}

h2 {
  margin-bottom: 20px;
  font-size: 38px;
}
@media (max-width: 1100px) {
  h2 {
    font-size: 34px;
  }
}
@media (max-width: 768px) {
  h2 {
    font-size: 30px;
  }
}

p {
  line-height: 1.7;
}

.container {
  width: min(1100px, 100% - 48px);
  margin: 0 auto;
}

.page-section {
  display: flex;
  width: 100%;
  padding: 100px 0;
  text-align: center;
  justify-content: center;
}
@media (max-width: 1100px) {
  .page-section {
    padding: 84px 0;
  }
}
@media (max-width: 768px) {
  .page-section {
    padding: 72px 0;
  }
}

.section-label {
  margin-bottom: 12px;
  color: #b97845;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-intro {
  max-width: 720px;
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 28px 0;
  background-color: #2f1b12;
  color: white;
  transition: padding 0.25s ease;
}
.site-header--small {
  padding: 12px 0;
}
.site-header--small .site-name {
  width: 58px;
  height: 58px;
  padding: 4px;
}
.site-header--small .main-navigation a {
  padding: 6px 10px;
  font-size: 14px;
}
@media (max-width: 768px) {
  .site-header--small {
    padding: 8px 0;
  }
  .site-header--small .header-content {
    gap: 8px;
  }
  .site-header--small .site-name {
    width: 46px;
    height: 46px;
  }
  .site-header--small .main-navigation a {
    padding: 5px 8px;
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  .site-header {
    padding: 14px 0;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 10px;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  color: #f7efe5;
  text-decoration: none;
}
.brand:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 4px;
}

.brand-wordmark {
  font-size: 26px;
  font-weight: 700;
  white-space: nowrap;
  transition: font-size 0.25s ease;
}

.site-header--small .brand-wordmark {
  font-size: 20px;
}

.site-name {
  display: flex;
  width: 92px;
  height: 92px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: #f7efe5;
  text-decoration: none;
  transition: width 0.25s ease, height 0.25s ease, padding 0.25s ease;
}
.site-name img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 768px) {
  .site-name {
    width: 68px;
    height: 68px;
    padding: 4px;
  }
}

.main-navigation {
  display: flex;
  gap: 28px;
}
@media (max-width: 1100px) {
  .main-navigation {
    gap: 8px;
  }
}
.main-navigation a {
  padding: 10px 14px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  transition: padding 0.25s ease, font-size 0.25s ease, background-color 0.25s ease;
}
.main-navigation a:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 4px;
}
.main-navigation a.active {
  background-color: #b97845;
  color: white;
}
@media (max-width: 768px) {
  .main-navigation {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
  .main-navigation a {
    padding: 8px 10px;
    font-size: 16px;
  }
}

.hero-section {
  min-height: 70vh;
  align-items: center;
  background-color: #5c3826;
  color: white;
  background-image: linear-gradient(rgba(47, 27, 18, 0.68), rgba(47, 27, 18, 0.68)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.hero-section .section-label {
  color: #f2c18f;
}
.hero-section h1,
.hero-section p {
  text-shadow: 0 2px 8px rgba(47, 27, 18, 0.65);
}

.story-section {
  position: relative;
  overflow: hidden;
  background-color: #f7efe5;
}
.story-section::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  background-color: rgba(247, 239, 229, 0.22);
  content: "";
}

.story-background-video {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.story-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  gap: 64px;
  align-items: center;
}
@media (max-width: 1100px) {
  .story-layout {
    gap: 44px;
  }
}
@media (max-width: 768px) {
  .story-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

.story-logo {
  width: min(100%, 300px);
  margin: 0 auto;
  display: flex;
  padding: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: rgba(255, 250, 244, 0.97);
  box-shadow: 0 18px 40px rgba(47, 27, 18, 0.12);
}
.story-logo img {
  display: block;
  width: min(100%, 340px);
  height: auto;
}
@media (max-width: 768px) {
  .story-logo {
    width: min(100%, 280px);
    margin: 0 auto;
  }
}

.story-video-toggle {
  margin-top: 24px;
  padding: 12px 18px;
  border: 1px solid #5c3826;
  border-radius: 999px;
  background: #fffaf4;
  color: #5c3826;
  font: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.story-video-toggle:hover {
  background: #5c3826;
  color: #fffaf4;
}
.story-video-toggle:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 4px;
}

.story-copy {
  padding: 36px;
  border-radius: 24px;
  background-color: rgba(255, 250, 244, 0.97);
  box-shadow: 0 18px 40px rgba(47, 27, 18, 0.12);
  text-align: left;
}
.story-copy .section-label {
  margin-bottom: 12px;
}
.story-copy p {
  max-width: none;
  margin: 0 0 18px;
}
.story-copy p:last-child {
  margin-bottom: 0;
}
@media (max-width: 1100px) {
  .story-copy {
    padding: 30px;
  }
}
@media (max-width: 768px) {
  .story-copy {
    text-align: center;
  }
}

.menu-section {
  background-color: #f7efe5;
}

.coffee-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 44px;
}
@media (max-width: 1100px) {
  .coffee-grid {
    gap: 18px;
  }
}
@media (max-width: 768px) {
  .coffee-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 520px) {
  .coffee-grid {
    grid-template-columns: 1fr;
  }
}

.coffee-card {
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 18px;
  text-align: left;
  color: #3e2a20;
  background-color: #fef9f0;
  box-shadow: 0 12px 28px rgba(47, 27, 18, 0.12);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.coffee-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 38px rgba(47, 27, 18, 0.2);
}
.coffee-card:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 4px;
}
.coffee-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  -o-object-fit: cover;
     object-fit: cover;
}
.coffee-card__content {
  display: flex;
  padding: 22px;
  flex-direction: column;
  gap: 7px;
}
.coffee-card__content strong {
  font-size: 25px;
}
@media (max-width: 1100px) {
  .coffee-card__content {
    padding: 18px;
  }
  .coffee-card__content strong {
    font-size: 22px;
  }
}
.coffee-card__action {
  margin-top: 8px;
  color: #b97845;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.coffee-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  padding: 28px;
  align-items: center;
  justify-content: center;
  background-color: rgba(28, 16, 11, 0.78);
}
.coffee-modal[hidden] {
  display: none;
}
.coffee-modal__dialog {
  position: relative;
  display: grid;
  width: min(900px, 100%);
  max-height: calc(100vh - 56px);
  overflow: auto;
  border-radius: 20px;
  grid-template-columns: 1fr 1fr;
  background-color: #fffaf4;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
  animation: modal-enter 0.25s ease;
}
.coffee-modal__dialog > img {
  width: 100%;
  height: 100%;
  min-height: 520px;
  -o-object-fit: cover;
     object-fit: cover;
}
@media (max-width: 768px) {
  .coffee-modal__dialog {
    max-height: calc(100vh - 32px);
    grid-template-columns: 1fr;
  }
  .coffee-modal__dialog > img {
    height: 300px;
    min-height: 300px;
  }
}
.coffee-modal__content {
  display: flex;
  padding: 58px 48px;
  text-align: left;
  flex-direction: column;
  justify-content: center;
}
.coffee-modal__content .section-label {
  margin-bottom: 12px;
}
.coffee-modal__content h2 {
  margin-bottom: 18px;
}
.coffee-modal__content h3 {
  margin: 30px 0 10px;
  font-size: 20px;
}
.coffee-modal__content p {
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .coffee-modal__content {
    padding: 34px 30px;
  }
}
.coffee-modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  color: white;
  background-color: #2f1b12;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}
.coffee-modal__close:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 3px;
}
@media (max-width: 768px) {
  .coffee-modal {
    padding: 16px;
  }
}

.modal-open {
  overflow: hidden;
}

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.process-section {
  background-color: #fffaf4;
}

.carousel {
  display: grid;
  grid-template-columns: 52px minmax(0, 780px) 52px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
@media (max-width: 1100px) {
  .carousel {
    grid-template-columns: 46px minmax(0, 1fr) 46px;
    gap: 14px;
  }
}
@media (max-width: 768px) {
  .carousel {
    grid-template-columns: 44px minmax(0, 1fr) 44px;
    gap: 8px;
  }
}

.carousel-window {
  min-height: 520px;
  overflow: hidden;
  border-radius: 18px;
  background-color: #5c3826;
  box-shadow: 0 18px 45px rgba(47, 27, 18, 0.2);
}
@media (max-width: 1100px) {
  .carousel-window {
    min-height: 460px;
  }
}
@media (max-width: 768px) {
  .carousel-window {
    min-height: 0;
  }
}

.carousel-slide {
  display: none;
  min-height: 520px;
  color: white;
}
.carousel-slide.active {
  display: grid;
  grid-template-columns: 46% 54%;
  animation: carousel-fade 0.4s ease;
}
.carousel-slide img {
  width: 100%;
  height: 520px;
  min-height: 520px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
}
.carousel-slide h3 {
  margin: 12px 0 18px;
  font-size: 38px;
}
.carousel-slide__content {
  display: flex;
  padding: 48px;
  text-align: left;
  flex-direction: column;
  justify-content: center;
}
.carousel-slide__content p {
  margin: 0;
  color: #f7efe5;
}
@media (max-width: 1100px) {
  .carousel-slide {
    min-height: 460px;
  }
  .carousel-slide img {
    height: 460px;
    min-height: 460px;
  }
  .carousel-slide h3 {
    font-size: 32px;
  }
  .carousel-slide__content {
    padding: 36px;
  }
}
@media (max-width: 768px) {
  .carousel-slide {
    min-height: 0;
  }
  .carousel-slide.active {
    grid-template-columns: 1fr;
  }
  .carousel-slide img {
    height: 360px;
    min-height: 360px;
    -o-object-fit: contain;
       object-fit: contain;
    background-color: #fef9f0;
  }
  .carousel-slide h3 {
    font-size: 30px;
  }
  .carousel-slide__content {
    padding: 30px;
    text-align: center;
  }
}

.carousel-button {
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  color: white;
  background-color: #2f1b12;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.carousel-button:hover {
  background-color: #b97845;
  transform: scale(1.08);
}
.carousel-button:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 4px;
}
@media (max-width: 1100px) {
  .carousel-button {
    width: 46px;
    height: 46px;
    font-size: 22px;
  }
}
@media (max-width: 768px) {
  .carousel-button {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
}

@keyframes carousel-fade {
  from {
    opacity: 0;
    transform: translateX(18px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.origins-section {
  background-color: #eadbc9;
}

.origins-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 44px;
  text-align: left;
}
@media (max-width: 1100px) {
  .origins-grid {
    gap: 18px;
  }
}
@media (max-width: 768px) {
  .origins-grid {
    grid-template-columns: 1fr;
  }
}

.origin-card {
  overflow: hidden;
  border-radius: 18px;
  background-color: #fef9f0;
  box-shadow: 0 16px 36px rgba(47, 27, 18, 0.14);
}
.origin-card__content {
  padding: 28px;
}
.origin-card__content h3 {
  margin: 0 0 16px;
  font-size: 28px;
}
.origin-card__content p {
  margin: 0 0 22px;
}
.origin-card__content .origin-region {
  margin: 0 0 8px;
  color: #b97845;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
@media (max-width: 1100px) {
  .origin-card__content {
    padding: 22px;
  }
  .origin-card__content h3 {
    font-size: 24px;
  }
}

.origin-map {
  display: flex;
  height: 300px;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-color: #fef9f0;
}
.origin-map img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 1100px) {
  .origin-map {
    height: 240px;
  }
}

.flavor-list {
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}
.flavor-list li {
  padding: 7px 11px;
  border-radius: 999px;
  background-color: #f7efe5;
  font-size: 13px;
  font-weight: bold;
}

.visit-section {
  background-color: #dfc5a9;
}

.visit-video {
  width: min(100%, 960px);
  margin: 36px auto 32px;
  overflow: hidden;
  border-radius: 24px;
  background-color: #2f1b12;
  box-shadow: 0 20px 45px rgba(55, 30, 19, 0.2);
}
.visit-video video {
  display: block;
  width: 100%;
  max-height: 560px;
  -o-object-fit: cover;
     object-fit: cover;
}

.visit-details {
  display: grid;
  gap: 12px;
  justify-content: center;
}

.visit-detail {
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.visit-detail--location::before {
  content: "";
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  background-color: #5c3826;
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/contain no-repeat;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/contain no-repeat;
}
.visit-detail--hours::before {
  content: "";
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  background-color: #5c3826;
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center/contain no-repeat;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center/contain no-repeat;
}

.site-footer {
  width: 100%;
  padding: 48px 0;
  text-align: center;
  background-color: #2f1b12;
  color: white;
}
.site-footer p {
  margin-bottom: 8px;
}

.footer-social {
  display: flex;
  gap: 14px;
  margin-top: 24px;
  justify-content: center;
}

.social-link {
  display: grid;
  width: 46px;
  height: 46px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  place-items: center;
  color: white;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}
.social-link::before {
  width: 22px;
  height: 22px;
  background-color: currentColor;
  content: "";
}
.social-link--github::before {
  content: "";
  width: 22px;
  height: 22px;
  background-color: currentColor;
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) center/contain no-repeat;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) center/contain no-repeat;
}
.social-link--x::before {
  content: "";
  width: 22px;
  height: 22px;
  background-color: currentColor;
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) center/contain no-repeat;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) center/contain no-repeat;
}
.social-link:hover, .social-link:focus-visible {
  color: #2f1b12;
  background-color: #f7efe5;
  transform: translateY(-3px);
}
.social-link:focus-visible {
  outline: 3px solid #b97845;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }

  .hero-section {
    background-attachment: scroll;
  }

  .coffee-card:hover, .carousel-button:hover, .social-link:hover,
.social-link:focus-visible {
    transform: none;
  }
}`, "",{"version":3,"sources":["webpack://./css/_base.scss","webpack://./css/main.scss","webpack://./css/_variables.scss","webpack://./css/_mixins.scss","webpack://./css/_header.scss","webpack://./css/_hero.scss","webpack://./css/_story.scss","webpack://./css/_menu.scss","webpack://./css/_process.scss","webpack://./css/_origins.scss","webpack://./css/_visit.scss","webpack://./css/_footer.scss","webpack://./css/_motion.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// Document defaults, typography and the layout primitives shared by sections.\n// -----------------------------------------------------------------------------\n\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n    scroll-padding-top: $header-offset;\n\n    @include respond-to('tablet') {\n        scroll-padding-top: 107px;\n    }\n}\n\nbody {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    color: $text-color;\n    background-color: $light-cream;\n}\n\nh1,\nh2,\np {\n    margin-top: 0;\n}\n\nh1 {\n    margin-bottom: 24px;\n    font-size: 56px;\n\n    @include respond-to('laptop') {\n        font-size: 48px;\n    }\n\n    @include respond-to('tablet') {\n        font-size: 40px;\n    }\n}\n\nh2 {\n    margin-bottom: 20px;\n    font-size: 38px;\n\n    @include respond-to('laptop') {\n        font-size: 34px;\n    }\n\n    @include respond-to('tablet') {\n        font-size: 30px;\n    }\n}\n\np {\n    line-height: 1.7;\n}\n\n// Centred measure shared by every stripe.\n.container {\n    width: min(#{$content-width}, 100% - #{$gutter});\n    margin: 0 auto;\n}\n\n// Full-width horizontal stripe.\n.page-section {\n    display: flex;\n    width: 100%;\n    padding: 100px 0;\n    text-align: center;\n    justify-content: center;\n\n    @include respond-to('laptop') {\n        padding: 84px 0;\n    }\n\n    @include respond-to('tablet') {\n        padding: 72px 0;\n    }\n}\n\n// Small uppercase eyebrow above a section heading.\n.section-label {\n    margin-bottom: 12px;\n    color: $caramel;\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\n// The one lead paragraph a stripe opens with.\n.section-intro {\n    max-width: 720px;\n    margin: 0 auto;\n}\n","* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  scroll-padding-top: 82px;\n}\n@media (max-width: 768px) {\n  html {\n    scroll-padding-top: 107px;\n  }\n}\n\nbody {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3e2a20;\n  background-color: #fffaf4;\n}\n\nh1,\nh2,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 24px;\n  font-size: 56px;\n}\n@media (max-width: 1100px) {\n  h1 {\n    font-size: 48px;\n  }\n}\n@media (max-width: 768px) {\n  h1 {\n    font-size: 40px;\n  }\n}\n\nh2 {\n  margin-bottom: 20px;\n  font-size: 38px;\n}\n@media (max-width: 1100px) {\n  h2 {\n    font-size: 34px;\n  }\n}\n@media (max-width: 768px) {\n  h2 {\n    font-size: 30px;\n  }\n}\n\np {\n  line-height: 1.7;\n}\n\n.container {\n  width: min(1100px, 100% - 48px);\n  margin: 0 auto;\n}\n\n.page-section {\n  display: flex;\n  width: 100%;\n  padding: 100px 0;\n  text-align: center;\n  justify-content: center;\n}\n@media (max-width: 1100px) {\n  .page-section {\n    padding: 84px 0;\n  }\n}\n@media (max-width: 768px) {\n  .page-section {\n    padding: 72px 0;\n  }\n}\n\n.section-label {\n  margin-bottom: 12px;\n  color: #b97845;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.section-intro {\n  max-width: 720px;\n  margin: 0 auto;\n}\n\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  padding: 28px 0;\n  background-color: #2f1b12;\n  color: white;\n  transition: padding 0.25s ease;\n}\n.site-header--small {\n  padding: 12px 0;\n}\n.site-header--small .site-name {\n  width: 58px;\n  height: 58px;\n  padding: 4px;\n}\n.site-header--small .main-navigation a {\n  padding: 6px 10px;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .site-header--small {\n    padding: 8px 0;\n  }\n  .site-header--small .header-content {\n    gap: 8px;\n  }\n  .site-header--small .site-name {\n    width: 46px;\n    height: 46px;\n  }\n  .site-header--small .main-navigation a {\n    padding: 5px 8px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 768px) {\n  .site-header {\n    padding: 14px 0;\n  }\n}\n\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .header-content {\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n  color: #f7efe5;\n  text-decoration: none;\n}\n.brand:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 4px;\n}\n\n.brand-wordmark {\n  font-size: 26px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: font-size 0.25s ease;\n}\n\n.site-header--small .brand-wordmark {\n  font-size: 20px;\n}\n\n.site-name {\n  display: flex;\n  width: 92px;\n  height: 92px;\n  padding: 6px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  background-color: #f7efe5;\n  text-decoration: none;\n  transition: width 0.25s ease, height 0.25s ease, padding 0.25s ease;\n}\n.site-name img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n@media (max-width: 768px) {\n  .site-name {\n    width: 68px;\n    height: 68px;\n    padding: 4px;\n  }\n}\n\n.main-navigation {\n  display: flex;\n  gap: 28px;\n}\n@media (max-width: 1100px) {\n  .main-navigation {\n    gap: 8px;\n  }\n}\n.main-navigation a {\n  padding: 10px 14px;\n  border-radius: 4px;\n  color: white;\n  font-size: 18px;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: padding 0.25s ease, font-size 0.25s ease, background-color 0.25s ease;\n}\n.main-navigation a:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 4px;\n}\n.main-navigation a.active {\n  background-color: #b97845;\n  color: white;\n}\n@media (max-width: 768px) {\n  .main-navigation {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 16px;\n  }\n  .main-navigation a {\n    padding: 8px 10px;\n    font-size: 16px;\n  }\n}\n\n.hero-section {\n  min-height: 70vh;\n  align-items: center;\n  background-color: #5c3826;\n  color: white;\n  background-image: linear-gradient(rgba(47, 27, 18, 0.68), rgba(47, 27, 18, 0.68)), url(\"../assets/our-story-background.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.hero-section .section-label {\n  color: #f2c18f;\n}\n.hero-section h1,\n.hero-section p {\n  text-shadow: 0 2px 8px rgba(47, 27, 18, 0.65);\n}\n\n.story-section {\n  position: relative;\n  overflow: hidden;\n  background-color: #f7efe5;\n}\n.story-section::after {\n  position: absolute;\n  z-index: 1;\n  inset: 0;\n  background-color: rgba(247, 239, 229, 0.22);\n  content: \"\";\n}\n\n.story-background-video {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.story-layout {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);\n  gap: 64px;\n  align-items: center;\n}\n@media (max-width: 1100px) {\n  .story-layout {\n    gap: 44px;\n  }\n}\n@media (max-width: 768px) {\n  .story-layout {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n}\n\n.story-logo {\n  width: min(100%, 300px);\n  margin: 0 auto;\n  display: flex;\n  padding: 18px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  background-color: rgba(255, 250, 244, 0.97);\n  box-shadow: 0 18px 40px rgba(47, 27, 18, 0.12);\n}\n.story-logo img {\n  display: block;\n  width: min(100%, 340px);\n  height: auto;\n}\n@media (max-width: 768px) {\n  .story-logo {\n    width: min(100%, 280px);\n    margin: 0 auto;\n  }\n}\n\n.story-video-toggle {\n  margin-top: 24px;\n  padding: 12px 18px;\n  border: 1px solid #5c3826;\n  border-radius: 999px;\n  background: #fffaf4;\n  color: #5c3826;\n  font: inherit;\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.story-video-toggle:hover {\n  background: #5c3826;\n  color: #fffaf4;\n}\n.story-video-toggle:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 4px;\n}\n\n.story-copy {\n  padding: 36px;\n  border-radius: 24px;\n  background-color: rgba(255, 250, 244, 0.97);\n  box-shadow: 0 18px 40px rgba(47, 27, 18, 0.12);\n  text-align: left;\n}\n.story-copy .section-label {\n  margin-bottom: 12px;\n}\n.story-copy p {\n  max-width: none;\n  margin: 0 0 18px;\n}\n.story-copy p:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 1100px) {\n  .story-copy {\n    padding: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .story-copy {\n    text-align: center;\n  }\n}\n\n.menu-section {\n  background-color: #f7efe5;\n}\n\n.coffee-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n  margin-top: 44px;\n}\n@media (max-width: 1100px) {\n  .coffee-grid {\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .coffee-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 520px) {\n  .coffee-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.coffee-card {\n  padding: 0;\n  overflow: hidden;\n  border: 0;\n  border-radius: 18px;\n  text-align: left;\n  color: #3e2a20;\n  background-color: #fef9f0;\n  box-shadow: 0 12px 28px rgba(47, 27, 18, 0.12);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.coffee-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 18px 38px rgba(47, 27, 18, 0.2);\n}\n.coffee-card:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 4px;\n}\n.coffee-card img {\n  display: block;\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n}\n.coffee-card__content {\n  display: flex;\n  padding: 22px;\n  flex-direction: column;\n  gap: 7px;\n}\n.coffee-card__content strong {\n  font-size: 25px;\n}\n@media (max-width: 1100px) {\n  .coffee-card__content {\n    padding: 18px;\n  }\n  .coffee-card__content strong {\n    font-size: 22px;\n  }\n}\n.coffee-card__action {\n  margin-top: 8px;\n  color: #b97845;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n}\n\n.coffee-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 2000;\n  display: flex;\n  padding: 28px;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(28, 16, 11, 0.78);\n}\n.coffee-modal[hidden] {\n  display: none;\n}\n.coffee-modal__dialog {\n  position: relative;\n  display: grid;\n  width: min(900px, 100%);\n  max-height: calc(100vh - 56px);\n  overflow: auto;\n  border-radius: 20px;\n  grid-template-columns: 1fr 1fr;\n  background-color: #fffaf4;\n  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);\n  animation: modal-enter 0.25s ease;\n}\n.coffee-modal__dialog > img {\n  width: 100%;\n  height: 100%;\n  min-height: 520px;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .coffee-modal__dialog {\n    max-height: calc(100vh - 32px);\n    grid-template-columns: 1fr;\n  }\n  .coffee-modal__dialog > img {\n    height: 300px;\n    min-height: 300px;\n  }\n}\n.coffee-modal__content {\n  display: flex;\n  padding: 58px 48px;\n  text-align: left;\n  flex-direction: column;\n  justify-content: center;\n}\n.coffee-modal__content .section-label {\n  margin-bottom: 12px;\n}\n.coffee-modal__content h2 {\n  margin-bottom: 18px;\n}\n.coffee-modal__content h3 {\n  margin: 30px 0 10px;\n  font-size: 20px;\n}\n.coffee-modal__content p {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .coffee-modal__content {\n    padding: 34px 30px;\n  }\n}\n.coffee-modal__close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 1;\n  width: 42px;\n  height: 42px;\n  border: 0;\n  border-radius: 50%;\n  color: white;\n  background-color: #2f1b12;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n}\n.coffee-modal__close:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 3px;\n}\n@media (max-width: 768px) {\n  .coffee-modal {\n    padding: 16px;\n  }\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n@keyframes modal-enter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.process-section {\n  background-color: #fffaf4;\n}\n\n.carousel {\n  display: grid;\n  grid-template-columns: 52px minmax(0, 780px) 52px;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 40px;\n}\n@media (max-width: 1100px) {\n  .carousel {\n    grid-template-columns: 46px minmax(0, 1fr) 46px;\n    gap: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .carousel {\n    grid-template-columns: 44px minmax(0, 1fr) 44px;\n    gap: 8px;\n  }\n}\n\n.carousel-window {\n  min-height: 520px;\n  overflow: hidden;\n  border-radius: 18px;\n  background-color: #5c3826;\n  box-shadow: 0 18px 45px rgba(47, 27, 18, 0.2);\n}\n@media (max-width: 1100px) {\n  .carousel-window {\n    min-height: 460px;\n  }\n}\n@media (max-width: 768px) {\n  .carousel-window {\n    min-height: 0;\n  }\n}\n\n.carousel-slide {\n  display: none;\n  min-height: 520px;\n  color: white;\n}\n.carousel-slide.active {\n  display: grid;\n  grid-template-columns: 46% 54%;\n  animation: carousel-fade 0.4s ease;\n}\n.carousel-slide img {\n  width: 100%;\n  height: 520px;\n  min-height: 520px;\n  object-fit: cover;\n  object-position: center;\n}\n.carousel-slide h3 {\n  margin: 12px 0 18px;\n  font-size: 38px;\n}\n.carousel-slide__content {\n  display: flex;\n  padding: 48px;\n  text-align: left;\n  flex-direction: column;\n  justify-content: center;\n}\n.carousel-slide__content p {\n  margin: 0;\n  color: #f7efe5;\n}\n@media (max-width: 1100px) {\n  .carousel-slide {\n    min-height: 460px;\n  }\n  .carousel-slide img {\n    height: 460px;\n    min-height: 460px;\n  }\n  .carousel-slide h3 {\n    font-size: 32px;\n  }\n  .carousel-slide__content {\n    padding: 36px;\n  }\n}\n@media (max-width: 768px) {\n  .carousel-slide {\n    min-height: 0;\n  }\n  .carousel-slide.active {\n    grid-template-columns: 1fr;\n  }\n  .carousel-slide img {\n    height: 360px;\n    min-height: 360px;\n    object-fit: contain;\n    background-color: #fef9f0;\n  }\n  .carousel-slide h3 {\n    font-size: 30px;\n  }\n  .carousel-slide__content {\n    padding: 30px;\n    text-align: center;\n  }\n}\n\n.carousel-button {\n  width: 52px;\n  height: 52px;\n  border: 0;\n  border-radius: 50%;\n  color: white;\n  background-color: #2f1b12;\n  font-size: 24px;\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n}\n.carousel-button:hover {\n  background-color: #b97845;\n  transform: scale(1.08);\n}\n.carousel-button:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 4px;\n}\n@media (max-width: 1100px) {\n  .carousel-button {\n    width: 46px;\n    height: 46px;\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .carousel-button {\n    width: 44px;\n    height: 44px;\n    font-size: 20px;\n  }\n}\n\n@keyframes carousel-fade {\n  from {\n    opacity: 0;\n    transform: translateX(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.origins-section {\n  background-color: #eadbc9;\n}\n\n.origins-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n  margin-top: 44px;\n  text-align: left;\n}\n@media (max-width: 1100px) {\n  .origins-grid {\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .origins-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.origin-card {\n  overflow: hidden;\n  border-radius: 18px;\n  background-color: #fef9f0;\n  box-shadow: 0 16px 36px rgba(47, 27, 18, 0.14);\n}\n.origin-card__content {\n  padding: 28px;\n}\n.origin-card__content h3 {\n  margin: 0 0 16px;\n  font-size: 28px;\n}\n.origin-card__content p {\n  margin: 0 0 22px;\n}\n.origin-card__content .origin-region {\n  margin: 0 0 8px;\n  color: #b97845;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n@media (max-width: 1100px) {\n  .origin-card__content {\n    padding: 22px;\n  }\n  .origin-card__content h3 {\n    font-size: 24px;\n  }\n}\n\n.origin-map {\n  display: flex;\n  height: 300px;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  background-color: #fef9f0;\n}\n.origin-map img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n@media (max-width: 1100px) {\n  .origin-map {\n    height: 240px;\n  }\n}\n\n.flavor-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  flex-wrap: wrap;\n  gap: 8px;\n  list-style: none;\n}\n.flavor-list li {\n  padding: 7px 11px;\n  border-radius: 999px;\n  background-color: #f7efe5;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.visit-section {\n  background-color: #dfc5a9;\n}\n\n.visit-video {\n  width: min(100%, 960px);\n  margin: 36px auto 32px;\n  overflow: hidden;\n  border-radius: 24px;\n  background-color: #2f1b12;\n  box-shadow: 0 20px 45px rgba(55, 30, 19, 0.2);\n}\n.visit-video video {\n  display: block;\n  width: 100%;\n  max-height: 560px;\n  object-fit: cover;\n}\n\n.visit-details {\n  display: grid;\n  gap: 12px;\n  justify-content: center;\n}\n\n.visit-detail {\n  display: flex;\n  margin: 0;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.visit-detail--location::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  flex: 0 0 24px;\n  background-color: #5c3826;\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n}\n.visit-detail--hours::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  flex: 0 0 24px;\n  background-color: #5c3826;\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n}\n\n.site-footer {\n  width: 100%;\n  padding: 48px 0;\n  text-align: center;\n  background-color: #2f1b12;\n  color: white;\n}\n.site-footer p {\n  margin-bottom: 8px;\n}\n\n.footer-social {\n  display: flex;\n  gap: 14px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.social-link {\n  display: grid;\n  width: 46px;\n  height: 46px;\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  border-radius: 50%;\n  place-items: center;\n  color: white;\n  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;\n}\n.social-link::before {\n  width: 22px;\n  height: 22px;\n  background-color: currentColor;\n  content: \"\";\n}\n.social-link--github::before {\n  content: \"\";\n  width: 22px;\n  height: 22px;\n  background-color: currentColor;\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n}\n.social-link--x::before {\n  content: \"\";\n  width: 22px;\n  height: 22px;\n  background-color: currentColor;\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z'/%3E%3C/svg%3E\") center/contain no-repeat;\n}\n.social-link:hover, .social-link:focus-visible {\n  color: #2f1b12;\n  background-color: #f7efe5;\n  transform: translateY(-3px);\n}\n.social-link:focus-visible {\n  outline: 3px solid #b97845;\n  outline-offset: 3px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html {\n    scroll-behavior: auto;\n  }\n\n  *, *::before, *::after {\n    animation: none !important;\n    transition: none !important;\n  }\n\n  .hero-section {\n    background-attachment: scroll;\n  }\n\n  .coffee-card:hover, .carousel-button:hover, .social-link:hover,\n.social-link:focus-visible {\n    transform: none;\n  }\n}","// -----------------------------------------------------------------------------\n// Design tokens: every colour, breakpoint and icon used by the site lives here,\n// so a single edit propagates through every partial.\n// -----------------------------------------------------------------------------\n\n// Palette\n$espresso:      #2f1b12;\n$coffee-brown:  #5c3826;\n$caramel:       #b97845;\n$cream:         #f7efe5;\n$light-cream:   #fffaf4;\n$origin-cream:  #fef9f0;\n$origins-sand:  #eadbc9;\n$visit-sand:    #dfc5a9;\n$text-color:    #3e2a20;\n$hero-label:    #f2c18f;\n\n// Translucent variants\n$overlay-espresso: rgba(47, 27, 18, 0.68);\n$overlay-cream:    rgba(247, 239, 229, 0.7);\n$surface-cream:    rgba(255, 250, 244, 0.9);\n$modal-backdrop:   rgba(28, 16, 11, 0.78);\n\n// Elevation\n$shadow-soft:   0 12px 28px rgba(47, 27, 18, 0.12);\n$shadow-card:   0 16px 36px rgba(47, 27, 18, 0.14);\n$shadow-raised: 0 18px 38px rgba(47, 27, 18, 0.2);\n$shadow-panel:  0 18px 40px rgba(47, 27, 18, 0.12);\n$shadow-deep:   0 18px 45px rgba(47, 27, 18, 0.2);\n$shadow-video:  0 20px 45px rgba(55, 30, 19, 0.2);\n$shadow-modal:  0 24px 70px rgba(0, 0, 0, 0.38);\n\n// Layout\n$content-width: 1100px;\n$gutter:        48px;\n$header-offset: 82px;\n\n// Responsive breakpoints, consumed through the `respond-to` mixin.\n$breakpoints: (\n    'laptop': 1100px,\n    'tablet': 768px,\n    'mobile': 520px\n);\n\n// Inline SVG icon sources. Keeping them in a map means the `vector-icon`\n// mixin can look an icon up by name instead of taking a raw data URI.\n$icons: (\n    'location': \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'/%3E%3C/svg%3E\",\n    'clock': \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z'/%3E%3C/svg%3E\",\n    'github': \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z'/%3E%3C/svg%3E\",\n    'x': \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z'/%3E%3C/svg%3E\"\n);\n","@use 'sass:map';\n@use 'variables' as *;\n\n// -----------------------------------------------------------------------------\n// Reusable pieces of SCSS logic shared by every component partial.\n// -----------------------------------------------------------------------------\n\n/// Look up an icon in the `$icons` map and return it as a CSS `url()`.\n/// @param {String} $name - a key of `$icons`\n@function icon-url($name) {\n    @if not map.has-key($icons, $name) {\n        @error 'Unknown icon \"#{$name}\". Available: #{map.keys($icons)}.';\n    }\n\n    @return url('#{map.get($icons, $name)}');\n}\n\n/// Wrap a block of declarations in a named max-width media query, so each\n/// component keeps its responsive rules next to its base rules.\n/// @param {String} $breakpoint - a key of `$breakpoints`\n@mixin respond-to($breakpoint) {\n    @if not map.has-key($breakpoints, $breakpoint) {\n        @error 'Unknown breakpoint \"#{$breakpoint}\". Available: #{map.keys($breakpoints)}.';\n    }\n\n    @media (max-width: map.get($breakpoints, $breakpoint)) {\n        @content;\n    }\n}\n\n/// Paint a scalable vector icon into a pseudo-element using a CSS mask, which\n/// keeps the icon sharp at any size and recolourable from CSS alone.\n/// @param {String} $name        - a key of `$icons`\n/// @param {Length} $size        - rendered square size\n/// @param {Color}  $color       - icon colour\n/// @param {Bool}   $fixed-width - reserve the icon's width in a flex row\n@mixin vector-icon($name, $size: 24px, $color: $coffee-brown, $fixed-width: true) {\n    content: '';\n    width: $size;\n    height: $size;\n\n    @if $fixed-width {\n        flex: 0 0 $size;\n    }\n\n    background-color: $color;\n    -webkit-mask: icon-url($name) center / contain no-repeat;\n    mask: icon-url($name) center / contain no-repeat;\n}\n\n/// Consistent keyboard focus ring.\n@mixin focus-ring($offset: 4px) {\n    outline: 3px solid $caramel;\n    outline-offset: $offset;\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// Sticky site header. Shrinks once `main.js` adds `.site-header--small`.\n// -----------------------------------------------------------------------------\n\n.site-header {\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n\n    width: 100%;\n    padding: 28px 0;\n    background-color: $espresso;\n    color: white;\n\n    transition: padding 0.25s ease;\n\n    // Compact state applied on scroll.\n    &--small {\n        padding: 12px 0;\n\n        .site-name {\n            width: 58px;\n            height: 58px;\n            padding: 4px;\n        }\n\n        .main-navigation a {\n            padding: 6px 10px;\n            font-size: 14px;\n        }\n\n        @include respond-to('tablet') {\n            padding: 8px 0;\n\n            .header-content {\n                gap: 8px;\n            }\n\n            .site-name {\n                width: 46px;\n                height: 46px;\n            }\n\n            .main-navigation a {\n                padding: 5px 8px;\n                font-size: 13px;\n            }\n        }\n    }\n\n    @include respond-to('tablet') {\n        padding: 14px 0;\n    }\n}\n\n.header-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n\n    @include respond-to('tablet') {\n        flex-direction: column;\n        gap: 10px;\n    }\n}\n\n.brand {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-shrink: 0;\n    color: $cream;\n    text-decoration: none;\n\n    &:focus-visible { @include focus-ring; }\n}\n\n.brand-wordmark {\n    font-size: 26px;\n    font-weight: 700;\n    white-space: nowrap;\n    transition: font-size 0.25s ease;\n}\n\n.site-header--small .brand-wordmark { font-size: 20px; }\n\n.site-name {\n    display: flex;\n    width: 92px;\n    height: 92px;\n    padding: 6px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 14px;\n    background-color: $cream;\n    text-decoration: none;\n\n    transition:\n        width 0.25s ease,\n        height 0.25s ease,\n        padding 0.25s ease;\n\n    img {\n        display: block;\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    @include respond-to('tablet') {\n        width: 68px;\n        height: 68px;\n        padding: 4px;\n    }\n}\n\n.main-navigation {\n    display: flex;\n    gap: 28px;\n\n    @include respond-to('laptop') { gap: 8px; }\n\n    a {\n        padding: 10px 14px;\n        border-radius: 4px;\n        color: white;\n        font-size: 18px;\n        text-decoration: none;\n        white-space: nowrap;\n\n        &:focus-visible { @include focus-ring; }\n\n        transition:\n            padding 0.25s ease,\n            font-size 0.25s ease,\n            background-color 0.25s ease;\n\n        // Reading-position indicator, toggled from JavaScript.\n        &.active {\n            background-color: $caramel;\n            color: white;\n        }\n    }\n\n    @include respond-to('tablet') {\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 16px;\n\n        a {\n            padding: 8px 10px;\n            font-size: 16px;\n        }\n    }\n}\n","@use 'variables' as *;\n\n// -----------------------------------------------------------------------------\n// Landing stripe: fixed-attachment background image, vertically centred content.\n// -----------------------------------------------------------------------------\n\n.hero-section {\n    min-height: 70vh;\n    align-items: center;\n    background-color: $coffee-brown;\n    color: white;\n    background-image:\n        linear-gradient($overlay-espresso, $overlay-espresso),\n        url('../assets/our-story-background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n\n    .section-label {\n        color: $hero-label;\n    }\n\n    h1,\n    p {\n        text-shadow: 0 2px 8px rgba(47, 27, 18, 0.65);\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// \"Our story\" stripe: looping background video behind a two-column layout.\n// -----------------------------------------------------------------------------\n\n.story-section {\n    position: relative;\n    overflow: hidden;\n    background-color: $cream;\n\n    // Tint that keeps the copy readable over the video.\n    &::after {\n        position: absolute;\n        z-index: 1;\n        inset: 0;\n        background-color: rgba($cream, 0.22);\n        content: '';\n    }\n}\n\n.story-background-video {\n    position: absolute;\n    z-index: 0;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.story-layout {\n    position: relative;\n    z-index: 2;\n    display: grid;\n    grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);\n    gap: 64px;\n    align-items: center;\n\n    @include respond-to('laptop') {\n        gap: 44px;\n    }\n\n    @include respond-to('tablet') {\n        grid-template-columns: 1fr;\n        gap: 36px;\n    }\n}\n\n.story-logo {\n    width: min(100%, 300px);\n    margin: 0 auto;\n    display: flex;\n    padding: 18px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 24px;\n    background-color: rgba($light-cream, 0.97);\n    box-shadow: $shadow-panel;\n\n    img {\n        display: block;\n        width: min(100%, 340px);\n        height: auto;\n    }\n\n    @include respond-to('tablet') {\n        width: min(100%, 280px);\n        margin: 0 auto;\n    }\n}\n\n.story-video-toggle {\n    margin-top: 24px;\n    padding: 12px 18px;\n    border: 1px solid $coffee-brown;\n    border-radius: 999px;\n    background: $light-cream;\n    color: $coffee-brown;\n    font: inherit;\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n\n    &:hover { background: $coffee-brown; color: $light-cream; }\n    &:focus-visible { @include focus-ring; }\n}\n\n.story-copy {\n    padding: 36px;\n    border-radius: 24px;\n    background-color: rgba($light-cream, 0.97);\n    box-shadow: $shadow-panel;\n    text-align: left;\n\n    // Two classes, so this wins over the `p` rule below without `:not()`.\n    .section-label {\n        margin-bottom: 12px;\n    }\n\n    p {\n        max-width: none;\n        margin: 0 0 18px;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n\n    @include respond-to('laptop') {\n        padding: 30px;\n    }\n\n    @include respond-to('tablet') {\n        text-align: center;\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// Coffee menu: a card grid where each card opens a modal with more detail.\n// -----------------------------------------------------------------------------\n\n.menu-section {\n    background-color: $cream;\n}\n\n.coffee-grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 24px;\n    margin-top: 44px;\n\n    @include respond-to('laptop') {\n        gap: 18px;\n    }\n\n    @include respond-to('tablet') {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    @include respond-to('mobile') {\n        grid-template-columns: 1fr;\n    }\n}\n\n.coffee-card {\n    padding: 0;\n    overflow: hidden;\n    border: 0;\n    border-radius: 18px;\n    text-align: left;\n    color: $text-color;\n    background-color: $origin-cream;\n    box-shadow: $shadow-soft;\n    cursor: pointer;\n    transition:\n        transform 0.2s ease,\n        box-shadow 0.2s ease;\n\n    &:hover {\n        transform: translateY(-6px);\n        box-shadow: $shadow-raised;\n    }\n\n    &:focus-visible {\n        @include focus-ring;\n    }\n\n    img {\n        display: block;\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        object-fit: cover;\n    }\n\n    &__content {\n        display: flex;\n        padding: 22px;\n        flex-direction: column;\n        gap: 7px;\n\n        strong {\n            font-size: 25px;\n        }\n\n        @include respond-to('laptop') {\n            padding: 18px;\n\n            strong {\n                font-size: 22px;\n            }\n        }\n    }\n\n    &__action {\n        margin-top: 8px;\n        color: $caramel;\n        font-size: 13px;\n        font-weight: bold;\n        letter-spacing: 1.2px;\n        text-transform: uppercase;\n    }\n}\n\n// -----------------------------------------------------------------------------\n// Modal\n// -----------------------------------------------------------------------------\n\n.coffee-modal {\n    position: fixed;\n    inset: 0;\n    z-index: 2000;\n    display: flex;\n    padding: 28px;\n    align-items: center;\n    justify-content: center;\n    background-color: $modal-backdrop;\n\n    &[hidden] {\n        display: none;\n    }\n\n    &__dialog {\n        position: relative;\n        display: grid;\n        width: min(900px, 100%);\n        max-height: calc(100vh - 56px);\n        overflow: auto;\n        border-radius: 20px;\n        grid-template-columns: 1fr 1fr;\n        background-color: $light-cream;\n        box-shadow: $shadow-modal;\n        animation: modal-enter 0.25s ease;\n\n        > img {\n            width: 100%;\n            height: 100%;\n            min-height: 520px;\n            object-fit: cover;\n        }\n\n        @include respond-to('tablet') {\n            max-height: calc(100vh - 32px);\n            grid-template-columns: 1fr;\n\n            > img {\n                height: 300px;\n                min-height: 300px;\n            }\n        }\n    }\n\n    &__content {\n        display: flex;\n        padding: 58px 48px;\n        text-align: left;\n        flex-direction: column;\n        justify-content: center;\n\n        .section-label {\n            margin-bottom: 12px;\n        }\n\n        h2 {\n            margin-bottom: 18px;\n        }\n\n        h3 {\n            margin: 30px 0 10px;\n            font-size: 20px;\n        }\n\n        p {\n            margin-bottom: 0;\n        }\n\n        @include respond-to('tablet') {\n            padding: 34px 30px;\n        }\n    }\n\n    &__close {\n        position: absolute;\n        top: 16px;\n        right: 16px;\n        z-index: 1;\n        width: 42px;\n        height: 42px;\n        border: 0;\n        border-radius: 50%;\n        color: white;\n        background-color: $espresso;\n        font-size: 28px;\n        line-height: 1;\n        cursor: pointer;\n\n        &:focus-visible {\n            @include focus-ring(3px);\n        }\n    }\n\n    @include respond-to('tablet') {\n        padding: 16px;\n    }\n}\n\n// Set on <body> while the modal is open to stop background scrolling.\n.modal-open {\n    overflow: hidden;\n}\n\n@keyframes modal-enter {\n    from {\n        opacity: 0;\n        transform: translateY(24px) scale(0.97);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// \"From bean to cup\" carousel: three slides with arrow navigation.\n// -----------------------------------------------------------------------------\n\n.process-section {\n    background-color: $light-cream;\n}\n\n.carousel {\n    display: grid;\n    grid-template-columns: 52px minmax(0, 780px) 52px;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 40px;\n\n    @include respond-to('laptop') {\n        grid-template-columns: 46px minmax(0, 1fr) 46px;\n        gap: 14px;\n    }\n\n    @include respond-to('tablet') {\n        grid-template-columns: 44px minmax(0, 1fr) 44px;\n        gap: 8px;\n    }\n}\n\n.carousel-window {\n    min-height: 520px;\n    overflow: hidden;\n    border-radius: 18px;\n    background-color: $coffee-brown;\n    box-shadow: $shadow-deep;\n\n    @include respond-to('laptop') {\n        min-height: 460px;\n    }\n\n    @include respond-to('tablet') {\n        min-height: 0;\n    }\n}\n\n.carousel-slide {\n    display: none;\n    min-height: 520px;\n    color: white;\n\n    // Only the active slide is rendered; the fade runs on every change.\n    &.active {\n        display: grid;\n        grid-template-columns: 46% 54%;\n        animation: carousel-fade 0.4s ease;\n    }\n\n    img {\n        width: 100%;\n        height: 520px;\n        min-height: 520px;\n        object-fit: cover;\n        object-position: center;\n    }\n\n    h3 {\n        margin: 12px 0 18px;\n        font-size: 38px;\n    }\n\n    &__content {\n        display: flex;\n        padding: 48px;\n        text-align: left;\n        flex-direction: column;\n        justify-content: center;\n\n        p {\n            margin: 0;\n            color: $cream;\n        }\n    }\n\n    @include respond-to('laptop') {\n        min-height: 460px;\n\n        img {\n            height: 460px;\n            min-height: 460px;\n        }\n\n        h3 {\n            font-size: 32px;\n        }\n\n        &__content {\n            padding: 36px;\n        }\n    }\n\n    @include respond-to('tablet') {\n        min-height: 0;\n\n        &.active {\n            grid-template-columns: 1fr;\n        }\n\n        img {\n            height: 360px;\n            min-height: 360px;\n            object-fit: contain;\n            background-color: $origin-cream;\n        }\n\n        h3 {\n            font-size: 30px;\n        }\n\n        &__content {\n            padding: 30px;\n            text-align: center;\n        }\n    }\n}\n\n.carousel-button {\n    width: 52px;\n    height: 52px;\n    border: 0;\n    border-radius: 50%;\n    color: white;\n    background-color: $espresso;\n    font-size: 24px;\n    cursor: pointer;\n    transition:\n        background-color 0.2s ease,\n        transform 0.2s ease;\n\n    &:hover {\n        background-color: $caramel;\n        transform: scale(1.08);\n    }\n\n    &:focus-visible {\n        @include focus-ring;\n    }\n\n    @include respond-to('laptop') {\n        width: 46px;\n        height: 46px;\n        font-size: 22px;\n    }\n\n    @include respond-to('tablet') {\n        width: 44px;\n        height: 44px;\n        font-size: 20px;\n    }\n}\n\n@keyframes carousel-fade {\n    from {\n        opacity: 0;\n        transform: translateX(18px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateX(0);\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// Coffee origins: three-column card grid, one per growing region.\n// -----------------------------------------------------------------------------\n\n.origins-section {\n    background-color: $origins-sand;\n}\n\n.origins-grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 24px;\n    margin-top: 44px;\n    text-align: left;\n\n    @include respond-to('laptop') {\n        gap: 18px;\n    }\n\n    @include respond-to('tablet') {\n        grid-template-columns: 1fr;\n    }\n}\n\n.origin-card {\n    overflow: hidden;\n    border-radius: 18px;\n    background-color: $origin-cream;\n    box-shadow: $shadow-card;\n\n    &__content {\n        padding: 28px;\n\n        h3 {\n            margin: 0 0 16px;\n            font-size: 28px;\n        }\n\n        p {\n            margin: 0 0 22px;\n        }\n\n        // Two classes, so this beats the `p` rule above without `:not()`.\n        .origin-region {\n            margin: 0 0 8px;\n            color: $caramel;\n            font-size: 13px;\n            font-weight: bold;\n            letter-spacing: 1.5px;\n            text-transform: uppercase;\n        }\n\n        @include respond-to('laptop') {\n            padding: 22px;\n\n            h3 {\n                font-size: 24px;\n            }\n        }\n    }\n}\n\n.origin-map {\n    display: flex;\n    height: 300px;\n    padding: 0;\n    align-items: center;\n    justify-content: center;\n    background-color: $origin-cream;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    @include respond-to('laptop') {\n        height: 240px;\n    }\n}\n\n.flavor-list {\n    display: flex;\n    padding: 0;\n    margin: 0;\n    flex-wrap: wrap;\n    gap: 8px;\n    list-style: none;\n\n    li {\n        padding: 7px 11px;\n        border-radius: 999px;\n        background-color: $cream;\n        font-size: 13px;\n        font-weight: bold;\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// \"Visit us\" stripe: an HTML5 video plus address and opening hours.\n// -----------------------------------------------------------------------------\n\n.visit-section {\n    background-color: $visit-sand;\n}\n\n.visit-video {\n    width: min(100%, 960px);\n    margin: 36px auto 32px;\n    overflow: hidden;\n    border-radius: 24px;\n    background-color: $espresso;\n    box-shadow: $shadow-video;\n\n    video {\n        display: block;\n        width: 100%;\n        max-height: 560px;\n        object-fit: cover;\n    }\n}\n\n.visit-details {\n    display: grid;\n    gap: 12px;\n    justify-content: center;\n}\n\n.visit-detail {\n    display: flex;\n    margin: 0;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n    // Scalable vector icons, masked from the `$icons` map.\n    &--location::before {\n        @include vector-icon('location');\n    }\n\n    &--hours::before {\n        @include vector-icon('clock');\n    }\n}\n","@use 'variables' as *;\n@use 'mixins' as *;\n\n// -----------------------------------------------------------------------------\n// Site footer and social media icons.\n// -----------------------------------------------------------------------------\n\n.site-footer {\n    width: 100%;\n    padding: 48px 0;\n    text-align: center;\n    background-color: $espresso;\n    color: white;\n\n    p {\n        margin-bottom: 8px;\n    }\n}\n\n.footer-social {\n    display: flex;\n    gap: 14px;\n    margin-top: 24px;\n    justify-content: center;\n}\n\n.social-link {\n    display: grid;\n    width: 46px;\n    height: 46px;\n    border: 2px solid rgba(255, 255, 255, 0.7);\n    border-radius: 50%;\n    place-items: center;\n    color: white;\n    transition:\n        color 0.2s ease,\n        background-color 0.2s ease,\n        transform 0.2s ease;\n\n    &::before {\n        width: 22px;\n        height: 22px;\n        background-color: currentColor;\n        content: '';\n    }\n\n    &--github::before {\n        @include vector-icon('github', 22px, currentColor, $fixed-width: false);\n    }\n\n    &--x::before {\n        @include vector-icon('x', 22px, currentColor, $fixed-width: false);\n    }\n\n    &:hover,\n    &:focus-visible {\n        color: $espresso;\n        background-color: $cream;\n        transform: translateY(-3px);\n    }\n\n    &:focus-visible {\n        @include focus-ring(3px);\n    }\n}\n","@media (prefers-reduced-motion: reduce) {\n    html { scroll-behavior: auto; }\n\n    *, *::before, *::after {\n        animation: none !important;\n        transition: none !important;\n    }\n\n    .hero-section { background-attachment: scroll; }\n\n    .coffee-card:hover, .carousel-button:hover, .social-link:hover,\n    .social-link:focus-visible { transform: none; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/daily-brew-logo.png */ "./assets/daily-brew-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/our-story-background.jpg */ "./assets/our-story-background.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/our-story-video.mp4 */ "./assets/our-story-video.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/Espresso.png */ "./assets/coffeeAssets/Espresso.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/Americano.png */ "./assets/coffeeAssets/Americano.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/Latte.png */ "./assets/coffeeAssets/Latte.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/Cappuccino.png */ "./assets/coffeeAssets/Cappuccino.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/Mocha.png */ "./assets/coffeeAssets/Mocha.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffeeAssets/ColdBrew.png */ "./assets/coffeeAssets/ColdBrew.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffee-sourcing-card.png */ "./assets/coffee-sourcing-card.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffee-roasting-card.png */ "./assets/coffee-roasting-card.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffee-brewing-card.png */ "./assets/coffee-brewing-card.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/map-colombia.png */ "./assets/map-colombia.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/map-ethiopia.png */ "./assets/map-ethiopia.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/map-java.png */ "./assets/map-java.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/coffee-shop.mp4 */ "./assets/coffee-shop.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n        <title>Daily Brew Coffee</title>\n    </head>\n\n    <body>\n        <header class=\"site-header\">\n            <div class=\"container header-content\">\n                <a class=\"brand\" href=\"#home\" aria-label=\"Daily Brew home\">\n                    <span class=\"site-name\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></span>\n                    <span class=\"brand-wordmark\">Daily Brew</span>\n                </a>\n\n                <nav class=\"main-navigation\" aria-label=\"Main navigation\">\n                    <a href=\"#home\">Home</a>\n                    <a href=\"#story\">Our Story</a>\n                    <a href=\"#menu\">Menu</a>\n                    <a href=\"#process\">Process</a>\n                    <a href=\"#origins\">Origins</a>\n                    <a href=\"#visit\">Visit</a>\n                </nav>\n            </div>\n        </header>\n\n        <main>\n            <section id=\"home\" class=\"page-section hero-section\">\n                <div class=\"container\">\n                    <p class=\"section-label\">Freshly brewed every day</p>\n                    <h1>Good coffee. Good moments.</h1>\n\n                    <p class=\"section-intro\">\n                        Welcome to Daily Brew, a neighborhood coffee shop\n                        serving carefully roasted coffee in a warm and\n                        comfortable space.\n                    </p>\n                </div>\n            </section>\n            <section id=\"story\" class=\"page-section story-section\">\n                <video\n                    class=\"story-background-video\"\n                    muted\n                    loop\n                    playsinline\n                    preload=\"auto\"\n                    poster=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n                    aria-hidden=\"true\"\n                    tabindex=\"-1\"\n                >\n                    <source src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"video/mp4\">\n                </video>\n\n                <div class=\"container story-layout\">\n                    <div class=\"story-logo\">\n                        <img\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                            alt=\"Daily Brew — Good coffee. Good moments.\"\n                        >\n                    </div>\n\n                    <div class=\"story-copy\">\n                        <p class=\"section-label\">Our story</p>\n                        <h2>Made for slow mornings</h2>\n\n                        <p>\n                            Daily Brew began with a simple belief: a good cup of\n                            coffee can make an ordinary day feel warmer. We choose\n                            quality beans, roast them with care, and prepare every\n                            drink with patience so each cup feels worth slowing\n                            down for.\n                        </p>\n\n                        <p>\n                            More than a place to pick up coffee, our shop is a\n                            comfortable neighborhood space for quiet mornings,\n                            friendly conversations, and small everyday moments.\n                            Whether you stay awhile or take your cup to go, we\n                            hope Daily Brew adds something good to your day.\n                        </p>\n                        <button class=\"story-video-toggle\" type=\"button\">Play background video</button>\n                    </div>\n                </div>\n            </section>\n            <section id=\"menu\" class=\"page-section menu-section\">\n                <div class=\"container\">\n                    <p class=\"section-label\">Coffee menu</p>\n                    <h2>Choose your next cup</h2>\n\n                    <p class=\"section-intro\">\n                        Select a drink to explore its flavor, ingredients,\n                        and preparation.\n                    </p>\n\n                    <div class=\"coffee-grid\">\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"espresso\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Illustration of an espresso\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Espresso</strong>\n                                <span>Bold and concentrated</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"americano\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Illustration of an Americano\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Americano</strong>\n                                <span>Smooth and aromatic</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"latte\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Illustration of a latte\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Latte</strong>\n                                <span>Creamy and balanced</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"cappuccino\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Illustration of a cappuccino\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Cappuccino</strong>\n                                <span>Rich and airy</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"mocha\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Illustration of a mocha\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Mocha</strong>\n                                <span>Chocolate and espresso</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n\n                        <button class=\"coffee-card\" type=\"button\" data-coffee=\"coldBrew\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Illustration of a cold brew\">\n                            <span class=\"coffee-card__content\">\n                                <strong>Cold Brew</strong>\n                                <span>Refreshing and mellow</span>\n                                <span class=\"coffee-card__action\">View details</span>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n            </section>\n            <section id=\"process\" class=\"page-section process-section\">\n                <div class=\"container\">\n                    <p class=\"section-label\">From bean to cup</p>\n                    <h2>Every cup follows a journey</h2>\n\n                    <p class=\"section-intro\">\n                        Follow coffee from carefully selected cherries to\n                        the final brew in three essential steps.\n                    </p>\n\n                    <div class=\"carousel\" aria-label=\"From bean to cup process\">\n                        <button\n                            class=\"carousel-button carousel-button--previous\"\n                            type=\"button\"\n                            aria-label=\"Show previous process step\"\n                        >\n                            &#10094;\n                        </button>\n\n                        <div class=\"carousel-window\" aria-live=\"polite\">\n                            <article class=\"carousel-slide active\" aria-hidden=\"false\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\n                                    alt=\"Illustration of coffee cherries growing on a mountain farm\"\n                                >\n\n                                <div class=\"carousel-slide__content\">\n                                    <h3>Sourcing</h3>\n\n                                    <p>\n                                        Ripe coffee cherries are carefully selected\n                                        from farms where climate, soil, and elevation\n                                        shape their flavor.\n                                    </p>\n                                </div>\n                            </article>\n\n                            <article class=\"carousel-slide\" aria-hidden=\"true\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\n                                    alt=\"Illustration of coffee beans inside a roasting machine\"\n                                >\n\n                                <div class=\"carousel-slide__content\">\n                                    <h3>Roasting</h3>\n\n                                    <p>\n                                        Heat transforms green coffee beans, developing\n                                        their aroma, sweetness, color, and distinctive\n                                        roasted character.\n                                    </p>\n                                </div>\n                            </article>\n\n                            <article class=\"carousel-slide\" aria-hidden=\"true\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\n                                    alt=\"Illustration of coffee being prepared with a pour-over brewer\"\n                                >\n\n                                <div class=\"carousel-slide__content\">\n                                    <h3>Brewing</h3>\n\n                                    <p>\n                                        Freshly ground beans meet water at the right\n                                        temperature and timing to create a balanced,\n                                        aromatic cup.\n                                    </p>\n                                </div>\n                            </article>\n                        </div>\n\n                        <button\n                            class=\"carousel-button carousel-button--next\"\n                            type=\"button\"\n                            aria-label=\"Show next process step\"\n                        >\n                            &#10095;\n                        </button>\n                    </div>\n                </div>\n            </section>\n            <section id=\"origins\" class=\"page-section origins-section\">\n                <div class=\"container\">\n                    <p class=\"section-label\">Coffee origins</p>\n                    <h2>Three regions, three distinct flavors</h2>\n\n                    <p class=\"section-intro\">\n                        Climate, elevation, and local traditions give coffee\n                        from each growing region its own character.\n                    </p>\n\n                    <div class=\"origins-grid\">\n                        <article class=\"origin-card\">\n                            <div class=\"origin-map\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\n                                    alt=\"Outline map of Colombia labeled Colombia and Latin America\"\n                                >\n                            </div>\n\n                            <div class=\"origin-card__content\">\n                                <p class=\"origin-region\">Latin America</p>\n                                <h3>Colombia</h3>\n\n                                <p>\n                                    Balanced and approachable, Colombian coffee\n                                    often brings a gentle sweetness and bright finish.\n                                </p>\n\n                                <ul class=\"flavor-list\" aria-label=\"Colombia flavor notes\">\n                                    <li>Caramel</li>\n                                    <li>Cocoa</li>\n                                    <li>Citrus</li>\n                                </ul>\n                            </div>\n                        </article>\n\n                        <article class=\"origin-card\">\n                            <div class=\"origin-map\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\n                                    alt=\"Outline map of Ethiopia labeled Ethiopia and Africa\"\n                                >\n                            </div>\n\n                            <div class=\"origin-card__content\">\n                                <p class=\"origin-region\">Africa</p>\n                                <h3>Ethiopia</h3>\n\n                                <p>\n                                    Ethiopian coffees are known for expressive\n                                    aromas, lively acidity, and a tea-like finish.\n                                </p>\n\n                                <ul class=\"flavor-list\" aria-label=\"Ethiopia flavor notes\">\n                                    <li>Floral</li>\n                                    <li>Berry</li>\n                                    <li>Citrus</li>\n                                </ul>\n                            </div>\n                        </article>\n\n                        <article class=\"origin-card\">\n                            <div class=\"origin-map\">\n                                <img\n                                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                                    alt=\"Outline map of Java labeled Java, Indonesia and Asia Pacific\"\n                                >\n                            </div>\n\n                            <div class=\"origin-card__content\">\n                                <p class=\"origin-region\">Asia Pacific</p>\n                                <h3>Java, Indonesia</h3>\n\n                                <p>\n                                    Java coffee is often full-bodied and smooth,\n                                    with deep savory notes and a lasting finish.\n                                </p>\n\n                                <ul class=\"flavor-list\" aria-label=\"Java flavor notes\">\n                                    <li>Earthy</li>\n                                    <li>Herbal</li>\n                                    <li>Spice</li>\n                                </ul>\n                            </div>\n                        </article>\n                    </div>\n                </div>\n            </section>\n            <section id=\"visit\" class=\"page-section visit-section\">\n                <div class=\"container\">\n                    <p class=\"section-label\">Visit us</p>\n                    <h2>Stay for a while</h2>\n\n                    <div class=\"visit-video\">\n                        <video controls preload=\"metadata\" playsinline>\n                            <source src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" type=\"video/mp4\">\n                            Your browser does not support HTML5 video.\n                        </video>\n                    </div>\n\n                    <div class=\"visit-details\">\n                        <p class=\"visit-detail visit-detail--location\">\n                            123 Coffee Street, Champaign, Illinois\n                        </p>\n\n                        <p class=\"visit-detail visit-detail--hours\">\n                            Open Monday through Sunday, 7:00 AM–6:00 PM\n                        </p>\n                    </div>\n                </div>\n            </section>\n        </main>\n\n        <div\n            id=\"coffee-modal\"\n            class=\"coffee-modal\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"coffee-modal-title\"\n            hidden\n        >\n            <div class=\"coffee-modal__dialog\">\n                <button\n                    class=\"coffee-modal__close\"\n                    type=\"button\"\n                    aria-label=\"Close coffee details\"\n                >\n                    &times;\n                </button>\n\n                <img id=\"coffee-modal-image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n\n                <div class=\"coffee-modal__content\">\n                    <p class=\"section-label\">Coffee profile</p>\n                    <h2 id=\"coffee-modal-title\">Espresso</h2>\n                    <p id=\"coffee-modal-description\"></p>\n\n                    <h3>What is inside</h3>\n                    <p id=\"coffee-modal-details\"></p>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"site-footer\">\n            <div class=\"container\">\n                <p>© 2026 Daily Brew Coffee</p>\n                <p>Made with care in Champaign, Illinois.</p>\n\n                <nav class=\"footer-social\" aria-label=\"Social media links\">\n                    <a\n                        class=\"social-link social-link--github\"\n                        href=\"https://github.com/hengruiren\"\n                        target=\"_blank\"\n                        rel=\"noopener noreferrer\"\n                        aria-label=\"Visit Hengrui Ren on GitHub\"\n                        title=\"GitHub\"\n                    ></a>\n\n                    <a\n                        class=\"social-link social-link--x\"\n                        href=\"https://x.com/Starbucks\"\n                        target=\"_blank\"\n                        rel=\"noopener noreferrer\"\n                        aria-label=\"Visit Starbucks on X\"\n                        title=\"Starbucks on X\"\n                    ></a>\n                </nav>\n            </div>\n        </footer>\n    </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z%27/%3E%3C/svg%3E"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.28 5.68.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z%27/%3E%3C/svg%3E"
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.59l3.2 3.2-1.41 1.41L11 12.41V7h2Z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z%27/%3E%3C/svg%3E"
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z%27/%3E%3C/svg%3E"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z%27/%3E%3C/svg%3E";

/***/ },

/***/ "./assets/coffee-shop.mp4"
/*!********************************!*\
  !*** ./assets/coffee-shop.mp4 ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f6acf0412594a1236275.mp4";

/***/ },

/***/ "./assets/our-story-video.mp4"
/*!************************************!*\
  !*** ./assets/our-story-video.mp4 ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aace83ea55d7ff6c5f88.mp4";

/***/ },

/***/ "./assets/coffee-brewing-card.png"
/*!****************************************!*\
  !*** ./assets/coffee-brewing-card.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40b93bdf8be850d5d016.png";

/***/ },

/***/ "./assets/coffee-roasting-card.png"
/*!*****************************************!*\
  !*** ./assets/coffee-roasting-card.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2285d16e79f4a59a9b9.png";

/***/ },

/***/ "./assets/coffee-sourcing-card.png"
/*!*****************************************!*\
  !*** ./assets/coffee-sourcing-card.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0aad46e410fe3e07bb80.png";

/***/ },

/***/ "./assets/coffeeAssets/Americano.png"
/*!*******************************************!*\
  !*** ./assets/coffeeAssets/Americano.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2b470a788b20fe58a1c.png";

/***/ },

/***/ "./assets/coffeeAssets/Cappuccino.png"
/*!********************************************!*\
  !*** ./assets/coffeeAssets/Cappuccino.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef33aa5b686e7ebbf2e2.png";

/***/ },

/***/ "./assets/coffeeAssets/ColdBrew.png"
/*!******************************************!*\
  !*** ./assets/coffeeAssets/ColdBrew.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d0624978426b7e05b03.png";

/***/ },

/***/ "./assets/coffeeAssets/Espresso.png"
/*!******************************************!*\
  !*** ./assets/coffeeAssets/Espresso.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3900ceb67d87a65ef5ba.png";

/***/ },

/***/ "./assets/coffeeAssets/Latte.png"
/*!***************************************!*\
  !*** ./assets/coffeeAssets/Latte.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ed1d728434bdb83ce70.png";

/***/ },

/***/ "./assets/coffeeAssets/Mocha.png"
/*!***************************************!*\
  !*** ./assets/coffeeAssets/Mocha.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3337f9571f6c1a581a4a.png";

/***/ },

/***/ "./assets/daily-brew-logo.png"
/*!************************************!*\
  !*** ./assets/daily-brew-logo.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e06b82e75f4052b4fdae.png";

/***/ },

/***/ "./assets/map-colombia.png"
/*!*********************************!*\
  !*** ./assets/map-colombia.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7166b4b0f1c53c3c8e2e.png";

/***/ },

/***/ "./assets/map-ethiopia.png"
/*!*********************************!*\
  !*** ./assets/map-ethiopia.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "82831e96c89a6422f4cb.png";

/***/ },

/***/ "./assets/map-java.png"
/*!*****************************!*\
  !*** ./assets/map-java.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d88ee4e00ea060f0dfe0.png";

/***/ },

/***/ "./assets/our-story-background.jpg"
/*!*****************************************!*\
  !*** ./assets/our-story-background.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65d289030b03fcf87fa2.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map