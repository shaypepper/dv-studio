"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/metadata.ts":
  /*!*********************************************!*\
    !*** ./components/FinalProject/metadata.ts ***!
    \*********************************************/

  /*! exports provided: ChurchKeys, churches, default */

  /***/
  function componentsFinalProjectMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChurchKeys\", function() { return ChurchKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"churches\", function() { return churches; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _sermons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sermons */ \"./components/FinalProject/sermons/index.ts\");\n\n\nvar _churches;\n\n\nvar ChurchKeys;\n\n(function (ChurchKeys) {\n  ChurchKeys[\"Watermark\"] = \"watermark\";\n  ChurchKeys[\"TVC\"] = \"tvc\";\n  ChurchKeys[\"FBC\"] = \"fbc\";\n  ChurchKeys[\"Prestonwood\"] = \"prestonwood\";\n  ChurchKeys[\"Covenant\"] = \"covenant\";\n  ChurchKeys[\"Fellowship\"] = \"fellowship\";\n})(ChurchKeys || (ChurchKeys = {}));\n\nvar churches = (_churches = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.TVC, {\n  name: 'The Village Church',\n  key: ChurchKeys.TVC,\n  pastor: 'Matt Chandler',\n  twitterFollowers: 417500,\n  churchTwitterFollowers: 16800,\n  attendees: 10156,\n  city: 'Dallas, TX',\n  podcastReviews: 2200,\n  problematicStatements: {\n    radical: 3\n  },\n  notAsProblematicStatements: {\n    blackLivesMatter: 15\n  },\n  minutes: [{\n    type: 'panel',\n    length: 42\n  }, {\n    type: 'sermon',\n    length: 30\n  }],\n  denomination: 'SBC'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.Watermark, {\n  name: 'Watermark Church',\n  key: ChurchKeys.Watermark,\n  pastor: 'Todd Wagner',\n  twitterFollowers: 19000,\n  churchTwitterFollowers: 16800,\n  attendees: 8876,\n  city: 'Dallas, TX',\n  podcastReviews: 254,\n  problematicStatements: {\n    radical: 5\n  },\n  notAsProblematicStatements: {\n    blackLivesMatter: 2\n  },\n  minutes: [{\n    type: 'sermon',\n    length: 45\n  }],\n  denomination: 'Non-denominational'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.Covenant, {\n  key: ChurchKeys.Covenant,\n  name: 'Covenant Church',\n  pastor: 'Mike Hayes',\n  twitterFollowers: 11500,\n  churchTwitterFollowers: 5560,\n  attendees: 11000,\n  city: 'Carrollton, TX',\n  podcastReviews: 45,\n  problematicStatements: {\n    radical: 7\n  },\n  notAsProblematicStatements: {\n    blackLivesMatter: 2\n  },\n  minutes: [{\n    type: 'sermon',\n    length: 36\n  }],\n  denomination: 'Non-denominational'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.Prestonwood, {\n  key: ChurchKeys.Prestonwood,\n  name: 'Prestonwood Baptist Church',\n  pastor: 'Jarrett Stephens',\n  twitterFollowers: 51700,\n  churchTwitterFollowers: 11400,\n  attendees: 15815,\n  city: 'Plano, TX',\n  podcastReviews: 24,\n  problematicStatements: {\n    radical: 1\n  },\n  notAsProblematicStatements: {\n    blackLivesMatter: 4\n  },\n  minutes: [{\n    type: _sermons__WEBPACK_IMPORTED_MODULE_1__[\"watermark\"],\n    length: 32\n  }],\n  denomination: 'SBC'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.Fellowship, {\n  key: ChurchKeys.Fellowship,\n  name: 'Fellowship Church',\n  pastor: 'Ed Young',\n  twitterFollowers: 287600,\n  churchTwitterFollowers: 12200,\n  attendees: 24162,\n  city: 'Grapevine, TX',\n  podcastReviews: 9,\n  problematicStatements: {\n    radical: 4\n  },\n  notAsProblematicStatements: {\n    blackLivesMatter: 10\n  },\n  minutes: [{\n    type: 'video',\n    length: 2.5\n  }],\n  denomination: 'SBC'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_churches, ChurchKeys.FBC, {\n  key: ChurchKeys.FBC,\n  name: 'First Baptist Dallas',\n  pastor: 'Robert Jeffress',\n  twitterFollowers: 114300,\n  churchTwitterFollowers: 10900,\n  attendees: 2632,\n  city: 'Dallas, TX',\n  podcastReviews: 200,\n  problematicStatements: {},\n  notAsProblematicStatements: {},\n  minutes: [{\n    type: _sermons__WEBPACK_IMPORTED_MODULE_1__[\"watermark\"],\n    length: 0\n  }],\n  denomination: 'SBC'\n}), _churches);\n/* harmony default export */ __webpack_exports__[\"default\"] = (churches);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvbWV0YWRhdGEudHM/YWYxMCJdLCJuYW1lcyI6WyJDaHVyY2hLZXlzIiwiY2h1cmNoZXMiLCJUVkMiLCJuYW1lIiwia2V5IiwicGFzdG9yIiwidHdpdHRlckZvbGxvd2VycyIsImNodXJjaFR3aXR0ZXJGb2xsb3dlcnMiLCJhdHRlbmRlZXMiLCJjaXR5IiwicG9kY2FzdFJldmlld3MiLCJwcm9ibGVtYXRpY1N0YXRlbWVudHMiLCJyYWRpY2FsIiwibm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHMiLCJibGFja0xpdmVzTWF0dGVyIiwibWludXRlcyIsInR5cGUiLCJsZW5ndGgiLCJkZW5vbWluYXRpb24iLCJXYXRlcm1hcmsiLCJDb3ZlbmFudCIsIlByZXN0b253b29kIiwic2VybW9uIiwiRmVsbG93c2hpcCIsIkZCQyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFLQSxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0dBQUFBLFUsS0FBQUEsVTs7QUFRTCxJQUFNQyxRQUFRLHlIQUNsQkQsVUFBVSxDQUFDRSxHQURPLEVBQ0Q7QUFDaEJDLE1BQUksRUFBRSxvQkFEVTtBQUVoQkMsS0FBRyxFQUFFSixVQUFVLENBQUNFLEdBRkE7QUFHaEJHLFFBQU0sRUFBRSxlQUhRO0FBSWhCQyxrQkFBZ0IsRUFBRSxNQUpGO0FBS2hCQyx3QkFBc0IsRUFBRSxLQUxSO0FBTWhCQyxXQUFTLEVBQUUsS0FOSztBQU9oQkMsTUFBSSxFQUFFLFlBUFU7QUFRaEJDLGdCQUFjLEVBQUUsSUFSQTtBQVNoQkMsdUJBQXFCLEVBQUU7QUFDckJDLFdBQU8sRUFBRTtBQURZLEdBVFA7QUFZaEJDLDRCQUEwQixFQUFFO0FBQzFCQyxvQkFBZ0IsRUFBRTtBQURRLEdBWlo7QUFlaEJDLFNBQU8sRUFBRSxDQUNQO0FBQUVDLFFBQUksRUFBRSxPQUFSO0FBQWlCQyxVQUFNLEVBQUU7QUFBekIsR0FETyxFQUVQO0FBQUVELFFBQUksRUFBRSxRQUFSO0FBQWtCQyxVQUFNLEVBQUU7QUFBMUIsR0FGTyxDQWZPO0FBbUJoQkMsY0FBWSxFQUFFO0FBbkJFLENBREMsd0dBc0JsQmxCLFVBQVUsQ0FBQ21CLFNBdEJPLEVBc0JLO0FBQ3RCaEIsTUFBSSxFQUFFLGtCQURnQjtBQUV0QkMsS0FBRyxFQUFFSixVQUFVLENBQUNtQixTQUZNO0FBR3RCZCxRQUFNLEVBQUUsYUFIYztBQUl0QkMsa0JBQWdCLEVBQUUsS0FKSTtBQUt0QkMsd0JBQXNCLEVBQUUsS0FMRjtBQU10QkMsV0FBUyxFQUFFLElBTlc7QUFPdEJDLE1BQUksRUFBRSxZQVBnQjtBQVF0QkMsZ0JBQWMsRUFBRSxHQVJNO0FBU3RCQyx1QkFBcUIsRUFBRTtBQUNyQkMsV0FBTyxFQUFFO0FBRFksR0FURDtBQVl0QkMsNEJBQTBCLEVBQUU7QUFDMUJDLG9CQUFnQixFQUFFO0FBRFEsR0FaTjtBQWV0QkMsU0FBTyxFQUFFLENBQUM7QUFBRUMsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLFVBQU0sRUFBRTtBQUExQixHQUFELENBZmE7QUFnQnRCQyxjQUFZLEVBQUU7QUFoQlEsQ0F0Qkwsd0dBeUNsQmxCLFVBQVUsQ0FBQ29CLFFBekNPLEVBeUNJO0FBQ3JCaEIsS0FBRyxFQUFFSixVQUFVLENBQUNvQixRQURLO0FBRXJCakIsTUFBSSxFQUFFLGlCQUZlO0FBR3JCRSxRQUFNLEVBQUUsWUFIYTtBQUlyQkMsa0JBQWdCLEVBQUUsS0FKRztBQUtyQkMsd0JBQXNCLEVBQUUsSUFMSDtBQU1yQkMsV0FBUyxFQUFFLEtBTlU7QUFPckJDLE1BQUksRUFBRSxnQkFQZTtBQVFyQkMsZ0JBQWMsRUFBRSxFQVJLO0FBU3JCQyx1QkFBcUIsRUFBRTtBQUNyQkMsV0FBTyxFQUFFO0FBRFksR0FURjtBQVlyQkMsNEJBQTBCLEVBQUU7QUFDMUJDLG9CQUFnQixFQUFFO0FBRFEsR0FaUDtBQWVyQkMsU0FBTyxFQUFFLENBQUM7QUFBRUMsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLFVBQU0sRUFBRTtBQUExQixHQUFELENBZlk7QUFnQnJCQyxjQUFZLEVBQUU7QUFoQk8sQ0F6Q0osd0dBNERsQmxCLFVBQVUsQ0FBQ3FCLFdBNURPLEVBNERPO0FBQ3hCakIsS0FBRyxFQUFFSixVQUFVLENBQUNxQixXQURRO0FBRXhCbEIsTUFBSSxFQUFFLDRCQUZrQjtBQUd4QkUsUUFBTSxFQUFFLGtCQUhnQjtBQUl4QkMsa0JBQWdCLEVBQUUsS0FKTTtBQUt4QkMsd0JBQXNCLEVBQUUsS0FMQTtBQU14QkMsV0FBUyxFQUFFLEtBTmE7QUFPeEJDLE1BQUksRUFBRSxXQVBrQjtBQVF4QkMsZ0JBQWMsRUFBRSxFQVJRO0FBU3hCQyx1QkFBcUIsRUFBRTtBQUNyQkMsV0FBTyxFQUFFO0FBRFksR0FUQztBQVl4QkMsNEJBQTBCLEVBQUU7QUFDMUJDLG9CQUFnQixFQUFFO0FBRFEsR0FaSjtBQWV4QkMsU0FBTyxFQUFFLENBQUM7QUFBRUMsUUFBSSxFQUFFTSxrREFBUjtBQUFnQkwsVUFBTSxFQUFFO0FBQXhCLEdBQUQsQ0FmZTtBQWdCeEJDLGNBQVksRUFBRTtBQWhCVSxDQTVEUCx3R0E4RWxCbEIsVUFBVSxDQUFDdUIsVUE5RU8sRUE4RU07QUFDdkJuQixLQUFHLEVBQUVKLFVBQVUsQ0FBQ3VCLFVBRE87QUFFdkJwQixNQUFJLEVBQUUsbUJBRmlCO0FBR3ZCRSxRQUFNLEVBQUUsVUFIZTtBQUl2QkMsa0JBQWdCLEVBQUUsTUFKSztBQUt2QkMsd0JBQXNCLEVBQUUsS0FMRDtBQU12QkMsV0FBUyxFQUFFLEtBTlk7QUFPdkJDLE1BQUksRUFBRSxlQVBpQjtBQVF2QkMsZ0JBQWMsRUFBRSxDQVJPO0FBU3ZCQyx1QkFBcUIsRUFBRTtBQUNyQkMsV0FBTyxFQUFFO0FBRFksR0FUQTtBQVl2QkMsNEJBQTBCLEVBQUU7QUFDMUJDLG9CQUFnQixFQUFFO0FBRFEsR0FaTDtBQWV2QkMsU0FBTyxFQUFFLENBQUM7QUFBRUMsUUFBSSxFQUFFLE9BQVI7QUFBaUJDLFVBQU0sRUFBRTtBQUF6QixHQUFELENBZmM7QUFnQnZCQyxjQUFZLEVBQUU7QUFoQlMsQ0E5RU4sd0dBZ0dsQmxCLFVBQVUsQ0FBQ3dCLEdBaEdPLEVBZ0dEO0FBQ2hCcEIsS0FBRyxFQUFFSixVQUFVLENBQUN3QixHQURBO0FBRWhCckIsTUFBSSxFQUFFLHNCQUZVO0FBR2hCRSxRQUFNLEVBQUUsaUJBSFE7QUFJaEJDLGtCQUFnQixFQUFFLE1BSkY7QUFLaEJDLHdCQUFzQixFQUFFLEtBTFI7QUFNaEJDLFdBQVMsRUFBRSxJQU5LO0FBT2hCQyxNQUFJLEVBQUUsWUFQVTtBQVFoQkMsZ0JBQWMsRUFBRSxHQVJBO0FBU2hCQyx1QkFBcUIsRUFBRSxFQVRQO0FBVWhCRSw0QkFBMEIsRUFBRSxFQVZaO0FBV2hCRSxTQUFPLEVBQUUsQ0FBQztBQUFFQyxRQUFJLEVBQUVNLGtEQUFSO0FBQWdCTCxVQUFNLEVBQUU7QUFBeEIsR0FBRCxDQVhPO0FBWWhCQyxjQUFZLEVBQUU7QUFaRSxDQWhHQyxhQUFkO0FBZ0hRakIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbmFsUHJvamVjdC9tZXRhZGF0YS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhdGVybWFyayBhcyBzZXJtb24gfSBmcm9tICcuL3Nlcm1vbnMnXG5cbmV4cG9ydCBlbnVtIENodXJjaEtleXMge1xuICBXYXRlcm1hcmsgPSAnd2F0ZXJtYXJrJyxcbiAgVFZDID0gJ3R2YycsXG4gIEZCQyA9ICdmYmMnLFxuICBQcmVzdG9ud29vZCA9ICdwcmVzdG9ud29vZCcsXG4gIENvdmVuYW50ID0gJ2NvdmVuYW50JyxcbiAgRmVsbG93c2hpcCA9ICdmZWxsb3dzaGlwJyxcbn1cbmV4cG9ydCBjb25zdCBjaHVyY2hlcyA9IHtcbiAgW0NodXJjaEtleXMuVFZDXToge1xuICAgIG5hbWU6ICdUaGUgVmlsbGFnZSBDaHVyY2gnLFxuICAgIGtleTogQ2h1cmNoS2V5cy5UVkMsXG4gICAgcGFzdG9yOiAnTWF0dCBDaGFuZGxlcicsXG4gICAgdHdpdHRlckZvbGxvd2VyczogNDE3NTAwLFxuICAgIGNodXJjaFR3aXR0ZXJGb2xsb3dlcnM6IDE2ODAwLFxuICAgIGF0dGVuZGVlczogMTAxNTYsXG4gICAgY2l0eTogJ0RhbGxhcywgVFgnLFxuICAgIHBvZGNhc3RSZXZpZXdzOiAyMjAwLFxuICAgIHByb2JsZW1hdGljU3RhdGVtZW50czoge1xuICAgICAgcmFkaWNhbDogMyxcbiAgICB9LFxuICAgIG5vdEFzUHJvYmxlbWF0aWNTdGF0ZW1lbnRzOiB7XG4gICAgICBibGFja0xpdmVzTWF0dGVyOiAxNSxcbiAgICB9LFxuICAgIG1pbnV0ZXM6IFtcbiAgICAgIHsgdHlwZTogJ3BhbmVsJywgbGVuZ3RoOiA0MiB9LFxuICAgICAgeyB0eXBlOiAnc2VybW9uJywgbGVuZ3RoOiAzMCB9LFxuICAgIF0sXG4gICAgZGVub21pbmF0aW9uOiAnU0JDJyxcbiAgfSxcbiAgW0NodXJjaEtleXMuV2F0ZXJtYXJrXToge1xuICAgIG5hbWU6ICdXYXRlcm1hcmsgQ2h1cmNoJyxcbiAgICBrZXk6IENodXJjaEtleXMuV2F0ZXJtYXJrLFxuICAgIHBhc3RvcjogJ1RvZGQgV2FnbmVyJyxcbiAgICB0d2l0dGVyRm9sbG93ZXJzOiAxOTAwMCxcbiAgICBjaHVyY2hUd2l0dGVyRm9sbG93ZXJzOiAxNjgwMCxcbiAgICBhdHRlbmRlZXM6IDg4NzYsXG4gICAgY2l0eTogJ0RhbGxhcywgVFgnLFxuICAgIHBvZGNhc3RSZXZpZXdzOiAyNTQsXG4gICAgcHJvYmxlbWF0aWNTdGF0ZW1lbnRzOiB7XG4gICAgICByYWRpY2FsOiA1LFxuICAgIH0sXG4gICAgbm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHM6IHtcbiAgICAgIGJsYWNrTGl2ZXNNYXR0ZXI6IDIsXG4gICAgfSxcbiAgICBtaW51dGVzOiBbeyB0eXBlOiAnc2VybW9uJywgbGVuZ3RoOiA0NSB9XSxcbiAgICBkZW5vbWluYXRpb246ICdOb24tZGVub21pbmF0aW9uYWwnLFxuICB9LFxuXG4gIFtDaHVyY2hLZXlzLkNvdmVuYW50XToge1xuICAgIGtleTogQ2h1cmNoS2V5cy5Db3ZlbmFudCxcbiAgICBuYW1lOiAnQ292ZW5hbnQgQ2h1cmNoJyxcbiAgICBwYXN0b3I6ICdNaWtlIEhheWVzJyxcbiAgICB0d2l0dGVyRm9sbG93ZXJzOiAxMTUwMCxcbiAgICBjaHVyY2hUd2l0dGVyRm9sbG93ZXJzOiA1NTYwLFxuICAgIGF0dGVuZGVlczogMTEwMDAsXG4gICAgY2l0eTogJ0NhcnJvbGx0b24sIFRYJyxcbiAgICBwb2RjYXN0UmV2aWV3czogNDUsXG4gICAgcHJvYmxlbWF0aWNTdGF0ZW1lbnRzOiB7XG4gICAgICByYWRpY2FsOiA3LFxuICAgIH0sXG4gICAgbm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHM6IHtcbiAgICAgIGJsYWNrTGl2ZXNNYXR0ZXI6IDIsXG4gICAgfSxcbiAgICBtaW51dGVzOiBbeyB0eXBlOiAnc2VybW9uJywgbGVuZ3RoOiAzNiB9XSxcbiAgICBkZW5vbWluYXRpb246ICdOb24tZGVub21pbmF0aW9uYWwnLFxuICB9LFxuXG4gIFtDaHVyY2hLZXlzLlByZXN0b253b29kXToge1xuICAgIGtleTogQ2h1cmNoS2V5cy5QcmVzdG9ud29vZCxcbiAgICBuYW1lOiAnUHJlc3Rvbndvb2QgQmFwdGlzdCBDaHVyY2gnLFxuICAgIHBhc3RvcjogJ0phcnJldHQgU3RlcGhlbnMnLFxuICAgIHR3aXR0ZXJGb2xsb3dlcnM6IDUxNzAwLFxuICAgIGNodXJjaFR3aXR0ZXJGb2xsb3dlcnM6IDExNDAwLFxuICAgIGF0dGVuZGVlczogMTU4MTUsXG4gICAgY2l0eTogJ1BsYW5vLCBUWCcsXG4gICAgcG9kY2FzdFJldmlld3M6IDI0LFxuICAgIHByb2JsZW1hdGljU3RhdGVtZW50czoge1xuICAgICAgcmFkaWNhbDogMSxcbiAgICB9LFxuICAgIG5vdEFzUHJvYmxlbWF0aWNTdGF0ZW1lbnRzOiB7XG4gICAgICBibGFja0xpdmVzTWF0dGVyOiA0LFxuICAgIH0sXG4gICAgbWludXRlczogW3sgdHlwZTogc2VybW9uLCBsZW5ndGg6IDMyIH1dLFxuICAgIGRlbm9taW5hdGlvbjogJ1NCQycsXG4gIH0sXG4gIFtDaHVyY2hLZXlzLkZlbGxvd3NoaXBdOiB7XG4gICAga2V5OiBDaHVyY2hLZXlzLkZlbGxvd3NoaXAsXG4gICAgbmFtZTogJ0ZlbGxvd3NoaXAgQ2h1cmNoJyxcbiAgICBwYXN0b3I6ICdFZCBZb3VuZycsXG4gICAgdHdpdHRlckZvbGxvd2VyczogMjg3NjAwLFxuICAgIGNodXJjaFR3aXR0ZXJGb2xsb3dlcnM6IDEyMjAwLFxuICAgIGF0dGVuZGVlczogMjQxNjIsXG4gICAgY2l0eTogJ0dyYXBldmluZSwgVFgnLFxuICAgIHBvZGNhc3RSZXZpZXdzOiA5LFxuICAgIHByb2JsZW1hdGljU3RhdGVtZW50czoge1xuICAgICAgcmFkaWNhbDogNCxcbiAgICB9LFxuICAgIG5vdEFzUHJvYmxlbWF0aWNTdGF0ZW1lbnRzOiB7XG4gICAgICBibGFja0xpdmVzTWF0dGVyOiAxMCxcbiAgICB9LFxuICAgIG1pbnV0ZXM6IFt7IHR5cGU6ICd2aWRlbycsIGxlbmd0aDogMi41IH1dLFxuICAgIGRlbm9taW5hdGlvbjogJ1NCQycsXG4gIH0sXG4gIFtDaHVyY2hLZXlzLkZCQ106IHtcbiAgICBrZXk6IENodXJjaEtleXMuRkJDLFxuICAgIG5hbWU6ICdGaXJzdCBCYXB0aXN0IERhbGxhcycsXG4gICAgcGFzdG9yOiAnUm9iZXJ0IEplZmZyZXNzJyxcbiAgICB0d2l0dGVyRm9sbG93ZXJzOiAxMTQzMDAsXG4gICAgY2h1cmNoVHdpdHRlckZvbGxvd2VyczogMTA5MDAsXG4gICAgYXR0ZW5kZWVzOiAyNjMyLFxuICAgIGNpdHk6ICdEYWxsYXMsIFRYJyxcbiAgICBwb2RjYXN0UmV2aWV3czogMjAwLFxuICAgIHByb2JsZW1hdGljU3RhdGVtZW50czoge30sXG4gICAgbm90QXNQcm9ibGVtYXRpY1N0YXRlbWVudHM6IHt9LFxuICAgIG1pbnV0ZXM6IFt7IHR5cGU6IHNlcm1vbiwgbGVuZ3RoOiAwIH1dLFxuICAgIGRlbm9taW5hdGlvbjogJ1NCQycsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNodXJjaGVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FinalProject/metadata.ts\n");
    /***/
  }
});