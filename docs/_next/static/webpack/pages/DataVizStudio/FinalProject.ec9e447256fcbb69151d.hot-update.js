webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _watermarkSermon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watermarkSermon */ \"./components/FinalProject/Sections/watermarkSermon.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Covenant),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var clickHandler = function clickHandler(church) {\n    setSelectedChurch(church);\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_2__[\"containerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"How white pastors of Dallas responded to national tragedies in 2016\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'church'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Todd Wagner\", ' ', __jsx(\"span\", {\n    style: {\n      fontSize: '0.75rem',\n      textTransform: 'uppercase',\n      fontWeight: 'lighter',\n      color: 'gray',\n      marginLeft: '6px',\n      fontFamily: 'nytfranklin'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Watermark Church\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_2__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_2__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_2__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_2__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, _watermarkSermon__WEBPACK_IMPORTED_MODULE_4__[\"sermon\"].map(function (paragraph, idx) {\n    var x = Math.random();\n    var _ref = [Math.floor(Math.random() * paragraph.length / 2), Math.floor((1 + Math.random()) * paragraph.length / 2)],\n        start = _ref[0],\n        end = _ref[1];\n    var className = _styled__WEBPACK_IMPORTED_MODULE_2__[\"proNothing\"];\n    if (x < 0.1) className = _styled__WEBPACK_IMPORTED_MODULE_2__[\"proPolice\"];else if (x < 0.6) className = _styled__WEBPACK_IMPORTED_MODULE_2__[\"proBLM\"];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"span\", {\n      \"data-text\": \"Shay is so cool\",\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_2__[\"spanClass\"], className),\n      key: paragraph.length,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }\n    }, paragraph));\n  }))));\n};\n\n_s(Watermark, \"YjzVnT3G9EywSGbhCy79qL2rPQQ=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwiQ2h1cmNoS2V5cyIsIkNvdmVuYW50Iiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImNsaWNrSGFuZGxlciIsImNodXJjaCIsInN0eWxlZCIsImdyaWRBcmVhIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZvbnRGYW1pbHkiLCJ6SW5kZXgiLCJzZXJtb24iLCJtYXAiLCJwYXJhZ3JhcGgiLCJpZHgiLCJ4IiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJjbGFzc05hbWUiLCJjeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQWFDLG9EQUFVLENBQUNDLFFBQXhCLENBRHBCO0FBQUEsTUFDekJDLGNBRHlCO0FBQUEsTUFDVEMsaUJBRFM7O0FBR2hDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUMvQkYscUJBQWlCLENBQUNFLE1BQUQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw2Q0FBRDtBQUFNLGFBQVMsRUFBRUMsc0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QixTQUFuQixDQUZmO0FBR0UsU0FBRyxFQUFFVCxTQUFTLENBQUNNLE1BSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR04sU0FMSCxDQURGLENBREY7QUFXRCxHQXJCQSxDQURILENBREYsQ0F2RkYsQ0FERjtBQW9IRCxDQTNIRDs7R0FBTW5CLFM7O0tBQUFBLFM7QUE2SFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0IHsgc2VybW9uIH0gZnJvbSAnLi93YXRlcm1hcmtTZXJtb24nXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCBTdWJzdGFuY2VDaGFydCBmcm9tICcuLi9TdWJzdGFuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMgfSBmcm9tICcuLi9tZXRhZGF0YSdcblxuY29uc3QgV2F0ZXJtYXJrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2h1cmNoLCBzZXRTZWxlY3RlZENodXJjaF0gPSB1c2VTdGF0ZTxDaHVyY2hLZXlzPihDaHVyY2hLZXlzLkNvdmVuYW50KVxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChjaHVyY2gpID0+IHtcbiAgICBzZXRTZWxlY3RlZENodXJjaChjaHVyY2gpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVkLmNvbnRhaW5lckNsYXNzfT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0+XG4gICAgICAgIDxoMT5QcmVhY2hpbmcgb24gUmFjZTwvaDE+XG4gICAgICAgIDxzdWI+SG93IHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHJlc3BvbmRlZCB0byBuYXRpb25hbCB0cmFnZWRpZXMgaW4gMjAxNjwvc3ViPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnY2h1cmNoJyB9fT5cbiAgICAgICAgPGgyIHN0eWxlPXt7fX0+XG4gICAgICAgICAgVG9kZCBXYWduZXJ7JyAnfVxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxuICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ255dGZyYW5rbGluJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2F0ZXJtYXJrIENodXJjaFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW1cbiAgICAgICAgICBmdWdhLiBFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4gTmFtIGxpYmVybyB0ZW1wb3JlLCBjdW1cbiAgICAgICAgICBzb2x1dGEgbm9iaXMgZXN0IGVsaWdlbmRpIG9wdGlvIGN1bXF1ZSBuaWhpbCBpbXBlZGl0IHF1byBtaW51cyBpZCBxdW9kIG1heGltZSBwbGFjZWF0XG4gICAgICAgICAgZmFjZXJlIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LCBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4gVGVtcG9yaWJ1cyBhdXRlbVxuICAgICAgICAgIHF1aWJ1c2RhbSBldCBhdXQgb2ZmaWNpaXMgZGViaXRpcyBhdXQgcmVydW0gbmVjZXNzaXRhdGlidXMgc2FlcGUgZXZlbmlldFxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwIGNsYXNzTmFtZT17c3R5bGVkLm1hcENsYXNzfSBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5XZSBuZWVkIHRvIGhhdmUgdW5pdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+VGhlIGNvdW50cnkgaGFzIGEgaGlzdG9yeSBvZiBzeXN0ZW1hdGljIHJhY2lzbTwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UnIH19PlxuICAgICAgICAgIDxoMz5JbmZsdWVuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTEnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMycgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMicgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnY2h1cmNoVHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3N1YnN0YW5jZScgfX0+XG4gICAgICAgICAgPGgzPlN1YnN0YW5jZTwvaDM+XG4gICAgICAgICAgPFN1YnN0YW5jZUNoYXJ0IG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9IHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvd2F0ZXJtYXJrLXRvZGQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlBhc3RvciBUb2RkIFdhZ25lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5wYXN0b3JDbGFzc31cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25Db250YWluZXJDbGFzc30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uLm1hcCgocGFyYWdyYXBoLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSBbXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBwYXJhZ3JhcGgubGVuZ3RoKSAvIDIpLFxuICAgICAgICAgICAgICBNYXRoLmZsb29yKCgoMSArIE1hdGgucmFuZG9tKCkpICogcGFyYWdyYXBoLmxlbmd0aCkgLyAyKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBzdHlsZWQucHJvTm90aGluZ1xuICAgICAgICAgICAgaWYgKHggPCAwLjEpIGNsYXNzTmFtZSA9IHN0eWxlZC5wcm9Qb2xpY2VcbiAgICAgICAgICAgIGVsc2UgaWYgKHggPCAwLjYpIGNsYXNzTmFtZSA9IHN0eWxlZC5wcm9CTE1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiU2hheSBpcyBzbyBjb29sXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVkLnNwYW5DbGFzcywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICAgIGtleT17cGFyYWdyYXBoLmxlbmd0aH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})