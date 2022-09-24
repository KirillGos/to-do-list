/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\nli {\\r\\n    text-decoration: none;\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\nbody {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: 2fr 6fr;\\r\\n    grid-template-rows: 2fr 10fr 1fr;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n    background-color: rgb(107, 108, 131);\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.logo-img {\\r\\n    height: 40px;\\r\\n}\\r\\n.logo-text {\\r\\n    margin-left: 10px;\\r\\n    font-size: 30px;\\r\\n}\\r\\nimg {\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    background-color: lightgray;\\r\\n    grid-column:  1 / 2;\\r\\n    padding: 15px;\\r\\n    display: grid;\\r\\n    grid-template-rows: 0.5fr 1fr;\\r\\n}\\r\\n\\r\\n.display {\\r\\n    grid-column: 2 / 3;\\r\\n    grid-row: 2 / 3;\\r\\n    padding: 15px;\\r\\n    background-color:  rgb(185, 207, 195);\\r\\n    position: relative;\\r\\n    /* display: flex; */\\r\\n}\\r\\n.folders {\\r\\n    display: grid;\\r\\n    align-items: center;\\r\\n    margin: 20px 0px;\\r\\n}\\r\\n\\r\\n\\r\\n.folder {\\r\\n    display: flex;\\r\\n    align-items: center;   \\r\\n    padding: 7px;\\r\\n    width: 100%;\\r\\n      \\r\\n}\\r\\n\\r\\n.folder:hover {\\r\\n   border: 3px solid rgb(125, 213, 164);\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.folder img {\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n.folder p {\\r\\n    font-size: 15px;\\r\\n}\\r\\n.projects-header {\\r\\n    margin: 0px  0px 20px 15px;\\r\\n}\\r\\n.add-a-folder-sec {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.add-a-project-p {\\r\\n    margin-left: 10px;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.folder-name {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n.project {\\r\\n    display: flex;  \\r\\n    align-items: center;\\r\\n    border:rgb(107, 108, 131) solid 1px;\\r\\n    border-radius: 10px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n.delete-project {\\r\\n    margin-left: auto;\\r\\n    border-radius: 50%;\\r\\n    background-color: red;\\r\\n    color: white;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    display: grid;\\r\\n    border: none;\\r\\n}\\r\\n.delete-project:hover {\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n}\\r\\n.project-cancel-btn {\\r\\n    background-color: rgb(255, 115, 115);\\r\\n    border: 1px solid black;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.project-add-btn {\\r\\n    background-color: lightgreen;\\r\\n    border: 1px solid black;\\r\\n    border-radius: 10px;\\r\\n}\\r\\nfooter {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 3 / 4;\\r\\n    width: 100%;\\r\\n    background-color: gray;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.project-name {\\r\\n    display: grid;\\r\\n    gap: 10px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.project-btns {\\r\\n    display: flex;\\r\\n    gap: 15px;\\r\\n    /* justify-content: space-between;   */\\r\\n}\\r\\n.project-btns button {\\r\\n    height: 30px;\\r\\n    width: 100px;\\r\\n}\\r\\n.project-name-input {\\r\\n    width: 220px;    \\r\\n    border-radius: 10px;\\r\\n    height: 30px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n.to-do-list-sec {\\r\\n    display: grid;\\r\\n    overflow: auto;\\r\\n}\\r\\n.tasks {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n.task, .task-add-form {\\r\\n    display: flex;\\r\\n    background-color: lightgray;\\r\\n    padding: 5px 15px;\\r\\n    margin-bottom: 10px; \\r\\n    width: 600px;\\r\\n    flex-shrink: 1;\\r\\n}\\r\\n.task:hover {\\r\\n    border: 2px solid rgba(78, 195, 94, 0.8)\\r\\n}\\r\\n\\r\\n.task {\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.task button, .task-add-form button {\\r\\n    height: 20px;\\r\\n    width: 20px;\\r\\n    border-radius: 10px;\\r\\n    border: none;\\r\\n\\r\\n}\\r\\n.add-task-btn {\\r\\n    margin: 0px 5px;\\r\\n    \\r\\n}\\r\\n\\r\\n.task-date {\\r\\n    margin-left: auto;\\r\\n    padding: 5px;\\r\\n    border: none;\\r\\n    background-color: transparent;\\r\\n}\\r\\n.delete-task-btn {\\r\\n    background-color: rgb(255, 74, 74);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.add-task-form {\\r\\n    display: flex;\\r\\n    padding: absolute;\\r\\n    flex-direction: column;\\r\\n    border: 1px solid black;\\r\\n    padding: 10px;\\r\\n    width: 400px;\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n\\r\\n.add-task-form input {\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    padding: 5px;\\r\\n    width: 200px;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n.task-form-buttons {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    width: 200px;\\r\\n\\r\\n}\\r\\n\\r\\n.submit-task {\\r\\n    background-color: lightgreen;\\r\\n    border: none;\\r\\n    padding: 5px 10px;\\r\\n    margin: 0px 5px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.cancel-task {\\r\\n    background-color: rgb(255, 115, 115);\\r\\n    border: none;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domObj\": () => (/* binding */ domObj),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _src_modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _src_modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/task */ \"./src/modules/task.js\");\n\r\n// import {  } from '../src/modules/task'\r\n\r\n\r\n\r\n\r\nconst domObj = {\r\n    buttons: {\r\n        // sidebar buttons\r\n        addFolderBtn: document.querySelector('.add-a-folder-sec'),\r\n        projectAddBtn: document.querySelector('.project-add-btn'),\r\n        projectCancelBtn: document.querySelector('.project-cancel-btn'),\r\n        // task buttons\r\n        addTaskBtn: document.querySelector('.submit-task'),\r\n        cancelTaskBtn: document.querySelector('.cancel-task'),\r\n        deleteTaskBtn: document.querySelector('.delete-task-btn'),\r\n        bringTaskAddFormBtn: document.querySelector('.add-task-btn'),\r\n    },\r\n    inputs: {\r\n        // sidebar inputs\r\n        projectNameInput: document.querySelector('.project-name-input'),\r\n        // task inputs\r\n    },\r\n    elements: {\r\n        projectNameForm: document.querySelector('.project-name'),\r\n        allProjects: Array.from(document.querySelectorAll('.project')),\r\n        projectsFolder: document.querySelector('.to-do-list-sec'),\r\n        addTaskForm: document.querySelector('.add-task-form'),\r\n        tasks: document.querySelector('.tasks'), \r\n        folderName: document.querySelector('.folder-name'),\r\n    },\r\n    events: function addEvents() {\r\n        domObj.buttons.addFolderBtn.addEventListener('click', _src_modules_project__WEBPACK_IMPORTED_MODULE_1__.showProjectNameForm);\r\n        domObj.buttons.projectAddBtn.addEventListener('click', _src_modules_project__WEBPACK_IMPORTED_MODULE_1__.addProject);\r\n        domObj.buttons.projectCancelBtn.addEventListener('click', _src_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectCancel);\r\n\r\n        domObj.buttons.bringTaskAddFormBtn.addEventListener('click', _src_modules_task__WEBPACK_IMPORTED_MODULE_2__.displayForm);\r\n        domObj.buttons.addTaskBtn.addEventListener('click', _src_modules_task__WEBPACK_IMPORTED_MODULE_2__.addToTask);\r\n        domObj.buttons.cancelTaskBtn.addEventListener('click', _src_modules_task__WEBPACK_IMPORTED_MODULE_2__.cancelTask);\r\n    }\r\n}\r\n\r\nconst projects = [ {\r\n    name: \"Demo\",\r\n    tasks: []\r\n}];\r\n\r\n\r\ndomObj.events();\r\n(0,_src_modules_project__WEBPACK_IMPORTED_MODULE_1__.displayProject)();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"folderClick\": () => (/* binding */ folderClick),\n/* harmony export */   \"projectCancel\": () => (/* binding */ projectCancel),\n/* harmony export */   \"showProjectNameForm\": () => (/* binding */ showProjectNameForm)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\n\r\nfunction showProjectNameForm() {\r\n    let allProjects =  Array.from(document.querySelectorAll('.project'));\r\n    // hide other projects\r\n    allProjects.map(item => {\r\n        item.classList.add('hidden');\r\n    });\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.buttons.addFolderBtn.classList.add('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.inputs.projectNameInput.value = '';\r\n    // show the menu    \r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.projectNameForm.classList.remove('hidden');\r\n}\r\nclass createProject {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n}\r\n\r\nfunction addProject() {\r\n    let projectName =  document.querySelector('.project-name-input').value;\r\n    if(projectName !== undefined && projectName !== '') {\r\n        const newProject = new createProject(projectName);\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\r\n        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects[1].tasks)\r\n        displayProject();\r\n    } else {\r\n        alert('Project name can\\'t be empty');\r\n    }\r\n   \r\n};\r\n\r\nfunction displayProject() {\r\n    // clear the folder\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.projectsFolder.innerText = '';\r\n    // loop through the projects array and display projects\r\n    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {\r\n        \r\n        const project = document.createElement('div');\r\n        project.classList.add('folder');\r\n        project.classList.add('project');\r\n        project.setAttribute('data-index', i);\r\n        const logoImg = document.createElement('img');\r\n        logoImg.setAttribute('src', \"../src/assets/to-do-icon.svg\");\r\n\r\n        const projectText = document.createElement('p');\r\n        projectText.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.projects[i].name;\r\n\r\n        const deleteBtn = document.createElement('button');\r\n        deleteBtn.classList.add('delete-project');\r\n        deleteBtn.innerText = 'x';\r\n        deleteBtn.addEventListener('click', deleteProject);\r\n\r\n        project.appendChild(logoImg);\r\n        project.appendChild(projectText);\r\n        project.appendChild(deleteBtn);\r\n        if(_index__WEBPACK_IMPORTED_MODULE_0__.projects.length == 1) {\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.projects[i].name;\r\n        }\r\n        \r\n        _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.projectsFolder.appendChild(project);  \r\n    }\r\n    // display projects and hide the project name form\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.allProjects.map(item => {\r\n        item.classList.remove('hidden');\r\n    });\r\n    \r\n    let allProjects = Array.from(document.querySelectorAll('.project'));\r\n         allProjects.map(div => {\r\n            div.addEventListener('click', folderClick);\r\n         });\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.buttons.addFolderBtn.classList.remove('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.projectNameForm.classList.add('hidden');\r\n};\r\n\r\n\r\n\r\n\r\n\r\nfunction folderClick(e) {    \r\n    if(!e.target.className.includes('delete-project')) {\r\n        let index = this.dataset.index;\r\n        if(_index__WEBPACK_IMPORTED_MODULE_0__.projects.length > 0) {\r\n            (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayTask)(index);\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].name;\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.setAttribute('data-index', index);\r\n\r\n        } else {\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.innerText = '';\r\n        }\r\n    }\r\n    \r\n}\r\n\r\nfunction deleteProject(e) {\r\n\r\n    let index = e.target.parentElement.dataset.index;\r\n    console.log(index)\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);\r\n    displayProject();\r\n    if(_index__WEBPACK_IMPORTED_MODULE_0__.projects.length > 0) {\r\n         _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.projects[0].name;\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.dataset.index = 0;\r\n    } else {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.innerText = '';\r\n    }\r\n   \r\n    let allProjects = Array.from(document.querySelectorAll('.project'));\r\n     for(let a = 0; a < _index__WEBPACK_IMPORTED_MODULE_0__.projects.length; a++) {\r\n         allProjects[a].setAttribute('data-index', a);\r\n     }\r\n }\r\n\r\n function projectCancel() {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.buttons.addFolderBtn.classList.remove('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.projectNameForm.classList.add('hidden');\r\n    Array.from(document.querySelectorAll('.project')).map(item => {\r\n        item.classList.remove('hidden');\r\n    }); \r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToTask\": () => (/* binding */ addToTask),\n/* harmony export */   \"cancelTask\": () => (/* binding */ cancelTask),\n/* harmony export */   \"createTaskProperties\": () => (/* binding */ createTaskProperties),\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction displayForm() {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.addTaskForm.classList.remove('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.tasks.classList.add('hidden');\r\n}\r\nfunction addToTask() {\r\n    let index =  _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.folderName.dataset.index;\r\n    let title = document.querySelector('.task-name').value;\r\n    let date = document.querySelector('.task-date-input').value;\r\n    let task = new createTaskProperties(title, date);\r\n    \r\n  \r\n    _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks.push(task);\r\n    displayTask(index);\r\n    document.querySelector('.task-name').value = '';\r\n    document.querySelector('.task-date-input').value = '';\r\n}\r\n\r\nfunction cancelTask()  {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.addTaskForm.classList.add('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.tasks.classList.remove('hidden');\r\n    document.querySelector('.task-name').value = '';\r\n    document.querySelector('.task-date-input').value = '';\r\n }\r\n\r\nfunction createTaskProperties(title, date) {\r\n    return { title, date }\r\n}\r\n\r\n\r\nfunction displayTask(index) {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.tasks.classList.remove('hidden');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.tasks.innerText = '';\r\n    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks.length; i++) {\r\n        // info\r\n        const title = _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks[i].title;\r\n        const date = _index__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks[i].date;\r\n\r\n        const task = document.createElement('div');\r\n        task.classList.add('task');\r\n\r\n        const titleP = document.createElement('p');\r\n        titleP.classList.add('title-task');\r\n        titleP.innerText = title;\r\n       \r\n        const dateInput = document.createElement('input');\r\n        dateInput.setAttribute('type', 'date');\r\n        dateInput.setAttribute('class', 'task-date');\r\n        dateInput.value = date;\r\n\r\n        const deleteTaskBtn = document.createElement('button');\r\n        deleteTaskBtn.classList.add('delete-task-btn');\r\n        deleteTaskBtn.innerText = 'X';\r\n        \r\n        task.appendChild(titleP);\r\n        task.appendChild(dateInput);\r\n        task.appendChild(deleteTaskBtn);\r\n         _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.tasks.appendChild(task);\r\n    }\r\n        //  hide the adding form\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.domObj.elements.addTaskForm.classList.add('hidden');\r\n        // nameInput.value = '';\r\n        // dateInput.value = '';\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;