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

/***/ "(app-pages-browser)/./components/TransactionModal.tsx":
/*!*****************************************!*\
  !*** ./components/TransactionModal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contract/ResearchDocumentMarketABI */ \"(app-pages-browser)/./contract/ResearchDocumentMarketABI.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/ethers/react */ \"(app-pages-browser)/./node_modules/@web3modal/ethers/dist/esm/exports/react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TransactionModal = (param)=>{\n    let { isOpen, onClose, sourceData } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const abi = _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_2__.ResearchDocumentMarketABI;\n    const { walletProvider } = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3ModalProvider)();\n    const handlePurchase = async ()=>{\n        try {\n            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(walletProvider);\n            const signer = await ethersProvider.getSigner();\n            // Replace 'contractAddress' with your contract address\n            const contractAddress = \"0x4366808982cE144Ce1c6864ae40F4ED06ddA06f5\"; // Replace with your contract address\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, abi, signer);\n            // Calculate payment amount\n            const pricePerWord = sourceData.pricePerWord || 100;\n            const amountToPay = pricePerWord * sourceData.numberOfWords || 10000;\n            // Call contract method to access document\n            setLoading(true);\n            await contract.accessDocument(sourceData.documentHash, sourceData.numberOfWords, {\n                value: amountToPay\n            });\n            // Payment successful, close modal\n            setLoading(false);\n            onClose();\n        } catch (error) {\n            // Handle error\n            setLoading(false);\n            setError(error.message || \"An error occurred\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 overflow-y-auto z-50 bg-gray-200 bg-opacity-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-content bg-white w-1/2 mx-auto my-20 p-8 rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Unlock Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"This content contains \".concat(sourceData === null || sourceData === void 0 ? void 0 : sourceData.numberOfWords, \" words. To unlock, you need to pay.\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline \".concat(loading ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                            onClick: handlePurchase,\n                            disabled: loading,\n                            children: loading ? \"Purchasing...\" : \"Purchase\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm mt-4\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n        lineNumber: 49,\n        columnNumber: 11\n    }, undefined);\n};\n_s(TransactionModal, \"JSJK3mYSkZ0JQVDo59gDwJd4bYQ=\", false, function() {\n    return [\n        _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3ModalProvider\n    ];\n});\n_c = TransactionModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionModal);\nvar _c;\n$RefreshReg$(_c, \"TransactionModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ3VDO0FBQ3hDO0FBQzJDO0FBWXBGLE1BQU1NLG1CQUFvRDtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3hGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1hLE1BQU1YLDBGQUF5QkE7SUFDckMsTUFBTSxFQUFFWSxjQUFjLEVBQUUsR0FBR1YsNkVBQW9CQTtJQUUvQyxNQUFNVyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixJQUFJYixtREFBZUEsQ0FBQ1c7WUFDM0MsTUFBTUcsU0FBUyxNQUFNRCxlQUFlRSxTQUFTO1lBRTdDLHVEQUF1RDtZQUN2RCxNQUFNQyxrQkFBa0IsOENBQThDLHFDQUFxQztZQUMzRyxNQUFNQyxXQUFXLElBQUluQiw0Q0FBUUEsQ0FBQ2tCLGlCQUFpQk4sS0FBS0k7WUFFcEQsMkJBQTJCO1lBQzNCLE1BQU1JLGVBQWViLFdBQVdhLFlBQVksSUFBSTtZQUNoRCxNQUFNQyxjQUFjRCxlQUFlYixXQUFXZSxhQUFhLElBQUk7WUFFL0QsMENBQTBDO1lBQzFDYixXQUFXO1lBQ1gsTUFBTVUsU0FBU0ksY0FBYyxDQUFDaEIsV0FBV2lCLFlBQVksRUFBRWpCLFdBQVdlLGFBQWEsRUFBRTtnQkFBRUcsT0FBT0o7WUFBWTtZQUN0RyxrQ0FBa0M7WUFDbENaLFdBQVc7WUFDWEg7UUFDRixFQUFFLE9BQU9JLE9BQU87WUFDZCxlQUFlO1lBQ2ZELFdBQVc7WUFDWEUsU0FBU0QsTUFBTWdCLE9BQU8sSUFBSTtRQUM1QjtJQUNGO0lBRUEscUJBQVEsOERBQUNDO2tCQUNMLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNmLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQXFCOzs7Ozs7MENBQ25DLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBaUIseUJBQW1ELE9BQTFCckIsdUJBQUFBLGlDQUFBQSxXQUFZZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7OztrQ0FFbkYsOERBQUNLO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQ0gsV0FBVyxnSEFFVixPQURDcEIsVUFBVSxrQ0FBa0M7NEJBRTlDd0IsU0FBU2xCOzRCQUNUbUIsVUFBVXpCO3NDQUVUQSxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7b0JBR2hDRSx1QkFBUyw4REFBQ29CO3dCQUFFRixXQUFVO2tDQUE2QmxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVEO0dBdERNTjs7UUFJdUJELHlFQUFvQkE7OztLQUozQ0M7QUF3RE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uTW9kYWwudHN4PzdlYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250cmFjdCwgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgUmVzZWFyY2hEb2N1bWVudE1hcmtldEFCSSB9IGZyb20gJ0AvY29udHJhY3QvUmVzZWFyY2hEb2N1bWVudE1hcmtldEFCSSc7XHJcbmltcG9ydCB7IEJyb3dzZXJQcm92aWRlciB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCB7IHVzZVdlYjNNb2RhbFByb3ZpZGVyLCB1c2VXZWIzTW9kYWxBY2NvdW50IH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcnMvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uTW9kYWxQcm9wcyB7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc291cmNlRGF0YToge1xyXG4gICAgZG9jdW1lbnRIYXNoOiBzdHJpbmc7XHJcbiAgICBwcmljZVBlcldvcmQ6IG51bWJlcjtcclxuICAgIG51bWJlck9mV29yZHM6IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBUcmFuc2FjdGlvbk1vZGFsOiBSZWFjdC5GQzxUcmFuc2FjdGlvbk1vZGFsUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBzb3VyY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBhYmkgPSBSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJO1xyXG4gIGNvbnN0IHsgd2FsbGV0UHJvdmlkZXIgfSA9IHVzZVdlYjNNb2RhbFByb3ZpZGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVB1cmNoYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZXRoZXJzUHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdhbGxldFByb3ZpZGVyKTtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZXRoZXJzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICAvLyBSZXBsYWNlICdjb250cmFjdEFkZHJlc3MnIHdpdGggeW91ciBjb250cmFjdCBhZGRyZXNzXHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDQzNjY4MDg5ODJjRTE0NENlMWM2ODY0YWU0MEY0RUQwNmRkQTA2ZjUnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb250cmFjdCBhZGRyZXNzXHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXIpO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHBheW1lbnQgYW1vdW50XHJcbiAgICAgIGNvbnN0IHByaWNlUGVyV29yZCA9IHNvdXJjZURhdGEucHJpY2VQZXJXb3JkIHx8IDEwMDtcclxuICAgICAgY29uc3QgYW1vdW50VG9QYXkgPSBwcmljZVBlcldvcmQgKiBzb3VyY2VEYXRhLm51bWJlck9mV29yZHMgfHwgMTAwMDA7XHJcblxyXG4gICAgICAvLyBDYWxsIGNvbnRyYWN0IG1ldGhvZCB0byBhY2Nlc3MgZG9jdW1lbnRcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgYXdhaXQgY29udHJhY3QuYWNjZXNzRG9jdW1lbnQoc291cmNlRGF0YS5kb2N1bWVudEhhc2gsIHNvdXJjZURhdGEubnVtYmVyT2ZXb3JkcywgeyB2YWx1ZTogYW1vdW50VG9QYXkgfSk7XHJcbiAgICAgIC8vIFBheW1lbnQgc3VjY2Vzc2Z1bCwgY2xvc2UgbW9kYWxcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIG9uQ2xvc2UoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSB8fCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBpbnNldC0wIG92ZXJmbG93LXktYXV0byB6LTUwIGJnLWdyYXktMjAwIGJnLW9wYWNpdHktNTAnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgYmctd2hpdGUgdy0xLzIgbXgtYXV0byBteS0yMCBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5VbmxvY2sgQ29udGVudDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2BUaGlzIGNvbnRlbnQgY29udGFpbnMgJHtzb3VyY2VEYXRhPy5udW1iZXJPZldvcmRzfSB3b3Jkcy4gVG8gdW5sb2NrLCB5b3UgbmVlZCB0byBwYXkuYH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xyXG4gICAgICAgICAgICAgIGxvYWRpbmcgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVB1cmNoYXNlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAnUHVyY2hhc2luZy4uLicgOiAnUHVyY2hhc2UnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTRcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuIDwvZGl2PiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25Nb2RhbDtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJhY3QiLCJSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJIiwiQnJvd3NlclByb3ZpZGVyIiwidXNlV2ViM01vZGFsUHJvdmlkZXIiLCJUcmFuc2FjdGlvbk1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsInNvdXJjZURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhYmkiLCJ3YWxsZXRQcm92aWRlciIsImhhbmRsZVB1cmNoYXNlIiwiZXRoZXJzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsInByaWNlUGVyV29yZCIsImFtb3VudFRvUGF5IiwibnVtYmVyT2ZXb3JkcyIsImFjY2Vzc0RvY3VtZW50IiwiZG9jdW1lbnRIYXNoIiwidmFsdWUiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TransactionModal.tsx\n"));

/***/ })

});