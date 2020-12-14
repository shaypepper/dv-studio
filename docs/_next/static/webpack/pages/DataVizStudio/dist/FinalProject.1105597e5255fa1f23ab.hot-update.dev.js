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

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/InfluenceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-size: 8px;\\n  font-family: nytfranklin;\\n  font-weight: 600;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Twitter Followers',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar InfluenceChart = function InfluenceChart(_ref) {\n  var calculationKey = _ref.calculationKey,\n      church = _ref.church;\n  var root = {\n    children: Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"])\n  };\n  var h = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"hierarchy\"])(root).sum(function (d) {\n    return d[calculationKey];\n  });\n  var packedData = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"pack\"])().size([100, 100])(h);\n  _metadata__WEBPACK_IMPORTED_MODULE_3__[\"ChurchKeys\"].Watermark;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 -10 100 110\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 -2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, labels[calculationKey]), packedData.leaves().map(function (node, i) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, node.data.key === church && __jsx(\"text\", {\n      className: labelClass,\n      transform: \"translate(0 -2)\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }, labels[calculationKey]), __jsx(\"circle\", {\n      className: circleClass,\n      r: node.r,\n      key: node.data.key,\n      transform: \"translate(\".concat(node.x, \" \").concat(node.y, \")\"),\n      fill: node.data.key === church ? 'rgb(40,40,40)' : 'gainsboro',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_c = InfluenceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfluenceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"InfluenceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4P2NhY2UiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiYXR0ZW5kZWVzIiwicG9kY2FzdFJldmlld3MiLCJsYWJlbENsYXNzIiwiSW5mbHVlbmNlQ2hhcnQiLCJjYWxjdWxhdGlvbktleSIsImNodXJjaCIsInJvb3QiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNodXJjaGVzIiwiaCIsImhpZXJhcmNoeSIsInN1bSIsImQiLCJwYWNrZWREYXRhIiwicGFjayIsInNpemUiLCJDaHVyY2hLZXlzIiwiV2F0ZXJtYXJrIiwibGVhdmVzIiwibWFwIiwibm9kZSIsImkiLCJkYXRhIiwia2V5IiwiciIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFILG1CQUFqQjtBQVFBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxtQkFETDtBQUViQyxXQUFTLEVBQUUsa0JBRkU7QUFHYkMsZ0JBQWMsRUFBRTtBQUhILENBQWY7QUFNQSxJQUFNQyxVQUFVLEdBQUdMLHlEQUFILG9CQUFoQjs7QUFPQSxJQUFNTSxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUFnQztBQUFBLE1BQTdCQyxjQUE2QixRQUE3QkEsY0FBNkI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcEYsTUFBTUMsSUFBSSxHQUFHO0FBQUVDLFlBQVEsRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGtEQUFkO0FBQVosR0FBYjtBQUNBLE1BQU1DLENBQUMsR0FBR0MsOERBQVMsQ0FBQ04sSUFBRCxDQUFULENBQWdCTyxHQUFoQixDQUFvQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDVixjQUFELENBQVI7QUFBQSxHQUFwQixDQUFWO0FBQ0EsTUFBTVcsVUFBVSxHQUFHQyx5REFBSSxHQUFHQyxJQUFQLENBQVksQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFaLEVBQXdCTixDQUF4QixDQUFuQjtBQUNBTyxzREFBVSxDQUFDQyxTQUFYO0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFVBQU0sRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFnQyxXQUFPLEVBQUMsZUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFakIsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGlCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLE1BQU0sQ0FBQ00sY0FBRCxDQURULENBREYsRUFLR1csVUFBVSxDQUFDSyxNQUFYLEdBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNwQyxXQUNFLG1FQUNHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FBVixLQUFrQnBCLE1BQWxCLElBQ0M7QUFBTSxlQUFTLEVBQUVILFVBQWpCO0FBQTZCLGVBQVMsRUFBQyxpQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixNQUFNLENBQUNNLGNBQUQsQ0FEVCxDQUZKLEVBTUU7QUFDRSxlQUFTLEVBQUVSLFdBRGI7QUFFRSxPQUFDLEVBQUUwQixJQUFJLENBQUNJLENBRlY7QUFHRSxTQUFHLEVBQUVKLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxHQUhqQjtBQUlFLGVBQVMsc0JBQWVILElBQUksQ0FBQ0ssQ0FBcEIsY0FBeUJMLElBQUksQ0FBQ00sQ0FBOUIsTUFKWDtBQUtFLFVBQUksRUFBRU4sSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBQVYsS0FBa0JwQixNQUFsQixHQUEyQixlQUEzQixHQUE2QyxXQUxyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FERjtBQWdCRCxHQWpCQSxDQUxILENBREYsQ0FERjtBQTRCRCxDQWpDRDs7S0FBTUYsYztBQW1DU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9JbmZsdWVuY2VDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYWNrLCBoaWVyYXJjaHkgfSBmcm9tICdkMy1oaWVyYXJjaHknXG5pbXBvcnQgeyBDaHVyY2hLZXlzLCBjaHVyY2hlcyB9IGZyb20gJy4vbWV0YWRhdGEnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbn1cblxuY29uc3QgY2lyY2xlQ2xhc3MgPSBjc3NgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgb3BhY2l0eTogNTAlO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxMDAlO1xuICB9XG5gXG5cbmNvbnN0IGxhYmVscyA9IHtcbiAgdHdpdHRlckZvbGxvd2VyczogJ1R3aXR0ZXIgRm9sbG93ZXJzJyxcbiAgYXR0ZW5kZWVzOiAnQ2h1cmNoIEF0dGVuZGVlcycsXG4gIHBvZGNhc3RSZXZpZXdzOiAnUG9kY2FzdCBSZXZpZXdzJyxcbn1cblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBueXRmcmFua2xpbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbmBcblxuY29uc3QgSW5mbHVlbmNlQ2hhcnQ6IFJlYWN0LkZDPEluZmx1ZW5jZUNoYXJ0UHJvcHM+ID0gKHsgY2FsY3VsYXRpb25LZXksIGNodXJjaCB9KSA9PiB7XG4gIGNvbnN0IHJvb3QgPSB7IGNoaWxkcmVuOiBPYmplY3QudmFsdWVzKGNodXJjaGVzKSB9XG4gIGNvbnN0IGggPSBoaWVyYXJjaHkocm9vdCkuc3VtKChkKSA9PiBkW2NhbGN1bGF0aW9uS2V5XSlcbiAgY29uc3QgcGFja2VkRGF0YSA9IHBhY2soKS5zaXplKFsxMDAsIDEwMF0pKGgpXG4gIENodXJjaEtleXMuV2F0ZXJtYXJrXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgPHN2ZyBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgLTEwIDEwMCAxMTBcIj5cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMilcIj5cbiAgICAgICAgICB7bGFiZWxzW2NhbGN1bGF0aW9uS2V5XX1cbiAgICAgICAgPC90ZXh0PlxuXG4gICAgICAgIHtwYWNrZWREYXRhLmxlYXZlcygpLm1hcCgobm9kZSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7bm9kZS5kYXRhLmtleSA9PT0gY2h1cmNoICYmIChcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0yKVwiPlxuICAgICAgICAgICAgICAgICAge2xhYmVsc1tjYWxjdWxhdGlvbktleV19XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaXJjbGVDbGFzc31cbiAgICAgICAgICAgICAgICByPXtub2RlLnJ9XG4gICAgICAgICAgICAgICAga2V5PXtub2RlLmRhdGEua2V5fVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke25vZGUueH0gJHtub2RlLnl9KWB9XG4gICAgICAgICAgICAgICAgZmlsbD17bm9kZS5kYXRhLmtleSA9PT0gY2h1cmNoID8gJ3JnYig0MCw0MCw0MCknIDogJ2dhaW5zYm9ybyd9XG4gICAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZsdWVuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/InfluenceChart.tsx\n");
    /***/
  }
});