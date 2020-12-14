webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = {};\n  _sermons__WEBPACK_IMPORTED_MODULE_5__[church.key].forEach(function (line) {\n    if (typeof line === 'string') return;\n    acc[church.key][line.sentiment] = +acc[church.key][line.sentiment] + 1;\n  });\n  return acc;\n}, {});\nconsole.log(statementTypes);\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu, _churches$selectedChu2, _churches$selectedChu3, _churches$selectedChu4, _churches$selectedChu5;\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu2 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu2 === void 0 ? void 0 : _churches$selectedChu2.name, \" - \", (_churches$selectedChu3 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu3 === void 0 ? void 0 : _churches$selectedChu3.city)), (_churches$selectedChu4 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu4 === void 0 ? void 0 : (_churches$selectedChu5 = _churches$selectedChu4.fastFacts) === null || _churches$selectedChu5 === void 0 ? void 0 : _churches$selectedChu5.map(function (fact, idx) {\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 9\n        }\n      }, \"- \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_5__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwiZm9yRWFjaCIsImxpbmUiLCJzZW50aW1lbnQiLCJjb25zb2xlIiwibG9nIiwiV2F0ZXJtYXJrIiwidXNlU3RhdGUiLCJzZWxlY3RlZENodXJjaCIsInNldFNlbGVjdGVkQ2h1cmNoIiwiZmlsbENsYXNzIiwiY3NzIiwiY2xpY2tIYW5kbGVyIiwiQ2h1cmNoSW5mbyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJmYXN0RmFjdHMiLCJtYXAiLCJmYWN0IiwiaWR4IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsInBhcmFncmFwaCIsImFuaW1hdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZCxFQUF3QkMsTUFBeEIsQ0FBK0IsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ3JFRCxLQUFHLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUixDQUFILEdBQWtCLEVBQWxCO0FBQ0FDLHVDQUFPLENBQUNGLE1BQU0sQ0FBQ0MsR0FBUixDQUFQLENBQW9CRSxPQUFwQixDQUE0QixVQUFDQyxJQUFELEVBQVU7QUFDcEMsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzlCTCxPQUFHLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUixDQUFILENBQWdCRyxJQUFJLENBQUNDLFNBQXJCLElBQWtDLENBQUNOLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFSLENBQUgsQ0FBZ0JHLElBQUksQ0FBQ0MsU0FBckIsQ0FBRCxHQUFtQyxDQUFyRTtBQUNELEdBSEQ7QUFJQSxTQUFPTixHQUFQO0FBQ0QsQ0FQc0IsRUFPcEIsRUFQb0IsQ0FBdkI7QUFRQU8sT0FBTyxDQUFDQyxHQUFSLENBQVliLGNBQVo7O0FBRUEsSUFBTWMsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFhLElBQWIsQ0FEcEI7QUFBQSxNQUN6QkMsY0FEeUI7QUFBQSxNQUNUQyxpQkFEUzs7QUFFaEMsTUFBTUMsU0FBUyxHQUFHQyx5REFBSCxvQkFpQkFILGNBQWMsR0FBRyxHQUFILEdBQVMsR0FqQnZCLEVBaUNHQSxjQWpDSCxDQUFmO0FBMENBLE1BQU1JLFlBQVksR0FBR0gsaUJBQXJCOztBQUVBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7O0FBQUEsV0FDakIsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDR2xCLGtEQUFRLENBQUNhLGNBQUQsQ0FEWCwwREFDRyxzQkFBMEJNLE1BRDdCLEVBQ3FDLEdBRHJDLEVBRUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRSxTQURMO0FBRUxDLHFCQUFhLEVBQUUsV0FGVjtBQUdMQyxrQkFBVSxFQUFFLFNBSFA7QUFJTEMsYUFBSyxFQUFFLE1BSkY7QUFLTEMsa0JBQVUsRUFBRSxLQUxQO0FBTUxDLGtCQUFVLEVBQUU7QUFOUCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVUd6QixrREFBUSxDQUFDYSxjQUFELENBVlgsMkRBVUcsdUJBQTBCYSxJQVY3QixtQ0FVc0MxQixrREFBUSxDQUFDYSxjQUFELENBVjlDLDJEQVVzQyx1QkFBMEJjLElBVmhFLENBRkYsQ0FERiw0QkFnQkczQixrREFBUSxDQUFDYSxjQUFELENBaEJYLHFGQWdCRyx1QkFBMEJlLFNBaEI3QiwyREFnQkcsdUJBQXFDQyxHQUFyQyxDQUF5QyxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxhQUN4QztBQUFHLFdBQUcsWUFBS2xCLGNBQUwsY0FBdUJrQixHQUF2QixDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdUNELElBQXZDLENBRHdDO0FBQUEsS0FBekMsQ0FoQkgsQ0FEaUI7QUFBQSxHQUFuQjs7QUF1QkEsU0FDRSxNQUFDLDZDQUFEO0FBQU0sYUFBUyxFQUFFRSx3REFBRSxDQUFDakIsU0FBRCxFQUFZa0Isc0RBQVosQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQUZGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBRUQsa0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsRUFXRTtBQUFLLGFBQVMsRUFBRUEsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFRSxZQUFNLEVBQUUsQ0FBQyxDQUFYO0FBQWNELGNBQVEsRUFBRTtBQUF4QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyw0Q0FBRDtBQUNFLGFBQVMsRUFBRUQsZ0RBRGI7QUFFRSxrQkFBYyxFQUFFcEIsY0FGbEI7QUFHRSxrQkFBYyxFQUFFSSxZQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQWlCRTtBQUFLLFNBQUssRUFBRTtBQUFFaUIsY0FBUSxFQUFFO0FBQVosS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQWpCRixFQW9CRTtBQUFLLFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0Usa0JBQWMsRUFBRWpCLFlBRGxCO0FBRUUsVUFBTSxFQUFFSixjQUZWO0FBR0Usa0JBQWMsRUFBRSxrQkFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBcEJGLEVBMkJFO0FBQUssU0FBSyxFQUFFO0FBQUVxQixjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0Usa0JBQWMsRUFBRWpCLFlBRGxCO0FBRUUsVUFBTSxFQUFFSixjQUZWO0FBR0Usa0JBQWMsRUFBRSxXQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzQkYsRUFrQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRXFCLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxrQkFBYyxFQUFFakIsWUFEbEI7QUFFRSxVQUFNLEVBQUVKLGNBRlY7QUFHRSxrQkFBYyxFQUFFLGdCQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQ0YsRUEwQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRXFCLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxrQkFBYyxFQUFFakIsWUFEbEI7QUFFRSxVQUFNLEVBQUVKLGNBRlY7QUFHRSxrQkFBYyxFQUFFLHdCQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0ExQ0YsQ0FYRixFQTZERTtBQUFLLFNBQUssRUFBRTtBQUFFcUIsY0FBUSxFQUFFO0FBQVosS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsdURBQUQ7QUFBZ0Isa0JBQWMsRUFBRWpCLFlBQWhDO0FBQThDLGtCQUFjLEVBQUVKLGNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQTdERixFQXdFRTtBQUFLLGFBQVMsRUFBRW9CLDREQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLG1EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ0c1QixxQ0FBTyxDQUFDUSxjQUFELENBRFYsMERBQ0csc0JBQXlCZ0IsR0FBekIsQ0FBNkIsVUFBQ08sU0FBRCxFQUFZTCxHQUFaLEVBQW9CO0FBQ2hELFFBQUksT0FBT0ssU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxhQUNFO0FBQ0UsV0FBRyxZQUFLdkIsY0FBTCxjQUF1QmtCLEdBQXZCLENBREw7QUFFRSxhQUFLLEVBQUU7QUFDTE0sbUJBQVMsWUFBSyxLQUFLTixHQUFWO0FBREosU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUdLLFNBTkgsQ0FERjtBQVVEOztBQUNELFdBQ0U7QUFDRSxTQUFHLFlBQUt2QixjQUFMLGNBQXVCa0IsR0FBdkIsQ0FETDtBQUVFLGVBQVMsRUFBRUMsd0RBQUUsQ0FDWEMsaURBRFcsRUFFWEssSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCTiw4Q0FBdEIsR0FBc0NBLGlEQUYzQixDQUZmO0FBTUUsV0FBSyxFQUFFO0FBQ0xJLGlCQUFTLFlBQUssS0FBS04sR0FBVjtBQURKLE9BTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVHSyxTQUFTLENBQUNJLElBVmIsQ0FERjtBQWNELEdBM0JBLENBREgsQ0FERixDQXhFRixDQURGO0FBMkdELENBaExEOztHQUFNN0IsUzs7S0FBQUEsUztBQWtMU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IHN0YXRlbWVudFR5cGVzID0gT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykucmVkdWNlKChhY2MsIGNodXJjaCkgPT4ge1xuICBhY2NbY2h1cmNoLmtleV0gPSB7fVxuICBzZXJtb25zW2NodXJjaC5rZXldLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBpZiAodHlwZW9mIGxpbmUgPT09ICdzdHJpbmcnKSByZXR1cm5cbiAgICBhY2NbY2h1cmNoLmtleV1bbGluZS5zZW50aW1lbnRdID0gK2FjY1tjaHVyY2gua2V5XVtsaW5lLnNlbnRpbWVudF0gKyAxXG4gIH0pXG4gIHJldHVybiBhY2Ncbn0sIHt9KVxuY29uc29sZS5sb2coc3RhdGVtZW50VHlwZXMpXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENodXJjaCwgc2V0U2VsZWN0ZWRDaHVyY2hdID0gdXNlU3RhdGU8Q2h1cmNoS2V5cz4obnVsbClcbiAgY29uc3QgZmlsbENsYXNzID0gY3NzYFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy9idWlsZGluZ3Mvd2F0ZXJtYXJrLnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuMDM7XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoXSB7XG4gICAgICBmaWxsOiB2YXIoLS1oaWdobGlnaHQpO1xuICAgICAgb3BhY2l0eTogJHtzZWxlY3RlZENodXJjaCA/IDAuMiA6IDAuOX07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9ibGVtYXRpYyddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvYmxlbWF0aWMpO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9kdWN0aXZlJ10ge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcm9kdWN0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2g9JyR7c2VsZWN0ZWRDaHVyY2h9J10ge1xuICAgICAgb3BhY2l0eTogMC45O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IHNldFNlbGVjdGVkQ2h1cmNoXG5cbiAgY29uc3QgQ2h1cmNoSW5mbyA9ICgpID0+IChcbiAgICA8PlxuICAgICAgPGgyPlxuICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5wYXN0b3J9eycgJ31cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxuICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc2cHgnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ255dGZyYW5rbGluJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8ubmFtZX0gLSB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5jaXR5fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2gyPlxuICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8uZmFzdEZhY3RzPy5tYXAoKGZhY3QsIGlkeCkgPT4gKFxuICAgICAgICA8cCBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfT4tIHtmYWN0fTwvcD5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2N4KGZpbGxDbGFzcywgc3R5bGVkLmNvbnRhaW5lckNsYXNzKX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19PlxuICAgICAgICA8aDE+UHJlYWNoaW5nIG9uIFJhY2U8L2gxPlxuICAgICAgICA8c3ViPlxuICAgICAgICAgIFdoYXQgbWVzc2FnZSBkaWQgd2hpdGUgcGFzdG9ycyBvZiBEYWxsYXMgc2VuZCBhZnRlciBhIHdlZWsgb2YgbmF0aW9uYWwgdHJhZ2VkaWVzIGluIDIwMTY/XG4gICAgICAgIDwvc3ViPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNodXJjaEFyZWF9PlxuICAgICAgICA8Q2h1cmNoSW5mbyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5tYXBDbGFzc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5Pbmx5IEplc3VzIGNhbiBmaXggdGhpczwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPldlIG5lZWQgdG8gaGF2ZSB1bml0eTwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPkJlIGNhcmVmdWwgbm90IHRvIGFzayBmb3IgdG9vIG11Y2g8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5CbGFjayBMaXZlcyBNYXR0ZXI8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5UaGUgY291bnRyeSBoYXMgYSBoaXN0b3J5IG9mIHN5c3RlbWF0aWMgcmFjaXNtPC9wPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZScgfX0+XG4gICAgICAgICAgPGgzPkluZmx1ZW5jZTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMScgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UzJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydhdHRlbmRlZXMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlNCcgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsncG9kY2FzdFJldmlld3MnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UyJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydjaHVyY2hUd2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3N1YnN0YW5jZScgfX0+XG4gICAgICAgIDxoMz5TdWJzdGFuY2U8L2gzPlxuICAgICAgICA8U3Vic3RhbmNlQ2hhcnQgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn0gc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1nL3dhdGVybWFyay10b2RkLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJQYXN0b3IgVG9kZCBXYWduZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQucGFzdG9yQ2xhc3N9XG4gICAgICAgICAgLz4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25DbGFzc30+XG4gICAgICAgICAge3Nlcm1vbnNbc2VsZWN0ZWRDaHVyY2hdPy5tYXAoKHBhcmFncmFwaCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFncmFwaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYCR7NTAgKiBpZHh9bXMgZWFzZSBmYWRlaW5gLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICBzdHlsZWQuc3BhbkNsYXNzLFxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+IDAuMyA/IHN0eWxlZC5wcm9CTE0gOiBzdHlsZWQucHJvUG9saWNlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHszMCAqIGlkeH1tcyBlYXNlaW4gZmFkZWluYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaC50ZXh0fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})