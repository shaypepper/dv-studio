"use strict";

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[8], {
  Vlqa: function Vlqa(e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/DataVizStudio/GSAPPlay", function () {
      return n("lZfo");
    }]);
  },
  lZfo: function lZfo(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("rePB"),
        o = n("h4VS"),
        c = n("q1tI"),
        a = n.n(c),
        i = n("pc+1"),
        u = n("z/o8"),
        s = n("qU8i"),
        b = a.a.createElement;

    function l(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(n), !0).forEach(function (t) {
          Object(r.a)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function p() {
      var e = Object(o.a)(["\n  background-color: #3b3b3b;\n  /* height: 100px; */\n  /* width: 100px; */\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  opacity: 0;\n\n  img {\n    width: 100%;\n  }\n"]);
      return p = function p() {
        return e;
      }, e;
    }

    function O() {
      var e = Object(o.a)(["\n  background-color: red;\n"]);
      return O = function O() {
        return e;
      }, e;
    }

    function j() {
      var e = Object(o.a)(["\n  background-color: mediumpurple;\n"]);
      return j = function j() {
        return e;
      }, e;
    }

    function g() {
      var e = Object(o.a)(["\n  height: 300px;\n  width: 300px;\n  position: relative;\n  margin-bottom: calc(100vh - 350px);\n"]);
      return g = function g() {
        return e;
      }, e;
    }

    function m() {
      var e = Object(o.a)(["\n  position: relative;\n"]);
      return m = function m() {
        return e;
      }, e;
    }

    Object(s.a)(m());

    var v = Object(s.a)(g()),
        d = Object(s.a)(j()),
        y = Object(s.a)(O()),
        w = Object(s.a)(p()),
        h = function h(e) {
      return {
        scrollTrigger: {
          trigger: ".square".concat(e + 1),
          scrub: !0,
          onToggle: function onToggle(t) {
            return console.log("***", e, t.isActive);
          },
          toggleActions: "play none reverse reset"
        },
        opacity: .1 * (e + 1),
        ease: i.b.easeNone
      };
    };

    t["default"] = function () {
      var e = Object(c.useRef)(null),
          t = Object(c.useRef)(null),
          n = Object(c.useRef)(null),
          r = Object(c.useRef)(null),
          o = Object(c.useRef)(null),
          a = Object(c.useRef)(null);
      return Object(c.useEffect)(function () {
        u.a.fromTo(".movingBox", {
          opacity: 0
        }, f({}, h(0))), u.a.fromTo(".movingBox", {
          opacity: .1
        }, f({}, h(1))), u.a.fromTo(".movingBox", {
          opacity: .2
        }, f({}, h(2))), u.a.fromTo(".movingBox", {
          opacity: .3
        }, f({}, h(3))), u.a.fromTo(".movingBox", {
          opacity: .4
        }, f({}, h(4)));
      }, []), b("div", {
        className: "container trigger"
      }, b("div", {
        ref: e,
        style: {
          top: 75
        },
        className: "".concat(Object(s.b)(v, y), "  square1")
      }), b("div", {
        ref: t,
        className: "".concat(Object(s.b)(v, d), "  square2")
      }), b("div", {
        ref: n,
        className: "".concat(Object(s.b)(v, y), "  square3")
      }), b("div", {
        ref: r,
        className: "".concat(Object(s.b)(v, d), "  square4")
      }), b("div", {
        ref: o,
        className: "".concat(Object(s.b)(v, y), "  square5")
      }), b("div", {
        className: "".concat(Object(s.b)(v), "  ")
      }), b("div", {
        ref: a,
        className: "".concat(w, " movingBox"),
        style: {
          opacity: 0
        }
      }, b("img", {
        src: "/img/DFW.png",
        alt: "map of Dallas"
      })));
    };
  }
}, [["Vlqa", 0, 1, 3, 4]]]);