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
exports.id = "pages/map";
exports.ids = ["pages/map"];
exports.modules = {

/***/ "./src/pages/map.tsx":
/*!***************************!*\
  !*** ./src/pages/map.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Map)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ \"@react-google-maps/api\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // cache calculations between re-renders\nfunction Map() {\n    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyBAdNFA1jAG-EN0FFqtzq6H17yQOEl-w7Q\"\n    });\n    const mapCenter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({\n            lat: 47.138568697122636,\n            lng: 7.249745541680579\n        }), []);\n    const mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({\n            disableDefaultUI: true,\n            clickableIcons: true,\n            scrollwheel: false\n        }), []);\n    if (!isLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/map.tsx\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.GoogleMap, {\n        options: mapOptions,\n        zoom: 16,\n        center: mapCenter,\n        mapTypeId: google.maps.MapTypeId.ROADMAP,\n        mapContainerStyle: {\n            width: \"800px\",\n            height: \"800px\"\n        },\n        onLoad: ()=>console.log(\"Map Component Loaded...\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.MarkerF, {\n            position: mapCenter,\n            onLoad: ()=>console.log(\"Marker Loaded\")\n        }, void 0, false, {\n            fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/map.tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klusertim/Projects/JS/PhysioFlora/WebsitePhysioFlora/webpagephysioflora/src/pages/map.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUU7QUFDekMsQ0FBQyx3Q0FBd0M7QUFFMUQsU0FBU0ksTUFBSztJQUV6QixNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixxRUFBYUEsQ0FBQztRQUMvQkssa0JBQWtCQyx5Q0FBdUM7SUFDM0Q7SUFHRixNQUFNRyxZQUFZUCw4Q0FBT0EsQ0FDckIsSUFBTztZQUFFUSxLQUFLO1lBQW9CQyxLQUFLO1FBQWtCLElBQ3pELEVBQUU7SUFHTixNQUFNQyxhQUFhViw4Q0FBT0EsQ0FDMUIsSUFBTztZQUNIVyxrQkFBa0IsSUFBSTtZQUN0QkMsZ0JBQWdCLElBQUk7WUFDcEJDLGFBQWEsS0FBSztRQUN0QixJQUNBLEVBQUU7SUFHRixJQUFJLENBQUNYLFVBQVU7UUFDZixxQkFBTyw4REFBQ1k7c0JBQUU7Ozs7OztJQUNWLENBQUM7SUFFRCxxQkFDSSw4REFBQ2pCLDZEQUFTQTtRQUNWa0IsU0FBU0w7UUFDVE0sTUFBTTtRQUNOQyxRQUFRVjtRQUNSVyxXQUFXQyxPQUFPQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTztRQUN4Q0MsbUJBQW1CO1lBQUVDLE9BQU87WUFBU0MsUUFBUTtRQUFRO1FBQ3JEQyxRQUFRLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztrQkFFMUIsNEVBQUM3QiwyREFBT0E7WUFBQzhCLFVBQVV0QjtZQUFXbUIsUUFBUSxJQUFNQyxRQUFRQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7O0FBR2hFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWdlcGh5c2lvZmxvcmEvLi9zcmMvcGFnZXMvbWFwLnRzeD83MDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R29vZ2xlTWFwLCB1c2VMb2FkU2NyaXB0LCBNYXJrZXJGfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiOyAvLyBjYWNoZSBjYWxjdWxhdGlvbnMgYmV0d2VlbiByZS1yZW5kZXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpe1xuXG4gICAgY29uc3QgeyBpc0xvYWRlZCB9ID0gdXNlTG9hZFNjcmlwdCh7XG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0tFWSBhcyBzdHJpbmcsXG4gICAgICB9KTtcbiAgICBcblxuICAgIGNvbnN0IG1hcENlbnRlciA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7IGxhdDogNDcuMTM4NTY4Njk3MTIyNjM2LCBsbmc6IDcuMjQ5NzQ1NTQxNjgwNTc5IH0pLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICBcbiAgICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbzxnb29nbGUubWFwcy5NYXBPcHRpb25zPihcbiAgICAoKSA9PiAoe1xuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICBjbGlja2FibGVJY29uczogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgIH0pLFxuICAgIFtdXG4gICAgKTtcblxuICAgIGlmICghaXNMb2FkZWQpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICBvcHRpb25zPXttYXBPcHRpb25zfVxuICAgICAgICB6b29tPXsxNn1cbiAgICAgICAgY2VudGVyPXttYXBDZW50ZXJ9XG4gICAgICAgIG1hcFR5cGVJZD17Z29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVB9XG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXt7IHdpZHRoOiAnODAwcHgnLCBoZWlnaHQ6ICc4MDBweCcgfX1cbiAgICAgICAgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZygnTWFwIENvbXBvbmVudCBMb2FkZWQuLi4nKX1cbiAgICAgID5cbiAgICAgICAgPE1hcmtlckYgcG9zaXRpb249e21hcENlbnRlcn0gb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZygnTWFya2VyIExvYWRlZCcpfSAvPlxuICAgICAgPC9Hb29nbGVNYXA+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJHb29nbGVNYXAiLCJ1c2VMb2FkU2NyaXB0IiwiTWFya2VyRiIsInVzZU1lbW8iLCJNYXAiLCJpc0xvYWRlZCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfS0VZIiwibWFwQ2VudGVyIiwibGF0IiwibG5nIiwibWFwT3B0aW9ucyIsImRpc2FibGVEZWZhdWx0VUkiLCJjbGlja2FibGVJY29ucyIsInNjcm9sbHdoZWVsIiwicCIsIm9wdGlvbnMiLCJ6b29tIiwiY2VudGVyIiwibWFwVHlwZUlkIiwiZ29vZ2xlIiwibWFwcyIsIk1hcFR5cGVJZCIsIlJPQURNQVAiLCJtYXBDb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/map.tsx\n");

/***/ }),

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/map.tsx"));
module.exports = __webpack_exports__;

})();