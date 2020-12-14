webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/InfluenceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/InfluenceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/InfluenceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Twitter Followers',\n  attendees: 'Church Attendies',\n  podcastReviews: 'Podcast Reviews'\n};\n\nvar InfluenceChart = function InfluenceChart(_ref) {\n  var calculationKey = _ref.calculationKey,\n      church = _ref.church;\n  var root = {\n    children: Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"])\n  };\n  var h = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"hierarchy\"])(root).sum(function (d) {\n    return d[calculationKey];\n  });\n  var packedData = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"pack\"])().size([100, 100])(h);\n  _metadata__WEBPACK_IMPORTED_MODULE_3__[\"ChurchKeys\"].Watermark;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 0 100 100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    transform: \"translate(20 20)\",\n    fontSize: \"10\",\n    textTransform: \"uppercase\",\n    fontFamily: \"nytfranklin\",\n    fontWeight: \"700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, labels[calculationKey]), packedData.leaves().map(function (node, i) {\n    return __jsx(\"circle\", {\n      className: circleClass,\n      r: node.r,\n      key: node.data.key,\n      transform: \"translate(\".concat(node.x, \" \").concat(node.y, \")\"),\n      fill: node.data.key === church ? 'rgb(40,40,40)' : 'gainsboro',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    });\n  })));\n};\n\n_c = InfluenceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfluenceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"InfluenceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4P2NhY2UiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiYXR0ZW5kZWVzIiwicG9kY2FzdFJldmlld3MiLCJJbmZsdWVuY2VDaGFydCIsImNhbGN1bGF0aW9uS2V5IiwiY2h1cmNoIiwicm9vdCIsImNoaWxkcmVuIiwiT2JqZWN0IiwidmFsdWVzIiwiY2h1cmNoZXMiLCJoIiwiaGllcmFyY2h5Iiwic3VtIiwiZCIsInBhY2tlZERhdGEiLCJwYWNrIiwic2l6ZSIsIkNodXJjaEtleXMiLCJXYXRlcm1hcmsiLCJsZWF2ZXMiLCJtYXAiLCJub2RlIiwiaSIsInIiLCJkYXRhIiwia2V5IiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsV0FBVyxHQUFHQyx5REFBSCxtQkFBakI7QUFRQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsa0JBQWdCLEVBQUUsbUJBREw7QUFFYkMsV0FBUyxFQUFFLGtCQUZFO0FBR2JDLGdCQUFjLEVBQUU7QUFISCxDQUFmOztBQU1BLElBQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWdDO0FBQUEsTUFBN0JDLGNBQTZCLFFBQTdCQSxjQUE2QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwRixNQUFNQyxJQUFJLEdBQUc7QUFBRUMsWUFBUSxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0Msa0RBQWQ7QUFBWixHQUFiO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQyw4REFBUyxDQUFDTixJQUFELENBQVQsQ0FBZ0JPLEdBQWhCLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNWLGNBQUQsQ0FBUjtBQUFBLEdBQXBCLENBQVY7QUFDQSxNQUFNVyxVQUFVLEdBQUdDLHlEQUFJLEdBQUdDLElBQVAsQ0FBWSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVosRUFBd0JOLENBQXhCLENBQW5CO0FBQ0FPLHNEQUFVLENBQUNDLFNBQVg7QUFDQSxTQUNFO0FBQUssU0FBSyxFQUFFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssVUFBTSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFDLE1BQXpCO0FBQWdDLFdBQU8sRUFBQyxhQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFFRSxZQUFRLEVBQUMsSUFGWDtBQUdFLGlCQUFhLEVBQUMsV0FIaEI7QUFJRSxjQUFVLEVBQUMsYUFKYjtBQUtFLGNBQVUsRUFBQyxLQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR3BCLE1BQU0sQ0FBQ0ssY0FBRCxDQVBULENBREYsRUFVR1csVUFBVSxDQUFDSyxNQUFYLEdBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNwQyxXQUNFO0FBQ0UsZUFBUyxFQUFFMUIsV0FEYjtBQUVFLE9BQUMsRUFBRXlCLElBQUksQ0FBQ0UsQ0FGVjtBQUdFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQUFMLENBQVVDLEdBSGpCO0FBSUUsZUFBUyxzQkFBZUosSUFBSSxDQUFDSyxDQUFwQixjQUF5QkwsSUFBSSxDQUFDTSxDQUE5QixNQUpYO0FBS0UsVUFBSSxFQUFFTixJQUFJLENBQUNHLElBQUwsQ0FBVUMsR0FBVixLQUFrQnJCLE1BQWxCLEdBQTJCLGVBQTNCLEdBQTZDLFdBTHJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVNELEdBVkEsQ0FWSCxDQURGLENBREY7QUEwQkQsQ0EvQkQ7O0tBQU1GLGM7QUFpQ1NBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFjaywgaGllcmFyY2h5IH0gZnJvbSAnZDMtaGllcmFyY2h5J1xuaW1wb3J0IHsgQ2h1cmNoS2V5cywgY2h1cmNoZXMgfSBmcm9tICcuL21ldGFkYXRhJ1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdwcmV0dHktbGlnaHRzJ1xuXG50eXBlIEluZmx1ZW5jZUNoYXJ0UHJvcHMgPSB7XG4gIGNhbGN1bGF0aW9uS2V5OiBzdHJpbmdcbiAgY2h1cmNoOiBDaHVyY2hLZXlzXG59XG5cbmNvbnN0IGNpcmNsZUNsYXNzID0gY3NzYFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDUwJTtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxuYFxuXG5jb25zdCBsYWJlbHMgPSB7XG4gIHR3aXR0ZXJGb2xsb3dlcnM6ICdUd2l0dGVyIEZvbGxvd2VycycsXG4gIGF0dGVuZGVlczogJ0NodXJjaCBBdHRlbmRpZXMnLFxuICBwb2RjYXN0UmV2aWV3czogJ1BvZGNhc3QgUmV2aWV3cycsXG59XG5cbmNvbnN0IEluZmx1ZW5jZUNoYXJ0OiBSZWFjdC5GQzxJbmZsdWVuY2VDaGFydFByb3BzPiA9ICh7IGNhbGN1bGF0aW9uS2V5LCBjaHVyY2ggfSkgPT4ge1xuICBjb25zdCByb290ID0geyBjaGlsZHJlbjogT2JqZWN0LnZhbHVlcyhjaHVyY2hlcykgfVxuICBjb25zdCBoID0gaGllcmFyY2h5KHJvb3QpLnN1bSgoZCkgPT4gZFtjYWxjdWxhdGlvbktleV0pXG4gIGNvbnN0IHBhY2tlZERhdGEgPSBwYWNrKCkuc2l6ZShbMTAwLCAxMDBdKShoKVxuICBDaHVyY2hLZXlzLldhdGVybWFya1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICA8dGV4dFxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMCAyMClcIlxuICAgICAgICAgIGZvbnRTaXplPVwiMTBcIlxuICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgIGZvbnRGYW1pbHk9XCJueXRmcmFua2xpblwiXG4gICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxzW2NhbGN1bGF0aW9uS2V5XX1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgICB7cGFja2VkRGF0YS5sZWF2ZXMoKS5tYXAoKG5vZGUsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NpcmNsZUNsYXNzfVxuICAgICAgICAgICAgICByPXtub2RlLnJ9XG4gICAgICAgICAgICAgIGtleT17bm9kZS5kYXRhLmtleX1cbiAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bm9kZS54fSAke25vZGUueX0pYH1cbiAgICAgICAgICAgICAgZmlsbD17bm9kZS5kYXRhLmtleSA9PT0gY2h1cmNoID8gJ3JnYig0MCw0MCw0MCknIDogJ2dhaW5zYm9ybyd9XG4gICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZmx1ZW5jZUNoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/InfluenceChart.tsx\n");

/***/ })

})