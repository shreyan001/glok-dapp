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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ChatWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ChatWindow */ \"(app-pages-browser)/./components/ChatWindow.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AgentsPage() {\n    _s();\n    const [transactionModalOpen, setTransactionModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true); // Initialize state as closed\n    const [sourceData, setSourceData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const openTransactionModal = (sources)=>{\n        setSourceData(sources);\n        setTransactionModalOpen(true);\n    };\n    const closeTransactionModal = ()=>{\n        setTransactionModalOpen(false);\n    };\n    const InfoCard = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 md:p-8 rounded bg-red-200 w-full max-h-[85%] overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl md:text-4xl mb-4\",\n                children: \"▲ Next.js + LangChain.js Retrieval Agent \\uD83E\\uDD9C\\uD83D\\uDD17\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83E\\uDD1D\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"This template showcases a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://js.langchain.com/\",\n                                        target: \"_blank\",\n                                        children: \"LangChain.js\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"retrieval chain and the Vercel\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://sdk.vercel.ai/docs\",\n                                        target: \"_blank\",\n                                        children: \"AI SDK\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"in a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://nextjs.org/\",\n                                        target: \"_blank\",\n                                        children: \"Next.js\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"project.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDEE0️\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"The agent has access to a vector store retriever as a tool as well as a memory. It's particularly well suited to meta-questions about the current conversation.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDCBB\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"You can find the prompt and model logic for this use-case in\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"app/api/chat/retrieval_agents/route.ts\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"\\uD83E\\uDD16\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"By default, the agent is pretending to be a robot, but you can change the prompt to whatever you want!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83C\\uDFA8\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"The main frontend logic is found in\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"app/retrieval_agents/page.tsx\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-l\",\n                        children: [\n                            \"\\uD83D\\uDC19\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"This template is open source - you can see the source code and deploy your own version\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://github.com/langchain-ai/langchain-nextjs-template\",\n                                        target: \"_blank\",\n                                        children: \"from the GitHub repo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden text-l md:block\",\n                        children: [\n                            \"\\uD83D\\uDD31\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: \"Before running this example, you'll first need to set up a Supabase (or other) vector store. See the README for more details.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-l\",\n                        children: [\n                            \"\\uD83D\\uDC47\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: [\n                                    \"Upload some text, then try asking e.g.\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        children: \"What are some ways of doing retrieval in LangChain?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"below!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatWindow__WEBPACK_IMPORTED_MODULE_1__.ChatWindow, {\n            endpoint: \"api/chat/retrieval_agents\",\n            emptyStateComponent: InfoCard,\n            showIngestForm: true,\n            placeholder: 'Beep boop! I\\'m a robot retrieval-focused agent! Ask, \"What are some ways of doing retrieval in LangChain.js?\"',\n            emoji: \"\\uD83E\\uDD16\",\n            titleText: \"Robbie the Retrieval Robot\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n            lineNumber: 107,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\retrieval_agents\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 4\n    }, this);\n}\n_s(AgentsPage, \"Mao72jH+cvNp6027tREuXqfcOIo=\");\n_c = AgentsPage;\nvar _c;\n$RefreshReg$(_c, \"AgentsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXRyaWV2YWxfYWdlbnRzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFcUQ7QUFFcEI7QUFFbEIsU0FBU0U7O0lBRXRCLE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR0gsK0NBQVFBLENBQUMsT0FBTyw2QkFBNkI7SUFDckcsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUU7SUFFdEQsTUFBTU0sdUJBQXVCLENBQUNDO1FBQzVCRixjQUFjRTtRQUNkSix3QkFBd0I7SUFDMUI7SUFFQSxNQUFNSyx3QkFBd0I7UUFDNUJMLHdCQUF3QjtJQUMxQjtJQUNBLE1BQU1NLHlCQUNKLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTRCOzs7Ozs7MEJBRzFDLDhEQUFDRTs7a0NBQ0MsOERBQUNDO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTs7b0NBQU87b0NBQ0s7a0RBQzFCLDhEQUFDSzt3Q0FBRUMsTUFBSzt3Q0FBNEJDLFFBQU87a0RBQVM7Ozs7OztvQ0FFL0M7b0NBQUk7b0NBQ3NCO2tEQUMvQiw4REFBQ0Y7d0NBQUVDLE1BQUs7d0NBQTZCQyxRQUFPO2tEQUFTOzs7Ozs7b0NBRWhEO29DQUFJO29DQUNKO2tEQUNMLDhEQUFDRjt3Q0FBRUMsTUFBSzt3Q0FBc0JDLFFBQU87a0RBQVM7Ozs7OztvQ0FFekM7b0NBQUk7Ozs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNKO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQU16Qiw4REFBQ0c7d0JBQUdILFdBQVU7OzRCQUF5QjswQ0FFckMsOERBQUNJO2dDQUFLSixXQUFVOztvQ0FBTztvQ0FDd0M7a0RBQzdELDhEQUFDUTtrREFBSzs7Ozs7O29DQUE2Qzs7Ozs7Ozs7Ozs7OztrQ0FHdkQsOERBQUNMOzs0QkFBRzswQ0FFRiw4REFBQ0M7Z0NBQUtKLFdBQVU7MENBQU87Ozs7Ozs7Ozs7OztrQ0FLekIsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTs7b0NBQU87b0NBQ2U7a0RBQ3BDLDhEQUFDUTtrREFBSzs7Ozs7O29DQUFvQzs7Ozs7Ozs7Ozs7OztrQ0FHOUMsOERBQUNMO3dCQUFHSCxXQUFVOzs0QkFBUzswQ0FFckIsOERBQUNJO2dDQUFLSixXQUFVOztvQ0FBTztvQ0FFRztrREFDeEIsOERBQUNLO3dDQUNDQyxNQUFLO3dDQUNMQyxRQUFPO2tEQUNSOzs7Ozs7b0NBRUc7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNKO3dCQUFHSCxXQUFVOzs0QkFBeUI7MENBRXJDLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUt6Qiw4REFBQ0c7d0JBQUdILFdBQVU7OzRCQUFTOzBDQUVyQiw4REFBQ0k7Z0NBQUtKLFdBQVU7O29DQUFPO29DQUNrQjtrREFDdkMsOERBQUNRO2tEQUFLOzs7Ozs7b0NBQTJEO29DQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTy9FLHFCQUNDLDhEQUFDVDtrQkFDQSw0RUFBQ1gsOERBQVVBO1lBQ1RxQixVQUFTO1lBQ1RDLHFCQUFxQlo7WUFDckJhLGdCQUFnQjtZQUNoQkMsYUFDRTtZQUVGQyxPQUFNO1lBQ05DLFdBQVU7Ozs7Ozs7Ozs7O0FBSWhCO0dBaEh3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXRyaWV2YWxfYWdlbnRzL3BhZ2UudHN4Pzg5YWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBDaGF0V2luZG93IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DaGF0V2luZG93XCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvbk1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWdlbnRzUGFnZSgpIHtcclxuICBcclxuICBjb25zdCBbdHJhbnNhY3Rpb25Nb2RhbE9wZW4sIHNldFRyYW5zYWN0aW9uTW9kYWxPcGVuXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBJbml0aWFsaXplIHN0YXRlIGFzIGNsb3NlZFxyXG4gIGNvbnN0IFtzb3VyY2VEYXRhLCBzZXRTb3VyY2VEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5UcmFuc2FjdGlvbk1vZGFsID0gKHNvdXJjZXM6IGFueVtdKSA9PiB7XHJcbiAgICBzZXRTb3VyY2VEYXRhKHNvdXJjZXMpO1xyXG4gICAgc2V0VHJhbnNhY3Rpb25Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VUcmFuc2FjdGlvbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VHJhbnNhY3Rpb25Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgSW5mb0NhcmQgPSAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtZDpwLTggcm91bmRlZCBiZy1yZWQtMjAwIHctZnVsbCBtYXgtaC1bODUlXSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIG1iLTRcIj5cclxuICAgICAgICDilrIgTmV4dC5qcyArIExhbmdDaGFpbi5qcyBSZXRyaWV2YWwgQWdlbnQg8J+mnPCflJdcclxuICAgICAgPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1sIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICDwn6SdXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFRoaXMgdGVtcGxhdGUgc2hvd2Nhc2VzIGF7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2pzLmxhbmdjaGFpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgTGFuZ0NoYWluLmpzXHJcbiAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgIHJldHJpZXZhbCBjaGFpbiBhbmQgdGhlIFZlcmNlbHtcIiBcIn1cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc2RrLnZlcmNlbC5haS9kb2NzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgQUkgU0RLXHJcbiAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgIGluIGF7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgTmV4dC5qc1xyXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICBwcm9qZWN0LlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWwgbWQ6YmxvY2tcIj5cclxuICAgICAgICAgIPCfm6DvuI9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgVGhlIGFnZW50IGhhcyBhY2Nlc3MgdG8gYSB2ZWN0b3Igc3RvcmUgcmV0cmlldmVyIGFzIGEgdG9vbCBhcyB3ZWxsXHJcbiAgICAgICAgICAgIGFzIGEgbWVtb3J5LiBJdCZhcG9zO3MgcGFydGljdWxhcmx5IHdlbGwgc3VpdGVkIHRvIG1ldGEtcXVlc3Rpb25zXHJcbiAgICAgICAgICAgIGFib3V0IHRoZSBjdXJyZW50IGNvbnZlcnNhdGlvbi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1sIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICDwn5K7XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFlvdSBjYW4gZmluZCB0aGUgcHJvbXB0IGFuZCBtb2RlbCBsb2dpYyBmb3IgdGhpcyB1c2UtY2FzZSBpbntcIiBcIn1cclxuICAgICAgICAgICAgPGNvZGU+YXBwL2FwaS9jaGF0L3JldHJpZXZhbF9hZ2VudHMvcm91dGUudHM8L2NvZGU+LlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAg8J+kllxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICBCeSBkZWZhdWx0LCB0aGUgYWdlbnQgaXMgcHJldGVuZGluZyB0byBiZSBhIHJvYm90LCBidXQgeW91IGNhblxyXG4gICAgICAgICAgICBjaGFuZ2UgdGhlIHByb21wdCB0byB3aGF0ZXZlciB5b3Ugd2FudCFcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1sIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICDwn46oXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFRoZSBtYWluIGZyb250ZW5kIGxvZ2ljIGlzIGZvdW5kIGlue1wiIFwifVxyXG4gICAgICAgICAgICA8Y29kZT5hcHAvcmV0cmlldmFsX2FnZW50cy9wYWdlLnRzeDwvY29kZT4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1sXCI+XHJcbiAgICAgICAgICDwn5CZXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIFRoaXMgdGVtcGxhdGUgaXMgb3BlbiBzb3VyY2UgLSB5b3UgY2FuIHNlZSB0aGUgc291cmNlIGNvZGUgYW5kXHJcbiAgICAgICAgICAgIGRlcGxveSB5b3VyIG93biB2ZXJzaW9ue1wiIFwifVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFuZ2NoYWluLWFpL2xhbmdjaGFpbi1uZXh0anMtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBmcm9tIHRoZSBHaXRIdWIgcmVwb1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICFcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1sIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICDwn5SxXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgIEJlZm9yZSBydW5uaW5nIHRoaXMgZXhhbXBsZSwgeW91JmFwb3M7bGwgZmlyc3QgbmVlZCB0byBzZXQgdXAgYVxyXG4gICAgICAgICAgICBTdXBhYmFzZSAob3Igb3RoZXIpIHZlY3RvciBzdG9yZS4gU2VlIHRoZSBSRUFETUUgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWxcIj5cclxuICAgICAgICAgIPCfkYdcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgVXBsb2FkIHNvbWUgdGV4dCwgdGhlbiB0cnkgYXNraW5nIGUuZy57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxjb2RlPldoYXQgYXJlIHNvbWUgd2F5cyBvZiBkb2luZyByZXRyaWV2YWwgaW4gTGFuZ0NoYWluPzwvY29kZT57XCIgXCJ9XHJcbiAgICAgICAgICAgIGJlbG93IVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXY+IFxyXG4gICAgPENoYXRXaW5kb3dcclxuICAgICAgZW5kcG9pbnQ9XCJhcGkvY2hhdC9yZXRyaWV2YWxfYWdlbnRzXCJcclxuICAgICAgZW1wdHlTdGF0ZUNvbXBvbmVudD17SW5mb0NhcmR9XHJcbiAgICAgIHNob3dJbmdlc3RGb3JtPXt0cnVlfVxyXG4gICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgJ0JlZXAgYm9vcCEgSVxcJ20gYSByb2JvdCByZXRyaWV2YWwtZm9jdXNlZCBhZ2VudCEgQXNrLCBcIldoYXQgYXJlIHNvbWUgd2F5cyBvZiBkb2luZyByZXRyaWV2YWwgaW4gTGFuZ0NoYWluLmpzP1wiJ1xyXG4gICAgICB9XHJcbiAgICAgIGVtb2ppPVwi8J+kllwiXHJcbiAgICAgIHRpdGxlVGV4dD1cIlJvYmJpZSB0aGUgUmV0cmlldmFsIFJvYm90XCJcclxuICAgID48L0NoYXRXaW5kb3c+XHJcbiAgXHJcbiAgPC9kaXY+KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hhdFdpbmRvdyIsInVzZVN0YXRlIiwiQWdlbnRzUGFnZSIsInRyYW5zYWN0aW9uTW9kYWxPcGVuIiwic2V0VHJhbnNhY3Rpb25Nb2RhbE9wZW4iLCJzb3VyY2VEYXRhIiwic2V0U291cmNlRGF0YSIsIm9wZW5UcmFuc2FjdGlvbk1vZGFsIiwic291cmNlcyIsImNsb3NlVHJhbnNhY3Rpb25Nb2RhbCIsIkluZm9DYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsImxpIiwic3BhbiIsImEiLCJocmVmIiwidGFyZ2V0IiwiY29kZSIsImVuZHBvaW50IiwiZW1wdHlTdGF0ZUNvbXBvbmVudCIsInNob3dJbmdlc3RGb3JtIiwicGxhY2Vob2xkZXIiLCJlbW9qaSIsInRpdGxlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/retrieval_agents/page.tsx\n"));

/***/ })

});