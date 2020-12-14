webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = _sermons__WEBPACK_IMPORTED_MODULE_6__[church.key].reduce(function (lineAcc, line) {\n    if (typeof line === 'string') {\n      return lineAcc;\n    }\n\n    lineAcc[line.statementSentiment] = lineAcc[line.statementSentiment] ? lineAcc[line.statementSentiment] + 1 : 1;\n    acc.allStatements[line.statementSentiment] = acc.allStatements[line.statementSentiment] ? acc.allStatements[line.statementSentiment] + 1 : 1;\n    return lineAcc;\n  }, {});\n  return acc;\n}, {\n  allStatements: {}\n});\nconsole.log(JSON.stringify(statementTypes));\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.3 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (\", church === null || church === void 0 ? void 0 : church.denomination, \") - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 187,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], paragraph.statementSentiment === 'productive' ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 198,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwibGluZUFjYyIsImxpbmUiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJhbGxTdGF0ZW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJXYXRlcm1hcmsiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2h1cmNoIiwic2V0U2VsZWN0ZWRDaHVyY2giLCJmaWxsQ2xhc3MiLCJjc3MiLCJjbGlja0hhbmRsZXIiLCJDaHVyY2hJbmZvIiwicGFzdG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZvbnRGYW1pbHkiLCJuYW1lIiwiZGVub21pbmF0aW9uIiwiY2l0eSIsImZhc3RGYWN0cyIsImVudHJpZXMiLCJtYXAiLCJpZHgiLCJmYWN0VHlwZSIsImZhY3QiLCJjeCIsInN0eWxlZCIsImdyaWRBcmVhIiwiekluZGV4IiwicGFyYWdyYXBoIiwiYW5pbWF0aW9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxtREFBZCxFQUF3QkMsTUFBeEIsQ0FDckIsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2ZELEtBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFSLENBQUgsR0FBa0JDLHFDQUFPLENBQUNGLE1BQU0sQ0FBQ0MsR0FBUixDQUFQLENBQW9CSCxNQUFwQixDQUEyQixV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OUIsUzs7S0FBQUEsUztBQXlMU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IHN0YXRlbWVudFR5cGVzID0gT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykucmVkdWNlKFxuICAoYWNjLCBjaHVyY2gpID0+IHtcbiAgICBhY2NbY2h1cmNoLmtleV0gPSBzZXJtb25zW2NodXJjaC5rZXldLnJlZHVjZSgobGluZUFjYywgbGluZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbGluZUFjY1xuICAgICAgfVxuICAgICAgbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gPSBsaW5lQWNjW2xpbmUuc3RhdGVtZW50U2VudGltZW50XVxuICAgICAgICA/IGxpbmVBY2NbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdICsgMVxuICAgICAgICA6IDFcblxuICAgICAgYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdID0gYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdXG4gICAgICAgID8gYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdICsgMVxuICAgICAgICA6IDFcblxuICAgICAgcmV0dXJuIGxpbmVBY2NcbiAgICB9LCB7fSlcbiAgICByZXR1cm4gYWNjXG4gIH0sXG4gIHsgYWxsU3RhdGVtZW50czoge30gfVxuKVxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGVtZW50VHlwZXMpKVxuXG5jb25zdCBXYXRlcm1hcms6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDaHVyY2gsIHNldFNlbGVjdGVkQ2h1cmNoXSA9IHVzZVN0YXRlPENodXJjaEtleXM+KG51bGwpXG4gIGNvbnN0IGZpbGxDbGFzcyA9IGNzc2BcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvYnVpbGRpbmdzL3dhdGVybWFyay5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBvcGFjaXR5OiAwLjAzO1xuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaF0ge1xuICAgICAgZmlsbDogdmFyKC0taGlnaGxpZ2h0KTtcbiAgICAgIG9wYWNpdHk6ICR7c2VsZWN0ZWRDaHVyY2ggPyAwLjMgOiAwLjl9O1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDAwbXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvYmxlbWF0aWMnXSB7XG4gICAgICAgIGZpbGw6IHZhcigtLXByb2JsZW1hdGljKTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvZHVjdGl2ZSddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvZHVjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoPScke3NlbGVjdGVkQ2h1cmNofSddIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSBzZXRTZWxlY3RlZENodXJjaFxuXG4gIGNvbnN0IENodXJjaEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgY2h1cmNoID0gY2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5wYXN0b3J9eycgJ31cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcbiAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzZweCcsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdueXRmcmFua2xpbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaHVyY2g/Lm5hbWV9ICh7Y2h1cmNoPy5kZW5vbWluYXRpb259KSAtIHtjaHVyY2g/LmNpdHl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICB7Y2h1cmNoPy5mYXN0RmFjdHMgJiZcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhjaHVyY2g/LmZhc3RGYWN0cykubWFwKChbZmFjdFR5cGUsIGZhY3RdLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8c3Bhbj57ZmFjdFR5cGV9PC9zcGFuPiB7ZmFjdH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChmaWxsQ2xhc3MsIHN0eWxlZC5jb250YWluZXJDbGFzcyl9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgxPlByZWFjaGluZyBvbiBSYWNlPC9oMT5cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICBXaGF0IG1lc3NhZ2UgZGlkIHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHNlbmQgYWZ0ZXIgYSB3ZWVrIG9mIG5hdGlvbmFsIHRyYWdlZGllcyBpbiAyMDE2P1xuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaHVyY2hBcmVhfT5cbiAgICAgICAgPENodXJjaEluZm8gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNoYXJ0QXJlYX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAtMSwgZ3JpZEFyZWE6ICdtYXAnIH19PlxuICAgICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XG4gICAgICAgICAgPERGV01hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQubWFwQ2xhc3N9XG4gICAgICAgICAgICBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5XZSBuZWVkIHRvIGhhdmUgdW5pdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+VGhlIGNvdW50cnkgaGFzIGEgaGlzdG9yeSBvZiBzeXN0ZW1hdGljIHJhY2lzbTwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UnIH19PlxuICAgICAgICAgIDxoMz5JbmZsdWVuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTEnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMycgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMicgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnY2h1cmNoVHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdzdWJzdGFuY2UnIH19PlxuICAgICAgICA8aDM+U3Vic3RhbmNlPC9oMz5cbiAgICAgICAgPFN1YnN0YW5jZUNoYXJ0IG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9IHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGFzdG9yIFRvZGQgV2FnbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnBhc3RvckNsYXNzfVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ2xhc3N9PlxuICAgICAgICAgIHtzZXJtb25zW3NlbGVjdGVkQ2h1cmNoXT8ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhZ3JhcGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGAkezUwICogaWR4fW1zIGVhc2UgZmFkZWluYCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVkLnNwYW5DbGFzcyxcbiAgICAgICAgICAgICAgICAgIHBhcmFncmFwaC5zdGF0ZW1lbnRTZW50aW1lbnQgPT09ICdwcm9kdWN0aXZlJyA/IHN0eWxlZC5wcm9CTE0gOiBzdHlsZWQucHJvUG9saWNlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHszMCAqIGlkeH1tcyBlYXNlaW4gZmFkZWluYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaC50ZXh0fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})