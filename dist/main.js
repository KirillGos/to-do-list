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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\nli {\\r\\n    text-decoration: none;\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\nbody {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 5fr;\\r\\n    grid-template-rows: 2fr 10fr 1fr;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n    background-color: rgb(107, 108, 131);\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.logo-img {\\r\\n    height: 40px;\\r\\n}\\r\\n.logo-text {\\r\\n    margin-left: 10px;\\r\\n    font-size: 30px;\\r\\n}\\r\\nimg {\\r\\n    height: 15px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    background-color: lightgray;\\r\\n    grid-column:  1 / 2;\\r\\n    padding: 15px;\\r\\n    display: grid;\\r\\n    grid-template-rows: 0.5fr 1fr;\\r\\n}\\r\\n\\r\\n.display {\\r\\n    grid-column: 2 / 3;\\r\\n    grid-row: 2 / 3;\\r\\n    padding: 15px;\\r\\n    background-color:  rgb(185, 207, 195);;\\r\\n}\\r\\n.folders {\\r\\n    display: grid;\\r\\n    align-items: center;\\r\\n    margin: 20px 0px;\\r\\n}\\r\\n\\r\\n\\r\\n.folder {\\r\\n    display: flex;\\r\\n    align-items: center;   \\r\\n    padding: 7px;\\r\\n}\\r\\n\\r\\n.folder:hover {\\r\\n    border: 3px solid rgb(125, 213, 164);\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.folder img {\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n.folder p {\\r\\n    font-size: 15px;\\r\\n}\\r\\n.projects-header {\\r\\n    margin: 20px 0px 0px 15px;\\r\\n}\\r\\n.add-a-folder-sec {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.add-a-project-p {\\r\\n    margin-left: 10px;\\r\\n    font-size: 20px;\\r\\n}\\r\\n.project {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 3 / 4;\\r\\n    width: 100%;\\r\\n    background-color: gray;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.project-name {\\r\\n    display: grid;\\r\\n    gap: 10px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.project-btns {\\r\\n    display: grid;\\r\\n    width: 100%;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    gap: 15px;\\r\\n    /* justify-content: space-between;   */\\r\\n    \\r\\n}\\r\\n\\r\\n.to-do-list-sec {\\r\\n    display: grid;\\r\\n    /* gap: 5px;f */\\r\\n}\\r\\n\\r\\n.task-form {\\r\\n    height: 50px;\\r\\n    width: 500px;\\r\\n    background-color: cyan;\\r\\n    display: flex;\\r\\n}\\r\\n.hidden {\\r\\n    display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/DOM/dom.js":
/*!************************!*\
  !*** ./src/DOM/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEvent\": () => (/* binding */ addEvent),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addProjectCancel\": () => (/* binding */ addProjectCancel),\n/* harmony export */   \"cancel\": () => (/* binding */ cancel),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createProjectObject\": () => (/* binding */ createProjectObject),\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject),\n/* harmony export */   \"domObj\": () => (/* binding */ domObj)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ \"./src/task.js\");\n\r\n\r\nconst domObj = {\r\n    display: document.querySelector('.display'),\r\n    inbox: document.querySelector('.inbox'),\r\n    today: document.querySelector('.today'),\r\n    week: document.querySelector('.week'),\r\n    cancelProject: document.querySelector('.cancel-project'),\r\n    addProject: document.querySelector('.add-a-folder-sec'),\r\n    addProjectForm: document.querySelector('.project-name'),\r\n    addProjectCancelBtn: document.querySelector('.project-cancel-btn'),\r\n    addProjectAddBtn: document.querySelector('.project-add-btn'),\r\n    projectNameInput: document.querySelector('.project-name-input'),\r\n    projects: document.querySelector('.projects'),\r\n    projectsSec: document.querySelector('.to-do-list-sec'),\r\n    project: Array.from(document.querySelectorAll('.project')),\r\n    taskTitle: document.querySelector('.task-title-input'),\r\n    taskDescription: document.querySelector('#description-input'),\r\n    taskDueDate: document.querySelector('.due-date-input'),\r\n    taskAdd: document.querySelector('.project-submit'),\r\n}\r\nfunction createTaskObject() {\r\n    this.title = domObj.taskTitle.value;\r\n    this.description = domObj.taskDescription.value;\r\n    this.dueDate = domObj.taskDueDate.value;\r\n    console.log(this)\r\n}\r\n\r\nfunction addEvent(element, event, action) {\r\n    return element.addEventListener(event, action);\r\n} \r\nfunction createElement(element, className) {\r\n    const newElement = document.createElement(element);\r\n    newElement.classList.add(className);\r\n    return newElement;\r\n}\r\nfunction cancel(e) {\r\n    if(e.target.className.includes('hidden')) {\r\n        e.remove('hidden');\r\n    } else {\r\n        e.target.classList.add('hidden');\r\n    }\r\n}\r\n\r\nfunction addProject() {\r\n    if(domObj.addProjectForm.className.includes('hidden')) {\r\n        domObj.addProjectForm.classList.remove('hidden');\r\n        domObj.addProject.classList.add('hidden');\r\n        domObj.projectsSec.classList.add('hidden');\r\n    } \r\n}\r\n\r\nclass createProjectObject {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n\r\n}\r\nfunction createProject() {\r\n      let projectName = domObj.projectNameInput.value;\r\n    if(projectName !== '') {\r\n        const newProject = createElement('div', 'project');\r\n        const projectIcon = createElement('img', 'project-icon');\r\n        projectIcon.setAttribute('src', '../src/assets/to-do-icon.svg');\r\n        newProject.appendChild(projectIcon);\r\n        let projectNameP = createElement('p', 'project-name-p');\r\n      \r\n        projectNameP.innerText = projectName;\r\n        newProject.appendChild(projectNameP);\r\n        domObj.projectsSec.appendChild(newProject);\r\n        newProject.classList.add('folder');\r\n        domObj.addProjectForm.classList.add('hidden');\r\n        domObj.projectNameInput.value = '';\r\n        domObj.addProject.classList.remove('hidden');\r\n        domObj.projectsSec.classList.remove('hidden');\r\n        let newObj = new createProjectObject(projectName);\r\n         const allProjects = Array.from(document.querySelectorAll('.project'));\r\n        allProjects.map(item => {item.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_0__.task)});\r\n        return newObj;\r\n    } else {\r\n        alert('Enter text')\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction addProjectCancel() {\r\n    domObj.addProjectForm.classList.add('hidden');\r\n    domObj.projectNameInput.value = '';\r\n    domObj.addProject.classList.remove('hidden');\r\n    domObj.projectsSec.classList.remove('hidden');\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/DOM/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/dom */ \"./src/DOM/dom.js\");\n/* harmony import */ var _modules_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/inbox */ \"./src/modules/inbox.js\");\n/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/today */ \"./src/modules/today.js\");\n/* harmony import */ var _modules_week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/week */ \"./src/modules/week.js\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\nconst display = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.display;\r\nconst inbox = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.inbox;\r\nconst today = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.today;\r\nconst week = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.week;\r\n\r\n(0,_DOM_dom__WEBPACK_IMPORTED_MODULE_0__.addEvent)(inbox, 'click', _modules_inbox__WEBPACK_IMPORTED_MODULE_1__.inboxSec);\r\n(0,_DOM_dom__WEBPACK_IMPORTED_MODULE_0__.addEvent)(today, 'click', _modules_today__WEBPACK_IMPORTED_MODULE_2__.todaySec);\r\n(0,_DOM_dom__WEBPACK_IMPORTED_MODULE_0__.addEvent)(week, 'click', _modules_week__WEBPACK_IMPORTED_MODULE_3__.weekSec);\r\n\r\n\r\n\r\n\r\nconst addFolderSec = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.addProject;\r\naddFolderSec.addEventListener('click', _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.addProject);\r\n\r\nconst addProjectAddBtn = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.addProjectAddBtn;\r\naddProjectAddBtn.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_5__.addProjectToProjects);\r\n\r\nconst addProjectCancelBtn = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.addProjectCancelBtn;\r\naddProjectCancelBtn.addEventListener('click', _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectCancel); \r\n\r\nconst allProjects = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.project;\r\nallProjects.map(item => {item.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_5__.task)});\r\n\r\nconst taskAdd = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.taskAdd;\r\n// taskAdd.addEventListener('click', )\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inboxSec\": () => (/* binding */ inboxSec)\n/* harmony export */ });\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom */ \"./src/DOM/dom.js\");\n\r\n\r\nfunction inboxSec() {\r\n    _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.display.innerText = 'Inbox';\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/inbox.js?");

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todaySec\": () => (/* binding */ todaySec)\n/* harmony export */ });\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom */ \"./src/DOM/dom.js\");\n\r\n\r\nfunction todaySec() {\r\n    _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.display.innerText = 'Today';\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/today.js?");

/***/ }),

/***/ "./src/modules/week.js":
/*!*****************************!*\
  !*** ./src/modules/week.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weekSec\": () => (/* binding */ weekSec)\n/* harmony export */ });\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom */ \"./src/DOM/dom.js\");\n\r\n\r\nfunction weekSec() {\r\n    _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.display.innerText = 'Week';\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/week.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToProjects\": () => (/* binding */ addProjectToProjects),\n/* harmony export */   \"task\": () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/dom */ \"./src/DOM/dom.js\");\n \r\n\r\nconst projects = [];\r\nfunction task(e) {\r\n     const allProjects = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.project;\r\n    const display = _DOM_dom__WEBPACK_IMPORTED_MODULE_0__.domObj.display;\r\n    const header = document.createElement('h1');\r\n    header.innerText = e.target.innerText;\r\n    let currentObject = e.target.innerText;\r\n    display.innerHTML = ''\r\n    \r\n} \r\nfunction addProjectToProjects() {\r\n    const object = (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_0__.createProject)();\r\n    if(object !== undefined) {\r\n         projects.push(object);\r\n    }\r\n    console.log(projects);\r\n}\r\n\r\n\r\n\r\n\r\n// export function createTask() {\r\n//     const title = \r\n// }\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;