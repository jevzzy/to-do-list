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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 300px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:20%;\r\n    height: 400px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input,textarea,select {\r\n  display: block;\r\n  margin: 40px auto;\r\n \r\n}\r\n\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n.canceledit {\r\n    width: 35px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 300px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:20%;\r\n    height: 400px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input,textarea,select {\r\n  display: block;\r\n  margin: 40px auto;\r\n \r\n}\r\n\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n.canceledit {\r\n    width: 35px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "addEditBtn": () => (/* binding */ addEditBtn),
/* harmony export */   "addMoreTaskBtn": () => (/* binding */ addMoreTaskBtn),
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "btnIcon": () => (/* binding */ btnIcon),
/* harmony export */   "cancelEditBtn": () => (/* binding */ cancelEditBtn),
/* harmony export */   "cancelProjectBtn": () => (/* binding */ cancelProjectBtn),
/* harmony export */   "cancelTaskBtn": () => (/* binding */ cancelTaskBtn),
/* harmony export */   "clearInput": () => (/* binding */ clearInput),
/* harmony export */   "clearprojDiv": () => (/* binding */ clearprojDiv),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "createProjectBtn": () => (/* binding */ createProjectBtn),
/* harmony export */   "createProjectDom": () => (/* binding */ createProjectDom),
/* harmony export */   "createTaskBtn": () => (/* binding */ createTaskBtn),
/* harmony export */   "dueDateInput": () => (/* binding */ dueDateInput),
/* harmony export */   "editDate": () => (/* binding */ editDate),
/* harmony export */   "editNote": () => (/* binding */ editNote),
/* harmony export */   "editPrior": () => (/* binding */ editPrior),
/* harmony export */   "editTaskDiv": () => (/* binding */ editTaskDiv),
/* harmony export */   "editTitle": () => (/* binding */ editTitle),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "headertitle": () => (/* binding */ headertitle),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "notes": () => (/* binding */ notes),
/* harmony export */   "optionDiv": () => (/* binding */ optionDiv),
/* harmony export */   "pjCreateDiv": () => (/* binding */ pjCreateDiv),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "priority": () => (/* binding */ priority),
/* harmony export */   "priorityOptions": () => (/* binding */ priorityOptions),
/* harmony export */   "projDiv": () => (/* binding */ projDiv),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "projectform": () => (/* binding */ projectform),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "sidebarTitle": () => (/* binding */ sidebarTitle),
/* harmony export */   "taskContentDiv": () => (/* binding */ taskContentDiv),
/* harmony export */   "taskLists": () => (/* binding */ taskLists),
/* harmony export */   "titleInput": () => (/* binding */ titleInput)
/* harmony export */ });
/* harmony import */ var _src_asset_add_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/asset/add icon.png */ "./src/asset/add icon.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todofunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todofunctions.js */ "./src/todofunctions.js");
/* harmony import */ var _src_asset_correct_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/asset/correct.png */ "./src/asset/correct.png");
/* harmony import */ var _src_asset_cancel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/asset/cancel.png */ "./src/asset/cancel.png");






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
const footer = document.createElement("div")
footer.classList.add("footer")




//for side bar============================================================
const addProjectBtn = document.createElement("button")
addProjectBtn.classList.add("addBtn")
const btnIcon = document.createElement("img")
btnIcon.src = _src_asset_add_icon_png__WEBPACK_IMPORTED_MODULE_0__
addProjectBtn.appendChild(btnIcon)
const sidebarTitle = document.createElement("h2")
sidebarTitle.innerText = "Project"
sidebar.appendChild(sidebarTitle)

const projDiv = document.createElement("div")
projDiv.classList.add("projDiv")
sidebar.appendChild(projDiv)
projDiv.append(addProjectBtn)

const projectList = document.createElement("ul")
projectList.classList.add("projectList")
//export const project = document.createElement("li")

const projectInput = document.createElement("input")
projectInput.classList.add("projectInput")
projectInput.placeholder = "name of project"
const createProjectBtn = document.createElement("button")
createProjectBtn.classList.add("createProjectBtn")
createProjectBtn.innerText = "create"
const cancelProjectBtn = document.createElement("button")
cancelProjectBtn.classList.add("cancelProjectBtn")
cancelProjectBtn.innerText = "x"
const pjCreateDiv = document.createElement("div")
pjCreateDiv.classList.add("createDiv")
pjCreateDiv.append(createProjectBtn)
pjCreateDiv.append(cancelProjectBtn)
//=================task in project==========content===================================

let contentTitle = document.createElement("h1")
contentTitle.className = "c-title"
const taskContentDiv = document.createElement("div")
taskContentDiv.classList.add("taskContent")
content.appendChild(taskContentDiv)
const titleInput = document.createElement("input")
titleInput.classList.add("title")
titleInput.placeholder = "TITLE"
const dueDateInput = document.createElement("input")
 dueDateInput.classList.add("date")
 dueDateInput.type = "date"
 const notes = document.createElement("textarea")
