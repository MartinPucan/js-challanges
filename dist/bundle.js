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

/***/ "./src/js/10_destructuringAndRestOperator.js":
/*!***************************************************!*\
  !*** ./src/js/10_destructuringAndRestOperator.js ***!
  \***************************************************/
/***/ (() => {

"use strict";
eval("\n\nlet first, second, third;\n\nlet array = [1,2,3,4,5,6,7];\n\n[first, second, ...third] = array;\n\nconsole.log(first)\nconsole.log(second)\nconsole.log(third)\n\n//# sourceURL=webpack://js-challenges/./src/js/10_destructuringAndRestOperator.js?");

/***/ }),

/***/ "./src/js/11_spreadOperator.js":
/*!*************************************!*\
  !*** ./src/js/11_spreadOperator.js ***!
  \*************************************/
/***/ (() => {

"use strict";
eval("\n\nlet a = [1, 2];\nlet b = [4, 5];\nlet c = [8, 9, 10];\nlet d = 11;\n\nlet array = [0, ...a, 3, ...b, 6, 7, ...c, d];\nconsole.log(array)\n\nlet newArray = a.concat([0], [3], b, [6,7], c, [d]);\nconsole.log(newArray)\n\n\n//# sourceURL=webpack://js-challenges/./src/js/11_spreadOperator.js?");

/***/ }),

/***/ "./src/js/1_sum.js":
/*!*************************!*\
  !*** ./src/js/1_sum.js ***!
  \*************************/
/***/ (() => {

"use strict";
eval("\n\nfunction sum(...args) {\n    let total;\n    total = args.reduce((acc, elem) => acc + elem);\n    console.log(total);\n}\n\nsum(1, 3);\nsum(10, 20, 5);\nsum(2, 5, 80, 1, 10, 12);\n\n//# sourceURL=webpack://js-challenges/./src/js/1_sum.js?");

/***/ }),

/***/ "./src/js/2_const.js":
/*!***************************!*\
  !*** ./src/js/2_const.js ***!
  \***************************/
/***/ (() => {

"use strict";
eval("\n\nlet arr = [1, 2];\n\n/* can do this because array is a reference type */\narr.push(3);\n\nconsole.log(arr);\n\n/* TypeError - cannot reassign const variable */\narr = [1,2,3,4];\n\nconsole.log(arr)\n\n//# sourceURL=webpack://js-challenges/./src/js/2_const.js?");

/***/ }),

/***/ "./src/js/3_let.js":
/*!*************************!*\
  !*** ./src/js/3_let.js ***!
  \*************************/
/***/ (() => {

eval("\"use script\";\n\nvar i = 10;\n\nfor (let i = 1; i < 5; i++) {\n    // console.log(i)\n}\n\nconsole.log(i);\n\n//# sourceURL=webpack://js-challenges/./src/js/3_let.js?");

/***/ }),

/***/ "./src/js/4_hoisting.js":
/*!******************************!*\
  !*** ./src/js/4_hoisting.js ***!
  \******************************/
/***/ (() => {

"use strict";
eval("\n\nvar a = 5, b = 10;\n\nif (b > a) {\n    let c = 2;\n    c = a + b + c;\n    console.log(c);\n}\n\n// console.log(c); - ReferenceError, c is defined only in if scope\n\n//# sourceURL=webpack://js-challenges/./src/js/4_hoisting.js?");

/***/ }),

/***/ "./src/js/5_ternaryOperator.js":
/*!*************************************!*\
  !*** ./src/js/5_ternaryOperator.js ***!
  \*************************************/
/***/ (() => {

"use strict";
eval("\n\nfunction isNumber(value) {\n    return (\n        typeof value === \"number\"\n            ? \"That's a number\"\n            : \"That's not a number\"\n    )\n}\n\nconsole.log(isNumber(10));\nconsole.log(isNumber(\"Hey there\"));\nconsole.log(isNumber(true));\n\n//# sourceURL=webpack://js-challenges/./src/js/5_ternaryOperator.js?");

/***/ }),

