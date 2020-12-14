"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/SubstanceChart.tsx":
  /*!****************************************************!*\
    !*** ./components/FinalProject/SubstanceChart.tsx ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function componentsFinalProjectSubstanceChartTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Map/LogoMask */ \"./components/FinalProject/Map/LogoMask.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  _s();\n\n  var selectedChurch = _ref.selectedChurch,\n      onElementClick = _ref.onElementClick;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedSentiment = _useState[0],\n      setSelectedSentiment = _useState[1];\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 100 40\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"defs\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"watermark\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"tvc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"covenant\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"prestonwood\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fellowship\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fbc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  })), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      height: \"2\",\n      width: \"2\",\n      transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    });\n\n    var currentPosition = 3;\n    var totalMinutes = 0;\n    return __jsx(\"g\", {\n      key: \"thing\".concat(i),\n      onClick: function onClick() {\n        onElementClick(church.key);\n      },\n      \"data-church\": church.key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }, church.minutes.concat([null]).map(function (occasion, j) {\n      currentPosition += church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0;\n\n      if (!occasion) {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n          key: \"thing\".concat(j),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 23\n          }\n        }, __jsx(\"text\", {\n          transform: \"translate(\".concat(currentPosition + 0.5, \" \").concat(verticalCoordinate + 1.6, \")\"),\n          fontSize: \"2\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 25\n          }\n        }, totalMinutes, \" minutes\"));\n      }\n\n      totalMinutes += occasion.length;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n        key: \"thing\".concat(j),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }\n      }, logo, __jsx(\"rect\", {\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(currentPosition, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 23\n        }\n      }));\n    }));\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      \"data-church\": church.key,\n      height: \"2\",\n      width: \"2\",\n      transform: \"translate(0 \".concat(verticalCoordinate - 1, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 15\n      }\n    });\n\n    var dots = [logo];\n\n    var addDot = function addDot(category) {\n      return function (_ref2) {\n        var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n            premise = _ref3[0],\n            n = _ref3[1];\n\n        dots.push(__jsx(\"circle\", {\n          transform: \"translate(\".concat(dots.length * 2.5 + 2, \" \").concat(verticalCoordinate, \")\"),\n          r: \"1\",\n          fill: \"var(--\".concat(category, \")\"),\n          \"data-sentiment\": category,\n          \"data-church\": \"\".concat(church.key),\n          onClick: function onClick() {\n            console.log(premise);\n\n            if (church.key === selectedChurch) {\n              setSelectedSentiment(premise);\n            }\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 17\n          }\n        }));\n      };\n    };\n\n    if (church.sentiments) {\n      Object.entries(church.sentiments).filter(function (_ref4) {\n        var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n            c = _ref5[0],\n            count = _ref5[1];\n\n        return _metadata__WEBPACK_IMPORTED_MODULE_3__[\"classifiedStatements\"][c] === 'problematic';\n      }).forEach(addDot('problematic'));\n      Object.entries(church.sentiments).filter(function (_ref6) {\n        var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref6, 2),\n            c = _ref7[0],\n            count = _ref7[1];\n\n        return _metadata__WEBPACK_IMPORTED_MODULE_3__[\"classifiedStatements\"][c] === 'productive';\n      }).forEach(addDot('productive'));\n    }\n\n    return __jsx(\"g\", {\n      onClick: function onClick() {\n        onElementClick(church.key);\n\n        if (church.key !== selectedChurch) {\n          setSelectedSentiment(null);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 15\n      }\n    }, dots, selectedSentiment && church.key === selectedChurch && __jsx(\"g\", {\n      transform: \"translate(37 25)\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 19\n      }\n    }, __jsx(\"text\", {\n      fontSize: \"4px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 21\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_3__[\"sentimentLabels\"][selectedSentiment])));\n  }))));\n};\n\n_s(SubstanceChart, \"+lk/B8jJdyTB0gSZxYtsSZm6808=\");\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsibGFiZWxDbGFzcyIsImNzcyIsIlN1YnN0YW5jZUNoYXJ0Iiwic2VsZWN0ZWRDaHVyY2giLCJvbkVsZW1lbnRDbGljayIsInVzZVN0YXRlIiwic2VsZWN0ZWRTZW50aW1lbnQiLCJzZXRTZWxlY3RlZFNlbnRpbWVudCIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwibWFwIiwiY2h1cmNoIiwiaSIsInZlcnRpY2FsQ29vcmRpbmF0ZSIsImxvZ28iLCJrZXkiLCJjdXJyZW50UG9zaXRpb24iLCJ0b3RhbE1pbnV0ZXMiLCJtaW51dGVzIiwiY29uY2F0Iiwib2NjYXNpb24iLCJqIiwibGVuZ3RoIiwiZG90cyIsImFkZERvdCIsImNhdGVnb3J5IiwicHJlbWlzZSIsIm4iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNlbnRpbWVudHMiLCJlbnRyaWVzIiwiZmlsdGVyIiwiYyIsImNvdW50IiwiY2xhc3NpZmllZFN0YXRlbWVudHMiLCJmb3JFYWNoIiwic2VudGltZW50TGFiZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQUgsbUJBQWhCOztBQU9BLElBQU1DLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLGNBQXFDLFFBQXJDQSxjQUFxQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQUEsa0JBQ3JCQyxzREFBUSxDQUFDLElBQUQsQ0FEYTtBQUFBLE1BQ2hFQyxpQkFEZ0U7QUFBQSxNQUM3Q0Msb0JBRDZDOztBQUV2RSxTQUNFO0FBQUssU0FBSyxFQUFFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FB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LEtBQTRCLFlBQTVDO0FBQUEsT0FEVixFQUVHRyxPQUZILENBRVdiLE1BQU0sQ0FBQyxZQUFELENBRmpCO0FBR0Q7O0FBQ0QsV0FDRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNickIsc0JBQWMsQ0FBQ1EsTUFBTSxDQUFDSSxHQUFSLENBQWQ7O0FBQ0EsWUFBSUosTUFBTSxDQUFDSSxHQUFQLEtBQWViLGNBQW5CLEVBQW1DO0FBQ2pDSSw4QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0Q7QUFDRixPQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR2lCLElBUkgsRUFTR2xCLGlCQUFpQixJQUFJTSxNQUFNLENBQUNJLEdBQVAsS0FBZWIsY0FBcEMsSUFDQztBQUFHLGVBQVMsb0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sY0FBUSxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQm9DLHlEQUFlLENBQUNqQyxpQkFBRCxDQUFyQyxDQURGLENBVkosQ0FERjtBQWlCRCxHQXhEQSxDQUpILENBcEVGLENBREYsQ0FERjtBQXVJRCxDQXpJRDs7R0FBTUosYzs7S0FBQUEsYztBQTJJU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TdWJzdGFuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNodXJjaGVzLCBDaHVyY2hLZXlzLCBjbGFzc2lmaWVkU3RhdGVtZW50cywgc2VudGltZW50TGFiZWxzIH0gZnJvbSAnLi9tZXRhZGF0YSdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgTG9nb01hc2sgZnJvbSAnLi9NYXAvTG9nb01hc2snXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbiAgZm9udC1zaXplOiAxLjc1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gXG5cbmNvbnN0IFN1YnN0YW5jZUNoYXJ0OiBSZWFjdC5GQyA9ICh7IHNlbGVjdGVkQ2h1cmNoLCBvbkVsZW1lbnRDbGljayB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFNlbnRpbWVudCwgc2V0U2VsZWN0ZWRTZW50aW1lbnRdID0gdXNlU3RhdGUobnVsbClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDQwXCI+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJ3YXRlcm1hcmtcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cInR2Y1wiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiY292ZW5hbnRcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cInByZXN0b253b29kXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJmZWxsb3dzaGlwXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJmYmNcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAyKVwiPlxuICAgICAgICAgIEhvdyBsb25nIGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgPGc+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgbG9nbyA9IChcbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBtYXNrPXtgdXJsKCMke2NodXJjaC5rZXl9TG9nb01hc2spYH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IDNcbiAgICAgICAgICAgIGxldCB0b3RhbE1pbnV0ZXMgPSAwXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGtleT17YHRoaW5nJHtpfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FbGVtZW50Q2xpY2soY2h1cmNoLmtleSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY2h1cmNoPXtjaHVyY2gua2V5fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NodXJjaC5taW51dGVzLmNvbmNhdChbbnVsbF0pLm1hcCgob2NjYXNpb24sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSBjaHVyY2gubWludXRlc1tqIC0gMV0gPyBjaHVyY2gubWludXRlc1tqIC0gMV0ubGVuZ3RoICsgMC41IDogMFxuXG4gICAgICAgICAgICAgICAgICBpZiAoIW9jY2FzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YHRoaW5nJHtqfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y3VycmVudFBvc2l0aW9uICsgMC41fSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQ29vcmRpbmF0ZSArIDEuNlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbE1pbnV0ZXN9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0b3RhbE1pbnV0ZXMgKz0gb2NjYXNpb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgdGhpbmcke2p9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2xvZ299XG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtvY2Nhc2lvbi5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjdXJyZW50UG9zaXRpb259ICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDIwKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMSlcIj5cbiAgICAgICAgICAgIEhvdyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgbG9nbyA9IChcbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBtYXNrPXtgdXJsKCMke2NodXJjaC5rZXl9TG9nb01hc2spYH1cbiAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17Y2h1cmNoLmtleX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwICR7dmVydGljYWxDb29yZGluYXRlIC0gMX0pYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBbbG9nb11cblxuICAgICAgICAgICAgY29uc3QgYWRkRG90ID0gKGNhdGVnb3J5KSA9PiAoW3ByZW1pc2UsIG5dKSA9PiB7XG4gICAgICAgICAgICAgIGRvdHMucHVzaChcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkb3RzLmxlbmd0aCAqIDIuNSArIDJ9ICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgICAgICAgICAgZmlsbD17YHZhcigtLSR7Y2F0ZWdvcnl9KWB9XG4gICAgICAgICAgICAgICAgICBkYXRhLXNlbnRpbWVudD17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17YCR7Y2h1cmNoLmtleX1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVtaXNlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1cmNoLmtleSA9PT0gc2VsZWN0ZWRDaHVyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFNlbnRpbWVudChwcmVtaXNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHVyY2guc2VudGltZW50cykge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaHVyY2guc2VudGltZW50cylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChbYywgY291bnRdKSA9PiBjbGFzc2lmaWVkU3RhdGVtZW50c1tjXSA9PT0gJ3Byb2JsZW1hdGljJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhZGREb3QoJ3Byb2JsZW1hdGljJykpXG5cbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2h1cmNoLnNlbnRpbWVudHMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW2MsIGNvdW50XSkgPT4gY2xhc3NpZmllZFN0YXRlbWVudHNbY10gPT09ICdwcm9kdWN0aXZlJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhZGREb3QoJ3Byb2R1Y3RpdmUnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FbGVtZW50Q2xpY2soY2h1cmNoLmtleSlcbiAgICAgICAgICAgICAgICAgIGlmIChjaHVyY2gua2V5ICE9PSBzZWxlY3RlZENodXJjaCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFNlbnRpbWVudChudWxsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZG90c31cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTZW50aW1lbnQgJiYgY2h1cmNoLmtleSA9PT0gc2VsZWN0ZWRDaHVyY2ggJiYgKFxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDM3IDI1KWB9PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmb250U2l6ZT1cIjRweFwiPntzZW50aW1lbnRMYWJlbHNbc2VsZWN0ZWRTZW50aW1lbnRdfTwvdGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnN0YW5jZUNoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");
    /***/
  }
});