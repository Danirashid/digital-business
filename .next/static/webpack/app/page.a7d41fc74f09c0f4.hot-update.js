"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/utils/Components/Navbar/Navbar.jsx":
/*!************************************************!*\
  !*** ./src/utils/Components/Navbar/Navbar.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ \"(app-pages-browser)/./src/utils/Components/Navbar/Navbar.css\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [mobileMenuOpened, setMobileMenuOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navStyle, setNavStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useMotionValueEvent)(scrollYProgress, \"change\", (latest)=>{\n        if (latest > 0.2) {\n            setNavStyle(\"sticky\");\n        } else {\n            setNavStyle(\"\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"n-wrapper \".concat(navStyle),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"n-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"n-left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Digital Business\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"n-right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"n-menu\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"wwd-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"What We Do\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"od-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"our difference\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"hiw-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"How it works\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"wwi-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Who we invest in\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"t-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            offset: 100,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Testimonials\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"fund-btn\",\n                                    children: \"Get Funded\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mn-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Digital Business\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    !mobileMenuOpened ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiMenuAltRight, {\n                        size: 30,\n                        onClick: ()=>setMobileMenuOpened(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_7__.RxCross2, {\n                        size: 30,\n                        onClick: ()=>setMobileMenuOpened(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mn-menu\",\n                        style: {\n                            transform: mobileMenuOpened && \"translateX(0%)\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"What we do\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"How it works\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Who we invest in\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Testimonials\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-funded\",\n                                children: \"Get Funded\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"lx/VFJw8IQaWo/6sCJ34rgNTde8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useMotionValueEvent\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9Db21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV3QztBQUNsQjtBQUMwQjtBQUNOO0FBQzZCO0FBQ25DO0FBRXBDLE1BQU1RLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxFQUFFWSxlQUFlLEVBQUUsR0FBR1Asd0RBQVNBO0lBQ3JDRCxrRUFBbUJBLENBQUNRLGlCQUFpQixVQUFVLENBQUNDO1FBQzlDLElBQUlBLFNBQVMsS0FBSztZQUNoQkYsWUFBWTtRQUNkLE9BQU87WUFDTEEsWUFBWTtRQUNkO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxhQUFzQixPQUFUTDs7MEJBRTNCLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7MENBQUs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDRjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1QsOENBQUlBOzRDQUFDVyxJQUFHOzRDQUFjQyxLQUFLOzRDQUFNQyxRQUFRO3NEQUN4Qyw0RUFBQ0g7MERBQUs7Ozs7Ozs7Ozs7O3NEQUVSLDhEQUFDViw4Q0FBSUE7NENBQUNXLElBQUc7NENBQWFDLEtBQUs7NENBQU1DLFFBQVE7c0RBQ3ZDLDRFQUFDSDswREFBSzs7Ozs7Ozs7Ozs7c0RBR1IsOERBQUNWLDhDQUFJQTs0Q0FBQ1csSUFBRzs0Q0FBY0MsS0FBSzs0Q0FBTUMsUUFBUTtzREFDeEMsNEVBQUNIOzBEQUFLOzs7Ozs7Ozs7OztzREFFUiw4REFBQ1YsOENBQUlBOzRDQUFDVyxJQUFHOzRDQUFjQyxLQUFLOzRDQUFNQyxRQUFRO3NEQUN4Qyw0RUFBQ0g7MERBQUs7Ozs7Ozs7Ozs7O3NEQUVSLDhEQUFDViw4Q0FBSUE7NENBQUNXLElBQUc7NENBQVlDLEtBQUs7NENBQU1DLFFBQVE7NENBQU1DLFFBQVE7c0RBQ3BELDRFQUFDSjswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR1YsOERBQUNGO29DQUFJQyxXQUFVOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLaEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0M7a0NBQUs7Ozs7OztvQkFHTCxDQUFDUixpQ0FDQSw4REFBQ1AsMERBQWNBO3dCQUFDb0IsTUFBTTt3QkFBSUMsU0FBUyxJQUFNYixvQkFBb0I7Ozs7O2tEQUU3RCw4REFBQ1Asb0RBQVFBO3dCQUFDbUIsTUFBTTt3QkFBSUMsU0FBUyxJQUFNYixvQkFBb0I7Ozs7OztrQ0FJekQsOERBQUNLO3dCQUNDQyxXQUFVO3dCQUNWUSxPQUFPOzRCQUFFQyxXQUFXaEIsb0JBQW9CO3dCQUFpQjs7MENBRXpELDhEQUFDUTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDRjtnQ0FBSUMsV0FBVTswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBdEVNUjs7UUFHd0JGLG9EQUFTQTtRQUNyQ0QsOERBQW1CQTs7O0tBSmZHO0FBd0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9Db21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4P2VlNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9OYXZiYXIuY3NzXCI7XHJcbmltcG9ydCB7IEJpTWVudUFsdFJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCB7IFJ4Q3Jvc3MyIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlTW90aW9uVmFsdWVFdmVudCwgdXNlU2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbW9iaWxlTWVudU9wZW5lZCwgc2V0TW9iaWxlTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25hdlN0eWxlLCBzZXROYXZTdHlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKCk7XHJcbiAgdXNlTW90aW9uVmFsdWVFdmVudChzY3JvbGxZUHJvZ3Jlc3MsIFwiY2hhbmdlXCIsIChsYXRlc3QpID0+IHtcclxuICAgIGlmIChsYXRlc3QgPiAwLjIpIHtcclxuICAgICAgc2V0TmF2U3R5bGUoXCJzdGlja3lcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROYXZTdHlsZShcIlwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BuLXdyYXBwZXIgJHtuYXZTdHlsZX1gfT5cclxuICAgICAgey8qIERlc2t0b3AgTmF2YmFyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1jb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiBsZWZ0IGdhbGxlcnkgc2VjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkRpZ2l0YWwgQnVzaW5lc3M8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiByaWdodCB0ZXh0IGFuZCBzdWJzY3JpYmUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cInd3ZC13cmFwcGVyXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+V2hhdCBXZSBEbzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCJvZC13cmFwcGVyXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+b3VyIGRpZmZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cImhpdy13cmFwcGVyXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+SG93IGl0IHdvcmtzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cInd3aS13cmFwcGVyXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+V2hvIHdlIGludmVzdCBpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCJ0LXdyYXBwZXJcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gb2Zmc2V0PXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VGVzdGltb25pYWxzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuZC1idG5cIj5HZXQgRnVuZGVkPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBNb2JpbGUgTmF2YmFyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiBsb2dvICovfVxyXG4gICAgICAgIDxzcGFuPkRpZ2l0YWwgQnVzaW5lc3M8L3NwYW4+XHJcblxyXG4gICAgICAgIHsvKiBoYW1idXJnZXIgbWVudSAqL31cclxuICAgICAgICB7IW1vYmlsZU1lbnVPcGVuZWQgPyAoXHJcbiAgICAgICAgICA8QmlNZW51QWx0UmlnaHQgc2l6ZT17MzB9IG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuZWQodHJ1ZSl9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxSeENyb3NzMiBzaXplPXszMH0gb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW5lZChmYWxzZSl9IC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1uLW1lbnVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBtb2JpbGVNZW51T3BlbmVkICYmIFwidHJhbnNsYXRlWCgwJSlcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPldoYXQgd2UgZG88L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Ib3cgaXQgd29ya3M8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5XaG8gd2UgaW52ZXN0IGluPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+VGVzdGltb25pYWxzPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWZ1bmRlZFwiPkdldCBGdW5kZWQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpTWVudUFsdFJpZ2h0IiwiUnhDcm9zczIiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlU2Nyb2xsIiwiTGluayIsIk5hdmJhciIsIm1vYmlsZU1lbnVPcGVuZWQiLCJzZXRNb2JpbGVNZW51T3BlbmVkIiwibmF2U3R5bGUiLCJzZXROYXZTdHlsZSIsInNjcm9sbFlQcm9ncmVzcyIsImxhdGVzdCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ0byIsInNweSIsInNtb290aCIsIm9mZnNldCIsInNpemUiLCJvbkNsaWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/Components/Navbar/Navbar.jsx\n"));

/***/ })

});