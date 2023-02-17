/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n   cursor: pointer;\r\n\r\n}\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n\r\n}\r\n\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createBtn , .backBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 70%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n\r\n}\r\n.taskContent > h2 {\r\n    text-align: center;\r\n    background-color: rgb(196, 212, 226);\r\n    width: 100%;\r\n    font-size: 30px;\r\n}\r\n.description {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 300px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.priority > li:hover {\r\n    scale: 1.5;\r\n\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,2CAA2C;;IAE3C,iBAAiB;;AAErB;AACA;IACI,oCAAoC;IACpC,aAAa;IACb,kBAAkB;IAClB,4EAA4E;IAC5E,mBAAmB;;;;AAIvB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,uCAAuC;IACvC,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;;;;AAItB;;AAEA;AACA,gBAAgB;AAChB,gDAAgD;AAChD;;AAEA;;IAEI,iBAAiB;IACjB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;GACd,eAAe;;AAElB;AACA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;;AAGvB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,eAAe;AACnB;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA,kEAAkE;;AAElE;AACA,aAAa;AACb,YAAY;AACZ,kCAAkC;AAClC,aAAa;AACb,mBAAmB;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;;AAGA;IACI,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,0BAA0B;IAC1B,aAAa;;AAEjB;AACA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,eAAe;AACnB;AACA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,gBAAgB;;AAEpB;AACA;IACI,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;;AAEpB;AACA;IACI,UAAU;;AAEd;AACA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n   cursor: pointer;\r\n\r\n}\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n\r\n}\r\n\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createBtn , .backBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 70%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n\r\n}\r\n.taskContent > h2 {\r\n    text-align: center;\r\n    background-color: rgb(196, 212, 226);\r\n    width: 100%;\r\n    font-size: 30px;\r\n}\r\n.description {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 300px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.priority > li:hover {\r\n    scale: 1.5;\r\n\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
  } // For old IE

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBtn": () => (/* binding */ addBtn),
/* harmony export */   "addOption": () => (/* binding */ addOption),
/* harmony export */   "backBtn": () => (/* binding */ backBtn),
/* harmony export */   "btnIcon": () => (/* binding */ btnIcon),
/* harmony export */   "cancelOption": () => (/* binding */ cancelOption),
/* harmony export */   "checklist": () => (/* binding */ checklist),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "descriptionInput": () => (/* binding */ descriptionInput),
/* harmony export */   "dueDateInput": () => (/* binding */ dueDateInput),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "headertitle": () => (/* binding */ headertitle),
/* harmony export */   "notes": () => (/* binding */ notes),
/* harmony export */   "optionDiv": () => (/* binding */ optionDiv),
/* harmony export */   "pjCreateDiv": () => (/* binding */ pjCreateDiv),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "priorityOptions": () => (/* binding */ priorityOptions),
/* harmony export */   "projDiv": () => (/* binding */ projDiv),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "projectName": () => (/* binding */ projectName),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "sidebarTitle": () => (/* binding */ sidebarTitle),
/* harmony export */   "taskContentDiv": () => (/* binding */ taskContentDiv)
/* harmony export */ });
/* harmony import */ var _src_asset_add_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/asset/add icon.png */ "./src/asset/add icon.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




//==========================================================
const container = document.querySelector(".container")
const header = document.createElement("div")
    header.classList.add("header")
const headertitle = document.createElement("h2")
headertitle.textContent = "jevzzy to-dO-APP"
const sidebar = document.createElement("div")
sidebar.classList.add("sidebar")
//content
const content = document.createElement("div")
content.classList.add("content")
const addBtn = document.createElement("button")
addBtn.classList.add("addBtn")
const btnIcon = document.createElement("img")
btnIcon.src = _src_asset_add_icon_png__WEBPACK_IMPORTED_MODULE_0__
addBtn.appendChild(btnIcon)
const footer = document.createElement("div")
footer.classList.add("footer")




