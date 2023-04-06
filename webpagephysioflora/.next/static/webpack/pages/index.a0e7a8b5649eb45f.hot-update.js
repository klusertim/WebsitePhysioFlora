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

/***/ "./src/components/offer/offer.tsx":
/*!****************************************!*\
  !*** ./src/components/offer/offer.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OfferPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _offer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer.data */ \"./src/components/offer/offer.data.tsx\");\n/* harmony import */ var _floraTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../floraTitle */ \"./src/components/floraTitle.tsx\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)((theme)=>({}));\nfunction OfferPage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Element, {\n        name: \"offer\",\n        marginHeight: -1000,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            h: \"100vh\",\n            w: \"100vw\",\n            m: 0,\n            justify: \"flex-start\",\n            direction: \"column\",\n            p: 0,\n            pt: \"xl\",\n            mt: -0.257,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                    transition: \"fade\",\n                    mounted: opened,\n                    onEnter: ()=>setOpened(true),\n                    duration: 2000,\n                    children: (styles)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_floraTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].title,\n                                    speech: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speech\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Grid.Col, {\n                                        span: 3\n                                    }, void 0, false, {\n                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 31\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(OfferPage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = OfferPage;\nvar _c;\n$RefreshReg$(_c, \"OfferPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZlci9vZmZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlGO0FBQzdCO0FBRWY7QUFDRTtBQUNGO0FBR3JDLE1BQU1XLFlBQVlYLDJEQUFZQSxDQUFDLENBQUNZLFFBQVcsRUFFekM7QUFFYSxTQUFTQyxZQUFXOztJQUUvQixNQUFNLEVBQUNDLFFBQU8sRUFBQyxHQUFHSDtJQUNsQixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNVSxNQUFNWCw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXpCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWEsV0FBVyxJQUFJQyxxQkFDbkIsU0FBYTtnQkFBWixDQUFDQyxNQUFNO1lBQ04sSUFBSUEsTUFBTUMsY0FBYyxFQUFFO2dCQUN4QkwsVUFBVSxJQUFJO1lBQ2hCLENBQUM7UUFDSCxHQUNBO1lBQ0VNLE1BQU0sSUFBSTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVcsRUFBRSxxREFBcUQ7UUFDcEU7UUFHRixJQUFJUCxJQUFJUSxPQUFPLEVBQUU7WUFDZlAsU0FBU1EsT0FBTyxDQUFDVCxJQUFJUSxPQUFPO1FBQzlCLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWFAsU0FBU1MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSTtJQUVOLHFCQUNJLDhEQUFDUCxpREFBT0E7UUFBQ2tCLE1BQUs7UUFBUUMsY0FBYyxDQUFDO2tCQUNqQyw0RUFBQzVCLCtDQUFJQTtZQUFDNkIsR0FBRTtZQUFRQyxHQUFFO1lBQVFDLEdBQUc7WUFBR0MsU0FBUTtZQUFhQyxXQUFVO1lBQVNDLEdBQUc7WUFBR0MsSUFBRztZQUFLQyxJQUFJLENBQUM7c0JBQ3ZGLDRFQUFDbEMsOENBQUdBO2dCQUFDYyxLQUFLQTswQkFDTiw0RUFBQ2YscURBQVVBO29CQUFDb0MsWUFBVztvQkFBT0MsU0FBU3hCO29CQUFReUIsU0FBUyxJQUFNeEIsVUFBVSxJQUFJO29CQUFHeUIsVUFBVTs4QkFDcEYsQ0FBQ0MsdUJBRUE7OzhDQUNFLDhEQUFDakMsbURBQVVBO29DQUFDa0MsT0FBT25DLHlEQUFlO29DQUFFb0MsUUFBUXBDLDBEQUFnQjs7Ozs7OzhDQUM1RCw4REFBQ0osK0NBQUlBOzhDQUNILDRFQUFDQSxtREFBUTt3Q0FBQzBDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5QyxDQUFDO0dBbER1QmpDOztRQUVGRjs7O0tBRkVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29mZmVyL29mZmVyLnRzeD84OTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgRmxleCwgVGl0bGUsIFRyYW5zaXRpb24sIEJveCwgR3JpZCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXllcmVkV2F2ZXMgZnJvbSBcIi4uL2xheWVyZWRXYXZlc1wiXG5pbXBvcnQgb2ZmZXJEYXRhIGZyb20gXCIuL29mZmVyLmRhdGFcIjtcbmltcG9ydCBGbG9yYVRpdGxlIGZyb20gXCIuLi9mbG9yYVRpdGxlXCI7XG5pbXBvcnQge0VsZW1lbnR9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgIFxuICB9KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9mZmVyUGFnZSgpe1xuXG4gICAgY29uc3Qge2NsYXNzZXN9ID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldE9wZW5lZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogJy0yMDBweCcsXG4gICAgICAgIHRocmVzaG9sZDogMSAvLyBJbnRlcnNlY3Rpb24gcmF0aW8gdGhyZXNob2xkIGZvciB0cmlnZ2VyaW5nIGFjdGlvblxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW3JlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVsZW1lbnQgbmFtZT1cIm9mZmVyXCIgbWFyZ2luSGVpZ2h0PXstMTAwMH0+XG4gICAgICAgICAgICA8RmxleCBoPVwiMTAwdmhcIiB3PVwiMTAwdndcIiBtPXswfSBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIHA9ezB9IHB0PVwieGxcIiBtdD17LTAuMjU3fSA+XG4gICAgICAgICAgICAgICAgPEJveCByZWY9e3JlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIHRyYW5zaXRpb249XCJmYWRlXCIgbW91bnRlZD17b3BlbmVkfSBvbkVudGVyPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9IGR1cmF0aW9uPXsyMDAwfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHN0eWxlcykgPT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvcmFUaXRsZSB0aXRsZT17b2ZmZXJEYXRhLnRpdGxlfSBzcGVlY2g9e29mZmVyRGF0YS5zcGVlY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17M30+PC9HcmlkLkNvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICB7LyogPExheWVyZWRXYXZlcyBvZmZzZXRZPXswfSByb3RhdGlvbj17MTgwfS8+ICovfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0VsZW1lbnQ+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZXMiLCJGbGV4IiwiVHJhbnNpdGlvbiIsIkJveCIsIkdyaWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9mZmVyRGF0YSIsIkZsb3JhVGl0bGUiLCJFbGVtZW50IiwidXNlU3R5bGVzIiwidGhlbWUiLCJPZmZlclBhZ2UiLCJjbGFzc2VzIiwib3BlbmVkIiwic2V0T3BlbmVkIiwicmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImN1cnJlbnQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm5hbWUiLCJtYXJnaW5IZWlnaHQiLCJoIiwidyIsIm0iLCJqdXN0aWZ5IiwiZGlyZWN0aW9uIiwicCIsInB0IiwibXQiLCJ0cmFuc2l0aW9uIiwibW91bnRlZCIsIm9uRW50ZXIiLCJkdXJhdGlvbiIsInN0eWxlcyIsInRpdGxlIiwic3BlZWNoIiwiQ29sIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/offer/offer.tsx\n"));

/***/ })

});