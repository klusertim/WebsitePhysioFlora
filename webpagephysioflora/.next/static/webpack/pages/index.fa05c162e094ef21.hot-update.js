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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DrawerMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction DrawerMenu() {\n    _s();\n    const [drawerOpen, setDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n                opened: drawerOpen,\n                onClose: ()=>setDrawerOpen(false),\n                padding: \"xs\",\n                size: \"100%\" //width\n                ,\n                // transitionDuration={250}\n                // transitionTimingFunction=\"ease\"\n                overlayBlur: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                position: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Burger, {\n                    onClick: ()=>setDrawerOpen(true),\n                    color: \"cyan\",\n                    children: \"Open Drawer\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/drawer.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DrawerMenu, \"i0pHI9YMbVyneVc1gk5xK0P2xMQ=\");\n_c = DrawerMenu;\nvar _c;\n$RefreshReg$(_c, \"DrawerMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFzRDtBQUNyQjtBQUVsQixTQUFTSSxhQUFZOztJQUVoQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxxQkFDSTs7MEJBQ0ksOERBQUNGLGlEQUFNQTtnQkFDSE0sUUFBUUY7Z0JBQ1JHLFNBQVMsSUFBTUYsY0FBYyxLQUFLO2dCQUNsQ0csU0FBUTtnQkFDUkMsTUFBTyxPQUFPLE9BQU87O2dCQUNyQiwyQkFBMkI7Z0JBQzNCLGtDQUFrQztnQkFDbENDLGFBQWE7MEJBRWIsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ1YsZ0RBQUtBO2dCQUFDVyxVQUFTOzBCQUNaLDRFQUFDYixpREFBTUE7b0JBQUNjLFNBQVMsSUFBTVIsY0FBYyxJQUFJO29CQUFHUyxPQUFPOzhCQUFPOzs7Ozs7Ozs7Ozs7O0FBSzFFLENBQUM7R0F2QnVCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHN4P2I5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVyZ2VyLCBEcmF3ZXIsIEdyb3VwIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdlck1lbnUoKXtcblxuICAgIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICBvcGVuZWQ9e2RyYXdlck9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgcGFkZGluZz1cInhzXCJcbiAgICAgICAgICAgICAgICBzaXplID0gXCIxMDAlXCIgLy93aWR0aFxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb25EdXJhdGlvbj17MjUwfVxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbj1cImVhc2VcIlxuICAgICAgICAgICAgICAgIG92ZXJsYXlCbHVyPXsxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIDxHcm91cCBwb3NpdGlvbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCdXJnZXIgb25DbGljaz17KCkgPT4gc2V0RHJhd2VyT3Blbih0cnVlKX0gY29sb3IgPVwiY3lhblwiPk9wZW4gRHJhd2VyPC9CdXJnZXI+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsiQnVyZ2VyIiwiRHJhd2VyIiwiR3JvdXAiLCJ1c2VTdGF0ZSIsIkRyYXdlck1lbnUiLCJkcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsIm9wZW5lZCIsIm9uQ2xvc2UiLCJwYWRkaW5nIiwic2l6ZSIsIm92ZXJsYXlCbHVyIiwiaDEiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/drawer.tsx\n"));

/***/ })

});