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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DrawerMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/drawer.context */ \"./src/contexts/drawer.context.tsx\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.data */ \"./src/components/header/header.data.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DrawerMenu(param) {\n    let { ...others } = param;\n    _s();\n    // const [drawerOpen, setDrawerOpen] = useState(false);\n    const { drawerOpen , setDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_drawer_context__WEBPACK_IMPORTED_MODULE_1__.DrawerContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...others,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {\n                opened: drawerOpen || false,\n                onClose: ()=>setDrawerOpen(false),\n                padding: \"xs\",\n                size: \"100%\" //width\n                ,\n                withCloseButton: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    justify: \"center\",\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        _header_header_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                            let { path , label  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                weight: \"bolder\",\n                                children: label\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Overlay, {\n                zIndex: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                    position: \"right\",\n                    p: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Burger, {\n                        opened: drawerOpen,\n                        onClick: ()=>setDrawerOpen(true),\n                        children: \"Open Drawer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(DrawerMenu, \"GVZ964dqS6a9NxZwp7QXRrHR8aQ=\");\n_c = DrawerMenu;\nvar _c;\n$RefreshReg$(_c, \"DrawerMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQ3lCO0FBQ3RDO0FBQ0Q7QUFFN0IsU0FBU1UsV0FBVyxLQUFXLEVBQUM7UUFBWixFQUFDLEdBQUdDLFFBQU8sR0FBWDs7SUFFL0IsdURBQXVEO0lBQ3ZELE1BQU0sRUFBQ0MsV0FBVSxFQUFFQyxjQUFhLEVBQUMsR0FBR0wsaURBQVVBLENBQUNSLG1FQUFhQTtJQUU1RCxxQkFDSSw4REFBQ2M7UUFBSyxHQUFHSCxNQUFNOzswQkFDWCw4REFBQ1QsaURBQU1BO2dCQUNIYSxRQUFRSCxjQUFjLEtBQUs7Z0JBQzNCSSxTQUFTLElBQU1ILGNBQWUsS0FBSztnQkFDbkNJLFNBQVE7Z0JBQ1JDLE1BQU8sT0FBTyxPQUFPOztnQkFDckJDLGlCQUFpQixLQUFLOzBCQUt0Qiw0RUFBQ2YsZ0RBQUtBO29CQUFDZ0IsU0FBUTtvQkFBU0MsT0FBTTs7c0NBQzFCLDhEQUFDZixnREFBS0E7c0NBQUM7Ozs7Ozt3QkFDTkcsK0RBQWEsQ0FBQyxRQUFnQmMsa0JBQzNCO2dDQURZLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFDO21DQUN6Qiw4REFBQ3BCLCtDQUFJQTtnQ0FBQ3FCLFFBQU87MENBQVVEOzs7Ozs7d0JBQVk7Ozs7Ozs7Ozs7OzswQkFLL0MsOERBQUNsQixrREFBT0E7Z0JBQUNvQixRQUFROzBCQUNiLDRFQUFDeEIsZ0RBQUtBO29CQUFDeUIsVUFBUztvQkFBUUMsR0FBRTs4QkFDdEIsNEVBQUM1QixpREFBTUE7d0JBQUNjLFFBQVFIO3dCQUFha0IsU0FBUyxJQUFNakIsY0FBZSxJQUFJO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGLENBQUM7R0FqQ3VCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4P2I5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL2RyYXdlci5jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXJnZXIsIERyYXdlciwgR3JvdXAsIFN0YWNrLCBUZXh0LCBUaXRsZSwgT3ZlcmxheSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci9oZWFkZXIuZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyTWVudSh7Li4ub3RoZXJzfSl7XG5cbiAgICAvLyBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qge2RyYXdlck9wZW4sIHNldERyYXdlck9wZW59ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiB7Li4ub3RoZXJzfT5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICBvcGVuZWQ9e2RyYXdlck9wZW4gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RHJhd2VyT3BlbiEoZmFsc2UpIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwieHNcIlxuICAgICAgICAgICAgICAgIHNpemUgPSBcIjEwMCVcIiAvL3dpZHRoXG4gICAgICAgICAgICAgICAgd2l0aENsb3NlQnV0dG9uPXtmYWxzZX0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbkR1cmF0aW9uPXsyNTB9XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uPVwiZWFzZVwiXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmxheUJsdXI9ezF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+TWVudTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7cGF0aCwgbGFiZWx9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9XCJib2xkZXJcIj57bGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgPE92ZXJsYXkgekluZGV4PXsxMDB9PlxuICAgICAgICAgICAgICAgIDxHcm91cCBwb3NpdGlvbj1cInJpZ2h0XCIgcD1cImxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXJnZXIgb3BlbmVkPXtkcmF3ZXJPcGVuIX0gb25DbGljaz17KCkgPT4gc2V0RHJhd2VyT3BlbiEodHJ1ZSl9ID5PcGVuIERyYXdlcjwvQnVyZ2VyPlxuICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSJdLCJuYW1lcyI6WyJEcmF3ZXJDb250ZXh0IiwiQnVyZ2VyIiwiRHJhd2VyIiwiR3JvdXAiLCJTdGFjayIsIlRleHQiLCJUaXRsZSIsIk92ZXJsYXkiLCJ1c2VDb250ZXh0IiwibWVudUl0ZW1zIiwiRHJhd2VyTWVudSIsIm90aGVycyIsImRyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwiZGl2Iiwib3BlbmVkIiwib25DbG9zZSIsInBhZGRpbmciLCJzaXplIiwid2l0aENsb3NlQnV0dG9uIiwianVzdGlmeSIsImFsaWduIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsIndlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/drawer.tsx\n"));

/***/ })

});