"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/groq";
exports.ids = ["vendor-chunks/groq"];
exports.modules = {

/***/ "(ssr)/./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/***/ ((module) => {

eval("\n\nfunction groq(strings) {\n  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    keys[_key - 1] = arguments[_key];\n  }\n  const lastIndex = strings.length - 1;\n  return strings.slice(0, lastIndex).reduce((acc, str, i) => {\n    return acc + str + keys[i];\n  }, \"\") + strings[lastIndex];\n}\nmodule.exports = groq;\n//# sourceMappingURL=groq.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLHlGQUF5RixhQUFhO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90ZWwtbWFuYWdlbWVudC8uL25vZGVfbW9kdWxlcy9ncm9xL2xpYi9ncm9xLmpzP2Y5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm9xKHN0cmluZ3MpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGtleXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIHN0cmluZ3Muc2xpY2UoMCwgbGFzdEluZGV4KS5yZWR1Y2UoKGFjYywgc3RyLCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIHN0ciArIGtleXNbaV07XG4gIH0sIFwiXCIpICsgc3RyaW5nc1tsYXN0SW5kZXhdO1xufVxubW9kdWxlLmV4cG9ydHMgPSBncm9xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvcS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/groq/lib/groq.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nfunction groq(strings) {\n    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n        keys[_key - 1] = arguments[_key];\n    }\n    const lastIndex = strings.length - 1;\n    return strings.slice(0, lastIndex).reduce((acc, str, i)=>{\n        return acc + str + keys[i];\n    }, \"\") + strings[lastIndex];\n}\nmodule.exports = groq; //# sourceMappingURL=groq.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLEtBQUtDLE9BQU87SUFDbkIsSUFBSyxJQUFJQyxPQUFPQyxVQUFVQyxNQUFNLEVBQUVDLE9BQU8sSUFBSUMsTUFBTUosT0FBTyxJQUFJQSxPQUFPLElBQUksSUFBSUssT0FBTyxHQUFHQSxPQUFPTCxNQUFNSyxPQUFRO1FBQzFHRixJQUFJLENBQUNFLE9BQU8sRUFBRSxHQUFHSixTQUFTLENBQUNJLEtBQUs7SUFDbEM7SUFDQSxNQUFNQyxZQUFZUCxRQUFRRyxNQUFNLEdBQUc7SUFDbkMsT0FBT0gsUUFBUVEsS0FBSyxDQUFDLEdBQUdELFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxLQUFLQztRQUNuRCxPQUFPRixNQUFNQyxNQUFNUCxJQUFJLENBQUNRLEVBQUU7SUFDNUIsR0FBRyxNQUFNWixPQUFPLENBQUNPLFVBQVU7QUFDN0I7QUFDQU0sT0FBT0MsT0FBTyxHQUFHZixNQUNqQixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3RlbC1tYW5hZ2VtZW50Ly4vbm9kZV9tb2R1bGVzL2dyb3EvbGliL2dyb3EuanM/YjFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3Eoc3RyaW5ncykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAga2V5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICByZXR1cm4gc3RyaW5ncy5zbGljZSgwLCBsYXN0SW5kZXgpLnJlZHVjZSgoYWNjLCBzdHIsIGkpID0+IHtcbiAgICByZXR1cm4gYWNjICsgc3RyICsga2V5c1tpXTtcbiAgfSwgXCJcIikgKyBzdHJpbmdzW2xhc3RJbmRleF07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGdyb3E7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm9xLmpzLm1hcFxuIl0sIm5hbWVzIjpbImdyb3EiLCJzdHJpbmdzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImtleXMiLCJBcnJheSIsIl9rZXkiLCJsYXN0SW5kZXgiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsInN0ciIsImkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/groq/lib/groq.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/groq/node/groq.mjs":
/*!*****************************************!*\
  !*** ./node_modules/groq/node/groq.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_groq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/groq.js */ \"(ssr)/./node_modules/groq/lib/groq.js\");\n// eslint-disable-next-line import/extensions\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_groq_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JvcS9ub2RlL2dyb3EubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDZ0M7O0FBRWhDLGlFQUFlLHlDQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90ZWwtbWFuYWdlbWVudC8uL25vZGVfbW9kdWxlcy9ncm9xL25vZGUvZ3JvcS5tanM/NzlkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBjanMgZnJvbSAnLi4vbGliL2dyb3EuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNqc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/groq/node/groq.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/groq/node/groq.mjs":
/*!*****************************************!*\
  !*** ./node_modules/groq/node/groq.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_groq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/groq.js */ \"(rsc)/./node_modules/groq/lib/groq.js\");\n// eslint-disable-next-line import/extensions\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_groq_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ3JvcS9ub2RlL2dyb3EubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkNBQTZDO0FBQ2I7QUFFaEMsaUVBQWVBLHlDQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90ZWwtbWFuYWdlbWVudC8uL25vZGVfbW9kdWxlcy9ncm9xL25vZGUvZ3JvcS5tanM/MTAwNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBjanMgZnJvbSAnLi4vbGliL2dyb3EuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNqc1xuIl0sIm5hbWVzIjpbImNqcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/groq/node/groq.mjs\n");

/***/ })

};
;