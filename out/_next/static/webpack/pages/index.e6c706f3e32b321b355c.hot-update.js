webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ServicesSection /index.js":
/*!**********************************************!*\
  !*** ./components/ServicesSection /index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VydmljZXNTZWN0aW9uIC9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ServicesSection /index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BlogSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogSection */ \"./components/BlogSection/index.js\");\n/* harmony import */ var _components_ClientBrandSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ClientBrandSection */ \"./components/ClientBrandSection/index.js\");\n/* harmony import */ var _components_ContactSection___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContactSection  */ \"./components/ContactSection /index.js\");\n/* harmony import */ var _components_CounterSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CounterSection */ \"./components/CounterSection/index.js\");\n/* harmony import */ var _components_DownloadSection___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DownloadSection  */ \"./components/DownloadSection /index.js\");\n/* harmony import */ var _components_FeaturesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FeaturesSection */ \"./components/FeaturesSection/index.js\");\n/* harmony import */ var _components_PortfolioSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PortfolioSection */ \"./components/PortfolioSection/index.js\");\n/* harmony import */ var _components_PricingTableSection___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PricingTableSection  */ \"./components/PricingTableSection /index.js\");\n/* harmony import */ var _components_ServicesSection___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ServicesSection  */ \"./components/ServicesSection /index.js\");\n/* harmony import */ var _components_ServicesSection___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_ServicesSection___WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_SubcribeSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SubcribeSection */ \"./components/SubcribeSection/index.js\");\n/* harmony import */ var _components_TestimonialSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TestimonialSection */ \"./components/TestimonialSection/index.js\");\n/* harmony import */ var _components_VideoPromoSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/VideoPromoSection */ \"./components/VideoPromoSection/index.js\");\n\n\nvar _jsxFileName = \"/home/gmak/Bureau/oholiab-project/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ServicesSection___WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FeaturesSection__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_VideoPromoSection__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PortfolioSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CounterSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TestimonialSection__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ClientBrandSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ContactSection___WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SubcribeSection__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUUscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBV0UscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBWUUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUEsa0JBREY7QUFnQkQ7S0FqQnVCQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCbG9nU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nU2VjdGlvblwiO1xuaW1wb3J0IENsaWVudEJyYW5kU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DbGllbnRCcmFuZFNlY3Rpb25cIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbiBcIjtcbmltcG9ydCBDb3VudGVyU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyU2VjdGlvblwiO1xuaW1wb3J0IERvd25sb2FkU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Eb3dubG9hZFNlY3Rpb24gXCI7XG5pbXBvcnQgRmVhdHVyZXNTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVzU2VjdGlvblwiO1xuaW1wb3J0IFBvcnRmb2xpb1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9ydGZvbGlvU2VjdGlvblwiO1xuaW1wb3J0IFByaWNpbmdUYWJsZVNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJpY2luZ1RhYmxlU2VjdGlvbiBcIjtcbmltcG9ydCBTZXJ2aWNlc1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZXNTZWN0aW9uIFwiO1xuaW1wb3J0IFN1YmNyaWJlU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJjcmliZVNlY3Rpb25cIjtcbmltcG9ydCBUZXN0aW1vbmlhbFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxTZWN0aW9uXCI7XG5pbXBvcnQgVmlkZW9Qcm9tb1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlkZW9Qcm9tb1NlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlcnZpY2VzU2VjdGlvbiAvPlxuICAgICAgPEZlYXR1cmVzU2VjdGlvbiAvPlxuICAgICAgPFZpZGVvUHJvbW9TZWN0aW9uIC8+XG4gICAgICA8UG9ydGZvbGlvU2VjdGlvbiAvPlxuICAgICAgey8qIDxQcmljaW5nVGFibGVTZWN0aW9uIC8+ICovfVxuICAgICAgPENvdW50ZXJTZWN0aW9uIC8+XG4gICAgICA8VGVzdGltb25pYWxTZWN0aW9uIC8+XG4gICAgICA8Q2xpZW50QnJhbmRTZWN0aW9uIC8+XG4gICAgICB7LyogPERvd25sb2FkU2VjdGlvbiAvPiAqL31cbiAgICAgIHsvKiA8QmxvZ1NlY3Rpb24gLz4gKi99XG4gICAgICA8Q29udGFjdFNlY3Rpb24gLz5cbiAgICAgIDxTdWJjcmliZVNlY3Rpb24gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})