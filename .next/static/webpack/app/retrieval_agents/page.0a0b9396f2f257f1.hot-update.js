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

/***/ "(app-pages-browser)/./app/retrieval_agents/page.tsx":
/*!***************************************!*\
  !*** ./app/retrieval_agents/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_TransactionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TransactionModal */ \"(app-pages-browser)/./components/TransactionModal.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AgentsPage() {\n    _s();\n    const [transactionModalOpen, setTransactionModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true); // Initialize state as closed\n    const [sourceData, setSourceData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const openTransactionModal = (sources)=>{\n        setSourceData(sources);\n        setTransactionModalOpen(true);\n    };\n    const closeTransactionModal = ()=>{\n        setTransactionModalOpen(false);\n    };\n    const InfoCard = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 md:p-8 rounded bg-red-200 w-full max-h-[85%] overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl md:text-4xl mb-4\",\n                children: \"▲ Next.js + LangChain.js Retrieval Agent \\uD83E\\uDD9C\\uD83D\\uDD17\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83E\\uDD1D\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"This template showcases a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://js.langchain.com/\",\n                                        target: \"_blank\",\n                                        children: \"LangChain.js\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"retrieval chain and the Vercel\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://sdk.vercel.ai/docs\",\n                                        target: \"_blank\",\n                                        children: \"AI SDK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"in a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://nextjs.org/\",\n                                        target: \"_blank\",\n                                        children: \"Next.js\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"project.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDEE0️\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"The agent has access to a vector store retriever as a tool as well as a memory. It's particularly well suited to meta-questions about the current conversation.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDCBB\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"You can find the prompt and model logic for this use-case in\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"app/api/chat/retrieval_agents/route.ts\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"\\uD83E\\uDD16\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"By default, the agent is pretending to be a robot, but you can change the prompt to whatever you want!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83C\\uDFA8\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"The main frontend logic is found in\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"app/retrieval_agents/page.tsx\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-l\",\n                        children: [\n                            \"\\uD83D\\uDC19\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"This template is open source - you can see the source code and deploy your own version\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://github.com/langchain-ai/langchain-nextjs-template\",\n                                        target: \"_blank\",\n                                        children: \"from the GitHub repo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDD31\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"Before running this example, you'll first need to set up a Supabase (or other) vector store. See the README for more details.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-l\",\n                        children: [\n                            \"\\uD83D\\uDC47\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"Upload some text, then try asking e.g.\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"What are some ways of doing retrieval in LangChain?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"below!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isOpen: transactionModalOpen,\n            onClose: closeTransactionModal,\n            sourceData: sourceData\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n            lineNumber: 118,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 4\n    }, this);\n}\n_s(AgentsPage, \"Mao72jH+cvNp6027tREuXqfcOIo=\");\n_c = AgentsPage;\nvar _c;\n$RefreshReg$(_c, \"AgentsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXRyaWV2YWxfYWdlbnRzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHNkQ7QUFDNUI7QUFFbEIsU0FBU0U7O0lBRXRCLE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR0gsK0NBQVFBLENBQUMsT0FBTyw2QkFBNkI7SUFDckcsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUU7SUFFdEQsTUFBTU0sdUJBQXVCLENBQUNDO1FBQzVCRixjQUFjRTtRQUNkSix3QkFBd0I7SUFDMUI7SUFFQSxNQUFNSyx3QkFBd0I7UUFDNUJMLHdCQUF3QjtJQUMxQjtJQUNBLE1BQU1NLHlCQUNKLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTRCOzs7Ozs7MEJBRzFDLDhEQUFDRTs7a0NBQ0MsOERBQUNDO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTs7b0NBQU87b0NBQ0s7a0RBQzFCLDhEQUFDSzt3Q0FBRUMsTUFBSzt3Q0FBNEJDLFFBQU87a0RBQVM7Ozs7OztvQ0FFL0M7b0NBQUk7b0NBQ3NCO2tEQUMvQiw4REFBQ0Y7d0NBQUVDLE1BQUs7d0NBQTZCQyxRQUFPO2tEQUFTOzs7Ozs7b0NBRWhEO29DQUFJO29DQUNKO2tEQUNMLDhEQUFDRjt3Q0FBRUMsTUFBSzt3Q0FBc0JDLFFBQU87a0RBQVM7Ozs7OztvQ0FFekM7b0NBQUk7Ozs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNKO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQU16Qiw4REFBQ0c7d0JBQUdILFdBQVU7OzRCQUF5QjswQ0FFckMsOERBQUNJO2dDQUFLSixXQUFVOztvQ0FBTztvQ0FDd0M7a0RBQzdELDhEQUFDUTtrREFBSzs7Ozs7O29DQUE2Qzs7Ozs7Ozs7Ozs7OztrQ0FHdkQsOERBQUNMOzs0QkFBRzswQ0FFRiw4REFBQ0M7Z0NBQUtKLFdBQVU7MENBQU87Ozs7Ozs7Ozs7OztrQ0FLekIsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTs7b0NBQU87b0NBQ2U7a0RBQ3BDLDhEQUFDUTtrREFBSzs7Ozs7O29DQUFvQzs7Ozs7Ozs7Ozs7OztrQ0FHOUMsOERBQUNMO3dCQUFHSCxXQUFVOzs0QkFBUzswQ0FFckIsOERBQUNJO2dDQUFLSixXQUFVOztvQ0FBTztvQ0FFRztrREFDeEIsOERBQUNLO3dDQUNDQyxNQUFLO3dDQUNMQyxRQUFPO2tEQUNSOzs7Ozs7b0NBRUc7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNKO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUt6Qiw4REFBQ0c7d0JBQUdILFdBQVU7OzRCQUFTOzBDQUVyQiw4REFBQ0k7Z0NBQUtKLFdBQVU7O29DQUFPO29DQUNrQjtrREFDdkMsOERBQUNRO2tEQUFLOzs7Ozs7b0NBQTJEO29DQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTy9FLHFCQUNDLDhEQUFDVDtrQkFZRCw0RUFBQ1gsb0VBQWdCQTtZQUNacUIsUUFBUWxCO1lBQ1JtQixTQUFTYjtZQUNUSixZQUFZQTs7Ozs7Ozs7Ozs7QUFHcEI7R0FySHdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmV0cmlldmFsX2FnZW50cy9wYWdlLnRzeD84OWFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgQ2hhdFdpbmRvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2hhdFdpbmRvd1wiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25Nb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL1RyYW5zYWN0aW9uTW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFnZW50c1BhZ2UoKSB7XHJcbiAgXHJcbiAgY29uc3QgW3RyYW5zYWN0aW9uTW9kYWxPcGVuLCBzZXRUcmFuc2FjdGlvbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gSW5pdGlhbGl6ZSBzdGF0ZSBhcyBjbG9zZWRcclxuICBjb25zdCBbc291cmNlRGF0YSwgc2V0U291cmNlRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG5cclxuICBjb25zdCBvcGVuVHJhbnNhY3Rpb25Nb2RhbCA9IChzb3VyY2VzOiBhbnlbXSkgPT4ge1xyXG4gICAgc2V0U291cmNlRGF0YShzb3VyY2VzKTtcclxuICAgIHNldFRyYW5zYWN0aW9uTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlVHJhbnNhY3Rpb25Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFRyYW5zYWN0aW9uTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IEluZm9DYXJkID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbWQ6cC04IHJvdW5kZWQgYmctcmVkLTIwMCB3LWZ1bGwgbWF4LWgtWzg1JV0gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBtYi00XCI+XHJcbiAgICAgICAg4payIE5leHQuanMgKyBMYW5nQ2hhaW4uanMgUmV0cmlldmFsIEFnZW50IPCfppzwn5SXXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtbCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAg8J+knVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBUaGlzIHRlbXBsYXRlIHNob3djYXNlcyBhe1wiIFwifVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9qcy5sYW5nY2hhaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIExhbmdDaGFpbi5qc1xyXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICByZXRyaWV2YWwgY2hhaW4gYW5kIHRoZSBWZXJjZWx7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Nkay52ZXJjZWwuYWkvZG9jc1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIEFJIFNES1xyXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICBpbiBhe1wiIFwifVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIE5leHQuanNcclxuICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgcHJvamVjdC5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1sIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICDwn5ug77iPXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFRoZSBhZ2VudCBoYXMgYWNjZXNzIHRvIGEgdmVjdG9yIHN0b3JlIHJldHJpZXZlciBhcyBhIHRvb2wgYXMgd2VsbFxyXG4gICAgICAgICAgICBhcyBhIG1lbW9yeS4gSXQmYXBvcztzIHBhcnRpY3VsYXJseSB3ZWxsIHN1aXRlZCB0byBtZXRhLXF1ZXN0aW9uc1xyXG4gICAgICAgICAgICBhYm91dCB0aGUgY3VycmVudCBjb252ZXJzYXRpb24uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtbCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAg8J+Su1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBZb3UgY2FuIGZpbmQgdGhlIHByb21wdCBhbmQgbW9kZWwgbG9naWMgZm9yIHRoaXMgdXNlLWNhc2UgaW57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxjb2RlPmFwcC9hcGkvY2hhdC9yZXRyaWV2YWxfYWdlbnRzL3JvdXRlLnRzPC9jb2RlPi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIPCfpJZcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgQnkgZGVmYXVsdCwgdGhlIGFnZW50IGlzIHByZXRlbmRpbmcgdG8gYmUgYSByb2JvdCwgYnV0IHlvdSBjYW5cclxuICAgICAgICAgICAgY2hhbmdlIHRoZSBwcm9tcHQgdG8gd2hhdGV2ZXIgeW91IHdhbnQhXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtbCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAg8J+OqFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBUaGUgbWFpbiBmcm9udGVuZCBsb2dpYyBpcyBmb3VuZCBpbntcIiBcIn1cclxuICAgICAgICAgICAgPGNvZGU+YXBwL3JldHJpZXZhbF9hZ2VudHMvcGFnZS50c3g8L2NvZGU+LlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtbFwiPlxyXG4gICAgICAgICAg8J+QmVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBUaGlzIHRlbXBsYXRlIGlzIG9wZW4gc291cmNlIC0geW91IGNhbiBzZWUgdGhlIHNvdXJjZSBjb2RlIGFuZFxyXG4gICAgICAgICAgICBkZXBsb3kgeW91ciBvd24gdmVyc2lvbntcIiBcIn1cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xhbmdjaGFpbi1haS9sYW5nY2hhaW4tbmV4dGpzLXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgZnJvbSB0aGUgR2l0SHViIHJlcG9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAhXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtbCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAg8J+UsVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBCZWZvcmUgcnVubmluZyB0aGlzIGV4YW1wbGUsIHlvdSZhcG9zO2xsIGZpcnN0IG5lZWQgdG8gc2V0IHVwIGFcclxuICAgICAgICAgICAgU3VwYWJhc2UgKG9yIG90aGVyKSB2ZWN0b3Igc3RvcmUuIFNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1sXCI+XHJcbiAgICAgICAgICDwn5GHXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFVwbG9hZCBzb21lIHRleHQsIHRoZW4gdHJ5IGFza2luZyBlLmcue1wiIFwifVxyXG4gICAgICAgICAgICA8Y29kZT5XaGF0IGFyZSBzb21lIHdheXMgb2YgZG9pbmcgcmV0cmlldmFsIGluIExhbmdDaGFpbj88L2NvZGU+e1wiIFwifVxyXG4gICAgICAgICAgICBiZWxvdyFcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2PiBcclxuICAgIHsvKiA8Q2hhdFdpbmRvd1xyXG4gICAgICBvcGVuVHJhbnNhY3Rpb25Nb2RhbD17b3BlblRyYW5zYWN0aW9uTW9kYWx9XHJcbiAgICAgIGVuZHBvaW50PVwiYXBpL2NoYXQvcmV0cmlldmFsX2FnZW50c1wiXHJcbiAgICAgIGVtcHR5U3RhdGVDb21wb25lbnQ9e0luZm9DYXJkfVxyXG4gICAgICBzaG93SW5nZXN0Rm9ybT17dHJ1ZX1cclxuICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICdCZWVwIGJvb3AhIElcXCdtIGEgcm9ib3QgcmV0cmlldmFsLWZvY3VzZWQgYWdlbnQhIEFzaywgXCJXaGF0IGFyZSBzb21lIHdheXMgb2YgZG9pbmcgcmV0cmlldmFsIGluIExhbmdDaGFpbi5qcz9cIidcclxuICAgICAgfVxyXG4gICAgICBlbW9qaT1cIvCfpJZcIlxyXG4gICAgICB0aXRsZVRleHQ9XCJSb2JiaWUgdGhlIFJldHJpZXZhbCBSb2JvdFwiXHJcbiAgICA+PC9DaGF0V2luZG93PiAqL31cclxuICAgPFRyYW5zYWN0aW9uTW9kYWxcclxuICAgICAgICBpc09wZW49e3RyYW5zYWN0aW9uTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlVHJhbnNhY3Rpb25Nb2RhbH0gLy8gUGFzcyB0aGUgY2xvc2VUcmFuc2FjdGlvbk1vZGFsIGZ1bmN0aW9uIHRvIFRyYW5zYWN0aW9uTW9kYWxcclxuICAgICAgICBzb3VyY2VEYXRhPXtzb3VyY2VEYXRhfVxyXG4gICAgICAvPlxyXG4gIDwvZGl2Pik7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlRyYW5zYWN0aW9uTW9kYWwiLCJ1c2VTdGF0ZSIsIkFnZW50c1BhZ2UiLCJ0cmFuc2FjdGlvbk1vZGFsT3BlbiIsInNldFRyYW5zYWN0aW9uTW9kYWxPcGVuIiwic291cmNlRGF0YSIsInNldFNvdXJjZURhdGEiLCJvcGVuVHJhbnNhY3Rpb25Nb2RhbCIsInNvdXJjZXMiLCJjbG9zZVRyYW5zYWN0aW9uTW9kYWwiLCJJbmZvQ2FyZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJsaSIsInNwYW4iLCJhIiwiaHJlZiIsInRhcmdldCIsImNvZGUiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/retrieval_agents/page.tsx\n"));

/***/ })

});