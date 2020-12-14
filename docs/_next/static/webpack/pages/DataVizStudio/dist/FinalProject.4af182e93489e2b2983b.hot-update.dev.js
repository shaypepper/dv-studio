"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/InfluenceChart.tsx":
  /*!****************************************************!*\
    !*** ./components/FinalProject/InfluenceChart.tsx ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function componentsFinalProjectInfluenceChartTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/InfluenceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-weight: 700;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 100%;\\n  }\\n\\n  &:after {\\n    content: 'SHAY IS SO COOL';\\n    color: red;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Twitter Followers',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar InfluenceChart = function InfluenceChart(_ref) {\n  var calculationKey = _ref.calculationKey,\n      church = _ref.church;\n  var root = {\n    children: Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"])\n  };\n  var h = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"hierarchy\"])(root).sum(function (d) {\n    return d[calculationKey];\n  });\n  var packedData = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"pack\"])().size([100, 100])(h);\n  _metadata__WEBPACK_IMPORTED_MODULE_3__[\"ChurchKeys\"].Watermark;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 100 130\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, packedData.leaves().map(function (node, i) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"circle\", {\n      className: circleClass,\n      r: node.r,\n      key: node.data.key,\n      transform: \"translate(\".concat(node.x, \" \").concat(node.y, \")\"),\n      fill: node.data.key === church ? 'rgb(40,40,40)' : 'gainsboro',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }));\n  }), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 110)\",\n    fontSize: \"8px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, labels[calculationKey]), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 120)\",\n    fontSize: \"14px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, _metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"][church][calculationKey])));\n};\n\n_c = InfluenceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfluenceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"InfluenceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4P2NhY2UiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiYXR0ZW5kZWVzIiwicG9kY2FzdFJldmlld3MiLCJsYWJlbENsYXNzIiwiSW5mbHVlbmNlQ2hhcnQiLCJjYWxjdWxhdGlvbktleSIsImNodXJjaCIsInJvb3QiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwiaCIsImhpZXJhcmNoeSIsInN1bSIsImQiLCJwYWNrZWREYXRhIiwicGFjayIsInNpemUiLCJDaHVyY2hLZXlzIiwiV2F0ZXJtYXJrIiwibGVhdmVzIiwibWFwIiwibm9kZSIsImkiLCJyIiwiZGF0YSIsImtleSIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFILG1CQUFqQjtBQWFBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxtQkFETDtBQUViQyxXQUFTLEVBQUUsa0JBRkU7QUFHYkMsZ0JBQWMsRUFBRTtBQUhILENBQWY7QUFNQSxJQUFNQyxVQUFVLEdBQUdMLHlEQUFILG9CQUFoQjs7QUFNQSxJQUFNTSxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUFnQztBQUFBLE1BQTdCQyxjQUE2QixRQUE3QkEsY0FBNkI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcEYsTUFBTUMsSUFBSSxHQUFHO0FBQUVDLFlBQVEsRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGtEQUFkO0FBQVosR0FBYjtBQUNBLE1BQU1DLENBQUMsR0FBR0MsOERBQVMsQ0FBQ04sSUFBRCxDQUFULENBQWdCTyxHQUFoQixDQUFvQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDVixjQUFELENBQVI7QUFBQSxHQUFwQixDQUFWO0FBQ0EsTUFBTVcsVUFBVSxHQUFHQyx5REFBSSxHQUFHQyxJQUFQLENBQVksQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFaLEVBQXdCTixDQUF4QixDQUFuQjtBQUNBTyxzREFBVSxDQUFDQyxTQUFYO0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFVBQU0sRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFnQyxXQUFPLEVBQUMsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixVQUFVLENBQUNLLE1BQVgsR0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3BDLFdBQ0UsbUVBQ0U7QUFDRSxlQUFTLEVBQUUzQixXQURiO0FBRUUsT0FBQyxFQUFFMEIsSUFBSSxDQUFDRSxDQUZWO0FBR0UsU0FBRyxFQUFFRixJQUFJLENBQUNHLElBQUwsQ0FBVUMsR0FIakI7QUFJRSxlQUFTLHNCQUFlSixJQUFJLENBQUNLLENBQXBCLGNBQXlCTCxJQUFJLENBQUNNLENBQTlCLE1BSlg7QUFLRSxVQUFJLEVBQUVOLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxHQUFWLEtBQWtCckIsTUFBbEIsR0FBMkIsZUFBM0IsR0FBNkMsV0FMckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFXRCxHQVpBLENBREgsRUFjRTtBQUFNLGFBQVMsRUFBRUgsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGtCQUF2QztBQUEwRCxZQUFRLEVBQUMsS0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixNQUFNLENBQUNNLGNBQUQsQ0FEVCxDQWRGLEVBa0JFO0FBQU0sYUFBUyxFQUFFRixVQUFqQjtBQUE2QixhQUFTLEVBQUMsa0JBQXZDO0FBQTBELFlBQVEsRUFBQyxNQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dRLGtEQUFRLENBQUNMLE1BQUQsQ0FBUixDQUFpQkQsY0FBakIsQ0FESCxDQWxCRixDQURGLENBREY7QUEwQkQsQ0EvQkQ7O0tBQU1ELGM7QUFpQ1NBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFjaywgaGllcmFyY2h5IH0gZnJvbSAnZDMtaGllcmFyY2h5J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMgfSBmcm9tICcuL21ldGFkYXRhJ1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuXG50eXBlIEluZmx1ZW5jZUNoYXJ0UHJvcHMgPSB7XG4gIGNhbGN1bGF0aW9uS2V5OiBzdHJpbmdcbiAgY2h1cmNoOiBDaHVyY2hLZXlzXG59XG5cbmNvbnN0IGNpcmNsZUNsYXNzID0gY3NzYFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDUwJTtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdTSEFZIElTIFNPIENPT0wnO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmBcblxuY29uc3QgbGFiZWxzID0ge1xuICB0d2l0dGVyRm9sbG93ZXJzOiAnVHdpdHRlciBGb2xsb3dlcnMnLFxuICBhdHRlbmRlZXM6ICdDaHVyY2ggQXR0ZW5kZWVzJyxcbiAgcG9kY2FzdFJldmlld3M6ICdQb2RjYXN0IFJldmlld3MnLFxufVxuXG5jb25zdCBsYWJlbENsYXNzID0gY3NzYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogbnl0ZnJhbmtsaW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5gXG5cbmNvbnN0IEluZmx1ZW5jZUNoYXJ0OiBSZWFjdC5GQzxJbmZsdWVuY2VDaGFydFByb3BzPiA9ICh7IGNhbGN1bGF0aW9uS2V5LCBjaHVyY2ggfSkgPT4ge1xuICBjb25zdCByb290ID0geyBjaGlsZHJlbjogT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykgfVxuICBjb25zdCBoID0gaGllcmFyY2h5KHJvb3QpLnN1bSgoZCkgPT4gZFtjYWxjdWxhdGlvbktleV0pXG4gIGNvbnN0IHBhY2tlZERhdGEgPSBwYWNrKCkuc2l6ZShbMTAwLCAxMDBdKShoKVxuICBDaHVyY2hLZXlzLldhdGVybWFya1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEzMFwiPlxuICAgICAgICB7cGFja2VkRGF0YS5sZWF2ZXMoKS5tYXAoKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2lyY2xlQ2xhc3N9XG4gICAgICAgICAgICAgICAgcj17bm9kZS5yfVxuICAgICAgICAgICAgICAgIGtleT17bm9kZS5kYXRhLmtleX1cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtub2RlLnh9ICR7bm9kZS55fSlgfVxuICAgICAgICAgICAgICAgIGZpbGw9e25vZGUuZGF0YS5rZXkgPT09IGNodXJjaCA/ICdyZ2IoNDAsNDAsNDApJyA6ICdnYWluc2Jvcm8nfVxuICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDExMClcIiBmb250U2l6ZT1cIjhweFwiPlxuICAgICAgICAgIHtsYWJlbHNbY2FsY3VsYXRpb25LZXldfVxuICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMjApXCIgZm9udFNpemU9XCIxNHB4XCI+XG4gICAgICAgICAge2NodXJjaGVzW2NodXJjaF1bY2FsY3VsYXRpb25LZXldfVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZsdWVuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/InfluenceChart.tsx\n");
    /***/
  }
});