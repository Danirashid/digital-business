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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ \"(app-pages-browser)/./src/utils/Components/Navbar/Navbar.css\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [mobileMenuOpened, setMobileMenuOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navStyle, setNavStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useMotionValueEvent)(scrollYProgress, \"change\", (latest)=>{\n        if (latest > 0.2) {\n            setNavStyle(\"sticky\");\n        } else {\n            setNavStyle(\"\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"n-wrapper \".concat(navStyle),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"n-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"n-left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Digital Business\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"n-right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"n-menu\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"wwd-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"What We Do\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"od-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"our difference\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"hiw-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"How it works\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"wwi-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Who we invest in\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                            to: \"t-wrapper\",\n                                            spy: true,\n                                            smooth: true,\n                                            offset: 100,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Testimonials\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"fund-btn\",\n                                    children: \"Get Funded\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mn-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Digital Business\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    !mobileMenuOpened ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiMenuAltRight, {\n                        size: 30,\n                        onClick: ()=>setMobileMenuOpened(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_7__.RxCross2, {\n                        size: 30,\n                        onClick: ()=>setMobileMenuOpened(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mn-menu\",\n                        style: {\n                            transform: mobileMenuOpened && \"translateX(0%)\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                onClick: ()=>setMobileMenuOpened(false),\n                                to: \"wwd-wrapper\",\n                                spy: true,\n                                smooth: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"What We Do\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                onClick: ()=>setMobileMenuOpened(false),\n                                to: \"od-wrapper\",\n                                spy: true,\n                                smooth: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"our difference\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                onClick: ()=>setMobileMenuOpened(false),\n                                to: \"hiw-wrapper\",\n                                spy: true,\n                                smooth: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"How it works\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                onClick: ()=>setMobileMenuOpened(false),\n                                to: \"wwi-wrapper\",\n                                spy: true,\n                                smooth: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Who we invest in\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                onClick: ()=>setMobileMenuOpened(false),\n                                to: \"t-wrapper\",\n                                spy: true,\n                                smooth: true,\n                                offset: 100,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Testimonials\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-funded\",\n                                children: \"Get Funded\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\MERN Stack\\\\Nextjs\\\\Digital-business\\\\src\\\\utils\\\\Components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"lx/VFJw8IQaWo/6sCJ34rgNTde8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useMotionValueEvent\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9Db21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV3QztBQUNsQjtBQUMwQjtBQUNOO0FBQzZCO0FBQ25DO0FBRXBDLE1BQU1RLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxFQUFFWSxlQUFlLEVBQUUsR0FBR1Asd0RBQVNBO0lBQ3JDRCxrRUFBbUJBLENBQUNRLGlCQUFpQixVQUFVLENBQUNDO1FBQzlDLElBQUlBLFNBQVMsS0FBSztZQUNoQkYsWUFBWTtRQUNkLE9BQU87WUFDTEEsWUFBWTtRQUNkO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxhQUFzQixPQUFUTDs7MEJBRTNCLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7MENBQUs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDRjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1QsOENBQUlBOzRDQUFDVyxJQUFHOzRDQUFjQyxLQUFLOzRDQUFNQyxRQUFRO3NEQUN4Qyw0RUFBQ0g7MERBQUs7Ozs7Ozs7Ozs7O3NEQUVSLDhEQUFDViw4Q0FBSUE7NENBQUNXLElBQUc7NENBQWFDLEtBQUs7NENBQU1DLFFBQVE7c0RBQ3ZDLDRFQUFDSDswREFBSzs7Ozs7Ozs7Ozs7c0RBR1IsOERBQUNWLDhDQUFJQTs0Q0FBQ1csSUFBRzs0Q0FBY0MsS0FBSzs0Q0FBTUMsUUFBUTtzREFDeEMsNEVBQUNIOzBEQUFLOzs7Ozs7Ozs7OztzREFFUiw4REFBQ1YsOENBQUlBOzRDQUFDVyxJQUFHOzRDQUFjQyxLQUFLOzRDQUFNQyxRQUFRO3NEQUN4Qyw0RUFBQ0g7MERBQUs7Ozs7Ozs7Ozs7O3NEQUVSLDhEQUFDViw4Q0FBSUE7NENBQUNXLElBQUc7NENBQVlDLEtBQUs7NENBQU1DLFFBQVE7NENBQU1DLFFBQVE7c0RBQ3BELDRFQUFDSjswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR1YsOERBQUNGO29DQUFJQyxXQUFVOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLaEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0M7a0NBQUs7Ozs7OztvQkFHTCxDQUFDUixpQ0FDQSw4REFBQ1AsMERBQWNBO3dCQUFDb0IsTUFBTTt3QkFBSUMsU0FBUyxJQUFNYixvQkFBb0I7Ozs7O2tEQUU3RCw4REFBQ1Asb0RBQVFBO3dCQUFDbUIsTUFBTTt3QkFBSUMsU0FBUyxJQUFNYixvQkFBb0I7Ozs7OztrQ0FJekQsOERBQUNLO3dCQUNDQyxXQUFVO3dCQUNWUSxPQUFPOzRCQUFFQyxXQUFXaEIsb0JBQW9CO3dCQUFpQjs7MENBRXpELDhEQUFDRiw4Q0FBSUE7Z0NBQ0hnQixTQUFTLElBQU1iLG9CQUFvQjtnQ0FDbkNRLElBQUc7Z0NBQ0hDLEtBQUs7Z0NBQ0xDLFFBQVE7MENBRVIsNEVBQUNIOzhDQUFLOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ1YsOENBQUlBO2dDQUNIZ0IsU0FBUyxJQUFNYixvQkFBb0I7Z0NBQ25DUSxJQUFHO2dDQUNIQyxLQUFLO2dDQUNMQyxRQUFROzBDQUVSLDRFQUFDSDs4Q0FBSzs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNWLDhDQUFJQTtnQ0FDSGdCLFNBQVMsSUFBTWIsb0JBQW9CO2dDQUNuQ1EsSUFBRztnQ0FDSEMsS0FBSztnQ0FDTEMsUUFBUTswQ0FFUiw0RUFBQ0g7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDViw4Q0FBSUE7Z0NBQ0hnQixTQUFTLElBQU1iLG9CQUFvQjtnQ0FDbkNRLElBQUc7Z0NBQ0hDLEtBQUs7Z0NBQ0xDLFFBQVE7MENBRVIsNEVBQUNIOzhDQUFLOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ1YsOENBQUlBO2dDQUNIZ0IsU0FBUyxJQUFNYixvQkFBb0I7Z0NBQ25DUSxJQUFHO2dDQUNIQyxLQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxRQUFROzBDQUVSLDRFQUFDSjs4Q0FBSzs7Ozs7Ozs7Ozs7MENBRVIsOERBQUNGO2dDQUFJQyxXQUFVOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEM7R0E1R01SOztRQUd3QkYsb0RBQVNBO1FBQ3JDRCw4REFBbUJBOzs7S0FKZkc7QUE4R04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/ZWU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL05hdmJhci5jc3NcIjtcclxuaW1wb3J0IHsgQmlNZW51QWx0UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHsgUnhDcm9zczIgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZUV2ZW50LCB1c2VTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2JpbGVNZW51T3BlbmVkLCBzZXRNb2JpbGVNZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbmF2U3R5bGUsIHNldE5hdlN0eWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcclxuICB1c2VNb3Rpb25WYWx1ZUV2ZW50KHNjcm9sbFlQcm9ncmVzcywgXCJjaGFuZ2VcIiwgKGxhdGVzdCkgPT4ge1xyXG4gICAgaWYgKGxhdGVzdCA+IDAuMikge1xyXG4gICAgICBzZXROYXZTdHlsZShcInN0aWNreVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5hdlN0eWxlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG4td3JhcHBlciAke25hdlN0eWxlfWB9PlxyXG4gICAgICB7LyogRGVza3RvcCBOYXZiYXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgey8qIGxlZnQgZ2FsbGVyeSBzZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWxlZnRcIj5cclxuICAgICAgICAgICAgPHNwYW4+RGlnaXRhbCBCdXNpbmVzczwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHJpZ2h0IHRleHQgYW5kIHN1YnNjcmliZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwid3dkLXdyYXBwZXJcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5XaGF0IFdlIERvPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIm9kLXdyYXBwZXJcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vdXIgZGlmZmVyZW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiaGl3LXdyYXBwZXJcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ib3cgaXQgd29ya3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwid3dpLXdyYXBwZXJcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5XaG8gd2UgaW52ZXN0IGluPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cInQtd3JhcHBlclwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UZXN0aW1vbmlhbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5kLWJ0blwiPkdldCBGdW5kZWQ8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIE1vYmlsZSBOYXZiYXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIGxvZ28gKi99XHJcbiAgICAgICAgPHNwYW4+RGlnaXRhbCBCdXNpbmVzczwvc3Bhbj5cclxuXHJcbiAgICAgICAgey8qIGhhbWJ1cmdlciBtZW51ICovfVxyXG4gICAgICAgIHshbW9iaWxlTWVudU9wZW5lZCA/IChcclxuICAgICAgICAgIDxCaU1lbnVBbHRSaWdodCBzaXplPXszMH0gb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW5lZCh0cnVlKX0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFJ4Q3Jvc3MyIHNpemU9ezMwfSBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbmVkKGZhbHNlKX0gLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW4tbWVudVwiXHJcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IG1vYmlsZU1lbnVPcGVuZWQgJiYgXCJ0cmFuc2xhdGVYKDAlKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW5lZChmYWxzZSl9XHJcbiAgICAgICAgICAgIHRvPVwid3dkLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+V2hhdCBXZSBEbzwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICB0bz1cIm9kLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+b3VyIGRpZmZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW5lZChmYWxzZSl9XHJcbiAgICAgICAgICAgIHRvPVwiaGl3LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+SG93IGl0IHdvcmtzPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW5lZChmYWxzZSl9XHJcbiAgICAgICAgICAgIHRvPVwid3dpLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+V2hvIHdlIGludmVzdCBpbjwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICB0bz1cInQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ezEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+VGVzdGltb25pYWxzPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWZ1bmRlZFwiPkdldCBGdW5kZWQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpTWVudUFsdFJpZ2h0IiwiUnhDcm9zczIiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlU2Nyb2xsIiwiTGluayIsIk5hdmJhciIsIm1vYmlsZU1lbnVPcGVuZWQiLCJzZXRNb2JpbGVNZW51T3BlbmVkIiwibmF2U3R5bGUiLCJzZXROYXZTdHlsZSIsInNjcm9sbFlQcm9ncmVzcyIsImxhdGVzdCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ0byIsInNweSIsInNtb290aCIsIm9mZnNldCIsInNpemUiLCJvbkNsaWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/Components/Navbar/Navbar.jsx\n"));

/***/ })

});