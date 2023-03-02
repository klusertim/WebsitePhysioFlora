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

/***/ "./src/components/welcome.tsx":
/*!************************************!*\
  !*** ./src/components/welcome.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layeredWaves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layeredWaves */ \"./src/components/layeredWaves.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.createStyles)((theme)=>({\n        colorText: {\n            color: theme.colors.pink\n        },\n        containerBorder: {\n            // border: \"solid\",\n            // borderColor: theme.colors.cyan,\n            maxHeight: \"100vh\"\n        },\n        button: {\n            backgroundColor: theme.colors.pink\n        }\n    }));\nfunction WelcomePage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                align: \"center\",\n                pl: \"10%\",\n                mt: \"15vh\",\n                pr: 0,\n                pos: \"absolute\",\n                top: 0,\n                left: 0,\n                grow: true,\n                noWrap: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                    transition: \"fade\",\n                    mounted: opened,\n                    onEnter: ()=>setOpened(true),\n                    duration: 4000,\n                    children: (styles)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            style: styles,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                                    justify: \"flex-start\",\n                                    align: \"flex-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                            align: \"left\",\n                                            maw: \"500px\",\n                                            size: 40,\n                                            children: \"Physiotherapie Ihres Vertrauens in Biel\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            align: \"left\",\n                                            size: \"xl\",\n                                            maw: \"500px\",\n                                            children: [\n                                                \"Ob \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                    span: true,\n                                                    weight: \"bold\",\n                                                    className: classes.colorText,\n                                                    children: \"Sportverletzung\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 69\n                                                }, this),\n                                                \", \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                    span: true,\n                                                    weight: \"bold\",\n                                                    className: classes.colorText,\n                                                    children: \"Hexenschuss\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 148\n                                                }, this),\n                                                \" oder andere Beschwerden\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            align: \"left\",\n                                            size: \"lg\",\n                                            maw: \"500px\",\n                                            children: \"Unser Team hilft Ihnen gerne, wieder topfit zu werden.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Space, {\n                                            h: \"3vh\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                            w: \"100%\",\n                                            justify: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                className: classes.button,\n                                                variant: \"filled\",\n                                                opacity: 0.9,\n                                                children: \"Kontaktieren Sie uns jetzt\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                    align: \"center\",\n                                    justify: \"center\",\n                                    mb: \"lg\",\n                                    ml: \"5vw\",\n                                    mr: 10,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                        src: \"undrawDancingPeople.svg\",\n                                        alt: \"dancing people\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 30\n                        }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                lineNumber: 53,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                h: \"100vh\",\n                w: \"100vw\",\n                m: 0,\n                p: 0,\n                align: \"flex-end\",\n                className: classes.containerBorder,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layeredWaves__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    offsetY: 0,\n                    rotation: 0\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(WelcomePage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = WelcomePage;\nvar _c;\n$RefreshReg$(_c, \"WelcomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUM5RCwrQ0FBSUE7Z0JBQUNzRCxHQUFFO2dCQUFRQyxHQUFFO2dCQUFRUSxHQUFHO2dCQUFHQyxHQUFHO2dCQUFHL0IsT0FBTTtnQkFBV29CLFdBQVdsQyxRQUFRTCxlQUFlOzBCQUdyRiw0RUFBQ1AscURBQVlBO29CQUFDMEQsU0FBUztvQkFBR0MsVUFBVTs7Ozs7Ozs7Ozs7OztBQUtoRCxDQUFDO0dBM0R1QmhEOztRQUVGVjs7O0tBRkVVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4P2JiODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFRpdGxlLCBHcm91cCwgVGV4dCwgSW1hZ2UsIENvbnRhaW5lciwgY3JlYXRlU3R5bGVzLCBTcGFjZSwgRmxleCwgQnV0dG9uLCBUcmFuc2l0aW9uLCBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXllcmVkV2F2ZXMgZnJvbSBcIi4vbGF5ZXJlZFdhdmVzXCJcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGNvbG9yVGV4dDp7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluayxcbiAgICB9LFxuICAgIGNvbnRhaW5lckJvcmRlcjoge1xuICAgICAgICAvLyBib3JkZXI6IFwic29saWRcIixcbiAgICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5jeWFuLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwdmhcIlxuICAgIH0sXG4gICAgYnV0dG9uOntcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucGlua1xuICAgIH1cbiAgfSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lUGFnZSgpe1xuXG4gICAgY29uc3Qge2NsYXNzZXN9ID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldE9wZW5lZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogJy0yMDBweCcsXG4gICAgICAgIHRocmVzaG9sZDogMSAvLyBJbnRlcnNlY3Rpb24gcmF0aW8gdGhyZXNob2xkIGZvciB0cmlnZ2VyaW5nIGFjdGlvblxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW3JlZl0pO1xuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgICA8R3JvdXAgYWxpZ249XCJjZW50ZXJcIiBwbD0gXCIxMCVcIiBtdD1cIjE1dmhcIiBwcj17MH0gcG9zPVwiYWJzb2x1dGVcIiB0b3A9ezB9IGxlZnQ9ezB9IGdyb3cgbm9XcmFwID5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uIHRyYW5zaXRpb249XCJmYWRlXCIgbW91bnRlZD17b3BlbmVkfSBvbkVudGVyPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9IGR1cmF0aW9uPXs0MDAwfT5cbiAgICAgICAgICAgICAgICB7KHN0eWxlcykgPT4gPEJveCBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGUgYWxpZ249XCJsZWZ0XCIgbWF3PVwiNTAwcHhcIiBzaXplPXs0MH0+UGh5c2lvdGhlcmFwaWUgSWhyZXMgVmVydHJhdWVucyBpbiBCaWVsPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPVwibGVmdFwiIHNpemU9XCJ4bFwiIG1hdz1cIjUwMHB4XCI+T2IgPFRleHQgc3BhbiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbG9yVGV4dH0+U3BvcnR2ZXJsZXR6dW5nPC9UZXh0PiwgPFRleHQgc3BhbiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbG9yVGV4dH0+SGV4ZW5zY2h1c3M8L1RleHQ+IG9kZXIgYW5kZXJlIEJlc2Nod2VyZGVuPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYWxpZ249XCJsZWZ0XCIgc2l6ZT1cImxnXCIgbWF3PVwiNTAwcHhcIj5VbnNlciBUZWFtIGhpbGZ0IElobmVuIGdlcm5lLCB3aWVkZXIgdG9wZml0IHp1IHdlcmRlbi48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgaD1cIjN2aFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PVwiZmlsbGVkXCIgIG9wYWNpdHk9ezAuOX0gPktvbnRha3RpZXJlbiBTaWUgdW5zIGpldHp0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIG1iPVwibGdcIiBtbD1cIjV2d1wiIG1yPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwidW5kcmF3RGFuY2luZ1Blb3BsZS5zdmdcIiBhbHQ9XCJkYW5jaW5nIHBlb3BsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0JveD59XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxGbGV4IGg9XCIxMDB2aFwiIHc9XCIxMDB2d1wiIG09ezB9IHA9ezB9IGFsaWduPVwiZmxleC1lbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyQm9yZGVyfSA+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgey8qIDxTcGFjZS8+ICovfVxuICAgICAgICAgICAgPExheWVyZWRXYXZlcyBvZmZzZXRZPXswfSByb3RhdGlvbj17MH0gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJTdGFjayIsIlRpdGxlIiwiR3JvdXAiLCJUZXh0IiwiSW1hZ2UiLCJjcmVhdGVTdHlsZXMiLCJTcGFjZSIsIkZsZXgiLCJCdXR0b24iLCJUcmFuc2l0aW9uIiwiQm94IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXllcmVkV2F2ZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImNvbG9yVGV4dCIsImNvbG9yIiwiY29sb3JzIiwicGluayIsImNvbnRhaW5lckJvcmRlciIsIm1heEhlaWdodCIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsIldlbGNvbWVQYWdlIiwiY2xhc3NlcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJhbGlnbiIsInBsIiwibXQiLCJwciIsInBvcyIsInRvcCIsImxlZnQiLCJncm93Iiwibm9XcmFwIiwidHJhbnNpdGlvbiIsIm1vdW50ZWQiLCJvbkVudGVyIiwiZHVyYXRpb24iLCJzdHlsZXMiLCJzdHlsZSIsImp1c3RpZnkiLCJtYXciLCJzaXplIiwic3BhbiIsIndlaWdodCIsImNsYXNzTmFtZSIsImgiLCJ3IiwidmFyaWFudCIsIm9wYWNpdHkiLCJtYiIsIm1sIiwibXIiLCJzcmMiLCJhbHQiLCJtIiwicCIsIm9mZnNldFkiLCJyb3RhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/welcome.tsx\n"));

/***/ })

});