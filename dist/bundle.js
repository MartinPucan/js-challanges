/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/1_sum.js":
/*!*************************!*\
  !*** ./src/js/1_sum.js ***!
  \*************************/
/***/ (() => {

"use strict";
eval("\n\nfunction sum(...args) {\n    let total;\n    total = args.reduce((acc, elem) => acc + elem);\n    console.log(total);\n}\n\nsum(1,3);\nsum(10, 20, 5);\nsum(2, 5, 80, 1, 10, 12);\n\n//# sourceURL=webpack://js-challenges/./src/js/1_sum.js?");

/***/ }),

/***/ "./src/js/2_const.js":
/*!***************************!*\
  !*** ./src/js/2_const.js ***!
  \***************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://js-challenges/./src/js/2_const.js?");

/***/ }),

/***/ "./src/js/3_let.js":
/*!*************************!*\
  !*** ./src/js/3_let.js ***!
  \*************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://js-challenges/./src/js/3_let.js?");

/***/ }),

/***/ "./src/js/4_hoisting.js":
/*!******************************!*\
  !*** ./src/js/4_hoisting.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://js-challenges/./src/js/4_hoisting.js?");

/***/ }),

/***/ "./src/js/5_ternaryOperator.js":
/*!*************************************!*\
  !*** ./src/js/5_ternaryOperator.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://js-challenges/./src/js/5_ternaryOperator.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n__webpack_require__(/*! ./1_sum.js */ \"./src/js/1_sum.js\");\n__webpack_require__(/*! ./2_const.js */ \"./src/js/2_const.js\");\n__webpack_require__(/*! ./3_let.js */ \"./src/js/3_let.js\");\n__webpack_require__(/*! ./4_hoisting.js */ \"./src/js/4_hoisting.js\");\n__webpack_require__(/*! ./5_ternaryOperator.js */ \"./src/js/5_ternaryOperator.js\");\n\n//# sourceURL=webpack://js-challenges/./src/js/app.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

"use strict";
eval("\n\nconsole.log(`*** |\\ Welcome to js challenges /| ***`);\n\n//# sourceURL=webpack://js-challenges/./src/js/main.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;