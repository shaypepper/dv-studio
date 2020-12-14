"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[10], {
  "+6fb": function fb(e, t, n) {
    e.exports = {
      container: "KnowledgeShare_container__35KZa"
    };
  },
  "/0+H": function H(e, t, n) {
    "use strict";

    t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function () {
      return i(o["default"].useContext(a.AmpStateContext));
    };
    var r,
        o = (r = n("q1tI")) && r.__esModule ? r : {
      "default": r
    },
        a = n("lwAK");

    function i() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
      return n || o && i;
    }
  },
  "7W2i": function W2i(e, t, n) {
    var r = n("SksO");

    e.exports = function (e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t);
    };
  },
  "8Kt/": function Kt(e, t, n) {
    "use strict";

    n("lSNA");
    t.__esModule = !0, t.defaultHead = l, t["default"] = void 0;

    var r,
        o = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" !== _typeof(e) && "function" !== typeof e) return {
        "default": e
      };
      var t = f();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
        }
      }

      n["default"] = e, t && t.set(e, n);
      return n;
    }(n("q1tI")),
        a = (r = n("Xuae")) && r.__esModule ? r : {
      "default": r
    },
        i = n("lwAK"),
        u = n("FYa8"),
        c = n("/0+H");

    function f() {
      if ("function" !== typeof WeakMap) return null;
      var e = new WeakMap();
      return f = function f() {
        return e;
      }, e;
    }

    function l() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o["default"].createElement("meta", {
        charSet: "utf-8"
      })];
      return e || t.push(o["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), t;
    }

    function s(e, t) {
      return "string" === typeof t || "number" === typeof t ? e : t.type === o["default"].Fragment ? e.concat(o["default"].Children.toArray(t.props.children).reduce(function (e, t) {
        return "string" === typeof t || "number" === typeof t ? e : e.concat(t);
      }, [])) : e.concat(t);
    }

    var p = ["name", "httpEquiv", "charSet", "itemProp"];

    function d(e, t) {
      return e.reduce(function (e, t) {
        var n = o["default"].Children.toArray(t.props.children);
        return e.concat(n);
      }, []).reduce(s, []).reverse().concat(l(t.inAmpMode)).filter(function () {
        var e = new Set(),
            t = new Set(),
            n = new Set(),
            r = {};
        return function (o) {
          var a = !0;

          if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
            var i = o.key.slice(o.key.indexOf("$") + 1);
            e.has(i) ? a = !1 : e.add(i);
          }

          switch (o.type) {
            case "title":
            case "base":
              t.has(o.type) ? a = !1 : t.add(o.type);
              break;

            case "meta":
              for (var u = 0, c = p.length; u < c; u++) {
                var f = p[u];
                if (o.props.hasOwnProperty(f)) if ("charSet" === f) n.has(f) ? a = !1 : n.add(f);else {
                  var l = o.props[f],
                      s = r[f] || new Set();
                  s.has(l) ? a = !1 : (s.add(l), r[f] = s);
                }
              }

          }

          return a;
        };
      }()).reverse().map(function (e, t) {
        var n = e.key || t;
        return o["default"].cloneElement(e, {
          key: n
        });
      });
    }

    function y(e) {
      var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext);
      return o["default"].createElement(a["default"], {
        reduceComponentsToState: d,
        headManager: r,
        inAmpMode: (0, c.isInAmpMode)(n)
      }, t);
    }

    y.rewind = function () {};

    var h = y;
    t["default"] = h;
  },
  Bnag: function Bnag(e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    };
  },
  EbDI: function EbDI(e, t) {
    e.exports = function (e) {
      if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    };
  },
  FYa8: function FYa8(e, t, n) {
    "use strict";

    var r;
    t.__esModule = !0, t.HeadManagerContext = void 0;
    var o = ((r = n("q1tI")) && r.__esModule ? r : {
      "default": r
    })["default"].createContext({});
    t.HeadManagerContext = o;
  },
  Ijbi: function Ijbi(e, t, n) {
    var r = n("WkPL");

    e.exports = function (e) {
      if (Array.isArray(e)) return r(e);
    };
  },
  Nsbk: function Nsbk(e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, n(t);
    }

    e.exports = n;
  },
  PJYZ: function PJYZ(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    };
  },
  PJgy: function PJgy(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("q1tI"),
        o = n.n(r),
        a = n("+6fb"),
        i = n.n(a),
        u = n("8Kt/"),
        c = n.n(u),
        f = o.a.createElement;

    t["default"] = function () {
      return f(o.a.Fragment, null, f(c.a, null, f("link", {
        href: "https://fonts.googleapis.com/css2?family=Piazzolla:wght@300&display=swap",
        rel: "stylesheet"
      })), f("div", {
        className: i.a.container
      }, f("svg", {
        viewBox: "-10 -10 120 120"
      }, f("rect", {
        height: "100",
        width: "100",
        fill: "coral"
      }), f("g", null, new Array(10).fill(!0).map(function (e, t) {
        return f(o.a.Fragment, {
          key: t * t
        }, f("line", {
          x1: 10 * t,
          y1: 0,
          x2: 10 * t,
          y2: 100,
          stroke: "whitesmoke",
          strokeWidth: "0.2"
        }), f("line", {
          x1: 0,
          y1: 10 * t,
          x2: 100,
          y2: 10 * t,
          stroke: "whitesmoke",
          strokeWidth: "0.2"
        }));
      })), f("g", {
        fill: "mediumpurple",
        strokeWidth: "3",
        stroke: "black"
      }, f("rect", {
        height: "10",
        width: "20",
        rx: "3",
        x: "20",
        y: "20",
        style: {
          transition: "fill 300ms ease"
        }
      }), f("circle", {
        r: "5",
        cx: "30",
        cy: "10"
      })), f("path", {
        d: "M 50, 50 V 10 H 10  Z"
      }), f("g", null, f("g", null, f("circle", {
        cx: 0,
        cy: 0,
        r: "4",
        fill: "CornflowerBlue"
      }), f("text", {
        fontSize: "2",
        x: "-1.5",
        y: "-0.75",
        fill: "white"
      }, "x=0"), f("text", {
        fontSize: "2",
        x: "-1.5",
        y: "1.5",
        fill: "white"
      }, "y=0")), f("g", {
        transform: "translate(100 100)"
      }, f("circle", {
        r: "4",
        fill: "CornflowerBlue"
      }), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "-0.75",
        fill: "white"
      }, "x=100"), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "2",
        fill: "white"
      }, "y=100")), f("g", {
        transform: "translate(100 0)"
      }, f("circle", {
        r: "4",
        fill: "CornflowerBlue"
      }), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "-0.75",
        fill: "white"
      }, "x=100"), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "2",
        fill: "white"
      }, "y=0")), f("g", {
        transform: "translate(0 100)"
      }, f("circle", {
        r: "4",
        fill: "CornflowerBlue"
      }), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "-0.75",
        fill: "white"
      }, "x=0"), f("text", {
        fontSize: "2",
        x: "-2.5",
        y: "2",
        fill: "white"
      }, "y=100"))))));
    };
  },
  Qetd: function Qetd(e, t, n) {
    "use strict";

    var r = Object.assign.bind(Object);
    e.exports = r, e.exports["default"] = e.exports;
  },
  RIqP: function RIqP(e, t, n) {
    var r = n("Ijbi"),
        o = n("EbDI"),
        a = n("ZhPi"),
        i = n("Bnag");

    e.exports = function (e) {
      return r(e) || o(e) || a(e) || i();
    };
  },
  SksO: function SksO(e, t) {
    function n(t, r) {
      return e.exports = n = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, n(t, r);
    }

    e.exports = n;
  },
  W8MJ: function W8MJ(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    };
  },
  WkPL: function WkPL(e, t) {
    e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    };
  },
  Xuae: function Xuae(e, t, n) {
    "use strict";

    var r = n("RIqP"),
        o = n("lwsE"),
        a = n("W8MJ"),
        i = (n("PJYZ"), n("7W2i")),
        u = n("a1gu"),
        c = n("Nsbk");

    function f(e) {
      var t = function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = c(e);

        if (t) {
          var o = c(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);

        return u(this, n);
      };
    }

    t.__esModule = !0, t["default"] = void 0;

    var l = n("q1tI"),
        s = function (e) {
      i(n, e);
      var t = f(n);

      function n(e) {
        var a;
        return o(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function () {
          a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props));
        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a;
      }

      return a(n, [{
        key: "componentDidMount",
        value: function value() {
          this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange();
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.emitChange();
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          this._hasHeadManager && this.props.headManager.mountedInstances["delete"](this), this.emitChange();
        }
      }, {
        key: "render",
        value: function value() {
          return null;
        }
      }]), n;
    }(l.Component);

    t["default"] = s;
  },
  YRc4: function YRc4(e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/KnowledgeShareSVG", function () {
      return n("PJgy");
    }]);
  },
  ZhPi: function ZhPi(e, t, n) {
    var r = n("WkPL");

    e.exports = function (e, t) {
      if (e) {
        if ("string" === typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
      }
    };
  },
  a1gu: function a1gu(e, t, n) {
    var r = n("cDf5"),
        o = n("PJYZ");

    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" !== typeof t ? o(e) : t;
    };
  },
  cDf5: function cDf5(e, t) {
    function n(t) {
      return "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? e.exports = n = function n(e) {
        return _typeof(e);
      } : e.exports = n = function n(e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, n(t);
    }

    e.exports = n;
  },
  lSNA: function lSNA(e, t) {
    e.exports = function (e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    };
  },
  lwAK: function lwAK(e, t, n) {
    "use strict";

    var r;
    t.__esModule = !0, t.AmpStateContext = void 0;
    var o = ((r = n("q1tI")) && r.__esModule ? r : {
      "default": r
    })["default"].createContext({});
    t.AmpStateContext = o;
  },
  lwsE: function lwsE(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  }
}, [["YRc4", 0, 1]]]);