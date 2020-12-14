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

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar classifiedStatements = {\n  callToAction: 'productive',\n  acknowledgingInjustice: 'productive',\n  blackLivesMatter: 'productive',\n  commendingTheDemonstrators: 'productive',\n  denouncingTheMovement: 'problematic',\n  inflammatory: 'problematic',\n  invalidating: 'problematic',\n  expectingForgiveness: 'problematic',\n  violentProtestorsAreTheProblem: 'problematic',\n  sanctimoniousTrivialities: 'problematic',\n  goodCopsBadCops: 'problematic',\n  theAnswerIsJesus: 'problematic',\n  fightAgainstInjustice: 'productive',\n  passTheMic: 'productive',\n  importanceOfDiversity: 'productive',\n  encouragingEmpathy: 'productive',\n  absenceOfTension: 'problematic'\n};\nvar statementTypes = Object.values(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"]).reduce(function (acc, church) {\n  acc[church.key] = _sermons__WEBPACK_IMPORTED_MODULE_6__[church.key].reduce(function (lineAcc, line) {\n    if (typeof line === 'string') {\n      return lineAcc;\n    }\n\n    lineAcc[line.statementSentiment] = lineAcc[line.statementSentiment] ? lineAcc[line.statementSentiment] + 1 : 1;\n    acc.allStatements[line.statementSentiment] = acc.allStatements[line.statementSentiment] ? acc.allStatements[line.statementSentiment] + 1 : 1;\n    return lineAcc;\n  }, {});\n  return acc;\n}, {\n  allStatements: {}\n});\nconsole.log(JSON.stringify(statementTypes.allStatements));\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (\", church.denomination, \") - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 207,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 218,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbImNsYXNzaWZpZWRTdGF0ZW1lbnRzIiwiY2FsbFRvQWN0aW9uIiwiYWNrbm93bGVkZ2luZ0luanVzdGljZSIsImJsYWNrTGl2ZXNNYXR0ZXIiLCJjb21tZW5kaW5nVGhlRGVtb25zdHJhdG9ycyIsImRlbm91bmNpbmdUaGVNb3ZlbWVudCIsImluZmxhbW1hdG9yeSIsImludmFsaWRhdGluZyIsImV4cGVjdGluZ0ZvcmdpdmVuZXNzIiwidmlvbGVudFByb3Rlc3RvcnNBcmVUaGVQcm9ibGVtIiwic2FuY3RpbW9uaW91c1RyaXZpYWxpdGllcyIsImdvb2RDb3BzQmFkQ29wcyIsInRoZUFuc3dlcklzSmVzdXMiLCJmaWdodEFnYWluc3RJbmp1c3RpY2UiLCJwYXNzVGhlTWljIiwiaW1wb3J0YW5jZU9mRGl2ZXJzaXR5IiwiZW5jb3VyYWdpbmdFbXBhdGh5IiwiYWJzZW5jZU9mVGVuc2lvbiIsInN0YXRlbWVudFR5cGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJyZWR1Y2UiLCJhY2MiLCJjaHVyY2giLCJrZXkiLCJzZXJtb25zIiwibGluZUFjYyIsImxpbmUiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJhbGxTdGF0ZW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJXYXRlcm1hcmsiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2h1cmNoIiwic2V0U2VsZWN0ZWRDaHVyY2giLCJmaWxsQ2xhc3MiLCJjc3MiLCJjbGlja0hhbmRsZXIiLCJDaHVyY2hJbmZvIiwicGFzdG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZvbnRGYW1pbHkiLCJuYW1lIiwiZGVub21pbmF0aW9uIiwiY2l0eSIsImZhc3RGYWN0cyIsImVudHJpZXMiLCJtYXAiLCJpZHgiLCJmYWN0VHlwZSIsImZhY3QiLCJjeCIsInN0eWxlZCIsImdyaWRBcmVhIiwiekluZGV4IiwicGFyYWdyYXBoIiwiYW5pbWF0aW9uIiwiTWF0aCIsInJhbmRvbSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUc7QUFDM0JDLGNBQVksRUFBRSxZQURhO0FBRTNCQyx3QkFBc0IsRUFBRSxZQUZHO0FBRzNCQyxrQkFBZ0IsRUFBRSxZQUhTO0FBSTNCQyw0QkFBMEIsRUFBRSxZQUpEO0FBSzNCQyx1QkFBcUIsRUFBRSxhQUxJO0FBTTNCQyxjQUFZLEVBQUUsYUFOYTtBQU8zQkMsY0FBWSxFQUFFLGFBUGE7QUFRM0JDLHNCQUFvQixFQUFFLGFBUks7QUFTM0JDLGdDQUE4QixFQUFFLGFBVEw7QUFVM0JDLDJCQUF5QixFQUFFLGFBVkE7QUFXM0JDLGlCQUFlLEVBQUUsYUFYVTtBQVkzQkMsa0JBQWdCLEVBQUUsYUFaUztBQWEzQkMsdUJBQXFCLEVBQUUsWUFiSTtBQWMzQkMsWUFBVSxFQUFFLFlBZGU7QUFlM0JDLHVCQUFxQixFQUFFLFlBZkk7QUFnQjNCQyxvQkFBa0IsRUFBRSxZQWhCTztBQWlCM0JDLGtCQUFnQixFQUFFO0FBakJTLENBQTdCO0FBb0JBLElBQU1DLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLG1EQUFkLEVBQXdCQyxNQUF4QixDQUNyQixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDZkQsS0FBRyxDQUFDQyxNQUFNLENBQUNDLEdBQVIsQ0FBSCxHQUFrQkMscUNBQU8sQ0FBQ0YsTUFBTSxDQUFDQyxHQUFSLENBQVAsQ0FBb0JILE1BQXBCLENBQTJCLFVBQUNLLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUM5RCxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFB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eC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0ICogYXMgc2VybW9ucyBmcm9tICcuLi9zZXJtb25zJ1xuaW1wb3J0IERGV01hcCBmcm9tICcuLi9NYXAnXG5pbXBvcnQgSW5mbHVlbmNlQ2hhcnQgZnJvbSAnLi4vSW5mbHVlbmNlQ2hhcnQnXG5pbXBvcnQgU3Vic3RhbmNlQ2hhcnQgZnJvbSAnLi4vU3Vic3RhbmNlQ2hhcnQnXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4uL21ldGFkYXRhJ1xuXG5jb25zdCBjbGFzc2lmaWVkU3RhdGVtZW50cyA9IHtcbiAgY2FsbFRvQWN0aW9uOiAncHJvZHVjdGl2ZScsXG4gIGFja25vd2xlZGdpbmdJbmp1c3RpY2U6ICdwcm9kdWN0aXZlJyxcbiAgYmxhY2tMaXZlc01hdHRlcjogJ3Byb2R1Y3RpdmUnLFxuICBjb21tZW5kaW5nVGhlRGVtb25zdHJhdG9yczogJ3Byb2R1Y3RpdmUnLFxuICBkZW5vdW5jaW5nVGhlTW92ZW1lbnQ6ICdwcm9ibGVtYXRpYycsXG4gIGluZmxhbW1hdG9yeTogJ3Byb2JsZW1hdGljJyxcbiAgaW52YWxpZGF0aW5nOiAncHJvYmxlbWF0aWMnLFxuICBleHBlY3RpbmdGb3JnaXZlbmVzczogJ3Byb2JsZW1hdGljJyxcbiAgdmlvbGVudFByb3Rlc3RvcnNBcmVUaGVQcm9ibGVtOiAncHJvYmxlbWF0aWMnLFxuICBzYW5jdGltb25pb3VzVHJpdmlhbGl0aWVzOiAncHJvYmxlbWF0aWMnLFxuICBnb29kQ29wc0JhZENvcHM6ICdwcm9ibGVtYXRpYycsXG4gIHRoZUFuc3dlcklzSmVzdXM6ICdwcm9ibGVtYXRpYycsXG4gIGZpZ2h0QWdhaW5zdEluanVzdGljZTogJ3Byb2R1Y3RpdmUnLFxuICBwYXNzVGhlTWljOiAncHJvZHVjdGl2ZScsXG4gIGltcG9ydGFuY2VPZkRpdmVyc2l0eTogJ3Byb2R1Y3RpdmUnLFxuICBlbmNvdXJhZ2luZ0VtcGF0aHk6ICdwcm9kdWN0aXZlJyxcbiAgYWJzZW5jZU9mVGVuc2lvbjogJ3Byb2JsZW1hdGljJyxcbn1cblxuY29uc3Qgc3RhdGVtZW50VHlwZXMgPSBPYmplY3QudmFsdWVzKGNodXJjaGVzKS5yZWR1Y2UoXG4gIChhY2MsIGNodXJjaCkgPT4ge1xuICAgIGFjY1tjaHVyY2gua2V5XSA9IHNlcm1vbnNbY2h1cmNoLmtleV0ucmVkdWNlKChsaW5lQWNjLCBsaW5lKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpbmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBsaW5lQWNjXG4gICAgICB9XG4gICAgICBsaW5lQWNjW2xpbmUuc3RhdGVtZW50U2VudGltZW50XSA9IGxpbmVBY2NbbGluZS5zdGF0ZW1lbnRTZW50aW1lbnRdXG4gICAgICAgID8gbGluZUFjY1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gKyAxXG4gICAgICAgIDogMVxuXG4gICAgICBhY2MuYWxsU3RhdGVtZW50c1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gPSBhY2MuYWxsU3RhdGVtZW50c1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF1cbiAgICAgICAgPyBhY2MuYWxsU3RhdGVtZW50c1tsaW5lLnN0YXRlbWVudFNlbnRpbWVudF0gKyAxXG4gICAgICAgIDogMVxuXG4gICAgICByZXR1cm4gbGluZUFjY1xuICAgIH0sIHt9KVxuICAgIHJldHVybiBhY2NcbiAgfSxcbiAgeyBhbGxTdGF0ZW1lbnRzOiB7fSB9XG4pXG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGF0ZW1lbnRUeXBlcy5hbGxTdGF0ZW1lbnRzKSlcblxuY29uc3QgV2F0ZXJtYXJrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2h1cmNoLCBzZXRTZWxlY3RlZENodXJjaF0gPSB1c2VTdGF0ZTxDaHVyY2hLZXlzPihudWxsKVxuICBjb25zdCBmaWxsQ2xhc3MgPSBjc3NgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL2J1aWxkaW5ncy93YXRlcm1hcmsucG5nJyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IC0zMHB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgb3BhY2l0eTogMC4wMztcbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2hdIHtcbiAgICAgIGZpbGw6IHZhcigtLWhpZ2hsaWdodCk7XG4gICAgICBvcGFjaXR5OiAke3NlbGVjdGVkQ2h1cmNoID8gMC4yIDogMC45fTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwMG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG5cbiAgICAgICZbZGF0YS1zZW50aW1lbnQ9J3Byb2JsZW1hdGljJ10ge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcm9ibGVtYXRpYyk7XG4gICAgICB9XG5cbiAgICAgICZbZGF0YS1zZW50aW1lbnQ9J3Byb2R1Y3RpdmUnXSB7XG4gICAgICAgIGZpbGw6IHZhcigtLXByb2R1Y3RpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaD0nJHtzZWxlY3RlZENodXJjaH0nXSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gc2V0U2VsZWN0ZWRDaHVyY2hcblxuICBjb25zdCBDaHVyY2hJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGNodXJjaCA9IGNodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDI+XG4gICAgICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8ucGFzdG9yfXsnICd9XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXG4gICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc2cHgnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnbnl0ZnJhbmtsaW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2h1cmNoPy5uYW1lfSAoe2NodXJjaC5kZW5vbWluYXRpb259KSAtIHtjaHVyY2g/LmNpdHl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICB7Y2h1cmNoPy5mYXN0RmFjdHMgJiZcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhjaHVyY2g/LmZhc3RGYWN0cykubWFwKChbZmFjdFR5cGUsIGZhY3RdLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8c3Bhbj57ZmFjdFR5cGV9PC9zcGFuPiB7ZmFjdH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChmaWxsQ2xhc3MsIHN0eWxlZC5jb250YWluZXJDbGFzcyl9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgxPlByZWFjaGluZyBvbiBSYWNlPC9oMT5cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICBXaGF0IG1lc3NhZ2UgZGlkIHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHNlbmQgYWZ0ZXIgYSB3ZWVrIG9mIG5hdGlvbmFsIHRyYWdlZGllcyBpbiAyMDE2P1xuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaHVyY2hBcmVhfT5cbiAgICAgICAgPENodXJjaEluZm8gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNoYXJ0QXJlYX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAtMSwgZ3JpZEFyZWE6ICdtYXAnIH19PlxuICAgICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XG4gICAgICAgICAgPERGV01hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQubWFwQ2xhc3N9XG4gICAgICAgICAgICBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5XZSBuZWVkIHRvIGhhdmUgdW5pdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+VGhlIGNvdW50cnkgaGFzIGEgaGlzdG9yeSBvZiBzeXN0ZW1hdGljIHJhY2lzbTwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UnIH19PlxuICAgICAgICAgIDxoMz5JbmZsdWVuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTEnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMycgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMicgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnY2h1cmNoVHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdzdWJzdGFuY2UnIH19PlxuICAgICAgICA8aDM+U3Vic3RhbmNlPC9oMz5cbiAgICAgICAgPFN1YnN0YW5jZUNoYXJ0IG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9IHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGFzdG9yIFRvZGQgV2FnbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnBhc3RvckNsYXNzfVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ2xhc3N9PlxuICAgICAgICAgIHtzZXJtb25zW3NlbGVjdGVkQ2h1cmNoXT8ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhZ3JhcGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGAkezUwICogaWR4fW1zIGVhc2UgZmFkZWluYCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVkLnNwYW5DbGFzcyxcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPiAwLjMgPyBzdHlsZWQucHJvQkxNIDogc3R5bGVkLnByb1BvbGljZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYCR7MzAgKiBpZHh9bXMgZWFzZWluIGZhZGVpbmAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGgudGV4dH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJtYXJrXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");
    /***/
  }
});