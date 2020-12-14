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

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/FinalProject/Card.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/FinalProject/Sections/styled.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watermarkSermon */ \"./components/FinalProject/Sections/watermarkSermon.ts\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Map */ \"./components/FinalProject/Map/index.ts\");\n/* harmony import */ var _InfluenceChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InfluenceChart */ \"./components/FinalProject/InfluenceChart.tsx\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../metadata */ \"./components/FinalProject/metadata.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/Sections/Watermark.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: charts;\\n\\n  p {\\n    font-size: 1rem;\\n    font-family: 'nytcheltenham', serif;\\n  }\\n\\n  > div > p {\\n    padding: 10px;\\n    margin: 10px 10px 10px 0px;\\n\\n    color: white;\\n    width: fit-content;\\n\\n    &[data-connotation='negative'] {\\n      background-color: var(--accent1);\\n      &:hover {\\n        background-color: var(--accent2);\\n      }\\n    }\\n\\n    &[data-connotation='positive'] {\\n      background-color: var(--primary);\\n      &:hover {\\n        background-color: var(--secondary);\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  /* left: -10vw; */\\n  width: 75%;\\n  max-width: 230px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 50%;\\n  right: 0;\\n  width: 60%;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n\\n  &:before {\\n    content: attr(data-text); /* here's the magic */\\n    position: absolute;\\n\\n    /* vertically center */\\n    top: 50%;\\n    transform: translateY(-50%);\\n\\n    /* move to right */\\n    /* left: 100%; */\\n    /*  margin-left: 15px; /* and add a small left margin */\\n\\n    /* basic styles */\\n    width: 200px;\\n    padding: 10px;\\n    border-radius: 10px;\\n    background: #000;\\n    color: #fff;\\n    text-align: center;\\n\\n    display: none; /* hide by default */\\n  }\\n\\n  &:hover:before {\\n    display: block;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar buildingClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar spanClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\nvar mapClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject3());\nvar pastorClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject4());\nvar chartArea = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject5());\n\nvar Watermark = function Watermark() {\n  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"containerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridArea: 'title'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, \"Watermark Church\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\")), __jsx(\"div\", {\n    className: chartArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '100%',\n      display: 'flex',\n      zIndex: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"Twitter Followers:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 15\n    }\n  }), \" 19,832\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'twitterFollowers',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }, \"Church Attendees:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }), \" 22,832\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'attendees',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      width: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, \"Podcast Reviews:\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }), \" 22\", ' '), __jsx(_InfluenceChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    church: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    calculationKey: 'podcastReviews',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }, \"Only Jesus can fix this\"), __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }, \"We need to have unity\"), __jsx(\"p\", {\n    \"data-connotation\": \"negative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 11\n    }\n  }, \"Be careful not to ask for too much\"), __jsx(\"p\", {\n    \"data-connotation\": \"positive\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, \"Black Lives Matter\"), __jsx(\"p\", {\n    \"data-connotation\": \"positive\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, \"The country has a history of systematic racism\"))), __jsx(\"div\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonContainerClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styled__WEBPACK_IMPORTED_MODULE_3__[\"sermonClass\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, _watermarkSermon__WEBPACK_IMPORTED_MODULE_5__[\"sermon\"].map(function (paragraph) {\n    var x = Math.random();\n    var _ref = [Math.floor(Math.random() * paragraph.length / 2), Math.floor((1 + Math.random()) * paragraph.length / 2)],\n        start = _ref[0],\n        end = _ref[1];\n    var className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proNothing\"];\n    if (x < 0.1) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proPolice\"];else if (x < 0.6) className = _styled__WEBPACK_IMPORTED_MODULE_3__[\"proBLM\"];\n    return __jsx(\"span\", {\n      \"data-text\": \"Shay is so cool\",\n      className: Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"cx\"])(spanClass, className),\n      key: paragraph.length,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 15\n      }\n    }, paragraph);\n  }))), __jsx(\"div\", {\n    style: {\n      gridArea: 'images',\n      position: 'relative',\n      width: '100%',\n      height: '35vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      maxWidth: '50%',\n      zIndex: -1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 11\n    }\n  }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: mapClass,\n    landmark: _metadata__WEBPACK_IMPORTED_MODULE_8__[\"ChurchKeys\"].Watermark,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }\n  })), __jsx(\"img\", {\n    src: \"/img/watermark-building.png\",\n    alt: \"Watermark building\",\n    className: buildingClass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 11\n    }\n  }), __jsx(\"img\", {\n    src: \"/img/watermark-todd.png\",\n    alt: \"Pastor Todd Wagner\",\n    className: pastorClass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Watermark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watermark);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watermark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvV2F0ZXJtYXJrLnRzeD83ZTkyIl0sIm5hbWVzIjpbImJ1aWxkaW5nQ2xhc3MiLCJjc3MiLCJzcGFuQ2xhc3MiLCJtYXBDbGFzcyIsInBhc3RvckNsYXNzIiwiY2hhcnRBcmVhIiwiV2F0ZXJtYXJrIiwiY29udGFpbmVyQ2xhc3MiLCJncmlkQXJlYSIsIndpZHRoIiwiZGlzcGxheSIsInpJbmRleCIsIkNodXJjaEtleXMiLCJzZXJtb25Db250YWluZXJDbGFzcyIsInNlcm1vbkNsYXNzIiwic2VybW9uIiwibWFwIiwicGFyYWdyYXBoIiwieCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwiY2xhc3NOYW1lIiwicHJvTm90aGluZyIsInByb1BvbGljZSIsInByb0JMTSIsImN4IiwicG9zaXRpb24iLCJoZWlnaHQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBSCxtQkFBbkI7QUFNQSxJQUFNQyxTQUFTLEdBQUdELHlEQUFILG9CQUFmO0FBK0JBLElBQU1FLFFBQVEsR0FBR0YseURBQUgsb0JBQWQ7QUFPQSxJQUFNRyxXQUFXLEdBQUdILHlEQUFILG9CQUFqQjtBQVFBLElBQU1JLFNBQVMsR0FBR0oseURBQUgsb0JBQWY7O0FBK0JBLElBQU1LLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFDaEMsU0FDRSxNQUFDLDZDQUFEO0FBQU0sYUFBUyxFQUFFQyxzREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEs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QSxLQUNFLE1BQUMsNENBQUQ7QUFBUSxhQUFTLEVBQUVSLFFBQW5CO0FBQTZCLFlBQVEsRUFBRVMsb0RBQVUsQ0FBQ04sU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUNFLE9BQUcsRUFBQyw2QkFETjtBQUVFLE9BQUcsRUFBQyxvQkFGTjtBQUdFLGFBQVMsRUFBRU4sYUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFTRTtBQUFLLE9BQUcsRUFBQyx5QkFBVDtBQUFtQyxPQUFHLEVBQUMsb0JBQXZDO0FBQTRELGFBQVMsRUFBRUksV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsQ0FuRUYsQ0FERjtBQW1GRCxDQXBGRDs7S0FBTUUsUztBQXNGU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TZWN0aW9ucy9XYXRlcm1hcmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmltcG9ydCB7XG4gIGNvbnRhaW5lckNsYXNzLFxuICBzZXJtb25DbGFzcyxcbiAgcHJvQkxNLFxuICBwcm9Qb2xpY2UsXG4gIHByb05vdGhpbmcsXG4gIHNlcm1vbkNvbnRhaW5lckNsYXNzLFxufSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuaW1wb3J0IHsgc2VybW9uIH0gZnJvbSAnLi93YXRlcm1hcmtTZXJtb24nXG5pbXBvcnQgREZXTWFwIGZyb20gJy4uL01hcCdcbmltcG9ydCBJbmZsdWVuY2VDaGFydCBmcm9tICcuLi9JbmZsdWVuY2VDaGFydCdcbmltcG9ydCB7IENodXJjaEtleXMgfSBmcm9tICcuLi9tZXRhZGF0YSdcblxuY29uc3QgYnVpbGRpbmdDbGFzcyA9IGNzc2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBzcGFuQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpOyAvKiBoZXJlJ3MgdGhlIG1hZ2ljICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLyogdmVydGljYWxseSBjZW50ZXIgKi9cbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICAvKiBtb3ZlIHRvIHJpZ2h0ICovXG4gICAgLyogbGVmdDogMTAwJTsgKi9cbiAgICAvKiAgbWFyZ2luLWxlZnQ6IDE1cHg7IC8qIGFuZCBhZGQgYSBzbWFsbCBsZWZ0IG1hcmdpbiAqL1xuXG4gICAgLyogYmFzaWMgc3R5bGVzICovXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIGhpZGUgYnkgZGVmYXVsdCAqL1xuICB9XG5cbiAgJjpob3ZlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gXG5cbmNvbnN0IG1hcENsYXNzID0gY3NzYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDYwJTtcbmBcblxuY29uc3QgcGFzdG9yQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICAvKiBsZWZ0OiAtMTB2dzsgKi9cbiAgd2lkdGg6IDc1JTtcbiAgbWF4LXdpZHRoOiAyMzBweDtcbmBcblxuY29uc3QgY2hhcnRBcmVhID0gY3NzYFxuICBncmlkLWFyZWE6IGNoYXJ0cztcblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdueXRjaGVsdGVuaGFtJywgc2VyaWY7XG4gIH1cblxuICA+IGRpdiA+IHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgJltkYXRhLWNvbm5vdGF0aW9uPSduZWdhdGl2ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgICZbZGF0YS1jb25ub3RhdGlvbj0ncG9zaXRpdmUnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBXYXRlcm1hcms6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxuICAgICAgPGRpdiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fT5cbiAgICAgICAgPGgyPldhdGVybWFyayBDaHVyY2g8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTaW1pbGlxdWUgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXRpYSBhbmltaSwgaWQgZXN0IGxhYm9ydW0gZXQgZG9sb3J1bVxuICAgICAgICAgIGZ1Z2EuIEV0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLiBOYW0gbGliZXJvIHRlbXBvcmUsIGN1bVxuICAgICAgICAgIHNvbHV0YSBub2JpcyBlc3QgZWxpZ2VuZGkgb3B0aW8gY3VtcXVlIG5paGlsIGltcGVkaXQgcXVvIG1pbnVzIGlkIHF1b2QgbWF4aW1lIHBsYWNlYXRcbiAgICAgICAgICBmYWNlcmUgcG9zc2ltdXMsIG9tbmlzIHZvbHVwdGFzIGFzc3VtZW5kYSBlc3QsIG9tbmlzIGRvbG9yIHJlcGVsbGVuZHVzLiBUZW1wb3JpYnVzIGF1dGVtXG4gICAgICAgICAgcXVpYnVzZGFtIGV0IGF1dCBvZmZpY2lpcyBkZWJpdGlzIGF1dCByZXJ1bSBuZWNlc3NpdGF0aWJ1cyBzYWVwZSBldmVuaWV0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NoYXJ0QXJlYX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCB6SW5kZXg6IDEwIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFR3aXR0ZXIgRm9sbG93ZXJzOlxuICAgICAgICAgICAgICA8YnIgLz4gMTksODMyeycgJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbmZsdWVuY2VDaGFydCBjaHVyY2g9e0NodXJjaEtleXMuV2F0ZXJtYXJrfSBjYWxjdWxhdGlvbktleT17J3R3aXR0ZXJGb2xsb3dlcnMnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENodXJjaCBBdHRlbmRlZXM6XG4gICAgICAgICAgICAgIDxiciAvPiAyMiw4MzJ7JyAnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEluZmx1ZW5jZUNoYXJ0IGNodXJjaD17Q2h1cmNoS2V5cy5XYXRlcm1hcmt9IGNhbGN1bGF0aW9uS2V5PXsnYXR0ZW5kZWVzJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjAlJyB9fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQb2RjYXN0IFJldmlld3M6XG4gICAgICAgICAgICAgIDxiciAvPiAyMnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5mbHVlbmNlQ2hhcnQgY2h1cmNoPXtDaHVyY2hLZXlzLldhdGVybWFya30gY2FsY3VsYXRpb25LZXk9eydwb2RjYXN0UmV2aWV3cyd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPk9ubHkgSmVzdXMgY2FuIGZpeCB0aGlzPC9wPlxuICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJuZWdhdGl2ZVwiPldlIG5lZWQgdG8gaGF2ZSB1bml0eTwvcD5cbiAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwibmVnYXRpdmVcIj5CZSBjYXJlZnVsIG5vdCB0byBhc2sgZm9yIHRvbyBtdWNoPC9wPlxuICAgICAgICAgIDxwIGRhdGEtY29ubm90YXRpb249XCJwb3NpdGl2ZVwiPkJsYWNrIExpdmVzIE1hdHRlcjwvcD5cbiAgICAgICAgICA8cCBkYXRhLWNvbm5vdGF0aW9uPVwicG9zaXRpdmVcIj5UaGUgY291bnRyeSBoYXMgYSBoaXN0b3J5IG9mIHN5c3RlbWF0aWMgcmFjaXNtPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Nlcm1vbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXJtb25DbGFzc30+XG4gICAgICAgICAge3Nlcm1vbi5tYXAoKHBhcmFncmFwaCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IFtcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHBhcmFncmFwaC5sZW5ndGgpIC8gMiksXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoKCgxICsgTWF0aC5yYW5kb20oKSkgKiBwYXJhZ3JhcGgubGVuZ3RoKSAvIDIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHByb05vdGhpbmdcbiAgICAgICAgICAgIGlmICh4IDwgMC4xKSBjbGFzc05hbWUgPSBwcm9Qb2xpY2VcbiAgICAgICAgICAgIGVsc2UgaWYgKHggPCAwLjYpIGNsYXNzTmFtZSA9IHByb0JMTVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlNoYXkgaXMgc28gY29vbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzcGFuQ2xhc3MsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGgubGVuZ3RofVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZ3JpZEFyZWE6ICdpbWFnZXMnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzV2aCcgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzUwJScsIHpJbmRleDogLTEgfX0+XG4gICAgICAgICAgICA8REZXTWFwIGNsYXNzTmFtZT17bWFwQ2xhc3N9IGxhbmRtYXJrPXtDaHVyY2hLZXlzLldhdGVybWFya30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1nL3dhdGVybWFyay1idWlsZGluZy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiV2F0ZXJtYXJrIGJ1aWxkaW5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnVpbGRpbmdDbGFzc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93YXRlcm1hcmstdG9kZC5wbmdcIiBhbHQ9XCJQYXN0b3IgVG9kZCBXYWduZXJcIiBjbGFzc05hbWU9e3Bhc3RvckNsYXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcmtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/Watermark.tsx\n");
    /***/
  }
});