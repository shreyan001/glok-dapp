"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8arrays";
exports.ids = ["vendor-chunks/uint8arrays"];
exports.modules = {

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/alloc.js":
/*!***************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/alloc.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar asUint8array = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js\");\n\nfunction alloc(size = 0) {\n  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {\n    return asUint8array.asUint8Array(globalThis.Buffer.alloc(size));\n  }\n  return new Uint8Array(size);\n}\nfunction allocUnsafe(size = 0) {\n  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {\n    return asUint8array.asUint8Array(globalThis.Buffer.allocUnsafe(size));\n  }\n  return new Uint8Array(size);\n}\n\nexports.alloc = alloc;\nexports.allocUnsafe = allocUnsafe;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9hbGxvYy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELG1CQUFtQixtQkFBTyxDQUFDLCtGQUF5Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Nqcy9zcmMvYWxsb2MuanM/ZjdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBhc1VpbnQ4YXJyYXkgPSByZXF1aXJlKCcuL3V0aWwvYXMtdWludDhhcnJheS5qcycpO1xuXG5mdW5jdGlvbiBhbGxvYyhzaXplID0gMCkge1xuICBpZiAoZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvYyAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFzVWludDhhcnJheS5hc1VpbnQ4QXJyYXkoZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2Moc2l6ZSkpO1xuICB9XG4gIHJldHVybiBuZXcgVWludDhBcnJheShzaXplKTtcbn1cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jVW5zYWZlICE9IG51bGwpIHtcbiAgICByZXR1cm4gYXNVaW50OGFycmF5LmFzVWludDhBcnJheShnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufVxuXG5leHBvcnRzLmFsbG9jID0gYWxsb2M7XG5leHBvcnRzLmFsbG9jVW5zYWZlID0gYWxsb2NVbnNhZmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/alloc.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/compare.js":
/*!*****************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/compare.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction compare(a, b) {\n  for (let i = 0; i < a.byteLength; i++) {\n    if (a[i] < b[i]) {\n      return -1;\n    }\n    if (a[i] > b[i]) {\n      return 1;\n    }\n  }\n  if (a.byteLength > b.byteLength) {\n    return 1;\n  }\n  if (a.byteLength < b.byteLength) {\n    return -1;\n  }\n  return 0;\n}\n\nexports.compare = compare;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9jb21wYXJlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ2NoYWluLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9janMvc3JjL2NvbXBhcmUuanM/MzIzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gPCBiW2ldKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhW2ldID4gYltpXSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggPiBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYS5ieXRlTGVuZ3RoIDwgYi5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/compare.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/concat.js":
/*!****************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/concat.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar alloc = __webpack_require__(/*! ./alloc.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/alloc.js\");\nvar asUint8array = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js\");\n\nfunction concat(arrays, length) {\n  if (!length) {\n    length = arrays.reduce((acc, curr) => acc + curr.length, 0);\n  }\n  const output = alloc.allocUnsafe(length);\n  let offset = 0;\n  for (const arr of arrays) {\n    output.set(arr, offset);\n    offset += arr.length;\n  }\n  return asUint8array.asUint8Array(output);\n}\n\nexports.concat = concat;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9jb25jYXQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMscUVBQVk7QUFDaEMsbUJBQW1CLG1CQUFPLENBQUMsK0ZBQXlCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmdjaGFpbi1uZXh0anMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9jb25jYXQuanM/ZjIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBhbGxvYyA9IHJlcXVpcmUoJy4vYWxsb2MuanMnKTtcbnZhciBhc1VpbnQ4YXJyYXkgPSByZXF1aXJlKCcuL3V0aWwvYXMtdWludDhhcnJheS5qcycpO1xuXG5mdW5jdGlvbiBjb25jYXQoYXJyYXlzLCBsZW5ndGgpIHtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSBhcnJheXMucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIubGVuZ3RoLCAwKTtcbiAgfVxuICBjb25zdCBvdXRwdXQgPSBhbGxvYy5hbGxvY1Vuc2FmZShsZW5ndGgpO1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgZm9yIChjb25zdCBhcnIgb2YgYXJyYXlzKSB7XG4gICAgb3V0cHV0LnNldChhcnIsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IGFyci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIGFzVWludDhhcnJheS5hc1VpbnQ4QXJyYXkob3V0cHV0KTtcbn1cblxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/concat.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/equals.js":
/*!****************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/equals.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction equals(a, b) {\n  if (a === b) {\n    return true;\n  }\n  if (a.byteLength !== b.byteLength) {\n    return false;\n  }\n  for (let i = 0; i < a.byteLength; i++) {\n    if (a[i] !== b[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nexports.equals = equals;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9lcXVhbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Nqcy9zcmMvZXF1YWxzLmpzPzk5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuZXF1YWxzID0gZXF1YWxzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/equals.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/from-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/from-string.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar bases = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/bases.js\");\nvar asUint8array = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js\");\n\nfunction fromString(string, encoding = 'utf8') {\n  const base = bases[encoding];\n  if (!base) {\n    throw new Error(`Unsupported encoding \"${ encoding }\"`);\n  }\n  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n    return asUint8array.asUint8Array(globalThis.Buffer.from(string, 'utf-8'));\n  }\n  return base.decoder.decode(`${ base.prefix }${ string }`);\n}\n\nexports.fromString = fromString;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9mcm9tLXN0cmluZy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFlBQVksbUJBQU8sQ0FBQywrRUFBaUI7QUFDckMsbUJBQW1CLG1CQUFPLENBQUMsK0ZBQXlCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLEdBQUcsUUFBUTtBQUN6RDs7QUFFQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Nqcy9zcmMvZnJvbS1zdHJpbmcuanM/YzhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBiYXNlcyA9IHJlcXVpcmUoJy4vdXRpbC9iYXNlcy5qcycpO1xudmFyIGFzVWludDhhcnJheSA9IHJlcXVpcmUoJy4vdXRpbC9hcy11aW50OGFycmF5LmpzJyk7XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcoc3RyaW5nLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBiYXNlID0gYmFzZXNbZW5jb2RpbmddO1xuICBpZiAoIWJhc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGVuY29kaW5nIFwiJHsgZW5jb2RpbmcgfVwiYCk7XG4gIH1cbiAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnIHx8IGVuY29kaW5nID09PSAndXRmLTgnKSAmJiBnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20gIT0gbnVsbCkge1xuICAgIHJldHVybiBhc1VpbnQ4YXJyYXkuYXNVaW50OEFycmF5KGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oc3RyaW5nLCAndXRmLTgnKSk7XG4gIH1cbiAgcmV0dXJuIGJhc2UuZGVjb2Rlci5kZWNvZGUoYCR7IGJhc2UucHJlZml4IH0keyBzdHJpbmcgfWApO1xufVxuXG5leHBvcnRzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/from-string.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar compare = __webpack_require__(/*! ./compare.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/compare.js\");\nvar concat = __webpack_require__(/*! ./concat.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/concat.js\");\nvar equals = __webpack_require__(/*! ./equals.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/equals.js\");\nvar fromString = __webpack_require__(/*! ./from-string.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/from-string.js\");\nvar toString = __webpack_require__(/*! ./to-string.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/to-string.js\");\nvar xor = __webpack_require__(/*! ./xor.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/xor.js\");\n\n\n\nexports.compare = compare.compare;\nexports.concat = concat.concat;\nexports.equals = equals.equals;\nexports.fromString = fromString.fromString;\nexports.toString = toString.toString;\nexports.xor = xor.xor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELGNBQWMsbUJBQU8sQ0FBQyx5RUFBYztBQUNwQyxhQUFhLG1CQUFPLENBQUMsdUVBQWE7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLHVFQUFhO0FBQ2xDLGlCQUFpQixtQkFBTyxDQUFDLGlGQUFrQjtBQUMzQyxlQUFlLG1CQUFPLENBQUMsNkVBQWdCO0FBQ3ZDLFVBQVUsbUJBQU8sQ0FBQyxpRUFBVTs7OztBQUk1QixlQUFlO0FBQ2YsY0FBYztBQUNkLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Nqcy9zcmMvaW5kZXguanM/NDJiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlLmpzJyk7XG52YXIgY29uY2F0ID0gcmVxdWlyZSgnLi9jb25jYXQuanMnKTtcbnZhciBlcXVhbHMgPSByZXF1aXJlKCcuL2VxdWFscy5qcycpO1xudmFyIGZyb21TdHJpbmcgPSByZXF1aXJlKCcuL2Zyb20tc3RyaW5nLmpzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvLXN0cmluZy5qcycpO1xudmFyIHhvciA9IHJlcXVpcmUoJy4veG9yLmpzJyk7XG5cblxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlLmNvbXBhcmU7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdC5jb25jYXQ7XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscy5lcXVhbHM7XG5leHBvcnRzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nLmZyb21TdHJpbmc7XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmcudG9TdHJpbmc7XG5leHBvcnRzLnhvciA9IHhvci54b3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/to-string.js":
/*!*******************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/to-string.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar bases = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/bases.js\");\n\nfunction toString(array, encoding = 'utf8') {\n  const base = bases[encoding];\n  if (!base) {\n    throw new Error(`Unsupported encoding \"${ encoding }\"`);\n  }\n  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');\n  }\n  return base.encoder.encode(array).substring(1);\n}\n\nexports.toString = toString;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy90by1zdHJpbmcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsK0VBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ2NoYWluLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9janMvc3JjL3RvLXN0cmluZy5qcz8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJhc2VzID0gcmVxdWlyZSgnLi91dGlsL2Jhc2VzLmpzJyk7XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGFycmF5LCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBiYXNlID0gYmFzZXNbZW5jb2RpbmddO1xuICBpZiAoIWJhc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGVuY29kaW5nIFwiJHsgZW5jb2RpbmcgfVwiYCk7XG4gIH1cbiAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnIHx8IGVuY29kaW5nID09PSAndXRmLTgnKSAmJiBnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20gIT0gbnVsbCkge1xuICAgIHJldHVybiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGFycmF5LmJ1ZmZlciwgYXJyYXkuYnl0ZU9mZnNldCwgYXJyYXkuYnl0ZUxlbmd0aCkudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgfVxuICByZXR1cm4gYmFzZS5lbmNvZGVyLmVuY29kZShhcnJheSkuc3Vic3RyaW5nKDEpO1xufVxuXG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/to-string.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js":
/*!****************************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/util/as-uint8array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction asUint8Array(buf) {\n  if (globalThis.Buffer != null) {\n    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);\n  }\n  return buf;\n}\n\nexports.asUint8Array = asUint8Array;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy91dGlsL2FzLXVpbnQ4YXJyYXkuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ2NoYWluLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9janMvc3JjL3V0aWwvYXMtdWludDhhcnJheS5qcz82OWY4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gYXNVaW50OEFycmF5KGJ1Zikge1xuICBpZiAoZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGgpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5cbmV4cG9ydHMuYXNVaW50OEFycmF5ID0gYXNVaW50OEFycmF5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/util/bases.js":
/*!********************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/util/bases.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar basics = __webpack_require__(/*! multiformats/basics */ \"(ssr)/./node_modules/multiformats/cjs/src/basics.js\");\nvar alloc = __webpack_require__(/*! ../alloc.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/alloc.js\");\n\nfunction createCodec(name, prefix, encode, decode) {\n  return {\n    name,\n    prefix,\n    encoder: {\n      name,\n      prefix,\n      encode\n    },\n    decoder: { decode }\n  };\n}\nconst string = createCodec('utf8', 'u', buf => {\n  const decoder = new TextDecoder('utf8');\n  return 'u' + decoder.decode(buf);\n}, str => {\n  const encoder = new TextEncoder();\n  return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec('ascii', 'a', buf => {\n  let string = 'a';\n  for (let i = 0; i < buf.length; i++) {\n    string += String.fromCharCode(buf[i]);\n  }\n  return string;\n}, str => {\n  str = str.substring(1);\n  const buf = alloc.allocUnsafe(str.length);\n  for (let i = 0; i < str.length; i++) {\n    buf[i] = str.charCodeAt(i);\n  }\n  return buf;\n});\nconst BASES = {\n  utf8: string,\n  'utf-8': string,\n  hex: basics.bases.base16,\n  latin1: ascii,\n  ascii: ascii,\n  binary: ascii,\n  ...basics.bases\n};\n\nmodule.exports = BASES;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy91dGlsL2Jhc2VzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxnRkFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHNFQUFhOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Nqcy9zcmMvdXRpbC9iYXNlcy5qcz83ZmQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2ljcyA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9iYXNpY3MnKTtcbnZhciBhbGxvYyA9IHJlcXVpcmUoJy4uL2FsbG9jLmpzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvZGVjKG5hbWUsIHByZWZpeCwgZW5jb2RlLCBkZWNvZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByZWZpeCxcbiAgICBlbmNvZGVyOiB7XG4gICAgICBuYW1lLFxuICAgICAgcHJlZml4LFxuICAgICAgZW5jb2RlXG4gICAgfSxcbiAgICBkZWNvZGVyOiB7IGRlY29kZSB9XG4gIH07XG59XG5jb25zdCBzdHJpbmcgPSBjcmVhdGVDb2RlYygndXRmOCcsICd1JywgYnVmID0+IHtcbiAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmOCcpO1xuICByZXR1cm4gJ3UnICsgZGVjb2Rlci5kZWNvZGUoYnVmKTtcbn0sIHN0ciA9PiB7XG4gIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0ci5zdWJzdHJpbmcoMSkpO1xufSk7XG5jb25zdCBhc2NpaSA9IGNyZWF0ZUNvZGVjKCdhc2NpaScsICdhJywgYnVmID0+IHtcbiAgbGV0IHN0cmluZyA9ICdhJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59LCBzdHIgPT4ge1xuICBzdHIgPSBzdHIuc3Vic3RyaW5nKDEpO1xuICBjb25zdCBidWYgPSBhbGxvYy5hbGxvY1Vuc2FmZShzdHIubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufSk7XG5jb25zdCBCQVNFUyA9IHtcbiAgdXRmODogc3RyaW5nLFxuICAndXRmLTgnOiBzdHJpbmcsXG4gIGhleDogYmFzaWNzLmJhc2VzLmJhc2UxNixcbiAgbGF0aW4xOiBhc2NpaSxcbiAgYXNjaWk6IGFzY2lpLFxuICBiaW5hcnk6IGFzY2lpLFxuICAuLi5iYXNpY3MuYmFzZXNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQkFTRVM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/util/bases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/uint8arrays/cjs/src/xor.js":
/*!*************************************************!*\
  !*** ./node_modules/uint8arrays/cjs/src/xor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar alloc = __webpack_require__(/*! ./alloc.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/alloc.js\");\nvar asUint8array = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/./node_modules/uint8arrays/cjs/src/util/as-uint8array.js\");\n\nfunction xor(a, b) {\n  if (a.length !== b.length) {\n    throw new Error('Inputs should have the same length');\n  }\n  const result = alloc.allocUnsafe(a.length);\n  for (let i = 0; i < a.length; i++) {\n    result[i] = a[i] ^ b[i];\n  }\n  return asUint8array.asUint8Array(result);\n}\n\nexports.xor = xor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy94b3IuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMscUVBQVk7QUFDaEMsbUJBQW1CLG1CQUFPLENBQUMsK0ZBQXlCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmdjaGFpbi1uZXh0anMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvY2pzL3NyYy94b3IuanM/MjEyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBhbGxvYyA9IHJlcXVpcmUoJy4vYWxsb2MuanMnKTtcbnZhciBhc1VpbnQ4YXJyYXkgPSByZXF1aXJlKCcuL3V0aWwvYXMtdWludDhhcnJheS5qcycpO1xuXG5mdW5jdGlvbiB4b3IoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dHMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbGVuZ3RoJyk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYWxsb2MuYWxsb2NVbnNhZmUoYS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBhW2ldIF4gYltpXTtcbiAgfVxuICByZXR1cm4gYXNVaW50OGFycmF5LmFzVWludDhBcnJheShyZXN1bHQpO1xufVxuXG5leHBvcnRzLnhvciA9IHhvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8arrays/cjs/src/xor.js\n");

/***/ })

};
;