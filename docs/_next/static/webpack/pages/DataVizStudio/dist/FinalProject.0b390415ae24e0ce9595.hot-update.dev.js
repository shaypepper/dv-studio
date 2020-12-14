"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/SubstanceChart.tsx":
  /*!****************************************************!*\
    !*** ./components/FinalProject/SubstanceChart.tsx ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function componentsFinalProjectSubstanceChartTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 75 50\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_4__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    if (church.minutes.length === 1) {\n      return __jsx(\"rect\", {\n        height: 2,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      });\n    }\n\n    return church.minutes.map(function (occasion, j) {\n      return __jsx(\"rect\", {\n        key: 'thing' + j,\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      });\n    });\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_4__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n    var dots = [];\n\n    var addDot = function addDot(category) {\n      return function (_ref2) {\n        var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n            premise = _ref3[0],\n            n = _ref3[1];\n\n        console.log(category);\n        new Array(n).fill(true).forEach(function () {\n          return dots.push(__jsx(\"circle\", {\n            transform: \"translate(\".concat(dots.length * 2.5 + 1, \" \").concat(verticalCoordinate, \")\"),\n            r: \"1\",\n            fill: category === 'problematicStatements' ? 'red' : 'black',\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 21\n            }\n          }));\n        });\n      };\n    };\n\n    Object.entries(church.problematicStatements).forEach(addDot('problematicStatements'));\n    Object.entries(church.notAsProblematicStatements).forEach(addDot('notAsproblematicStatements'));\n    return dots;\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJtYXAiLCJjaHVyY2giLCJpIiwidmVydGljYWxDb29yZGluYXRlIiwibWludXRlcyIsImxlbmd0aCIsIm9jY2FzaW9uIiwiaiIsImRvdHMiLCJhZGREb3QiLCJjYXRlZ29yeSIsInByZW1pc2UiLCJuIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiZmlsbCIsImZvckVhY2giLCJwdXNoIiwiZW50cmllcyIsInByb2JsZW1hdGljU3RhdGVtZW50cyIsIm5vdEFzUHJvYmxlbWF0aWNTdGF0ZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBT0EsSUFBTUEsV0FBVyxHQUFHQyx5REFBSCxtQkFBakI7QUFRQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsa0JBQWdCLEVBQUUsb0JBREw7QUFFYkMsd0JBQXNCLEVBQUUsb0JBRlg7QUFHYkMsV0FBUyxFQUFFLGtCQUhFO0FBSWJDLGdCQUFjLEVBQUU7QUFKSCxDQUFmO0FBT0EsSUFBTUMsVUFBVSxHQUFHTix5REFBSCxvQkFBaEI7O0FBT0EsSUFBTU8sY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsT0FBUTtBQUFBOztBQUN2QyxTQUNFO0FBQUssU0FBSyxFQUFFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssVUFBTSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFDLE1BQXpC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c0IsT0FBUCxDQUFlbEIsTUFBTSxDQUFDb0IsMEJBQXRCLEVBQWtESixPQUFsRCxDQUNFUixNQUFNLENBQUMsNEJBQUQsQ0FEUjtBQUdBLFdBQU9ELElBQVA7QUFDRCxHQXZCQSxDQUpILENBaENGLENBREYsQ0FERjtBQWtFRCxDQW5FRDs7S0FBTVosYztBQXFFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9TdWJzdGFuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWNrLCBoaWVyYXJjaHkgfSBmcm9tICdkMy1oaWVyYXJjaHknXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4vbWV0YWRhdGEnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbn1cblxuY29uc3QgY2lyY2xlQ2xhc3MgPSBjc3NgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgb3BhY2l0eTogNTAlO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA5MCU7XG4gIH1cbmBcblxuY29uc3QgbGFiZWxzID0ge1xuICB0d2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChwYXN0b3IpJyxcbiAgY2h1cmNoVHdpdHRlckZvbGxvd2VyczogJ0ZvbGxvd2VycyAoY2h1cmNoKScsXG4gIGF0dGVuZGVlczogJ0NodXJjaCBBdHRlbmRlZXMnLFxuICBwb2RjYXN0UmV2aWV3czogJ1BvZGNhc3QgUmV2aWV3cycsXG59XG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3NgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbiAgZm9udC1zaXplOiAxLjc1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gXG5cbmNvbnN0IFN1YnN0YW5jZUNoYXJ0OiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNzUgNTBcIj5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAyKVwiPlxuICAgICAgICAgIEhvdyBsb25nIGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgPGc+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgaWYgKGNodXJjaC5taW51dGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y2h1cmNoLm1pbnV0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAgJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2h1cmNoLm1pbnV0ZXMubWFwKChvY2Nhc2lvbiwgaikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBrZXk9eyd0aGluZycgKyBqfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e29jY2FzaW9uLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke1xuICAgICAgICAgICAgICAgICAgICBjaHVyY2gubWludXRlc1tqIC0gMV0gPyBjaHVyY2gubWludXRlc1tqIC0gMV0ubGVuZ3RoICsgMC41IDogMFxuICAgICAgICAgICAgICAgICAgfSAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICA+PC9yZWN0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDIwKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMSlcIj5cbiAgICAgICAgICAgIEhvdyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoY2h1cmNoZXMpLm1hcCgoY2h1cmNoLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENvb3JkaW5hdGUgPSAyLjUgKiBpICsgM1xuICAgICAgICAgICAgY29uc3QgZG90cyA9IFtdXG5cbiAgICAgICAgICAgIGNvbnN0IGFkZERvdCA9IChjYXRlZ29yeSkgPT4gKFtwcmVtaXNlLCBuXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbmV3IEFycmF5KG4pXG4gICAgICAgICAgICAgICAgLmZpbGwodHJ1ZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoKSA9PlxuICAgICAgICAgICAgICAgICAgZG90cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZG90cy5sZW5ndGggKiAyLjUgKyAxfSAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICByPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD17Y2F0ZWdvcnkgPT09ICdwcm9ibGVtYXRpY1N0YXRlbWVudHMnID8gJ3JlZCcgOiAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5wcm9ibGVtYXRpY1N0YXRlbWVudHMpLmZvckVhY2goYWRkRG90KCdwcm9ibGVtYXRpY1N0YXRlbWVudHMnKSlcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5ub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cykuZm9yRWFjaChcbiAgICAgICAgICAgICAgYWRkRG90KCdub3RBc3Byb2JsZW1hdGljU3RhdGVtZW50cycpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZG90c1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGFuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");
    /***/
  }
});