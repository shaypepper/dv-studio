webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Map/LogoMask */ \"./components/FinalProject/Map/LogoMask.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  var selectedChurch = _ref.selectedChurch,\n      onElementClick = _ref.onElementClick;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 100 40\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"defs\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"watermark\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"tvc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"covenant\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"prestonwood\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fellowship\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fbc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  })), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      height: \"2\",\n      width: \"2\",\n      \"data-church\": church.key,\n      transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }\n    });\n\n    if (church.minutes.length === 1) {\n      return __jsx(\"g\", {\n        onClick: function onClick() {\n          onElementClick(church.key);\n        },\n        \"data-church\": church.key,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }\n      }, logo, __jsx(\"rect\", {\n        height: 2,\n        width: church.minutes[0].length,\n        transform: \"translate(3 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }\n      }));\n    }\n\n    var currentPosition = 3;\n    return __jsx(\"g\", {\n      key: \"thing\".concat(i),\n      onClick: function onClick() {\n        onElementClick(church.key);\n      },\n      \"data-church\": church.key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 15\n      }\n    }, church.minutes.map(function (occasion, j) {\n      currentPosition += church.minutes[j - 1] ? church.minutes[j - 1].length : 0;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n        key: \"thing\".concat(j),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }\n      }, logo, __jsx(\"rect\", {\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(currentPosition, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 23\n        }\n      }));\n    }));\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var logo = __jsx(\"rect\", {\n      mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n      \"data-church\": church.key,\n      height: \"2\",\n      width: \"2\",\n      transform: \"translate(0 \".concat(verticalCoordinate - 1, \")\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 15\n      }\n    });\n\n    var dots = [logo];\n\n    var addDot = function addDot(category) {\n      return function (_ref2) {\n        var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n            premise = _ref3[0],\n            n = _ref3[1];\n\n        console.log(category);\n        new Array(n).fill(true).forEach(function () {\n          return dots.push(__jsx(\"circle\", {\n            transform: \"translate(\".concat(dots.length * 2.5 + 2, \" \").concat(verticalCoordinate, \")\"),\n            r: \"1\",\n            fill: category === 'problematicStatements' ? 'var(--problematic)' : 'var(--productive)',\n            \"data-church\": \"\".concat(church.key),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 21\n            }\n          }));\n        });\n      };\n    };\n\n    Object.entries(church.problematicStatements).forEach(addDot('problematicStatements'));\n    Object.entries(church.notAsProblematicStatements).forEach(addDot('notAsProblematicStatements'));\n    return __jsx(\"g\", {\n      onClick: function onClick() {\n        onElementClick(church.key);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 15\n      }\n    }, dots);\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0Iiwic2VsZWN0ZWRDaHVyY2giLCJvbkVsZW1lbnRDbGljayIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwibWFwIiwiY2h1cmNoIiwiaSIsInZlcnRpY2FsQ29vcmRpbmF0ZSIsImxvZ28iLCJrZXkiLCJtaW51dGVzIiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwib2NjYXNpb24iLCJqIiwiZG90cyIsImFkZERvdCIsImNhdGVnb3J5IiwicHJlbWlzZSIsIm4iLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmaWxsIiwiZm9yRWFjaCIsInB1c2giLCJlbnRyaWVzIiwicHJvYmxlbWF0aWNTdGF0ZW1lbnRzIiwibm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBT0EsSUFBTUEsV0FBVyxHQUFHQyx5REFBSCxtQkFBakI7QUFRQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsa0JBQWdCLEVBQUUsb0JBREw7QUFFYkMsd0JBQXNCLEVBQUUsb0JBRlg7QUFHYkMsV0FBUyxFQUFFLGtCQUhFO0FBSWJDLGdCQUFjLEVBQUU7QUFKSCxDQUFmO0FBT0EsSUFBTUMsVUFBVSxHQUFHTix5REFBSCxvQkFBaEI7O0FBT0EsSUFBTU8sY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsT0FBd0M7QUFBQSxNQUFyQ0MsY0FBcUMsUUFBckNBLGNBQXFDO0FBQUEsTUFBckJDLGNBQXFC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O0FBQUE7QUFBQTtBQUFBLE9BS0dNLElBTEgsQ0FERjtBQVNELEdBN0NBLENBSkgsQ0FwRUYsQ0FERixDQURGO0FBNEhELENBN0hEOztLQUFNakIsYztBQStIU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TdWJzdGFuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWNrLCBoaWVyYXJjaHkgfSBmcm9tICdkMy1oaWVyYXJjaHknXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4vbWV0YWRhdGEnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgTG9nb01hc2sgZnJvbSAnLi9NYXAvTG9nb01hc2snXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbn1cblxuY29uc3QgY2lyY2xlQ2xhc3MgPSBjc3NgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgb3BhY2l0eTogNTAlO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA5MCU7XG4gIH1cbmBcblxuY29uc3QgbGFiZWxzID0ge1xuICB0d2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChwYXN0b3IpJyxcbiAgY2h1cmNoVHdpdHRlckZvbGxvd2VyczogJ0ZvbGxvd2VycyAoY2h1cmNoKScsXG4gIGF0dGVuZGVlczogJ0NodXJjaCBBdHRlbmRlZXMnLFxuICBwb2RjYXN0UmV2aWV3czogJ1BvZGNhc3QgUmV2aWV3cycsXG59XG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbiAgZm9udC1zaXplOiAxLjc1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gXG5cbmNvbnN0IFN1YnN0YW5jZUNoYXJ0OiBSZWFjdC5GQyA9ICh7IHNlbGVjdGVkQ2h1cmNoLCBvbkVsZW1lbnRDbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCA0MFwiPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwid2F0ZXJtYXJrXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJ0dmNcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cImNvdmVuYW50XCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJwcmVzdG9ud29vZFwiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiZmVsbG93c2hpcFwiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiZmJjXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMilcIj5cbiAgICAgICAgICBIb3cgbG9uZyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgPC90ZXh0PlxuXG4gICAgICAgIDxnPlxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGNodXJjaGVzKS5tYXAoKGNodXJjaCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDb29yZGluYXRlID0gMi41ICogaSArIDNcbiAgICAgICAgICAgIGNvbnN0IGxvZ28gPSAoXG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgbWFzaz17YHVybCgjJHtjaHVyY2gua2V5fUxvZ29NYXNrKWB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17Y2h1cmNoLmtleX1cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChjaHVyY2gubWludXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkVsZW1lbnRDbGljayhjaHVyY2gua2V5KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtY2h1cmNoPXtjaHVyY2gua2V5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsb2dvfVxuICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y2h1cmNoLm1pbnV0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMyAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICAgID48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gM1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBrZXk9e2B0aGluZyR7aX1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRWxlbWVudENsaWNrKGNodXJjaC5rZXkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17Y2h1cmNoLmtleX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaHVyY2gubWludXRlcy5tYXAoKG9jY2FzaW9uLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKz0gY2h1cmNoLm1pbnV0ZXNbaiAtIDFdID8gY2h1cmNoLm1pbnV0ZXNbaiAtIDFdLmxlbmd0aCA6IDBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2B0aGluZyR7an1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9nb31cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e29jY2FzaW9uLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2N1cnJlbnRQb3NpdGlvbn0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDIwKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMSlcIj5cbiAgICAgICAgICAgIEhvdyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgbG9nbyA9IChcbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBtYXNrPXtgdXJsKCMke2NodXJjaC5rZXl9TG9nb01hc2spYH1cbiAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17Y2h1cmNoLmtleX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwICR7dmVydGljYWxDb29yZGluYXRlIC0gMX0pYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBbbG9nb11cblxuICAgICAgICAgICAgY29uc3QgYWRkRG90ID0gKGNhdGVnb3J5KSA9PiAoW3ByZW1pc2UsIG5dKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBuZXcgQXJyYXkobilcbiAgICAgICAgICAgICAgICAuZmlsbCh0cnVlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCgpID0+XG4gICAgICAgICAgICAgICAgICBkb3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkb3RzLmxlbmd0aCAqIDIuNSArIDJ9ICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAgICAgICAgIHI9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAncHJvYmxlbWF0aWNTdGF0ZW1lbnRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1wcm9ibGVtYXRpYyknXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZhcigtLXByb2R1Y3RpdmUpJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNodXJjaD17YCR7Y2h1cmNoLmtleX1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5wcm9ibGVtYXRpY1N0YXRlbWVudHMpLmZvckVhY2goYWRkRG90KCdwcm9ibGVtYXRpY1N0YXRlbWVudHMnKSlcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5ub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cykuZm9yRWFjaChcbiAgICAgICAgICAgICAgYWRkRG90KCdub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cycpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRWxlbWVudENsaWNrKGNodXJjaC5rZXkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkb3RzfVxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnN0YW5jZUNoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})