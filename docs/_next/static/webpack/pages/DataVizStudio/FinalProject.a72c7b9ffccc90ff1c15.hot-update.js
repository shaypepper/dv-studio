webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = _sermons__WEBPACK_IMPORTED_MODULE_6__[church.key].reduce(function (lineAcc, line) {\n    if (typeof line === 'string') {\n      return lineAcc;\n    }\n\n    lineAcc[line.statementSentiment] = lineAcc[line.statementSentiment] ? lineAcc[line.statementSentiment] + 1 : 1;\n    acc.allStatements[line.statementSentiment] = acc.allStatements[line.statementSentiment] ? acc.allStatements[line.statementSentiment] + 1 : 1;\n    return lineAcc;\n  }, {});\n  return acc;\n}, {\n  allStatements: {}\n});\nconsole.log(JSON.stringify(statementTypes.allStatements));\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (\", church.denomination, \") - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 187,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 198,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwibGluZUFjYyIsImxpbmUiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJhbGxTdGF0ZW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJXYXRlcm1hcmsiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2h1cmNoIiwic2V0U2VsZWN0ZWRDaHVyY2giLCJmaWxsQ2xhc3MiLCJjc3MiLCJjbGlja0hhbmRsZXIiLCJDaHVyY2hJbmZvIiwicGFzdG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZvbnRGYW1pbHkiLCJuYW1lIiwiZGVub21pbmF0aW9uIiwiY2l0eSIsImZhc3RGYWN0cyIsImVudHJpZXMiLCJtYXAiLCJpZHgiLCJmYWN0VHlwZSIsImZhY3QiLCJjeCIsInN0eWxlZCIsImdyaWRBcmVhIiwiekluZGV4IiwicGFyYWdyYXBoIiwiYW5pbWF0aW9uIiwiTWF0aCIsInJhbmRvbSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsbURBQWQsRUFBd0JDLE1BQXhCLENBQ3JCLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNmRCxLQUFHLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUixDQUFILEdBQWtCQyxxQ0FBTyxDQUFDRixNQUFNLENBQUNDLEdBQVIsQ0FBUCxDQUFv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Uzs7S0FBQUEsUztBQXlMU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IHN0YXRlbWVudFR5cGVzID0gT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykucmVkdWNlKFxuICAoYWNjLCBjaHVyY2gpID0+IHtcbiAgICBhY2NbY2h1cmNoLmtleV0gPSBzZXJtb25zW2NodXJjaC5rZXldLnJlZHVjZSgobGluZUFjYywgbGluZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbGluZUFjY1xuICAgICAgfVxuICAgICAgbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gPSBsaW5lQWNjW2xpbmUuc3RhdGVtZW50U2VudGltZW50XVxuICAgICAgICA/IGxpbmVBY2NbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdICsgMVxuICAgICAgICA6IDFcblxuICAgICAgYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdID0gYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdXG4gICAgICAgID8gYWNjLmFsbFN0YXRlbWVudHNbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdICsgMVxuICAgICAgICA6IDFcblxuICAgICAgcmV0dXJuIGxpbmVBY2NcbiAgICB9LCB7fSlcbiAgICByZXR1cm4gYWNjXG4gIH0sXG4gIHsgYWxsU3RhdGVtZW50czoge30gfVxuKVxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGVtZW50VHlwZXMuYWxsU3RhdGVtZW50cykpXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENodXJjaCwgc2V0U2VsZWN0ZWRDaHVyY2hdID0gdXNlU3RhdGU8Q2h1cmNoS2V5cz4obnVsbClcbiAgY29uc3QgZmlsbENsYXNzID0gY3NzYFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy9idWlsZGluZ3Mvd2F0ZXJtYXJrLnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuMDM7XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoXSB7XG4gICAgICBmaWxsOiB2YXIoLS1oaWdobGlnaHQpO1xuICAgICAgb3BhY2l0eTogJHtzZWxlY3RlZENodXJjaCA/IDAuMiA6IDAuOX07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9ibGVtYXRpYyddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvYmxlbWF0aWMpO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9kdWN0aXZlJ10ge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcm9kdWN0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2g9JyR7c2VsZWN0ZWRDaHVyY2h9J10ge1xuICAgICAgb3BhY2l0eTogMC45O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IHNldFNlbGVjdGVkQ2h1cmNoXG5cbiAgY29uc3QgQ2h1cmNoSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBjaHVyY2ggPSBjaHVyY2hlc1tzZWxlY3RlZENodXJjaF1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/LnBhc3Rvcn17JyAnfVxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxuICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ255dGZyYW5rbGluJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NodXJjaD8ubmFtZX0gKHtjaHVyY2guZGVub21pbmF0aW9ufSkgLSB7Y2h1cmNoPy5jaXR5fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAge2NodXJjaD8uZmFzdEZhY3RzICYmXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2h1cmNoPy5mYXN0RmFjdHMpLm1hcCgoW2ZhY3RUeXBlLCBmYWN0XSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPHNwYW4+e2ZhY3RUeXBlfTwvc3Bhbj4ge2ZhY3R9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y3goZmlsbENsYXNzLCBzdHlsZWQuY29udGFpbmVyQ2xhc3MpfT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0+XG4gICAgICAgIDxoMT5QcmVhY2hpbmcgb24gUmFjZTwvaDE+XG4gICAgICAgIDxzdWI+XG4gICAgICAgICAgV2hhdCBtZXNzYWdlIGRpZCB3aGl0ZSBwYXN0b3JzIG9mIERhbGxhcyBzZW5kIGFmdGVyIGEgd2VlayBvZiBuYXRpb25hbCB0cmFnZWRpZXMgaW4gMjAxNj9cbiAgICAgICAgPC9zdWI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2h1cmNoQXJlYX0+XG4gICAgICAgIDxDaHVyY2hJbmZvIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaGFydEFyZWF9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogLTEsIGdyaWRBcmVhOiAnbWFwJyB9fT5cbiAgICAgICAgICA8aDM+TG9jYXRpb248L2gzPlxuICAgICAgICAgIDxERldNYXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLm1hcENsYXNzfVxuICAgICAgICAgICAgc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPk9ubHkgSmVzdXMgY2FuIGZpeCB0aGlzPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+V2UgbmVlZCB0byBoYXZlIHVuaXR5PC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+QmUgY2FyZWZ1bCBub3QgdG8gYXNrIGZvciB0b28gbXVjaDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPkJsYWNrIExpdmVzIE1hdHRlcjwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPlRoZSBjb3VudHJ5IGhhcyBhIGhpc3Rvcnkgb2Ygc3lzdGVtYXRpYyByYWNpc208L3A+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlJyB9fT5cbiAgICAgICAgICA8aDM+SW5mbHVlbmNlPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UxJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eyd0d2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTMnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2F0dGVuZGVlcyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2U0JyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydwb2RjYXN0UmV2aWV3cyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTInIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2NodXJjaFR3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnc3Vic3RhbmNlJyB9fT5cbiAgICAgICAgPGgzPlN1YnN0YW5jZTwvaDM+XG4gICAgICAgIDxTdWJzdGFuY2VDaGFydCBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfSBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvd2F0ZXJtYXJrLXRvZGQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlBhc3RvciBUb2RkIFdhZ25lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5wYXN0b3JDbGFzc31cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25Db250YWluZXJDbGFzc30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uc1tzZWxlY3RlZENodXJjaF0/Lm1hcCgocGFyYWdyYXBoLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYWdyYXBoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHs1MCAqIGlkeH1tcyBlYXNlIGZhZGVpbmAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIHN0eWxlZC5zcGFuQ2xhc3MsXG4gICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpID4gMC4zID8gc3R5bGVkLnByb0JMTSA6IHN0eWxlZC5wcm9Qb2xpY2VcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IGAkezMwICogaWR4fW1zIGVhc2VpbiBmYWRlaW5gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLnRleHR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})