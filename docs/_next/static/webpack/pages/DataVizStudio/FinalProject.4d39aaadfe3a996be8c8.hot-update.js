webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 75 50\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    if (church.minutes.length === 1) {\n      return __jsx(\"rect\", {\n        height: 2,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      });\n    }\n\n    return church.minutes.map(function (occasion, j) {\n      return __jsx(\"rect\", {\n        key: 'thing' + j,\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      });\n    });\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 5)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n    return __jsx(\"circle\", {\n      transform: \"translate(\".concat(i * 2.5 + 1, \"  \").concat(verticalCoordinate, \")\"),\n      r: \"1\",\n      fill: \"red\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }\n    });\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJtYXAiLCJjaHVyY2giLCJpIiwidmVydGljYWxDb29yZGluYXRlIiwibWludXRlcyIsImxlbmd0aCIsIm9jY2FzaW9uIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFILG1CQUFqQjtBQVFBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxvQkFETDtBQUViQyx3QkFBc0IsRUFBRSxvQkFGWDtBQUdiQyxXQUFTLEVBQUUsa0JBSEU7QUFJYkMsZ0JBQWMsRUFBRTtBQUpILENBQWY7QUFPQSxJQUFNQyxVQUFVLEdBQUdOLHlEQUFILG9CQUFoQjs7QUFPQSxJQUFNTyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUFRO0FBQUE7O0FBQ3ZDLFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUMsTUFBekI7QUFBZ0MsV0FBTyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUQsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0Msa0RBQWQsRUFBd0JDLEdBQXhCLENBQTRCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQzFDLFFBQU1DLGtCQUFrQixHQUFHLE1BQU1ELENBQU4sR0FBVSxDQUFyQzs7QUFDQSxRQUFJRCxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUNFO0FBQ0UsY0FBTSxFQUFFLENBRFY7QUFFRSxhQUFLLEVBQUVKLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLENBQWYsRUFBa0JDLE1BRjNCO0FBR0UsaUJBQVMsd0JBQWlCRixrQkFBakIsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFPRDs7QUFFRCxXQUFPRixNQUFNLENBQUNHLE9BQVAsQ0FBZUosR0FBZixDQUFtQixVQUFDTSxRQUFELEVBQVdDLENBQVgsRUFBaUI7QUFDekMsYUFDRTtBQUNFLFdBQUcsRUFBRSxVQUFVQSxDQURqQjtBQUVFLGNBQU0sRUFBRSxDQUZWO0FBR0UsYUFBSyxFQUFFRCxRQUFRLENBQUNELE1BSGxCO0FBSUUsaUJBQVMsc0JBQ1BKLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsSUFBd0JOLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JGLE1BQXRCLEdBQStCLEdBQXZELEdBQTZELENBRHRELGNBRUxGLGtCQUZLLE1BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBVUQsS0FYTSxDQUFQO0FBWUQsR0F4QkEsQ0FESCxDQUxGLEVBZ0NFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVIsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBSUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZCxFQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDMUMsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTUQsQ0FBTixHQUFVLENBQXJDO0FBQ0EsV0FDRTtBQUNFLGVBQVMsc0JBQWVBLENBQUMsR0FBRyxHQUFKLEdBQVUsQ0FBekIsZUFBK0JDLGtCQUEvQixNQURYO0FBRUUsT0FBQyxFQUFDLEdBRko7QUFHRSxVQUFJLEVBQUMsS0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRCxHQVRBLENBSkgsQ0FoQ0YsQ0FERixDQURGO0FBb0RELENBckREOztLQUFNUCxjO0FBdURTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L1N1YnN0YW5jZUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhY2ssIGhpZXJhcmNoeSB9IGZyb20gJ2QzLWhpZXJhcmNoeSdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi9tZXRhZGF0YSdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAncHJldHR5LWxpZ2h0cydcblxudHlwZSBJbmZsdWVuY2VDaGFydFByb3BzID0ge1xuICBjYWxjdWxhdGlvbktleTogc3RyaW5nXG4gIGNodXJjaDogQ2h1cmNoS2V5c1xufVxuXG5jb25zdCBjaXJjbGVDbGFzcyA9IGNzc2BcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xuICBvcGFjaXR5OiA1MCU7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDkwJTtcbiAgfVxuYFxuXG5jb25zdCBsYWJlbHMgPSB7XG4gIHR3aXR0ZXJGb2xsb3dlcnM6ICdGb2xsb3dlcnMgKHBhc3RvciknLFxuICBjaHVyY2hUd2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChjaHVyY2gpJyxcbiAgYXR0ZW5kZWVzOiAnQ2h1cmNoIEF0dGVuZGVlcycsXG4gIHBvZGNhc3RSZXZpZXdzOiAnUG9kY2FzdCBSZXZpZXdzJyxcbn1cblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IG55dGZyYW5rbGluO1xuICBmb250LXNpemU6IDEuNzVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuY29uc3QgU3Vic3RhbmNlQ2hhcnQ6IFJlYWN0LkZDID0gKHt9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgPHN2ZyBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA3NSA1MFwiPlxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDIpXCI+XG4gICAgICAgICAgSG93IGxvbmcgZGlkIGhlIHRhbGsgYWJvdXQgaXQ/XG4gICAgICAgIDwvdGV4dD5cblxuICAgICAgICA8Zz5cbiAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhjaHVyY2hlcykubWFwKChjaHVyY2gsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsQ29vcmRpbmF0ZSA9IDIuNSAqIGkgKyAzXG4gICAgICAgICAgICBpZiAoY2h1cmNoLm1pbnV0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtjaHVyY2gubWludXRlc1swXS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICA+PC9yZWN0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaHVyY2gubWludXRlcy5tYXAoKG9jY2FzaW9uLCBqKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIGtleT17J3RoaW5nJyArIGp9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17b2NjYXNpb24ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7XG4gICAgICAgICAgICAgICAgICAgIGNodXJjaC5taW51dGVzW2ogLSAxXSA/IGNodXJjaC5taW51dGVzW2ogLSAxXS5sZW5ndGggKyAwLjUgOiAwXG4gICAgICAgICAgICAgICAgICB9ICR7dmVydGljYWxDb29yZGluYXRlfSlgfVxuICAgICAgICAgICAgICAgID48L3JlY3Q+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMjApXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA1KVwiPlxuICAgICAgICAgICAgSG93IGRpZCBoZSB0YWxrIGFib3V0IGl0P1xuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhjaHVyY2hlcykubWFwKChjaHVyY2gsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsQ29vcmRpbmF0ZSA9IDIuNSAqIGkgKyAzXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7aSAqIDIuNSArIDF9ICAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICByPVwiMVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cInJlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnN0YW5jZUNoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})