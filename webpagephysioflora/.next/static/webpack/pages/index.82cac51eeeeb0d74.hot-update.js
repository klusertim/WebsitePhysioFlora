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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.tsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer */ \"./src/components/drawer.tsx\");\n/* harmony import */ var _contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/drawer.provider */ \"./src/contexts/drawer.provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.createStyles)((theme, _params, getRef)=>({\n        container: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"flex-start\",\n            //   borderStyle: \"solid\",\n            //   borderColor: theme.primaryColor,\n            paddingTop: theme.spacing.sm,\n            margin: 10,\n            // Dynamic media queries, define breakpoints in theme, use anywhere\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                // Type safe child reference in nested selectors via ref\n                [\"& .\".concat(getRef(\"child\"))]: {\n                    fontSize: theme.fontSizes.xs\n                }\n            }\n        },\n        hidden: {\n            display: \"none\"\n        },\n        items: {\n            flexGrow: 1,\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            marginLeft: theme.spacing.xs,\n            marginRight: theme.spacing.xs\n        },\n        links: {\n            fontFamily: theme.headings.fontFamily,\n            \"&:hover\": {\n                color: theme.colors.pink\n            }\n        },\n        logo: {},\n        child: {\n            // assign ref to element\n            ref: getRef(\"child\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white,\n            padding: theme.spacing.md,\n            borderRadius: theme.radius.sm,\n            boxShadow: theme.shadows.md,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        }\n    }));\nfunction Header(param) {\n    let { ...props } = param;\n    _s();\n    console.log(_header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const { classes  } = useStyles();\n    const mobileBound = 820;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_drawer_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    largerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MediaQuery, {\n                    smallerThan: mobileBound,\n                    styles: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Affix, {\n                        position: {\n                            top: 0,\n                            left: 0\n                        },\n                        zIndex: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                            pl: \"5%\",\n                            position: \"apart\",\n                            w: \"100vw\",\n                            pt: 20,\n                            pb: 10,\n                            noWrap: true,\n                            grow: true,\n                            bg: \"white\",\n                            opacity: 0.98,\n                            className: classes.blur,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: classes.logo\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Group, {\n                                    noWrap: true,\n                                    // gap={40}\n                                    // className= {classes.items}\n                                    position: \"center\",\n                                    mr: \"15vw\",\n                                    ml: 50,\n                                    spacing: 50,\n                                    children: _header_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((param, i)=>/*#__PURE__*/ {\n                                        let { path , label  } = param;\n                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                            className: classes.links,\n                                            weight: \"bold\",\n                                            children: label.toUpperCase()\n                                        }, i, false, {\n                                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 37\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/header/header.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"dEcGkkWBp2V3HKTMad5HGP/1Kk4=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhDQUVKYix3REFBYSxDQUFDLFFBQWdCdUUsa0JBQzNCOzRDQURZLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFDOytDQUN6Qiw4REFBQzVFLCtDQUFJQTs0Q0FBQ3FFLFdBQVdqQixRQUFReEIsS0FBSzs0Q0FBVWlELFFBQU87c0RBQzFDRCxNQUFNRSxXQUFXOzJDQURlSjs7Ozs7b0NBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWExQyxDQUFDO0dBMUN1QjFCOztRQUVGekM7OztLQUZFeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3g/MDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIGNyZWF0ZVN0eWxlcywgRHJhd2VyLCBGbGV4LCBNZWRpYVF1ZXJ5LCBUZXh0LCBBZmZpeCwgR3JvdXAsIEJ1dHRvbiB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vbG9nb1wiO1xuaW1wb3J0IExheWVyZWRXYXZlcyBmcm9tIFwiLi4vbGF5ZXJlZFdhdmVzXCI7XG5pbXBvcnQgRHJhd2VyTWVudSBmcm9tIFwiLi4vZHJhd2VyXCI7XG5pbXBvcnQgRHJhd2VyUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dHMvZHJhd2VyLnByb3ZpZGVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUsIF9wYXJhbXMsIGdldFJlZikgPT4gKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIC8vICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAvLyAgIGJvcmRlckNvbG9yOiB0aGVtZS5wcmltYXJ5Q29sb3IsXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgICAgbWFyZ2luOiAxMCxcbiAgXG4gICAgICAvLyBEeW5hbWljIG1lZGlhIHF1ZXJpZXMsIGRlZmluZSBicmVha3BvaW50cyBpbiB0aGVtZSwgdXNlIGFueXdoZXJlXG4gICAgICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnNtfXB4KWBdOiB7XG4gICAgICAgIC8vIFR5cGUgc2FmZSBjaGlsZCByZWZlcmVuY2UgaW4gbmVzdGVkIHNlbGVjdG9ycyB2aWEgcmVmXG4gICAgICAgIFtgJiAuJHtnZXRSZWYoJ2NoaWxkJyl9YF06IHtcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGhpZGRlbjp7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0sXG4gICAgaXRlbXM6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcueHMsXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnhzLFxuICAgIH0sXG4gICAgbGlua3M6IHtcbiAgICAgICAgZm9udEZhbWlseTogdGhlbWUuaGVhZGluZ3MuZm9udEZhbWlseSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnBpbmssXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvZ286e1xuXG4gICAgfSxcbiAgXG4gICAgY2hpbGQ6IHtcbiAgICAgIC8vIGFzc2lnbiByZWYgdG8gZWxlbWVudFxuICAgICAgcmVmOiBnZXRSZWYoJ2NoaWxkJyksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy5tZCxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzLm1kLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuICAgIH0sXG4gIH0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoey4uLnByb3BzfSl7XG4gICAgY29uc29sZS5sb2cobWVudUl0ZW1zKVxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IG1vYmlsZUJvdW5kOm51bWJlciA9IDgyMDtcbiAgICByZXR1cm4oXG4gICAgICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbGFyZ2VyVGhhbj17bW9iaWxlQm91bmR9IHN0eWxlcz17e2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJNZW51Lz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsZXJUaGFuPXttb2JpbGVCb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFmZml4IHBvc2l0aW9uPXt7dG9wOiAwLCBsZWZ0OjB9fSB6SW5kZXg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwIHBsPVwiNSVcIiBwb3NpdGlvbj1cImFwYXJ0XCIgdz1cIjEwMHZ3XCIgcHQ9ezIwfSBwYj17MTB9IG5vV3JhcCBncm93IGJnPVwid2hpdGVcIiBvcGFjaXR5PXswLjk4fSBjbGFzc05hbWU9e2NsYXNzZXMuYmx1cn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2FwPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9IHtjbGFzc2VzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjE1dndcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7cGF0aCwgbGFiZWx9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9IGtleT17aX0gd2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbC50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9BZmZpeD5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgPC9EcmF3ZXJQcm92aWRlcj5cblxuICAgICAgIFxuXG4gICAgICAgIFxuICAgICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIk1lZGlhUXVlcnkiLCJUZXh0IiwiQWZmaXgiLCJHcm91cCIsIm1lbnVJdGVtcyIsIkxvZ28iLCJEcmF3ZXJNZW51IiwiRHJhd2VyUHJvdmlkZXIiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsIl9wYXJhbXMiLCJnZXRSZWYiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJzbSIsIm1hcmdpbiIsImJyZWFrcG9pbnRzIiwiZm9udFNpemUiLCJmb250U2l6ZXMiLCJ4cyIsImhpZGRlbiIsIml0ZW1zIiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJsaW5rcyIsImZvbnRGYW1pbHkiLCJoZWFkaW5ncyIsImNvbG9yIiwiY29sb3JzIiwicGluayIsImxvZ28iLCJjaGlsZCIsInJlZiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiZGFyayIsIndoaXRlIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImJsYWNrIiwiSGVhZGVyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIm1vYmlsZUJvdW5kIiwibGFyZ2VyVGhhbiIsInN0eWxlcyIsInNtYWxsZXJUaGFuIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwicGwiLCJ3IiwicHQiLCJwYiIsIm5vV3JhcCIsImdyb3ciLCJiZyIsIm9wYWNpdHkiLCJjbGFzc05hbWUiLCJibHVyIiwibXIiLCJtbCIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJ3ZWlnaHQiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n"));

/***/ })

});