"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/Sections/Watermark.tsx":
  /*!********************************************************!*\
    !*** ./components/FinalProject/Sections/Watermark.tsx ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function componentsFinalProjectSectionsWatermarkTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = _sermons__WEBPACK_IMPORTED_MODULE_6__[church.key].reduce(function (lineAcc, line) {\n    if (typeof line === 'string') {\n      return lineAcc;\n    }\n\n    lineAcc[line.statementSentiment] = lineAcc[line.statementSentiment] ? lineAcc[line.statementSentiment] + 1 : 1;\n    return lineAcc;\n  }, {});\n  return acc;\n}, {\n  allStatements: {}\n});\nconsole.log(statementTypes);\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (\", church.denomination, \") - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwibGluZUFjYyIsImxpbmUiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJhbGxTdGF0ZW1lbnRzIiwiY29uc29sZSIsImxvZyIsIldhdGVybWFyayIsInVzZVN0YXRlIiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsIkNodXJjaEluZm8iLCJwYXN0b3IiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiZm9udEZhbWlseSIsIm5hbWUiLCJkZW5vbWluYXRpb24iLCJjaXR5IiwiZmFzdEZhY3RzIiwiZW50cmllcyIsIm1hcCIsImlkeCIsImZhY3RUeXBlIiwiZmFjdCIsImN4Iiwic3R5bGVkIiwiZ3JpZEFyZWEiLCJ6SW5kZXgiLCJwYXJhZ3JhcGgiLCJhbmltYXRpb24iLCJNYXRoIiwicmFuZG9tIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxtREFBZCxFQUF3QkMsTUFBeEIsQ0FDckIsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2ZELEtBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFSLENBQUgsR0FBa0JDLHFDQUFPLENBQUNGLE1BQU0sQ0FBQ0MsR0FBUixDQUFQLENBQW9CSCxNQUFwQixDQUEyQixVQUFD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QSxLQUNFO0FBQUcsYUFBUyxFQUFFQSxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNHaEMscUNBQU8sQ0FBQ1MsY0FBRCxDQURWLDBEQUNHLHNCQUF5QmtCLEdBQXpCLENBQTZCLFVBQUNRLFNBQUQsRUFBWVAsR0FBWixFQUFvQjtBQUNoRCxRQUFJLE9BQU9PLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDakMsYUFDRTtBQUNFLFdBQUcsWUFBSzFCLGNBQUwsY0FBdUJtQixHQUF2QixDQURMO0FBRUUsYUFBSyxFQUFFO0FBQ0xRLG1CQUFTLFlBQUssS0FBS1IsR0FBVjtBQURKLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1HTyxTQU5ILENBREY7QUFVRDs7QUFDRCxXQUNFO0FBQ0UsU0FBRyxZQUFLMUIsY0FBTCxjQUF1Qm1CLEdBQXZCLENBREw7QUFFRSxlQUFTLEVBQUVHLHdEQUFFLENBQ1hDLGlEQURXLEVBRVhLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQk4sOENBQXRCLEdBQXNDQSxpREFGM0IsQ0FGZjtBQU1FLFdBQUssRUFBRTtBQUNMSSxpQkFBUyxZQUFLLEtBQUtSLEdBQVY7QUFESixPQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVR08sU0FBUyxDQUFDSSxJQVZiLENBREY7QUFjRCxHQTNCQSxDQURILENBREYsQ0F4RUYsQ0FERjtBQTJHRCxDQXZMRDs7R0FBTWhDLFM7O0tBQUFBLFM7QUF5TFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0ICogYXMgc2VybW9ucyBmcm9tICcuLi9zZXJtb25zJ1xuaW1wb3J0IERGV01hcCBmcm9tICcuLi9NYXAnXG5pbXBvcnQgSW5mbHVlbmNlQ2hhcnQgZnJvbSAnLi4vSW5mbHVlbmNlQ2hhcnQnXG5pbXBvcnQgU3Vic3RhbmNlQ2hhcnQgZnJvbSAnLi4vU3Vic3RhbmNlQ2hhcnQnXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4uL21ldGFkYXRhJ1xuXG5jb25zdCBzdGF0ZW1lbnRUeXBlcyA9IE9iamVjdC52YWx1ZXMoY2h1cmNoZXMpLnJlZHVjZShcbiAgKGFjYywgY2h1cmNoKSA9PiB7XG4gICAgYWNjW2NodXJjaC5rZXldID0gc2VybW9uc1tjaHVyY2gua2V5XS5yZWR1Y2UoKGxpbmVBY2MsIGxpbmUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGluZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGxpbmVBY2NcbiAgICAgIH1cbiAgICAgIGxpbmVBY2NbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdID0gbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF1cbiAgICAgICAgPyBsaW5lQWNjW2xpbmUuc3RhdGVtZW50U2VudGltZW50XSArIDFcbiAgICAgICAgOiAxXG5cbiAgICAgIHJldHVybiBsaW5lQWNjXG4gICAgfSwge30pXG4gICAgcmV0dXJuIGFjY1xuICB9LFxuICB7IGFsbFN0YXRlbWVudHM6IHt9IH1cbilcbmNvbnNvbGUubG9nKHN0YXRlbWVudFR5cGVzKVxuXG5jb25zdCBXYXRlcm1hcms6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDaHVyY2gsIHNldFNlbGVjdGVkQ2h1cmNoXSA9IHVzZVN0YXRlPENodXJjaEtleXM+KG51bGwpXG4gIGNvbnN0IGZpbGxDbGFzcyA9IGNzc2BcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvYnVpbGRpbmdzL3dhdGVybWFyay5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBvcGFjaXR5OiAwLjAzO1xuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaF0ge1xuICAgICAgZmlsbDogdmFyKC0taGlnaGxpZ2h0KTtcbiAgICAgIG9wYWNpdHk6ICR7c2VsZWN0ZWRDaHVyY2ggPyAwLjIgOiAwLjl9O1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDAwbXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvYmxlbWF0aWMnXSB7XG4gICAgICAgIGZpbGw6IHZhcigtLXByb2JsZW1hdGljKTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvZHVjdGl2ZSddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvZHVjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoPScke3NlbGVjdGVkQ2h1cmNofSddIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSBzZXRTZWxlY3RlZENodXJjaFxuXG4gIGNvbnN0IENodXJjaEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgY2h1cmNoID0gY2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5wYXN0b3J9eycgJ31cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcbiAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzZweCcsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdueXRmcmFua2xpbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaHVyY2g/Lm5hbWV9ICh7Y2h1cmNoLmRlbm9taW5hdGlvbn0pIC0ge2NodXJjaD8uY2l0eX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHtjaHVyY2g/LmZhc3RGYWN0cyAmJlxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaD8uZmFzdEZhY3RzKS5tYXAoKFtmYWN0VHlwZSwgZmFjdF0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxzcGFuPntmYWN0VHlwZX08L3NwYW4+IHtmYWN0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2N4KGZpbGxDbGFzcywgc3R5bGVkLmNvbnRhaW5lckNsYXNzKX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19PlxuICAgICAgICA8aDE+UHJlYWNoaW5nIG9uIFJhY2U8L2gxPlxuICAgICAgICA8c3ViPlxuICAgICAgICAgIFdoYXQgbWVzc2FnZSBkaWQgd2hpdGUgcGFzdG9ycyBvZiBEYWxsYXMgc2VuZCBhZnRlciBhIHdlZWsgb2YgbmF0aW9uYWwgdHJhZ2VkaWVzIGluIDIwMTY/XG4gICAgICAgIDwvc3ViPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNodXJjaEFyZWF9PlxuICAgICAgICA8Q2h1cmNoSW5mbyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5tYXBDbGFzc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5Pbmx5IEplc3VzIGNhbiBmaXggdGhpczwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPldlIG5lZWQgdG8gaGF2ZSB1bml0eTwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPkJlIGNhcmVmdWwgbm90IHRvIGFzayBmb3IgdG9vIG11Y2g8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5CbGFjayBMaXZlcyBNYXR0ZXI8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5UaGUgY291bnRyeSBoYXMgYSBoaXN0b3J5IG9mIHN5c3RlbWF0aWMgcmFjaXNtPC9wPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZScgfX0+XG4gICAgICAgICAgPGgzPkluZmx1ZW5jZTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMScgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UzJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydhdHRlbmRlZXMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlNCcgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsncG9kY2FzdFJldmlld3MnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UyJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydjaHVyY2hUd2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3N1YnN0YW5jZScgfX0+XG4gICAgICAgIDxoMz5TdWJzdGFuY2U8L2gzPlxuICAgICAgICA8U3Vic3RhbmNlQ2hhcnQgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn0gc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1nL3dhdGVybWFyay10b2RkLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJQYXN0b3IgVG9kZCBXYWduZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQucGFzdG9yQ2xhc3N9XG4gICAgICAgICAgLz4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25DbGFzc30+XG4gICAgICAgICAge3Nlcm1vbnNbc2VsZWN0ZWRDaHVyY2hdPy5tYXAoKHBhcmFncmFwaCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFncmFwaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYCR7NTAgKiBpZHh9bXMgZWFzZSBmYWRlaW5gLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICBzdHlsZWQuc3BhbkNsYXNzLFxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+IDAuMyA/IHN0eWxlZC5wcm9CTE0gOiBzdHlsZWQucHJvUG9saWNlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHszMCAqIGlkeH1tcyBlYXNlaW4gZmFkZWluYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaC50ZXh0fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");
    /***/
  }
});