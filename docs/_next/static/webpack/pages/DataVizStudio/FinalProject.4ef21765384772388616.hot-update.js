webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 75 50\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_4__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    if (church.minutes.length === 1) {\n      return __jsx(\"rect\", {\n        height: 2,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      });\n    }\n\n    return church.minutes.map(function (occasion, j) {\n      return __jsx(\"rect\", {\n        key: 'thing' + j,\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      });\n    });\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_4__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n    var dots = [];\n\n    var addDot = function addDot(_ref2) {\n      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n          category = _ref3[0],\n          n = _ref3[1];\n\n      new Array(n).fill(true).forEach(function () {\n        return dots.push(__jsx(\"circle\", {\n          transform: \"translate(\".concat(dots.length * 2.5 + 1, \" \").concat(verticalCoordinate, \")\"),\n          r: \"1\",\n          fill: category === 'problematicStatements' ? 'red' : 'black',\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 21\n          }\n        }));\n      });\n    };\n\n    Object.keys(church.problematicStatements).forEach(addDot);\n    Object.entries(church.notAsProblematicStatements).forEach(addDot);\n    return dots;\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJtYXAiLCJjaHVyY2giLCJpIiwidmVydGljYWxDb29yZGluYXRlIiwibWludXRlcyIsImxlbmd0aCIsIm9jY2FzaW9uIiwiaiIsImRvdHMiLCJhZGREb3QiLCJjYXRlZ29yeSIsIm4iLCJBcnJheSIsImZpbGwiLCJmb3JFYWNoIiwicHVzaCIsImtleXMiLCJwcm9ibGVtYXRpY1N0YXRlbWVudHMiLCJlbnRyaWVzIiwibm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFILG1CQUFqQjtBQVFBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxvQkFETDtBQUViQyx3QkFBc0IsRUFBRSxvQkFGWDtBQUdiQyxXQUFTLEVBQUUsa0JBSEU7QUFJYkMsZ0JBQWMsRUFBRTtBQUpILENBQWY7QUFPQSxJQUFNQyxVQUFVLEdBQUdOLHlEQUFILG9CQUFoQjs7QUFPQSxJQUFNTyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUFRO0FBQUE7O0FBQ3ZDLFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUMsTUFBekI7QUFBZ0MsV0FBTyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUQsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0Msa0RBQWQsRUFBd0JDLEdBQXhCLENBQTRCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQzFDLFFBQU1DLGtCQUFrQixHQUFHLE1BQU1ELENBQU4sR0FBVSxDQUFyQzs7QUFDQSxRQUFJRCxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUNFO0FBQ0UsY0FBTSxFQUFFLENBRFY7QUFFRSxhQUFLLEVBQUVKLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLENBQWYsRUFBa0JDLE1BRjNCO0FBR0UsaUJBQVMsd0JBQWlCRixrQkFBakIsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFPRDs7QUFFRCxXQUFPRixNQUFNLENBQUNHLE9BQVAsQ0FBZUosR0FBZixDQUFtQixVQUFDTSxRQUFELEVBQVdDLENBQVgsRUFBaUI7QUFDekMsYUFDRTtBQUNFLFdBQUcsRUFBRSxVQUFVQSxDQURqQjtBQUVFLGNBQU0sRUFBRSxDQUZWO0FBR0UsYUFBSyxFQUFFRCxRQUFRLENBQUNELE1BSGxCO0FBSUUsaUJBQVMsc0JBQ1BKLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsSUFBd0JOLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JGLE1BQXRCLEdBQStCLEdBQXZELEdBQTZELENBRHRELGNBRUxGLGtCQUZLLE1BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBVUQsS0FYTSxDQUFQO0FBWUQsR0F4QkEsQ0FESCxDQUxGLEVBZ0NFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVIsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBSUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZCxFQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDMUMsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTUQsQ0FBTixHQUFVLENBQXJDO0FBQ0EsUUFBTU0sSUFBSSxHQUFHLEVBQWI7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBbUI7QUFBQTtBQUFBLFVBQWpCQyxRQUFpQjtBQUFBLFVBQVBDLENBQU87O0FBQ2hDLFVBQUlDLEtBQUosQ0FBVUQsQ0FBVixFQUNHRSxJQURILENBQ1EsSUFEUixFQUVHQyxPQUZILENBRVc7QUFBQSxlQUNQTixJQUFJLENBQUNPLElBQUwsQ0FDRTtBQUNFLG1CQUFTLHNCQUFlUCxJQUFJLENBQUNILE1BQUwsR0FBYyxHQUFkLEdBQW9CLENBQW5DLGNBQXdDRixrQkFBeEMsTUFEWDtBQUVFLFdBQUMsRUFBQyxHQUZKO0FBR0UsY0FBSSxFQUFFTyxRQUFRLEtBQUssdUJBQWIsR0FBdUMsS0FBdkMsR0FBK0MsT0FIdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBRE87QUFBQSxPQUZYO0FBV0QsS0FaRDs7QUFhQWIsVUFBTSxDQUFDbUIsSUFBUCxDQUFZZixNQUFNLENBQUNnQixxQkFBbkIsRUFBMENILE9BQTFDLENBQWtETCxNQUFsRDtBQUNBWixVQUFNLENBQUNxQixPQUFQLENBQWVqQixNQUFNLENBQUNrQiwwQkFBdEIsRUFBa0RMLE9BQWxELENBQTBETCxNQUExRDtBQUNBLFdBQU9ELElBQVA7QUFDRCxHQXBCQSxDQUpILENBaENGLENBREYsQ0FERjtBQStERCxDQWhFRDs7S0FBTVosYztBQWtFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TdWJzdGFuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWNrLCBoaWVyYXJjaHkgfSBmcm9tICdkMy1oaWVyYXJjaHknXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4vbWV0YWRhdGEnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbn1cblxuY29uc3QgY2lyY2xlQ2xhc3MgPSBjc3NgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgb3BhY2l0eTogNTAlO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA5MCU7XG4gIH1cbmBcblxuY29uc3QgbGFiZWxzID0ge1xuICB0d2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChwYXN0b3IpJyxcbiAgY2h1cmNoVHdpdHRlckZvbGxvd2VyczogJ0ZvbGxvd2VycyAoY2h1cmNoKScsXG4gIGF0dGVuZGVlczogJ0NodXJjaCBBdHRlbmRlZXMnLFxuICBwb2RjYXN0UmV2aWV3czogJ1BvZGNhc3QgUmV2aWV3cycsXG59XG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbiAgZm9udC1zaXplOiAxLjc1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gXG5cbmNvbnN0IFN1YnN0YW5jZUNoYXJ0OiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNzUgNTBcIj5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAyKVwiPlxuICAgICAgICAgIEhvdyBsb25nIGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgPGc+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgaWYgKGNodXJjaC5taW51dGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y2h1cmNoLm1pbnV0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAgJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2h1cmNoLm1pbnV0ZXMubWFwKChvY2Nhc2lvbiwgaikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBrZXk9eyd0aGluZycgKyBqfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e29jY2FzaW9uLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke1xuICAgICAgICAgICAgICAgICAgICBjaHVyY2gubWludXRlc1tqIC0gMV0gPyBjaHVyY2gubWludXRlc1tqIC0gMV0ubGVuZ3RoICsgMC41IDogMFxuICAgICAgICAgICAgICAgICAgfSAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICA+PC9yZWN0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDIwKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMSlcIj5cbiAgICAgICAgICAgIEhvdyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgZG90cyA9IFtdXG5cbiAgICAgICAgICAgIGNvbnN0IGFkZERvdCA9IChbY2F0ZWdvcnksIG5dKSA9PiB7XG4gICAgICAgICAgICAgIG5ldyBBcnJheShuKVxuICAgICAgICAgICAgICAgIC5maWxsKHRydWUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKCkgPT5cbiAgICAgICAgICAgICAgICAgIGRvdHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RvdHMubGVuZ3RoICogMi41ICsgMX0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2NhdGVnb3J5ID09PSAncHJvYmxlbWF0aWNTdGF0ZW1lbnRzJyA/ICdyZWQnIDogJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjaHVyY2gucHJvYmxlbWF0aWNTdGF0ZW1lbnRzKS5mb3JFYWNoKGFkZERvdClcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5ub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cykuZm9yRWFjaChhZGREb3QpXG4gICAgICAgICAgICByZXR1cm4gZG90c1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGFuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})