"use strict";
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
exports.id = "pages/animation";
exports.ids = ["pages/animation"];
exports.modules = {

/***/ "./src/pages/animation.tsx":
/*!*********************************!*\
  !*** ./src/pages/animation.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst svgVariants = {\n    visible: {\n        scaleX: [\n            1,\n            1.1,\n            0.9,\n            1\n        ],\n        scaleY: [\n            0.9,\n            1,\n            1.1,\n            0.9\n        ],\n        transition: {\n            repeat: Infinity,\n            duration: 10,\n            ease: \"linear\",\n            type: \"spring\"\n        }\n    }\n};\nfunction Animation() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref\n    });\n    console.log(scrollYProgress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 1100,\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"blue\",\n                    height: \"100vh\",\n                    width: 200\n                },\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    className: \"box\",\n                    animate: {\n                        scale: [\n                            1,\n                            2,\n                            2,\n                            1,\n                            1\n                        ],\n                        rotate: [\n                            0,\n                            0,\n                            180,\n                            180,\n                            0\n                        ],\n                        borderRadius: [\n                            \"0%\",\n                            \"0%\",\n                            \"50%\",\n                            \"50%\",\n                            \"0%\"\n                        ]\n                    },\n                    transition: {\n                        duration: 2,\n                        ease: \"easeInOut\",\n                        times: [\n                            0,\n                            0.2,\n                            0.5,\n                            0.8,\n                            1\n                        ],\n                        repeatDelay: 1\n                    },\n                    style: {\n                        backgroundColor: \"red\"\n                    },\n                    children: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.svg, {\n                width: \"1217\",\n                height: \"1296\",\n                viewBox: \"0 0 1217 1296\",\n                fill: \"none\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                variants: svgVariants,\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M470.693 1051.13C416.297 1152.89 460.312 1269.07 352.247 1293.8C250.569 1314.32 112.914 1186.17 56.7963 1119.53C-29.4433 1015.36 1.34384 689.865 27.5174 540.142C50.9405 395.46 188.551 197.071 254.428 115.961C353.977 -17.6719 644.37 -23.4598 766.809 36.3864C889.248 96.2322 939.155 187.206 999.043 255.382C1067.18 336.403 1027.44 435.576 999.043 475.035C949.802 540.142 957.787 601.302 1028.32 632.211C1084.75 656.939 1230.61 677.589 1215.97 784.128C1185.36 903.161 914.135 903.161 819.378 903.161C712.687 906.011 545.221 911.711 470.693 1051.13Z\",\n                    fill: \"#62C3F5\",\n                    \"fill-opacity\": \"0.3\"\n                }, void 0, false, {\n                    fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                style: {\n                    position: \"absolute\",\n                    top: 500,\n                    left: 500,\n                    backgroundColor: \"green\",\n                    opacity: scrollYProgress\n                },\n                children: \"Hello2\"\n            }, void 0, false, {\n                fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/animation.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNrQjtBQUVqRCxNQUFNRyxjQUFjO0lBQ2hCQyxTQUFRO1FBQ0pDLFFBQVE7WUFBQztZQUFHO1lBQUs7WUFBSztTQUFFO1FBQ3hCQyxRQUFRO1lBQUM7WUFBSztZQUFHO1lBQUs7U0FBSTtRQUMxQkMsWUFBVztZQUNQQyxRQUFRQztZQUNSQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsTUFBTTtRQUNWO0lBQ0o7QUFFSjtBQUVlLFNBQVNDLFlBQVc7SUFDL0IsTUFBTUMsTUFBTWQsNkNBQU1BLENBQUMsSUFBSTtJQUN2QixNQUFNLEVBQUVlLGdCQUFlLEVBQUUsR0FBR2Isd0RBQVNBLENBQUM7UUFBRWMsUUFBUUY7SUFBSTtJQUNwREcsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNJLDhEQUFDSTtRQUFJQyxPQUFPO1lBQUNDLFFBQVE7WUFBTUMsU0FBUztRQUFNOzswQkFDMUMsOERBQUNIO2dCQUFJQyxPQUFPO29CQUFDRyxpQkFBaUI7b0JBQVFGLFFBQVE7b0JBQVNHLE9BQU87Z0JBQUc7Z0JBQUdWLEtBQU9BOzBCQUN2RSw0RUFBQ2IscURBQVU7b0JBQ2Z3QixXQUFVO29CQUNWQyxTQUFTO3dCQUNMQyxPQUFPOzRCQUFDOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHO3lCQUFFO3dCQUN0QkMsUUFBUTs0QkFBQzs0QkFBRzs0QkFBRzs0QkFBSzs0QkFBSzt5QkFBRTt3QkFDM0JDLGNBQWM7NEJBQUM7NEJBQU07NEJBQU07NEJBQU87NEJBQU87eUJBQUs7b0JBQ2xEO29CQUNBdEIsWUFBWTt3QkFDUkcsVUFBVTt3QkFDVkMsTUFBTTt3QkFDTm1CLE9BQU87NEJBQUM7NEJBQUc7NEJBQUs7NEJBQUs7NEJBQUs7eUJBQUU7d0JBQzVCQyxhQUFhO29CQUNqQjtvQkFBR1gsT0FBTzt3QkFBQ0csaUJBQWlCO29CQUFLOzhCQUNoQzs7Ozs7Ozs7Ozs7MEJBRUQsOERBQUN0QixxREFBVTtnQkFBRXVCLE9BQU07Z0JBQU9ILFFBQU87Z0JBQU9ZLFNBQVE7Z0JBQWdCQyxNQUFLO2dCQUFPQyxPQUFNO2dCQUM5RUMsVUFBWWpDO2dCQUNadUIsU0FBUTswQkFFUiw0RUFBQ1c7b0JBQUtDLEdBQUU7b0JBQW9pQkosTUFBSztvQkFBVUssZ0JBQWE7Ozs7Ozs7Ozs7OzBCQUU1a0IsOERBQUN0QyxxREFBVTtnQkFBQ21CLE9BQU87b0JBQUNvQixVQUFTO29CQUFZQyxLQUFLO29CQUFLQyxNQUFNO29CQUFLbkIsaUJBQWlCO29CQUFTb0IsU0FBUzVCO2dCQUFlOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFJM0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhZ2VwaHlzaW9mbG9yYS8uL3NyYy9wYWdlcy9hbmltYXRpb24udHN4PzQ0MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIlxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuY29uc3Qgc3ZnVmFyaWFudHMgPSB7XG4gICAgdmlzaWJsZTp7XG4gICAgICAgIHNjYWxlWDogWzEsIDEuMSwgMC45LCAxXSxcbiAgICAgICAgc2NhbGVZOiBbMC45LCAxLCAxLjEsIDAuOV0sXG4gICAgICAgIHRyYW5zaXRpb246e1xuICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiXG4gICAgICAgIH0sXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGlvbigpe1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHsgdGFyZ2V0OiByZWYgfSk7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsWVByb2dyZXNzKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMTEwMCwgZGlzcGxheTogXCJmbGV4XCJ9fSA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IDIwMH19IHJlZiA9IHtyZWZ9ID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZTogWzEsIDIsIDIsIDEsIDFdLFxuICAgICAgICAgICAgcm90YXRlOiBbMCwgMCwgMTgwLCAxODAsIDBdLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBbXCIwJVwiLCBcIjAlXCIsIFwiNTAlXCIsIFwiNTAlXCIsIFwiMCVcIl1cbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgdGltZXM6IFswLCAwLjIsIDAuNSwgMC44LCAxXSxcbiAgICAgICAgICAgIHJlcGVhdERlbGF5OiAxXG4gICAgICAgIH19IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJlZFwifX1cbiAgICAgICAgPkhlbGxvPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1vdGlvbi5zdmcgIHdpZHRoPVwiMTIxN1wiIGhlaWdodD1cIjEyOTZcIiB2aWV3Qm94PVwiMCAwIDEyMTcgMTI5NlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2YXJpYW50cyA9IHtzdmdWYXJpYW50c31cbiAgICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00NzAuNjkzIDEwNTEuMTNDNDE2LjI5NyAxMTUyLjg5IDQ2MC4zMTIgMTI2OS4wNyAzNTIuMjQ3IDEyOTMuOEMyNTAuNTY5IDEzMTQuMzIgMTEyLjkxNCAxMTg2LjE3IDU2Ljc5NjMgMTExOS41M0MtMjkuNDQzMyAxMDE1LjM2IDEuMzQzODQgNjg5Ljg2NSAyNy41MTc0IDU0MC4xNDJDNTAuOTQwNSAzOTUuNDYgMTg4LjU1MSAxOTcuMDcxIDI1NC40MjggMTE1Ljk2MUMzNTMuOTc3IC0xNy42NzE5IDY0NC4zNyAtMjMuNDU5OCA3NjYuODA5IDM2LjM4NjRDODg5LjI0OCA5Ni4yMzIyIDkzOS4xNTUgMTg3LjIwNiA5OTkuMDQzIDI1NS4zODJDMTA2Ny4xOCAzMzYuNDAzIDEwMjcuNDQgNDM1LjU3NiA5OTkuMDQzIDQ3NS4wMzVDOTQ5LjgwMiA1NDAuMTQyIDk1Ny43ODcgNjAxLjMwMiAxMDI4LjMyIDYzMi4yMTFDMTA4NC43NSA2NTYuOTM5IDEyMzAuNjEgNjc3LjU4OSAxMjE1Ljk3IDc4NC4xMjhDMTE4NS4zNiA5MDMuMTYxIDkxNC4xMzUgOTAzLjE2MSA4MTkuMzc4IDkwMy4xNjFDNzEyLjY4NyA5MDYuMDExIDU0NS4yMjEgOTExLjcxMSA0NzAuNjkzIDEwNTEuMTNaXCIgZmlsbD1cIiM2MkMzRjVcIiBmaWxsLW9wYWNpdHk9XCIwLjNcIi8+XG4gICAgICAgIDwvbW90aW9uLnN2Zz5cbiAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDogNTAwLCBsZWZ0OiA1MDAsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLCBvcGFjaXR5OiBzY3JvbGxZUHJvZ3Jlc3N9fT5IZWxsbzI8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJlZiIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInN2Z1ZhcmlhbnRzIiwidmlzaWJsZSIsInNjYWxlWCIsInNjYWxlWSIsInRyYW5zaXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsImR1cmF0aW9uIiwiZWFzZSIsInR5cGUiLCJBbmltYXRpb24iLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJjbGFzc05hbWUiLCJhbmltYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJib3JkZXJSYWRpdXMiLCJ0aW1lcyIsInJlcGVhdERlbGF5Iiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInZhcmlhbnRzIiwicGF0aCIsImQiLCJmaWxsLW9wYWNpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animation.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/animation.tsx"));
module.exports = __webpack_exports__;

})();