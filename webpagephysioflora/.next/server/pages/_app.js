/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/infobox.context.tsx":
/*!******************************************!*\
  !*** ./src/contexts/infobox.context.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoBoxContext\": () => (/* binding */ InfoBoxContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst InfoBoxContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}); // provides the state to all the children, now DrawerMenu can use the state without passing it\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvaW5mb2JveC5jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFZL0IsTUFBTUMsK0JBQWlCRCxvREFBYUEsQ0FBVyxDQUFDLEdBQWUsQ0FBQyw4RkFBOEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWdlcGh5c2lvZmxvcmEvLi9zcmMvY29udGV4dHMvaW5mb2JveC5jb250ZXh0LnRzeD8xNTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmludGVyZmFjZSBQcm92aWRlciB7XG4gICAgaW5mb0JveE9wZW46IGJvb2xlYW4sXG4gICAgc2V0SW5mb0JveE9wZW46ICgoXzpib29sZWFuKSA9PiB2b2lkKSxcbiAgICAvLyBpbmZvQm94T3BlbkZyZW5jaDogYm9vbGVhbixcbiAgICAvLyBzZXRJbmZvQm94T3BlbkZyZW5jaDogKChfOmJvb2xlYW4pID0+IHZvaWQpXG4gICAgLy8gc2V0RHJhd2VyT3Blbj86ICh4OmJvb2xlYW4pID0+IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IEluZm9Cb3hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQcm92aWRlcj4oe30gYXMgUHJvdmlkZXIpOyAvLyBwcm92aWRlcyB0aGUgc3RhdGUgdG8gYWxsIHRoZSBjaGlsZHJlbiwgbm93IERyYXdlck1lbnUgY2FuIHVzZSB0aGUgc3RhdGUgd2l0aG91dCBwYXNzaW5nIGl0XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkluZm9Cb3hDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/infobox.context.tsx\n");

/***/ }),

