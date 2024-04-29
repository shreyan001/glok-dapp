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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatMessageBubble: function() { return /* binding */ ChatMessageBubble; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Function to parse response and extract output and sources\nfunction separateOutputAndSources(data) {\n    try {\n        const jsonData = JSON.parse(data);\n        if (!jsonData.output || !jsonData.sources) {\n            return undefined; // Handle invalid data\n        }\n        const sources = {\n            authorAddress: jsonData.sources.authorAddress,\n            nftAddress: jsonData.sources.nftAddress,\n            costPerWord: jsonData.sources.costPerWord\n        };\n        return {\n            output: jsonData.output,\n            sources\n        };\n    } catch (error) {\n        console.error(\"Error parsing JSON data:\", error);\n        return undefined; // Handle parsing errors\n    }\n}\nfunction ChatMessageBubble(param) {\n    let { message, aiEmoji, sources, openTransactionModal, onReveal } = param;\n    var _separateOutputAndSources, _sources_, _sources_1, _sources_2, _sources_3;\n    _s();\n    const [showFullMessage, setShowFullMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const colorClassName = message.role === \"user\" ? \"bg-sky-600\" : \"bg-slate-50 text-black\";\n    const alignmentClassName = message.role === \"user\" ? \"ml-auto\" : \"mr-auto\";\n    const prefix = message.role === \"user\" ? \"\\uD83E\\uDDD1\" : aiEmoji;\n    // Extract message content and sources based on role\n    const messageContent = message.role === \"user\" ? message.content : (_separateOutputAndSources = separateOutputAndSources(message.content)) === null || _separateOutputAndSources === void 0 ? void 0 : _separateOutputAndSources.output;\n    const words = messageContent === null || messageContent === void 0 ? void 0 : messageContent.split(\" \");\n    const truncatedMessage = words === null || words === void 0 ? void 0 : words.slice(0, 60).join(\" \");\n    const documentHash = sources === null || sources === void 0 ? void 0 : (_sources_ = sources[0]) === null || _sources_ === void 0 ? void 0 : _sources_.nftAddress; // Adjusted to get the first source's nftAddress\n    const pricePerWord = sources === null || sources === void 0 ? void 0 : (_sources_1 = sources[0]) === null || _sources_1 === void 0 ? void 0 : _sources_1.costPerWord; // Adjusted to get the first source's costPerWord\n    const handleUnlockMessage = ()=>{\n        openTransactionModal(documentHash, pricePerWord, words === null || words === void 0 ? void 0 : words.length); // Adjusted parameter passing\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(alignmentClassName, \" \").concat(colorClassName, \" rounded px-4 py-2 max-w-[80%] mb-8 flex\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-2\",\n                children: prefix\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"whitespace-pre-wrap flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            showFullMessage ? messageContent : truncatedMessage,\n                            !showFullMessage && (words === null || words === void 0 ? void 0 : words.length) > 160 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-blue-600 underline\",\n                                onClick: handleUnlockMessage,\n                                children: \"Click to reveal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    sources && ((_sources_2 = sources[0]) === null || _sources_2 === void 0 ? void 0 : _sources_2.nftAddress) && (words === null || words === void 0 ? void 0 : words.length) > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-4 mr-auto bg-slate-300 px-2 py-1 rounded text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Sources:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"mt-1 mr-2 bg-slate-200 px-2 py-1 rounded text-xs\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: [\n                                        (_sources_3 = sources[0]) === null || _sources_3 === void 0 ? void 0 : _sources_3.nftAddress,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\ChatMessageBubble.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatMessageBubble, \"4U4pX00mB1aXmiQOtgpvB/ZlTWE=\");\n_c = ChatMessageBubble;\nvar _c;\n$RefreshReg$(_c, \"ChatMessageBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VCdWJibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQW9CakMsNERBQTREO0FBQzVELFNBQVNDLHlCQUF5QkMsSUFBWTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBNkNDLEtBQUtDLEtBQUssQ0FBQ0g7UUFDOUQsSUFBSSxDQUFDQyxTQUFTRyxNQUFNLElBQUksQ0FBQ0gsU0FBU0ksT0FBTyxFQUFFO1lBQ3pDLE9BQU9DLFdBQVcsc0JBQXNCO1FBQzFDO1FBRUEsTUFBTUQsVUFBVTtZQUNkRSxlQUFlTixTQUFTSSxPQUFPLENBQUNFLGFBQWE7WUFDN0NDLFlBQVlQLFNBQVNJLE9BQU8sQ0FBQ0csVUFBVTtZQUN2Q0MsYUFBYVIsU0FBU0ksT0FBTyxDQUFDSSxXQUFXO1FBQzNDO1FBRUEsT0FBTztZQUFFTCxRQUFRSCxTQUFTRyxNQUFNO1lBQUVDO1FBQVE7SUFDNUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9KLFdBQVcsd0JBQXdCO0lBQzVDO0FBQ0Y7QUFFTyxTQUFTTSxrQkFBa0IsS0FBb0Y7UUFBcEYsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVULE9BQU8sRUFBRVUsb0JBQW9CLEVBQUNDLFFBQVEsRUFBMEIsR0FBcEY7UUFVbUNqQiwyQkFHOUNNLFdBQ0FBLFlBb0JIQSxZQU9IQTs7SUF4Q2YsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTXFCLGlCQUNKTixRQUFRTyxJQUFJLEtBQUssU0FBUyxlQUFlO0lBQzNDLE1BQU1DLHFCQUNKUixRQUFRTyxJQUFJLEtBQUssU0FBUyxZQUFZO0lBQ3hDLE1BQU1FLFNBQVNULFFBQVFPLElBQUksS0FBSyxTQUFTLGlCQUFPTjtJQUVoRCxvREFBb0Q7SUFDcEQsTUFBTVMsaUJBQWlCVixRQUFRTyxJQUFJLEtBQUssU0FBU1AsUUFBUVcsT0FBTyxJQUFHekIsNEJBQUFBLHlCQUF5QmMsUUFBUVcsT0FBTyxlQUF4Q3pCLGdEQUFBQSwwQkFBMkNLLE1BQU07SUFDcEgsTUFBTXFCLFFBQVFGLDJCQUFBQSxxQ0FBQUEsZUFBZ0JHLEtBQUssQ0FBQztJQUNwQyxNQUFNQyxtQkFBbUJGLGtCQUFBQSw0QkFBQUEsTUFBT0csS0FBSyxDQUFDLEdBQUcsSUFBSUMsSUFBSSxDQUFDO0lBQ2xELE1BQU1DLGVBQWV6QixvQkFBQUEsK0JBQUFBLFlBQUFBLE9BQVMsQ0FBQyxFQUFFLGNBQVpBLGdDQUFBQSxVQUFjRyxVQUFVLEVBQUUsZ0RBQWdEO0lBQy9GLE1BQU11QixlQUFlMUIsb0JBQUFBLCtCQUFBQSxhQUFBQSxPQUFTLENBQUMsRUFBRSxjQUFaQSxpQ0FBQUEsV0FBY0ksV0FBVyxFQUFFLGlEQUFpRDtJQUVqRyxNQUFNdUIsc0JBQXNCO1FBQzFCakIscUJBQXFCZSxjQUFjQyxjQUFjTixrQkFBQUEsNEJBQUFBLE1BQU9RLE1BQU0sR0FBRyw2QkFBNkI7SUFDaEc7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxHQUF5QmhCLE9BQXRCRSxvQkFBbUIsS0FBa0IsT0FBZkYsZ0JBQWU7OzBCQUN0RCw4REFBQ2U7Z0JBQUlDLFdBQVU7MEJBQ1piOzs7Ozs7MEJBRUgsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUNFbkIsa0JBQWtCTSxpQkFBaUJJOzRCQUNuQyxDQUFDVixtQkFBbUJRLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT1EsTUFBTSxJQUFHLHFCQUNuQyw4REFBQ0k7Z0NBQU9GLFdBQVU7Z0NBQTBCRyxTQUFTTjswQ0FBcUI7Ozs7Ozs7Ozs7OztvQkFLN0UzQixhQUFXQSxhQUFBQSxPQUFPLENBQUMsRUFBRSxjQUFWQSxpQ0FBQUEsV0FBWUcsVUFBVSxLQUFJaUIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPUSxNQUFNLElBQUcsb0JBQ3BEOzswQ0FDRSw4REFBQ007Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNLOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ0Q7Z0NBQUtKLFdBQVU7MENBQ2QsNEVBQUNEO29DQUFJQyxXQUFVOzt5Q0FDWjlCLGFBQUFBLE9BQU8sQ0FBQyxFQUFFLGNBQVZBLGlDQUFBQSxXQUFZRyxVQUFVO3dDQUFDOzs7Ozs7Ozs7Ozs7O3VDQUk1Qjs7Ozs7Ozs7Ozs7OztBQUlaO0dBakRnQkk7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0TWVzc2FnZUJ1YmJsZS50c3g/ZjhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSBcImFpL3JlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdE1lc3NhZ2VCdWJibGVQcm9wcyB7XHJcbiAgbWVzc2FnZTogTWVzc2FnZTtcclxuICBhaUVtb2ppPzogc3RyaW5nO1xyXG4gIHNvdXJjZXM6IHsgbmZ0QWRkcmVzczogYW55LCBjb3N0UGVyV29yZDogbnVtYmVyIH1bXTsgLy8gQWRqdXN0ZWQgc291cmNlcyBwcm9wXHJcbiAgb3BlblRyYW5zYWN0aW9uTW9kYWw6IGFueTsgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGxlIHVubG9ja2luZyB0aGUgbWVzc2FnZVxyXG4gIG9uUmV2ZWFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG50eXBlIFBhcnNlZFJlc3BvbnNlID0ge1xyXG4gIG91dHB1dDogc3RyaW5nO1xyXG4gIHNvdXJjZXM6IHtcclxuICAgIGF1dGhvckFkZHJlc3M6IHN0cmluZztcclxuICAgIG5mdEFkZHJlc3M6IHN0cmluZztcclxuICAgIGNvc3RQZXJXb3JkOiBudW1iZXI7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHBhcnNlIHJlc3BvbnNlIGFuZCBleHRyYWN0IG91dHB1dCBhbmQgc291cmNlc1xyXG5mdW5jdGlvbiBzZXBhcmF0ZU91dHB1dEFuZFNvdXJjZXMoZGF0YTogc3RyaW5nKTogUGFyc2VkUmVzcG9uc2UgfCB1bmRlZmluZWQge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBqc29uRGF0YTogeyBvdXRwdXQ6IHN0cmluZzsgc291cmNlczogYW55IH0gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCFqc29uRGF0YS5vdXRwdXQgfHwgIWpzb25EYXRhLnNvdXJjZXMpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gSGFuZGxlIGludmFsaWQgZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvdXJjZXMgPSB7XHJcbiAgICAgIGF1dGhvckFkZHJlc3M6IGpzb25EYXRhLnNvdXJjZXMuYXV0aG9yQWRkcmVzcyxcclxuICAgICAgbmZ0QWRkcmVzczoganNvbkRhdGEuc291cmNlcy5uZnRBZGRyZXNzLFxyXG4gICAgICBjb3N0UGVyV29yZDoganNvbkRhdGEuc291cmNlcy5jb3N0UGVyV29yZCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgb3V0cHV0OiBqc29uRGF0YS5vdXRwdXQsIHNvdXJjZXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgSlNPTiBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBIYW5kbGUgcGFyc2luZyBlcnJvcnNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGF0TWVzc2FnZUJ1YmJsZSh7IG1lc3NhZ2UsIGFpRW1vamksIHNvdXJjZXMsIG9wZW5UcmFuc2FjdGlvbk1vZGFsLG9uUmV2ZWFsIH06IENoYXRNZXNzYWdlQnViYmxlUHJvcHMpIHtcclxuICBjb25zdCBbc2hvd0Z1bGxNZXNzYWdlLCBzZXRTaG93RnVsbE1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjb2xvckNsYXNzTmFtZSA9XHJcbiAgICBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJiZy1za3ktNjAwXCIgOiBcImJnLXNsYXRlLTUwIHRleHQtYmxhY2tcIjtcclxuICBjb25zdCBhbGlnbm1lbnRDbGFzc05hbWUgPVxyXG4gICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwibWwtYXV0b1wiIDogXCJtci1hdXRvXCI7XHJcbiAgY29uc3QgcHJlZml4ID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwi8J+nkVwiIDogYWlFbW9qaTtcclxuXHJcbiAgLy8gRXh0cmFjdCBtZXNzYWdlIGNvbnRlbnQgYW5kIHNvdXJjZXMgYmFzZWQgb24gcm9sZVxyXG4gIGNvbnN0IG1lc3NhZ2VDb250ZW50ID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IG1lc3NhZ2UuY29udGVudCA6IHNlcGFyYXRlT3V0cHV0QW5kU291cmNlcyhtZXNzYWdlLmNvbnRlbnQpPy5vdXRwdXQ7XHJcbiAgY29uc3Qgd29yZHMgPSBtZXNzYWdlQ29udGVudD8uc3BsaXQoJyAnKTtcclxuICBjb25zdCB0cnVuY2F0ZWRNZXNzYWdlID0gd29yZHM/LnNsaWNlKDAsIDYwKS5qb2luKCcgJyk7XHJcbiAgY29uc3QgZG9jdW1lbnRIYXNoID0gc291cmNlcz8uWzBdPy5uZnRBZGRyZXNzOyAvLyBBZGp1c3RlZCB0byBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIG5mdEFkZHJlc3NcclxuICBjb25zdCBwcmljZVBlcldvcmQgPSBzb3VyY2VzPy5bMF0/LmNvc3RQZXJXb3JkOyAvLyBBZGp1c3RlZCB0byBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIGNvc3RQZXJXb3JkXHJcblxyXG4gIGNvbnN0IGhhbmRsZVVubG9ja01lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBvcGVuVHJhbnNhY3Rpb25Nb2RhbChkb2N1bWVudEhhc2gsIHByaWNlUGVyV29yZCwgd29yZHM/Lmxlbmd0aCk7IC8vIEFkanVzdGVkIHBhcmFtZXRlciBwYXNzaW5nXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthbGlnbm1lbnRDbGFzc05hbWV9ICR7Y29sb3JDbGFzc05hbWV9IHJvdW5kZWQgcHgtNCBweS0yIG1heC13LVs4MCVdIG1iLTggZmxleGB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICB7cHJlZml4fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZS13cmFwIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHtzaG93RnVsbE1lc3NhZ2UgPyBtZXNzYWdlQ29udGVudCA6IHRydW5jYXRlZE1lc3NhZ2V9XHJcbiAgICAgICAgICB7IXNob3dGdWxsTWVzc2FnZSAmJiB3b3Jkcz8ubGVuZ3RoID4gMTYwICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHVuZGVybGluZVwiIG9uQ2xpY2s9e2hhbmRsZVVubG9ja01lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgIENsaWNrIHRvIHJldmVhbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHtzb3VyY2VzICYmIHNvdXJjZXNbMF0/Lm5mdEFkZHJlc3MgJiYgd29yZHM/Lmxlbmd0aCA+IDIwMCA/ICggLy8gQWRqdXN0ZWQgdG8gY2hlY2sgaWYgc291cmNlcyBleGlzdCBhbmQgZ2V0IHRoZSBmaXJzdCBzb3VyY2UncyBuZnRBZGRyZXNzXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJtdC00IG1yLWF1dG8gYmctc2xhdGUtMzAwIHB4LTIgcHktMSByb3VuZGVkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8aDI+U291cmNlczo8L2gyPlxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cIm10LTEgbXItMiBiZy1zbGF0ZS0yMDAgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC14c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAge3NvdXJjZXNbMF0/Lm5mdEFkZHJlc3N9IHsvKiBBZGp1c3RlZCB0byBnZXQgdGhlIGZpcnN0IHNvdXJjZSdzIG5mdEFkZHJlc3MgKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2VwYXJhdGVPdXRwdXRBbmRTb3VyY2VzIiwiZGF0YSIsImpzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwib3V0cHV0Iiwic291cmNlcyIsInVuZGVmaW5lZCIsImF1dGhvckFkZHJlc3MiLCJuZnRBZGRyZXNzIiwiY29zdFBlcldvcmQiLCJlcnJvciIsImNvbnNvbGUiLCJDaGF0TWVzc2FnZUJ1YmJsZSIsIm1lc3NhZ2UiLCJhaUVtb2ppIiwib3BlblRyYW5zYWN0aW9uTW9kYWwiLCJvblJldmVhbCIsInNob3dGdWxsTWVzc2FnZSIsInNldFNob3dGdWxsTWVzc2FnZSIsImNvbG9yQ2xhc3NOYW1lIiwicm9sZSIsImFsaWdubWVudENsYXNzTmFtZSIsInByZWZpeCIsIm1lc3NhZ2VDb250ZW50IiwiY29udGVudCIsIndvcmRzIiwic3BsaXQiLCJ0cnVuY2F0ZWRNZXNzYWdlIiwic2xpY2UiLCJqb2luIiwiZG9jdW1lbnRIYXNoIiwicHJpY2VQZXJXb3JkIiwiaGFuZGxlVW5sb2NrTWVzc2FnZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY29kZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatMessageBubble.tsx\n"));

/***/ })

});