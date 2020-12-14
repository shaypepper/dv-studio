webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watermarkSermon */ \"./components/FinalProject/Sections/watermarkSermon.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    [data-church] {\\n      /* fill: green; */\\n      opacity: 0.2;\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n      /* fill: pink; */\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_metadata__WEBPACK_IMPORTED_MODULE_9__[\"ChurchKeys\"].Covenant),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch);\n\n  var clickHandler = function clickHandler(church) {\n    setSelectedChurch(church);\n  };\n\n  var PastorName = function PastorName() {\n    return __jsx(\"h2\", {\n      style: {},\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].name, \" - \", _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].city));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'church'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(PastorName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__[\"sermon\"].map(function (paragraph, idx) {\n    var x = Math.random();\n    var _ref = [Math.floor(Math.random() * paragraph.length / 2), Math.floor((1 + Math.random()) * paragraph.length / 2)],\n        start = _ref[0],\n        end = _ref[1];\n    var className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proNothing\"];\n    if (x < 0.1) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"];else if (x < 0.6) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n      \"data-text\": \"Shay is so cool\",\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], className),\n      key: paragraph.length,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 17\n      }\n    }, paragraph));\n  }))));\n};\n\n_s(Watermark, \"YjzVnT3G9EywSGbhCy79qL2rPQQ=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwiQ2h1cmNoS2V5cyIsIkNvdmVuYW50Iiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsImNodXJjaCIsIlBhc3Rvck5hbWUiLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJjeCIsInN0eWxlZCIsImdyaWRBcmVhIiwiekluZGV4Iiwic2VybW9uIiwibWFwIiwicGFyYWdyYXBoIiwiaWR4IiwieCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFhQyxvREFBVSxDQUFDQyxRQUF4QixDQURwQjtBQUFBLE1BQ3pCQyxjQUR5QjtBQUFBLE1BQ1RDLGlCQURTOztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLHlEQUFILG9CQVdHSCxjQVhILENBQWY7O0FBcUJBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUMvQkoscUJBQWlCLENBQUNJLE1BQUQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDakI7QUFBSSxXQUFLLEVBQUUsRUFB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RixJQUFJLENBQUNDLE1BQUwsS0FBZ0JKLFNBQVMsQ0FBQ00sTUFBM0IsR0FBcUMsQ0FBaEQsQ0FEbUIsRUFFbkJILElBQUksQ0FBQ0UsS0FBTCxDQUFZLENBQUMsSUFBSUYsSUFBSSxDQUFDQyxNQUFMLEVBQUwsSUFBc0JKLFNBQVMsQ0FBQ00sTUFBakMsR0FBMkMsQ0FBdEQsQ0FGbUIsQ0FGUztBQUFBLFFBRXZCQyxLQUZ1QjtBQUFBLFFBRWhCQyxHQUZnQjtBQU05QixRQUFJQyxTQUFTLEdBQUdkLGtEQUFoQjtBQUNBLFFBQUlPLENBQUMsR0FBRyxHQUFSLEVBQWFPLFNBQVMsR0FBR2QsaURBQVosQ0FBYixLQUNLLElBQUlPLENBQUMsR0FBRyxHQUFSLEVBQWFPLFNBQVMsR0FBR2QsOENBQVo7QUFFbEIsV0FDRSxtRUFDRTtBQUNFLG1CQUFVLGlCQURaO0FBRUUsZUFBUyxFQUFFRCx3REFBRSxDQUFDQyxpREFBRCxFQUFtQmMsU0FBbkIsQ0FGZjtBQUdFLFNBQUcsRUFBRVQsU0FBUyxDQUFDTSxNQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dOLFNBTEgsQ0FERixDQURGO0FBV0QsR0FyQkEsQ0FESCxDQURGLENBL0VGLENBREY7QUE0R0QsQ0F6SkQ7O0dBQU0zQixTOztLQUFBQSxTO0FBMkpTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L1NlY3Rpb25zL1dhdGVybWFyay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnXG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnLi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAncHJldHR5LWxpZ2h0cydcbmltcG9ydCB7IHNlcm1vbiB9IGZyb20gJy4vd2F0ZXJtYXJrU2VybW9uJ1xuaW1wb3J0IERGV01hcCBmcm9tICcuLi9NYXAnXG5pbXBvcnQgSW5mbHVlbmNlQ2hhcnQgZnJvbSAnLi4vSW5mbHVlbmNlQ2hhcnQnXG5pbXBvcnQgU3Vic3RhbmNlQ2hhcnQgZnJvbSAnLi4vU3Vic3RhbmNlQ2hhcnQnXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4uL21ldGFkYXRhJ1xuXG5jb25zdCBXYXRlcm1hcms6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDaHVyY2gsIHNldFNlbGVjdGVkQ2h1cmNoXSA9IHVzZVN0YXRlPENodXJjaEtleXM+KENodXJjaEtleXMuQ292ZW5hbnQpXG4gIGNvbnN0IGZpbGxDbGFzcyA9IGNzc2BcbiAgICBbZGF0YS1jaHVyY2hdIHtcbiAgICAgIC8qIGZpbGw6IGdyZWVuOyAqL1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDAwbXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGF0YS1jaHVyY2g9JyR7c2VsZWN0ZWRDaHVyY2h9J10ge1xuICAgICAgb3BhY2l0eTogMC45O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgICAgLyogZmlsbDogcGluazsgKi9cbiAgICB9XG4gIGBcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoY2h1cmNoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDaHVyY2goY2h1cmNoKVxuICB9XG5cbiAgY29uc3QgUGFzdG9yTmFtZSA9ICgpID0+IChcbiAgICA8aDIgc3R5bGU9e3t9fT5cbiAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0ucGFzdG9yfXsnICd9XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxuICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzZweCcsXG4gICAgICAgICAgZm9udEZhbWlseTogJ255dGZyYW5rbGluJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXS5uYW1lfSAtIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0uY2l0eX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2gyPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2N4KGZpbGxDbGFzcywgc3R5bGVkLmNvbnRhaW5lckNsYXNzKX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19PlxuICAgICAgICA8aDE+UHJlYWNoaW5nIG9uIFJhY2U8L2gxPlxuICAgICAgICA8c3ViPlxuICAgICAgICAgIFdoYXQgbWVzc2FnZSBkaWQgd2hpdGUgcGFzdG9ycyBvZiBEYWxsYXMgc2VuZCBhZnRlciBhIHdlZWsgb2YgbmF0aW9uYWwgdHJhZ2VkaWVzIGluIDIwMTY/XG4gICAgICAgIDwvc3ViPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnY2h1cmNoJyB9fT5cbiAgICAgICAgPFBhc3Rvck5hbWUgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW1cbiAgICAgICAgICBmdWdhLiBFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4gTmFtIGxpYmVybyB0ZW1wb3JlLCBjdW1cbiAgICAgICAgICBzb2x1dGEgbm9iaXMgZXN0IGVsaWdlbmRpIG9wdGlvIGN1bXF1ZSBuaWhpbCBpbXBlZGl0IHF1byBtaW51cyBpZCBxdW9kIG1heGltZSBwbGFjZWF0XG4gICAgICAgICAgZmFjZXJlIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LCBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4gVGVtcG9yaWJ1cyBhdXRlbVxuICAgICAgICAgIHF1aWJ1c2RhbSBldCBhdXQgb2ZmaWNpaXMgZGViaXRpcyBhdXQgcmVydW0gbmVjZXNzaXRhdGlidXMgc2FlcGUgZXZlbmlldFxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5tYXBDbGFzc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5Pbmx5IEplc3VzIGNhbiBmaXggdGhpczwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPldlIG5lZWQgdG8gaGF2ZSB1bml0eTwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPkJlIGNhcmVmdWwgbm90IHRvIGFzayBmb3IgdG9vIG11Y2g8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5CbGFjayBMaXZlcyBNYXR0ZXI8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5UaGUgY291bnRyeSBoYXMgYSBoaXN0b3J5IG9mIHN5c3RlbWF0aWMgcmFjaXNtPC9wPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZScgfX0+XG4gICAgICAgICAgPGgzPkluZmx1ZW5jZTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMScgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UzJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydhdHRlbmRlZXMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlNCcgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsncG9kY2FzdFJldmlld3MnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UyJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydjaHVyY2hUd2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnc3Vic3RhbmNlJyB9fT5cbiAgICAgICAgICA8aDM+U3Vic3RhbmNlPC9oMz5cbiAgICAgICAgICA8U3Vic3RhbmNlQ2hhcnQgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn0gc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGFzdG9yIFRvZGQgV2FnbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnBhc3RvckNsYXNzfVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ2xhc3N9PlxuICAgICAgICAgIHtzZXJtb24ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IFtcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHBhcmFncmFwaC5sZW5ndGgpIC8gMiksXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoKCgxICsgTWF0aC5yYW5kb20oKSkgKiBwYXJhZ3JhcGgubGVuZ3RoKSAvIDIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHN0eWxlZC5wcm9Ob3RoaW5nXG4gICAgICAgICAgICBpZiAoeCA8IDAuMSkgY2xhc3NOYW1lID0gc3R5bGVkLnByb1BvbGljZVxuICAgICAgICAgICAgZWxzZSBpZiAoeCA8IDAuNikgY2xhc3NOYW1lID0gc3R5bGVkLnByb0JMTVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJTaGF5IGlzIHNvIGNvb2xcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZWQuc3BhbkNsYXNzLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGgubGVuZ3RofVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})