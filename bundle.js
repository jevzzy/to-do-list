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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 500px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:50%;\r\n    height: 800px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input {\r\n  display: block;\r\n  margin: 40px auto;\r\n  width: 80%;\r\n  height:40px ;\r\n \r\n}\r\n.edit > textarea {\r\n    width: 80%;\r\n    height: 300px;\r\n}\r\n\r\n.edit > input,textarea {\r\n    font-size: 30px;\r\n}\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}\r\n\r\n.empty {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.addeditBtn {\r\n    width: 40px;\r\n    display: block;\r\n    margin-left: 45%;\r\n    margin-top: 50px;\r\n}\r\n.canceledit {\r\n    width:20px;\r\n    margin-left: 90%;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 500px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:50%;\r\n    height: 800px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input {\r\n  display: block;\r\n  margin: 40px auto;\r\n  width: 80%;\r\n  height:40px ;\r\n \r\n}\r\n.edit > textarea {\r\n    width: 80%;\r\n    height: 300px;\r\n}\r\n\r\n.edit > input,textarea {\r\n    font-size: 30px;\r\n}\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}\r\n\r\n.empty {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.addeditBtn {\r\n    width: 40px;\r\n    display: block;\r\n    margin-left: 45%;\r\n    margin-top: 50px;\r\n}\r\n.canceledit {\r\n    width:20px;\r\n    margin-left: 90%;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "edBtnDiv": () => (/* binding */ edBtnDiv),
/* harmony export */   "editDate": () => (/* binding */ editDate),
/* harmony export */   "editNote": () => (/* binding */ editNote),
/* harmony export */   "editPrior": () => (/* binding */ editPrior),
/* harmony export */   "editTaskDiv": () => (/* binding */ editTaskDiv),
/* harmony export */   "editTitle": () => (/* binding */ editTitle),
/* harmony export */   "emptydiv": () => (/* binding */ emptydiv),
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ "./src/task.js");







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
       for(let i=0;i<priorities.length;i++){
        priorities[i].classList.remove("scale")
       }
        priority = prior.textContent;
        prior.classList.add("scale")

        
    }
    )
 
})
 

//=================DOM -functions=========
function createProjectDom(){
    if(projectInput.value !== "" ) {
      //  localStorage.setItem("projects", JSON.stringify(tsk.projects))
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
    for(let i=0;i<priorities.length;i++){
        priorities[i].classList.remove("scale")
       }
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
const edBtnDiv = document.createElement("div")
edBtnDiv.className = "edbtndiv"
const cancelEditBtn = document.createElement("img")
cancelEditBtn.src = _src_asset_cancel_png__WEBPACK_IMPORTED_MODULE_4__
cancelEditBtn.className = "canceledit"
const addEditBtn = document.createElement("img")
addEditBtn.src = _src_asset_correct_png__WEBPACK_IMPORTED_MODULE_3__
addEditBtn.className = "addeditBtn"
editTaskDiv.appendChild(cancelEditBtn)
editTaskDiv.appendChild(editTitle)
editTaskDiv.appendChild(editNote)
editTaskDiv.appendChild(editDate)
editTaskDiv.appendChild(editPrior)
editTaskDiv.appendChild(addEditBtn)



const emptydiv = document.createElement("div")
        emptydiv.className = "empty"
        emptydiv.innerHTML = "<h2>you have no task</h2>"



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
    this.task =  [];
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



let projects = JSON.parse(localStorage.getItem("projects")) || []

























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
   localStorage.setItem("projects", JSON.stringify(_task_js__WEBPACK_IMPORTED_MODULE_1__.projects))
    _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.textContent = ""
     for(let i = 0;i < _task_js__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++){
       const project = document.createElement("li")
       project.className = "projects"  
       project.setAttribute("data-index", i)
       project.innerHTML = `<h4>${_task_js__WEBPACK_IMPORTED_MODULE_1__.projects[i].name}</h4>`
       _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.appendChild(project)
       _Dom_js__WEBPACK_IMPORTED_MODULE_0__.sidebar.insertBefore(_Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList, _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projDiv)
       //delete button for deleting projects
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
    })
     } 
     //========================
   const list = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.projectList.querySelectorAll("li")
   list.forEach(li=>{
    li.addEventListener("click", (e)=>{
      let index = li.dataset.index
      _Dom_js__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerText = li.textContent
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
        localStorage.setItem("projectz", JSON.stringify(_task_js__WEBPACK_IMPORTED_MODULE_1__.projects))
        displayProjectlist(taskz)
       
      }
    })
    
    }


    function displayTaskList(arr){
    
               _Dom_js__WEBPACK_IMPORTED_MODULE_0__.taskLists.textContent = ""
              const tasks = arr
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
                _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editNote.value = tasks[index].notes
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
        tasks[indexs].notes = _Dom_js__WEBPACK_IMPORTED_MODULE_0__.editNote.value 
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
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectlist()
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTaskList(_todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.taskz)
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.createNewTask()
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
    
  _Dom__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.addMoreTaskBtn)
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.createNewTask()
  localStorage.setItem("projectz", JSON.stringify(_task_js__WEBPACK_IMPORTED_MODULE_2__.projects))
  let taskx;
