"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/doctor/login/page",{

/***/ "(app-pages-browser)/./app/doctor/login/page.tsx":
/*!***********************************!*\
  !*** ./app/doctor/login/page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DoctorLoginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout */ \"(app-pages-browser)/./components/layout.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DoctorLoginPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function onSubmit(e) {\n        e.preventDefault();\n        setIsLoading(true);\n        // Here you would handle the actual login\n        setTimeout(()=>{\n            router.push(\"/doctor/dashboard\");\n        }, 1000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-4 bg-gradient-to-b from-blue-100 to-blue-200\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                className: \"mx-auto w-full max-w-md bg-blue-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                    className: \"p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4 text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-semibold text-blue-800\",\n                                children: \"Doctor Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: onSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_7__.Label, {\n                                            htmlFor: \"email\",\n                                            className: \"text-blue-700\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                            id: \"email\",\n                                            type: \"email\",\n                                            placeholder: \"Enter your email\",\n                                            required: true,\n                                            disabled: isLoading,\n                                            className: \"border-blue-300 focus:border-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_7__.Label, {\n                                            htmlFor: \"password\",\n                                            className: \"text-blue-700\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                            id: \"password\",\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            required: true,\n                                            disabled: isLoading,\n                                            className: \"border-blue-300 focus:border-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-600 hover:bg-blue-700 text-white\",\n                                    disabled: isLoading,\n                                    children: isLoading ? \"Logging in...\" : \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Prajwal Gowda T\\\\Desktop\\\\front end\\\\heirchain (5)\\\\heirchain\\\\app\\\\doctor\\\\login\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(DoctorLoginPage, \"0X1krhOx79SeMQ1/PryH1Pxw4KA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DoctorLoginPage;\nvar _c;\n$RefreshReg$(_c, \"DoctorLoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kb2N0b3IvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ1c7QUFDQztBQUNHO0FBQ1M7QUFDWDtBQUNBO0FBRTlCLFNBQVNROztJQUN0QixNQUFNQyxTQUFTUiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLGVBQWVZLFNBQVNDLENBQW1DO1FBQ3pEQSxFQUFFQyxjQUFjO1FBQ2hCSCxhQUFhO1FBQ2IseUNBQXlDO1FBQ3pDSSxXQUFXO1lBQ1ROLE9BQU9PLElBQUksQ0FBQztRQUNkLEdBQUc7SUFDTDtJQUVBLHFCQUNFLDhEQUFDZCxzREFBTUE7a0JBQ0wsNEVBQUNlO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNkLHFEQUFJQTtnQkFBQ2MsV0FBVTswQkFDZCw0RUFBQ2IsNERBQVdBO29CQUFDYSxXQUFVOztzQ0FDckIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBR0QsV0FBVTswQ0FBdUM7Ozs7Ozs7Ozs7O3NDQUV2RCw4REFBQ0U7NEJBQUtSLFVBQVVBOzRCQUFVTSxXQUFVOzs4Q0FDbEMsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1gsdURBQUtBOzRDQUFDYyxTQUFROzRDQUFRSCxXQUFVO3NEQUFnQjs7Ozs7O3NEQUNqRCw4REFBQ1osdURBQUtBOzRDQUNKZ0IsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsYUFBWTs0Q0FDWkMsUUFBUTs0Q0FDUkMsVUFBVWhCOzRDQUNWUSxXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1gsdURBQUtBOzRDQUFDYyxTQUFROzRDQUFXSCxXQUFVO3NEQUFnQjs7Ozs7O3NEQUNwRCw4REFBQ1osdURBQUtBOzRDQUNKZ0IsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsYUFBWTs0Q0FDWkMsUUFBUTs0Q0FDUkMsVUFBVWhCOzRDQUNWUSxXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNmLHlEQUFNQTtvQ0FBQ29CLE1BQUs7b0NBQVNMLFdBQVU7b0NBQWtEUSxVQUFVaEI7OENBQ3pGQSxZQUFZLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9DO0dBckR3QkY7O1FBQ1BQLHNEQUFTQTs7O0tBREZPIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFByYWp3YWwgR293ZGEgVFxcRGVza3RvcFxcZnJvbnQgZW5kXFxoZWlyY2hhaW4gKDUpXFxoZWlyY2hhaW5cXGFwcFxcZG9jdG9yXFxsb2dpblxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiICBcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3RvckxvZ2luUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAvLyBIZXJlIHlvdSB3b3VsZCBoYW5kbGUgdGhlIGFjdHVhbCBsb2dpblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2RvY3Rvci9kYXNoYm9hcmRcIilcclxuICAgIH0sIDEwMDApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IG1pbi1oLVtjYWxjKDEwMHZoLThyZW0pXSBpdGVtcy1jZW50ZXIgcHgtNCBiZy1ncmFkaWVudC10by1iIGZyb20tYmx1ZS0xMDAgdG8tYmx1ZS0yMDBcIj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy1tZCBiZy1ibHVlLTUwXCI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtYmx1ZS04MDBcIj5Eb2N0b3IgTG9naW48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDBcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibHVlLTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDBcIj5QYXNzd29yZDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibHVlLTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZVwiIGRpc2FibGVkPXtpc0xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IFwiTG9nZ2luZyBpbi4uLlwiIDogXCJMb2dpblwifVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIklucHV0IiwiTGFiZWwiLCJEb2N0b3JMb2dpblBhZ2UiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaHRtbEZvciIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/doctor/login/page.tsx\n"));

/***/ })

});