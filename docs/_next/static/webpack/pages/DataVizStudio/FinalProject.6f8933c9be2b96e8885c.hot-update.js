webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Map/LogoMask */ \"./components/FinalProject/Map/LogoMask.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  var selectedChurch = _ref.selectedChurch,\n      onElementClick = _ref.onElementClick;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 100 40\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"defs\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"watermark\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"tvc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"covenant\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"prestonwood\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fellowship\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fbc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  })), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      height: \"2\",\n      width: \"2\",\n      transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    });\n\n    var currentPosition = 3;\n    var totalMinutes = 0;\n    return __jsx(\"g\", {\n      key: \"thing\".concat(i),\n      onClick: function onClick() {\n        onElementClick(church.key);\n      },\n      \"data-church\": church.key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, church.minutes.concat([null]).map(function (occasion, j) {\n      currentPosition += church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0;\n\n      if (!occasion) {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n          key: \"thing\".concat(j),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 23\n          }\n        }, __jsx(\"text\", {\n          transform: \"translate(\".concat(currentPosition, \" \").concat(verticalCoordinate + 3, \")\"),\n          fontSize: \"2\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }\n        }, totalMinutes));\n      }\n\n      totalMinutes += occasion.length;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n        key: \"thing\".concat(j),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, logo, __jsx(\"rect\", {\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(currentPosition, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 23\n        }\n      }));\n    }));\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      \"data-church\": church.key,\n      height: \"2\",\n      width: \"2\",\n      transform: \"translate(0 \".concat(verticalCoordinate - 1, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    });\n\n    var dots = [logo];\n\n    var addDot = function addDot(category) {\n      return function (_ref2) {\n        var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n            premise = _ref3[0],\n            n = _ref3[1];\n\n        console.log(category);\n        new Array(n).fill(true).forEach(function () {\n          return dots.push(__jsx(\"circle\", {\n            transform: \"translate(\".concat(dots.length * 2.5 + 2, \" \").concat(verticalCoordinate, \")\"),\n            r: \"1\",\n            fill: category === 'problematicStatements' ? 'var(--problematic)' : 'var(--productive)',\n            \"data-sentiment\": category === 'problematicStatements' ? 'problematic' : 'productive',\n            \"data-church\": \"\".concat(church.key),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 21\n            }\n          }));\n        });\n      };\n    };\n\n    Object.entries(church.problematicStatements).forEach(addDot('problematicStatements'));\n    Object.entries(church.notAsProblematicStatements).forEach(addDot('notAsProblematicStatements'));\n    return __jsx(\"g\", {\n      onClick: function onClick() {\n        onElementClick(church.key);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 15\n      }\n    }, dots);\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsibGFiZWxDbGFzcyIsImNzcyIsIlN1YnN0YW5jZUNoYXJ0Iiwic2VsZWN0ZWRDaHVyY2giLCJvbkVsZW1lbnRDbGljayIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwibWFwIiwiY2h1cmNoIiwiaSIsInZlcnRpY2FsQ29vcmRpbmF0ZSIsImxvZ28iLCJrZXkiLCJjdXJyZW50UG9zaXRpb24iLCJ0b3RhbE1pbnV0ZXMiLCJtaW51dGVzIiwiY29uY2F0Iiwib2NjYXNpb24iLCJqIiwibGVuZ3RoIiwiZG90cyIsImFkZERvdCIsImNhdGVnb3J5IiwicHJlbWlzZSIsIm4iLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmaWxsIiwiZm9yRWFjaCIsInB1c2giLCJlbnRyaWVzIiwicHJvYmxlbWF0aWNTdGF0ZW1lbnRzIiwibm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFILG1CQUFoQjs7QUFPQSxJQUFNQyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUF3QztBQUFBLE1BQXJDQyxjQUFxQyxRQUFyQ0EsY0FBcUM7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQ3ZFLFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsV0FBakI7QUFBNkIsUUFBSSxFQUFDLEdB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QUFJSyxLQUFKLENBQVVILENBQVYsRUFDR0ksSUFESCxDQUNRLElBRFIsRUFFR0MsT0FGSCxDQUVXO0FBQUEsaUJBQ1BULElBQUksQ0FBQ1UsSUFBTCxDQUNFO0FBQ0UscUJBQVMsc0JBQWVWLElBQUksQ0FBQ0QsTUFBTCxHQUFjLEdBQWQsR0FBb0IsQ0FBbkMsY0FBd0NULGtCQUF4QyxNQURYO0FBRUUsYUFBQyxFQUFDLEdBRko7QUFHRSxnQkFBSSxFQUNGWSxRQUFRLEtBQUssdUJBQWIsR0FDSSxvQkFESixHQUVJLG1CQU5SO0FBUUUsOEJBQ0VBLFFBQVEsS0FBSyx1QkFBYixHQUF1QyxhQUF2QyxHQUF1RCxZQVQzRDtBQVdFLHFDQUFnQmQsTUFBTSxDQUFDSSxHQUF2QixDQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURPO0FBQUEsU0FGWDtBQW1CRCxPQXJCYztBQUFBLEtBQWY7O0FBc0JBUixVQUFNLENBQUMyQixPQUFQLENBQWV2QixNQUFNLENBQUN3QixxQkFBdEIsRUFBNkNILE9BQTdDLENBQXFEUixNQUFNLENBQUMsdUJBQUQsQ0FBM0Q7QUFDQWpCLFVBQU0sQ0FBQzJCLE9BQVAsQ0FBZXZCLE1BQU0sQ0FBQ3lCLDBCQUF0QixFQUFrREosT0FBbEQsQ0FDRVIsTUFBTSxDQUFDLDRCQUFELENBRFI7QUFHQSxXQUNFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JsQixzQkFBYyxDQUFDSyxNQUFNLENBQUNJLEdBQVIsQ0FBZDtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHUSxJQUxILENBREY7QUFTRCxHQWhEQSxDQUpILENBakVGLENBREYsQ0FERjtBQTRIRCxDQTdIRDs7S0FBTW5CLGM7QUErSFNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2h1cmNoZXMgfSBmcm9tICcuL21ldGFkYXRhJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAncHJldHR5LWxpZ2h0cydcbmltcG9ydCBMb2dvTWFzayBmcm9tICcuL01hcC9Mb2dvTWFzaydcblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IG55dGZyYW5rbGluO1xuICBmb250LXNpemU6IDEuNzVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuY29uc3QgU3Vic3RhbmNlQ2hhcnQ6IFJlYWN0LkZDID0gKHsgc2VsZWN0ZWRDaHVyY2gsIG9uRWxlbWVudENsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDQwXCI+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJ3YXRlcm1hcmtcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cInR2Y1wiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiY292ZW5hbnRcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cInByZXN0b253b29kXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJmZWxsb3dzaGlwXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJmYmNcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAyKVwiPlxuICAgICAgICAgIEhvdyBsb25nIGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgPGc+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgbG9nbyA9IChcbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBtYXNrPXtgdXJsKCMke2NodXJjaC5rZXl9TG9nb01hc2spYH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IDNcbiAgICAgICAgICAgIGxldCB0b3RhbE1pbnV0ZXMgPSAwXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGtleT17YHRoaW5nJHtpfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FbGVtZW50Q2xpY2soY2h1cmNoLmtleSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY2h1cmNoPXtjaHVyY2gua2V5fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NodXJjaC5taW51dGVzLmNvbmNhdChbbnVsbF0pLm1hcCgob2NjYXNpb24sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSBjaHVyY2gubWludXRlc1tqIC0gMV0gPyBjaHVyY2gubWludXRlc1tqIC0gMV0ubGVuZ3RoICsgMC41IDogMFxuXG4gICAgICAgICAgICAgICAgICBpZiAoIW9jY2FzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YHRoaW5nJHtqfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y3VycmVudFBvc2l0aW9ufSAke3ZlcnRpY2FsQ29vcmRpbmF0ZSArIDN9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbE1pbnV0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdG90YWxNaW51dGVzICs9IG9jY2FzaW9uLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YHRoaW5nJHtqfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2dvfVxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17b2NjYXNpb24ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y3VycmVudFBvc2l0aW9ufSAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMjApXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxKVwiPlxuICAgICAgICAgICAgSG93IGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhjaHVyY2hlcykubWFwKChjaHVyY2gsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsQ29vcmRpbmF0ZSA9IDIuNSAqIGkgKyAzXG4gICAgICAgICAgICBjb25zdCBsb2dvID0gKFxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIG1hc2s9e2B1cmwoIyR7Y2h1cmNoLmtleX1Mb2dvTWFzaylgfVxuICAgICAgICAgICAgICAgIGRhdGEtY2h1cmNoPXtjaHVyY2gua2V5fVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAgJHt2ZXJ0aWNhbENvb3JkaW5hdGUgLSAxfSlgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgZG90cyA9IFtsb2dvXVxuXG4gICAgICAgICAgICBjb25zdCBhZGREb3QgPSAoY2F0ZWdvcnkpID0+IChbcHJlbWlzZSwgbl0pID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG5ldyBBcnJheShuKVxuICAgICAgICAgICAgICAgIC5maWxsKHRydWUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKCkgPT5cbiAgICAgICAgICAgICAgICAgIGRvdHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RvdHMubGVuZ3RoICogMi41ICsgMn0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09ICdwcm9ibGVtYXRpY1N0YXRlbWVudHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3ZhcigtLXByb2JsZW1hdGljKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndmFyKC0tcHJvZHVjdGl2ZSknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2VudGltZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAncHJvYmxlbWF0aWNTdGF0ZW1lbnRzJyA/ICdwcm9ibGVtYXRpYycgOiAncHJvZHVjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaHVyY2g9e2Ake2NodXJjaC5rZXl9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaHVyY2gucHJvYmxlbWF0aWNTdGF0ZW1lbnRzKS5mb3JFYWNoKGFkZERvdCgncHJvYmxlbWF0aWNTdGF0ZW1lbnRzJykpXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaHVyY2gubm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMpLmZvckVhY2goXG4gICAgICAgICAgICAgIGFkZERvdCgnbm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMnKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkVsZW1lbnRDbGljayhjaHVyY2gua2V5KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZG90c31cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGFuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})