_Dom__WEBPACK_IMPORTED_MODULE_0__.projectList.childNodes.forEach(node=>{
if(node.innerText === _Dom__WEBPACK_IMPORTED_MODULE_0__.contentTitle.innerText){
   let index = node.dataset.index
   taskx = _task_js__WEBPACK_IMPORTED_MODULE_2__.projects[index].task
   console.log(taskx)
   _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTaskList(taskx)
}
})


})


_Dom__WEBPACK_IMPORTED_MODULE_0__.addMoreTaskBtn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__.newTask)


_Dom__WEBPACK_IMPORTED_MODULE_0__.cancelTaskBtn.addEventListener("click", ()=>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.taskContentDiv.style.display = "none"
 _Dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "none"
})

_Dom__WEBPACK_IMPORTED_MODULE_0__.addEditBtn.addEventListener("click", _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.editTask)
_Dom__WEBPACK_IMPORTED_MODULE_0__.cancelEditBtn.addEventListener("click", ()=>{
  _Dom__WEBPACK_IMPORTED_MODULE_0__.editTaskDiv.style.display = "none"
  _Dom__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "none"
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpIDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAzMDBweCAzMDBweCAyMDBweDtcXHJcXG4gICBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjA4LCAyMDgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbn1cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOjEgLyBzcGFuIDE7XFxyXFxuICAgIGdyaWQtcm93OnNwYW4gMztcXHJcXG4gICAgd2lkdGg6Y2xhbXAobWluKDMwMHB4LCAxMDAlKSw0dncsNTAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY0LCA2NCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGgyIHtcXHJcXG5tYXJnaW4tdG9wOiA0MHB4O1xcclxcbmZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0IHtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCA+IGxpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1MiwgNTIpO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgZm9udC1zaXplOjE1cHg7XFxyXFxuICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0TGlzdCA+IGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOnJnYig1OCwgNTIsIDUyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5kZWxldGUge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcclxcbiAgICBncmlkLWNvbHVtbjoyIC8gc3BhbiA0IDtcXHJcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50ID4gaDEge1xcclxcbmJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbndpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0xpc3Qge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAxOTMsIDE0Myk7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59IFxcclxcblxcclxcbi50YXNrb3B0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWRkQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM2LCAyMzYpO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWRkQnRuID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGVsZXRlVCB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcbi5lZGl0QnRuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7IFxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxyXFxufVxcclxcblxcclxcbi8qbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ucHJvakRpdiB7XFxyXFxuaGVpZ2h0OiAxMDBweDtcXHJcXG5jb2xvcjogYmxhY2s7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpIDtcXHJcXG5wYWRkaW5nOiAyMHB4O1xcclxcbm1hcmdpbi1sZWZ0OiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qRGl2ID4gaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZVByb2plY3RCdG4gLCAuY2FuY2VsUHJvamVjdEJ0bntcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gICBcXHJcXG5cXHJcXG4ucHJvamVjdEZvcm1EaXYgIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246bnRoLW9mLXR5cGUoMil7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDo1MHB4IDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICBcXHJcXG59XFxyXFxuLnNjYWxlIHtcXHJcXG4gICAgc2NhbGU6MS41O1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlciA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnNjYWxlIHtcXHJcXG4gICAgc2NhbGU6IDI7XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3JlYXRlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkOy8qIHBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2hlY2t7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgd2lkdGg6NTAlO1xcclxcbiAgICBoZWlnaHQ6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0ID4gaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6NDBweCA7XFxyXFxuIFxcclxcbn1cXHJcXG4uZWRpdCA+IHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQgPiBpbnB1dCx0ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLmVkaXRCdG57XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYWRkZWRpdEJ0biB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuLmNhbmNlbGVkaXQge1xcclxcbiAgICB3aWR0aDoyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDJDQUEyQzs7SUFFM0MsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEVBQTRFO0lBQzVFLG1CQUFtQjs7OztBQUl2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixrQkFBa0I7Ozs7QUFJdEI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsZ0RBQWdEO0FBQ2hEOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIs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YUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGNBQWMsQ0FBQyxtQkFBbUI7O0lBRWxDLFVBQVUsRUFBRSxlQUFlO0tBQzFCLHdCQUF3QjtJQUN6QixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7O0FBRWQ7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKSA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMzAwcHggMzAwcHggMjAwcHg7XFxyXFxuICAgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwOCwgMjA4KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWNvbHVtbjoxIC8gc3BhbiAxO1xcclxcbiAgICBncmlkLXJvdzpzcGFuIDM7XFxyXFxuICAgIHdpZHRoOmNsYW1wKG1pbigzMDBweCwgMTAwJSksNHZ3LDUwMHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBoMiB7XFxyXFxubWFyZ2luLXRvcDogNDBweDtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3QgPiBsaSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTIsIDUyKTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgIGZvbnQtc2l6ZToxNXB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdExpc3QgPiBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjpyZ2IoNTgsIDUyLCA1Mik7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MiAvIHNwYW4gNCA7XFxyXFxuICAgIGdyaWQtcm93OiBzcGFuIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGgxIHtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tMaXN0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMTkzLCAxNDMpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufSBcXHJcXG5cXHJcXG4udGFza29wdCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5tb3JlIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZEJ0biA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRlbGV0ZVQge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG4uZWRpdEJ0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0OyBcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xcclxcbn1cXHJcXG5cXHJcXG4vKm49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxyXFxuXFxyXFxuLnByb2pEaXYge1xcclxcbmhlaWdodDogMTAwcHg7XFxyXFxuY29sb3I6IGJsYWNrO1xcclxcbmJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjQsIDY0KSA7XFxyXFxucGFkZGluZzogMjBweDtcXHJcXG5tYXJnaW4tbGVmdDogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvakRpdiA+IGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVQcm9qZWN0QnRuICwgLmNhbmNlbFByb2plY3RCdG57XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICAgXFxyXFxuXFxyXFxuLnByb2plY3RGb3JtRGl2ICB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgXFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25EaXYge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOm50aC1vZi10eXBlKDIpe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6NTBweCA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgXFxyXFxufVxcclxcbi5zY2FsZSB7XFxyXFxuICAgIHNjYWxlOjEuNTtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXIgO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5zY2FsZSB7XFxyXFxuICAgIHNjYWxlOiAyO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaTpmaXJzdC1jaGlsZCB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkgPiBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNyZWF0ZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDsvKiBwU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICBcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNoZWNre1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIHdpZHRoOjUwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCA+IGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OjQwcHggO1xcclxcbiBcXHJcXG59XFxyXFxuLmVkaXQgPiB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0ID4gaW5wdXQsdGV4dGFyZWEge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5lZGl0QnRue1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmFkZGVkaXRCdG4ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcbi5jYW5jZWxlZGl0IHtcXHJcXG4gICAgd2lkdGg6MjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG5cclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuXHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG5cclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuXHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuXHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcblxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG5cclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcblxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcblxyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICBjc3MgKz0gb2JqLmNzcztcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH0gLy8gRm9yIG9sZCBJRVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcblxyXG5cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vc3JjL2Fzc2V0L2FkZCBpY29uLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyB0ZG8gZnJvbSBcIi4vdG9kb2Z1bmN0aW9ucy5qc1wiXHJcbmltcG9ydCBpY29uMiBmcm9tIFwiLi4vc3JjL2Fzc2V0L2NvcnJlY3QucG5nXCJcclxuaW1wb3J0IGljb24zIGZyb20gXCIuLi9zcmMvYXNzZXQvY2FuY2VsLnBuZ1wiXHJcbmltcG9ydCB7IHByb2plY3RMaSB9IGZyb20gXCIuL3RvZG9mdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0ICogYXMgdHNrIGZyb20gXCIuL3Rhc2tcIjtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxyXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcclxuZXhwb3J0IGNvbnN0IGhlYWRlcnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbmhlYWRlcnRpdGxlLnRleHRDb250ZW50ID0gXCJqZXZ6enkgdG8tZE8tQVBQXCJcclxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIilcclxuLy9jb250ZW50XHJcbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpXHJcbmV4cG9ydCBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXHJcblxyXG5cclxuXHJcblxyXG4vL2ZvciBzaWRlIGJhcj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkQnRuXCIpXHJcbmV4cG9ydCBjb25zdCBidG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5idG5JY29uLnNyYyA9IGljb25cclxuYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChidG5JY29uKVxyXG5leHBvcnQgY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbnNpZGViYXJUaXRsZS5pbm5lclRleHQgPSBcIlByb2plY3RcIlxyXG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSlcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qRGl2XCIpXHJcbnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvakRpdilcclxucHJvakRpdi5hcHBlbmQoYWRkUHJvamVjdEJ0bilcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG5wcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpc3RcIilcclxuLy9leHBvcnQgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5wcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RJbnB1dFwiKVxyXG5wcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSBcIm5hbWUgb2YgcHJvamVjdFwiXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5jcmVhdGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVQcm9qZWN0QnRuXCIpXHJcbmNyZWF0ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCJjcmVhdGVcIlxyXG5leHBvcnQgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuY2FuY2VsUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsUHJvamVjdEJ0blwiKVxyXG5jYW5jZWxQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwieFwiXHJcbmV4cG9ydCBjb25zdCBwakNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxucGpDcmVhdGVEaXYuY2xhc3NMaXN0LmFkZChcImNyZWF0ZURpdlwiKVxyXG5wakNyZWF0ZURpdi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ0bilcclxucGpDcmVhdGVEaXYuYXBwZW5kKGNhbmNlbFByb2plY3RCdG4pXHJcbi8vPT09PT09PT09PT09PT09PT10YXNrIGluIHByb2plY3Q9PT09PT09PT09Y29udGVudD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG5jb250ZW50VGl0bGUuY2xhc3NOYW1lID0gXCJjLXRpdGxlXCJcclxuZXhwb3J0IGNvbnN0IHRhc2tDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG50YXNrQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIilcclxuY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudERpdilcclxuZXhwb3J0IGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxudGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcclxudGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVElUTEVcIlxyXG5leHBvcnQgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVcIilcclxuIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCJcclxuIGV4cG9ydCBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG5ub3Rlcy5jbGFzc0xpc3QuYWRkKFwibm90ZXNcIilcclxubm90ZXMucGxhY2Vob2xkZXIgPSBcImUuZyBidXkgLi4uLlwiXHJcbmV4cG9ydCBjb25zdCBvcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbm9wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uRGl2XCIpXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5jcmVhdGVUYXNrQnRuLmlubmVyVGV4dCA9IFwiQWRkXCJcclxuZXhwb3J0IGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jYW5jZWxUYXNrQnRuLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCJcclxub3B0aW9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdG4pXHJcbm9wdGlvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWxUYXNrQnRuKVxyXG5leHBvcnQgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbnByaW9yaXR5T3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIilcclxucHJpb3JpdHlPcHRpb25zLmlubmVySFRNTCA9IFwiPGxpPkxvdzwvbGk+PGxpPk1pZDwvbGk+PGxpPkhpZ2g8L2xpPlwiXHJcblxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZChub3RlcylcclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb25zKVxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKG9wdGlvbkRpdilcclxuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5tb2RhbC5jbGFzc05hbWUgPSBcIm1vZGFsXCJcclxuZXhwb3J0IGNvbnN0IHRhc2tMaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG50YXNrTGlzdHMuY2xhc3NOYW1lID0gXCIgdC1jb250YWluZXJcIlxyXG5leHBvcnQgY29uc3QgYWRkTW9yZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmFkZE1vcmVUYXNrQnRuLmNsYXNzTmFtZSA9IFwibW9yZVwiXHJcbmNvbnN0IGFkZE1vcmVUYXNraWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuYWRkTW9yZVRhc2tpY29uLnNyYyA9IGljb247XHJcbmFkZE1vcmVUYXNrQnRuLmFwcGVuZENoaWxkKGFkZE1vcmVUYXNraWNvbilcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlvcml0aWVzID0gcHJpb3JpdHlPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKVxyXG5cclxuZXhwb3J0IGxldCBwcmlvcml0eTtcclxucHJpb3JpdGllcy5mb3JFYWNoKHByaW9yID0+e1xyXG4gICAgXHJcbiAgICBwcmlvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgICBmb3IobGV0IGk9MDtpPHByaW9yaXRpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgcHJpb3JpdGllc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGVcIilcclxuICAgICAgIH1cclxuICAgICAgICBwcmlvcml0eSA9IHByaW9yLnRleHRDb250ZW50O1xyXG4gICAgICAgIHByaW9yLmNsYXNzTGlzdC5hZGQoXCJzY2FsZVwiKVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIClcclxuIFxyXG59KVxyXG4gXHJcblxyXG4vLz09PT09PT09PT09PT09PT09RE9NIC1mdW5jdGlvbnM9PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REb20oKXtcclxuICAgIGlmKHByb2plY3RJbnB1dC52YWx1ZSAhPT0gXCJcIiApIHtcclxuICAgICAgLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodHNrLnByb2plY3RzKSlcclxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxyXG4gICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0SW5wdXQudmFsdWV9YFxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKVxyXG4gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnREaXYpXHJcbiAgICAgICAgdGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIHRkby5hZGRQcm9qZWN0VG9MaXN0KClcclxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICB0ZG8uZGlzcGxheVRhc2tMaXN0KHRkby50YXNreilcclxuICAgICAgIGNsZWFycHJvakRpdigpXHJcbiAgICAgICBjbGVhcklucHV0KClcclxuICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcklucHV0KCl7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgbm90ZXMudmFsdWUgPSBcIlwiXHJcbiAgICBmb3IobGV0IGk9MDtpPHByaW9yaXRpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgcHJpb3JpdGllc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGVcIilcclxuICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2soKXtcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbClcclxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICBtb2RhbC5hcHBlbmQodGFza0NvbnRlbnREaXYpXHJcbiAgdGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIGNsZWFySW5wdXQoKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcnByb2pEaXYoKXtcclxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHByb2pEaXYucmVtb3ZlQ2hpbGQocHJvamVjdElucHV0KVxyXG4gICAgcHJvakRpdi5yZW1vdmVDaGlsZChwakNyZWF0ZURpdilcclxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bilcclxuICBcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Zm9ybSgpe1xyXG5wcm9qRGl2LnJlbW92ZUNoaWxkKGFkZFByb2plY3RCdG4pXHJcbnByb2pEaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KVxyXG5wcm9qRGl2LmFwcGVuZENoaWxkKHBqQ3JlYXRlRGl2KVxyXG5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxufVxyXG5cclxuLy89PT09PT09PWVkaXQgZm9ybVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuIGVkaXRUYXNrRGl2LmNsYXNzTmFtZSA9IFwiZWRpdFwiXHJcbmV4cG9ydCBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuZXhwb3J0IGNvbnN0IGVkaXROb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbmV4cG9ydCBjb25zdCBlZGl0UHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbmVkaXRQcmlvci5pbm5lckhUTUwgPSBcIjxvcHRpb24+bG93PC9vcHRpb24+PG9wdGlvbj5taWQ8L29wdGlvbj48b3B0aW9uPmhpZ2g8L29wdGlvbj5cIlxyXG5leHBvcnQgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuZWRpdERhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgZWRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmVkQnRuRGl2LmNsYXNzTmFtZSA9IFwiZWRidG5kaXZcIlxyXG5leHBvcnQgY29uc3QgY2FuY2VsRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuY2FuY2VsRWRpdEJ0bi5zcmMgPSBpY29uM1xyXG5jYW5jZWxFZGl0QnRuLmNsYXNzTmFtZSA9IFwiY2FuY2VsZWRpdFwiXHJcbmV4cG9ydCBjb25zdCBhZGRFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5hZGRFZGl0QnRuLnNyYyA9IGljb24yXHJcbmFkZEVkaXRCdG4uY2xhc3NOYW1lID0gXCJhZGRlZGl0QnRuXCJcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsRWRpdEJ0bilcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0Tm90ZSlcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdERhdGUpXHJcbmVkaXRUYXNrRGl2LmFwcGVuZENoaWxkKGVkaXRQcmlvcilcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkRWRpdEJ0bilcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGVtcHR5ZGl2LmNsYXNzTmFtZSA9IFwiZW1wdHlcIlxyXG4gICAgICAgIGVtcHR5ZGl2LmlubmVySFRNTCA9IFwiPGgyPnlvdSBoYXZlIG5vIHRhc2s8L2gyPlwiXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2sgPSAgW107XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsbm90ZXMscHJpb3JpdHksZGF0ZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW11cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tLmpzXCJcclxuaW1wb3J0ICogYXMgdHNrIGZyb20gXCIuL3Rhc2suanNcIlxyXG5pbXBvcnQgZGVsaWNvbiBmcm9tIFwiLi4vc3JjL2Fzc2V0L2RlbGV0ZS5wbmdcIlxyXG5pbXBvcnQgZWRpdGljb24gZnJvbSBcIi4vYXNzZXQvaWNvbnM4LXBlbmNpbC0zMC5wbmdcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdCAoKXtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgdHNrLnByb2plY3QoZG9tLnByb2plY3RJbnB1dC52YWx1ZSlcclxuICAgIHRzay5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXHJcbiAgIFxyXG4gICAgIC8qcHJvamVjdEFycmF5LnB1c2goKSovXHJcbiAgIFxyXG4gICAgZGlzcGxheVByb2plY3RsaXN0KClcclxuXHJcbiAgIH1cclxuIFxyXG5sZXQgaW5kZXhzO1xyXG5leHBvcnQgbGV0IHRhc2t6O1xyXG4gICBleHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RsaXN0ID0gKCk9PntcclxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0c2sucHJvamVjdHMpKVxyXG4gICAgZG9tLnByb2plY3RMaXN0LnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgIGZvcihsZXQgaSA9IDA7aSA8IHRzay5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdHNcIiAgXHJcbiAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSlcclxuICAgICAgIHByb2plY3QuaW5uZXJIVE1MID0gYDxoND4ke3Rzay5wcm9qZWN0c1tpXS5uYW1lfTwvaDQ+YFxyXG4gICAgICAgZG9tLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICAgICBkb20uc2lkZWJhci5pbnNlcnRCZWZvcmUoZG9tLnByb2plY3RMaXN0LCBkb20ucHJvakRpdilcclxuICAgICAgIC8vZGVsZXRlIGJ1dHRvbiBmb3IgZGVsZXRpbmcgcHJvamVjdHNcclxuICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpXHJcbiAgICAgICBcclxuICAgICAgIGRlbEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiXHJcbiAgICAgICBkZWxCdG4uc3JjID0gZGVsaWNvblxyXG4gICAgICAgcHJvamVjdC5hcHBlbmQoZGVsQnRuKVxyXG4gICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgIHRzay5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgIGRpc3BsYXlQcm9qZWN0bGlzdCgpXHJcbiAgICB9KVxyXG4gICAgIH0gXHJcbiAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgY29uc3QgbGlzdCA9IGRvbS5wcm9qZWN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgbGlzdC5mb3JFYWNoKGxpPT57XHJcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgIGxldCBpbmRleCA9IGxpLmRhdGFzZXQuaW5kZXhcclxuICAgICAgZG9tLmNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBsaS50ZXh0Q29udGVudFxyXG4gICAgICBkb20udGFza0xpc3RzLmlubmVyVGV4dCA9IFwiXCJcclxuICAgICAgdGFza3ogPSB0c2sucHJvamVjdHNbaW5kZXhdLnRhc2tcclxuICAgICAgXHJcbiAgICAgICAgZGlzcGxheVRhc2tMaXN0KHRhc2t6KVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgIH0pXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb20udGl0bGVJbnB1dC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb20ubm90ZXMudmFsdWVcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9tLmR1ZURhdGVJbnB1dC52YWx1ZVxyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyB0c2suVGFzayh0aXRsZSxub3RlLGRvbS5wcmlvcml0eSxkYXRlKVxyXG4gICAgdHNrLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgICBpZihwcm9qZWN0Lm5hbWUgPT0gZG9tLmNvbnRlbnRUaXRsZS5pbm5lclRleHQpe1xyXG4gICAgICAgIHByb2plY3QudGFzay5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0elwiLCBKU09OLnN0cmluZ2lmeSh0c2sucHJvamVjdHMpKVxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0bGlzdCh0YXNreilcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza0xpc3QoYXJyKXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICBkb20udGFza0xpc3RzLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gYXJyXHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIGluIHRhc2tzKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWUgPSBcInRhc2tMaXN0XCJcclxuICAgICAgICAgICAgICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2JveClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gYCR7dGFza3NbdGFza10udGl0bGV9YFxyXG4gICAgICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgZG9tLnRhc2tMaXN0cy5hcHBlbmRDaGlsZCh0YXNrTGlzdClcclxuICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlVFwiXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLnNyYyA9IGRlbGljb25cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBlZGl0aWNvblxyXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdEJ0blwiXHJcbiAgICAgY29uc3QgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICB0YXNrT3B0aW9uLmNsYXNzTmFtZSA9IFwidGFza29wdFwiXHJcbnRhc2tPcHRpb24uYXBwZW5kKGRlbGV0ZVRhc2tCdG4pXHJcbnRhc2tPcHRpb24uYXBwZW5kKGVkaXRCdG4pXHJcbnRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tPcHRpb24pXHJcbi8vZGVsZXRlIHRhc2sgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrTGlzdChhcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbi8vZWRpdCB0YXNrIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgICAgIGluZGV4cyA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdFRpdGxlLnZhbHVlID0gdGFza3NbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdE5vdGUudmFsdWUgPSB0YXNrc1tpbmRleF0ubm90ZXNcclxuICAgICAgICAgICAgICAgIGRvbS5lZGl0RGF0ZS52YWx1ZSA9IHRhc2tzW2luZGV4XS5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBkb20uZWRpdFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5tb2RhbC5hcHBlbmRDaGlsZChkb20uZWRpdFRhc2tEaXYpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9tLm1vZGFsKVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBcclxuIFxyXG4gXHJcbiAgICAgIFxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soKXtcclxuICAgIGNvbnN0IGxpc3RzID0gZG9tLnRhc2tMaXN0cy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgdHNrLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgaWYocHJvamVjdC5uYW1lID09PSBkb20uY29udGVudFRpdGxlLmlubmVyVGV4dCl7XHJcbiAgICAgICAgIGRvbS50YXNrTGlzdHMudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tcclxuICAgICAgIHRhc2tzW2luZGV4c10udGl0bGUgPSAgZG9tLmVkaXRUaXRsZS52YWx1ZSBcclxuICAgICAgICB0YXNrc1tpbmRleHNdLm5vdGVzID0gZG9tLmVkaXROb3RlLnZhbHVlIFxyXG4gICAgICAgIHRhc2tzW2luZGV4c10uZGF0ZSA9IGRvbS5lZGl0RGF0ZS52YWx1ZSBcclxuICAgICBjb25zb2xlLmxvZyh0YXNrc1tpbmRleHNdKVxyXG4gIGxpc3RzW2luZGV4c10udGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgZG9tLmVkaXRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIGRvbS5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIH19KVxyXG4gICBkaXNwbGF5VGFza0xpc3QodGFza3opXHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9Eb21cIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCAqIGFzIHBqIGZyb20gXCIuL3Rhc2suanNcIlxyXG5pbXBvcnQgKiBhcyB0ZG8gZnJvbSBcIi4vdG9kb2Z1bmN0aW9ucy5qc1wiXHJcbmltcG9ydCAqIGFzIHRzayBmcm9tIFwiLi90YXNrLmpzXCJcclxuXHJcbmNvbnN0IGhvbWVwYWdlID0gKCkgPT57XHJcbiAgZG9tLmhlYWRlci5hcHBlbmRDaGlsZChkb20uaGVhZGVydGl0bGUpXHJcbiAgLy9jb250YWluZXIgYXBwZW5kaW5nXHJcbiAgZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uaGVhZGVyKVxyXG4gIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLnNpZGViYXIpXHJcbiAgZG9tLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20uY29udGVudClcclxuIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLmZvb3RlclxyXG4gIClcclxufVxyXG4gICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgaG9tZXBhZ2UoKVxyXG4gIHRkby5kaXNwbGF5UHJvamVjdGxpc3QoKVxyXG4gIHRkby5kaXNwbGF5VGFza0xpc3QodGRvLnRhc2t6KVxyXG4gIHRkby5jcmVhdGVOZXdUYXNrKClcclxufSApICBcclxuXHJcblxyXG5kb20uYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLnByb2plY3Rmb3JtKVxyXG5cclxuIGRvbS5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uY3JlYXRlUHJvamVjdERvbSApO1xyXG5cclxuICBkb20uY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsZWFycHJvakRpdiApXHJcblxyXG5kb20uY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgZG9tLm1vZGFsLnN0eWxlID0gXCJub25lXCJcclxuXHJcbiAvKiBkb20udGFza0xpc3RzLmFwcGVuZENoaWxkKC8qZG9tLnRhc2tMaXN0KSovXHJcbiAgZG9tLnRhc2tDb250ZW50RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKGRvbS50YXNrTGlzdHNcclxuICAgIClcclxuICAgIFxyXG4gIGRvbS5jb250ZW50LmFwcGVuZENoaWxkKGRvbS5hZGRNb3JlVGFza0J0bilcclxuICB0ZG8uY3JlYXRlTmV3VGFzaygpXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0elwiLCBKU09OLnN0cmluZ2lmeSh0c2sucHJvamVjdHMpKVxyXG4gIGxldCB0YXNreDtcclxuZG9tLnByb2plY3RMaXN0LmNoaWxkTm9kZXMuZm9yRWFjaChub2RlPT57XHJcbmlmKG5vZGUuaW5uZXJUZXh0ID09PSBkb20uY29udGVudFRpdGxlLmlubmVyVGV4dCl7XHJcbiAgIGxldCBpbmRleCA9IG5vZGUuZGF0YXNldC5pbmRleFxyXG4gICB0YXNreCA9IHBqLnByb2plY3RzW2luZGV4XS50YXNrXHJcbiAgIGNvbnNvbGUubG9nKHRhc2t4KVxyXG4gICB0ZG8uZGlzcGxheVRhc2tMaXN0KHRhc2t4KVxyXG59XHJcbn0pXHJcblxyXG5cclxufSlcclxuXHJcblxyXG5kb20uYWRkTW9yZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbS5uZXdUYXNrKVxyXG5cclxuXHJcbmRvbS5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gIGRvbS50YXNrQ29udGVudERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuIGRvbS5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxufSlcclxuXHJcbmRvbS5hZGRFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0ZG8uZWRpdFRhc2spXHJcbmRvbS5jYW5jZWxFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gIGRvbS5lZGl0VGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICBkb20ubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=