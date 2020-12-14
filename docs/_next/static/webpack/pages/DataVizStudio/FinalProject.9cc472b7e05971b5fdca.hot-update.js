webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject",{

/***/ "./components/FinalProject/SubstanceChart.tsx":
/*!****************************************************!*\
  !*** ./components/FinalProject/SubstanceChart.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ \"./components/FinalProject/metadata.ts\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n/* harmony import */ var _Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Map/LogoMask */ \"./components/FinalProject/Map/LogoMask.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/210522/code/data-viz-fall-2020/dv-studio/components/FinalProject/SubstanceChart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  text-transform: uppercase;\\n  font-family: nytfranklin;\\n  font-size: 1.75px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  transition: opacity 300ms ease;\\n  opacity: 50%;\\n  &:hover {\\n    opacity: 90%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar circleClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\nvar labels = {\n  twitterFollowers: 'Followers (pastor)',\n  churchTwitterFollowers: 'Followers (church)',\n  attendees: 'Church Attendees',\n  podcastReviews: 'Podcast Reviews'\n};\nvar labelClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n\nvar SubstanceChart = function SubstanceChart(_ref) {\n  var selectedChurch = _ref.selectedChurch;\n  return __jsx(\"div\", {\n    style: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 75 40\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"defs\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"watermark\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"tvc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"covenant\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"prestonwood\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fellowship\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(_Map_LogoMask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    church: \"fbc\",\n    size: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  })), __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 2)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"How long did he talk about it?\"), __jsx(\"g\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n\n    var Logo = function Logo() {\n      return __jsx(\"rect\", {\n        mask: \"url(#\".concat(church.key, \"LogoMask)\"),\n        fill: selectedChurch === _metadata__WEBPACK_IMPORTED_MODULE_3__[\"ChurchKeys\"].Fellowship ? 'red' : 'grey',\n        height: \"2\",\n        width: \"2\",\n        \"data-church\": \"fellowship\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      });\n    };\n\n    if (church.minutes.length === 1) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Logo, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 19\n        }\n      }), __jsx(\"rect\", {\n        height: 2,\n        width: church.minutes[0].length,\n        transform: \"translate(0 \".concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 19\n        }\n      }));\n    }\n\n    return church.minutes.map(function (occasion, j) {\n      return __jsx(\"rect\", {\n        key: 'thing' + j,\n        height: 2,\n        width: occasion.length,\n        transform: \"translate(\".concat(church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0, \" \").concat(verticalCoordinate, \")\"),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }\n      });\n    });\n  })), __jsx(\"g\", {\n    transform: \"translate(0 20)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    className: labelClass,\n    transform: \"translate(0 1)\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, \"How did he talk about it?\"), Object.values(_metadata__WEBPACK_IMPORTED_MODULE_3__[\"churches\"]).map(function (church, i) {\n    var verticalCoordinate = 2.5 * i + 3;\n    var dots = [];\n\n    var addDot = function addDot(category) {\n      return function (_ref2) {\n        var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n            premise = _ref3[0],\n            n = _ref3[1];\n\n        console.log(category);\n        new Array(n).fill(true).forEach(function () {\n          return dots.push(__jsx(\"circle\", {\n            transform: \"translate(\".concat(dots.length * 2.5 + 1, \" \").concat(verticalCoordinate, \")\"),\n            r: \"1\",\n            fill: category === 'problematicStatements' ? 'var(--problematic)' : 'var(--productive)',\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 21\n            }\n          }));\n        });\n      };\n    };\n\n    Object.entries(church.problematicStatements).forEach(addDot('problematicStatements'));\n    Object.entries(church.notAsProblematicStatements).forEach(addDot('notAsProblematicStatements'));\n    return dots;\n  }))));\n};\n\n_c = SubstanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubstanceChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"SubstanceChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU3Vic3RhbmNlQ2hhcnQudHN4P2I4ZDkiXSwibmFtZXMiOlsiY2lyY2xlQ2xhc3MiLCJjc3MiLCJsYWJlbHMiLCJ0d2l0dGVyRm9sbG93ZXJzIiwiY2h1cmNoVHdpdHRlckZvbGxvd2VycyIsImF0dGVuZGVlcyIsInBvZGNhc3RSZXZpZXdzIiwibGFiZWxDbGFzcyIsIlN1YnN0YW5jZUNoYXJ0Iiwic2VsZWN0ZWRDaHVyY2giLCJPYmplY3QiLCJ2YWx1ZXMiLCJjaHVyY2hlcyIsIm1hcCIsImNodXJjaCIsImkiLCJ2ZXJ0aWNhbENvb3JkaW5hdGUiLCJMb2dvIiwia2V5IiwiQ2h1cmNoS2V5cyIsIkZlbGxvd3NoaXAiLCJtaW51dGVzIiwibGVuZ3RoIiwib2NjYXNpb24iLCJqIiwiZG90cyIsImFkZERvdCIsImNhdGVnb3J5IiwicHJlbWlzZSIsIm4iLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmaWxsIiwiZm9yRWFjaCIsInB1c2giLCJlbnRyaWVzIiwicHJvYmxlbWF0aWNTdGF0ZW1lbnRzIiwibm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBT0EsSUFBTUEsV0FBVyxHQUFHQyx5REFBSCxtQkFBakI7QUFRQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsa0JBQWdCLEVBQUUsb0JBREw7QUFFYkMsd0JBQXNCLEVBQUUsb0JBRlg7QUFHYkMsV0FBUyxFQUFFLGtCQUhFO0FBSWJDLGdCQUFjLEVBQUU7QUFKSCxDQUFmO0FBT0EsSUFBTUMsVUFBVSxHQUFHTix5REFBSCxvQkFBaEI7O0FBT0EsSUFBTU8sY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsT0FBd0I7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQ3ZELFNBQ0U7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsV0FBakI7QUFBNkIsUUFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsS0FBakI7QUFBdUIsUUFBSSxFQUFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsVUFBakI7QUFBNEIsUUFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsYUFBakI7QUFBK0IsUUFBSSxFQUFDLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsWUFBakI7QUFBOEIsUUFBSSxFQUFDLEdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUMsS0FBakI7QUFBdUIsUUFBSSxFQUFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0U7QUFBTSxhQUFTLEVBQUVGLFVBQWpCO0FBQTZCLGFBQVMsRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FURixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csTUFBTSxDQUFDQyxNQUFQLENBQWNDLGtEQUFkLEVBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUMxQyxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNRCxDQUFOLEdBQVUsQ0FBckM7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxhQUNYO0FBQ0UsWUFBSSxpQkFBVUgsTUFBTSxDQUFDSSxHQUFqQixjQUROO0FBRUUsWUFBSSxFQUFFVCxjQUFjLEtBQUtVLG9EQUFVLENBQUNDLFVBQTlCLEdBQTJDLEtBQTNDLEdBQW1ELE1BRjNEO0FBR0UsY0FBTSxFQUFDLEdBSFQ7QUFJRSxhQUFLLEVBQUMsR0FKUjtBQUtFLHVCQUFZLFlBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURXO0FBQUEsS0FBYjs7QUFTQSxRQUFJTixNQUFNLENBQUNPLE9BQVAsQ0FBZUMsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUNFLG1FQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUNFLGNBQU0sRUFBRSxDQURWO0FBRUUsYUFBSyxFQUFFUixNQUFNLENBQUNPLE9BQVAsQ0FBZSxDQUFmLEVBQWtCQyxNQUYzQjtBQUdFLGlCQUFTLHdCQUFpQk4sa0JBQWpCLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREY7QUFVRDs7QUFFRCxXQUFPRixNQUFNLENBQUNPLE9BQVAsQ0FBZVIsR0FBZixDQUFtQixVQUFDVSxRQUFELEVBQVdDLENBQVgsRUFBaUI7QUFDekMsYUFDRTtBQUNFLFdBQUcsRUFBRSxVQUFVQSxDQURqQjtBQUVFLGNBQU0sRUFBRSxDQUZWO0FBR0UsYUFBSyxFQUFFRCxRQUFRLENBQUNELE1BSGxCO0FBSUUsaUJBQVMsc0JBQ1BSLE1BQU0sQ0FBQ08sT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsSUFBd0JWLE1BQU0sQ0FBQ08sT0FBUCxDQUFlRyxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JGLE1BQXRCLEdBQStCLEdBQXZELEdBQTZELENBRHRELGNBRUxOLGtCQUZLLE1BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBVUQsS0FYTSxDQUFQO0FBWUQsR0FwQ0EsQ0FESCxDQWJGLEVBb0RFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVQsVUFBakI7QUFBNkIsYUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBSUdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBZCxFQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDMUMsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTUQsQ0FBTixHQUFVLENBQXJDO0FBQ0EsUUFBTVUsSUFBSSxHQUFHLEVBQWI7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRDtBQUFBLGFBQWMsaUJBQWtCO0FBQUE7QUFBQSxZQUFoQkMsT0FBZ0I7QUFBQSxZQUFQQyxDQUFPOztBQUM3Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxZQUFJSyxLQUFKLENBQVVILENBQVYsRUFDR0ksSUFESCxDQUNRLElBRFIsRUFFR0MsT0FGSCxDQUVXO0FBQUEsaUJBQ1BULElBQUksQ0FBQ1UsSUFBTCxDQUNFO0FBQ0UscUJBQVMsc0JBQWVWLElBQUksQ0FBQ0gsTUFBTCxHQUFjLEdBQWQsR0FBb0IsQ0FBbkMsY0FBd0NOLGtCQUF4QyxNQURYO0FBRUUsYUFBQyxFQUFDLEdBRko7QUFHRSxnQkFBSSxFQUNGVyxRQUFRLEtBQUssdUJBQWIsR0FDSSxvQkFESixHQUVJLG1CQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURPO0FBQUEsU0FGWDtBQWVELE9BakJjO0FBQUEsS0FBZjs7QUFrQkFqQixVQUFNLENBQUMwQixPQUFQLENBQWV0QixNQUFNLENBQUN1QixxQkFBdEIsRUFBNkNILE9BQTdDLENBQXFEUixNQUFNLENBQUMsdUJBQUQsQ0FBM0Q7QUFDQWhCLFVBQU0sQ0FBQzBCLE9BQVAsQ0FBZXRCLE1BQU0sQ0FBQ3dCLDBCQUF0QixFQUFrREosT0FBbEQsQ0FDRVIsTUFBTSxDQUFDLDRCQUFELENBRFI7QUFHQSxXQUFPRCxJQUFQO0FBQ0QsR0EzQkEsQ0FKSCxDQXBERixDQURGLENBREY7QUEwRkQsQ0EzRkQ7O0tBQU1qQixjO0FBNkZTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L1N1YnN0YW5jZUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhY2ssIGhpZXJhcmNoeSB9IGZyb20gJ2QzLWhpZXJhcmNoeSdcbmltcG9ydCB7IENodXJjaEtleXMsIGNodXJjaGVzIH0gZnJvbSAnLi9tZXRhZGF0YSdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAncHJldHR5LWxpZ2h0cydcbmltcG9ydCBMb2dvTWFzayBmcm9tICcuL01hcC9Mb2dvTWFzaydcblxudHlwZSBJbmZsdWVuY2VDaGFydFByb3BzID0ge1xuICBjYWxjdWxhdGlvbktleTogc3RyaW5nXG4gIGNodXJjaDogQ2h1cmNoS2V5c1xufVxuXG5jb25zdCBjaXJjbGVDbGFzcyA9IGNzc2BcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xuICBvcGFjaXR5OiA1MCU7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDkwJTtcbiAgfVxuYFxuXG5jb25zdCBsYWJlbHMgPSB7XG4gIHR3aXR0ZXJGb2xsb3dlcnM6ICdGb2xsb3dlcnMgKHBhc3RvciknLFxuICBjaHVyY2hUd2l0dGVyRm9sbG93ZXJzOiAnRm9sbG93ZXJzIChjaHVyY2gpJyxcbiAgYXR0ZW5kZWVzOiAnQ2h1cmNoIEF0dGVuZGVlcycsXG4gIHBvZGNhc3RSZXZpZXdzOiAnUG9kY2FzdCBSZXZpZXdzJyxcbn1cblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzc2BcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IG55dGZyYW5rbGluO1xuICBmb250LXNpemU6IDEuNzVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuY29uc3QgU3Vic3RhbmNlQ2hhcnQ6IFJlYWN0LkZDID0gKHsgc2VsZWN0ZWRDaHVyY2ggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA3NSA0MFwiPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwid2F0ZXJtYXJrXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJ0dmNcIiBzaXplPVwiMlwiPjwvTG9nb01hc2s+XG4gICAgICAgICAgPExvZ29NYXNrIGNodXJjaD1cImNvdmVuYW50XCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICAgIDxMb2dvTWFzayBjaHVyY2g9XCJwcmVzdG9ud29vZFwiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiZmVsbG93c2hpcFwiIHNpemU9XCIyXCI+PC9Mb2dvTWFzaz5cbiAgICAgICAgICA8TG9nb01hc2sgY2h1cmNoPVwiZmJjXCIgc2l6ZT1cIjJcIj48L0xvZ29NYXNrPlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17bGFiZWxDbGFzc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMilcIj5cbiAgICAgICAgICBIb3cgbG9uZyBkaWQgaGUgdGFsayBhYm91dCBpdD9cbiAgICAgICAgPC90ZXh0PlxuXG4gICAgICAgIDxnPlxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGNodXJjaGVzKS5tYXAoKGNodXJjaCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDb29yZGluYXRlID0gMi41ICogaSArIDNcbiAgICAgICAgICAgIGNvbnN0IExvZ28gPSAoKSA9PiAoXG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgbWFzaz17YHVybCgjJHtjaHVyY2gua2V5fUxvZ29NYXNrKWB9XG4gICAgICAgICAgICAgICAgZmlsbD17c2VsZWN0ZWRDaHVyY2ggPT09IENodXJjaEtleXMuRmVsbG93c2hpcCA/ICdyZWQnIDogJ2dyZXknfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZGF0YS1jaHVyY2g9XCJmZWxsb3dzaGlwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChjaHVyY2gubWludXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExvZ28+PC9Mb2dvPlxuICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y2h1cmNoLm1pbnV0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCAke3ZlcnRpY2FsQ29vcmRpbmF0ZX0pYH1cbiAgICAgICAgICAgICAgICAgID48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNodXJjaC5taW51dGVzLm1hcCgob2NjYXNpb24sIGopID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAga2V5PXsndGhpbmcnICsgan1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtvY2Nhc2lvbi5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtcbiAgICAgICAgICAgICAgICAgICAgY2h1cmNoLm1pbnV0ZXNbaiAtIDFdID8gY2h1cmNoLm1pbnV0ZXNbaiAtIDFdLmxlbmd0aCArIDAuNSA6IDBcbiAgICAgICAgICAgICAgICAgIH0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAyMClcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEpXCI+XG4gICAgICAgICAgICBIb3cgZGlkIGhlIHRhbGsgYWJvdXQgaXQ/XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGNodXJjaGVzKS5tYXAoKGNodXJjaCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDb29yZGluYXRlID0gMi41ICogaSArIDNcbiAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXVxuXG4gICAgICAgICAgICBjb25zdCBhZGREb3QgPSAoY2F0ZWdvcnkpID0+IChbcHJlbWlzZSwgbl0pID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG5ldyBBcnJheShuKVxuICAgICAgICAgICAgICAgIC5maWxsKHRydWUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKCkgPT5cbiAgICAgICAgICAgICAgICAgIGRvdHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RvdHMubGVuZ3RoICogMi41ICsgMX0gJHt2ZXJ0aWNhbENvb3JkaW5hdGV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09ICdwcm9ibGVtYXRpY1N0YXRlbWVudHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3ZhcigtLXByb2JsZW1hdGljKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndmFyKC0tcHJvZHVjdGl2ZSknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5wcm9ibGVtYXRpY1N0YXRlbWVudHMpLmZvckVhY2goYWRkRG90KCdwcm9ibGVtYXRpY1N0YXRlbWVudHMnKSlcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNodXJjaC5ub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cykuZm9yRWFjaChcbiAgICAgICAgICAgICAgYWRkRG90KCdub3RBc1Byb2JsZW1hdGljU3RhdGVtZW50cycpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZG90c1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGFuY2VDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FinalProject/SubstanceChart.tsx\n");

/***/ })

})