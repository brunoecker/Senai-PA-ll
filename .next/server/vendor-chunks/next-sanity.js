"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(ssr)/./node_modules/@sanity/preview-kit/dist/client.js\");\n\n\nfunction createClient(config) {\n  let {\n    // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,\n    encodeSourceMap = false\n  } = config;\n  if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n    encodeSourceMap = true;\n  }\n  return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    ...config,\n    studioUrl,\n    encodeSourceMap\n  });\n}\n\n//# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBYTtBQUMrRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0VBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3dCO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQtc2FuaXR5L2Rpc3QvY2xpZW50LmpzP2ZmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZUNsaWVudCQxIH0gZnJvbSAnQHNhbml0eS9wcmV2aWV3LWtpdC9jbGllbnQnO1xuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGNvbmZpZykge1xuICBsZXQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3QsIG5vLXByb2Nlc3MtZW52XG4gICAgc3R1ZGlvVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwsXG4gICAgZW5jb2RlU291cmNlTWFwID0gZmFsc2VcbiAgfSA9IGNvbmZpZztcbiAgaWYgKGVuY29kZVNvdXJjZU1hcCA9PT0gXCJhdXRvXCIgJiYgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX0VOViA9PT0gXCJwcmV2aWV3XCIpIHtcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSB0cnVlO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQkMSh7XG4gICAgLi4uY29uZmlnLFxuICAgIHN0dWRpb1VybCxcbiAgICBlbmNvZGVTb3VyY2VNYXBcbiAgfSk7XG59XG5leHBvcnQgeyBjcmVhdGVDbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/client.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(rsc)/./node_modules/@sanity/preview-kit/dist/client.js\");\n\n\nfunction createClient(config) {\n  let {\n    // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,\n    encodeSourceMap = false\n  } = config;\n  if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n    encodeSourceMap = true;\n  }\n  return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    ...config,\n    studioUrl,\n    encodeSourceMap\n  });\n}\n\n//# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBYTtBQUMrRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0VBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3dCO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQtc2FuaXR5L2Rpc3QvY2xpZW50LmpzPzQ0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZUNsaWVudCQxIH0gZnJvbSAnQHNhbml0eS9wcmV2aWV3LWtpdC9jbGllbnQnO1xuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGNvbmZpZykge1xuICBsZXQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3QsIG5vLXByb2Nlc3MtZW52XG4gICAgc3R1ZGlvVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwsXG4gICAgZW5jb2RlU291cmNlTWFwID0gZmFsc2VcbiAgfSA9IGNvbmZpZztcbiAgaWYgKGVuY29kZVNvdXJjZU1hcCA9PT0gXCJhdXRvXCIgJiYgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX0VOViA9PT0gXCJwcmV2aWV3XCIpIHtcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSB0cnVlO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQkMSh7XG4gICAgLi4uY29uZmlnLFxuICAgIHN0dWRpb1VybCxcbiAgICBlbmNvZGVTb3VyY2VNYXBcbiAgfSk7XG59XG5leHBvcnQgeyBjcmVhdGVDbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/client.js\n");

/***/ })

};
;