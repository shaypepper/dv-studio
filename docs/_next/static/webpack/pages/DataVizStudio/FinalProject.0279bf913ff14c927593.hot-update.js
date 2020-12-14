webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 200 100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 8)\",\n    fontSize: \"6px\",\n    fontWeight: \"300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 50)\",\n    fontSize: \"6px\",\n    fontWeight: \"300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"How did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    if (church.minutes.length === 1) {\n      return __jsx(\"rect\", {\n        height: 4,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(5 * i + 12, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      });\n    }\n\n    return church.minutes.map(function (occasion, i) {\n      var _church$minutes;\n\n      return __jsx(\"rect\", {\n        height: 4,\n        width: occasion.length,\n        transform: \"translate(\".concat(((_church$minutes = church.minutes[i - 1]) === null || _church$minutes === void 0 ? void 0 : _church$minutes.length) || 0, \" \").concat(5 * i + 12, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      });\n    });\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJtYXAiLCJjaHVyY2giLCJpIiwibWludXRlcyIsImxlbmd0aCIsIm9jY2FzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQU9BLElBQU1BLFdBQVcsR0FBR0MseURBQUgsbUJBQWpCO0FBUUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLGtCQUFnQixFQUFFLG9CQURMO0FBRWJDLHdCQUFzQixFQUFFLG9CQUZYO0FBR2JDLFdBQVMsRUFBRSxrQkFIRTtBQUliQyxnQkFBYyxFQUFFO0FBSkgsQ0FBZjtBQU9BLElBQU1DLFVBQVUsR0FBR04seURBQUgsb0JBQWhCOztBQUtBLElBQU1PLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLE9BQVE7QUFBQTs7QUFDdkMsU0FDRTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFVBQU0sRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFnQyxXQUFPLEVBQUMsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFRCxVQUFqQjtBQUE2QixhQUFTLEVBQUMsZ0JBQXZDO0FBQXdELFlBQVEsRUFBQyxLQUFqRTtBQUF1RSxjQUFVLEVBQUMsS0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUlFO0FBQU0sYUFBUyxFQUFFQSxVQUFqQjtBQUE2QixhQUFTLEVBQUMsaUJBQXZDO0FBQXlELFlBQVEsRUFBQyxLQUFsRTtBQUF3RSxjQUFVLEVBQUMsS0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGtEQUFkLEVBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUMxQyxRQUFJRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUNFO0FBQ0UsY0FBTSxFQUFFLENBRFY7QUFFRSxhQUFLLEVBQUVILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsRUFBa0JDLE1BRjNCO0FBR0UsaUJBQVMsd0JBQWlCLElBQUlGLENBQUosR0FBUSxFQUF6QixNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQU9EOztBQUVELFdBQU9ELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSCxHQUFmLENBQW1CLFVBQUNLLFFBQUQsRUFBV0gsQ0FBWCxFQUFpQjtBQUFBOztBQUN6QyxhQUNFO0FBQ0UsY0FBTSxFQUFFLENBRFY7QUFFRSxhQUFLLEVBQUVHLFFBQVEsQ0FBQ0QsTUFGbEI7QUFHRSxpQkFBUyxzQkFBZSxvQkFBQUgsTUFBTSxDQUFDRSxPQUFQLENBQWVELENBQUMsR0FBRyxDQUFuQixxRUFBdUJFLE1BQXZCLEtBQWlDLENBQWhELGNBQXFELElBQUlGLENBQUosR0FBUSxFQUE3RCxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBcEJBLENBREgsQ0FSRixDQURGLENBREY7QUFvQ0QsQ0FyQ0Q7O0tBQU1OLGM7QUF1Q1NBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFjaywgaGllcmFyY2h5IH0gZnJvbSAnZDMtaGllcmFyY2h5J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMgfSBmcm9tICcuL21ldGFkYXRhJ1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuXG50eXBlIEluZmx1ZW5jZUNoYXJ0UHJvcHMgPSB7XG4gIGNhbGN1bGF0aW9uS2V5OiBzdHJpbmdcbiAgY2h1cmNoOiBDaHVyY2hLZXlzXG59XG5cbmNvbnN0IGNpcmNsZUNsYXNzID0gY3NzYFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDUwJTtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogOTAlO1xuICB9XG5gXG5cbmNvbnN0IGxhYmVscyA9IHtcbiAgdHdpdHRlckZvbGxvd2VyczogJ0ZvbGxvd2VycyAocGFzdG9yKScsXG4gIGNodXJjaFR3aXR0ZXJGb2xsb3dlcnM6ICdGb2xsb3dlcnMgKGNodXJjaCknLFxuICBhdHRlbmRlZXM6ICdDaHVyY2ggQXR0ZW5kZWVzJyxcbiAgcG9kY2FzdFJldmlld3M6ICdQb2RjYXN0IFJldmlld3MnLFxufVxuXG5jb25zdCBsYWJlbENsYXNzID0gY3NzYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogbnl0ZnJhbmtsaW47XG5gXG5cbmNvbnN0IFN1YnN0YW5jZUNoYXJ0OiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMjAwIDEwMFwiPlxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDgpXCIgZm9udFNpemU9XCI2cHhcIiBmb250V2VpZ2h0PVwiMzAwXCI+XG4gICAgICAgICAgSG93IGxvbmcgZGlkIGhlIHRhbGsgYWJvdXQgaXQ/XG4gICAgICAgIDwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA1MClcIiBmb250U2l6ZT1cIjZweFwiIGZvbnRXZWlnaHQ9XCIzMDBcIj5cbiAgICAgICAgICBIb3cgZGlkIGhlIHRhbGsgYWJvdXQgaXQ/XG4gICAgICAgIDwvdGV4dD5cblxuICAgICAgICA8Zz5cbiAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhjaHVyY2hlcykubWFwKChjaHVyY2gsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHVyY2gubWludXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2NodXJjaC5taW51dGVzWzBdLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwICR7NSAqIGkgKyAxMn0pYH1cbiAgICAgICAgICAgICAgICA+PC9yZWN0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaHVyY2gubWludXRlcy5tYXAoKG9jY2FzaW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtvY2Nhc2lvbi5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjaHVyY2gubWludXRlc1tpIC0gMV0/Lmxlbmd0aCB8fCAwfSAkezUgKiBpICsgMTJ9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic3RhbmNlQ2hhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})