"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/drawer.tsx":
/*!***********************************!*\
  !*** ./src/components/drawer.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DrawerMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/drawer.context */ \"./src/contexts/drawer.context.tsx\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.data */ \"./src/components/header/header.data.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.createStyles)((theme, _params, getRef)=>({\n        overlay: {\n            zIndex: 20\n        }\n    }));\nfunction DrawerMenu(param) {\n    let { ...others } = param;\n    _s();\n    // const [drawerOpen, setDrawerOpen] = useState(false);\n    const { drawerOpen , setDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_drawer_context__WEBPACK_IMPORTED_MODULE_1__.DrawerContext);\n    const { classes  } = useStyles();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...others,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Affix, {\n                position: {\n                    top: 20,\n                    right: 20\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Burger, {\n                    opened: drawerOpen,\n                    onClick: ()=>setDrawerOpen(true),\n                    children: \"Open Drawer\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {\n                zIndex: 2,\n                opened: drawerOpen || false,\n                onClose: ()=>setDrawerOpen(false),\n                padding: \"xs\",\n                size: \"100%\" //width\n                ,\n                withCloseButton: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    justify: \"center\",\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        _header_header_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                            let { path , label  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                weight: \"bolder\",\n                                children: label\n                            }, i, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(DrawerMenu, \"Buhh5JzEKfuAabs0esYuh/RFj5k=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = DrawerMenu;\nvar _c;\n$RefreshReg$(_c, \"DrawerMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQzhDO0FBQzNEO0FBQ0Q7QUFHNUMsTUFBTVUsWUFBWUosMkRBQVlBLENBQUMsQ0FBQ0ssT0FBT0MsU0FBU0MsU0FBWTtRQUN4REMsU0FBUTtZQUNKQyxRQUFRO1FBQ1o7SUFDSjtBQUVlLFNBQVNDLFdBQVcsS0FBVyxFQUFDO1FBQVosRUFBQyxHQUFHQyxRQUFPLEdBQVg7O0lBRS9CLHVEQUF1RDtJQUN2RCxNQUFNLEVBQUNDLFdBQVUsRUFBRUMsY0FBYSxFQUFDLEdBQUdYLGlEQUFVQSxDQUFDUixtRUFBYUE7SUFDNUQsTUFBTSxFQUFDb0IsUUFBTyxFQUFDLEdBQUdWO0lBR2xCLHFCQUNJLDhEQUFDVztRQUFLLEdBQUdKLE1BQU07OzBCQUVQLDhEQUFDVixnREFBS0E7Z0JBQUNlLFVBQVU7b0JBQUNDLEtBQUs7b0JBQUlDLE9BQU07Z0JBQUU7MEJBQy9CLDRFQUFDdkIsaURBQU1BO29CQUFDd0IsUUFBUVA7b0JBQWFRLFNBQVMsSUFBTVAsY0FBZSxJQUFJOzhCQUFJOzs7Ozs7Ozs7OzswQkFJM0UsOERBQUNqQixpREFBTUE7Z0JBQUNhLFFBQVE7Z0JBQ1pVLFFBQVFQLGNBQWMsS0FBSztnQkFDM0JTLFNBQVMsSUFBTVIsY0FBZSxLQUFLO2dCQUNuQ1MsU0FBUTtnQkFDUkMsTUFBTyxPQUFPLE9BQU87O2dCQUNyQkMsaUJBQWlCLEtBQUs7MEJBS3RCLDRFQUFDM0IsZ0RBQUtBO29CQUFDNEIsU0FBUTtvQkFBU0MsT0FBTTs7c0NBQzFCLDhEQUFDM0IsZ0RBQUtBO3NDQUFDOzs7Ozs7d0JBQ05JLCtEQUFhLENBQUMsUUFBZ0J5QixrQkFDM0I7Z0NBRFksRUFBQ0MsS0FBSSxFQUFFQyxNQUFLLEVBQUM7bUNBQ3pCLDhEQUFDaEMsK0NBQUlBO2dDQUFDaUMsUUFBTzswQ0FBa0JEOytCQUFKRjs7Ozs7d0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkUsQ0FBQztHQXBDdUJsQjs7UUFJRk47OztLQUpFTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4P2I5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL2RyYXdlci5jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXJnZXIsIERyYXdlciwgR3JvdXAsIFN0YWNrLCBUZXh0LCBUaXRsZSwgT3ZlcmxheSwgY3JlYXRlU3R5bGVzLCBBZmZpeCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci9oZWFkZXIuZGF0YSdcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lLCBfcGFyYW1zLCBnZXRSZWYpID0+ICh7XG4gICAgb3ZlcmxheTp7XG4gICAgICAgIHpJbmRleDogMjBcbiAgICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyTWVudSh7Li4ub3RoZXJzfSl7XG5cbiAgICAvLyBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qge2RyYXdlck9wZW4sIHNldERyYXdlck9wZW59ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSB1c2VTdHlsZXMoKTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICAgIHsvKiA8R3JvdXAgcG9zaXRpb249XCJyaWdodFwiIHA9XCJsZ1wiID4gKi99XG4gICAgICAgICAgICAgICAgPEFmZml4IHBvc2l0aW9uPXt7dG9wOiAyMCwgcmlnaHQ6MjB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1cmdlciBvcGVuZWQ9e2RyYXdlck9wZW4hfSBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuISh0cnVlKX0gPk9wZW4gRHJhd2VyPC9CdXJnZXI+XG4gICAgICAgICAgICAgICAgPC9BZmZpeD5cbiAgICAgICAgICAgICAgICB7LyogPC9Hcm91cD4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEcmF3ZXIgekluZGV4PXsyfVxuICAgICAgICAgICAgICAgIG9wZW5lZD17ZHJhd2VyT3BlbiB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXREcmF3ZXJPcGVuIShmYWxzZSkgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCJ4c1wiXG4gICAgICAgICAgICAgICAgc2l6ZSA9IFwiMTAwJVwiIC8vd2lkdGhcbiAgICAgICAgICAgICAgICB3aXRoQ2xvc2VCdXR0b249e2ZhbHNlfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uRHVyYXRpb249ezI1MH1cbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb249XCJlYXNlXCJcbiAgICAgICAgICAgICAgICAvLyBvdmVybGF5Qmx1cj17MX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RhY2sganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5NZW51PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHtwYXRoLCBsYWJlbH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHdlaWdodD1cImJvbGRlclwiIGtleT17aX0+e2xhYmVsfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbIkRyYXdlckNvbnRleHQiLCJCdXJnZXIiLCJEcmF3ZXIiLCJTdGFjayIsIlRleHQiLCJUaXRsZSIsImNyZWF0ZVN0eWxlcyIsIkFmZml4IiwidXNlQ29udGV4dCIsIm1lbnVJdGVtcyIsInVzZVN0eWxlcyIsInRoZW1lIiwiX3BhcmFtcyIsImdldFJlZiIsIm92ZXJsYXkiLCJ6SW5kZXgiLCJEcmF3ZXJNZW51Iiwib3RoZXJzIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJjbGFzc2VzIiwiZGl2IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm9wZW5lZCIsIm9uQ2xpY2siLCJvbkNsb3NlIiwicGFkZGluZyIsInNpemUiLCJ3aXRoQ2xvc2VCdXR0b24iLCJqdXN0aWZ5IiwiYWxpZ24iLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwid2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/drawer.tsx\n"));

/***/ })

});