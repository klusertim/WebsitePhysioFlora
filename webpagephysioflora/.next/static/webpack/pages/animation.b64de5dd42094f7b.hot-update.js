"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animation",{

/***/ "./src/pages/animation.tsx":
/*!*********************************!*\
  !*** ./src/pages/animation.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction Animation() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 10000\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"box\",\n                animate: {\n                    scale: [\n                        1,\n                        2,\n                        2,\n                        1,\n                        1\n                    ],\n                    rotate: [\n                        0,\n                        0,\n                        180,\n                        180,\n                        0\n                    ],\n                    borderRadius: [\n                        \"0%\",\n                        \"0%\",\n                        \"50%\",\n                        \"50%\",\n                        \"0%\"\n                    ]\n                },\n                transition: {\n                    duration: 2,\n                    ease: \"easeInOut\",\n                    times: [\n                        0,\n                        0.2,\n                        0.5,\n                        0.8,\n                        1\n                    ],\n                    repeatDelay: 1\n                },\n                style: {\n                    backgroundColor: \"red\"\n                },\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1DO0FBQ2M7QUFFbEMsU0FBU0UsWUFBVztJQUUvQixxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxRQUFRO1FBQUs7a0JBQzFCLDRFQUFDTCw4Q0FBR0E7c0JBQ0EsNEVBQUNDLHFEQUFVO2dCQUNmSyxXQUFVO2dCQUNWQyxTQUFTO29CQUNMQyxPQUFPO3dCQUFDO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3FCQUFFO29CQUN0QkMsUUFBUTt3QkFBQzt3QkFBRzt3QkFBRzt3QkFBSzt3QkFBSztxQkFBRTtvQkFDM0JDLGNBQWM7d0JBQUM7d0JBQU07d0JBQU07d0JBQU87d0JBQU87cUJBQUs7Z0JBQ2xEO2dCQUNBQyxZQUFZO29CQUNSQyxVQUFVO29CQUNWQyxNQUFNO29CQUNOQyxPQUFPO3dCQUFDO3dCQUFHO3dCQUFLO3dCQUFLO3dCQUFLO3FCQUFFO29CQUM1QkMsYUFBYTtnQkFDakI7Z0JBQUdYLE9BQU87b0JBQUNZLGlCQUFpQjtnQkFBSzswQkFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVCxDQUFDO0tBdkJ1QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuaW1hdGlvbi50c3g/NDQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uKCl7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDEwMDAwfX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZTogWzEsIDIsIDIsIDEsIDFdLFxuICAgICAgICAgICAgcm90YXRlOiBbMCwgMCwgMTgwLCAxODAsIDBdLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBbXCIwJVwiLCBcIjAlXCIsIFwiNTAlXCIsIFwiNTAlXCIsIFwiMCVcIl1cbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgdGltZXM6IFswLCAwLjIsIDAuNSwgMC44LCAxXSxcbiAgICAgICAgICAgIHJlcGVhdERlbGF5OiAxXG4gICAgICAgIH19IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJlZFwifX1cbiAgICAgICAgPkhlbGxvPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsiQm94IiwibW90aW9uIiwiQW5pbWF0aW9uIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJhbmltYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwidGltZXMiLCJyZXBlYXREZWxheSIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animation.tsx\n"));

/***/ })

});