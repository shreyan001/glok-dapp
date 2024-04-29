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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contract/ResearchDocumentMarketABI */ \"(app-pages-browser)/./contract/ResearchDocumentMarketABI.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/ethers/react */ \"(app-pages-browser)/./node_modules/@web3modal/ethers/dist/esm/exports/react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TransactionModal = (param)=>{\n    let { isOpen, onClose, sourceData } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const abi = _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_2__.ResearchDocumentMarketABI;\n    const { walletProvider } = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3ModalProvider)();\n    const handlePurchase = async ()=>{\n        try {\n            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(walletProvider);\n            const signer = await ethersProvider.getSigner();\n            // Replace 'contractAddress' with your contract address\n            const contractAddress = \"0x4366808982cE144Ce1c6864ae40F4ED06ddA06f5\"; // Replace with your contract address\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, abi, signer);\n            // Calculate payment amount\n            const pricePerWord = sourceData.pricePerWord;\n            const amountToPay = pricePerWord * sourceData.numberOfWords;\n            // Call contract method to access document\n            setLoading(true);\n            await contract.accessDocument(sourceData.documentHash, sourceData.numberOfWords, {\n                value: amountToPay\n            });\n            // Payment successful, close modal\n            setLoading(false);\n            onClose();\n        } catch (error) {\n            // Handle error\n            setLoading(false);\n            setError(error.message || \"An error occurred\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isOpen !== null && isOpen !== void 0 ? isOpen : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 overflow-y-auto z-50 bg-gray-200 bg-opacity-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-content bg-white w-1/2 mx-auto my-20 p-8 rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Unlock Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"This content contains \".concat(sourceData === null || sourceData === void 0 ? void 0 : sourceData.numberOfWords, \" words. To unlock, you need to pay.\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline \".concat(loading ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                            onClick: handlePurchase,\n                            disabled: loading,\n                            children: loading ? \"Purchasing...\" : \"Purchase\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm mt-4\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\components\\\\TransactionModal.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(TransactionModal, \"JSJK3mYSkZ0JQVDo59gDwJd4bYQ=\", false, function() {\n    return [\n        _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3ModalProvider\n    ];\n});\n_c = TransactionModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionModal);\nvar _c;\n$RefreshReg$(_c, \"TransactionModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ3VDO0FBQ3hDO0FBQzJDO0FBWXBGLE1BQU1NLG1CQUFvRDtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3hGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1hLE1BQU1YLDBGQUF5QkE7SUFDckMsTUFBTSxFQUFFWSxjQUFjLEVBQUUsR0FBR1YsNkVBQW9CQTtJQUUvQyxNQUFNVyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixJQUFJYixtREFBZUEsQ0FBQ1c7WUFDM0MsTUFBTUcsU0FBUyxNQUFNRCxlQUFlRSxTQUFTO1lBRTdDLHVEQUF1RDtZQUN2RCxNQUFNQyxrQkFBa0IsOENBQThDLHFDQUFxQztZQUMzRyxNQUFNQyxXQUFXLElBQUluQiw0Q0FBUUEsQ0FBQ2tCLGlCQUFpQk4sS0FBS0k7WUFFcEQsMkJBQTJCO1lBQzNCLE1BQU1JLGVBQWViLFdBQVdhLFlBQVk7WUFDNUMsTUFBTUMsY0FBY0QsZUFBZWIsV0FBV2UsYUFBYTtZQUUzRCwwQ0FBMEM7WUFDMUNiLFdBQVc7WUFDWCxNQUFNVSxTQUFTSSxjQUFjLENBQUNoQixXQUFXaUIsWUFBWSxFQUFFakIsV0FBV2UsYUFBYSxFQUFFO2dCQUFFRyxPQUFPSjtZQUFZO1lBQ3RHLGtDQUFrQztZQUNsQ1osV0FBVztZQUNYSDtRQUNGLEVBQUUsT0FBT0ksT0FBTztZQUNkLGVBQWU7WUFDZkQsV0FBVztZQUNYRSxTQUFTRCxNQUFNZ0IsT0FBTyxJQUFJO1FBQzVCO0lBQ0Y7SUFFQSxxQkFBUTtrQkFDTHJCLG1CQUFBQSxvQkFBQUEsdUJBQ0MsOERBQUNzQjtZQUFJQyxXQUFVO3NCQUNmLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQXFCOzs7Ozs7MENBQ25DLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBaUIseUJBQW1ELE9BQTFCckIsdUJBQUFBLGlDQUFBQSxXQUFZZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7OztrQ0FFbkYsOERBQUNLO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQ0gsV0FBVyxnSEFFVixPQURDcEIsVUFBVSxrQ0FBa0M7NEJBRTlDd0IsU0FBU2xCOzRCQUNUbUIsVUFBVXpCO3NDQUVUQSxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7b0JBR2hDRSx1QkFBUyw4REFBQ29CO3dCQUFFRixXQUFVO2tDQUE2QmxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUQ7R0F2RE1OOztRQUl1QkQseUVBQW9CQTs7O0tBSjNDQztBQXlETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25Nb2RhbC50c3g/N2VhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRyYWN0LCBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5pbXBvcnQgeyBSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJIH0gZnJvbSAnQC9jb250cmFjdC9SZXNlYXJjaERvY3VtZW50TWFya2V0QUJJJztcclxuaW1wb3J0IHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgdXNlV2ViM01vZGFsUHJvdmlkZXIsIHVzZVdlYjNNb2RhbEFjY291bnQgfSBmcm9tICdAd2ViM21vZGFsL2V0aGVycy9yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb25Nb2RhbFByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICBzb3VyY2VEYXRhOiB7XHJcbiAgICBkb2N1bWVudEhhc2g6IHN0cmluZztcclxuICAgIHByaWNlUGVyV29yZDogbnVtYmVyO1xyXG4gICAgbnVtYmVyT2ZXb3JkczogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IFRyYW5zYWN0aW9uTW9kYWw6IFJlYWN0LkZDPFRyYW5zYWN0aW9uTW9kYWxQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UsIHNvdXJjZURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGFiaSA9IFJlc2VhcmNoRG9jdW1lbnRNYXJrZXRBQkk7XHJcbiAgY29uc3QgeyB3YWxsZXRQcm92aWRlciB9ID0gdXNlV2ViM01vZGFsUHJvdmlkZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHVyY2hhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBldGhlcnNQcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2FsbGV0UHJvdmlkZXIpO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBldGhlcnNQcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICAgIC8vIFJlcGxhY2UgJ2NvbnRyYWN0QWRkcmVzcycgd2l0aCB5b3VyIGNvbnRyYWN0IGFkZHJlc3NcclxuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NDM2NjgwODk4MmNFMTQ0Q2UxYzY4NjRhZTQwRjRFRDA2ZGRBMDZmNSc7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbnRyYWN0IGFkZHJlc3NcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lcik7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgcGF5bWVudCBhbW91bnRcclxuICAgICAgY29uc3QgcHJpY2VQZXJXb3JkID0gc291cmNlRGF0YS5wcmljZVBlcldvcmQ7XHJcbiAgICAgIGNvbnN0IGFtb3VudFRvUGF5ID0gcHJpY2VQZXJXb3JkICogc291cmNlRGF0YS5udW1iZXJPZldvcmRzO1xyXG5cclxuICAgICAgLy8gQ2FsbCBjb250cmFjdCBtZXRob2QgdG8gYWNjZXNzIGRvY3VtZW50XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGF3YWl0IGNvbnRyYWN0LmFjY2Vzc0RvY3VtZW50KHNvdXJjZURhdGEuZG9jdW1lbnRIYXNoLCBzb3VyY2VEYXRhLm51bWJlck9mV29yZHMsIHsgdmFsdWU6IGFtb3VudFRvUGF5IH0pO1xyXG4gICAgICAvLyBQYXltZW50IHN1Y2Nlc3NmdWwsIGNsb3NlIG1vZGFsXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBvbkNsb3NlKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAge2lzT3BlbiA/PyBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvIHotNTAgYmctZ3JheS0yMDAgYmctb3BhY2l0eS01MCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBiZy13aGl0ZSB3LTEvMiBteC1hdXRvIG15LTIwIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlVubG9jayBDb250ZW50PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57YFRoaXMgY29udGVudCBjb250YWlucyAke3NvdXJjZURhdGE/Lm51bWJlck9mV29yZHN9IHdvcmRzLiBUbyB1bmxvY2ssIHlvdSBuZWVkIHRvIHBheS5gfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XHJcbiAgICAgICAgICAgICAgbG9hZGluZyA/ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnJ1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHVyY2hhc2V9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICdQdXJjaGFzaW5nLi4uJyA6ICdQdXJjaGFzZSd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtNFwiPntlcnJvcn08L3A+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pn1cclxuIDwvPiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25Nb2RhbDtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJhY3QiLCJSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJIiwiQnJvd3NlclByb3ZpZGVyIiwidXNlV2ViM01vZGFsUHJvdmlkZXIiLCJUcmFuc2FjdGlvbk1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsInNvdXJjZURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhYmkiLCJ3YWxsZXRQcm92aWRlciIsImhhbmRsZVB1cmNoYXNlIiwiZXRoZXJzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsInByaWNlUGVyV29yZCIsImFtb3VudFRvUGF5IiwibnVtYmVyT2ZXb3JkcyIsImFjY2Vzc0RvY3VtZW50IiwiZG9jdW1lbnRIYXNoIiwidmFsdWUiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TransactionModal.tsx\n"));

/***/ })

});