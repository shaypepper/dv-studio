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

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    &::before {\\n      content: '';\\n      background-image: url('/img/buildings/watermark.png');\\n      background-size: cover;\\n      background-position: bottom;\\n      position: fixed;\\n      z-index: -1;\\n      top: 0px;\\n      right: 0px;\\n      bottom: -30px;\\n      left: 0px;\\n      opacity: 0.03;\\n    }\\n\\n    [data-church] {\\n      fill: var(--highlight);\\n      opacity: \", \";\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n\\n      &[data-sentiment='problematic'] {\\n        fill: var(--problematic);\\n      }\\n\\n      &[data-sentiment='productive'] {\\n        fill: var(--productive);\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _sermons$selectedChur;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch ? 0.2 : 0.9, selectedChurch);\n  var clickHandler = setSelectedChurch;\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu, _churches$selectedChu2, _churches$selectedChu3, _churches$selectedChu4, _churches$selectedChu5;\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }\n    }, (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }\n    }, (_churches$selectedChu2 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu2 === void 0 ? void 0 : _churches$selectedChu2.name, \" - \", (_churches$selectedChu3 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu3 === void 0 ? void 0 : _churches$selectedChu3.city)), (_churches$selectedChu4 = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch]) === null || _churches$selectedChu4 === void 0 ? void 0 : (_churches$selectedChu5 = _churches$selectedChu4.fastFacts) === null || _churches$selectedChu5 === void 0 ? void 0 : _churches$selectedChu5.map(function (fact, idx) {\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 9\n        }\n      }, \"- \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  }, (_sermons$selectedChur = _sermons__WEBPACK_IMPORTED_MODULE_5__[selectedChurch]) === null || _sermons$selectedChur === void 0 ? void 0 : _sermons$selectedChur.map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 22\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], Math.random() > 0.3 ? _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"] : _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"]),\n      style: {\n        animation: \"\".concat(50 * idx, \"ms easefadein\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"g6j+33F62xPsfyLvGxVCYu6TnnY=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsIkNodXJjaEluZm8iLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJmYXN0RmFjdHMiLCJtYXAiLCJmYWN0IiwiaWR4IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsInNlcm1vbnMiLCJwYXJhZ3JhcGgiLCJNYXRoIiwicmFuZG9tIiwiYW5pbWF0aW9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBYSxJQUFiLENBRHBCO0FBQUEsTUFDekJDLGNBRHlCO0FBQUEsTUFDVEMsaUJBRFM7O0FBRWhDLE1BQU1DLFNBQVMsR0FBR0MseURBQUgsb0JBaUJBSCxjQUFjLEdBQUcsR0FBSCxHQUFTLEdBakJ2QixFQWlDR0EsY0FqQ0gsQ0FBZjtBQTBDQSxNQUFNSSxZQUFZLEdBQUdILGlCQUFyQjs7QUFFQSxNQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBOztBQUFBLFdBQ2pCLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ0dDLGtEQUFRLENBQUNOLGNBQUQsQ0FEWCwwREFDRyxzQkFBMEJPLE1B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RCxDQURWLDBEQUNHLHNCQUF5QmlCLEdBQXpCLENBQTZCLFVBQUNRLFNBQUQsRUFBWU4sR0FBWixFQUFvQjtBQUNoRCxRQUFJLE9BQU9NLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDakMsYUFBTztBQUFNLFdBQUcsWUFBS3pCLGNBQUwsY0FBdUJtQixHQUF2QixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0NNLFNBQXhDLENBQVA7QUFDRDs7QUFDRCxXQUNFO0FBQ0UsU0FBRyxZQUFLekIsY0FBTCxjQUF1Qm1CLEdBQXZCLENBREw7QUFFRSxlQUFTLEVBQUVDLHdEQUFFLENBQ1hDLGlEQURXLEVBRVhLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQk4sOENBQXRCLEdBQXNDQSxpREFGM0IsQ0FGZjtBQU1FLFdBQUssRUFBRTtBQUNMTyxpQkFBUyxZQUFLLEtBQUtULEdBQVY7QUFESixPQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVR00sU0FBUyxDQUFDSSxJQVZiLENBREY7QUFjRCxHQWxCQSxDQURILENBREYsQ0F4RUYsQ0FERjtBQWtHRCxDQXZLRDs7R0FBTS9CLFM7O0tBQUFBLFM7QUF5S1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0ICogYXMgc2VybW9ucyBmcm9tICcuLi9zZXJtb25zJ1xuaW1wb3J0IERGV01hcCBmcm9tICcuLi9NYXAnXG5pbXBvcnQgSW5mbHVlbmNlQ2hhcnQgZnJvbSAnLi4vSW5mbHVlbmNlQ2hhcnQnXG5pbXBvcnQgU3Vic3RhbmNlQ2hhcnQgZnJvbSAnLi4vU3Vic3RhbmNlQ2hhcnQnXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4uL21ldGFkYXRhJ1xuXG5jb25zdCBXYXRlcm1hcms6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDaHVyY2gsIHNldFNlbGVjdGVkQ2h1cmNoXSA9IHVzZVN0YXRlPENodXJjaEtleXM+KG51bGwpXG4gIGNvbnN0IGZpbGxDbGFzcyA9IGNzc2BcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWcvYnVpbGRpbmdzL3dhdGVybWFyay5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBvcGFjaXR5OiAwLjAzO1xuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaF0ge1xuICAgICAgZmlsbDogdmFyKC0taGlnaGxpZ2h0KTtcbiAgICAgIG9wYWNpdHk6ICR7c2VsZWN0ZWRDaHVyY2ggPyAwLjIgOiAwLjl9O1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDAwbXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvYmxlbWF0aWMnXSB7XG4gICAgICAgIGZpbGw6IHZhcigtLXByb2JsZW1hdGljKTtcbiAgICAgIH1cblxuICAgICAgJltkYXRhLXNlbnRpbWVudD0ncHJvZHVjdGl2ZSddIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcHJvZHVjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoPScke3NlbGVjdGVkQ2h1cmNofSddIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSBzZXRTZWxlY3RlZENodXJjaFxuXG4gIGNvbnN0IENodXJjaEluZm8gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMj5cbiAgICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8ucGFzdG9yfXsnICd9XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdueXRmcmFua2xpbicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/Lm5hbWV9IC0ge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXT8uY2l0eX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMj5cbiAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0/LmZhc3RGYWN0cz8ubWFwKChmYWN0LCBpZHgpID0+IChcbiAgICAgICAgPHAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH0+LSB7ZmFjdH08L3A+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChmaWxsQ2xhc3MsIHN0eWxlZC5jb250YWluZXJDbGFzcyl9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgxPlByZWFjaGluZyBvbiBSYWNlPC9oMT5cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICBXaGF0IG1lc3NhZ2UgZGlkIHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHNlbmQgYWZ0ZXIgYSB3ZWVrIG9mIG5hdGlvbmFsIHRyYWdlZGllcyBpbiAyMDE2P1xuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaHVyY2hBcmVhfT5cbiAgICAgICAgPENodXJjaEluZm8gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNoYXJ0QXJlYX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAtMSwgZ3JpZEFyZWE6ICdtYXAnIH19PlxuICAgICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XG4gICAgICAgICAgPERGV01hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQubWFwQ2xhc3N9XG4gICAgICAgICAgICBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5XZSBuZWVkIHRvIGhhdmUgdW5pdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+VGhlIGNvdW50cnkgaGFzIGEgaGlzdG9yeSBvZiBzeXN0ZW1hdGljIHJhY2lzbTwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UnIH19PlxuICAgICAgICAgIDxoMz5JbmZsdWVuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTEnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMycgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMicgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnY2h1cmNoVHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdzdWJzdGFuY2UnIH19PlxuICAgICAgICA8aDM+U3Vic3RhbmNlPC9oMz5cbiAgICAgICAgPFN1YnN0YW5jZUNoYXJ0IG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9IHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGFzdG9yIFRvZGQgV2FnbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnBhc3RvckNsYXNzfVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ2xhc3N9PlxuICAgICAgICAgIHtzZXJtb25zW3NlbGVjdGVkQ2h1cmNoXT8ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhZ3JhcGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfT57cGFyYWdyYXBofTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVkLnNwYW5DbGFzcyxcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPiAwLjMgPyBzdHlsZWQucHJvQkxNIDogc3R5bGVkLnByb1BvbGljZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYCR7NTAgKiBpZHh9bXMgZWFzZWZhZGVpbmAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGgudGV4dH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJtYXJrXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");
    /***/
  }
});