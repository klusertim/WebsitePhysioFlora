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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InfoData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nconst fetcher = (args)=>fetch(args).then((res)=>res.json());\nfunction InfoData() {\n    _s();\n    // const {data as d, error as e} = useSWR(\"http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories\", fetcher)\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?_embed\", fetcher);\n    let germanPosts = null;\n    let frenchPosts = null;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, this);\n    else {\n        data.map((post)=>console.log(post._embedded.wp.term));\n        console.log(data);\n    // germanPosts = data.filter(post => post._embedded.wp)\n    }\n    return(// <TypographyStylesProvider>\n    // </TypographyStylesProvider>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/info/infoData.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n}\n_s(InfoData, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = InfoData;\nvar _c;\n$RefreshReg$(_c, \"InfoData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmZvL2luZm9EYXRhLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXdCO0FBSXhCLE1BQU1DLFVBQVUsQ0FBQ0MsT0FBaUJDLE1BQU1ELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBSXJELFNBQVNDLFdBQVc7O0lBQy9CLG9IQUFvSDtJQUV0SCxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdULCtDQUFNQSxDQUFDLG9FQUFvRUM7SUFDbkcsSUFBSVMsY0FBYyxJQUFJO0lBQ3RCLElBQUlDLGNBQWMsSUFBSTtJQUV0QixJQUFJRixPQUFPLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ0osTUFBTSxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztTQUNuQjtRQUNGSixLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsT0FBc0JDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csU0FBUyxDQUFDQyxFQUFFLENBQUNDLElBQUk7UUFDbEVKLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWix1REFBdUQ7SUFDekQsQ0FBQztJQUVELE9BQ0UsNkJBQTZCO0lBRTdCLDhCQUE4QjtrQkFDOUIsOERBQUNJOzs7OztBQUVMLENBQUM7R0FyQnVCTDs7UUFHRVAsMkNBQU1BOzs7S0FIUk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5mby9pbmZvRGF0YS50c3g/MzA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5cbmNvbnN0IGZldGNoZXIgPSAoYXJnczogc3RyaW5nKSA9PiBmZXRjaChhcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvRGF0YSgpIHtcbiAgICAvLyBjb25zdCB7ZGF0YSBhcyBkLCBlcnJvciBhcyBlfSA9IHVzZVNXUihcImh0dHA6Ly85ZDlnb200bS5seDI4Lmhvc3RzdGFyLndlYnNpdGUvd3AtanNvbi93cC92Mi9jYXRlZ29yaWVzXCIsIGZldGNoZXIpXG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCdodHRwOi8vOWQ5Z29tNG0ubHgyOC5ob3N0c3Rhci53ZWJzaXRlL3dwLWpzb24vd3AvdjIvcG9zdHM/X2VtYmVkJywgZmV0Y2hlcilcbiAgbGV0IGdlcm1hblBvc3RzID0gbnVsbFxuICBsZXQgZnJlbmNoUG9zdHMgPSBudWxsXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgZWxzZXtcbiAgICBkYXRhLm1hcCgocG9zdDogdHlwZW9mIGRhdGEpID0+IGNvbnNvbGUubG9nKHBvc3QuX2VtYmVkZGVkLndwLnRlcm0pKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgLy8gZ2VybWFuUG9zdHMgPSBkYXRhLmZpbHRlcihwb3N0ID0+IHBvc3QuX2VtYmVkZGVkLndwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8VHlwb2dyYXBoeVN0eWxlc1Byb3ZpZGVyPlxuICAgICAgICBcbiAgICAvLyA8L1R5cG9ncmFwaHlTdHlsZXNQcm92aWRlcj5cbiAgICA8ZGl2PjwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZm9EYXRhIiwiZGF0YSIsImVycm9yIiwiZ2VybWFuUG9zdHMiLCJmcmVuY2hQb3N0cyIsImRpdiIsIm1hcCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiX2VtYmVkZGVkIiwid3AiLCJ0ZXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/info/infoData.tsx\n"));

/***/ })

});