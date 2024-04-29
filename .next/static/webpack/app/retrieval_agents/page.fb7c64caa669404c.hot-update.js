"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/retrieval_agents/page",{

/***/ "(app-pages-browser)/./components/ChatMessageBubble.tsx":
/*!******************************************!*\
  !*** ./components/ChatMessageBubble.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageBubble: function() { return /* binding */ ChatMessageBubble; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Function to parse response and extract output and sources\nfunction separateOutputAndSources(data) {\n    try {\n        const jsonData = JSON.parse(data);\n        if (!jsonData.output || !jsonData.sources) {\n            return undefined; // Handle invalid data\n        }\n        const sources = {\n            authorAddress: jsonData.sources.authorAddress,\n            nftAddress: jsonData.sources.nftAddress,\n            costPerWord: jsonData.sources.costPerWord\n        };\n        return {\n            output: jsonData.output,\n            sources\n        };\n    } catch (error) {\n        console.error(\"Error parsing JSON data:\", error);\n        return undefined; // Handle parsing errors\n    }\n}\nfunction ChatMessageBubble(param) {\n    let { message, aiEmoji, openTransactionModal, onReveal } = param;\n    var _separateOutputAndSources, _separateOutputAndSources1;\n    _s();\n    const [showFullMessage, setShowFullMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const colorClassName = message.role === \"user\" ? \"bg-sky-600\" : \"bg-slate-50 text-black\";\n    const alignmentClassName = message.role === \"user\" ? \"ml-auto\" : \"mr-auto\";\n    const prefix = message.role === \"user\" ? \"\\uD83E\\uDDD1\" : aiEmoji;\n    const messageContent = message.role === \"user\" ? message.content : (_separateOutputAndSources = separateOutputAndSources(message.content)) === null || _separateOutputAndSources === void 0 ? void 0 : _separateOutputAndSources.output;\n    const sources = message.role === \"user\" ? [] : (_separateOutputAndSources1 = separateOutputAndSources(message.content)) === null || _separateOutputAndSources1 === void 0 ? void 0 : _separateOutputAndSources1.sources;\n    //\n    const words = messageContent === null || messageContent === void 0 ? void 0 : messageContent.split(\" \");\n    const truncatedMessage = words === null || words === void 0 ? void 0 : words.slice(0, 60).join(\" \");\n    const documentHash = sources === null || sources === void 0 ? void 0 : sources.nftAddress; // Adjusted to get the first source's nftAddress\n    const pricePerWord = sources === null || sources === void 0 ? void 0 : sources.costPerWord; // Adjusted to get the first source's costPerWord\n    const handleUnlockMessage = ()=>{\n        openTransactionModal(documentHash, pricePerWord, words === null || words === void 0 ? void 0 : words.length); // Adjusted parameter passing\n        onReveal();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(alignmentClassName, \" \").concat(colorClassName, \" rounded px-4 py-2 max-w-[80%] mb-8 flex\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-2\",\n                children: prefix\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"whitespace-pre-wrap flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            showFullMessage ? messageContent : truncatedMessage,\n                            !showFullMessage && (words === null || words === void 0 ? void 0 : words.length) > 160 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-blue-600 underline\",\n                                onClick: handleUnlockMessage,\n                                children: \"Click to reveal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    sources && (sources === null || sources === void 0 ? void 0 : sources.nftAddress) && (words === null || words === void 0 ? void 0 : words.length) > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-4 mr-auto bg-slate-300 px-2 py-1 rounded text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Sources:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-1 mr-2 bg-slate-200 px-2 py-1 rounded text-xs\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: sources === null || sources === void 0 ? void 0 : sources.nftAddress\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatMessageBubble, \"4U4pX00mB1aXmiQOtgpvB/ZlTWE=\");\n_c = ChatMessageBubble;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VCdWJibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQW1CakMsNERBQTREO0FBQzVELFNBQVNDLHlCQUF5QkMsSUFBWTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBNkNDLEtBQUtDLEtBQUssQ0FBQ0g7UUFDOUQsSUFBSSxDQUFDQyxTQUFTRyxNQUFNLElBQUksQ0FBQ0gsU0FBU0ksT0FBTyxFQUFFO1lBQ3pDLE9BQU9DLFdBQVcsc0JBQXNCO1FBQzFDO1FBRUEsTUFBTUQsVUFBVTtZQUNkRSxlQUFlTixTQUFTSSxPQUFPLENBQUNFLGFBQWE7WUFDN0NDLFlBQVlQLFNBQVNJLE9BQU8sQ0FBQ0csVUFBVTtZQUN2Q0MsYUFBYVIsU0FBU0ksT0FBTyxDQUFDSSxXQUFXO1FBQzNDO1FBRUEsT0FBTztZQUFFTCxRQUFRSCxTQUFTRyxNQUFNO1lBQUVDO1FBQVE7SUFDNUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9KLFdBQVcsd0JBQXdCO0lBQzVDO0FBQ0Y7QUFFTyxTQUFTTSxrQkFBa0IsS0FBMkU7UUFBM0UsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLG9CQUFvQixFQUFDQyxRQUFRLEVBQTBCLEdBQTNFO1FBU21DakIsMkJBQ3BCQTs7SUFUL0MsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1xQixpQkFDSk4sUUFBUU8sSUFBSSxLQUFLLFNBQVMsZUFBZTtJQUMzQyxNQUFNQyxxQkFDSlIsUUFBUU8sSUFBSSxLQUFLLFNBQVMsWUFBWTtJQUN4QyxNQUFNRSxTQUFTVCxRQUFRTyxJQUFJLEtBQUssU0FBUyxpQkFBT047SUFFaEQsTUFBTVMsaUJBQWlCVixRQUFRTyxJQUFJLEtBQUssU0FBU1AsUUFBUVcsT0FBTyxJQUFHekIsNEJBQUFBLHlCQUF5QmMsUUFBUVcsT0FBTyxlQUF4Q3pCLGdEQUFBQSwwQkFBMkNLLE1BQU07SUFDcEgsTUFBTUMsVUFBVVEsUUFBUU8sSUFBSSxLQUFLLFNBQVMsRUFBRSxJQUFHckIsNkJBQUFBLHlCQUF5QmMsUUFBUVcsT0FBTyxlQUF4Q3pCLGlEQUFBQSwyQkFBMkNNLE9BQU87SUFFakcsRUFBRTtJQUNGLE1BQU1vQixRQUFRRiwyQkFBQUEscUNBQUFBLGVBQWdCRyxLQUFLLENBQUM7SUFDcEMsTUFBTUMsbUJBQW1CRixrQkFBQUEsNEJBQUFBLE1BQU9HLEtBQUssQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQztJQUNsRCxNQUFNQyxlQUFlekIsb0JBQUFBLDhCQUFBQSxRQUFTRyxVQUFVLEVBQUUsZ0RBQWdEO0lBQzFGLE1BQU11QixlQUFlMUIsb0JBQUFBLDhCQUFBQSxRQUFTSSxXQUFXLEVBQUUsaURBQWlEO0lBQzVGLE1BQU11QixzQkFBc0I7UUFDMUJqQixxQkFBcUJlLGNBQWNDLGNBQWNOLGtCQUFBQSw0QkFBQUEsTUFBT1EsTUFBTSxHQUFHLDZCQUE2QjtRQUM5RmpCO0lBQ0Y7SUFHQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVcsR0FBeUJoQixPQUF0QkUsb0JBQW1CLEtBQWtCLE9BQWZGLGdCQUFlOzswQkFDdEQsOERBQUNlO2dCQUFJQyxXQUFVOzBCQUNaYjs7Ozs7OzBCQUVILDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDOzs0QkFDRW5CLGtCQUFrQk0saUJBQWlCSTs0QkFDbkMsQ0FBQ1YsbUJBQW1CUSxDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9RLE1BQU0sSUFBRyxxQkFDbkMsOERBQUNJO2dDQUFPRixXQUFVO2dDQUEwQkcsU0FBU047MENBQXFCOzs7Ozs7Ozs7Ozs7b0JBSzdFM0IsWUFBV0Esb0JBQUFBLDhCQUFBQSxRQUFTRyxVQUFVLEtBQUlpQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9RLE1BQU0sSUFBRyxvQkFDakQ7OzBDQUNFLDhEQUFDTTtnQ0FBS0osV0FBVTswQ0FDZCw0RUFBQ0s7OENBQUc7Ozs7Ozs7Ozs7OzBDQUVOLDhEQUFDRDtnQ0FBS0osV0FBVTswQ0FDZCw0RUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1o5QixvQkFBQUEsOEJBQUFBLFFBQVNHLFVBQVU7Ozs7Ozs7Ozs7Ozt1Q0FJeEI7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQXBEZ0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VCdWJibGUudHN4P2Y4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gXCJhaS9yZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYXRNZXNzYWdlQnViYmxlUHJvcHMge1xyXG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgYWlFbW9qaT86IHN0cmluZztcclxuICBvcGVuVHJhbnNhY3Rpb25Nb2RhbDogYW55OyAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBoYW5kbGUgdW5sb2NraW5nIHRoZSBtZXNzYWdlXHJcbiAgb25SZXZlYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbnR5cGUgUGFyc2VkUmVzcG9uc2UgPSB7XHJcbiAgb3V0cHV0OiBzdHJpbmc7XHJcbiAgc291cmNlczoge1xyXG4gICAgYXV0aG9yQWRkcmVzczogc3RyaW5nO1xyXG4gICAgbmZ0QWRkcmVzczogc3RyaW5nO1xyXG4gICAgY29zdFBlcldvcmQ6IG51bWJlcjtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gcGFyc2UgcmVzcG9uc2UgYW5kIGV4dHJhY3Qgb3V0cHV0IGFuZCBzb3VyY2VzXHJcbmZ1bmN0aW9uIHNlcGFyYXRlT3V0cHV0QW5kU291cmNlcyhkYXRhOiBzdHJpbmcpOiBQYXJzZWRSZXNwb25zZSB8IHVuZGVmaW5lZCB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGpzb25EYXRhOiB7IG91dHB1dDogc3RyaW5nOyBzb3VyY2VzOiBhbnkgfSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBpZiAoIWpzb25EYXRhLm91dHB1dCB8fCAhanNvbkRhdGEuc291cmNlcykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBIYW5kbGUgaW52YWxpZCBkYXRhXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc291cmNlcyA9IHtcclxuICAgICAgYXV0aG9yQWRkcmVzczoganNvbkRhdGEuc291cmNlcy5hdXRob3JBZGRyZXNzLFxyXG4gICAgICBuZnRBZGRyZXNzOiBqc29uRGF0YS5zb3VyY2VzLm5mdEFkZHJlc3MsXHJcbiAgICAgIGNvc3RQZXJXb3JkOiBqc29uRGF0YS5zb3VyY2VzLmNvc3RQZXJXb3JkLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBvdXRwdXQ6IGpzb25EYXRhLm91dHB1dCwgc291cmNlcyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBKU09OIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIEhhbmRsZSBwYXJzaW5nIGVycm9yc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRNZXNzYWdlQnViYmxlKHsgbWVzc2FnZSwgYWlFbW9qaSwgb3BlblRyYW5zYWN0aW9uTW9kYWwsb25SZXZlYWwgfTogQ2hhdE1lc3NhZ2VCdWJibGVQcm9wcykge1xyXG4gIGNvbnN0IFtzaG93RnVsbE1lc3NhZ2UsIHNldFNob3dGdWxsTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNvbG9yQ2xhc3NOYW1lID1cclxuICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCIgPyBcImJnLXNreS02MDBcIiA6IFwiYmctc2xhdGUtNTAgdGV4dC1ibGFja1wiO1xyXG4gIGNvbnN0IGFsaWdubWVudENsYXNzTmFtZSA9XHJcbiAgICBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJtbC1hdXRvXCIgOiBcIm1yLWF1dG9cIjtcclxuICBjb25zdCBwcmVmaXggPSBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCLwn6eRXCIgOiBhaUVtb2ppO1xyXG5cclxuICBjb25zdCBtZXNzYWdlQ29udGVudCA9IG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCIgPyBtZXNzYWdlLmNvbnRlbnQgOiBzZXBhcmF0ZU91dHB1dEFuZFNvdXJjZXMobWVzc2FnZS5jb250ZW50KT8ub3V0cHV0O1xyXG4gIGNvbnN0IHNvdXJjZXMgPSBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gW10gOiBzZXBhcmF0ZU91dHB1dEFuZFNvdXJjZXMobWVzc2FnZS5jb250ZW50KT8uc291cmNlcztcclxuXHJcbiAgLy9cclxuICBjb25zdCB3b3JkcyA9IG1lc3NhZ2VDb250ZW50Py5zcGxpdCgnICcpO1xyXG4gIGNvbnN0IHRydW5jYXRlZE1lc3NhZ2UgPSB3b3Jkcz8uc2xpY2UoMCwgNjApLmpvaW4oJyAnKTtcclxuICBjb25zdCBkb2N1bWVudEhhc2ggPSBzb3VyY2VzPy5uZnRBZGRyZXNzOyAvLyBBZGp1c3RlZCB0byBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIG5mdEFkZHJlc3NcclxuICBjb25zdCBwcmljZVBlcldvcmQgPSBzb3VyY2VzPy5jb3N0UGVyV29yZDsgLy8gQWRqdXN0ZWQgdG8gZ2V0IHRoZSBmaXJzdCBzb3VyY2UncyBjb3N0UGVyV29yZFxyXG4gIGNvbnN0IGhhbmRsZVVubG9ja01lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBvcGVuVHJhbnNhY3Rpb25Nb2RhbChkb2N1bWVudEhhc2gsIHByaWNlUGVyV29yZCwgd29yZHM/Lmxlbmd0aCk7IC8vIEFkanVzdGVkIHBhcmFtZXRlciBwYXNzaW5nXHJcbiAgICBvblJldmVhbCgpO1xyXG4gIH07XHJcbiAgXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2FsaWdubWVudENsYXNzTmFtZX0gJHtjb2xvckNsYXNzTmFtZX0gcm91bmRlZCBweC00IHB5LTIgbWF4LXctWzgwJV0gbWItOCBmbGV4YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgIHtwcmVmaXh9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXAgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge3Nob3dGdWxsTWVzc2FnZSA/IG1lc3NhZ2VDb250ZW50IDogdHJ1bmNhdGVkTWVzc2FnZX1cclxuICAgICAgICAgIHshc2hvd0Z1bGxNZXNzYWdlICYmIHdvcmRzPy5sZW5ndGggPiAxNjAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdW5kZXJsaW5lXCIgb25DbGljaz17aGFuZGxlVW5sb2NrTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgQ2xpY2sgdG8gcmV2ZWFsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAge3NvdXJjZXMgJiYgc291cmNlcz8ubmZ0QWRkcmVzcyAmJiB3b3Jkcz8ubGVuZ3RoID4gMjAwID8gKCAvLyBBZGp1c3RlZCB0byBjaGVjayBpZiBzb3VyY2VzIGV4aXN0IGFuZCBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIG5mdEFkZHJlc3NcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cIm10LTQgbXItYXV0byBiZy1zbGF0ZS0zMDAgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoMj5Tb3VyY2VzOjwvaDI+XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibXQtMSBtci0yIGJnLXNsYXRlLTIwMCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7c291cmNlcz8ubmZ0QWRkcmVzc30gXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzIiwiZGF0YSIsImpzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwib3V0cHV0Iiwic291cmNlcyIsInVuZGVmaW5lZCIsImF1dGhvckFkZHJlc3MiLCJuZnRBZGRyZXNzIiwiY29zdFBlcldvcmQiLCJlcnJvciIsImNvbnNvbGUiLCJDaGF0TWVzc2FnZUJ1YmJsZSIsIm1lc3NhZ2UiLCJhaUVtb2ppIiwib3BlblRyYW5zYWN0aW9uTW9kYWwiLCJvblJldmVhbCIsInNob3dGdWxsTWVzc2FnZSIsInNldFNob3dGdWxsTWVzc2FnZSIsImNvbG9yQ2xhc3NOYW1lIiwicm9sZSIsImFsaWdubWVudENsYXNzTmFtZSIsInByZWZpeCIsIm1lc3NhZ2VDb250ZW50IiwiY29udGVudCIsIndvcmRzIiwic3BsaXQiLCJ0cnVuY2F0ZWRNZXNzYWdlIiwic2xpY2UiLCJqb2luIiwiZG9jdW1lbnRIYXNoIiwicHJpY2VQZXJXb3JkIiwiaGFuZGxlVW5sb2NrTWVzc2FnZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY29kZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatMessageBubble.tsx\n"));

/***/ })

});