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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Animation() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref\n    });\n    console.log(scrollYProgress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 10000,\n            display: \"flex\"\n        },\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                style: {\n                    backgroundColor: \"blue\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    className: \"box\",\n                    animate: {\n                        scale: [\n                            1,\n                            2,\n                            2,\n                            1,\n                            1\n                        ],\n                        rotate: [\n                            0,\n                            0,\n                            180,\n                            180,\n                            0\n                        ],\n                        borderRadius: [\n                            \"0%\",\n                            \"0%\",\n                            \"50%\",\n                            \"50%\",\n                            \"0%\"\n                        ]\n                    },\n                    transition: {\n                        duration: 2,\n                        ease: \"easeInOut\",\n                        times: [\n                            0,\n                            0.2,\n                            0.5,\n                            0.8,\n                            1\n                        ],\n                        repeatDelay: 1\n                    },\n                    style: {\n                        backgroundColor: \"red\"\n                    },\n                    children: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                style: {\n                    position: \"absolute\",\n                    top: 500,\n                    left: 500,\n                    backgroundColor: \"green\",\n                    scaleX: scrollYProgress\n                },\n                children: \"Hello2\"\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(Animation, \"u2weSeTti91IB/gkEb3kdMvK5B4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0o7QUFDa0I7QUFFbEMsU0FBU0ksWUFBVzs7SUFDL0IsTUFBTUMsTUFBTUosNkNBQU1BLENBQUMsSUFBSTtJQUN2QixNQUFNLEVBQUVLLGdCQUFlLEVBQUUsR0FBR0gsd0RBQVNBLENBQUM7UUFBRUksUUFBUUY7SUFBSTtJQUNwREcsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNJLDhEQUFDSTtRQUFJQyxPQUFPO1lBQUNDLFFBQVE7WUFBT0MsU0FBUztRQUFNO1FBQUdSLEtBQUtBOzswQkFDbkQsOERBQUNMLDhDQUFHQTtnQkFBQ1csT0FBTztvQkFBQ0csaUJBQWlCO2dCQUFNOzBCQUNoQyw0RUFBQ1oscURBQVU7b0JBQ2ZhLFdBQVU7b0JBQ1ZDLFNBQVM7d0JBQ0xDLE9BQU87NEJBQUM7NEJBQUc7NEJBQUc7NEJBQUc7NEJBQUc7eUJBQUU7d0JBQ3RCQyxRQUFROzRCQUFDOzRCQUFHOzRCQUFHOzRCQUFLOzRCQUFLO3lCQUFFO3dCQUMzQkMsY0FBYzs0QkFBQzs0QkFBTTs0QkFBTTs0QkFBTzs0QkFBTzt5QkFBSztvQkFDbEQ7b0JBQ0FDLFlBQVk7d0JBQ1JDLFVBQVU7d0JBQ1ZDLE1BQU07d0JBQ05DLE9BQU87NEJBQUM7NEJBQUc7NEJBQUs7NEJBQUs7NEJBQUs7eUJBQUU7d0JBQzVCQyxhQUFhO29CQUNqQjtvQkFBR2IsT0FBTzt3QkFBQ0csaUJBQWlCO29CQUFLOzhCQUNoQzs7Ozs7Ozs7Ozs7MEJBRUQsOERBQUNaLHFEQUFVO2dCQUFDUyxPQUFPO29CQUFDYyxVQUFTO29CQUFZQyxLQUFLO29CQUFLQyxNQUFNO29CQUFLYixpQkFBaUI7b0JBQVNjLFFBQVF0QjtnQkFBZTswQkFBRzs7Ozs7Ozs7Ozs7O0FBSTFILENBQUM7R0ExQnVCRjs7UUFFUUQsb0RBQVNBOzs7S0FGakJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hbmltYXRpb24udHN4PzQ0MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIlxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uKCl7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoeyB0YXJnZXQ6IHJlZiB9KTtcbiAgICBjb25zb2xlLmxvZyhzY3JvbGxZUHJvZ3Jlc3MpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAxMDAwMCwgZGlzcGxheTogXCJmbGV4XCJ9fSByZWY9e3JlZn0+XG4gICAgICAgIDxCb3ggc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifX0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZTogWzEsIDIsIDIsIDEsIDFdLFxuICAgICAgICAgICAgcm90YXRlOiBbMCwgMCwgMTgwLCAxODAsIDBdLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBbXCIwJVwiLCBcIjAlXCIsIFwiNTAlXCIsIFwiNTAlXCIsIFwiMCVcIl1cbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgdGltZXM6IFswLCAwLjIsIDAuNSwgMC44LCAxXSxcbiAgICAgICAgICAgIHJlcGVhdERlbGF5OiAxXG4gICAgICAgIH19IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJlZFwifX1cbiAgICAgICAgPkhlbGxvPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDogNTAwLCBsZWZ0OiA1MDAsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLCBzY2FsZVg6IHNjcm9sbFlQcm9ncmVzc319PkhlbGxvMjwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsiQm94IiwidXNlUmVmIiwibW90aW9uIiwidXNlU2Nyb2xsIiwiQW5pbWF0aW9uIiwicmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJzY2FsZSIsInJvdGF0ZSIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aW1lcyIsInJlcGVhdERlbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwic2NhbGVYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animation.tsx\n"));

/***/ })

});