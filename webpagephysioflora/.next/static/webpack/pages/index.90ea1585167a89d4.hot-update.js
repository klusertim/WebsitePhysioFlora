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

/***/ "./src/components/info/infoData.tsx":
/*!******************************************!*\
  !*** ./src/components/info/infoData.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InfoData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst fetcher = (args)=>fetch(args).then((res)=>res.json());\nfunction InfoData() {\n    _s();\n    // const {data as d, error as e} = useSWR(\"http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories\", fetcher)\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?_embed\", fetcher);\n    let germanPosts = null;\n    let frenchPosts = null;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, this);\n    else {\n        data.map((post)=>console.log(post._embedded[\"wp:term\"][\"0\"][\"0\"][\"name\"]));\n        console.log(data);\n        germanPosts = data.filter((post)=>post._embedded[\"wp:term\"][\"0\"][\"0\"][\"name\"] == \"german\");\n        frenchPosts = data.filter((post)=>post._embedded[\"wp:term\"][\"0\"][\"0\"][\"name\"] == \"french\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.TypographyStylesProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            dangerouslySetInnerHTML: {\n                __html: germanPosts[0].excerpt.rendered\n            }\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(InfoData, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = InfoData;\nvar _c;\n$RefreshReg$(_c, \"InfoData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmZvL2luZm9EYXRhLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QjtBQUNpQztBQUd6RCxNQUFNRSxVQUFVLENBQUNDLE9BQWlCQyxNQUFNRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUlyRCxTQUFTQyxXQUFXOztJQUMvQixvSEFBb0g7SUFFdEgsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHViwrQ0FBTUEsQ0FBQyxvRUFBb0VFO0lBQ25HLElBQUlTLGNBQWMsSUFBSTtJQUN0QixJQUFJQyxjQUFjLElBQUk7SUFFdEIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNKLE1BQU0scUJBQU8sOERBQUNJO2tCQUFJOzs7Ozs7U0FDbkI7UUFDRkosS0FBS0ssR0FBRyxDQUFDLENBQUNDLE9BQXNCQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3ZGRixRQUFRQyxHQUFHLENBQUNSO1FBQ1pFLGNBQWNGLEtBQUtVLE1BQU0sQ0FBQyxDQUFDSixPQUFxQkEsS0FBS0csU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSTtRQUMvRk4sY0FBY0gsS0FBS1UsTUFBTSxDQUFDLENBQUNKLE9BQXFCQSxLQUFLRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJO0lBRWpHLENBQUM7SUFFRCxxQkFDRSw4REFBQ2pCLG1FQUF3QkE7a0JBQ3JCLDRFQUFDWTtZQUFJTyx5QkFBeUI7Z0JBQUVDLFFBQVFWLFdBQVcsQ0FBQyxFQUFFLENBQUNXLE9BQU8sQ0FBQ0MsUUFBUTtZQUFDOzs7Ozs7Ozs7OztBQUdoRixDQUFDO0dBdEJ1QmY7O1FBR0VSLDJDQUFNQTs7O0tBSFJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luZm8vaW5mb0RhdGEudHN4PzMwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuXG5jb25zdCBmZXRjaGVyID0gKGFyZ3M6IHN0cmluZykgPT4gZmV0Y2goYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0RhdGEoKSB7XG4gICAgLy8gY29uc3Qge2RhdGEgYXMgZCwgZXJyb3IgYXMgZX0gPSB1c2VTV1IoXCJodHRwOi8vOWQ5Z29tNG0ubHgyOC5ob3N0c3Rhci53ZWJzaXRlL3dwLWpzb24vd3AvdjIvY2F0ZWdvcmllc1wiLCBmZXRjaGVyKVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignaHR0cDovLzlkOWdvbTRtLmx4MjguaG9zdHN0YXIud2Vic2l0ZS93cC1qc29uL3dwL3YyL3Bvc3RzP19lbWJlZCcsIGZldGNoZXIpXG4gIGxldCBnZXJtYW5Qb3N0cyA9IG51bGxcbiAgbGV0IGZyZW5jaFBvc3RzID0gbnVsbFxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIGVsc2V7XG4gICAgZGF0YS5tYXAoKHBvc3Q6IHR5cGVvZiBkYXRhKSA9PiBjb25zb2xlLmxvZyhwb3N0Ll9lbWJlZGRlZFtcIndwOnRlcm1cIl1bXCIwXCJdW1wiMFwiXVtcIm5hbWVcIl0pKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgZ2VybWFuUG9zdHMgPSBkYXRhLmZpbHRlcigocG9zdDp0eXBlb2YgZGF0YSkgPT4gcG9zdC5fZW1iZWRkZWRbXCJ3cDp0ZXJtXCJdW1wiMFwiXVtcIjBcIl1bXCJuYW1lXCJdID09IFwiZ2VybWFuXCIpXG4gICAgZnJlbmNoUG9zdHMgPSBkYXRhLmZpbHRlcigocG9zdDp0eXBlb2YgZGF0YSkgPT4gcG9zdC5fZW1iZWRkZWRbXCJ3cDp0ZXJtXCJdW1wiMFwiXVtcIjBcIl1bXCJuYW1lXCJdID09IFwiZnJlbmNoXCIpXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHlTdHlsZXNQcm92aWRlcj5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGdlcm1hblBvc3RzWzBdLmV4Y2VycHQucmVuZGVyZWQgfX0vPlxuICAgIDwvVHlwb2dyYXBoeVN0eWxlc1Byb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIlR5cG9ncmFwaHlTdHlsZXNQcm92aWRlciIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZm9EYXRhIiwiZGF0YSIsImVycm9yIiwiZ2VybWFuUG9zdHMiLCJmcmVuY2hQb3N0cyIsImRpdiIsIm1hcCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiX2VtYmVkZGVkIiwiZmlsdGVyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJleGNlcnB0IiwicmVuZGVyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/info/infoData.tsx\n"));

/***/ })

});