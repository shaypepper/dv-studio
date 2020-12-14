webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _Charts_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Charts/InfluenceChart */ \"./components/Charts/InfluenceChart.tsx\");\n/* harmony import */ var _Charts_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Charts/SubstanceChart */ \"./components/Charts/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject(), selectedChurch ? 0.3 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    var church = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_10__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }\n    }, church === null || church === void 0 ? void 0 : church.name, \" (\", church === null || church === void 0 ? void 0 : church.denomination, \") - \", church === null || church === void 0 ? void 0 : church.city)), (church === null || church === void 0 ? void 0 : church.fastFacts) && Object.entries(church === null || church === void 0 ? void 0 : church.fastFacts).map(function (_ref, idx) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          factType = _ref2[0],\n          fact = _ref2[1];\n\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }\n      }, ' ', __jsx(\"span\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 15\n        }\n      }, factType), \" \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_4__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"mapClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, __jsx(_Charts_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: function onElementClick(a) {\n      return clickHandler(a);\n    },\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(_Charts_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: function onElementClick(a) {\n      return clickHandler(a);\n    },\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(_Charts_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: function onElementClick(a) {\n      return clickHandler(a);\n    },\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, __jsx(_Charts_InfluenceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: function onElementClick(a) {\n      return clickHandler(a);\n    },\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_Charts_SubstanceChart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onElementClick: function onElementClick(a) {\n      return clickHandler(a);\n    },\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_4__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_6__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        style: {\n          animation: \"\".concat(50 * idx, \"ms ease fadein\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 17\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_4__[\"spanClass\"], _metadata__WEBPACK_IMPORTED_MODULE_10__[\"classifiedStatements\"][paragraph.statementSentiment] === 'productive' ? _styled__WEBPACK_IMPORTED_MODULE_4__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_4__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(30 * idx, \"ms easein fadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsIkNodXJjaEluZm8iLCJjaHVyY2giLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImRlbm9taW5hdGlvbiIsImNpdHkiLCJmYXN0RmFjdHMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaWR4IiwiZmFjdFR5cGUiLCJmYWN0IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsImEiLCJzZXJtb25zIiwicGFyYWdyYXBoIiwiYW5pbWF0aW9uIiwiY2xhc3NpZmllZFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRTZW50aW1lbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQWEsSUFBYixDQURwQjtBQUFBLE1BQ3pCQyxjQUR5QjtBQUFBLE1BQ1RDLGlCQURTOztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLHlEQUFILG9CQWlCQUgsY0FBYyxHQUFHLEdBQUgsR0FBUyxHQWpCdkIsRUFpQ0dBLGNBakNILENBQWY7QUEwQ0EsTUFBTUksWUFBWSxHQUFHSCxpQkFBckI7O0FBRUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2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QURXLEVBRVhPLCtEQUFvQixDQUFDRixTQUFTLENBQUNHLGtCQUFYLENBQXBCLEtBQXVELFlBQXZELEdBQ0lSLDhDQURKLEdBRUlBLGlEQUpPLENBRmY7QUFRRSxXQUFLLEVBQUU7QUFDTE0saUJBQVMsWUFBSyxLQUFLVixHQUFWO0FBREosT0FSVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUdTLFNBQVMsQ0FBQ0ksSUFaYixDQURGO0FBZ0JELEdBN0JBLENBREgsQ0FERixDQXZFRixDQURGO0FBNEdELENBeExEOztHQUFNckMsUzs7S0FBQUEsUztBQTBMU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi8uLi9DaGFydHMvSW5mbHVlbmNlQ2hhcnQnXG5pbXBvcnQgU3Vic3RhbmNlQ2hhcnQgZnJvbSAnLi4vLi4vQ2hhcnRzL1N1YnN0YW5jZUNoYXJ0J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMsIGNsYXNzaWZpZWRTdGF0ZW1lbnRzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENodXJjaCwgc2V0U2VsZWN0ZWRDaHVyY2hdID0gdXNlU3RhdGU8Q2h1cmNoS2V5cz4obnVsbClcbiAgY29uc3QgZmlsbENsYXNzID0gY3NzYFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy9idWlsZGluZ3Mvd2F0ZXJtYXJrLnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuMDM7XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoXSB7XG4gICAgICBmaWxsOiB2YXIoLS1oaWdobGlnaHQpO1xuICAgICAgb3BhY2l0eTogJHtzZWxlY3RlZENodXJjaCA/IDAuMyA6IDAuOX07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9ibGVtYXRpYyddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvYmxlbWF0aWMpO1xuICAgICAgfVxuXG4gICAgICAmW2RhdGEtc2VudGltZW50PSdwcm9kdWN0aXZlJ10ge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcm9kdWN0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2g9JyR7c2VsZWN0ZWRDaHVyY2h9J10ge1xuICAgICAgb3BhY2l0eTogMC45O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IHNldFNlbGVjdGVkQ2h1cmNoXG5cbiAgY29uc3QgQ2h1cmNoSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBjaHVyY2ggPSBjaHVyY2hlc1tzZWxlY3RlZENodXJjaF1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/LnBhc3Rvcn17JyAnfVxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxuICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ255dGZyYW5rbGluJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NodXJjaD8ubmFtZX0gKHtjaHVyY2g/LmRlbm9taW5hdGlvbn0pIC0ge2NodXJjaD8uY2l0eX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHtjaHVyY2g/LmZhc3RGYWN0cyAmJlxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaD8uZmFzdEZhY3RzKS5tYXAoKFtmYWN0VHlwZSwgZmFjdF0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxzcGFuPntmYWN0VHlwZX08L3NwYW4+IHtmYWN0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2N4KGZpbGxDbGFzcywgc3R5bGVkLmNvbnRhaW5lckNsYXNzKX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19PlxuICAgICAgICA8aDE+UHJlYWNoaW5nIG9uIFJhY2U8L2gxPlxuICAgICAgICA8c3ViPlxuICAgICAgICAgIFdoYXQgbWVzc2FnZSBkaWQgd2hpdGUgcGFzdG9ycyBvZiBEYWxsYXMgc2VuZCBhZnRlciBhIHdlZWsgb2YgbmF0aW9uYWwgdHJhZ2VkaWVzIGluIDIwMTY/XG4gICAgICAgIDwvc3ViPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNodXJjaEFyZWF9PlxuICAgICAgICA8Q2h1cmNoSW5mbyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwIGNsYXNzTmFtZT17c3R5bGVkLm1hcENsYXNzfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPk9ubHkgSmVzdXMgY2FuIGZpeCB0aGlzPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+V2UgbmVlZCB0byBoYXZlIHVuaXR5PC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+QmUgY2FyZWZ1bCBub3QgdG8gYXNrIGZvciB0b28gbXVjaDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPkJsYWNrIExpdmVzIE1hdHRlcjwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPlRoZSBjb3VudHJ5IGhhcyBhIGhpc3Rvcnkgb2Ygc3lzdGVtYXRpYyByYWNpc208L3A+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlJyB9fT5cbiAgICAgICAgICA8aDM+SW5mbHVlbmNlPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UxJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXsoYTogQ2h1cmNoS2V5cykgPT4gY2xpY2tIYW5kbGVyKGEpfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UzJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXsoYTogQ2h1cmNoS2V5cykgPT4gY2xpY2tIYW5kbGVyKGEpfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9eyhhOiBDaHVyY2hLZXlzKSA9PiBjbGlja0hhbmRsZXIoYSl9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydwb2RjYXN0UmV2aWV3cyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTInIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9eyhhOiBDaHVyY2hLZXlzKSA9PiBjbGlja0hhbmRsZXIoYSl9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydjaHVyY2hUd2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3N1YnN0YW5jZScgfX0+XG4gICAgICAgIDxoMz5TdWJzdGFuY2U8L2gzPlxuICAgICAgICA8U3Vic3RhbmNlQ2hhcnRcbiAgICAgICAgICBvbkVsZW1lbnRDbGljaz17KGE6IENodXJjaEtleXMpID0+IGNsaWNrSGFuZGxlcihhKX1cbiAgICAgICAgICBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvd2F0ZXJtYXJrLXRvZGQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlBhc3RvciBUb2RkIFdhZ25lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5wYXN0b3JDbGFzc31cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25Db250YWluZXJDbGFzc30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uc1tzZWxlY3RlZENodXJjaF0/Lm1hcCgocGFyYWdyYXBoLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYWdyYXBoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgJHs1MCAqIGlkeH1tcyBlYXNlIGZhZGVpbmAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIHN0eWxlZC5zcGFuQ2xhc3MsXG4gICAgICAgICAgICAgICAgICBjbGFzc2lmaWVkU3RhdGVtZW50c1twYXJhZ3JhcGguc3RhdGVtZW50U2VudGltZW50XSA9PT0gJ3Byb2R1Y3RpdmUnXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVkLnByb0JMTVxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlZC5wcm9Qb2xpY2VcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IGAkezMwICogaWR4fW1zIGVhc2VpbiBmYWRlaW5gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLnRleHR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})