notes.classList.add("notes")
notes.placeholder = "e.g buy ...."
const optionDiv = document.createElement("div")
optionDiv.classList.add("optionDiv")
const createTaskBtn = document.createElement("button")
createTaskBtn.innerText = "Add"
const cancelTaskBtn = document.createElement("button");
cancelTaskBtn.innerText = "Cancel"
optionDiv.appendChild(createTaskBtn)
optionDiv.appendChild(cancelTaskBtn)
const priorityOptions = document.createElement("ul")
priorityOptions.classList.add("priority")
priorityOptions.innerHTML = "<li>Low</li><li>Mid</li><li>High</li>"

taskContentDiv.appendChild(titleInput)
taskContentDiv.appendChild(notes)
taskContentDiv.appendChild(priorityOptions)
taskContentDiv.appendChild(dueDateInput)
taskContentDiv.appendChild(optionDiv)
const modal = document.createElement("div")
modal.className = "modal"
const taskLists = document.createElement("ul")
taskLists.className = " t-container"
const addMoreTaskBtn = document.createElement("button")
addMoreTaskBtn.className = "more"
const addMoreTaskicon = document.createElement("img")
addMoreTaskicon.src = _src_asset_add_icon_png__WEBPACK_IMPORTED_MODULE_0__;
addMoreTaskBtn.appendChild(addMoreTaskicon)

const priorities = priorityOptions.querySelectorAll("li")

let priority;
priorities.forEach(prior =>{
    
    prior.addEventListener("click", (e)=>{
        priority = prior.textContent;
        prior.classList.add("scale")
        
    }
    )
 
})
 

//=================DOM -functions=========
function createProjectDom(){
    if(projectInput.value !== "" ) {
    
        sidebar.appendChild(projectList)
        contentTitle.innerText = `${projectInput.value}`
        content.appendChild(contentTitle)
     content.appendChild(taskContentDiv)
        taskContentDiv.style.display = "block"
        _todofunctions_js__WEBPACK_IMPORTED_MODULE_2__.addProjectToList()
        content.style.display = "block"
        _todofunctions_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskList(_todofunctions_js__WEBPACK_IMPORTED_MODULE_2__.taskz)
       clearprojDiv()
       clearInput()
       
      }
}

function clearInput(){
    titleInput.value = ""
    notes.value = ""
}

function newTask(){
    content.appendChild(modal)
  modal.style.display = "flex"
  modal.append(taskContentDiv)
  taskContentDiv.style.display = "block"
  clearInput()
}



function clearprojDiv(){
    projectInput.value = ""
    projDiv.removeChild(projectInput)
    projDiv.removeChild(pjCreateDiv)
    projDiv.appendChild(addProjectBtn)
  
  }
  
function projectform(){
projDiv.removeChild(addProjectBtn)
projDiv.appendChild(projectInput)
projDiv.appendChild(pjCreateDiv)
content.innerHTML = ""
}

//========edit form


const editTaskDiv = document.createElement("div")
 editTaskDiv.className = "edit"
const editTitle = document.createElement("input")
const editNote = document.createElement("textarea")
const editPrior = document.createElement("select")
editPrior.innerHTML = "<option>low</option><option>mid</option><option>high</option>"
const editDate = document.createElement("input")
editDate.type = "date";
const cancelEditBtn = document.createElement("img")
cancelEditBtn.src = _src_asset_cancel_png__WEBPACK_IMPORTED_MODULE_4__
cancelEditBtn.className = "canceledit"
const addEditBtn = document.createElement("img")
addEditBtn.src = _src_asset_correct_png__WEBPACK_IMPORTED_MODULE_3__
addEditBtn.className = "editBtn"
editTaskDiv.appendChild(editTitle)
editTaskDiv.appendChild(editNote)
editTaskDiv.appendChild(editDate)
editTaskDiv.appendChild(editPrior)
editTaskDiv.appendChild(addEditBtn)
editTaskDiv.appendChild(cancelEditBtn)





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom.js */ "./src/Dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



class project {
  constructor(name){
    this.name = name;
    this.task = []
  }
}


class Task {
    constructor(title,notes,priority,date){
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.date = date
    }
    
}



let projects = []






















/***/ }),

/***/ "./src/todofunctions.js":
/*!******************************!*\
  !*** ./src/todofunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToList": () => (/* binding */ addProjectToList),
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask),
/* harmony export */   "displayProjectlist": () => (/* binding */ displayProjectlist),
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "taskz": () => (/* binding */ taskz)
/* harmony export */ });
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom.js */ "./src/Dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _src_asset_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/asset/delete.png */ "./src/asset/delete.png");
/* harmony import */ var _asset_icons8_pencil_30_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/icons8-pencil-30.png */ "./src/asset/icons8-pencil-30.png");







function addProjectToList (){
    const newProject = new _task_js__WEBPACK_IMPORTED_MODULE_1__.project(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.value)
    _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject)
     /*projectArray.push()*/
    displayProjectlist()
   }
 
