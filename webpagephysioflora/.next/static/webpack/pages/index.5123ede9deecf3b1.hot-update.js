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

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.tsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer */ \"./src/components/drawer.tsx\");\n/* harmony import */ var _contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/drawer.provider */ \"./src/contexts/drawer.provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)((theme, _params, getRef)=>({\n        container: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"flex-start\",\n            //   borderStyle: \"solid\",\n            //   borderColor: theme.primaryColor,\n            paddingTop: theme.spacing.sm,\n            margin: 10,\n            // Dynamic media queries, define breakpoints in theme, use anywhere\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                // Type safe child reference in nested selectors via ref\n                [\"& .\".concat(getRef(\"child\"))]: {\n                    fontSize: theme.fontSizes.xs\n                }\n            }\n        },\n        hidden: {\n            display: \"none\"\n        },\n        items: {\n            flexGrow: 1,\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            marginLeft: theme.spacing.xs,\n            marginRight: theme.spacing.xs\n        },\n        links: {\n            fontFamily: theme.headings.fontFamily,\n            \"&:hover\": {\n                color: theme.colors.pink\n            }\n        },\n        blur: {\n            backdropFilter: \"blur(5px)\",\n            filter: \"blur(5px)\"\n        },\n        logo: {},\n        child: {\n            // assign ref to element\n            ref: getRef(\"child\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white,\n            padding: theme.spacing.md,\n            borderRadius: theme.radius.sm,\n            boxShadow: theme.shadows.md,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        }\n    }));\nfunction Header(param) {\n    let { ...props } = param;\n    _s();\n    console.log(_header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const { classes  } = useStyles();\n    const mobileBound = 820;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    largerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    smallerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Affix, {\n                                position: {\n                                    top: 20,\n                                    left: 300\n                                },\n                                zIndex: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    className: classes.blur,\n                                    h: 120\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Affix, {\n                                position: {\n                                    top: 0,\n                                    left: 0\n                                },\n                                zIndex: 4,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                                    pl: \"5%\",\n                                    position: \"apart\",\n                                    w: \"100vw\",\n                                    pt: 20,\n                                    pb: 10,\n                                    noWrap: true,\n                                    grow: true,\n                                    bg: \"white\",\n                                    opacity: 0.98,\n                                    h: 120,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: classes.logo\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                                            noWrap: true,\n                                            // gap={40}\n                                            // className= {classes.items}\n                                            position: \"center\",\n                                            mr: \"15vw\",\n                                            ml: 50,\n                                            spacing: 50,\n                                            children: _header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                                                let { path , label  } = param;\n                                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                                    className: classes.links,\n                                                    weight: \"bold\",\n                                                    children: label.toUpperCase()\n                                                }, i, false, {\n                                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 37\n                                                }, this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"dEcGkkWBp2V3HKTMad5HGP/1Kk4=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTO29DQUFNUixHQUFHOztzREFDL0YsOERBQUM3RCw2Q0FBSUE7NENBQUM0RCxXQUFXVCxRQUFRbEIsSUFBSTs7Ozs7O3NEQUM3Qiw4REFBQ3BDLGdEQUFLQTs0Q0FDTnFFLE1BQU07NENBQ04sV0FBVzs0Q0FDWCw2QkFBNkI7NENBQzdCVixVQUFTOzRDQUNUYyxJQUFHOzRDQUNIQyxJQUFJOzRDQUNKM0QsU0FBUztzREFFSmIsd0RBQWEsQ0FBQyxRQUFnQjBFLGtCQUMzQjtvREFEWSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBQzt1REFDekIsOERBQUNoRiwrQ0FBSUE7b0RBQUNpRSxXQUFXVCxRQUFRM0IsS0FBSztvREFBVW9ELFFBQU87OERBQzFDRCxNQUFNRSxXQUFXO21EQURlSjs7Ozs7NENBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzFDLENBQUM7R0FoRHVCMUI7O1FBRUY1Qzs7O0tBRkU0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeD8wODY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgY3JlYXRlU3R5bGVzLCBEcmF3ZXIsIEZsZXgsIE1lZGlhUXVlcnksIFRleHQsIEFmZml4LCBHcm91cCwgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJ1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2xvZ29cIjtcbmltcG9ydCBMYXllcmVkV2F2ZXMgZnJvbSBcIi4uL2xheWVyZWRXYXZlc1wiO1xuaW1wb3J0IERyYXdlck1lbnUgZnJvbSBcIi4uL2RyYXdlclwiO1xuaW1wb3J0IERyYXdlclByb3ZpZGVyIGZyb20gXCJAL2NvbnRleHRzL2RyYXdlci5wcm92aWRlclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lLCBfcGFyYW1zLCBnZXRSZWYpID0+ICh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAvLyAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgLy8gICBib3JkZXJDb2xvcjogdGhlbWUucHJpbWFyeUNvbG9yLFxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICAgIG1hcmdpbjogMTAsXG4gIFxuICAgICAgLy8gRHluYW1pYyBtZWRpYSBxdWVyaWVzLCBkZWZpbmUgYnJlYWtwb2ludHMgaW4gdGhlbWUsIHVzZSBhbnl3aGVyZVxuICAgICAgW2BAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5zbX1weClgXToge1xuICAgICAgICAvLyBUeXBlIHNhZmUgY2hpbGQgcmVmZXJlbmNlIGluIG5lc3RlZCBzZWxlY3RvcnMgdmlhIHJlZlxuICAgICAgICBbYCYgLiR7Z2V0UmVmKCdjaGlsZCcpfWBdOiB7XG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy54cyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBoaWRkZW46e1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICAgIGl0ZW1zOiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnhzLFxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy54cyxcbiAgICB9LFxuICAgIGxpbmtzOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmhlYWRpbmdzLmZvbnRGYW1pbHksXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5waW5rLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBibHVyOntcbiAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCIsXG4gICAgICAgIGZpbHRlcjogXCJibHVyKDVweClcIixcbiAgICB9LFxuICAgIGxvZ286e1xuXG4gICAgfSxcbiAgXG4gICAgY2hpbGQ6IHtcbiAgICAgIC8vIGFzc2lnbiByZWYgdG8gZWxlbWVudFxuICAgICAgcmVmOiBnZXRSZWYoJ2NoaWxkJyksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5tZCxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzLm1kLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuICAgIH0sXG4gIH0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoey4uLnByb3BzfSl7XG4gICAgY29uc29sZS5sb2cobWVudUl0ZW1zKVxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IG1vYmlsZUJvdW5kOm51bWJlciA9IDgyMDtcbiAgICByZXR1cm4oXG4gICAgICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbGFyZ2VyVGhhbj17bW9iaWxlQm91bmR9IHN0eWxlcz17e2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJNZW51Lz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJUaGFuPXttb2JpbGVCb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEFmZml4IHBvc2l0aW9uPXt7dG9wOiAyMCwgbGVmdDozMDB9fSB6SW5kZXg9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibHVyfSBoPXsxMjB9Lz4gXG5cbiAgICAgICAgICAgICAgICAgICAgPC9BZmZpeD5cbiAgICAgICAgICAgICAgICAgICAgPEFmZml4IHBvc2l0aW9uPXt7dG9wOiAwLCBsZWZ0OjB9fSB6SW5kZXg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwIHBsPVwiNSVcIiBwb3NpdGlvbj1cImFwYXJ0XCIgdz1cIjEwMHZ3XCIgcHQ9ezIwfSBwYj17MTB9IG5vV3JhcCBncm93IGJnPVwid2hpdGVcIiBvcGFjaXR5PXswLjk4fSBoPXsxMjB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdhcD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPSB7Y2xhc3Nlcy5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxNXZ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoe3BhdGgsIGxhYmVsfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfSBrZXk9e2l9IHdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICA8L0RyYXdlclByb3ZpZGVyPlxuXG4gICAgICAgXG5cbiAgICAgICAgXG4gICAgKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwiTWVkaWFRdWVyeSIsIlRleHQiLCJBZmZpeCIsIkdyb3VwIiwiQm94IiwibWVudUl0ZW1zIiwiTG9nbyIsIkRyYXdlck1lbnUiLCJEcmF3ZXJQcm92aWRlciIsInVzZVN0eWxlcyIsInRoZW1lIiwiX3BhcmFtcyIsImdldFJlZiIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInNtIiwibWFyZ2luIiwiYnJlYWtwb2ludHMiLCJmb250U2l6ZSIsImZvbnRTaXplcyIsInhzIiwiaGlkZGVuIiwiaXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImxpbmtzIiwiZm9udEZhbWlseSIsImhlYWRpbmdzIiwiY29sb3IiLCJjb2xvcnMiLCJwaW5rIiwiYmx1ciIsImJhY2tkcm9wRmlsdGVyIiwiZmlsdGVyIiwibG9nbyIsImNoaWxkIiwicmVmIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJkYXJrIiwid2hpdGUiLCJwYWRkaW5nIiwibWQiLCJib3JkZXJSYWRpdXMiLCJyYWRpdXMiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiYmxhY2siLCJIZWFkZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibW9iaWxlQm91bmQiLCJsYXJnZXJUaGFuIiwic3R5bGVzIiwic21hbGxlclRoYW4iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJjbGFzc05hbWUiLCJoIiwicGwiLCJ3IiwicHQiLCJwYiIsIm5vV3JhcCIsImdyb3ciLCJiZyIsIm9wYWNpdHkiLCJtciIsIm1sIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsIndlaWdodCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n"));

/***/ })

});