webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/InfluenceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/InfluenceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/InfluenceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n\nvar InfluenceChart = function InfluenceChart(_ref) {\n  var _churches$church;\n\n  var calculationKey = _ref.calculationKey,\n      church = _ref.church,\n      onElementClick = _ref.onElementClick;\n  var root = {\n    children: Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"])\n  };\n  var h = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"hierarchy\"])(root).sum(function (d) {\n    return d[calculationKey];\n  });\n  var packedData = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__[\"pack\"])().size([100, 100])(h);\n  _metadata__WEBPACK_IMPORTED_MODULE_3__[\"ChurchKeys\"].Watermark;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    height: \"100%\",\n    width: \"100%\",\n    viewBox: \"0 -30 100 130\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, packedData.leaves().map(function (node) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"circle\", {\n      r: node.r,\n      key: node.data.key,\n      transform: \"translate(\".concat(node.x, \" \").concat(node.y, \")\"),\n      \"data-church\": node.data.key,\n      onClick: function onClick() {\n        return onElementClick(node.data.key);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }));\n  }), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 -18)\",\n    fontSize: \"8px\",\n    fontWeight: \"300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, labels[calculationKey]), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 -5)\",\n    fontSize: \"14px\",\n    fontWeight: \"700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, (_churches$church = _metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"][church]) === null || _churches$church === void 0 ? void 0 : _churches$church[calculationKey])));\n};\n\n_c = InfluenceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfluenceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"InfluenceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4P2NhY2UiXSwibmFtZXMiOlsibGFiZWxzIiwidHdpdHRlckZvbGxvd2VycyIsImNodXJjaFR3aXR0ZXJGb2xsb3dlcnMiLCJhdHRlbmRlZXMiLCJwb2RjYXN0UmV2aWV3cyIsImxhYmVsQ2xhc3MiLCJjc3MiLCJJbmZsdWVuY2VDaGFydCIsImNhbGN1bGF0aW9uS2V5IiwiY2h1cmNoIiwib25FbGVtZW50Q2xpY2siLCJyb290IiwiY2hpbGRyZW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJjaHVyY2hlcyIsImgiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwicGFja2VkRGF0YSIsInBhY2siLCJzaXplIiwiQ2h1cmNoS2V5cyIsIldhdGVybWFyayIsImxlYXZlcyIsIm1hcCIsIm5vZGUiLCJyIiwiZGF0YSIsImtleSIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWNBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxrQkFBZ0IsRUFBRSxvQkFETDtBQUViQyx3QkFBc0IsRUFBRSxvQkFGWDtBQUdiQyxXQUFTLEVBQUUsa0JBSEU7QUFJYkMsZ0JBQWMsRUFBRTtBQUpILENBQWY7QUFPQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFILG1CQUFoQjs7QUFLQSxJQUFNQyxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUloRDtBQUFBOztBQUFBLE1BSEpDLGNBR0ksUUFISkEsY0FHSTtBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLGNBQ0ksUUFESkEsY0FDSTtBQUNKLE1BQU1DLElBQUksR0FBRztBQUFFQyxZQUFRLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZDtBQUFaLEdBQWI7QUFDQSxNQUFNQyxDQUFDLEdBQUdDLDhEQUFTLENBQUNOLElBQUQsQ0FBVCxDQUFnQk8sR0FBaEIsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ1gsY0FBRCxDQUFSO0FBQUEsR0FBcEIsQ0FBVjtBQUNBLE1BQU1ZLFVBQVUsR0FBR0MseURBQUksR0FBR0MsSUFBUCxDQUFZLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBWixFQUF3Qk4sQ0FBeEIsQ0FBbkI7QUFDQU8sc0RBQVUsQ0FBQ0MsU0FBWDtBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUMsTUFBekI7QUFBZ0MsV0FBTyxFQUFDLGVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osVUFBVSxDQUFDSyxNQUFYLEdBQW9CQyxHQUFwQixDQUNDLFVBQUNDLElBQUQsRUFBaUM7QUFDL0IsV0FDRSxtRUFDRTtBQUNFLE9BQUMsRUFBRUEsSUFBSSxDQUFDQyxDQURWO0FBRUUsU0FBRyxFQUFFRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FGakI7QUFHRSxlQUFTLHNCQUFlSCxJQUFJLENBQUNJLENBQXBCLGNBQXlCSixJQUFJLENBQUNLLENBQTlCLE1BSFg7QUFJRSxxQkFBYUwsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBSnpCO0FBS0UsYUFBTyxFQUFFO0FBQUEsZUFBTXBCLGNBQWMsQ0FBQ2lCLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxHQUFYLENBQXBCO0FBQUEsT0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQVdELEdBYkYsQ0FESCxFQWdCRTtBQUFNLGFBQVMsRUFBRXpCLFVBQWpCO0FBQTZCLGFBQVMsRUFBQyxrQkFBdkM7QUFBMEQsWUFBUSxFQUFDLEtBQW5FO0FBQXlFLGNBQVUsRUFBQyxLQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLE1BQU0sQ0FBQ1EsY0FBRCxDQURULENBaEJGLEVBb0JFO0FBQU0sYUFBUyxFQUFFSCxVQUFqQjtBQUE2QixhQUFTLEVBQUMsaUJBQXZDO0FBQXlELFlBQVEsRUFBQyxNQUFsRTtBQUF5RSxjQUFVLEVBQUMsS0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDR1Usa0RBQVEsQ0FBQ04sTUFBRCxDQURYLHFEQUNHLGlCQUFtQkQsY0FBbkIsQ0FESCxDQXBCRixDQURGLENBREY7QUE0QkQsQ0FyQ0Q7O0tBQU1ELGM7QUF1Q1NBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvSW5mbHVlbmNlQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFjaywgaGllcmFyY2h5LCBIaWVyYXJjaHlDaXJjdWxhckxpbmssIEhpZXJhcmNoeUNpcmN1bGFyTm9kZSB9IGZyb20gJ2QzLWhpZXJhcmNoeSdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi9tZXRhZGF0YSdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbnR5cGUgSW5mbHVlbmNlQ2hhcnRQcm9wcyA9IHtcbiAgY2FsY3VsYXRpb25LZXk6IHN0cmluZ1xuICBjaHVyY2g6IENodXJjaEtleXNcbiAgb25FbGVtZW50Q2xpY2s6IChkYXRhOiBzdHJpbmcpID0+IHZvaWRcbn1cblxudHlwZSBMZWFmID0ge1xuICBkYXRhOiB7XG4gICAga2V5OiBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBsYWJlbHMgPSB7XG4gIHR3aXR0ZXJGb2xsb3dlcnM6ICdGb2xsb3dlcnMgKHBhc3RvciknLFxuICBjaHVyY2hUd2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChjaHVyY2gpJyxcbiAgYXR0ZW5kZWVzOiAnQ2h1cmNoIEF0dGVuZGVlcycsXG4gIHBvZGNhc3RSZXZpZXdzOiAnUG9kY2FzdCBSZXZpZXdzJyxcbn1cblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IG55dGZyYW5rbGluO1xuYFxuXG5jb25zdCBJbmZsdWVuY2VDaGFydDogUmVhY3QuRkM8SW5mbHVlbmNlQ2hhcnRQcm9wcz4gPSAoe1xuICBjYWxjdWxhdGlvbktleSxcbiAgY2h1cmNoLFxuICBvbkVsZW1lbnRDbGljayxcbn0pID0+IHtcbiAgY29uc3Qgcm9vdCA9IHsgY2hpbGRyZW46IE9iamVjdC52YWx1ZXMoY2h1cmNoZXMpIH1cbiAgY29uc3QgaCA9IGhpZXJhcmNoeShyb290KS5zdW0oKGQpID0+IGRbY2FsY3VsYXRpb25LZXldKVxuICBjb25zdCBwYWNrZWREYXRhID0gcGFjaygpLnNpemUoWzEwMCwgMTAwXSkoaClcbiAgQ2h1cmNoS2V5cy5XYXRlcm1hcmtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICA8c3ZnIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAtMzAgMTAwIDEzMFwiPlxuICAgICAgICB7cGFja2VkRGF0YS5sZWF2ZXMoKS5tYXAoXG4gICAgICAgICAgKG5vZGUpOiBIaWVyYXJjaHlDaXJjdWxhck5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICByPXtub2RlLnJ9XG4gICAgICAgICAgICAgICAgICBrZXk9e25vZGUuZGF0YS5rZXl9XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtub2RlLnh9ICR7bm9kZS55fSlgfVxuICAgICAgICAgICAgICAgICAgZGF0YS1jaHVyY2g9e25vZGUuZGF0YS5rZXl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkVsZW1lbnRDbGljayhub2RlLmRhdGEua2V5KX1cbiAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMTgpXCIgZm9udFNpemU9XCI4cHhcIiBmb250V2VpZ2h0PVwiMzAwXCI+XG4gICAgICAgICAge2xhYmVsc1tjYWxjdWxhdGlvbktleV19XG4gICAgICAgIDwvdGV4dD5cblxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC01KVwiIGZvbnRTaXplPVwiMTRweFwiIGZvbnRXZWlnaHQ9XCI3MDBcIj5cbiAgICAgICAgICB7Y2h1cmNoZXNbY2h1cmNoXT8uW2NhbGN1bGF0aW9uS2V5XX1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mbHVlbmNlQ2hhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/InfluenceChart.tsx\n");

/***/ })

})