webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sermons */ \"./components/FinalProject/sermons/index.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    [data-church] {\\n      &[mask] {\\n        opacity: 0.5;\\n        fill: green;\\n      }\\n\\n      &[mask=''] {\\n        opacity: 0.2;\\n      }\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n      /* fill: pink; */\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_metadata__WEBPACK_IMPORTED_MODULE_9__[\"ChurchKeys\"].Covenant),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch);\n\n  var clickHandler = function clickHandler(church) {\n    setSelectedChurch(church);\n  };\n\n  var ChurchInfo = function ChurchInfo() {\n    var _churches$selectedChu;\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].name, \" - \", _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].city)), (_churches$selectedChu = _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].fastFacts) === null || _churches$selectedChu === void 0 ? void 0 : _churches$selectedChu.map(function (fact, idx) {\n      return __jsx(\"p\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 9\n        }\n      }, \"- \", fact);\n    }));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"churchArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(ChurchInfo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, _sermons__WEBPACK_IMPORTED_MODULE_5__[selectedChurch].map(function (paragraph, idx) {\n    if (typeof paragraph === 'string') {\n      return __jsx(\"span\", {\n        key: \"\".concat(selectedChurch, \"-\").concat(idx),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 22\n        }\n      }, paragraph);\n    }\n\n    return __jsx(\"span\", {\n      key: \"\".concat(selectedChurch, \"-\").concat(idx),\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 15\n      }\n    }, paragraph.text);\n  }))));\n};\n\n_s(Watermark, \"YjzVnT3G9EywSGbhCy79qL2rPQQ=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwiQ2h1cmNoS2V5cyIsIkNvdmVuYW50Iiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsImNodXJjaCIsIkNodXJjaEluZm8iLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJmYXN0RmFjdHMiLCJtYXAiLCJmYWN0IiwiaWR4IiwiY3giLCJzdHlsZWQiLCJncmlkQXJlYSIsInpJbmRleCIsInNlcm1vbnMiLCJwYXJhZ3JhcGgiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFhQyxvREFBVSxDQUFDQyxRQUF4QixDQURwQjtBQUFBLE1BQ3pCQyxjQUR5QjtBQUFBLE1BQ1RDLGlCQURTOztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLHlEQUFILG9CQWlCR0gsY0FqQkgsQ0FBZjs7QUEyQkEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CSixxQkFBaUIsQ0FBQ0ksTUFBRCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTs7QUFBQSxXQUNqQixtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dD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QixjQUFELENBQVAsQ0FBd0JrQixHQUF4QixDQUE0QixVQUFDUSxTQUFELEVBQVlOLEdBQVosRUFBb0I7QUFDL0MsUUFBSSxPQUFPTSxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGFBQU87QUFBTSxXQUFHLFlBQUsxQixjQUFMLGNBQXVCb0IsR0FBdkIsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXdDTSxTQUF4QyxDQUFQO0FBQ0Q7O0FBQ0QsV0FDRTtBQUNFLFNBQUcsWUFBSzFCLGNBQUwsY0FBdUJvQixHQUF2QixDQURMO0FBRUUsZUFBUyxFQUFFQyx3REFBRSxDQUFDQyxpREFBRCxFQUFtQkEsOENBQW5CLENBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHSSxTQUFTLENBQUNDLElBSmIsQ0FERjtBQVFELEdBWkEsQ0FESCxDQURGLENBekVGLENBREY7QUE2RkQsQ0FySkQ7O0dBQU0vQixTOztLQUFBQSxTO0FBdUpTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L1NlY3Rpb25zL1dhdGVybWFyay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnXG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnLi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAncHJldHR5LWxpZ2h0cydcbmltcG9ydCAqIGFzIHNlcm1vbnMgZnJvbSAnLi4vc2VybW9ucydcbmltcG9ydCBERldNYXAgZnJvbSAnLi4vTWFwJ1xuaW1wb3J0IEluZmx1ZW5jZUNoYXJ0IGZyb20gJy4uL0luZmx1ZW5jZUNoYXJ0J1xuaW1wb3J0IFN1YnN0YW5jZUNoYXJ0IGZyb20gJy4uL1N1YnN0YW5jZUNoYXJ0J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMgfSBmcm9tICcuLi9tZXRhZGF0YSdcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZDMnXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENodXJjaCwgc2V0U2VsZWN0ZWRDaHVyY2hdID0gdXNlU3RhdGU8Q2h1cmNoS2V5cz4oQ2h1cmNoS2V5cy5Db3ZlbmFudClcbiAgY29uc3QgZmlsbENsYXNzID0gY3NzYFxuICAgIFtkYXRhLWNodXJjaF0ge1xuICAgICAgJlttYXNrXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgZmlsbDogZ3JlZW47XG4gICAgICB9XG5cbiAgICAgICZbbWFzaz0nJ10ge1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICB9XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkYXRhLWNodXJjaD0nJHtzZWxlY3RlZENodXJjaH0nXSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgICAvKiBmaWxsOiBwaW5rOyAqL1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChjaHVyY2gpID0+IHtcbiAgICBzZXRTZWxlY3RlZENodXJjaChjaHVyY2gpXG4gIH1cblxuICBjb25zdCBDaHVyY2hJbmZvID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8aDI+XG4gICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0ucGFzdG9yfXsnICd9XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdueXRmcmFua2xpbicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaHVyY2hlc1tzZWxlY3RlZENodXJjaF0ubmFtZX0gLSB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdLmNpdHl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDI+XG4gICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdLmZhc3RGYWN0cz8ubWFwKChmYWN0LCBpZHgpID0+IChcbiAgICAgICAgPHAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH0+LSB7ZmFjdH08L3A+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChmaWxsQ2xhc3MsIHN0eWxlZC5jb250YWluZXJDbGFzcyl9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgxPlByZWFjaGluZyBvbiBSYWNlPC9oMT5cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICBXaGF0IG1lc3NhZ2UgZGlkIHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHNlbmQgYWZ0ZXIgYSB3ZWVrIG9mIG5hdGlvbmFsIHRyYWdlZGllcyBpbiAyMDE2P1xuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5jaHVyY2hBcmVhfT5cbiAgICAgICAgPENodXJjaEluZm8gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNoYXJ0QXJlYX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAtMSwgZ3JpZEFyZWE6ICdtYXAnIH19PlxuICAgICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XG4gICAgICAgICAgPERGV01hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQubWFwQ2xhc3N9XG4gICAgICAgICAgICBzZWxlY3RlZENodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5XZSBuZWVkIHRvIGhhdmUgdW5pdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+VGhlIGNvdW50cnkgaGFzIGEgaGlzdG9yeSBvZiBzeXN0ZW1hdGljIHJhY2lzbTwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UnIH19PlxuICAgICAgICAgIDxoMz5JbmZsdWVuY2U8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTEnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMycgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZTQnIH19PlxuICAgICAgICAgIDxJbmZsdWVuY2VDaGFydFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNodXJjaD17c2VsZWN0ZWRDaHVyY2h9XG4gICAgICAgICAgICBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMicgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsnY2h1cmNoVHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3N1YnN0YW5jZScgfX0+XG4gICAgICAgICAgPGgzPlN1YnN0YW5jZTwvaDM+XG4gICAgICAgICAgPFN1YnN0YW5jZUNoYXJ0IG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9IHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvd2F0ZXJtYXJrLXRvZGQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlBhc3RvciBUb2RkIFdhZ25lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5wYXN0b3JDbGFzc31cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5zZXJtb25Db250YWluZXJDbGFzc30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uc1tzZWxlY3RlZENodXJjaF0ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhZ3JhcGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2Ake3NlbGVjdGVkQ2h1cmNofS0ke2lkeH1gfT57cGFyYWdyYXBofTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtgJHtzZWxlY3RlZENodXJjaH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlZC5zcGFuQ2xhc3MsIHN0eWxlZC5wcm9CTE0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaC50ZXh0fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})