webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 200 100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 8)\",\n    fontSize: \"6px\",\n    fontWeight: \"300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 50)\",\n    fontSize: \"6px\",\n    fontWeight: \"300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"How did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 5 * i + 12;\n\n    if (church.minutes.length === 1) {\n      return __jsx(\"rect\", {\n        height: 4,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }\n      });\n    }\n\n    return church.minutes.map(function (occasion, j) {\n      var _church$minutes;\n\n      return __jsx(\"rect\", {\n        height: 4,\n        width: occasion.length,\n        transform: \"translate(\".concat(((_church$minutes = church.minutes[i - 1]) === null || _church$minutes === void 0 ? void 0 : _church$minutes.length) || 0, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }\n      });\n    });\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJtYXAiLCJjaHVyY2giLCJpIiwidmVydGljYWxDb29yZGluYXRlIiwibWludXRlcyIsImxlbmd0aCIsIm9jY2FzaW9uIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFILG1CQUFqQjtBQVFBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxvQkFETDtBQUViQyx3QkFBc0IsRUFBRSxvQkFGWDtBQUdiQyxXQUFTLEVBQUUsa0JBSEU7QUFJYkMsZ0JBQWMsRUFBRTtBQUpILENBQWY7QUFPQSxJQUFNQyxVQUFVLEdBQUdOLHlEQUFILG9CQUFoQjs7QUFLQSxJQUFNTyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUFRO0FBQUE7O0FBQ3ZDLFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUMsTUFBekI7QUFBZ0MsV0FBTyxFQUFDLGFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUQsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUF3RCxZQUFRLEVBQUMsS0FBakU7QUFBdUUsY0FBVSxFQUFDLEtBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFJRTtBQUFNLGFBQVMsRUFBRUEsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGlCQUF2QztBQUF5RCxZQUFRLEVBQUMsS0FBbEU7QUFBd0UsY0FBVSxFQUFDLEtBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZCxFQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDMUMsUUFBTUMsa0JBQWtCLEdBQUcsSUFBSUQsQ0FBSixHQUFRLEVBQW5DOztBQUNBLFFBQUlELE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQy9CLGFBQ0U7QUFDRSxjQUFNLEVBQUUsQ0FEVjtBQUVFLGFBQUssRUFBRUosTUFBTSxDQUFDRyxPQUFQLENBQWUsQ0FBZixFQUFrQkMsTUFGM0I7QUFHRSxpQkFBUyx3QkFBaUJGLGtCQUFqQixNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQU9EOztBQUVELFdBQU9GLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSixHQUFmLENBQW1CLFVBQUNNLFFBQUQsRUFBV0MsQ0FBWCxFQUFpQjtBQUFBOztBQUN6QyxhQUNFO0FBQ0UsY0FBTSxFQUFFLENBRFY7QUFFRSxhQUFLLEVBQUVELFFBQVEsQ0FBQ0QsTUFGbEI7QUFHRSxpQkFBUyxzQkFDUCxvQkFBQUosTUFBTSxDQUFDRyxPQUFQLENBQWVGLENBQUMsR0FBRyxDQUFuQixxRUFBdUJHLE1BQXZCLEtBQWlDLENBRDFCLGNBRUxGLGtCQUZLLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBU0QsS0FWTSxDQUFQO0FBV0QsR0F2QkEsQ0FESCxDQVJGLENBREYsQ0FERjtBQXVDRCxDQXhDRDs7S0FBTVAsYztBQTBDU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TdWJzdGFuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWNrLCBoaWVyYXJjaHkgfSBmcm9tICdkMy1oaWVyYXJjaHknXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4vbWV0YWRhdGEnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbn1cblxuY29uc3QgY2lyY2xlQ2xhc3MgPSBjc3NgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgb3BhY2l0eTogNTAlO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA5MCU7XG4gIH1cbmBcblxuY29uc3QgbGFiZWxzID0ge1xuICB0d2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChwYXN0b3IpJyxcbiAgY2h1cmNoVHdpdHRlckZvbGxvd2VyczogJ0ZvbGxvd2VycyAoY2h1cmNoKScsXG4gIGF0dGVuZGVlczogJ0NodXJjaCBBdHRlbmRlZXMnLFxuICBwb2RjYXN0UmV2aWV3czogJ1BvZGNhc3QgUmV2aWV3cycsXG59XG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbmBcblxuY29uc3QgU3Vic3RhbmNlQ2hhcnQ6IFJlYWN0LkZDID0gKHt9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgPHN2ZyBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAyMDAgMTAwXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgOClcIiBmb250U2l6ZT1cIjZweFwiIGZvbnRXZWlnaHQ9XCIzMDBcIj5cbiAgICAgICAgICBIb3cgbG9uZyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDUwKVwiIGZvbnRTaXplPVwiNnB4XCIgZm9udFdlaWdodD1cIjMwMFwiPlxuICAgICAgICAgIEhvdyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgPC90ZXh0PlxuXG4gICAgICAgIDxnPlxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGNodXJjaGVzKS5tYXAoKGNodXJjaCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDb29yZGluYXRlID0gNSAqIGkgKyAxMlxuICAgICAgICAgICAgaWYgKGNodXJjaC5taW51dGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y2h1cmNoLm1pbnV0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAgJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2h1cmNoLm1pbnV0ZXMubWFwKChvY2Nhc2lvbiwgaikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17b2NjYXNpb24ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7XG4gICAgICAgICAgICAgICAgICAgIGNodXJjaC5taW51dGVzW2kgLSAxXT8ubGVuZ3RoIHx8IDBcbiAgICAgICAgICAgICAgICAgIH0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic3RhbmNlQ2hhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})