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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.tsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer */ \"./src/components/drawer.tsx\");\n/* harmony import */ var _contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/drawer.provider */ \"./src/contexts/drawer.provider.tsx\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // because of default export we can import with different name\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_8__.createStyles)((theme, _params, getRef)=>({\n        container: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"flex-start\",\n            //   borderStyle: \"solid\",\n            //   borderColor: theme.primaryColor,\n            paddingTop: theme.spacing.sm,\n            margin: 10,\n            // Dynamic media queries, define breakpoints in theme, use anywhere\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                // Type safe child reference in nested selectors via ref\n                [\"& .\".concat(getRef(\"child\"))]: {\n                    fontSize: theme.fontSizes.xs\n                }\n            }\n        },\n        hidden: {\n            display: \"none\"\n        },\n        items: {\n            flexGrow: 1,\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            marginLeft: theme.spacing.xs,\n            marginRight: theme.spacing.xs\n        },\n        links: {\n            fontFamily: theme.headings.fontFamily,\n            \"&:hover\": {\n                color: theme.colors.pink\n            }\n        },\n        blur: {\n            backdropFilter: \"blur(5px)\"\n        },\n        logo: {},\n        child: {\n            // assign ref to element\n            ref: getRef(\"child\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white,\n            padding: theme.spacing.md,\n            borderRadius: theme.radius.sm,\n            boxShadow: theme.shadows.md,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        }\n    }));\nfunction Header(param) {\n    let { ...props } = param;\n    _s();\n    console.log(_header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const { classes  } = useStyles();\n    const mobileBound = 820;\n    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    console.log(locale);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.MediaQuery, {\n                    largerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.MediaQuery, {\n                    smallerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Affix, {\n                        position: {\n                            top: 0,\n                            left: 0\n                        },\n                        zIndex: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                            className: classes.blur,\n                            h: 120,\n                            w: \"100vw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.MediaQuery, {\n                    smallerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Affix, {\n                        position: {\n                            top: 0,\n                            left: 0\n                        },\n                        zIndex: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Group, {\n                            pl: \"5%\",\n                            position: \"apart\",\n                            w: \"100vw\",\n                            pt: 20,\n                            pb: 10,\n                            noWrap: true,\n                            grow: true,\n                            bg: \"white\",\n                            opacity: 0.8,\n                            h: 120,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: classes.logo\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Group, {\n                                    noWrap: true,\n                                    // gap={40}\n                                    // className= {classes.items}\n                                    position: \"center\",\n                                    mr: \"15vw\",\n                                    ml: 50,\n                                    spacing: 50,\n                                    children: [\n                                        _header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                                            let { path , label  } = param;\n                                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                                to: path,\n                                                spy: true,\n                                                smooth: true,\n                                                duration: 500,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                                                    className: classes.links,\n                                                    weight: \"bold\",\n                                                    children: label.toUpperCase()\n                                                }, i, false, {\n                                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 37\n                                            }, this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"\",\n                                            locale: \"fr\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                                                className: classes.links,\n                                                weight: \"bold\",\n                                                children: \"Francais\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"kTC1ahMSfHoua70HNc1gT35/VOQ=\", false, function() {\n    return [\n        useStyles,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUs7NEJBQUdDLE1BQUs7d0JBQUM7d0JBQUdDLFFBQVE7a0NBQ3ZDLDRFQUFDakUsZ0RBQUtBOzRCQUFDcUUsSUFBRzs0QkFBS1AsVUFBUzs0QkFBUU0sR0FBRTs0QkFBUUUsSUFBSTs0QkFBSUMsSUFBSTs0QkFBSUMsTUFBTTs0QkFBQ0MsSUFBSTs0QkFBQ0MsSUFBRzs0QkFBUUMsU0FBUzs0QkFBS1IsR0FBRzs7OENBQzlGLDhEQUFDaEUsNkNBQUlBO29DQUFDK0QsV0FBV1YsUUFBUWxCLElBQUk7Ozs7Ozs4Q0FDN0IsOERBQUN0QyxnREFBS0E7b0NBQ053RSxNQUFNO29DQUNOLFdBQVc7b0NBQ1gsNkJBQTZCO29DQUM3QlYsVUFBUztvQ0FDVGMsSUFBRztvQ0FDSEMsSUFBSTtvQ0FDSjNELFNBQVM7O3dDQUVKaEIsd0RBQWEsQ0FBQyxRQUFnQjZFLGtCQUMzQjtnREFEWSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBQzttREFDekIsOERBQUMzRSw4Q0FBSUE7Z0RBQUM0RSxJQUFJRjtnREFBT0csS0FBSyxJQUFJO2dEQUFFQyxRQUFRLElBQUk7Z0RBQUVDLFVBQVU7MERBQ2hELDRFQUFDdkYsK0NBQUlBO29EQUFDb0UsV0FBV1YsUUFBUTFCLEtBQUs7b0RBQVV3RCxRQUFPOzhEQUMxQ0wsTUFBTU0sV0FBVzttREFEZVI7Ozs7Ozs7Ozs7d0NBR25DO3NEQUVWLDhEQUFDdkUsa0RBQVFBOzRDQUFDZ0YsTUFBSzs0Q0FBRzlCLFFBQU87c0RBQ3JCLDRFQUFDNUQsK0NBQUlBO2dEQUFDb0UsV0FBV1YsUUFBUTFCLEtBQUs7Z0RBQUV3RCxRQUFPOzBEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRixDQUFDO0dBNUR1QmxDOztRQUVGM0M7UUFFREYsa0RBQVNBOzs7S0FKTjZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4PzA4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBjcmVhdGVTdHlsZXMsIERyYXdlciwgRmxleCwgTWVkaWFRdWVyeSwgVGV4dCwgQWZmaXgsIEdyb3VwLCBCdXR0b24sIEJveCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vbG9nb1wiO1xuaW1wb3J0IExheWVyZWRXYXZlcyBmcm9tIFwiLi4vbGF5ZXJlZFdhdmVzXCI7XG5pbXBvcnQgRHJhd2VyTWVudSBmcm9tIFwiLi4vZHJhd2VyXCI7XG5pbXBvcnQgRHJhd2VyUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dHMvZHJhd2VyLnByb3ZpZGVyXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7IC8vIGJlY2F1c2Ugb2YgZGVmYXVsdCBleHBvcnQgd2UgY2FuIGltcG9ydCB3aXRoIGRpZmZlcmVudCBuYW1lXG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUsIF9wYXJhbXMsIGdldFJlZikgPT4gKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIC8vICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAvLyAgIGJvcmRlckNvbG9yOiB0aGVtZS5wcmltYXJ5Q29sb3IsXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgICAgbWFyZ2luOiAxMCxcbiAgXG4gICAgICAvLyBEeW5hbWljIG1lZGlhIHF1ZXJpZXMsIGRlZmluZSBicmVha3BvaW50cyBpbiB0aGVtZSwgdXNlIGFueXdoZXJlXG4gICAgICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnNtfXB4KWBdOiB7XG4gICAgICAgIC8vIFR5cGUgc2FmZSBjaGlsZCByZWZlcmVuY2UgaW4gbmVzdGVkIHNlbGVjdG9ycyB2aWEgcmVmXG4gICAgICAgIFtgJiAuJHtnZXRSZWYoJ2NoaWxkJyl9YF06IHtcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGhpZGRlbjp7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0sXG4gICAgaXRlbXM6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcueHMsXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnhzLFxuICAgIH0sXG4gICAgbGlua3M6IHtcbiAgICAgICAgZm9udEZhbWlseTogdGhlbWUuaGVhZGluZ3MuZm9udEZhbWlseSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnBpbmssXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJsdXI6e1xuICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIixcbiAgICAgICAgLy8gZmlsdGVyOiBcImJsdXIoNXB4KVwiLFxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuICAgIH0sXG4gICAgbG9nbzp7XG5cbiAgICB9LFxuICBcbiAgICBjaGlsZDoge1xuICAgICAgLy8gYXNzaWduIHJlZiB0byBlbGVtZW50XG4gICAgICByZWY6IGdldFJlZignY2hpbGQnKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUud2hpdGUsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3MubWQsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLndoaXRlIDogdGhlbWUuYmxhY2ssXG4gICAgfSxcbiAgfSkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7Li4ucHJvcHN9KXtcbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbXMpXG4gICAgY29uc3Qge2NsYXNzZXN9ID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgbW9iaWxlQm91bmQ6bnVtYmVyID0gODIwO1xuICAgIGNvbnN0IHtsb2NhbGV9ID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cobG9jYWxlKVxuICAgIHJldHVybihcbiAgICAgICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeSBsYXJnZXJUaGFuPXttb2JpbGVCb3VuZH0gc3R5bGVzPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPERyYXdlck1lbnUvPlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgICAgICA8TWVkaWFRdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxlclRoYW49e21vYmlsZUJvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7ZGlzcGxheTogJ25vbmUnfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWZmaXggcG9zaXRpb249e3t0b3A6IDAsIGxlZnQ6MH19IHpJbmRleD17M30gLyogZm9yIHRoZSBibHVyICovPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYmx1cn0gaD17MTIwfSB3PVwiMTAwdndcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9BZmZpeD5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJUaGFuPXttb2JpbGVCb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFmZml4IHBvc2l0aW9uPXt7dG9wOiAwLCBsZWZ0OjB9fSB6SW5kZXg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwIHBsPVwiNSVcIiBwb3NpdGlvbj1cImFwYXJ0XCIgdz1cIjEwMHZ3XCIgcHQ9ezIwfSBwYj17MTB9IG5vV3JhcCBncm93IGJnPVwid2hpdGVcIiBvcGFjaXR5PXswLjh9IGg9ezEyMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2FwPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9IHtjbGFzc2VzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjE1dndcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7cGF0aCwgbGFiZWx9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17cGF0aCF9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9IGtleT17aX0gd2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIlwiIGxvY2FsZT0nZnInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfSB3ZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJhbmNhaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICA8L0RyYXdlclByb3ZpZGVyPlxuXG4gICAgICAgXG5cbiAgICAgICAgXG4gICAgKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwiTWVkaWFRdWVyeSIsIlRleHQiLCJBZmZpeCIsIkdyb3VwIiwiQm94IiwibWVudUl0ZW1zIiwiTG9nbyIsIkRyYXdlck1lbnUiLCJEcmF3ZXJQcm92aWRlciIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOZXh0TGluayIsInVzZVN0eWxlcyIsInRoZW1lIiwiX3BhcmFtcyIsImdldFJlZiIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInNtIiwibWFyZ2luIiwiYnJlYWtwb2ludHMiLCJmb250U2l6ZSIsImZvbnRTaXplcyIsInhzIiwiaGlkZGVuIiwiaXRlbXMiLCJmbGV4R3JvdyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImxpbmtzIiwiZm9udEZhbWlseSIsImhlYWRpbmdzIiwiY29sb3IiLCJjb2xvcnMiLCJwaW5rIiwiYmx1ciIsImJhY2tkcm9wRmlsdGVyIiwibG9nbyIsImNoaWxkIiwicmVmIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJkYXJrIiwid2hpdGUiLCJwYWRkaW5nIiwibWQiLCJib3JkZXJSYWRpdXMiLCJyYWRpdXMiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiYmxhY2siLCJIZWFkZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibW9iaWxlQm91bmQiLCJsb2NhbGUiLCJsYXJnZXJUaGFuIiwic3R5bGVzIiwic21hbGxlclRoYW4iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJjbGFzc05hbWUiLCJoIiwidyIsInBsIiwicHQiLCJwYiIsIm5vV3JhcCIsImdyb3ciLCJiZyIsIm9wYWNpdHkiLCJtciIsIm1sIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsInRvIiwic3B5Iiwic21vb3RoIiwiZHVyYXRpb24iLCJ3ZWlnaHQiLCJ0b1VwcGVyQ2FzZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n"));

/***/ })

});