webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/Sections/Watermark.tsx":
/*!********************************************************!*\
  !*** ./components/FinalProject/Sections/Watermark.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watermarkSermon */ \"./components/FinalProject/Sections/watermarkSermon.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: charts;\\n\\n  p {\\n    font-size: 1rem;\\n    font-family: 'nytcheltenham', serif;\\n  }\\n\\n  > div > p {\\n    padding: 10px;\\n    margin: 10px 10px 10px 0px;\\n\\n    color: white;\\n    width: fit-content;\\n\\n    &[data-connotation='negative'] {\\n      background-color: var(--accent1);\\n      &:hover {\\n        background-color: var(--accent2);\\n      }\\n    }\\n\\n    &[data-connotation='positive'] {\\n      background-color: var(--primary);\\n      &:hover {\\n        background-color: var(--secondary);\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  /* left: -10vw; */\\n  width: 75%;\\n  max-width: 230px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 50%;\\n  right: 0;\\n  width: 60%;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar buildingClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar spanClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\nvar mapClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject3());\nvar pastorClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject4());\nvar chartArea = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject5());\n\nvar Watermark = function Watermark() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([null, null]),\n      tooltipCoordinates = _useState[0],\n      setTooltipCoordinates = _useState[1];\n\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"Watermark Church\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, \"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\")), __jsx(\"div\", {\n    className: chartArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '100%',\n      display: 'flex',\n      zIndex: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"Twitter Followers:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }), \" 19,832\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Church Attendees:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }), \" 22,832\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"Podcast Reviews:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  }), \" 22\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, \"Only Jesus can fix this\"), __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, \"We need to have unity\"), __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, \"Be careful not to ask for too much\"), __jsx(\"p\", {\n    \"data-connotation\": \"positive\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, \"Black Lives Matter\"), __jsx(\"p\", {\n    \"data-connotation\": \"positive\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, \"The country has a history of systematic racism\"))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__[\"sermon\"].map(function (paragraph) {\n    var x = Math.random();\n    var _ref = [Math.floor(Math.random() * paragraph.length / 2), Math.floor((1 + Math.random()) * paragraph.length / 2)],\n        start = _ref[0],\n        end = _ref[1];\n    var className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proNothing\"];\n    if (x < 0.1) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"];else if (x < 0.6) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"];\n    return __jsx(\"span\", {\n      \"data-text\": \"Shay is so cool\",\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(spanClass, className),\n      key: paragraph.length,\n      onMouseMove: function onMouseMove(e) {\n        console.log(e.clientX, e.clientY);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 15\n      }\n    }, paragraph);\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'images',\n      position: 'relative',\n      width: '100%',\n      height: '35vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      maxWidth: '50%',\n      zIndex: -1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: mapClass,\n    landmark: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  })), __jsx(\"img\", {\n    src: \"/img/watermark-building.png\",\n    alt: \"Watermark building\",\n    className: buildingClass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  }), __jsx(\"img\", {\n    src: \"/img/watermark-todd.png\",\n    alt: \"Pastor Todd Wagner\",\n    className: pastorClass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Watermark, \"tEvFMdtK0v/B3SnSmtGopz+s0qo=\");\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbImJ1aWxkaW5nQ2xhc3MiLCJjc3MiLCJzcGFuQ2xhc3MiLCJtYXBDbGFzcyIsInBhc3RvckNsYXNzIiwiY2hhcnRBcmVhIiwiV2F0ZXJtYXJrIiwidXNlU3RhdGUiLCJ0b29sdGlwQ29vcmRpbmF0ZXMiLCJzZXRUb29sdGlwQ29vcmRpbmF0ZXMiLCJjb250YWluZXJDbGFzcyIsImdyaWRBcmVhIiwid2lkdGgiLCJkaXNwbGF5IiwiekluZGV4IiwiQ2h1cmNoS2V5cyIsInNlcm1vbkNvbnRhaW5lckNsYXNzIiwic2VybW9uQ2xhc3MiLCJzZXJtb24iLCJtYXAiLCJwYXJhZ3JhcGgiLCJ4IiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJjbGFzc05hbWUiLCJwcm9Ob3RoaW5nIiwicHJvUG9saWNlIiwicHJvQkxNIiwiY3giLCJlIiwiY29uc29sZSIsImxvZyIsImNsaWVudFgiLCJjbGllbnRZIiwicG9zaXRpb24iLCJoZWlnaHQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQUgsbUJBQW5CO0FBTUEsSUFBTUMsU0FBUyxHQUFHRCx5REFBSCxvQkFBZjtBQUlBLElBQU1FLFFBQVEsR0FBR0YseURBQUgsb0JBQWQ7QUFPQSxJQUFNRyxXQUFXLEdBQUdILHlEQUFILG9CQUFqQjtBQVFBLElBQU1JLFNBQVMsR0FBR0oseURBQUgsb0JBQWY7O0FBK0JBLElBQU1LLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFD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QTNDRixFQXNFRTtBQUFLLFNBQUssRUFBRTtBQUFFVCxjQUFRLEVBQUUsUUFBWjtBQUFzQjJCLGNBQVEsRUFBRSxVQUFoQztBQUE0QzFCLFdBQUssRUFBRSxNQUFuRDtBQUEyRDJCLFlBQU0sRUFBRTtBQUFuRSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLEtBQVo7QUFBbUIxQixZQUFNLEVBQUUsQ0FBQztBQUE1QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQVEsYUFBUyxFQUFFWCxRQUFuQjtBQUE2QixZQUFRLEVBQUVZLG9EQUFVLENBQUNULFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFDRSxPQUFHLEVBQUMsNkJBRE47QUFFRSxPQUFHLEVBQUMsb0JBRk47QUFHRSxhQUFTLEVBQUVOLGFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBU0U7QUFBSyxPQUFHLEVBQUMseUJBQVQ7QUFBbUMsT0FBRyxFQUFDLG9CQUF2QztBQUE0RCxhQUFTLEVBQUVJLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBdEVGLENBREY7QUFzRkQsQ0F4RkQ7O0dBQU1FLFM7O0tBQUFBLFM7QUEwRlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCB7XG4gIGNvbnRhaW5lckNsYXNzLFxuICBzZXJtb25DbGFzcyxcbiAgcHJvQkxNLFxuICBwcm9Qb2xpY2UsXG4gIHByb05vdGhpbmcsXG4gIHNlcm1vbkNvbnRhaW5lckNsYXNzLFxufSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0IHsgc2VybW9uIH0gZnJvbSAnLi93YXRlcm1hcmtTZXJtb24nXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMgfSBmcm9tICcuLi9tZXRhZGF0YSdcblxuY29uc3QgYnVpbGRpbmdDbGFzcyA9IGNzc2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBzcGFuQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuY29uc3QgbWFwQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNjAlO1xuYFxuXG5jb25zdCBwYXN0b3JDbGFzcyA9IGNzc2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IC0xMHZ3OyAqL1xuICB3aWR0aDogNzUlO1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuYFxuXG5jb25zdCBjaGFydEFyZWEgPSBjc3NgXG4gIGdyaWQtYXJlYTogY2hhcnRzO1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ255dGNoZWx0ZW5oYW0nLCBzZXJpZjtcbiAgfVxuXG4gID4gZGl2ID4gcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAmW2RhdGEtY29ubm90YXRpb249J25lZ2F0aXZlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50MSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltkYXRhLWNvbm5vdGF0aW9uPSdwb3NpdGl2ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFdhdGVybWFyazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b29sdGlwQ29vcmRpbmF0ZXMsIHNldFRvb2x0aXBDb29yZGluYXRlc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19PlxuICAgICAgICA8aDI+V2F0ZXJtYXJrIENodXJjaDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNpbWlsaXF1ZSBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdGlhIGFuaW1pLCBpZCBlc3QgbGFib3J1bSBldCBkb2xvcnVtXG4gICAgICAgICAgZnVnYS4gRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uIE5hbSBsaWJlcm8gdGVtcG9yZSwgY3VtXG4gICAgICAgICAgc29sdXRhIG5vYmlzIGVzdCBlbGlnZW5kaSBvcHRpbyBjdW1xdWUgbmloaWwgaW1wZWRpdCBxdW8gbWludXMgaWQgcXVvZCBtYXhpbWUgcGxhY2VhdFxuICAgICAgICAgIGZhY2VyZSBwb3NzaW11cywgb21uaXMgdm9sdXB0YXMgYXNzdW1lbmRhIGVzdCwgb21uaXMgZG9sb3IgcmVwZWxsZW5kdXMuIFRlbXBvcmlidXMgYXV0ZW1cbiAgICAgICAgICBxdWlidXNkYW0gZXQgYXV0IG9mZmljaWlzIGRlYml0aXMgYXV0IHJlcnVtIG5lY2Vzc2l0YXRpYnVzIHNhZXBlIGV2ZW5pZXRcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hhcnRBcmVhfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHpJbmRleDogMTAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIwJScgfX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVHdpdHRlciBGb2xsb3dlcnM6XG4gICAgICAgICAgICAgIDxiciAvPiAxOSw4MzJ7JyAnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0IGNodXJjaD17Q2h1cmNoS2V5cy5XYXRlcm1hcmt9IGNhbGN1bGF0aW9uS2V5PXsndHdpdHRlckZvbGxvd2Vycyd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIwJScgfX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2h1cmNoIEF0dGVuZGVlczpcbiAgICAgICAgICAgICAgPGJyIC8+IDIyLDgzMnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnQgY2h1cmNoPXtDaHVyY2hLZXlzLldhdGVybWFya30gY2FsY3VsYXRpb25LZXk9eydhdHRlbmRlZXMnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBvZGNhc3QgUmV2aWV3czpcbiAgICAgICAgICAgICAgPGJyIC8+IDIyeycgJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbmZsdWVuY2VDaGFydCBjaHVyY2g9e0NodXJjaEtleXMuV2F0ZXJtYXJrfSBjYWxjdWxhdGlvbktleT17J3BvZGNhc3RSZXZpZXdzJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+T25seSBKZXN1cyBjYW4gZml4IHRoaXM8L3A+XG4gICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cIm5lZ2F0aXZlXCI+V2UgbmVlZCB0byBoYXZlIHVuaXR5PC9wPlxuICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPkJlIGNhcmVmdWwgbm90IHRvIGFzayBmb3IgdG9vIG11Y2g8L3A+XG4gICAgICAgICAgPHAgZGF0YS1jb25ub3RhdGlvbj1cInBvc2l0aXZlXCI+QmxhY2sgTGl2ZXMgTWF0dGVyPC9wPlxuICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPlRoZSBjb3VudHJ5IGhhcyBhIGhpc3Rvcnkgb2Ygc3lzdGVtYXRpYyByYWNpc208L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2VybW9uQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3Nlcm1vbkNsYXNzfT5cbiAgICAgICAgICB7c2VybW9uLm1hcCgocGFyYWdyYXBoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKVxuICAgICAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gW1xuICAgICAgICAgICAgICBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogcGFyYWdyYXBoLmxlbmd0aCkgLyAyKSxcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcigoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIHBhcmFncmFwaC5sZW5ndGgpIC8gMiksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcHJvTm90aGluZ1xuICAgICAgICAgICAgaWYgKHggPCAwLjEpIGNsYXNzTmFtZSA9IHByb1BvbGljZVxuICAgICAgICAgICAgZWxzZSBpZiAoeCA8IDAuNikgY2xhc3NOYW1lID0gcHJvQkxNXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiU2hheSBpcyBzbyBjb29sXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHNwYW5DbGFzcywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICBrZXk9e3BhcmFncmFwaC5sZW5ndGh9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbWFnZXMnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzV2aCcgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzUwJScsIHpJbmRleDogLTEgfX0+XG4gICAgICAgICAgICA8REZXTWFwIGNsYXNzTmFtZT17bWFwQ2xhc3N9IGxhbmRtYXJrPXtDaHVyY2hLZXlzLldhdGVybWFya30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1nL3dhdGVybWFyay1idWlsZGluZy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiV2F0ZXJtYXJrIGJ1aWxkaW5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnVpbGRpbmdDbGFzc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIiBhbHQ9XCJQYXN0b3IgVG9kZCBXYWduZXJcIiBjbGFzc05hbWU9e3Bhc3RvckNsYXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");

/***/ })

})