//for side bar======================================================
const sidebarTitle = document.createElement("h2")
sidebarTitle.innerText = "Project"
sidebar.appendChild(sidebarTitle)

const projDiv = document.createElement("div")
projDiv.classList.add("projDiv")
sidebar.appendChild(projDiv)
projDiv.append(addBtn)

const projectList = document.createElement("ul")
projectList.classList.add("projectList")
//export const project = document.createElement("li")


//==========================================================


const projectInput = document.createElement("input")
projectInput.classList.add("projectInput")
projectInput.placeholder = "name of project"
const createBtn = document.createElement("button")
createBtn.classList.add("createBtn")
createBtn.innerText = "create"
const backBtn = document.createElement("button")
backBtn.classList.add("backBtn")
backBtn.innerText = "x"
const pjCreateDiv = document.createElement("div")
pjCreateDiv.classList.add("createDiv")
pjCreateDiv.append(createBtn)
pjCreateDiv.append(backBtn)
//=================task in project=============================================

const optionDiv = document.createElement("div")
optionDiv.classList.add("optionDiv")
const addOption = document.createElement("button")
addOption.innerText = "Add"
const cancelOption = document.createElement("button");
cancelOption.innerText = "Cancel"
optionDiv.appendChild(addOption)
optionDiv.appendChild(cancelOption)

const taskContentDiv = document.createElement("div")
taskContentDiv.classList.add("taskContent")
content.appendChild(taskContentDiv)


const descriptionInput = document.createElement("input")
descriptionInput.classList.add("description")
descriptionInput.placeholder = "TITLE"
const dueDateInput = document.createElement("input")
 dueDateInput.classList.add("date")
 dueDateInput.type = "date"
 const notes = document.createElement("textarea")
notes.classList.add("notes")
const checklist = document.createElement("input")
const priorityOptions = document.createElement("ul")
priorityOptions.classList.add("priority")
priorityOptions.innerHTML = "<li>Low</li><li>Mid</li><li>High</li>"
taskContentDiv.appendChild(descriptionInput)
taskContentDiv.appendChild(notes)
taskContentDiv.appendChild(priorityOptions)
taskContentDiv.appendChild(dueDateInput)
taskContentDiv.appendChild(optionDiv)
checklist.type = "checkbox"







const projectName = document.createElement("h2")






backBtn.addEventListener("click", ()=>{
projDiv.removeChild(projectInput)
projDiv.removeChild(pjCreateDiv)
projDiv.append(addBtn)
addBtn.style.display = "inline"

})




const priorities = priorityOptions.querySelectorAll("li")





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addProjectToList": () => (/* binding */ addProjectToList),
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask),
/* harmony export */   "displayProjectlist": () => (/* binding */ displayProjectlist),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom.js */ "./src/Dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





class Task {
    constructor(description,notes,priority){
        this.description = description;
        this.notes = notes;
        this.priority = priority
    }
}
const tasks = []

const projectArray = []




function addProjectToList (){
 
    projectArray.push(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.value)
   displayProjectlist()
  }


const displayProjectlist = ()=>{
 for(const child of _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.children) {
  child.remove()

 }
 
 
  for(let i = 0;i < projectArray.length; i++){
    
    const project = document.createElement("li")
    project.innerText = `${projectArray[i]} `
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.appendChild(project)
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.sidebar.insertBefore(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList, _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projDiv)
    
  } 
  }

  


const createNewTask = () => {
  //  const projectName = DOM.projectInput.value
    const newTaskDescription = DOM.descriptionInput.value
    const newTaskNote = DOM.notes.value
const newTask = new Task(newTaskDescription,newTaskNote,priority)
tasks.push(newTask)
}


/***/ }),

