webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu, _churches$selectedChu2, _churches$selectedChu3, _churches$selectedChu4, _churches$selectedChu5;\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu2 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu2 === void 0 ? void 0 : _churches$selectedChu2.name, \" - \", (_churches$selectedChu3 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu3 === void 0 ? void 0 : _churches$selectedChu3.city)), (_churches$selectedChu4 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu4 === void 0 ? void 0 : (_churches$selectedChu5 = _churches$selectedChu4.fastFacts) === null || _churches$selectedChu5 === void 0 ? void 0 : _churches$selectedChu5.map(function (fact, idx) {\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, \"- \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_5__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 22\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsIkNodXJjaEluZm8iLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJmYXN0RmFjdHMiLCJtYXAiLCJmYWN0IiwiaWR4IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsInNlcm1vbnMiLCJwYXJhZ3JhcGgiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFhLElBQWIsQ0FEcEI7QUFBQSxNQUN6QkMsY0FEeUI7QUFBQSxNQUNUQyxpQkFEUzs7QUFFaEMsTUFBTUMsU0FBUyxHQUFHQyx5REFBSCxvQkFpQkFILGNBQWMsR0FBRyxHQUFILEdBQVMsR0FqQnZCLEVBeUJHQSxjQXpCSCxDQUFmO0FBa0NBLE1BQU1JLFlBQVksR0FBR0gsaUJBQXJCOztBQUVBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7O0FBQUEsV0FDakIsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDR0Msa0RBQVEsQ0FBQ04sY0FBRCxDQURYLDBEQUNHLHNCQUEwQk8sTUFEN0IsRUFDcUMsR0FEckMsRUFFRTtBQUNFLFdB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Q0FBNkIsVUFBQ1EsU0FBRCxFQUFZTixHQUFaLEVBQW9CO0FBQ2hELFFBQUksT0FBT00sU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxhQUFPO0FBQU0sV0FBRyxZQUFLekIsY0FBTCxjQUF1Qm1CLEdBQXZCLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3Q00sU0FBeEMsQ0FBUDtBQUNEOztBQUNELFdBQ0U7QUFDRSxTQUFHLFlBQUt6QixjQUFMLGNBQXVCbUIsR0FBdkIsQ0FETDtBQUVFLGVBQVMsRUFBRUMsd0RBQUUsQ0FBQ0MsaURBQUQsRUFBbUJBLDhDQUFuQixDQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0ksU0FBUyxDQUFDQyxJQUpiLENBREY7QUFRRCxHQVpBLENBREgsQ0FERixDQXpFRixDQURGO0FBNkZELENBMUpEOztHQUFNNUIsUzs7S0FBQUEsUztBQTRKU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgKiBhcyBzZXJtb25zIGZyb20gJy4uL3Nlcm1vbnMnXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENodXJjaCwgc2V0U2VsZWN0ZWRDaHVyY2hdID0gdXNlU3RhdGU8Q2h1cmNoS2V5cz4obnVsbClcbiAgY29uc3QgZmlsbENsYXNzID0gY3NzYFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZy9idWlsZGluZ3Mvd2F0ZXJtYXJrLnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuMDM7XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoXSB7XG4gICAgICBmaWxsOiB2YXIoLS1oaWdobGlnaHQpO1xuICAgICAgb3BhY2l0eTogJHtzZWxlY3RlZENodXJjaCA/IDAuMiA6IDAuOX07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaD0nJHtzZWxlY3RlZENodXJjaH0nXSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gc2V0U2VsZWN0ZWRDaHVyY2hcblxuICBjb25zdCBDaHVyY2hJbmZvID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8aDI+XG4gICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/LnBhc3Rvcn17JyAnfVxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXG4gICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzZweCcsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnbnl0ZnJhbmtsaW4nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5uYW1lfSAtIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/LmNpdHl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDI+XG4gICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdPy5mYXN0RmFjdHM/Lm1hcCgoZmFjdCwgaWR4KSA9PiAoXG4gICAgICAgIDxwIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9Pi0ge2ZhY3R9PC9wPlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y3goZmlsbENsYXNzLCBzdHlsZWQuY29udGFpbmVyQ2xhc3MpfT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0+XG4gICAgICAgIDxoMT5QcmVhY2hpbmcgb24gUmFjZTwvaDE+XG4gICAgICAgIDxzdWI+XG4gICAgICAgICAgV2hhdCBtZXNzYWdlIGRpZCB3aGl0ZSBwYXN0b3JzIG9mIERhbGxhcyBzZW5kIGFmdGVyIGEgd2VlayBvZiBuYXRpb25hbCB0cmFnZWRpZXMgaW4gMjAxNj9cbiAgICAgICAgPC9zdWI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2h1cmNoQXJlYX0+XG4gICAgICAgIDxDaHVyY2hJbmZvIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaGFydEFyZWF9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogLTEsIGdyaWRBcmVhOiAnbWFwJyB9fT5cbiAgICAgICAgICA8aDM+TG9jYXRpb248L2gzPlxuICAgICAgICAgIDxERldNYXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLm1hcENsYXNzfVxuICAgICAgICAgICAgc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPk9ubHkgSmVzdXMgY2FuIGZpeCB0aGlzPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+V2UgbmVlZCB0byBoYXZlIHVuaXR5PC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+QmUgY2FyZWZ1bCBub3QgdG8gYXNrIGZvciB0b28gbXVjaDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPkJsYWNrIExpdmVzIE1hdHRlcjwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPlRoZSBjb3VudHJ5IGhhcyBhIGhpc3Rvcnkgb2Ygc3lzdGVtYXRpYyByYWNpc208L3A+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlJyB9fT5cbiAgICAgICAgICA8aDM+SW5mbHVlbmNlPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UxJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eyd0d2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTMnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2F0dGVuZGVlcyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2U0JyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydwb2RjYXN0UmV2aWV3cyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTInIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J2NodXJjaFR3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdzdWJzdGFuY2UnIH19PlxuICAgICAgICAgIDxoMz5TdWJzdGFuY2U8L2gzPlxuICAgICAgICAgIDxTdWJzdGFuY2VDaGFydCBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfSBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1nL3dhdGVybWFyay10b2RkLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJQYXN0b3IgVG9kZCBXYWduZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQucGFzdG9yQ2xhc3N9XG4gICAgICAgICAgLz4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25DbGFzc30+XG4gICAgICAgICAge3Nlcm1vbnNbc2VsZWN0ZWRDaHVyY2hdPy5tYXAoKHBhcmFncmFwaCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFncmFwaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17YCR7c2VsZWN0ZWRDaHVyY2h9LSR7aWR4fWB9PntwYXJhZ3JhcGh9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVkLnNwYW5DbGFzcywgc3R5bGVkLnByb0JMTSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLnRleHR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})