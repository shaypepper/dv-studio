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

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watermarkSermon */ \"./components/FinalProject/Sections/watermarkSermon.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _SubstanceChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SubstanceChart */ \"./components/FinalProject/SubstanceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    [data-church] {\\n      /* fill: green; */\\n      opacity: 0.2;\\n      transition: opacity 1000ms ease;\\n\\n      &:hover {\\n        opacity: 0.1;\\n      }\\n    }\\n\\n    [data-church='\", \"'] {\\n      opacity: 0.9;\\n\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n      /* fill: pink; */\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_metadata__WEBPACK_IMPORTED_MODULE_9__[\"ChurchKeys\"].Covenant),\n      selectedChurch = _useState[0],\n      setSelectedChurch = _useState[1];\n\n  var fillClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject(), selectedChurch);\n\n  var clickHandler = function clickHandler(church) {\n    setSelectedChurch(church);\n  };\n\n  var ChurchInfo = function ChurchInfo() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n      style: {},\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].pastor, ' ', __jsx(\"span\", {\n      style: {\n        fontSize: '0.75rem',\n        textTransform: 'uppercase',\n        fontWeight: 'lighter',\n        color: 'gray',\n        marginLeft: '6px',\n        fontFamily: 'nytfranklin'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].name, \" - \", _metadata__WEBPACK_IMPORTED_MODULE_9__[\"churches\"][selectedChurch].city)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }\n    }, \"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\"));\n  };\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(fillClass, _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Preaching on Race\"), __jsx(\"sub\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"What message did white pastors of Dallas send after a week of national tragedies in 2016?\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'church'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"chartArea\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      zIndex: -1,\n      gridArea: 'map'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"mapClass\"],\n    selectedChurch: selectedChurch,\n    onElementClick: clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, \"Influence\")), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence1'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence4'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'influence2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onElementClick: clickHandler,\n    church: selectedChurch,\n    calculationKey: 'churchTwitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      gridArea: 'substance'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, \"Substance\"), __jsx(_SubstanceChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onElementClick: clickHandler,\n    selectedChurch: selectedChurch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__[\"sermon\"].map(function (paragraph, idx) {\n    var x = Math.random();\n    var _ref = [Math.floor(Math.random() * paragraph.length / 2), Math.floor((1 + Math.random()) * paragraph.length / 2)],\n        start = _ref[0],\n        end = _ref[1];\n    var className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proNothing\"];\n    if (x < 0.1) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"];else if (x < 0.6) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n      \"data-text\": \"Shay is so cool\",\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(_styled__WEBPACK_IMPORTED_MODULE_3__[\"spanClass\"], className),\n      key: paragraph.length,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 17\n      }\n    }, paragraph));\n  }))));\n};\n\n_s(Watermark, \"YjzVnT3G9EywSGbhCy79qL2rPQQ=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbIldhdGVybWFyayIsInVzZVN0YXRlIiwiQ2h1cmNoS2V5cyIsIkNvdmVuYW50Iiwic2VsZWN0ZWRDaHVyY2giLCJzZXRTZWxlY3RlZENodXJjaCIsImZpbGxDbGFzcyIsImNzcyIsImNsaWNrSGFuZGxlciIsImNodXJjaCIsIkNodXJjaEluZm8iLCJjaHVyY2hlcyIsInBhc3RvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwibmFtZSIsImNpdHkiLCJjeCIsInN0eWxlZCIsImdyaWRBcmVhIiwiekluZGV4Iiwic2VybW9uIiwibWFwIiwicGFyYWdyYXBoIiwiaWR4IiwieCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFhQyxvREFBVSxDQUFDQyxRQUF4QixDQURwQjtBQUFBLE1BQ3pCQyxjQUR5QjtBQUFBLE1BQ1RDLGlCQURTOztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLHlEQUFILG9CQVdHSCxjQVhILENBQWY7O0FBcUJBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUMvQkoscUJBQWlCLENBQUNJLE1BQUQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDakIsbUVBQ0U7QUFBSSxXQUFLLEVB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QXFDLENBQWhELENBRG1CLEVBRW5CSCxJQUFJLENBQUNFLEtBQUwsQ0FBWSxDQUFDLElBQUlGLElBQUksQ0FBQ0MsTUFBTCxFQUFMLElBQXNCSixTQUFTLENBQUNNLE1BQWpDLEdBQTJDLENBQXRELENBRm1CLENBRlM7QUFBQSxRQUV2QkMsS0FGdUI7QUFBQSxRQUVoQkMsR0FGZ0I7QUFNOUIsUUFBSUMsU0FBUyxHQUFHZCxrREFBaEI7QUFDQSxRQUFJTyxDQUFDLEdBQUcsR0FBUixFQUFhTyxTQUFTLEdBQUdkLGlEQUFaLENBQWIsS0FDSyxJQUFJTyxDQUFDLEdBQUcsR0FBUixFQUFhTyxTQUFTLEdBQUdkLDhDQUFaO0FBRWxCLFdBQ0UsbUVBQ0U7QUFDRSxtQkFBVSxpQkFEWjtBQUVFLGVBQVMsRUFBRUQsd0RBQUUsQ0FBQ0MsaURBQUQsRUFBbUJjLFNBQW5CLENBRmY7QUFHRSxTQUFHLEVBQUVULFNBQVMsQ0FBQ00sTUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHTixTQUxILENBREYsQ0FERjtBQVdELEdBckJBLENBREgsQ0FERixDQXZFRixDQURGO0FBb0dELENBM0pEOztHQUFNM0IsUzs7S0FBQUEsUztBQTZKU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJ1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5pbXBvcnQgeyBzZXJtb24gfSBmcm9tICcuL3dhdGVybWFya1Nlcm1vbidcbmltcG9ydCBERldNYXAgZnJvbSAnLi4vTWFwJ1xuaW1wb3J0IEluZmx1ZW5jZUNoYXJ0IGZyb20gJy4uL0luZmx1ZW5jZUNoYXJ0J1xuaW1wb3J0IFN1YnN0YW5jZUNoYXJ0IGZyb20gJy4uL1N1YnN0YW5jZUNoYXJ0J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMgfSBmcm9tICcuLi9tZXRhZGF0YSdcblxuY29uc3QgV2F0ZXJtYXJrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2h1cmNoLCBzZXRTZWxlY3RlZENodXJjaF0gPSB1c2VTdGF0ZTxDaHVyY2hLZXlzPihDaHVyY2hLZXlzLkNvdmVuYW50KVxuICBjb25zdCBmaWxsQ2xhc3MgPSBjc3NgXG4gICAgW2RhdGEtY2h1cmNoXSB7XG4gICAgICAvKiBmaWxsOiBncmVlbjsgKi9cbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwMG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2RhdGEtY2h1cmNoPScke3NlbGVjdGVkQ2h1cmNofSddIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgICAgIC8qIGZpbGw6IHBpbms7ICovXG4gICAgfVxuICBgXG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGNodXJjaCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2h1cmNoKGNodXJjaClcbiAgfVxuXG4gIGNvbnN0IENodXJjaEluZm8gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMiBzdHlsZT17e319PlxuICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdLnBhc3Rvcn17JyAnfVxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXG4gICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzZweCcsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnbnl0ZnJhbmtsaW4nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2h1cmNoZXNbc2VsZWN0ZWRDaHVyY2hdLm5hbWV9IC0ge2NodXJjaGVzW3NlbGVjdGVkQ2h1cmNoXS5jaXR5fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgICAgU2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS5cbiAgICAgICAgRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uIE5hbSBsaWJlcm8gdGVtcG9yZSwgY3VtIHNvbHV0YVxuICAgICAgICBub2JpcyBlc3QgZWxpZ2VuZGkgb3B0aW8gY3VtcXVlIG5paGlsIGltcGVkaXQgcXVvIG1pbnVzIGlkIHF1b2QgbWF4aW1lIHBsYWNlYXQgZmFjZXJlXG4gICAgICAgIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LCBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4gVGVtcG9yaWJ1cyBhdXRlbSBxdWlidXNkYW1cbiAgICAgICAgZXQgYXV0IG9mZmljaWlzIGRlYml0aXMgYXV0IHJlcnVtIG5lY2Vzc2l0YXRpYnVzIHNhZXBlIGV2ZW5pZXRcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChmaWxsQ2xhc3MsIHN0eWxlZC5jb250YWluZXJDbGFzcyl9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgxPlByZWFjaGluZyBvbiBSYWNlPC9oMT5cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICBXaGF0IG1lc3NhZ2UgZGlkIHdoaXRlIHBhc3RvcnMgb2YgRGFsbGFzIHNlbmQgYWZ0ZXIgYSB3ZWVrIG9mIG5hdGlvbmFsIHRyYWdlZGllcyBpbiAyMDE2P1xuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2NodXJjaCcgfX0+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuY2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IC0xLCBncmlkQXJlYTogJ21hcCcgfX0+XG4gICAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cbiAgICAgICAgICA8REZXTWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5tYXBDbGFzc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5Pbmx5IEplc3VzIGNhbiBmaXggdGhpczwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPldlIG5lZWQgdG8gaGF2ZSB1bml0eTwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPkJlIGNhcmVmdWwgbm90IHRvIGFzayBmb3IgdG9vIG11Y2g8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5CbGFjayBMaXZlcyBNYXR0ZXI8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5UaGUgY291bnRyeSBoYXMgYSBoaXN0b3J5IG9mIHN5c3RlbWF0aWMgcmFjaXNtPC9wPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ2luZmx1ZW5jZScgfX0+XG4gICAgICAgICAgPGgzPkluZmx1ZW5jZTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlMScgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UzJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydhdHRlbmRlZXMnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnaW5mbHVlbmNlNCcgfX0+XG4gICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0XG4gICAgICAgICAgICBvbkVsZW1lbnRDbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2h1cmNoPXtzZWxlY3RlZENodXJjaH1cbiAgICAgICAgICAgIGNhbGN1bGF0aW9uS2V5PXsncG9kY2FzdFJldmlld3MnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbmZsdWVuY2UyJyB9fT5cbiAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnRcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjaHVyY2g9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgICAgY2FsY3VsYXRpb25LZXk9eydjaHVyY2hUd2l0dGVyRm9sbG93ZXJzJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAnc3Vic3RhbmNlJyB9fT5cbiAgICAgICAgICA8aDM+U3Vic3RhbmNlPC9oMz5cbiAgICAgICAgICA8U3Vic3RhbmNlQ2hhcnQgb25FbGVtZW50Q2xpY2s9e2NsaWNrSGFuZGxlcn0gc2VsZWN0ZWRDaHVyY2g9e3NlbGVjdGVkQ2h1cmNofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGFzdG9yIFRvZGQgV2FnbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLnBhc3RvckNsYXNzfVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLnNlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZWQuc2VybW9uQ2xhc3N9PlxuICAgICAgICAgIHtzZXJtb24ubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IFtcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHBhcmFncmFwaC5sZW5ndGgpIC8gMiksXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoKCgxICsgTWF0aC5yYW5kb20oKSkgKiBwYXJhZ3JhcGgubGVuZ3RoKSAvIDIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHN0eWxlZC5wcm9Ob3RoaW5nXG4gICAgICAgICAgICBpZiAoeCA8IDAuMSkgY2xhc3NOYW1lID0gc3R5bGVkLnByb1BvbGljZVxuICAgICAgICAgICAgZWxzZSBpZiAoeCA8IDAuNikgY2xhc3NOYW1lID0gc3R5bGVkLnByb0JMTVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJTaGF5IGlzIHNvIGNvb2xcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZWQuc3BhbkNsYXNzLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGgubGVuZ3RofVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGVybWFya1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");
    /***/
  }
});