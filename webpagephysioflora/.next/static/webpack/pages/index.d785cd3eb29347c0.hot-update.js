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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OfferPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _offer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer.data */ \"./src/components/offer/offer.data.tsx\");\n/* harmony import */ var _floraTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../floraTitle */ \"./src/components/floraTitle.tsx\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _offerElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offerElement */ \"./src/components/offer/offerElement.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_6__.createStyles)((theme)=>({}));\nfunction OfferPage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Element, {\n        name: \"offer\",\n        marginHeight: -1000,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            h: \"100vh\",\n            w: \"100vw\",\n            m: 0,\n            justify: \"flex-start\",\n            direction: \"column\",\n            p: 0,\n            pt: \"xl\",\n            mt: -0.257,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Transition, {\n                    transition: \"fade\",\n                    mounted: opened,\n                    onEnter: ()=>setOpened(true),\n                    duration: 2000,\n                    children: (styles)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_floraTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].title,\n                                    speech: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speech\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                    ml: \"10vw\",\n                                    mt: \"5vh\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Grid.Col, {\n                                        span: 4,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_offerElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 31\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(OfferPage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = OfferPage;\nvar _c;\n$RefreshReg$(_c, \"OfferPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZlci9vZmZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpRjtBQUM3QjtBQUVmO0FBQ0U7QUFDRjtBQUNLO0FBRzFDLE1BQU1ZLFlBQVlaLDJEQUFZQSxDQUFDLENBQUNhLFFBQVcsRUFFekM7QUFFYSxTQUFTQyxZQUFXOztJQUUvQixNQUFNLEVBQUNDLFFBQU8sRUFBQyxHQUFHSDtJQUNsQixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNVyxNQUFNWiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXpCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWMsV0FBVyxJQUFJQyxxQkFDbkIsU0FBYTtnQkFBWixDQUFDQyxNQUFNO1lBQ04sSUFBSUEsTUFBTUMsY0FBYyxFQUFFO2dCQUN4QkwsVUFBVSxJQUFJO1lBQ2hCLENBQUM7UUFDSCxHQUNBO1lBQ0VNLE1BQU0sSUFBSTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVcsRUFBRSxxREFBcUQ7UUFDcEU7UUFHRixJQUFJUCxJQUFJUSxPQUFPLEVBQUU7WUFDZlAsU0FBU1EsT0FBTyxDQUFDVCxJQUFJUSxPQUFPO1FBQzlCLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWFAsU0FBU1MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSTtJQUVOLHFCQUNJLDhEQUFDUixpREFBT0E7UUFBQ21CLE1BQUs7UUFBUUMsY0FBYyxDQUFDO2tCQUNqQyw0RUFBQzdCLCtDQUFJQTtZQUFDOEIsR0FBRTtZQUFRQyxHQUFFO1lBQVFDLEdBQUc7WUFBR0MsU0FBUTtZQUFhQyxXQUFVO1lBQVNDLEdBQUc7WUFBR0MsSUFBRztZQUFLQyxJQUFJLENBQUM7c0JBQ3ZGLDRFQUFDbkMsOENBQUdBO2dCQUFDZSxLQUFLQTswQkFDTiw0RUFBQ2hCLHFEQUFVQTtvQkFBQ3FDLFlBQVc7b0JBQU9DLFNBQVN4QjtvQkFBUXlCLFNBQVMsSUFBTXhCLFVBQVUsSUFBSTtvQkFBR3lCLFVBQVU7OEJBQ3BGLENBQUNDLHVCQUVBOzs4Q0FDRSw4REFBQ2xDLG1EQUFVQTtvQ0FBQ21DLE9BQU9wQyx5REFBZTtvQ0FBRXFDLFFBQVFyQywwREFBZ0I7Ozs7Ozs4Q0FDNUQsOERBQUNKLCtDQUFJQTtvQ0FBQzBDLElBQUc7b0NBQU9SLElBQUc7OENBQ2pCLDRFQUFDbEMsbURBQVE7d0NBQUM0QyxNQUFNO2tEQUNkLDRFQUFDckMscURBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdDLENBQUM7R0FwRHVCRzs7UUFFRkY7OztLQUZFRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vZmZlci9vZmZlci50c3g/ODk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIEZsZXgsIFRpdGxlLCBUcmFuc2l0aW9uLCBCb3gsIEdyaWQgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5ZXJlZFdhdmVzIGZyb20gXCIuLi9sYXllcmVkV2F2ZXNcIlxuaW1wb3J0IG9mZmVyRGF0YSBmcm9tIFwiLi9vZmZlci5kYXRhXCI7XG5pbXBvcnQgRmxvcmFUaXRsZSBmcm9tIFwiLi4vZmxvcmFUaXRsZVwiO1xuaW1wb3J0IHtFbGVtZW50fSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IE9mZmVyRWxlbWVudCBmcm9tIFwiLi9vZmZlckVsZW1lbnRcIjtcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgXG4gIH0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2ZmZXJQYWdlKCl7XG5cbiAgICBjb25zdCB7Y2xhc3Nlc30gPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgc2V0T3BlbmVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiAnLTIwMHB4JyxcbiAgICAgICAgdGhyZXNob2xkOiAxIC8vIEludGVyc2VjdGlvbiByYXRpbyB0aHJlc2hvbGQgZm9yIHRyaWdnZXJpbmcgYWN0aW9uXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbcmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RWxlbWVudCBuYW1lPVwib2ZmZXJcIiBtYXJnaW5IZWlnaHQ9ey0xMDAwfT5cbiAgICAgICAgICAgIDxGbGV4IGg9XCIxMDB2aFwiIHc9XCIxMDB2d1wiIG09ezB9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgZGlyZWN0aW9uPVwiY29sdW1uXCIgcD17MH0gcHQ9XCJ4bFwiIG10PXstMC4yNTd9ID5cbiAgICAgICAgICAgICAgICA8Qm94IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24gdHJhbnNpdGlvbj1cImZhZGVcIiBtb3VudGVkPXtvcGVuZWR9IG9uRW50ZXI9eygpID0+IHNldE9wZW5lZCh0cnVlKX0gZHVyYXRpb249ezIwMDB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoc3R5bGVzKSA9PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9yYVRpdGxlIHRpdGxlPXtvZmZlckRhdGEudGl0bGV9IHNwZWVjaD17b2ZmZXJEYXRhLnNwZWVjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBtbD1cIjEwdndcIiBtdD1cIjV2aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXJFbGVtZW50Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgey8qIDxMYXllcmVkV2F2ZXMgb2Zmc2V0WT17MH0gcm90YXRpb249ezE4MH0vPiAqL31cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9FbGVtZW50PlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwiRmxleCIsIlRyYW5zaXRpb24iLCJCb3giLCJHcmlkIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJvZmZlckRhdGEiLCJGbG9yYVRpdGxlIiwiRWxlbWVudCIsIk9mZmVyRWxlbWVudCIsInVzZVN0eWxlcyIsInRoZW1lIiwiT2ZmZXJQYWdlIiwiY2xhc3NlcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJuYW1lIiwibWFyZ2luSGVpZ2h0IiwiaCIsInciLCJtIiwianVzdGlmeSIsImRpcmVjdGlvbiIsInAiLCJwdCIsIm10IiwidHJhbnNpdGlvbiIsIm1vdW50ZWQiLCJvbkVudGVyIiwiZHVyYXRpb24iLCJzdHlsZXMiLCJ0aXRsZSIsInNwZWVjaCIsIm1sIiwiQ29sIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/offer/offer.tsx\n"));

/***/ })

});