let indexs;
let taskz;
   const displayProjectlist = ()=>{
    /*for(const child of projectList.children) {
     child.remove()
   console.log(child)
    }*/
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.textContent = ""
     for(let i = 0;i < _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++){
       const project = document.createElement("li")
       project.className = "projects"  
       project.setAttribute("data-index", i)
       project.innerHTML = `<h4>${_task_js__WEBPACK_IMPORTED_MODULE_1__.projects[i].name}</h4>`
       _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.appendChild(project)
       _Dom_js__WEBPACK_IMPORTED_MODULE_0__.sidebar.insertBefore(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList, _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projDiv)
       const delBtn = document.createElement("img")
       delBtn.setAttribute("data-index", i)
       
       delBtn.className = "delete"
       delBtn.src = _src_asset_delete_png__WEBPACK_IMPORTED_MODULE_2__
       project.append(delBtn)
       //==================================
    delBtn.addEventListener("click", (e)=>{
   let index = e.target.dataset.index
   _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.splice(index, 1)
   displayProjectlist()
   displayTaskList()
    })
     console.log(_task_js__WEBPACK_IMPORTED_MODULE_1__.projects)
     } 
   const list = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.querySelectorAll("li")
   list.forEach(li=>{
    li.addEventListener("click", (e)=>{
      let index = li.dataset.index
      _Dom_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerText = _task_js__WEBPACK_IMPORTED_MODULE_1__.projects[index].name
      _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.innerText = ""
      
      taskz = _task_js__WEBPACK_IMPORTED_MODULE_1__.projects[index].task
      displayTaskList(taskz)
    })
   })

     }

     const createNewTask = () => {
        const title = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.titleInput.value
        const note = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.notes.value
        const date = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.dueDateInput.value
    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(title,note,_Dom_js__WEBPACK_IMPORTED_MODULE_0__.priority,date)
    _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project=>{
      if(project.name == _Dom_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerText){
    
        project.task.push(newTask)
        displayProjectlist(taskz)
      }
    })
    
    }


    function displayTaskList(arr){
               _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.textContent = ""
              const tasks = arr
              console.log(tasks)
              for (const task in tasks){
                const taskList = document.createElement("li")
                taskList.className = "taskList"
               taskList.setAttribute("data-index", task)
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox"
                checkbox.className = "check"
               taskList.appendChild(checkbox)
                const content = document.createElement("h2")
                content.innerText = `${tasks[task].title}`
                taskList.append(content)
              _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.appendChild(taskList)
             const deleteTaskBtn = document.createElement("img")
             deleteTaskBtn.className = "deleteT"
             deleteTaskBtn.src = _src_asset_delete_png__WEBPACK_IMPORTED_MODULE_2__
            const editBtn = document.createElement("img")
            editBtn.src = _asset_icons8_pencil_30_png__WEBPACK_IMPORTED_MODULE_3__
            editBtn.className = "editBtn"
     const taskOption = document.createElement("div")
     taskOption.className = "taskopt"
taskOption.append(deleteTaskBtn)
taskOption.append(editBtn)
taskList.appendChild(taskOption)
//delete task ============================================
            deleteTaskBtn.addEventListener("click", ()=>{
             let index = taskList.dataset.index
            
             tasks.splice(index, 1)
             console.log(tasks)
             displayTaskList(arr)
            })
              console.log(tasks)
//edit task button

              editBtn.addEventListener("click",()=>{


                let index = taskList.dataset.index
                indexs = index
                _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editTitle.value = tasks[index].title
                _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editNote.value = tasks[index].note
                _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editDate.value = tasks[index].date
                    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "block"
                    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDiv.style.display = "block"
                    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.appendChild(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDiv)
                    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal)
              })

              }
         
      
      }
      
        
      
 
 
      
function editTask(){
    const lists = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.querySelectorAll("li")
   _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project=>{
    if(project.name === _Dom_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerText){
         _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.textContent = ""
        const tasks = project.task
       tasks[indexs].title =  _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editTitle.value 
        tasks[indexs].note = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editNote.value 
        tasks[indexs].date = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editDate.value 
     console.log(tasks[indexs])
  lists[indexs].textContent = ""
  _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDiv.style.display = "none"
  _Dom_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "none"
    }})
   displayTaskList(taskz)
}




/***/ }),

/***/ "./src/asset/add icon.png":
/*!********************************!*\
  !*** ./src/asset/add icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81758dcbd13eaf9bf4bb.png";

/***/ }),

/***/ "./src/asset/cancel.png":
/*!******************************!*\
  !*** ./src/asset/cancel.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d5034e9c12f89d03f01.png";

/***/ }),

/***/ "./src/asset/correct.png":
/*!*******************************!*\
  !*** ./src/asset/correct.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d20cd48e2e0d022083.png";

/***/ }),

/***/ "./src/asset/delete.png":
/*!******************************!*\
  !*** ./src/asset/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4b58337bd3477db466.png";

/***/ }),

/***/ "./src/asset/icons8-pencil-30.png":
/*!****************************************!*\
  !*** ./src/asset/icons8-pencil-30.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a146756383aa3f78e91.png";

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
/* harmony import */ var _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todofunctions.js */ "./src/todofunctions.js");






const homepage = () =>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.headertitle)
  //container appending
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.header)
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.sidebar)
  _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.content)
 _Dom__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.footer
  )
}
   
window.addEventListener("DOMContentLoaded", ()=>{
  homepage()
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTaskList(_todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.taskz)
} )  


