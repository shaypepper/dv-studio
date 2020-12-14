"use strict";

webpackHotUpdate_N_E("pages/DataVizStudio/FinalProject", {
  /***/
  "./components/FinalProject/Sections/styled.ts":
  /*!****************************************************!*\
    !*** ./components/FinalProject/Sections/styled.ts ***!
    \****************************************************/

  /*! exports provided: containerClass, proBLM, proPolice, proNothing, sermonClass, sermonContainerClass, buildingClass, spanClass, mapClass, pastorClass, chartArea */

  /***/
  function componentsFinalProjectSectionsStyledTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containerClass\", function() { return containerClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proBLM\", function() { return proBLM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proPolice\", function() { return proPolice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proNothing\", function() { return proNothing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sermonClass\", function() { return sermonClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sermonContainerClass\", function() { return sermonContainerClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildingClass\", function() { return buildingClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spanClass\", function() { return spanClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapClass\", function() { return mapClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pastorClass\", function() { return pastorClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chartArea\", function() { return chartArea; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var pretty_lights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-lights */ \"./node_modules/pretty-lights/lib/pretty-lights.modern.js\");\n\n\nfunction _templateObject11() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: charts;\\n  align-self: baseline;\\n  position: relative;\\n  display: grid;\\n  grid-template-areas:\\n    'substance substance substance'\\n    'map influence influence'\\n    'map influence1 influence2'\\n    'map influence3 influence4';\\n\\n  grid-template-columns: 2.5fr 1fr 1fr;\\n  grid-template-rows: min-content min-content 1fr 1fr;\\n\\n  p {\\n    font-size: 1rem;\\n    font-family: 'nytcheltenham', serif;\\n  }\\n\\n  > div > p {\\n    padding: 10px;\\n    margin: 10px 10px 10px 0px;\\n    width: fit-content;\\n\\n    &[data-connotation='negative'] {\\n      background-color: var(--accent1);\\n      &:hover {\\n        background-color: var(--accent2);\\n      }\\n    }\\n\\n    &[data-connotation='positive'] {\\n      background-color: var(--primary);\\n      &:hover {\\n        background-color: var(--secondary);\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  /* left: -10vw; */\\n  width: 75%;\\n  max-width: 230px;\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  /* bottom: 50%; */\\n  left: -50px;\\n  width: 100%;\\n  z-index: -1;\\n  transform-origin: 0 0;\\n  transform: scale(1.25);\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n\\n  &:before {\\n    content: 'shay is so cool';\\n    position: fixed;\\n    top: 20px;\\n    left: 20px;\\n    /* height: 40px; */\\n    background-color: black;\\n    color: white;\\n    display: none;\\n  }\\n\\n  &:hover:before {\\n    display: block;\\n  }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  opacity: 10%;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: sermon;\\n  overflow-y: scroll;\\n  height: 100%;\\n  /* background-color: rgb(40, 40, 40); */\\n  /* padding: 0 10%; */\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  overflow-y: scroll;\\n  z-index: 0;\\n  height: 100%;\\n  align-self: baseline;\\n  columns: 2;\\n  font-size: 0.5vmin;\\n  color: rgb(160, 160, 160);\\n  text-justify: inter-word;\\n  text-align: justify;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: rgba(0, 0, 0, 0);\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  &::hover {\\n    transform: scale(50) translate3d(-100px, -100px, 0px);\\n  }\\n  position: relative;\\n  transform: scale(7);\\n  background-color: var(--accent2);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: var(--primary);\\n  color: white;\\n\\n  &:hover {\\n    color: red;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  /* [data-church='fbc'] {\\n    fill: green;\\n  } */\\n  display: grid;\\n  margin: 0 auto;\\n  max-width: 1300px;\\n  grid-template-areas:\\n    'title  title'\\n    'church  sermon'\\n    'charts  sermon';\\n  grid-template-rows: min-content min-content 1fr;\\n  grid-template-columns: 0.75fr 1fr;\\n  grid-column-gap: min(7vw, 5vh);\\n  grid-row-gap: 3vh;\\n  width: calc(100vw - 40px);\\n  height: 100vh;\\n  h1 {\\n    font-family: NYTCheltenham;\\n    font-weight: 300;\\n    font-size: 3rem;\\n    font-style: italic;\\n    padding: 1rem 0 0;\\n    text-align: left;\\n    z-index: 2;\\n    animation: 500ms linear 0s alternate slidein;\\n    /* background-color: white; */\\n    /* box-shadow: 0px 40px 50px white; */\\n  }\\n\\n  sub {\\n    font-size: 1rem;\\n  }\\n\\n  &::before {\\n    content: '';\\n    background-image: url('/img/watermark-building.png');\\n    background-size: cover;\\n    background-position: bottom;\\n    position: fixed;\\n    z-index: -1;\\n    top: 0px;\\n    right: 0px;\\n    bottom: -30px;\\n    left: 0px;\\n    opacity: 0.03;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar containerClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject());\nvar proBLM = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\nvar proPolice = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3());\nvar proNothing = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4());\nvar sermonClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject5());\nvar sermonContainerClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject6());\nvar buildingClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject7());\nvar spanClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject8());\nvar mapClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject9());\nvar pastorClass = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject10());\nvar chartArea = Object(pretty_lights__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject11());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaW5hbFByb2plY3QvU2VjdGlvbnMvc3R5bGVkLnRzPzAwZjYiXSwibmFtZXMiOlsiY29udGFpbmVyQ2xhc3MiLCJjc3MiLCJwcm9CTE0iLCJwcm9Qb2xpY2UiLCJwcm9Ob3RoaW5nIiwic2VybW9uQ2xhc3MiLCJzZXJtb25Db250YWluZXJDbGFzcyIsImJ1aWxkaW5nQ2xhc3MiLCJzcGFuQ2xhc3MiLCJtYXBDbGFzcyIsInBhc3RvckNsYXNzIiwiY2hhcnRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGNBQWMsR0FBR0MseURBQUgsbUJBQXBCO0FBaURBLElBQU1DLE1BQU0sR0FBR0QseURBQUgsb0JBQVo7QUFRQSxJQUFNRSxTQUFTLEdBQUdGLHlEQUFILG9CQUFmO0FBU0EsSUFBTUcsVUFBVSxHQUFHSCx5REFBSCxvQkFBaEI7QUFJQSxJQUFNSSxXQUFXLEdBQUdKLHlEQUFILG9CQUFqQjtBQWFBLElBQU1LLG9CQUFvQixHQUFHTCx5REFBSCxvQkFBMUI7QUFRQSxJQUFNTSxhQUFhLEdBQUdOLHlEQUFILG9CQUFuQjtBQU9BLElBQU1PLFNBQVMsR0FBR1AseURBQUgsb0JBQWY7QUFtQkEsSUFBTVEsUUFBUSxHQUFHUix5REFBSCxvQkFBZDtBQVVBLElBQU1TLFdBQVcsR0FBR1QseURBQUgscUJBQWpCO0FBUUEsSUFBTVUsU0FBUyxHQUFHVix5REFBSCxxQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmluYWxQcm9qZWN0L1NlY3Rpb25zL3N0eWxlZC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3ByZXR0eS1saWdodHMnXG5cbmV4cG9ydCBjb25zdCBjb250YWluZXJDbGFzcyA9IGNzc2BcbiAgLyogW2RhdGEtY2h1cmNoPSdmYmMnXSB7XG4gICAgZmlsbDogZ3JlZW47XG4gIH0gKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICd0aXRsZSAgdGl0bGUnXG4gICAgJ2NodXJjaCAgc2VybW9uJ1xuICAgICdjaGFydHMgIHNlcm1vbic7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNzVmciAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogbWluKDd2dywgNXZoKTtcbiAgZ3JpZC1yb3ctZ2FwOiAzdmg7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogTllUQ2hlbHRlbmhhbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZzogMXJlbSAwIDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGFuaW1hdGlvbjogNTAwbXMgbGluZWFyIDBzIGFsdGVybmF0ZSBzbGlkZWluO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCA0MHB4IDUwcHggd2hpdGU7ICovXG4gIH1cblxuICBzdWIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nL3dhdGVybWFyay1idWlsZGluZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTE7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBvcGFjaXR5OiAwLjAzO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBwcm9CTE0gPSBjc3NgXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IHByb1BvbGljZSA9IGNzc2BcbiAgJjo6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNTApIHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwMHB4LCAwcHgpO1xuICB9XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XG5gXG5cbmV4cG9ydCBjb25zdCBwcm9Ob3RoaW5nID0gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuYFxuXG5leHBvcnQgY29uc3Qgc2VybW9uQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB6LWluZGV4OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBjb2x1bW5zOiAyO1xuICBmb250LXNpemU6IDAuNXZtaW47XG4gIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbmBcblxuZXhwb3J0IGNvbnN0IHNlcm1vbkNvbnRhaW5lckNsYXNzID0gY3NzYFxuICBncmlkLWFyZWE6IHNlcm1vbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTsgKi9cbiAgLyogcGFkZGluZzogMCAxMCU7ICovXG5gXG5cbmV4cG9ydCBjb25zdCBidWlsZGluZ0NsYXNzID0gY3NzYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDEwJTtcbmBcblxuZXhwb3J0IGNvbnN0IHNwYW5DbGFzcyA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnc2hheSBpcyBzbyBjb29sJztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpob3ZlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBtYXBDbGFzcyA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3R0b206IDUwJTsgKi9cbiAgbGVmdDogLTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuYFxuXG5leHBvcnQgY29uc3QgcGFzdG9yQ2xhc3MgPSBjc3NgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICAvKiBsZWZ0OiAtMTB2dzsgKi9cbiAgd2lkdGg6IDc1JTtcbiAgbWF4LXdpZHRoOiAyMzBweDtcbmBcblxuZXhwb3J0IGNvbnN0IGNoYXJ0QXJlYSA9IGNzc2BcbiAgZ3JpZC1hcmVhOiBjaGFydHM7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ3N1YnN0YW5jZSBzdWJzdGFuY2Ugc3Vic3RhbmNlJ1xuICAgICdtYXAgaW5mbHVlbmNlIGluZmx1ZW5jZSdcbiAgICAnbWFwIGluZmx1ZW5jZTEgaW5mbHVlbmNlMidcbiAgICAnbWFwIGluZmx1ZW5jZTMgaW5mbHVlbmNlNCc7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmciAxZnI7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbnl0Y2hlbHRlbmhhbScsIHNlcmlmO1xuICB9XG5cbiAgPiBkaXYgPiBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICZbZGF0YS1jb25ub3RhdGlvbj0nbmVnYXRpdmUnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQxKTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmW2RhdGEtY29ubm90YXRpb249J3Bvc2l0aXZlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FinalProject/Sections/styled.ts\n");
    /***/
  }
});