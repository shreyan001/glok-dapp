"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/upload/page",{

/***/ "(app-pages-browser)/./app/upload/page.tsx":
/*!*****************************!*\
  !*** ./app/upload/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadDocument; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/ethers/react */ \"(app-pages-browser)/./node_modules/@web3modal/ethers/dist/esm/exports/react.js\");\n/* harmony import */ var _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contract/ResearchDocumentMarketABI */ \"(app-pages-browser)/./contract/ResearchDocumentMarketABI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction UploadDocument() {\n    _s();\n    const [pricePerWord, setPricePerWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [totalWords, setTotalWords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"4000\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dataAdd, setDataAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0xc0ffee254729296a45a3885639AC7E10F9d54979\");\n    const { address, chainId, isConnected } = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_2__.useWeb3ModalAccount)();\n    const { walletProvider } = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_2__.useWeb3ModalProvider)();\n    const abi = _contract_ResearchDocumentMarketABI__WEBPACK_IMPORTED_MODULE_3__.ResearchDocumentMarketABI;\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const selectedFile = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (selectedFile) {\n            setFile(selectedFile);\n        }\n    };\n    const handleUploadSubmit = async ()=>{\n        const formData = new FormData();\n        formData.set(\"author_address\", address);\n        formData.set(\"pdfFile\", file);\n        formData.set(\"nft_address\", dataAdd);\n        formData.set(\"cost_per_word\", pricePerWord);\n        try {\n            const response = await fetch(\"/api/document_upload\", {\n                method: \"POST\",\n                body: formData\n            });\n            const data = await response.json(); // Parse the response as JSON\n            console.log(\"Content uploaded successfully:\", data);\n        // Clear the form or handle success state (optional)\n        } catch (error) {\n            console.error(\"Error uploading content:\", error);\n        }\n    };\n    const handleSubmit = async ()=>{\n        if (!file) {\n            console.error(\"No file selected\");\n            return;\n        }\n        const data = new FormData();\n        data.set(\"pdfFile\", file);\n        try {\n            const response = await fetch(\"/api/loader\", {\n                method: \"POST\",\n                body: data\n            });\n            if (response.ok) {\n                console.log(\"File uploaded successfully\");\n            } else {\n                console.error(\"File upload failed\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading file:\", error);\n        }\n    };\n    const handleUploadDocument = async ()=>{\n        try {\n            console.log(walletProvider);\n            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(walletProvider);\n            const signer = await ethersProvider.getSigner();\n            const contractAddress = \"0x4366808982cE144Ce1c6864ae40F4ED06ddA06f5\"; // Replace with your contract address\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, abi, signer);\n            const documentHash = \"0x6a2e531fd7a1e7a49c2a8a15655ff76b08504c7ef548cbb18c683589f21ec053\";\n            // await contract.uploadDocument(documentHash, parseInt(pricePerWord), parseInt(totalWords));\n            console.log(\"reached here\");\n            await handleSubmit();\n            await handleUploadSubmit();\n            alert(\"Document Registered successfully!\");\n            setPricePerWord(\"\");\n            setTotalWords(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(\"Error uploading document. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"file-input file-input-bordered w-full max-w-xs mt-10\",\n                    accept: \".pdf\",\n                    onChange: handleFileChange\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-xs flex flex-col gap-3 mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"input input-bordered\",\n                            type: \"number\",\n                            placeholder: \"Price Per Word\",\n                            value: pricePerWord,\n                            onChange: (e)=>setPricePerWord(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"input input-bordered\",\n                            type: \"number\",\n                            placeholder: \"Total Words\",\n                            value: totalWords,\n                            onChange: (e)=>setTotalWords(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary mt-5\",\n                    onClick: handleUploadDocument,\n                    children: \"Upload Document\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\glok\\\\app\\\\upload\\\\page.tsx\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_s(UploadDocument, \"EMA/lb0YZUZEixOCltZ3B4zd0kw=\", false, function() {\n    return [\n        _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_2__.useWeb3ModalAccount,\n        _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_2__.useWeb3ModalProvider\n    ];\n});\n_c = UploadDocument;\nvar _c;\n$RefreshReg$(_c, \"UploadDocument\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91cGxvYWQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNPO0FBQ3FCO0FBQ0Y7QUFFbEUsU0FBU007O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFFO0lBQ3hDLE1BQU0sRUFBRWUsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHYiw0RUFBbUJBO0lBQzdELE1BQU0sRUFBRWMsY0FBYyxFQUFFLEdBQUdmLDZFQUFvQkE7SUFDL0MsTUFBTWdCLE1BQU1kLDBGQUF5QkE7SUFJckMsTUFBTWUsbUJBQW1CLENBQUNDO1lBQ0hBO1FBQXJCLE1BQU1DLGdCQUFlRCxrQkFBQUEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLGNBQWRILHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDeEMsSUFBSUMsY0FBYztZQUNoQlYsUUFBUVU7UUFDVjtJQUNGO0lBR0EsTUFBTUcscUJBQXFCO1FBRXpCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLEdBQUcsQ0FBQyxrQkFBaUJiO1FBQzlCVyxTQUFTRSxHQUFHLENBQUMsV0FBV2pCO1FBQ3hCZSxTQUFTRSxHQUFHLENBQUMsZUFBZWY7UUFDNUJhLFNBQVNFLEdBQUcsQ0FBQyxpQkFBZ0JyQjtRQUc3QixJQUFJO1lBQ0YsTUFBTXNCLFdBQVcsTUFBTUMsTUFBTSx3QkFBd0I7Z0JBQ25EQyxRQUFRO2dCQUNSQyxNQUFNTjtZQUNSO1lBRUEsTUFBTU8sT0FBTyxNQUFNSixTQUFTSyxJQUFJLElBQUksNkJBQTZCO1lBQ2pFQyxRQUFRQyxHQUFHLENBQUMsa0NBQWtDSDtRQUM5QyxvREFBb0Q7UUFDdEQsRUFBRSxPQUFPSSxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFHQSxNQUFNQyxlQUFlO1FBRW5CLElBQUksQ0FBQzNCLE1BQU07WUFDVHdCLFFBQVFFLEtBQUssQ0FBQztZQUNkO1FBQ0Y7UUFFQSxNQUFNSixPQUFPLElBQUlOO1FBQ2pCTSxLQUFLTCxHQUFHLENBQUMsV0FBV2pCO1FBRXBCLElBQUk7WUFDRixNQUFNa0IsV0FBVyxNQUFNQyxNQUFNLGVBQWU7Z0JBQzFDQyxRQUFRO2dCQUNSQyxNQUFNQztZQUNSO1lBQ0EsSUFBSUosU0FBU1UsRUFBRSxFQUFFO2dCQUNmSixRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPO2dCQUNMRCxRQUFRRSxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDRjtJQUdBLE1BQU1HLHVCQUF1QjtRQUN6QixJQUFJO1lBQ0FMLFFBQVFDLEdBQUcsQ0FBQ2xCO1lBQ1osTUFBTXVCLGlCQUFpQixJQUFJeEMsbURBQWVBLENBQUNpQjtZQUMzQyxNQUFNd0IsU0FBUyxNQUFNRCxlQUFlRSxTQUFTO1lBQzdDLE1BQU1DLGtCQUFrQiw4Q0FBOEMscUNBQXFDO1lBQzNHLE1BQU1DLFdBQVcsSUFBSTNDLDRDQUFRQSxDQUFDMEMsaUJBQWlCekIsS0FBTXVCO1lBQ3JELE1BQU1JLGVBQWU7WUFDckIsNkZBQTZGO1lBQzdGWCxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNRTtZQUNOLE1BQU1iO1lBQ05zQixNQUFNO1lBQ052QyxnQkFBZ0I7WUFDaEJFLGNBQWM7UUFDbEIsRUFBRSxPQUFPMkIsT0FBTztZQUNaRixRQUFRRSxLQUFLLENBQUNBO1lBQ2RVLE1BQU07UUFDVjtJQUNKO0lBR0EscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0M7b0JBQU1DLE1BQUs7b0JBQU9GLFdBQVU7b0JBQXVERyxRQUFPO29CQUFPQyxVQUFVakM7Ozs7Ozs4QkFDNUcsOERBQUM0QjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFNRCxXQUFVOzRCQUF1QkUsTUFBSzs0QkFBU0csYUFBWTs0QkFBaUJDLE9BQU9oRDs0QkFBYzhDLFVBQVUsQ0FBQ2hDLElBQU1iLGdCQUFnQmEsRUFBRUUsTUFBTSxDQUFDZ0MsS0FBSzs7Ozs7O3NDQUN2Siw4REFBQ0w7NEJBQU1ELFdBQVU7NEJBQXVCRSxNQUFLOzRCQUFTRyxhQUFZOzRCQUFjQyxPQUFPOUM7NEJBQVk0QyxVQUFVLENBQUNoQyxJQUFNWCxjQUFjVyxFQUFFRSxNQUFNLENBQUNnQyxLQUFLOzs7Ozs7Ozs7Ozs7OEJBRXBKLDhEQUFDQztvQkFBT1AsV0FBVTtvQkFBdUJRLFNBQVNqQjs4QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBGO0dBdkd3QmxDOztRQUtzQkYsd0VBQW1CQTtRQUNsQ0QseUVBQW9CQTs7O0tBTjNCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXBsb2FkL3BhZ2UudHN4P2ZmOGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsQ2hhbmdlRXZlbnQsRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUHJvdmlkZXIsIENvbnRyYWN0LGZvcm1hdFVuaXRzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgeyB1c2VXZWIzTW9kYWxQcm92aWRlciwgdXNlV2ViM01vZGFsQWNjb3VudCB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJzL3JlYWN0J1xyXG5pbXBvcnQgeyBSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJIH0gZnJvbSAnQC9jb250cmFjdC9SZXNlYXJjaERvY3VtZW50TWFya2V0QUJJJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZERvY3VtZW50KCkge1xyXG4gICAgY29uc3QgW3ByaWNlUGVyV29yZCwgc2V0UHJpY2VQZXJXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b3RhbFdvcmRzLCBzZXRUb3RhbFdvcmRzXSA9IHVzZVN0YXRlKCc0MDAwJyk7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YUFkZCwgc2V0RGF0YUFkZF0gPSB1c2VTdGF0ZSAoJzB4YzBmZmVlMjU0NzI5Mjk2YTQ1YTM4ODU2MzlBQzdFMTBGOWQ1NDk3OScpO1xyXG4gICAgY29uc3QgeyBhZGRyZXNzLCBjaGFpbklkLCBpc0Nvbm5lY3RlZCB9ID0gdXNlV2ViM01vZGFsQWNjb3VudCgpXHJcbiAgICBjb25zdCB7IHdhbGxldFByb3ZpZGVyIH0gPSB1c2VXZWIzTW9kYWxQcm92aWRlcigpXHJcbiAgICBjb25zdCBhYmkgPSBSZXNlYXJjaERvY3VtZW50TWFya2V0QUJJO1xyXG5cclxuIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgaWYgKHNlbGVjdGVkRmlsZSkge1xyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZFN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyBcclxuICAgICAgZm9ybURhdGEuc2V0KCdhdXRob3JfYWRkcmVzcycsYWRkcmVzcyk7XHJcbiAgICAgIGZvcm1EYXRhLnNldCgncGRmRmlsZScsIGZpbGUpO1xyXG4gICAgICBmb3JtRGF0YS5zZXQoJ25mdF9hZGRyZXNzJywgZGF0YUFkZCk7IFxyXG4gICAgICBmb3JtRGF0YS5zZXQoJ2Nvc3RfcGVyX3dvcmQnLHByaWNlUGVyV29yZCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZG9jdW1lbnRfdXBsb2FkJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIFBhcnNlIHRoZSByZXNwb25zZSBhcyBKU09OXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5OicsIGRhdGEpO1xyXG4gICAgICAgIC8vIENsZWFyIHRoZSBmb3JtIG9yIGhhbmRsZSBzdWNjZXNzIHN0YXRlIChvcHRpb25hbClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgY29udGVudDonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICBcclxuICAgICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSBzZWxlY3RlZCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGRhdGEuc2V0KCdwZGZGaWxlJywgZmlsZSk7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2FkZXInLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmlsZSB1cGxvYWQgZmFpbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBmaWxlOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkRG9jdW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2FsbGV0UHJvdmlkZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IGV0aGVyc1Byb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3YWxsZXRQcm92aWRlcilcclxuICAgICAgICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZXRoZXJzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDQzNjY4MDg5ODJjRTE0NENlMWM2ODY0YWU0MEY0RUQwNmRkQTA2ZjUnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb250cmFjdCBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpICwgc2lnbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRIYXNoID0gXCIweDZhMmU1MzFmZDdhMWU3YTQ5YzJhOGExNTY1NWZmNzZiMDg1MDRjN2VmNTQ4Y2JiMThjNjgzNTg5ZjIxZWMwNTNcIjtcclxuICAgICAgICAgICAgLy8gYXdhaXQgY29udHJhY3QudXBsb2FkRG9jdW1lbnQoZG9jdW1lbnRIYXNoLCBwYXJzZUludChwcmljZVBlcldvcmQpLCBwYXJzZUludCh0b3RhbFdvcmRzKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhY2hlZCBoZXJlXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgYXdhaXQgaGFuZGxlVXBsb2FkU3VibWl0KCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEb2N1bWVudCBSZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgICAgc2V0UHJpY2VQZXJXb3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0VG90YWxXb3JkcygnJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvciB1cGxvYWRpbmcgZG9jdW1lbnQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJmaWxlLWlucHV0IGZpbGUtaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzIG10LTEwXCIgYWNjZXB0PVwiLnBkZlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14cyBmbGV4IGZsZXgtY29sIGdhcC0zIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZFwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlByaWNlIFBlciBXb3JkXCIgdmFsdWU9e3ByaWNlUGVyV29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZVBlcldvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVG90YWwgV29yZHNcIiB2YWx1ZT17dG90YWxXb3Jkc30gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3RhbFdvcmRzKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTVcIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWREb2N1bWVudH0+VXBsb2FkIERvY3VtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJyb3dzZXJQcm92aWRlciIsIkNvbnRyYWN0IiwidXNlV2ViM01vZGFsUHJvdmlkZXIiLCJ1c2VXZWIzTW9kYWxBY2NvdW50IiwiUmVzZWFyY2hEb2N1bWVudE1hcmtldEFCSSIsIlVwbG9hZERvY3VtZW50IiwicHJpY2VQZXJXb3JkIiwic2V0UHJpY2VQZXJXb3JkIiwidG90YWxXb3JkcyIsInNldFRvdGFsV29yZHMiLCJmaWxlIiwic2V0RmlsZSIsImRhdGFBZGQiLCJzZXREYXRhQWRkIiwiYWRkcmVzcyIsImNoYWluSWQiLCJpc0Nvbm5lY3RlZCIsIndhbGxldFByb3ZpZGVyIiwiYWJpIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJzZWxlY3RlZEZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVVwbG9hZFN1Ym1pdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlU3VibWl0Iiwib2siLCJoYW5kbGVVcGxvYWREb2N1bWVudCIsImV0aGVyc1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3QiLCJkb2N1bWVudEhhc2giLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/upload/page.tsx\n"));

/***/ })

});