_Dom__WEBPACK_IMPORTED_MODULE_0__.addProjectBtn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__.projectform)

 _Dom__WEBPACK_IMPORTED_MODULE_0__.createProjectBtn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__.createProjectDom );

  _Dom__WEBPACK_IMPORTED_MODULE_0__.cancelProjectBtn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__.clearprojDiv )

_Dom__WEBPACK_IMPORTED_MODULE_0__.createTaskBtn.addEventListener("click", (e)=>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.modal.style = "none"
 /* dom.taskLists.appendChild(/*dom.taskList)*/
  _Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv.style.display = "none"
  _Dom__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.taskLists
    )
    _Dom__WEBPACK_IMPORTED_MODULE_0__.taskLists.innerText = ""
  _Dom__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.addMoreTaskBtn)
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.createNewTask()
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTaskList(_todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.taskz)
})


_Dom__WEBPACK_IMPORTED_MODULE_0__.addMoreTaskBtn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__.newTask)


_Dom__WEBPACK_IMPORTED_MODULE_0__.cancelTaskBtn.addEventListener("click", ()=>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv.style.display = "none"
 _Dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "none"
})

_Dom__WEBPACK_IMPORTED_MODULE_0__.addEditBtn.addEventListener("click", _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.editTask)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSw4REFBbUIsQ0FBQyxvREFBUztBQUMvQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlFQUFtQyxVQUFVLHlDQUFXO0FBQ3hEO0FBQ0E7QUFDQSxnRUFBa0M7QUFDbEMsRUFBRSw4REFBZ0M7QUFDbEMsQ0FBQyxxREFBdUI7QUFDeEIsQ0FBQztBQUNEO0FBQ0EsNkRBQStCLFVBQVUsdURBQVk7QUFDckQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Eb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKSA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMzAwcHggMzAwcHggMjAwcHg7XFxyXFxuICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwOCwgMjA4KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWNvbHVtbjoxIC8gc3BhbiAxO1xcclxcbiAgICBncmlkLXJvdzpzcGFuIDM7XFxyXFxuICAgIHdpZHRoOmNsYW1wKG1pbigzMDBweCwgMTAwJSksNHZ3LDUwMHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBoMiB7XFxyXFxubWFyZ2luLXRvcDogNDBweDtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3QgPiBsaSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTIsIDUyKTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgIGZvbnQtc2l6ZToxNXB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdExpc3QgPiBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjpyZ2IoNTgsIDUyLCA1Mik7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MiAvIHNwYW4gNCA7XFxyXFxuICAgIGdyaWQtcm93OiBzcGFuIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGgxIHtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tMaXN0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMTkzLCAxNDMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufSBcXHJcXG5cXHJcXG4udGFza29wdCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5tb3JlIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZEJ0biA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRlbGV0ZVQge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG4uZWRpdEJ0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0OyBcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xcclxcbn1cXHJcXG5cXHJcXG4vKm49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxyXFxuXFxyXFxuLnByb2pEaXYge1xcclxcbmhlaWdodDogMTAwcHg7XFxyXFxuY29sb3I6IGJsYWNrO1xcclxcbmJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjQsIDY0KSA7XFxyXFxucGFkZGluZzogMjBweDtcXHJcXG5tYXJnaW4tbGVmdDogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvakRpdiA+IGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVQcm9qZWN0QnRuICwgLmNhbmNlbFByb2plY3RCdG57XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgXFxyXFxuXFxyXFxuLnByb2plY3RGb3JtRGl2ICB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgXFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOm50aC1vZi10eXBlKDIpe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6NTBweCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgXFxyXFxufVxcclxcbi5zY2FsZSB7XFxyXFxuICAgIHNjYWxlOjEuNTtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXIgO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5zY2FsZSB7XFxyXFxuICAgIHNjYWxlOiAyO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaTpmaXJzdC1jaGlsZCB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkgPiBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNyZWF0ZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDsvKiBwU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICBcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNoZWNre1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIHdpZHRoOjIwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCA+IGlucHV0LHRleHRhcmVhLHNlbGVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRCdG57XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWxlZGl0IHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQywyQ0FBMkM7O0lBRTNDLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDRFQUE0RTtJQUM1RSxtQkFBbUI7Ozs7QUFJdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCOzs7O0FBSXRCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdEQUFnRDtBQUNoRDs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtHQUNkLGNBQWM7R0FDZCxzSEFBc0g7R0FDdEgsZUFBZTtBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJ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QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7Ozs7OztBQU1BO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcikgO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDMwMHB4IDMwMHB4IDIwMHB4O1xcclxcbiAgIFxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMDgsIDIwOCk7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MSAvIHNwYW4gMTtcXHJcXG4gICAgZ3JpZC1yb3c6c3BhbiAzO1xcclxcbiAgICB3aWR0aDpjbGFtcChtaW4oMzAwcHgsIDEwMCUpLDR2dyw1MDBweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjQsIDY0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gaDIge1xcclxcbm1hcmdpbi10b3A6IDQwcHg7XFxyXFxuZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3Qge1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0ID4gbGkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDUyLCA1Mik7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBmb250LXNpemU6MTVweDtcXHJcXG4gICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RMaXN0ID4gbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6cmdiKDU4LCA1MiwgNTIpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOjIgLyBzcGFuIDQgO1xcclxcbiAgICBncmlkLXJvdzogc3BhbiAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBoMSB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrTGlzdCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDE5MywgMTQzKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn0gXFxyXFxuXFxyXFxuLnRhc2tvcHQge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzYsIDIzNik7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hZGRCdG4gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi5hZGRCdG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kZWxldGVUIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBcXHJcXG5cXHJcXG59XFxyXFxuLmVkaXRCdG4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmbG9hdDogbGVmdDsgXFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXHJcXG59XFxyXFxuXFxyXFxuLypuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcclxcblxcclxcbi5wcm9qRGl2IHtcXHJcXG5oZWlnaHQ6IDEwMHB4O1xcclxcbmNvbG9yOiBibGFjaztcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY0LCA2NCkgO1xcclxcbnBhZGRpbmc6IDIwcHg7XFxyXFxubWFyZ2luLWxlZnQ6IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2pEaXYgPiBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlUHJvamVjdEJ0biAsIC5jYW5jZWxQcm9qZWN0QnRue1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgIFxcclxcblxcclxcbi5wcm9qZWN0Rm9ybURpdiAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ub3RlcyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjUwcHggO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4uc2NhbGUge1xcclxcbiAgICBzY2FsZToxLjU7XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uc2NhbGUge1xcclxcbiAgICBzY2FsZTogMjtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6Zmlyc3QtY2hpbGQge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jcmVhdGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7LyogcFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jaGVja3tcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICB3aWR0aDoyMCU7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQgPiBpbnB1dCx0ZXh0YXJlYSxzZWxlY3Qge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5lZGl0QnRue1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGljb24gZnJvbSBcIi4uL3NyYy9hc3NldC9hZGQgaWNvbi5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0ICogYXMgdGRvIGZyb20gXCIuL3RvZG9mdW5jdGlvbnMuanNcIlxyXG5pbXBvcnQgaWNvbjIgZnJvbSBcIi4uL3NyYy9hc3NldC9jb3JyZWN0LnBuZ1wiXHJcbmltcG9ydCBpY29uMyBmcm9tIFwiLi4vc3JjL2Fzc2V0L2NhbmNlbC5wbmdcIlxyXG5pbXBvcnQgeyBwcm9qZWN0TGkgfSBmcm9tIFwiLi90b2RvZnVuY3Rpb25zLmpzXCI7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcclxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG5oZWFkZXJ0aXRsZS50ZXh0Q29udGVudCA9IFwiamV2enp5IHRvLWRPLUFQUFwiXHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpXHJcbi8vY29udGVudFxyXG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKVxyXG5leHBvcnQgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5mb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKVxyXG5cclxuXHJcblxyXG5cclxuLy9mb3Igc2lkZSBiYXI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZEJ0blwiKVxyXG5leHBvcnQgY29uc3QgYnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuYnRuSWNvbi5zcmMgPSBpY29uXHJcbmFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYnRuSWNvbilcclxuZXhwb3J0IGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG5zaWRlYmFyVGl0bGUuaW5uZXJUZXh0ID0gXCJQcm9qZWN0XCJcclxuc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpXHJcblxyXG5leHBvcnQgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxucHJvakRpdi5jbGFzc0xpc3QuYWRkKFwicHJvakRpdlwiKVxyXG5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2pEaXYpXHJcbnByb2pEaXYuYXBwZW5kKGFkZFByb2plY3RCdG4pXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxucHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RMaXN0XCIpXHJcbi8vZXhwb3J0IGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxucHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SW5wdXRcIilcclxucHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gXCJuYW1lIG9mIHByb2plY3RcIlxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlUHJvamVjdEJ0blwiKVxyXG5jcmVhdGVQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiY3JlYXRlXCJcclxuZXhwb3J0IGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmNhbmNlbFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbFByb2plY3RCdG5cIilcclxuY2FuY2VsUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcInhcIlxyXG5leHBvcnQgY29uc3QgcGpDcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnBqQ3JlYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVEaXZcIilcclxucGpDcmVhdGVEaXYuYXBwZW5kKGNyZWF0ZVByb2plY3RCdG4pXHJcbnBqQ3JlYXRlRGl2LmFwcGVuZChjYW5jZWxQcm9qZWN0QnRuKVxyXG4vLz09PT09PT09PT09PT09PT09dGFzayBpbiBwcm9qZWN0PT09PT09PT09PWNvbnRlbnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGxldCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuY29udGVudFRpdGxlLmNsYXNzTmFtZSA9IFwiYy10aXRsZVwiXHJcbmV4cG9ydCBjb25zdCB0YXNrQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxudGFza0NvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcInRhc2tDb250ZW50XCIpXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnREaXYpXHJcbmV4cG9ydCBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXHJcbnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRJVExFXCJcclxuZXhwb3J0IGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpXHJcbiBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiXHJcbiBleHBvcnQgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxubm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpXHJcbm5vdGVzLnBsYWNlaG9sZGVyID0gXCJlLmcgYnV5IC4uLi5cIlxyXG5leHBvcnQgY29uc3Qgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5vcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm9wdGlvbkRpdlwiKVxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuY3JlYXRlVGFza0J0bi5pbm5lclRleHQgPSBcIkFkZFwiXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuY2FuY2VsVGFza0J0bi5pbm5lclRleHQgPSBcIkNhbmNlbFwiXHJcbm9wdGlvbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnRuKVxyXG5vcHRpb25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsVGFza0J0bilcclxuZXhwb3J0IGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG5wcmlvcml0eU9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpXHJcbnByaW9yaXR5T3B0aW9ucy5pbm5lckhUTUwgPSBcIjxsaT5Mb3c8L2xpPjxsaT5NaWQ8L2xpPjxsaT5IaWdoPC9saT5cIlxyXG5cclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQobm90ZXMpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9ucylcclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KVxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZChvcHRpb25EaXYpXHJcbmV4cG9ydCBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxubW9kYWwuY2xhc3NOYW1lID0gXCJtb2RhbFwiXHJcbmV4cG9ydCBjb25zdCB0YXNrTGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxudGFza0xpc3RzLmNsYXNzTmFtZSA9IFwiIHQtY29udGFpbmVyXCJcclxuZXhwb3J0IGNvbnN0IGFkZE1vcmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5hZGRNb3JlVGFza0J0bi5jbGFzc05hbWUgPSBcIm1vcmVcIlxyXG5jb25zdCBhZGRNb3JlVGFza2ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbmFkZE1vcmVUYXNraWNvbi5zcmMgPSBpY29uO1xyXG5hZGRNb3JlVGFza0J0bi5hcHBlbmRDaGlsZChhZGRNb3JlVGFza2ljb24pXHJcblxyXG5leHBvcnQgY29uc3QgcHJpb3JpdGllcyA9IHByaW9yaXR5T3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuXHJcbmV4cG9ydCBsZXQgcHJpb3JpdHk7XHJcbnByaW9yaXRpZXMuZm9yRWFjaChwcmlvciA9PntcclxuICAgIFxyXG4gICAgcHJpb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgIHByaW9yaXR5ID0gcHJpb3IudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgcHJpb3IuY2xhc3NMaXN0LmFkZChcInNjYWxlXCIpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICApXHJcbiBcclxufSlcclxuIFxyXG5cclxuLy89PT09PT09PT09PT09PT09PURPTSAtZnVuY3Rpb25zPT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RG9tKCl7XHJcbiAgICBpZihwcm9qZWN0SW5wdXQudmFsdWUgIT09IFwiXCIgKSB7XHJcbiAgICBcclxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxyXG4gICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0SW5wdXQudmFsdWV9YFxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKVxyXG4gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnREaXYpXHJcbiAgICAgICAgdGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIHRkby5hZGRQcm9qZWN0VG9MaXN0KClcclxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICB0ZG8uZGlzcGxheVRhc2tMaXN0KHRkby50YXNreilcclxuICAgICAgIGNsZWFycHJvakRpdigpXHJcbiAgICAgICBjbGVhcklucHV0KClcclxuICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcklucHV0KCl7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgbm90ZXMudmFsdWUgPSBcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrKCl7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gIG1vZGFsLmFwcGVuZCh0YXNrQ29udGVudERpdilcclxuICB0YXNrQ29udGVudERpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgY2xlYXJJbnB1dCgpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFycHJvakRpdigpe1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgcHJvakRpdi5yZW1vdmVDaGlsZChwcm9qZWN0SW5wdXQpXHJcbiAgICBwcm9qRGl2LnJlbW92ZUNoaWxkKHBqQ3JlYXRlRGl2KVxyXG4gICAgcHJvakRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKVxyXG4gIFxyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rmb3JtKCl7XHJcbnByb2pEaXYucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdEJ0bilcclxucHJvakRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpXHJcbnByb2pEaXYuYXBwZW5kQ2hpbGQocGpDcmVhdGVEaXYpXHJcbmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG59XHJcblxyXG4vLz09PT09PT09ZWRpdCBmb3JtXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gZWRpdFRhc2tEaXYuY2xhc3NOYW1lID0gXCJlZGl0XCJcclxuZXhwb3J0IGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5leHBvcnQgY29uc3QgZWRpdE5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuZXhwb3J0IGNvbnN0IGVkaXRQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuZWRpdFByaW9yLmlubmVySFRNTCA9IFwiPG9wdGlvbj5sb3c8L29wdGlvbj48b3B0aW9uPm1pZDwvb3B0aW9uPjxvcHRpb24+aGlnaDwvb3B0aW9uPlwiXHJcbmV4cG9ydCBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5lZGl0RGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBjYW5jZWxFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5jYW5jZWxFZGl0QnRuLnNyYyA9IGljb24zXHJcbmNhbmNlbEVkaXRCdG4uY2xhc3NOYW1lID0gXCJjYW5jZWxlZGl0XCJcclxuZXhwb3J0IGNvbnN0IGFkZEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbmFkZEVkaXRCdG4uc3JjID0gaWNvbjJcclxuYWRkRWRpdEJ0bi5jbGFzc05hbWUgPSBcImVkaXRCdG5cIlxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0VGl0bGUpXHJcbmVkaXRUYXNrRGl2LmFwcGVuZENoaWxkKGVkaXROb3RlKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0RGF0ZSlcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdFByaW9yKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChhZGRFZGl0QnRuKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxFZGl0QnRuKVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2sgPSBbXVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLG5vdGVzLHByaW9yaXR5LGRhdGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9Eb20uanNcIlxyXG5pbXBvcnQgKiBhcyB0c2sgZnJvbSBcIi4vdGFzay5qc1wiXHJcbmltcG9ydCBkZWxpY29uIGZyb20gXCIuLi9zcmMvYXNzZXQvZGVsZXRlLnBuZ1wiXHJcbmltcG9ydCBlZGl0aWNvbiBmcm9tIFwiLi9hc3NldC9pY29uczgtcGVuY2lsLTMwLnBuZ1wiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0ICgpe1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyB0c2sucHJvamVjdChkb20ucHJvamVjdElucHV0LnZhbHVlKVxyXG4gICAgdHNrLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcclxuICAgICAvKnByb2plY3RBcnJheS5wdXNoKCkqL1xyXG4gICAgZGlzcGxheVByb2plY3RsaXN0KClcclxuICAgfVxyXG4gXHJcbmxldCBpbmRleHM7XHJcbmV4cG9ydCBsZXQgdGFza3o7XHJcbiAgIGV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdGxpc3QgPSAoKT0+e1xyXG4gICAgLypmb3IoY29uc3QgY2hpbGQgb2YgcHJvamVjdExpc3QuY2hpbGRyZW4pIHtcclxuICAgICBjaGlsZC5yZW1vdmUoKVxyXG4gICBjb25zb2xlLmxvZyhjaGlsZClcclxuICAgIH0qL1xyXG4gICAgZG9tLnByb2plY3RMaXN0LnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgIGZvcihsZXQgaSA9IDA7aSA8IHRzay5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIiAgXHJcbiAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSlcclxuICAgICAgIHByb2plY3QuaW5uZXJIVE1MID0gYDxoND4ke3Rzay5wcm9qZWN0c1tpXS5uYW1lfTwvaDQ+YFxyXG4gICAgICAgZG9tLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICAgICBkb20uc2lkZWJhci5pbnNlcnRCZWZvcmUoZG9tLnByb2plY3RMaXN0LCBkb20ucHJvakRpdilcclxuICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpXHJcbiAgICAgICBcclxuICAgICAgIGRlbEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiXHJcbiAgICAgICBkZWxCdG4uc3JjID0gZGVsaWNvblxyXG4gICAgICAgcHJvamVjdC5hcHBlbmQoZGVsQnRuKVxyXG4gICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgIHRzay5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgIGRpc3BsYXlQcm9qZWN0bGlzdCgpXHJcbiAgIGRpc3BsYXlUYXNrTGlzdCgpXHJcbiAgICB9KVxyXG4gICAgIGNvbnNvbGUubG9nKHRzay5wcm9qZWN0cylcclxuICAgICB9IFxyXG4gICBjb25zdCBsaXN0ID0gZG9tLnByb2plY3RMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxyXG4gICBsaXN0LmZvckVhY2gobGk9PntcclxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgbGV0IGluZGV4ID0gbGkuZGF0YXNldC5pbmRleFxyXG4gICAgICBkb20uY29udGVudFRpdGxlLmlubmVyVGV4dCA9IHRzay5wcm9qZWN0c1tpbmRleF0ubmFtZVxyXG4gICAgICBkb20udGFza0xpc3RzLmlubmVyVGV4dCA9IFwiXCJcclxuICAgICAgXHJcbiAgICAgIHRhc2t6ID0gdHNrLnByb2plY3RzW2luZGV4XS50YXNrXHJcbiAgICAgIGRpc3BsYXlUYXNrTGlzdCh0YXNreilcclxuICAgIH0pXHJcbiAgIH0pXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb20udGl0bGVJbnB1dC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb20ubm90ZXMudmFsdWVcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9tLmR1ZURhdGVJbnB1dC52YWx1ZVxyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyB0c2suVGFzayh0aXRsZSxub3RlLGRvbS5wcmlvcml0eSxkYXRlKVxyXG4gICAgdHNrLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICBpZihwcm9qZWN0Lm5hbWUgPT0gZG9tLmNvbnRlbnRUaXRsZS5pbm5lclRleHQpe1xyXG4gICAgXHJcbiAgICAgICAgcHJvamVjdC50YXNrLnB1c2gobmV3VGFzaylcclxuICAgICAgICBkaXNwbGF5UHJvamVjdGxpc3QodGFza3opXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdChhcnIpe1xyXG4gICAgICAgICAgICAgICBkb20udGFza0xpc3RzLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gYXJyXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIGluIHRhc2tzKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWUgPSBcInRhc2tMaXN0XCJcclxuICAgICAgICAgICAgICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2JveClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gYCR7dGFza3NbdGFza10udGl0bGV9YFxyXG4gICAgICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgZG9tLnRhc2tMaXN0cy5hcHBlbmRDaGlsZCh0YXNrTGlzdClcclxuICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlVFwiXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLnNyYyA9IGRlbGljb25cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBlZGl0aWNvblxyXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdEJ0blwiXHJcbiAgICAgY29uc3QgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICB0YXNrT3B0aW9uLmNsYXNzTmFtZSA9IFwidGFza29wdFwiXHJcbnRhc2tPcHRpb24uYXBwZW5kKGRlbGV0ZVRhc2tCdG4pXHJcbnRhc2tPcHRpb24uYXBwZW5kKGVkaXRCdG4pXHJcbnRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tPcHRpb24pXHJcbi8vZGVsZXRlIHRhc2sgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrTGlzdChhcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbi8vZWRpdCB0YXNrIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgICAgIGluZGV4cyA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdFRpdGxlLnZhbHVlID0gdGFza3NbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdE5vdGUudmFsdWUgPSB0YXNrc1tpbmRleF0ubm90ZVxyXG4gICAgICAgICAgICAgICAgZG9tLmVkaXREYXRlLnZhbHVlID0gdGFza3NbaW5kZXhdLmRhdGVcclxuICAgICAgICAgICAgICAgICAgICBkb20ubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5lZGl0VGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLm1vZGFsLmFwcGVuZENoaWxkKGRvbS5lZGl0VGFza0RpdilcclxuICAgICAgICAgICAgICAgICAgICBkb20uY29udGVudC5hcHBlbmRDaGlsZChkb20ubW9kYWwpXHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gXHJcbiBcclxuICAgICAgXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzaygpe1xyXG4gICAgY29uc3QgbGlzdHMgPSBkb20udGFza0xpc3RzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxyXG4gICB0c2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICBpZihwcm9qZWN0Lm5hbWUgPT09IGRvbS5jb250ZW50VGl0bGUuaW5uZXJUZXh0KXtcclxuICAgICAgICAgZG9tLnRhc2tMaXN0cy50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza1xyXG4gICAgICAgdGFza3NbaW5kZXhzXS50aXRsZSA9ICBkb20uZWRpdFRpdGxlLnZhbHVlIFxyXG4gICAgICAgIHRhc2tzW2luZGV4c10ubm90ZSA9IGRvbS5lZGl0Tm90ZS52YWx1ZSBcclxuICAgICAgICB0YXNrc1tpbmRleHNdLmRhdGUgPSBkb20uZWRpdERhdGUudmFsdWUgXHJcbiAgICAgY29uc29sZS5sb2codGFza3NbaW5kZXhzXSlcclxuICBsaXN0c1tpbmRleHNdLnRleHRDb250ZW50ID0gXCJcIlxyXG4gIGRvbS5lZGl0VGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICBkb20ubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICB9fSlcclxuICAgZGlzcGxheVRhc2tMaXN0KHRhc2t6KVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tXCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgKiBhcyBwaiBmcm9tIFwiLi90YXNrLmpzXCJcclxuaW1wb3J0ICogYXMgdGRvIGZyb20gXCIuL3RvZG9mdW5jdGlvbnMuanNcIlxyXG5cclxuY29uc3QgaG9tZXBhZ2UgPSAoKSA9PntcclxuICBkb20uaGVhZGVyLmFwcGVuZENoaWxkKGRvbS5oZWFkZXJ0aXRsZSlcclxuICAvL2NvbnRhaW5lciBhcHBlbmRpbmdcclxuICBkb20uY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbS5oZWFkZXIpXHJcbiAgZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uc2lkZWJhcilcclxuICBkb20uY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbS5jb250ZW50KVxyXG4gZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uZm9vdGVyXHJcbiAgKVxyXG59XHJcbiAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICBob21lcGFnZSgpXHJcbiAgdGRvLmRpc3BsYXlUYXNrTGlzdCh0ZG8udGFza3opXHJcbn0gKSAgXHJcblxyXG5cclxuZG9tLmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbS5wcm9qZWN0Zm9ybSlcclxuXHJcbiBkb20uY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNyZWF0ZVByb2plY3REb20gKTtcclxuXHJcbiAgZG9tLmNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbS5jbGVhcnByb2pEaXYgKVxyXG5cclxuZG9tLmNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gIGRvbS5tb2RhbC5zdHlsZSA9IFwibm9uZVwiXHJcbiAvKiBkb20udGFza0xpc3RzLmFwcGVuZENoaWxkKC8qZG9tLnRhc2tMaXN0KSovXHJcbiAgZG9tLnRhc2tDb250ZW50RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKGRvbS50YXNrTGlzdHNcclxuICAgIClcclxuICAgIGRvbS50YXNrTGlzdHMuaW5uZXJUZXh0ID0gXCJcIlxyXG4gIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKGRvbS5hZGRNb3JlVGFza0J0bilcclxuICB0ZG8uY3JlYXRlTmV3VGFzaygpXHJcbiAgdGRvLmRpc3BsYXlUYXNrTGlzdCh0ZG8udGFza3opXHJcbn0pXHJcblxyXG5cclxuZG9tLmFkZE1vcmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20ubmV3VGFzaylcclxuXHJcblxyXG5kb20uY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICBkb20udGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiBkb20ubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbn0pXHJcblxyXG5kb20uYWRkRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGRvLmVkaXRUYXNrKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==