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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OfferPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _offer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer.data */ \"./src/components/offer/offer.data.tsx\");\n/* harmony import */ var _floraTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../floraTitle */ \"./src/components/floraTitle.tsx\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _offerElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offerElement */ \"./src/components/offer/offerElement.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_6__.createStyles)((theme)=>({}));\nfunction OfferPage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Element, {\n        name: \"offer\",\n        marginHeight: -1000,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100vw\",\n            m: 0,\n            justify: \"flex-start\",\n            direction: \"column\",\n            p: 0,\n            pt: \"xl\",\n            mt: -0.257,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_floraTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].title,\n                            speech: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speech\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            m: \"10vw\",\n                            mt: \"5vh\",\n                            gutter: \"lg\",\n                            justify: \"center\",\n                            align: \"center\",\n                            children: _offer_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].offerArr.map((param, i)=>/*#__PURE__*/ {\n                                let { title , description  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Grid.Col, {\n                                    span: 12,\n                                    xs: 12,\n                                    sm: 6,\n                                    lg: 6,\n                                    xl: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_offerElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        title: title,\n                                        description: description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 37\n                                    }, this)\n                                }, i, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 33\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer/offer.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(OfferPage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = OfferPage;\nvar _c;\n$RefreshReg$(_c, \"OfferPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZlci9vZmZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpRjtBQUM3QjtBQUVmO0FBQ0U7QUFDRjtBQUNLO0FBRzFDLE1BQU1XLFlBQVlYLDJEQUFZQSxDQUFDLENBQUNZLFFBQVcsRUFFekM7QUFFYSxTQUFTQyxZQUFXOztJQUUvQixNQUFNLEVBQUNDLFFBQU8sRUFBQyxHQUFHSDtJQUNsQixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNVyxNQUFNWiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXpCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWMsV0FBVyxJQUFJQyxxQkFDbkIsU0FBYTtnQkFBWixDQUFDQyxNQUFNO1lBQ04sSUFBSUEsTUFBTUMsY0FBYyxFQUFFO2dCQUN4QkwsVUFBVSxJQUFJO1lBQ2hCLENBQUM7UUFDSCxHQUNBO1lBQ0VNLE1BQU0sSUFBSTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVcsRUFBRSxxREFBcUQ7UUFDcEU7UUFHRixJQUFJUCxJQUFJUSxPQUFPLEVBQUU7WUFDZlAsU0FBU1EsT0FBTyxDQUFDVCxJQUFJUSxPQUFPO1FBQzlCLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWFAsU0FBU1MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSTtJQUVOLHFCQUNJLDhEQUFDUixpREFBT0E7UUFBQ21CLE1BQUs7UUFBUUMsY0FBYyxDQUFDO2tCQUNqQyw0RUFBQzVCLCtDQUFJQTtZQUFDNkIsR0FBRTtZQUFRQyxHQUFHO1lBQUdDLFNBQVE7WUFBYUMsV0FBVTtZQUFTQyxHQUFHO1lBQUdDLElBQUc7WUFBS0MsSUFBSSxDQUFDO3NCQUM3RSw0RUFBQ2xDLDhDQUFHQTtnQkFBQ2UsS0FBS0E7MEJBQ0E7O3NDQUNFLDhEQUFDVCxtREFBVUE7NEJBQUM2QixPQUFPOUIseURBQWU7NEJBQUUrQixRQUFRL0IsMERBQWdCOzs7Ozs7c0NBQzVELDhEQUFDSiwrQ0FBSUE7NEJBQUM0QixHQUFFOzRCQUFPSyxJQUFHOzRCQUFNRyxRQUFPOzRCQUFLUCxTQUFROzRCQUFTUSxPQUFNO3NDQUN0RGpDLGdFQUFzQixDQUFDLFFBQXVCb0Msa0JBQy9DO29DQUR5QixFQUFDTixNQUFLLEVBQUVPLFlBQVcsRUFBQzt1Q0FDN0MsOERBQUN6QyxtREFBUTtvQ0FBRTJDLE1BQU07b0NBQUlDLElBQUk7b0NBQUlDLElBQUk7b0NBQUdDLElBQUk7b0NBQUdDLElBQUk7OENBQzNDLDRFQUFDeEMscURBQVlBO3dDQUFDMkIsT0FBT0E7d0NBQU9PLGFBQWFBOzs7Ozs7bUNBRFVEOzs7Ozs0QkFFN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFDLENBQUM7R0FsRHVCOUI7O1FBRUZGOzs7S0FGRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXIvb2ZmZXIudHN4Pzg5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBGbGV4LCBUaXRsZSwgVHJhbnNpdGlvbiwgQm94LCBHcmlkIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheWVyZWRXYXZlcyBmcm9tIFwiLi4vbGF5ZXJlZFdhdmVzXCJcbmltcG9ydCBvZmZlckRhdGEgZnJvbSBcIi4vb2ZmZXIuZGF0YVwiO1xuaW1wb3J0IEZsb3JhVGl0bGUgZnJvbSBcIi4uL2Zsb3JhVGl0bGVcIjtcbmltcG9ydCB7RWxlbWVudH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBPZmZlckVsZW1lbnQgZnJvbSBcIi4vb2ZmZXJFbGVtZW50XCI7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgIFxuICB9KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9mZmVyUGFnZSgpe1xuXG4gICAgY29uc3Qge2NsYXNzZXN9ID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldE9wZW5lZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogJy0yMDBweCcsXG4gICAgICAgIHRocmVzaG9sZDogMSAvLyBJbnRlcnNlY3Rpb24gcmF0aW8gdGhyZXNob2xkIGZvciB0cmlnZ2VyaW5nIGFjdGlvblxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW3JlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVsZW1lbnQgbmFtZT1cIm9mZmVyXCIgbWFyZ2luSGVpZ2h0PXstMTAwMH0+XG4gICAgICAgICAgICA8RmxleCB3PVwiMTAwdndcIiBtPXswfSBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIHA9ezB9IHB0PVwieGxcIiBtdD17LTAuMjU3fSA+XG4gICAgICAgICAgICAgICAgPEJveCByZWY9e3JlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb3JhVGl0bGUgdGl0bGU9e29mZmVyRGF0YS50aXRsZX0gc3BlZWNoPXtvZmZlckRhdGEuc3BlZWNofSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG09XCIxMHZ3XCIgbXQ9XCI1dmhcIiBndXR0ZXI9XCJsZ1wiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2ZmZXJEYXRhLm9mZmVyQXJyLm1hcCgoe3RpdGxlLCBkZXNjcmlwdGlvbn0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sICBzcGFuPXsxMn0geHM9ezEyfSBzbT17Nn0gbGc9ezZ9IHhsPXs0fSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmVyRWxlbWVudCB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHsvKiA8TGF5ZXJlZFdhdmVzIG9mZnNldFk9ezB9IHJvdGF0aW9uPXsxODB9Lz4gKi99XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRWxlbWVudD5cbiAgICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIkZsZXgiLCJCb3giLCJHcmlkIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJvZmZlckRhdGEiLCJGbG9yYVRpdGxlIiwiRWxlbWVudCIsIk9mZmVyRWxlbWVudCIsInVzZVN0eWxlcyIsInRoZW1lIiwiT2ZmZXJQYWdlIiwiY2xhc3NlcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJuYW1lIiwibWFyZ2luSGVpZ2h0IiwidyIsIm0iLCJqdXN0aWZ5IiwiZGlyZWN0aW9uIiwicCIsInB0IiwibXQiLCJ0aXRsZSIsInNwZWVjaCIsImd1dHRlciIsImFsaWduIiwib2ZmZXJBcnIiLCJtYXAiLCJpIiwiZGVzY3JpcHRpb24iLCJDb2wiLCJzcGFuIiwieHMiLCJzbSIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/offer/offer.tsx\n"));

/***/ })

});