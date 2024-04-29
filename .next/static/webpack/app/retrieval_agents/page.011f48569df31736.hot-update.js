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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageBubble: function() { return /* binding */ ChatMessageBubble; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ChatMessageBubble auto */ \nvar _s = $RefreshSig$();\n\n// Function to parse response and extract output and sources\nfunction separateOutputAndSources(data) {\n    try {\n        const jsonData = JSON.parse(data);\n        if (!jsonData.output || !jsonData.sources) {\n            return undefined; // Handle invalid data\n        }\n        const sources = {\n            authorAddress: jsonData.sources.authorAddress,\n            nftAddress: jsonData.sources.nftAddress,\n            costPerWord: jsonData.sources.costPerWord\n        };\n        return {\n            output: jsonData.output,\n            sources\n        };\n    } catch (error) {\n        console.error(\"Error parsing JSON data:\", error);\n        return undefined; // Handle parsing errors\n    }\n}\nfunction ChatMessageBubble(param) {\n    let { message, aiEmoji, openTransactionModal, onReveal } = param;\n    var _separateOutputAndSources, _separateOutputAndSources1;\n    _s();\n    const [showFullMessage, setShowFullMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const colorClassName = message.role === \"user\" ? \"bg-sky-600\" : \"bg-slate-50 text-black\";\n    const alignmentClassName = message.role === \"user\" ? \"ml-auto\" : \"mr-auto\";\n    const prefix = message.role === \"user\" ? \"\\uD83E\\uDDD1\" : aiEmoji;\n    const messageContent = message.role === \"user\" ? message.content : (_separateOutputAndSources = separateOutputAndSources(message.content)) === null || _separateOutputAndSources === void 0 ? void 0 : _separateOutputAndSources.output;\n    const sources = message.role === \"user\" ? [] : (_separateOutputAndSources1 = separateOutputAndSources(message.content)) === null || _separateOutputAndSources1 === void 0 ? void 0 : _separateOutputAndSources1.sources;\n    //\n    const words = messageContent === null || messageContent === void 0 ? void 0 : messageContent.split(\" \");\n    const truncatedMessage = words === null || words === void 0 ? void 0 : words.slice(0, 60).join(\" \");\n    const documentHash = sources === null || sources === void 0 ? void 0 : sources.nftAddress; // Adjusted to get the first source's nftAddress\n    const pricePerWord = sources === null || sources === void 0 ? void 0 : sources.costPerWord; // Adjusted to get the first source's costPerWord\n    const handleUnlockMessage = ()=>{\n        openTransactionModal(documentHash, pricePerWord, words === null || words === void 0 ? void 0 : words.length); // Adjusted parameter passing\n        setShowFullMessage(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(alignmentClassName, \" \").concat(colorClassName, \" rounded px-4 py-2 max-w-[80%] mb-8 flex\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-2\",\n                children: prefix\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"whitespace-pre-wrap flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            showFullMessage ? messageContent : truncatedMessage,\n                            !showFullMessage && (words === null || words === void 0 ? void 0 : words.length) > 160 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-blue-600 underline\",\n                                onClick: handleUnlockMessage,\n                                children: \"Click to reveal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    sources && (sources === null || sources === void 0 ? void 0 : sources.nftAddress) && (words === null || words === void 0 ? void 0 : words.length) > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-4 mr-auto bg-slate-300 px-2 py-1 rounded text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Sources:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-1 mr-2 bg-slate-200 px-2 py-1 rounded text-xs\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: sources === null || sources === void 0 ? void 0 : sources.nftAddress\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatMessageBubble, \"4U4pX00mB1aXmiQOtgpvB/ZlTWE=\");\n_c = ChatMessageBubble;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VCdWJibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpQztBQW1CakMsNERBQTREO0FBQzVELFNBQVNDLHlCQUF5QkMsSUFBWTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBNkNDLEtBQUtDLEtBQUssQ0FBQ0g7UUFDOUQsSUFBSSxDQUFDQyxTQUFTRyxNQUFNLElBQUksQ0FBQ0gsU0FBU0ksT0FBTyxFQUFFO1lBQ3pDLE9BQU9DLFdBQVcsc0JBQXNCO1FBQzFDO1FBRUEsTUFBTUQsVUFBVTtZQUNkRSxlQUFlTixTQUFTSSxPQUFPLENBQUNFLGFBQWE7WUFDN0NDLFlBQVlQLFNBQVNJLE9BQU8sQ0FBQ0csVUFBVTtZQUN2Q0MsYUFBYVIsU0FBU0ksT0FBTyxDQUFDSSxXQUFXO1FBQzNDO1FBRUEsT0FBTztZQUFFTCxRQUFRSCxTQUFTRyxNQUFNO1lBQUVDO1FBQVE7SUFDNUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9KLFdBQVcsd0JBQXdCO0lBQzVDO0FBQ0Y7QUFFTyxTQUFTTSxrQkFBa0IsS0FBMkU7UUFBM0UsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLG9CQUFvQixFQUFDQyxRQUFRLEVBQTBCLEdBQTNFO1FBU21DakIsMkJBQ3BCQTs7SUFUL0MsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1xQixpQkFDSk4sUUFBUU8sSUFBSSxLQUFLLFNBQVMsZUFBZTtJQUMzQyxNQUFNQyxxQkFDSlIsUUFBUU8sSUFBSSxLQUFLLFNBQVMsWUFBWTtJQUN4QyxNQUFNRSxTQUFTVCxRQUFRTyxJQUFJLEtBQUssU0FBUyxpQkFBT047SUFFaEQsTUFBTVMsaUJBQWlCVixRQUFRTyxJQUFJLEtBQUssU0FBU1AsUUFBUVcsT0FBTyxJQUFHekIsNEJBQUFBLHlCQUF5QmMsUUFBUVcsT0FBTyxlQUF4Q3pCLGdEQUFBQSwwQkFBMkNLLE1BQU07SUFDcEgsTUFBTUMsVUFBVVEsUUFBUU8sSUFBSSxLQUFLLFNBQVMsRUFBRSxJQUFHckIsNkJBQUFBLHlCQUF5QmMsUUFBUVcsT0FBTyxlQUF4Q3pCLGlEQUFBQSwyQkFBMkNNLE9BQU87SUFFakcsRUFBRTtJQUNGLE1BQU1vQixRQUFRRiwyQkFBQUEscUNBQUFBLGVBQWdCRyxLQUFLLENBQUM7SUFDcEMsTUFBTUMsbUJBQW1CRixrQkFBQUEsNEJBQUFBLE1BQU9HLEtBQUssQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQztJQUNsRCxNQUFNQyxlQUFlekIsb0JBQUFBLDhCQUFBQSxRQUFTRyxVQUFVLEVBQUUsZ0RBQWdEO0lBQzFGLE1BQU11QixlQUFlMUIsb0JBQUFBLDhCQUFBQSxRQUFTSSxXQUFXLEVBQUUsaURBQWlEO0lBQzVGLE1BQU11QixzQkFBc0I7UUFDMUJqQixxQkFBcUJlLGNBQWNDLGNBQWNOLGtCQUFBQSw0QkFBQUEsTUFBT1EsTUFBTSxHQUFHLDZCQUE2QjtRQUM5RmYsbUJBQW1CO0lBQ3JCO0lBR0EscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFXLEdBQXlCaEIsT0FBdEJFLG9CQUFtQixLQUFrQixPQUFmRixnQkFBZTs7MEJBQ3RELDhEQUFDZTtnQkFBSUMsV0FBVTswQkFDWmI7Ozs7OzswQkFFSCw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzs7NEJBQ0VuQixrQkFBa0JNLGlCQUFpQkk7NEJBQ25DLENBQUNWLG1CQUFtQlEsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLElBQUcscUJBQ25DLDhEQUFDSTtnQ0FBT0YsV0FBVTtnQ0FBMEJHLFNBQVNOOzBDQUFxQjs7Ozs7Ozs7Ozs7O29CQUs3RTNCLFlBQVdBLG9CQUFBQSw4QkFBQUEsUUFBU0csVUFBVSxLQUFJaUIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLElBQUcsb0JBQ2pEOzswQ0FDRSw4REFBQ007Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNLOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ0Q7Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNaOUIsb0JBQUFBLDhCQUFBQSxRQUFTRyxVQUFVOzs7Ozs7Ozs7Ozs7dUNBSXhCOzs7Ozs7Ozs7Ozs7O0FBSVo7R0FwRGdCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlQnViYmxlLnRzeD9mOGZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSBcImFpL3JlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdE1lc3NhZ2VCdWJibGVQcm9wcyB7XHJcbiAgbWVzc2FnZTogTWVzc2FnZTtcclxuICBhaUVtb2ppPzogc3RyaW5nO1xyXG4gIG9wZW5UcmFuc2FjdGlvbk1vZGFsOiBhbnk7IC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRsZSB1bmxvY2tpbmcgdGhlIG1lc3NhZ2VcclxuICBvblJldmVhbDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxudHlwZSBQYXJzZWRSZXNwb25zZSA9IHtcclxuICBvdXRwdXQ6IHN0cmluZztcclxuICBzb3VyY2VzOiB7XHJcbiAgICBhdXRob3JBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBuZnRBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBjb3N0UGVyV29yZDogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBGdW5jdGlvbiB0byBwYXJzZSByZXNwb25zZSBhbmQgZXh0cmFjdCBvdXRwdXQgYW5kIHNvdXJjZXNcclxuZnVuY3Rpb24gc2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzKGRhdGE6IHN0cmluZyk6IFBhcnNlZFJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QganNvbkRhdGE6IHsgb3V0cHV0OiBzdHJpbmc7IHNvdXJjZXM6IGFueSB9ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGlmICghanNvbkRhdGEub3V0cHV0IHx8ICFqc29uRGF0YS5zb3VyY2VzKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIEhhbmRsZSBpbnZhbGlkIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3VyY2VzID0ge1xyXG4gICAgICBhdXRob3JBZGRyZXNzOiBqc29uRGF0YS5zb3VyY2VzLmF1dGhvckFkZHJlc3MsXHJcbiAgICAgIG5mdEFkZHJlc3M6IGpzb25EYXRhLnNvdXJjZXMubmZ0QWRkcmVzcyxcclxuICAgICAgY29zdFBlcldvcmQ6IGpzb25EYXRhLnNvdXJjZXMuY29zdFBlcldvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IG91dHB1dDoganNvbkRhdGEub3V0cHV0LCBzb3VyY2VzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIEpTT04gZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gSGFuZGxlIHBhcnNpbmcgZXJyb3JzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhdE1lc3NhZ2VCdWJibGUoeyBtZXNzYWdlLCBhaUVtb2ppLCBvcGVuVHJhbnNhY3Rpb25Nb2RhbCxvblJldmVhbCB9OiBDaGF0TWVzc2FnZUJ1YmJsZVByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dGdWxsTWVzc2FnZSwgc2V0U2hvd0Z1bGxNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY29sb3JDbGFzc05hbWUgPVxyXG4gICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwiYmctc2t5LTYwMFwiIDogXCJiZy1zbGF0ZS01MCB0ZXh0LWJsYWNrXCI7XHJcbiAgY29uc3QgYWxpZ25tZW50Q2xhc3NOYW1lID1cclxuICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCIgPyBcIm1sLWF1dG9cIiA6IFwibXItYXV0b1wiO1xyXG4gIGNvbnN0IHByZWZpeCA9IG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCIgPyBcIvCfp5FcIiA6IGFpRW1vamk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2VDb250ZW50ID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IG1lc3NhZ2UuY29udGVudCA6IHNlcGFyYXRlT3V0cHV0QW5kU291cmNlcyhtZXNzYWdlLmNvbnRlbnQpPy5vdXRwdXQ7XHJcbiAgY29uc3Qgc291cmNlcyA9IG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCIgPyBbXSA6IHNlcGFyYXRlT3V0cHV0QW5kU291cmNlcyhtZXNzYWdlLmNvbnRlbnQpPy5zb3VyY2VzO1xyXG5cclxuICAvL1xyXG4gIGNvbnN0IHdvcmRzID0gbWVzc2FnZUNvbnRlbnQ/LnNwbGl0KCcgJyk7XHJcbiAgY29uc3QgdHJ1bmNhdGVkTWVzc2FnZSA9IHdvcmRzPy5zbGljZSgwLCA2MCkuam9pbignICcpO1xyXG4gIGNvbnN0IGRvY3VtZW50SGFzaCA9IHNvdXJjZXM/Lm5mdEFkZHJlc3M7IC8vIEFkanVzdGVkIHRvIGdldCB0aGUgZmlyc3Qgc291cmNlJ3MgbmZ0QWRkcmVzc1xyXG4gIGNvbnN0IHByaWNlUGVyV29yZCA9IHNvdXJjZXM/LmNvc3RQZXJXb3JkOyAvLyBBZGp1c3RlZCB0byBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIGNvc3RQZXJXb3JkXHJcbiAgY29uc3QgaGFuZGxlVW5sb2NrTWVzc2FnZSA9ICgpID0+IHtcclxuICAgIG9wZW5UcmFuc2FjdGlvbk1vZGFsKGRvY3VtZW50SGFzaCwgcHJpY2VQZXJXb3JkLCB3b3Jkcz8ubGVuZ3RoKTsgLy8gQWRqdXN0ZWQgcGFyYW1ldGVyIHBhc3NpbmdcclxuICAgIHNldFNob3dGdWxsTWVzc2FnZSh0cnVlKTsgXHJcbiAgfTtcclxuICBcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YWxpZ25tZW50Q2xhc3NOYW1lfSAke2NvbG9yQ2xhc3NOYW1lfSByb3VuZGVkIHB4LTQgcHktMiBtYXgtdy1bODAlXSBtYi04IGZsZXhgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAge3ByZWZpeH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmUtd3JhcCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7c2hvd0Z1bGxNZXNzYWdlID8gbWVzc2FnZUNvbnRlbnQgOiB0cnVuY2F0ZWRNZXNzYWdlfVxyXG4gICAgICAgICAgeyFzaG93RnVsbE1lc3NhZ2UgJiYgd29yZHM/Lmxlbmd0aCA+IDE2MCAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB1bmRlcmxpbmVcIiBvbkNsaWNrPXtoYW5kbGVVbmxvY2tNZXNzYWdlfT5cclxuICAgICAgICAgICAgICBDbGljayB0byByZXZlYWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB7c291cmNlcyAmJiBzb3VyY2VzPy5uZnRBZGRyZXNzICYmIHdvcmRzPy5sZW5ndGggPiAyMDAgPyAoIC8vIEFkanVzdGVkIHRvIGNoZWNrIGlmIHNvdXJjZXMgZXhpc3QgYW5kIGdldCB0aGUgZmlyc3Qgc291cmNlJ3MgbmZ0QWRkcmVzc1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibXQtNCBtci1hdXRvIGJnLXNsYXRlLTMwMCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlNvdXJjZXM6PC9oMj5cclxuICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJtdC0xIG1yLTIgYmctc2xhdGUtMjAwIHB4LTIgcHktMSByb3VuZGVkIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIHtzb3VyY2VzPy5uZnRBZGRyZXNzfSBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzZXBhcmF0ZU91dHB1dEFuZFNvdXJjZXMiLCJkYXRhIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJvdXRwdXQiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwiYXV0aG9yQWRkcmVzcyIsIm5mdEFkZHJlc3MiLCJjb3N0UGVyV29yZCIsImVycm9yIiwiY29uc29sZSIsIkNoYXRNZXNzYWdlQnViYmxlIiwibWVzc2FnZSIsImFpRW1vamkiLCJvcGVuVHJhbnNhY3Rpb25Nb2RhbCIsIm9uUmV2ZWFsIiwic2hvd0Z1bGxNZXNzYWdlIiwic2V0U2hvd0Z1bGxNZXNzYWdlIiwiY29sb3JDbGFzc05hbWUiLCJyb2xlIiwiYWxpZ25tZW50Q2xhc3NOYW1lIiwicHJlZml4IiwibWVzc2FnZUNvbnRlbnQiLCJjb250ZW50Iiwid29yZHMiLCJzcGxpdCIsInRydW5jYXRlZE1lc3NhZ2UiLCJzbGljZSIsImpvaW4iLCJkb2N1bWVudEhhc2giLCJwcmljZVBlcldvcmQiLCJoYW5kbGVVbmxvY2tNZXNzYWdlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2RlIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatMessageBubble.tsx\n"));

/***/ })

});