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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layeredWaves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layeredWaves */ \"./src/components/layeredWaves.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.createStyles)((theme)=>({\n        colorText: {\n            color: theme.colors.pink\n        },\n        containerBorder: {\n            // border: \"solid\",\n            // borderColor: theme.colors.cyan,\n            maxHeight: \"100vh\"\n        },\n        button: {\n            backgroundColor: theme.colors.pink\n        }\n    }));\nfunction WelcomePage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                align: \"center\",\n                pl: \"10%\",\n                mt: \"15vh\",\n                pr: 0,\n                pos: \"absolute\",\n                top: 0,\n                left: 0,\n                grow: true,\n                noWrap: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                            justify: \"flex-start\",\n                            align: \"flex-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                    align: \"left\",\n                                    maw: \"500px\",\n                                    size: 40,\n                                    children: \"Physiotherapie Ihres Vertrauens in Biel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    align: \"left\",\n                                    size: \"xl\",\n                                    maw: \"500px\",\n                                    children: [\n                                        \"Ob \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            span: true,\n                                            weight: \"bold\",\n                                            className: classes.colorText,\n                                            children: \"Sportverletzung\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 65\n                                        }, this),\n                                        \", \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            span: true,\n                                            weight: \"bold\",\n                                            className: classes.colorText,\n                                            children: \"Hexenschuss\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 144\n                                        }, this),\n                                        \" oder andere Beschwerden\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    align: \"left\",\n                                    size: \"lg\",\n                                    maw: \"500px\",\n                                    children: \"Unser Team hilft Ihnen gerne, wieder topfit zu werden.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Space, {\n                                    h: \"3vh\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                    w: \"100%\",\n                                    justify: \"center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        className: classes.button,\n                                        variant: \"filled\",\n                                        opacity: 0.9,\n                                        children: \"Kontaktieren Sie uns jetzt\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                            align: \"center\",\n                            justify: \"center\",\n                            mb: \"lg\",\n                            ml: \"5vw\",\n                            mr: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                src: \"undrawDancingPeople.svg\",\n                                alt: \"dancing people\"\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                lineNumber: 53,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                h: \"100vh\",\n                w: \"100vw\",\n                m: 0,\n                p: 0,\n                align: \"flex-end\",\n                className: classes.containerBorder,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layeredWaves__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    offsetY: 0,\n                    rotation: 0\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/welcome.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(WelcomePage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = WelcomePage;\nvar _c;\n$RefreshReg$(_c, \"WelcomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRTCxlQUFlOzBCQUdyRiw0RUFBQ1AscURBQVlBO29CQUFDb0QsU0FBUztvQkFBR0MsVUFBVTs7Ozs7Ozs7Ozs7OztBQUtoRCxDQUFDO0dBekR1QjFDOztRQUVGVjs7O0tBRkVVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4P2JiODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFRpdGxlLCBHcm91cCwgVGV4dCwgSW1hZ2UsIENvbnRhaW5lciwgY3JlYXRlU3R5bGVzLCBTcGFjZSwgRmxleCwgQnV0dG9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5ZXJlZFdhdmVzIGZyb20gXCIuL2xheWVyZWRXYXZlc1wiXG5cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBjb2xvclRleHQ6e1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnBpbmssXG4gICAgfSxcbiAgICBjb250YWluZXJCb3JkZXI6IHtcbiAgICAgICAgLy8gYm9yZGVyOiBcInNvbGlkXCIsXG4gICAgICAgIC8vIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuY3lhbixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMHZoXCJcbiAgICB9LFxuICAgIGJ1dHRvbjp7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnBpbmtcbiAgICB9XG4gIH0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZVBhZ2UoKXtcblxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoW2VudHJ5XSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBzZXRPcGVuZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46ICctMjAwcHgnLFxuICAgICAgICB0aHJlc2hvbGQ6IDEgLy8gSW50ZXJzZWN0aW9uIHJhdGlvIHRocmVzaG9sZCBmb3IgdHJpZ2dlcmluZyBhY3Rpb25cbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtyZWZdKTtcblxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICAgPEdyb3VwIGFsaWduPVwiY2VudGVyXCIgcGw9IFwiMTAlXCIgbXQ9XCIxNXZoXCIgcHI9ezB9IHBvcz1cImFic29sdXRlXCIgdG9wPXswfSBsZWZ0PXswfSBncm93IG5vV3JhcCA+XG4gICAgICAgICAgICA8VHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8U3RhY2sganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGFsaWduPVwibGVmdFwiIG1hdz1cIjUwMHB4XCIgc2l6ZT17NDB9PlBoeXNpb3RoZXJhcGllIElocmVzIFZlcnRyYXVlbnMgaW4gQmllbDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPVwibGVmdFwiIHNpemU9XCJ4bFwiIG1hdz1cIjUwMHB4XCI+T2IgPFRleHQgc3BhbiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbG9yVGV4dH0+U3BvcnR2ZXJsZXR6dW5nPC9UZXh0PiwgPFRleHQgc3BhbiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbG9yVGV4dH0+SGV4ZW5zY2h1c3M8L1RleHQ+IG9kZXIgYW5kZXJlIEJlc2Nod2VyZGVuPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhbGlnbj1cImxlZnRcIiBzaXplPVwibGdcIiBtYXc9XCI1MDBweFwiPlVuc2VyIFRlYW0gaGlsZnQgSWhuZW4gZ2VybmUsIHdpZWRlciB0b3BmaXQgenUgd2VyZGVuLjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGg9XCIzdmhcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9XCJmaWxsZWRcIiAgb3BhY2l0eT17MC45fSA+S29udGFrdGllcmVuIFNpZSB1bnMgamV0enQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgbWI9XCJsZ1wiIG1sPVwiNXZ3XCIgbXI9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInVuZHJhd0RhbmNpbmdQZW9wbGUuc3ZnXCIgYWx0PVwiZGFuY2luZyBwZW9wbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPEZsZXggaD1cIjEwMHZoXCIgdz1cIjEwMHZ3XCIgbT17MH0gcD17MH0gYWxpZ249XCJmbGV4LWVuZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJCb3JkZXJ9ID5cbiAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPFNwYWNlLz4gKi99XG4gICAgICAgICAgICA8TGF5ZXJlZFdhdmVzIG9mZnNldFk9ezB9IHJvdGF0aW9uPXswfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIlN0YWNrIiwiVGl0bGUiLCJHcm91cCIsIlRleHQiLCJJbWFnZSIsImNyZWF0ZVN0eWxlcyIsIlNwYWNlIiwiRmxleCIsIkJ1dHRvbiIsIlRyYW5zaXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxheWVyZWRXYXZlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwiY29sb3JUZXh0IiwiY29sb3IiLCJjb2xvcnMiLCJwaW5rIiwiY29udGFpbmVyQm9yZGVyIiwibWF4SGVpZ2h0IiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiV2VsY29tZVBhZ2UiLCJjbGFzc2VzIiwib3BlbmVkIiwic2V0T3BlbmVkIiwicmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImN1cnJlbnQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImFsaWduIiwicGwiLCJtdCIsInByIiwicG9zIiwidG9wIiwibGVmdCIsImdyb3ciLCJub1dyYXAiLCJqdXN0aWZ5IiwibWF3Iiwic2l6ZSIsInNwYW4iLCJ3ZWlnaHQiLCJjbGFzc05hbWUiLCJoIiwidyIsInZhcmlhbnQiLCJvcGFjaXR5IiwibWIiLCJtbCIsIm1yIiwic3JjIiwiYWx0IiwibSIsInAiLCJvZmZzZXRZIiwicm90YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/welcome.tsx\n"));

/***/ })

});