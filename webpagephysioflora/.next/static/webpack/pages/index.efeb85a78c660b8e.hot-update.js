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

/***/ "./src/components/offer.tsx":
/*!**********************************!*\
  !*** ./src/components/offer.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OfferPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({}));\nfunction OfferPage() {\n    _s();\n    const { classes  } = useStyles();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setOpened(true);\n            }\n        }, {\n            root: null,\n            rootMargin: \"-100px\",\n            threshold: 1 // Intersection ratio threshold for triggering action\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            h: \"100vh\",\n            w: \"100vw\",\n            m: 0,\n            p: 0,\n            align: \"flex-start\",\n            justify: \"center\",\n            mt: -0.257,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Transition, {\n                    transition: \"fade\",\n                    mounted: opened,\n                    onEnter: ()=>setOpened(true),\n                    duration: 2000,\n                    children: (styles)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                            style: styles,\n                            children: \"Angebot\"\n                        }, void 0, false, {\n                            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 38\n                        }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer.tsx\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/components/offer.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(OfferPage, \"dupQU/YbfmA+nE7P2dZV9LOS8DA=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = OfferPage;\nvar _c;\n$RefreshReg$(_c, \"OfferPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTJFO0FBQ3ZCO0FBSXBELE1BQU1RLFlBQVlSLDJEQUFZQSxDQUFDLENBQUNTLFFBQVcsRUFFekM7QUFFYSxTQUFTQyxZQUFXOztJQUUvQixNQUFNLEVBQUNDLFFBQU8sRUFBQyxHQUFHSDtJQUNsQixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNTyxNQUFNUiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXpCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsV0FBVyxJQUFJQyxxQkFDbkIsU0FBYTtnQkFBWixDQUFDQyxNQUFNO1lBQ04sSUFBSUEsTUFBTUMsY0FBYyxFQUFFO2dCQUN4QkwsVUFBVSxJQUFJO1lBQ2hCLENBQUM7UUFDSCxHQUNBO1lBQ0VNLE1BQU0sSUFBSTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVcsRUFBRSxxREFBcUQ7UUFDcEU7UUFHRixJQUFJUCxJQUFJUSxPQUFPLEVBQUU7WUFDZlAsU0FBU1EsT0FBTyxDQUFDVCxJQUFJUSxPQUFPO1FBQzlCLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWFAsU0FBU1MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSTtJQUVOLHFCQUNJO2tCQUNJLDRFQUFDYiwrQ0FBSUE7WUFBQ3dCLEdBQUU7WUFBUUMsR0FBRTtZQUFRQyxHQUFHO1lBQUdDLEdBQUc7WUFBR0MsT0FBTTtZQUFhQyxTQUFRO1lBQVNDLElBQUksQ0FBQztzQkFDM0UsNEVBQUMzQiw4Q0FBR0E7Z0JBQUNVLEtBQUtBOzBCQUNOLDRFQUFDWCxxREFBVUE7b0JBQUM2QixZQUFXO29CQUFPQyxTQUFTckI7b0JBQVFzQixTQUFTLElBQU1yQixVQUFVLElBQUk7b0JBQUdzQixVQUFVOzhCQUNwRixDQUFDQyx1QkFBVyw4REFBQ2xDLGdEQUFLQTs0QkFBQ21DLE9BQU9EO3NDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNELENBQUM7R0F6Q3VCMUI7O1FBRUZGOzs7S0FGRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb2ZmZXIudHN4PzFkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBGbGV4LCBUaXRsZSwgVHJhbnNpdGlvbiwgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheWVyZWRXYXZlcyBmcm9tIFwiLi9sYXllcmVkV2F2ZXNcIlxuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICBcbiAgfSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZlclBhZ2UoKXtcblxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoW2VudHJ5XSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBzZXRPcGVuZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHJvb3RNYXJnaW46ICctMTAwcHgnLFxuICAgICAgICB0aHJlc2hvbGQ6IDEgLy8gSW50ZXJzZWN0aW9uIHJhdGlvIHRocmVzaG9sZCBmb3IgdHJpZ2dlcmluZyBhY3Rpb25cbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtyZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8RmxleCBoPVwiMTAwdmhcIiB3PVwiMTAwdndcIiBtPXswfSBwPXswfSBhbGlnbj1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5PVwiY2VudGVyXCIgbXQ9ey0wLjI1N30gPlxuICAgICAgICAgICAgICAgIDxCb3ggcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbiB0cmFuc2l0aW9uPVwiZmFkZVwiIG1vdW50ZWQ9e29wZW5lZH0gb25FbnRlcj17KCkgPT4gc2V0T3BlbmVkKHRydWUpfSBkdXJhdGlvbj17MjAwMH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhzdHlsZXMpID0+IDxUaXRsZSBzdHlsZT17c3R5bGVzfT5BbmdlYm90PC9UaXRsZT59XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICB7LyogPExheWVyZWRXYXZlcyBvZmZzZXRZPXswfSByb3RhdGlvbj17MTgwfS8+ICovfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIkZsZXgiLCJUaXRsZSIsIlRyYW5zaXRpb24iLCJCb3giLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiT2ZmZXJQYWdlIiwiY2xhc3NlcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJoIiwidyIsIm0iLCJwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXQiLCJ0cmFuc2l0aW9uIiwibW91bnRlZCIsIm9uRW50ZXIiLCJkdXJhdGlvbiIsInN0eWxlcyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/offer.tsx\n"));

/***/ })

});