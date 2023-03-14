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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 500px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:20%;\r\n    height: 400px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input,textarea,select {\r\n  display: block;\r\n  margin: 40px auto;\r\n \r\n}\r\n\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n.canceledit {\r\n    width: 35px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,2CAA2C;;IAE3C,iBAAiB;;AAErB;AACA;IACI,oCAAoC;IACpC,aAAa;IACb,kBAAkB;IAClB,4EAA4E;IAC5E,mBAAmB;;;;AAIvB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,uCAAuC;IACvC,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;;;;AAItB;;AAEA;AACA,gBAAgB;AAChB,gDAAgD;AAChD;;AAEA;;IAEI,iBAAiB;IACjB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;GACd,cAAc;GACd,sHAAsH;GACtH,eAAe;AAClB;AACA;IACI,uBAAuB;IACvB,qBAAqB;;AAEzB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;;;AAGtB;;AAEA;AACA,0BAA0B;AAC1B,WAAW;AACX;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,YAAY;GACb,gBAAgB;GAChB,mBAAmB;;AAEtB;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,eAAe;;;AAGnB;AACA;IACI,WAAW;IACX,eAAe;IACf,WAAW;AACf;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA,kEAAkE;;AAElE;AACA,aAAa;AACb,YAAY;AACZ,kCAAkC;AAClC,aAAa;AACb,mBAAmB;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;;AAGA;IACI,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,0BAA0B;IAC1B,aAAa;IACb,iBAAiB;IACjB,gBAAgB;;AAEpB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,gBAAgB;;AAEpB;AACA;IACI,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;;AAEpB;AACA;IACI,QAAQ;AACZ;AACA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,uBAAuB;AAC3B;;;AAGA;IACI,aAAa,EAAE,sBAAsB;IACrC,cAAc,CAAC,mBAAmB;;IAElC,UAAU,EAAE,eAAe;KAC1B,wBAAwB;IACzB,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;IACxD,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;;AAGA;IACI,SAAS;IACT,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;EACE,cAAc;EACd,iBAAiB;;AAEnB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;;;;;AAMA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) ;\r\n    grid-template-rows: 100px 300px 300px 200px;\r\n   \r\n    border: 2px solid;\r\n    \r\n}\r\n.header {\r\n    background-color: rgb(191, 208, 208);\r\n    height: 100px;\r\n    text-align: center;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    grid-column: span 5;\r\n    \r\n\r\n\r\n}\r\n.sidebar {\r\n    grid-column:1 / span 1;\r\n    grid-row:span 3;\r\n    width:clamp(min(300px, 100%),4vw,500px);\r\n    background-color: rgb(67, 64, 64);\r\n    color: white;\r\n    text-align: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sidebar > h2 {\r\nmargin-top: 40px;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.projectList {\r\n    \r\n    margin-left: 20px;\r\n    width: 90%;\r\n    height: auto;\r\n}\r\n\r\n.projectList > li {\r\n    background-color: rgb(58, 52, 52);\r\n    height: 40px;\r\n    width: 90%;\r\n    color: white;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    padding: 10px;\r\n   font-size:15px;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   cursor: pointer;\r\n}\r\n.projectList > li:hover {\r\n    background-color: white;\r\n    color:rgb(58, 52, 52);\r\n    \r\n}\r\n.delete {\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.content {\r\n    background-color: chocolate;\r\n    grid-column:2 / span 4 ;\r\n    grid-row: span 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n\r\n.content > h1 {\r\nbackground-color: darkblue;\r\nwidth: 100%;\r\n}\r\n\r\n.taskList {\r\n    width: 90%;\r\n    margin: 50px auto 0 auto;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background-color: rgb(220, 193, 143);\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    color: aliceblue;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n} \r\n\r\n.taskopt {\r\n    width: 100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.more {\r\n    width: 30%;\r\n    height: 50px;\r\n   margin-top: 40px;\r\n   border-radius: 10px;\r\n\r\n}\r\n.addBtn {\r\n    background-color: rgb(238, 236, 236);\r\n    width: 150px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.addBtn > img {\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n.addBtn:hover {\r\n    cursor: pointer;\r\n}\r\n.deleteT {\r\n    width: 30px;\r\n    cursor: pointer;\r\n   \r\n\r\n}\r\n.editBtn {\r\n    width: 30px;\r\n    cursor: pointer;\r\n    float: left; \r\n}\r\n.footer{\r\n    \r\n    height: 100px;\r\n    background-color: blue;\r\n    border: 2px solid;\r\n    grid-column: span 6;\r\n}\r\n\r\n/*n==============================================================*/\r\n\r\n.projDiv {\r\nheight: 100px;\r\ncolor: black;\r\nbackground-color: rgb(67, 64, 64) ;\r\npadding: 20px;\r\nmargin-left: 0 auto;\r\n}\r\n\r\n.projDiv > input {\r\n    width: 90%;\r\n    height: 30px;\r\n    outline: none;\r\n    margin-left:20px;\r\n    font-size: 25px;\r\n}\r\n\r\n.createProjectBtn , .cancelProjectBtn{\r\n    width: 50px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n   \r\n\r\n.projectFormDiv  {\r\n    margin-top: 30px;\r\n   \r\n    height: 100px;\r\n}\r\n\r\n.optionDiv {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 70px;\r\n}\r\n.optionDiv > button {\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n}\r\n.optionDiv > button:first-of-type{\r\n    background-color: green;\r\n    border: none;\r\n}\r\n.optionDiv > button:nth-of-type(2){\r\n    background-color: red;\r\n    border: none;\r\n}\r\n.optionDiv > button:hover {\r\n    cursor: pointer;\r\n    border: 2px solid;\r\n}\r\n\r\n.taskContent {\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    height: 80%;\r\n    background-color: darkgray;\r\n    display: none;\r\n    margin: 40px auto;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.title {\r\n    width: 70%;\r\n    height: 50px;\r\n    margin-top: 70px;\r\n    margin-left: 50px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.notes {\r\n    width: 70%;\r\n    height: 200px;\r\n    margin-top: 50px;\r\n    margin-left:50px ;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.priority {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n    width: 500px;\r\n    color: aliceblue;\r\n   \r\n}\r\n.scale {\r\n    scale:1.5;\r\n}\r\n.priority > li {\r\n    list-style: none;\r\n    width: 50px;\r\n    text-align:center ;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    \r\n}\r\n.scale {\r\n    scale: 2;\r\n}\r\n.priority > li:first-child {\r\n\r\n    background-color: green;\r\n}\r\n\r\n.priority > li:nth-child(2) {\r\n    background-color: crimson;\r\n}\r\n.priority > li:nth-child(3) {\r\n    background-color: red;\r\n}\r\n\r\n.date {\r\n    margin-left: 60px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.createDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position:fixed;/* pStay in place */\r\n    \r\n    z-index: 1; /* Sit on top */\r\n     /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.check{\r\n    display: inline;\r\n    width: 40px;\r\n    height: 30px;\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.edit {\r\n    width:20%;\r\n    height: 400px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n}\r\n\r\n.edit > input,textarea,select {\r\n  display: block;\r\n  margin: 40px auto;\r\n \r\n}\r\n\r\n.editBtn{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\n.canceledit {\r\n    width: 35px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list {\r\n    background-color: black;\r\n    height: 20px;\r\n    width: 100px;\r\n}"],"sourceRoot":""}]);
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
    localStorage.setItem("projects", JSON.stringify(_task_js__WEBPACK_IMPORTED_MODULE_1__.projects))
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
    
  _Dom__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(_Dom__WEBPACK_IMPORTED_MODULE_0__.addMoreTaskBtn)
  _todofunctions_js__WEBPACK_IMPORTED_MODULE_3__.createNewTask()
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0M7QUFDbEMsRUFBRSxxREFBdUIsQ0FBQywyQ0FBYTtBQUN2QztBQUNBO0FBQ0EsRUFBRSxxREFBdUIsQ0FBQyxnREFBa0I7QUFDNUMsRUFBRSw0REFBaUI7QUFDbkI7QUFDQSxnRUFBa0M7QUFDbEMsc0JBQXNCLHdEQUEwQjtBQUNoRDtBQUNBLFdBQVcsOENBQVc7QUFDdEI7QUFDQSxHQUFHLDhEQUFtQjtBQUN0QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpRUFBbUMsVUFBVSx5Q0FBVztBQUN4RDtBQUNBO0FBQ0EsZ0VBQWtDO0FBQ2xDLEVBQUUsOERBQWdDO0FBQ2xDLENBQUMscURBQXVCO0FBQ3hCLENBQUM7QUFDRDtBQUNBLDZEQUErQixVQUFVLHVEQUFZO0FBQ3JEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcikgO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDMwMHB4IDMwMHB4IDIwMHB4O1xcclxcbiAgIFxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMDgsIDIwOCk7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MSAvIHNwYW4gMTtcXHJcXG4gICAgZ3JpZC1yb3c6c3BhbiAzO1xcclxcbiAgICB3aWR0aDpjbGFtcChtaW4oMzAwcHgsIDEwMCUpLDR2dyw1MDBweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjQsIDY0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gaDIge1xcclxcbm1hcmdpbi10b3A6IDQwcHg7XFxyXFxuZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3Qge1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0ID4gbGkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDUyLCA1Mik7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBmb250LXNpemU6MTVweDtcXHJcXG4gICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RMaXN0ID4gbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6cmdiKDU4LCA1MiwgNTIpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOjIgLyBzcGFuIDQgO1xcclxcbiAgICBncmlkLXJvdzogc3BhbiAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBoMSB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrTGlzdCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDE5MywgMTQzKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn0gXFxyXFxuXFxyXFxuLnRhc2tvcHQge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzYsIDIzNik7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hZGRCdG4gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi5hZGRCdG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kZWxldGVUIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBcXHJcXG5cXHJcXG59XFxyXFxuLmVkaXRCdG4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmbG9hdDogbGVmdDsgXFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXHJcXG59XFxyXFxuXFxyXFxuLypuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcclxcblxcclxcbi5wcm9qRGl2IHtcXHJcXG5oZWlnaHQ6IDEwMHB4O1xcclxcbmNvbG9yOiBibGFjaztcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY0LCA2NCkgO1xcclxcbnBhZGRpbmc6IDIwcHg7XFxyXFxubWFyZ2luLWxlZnQ6IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2pEaXYgPiBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlUHJvamVjdEJ0biAsIC5jYW5jZWxQcm9qZWN0QnRue1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAgIFxcclxcblxcclxcbi5wcm9qZWN0Rm9ybURpdiAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uRGl2IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm9wdGlvbkRpdiA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ub3RlcyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjUwcHggO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4uc2NhbGUge1xcclxcbiAgICBzY2FsZToxLjU7XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uc2NhbGUge1xcclxcbiAgICBzY2FsZTogMjtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6Zmlyc3QtY2hpbGQge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG59XFxyXFxuLnByaW9yaXR5ID4gbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jcmVhdGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7LyogcFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jaGVja3tcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICB3aWR0aDoyMCU7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQgPiBpbnB1dCx0ZXh0YXJlYSxzZWxlY3Qge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5lZGl0QnRue1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsMkNBQTJDOztJQUUzQyxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0RUFBNEU7SUFDNUUsbUJBQW1COzs7O0FBSXZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjs7OztBQUl0Qjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnREFBZ0Q7QUFDaEQ7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7R0FDZCxjQUFjO0dBQ2Qsc0hBQXNIO0dBQ3RILGVBQWU7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7OztBQUd0Qjs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQixXQUFXO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0dBQ2IsZ0JBQWdCO0dBQ2hCLG1CQUFtQjs7QUFFdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7OztBQUduQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsa0VBQWtFOztBQUVsRTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsY0FBYyxDQUFDLG1CQUFtQjs7SUFFbEMsVUFBVSxFQUFFLGVBQWU7S0FDMUIsd0JBQXdCO0lBQ3pCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjs7QUFFbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7Ozs7QUFNQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpIDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAzMDBweCAzMDBweCAyMDBweDtcXHJcXG4gICBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjA4LCAyMDgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbn1cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOjEgLyBzcGFuIDE7XFxyXFxuICAgIGdyaWQtcm93OnNwYW4gMztcXHJcXG4gICAgd2lkdGg6Y2xhbXAobWluKDMwMHB4LCAxMDAlKSw0dncsNTAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY0LCA2NCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGgyIHtcXHJcXG5tYXJnaW4tdG9wOiA0MHB4O1xcclxcbmZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0IHtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdCA+IGxpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1MiwgNTIpO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgZm9udC1zaXplOjE1cHg7XFxyXFxuICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0TGlzdCA+IGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOnJnYig1OCwgNTIsIDUyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5kZWxldGUge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcclxcbiAgICBncmlkLWNvbHVtbjoyIC8gc3BhbiA0IDtcXHJcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50ID4gaDEge1xcclxcbmJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbndpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0xpc3Qge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAxOTMsIDE0Myk7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59IFxcclxcblxcclxcbi50YXNrb3B0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWRkQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM2LCAyMzYpO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWRkQnRuID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGVsZXRlVCB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcbi5lZGl0QnRuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7IFxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxyXFxufVxcclxcblxcclxcbi8qbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ucHJvakRpdiB7XFxyXFxuaGVpZ2h0OiAxMDBweDtcXHJcXG5jb2xvcjogYmxhY2s7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NCwgNjQpIDtcXHJcXG5wYWRkaW5nOiAyMHB4O1xcclxcbm1hcmdpbi1sZWZ0OiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qRGl2ID4gaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZVByb2plY3RCdG4gLCAuY2FuY2VsUHJvamVjdEJ0bntcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gICBcXHJcXG5cXHJcXG4ucHJvamVjdEZvcm1EaXYgIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICBcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5vcHRpb25EaXYgPiBidXR0b246bnRoLW9mLXR5cGUoMil7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ub3B0aW9uRGl2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDo1MHB4IDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICBcXHJcXG59XFxyXFxuLnNjYWxlIHtcXHJcXG4gICAgc2NhbGU6MS41O1xcclxcbn1cXHJcXG4ucHJpb3JpdHkgPiBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlciA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnNjYWxlIHtcXHJcXG4gICAgc2NhbGU6IDI7XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcbi5wcmlvcml0eSA+IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3JlYXRlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkOy8qIHBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2hlY2t7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgd2lkdGg6MjAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0ID4gaW5wdXQsdGV4dGFyZWEsc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uZWRpdEJ0bntcXHJcXG4gICAgbWFyZ2luOmF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbGVkaXQge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpY29uIGZyb20gXCIuLi9zcmMvYXNzZXQvYWRkIGljb24ucG5nXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAqIGFzIHRkbyBmcm9tIFwiLi90b2RvZnVuY3Rpb25zLmpzXCJcclxuaW1wb3J0IGljb24yIGZyb20gXCIuLi9zcmMvYXNzZXQvY29ycmVjdC5wbmdcIlxyXG5pbXBvcnQgaWNvbjMgZnJvbSBcIi4uL3NyYy9hc3NldC9jYW5jZWwucG5nXCJcclxuaW1wb3J0IHsgcHJvamVjdExpIH0gZnJvbSBcIi4vdG9kb2Z1bmN0aW9ucy5qc1wiO1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXHJcbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxyXG5leHBvcnQgY29uc3QgaGVhZGVydGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuaGVhZGVydGl0bGUudGV4dENvbnRlbnQgPSBcImpldnp6eSB0by1kTy1BUFBcIlxyXG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKVxyXG4vL2NvbnRlbnRcclxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIilcclxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIilcclxuXHJcblxyXG5cclxuXHJcbi8vZm9yIHNpZGUgYmFyPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5hZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRCdG5cIilcclxuZXhwb3J0IGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbmJ0bkljb24uc3JjID0gaWNvblxyXG5hZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGJ0bkljb24pXHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuc2lkZWJhclRpdGxlLmlubmVyVGV4dCA9IFwiUHJvamVjdFwiXHJcbnNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnByb2pEaXYuY2xhc3NMaXN0LmFkZChcInByb2pEaXZcIilcclxuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qRGl2KVxyXG5wcm9qRGl2LmFwcGVuZChhZGRQcm9qZWN0QnRuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbnByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TGlzdFwiKVxyXG4vL2V4cG9ydCBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbnByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdElucHV0XCIpXHJcbnByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9IFwibmFtZSBvZiBwcm9qZWN0XCJcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmNyZWF0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVByb2plY3RCdG5cIilcclxuY3JlYXRlUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcImNyZWF0ZVwiXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5jYW5jZWxQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxQcm9qZWN0QnRuXCIpXHJcbmNhbmNlbFByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCJ4XCJcclxuZXhwb3J0IGNvbnN0IHBqQ3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wakNyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlRGl2XCIpXHJcbnBqQ3JlYXRlRGl2LmFwcGVuZChjcmVhdGVQcm9qZWN0QnRuKVxyXG5wakNyZWF0ZURpdi5hcHBlbmQoY2FuY2VsUHJvamVjdEJ0bilcclxuLy89PT09PT09PT09PT09PT09PXRhc2sgaW4gcHJvamVjdD09PT09PT09PT1jb250ZW50PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbmNvbnRlbnRUaXRsZS5jbGFzc05hbWUgPSBcImMtdGl0bGVcIlxyXG5leHBvcnQgY29uc3QgdGFza0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnRhc2tDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGVudFwiKVxyXG5jb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50RGl2KVxyXG5leHBvcnQgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG50aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxyXG50aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUSVRMRVwiXHJcbmV4cG9ydCBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKVxyXG4gZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIlxyXG4gZXhwb3J0IGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbm5vdGVzLmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKVxyXG5ub3Rlcy5wbGFjZWhvbGRlciA9IFwiZS5nIGJ1eSAuLi4uXCJcclxuZXhwb3J0IGNvbnN0IG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxub3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJvcHRpb25EaXZcIilcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmNyZWF0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gXCJBZGRcIlxyXG5leHBvcnQgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNhbmNlbFRhc2tCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIlxyXG5vcHRpb25EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J0bilcclxub3B0aW9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbFRhc2tCdG4pXHJcbmV4cG9ydCBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxucHJpb3JpdHlPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKVxyXG5wcmlvcml0eU9wdGlvbnMuaW5uZXJIVE1MID0gXCI8bGk+TG93PC9saT48bGk+TWlkPC9saT48bGk+SGlnaDwvbGk+XCJcclxuXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKG5vdGVzKVxyXG50YXNrQ29udGVudERpdi5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbnMpXHJcbnRhc2tDb250ZW50RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dClcclxudGFza0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KVxyXG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbm1vZGFsLmNsYXNzTmFtZSA9IFwibW9kYWxcIlxyXG5leHBvcnQgY29uc3QgdGFza0xpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbnRhc2tMaXN0cy5jbGFzc05hbWUgPSBcIiB0LWNvbnRhaW5lclwiXHJcbmV4cG9ydCBjb25zdCBhZGRNb3JlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuYWRkTW9yZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJtb3JlXCJcclxuY29uc3QgYWRkTW9yZVRhc2tpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5hZGRNb3JlVGFza2ljb24uc3JjID0gaWNvbjtcclxuYWRkTW9yZVRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkTW9yZVRhc2tpY29uKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaW9yaXRpZXMgPSBwcmlvcml0eU9wdGlvbnMucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXHJcblxyXG5leHBvcnQgbGV0IHByaW9yaXR5O1xyXG5wcmlvcml0aWVzLmZvckVhY2gocHJpb3IgPT57XHJcbiAgICBcclxuICAgIHByaW9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgIGZvcihsZXQgaT0wO2k8cHJpb3JpdGllcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBwcmlvcml0aWVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZVwiKVxyXG4gICAgICAgfVxyXG4gICAgICAgIHByaW9yaXR5ID0gcHJpb3IudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgcHJpb3IuY2xhc3NMaXN0LmFkZChcInNjYWxlXCIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgKVxyXG4gXHJcbn0pXHJcbiBcclxuXHJcbi8vPT09PT09PT09PT09PT09PT1ET00gLWZ1bmN0aW9ucz09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERvbSgpe1xyXG4gICAgaWYocHJvamVjdElucHV0LnZhbHVlICE9PSBcIlwiICkge1xyXG4gICAgXHJcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdClcclxuICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdElucHV0LnZhbHVlfWBcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSlcclxuICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50RGl2KVxyXG4gICAgICAgIHRhc2tDb250ZW50RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICB0ZG8uYWRkUHJvamVjdFRvTGlzdCgpXHJcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgdGRvLmRpc3BsYXlUYXNrTGlzdCh0ZG8udGFza3opXHJcbiAgICAgICBjbGVhcnByb2pEaXYoKVxyXG4gICAgICAgY2xlYXJJbnB1dCgpXHJcbiAgICAgICBcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJJbnB1dCgpe1xyXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIG5vdGVzLnZhbHVlID0gXCJcIlxyXG4gICAgZm9yKGxldCBpPTA7aTxwcmlvcml0aWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHByaW9yaXRpZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlXCIpXHJcbiAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrKCl7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gIG1vZGFsLmFwcGVuZCh0YXNrQ29udGVudERpdilcclxuICB0YXNrQ29udGVudERpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgY2xlYXJJbnB1dCgpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFycHJvakRpdigpe1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgcHJvakRpdi5yZW1vdmVDaGlsZChwcm9qZWN0SW5wdXQpXHJcbiAgICBwcm9qRGl2LnJlbW92ZUNoaWxkKHBqQ3JlYXRlRGl2KVxyXG4gICAgcHJvakRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKVxyXG4gIFxyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rmb3JtKCl7XHJcbnByb2pEaXYucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdEJ0bilcclxucHJvakRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpXHJcbnByb2pEaXYuYXBwZW5kQ2hpbGQocGpDcmVhdGVEaXYpXHJcbmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG59XHJcblxyXG4vLz09PT09PT09ZWRpdCBmb3JtXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gZWRpdFRhc2tEaXYuY2xhc3NOYW1lID0gXCJlZGl0XCJcclxuZXhwb3J0IGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5leHBvcnQgY29uc3QgZWRpdE5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuZXhwb3J0IGNvbnN0IGVkaXRQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuZWRpdFByaW9yLmlubmVySFRNTCA9IFwiPG9wdGlvbj5sb3c8L29wdGlvbj48b3B0aW9uPm1pZDwvb3B0aW9uPjxvcHRpb24+aGlnaDwvb3B0aW9uPlwiXHJcbmV4cG9ydCBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5lZGl0RGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBjYW5jZWxFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5jYW5jZWxFZGl0QnRuLnNyYyA9IGljb24zXHJcbmNhbmNlbEVkaXRCdG4uY2xhc3NOYW1lID0gXCJjYW5jZWxlZGl0XCJcclxuZXhwb3J0IGNvbnN0IGFkZEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbmFkZEVkaXRCdG4uc3JjID0gaWNvbjJcclxuYWRkRWRpdEJ0bi5jbGFzc05hbWUgPSBcImVkaXRCdG5cIlxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0VGl0bGUpXHJcbmVkaXRUYXNrRGl2LmFwcGVuZENoaWxkKGVkaXROb3RlKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0RGF0ZSlcclxuZWRpdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdFByaW9yKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChhZGRFZGl0QnRuKVxyXG5lZGl0VGFza0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxFZGl0QnRuKVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRG9tLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2sgPSBbXVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLG5vdGVzLHByaW9yaXR5LGRhdGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL0RvbS5qc1wiXHJcbmltcG9ydCAqIGFzIHRzayBmcm9tIFwiLi90YXNrLmpzXCJcclxuaW1wb3J0IGRlbGljb24gZnJvbSBcIi4uL3NyYy9hc3NldC9kZWxldGUucG5nXCJcclxuaW1wb3J0IGVkaXRpY29uIGZyb20gXCIuL2Fzc2V0L2ljb25zOC1wZW5jaWwtMzAucG5nXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QgKCl7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHRzay5wcm9qZWN0KGRvbS5wcm9qZWN0SW5wdXQudmFsdWUpXHJcbiAgICB0c2sucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0c2sucHJvamVjdHMpKVxyXG4gICAgIC8qcHJvamVjdEFycmF5LnB1c2goKSovXHJcbiAgIFxyXG4gICAgZGlzcGxheVByb2plY3RsaXN0KClcclxuXHJcbiAgIH1cclxuIFxyXG5sZXQgaW5kZXhzO1xyXG5leHBvcnQgbGV0IHRhc2t6O1xyXG4gICBleHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RsaXN0ID0gKCk9PntcclxuICAgIC8qZm9yKGNvbnN0IGNoaWxkIG9mIHByb2plY3RMaXN0LmNoaWxkcmVuKSB7XHJcbiAgICAgY2hpbGQucmVtb3ZlKClcclxuICAgY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICB9Ki9cclxuICAgIGRvbS5wcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICBmb3IobGV0IGkgPSAwO2kgPCB0c2sucHJvamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RzXCIgIFxyXG4gICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpXHJcbiAgICAgICBwcm9qZWN0LmlubmVySFRNTCA9IGA8aDQ+JHt0c2sucHJvamVjdHNbaV0ubmFtZX08L2g0PmBcclxuICAgICAgIGRvbS5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgICAgZG9tLnNpZGViYXIuaW5zZXJ0QmVmb3JlKGRvbS5wcm9qZWN0TGlzdCwgZG9tLnByb2pEaXYpXHJcbiAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKVxyXG4gICAgICAgXHJcbiAgICAgICBkZWxCdG4uY2xhc3NOYW1lID0gXCJkZWxldGVcIlxyXG4gICAgICAgZGVsQnRuLnNyYyA9IGRlbGljb25cclxuICAgICAgIHByb2plY3QuYXBwZW5kKGRlbEJ0bilcclxuICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICB0c2sucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICBkaXNwbGF5UHJvamVjdGxpc3QoKVxyXG4gICBkaXNwbGF5VGFza0xpc3QoKVxyXG4gICAgfSlcclxuICAgICBjb25zb2xlLmxvZyh0c2sucHJvamVjdHMpXHJcbiAgICAgfSBcclxuICAgY29uc3QgbGlzdCA9IGRvbS5wcm9qZWN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgbGlzdC5mb3JFYWNoKGxpPT57XHJcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgIGxldCBpbmRleCA9IGxpLmRhdGFzZXQuaW5kZXhcclxuICAgICAgZG9tLmNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSB0c2sucHJvamVjdHNbaW5kZXhdLm5hbWVcclxuICAgICAgZG9tLnRhc2tMaXN0cy5pbm5lclRleHQgPSBcIlwiXHJcbiAgICAgIFxyXG4gICAgICB0YXNreiA9IHRzay5wcm9qZWN0c1tpbmRleF0udGFza1xyXG4gICAgICBkaXNwbGF5VGFza0xpc3QodGFza3opXHJcbiAgICB9KVxyXG4gICB9KVxyXG5cclxuICAgICB9XHJcblxyXG4gICAgIGV4cG9ydCBjb25zdCBjcmVhdGVOZXdUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9tLnRpdGxlSW5wdXQudmFsdWVcclxuICAgICAgICBjb25zdCBub3RlID0gZG9tLm5vdGVzLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvbS5kdWVEYXRlSW5wdXQudmFsdWVcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgdHNrLlRhc2sodGl0bGUsbm90ZSxkb20ucHJpb3JpdHksZGF0ZSlcclxuICAgXHJcbiAgICB0c2sucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgIGlmKHByb2plY3QubmFtZSA9PSBkb20uY29udGVudFRpdGxlLmlubmVyVGV4dCl7XHJcbiAgICAgICAgcHJvamVjdC50YXNrLnB1c2gobmV3VGFzaylcclxuICAgICAgICBkaXNwbGF5UHJvamVjdGxpc3QodGFza3opXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdChhcnIpe1xyXG4gICAgICAgICAgICAgICBkb20udGFza0xpc3RzLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gYXJyXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIGluIHRhc2tzKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWUgPSBcInRhc2tMaXN0XCJcclxuICAgICAgICAgICAgICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2JveClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gYCR7dGFza3NbdGFza10udGl0bGV9YFxyXG4gICAgICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgZG9tLnRhc2tMaXN0cy5hcHBlbmRDaGlsZCh0YXNrTGlzdClcclxuICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlVFwiXHJcbiAgICAgICAgICAgICBkZWxldGVUYXNrQnRuLnNyYyA9IGRlbGljb25cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBlZGl0aWNvblxyXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdEJ0blwiXHJcbiAgICAgY29uc3QgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICB0YXNrT3B0aW9uLmNsYXNzTmFtZSA9IFwidGFza29wdFwiXHJcbnRhc2tPcHRpb24uYXBwZW5kKGRlbGV0ZVRhc2tCdG4pXHJcbnRhc2tPcHRpb24uYXBwZW5kKGVkaXRCdG4pXHJcbnRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tPcHRpb24pXHJcbi8vZGVsZXRlIHRhc2sgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgICAgICAgIGRpc3BsYXlUYXNrTGlzdChhcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbi8vZWRpdCB0YXNrIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgICAgIGluZGV4cyA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdFRpdGxlLnZhbHVlID0gdGFza3NbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgICAgICAgICBkb20uZWRpdE5vdGUudmFsdWUgPSB0YXNrc1tpbmRleF0ubm90ZXNcclxuICAgICAgICAgICAgICAgIGRvbS5lZGl0RGF0ZS52YWx1ZSA9IHRhc2tzW2luZGV4XS5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBkb20uZWRpdFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbS5tb2RhbC5hcHBlbmRDaGlsZChkb20uZWRpdFRhc2tEaXYpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9tLm1vZGFsKVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBcclxuIFxyXG4gXHJcbiAgICAgIFxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soKXtcclxuICAgIGNvbnN0IGxpc3RzID0gZG9tLnRhc2tMaXN0cy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgdHNrLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xyXG4gICAgaWYocHJvamVjdC5uYW1lID09PSBkb20uY29udGVudFRpdGxlLmlubmVyVGV4dCl7XHJcbiAgICAgICAgIGRvbS50YXNrTGlzdHMudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tcclxuICAgICAgIHRhc2tzW2luZGV4c10udGl0bGUgPSAgZG9tLmVkaXRUaXRsZS52YWx1ZSBcclxuICAgICAgICB0YXNrc1tpbmRleHNdLm5vdGVzID0gZG9tLmVkaXROb3RlLnZhbHVlIFxyXG4gICAgICAgIHRhc2tzW2luZGV4c10uZGF0ZSA9IGRvbS5lZGl0RGF0ZS52YWx1ZSBcclxuICAgICBjb25zb2xlLmxvZyh0YXNrc1tpbmRleHNdKVxyXG4gIGxpc3RzW2luZGV4c10udGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgZG9tLmVkaXRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIGRvbS5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIH19KVxyXG4gICBkaXNwbGF5VGFza0xpc3QodGFza3opXHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9Eb21cIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCAqIGFzIHBqIGZyb20gXCIuL3Rhc2suanNcIlxyXG5pbXBvcnQgKiBhcyB0ZG8gZnJvbSBcIi4vdG9kb2Z1bmN0aW9ucy5qc1wiXHJcblxyXG5jb25zdCBob21lcGFnZSA9ICgpID0+e1xyXG4gIGRvbS5oZWFkZXIuYXBwZW5kQ2hpbGQoZG9tLmhlYWRlcnRpdGxlKVxyXG4gIC8vY29udGFpbmVyIGFwcGVuZGluZ1xyXG4gIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLmhlYWRlcilcclxuICBkb20uY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbS5zaWRlYmFyKVxyXG4gIGRvbS5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tLmNvbnRlbnQpXHJcbiBkb20uY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbS5mb290ZXJcclxuICApXHJcbn1cclxuICAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gIGhvbWVwYWdlKClcclxuICB0ZG8uZGlzcGxheVRhc2tMaXN0KHRkby50YXNreilcclxufSApICBcclxuXHJcblxyXG5kb20uYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLnByb2plY3Rmb3JtKVxyXG5cclxuIGRvbS5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20uY3JlYXRlUHJvamVjdERvbSApO1xyXG5cclxuICBkb20uY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLmNsZWFycHJvakRpdiApXHJcblxyXG5kb20uY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgZG9tLm1vZGFsLnN0eWxlID0gXCJub25lXCJcclxuIC8qIGRvbS50YXNrTGlzdHMuYXBwZW5kQ2hpbGQoLypkb20udGFza0xpc3QpKi9cclxuICBkb20udGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgZG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9tLnRhc2tMaXN0c1xyXG4gICAgKVxyXG4gICAgXHJcbiAgZG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9tLmFkZE1vcmVUYXNrQnRuKVxyXG4gIHRkby5jcmVhdGVOZXdUYXNrKClcclxuICBsZXQgdGFza3g7XHJcbmRvbS5wcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmZvckVhY2gobm9kZT0+e1xyXG5pZihub2RlLmlubmVyVGV4dCA9PT0gZG9tLmNvbnRlbnRUaXRsZS5pbm5lclRleHQpe1xyXG4gICBsZXQgaW5kZXggPSBub2RlLmRhdGFzZXQuaW5kZXhcclxuICAgdGFza3ggPSBwai5wcm9qZWN0c1tpbmRleF0udGFza1xyXG4gICBjb25zb2xlLmxvZyh0YXNreClcclxuICAgdGRvLmRpc3BsYXlUYXNrTGlzdCh0YXNreClcclxufVxyXG59KVxyXG5cclxuXHJcbn0pXHJcblxyXG5cclxuZG9tLmFkZE1vcmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb20ubmV3VGFzaylcclxuXHJcblxyXG5kb20uY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICBkb20udGFza0NvbnRlbnREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiBkb20ubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbn0pXHJcblxyXG5kb20uYWRkRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGRvLmVkaXRUYXNrKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==