/***/ "./src/asset/add icon.png":
/*!********************************!*\
  !*** ./src/asset/add icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81758dcbd13eaf9bf4bb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ "./src/Dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");






const homepage = () =>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.headertitle)
  //container appending
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.header)
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.sidebar)
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.content)
 _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.footer)
}

  console.log(_task_js__WEBPACK_IMPORTED_MODULE_2__.displayProjectlist())
window.addEventListener("DOMContentLoaded",  _task_js__WEBPACK_IMPORTED_MODULE_2__.displayProjectlist)  
window.addEventListener("DOMContentLoaded",homepage);


_Dom__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener("click", ()=>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.projDiv.removeChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.addBtn)
   /*projectInput.style.display = "block"
   pjCreateDiv.style.display = "flex"*/
  _Dom__WEBPACK_IMPORTED_MODULE_0__.projDiv.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.projectInput)
  _Dom__WEBPACK_IMPORTED_MODULE_0__.projDiv.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.pjCreateDiv)
   
   
 }, {once:false});

 _Dom__WEBPACK_IMPORTED_MODULE_0__.createBtn.addEventListener("click", ()=>{
  if(_Dom__WEBPACK_IMPORTED_MODULE_0__.projectInput.value !== "" ) {
    _Dom__WEBPACK_IMPORTED_MODULE_0__.sidebar.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.projectList)
    _Dom__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv)
    _Dom__WEBPACK_IMPORTED_MODULE_0__.projectName.innerText = _Dom__WEBPACK_IMPORTED_MODULE_0__.projectInput.value
    _Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv.insertBefore(_Dom__WEBPACK_IMPORTED_MODULE_0__.projectName, _Dom__WEBPACK_IMPORTED_MODULE_0__.descriptionInput)
    _Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv.style.display = "block"
    _task_js__WEBPACK_IMPORTED_MODULE_2__.addProjectToList()

  }
  });





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNSO0FBQ1c7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFzQixDQUFDLDZDQUFlO0FBQ3hDO0FBQ0EsRUFBRSx1REFBeUIsQ0FBQyx3Q0FBVTtBQUN0QyxFQUFFLHVEQUF5QixDQUFDLHlDQUFXO0FBQ3ZDLEVBQUUsdURBQXlCLENBQUMseUNBQVc7QUFDdkMsQ0FBQyx1REFBeUIsQ0FBQyx3Q0FBVTtBQUNyQztBQUNBO0FBQ0EsY0FBYyx3REFBcUI7QUFDbkMsNkNBQTZDLHdEQUFxQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQSx5REFBMkI7QUFDM0IsRUFBRSxxREFBdUIsQ0FBQyx3Q0FBVTtBQUNwQztBQUNBO0FBQ0EsRUFBRSxxREFBdUIsQ0FBQyw4Q0FBZ0I7QUFDMUMsRUFBRSxxREFBdUIsQ0FBQyw2Q0FBZTtBQUN6QztBQUNBO0FBQ0EsRUFBRSxHQUFHLFdBQVc7QUFDaEI7QUFDQSxDQUFDLDREQUE4QjtBQUMvQixLQUFLLG9EQUFzQjtBQUMzQixJQUFJLHFEQUF1QixDQUFDLDZDQUFlO0FBQzNDLElBQUkscURBQXVCLENBQUMsZ0RBQWtCO0FBQzlDLElBQUksdURBQXlCLEdBQUcsb0RBQXNCO0FBQ3RELElBQUksNkRBQStCLENBQUMsNkNBQWUsRUFBRSxrREFBb0I7QUFDekUsSUFBSSw4REFBZ0M7QUFDcEMsSUFBSSxzREFBbUI7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Eb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpIDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAzMDBweCAzMDBweCAyMDBweDtcXHJcXG4gICBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjA4LCAyMDgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbn1cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOjEgLyBzcGFuIDE7XFxyXFxuICAgIGdyaWQtcm93OnNwYW4gMztcXHJcXG4gICAgd2lkdGg6Y2xhbXAobWluKDMwMHB4LCAxMDAlKSw0dncsNTAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY0LCA2NCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGgyIHtcXHJcXG5tYXJnaW4tdG9wOiA0MHB4O1xcclxcbmZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0IHtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCA+IGxpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1MiwgNTIpO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcclxcbiAgICBncmlkLWNvbHVtbjoyIC8gc3BhbiA0IDtcXHJcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM2LCAyMzYpO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWRkQnRuID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxyXFxufVxcclxcblxcclxcbi8qbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ucHJvakRpdiB7XFxyXFxuaGVpZ2h0OiAxMDBweDtcXHJcXG5jb2xvcjogYmxhY2s7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpIDtcXHJcXG5wYWRkaW5nOiAyMHB4O1xcclxcbm1hcmdpbi1sZWZ0OiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qRGl2ID4gaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZUJ0biAsIC5iYWNrQnRue1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgIFxcclxcblxcclxcbi5wcm9qZWN0Rm9ybURpdiAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrQ29udGVudCA+IGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyMTIsIDIyNik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6NTBweCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgXFxyXFxufVxcclxcbi5zY2FsZSB7XFxyXFxuICAgIHNjYWxlOjEuNTtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXIgO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOmhvdmVyIHtcXHJcXG4gICAgc2NhbGU6IDEuNTtcXHJcXG5cXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6Zmlyc3QtY2hpbGQge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jcmVhdGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsMkNBQTJDOztJQUUzQyxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0RUFBNEU7SUFDNUUsbUJBQW1COzs7O0FBSXZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjs7OztBQUl0Qjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnREFBZ0Q7QUFDaEQ7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtHQUNkLGVBQWU7O0FBRWxCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsa0VBQWtFOztBQUVsRTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFVBQVU7O0FBRWQ7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKSA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMzAwcHggMzAwcHggMjAwcHg7XFxyXFxuICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwOCwgMjA4KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWNvbHVtbjoxIC8gc3BhbiAxO1xcclxcbiAgICBncmlkLXJvdzpzcGFuIDM7XFxyXFxuICAgIHdpZHRoOmNsYW1wKG1pbigzMDBweCwgMTAwJSksNHZ3LDUwMHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBoMiB7XFxyXFxubWFyZ2luLXRvcDogNDBweDtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3QgPiBsaSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTIsIDUyKTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MiAvIHNwYW4gNCA7XFxyXFxuICAgIGdyaWQtcm93OiBzcGFuIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZEJ0biA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xcclxcbn1cXHJcXG5cXHJcXG4vKm49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxyXFxuXFxyXFxuLnByb2pEaXYge1xcclxcbmhlaWdodDogMTAwcHg7XFxyXFxuY29sb3I6IGJsYWNrO1xcclxcbmJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjQsIDY0KSA7XFxyXFxucGFkZGluZzogMjBweDtcXHJcXG5tYXJnaW4tbGVmdDogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvakRpdiA+IGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVCdG4gLCAuYmFja0J0bntcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gICBcXHJcXG5cXHJcXG4ucHJvamVjdEZvcm1EaXYgIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246bnRoLW9mLXR5cGUoMil7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbn1cXHJcXG4udGFza0NvbnRlbnQgPiBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMjEyLCAyMjYpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ub3RlcyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjUwcHggO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4uc2NhbGUge1xcclxcbiAgICBzY2FsZToxLjU7XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaTpob3ZlciB7XFxyXFxuICAgIHNjYWxlOiAxLjU7XFxyXFxuXFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3JlYXRlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpY29uIGZyb20gXCIuLi9zcmMvYXNzZXQvYWRkIGljb24ucG5nXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxyXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcclxuZXhwb3J0IGNvbnN0IGhlYWRlcnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbmhlYWRlcnRpdGxlLnRleHRDb250ZW50ID0gXCJqZXZ6enkgdG8tZE8tQVBQXCJcclxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIilcclxuLy9jb250ZW50XHJcbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpXHJcbmV4cG9ydCBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkQnRuXCIpXHJcbmV4cG9ydCBjb25zdCBidG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5idG5JY29uLnNyYyA9IGljb25cclxuYWRkQnRuLmFwcGVuZENoaWxkKGJ0bkljb24pXHJcbmV4cG9ydCBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXHJcblxyXG5cclxuXHJcblxyXG4vL2ZvciBzaWRlIGJhcj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbnNpZGViYXJUaXRsZS5pbm5lclRleHQgPSBcIlByb2plY3RcIlxyXG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSlcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qRGl2XCIpXHJcbnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvakRpdilcclxucHJvakRpdi5hcHBlbmQoYWRkQnRuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbnByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TGlzdFwiKVxyXG4vL2V4cG9ydCBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5wcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RJbnB1dFwiKVxyXG5wcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSBcIm5hbWUgb2YgcHJvamVjdFwiXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlQnRuXCIpXHJcbmNyZWF0ZUJ0bi5pbm5lclRleHQgPSBcImNyZWF0ZVwiXHJcbmV4cG9ydCBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5iYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrQnRuXCIpXHJcbmJhY2tCdG4uaW5uZXJUZXh0ID0gXCJ4XCJcclxuZXhwb3J0IGNvbnN0IHBqQ3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wakNyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlRGl2XCIpXHJcbnBqQ3JlYXRlRGl2LmFwcGVuZChjcmVhdGVCdG4pXHJcbnBqQ3JlYXRlRGl2LmFwcGVuZChiYWNrQnRuKVxyXG4vLz09PT09PT09PT09PT09PT09dGFzayBpbiBwcm9qZWN0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5vcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm9wdGlvbkRpdlwiKVxyXG5leHBvcnQgY29uc3QgYWRkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5hZGRPcHRpb24uaW5uZXJUZXh0ID0gXCJBZGRcIlxyXG5leHBvcnQgY29uc3QgY2FuY2VsT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuY2FuY2VsT3B0aW9uLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCJcclxub3B0aW9uRGl2LmFwcGVuZENoaWxkKGFkZE9wdGlvbilcclxub3B0aW9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbE9wdGlvbilcclxuXHJcbmV4cG9ydCBjb25zdCB0YXNrQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxudGFza0NvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcInRhc2tDb250ZW50XCIpXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnREaXYpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIilcclxuZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiVElUTEVcIlxyXG5leHBvcnQgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVcIilcclxuIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCJcclxuIGV4cG9ydCBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG5ub3Rlcy5jbGFzc0xpc3QuYWRkKFwibm90ZXNcIilcclxuZXhwb3J0IGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5leHBvcnQgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbnByaW9yaXR5T3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIilcclxucHJpb3JpdHlPcHRpb25zLmlubmVySFRNTCA9IFwiPGxpPkxvdzwvbGk+PGxpPk1pZDwvbGk+PGxpPkhpZ2g8L2xpPlwiXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKG5vdGVzKVxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbnMpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dClcclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KVxyXG5jaGVja2xpc3QudHlwZSA9IFwiY2hlY2tib3hcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbnByb2pEaXYucmVtb3ZlQ2hpbGQocHJvamVjdElucHV0KVxyXG5wcm9qRGl2LnJlbW92ZUNoaWxkKHBqQ3JlYXRlRGl2KVxyXG5wcm9qRGl2LmFwcGVuZChhZGRCdG4pXHJcbmFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcmlvcml0aWVzID0gcHJpb3JpdHlPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL0RvbS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbixub3Rlcyxwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgdGFza3MgPSBbXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RBcnJheSA9IFtdXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdCAoKXtcclxuIFxyXG4gICAgcHJvamVjdEFycmF5LnB1c2goZG9tLnByb2plY3RJbnB1dC52YWx1ZSlcclxuICAgZGlzcGxheVByb2plY3RsaXN0KClcclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0bGlzdCA9ICgpPT57XHJcbiBmb3IoY29uc3QgY2hpbGQgb2YgcHJvamVjdExpc3QuY2hpbGRyZW4pIHtcclxuICBjaGlsZC5yZW1vdmUoKVxyXG5cclxuIH1cclxuIFxyXG4gXHJcbiAgZm9yKGxldCBpID0gMDtpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBgJHtwcm9qZWN0QXJyYXlbaV19IGBcclxuICAgIGRvbS5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgZG9tLnNpZGViYXIuaW5zZXJ0QmVmb3JlKGRvbS5wcm9qZWN0TGlzdCwgZG9tLnByb2pEaXYpXHJcbiAgICBcclxuICB9IFxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgLy8gIGNvbnN0IHByb2plY3ROYW1lID0gRE9NLnByb2plY3RJbnB1dC52YWx1ZVxyXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gRE9NLmRlc2NyaXB0aW9uSW5wdXQudmFsdWVcclxuICAgIGNvbnN0IG5ld1Rhc2tOb3RlID0gRE9NLm5vdGVzLnZhbHVlXHJcbmNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXdUYXNrRGVzY3JpcHRpb24sbmV3VGFza05vdGUscHJpb3JpdHkpXHJcbnRhc2tzLnB1c2gobmV3VGFzaylcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL0RvbVwiXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0ICogYXMgcGogZnJvbSBcIi4vdGFzay5qc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IGhvbWVwYWdlID0gKCkgPT57XHJcbiAgZG9tLmhlYWRlci5hcHBlbmRDaGlsZChkb20uaGVhZGVydGl0bGUpXHJcbiAgLy9jb250YWluZXIgYXBwZW5kaW5nXHJcbiAgZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uaGVhZGVyKVxyXG4gIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLnNpZGViYXIpXHJcbiAgZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uY29udGVudClcclxuIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLmZvb3RlcilcclxufVxyXG5cclxuICBjb25zb2xlLmxvZyhwai5kaXNwbGF5UHJvamVjdGxpc3QoKSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICBwai5kaXNwbGF5UHJvamVjdGxpc3QpICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsaG9tZXBhZ2UpO1xyXG5cclxuXHJcbmRvbS5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgZG9tLnByb2pEaXYucmVtb3ZlQ2hpbGQoZG9tLmFkZEJ0bilcclxuICAgLypwcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICBwakNyZWF0ZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIqL1xyXG4gIGRvbS5wcm9qRGl2LmFwcGVuZENoaWxkKGRvbS5wcm9qZWN0SW5wdXQpXHJcbiAgZG9tLnByb2pEaXYuYXBwZW5kQ2hpbGQoZG9tLnBqQ3JlYXRlRGl2KVxyXG4gICBcclxuICAgXHJcbiB9LCB7b25jZTpmYWxzZX0pO1xyXG5cclxuIGRvbS5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgaWYoZG9tLnByb2plY3RJbnB1dC52YWx1ZSAhPT0gXCJcIiApIHtcclxuICAgIGRvbS5zaWRlYmFyLmFwcGVuZENoaWxkKGRvbS5wcm9qZWN0TGlzdClcclxuICAgIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKGRvbS50YXNrQ29udGVudERpdilcclxuICAgIGRvbS5wcm9qZWN0TmFtZS5pbm5lclRleHQgPSBkb20ucHJvamVjdElucHV0LnZhbHVlXHJcbiAgICBkb20udGFza0NvbnRlbnREaXYuaW5zZXJ0QmVmb3JlKGRvbS5wcm9qZWN0TmFtZSwgZG9tLmRlc2NyaXB0aW9uSW5wdXQpXHJcbiAgICBkb20udGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgcGouYWRkUHJvamVjdFRvTGlzdCgpXHJcblxyXG4gIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==