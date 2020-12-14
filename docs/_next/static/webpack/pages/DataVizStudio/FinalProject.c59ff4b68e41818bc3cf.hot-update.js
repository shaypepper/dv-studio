webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/InfluenceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/InfluenceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/InfluenceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar InfluenceChart = function InfluenceChart(_ref) {\n  var calculationKey = _ref.calculationKey,\n      church = _ref.church;\n  var root = {\n    children: Object.values(_metadata__WEBPACK_IMPORTED_MODULE_2__[\"churches\"])\n  };\n  var h = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__[\"hierarchy\"])(root).sum(function (d) {\n    return d[calculationKey];\n  });\n  var packedData = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__[\"pack\"])().size([100, 100])(h);\n  _metadata__WEBPACK_IMPORTED_MODULE_2__[\"ChurchKeys\"].Watermark;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 100 100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, packedData.leaves().map(function (node, i) {\n    console.log(node.data.key, church);\n    return __jsx(\"circle\", {\n      r: node.r,\n      key: node.data.key,\n      transform: \"translate(\".concat(node.x, \" \").concat(node.y, \")\"),\n      fill: node.data.key === church ? 'gainsboro' : 'grey',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    });\n  })));\n};\n\n_c = InfluenceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfluenceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"InfluenceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4P2NhY2UiXSwibmFtZXMiOlsiSW5mbHVlbmNlQ2hhcnQiLCJjYWxjdWxhdGlvbktleSIsImNodXJjaCIsInJvb3QiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwiaCIsImhpZXJhcmNoeSIsInN1bSIsImQiLCJwYWNrZWREYXRhIiwicGFjayIsInNpemUiLCJDaHVyY2hLZXlzIiwiV2F0ZXJtYXJrIiwibGVhdmVzIiwibWFwIiwibm9kZSIsImkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImtleSIsInIiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVFBLElBQU1BLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWdDO0FBQUEsTUFBN0JDLGNBQTZCLFFBQTdCQSxjQUE2QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwRixNQUFNQyxJQUFJLEdBQUc7QUFBRUMsWUFBUSxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0Msa0RBQWQ7QUFBWixHQUFiO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQyw4REFBUyxDQUFDTixJQUFELENBQVQsQ0FBZ0JPLEdBQWhCLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNWLGNBQUQsQ0FBUjtBQUFBLEdBQXBCLENBQVY7QUFDQSxNQUFNVyxVQUFVLEdBQUdDLHlEQUFJLEdBQUdDLElBQVAsQ0FBWSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVosRUFBd0JOLENBQXhCLENBQW5CO0FBQ0FPLHNEQUFVLENBQUNDLFNBQVg7QUFDQSxTQUNFO0FBQUssU0FBSyxFQUFFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssVUFBTSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFDLE1BQXpCO0FBQWdDLFdBQU8sRUFBQyxhQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDcENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNJLElBQUwsQ0FBVUMsR0FBdEIsRUFBMkJ0QixNQUEzQjtBQUNBLFdBQ0U7QUFDRSxPQUFDLEVBQUVpQixJQUFJLENBQUNNLENBRFY7QUFFRSxTQUFHLEVBQUVOLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxHQUZqQjtBQUdFLGVBQVMsc0JBQWVMLElBQUksQ0FBQ08sQ0FBcEIsY0FBeUJQLElBQUksQ0FBQ1EsQ0FBOUIsTUFIWDtBQUlFLFVBQUksRUFBRVIsSUFBSSxDQUFDSSxJQUFMLENBQVVDLEdBQVYsS0FBa0J0QixNQUFsQixHQUEyQixXQUEzQixHQUF5QyxNQUpqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRCxHQVZBLENBREgsQ0FERixDQURGO0FBaUJELENBdEJEOztLQUFNRixjO0FBd0JTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L0luZmx1ZW5jZUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhY2ssIGhpZXJhcmNoeSB9IGZyb20gJ2QzLWhpZXJhcmNoeSdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi9tZXRhZGF0YSdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vc3R5bGVkJ1xuXG50eXBlIEluZmx1ZW5jZUNoYXJ0UHJvcHMgPSB7XG4gIGNhbGN1bGF0aW9uS2V5OiBzdHJpbmdcbiAgY2h1cmNoOiBDaHVyY2hLZXlzXG59XG5cbmNvbnN0IEluZmx1ZW5jZUNoYXJ0OiBSZWFjdC5GQzxJbmZsdWVuY2VDaGFydFByb3BzPiA9ICh7IGNhbGN1bGF0aW9uS2V5LCBjaHVyY2ggfSkgPT4ge1xuICBjb25zdCByb290ID0geyBjaGlsZHJlbjogT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykgfVxuICBjb25zdCBoID0gaGllcmFyY2h5KHJvb3QpLnN1bSgoZCkgPT4gZFtjYWxjdWxhdGlvbktleV0pXG4gIGNvbnN0IHBhY2tlZERhdGEgPSBwYWNrKCkuc2l6ZShbMTAwLCAxMDBdKShoKVxuICBDaHVyY2hLZXlzLldhdGVybWFya1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICB7cGFja2VkRGF0YS5sZWF2ZXMoKS5tYXAoKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEua2V5LCBjaHVyY2gpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgcj17bm9kZS5yfVxuICAgICAgICAgICAgICBrZXk9e25vZGUuZGF0YS5rZXl9XG4gICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke25vZGUueH0gJHtub2RlLnl9KWB9XG4gICAgICAgICAgICAgIGZpbGw9e25vZGUuZGF0YS5rZXkgPT09IGNodXJjaCA/ICdnYWluc2Jvcm8nIDogJ2dyZXknfVxuICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZsdWVuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/InfluenceChart.tsx\n");

/***/ })

})