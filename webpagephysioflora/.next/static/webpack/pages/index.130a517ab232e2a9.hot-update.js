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

/***/ "./src/components/team/team.tsx":
/*!**************************************!*\
  !*** ./src/components/team/team.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _floraTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../floraTitle */ \"./src/components/floraTitle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst teamData = {\n    title: {\n        de: \"Team\",\n        fr: \"Team\"\n    },\n    speech: {\n        de: \"Wir sind f\\xfcr Sie da!\",\n        fr: \"bla bla bla\"\n    }\n};\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.createStyles)((theme)=>({}));\nfunction TeamPage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-200px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Element, {\n        name: \"team\",\n        marginHeight: -1000,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            w: \"100vw\",\n            m: 0,\n            justify: \"flex-start\",\n            direction: \"column\",\n            p: 0,\n            pt: \"xl\",\n            mt: -0.257,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                    transition: \"fade\",\n                    mounted: opened,\n                    onEnter: ()=>setOpened(true),\n                    duration: 2000,\n                    children: (styles)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_floraTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: teamData.title,\n                                    speech: teamData.speech\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                    m: \"10vw\",\n                                    mt: \"5vh\",\n                                    gutter: \"md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                                            span: 12,\n                                            sm: 6,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                                                noWrap: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                        src: \"team/susanne.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                                                                order: 3,\n                                                                children: \"Susanne Schneiter\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                lineNumber: 68,\n                                                                columnNumber: 45\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                                    children: [\n                                                                        \"Beckenbodenrehabilitation f\\xfcr Frauen und M\\xe4nner\",\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                            lineNumber: 72,\n                                                                            columnNumber: 45\n                                                                        }, this),\n                                                                        \"Narbenbehandlung\",\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                            lineNumber: 74,\n                                                                            columnNumber: 45\n                                                                        }, this),\n                                                                        \"Atemphysiotherapie\",\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                            lineNumber: 76,\n                                                                            columnNumber: 45\n                                                                        }, this),\n                                                                        \"Manuelle Lymphdrainage und Bandagen\"\n                                                                    ]\n                                                                }, void 0, true)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                lineNumber: 69,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                                            span: 12,\n                                            sm: 6,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                                                noWrap: true,\n                                                p: 20,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                        src: \"team/marlis.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                                                        w: \"xl\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                                                                order: 3,\n                                                                children: \"Marlis Arn\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                lineNumber: 87,\n                                                                columnNumber: 45\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                                children: \"Sekret\\xe4rin\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                                lineNumber: 88,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/team/team.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamPage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = TeamPage;\nvar _c;\n$RefreshReg$(_c, \"TeamPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlYW0vdGVhbS50c3g/NTUzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIEZsZXgsIFRpdGxlLCBCb3gsIFRyYW5zaXRpb24sIEdyaWQsIEdyb3VwLCBJbWFnZSwgU3RhY2ssIFRleHQgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0VsZW1lbnR9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgRmxvcmFUaXRsZSBmcm9tIFwiLi4vZmxvcmFUaXRsZVwiO1xuXG5cbmNvbnN0IHRlYW1EYXRhID17XG4gICAgdGl0bGU6e1xuICAgICAgICBkZTogXCJUZWFtXCIsXG4gICAgICAgIGZyOiBcIlRlYW1cIlxuICAgIH0sXG4gICAgc3BlZWNoOntcbiAgICAgICAgZGU6IFwiV2lyIHNpbmQgZsO8ciBTaWUgZGEhXCIsXG4gICAgICAgIGZyOiBcImJsYSBibGEgYmxhXCJcbiAgICB9XG5cbn1cblxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgXG4gIH0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbVBhZ2UoKXtcblxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgc2V0T3BlbmVkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICctMjAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAxIC8vIEludGVyc2VjdGlvbiByYXRpbyB0aHJlc2hvbGQgZm9yIHRyaWdnZXJpbmcgYWN0aW9uXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIFxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtyZWZdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVsZW1lbnQgbmFtZT1cInRlYW1cIiBtYXJnaW5IZWlnaHQ9ey0xMDAwfT5cbiAgICAgICAgICAgIDxGbGV4IHc9XCIxMDB2d1wiIG09ezB9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgZGlyZWN0aW9uPVwiY29sdW1uXCIgcD17MH0gcHQ9XCJ4bFwiIG10PXstMC4yNTd9ID5cbiAgICAgICAgICAgICAgICA8Qm94IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24gdHJhbnNpdGlvbj1cImZhZGVcIiBtb3VudGVkPXtvcGVuZWR9IG9uRW50ZXI9eygpID0+IHNldE9wZW5lZCh0cnVlKX0gZHVyYXRpb249ezIwMDB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoc3R5bGVzKSA9PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9yYVRpdGxlIHRpdGxlPXt0ZWFtRGF0YS50aXRsZX0gc3BlZWNoPXt0ZWFtRGF0YS5zcGVlY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgbT1cIjEwdndcIiBtdD1cIjV2aFwiIGd1dHRlcj1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbCBzcGFuPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwIG5vV3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwidGVhbS9zdXNhbm5lLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBvcmRlcj17M30+U3VzYW5uZSBTY2huZWl0ZXI8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVja2VuYm9kZW5yZWhhYmlsaXRhdGlvbiBmw7xyIEZyYXVlbiB1bmQgTcOkbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXJiZW5iZWhhbmRsdW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0ZW1waHlzaW90aGVyYXBpZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW51ZWxsZSBMeW1waGRyYWluYWdlIHVuZCBCYW5kYWdlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cCBub1dyYXAgcD17MjB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ0ZWFtL21hcmxpcy5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHc9XCJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGUgb3JkZXI9ezN9Pk1hcmxpcyBBcm48L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VrcmV0w6RyaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHsvKiA8TGF5ZXJlZFdhdmVzIG9mZnNldFk9ezB9IHJvdGF0aW9uPXsxODB9Lz4gKi99XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRWxlbWVudD5cbiAgICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIkZsZXgiLCJUaXRsZSIsIkJveCIsIlRyYW5zaXRpb24iLCJHcmlkIiwiR3JvdXAiLCJJbWFnZSIsIlN0YWNrIiwiVGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRWxlbWVudCIsIkZsb3JhVGl0bGUiLCJ0ZWFtRGF0YSIsInRpdGxlIiwiZGUiLCJmciIsInNwZWVjaCIsInVzZVN0eWxlcyIsInRoZW1lIiwiVGVhbVBhZ2UiLCJjbGFzc2VzIiwib3BlbmVkIiwic2V0T3BlbmVkIiwicmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImN1cnJlbnQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm5hbWUiLCJtYXJnaW5IZWlnaHQiLCJ3IiwibSIsImp1c3RpZnkiLCJkaXJlY3Rpb24iLCJwIiwicHQiLCJtdCIsInRyYW5zaXRpb24iLCJtb3VudGVkIiwib25FbnRlciIsImR1cmF0aW9uIiwic3R5bGVzIiwiZ3V0dGVyIiwiQ29sIiwic3BhbiIsInNtIiwibm9XcmFwIiwic3JjIiwib3JkZXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/team/team.tsx\n"));

/***/ })

});