/***/ "./src/contexts/infobox.provider.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/infobox.provider.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InfoBoxProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _infobox_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infobox.context */ \"./src/contexts/infobox.context.tsx\");\n\n\n\nfunction InfoBoxProvider({ children  }) {\n    // const [infoBoxOpenGerman, setInfoBoxOpenGerman] = useState(false);\n    // const [infoBoxOpenFrench, setInfoBoxOpenFrench] = useState(false);\n    const [infoBoxOpen, setInfoBoxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // function setGerman(b:boolean){\n    //     setInfoBoxOpenGerman(b)\n    // }\n    // function setFrench(b:boolean){\n    //     setInfoBoxOpenFrench(b)\n    // }\n    function setInfoBox(b) {\n        setInfoBoxOpen(b);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infobox_context__WEBPACK_IMPORTED_MODULE_2__.InfoBoxContext.Provider, {\n        value: {\n            infoBoxOpen,\n            setInfoBoxOpen: setInfoBox\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/contexts/infobox.provider.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvaW5mb2JveC5wcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDbUI7QUFHcEMsU0FBU0UsZ0JBQWdCLEVBQUNDLFNBQVEsRUFBMEIsRUFBQztJQUN4RSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsSUFBSTtJQUNKLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLFNBQVNNLFdBQVdDLENBQVMsRUFBQztRQUMxQkYsZUFBZUU7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ04scUVBQXVCO1FBQUNRLE9BQU87WUFBQ0w7WUFBYUMsZ0JBQWdCQztRQUFVO2tCQUNuRUg7Ozs7OztBQUdiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWdlcGh5c2lvZmxvcmEvLi9zcmMvY29udGV4dHMvaW5mb2JveC5wcm92aWRlci50c3g/OGYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbmZvQm94Q29udGV4dCB9IGZyb20gXCIuL2luZm9ib3guY29udGV4dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9Cb3hQcm92aWRlcih7Y2hpbGRyZW59IDoge2NoaWxkcmVuOkpTWC5FbGVtZW50fSl7XG4gICAgLy8gY29uc3QgW2luZm9Cb3hPcGVuR2VybWFuLCBzZXRJbmZvQm94T3Blbkdlcm1hbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gY29uc3QgW2luZm9Cb3hPcGVuRnJlbmNoLCBzZXRJbmZvQm94T3BlbkZyZW5jaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2luZm9Cb3hPcGVuLCBzZXRJbmZvQm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgLy8gZnVuY3Rpb24gc2V0R2VybWFuKGI6Ym9vbGVhbil7XG4gICAgLy8gICAgIHNldEluZm9Cb3hPcGVuR2VybWFuKGIpXG4gICAgLy8gfVxuICAgIC8vIGZ1bmN0aW9uIHNldEZyZW5jaChiOmJvb2xlYW4pe1xuICAgIC8vICAgICBzZXRJbmZvQm94T3BlbkZyZW5jaChiKVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHNldEluZm9Cb3goYjpib29sZWFuKXtcbiAgICAgICAgc2V0SW5mb0JveE9wZW4oYilcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxJbmZvQm94Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2luZm9Cb3hPcGVuLCBzZXRJbmZvQm94T3Blbjogc2V0SW5mb0JveH19PiBcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9JbmZvQm94Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZm9Cb3hDb250ZXh0IiwiSW5mb0JveFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbmZvQm94T3BlbiIsInNldEluZm9Cb3hPcGVuIiwic2V0SW5mb0JveCIsImIiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/infobox.provider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_comfortaa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/comfortaa */ \"./node_modules/@fontsource/comfortaa/index.css\");\n/* harmony import */ var _fontsource_comfortaa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_comfortaa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_infobox_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/infobox.provider */ \"./src/contexts/infobox.provider.tsx\");\n\n\n\n\n\nfunction App(props) {\n    const { Component , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Physiotherapie Flora\"\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.MantineProvider, {\n                withGlobalStyles: true,\n                withNormalizeCSS: true,\n                theme: {\n                    /** Put your mantine theme override here */ colorScheme: \"light\",\n                    colors: {\n                        pink: [\n                            \"#D70063\"\n                        ],\n                        blue: [\n                            \"#83CDF3\"\n                        ]\n                    },\n                    fontFamily: \"Montserrat\",\n                    headings: {\n                        fontFamily: \"Montserrat\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_infobox_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ21CO0FBQ2pCO0FBQzJCO0FBRzNDLFNBQVNHLElBQUlDLEtBQWUsRUFBRTtJQUMzQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUdGO0lBRWpDLHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUlBOztrQ0FDSCw4REFBQ087a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHaEMsOERBQUNULDBEQUFlQTtnQkFDZFUsZ0JBQWdCO2dCQUNoQkMsZ0JBQWdCO2dCQUNoQkMsT0FBTztvQkFDTCx5Q0FBeUMsR0FDekNDLGFBQWE7b0JBQ2JDLFFBQVE7d0JBQ05DLE1BQU07NEJBQUM7eUJBQVU7d0JBQ2pCQyxNQUFNOzRCQUFDO3lCQUFVO29CQUNuQjtvQkFDQUMsWUFBWTtvQkFDWkMsVUFBUzt3QkFDUEQsWUFBWTtvQkFDZDtnQkFFRjswQkFFQSw0RUFBQ2hCLGtFQUFlQTs4QkFDZCw0RUFBQ0c7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWdlcGh5c2lvZmxvcmEvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBNYW50aW5lUHJvdmlkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCBcIkBmb250c291cmNlL2NvbWZvcnRhYVwiO1xuaW1wb3J0IEluZm9Cb3hQcm92aWRlciBmcm9tIFwiQC9jb250ZXh0cy9pbmZvYm94LnByb3ZpZGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBoeXNpb3RoZXJhcGllIEZsb3JhPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TWFudGluZVByb3ZpZGVyXG4gICAgICAgIHdpdGhHbG9iYWxTdHlsZXNcbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB0aGVtZT17e1xuICAgICAgICAgIC8qKiBQdXQgeW91ciBtYW50aW5lIHRoZW1lIG92ZXJyaWRlIGhlcmUgKi9cbiAgICAgICAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICAgIHBpbms6IFtcIiNENzAwNjNcIl0sXG4gICAgICAgICAgICBibHVlOiBbXCIjODNDREYzXCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcbiAgICAgICAgICBoZWFkaW5nczp7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbmZvQm94UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0luZm9Cb3hQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiTWFudGluZVByb3ZpZGVyIiwiSW5mb0JveFByb3ZpZGVyIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsInBpbmsiLCJibHVlIiwiZm9udEZhbWlseSIsImhlYWRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@fontsource/comfortaa/index.css":
/*!******************************************************!*\
  !*** ./node_modules/@fontsource/comfortaa/index.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();