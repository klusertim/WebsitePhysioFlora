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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.tsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer */ \"./src/components/drawer.tsx\");\n/* harmony import */ var _contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/drawer.provider */ \"./src/contexts/drawer.provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)((theme, _params, getRef)=>({\n        container: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"flex-start\",\n            //   borderStyle: \"solid\",\n            //   borderColor: theme.primaryColor,\n            paddingTop: theme.spacing.sm,\n            margin: 10,\n            // Dynamic media queries, define breakpoints in theme, use anywhere\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                // Type safe child reference in nested selectors via ref\n                [\"& .\".concat(getRef(\"child\"))]: {\n                    fontSize: theme.fontSizes.xs\n                }\n            }\n        },\n        hidden: {\n            display: \"none\"\n        },\n        items: {\n            flexGrow: 1,\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            marginLeft: theme.spacing.xs,\n            marginRight: theme.spacing.xs\n        },\n        links: {\n            fontFamily: theme.headings.fontFamily,\n            \"&:hover\": {\n                color: theme.colors.pink\n            }\n        },\n        blur: {\n            backdropFilter: \"blur(5px)\"\n        },\n        logo: {},\n        child: {\n            // assign ref to element\n            ref: getRef(\"child\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white,\n            padding: theme.spacing.md,\n            borderRadius: theme.radius.sm,\n            boxShadow: theme.shadows.md,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        }\n    }));\nfunction Header(param) {\n    let { ...props } = param;\n    _s();\n    console.log(_header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const { classes  } = useStyles();\n    const mobileBound = 820;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    largerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    smallerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Affix, {\n                                position: {\n                                    top: 0,\n                                    left: 0\n                                },\n                                zIndex: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    className: classes.blur,\n                                    h: 120,\n                                    w: \"100vw\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Affix, {\n                                position: {\n                                    top: 0,\n                                    left: 0\n                                },\n                                zIndex: 4,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                                    pl: \"5%\",\n                                    position: \"apart\",\n                                    w: \"100vw\",\n                                    pt: 20,\n                                    pb: 10,\n                                    noWrap: true,\n                                    grow: true,\n                                    bg: \"white\",\n                                    opacity: 0.8,\n                                    h: 120,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: classes.logo\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                                            noWrap: true,\n                                            // gap={40}\n                                            // className= {classes.items}\n                                            position: \"center\",\n                                            mr: \"15vw\",\n                                            ml: 50,\n                                            spacing: 50,\n                                            children: _header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                                                let { path , label  } = param;\n                                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                                    className: classes.links,\n                                                    weight: \"bold\",\n                                                    children: label.toUpperCase()\n                                                }, i, false, {\n                                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 37\n                                                }, this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"dEcGkkWBp2V3HKTMad5HGP/1Kk4=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtSDtBQUU5RTtBQUNWO0FBRVE7QUFDcUI7QUFFeEQsTUFBTVUsWUFBWVYsMkRBQVlBLENBQUMsQ0FBQ1csT0FBT0MsU0FBU0MsU0FBWTtRQUN4REMsV0FBVztZQUVUQyxTQUFTO1lBQ1RDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2xCLDBCQUEwQjtZQUMxQixxQ0FBcUM7WUFDbkNDLFlBQVlQLE1BQU1RLE9BQU8sQ0FBQ0MsRUFBRTtZQUM1QkMsUUFBUTtZQUVSLG1FQUFtRTtZQUNuRSxDQUFDLHNCQUEyQyxPQUFyQlYsTUFBTVcsV0FBVyxDQUFDRixFQUFFLEVBQUMsT0FBSyxFQUFFO2dCQUNqRCx3REFBd0Q7Z0JBQ3hELENBQUMsTUFBc0IsT0FBaEJQLE9BQU8sVUFBVyxFQUFFO29CQUN6QlUsVUFBVVosTUFBTWEsU0FBUyxDQUFDQyxFQUFFO2dCQUM5QjtZQUNGO1FBQ0Y7UUFDQUMsUUFBTztZQUNIWCxTQUFTO1FBQ2I7UUFDQVksT0FBTztZQUNIQyxVQUFVO1lBQ1ZYLGdCQUFnQjtZQUNoQkQsWUFBWTtZQUNaYSxZQUFZbEIsTUFBTVEsT0FBTyxDQUFDTSxFQUFFO1lBQzVCSyxhQUFhbkIsTUFBTVEsT0FBTyxDQUFDTSxFQUFFO1FBQ2pDO1FBQ0FNLE9BQU87WUFDSEMsWUFBWXJCLE1BQU1zQixRQUFRLENBQUNELFVBQVU7WUFDckMsV0FBVztnQkFDUEUsT0FBT3ZCLE1BQU13QixNQUFNLENBQUNDLElBQUk7WUFDNUI7UUFDSjtRQUNBQyxNQUFLO1lBQ0RDLGdCQUFnQjtRQUdwQjtRQUNBQyxNQUFLLENBRUw7UUFFQUMsT0FBTztZQUNMLHdCQUF3QjtZQUN4QkMsS0FBSzVCLE9BQU87WUFDWjZCLGlCQUFpQi9CLE1BQU1nQyxXQUFXLEtBQUssU0FBU2hDLE1BQU13QixNQUFNLENBQUNTLElBQUksQ0FBQyxFQUFFLEdBQUdqQyxNQUFNa0MsS0FBSztZQUNsRkMsU0FBU25DLE1BQU1RLE9BQU8sQ0FBQzRCLEVBQUU7WUFDekJDLGNBQWNyQyxNQUFNc0MsTUFBTSxDQUFDN0IsRUFBRTtZQUM3QjhCLFdBQVd2QyxNQUFNd0MsT0FBTyxDQUFDSixFQUFFO1lBQzNCYixPQUFPdkIsTUFBTWdDLFdBQVcsS0FBSyxTQUFTaEMsTUFBTWtDLEtBQUssR0FBR2xDLE1BQU15QyxLQUFLO1FBQ2pFO0lBQ0Y7QUFHYSxTQUFTQyxPQUFPLEtBQVUsRUFBQztRQUFYLEVBQUMsR0FBR0MsT0FBTSxHQUFWOztJQUMzQkMsUUFBUUMsR0FBRyxDQUFDbEQsb0RBQVNBO0lBQ3JCLE1BQU0sRUFBQ21ELFFBQU8sRUFBQyxHQUFHL0M7SUFDbEIsTUFBTWdELGNBQXFCO0lBQzNCLHFCQUNJLDhEQUFDakQsaUVBQWNBO2tCQUNYOzs4QkFDSSw4REFBQ1IscURBQVVBO29CQUFDMEQsWUFBWUQ7b0JBQWFFLFFBQVE7d0JBQUM3QyxTQUFTO29CQUFNOzhCQUN6RCw0RUFBQ1AsK0NBQVVBOzs7Ozs7Ozs7OzhCQUVmLDhEQUFDUCxxREFBVUE7b0JBQ0g0RCxhQUFhSDtvQkFDYkUsUUFBUTt3QkFBQzdDLFNBQVM7b0JBQU07OEJBRTVCLDRFQUFDViw4Q0FBR0E7OzBDQUNKLDhEQUFDRixnREFBS0E7Z0NBQUMyRCxVQUFVO29DQUFDQyxLQUFLO29DQUFHQyxNQUFLO2dDQUFDO2dDQUFHQyxRQUFROzBDQUN2Qyw0RUFBQzVELDhDQUFHQTtvQ0FBQzZELFdBQVdULFFBQVFwQixJQUFJO29DQUFFOEIsR0FBRztvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7MENBRTVDLDhEQUFDakUsZ0RBQUtBO2dDQUFDMkQsVUFBVTtvQ0FBQ0MsS0FBSztvQ0FBR0MsTUFBSztnQ0FBQztnQ0FBR0MsUUFBUTswQ0FDdkMsNEVBQUM3RCxnREFBS0E7b0NBQUNpRSxJQUFHO29DQUFLUCxVQUFTO29DQUFRTSxHQUFFO29DQUFRRSxJQUFJO29DQUFJQyxJQUFJO29DQUFJQyxNQUFNO29DQUFDQyxJQUFJO29DQUFDQyxJQUFHO29DQUFRQyxTQUFTO29DQUFLUixHQUFHOztzREFDOUYsOERBQUM1RCw2Q0FBSUE7NENBQUMyRCxXQUFXVCxRQUFRbEIsSUFBSTs7Ozs7O3NEQUM3Qiw4REFBQ25DLGdEQUFLQTs0Q0FDTm9FLE1BQU07NENBQ04sV0FBVzs0Q0FDWCw2QkFBNkI7NENBQzdCVixVQUFTOzRDQUNUYyxJQUFHOzRDQUNIQyxJQUFJOzRDQUNKMUQsU0FBUztzREFFSmIsd0RBQWEsQ0FBQyxRQUFnQnlFLGtCQUMzQjtvREFEWSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBQzt1REFDekIsOERBQUMvRSwrQ0FBSUE7b0RBQUNnRSxXQUFXVCxRQUFRMUIsS0FBSztvREFBVW1ELFFBQU87OERBQzFDRCxNQUFNRSxXQUFXO21EQURlSjs7Ozs7NENBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMxQyxDQUFDO0dBL0N1QjFCOztRQUVGM0M7OztLQUZFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3g/MDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIGNyZWF0ZVN0eWxlcywgRHJhd2VyLCBGbGV4LCBNZWRpYVF1ZXJ5LCBUZXh0LCBBZmZpeCwgR3JvdXAsIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSdcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9sb2dvXCI7XG5pbXBvcnQgTGF5ZXJlZFdhdmVzIGZyb20gXCIuLi9sYXllcmVkV2F2ZXNcIjtcbmltcG9ydCBEcmF3ZXJNZW51IGZyb20gXCIuLi9kcmF3ZXJcIjtcbmltcG9ydCBEcmF3ZXJQcm92aWRlciBmcm9tIFwiQC9jb250ZXh0cy9kcmF3ZXIucHJvdmlkZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSwgX3BhcmFtcywgZ2V0UmVmKSA9PiAoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgLy8gICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgIC8vICAgYm9yZGVyQ29sb3I6IHRoZW1lLnByaW1hcnlDb2xvcixcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcuc20sXG4gICAgICBtYXJnaW46IDEwLFxuICBcbiAgICAgIC8vIER5bmFtaWMgbWVkaWEgcXVlcmllcywgZGVmaW5lIGJyZWFrcG9pbnRzIGluIHRoZW1lLCB1c2UgYW55d2hlcmVcbiAgICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219cHgpYF06IHtcbiAgICAgICAgLy8gVHlwZSBzYWZlIGNoaWxkIHJlZmVyZW5jZSBpbiBuZXN0ZWQgc2VsZWN0b3JzIHZpYSByZWZcbiAgICAgICAgW2AmIC4ke2dldFJlZignY2hpbGQnKX1gXToge1xuICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGlkZGVuOntcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy54cyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcueHMsXG4gICAgfSxcbiAgICBsaW5rczoge1xuICAgICAgICBmb250RmFtaWx5OiB0aGVtZS5oZWFkaW5ncy5mb250RmFtaWx5LFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucGluayxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmx1cjp7XG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxuICAgICAgICAvLyBmaWx0ZXI6IFwiYmx1cig1cHgpXCIsXG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiXG4gICAgfSxcbiAgICBsb2dvOntcblxuICAgIH0sXG4gIFxuICAgIGNoaWxkOiB7XG4gICAgICAvLyBhc3NpZ24gcmVmIHRvIGVsZW1lbnRcbiAgICAgIHJlZjogZ2V0UmVmKCdjaGlsZCcpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcubWQsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93cy5tZCxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUud2hpdGUgOiB0aGVtZS5ibGFjayxcbiAgICB9LFxuICB9KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsuLi5wcm9wc30pe1xuICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtcylcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBtb2JpbGVCb3VuZDpudW1iZXIgPSA4MjA7XG4gICAgcmV0dXJuKFxuICAgICAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IGxhcmdlclRoYW49e21vYmlsZUJvdW5kfSBzdHlsZXM9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyTWVudS8+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbGVyVGhhbj17bW9iaWxlQm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tkaXNwbGF5OiAnbm9uZSd9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxBZmZpeCBwb3NpdGlvbj17e3RvcDogMCwgbGVmdDowfX0gekluZGV4PXszfSAvKiBmb3IgdGhlIGJsdXIgKi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibHVyfSBoPXsxMjB9IHc9XCIxMDB2d1wiIC8+IFxuICAgICAgICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgICAgICAgICA8QWZmaXggcG9zaXRpb249e3t0b3A6IDAsIGxlZnQ6MH19IHpJbmRleD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXAgcGw9XCI1JVwiIHBvc2l0aW9uPVwiYXBhcnRcIiB3PVwiMTAwdndcIiBwdD17MjB9IHBiPXsxMH0gbm9XcmFwIGdyb3cgYmc9XCJ3aGl0ZVwiIG9wYWNpdHk9ezAuOH0gaD17MTIwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnYXA9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT0ge2NsYXNzZXMuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPVwiMTV2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHtwYXRoLCBsYWJlbH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30ga2V5PXtpfSB3ZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgPC9EcmF3ZXJQcm92aWRlcj5cblxuICAgICAgIFxuXG4gICAgICAgIFxuICAgICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIk1lZGlhUXVlcnkiLCJUZXh0IiwiQWZmaXgiLCJHcm91cCIsIkJveCIsIm1lbnVJdGVtcyIsIkxvZ28iLCJEcmF3ZXJNZW51IiwiRHJhd2VyUHJvdmlkZXIiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsIl9wYXJhbXMiLCJnZXRSZWYiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJzbSIsIm1hcmdpbiIsImJyZWFrcG9pbnRzIiwiZm9udFNpemUiLCJmb250U2l6ZXMiLCJ4cyIsImhpZGRlbiIsIml0ZW1zIiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJsaW5rcyIsImZvbnRGYW1pbHkiLCJoZWFkaW5ncyIsImNvbG9yIiwiY29sb3JzIiwicGluayIsImJsdXIiLCJiYWNrZHJvcEZpbHRlciIsImxvZ28iLCJjaGlsZCIsInJlZiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiZGFyayIsIndoaXRlIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImJsYWNrIiwiSGVhZGVyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIm1vYmlsZUJvdW5kIiwibGFyZ2VyVGhhbiIsInN0eWxlcyIsInNtYWxsZXJUaGFuIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiY2xhc3NOYW1lIiwiaCIsInciLCJwbCIsInB0IiwicGIiLCJub1dyYXAiLCJncm93IiwiYmciLCJvcGFjaXR5IiwibXIiLCJtbCIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJ3ZWlnaHQiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n"));

/***/ })

});