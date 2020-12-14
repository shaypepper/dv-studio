webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = _sermons__WEBPACK_IMPORTED_MODULE_6__[church.key].reduce(function (lineAcc, line) {\n    if (typeof line === 'string') {\n      return lineAcc;\n    }\n\n    lineAcc[line.statementSentiment] = lineAcc[line.statementSentiment] ? lineAcc[line.statementSentiment] + 1 : 1;\n    return lineAcc;\n  }, {});\n  return acc;\n}, {});\nconsole.log(statementTypes);\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (church.denomination) - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 179,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwibGluZUFjYyIsImxpbmUiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJjb25zb2xlIiwibG9nIiwiV2F0ZXJtYXJrIiwidXNlU3RhdGUiLCJzZWxlY3RlZENodXJjaCIsInNldFNlbGVjdGVkQ2h1cmNoIiwiZmlsbENsYXNzIiwiY3NzIiwiY2xpY2tIYW5kbGVyIiwiQ2h1cmNoSW5mbyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJmYXN0RmFjdHMiLCJlbnRyaWVzIiwibWFwIiwiaWR4IiwiZmFjdFR5cGUiLCJmYWN0IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsInBhcmFncmFwaCIsImFuaW1hdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLG1EQUFkLEVBQXdCQyxNQUF4QixDQUErQixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDckVELEtBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFSLENBQUgsR0FBa0JDLHFDQUFPLENBQUNGLE1BQU0sQ0FBQ0MsR0FBUixDQUFQLENBQW9CSCxNQUFwQixDQUEyQixVQUFDSyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDOUQs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QUFDUSxjQUFELENBRFYsMERBQ0csc0JBQXlCaUIsR0FBekIsQ0FBNkIsVUFBQ1EsU0FBRCxFQUFZUCxHQUFaLEVBQW9CO0FBQ2hELFFBQUksT0FBT08sU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxhQUNFO0FBQ0UsV0FBRyxZQUFLekIsY0FBTCxjQUF1QmtCLEdBQXZCLENBREw7QUFFRSxhQUFLLEVBQUU7QUFDTFEsbUJBQVMsWUFBSyxLQUFLUixHQUFWO0FBREosU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUdPLFNBTkgsQ0FERjtBQVVEOztBQUNELFdBQ0U7QUFDRSxTQUFHLFlBQUt6QixjQUFMLGNBQXVCa0IsR0FBdkIsQ0FETDtBQUVFLGVBQVMsRUFBRUcsd0RBQUUsQ0FDWEMsaURBRFcsRUFFWEssSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCTiw4Q0FBdEIsR0FBc0NBLGlEQUYzQixDQUZmO0FBTUUsV0FBSyxFQUFFO0FBQ0xJLGlCQUFTLFlBQUssS0FBS1IsR0FBVjtBQURKLE9BTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVHTyxTQUFTLENBQUNJLElBVmIsQ0FERjtBQWNELEdBM0JBLENBREgsQ0FERixDQXhFRixDQURGO0FBMkdELENBdkxEOztHQUFNL0IsUzs7S0FBQUEsUztBQXlMU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IHN0YXRlbWVudFR5cGVzID0gT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykucmVkdWNlKChhY2MsIGNodXJjaCkgPT4ge1xuICBhY2NbY2h1cmNoLmtleV0gPSBzZXJtb25zW2NodXJjaC5rZXldLnJlZHVjZSgobGluZUFjYywgbGluZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgbGluZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsaW5lQWNjXG4gICAgfVxuICAgIGxpbmVBY2NbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdID0gbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF1cbiAgICAgID8gbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gKyAxXG4gICAgICA6IDFcbiAgICByZXR1cm4gbGluZUFjY1xuICB9LCB7fSlcbiAgcmV0dXJuIGFjY1xufSwge30pXG5jb25zb2xlLmxvZyhzdGF0ZW1lbnRUeXBlcylcblxuY29uc3QgV2F0ZXJtYXJrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2h1cmNoLCBzZXRTZWxlY3RlZENodXJjaF0gPSB1c2VTdGF0ZTxDaHVyY2hLZXlzPihudWxsKVxuICBjb25zdCBmaWxsQ2xhc3MgPSBjc3NgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL2J1aWxkaW5ncy93YXRlcm1hcmsucG5nJyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IC0zMHB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgb3BhY2l0eTogMC4wMztcbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2hdIHtcbiAgICAgIGZpbGw6IHZhcigtLWhpZ2hsaWdodCk7XG4gICAgICBvcGFjaXR5OiAke3NlbGVjdGVkQ2h1cmNoID8gMC4yIDogMC45fTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwMG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG5cbiAgICAgICZbZGF0YS1zZW50aW1lbnQ9J3Byb2JsZW1hdGljJ10ge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcm9ibGVtYXRpYyk7XG4gICAgICB9XG5cbiAgICAgICZbZGF0YS1zZW50aW1lbnQ9J3Byb2R1Y3RpdmUnXSB7XG4gICAgICAgIGZpbGw6IHZhcigtLXByb2R1Y3RpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaD0nJHtzZWxlY3RlZENodXJjaH0nXSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gc2V0U2VsZWN0ZWRDaHVyY2hcblxuICBjb25zdCBDaHVyY2hJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGNodXJjaCA9IGNodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDI+XG4gICAgICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8ucGFzdG9yfXsnICd9XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXG4gICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc2cHgnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnbnl0ZnJhbmtsaW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2h1cmNoPy5uYW1lfSAoY2h1cmNoLmRlbm9taW5hdGlvbikgLSB7Y2h1cmNoPy5jaXR5fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAge2NodXJjaD8uZmFzdEZhY3RzICYmXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2h1cmNoPy5mYXN0RmFjdHMpLm1hcCgoW2ZhY3RUeXBlLCBmYWN0XSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPHNwYW4+e2ZhY3RUeXBlfTwvc3Bhbj4ge2ZhY3R9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y3goZmlsbENsYXNzLCBzdHlsZWQuY29udGFpbmVyQ2xhc3MpfT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0+XG4gICAgICAgIDxoMT5QcmVhY2hpbmcgb24gUmFjZTwvaDE+XG4gICAgICAgIDxzdWI+XG4gICAgICAgICAgV2hhdCBtZXNzYWdlIGRpZCB3aGl0ZSBwYXN0b3JzIG9mIERhbGxhcyBzZW5kIGFmdGVyIGEgd2VlayBvZiBuYXRpb25hbCB0cmFnZWRpZXMgaW4gMjAxNj9cbiAgICAgICAgPC9zdWI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2h1cmNoQXJlYX0+XG4gICAgICAgIDxDaHVyY2hJbmZvIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaGFydEFyZWF9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogLTEsIGdyaWRBcmVhOiAnbWFwJyB9fT5cbiAgICAgICAgICA8aDM+TG9jYXRpb248L2gzPlxuICAgICAgICAgIDxERldNYXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLm1hcENsYXNzfVxuICAgICAgICAgICAgc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPk9ubHkgSmVzdXMgY2FuIGZpeCB0aGlzPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+V2UgbmVlZCB0byBoYXZlIHVuaXR5PC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+QmUgY2FyZWZ1bCBub3QgdG8gYXNrIGZvciB0b28gbXVjaDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPkJsYWNrIExpdmVzIE1hdHRlcjwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPlRoZSBjb3VudHJ5IGhhcyBhIGhpc3Rvcnkgb2Ygc3lzdGVtYXRpYyByYWNpc208L3A+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlJyB9fT5cbiAgICAgICAgICA8aDM+SW5mbHVlbmNlPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UxJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eyd0d2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTMnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2F0dGVuZGVlcyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2U0JyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydwb2RjYXN0UmV2aWV3cyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTInIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2NodXJjaFR3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnc3Vic3RhbmNlJyB9fT5cbiAgICAgICAgPGgzPlN1YnN0YW5jZTwvaDM+XG4gICAgICAgIDxTdWJzdGFuY2VDaGFydCBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfSBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvd2F0ZXJtYXJrLXRvZGQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlBhc3RvciBUb2RkIFdhZ25lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5wYXN0b3JDbGFzc31cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25Db250YWluZXJDbGFzc30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uc1tzZWxlY3RlZENodXJjaF0/Lm1hcCgocGFyYWdyYXBoLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYWdyYXBoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHs1MCAqIGlkeH1tcyBlYXNlIGZhZGVpbmAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIHN0eWxlZC5zcGFuQ2xhc3MsXG4gICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpID4gMC4zID8gc3R5bGVkLnByb0JMTSA6IHN0eWxlZC5wcm9Qb2xpY2VcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IGAkezMwICogaWR4fW1zIGVhc2VpbiBmYWRlaW5gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLnRleHR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})