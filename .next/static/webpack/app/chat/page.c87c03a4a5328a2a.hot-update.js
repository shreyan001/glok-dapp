"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./components/ChatMessageBubble.tsx":
/*!******************************************!*\
  !*** ./components/ChatMessageBubble.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageBubble: function() { return /* binding */ ChatMessageBubble; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ChatMessageBubble auto */ \nvar _s = $RefreshSig$();\n\n// Function to parse response and extract output and sources\nfunction separateOutputAndSources(data) {\n    try {\n        const jsonData = JSON.parse(data);\n        if (!jsonData.output || !jsonData.sources) {\n            return undefined; // Handle invalid data\n        }\n        const sources = {\n            authorAddress: jsonData.sources.authorAddress,\n            nftAddress: jsonData.sources.nftAddress,\n            costPerWord: jsonData.sources.costPerWord\n        };\n        return {\n            output: jsonData.output,\n            sources\n        };\n    } catch (error) {\n        console.error(\"Error parsing JSON data:\", error);\n        return undefined; // Handle parsing errors\n    }\n}\nfunction ChatMessageBubble(param) {\n    let { message, aiEmoji, openTransactionModal, modalState } = param;\n    var _separateOutputAndSources, _separateOutputAndSources1;\n    _s();\n    const [showFullMessage, setShowFullMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const colorClassName = message.role === \"user\" ? \"bg-blue-300\" : \"bg-blue-50 text-black\";\n    const alignmentClassName = message.role === \"user\" ? \"ml-auto\" : \"mr-auto\";\n    const prefix = message.role === \"user\" ? \"\\uD83E\\uDDD1\" : aiEmoji;\n    const messageContent = message.role === \"user\" ? message.content : (_separateOutputAndSources = separateOutputAndSources(message.content)) === null || _separateOutputAndSources === void 0 ? void 0 : _separateOutputAndSources.output;\n    const sources = message.role === \"user\" ? [] : (_separateOutputAndSources1 = separateOutputAndSources(message.content)) === null || _separateOutputAndSources1 === void 0 ? void 0 : _separateOutputAndSources1.sources;\n    //\n    const words = messageContent === null || messageContent === void 0 ? void 0 : messageContent.split(\" \");\n    const truncatedMessage = words === null || words === void 0 ? void 0 : words.slice(0, 60).join(\" \");\n    const documentHash = sources === null || sources === void 0 ? void 0 : sources.nftAddress; // Adjusted to get the first source's nftAddress\n    const pricePerWord = sources === null || sources === void 0 ? void 0 : sources.costPerWord; // Adjusted to get the first source's costPerWord\n    const handleUnlockMessage = ()=>{\n        openTransactionModal(documentHash, pricePerWord, words === null || words === void 0 ? void 0 : words.length); // Adjusted parameter passing\n    // Use setTimeout for delayed execution\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(alignmentClassName, \" \").concat(colorClassName, \" rounded px-4 py-2 max-w-[80%] mb-8 flex\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-2\",\n                children: prefix\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"whitespace-pre-wrap flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            showFullMessage ? messageContent : truncatedMessage,\n                            !showFullMessage && (words === null || words === void 0 ? void 0 : words.length) > 160 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-blue-600 underline\",\n                                onClick: handleUnlockMessage,\n                                children: \"Click to reveal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    sources && (sources === null || sources === void 0 ? void 0 : sources.nftAddress) && (words === null || words === void 0 ? void 0 : words.length) > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-4 mr-auto bg-sky-200 px-2 py-1 rounded text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Sources:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-1 mr-2 bg-sky-100 px-2 py-1 rounded text-xs\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: sources === null || sources === void 0 ? void 0 : sources.nftAddress\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatMessageBubble, \"4U4pX00mB1aXmiQOtgpvB/ZlTWE=\");\n_c = ChatMessageBubble;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VCdWJibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpQztBQW1CakMsNERBQTREO0FBQzVELFNBQVNDLHlCQUF5QkMsSUFBWTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBNkNDLEtBQUtDLEtBQUssQ0FBQ0g7UUFDOUQsSUFBSSxDQUFDQyxTQUFTRyxNQUFNLElBQUksQ0FBQ0gsU0FBU0ksT0FBTyxFQUFFO1lBQ3pDLE9BQU9DLFdBQVcsc0JBQXNCO1FBQzFDO1FBRUEsTUFBTUQsVUFBVTtZQUNkRSxlQUFlTixTQUFTSSxPQUFPLENBQUNFLGFBQWE7WUFDN0NDLFlBQVlQLFNBQVNJLE9BQU8sQ0FBQ0csVUFBVTtZQUN2Q0MsYUFBYVIsU0FBU0ksT0FBTyxDQUFDSSxXQUFXO1FBQzNDO1FBRUEsT0FBTztZQUFFTCxRQUFRSCxTQUFTRyxNQUFNO1lBQUVDO1FBQVE7SUFDNUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9KLFdBQVcsd0JBQXdCO0lBQzVDO0FBQ0Y7QUFFTyxTQUFTTSxrQkFBa0IsS0FBNkU7UUFBN0UsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLG9CQUFvQixFQUFDQyxVQUFVLEVBQTBCLEdBQTdFO1FBU21DakIsMkJBQ3BCQTs7SUFUL0MsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1xQixpQkFDSk4sUUFBUU8sSUFBSSxLQUFLLFNBQVMsZ0JBQWdCO0lBQzVDLE1BQU1DLHFCQUNKUixRQUFRTyxJQUFJLEtBQUssU0FBUyxZQUFZO0lBQ3hDLE1BQU1FLFNBQVNULFFBQVFPLElBQUksS0FBSyxTQUFTLGlCQUFPTjtJQUVoRCxNQUFNUyxpQkFBaUJWLFFBQVFPLElBQUksS0FBSyxTQUFTUCxRQUFRVyxPQUFPLElBQUd6Qiw0QkFBQUEseUJBQXlCYyxRQUFRVyxPQUFPLGVBQXhDekIsZ0RBQUFBLDBCQUEyQ0ssTUFBTTtJQUNwSCxNQUFNQyxVQUFVUSxRQUFRTyxJQUFJLEtBQUssU0FBUyxFQUFFLElBQUdyQiw2QkFBQUEseUJBQXlCYyxRQUFRVyxPQUFPLGVBQXhDekIsaURBQUFBLDJCQUEyQ00sT0FBTztJQUVqRyxFQUFFO0lBQ0YsTUFBTW9CLFFBQVFGLDJCQUFBQSxxQ0FBQUEsZUFBZ0JHLEtBQUssQ0FBQztJQUNwQyxNQUFNQyxtQkFBbUJGLGtCQUFBQSw0QkFBQUEsTUFBT0csS0FBSyxDQUFDLEdBQUcsSUFBSUMsSUFBSSxDQUFDO0lBQ2xELE1BQU1DLGVBQWV6QixvQkFBQUEsOEJBQUFBLFFBQVNHLFVBQVUsRUFBRSxnREFBZ0Q7SUFDMUYsTUFBTXVCLGVBQWUxQixvQkFBQUEsOEJBQUFBLFFBQVNJLFdBQVcsRUFBRSxpREFBaUQ7SUFDN0YsTUFBTXVCLHNCQUFzQjtRQUMzQmpCLHFCQUFxQmUsY0FBY0MsY0FBY04sa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLEdBQUcsNkJBQTZCO0lBRTlGLHVDQUF1QztJQUd6QztJQUdFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLEdBQXlCaEIsT0FBdEJFLG9CQUFtQixLQUFrQixPQUFmRixnQkFBZTs7MEJBQ3RELDhEQUFDZTtnQkFBSUMsV0FBVTswQkFDWmI7Ozs7OzswQkFFSCw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzs7NEJBQ0VuQixrQkFBa0JNLGlCQUFpQkk7NEJBQ25DLENBQUNWLG1CQUFtQlEsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLElBQUcscUJBQ25DLDhEQUFDSTtnQ0FBT0YsV0FBVTtnQ0FBMEJHLFNBQVNOOzBDQUFxQjs7Ozs7Ozs7Ozs7O29CQUs3RTNCLFlBQVdBLG9CQUFBQSw4QkFBQUEsUUFBU0csVUFBVSxLQUFJaUIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLElBQUcsb0JBQ2pEOzswQ0FDRSw4REFBQ007Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNLOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ0Q7Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNaOUIsb0JBQUFBLDhCQUFBQSxRQUFTRyxVQUFVOzs7Ozs7Ozs7Ozs7dUNBSXhCOzs7Ozs7Ozs7Ozs7O0FBSVo7R0F2RGdCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlQnViYmxlLnRzeD9mOGZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSBcImFpL3JlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdE1lc3NhZ2VCdWJibGVQcm9wcyB7XHJcbiAgbWVzc2FnZTogTWVzc2FnZTtcclxuICBhaUVtb2ppPzogc3RyaW5nO1xyXG4gIG9wZW5UcmFuc2FjdGlvbk1vZGFsOiBhbnk7IC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRsZSB1bmxvY2tpbmcgdGhlIG1lc3NhZ2VcclxuICBtb2RhbFN0YXRlOiBib29sZWFuOyBcclxufVxyXG5cclxudHlwZSBQYXJzZWRSZXNwb25zZSA9IHtcclxuICBvdXRwdXQ6IHN0cmluZztcclxuICBzb3VyY2VzOiB7XHJcbiAgICBhdXRob3JBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBuZnRBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBjb3N0UGVyV29yZDogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBGdW5jdGlvbiB0byBwYXJzZSByZXNwb25zZSBhbmQgZXh0cmFjdCBvdXRwdXQgYW5kIHNvdXJjZXNcclxuZnVuY3Rpb24gc2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzKGRhdGE6IHN0cmluZyk6IFBhcnNlZFJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QganNvbkRhdGE6IHsgb3V0cHV0OiBzdHJpbmc7IHNvdXJjZXM6IGFueSB9ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGlmICghanNvbkRhdGEub3V0cHV0IHx8ICFqc29uRGF0YS5zb3VyY2VzKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIEhhbmRsZSBpbnZhbGlkIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3VyY2VzID0ge1xyXG4gICAgICBhdXRob3JBZGRyZXNzOiBqc29uRGF0YS5zb3VyY2VzLmF1dGhvckFkZHJlc3MsXHJcbiAgICAgIG5mdEFkZHJlc3M6IGpzb25EYXRhLnNvdXJjZXMubmZ0QWRkcmVzcyxcclxuICAgICAgY29zdFBlcldvcmQ6IGpzb25EYXRhLnNvdXJjZXMuY29zdFBlcldvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IG91dHB1dDoganNvbkRhdGEub3V0cHV0LCBzb3VyY2VzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIEpTT04gZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gSGFuZGxlIHBhcnNpbmcgZXJyb3JzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhdE1lc3NhZ2VCdWJibGUoeyBtZXNzYWdlLCBhaUVtb2ppLCBvcGVuVHJhbnNhY3Rpb25Nb2RhbCxtb2RhbFN0YXRlIH06IENoYXRNZXNzYWdlQnViYmxlUHJvcHMpIHtcclxuICBjb25zdCBbc2hvd0Z1bGxNZXNzYWdlLCBzZXRTaG93RnVsbE1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjb2xvckNsYXNzTmFtZSA9XHJcbiAgICBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJiZy1ibHVlLTMwMFwiIDogXCJiZy1ibHVlLTUwIHRleHQtYmxhY2tcIjtcclxuICBjb25zdCBhbGlnbm1lbnRDbGFzc05hbWUgPVxyXG4gICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwibWwtYXV0b1wiIDogXCJtci1hdXRvXCI7XHJcbiAgY29uc3QgcHJlZml4ID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwi8J+nkVwiIDogYWlFbW9qaTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZUNvbnRlbnQgPSBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gbWVzc2FnZS5jb250ZW50IDogc2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzKG1lc3NhZ2UuY29udGVudCk/Lm91dHB1dDtcclxuICBjb25zdCBzb3VyY2VzID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFtdIDogc2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzKG1lc3NhZ2UuY29udGVudCk/LnNvdXJjZXM7XHJcblxyXG4gIC8vXHJcbiAgY29uc3Qgd29yZHMgPSBtZXNzYWdlQ29udGVudD8uc3BsaXQoJyAnKTtcclxuICBjb25zdCB0cnVuY2F0ZWRNZXNzYWdlID0gd29yZHM/LnNsaWNlKDAsIDYwKS5qb2luKCcgJyk7XHJcbiAgY29uc3QgZG9jdW1lbnRIYXNoID0gc291cmNlcz8ubmZ0QWRkcmVzczsgLy8gQWRqdXN0ZWQgdG8gZ2V0IHRoZSBmaXJzdCBzb3VyY2UncyBuZnRBZGRyZXNzXHJcbiAgY29uc3QgcHJpY2VQZXJXb3JkID0gc291cmNlcz8uY29zdFBlcldvcmQ7IC8vIEFkanVzdGVkIHRvIGdldCB0aGUgZmlyc3Qgc291cmNlJ3MgY29zdFBlcldvcmRcclxuIGNvbnN0IGhhbmRsZVVubG9ja01lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgb3BlblRyYW5zYWN0aW9uTW9kYWwoZG9jdW1lbnRIYXNoLCBwcmljZVBlcldvcmQsIHdvcmRzPy5sZW5ndGgpOyAvLyBBZGp1c3RlZCBwYXJhbWV0ZXIgcGFzc2luZ1xyXG5cclxuICAvLyBVc2Ugc2V0VGltZW91dCBmb3IgZGVsYXllZCBleGVjdXRpb25cclxuIFxyXG5cclxufTtcclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2FsaWdubWVudENsYXNzTmFtZX0gJHtjb2xvckNsYXNzTmFtZX0gcm91bmRlZCBweC00IHB5LTIgbWF4LXctWzgwJV0gbWItOCBmbGV4YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgIHtwcmVmaXh9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXAgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge3Nob3dGdWxsTWVzc2FnZSA/IG1lc3NhZ2VDb250ZW50IDogdHJ1bmNhdGVkTWVzc2FnZX1cclxuICAgICAgICAgIHshc2hvd0Z1bGxNZXNzYWdlICYmIHdvcmRzPy5sZW5ndGggPiAxNjAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdW5kZXJsaW5lXCIgb25DbGljaz17aGFuZGxlVW5sb2NrTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgQ2xpY2sgdG8gcmV2ZWFsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAge3NvdXJjZXMgJiYgc291cmNlcz8ubmZ0QWRkcmVzcyAmJiB3b3Jkcz8ubGVuZ3RoID4gMjAwID8gKCAvLyBBZGp1c3RlZCB0byBjaGVjayBpZiBzb3VyY2VzIGV4aXN0IGFuZCBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIG5mdEFkZHJlc3NcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cIm10LTQgbXItYXV0byBiZy1za3ktMjAwIHB4LTIgcHktMSByb3VuZGVkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aDI+U291cmNlczo8L2gyPlxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cIm10LTEgbXItMiBiZy1za3ktMTAwIHB4LTIgcHktMSByb3VuZGVkIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIHtzb3VyY2VzPy5uZnRBZGRyZXNzfSBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzZXBhcmF0ZU91dHB1dEFuZFNvdXJjZXMiLCJkYXRhIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJvdXRwdXQiLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwiYXV0aG9yQWRkcmVzcyIsIm5mdEFkZHJlc3MiLCJjb3N0UGVyV29yZCIsImVycm9yIiwiY29uc29sZSIsIkNoYXRNZXNzYWdlQnViYmxlIiwibWVzc2FnZSIsImFpRW1vamkiLCJvcGVuVHJhbnNhY3Rpb25Nb2RhbCIsIm1vZGFsU3RhdGUiLCJzaG93RnVsbE1lc3NhZ2UiLCJzZXRTaG93RnVsbE1lc3NhZ2UiLCJjb2xvckNsYXNzTmFtZSIsInJvbGUiLCJhbGlnbm1lbnRDbGFzc05hbWUiLCJwcmVmaXgiLCJtZXNzYWdlQ29udGVudCIsImNvbnRlbnQiLCJ3b3JkcyIsInNwbGl0IiwidHJ1bmNhdGVkTWVzc2FnZSIsInNsaWNlIiwiam9pbiIsImRvY3VtZW50SGFzaCIsInByaWNlUGVyV29yZCIsImhhbmRsZVVubG9ja01lc3NhZ2UiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImNvZGUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatMessageBubble.tsx\n"));

/***/ })

});