/***/ "./src/js/6_arrowFunction.js":
/*!***********************************!*\
  !*** ./src/js/6_arrowFunction.js ***!
  \***********************************/
/***/ (() => {

eval("\"use script\";\n\n// single statement in arrow function will be automatically returned\n// we dont need curly braces when we have only one statement\n\nconst multiple = (a,b) =>  a * b;\nsetTimeout(() => console.log(multiple(5, 10)), 1000);\n\n//# sourceURL=webpack://js-challenges/./src/js/6_arrowFunction.js?");

/***/ }),

/***/ "./src/js/7_defaultParameter.js":
/*!**************************************!*\
  !*** ./src/js/7_defaultParameter.js ***!
  \**************************************/
/***/ (() => {

"use strict";
eval("\n\nfunction multiplyBy(a, multi) {\n    multi = multi ?? 2;\n    console.log(a * multi)\n}\n\n\nmultiplyBy(2, 0);\nmultiplyBy(2, undefined);\nmultiplyBy(2, 10);\n\n//# sourceURL=webpack://js-challenges/./src/js/7_defaultParameter.js?");

/***/ }),

/***/ "./src/js/8_presenceOfFunctionParam.js":
/*!*********************************************!*\
  !*** ./src/js/8_presenceOfFunctionParam.js ***!
  \*********************************************/
/***/ (() => {

eval("\"use script\";\n\nfunction missingArg() {\n    throw new Error(\"missing arg in square function\");\n}\n\nfunction square(a) {\n    return(\n        typeof a === \"number\"\n        ? console.log(a*a)\n        : missingArg()\n    )\n}\n\nsquare(10)\n// square()  | throw error, cause this function has no arg\n\n\n//# sourceURL=webpack://js-challenges/./src/js/8_presenceOfFunctionParam.js?");

/***/ }),

/***/ "./src/js/9_objectDestructuring.js":
/*!*****************************************!*\
  !*** ./src/js/9_objectDestructuring.js ***!
  \*****************************************/
/***/ (() => {

eval("\"use script\";\n\nconst obj = {\n    x: 5,\n    y: 20,\n    z: 3\n}\n\nfunction mult(object) {\n    const {x, y, z} = object;\n    console.log(object)\n}\n\n\nconsole.log(obj)\nconsole.log(mult(obj))\n\n// console.log(mult(obj));\n\n//# sourceURL=webpack://js-challenges/./src/js/9_objectDestructuring.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n__webpack_require__(/*! ./1_sum.js */ \"./src/js/1_sum.js\");\n__webpack_require__(/*! ./2_const.js */ \"./src/js/2_const.js\");\n__webpack_require__(/*! ./3_let.js */ \"./src/js/3_let.js\");\n__webpack_require__(/*! ./4_hoisting.js */ \"./src/js/4_hoisting.js\");\n__webpack_require__(/*! ./5_ternaryOperator.js */ \"./src/js/5_ternaryOperator.js\");\n__webpack_require__(/*! ./6_arrowFunction.js */ \"./src/js/6_arrowFunction.js\");\n__webpack_require__(/*! ./7_defaultParameter */ \"./src/js/7_defaultParameter.js\");\n__webpack_require__(/*! ./8_presenceOfFunctionParam */ \"./src/js/8_presenceOfFunctionParam.js\");\n__webpack_require__(/*! ./9_objectDestructuring */ \"./src/js/9_objectDestructuring.js\");\n__webpack_require__(/*! ./10_destructuringAndRestOperator */ \"./src/js/10_destructuringAndRestOperator.js\");\n__webpack_require__(/*! ./11_spreadOperator */ \"./src/js/11_spreadOperator.js\");\n\n\n//# sourceURL=webpack://js-challenges/./src/js/app.js?");

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