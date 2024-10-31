"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-auth-sanity";
exports.ids = ["vendor-chunks/next-auth-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-auth-sanity/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-auth-sanity/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.signUp = void 0;\nconst signUp = async (payload) => {\n    var _a;\n    const res = await fetch('/api/sanity/signUp', {\n        method: 'POST',\n        body: JSON.stringify(payload),\n        headers: {\n            'Content-Type': 'application/json; charset=UTF-8'\n        }\n    });\n    if (!res.ok) {\n        const isJson = (_a = res.headers\n            .get('Content-Type')) === null || _a === void 0 ? void 0 : _a.includes('application/json');\n        const data = isJson ? await res.json() : await res.text();\n        throw new Error(data);\n    }\n    const user = await res.json();\n    return user;\n};\nexports.signUp = signUp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoLXNhbml0eS9jbGllbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC1zYW5pdHkvY2xpZW50LmpzPzZiMGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZ25VcCA9IHZvaWQgMDtcbmNvbnN0IHNpZ25VcCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3Nhbml0eS9zaWduVXAnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04J1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc3QgaXNKc29uID0gKF9hID0gcmVzLmhlYWRlcnNcbiAgICAgICAgICAgIC5nZXQoJ0NvbnRlbnQtVHlwZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGlzSnNvbiA/IGF3YWl0IHJlcy5qc29uKCkgOiBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YSk7XG4gICAgfVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB1c2VyO1xufTtcbmV4cG9ydHMuc2lnblVwID0gc2lnblVwO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-auth-sanity/client.js\n");

/***/ })

};
;