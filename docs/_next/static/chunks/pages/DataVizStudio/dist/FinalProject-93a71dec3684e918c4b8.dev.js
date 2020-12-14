"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[7], {
  "/0+H": function H(e, t, o) {
    "use strict";

    t.__esModule = !0, t.isInAmpMode = s, t.useAmp = function () {
      return s(n["default"].useContext(i.AmpStateContext));
    };
    var a,
        n = (a = o("q1tI")) && a.__esModule ? a : {
      "default": a
    },
        i = o("lwAK");

    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          o = void 0 !== t && t,
          a = e.hybrid,
          n = void 0 !== a && a,
          i = e.hasQuery,
          s = void 0 !== i && i;
      return o || n && s;
    }
  },
  "7W2i": function W2i(e, t, o) {
    var a = o("SksO");

    e.exports = function (e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && a(e, t);
    };
  },
  "7zAk": function zAk(e, t, o) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/DataVizStudio/FinalProject", function () {
      return o("m7BD");
    }]);
  },
  "8Kt/": function Kt(e, t, o) {
    "use strict";

    o("lSNA");
    t.__esModule = !0, t.defaultHead = d, t["default"] = void 0;

    var a,
        n = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" !== _typeof(e) && "function" !== typeof e) return {
        "default": e
      };
      var t = l();
      if (t && t.has(e)) return t.get(e);
      var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, n) : null;
          i && (i.get || i.set) ? Object.defineProperty(o, n, i) : o[n] = e[n];
        }
      }

      o["default"] = e, t && t.set(e, o);
      return o;
    }(o("q1tI")),
        i = (a = o("Xuae")) && a.__esModule ? a : {
      "default": a
    },
        s = o("lwAK"),
        r = o("FYa8"),
        h = o("/0+H");

    function l() {
      if ("function" !== typeof WeakMap) return null;
      var e = new WeakMap();
      return l = function l() {
        return e;
      }, e;
    }

    function d() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [n["default"].createElement("meta", {
        charSet: "utf-8"
      })];
      return e || t.push(n["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), t;
    }

    function u(e, t) {
      return "string" === typeof t || "number" === typeof t ? e : t.type === n["default"].Fragment ? e.concat(n["default"].Children.toArray(t.props.children).reduce(function (e, t) {
        return "string" === typeof t || "number" === typeof t ? e : e.concat(t);
      }, [])) : e.concat(t);
    }

    var c = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e, t) {
      return e.reduce(function (e, t) {
        var o = n["default"].Children.toArray(t.props.children);
        return e.concat(o);
      }, []).reduce(u, []).reverse().concat(d(t.inAmpMode)).filter(function () {
        var e = new Set(),
            t = new Set(),
            o = new Set(),
            a = {};
        return function (n) {
          var i = !0;

          if (n.key && "number" !== typeof n.key && n.key.indexOf("$") > 0) {
            var s = n.key.slice(n.key.indexOf("$") + 1);
            e.has(s) ? i = !1 : e.add(s);
          }

          switch (n.type) {
            case "title":
            case "base":
              t.has(n.type) ? i = !1 : t.add(n.type);
              break;

            case "meta":
              for (var r = 0, h = c.length; r < h; r++) {
                var l = c[r];
                if (n.props.hasOwnProperty(l)) if ("charSet" === l) o.has(l) ? i = !1 : o.add(l);else {
                  var d = n.props[l],
                      u = a[l] || new Set();
                  u.has(d) ? i = !1 : (u.add(d), a[l] = u);
                }
              }

          }

          return i;
        };
      }()).reverse().map(function (e, t) {
        var o = e.key || t;
        return n["default"].cloneElement(e, {
          key: o
        });
      });
    }

    function w(e) {
      var t = e.children,
          o = (0, n.useContext)(s.AmpStateContext),
          a = (0, n.useContext)(r.HeadManagerContext);
      return n["default"].createElement(i["default"], {
        reduceComponentsToState: m,
        headManager: a,
        inAmpMode: (0, h.isInAmpMode)(o)
      }, t);
    }

    w.rewind = function () {};

    var y = w;
    t["default"] = y;
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
  FYa8: function FYa8(e, t, o) {
    "use strict";

    var a;
    t.__esModule = !0, t.HeadManagerContext = void 0;
    var n = ((a = o("q1tI")) && a.__esModule ? a : {
      "default": a
    })["default"].createContext({});
    t.HeadManagerContext = n;
  },
  Ijbi: function Ijbi(e, t, o) {
    var a = o("WkPL");

    e.exports = function (e) {
      if (Array.isArray(e)) return a(e);
    };
  },
  Nsbk: function Nsbk(e, t) {
    function o(t) {
      return e.exports = o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, o(t);
    }

    e.exports = o;
  },
  PJYZ: function PJYZ(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    };
  },
  RIqP: function RIqP(e, t, o) {
    var a = o("Ijbi"),
        n = o("EbDI"),
        i = o("ZhPi"),
        s = o("Bnag");

    e.exports = function (e) {
      return a(e) || n(e) || i(e) || s();
    };
  },
  SksO: function SksO(e, t) {
    function o(t, a) {
      return e.exports = o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, o(t, a);
    }

    e.exports = o;
  },
  W8MJ: function W8MJ(e, t) {
    function o(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }

    e.exports = function (e, t, a) {
      return t && o(e.prototype, t), a && o(e, a), e;
    };
  },
  WkPL: function WkPL(e, t) {
    e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var o = 0, a = new Array(t); o < t; o++) {
        a[o] = e[o];
      }

      return a;
    };
  },
  Xuae: function Xuae(e, t, o) {
    "use strict";

    var a = o("RIqP"),
        n = o("lwsE"),
        i = o("W8MJ"),
        s = (o("PJYZ"), o("7W2i")),
        r = o("a1gu"),
        h = o("Nsbk");

    function l(e) {
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
        var o,
            a = h(e);

        if (t) {
          var n = h(this).constructor;
          o = Reflect.construct(a, arguments, n);
        } else o = a.apply(this, arguments);

        return r(this, o);
      };
    }

    t.__esModule = !0, t["default"] = void 0;

    var d = o("q1tI"),
        u = function (e) {
      s(o, e);
      var t = l(o);

      function o(e) {
        var i;
        return n(this, o), (i = t.call(this, e))._hasHeadManager = void 0, i.emitChange = function () {
          i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances), i.props));
        }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i;
      }

      return i(o, [{
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
      }]), o;
    }(d.Component);

    t["default"] = u;
  },
  ZhPi: function ZhPi(e, t, o) {
    var a = o("WkPL");

    e.exports = function (e, t) {
      if (e) {
        if ("string" === typeof e) return a(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? a(e, t) : void 0;
      }
    };
  },
  a1gu: function a1gu(e, t, o) {
    var a = o("cDf5"),
        n = o("PJYZ");

    e.exports = function (e, t) {
      return !t || "object" !== a(t) && "function" !== typeof t ? n(e) : t;
    };
  },
  cDf5: function cDf5(e, t) {
    function o(t) {
      return "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? e.exports = o = function o(e) {
        return _typeof(e);
      } : e.exports = o = function o(e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, o(t);
    }

    e.exports = o;
  },
  lSNA: function lSNA(e, t) {
    e.exports = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    };
  },
  lwAK: function lwAK(e, t, o) {
    "use strict";

    var a;
    t.__esModule = !0, t.AmpStateContext = void 0;
    var n = ((a = o("q1tI")) && a.__esModule ? a : {
      "default": a
    })["default"].createContext({});
    t.AmpStateContext = n;
  },
  lwsE: function lwsE(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  },
  m7BD: function m7BD(e, t, o) {
    "use strict";

    o.r(t), o.d(t, "FinalProjectPage", function () {
      return Re;
    });
    var a = {};
    o.r(a), o.d(a, "watermark", function () {
      return F;
    }), o.d(a, "tvc", function () {
      return P;
    }), o.d(a, "prestonwood", function () {
      return Y;
    }), o.d(a, "covenant", function () {
      return D;
    }), o.d(a, "fellowship", function () {
      return q;
    }), o.d(a, "fbc", function () {
      return z;
    });
    var n = o("q1tI"),
        i = o.n(n),
        s = o("h4VS"),
        r = o("8Kt/"),
        h = o.n(r),
        l = o("qU8i"),
        d = i.a.createElement;

    function u() {
      var e = Object(s.a)(["\n  height: 100vh;\n  width: 100%;\n  scroll-snap-align: start;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n  position: relative;\n"]);
      return u = function u() {
        return e;
      }, e;
    }

    var c = Object(l.a)(u()),
        m = function m(e) {
      var t = e.className,
          o = e.children;
      return d("section", {
        className: Object(l.b)(c, t)
      }, o);
    };

    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var o = 0, a = new Array(t); o < t; o++) {
        a[o] = e[o];
      }

      return a;
    }

    function y(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
          var o = [],
              a = !0,
              n = !1,
              i = void 0;

          try {
            for (var s, r = e[Symbol.iterator](); !(a = (s = r.next()).done) && (o.push(s.value), !t || o.length !== t); a = !0) {
              ;
            }
          } catch (h) {
            n = !0, i = h;
          } finally {
            try {
              a || null == r["return"] || r["return"]();
            } finally {
              if (n) throw i;
            }
          }

          return o;
        }
      }(e, t) || function (e, t) {
        if (e) {
          if ("string" === typeof e) return w(e, t);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? w(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function f() {
      var e = Object(s.a)(["\n  grid-area: charts;\n  align-self: baseline;\n  position: relative;\n  display: grid;\n  grid-template-areas:\n    'substance substance substance'\n    'map influence influence'\n    'map influence1 influence2'\n    'map influence3 influence4';\n\n  grid-template-columns: 2.5fr 1fr 1fr;\n  grid-template-rows: min-content min-content 1fr 1fr;\n\n  p {\n    font-size: 1rem;\n    font-family: 'nytcheltenham', serif;\n  }\n\n  > div > p {\n    padding: 10px;\n    margin: 10px 10px 10px 0px;\n    width: fit-content;\n  }\n"]);
      return f = function f() {
        return e;
      }, e;
    }

    function g() {
      var e = Object(s.a)(["\n  grid-area: church;\n  animation: 2000ms ease 0s alternate fadein;\n  height: 100%;\n  h2,\n  p {\n    animation: 2000ms ease 0s alternate fadein;\n  }\n\n  p {\n    font-family: nytfranklin;\n    line-height: 1rem;\n    font-size: 0.75rem;\n    margin: 0.5rem 0;\n    font-weight: lighter;\n    letter-spacing: 0.5px;\n\n    span {\n      font-size: 0.75rem;\n      font-weight: bold;\n    }\n  }\n"]);
      return g = function g() {
        return e;
      }, e;
    }

    function p() {
      var e = Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  /* left: -10vw; */\n  width: 75%;\n  max-width: 230px;\n"]);
      return p = function p() {
        return e;
      }, e;
    }

    function v() {
      var e = Object(s.a)(["\n  position: relative;\n  /* bottom: 50%; */\n  left: -50px;\n  width: 100%;\n  z-index: -1;\n  transform-origin: 0 0;\n  transform: scale(1.25);\n"]);
      return v = function v() {
        return e;
      }, e;
    }

    function b() {
      var e = Object(s.a)(["\n  position: relative;\n"]);
      return b = function b() {
        return e;
      }, e;
    }

    function k() {
      var e = Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  opacity: 10%;\n"]);
      return k = function k() {
        return e;
      }, e;
    }

    function I() {
      var e = Object(s.a)(["\n  grid-area: sermon;\n  overflow-y: scroll;\n  height: 100%;\n  /* background-color: rgb(40, 40, 40); */\n  /* padding: 0 10%; */\n"]);
      return I = function I() {
        return e;
      }, e;
    }

    function A() {
      var e = Object(s.a)(["\n  position: relative;\n  overflow-y: scroll;\n  z-index: 0;\n  height: 100%;\n  align-self: baseline;\n  columns: 5;\n  font-size: 0.3vmin;\n\n  text-justify: inter-word;\n  text-align: justify;\n  span {\n    color: rgb(160, 160, 160);\n  }\n"]);
      return A = function A() {
        return e;
      }, e;
    }

    function T() {
      var e = Object(s.a)(["\n  background-color: rgba(0, 0, 0, 0);\n"]);
      return T = function T() {
        return e;
      }, e;
    }

    function x() {
      var e = Object(s.a)(["\n  &::hover {\n    transform: scale(50);\n  }\n  background-color: var(--productive);\n  opacity: 0.85;\n  &:hover {\n    opacity: 1;\n  }\n"]);
      return x = function x() {
        return e;
      }, e;
    }

    function j() {
      var e = Object(s.a)(["\n  background-color: var(--problematic);\n  color: white;\n"]);
      return j = function j() {
        return e;
      }, e;
    }

    function W() {
      var e = Object(s.a)(["\n  display: grid;\n  margin: 0 auto;\n  max-width: 1300px;\n  grid-template-areas:\n    'title  title'\n    'church  substance'\n    'charts  sermon'\n    'blank  sermon';\n  grid-template-rows: min-content min-content min-content 50px;\n  grid-template-columns: 0.75fr 1fr;\n  grid-column-gap: min(7vw, 5vh);\n  grid-row-gap: 3vh;\n  width: calc(100vw - 40px);\n  height: 100vh;\n  h1 {\n    font-family: NYTCheltenham;\n    font-weight: 300;\n    font-size: 3rem;\n    font-style: italic;\n    padding: 1rem 0 0;\n    text-align: left;\n    z-index: 2;\n    /* background-color: white; */\n    /* box-shadow: 0px 40px 50px white; */\n  }\n\n  sub {\n    font-size: 1rem;\n  }\n\n  /* h2 {\n    animation: 2000ms ease 0s alternate fadein;\n  } */\n"]);
      return W = function W() {
        return e;
      }, e;
    }

    var S,
        G,
        M = Object(l.a)(W()),
        C = Object(l.a)(j()),
        O = Object(l.a)(x()),
        H = (Object(l.a)(T()), Object(l.a)(A())),
        B = Object(l.a)(I()),
        L = (Object(l.a)(k()), Object(l.a)(b())),
        N = Object(l.a)(v()),
        J = (Object(l.a)(p()), Object(l.a)(g())),
        E = Object(l.a)(f()),
        F = ["Father, thank you for a chance to gather and be reminded of your goodness and your kindness and the fact that you are with us always. I thank you that you are a God who can handle the fact that it doesn't always seem like you're with us. We just acknowledge, Lord, that it's when we say things like that that we are not living in the understanding of what you told us. \"In this world, you're going to have trouble, but take heart. I have overcome the world.\"", "Lord, we just come to you right now. We're living in this world that still has a lot that needs to be overcome. Seeing trouble, we don't want to be shocked or surprised. We want to be saddened because we know that sin and terror and selfishness hurts people. We're hurting because people we love have lost their lives. We're hurting because the land we love is no longer the home of the free and the brave. It's home of the divided, the enslaved to sin, and the selfish.", "I pray that you would just use your church this morning to be a source of grace to the land. That means grace has to come to us. Would you teach us now? I pray for friends who are here who just came in and maybe don't know you, who don't know yet that you're always with us. You never leave us or forsake us. They don't even know how we could have a relationship with you in the first place.", "Would you use this morning to just grow our hearts, to teach us your ways, that we might be that healing balm of Gilead that the Scriptures talk about to a hurting and wounded people? Thank you, God, that you're here. You're present, and your Word is for us, to train us and lead us into life. Give us ears to listen, hearts to have that word implanted in, and fruitfulness as we yield to your Spirit. In Jesus' name, amen.", "Welcome. We are glad you're here. Please be seated. What we want to do this morning is just talk a little bit about what we've been in the middle of here. We're going to step out of the book of Acts, but we're going to talk about how we ought to act in a world that has gone increasingly crazy. I love the fact that America, that Dallas, that man is resilient, but I mourn the fact that America, that Dallas, that Todd is forgetful.", "The Scriptures talk in James 1 about this forgetfulness and the danger that it is. It says in verse 21, \"Therefore, putting aside all filthiness and all that remains of wickedness, in humility\u2026\" That is a word we're going to talk about a lot today. \"\u2026receive the word implanted, which is able to save your souls. But prove yourselves doers of the word, and not merely hearers who delude themselves.", {
      statementSentiment: "callToAction",
      text: 'For if anyone is a hearer of the word and not a doer, he is like a man who looks at his natural face in a mirror; for once he has looked at himself and gone away, he has immediately forgotten what kind of person he was. But one who looks intently at the perfect law, the law of liberty [and who meditates on that law intently and remembers it] , and abides by it, not having become a forgetful hearer but an effectual doer, this man [this nation, this city, that church] will be blessed in what he does."'
    }, "A wise man we quote a lot because he was a great thinker\u2026 He was an Oxford scholar and wrote a lot of books which helped us understand more and more about our God. He mentioned the reality and the truth that God whispers to us in our pleasures, he speaks to us in our conscience, but he shouts to us in our pain. Pain is God's megaphone to rouse a sleeping world.", 'I have had conversations and calls from the Washington Post and Reuters and AP and WFAA and Channel 5 and papers in Houston and national media outlets. They all want to know the same thing. "What do we do? How do we keep this from happening again?" My answer is very consistent. They may not like it.', 'My answer is, "Listen. What you see is what we get when we sow this nonsense that we can do what we want to do and live apart from this God. We can somehow tip our hat to him still in our oaths, and we can sing about him in our anthems, and we can declare about him in our declarations, but until we abide with him, until individuals humble themselves, seek his face, turn from their wicked ways, we\'re going to continue to have chaos, and chaos always welcomes tyranny. Tyranny always leads to the loss of freedom."', 'God is taking these moments when we see chaos and the world going awry, and he\'s just saying, "Are you ready to listen again?" I think you guys remember. If you were with me back in 2001, the Sunday after that weekend, I said, "The churches are going to be full. People are going to flood into them." In Dallas, we\'re listening with a different ear right now.', "In America, we had every kind of service imaginable. We memorialized the dead, and we acknowledged our issues. Then we just kind of moved right back to where we were. We were like a man who looks in a mirror and forgets what he sees. We just go away and don't change what was there.", "The Word of God is to show us, \"This is what beauty is.\" When we see that we don't match up with that beauty, we are to make a change. The change doesn't come from our own self-will. It comes from humbling ourselves over the Word, which we let implant in our souls, and we live according to it. When we don't live according to it, the horrors will continue to increase.", 'One of the things God says in his Word that he wants us to do is hear one another. Just before that little section in James that I read, there is another section that says, "This you know, my beloved brethren. But everyone must be quick to hear, slow to speak and slow to anger; for the anger of man does not achieve the righteousness of God."', "Listen. If you're not angry at some of what is going on, you're dead. You're a spore, mold. You ought to be angry at what you see happening in our country. It is crazy. We're afraid to call a man a man. We're afraid to call marriage marriage. We're afraid to call wrong wrong. In fact, we call evil good and good evil.", "You ought to be angry, but the anger of man does not accomplish the righteousness of God. I am only sorry that I didn't know Micah Johnson's name before Thursday night. I wish I would have known Micah Johnson. I wish Micah Johnson would have known me. I wish Micah Johnson would have known somebody who knew Jesus.", "Somebody could have listened to him and understood his anger and his rage, understood how he was thinking, what it was that was motivating him. Our police chief was on CNN this morning, and he talked about the fact that this guy was convinced that what he was doing was righteous. He had other plans to eliminate more and more people, systematically developing them.", "He kind of accelerated his plans when he heard about what happened in a few spots that were going on around the country and the opportunity he had not far from his home in Mesquite. What Micah Johnson needed to do with his anger was meet somebody who understood hurt and pain and frustration and what to do with it.", {
      statementSentiment: "acknowledgingInjustice",
      text: "One of the things that has been shocking to me is how much my African-American brothers and sisters, many of whom are members of this church, have been blessed to hear me say that I understand that there is something unique about the African-American experience in this country that is different than the white American experience. It is. It's different. I know that sometimes makes some people uncomfortable, but listen. I forget."
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "My friend Lecrae\u2026 We buy his music and love him. It has been well said that we all love that Lecrae is a Christian rapper. Sometimes we're uncomfortable that he's a black Christian rapper. Lecrae just says, \"Todd, when I drive through Dallas streets and look like I look, the way I'm treated sometimes isn't the same way you're treated.\" He didn't say, \"Every cop hates me.\" He didn't say, \"Every white man is a racist.\" He didn't say, \"Every cop is bad.\" He just said, \"You need to know that it's different.\""
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "I was talking to my friend Anthony. He's a member of this church. He said, \"You need to know, Todd. When I was 16, I was driving. I was going to Walmart at night, at 9:30. I had just changed lanes without my blinker. I got pulled over, and I realized that my experience was not normal, and I was treated in a way that made me really uncomfortable. I called my dad, and my dad said, 'Welcome to the world.' I talked to my friends who are African American. They say, 'When my kids turn 16 and get their license, I sit down and have a talk with them.'\""
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "Anthony told me, \"When I saw that happened Thursday night, I went right away to my office. I made sure my license was not expired and my insurance was up to date, because I didn't want to be digging around in my glove box and having them wonder what I'm doing.\""
    }, "I dig around in my glove box all the time when officers walk up to my car when my wife is speeding, and I'm in the car with her. That's a different experience. I have to be honest with you.", {
      statementSentiment: "acknowledgingInjustice",
      text: "I shared this, and I was shocked that my African-American friends\u2026 I grew up with African\u2011American friends. I spent the night at their house. They spent the night at my house. As much as a guy can be color blind, I have always thought of myself as color blind. In locker rooms and playgrounds\u2026 I just was with black people. I just didn't think of color, but I also didn't think enough of what I needed to say to them."
    }, {
      statementSentiment: "blackLivesMatter",
      text: "The very first time I heard, \"Black lives matter,\" I thought, \"That's ridiculous. That's the most racist comment I've heard in a long time. What do you mean, black lives matter? Of course, black lives matter. Why would you say that? Why would you not say, 'White lives matter,' or, 'Hispanic lives matter'? What are you doing? Why are you being so divisive? The song says, 'Jesus loves the little children. All the children, red, yellow, black, and white.' It's right there. Of course, black lives matter.\""
    }, {
      statementSentiment: "commendingTheDemonstrators",
      text: "That was my initial response. I heard godly guys who I love start the hashtag #BlackLivesMatter. By the grace of God, what I did was I said, \"What are you doing? Why are you saying that? That looks divisive to me.\" What my black friends said was, \"Todd, what we're doing\u2026\" Frankly, it was a gentleman I met whose name was Mika Edmondson who gave it to me in the clearest terms. Mika is a PhD. He's a 33-year-old African-American Reformed pastor who has a PhD in Martin Luther King Jr.'s theology of righteous suffering."
    }, {
      statementSentiment: "blackLivesMatter",
      text: "He just said, \"Todd, what you need to know, man, is when I'm saying this\u2026\" He gave me this illustration. He said, \"Todd, I know you care about unborn children, right? You care about right-to-life issues. You care about kids in the womb and the fact that almost 60 million Americans have been destroyed over the last almost 40 years, right? You talk a lot about that, right?\" I go, \"Yes, I do.\" He goes, \"Let me ask you a question. When you say, 'Unborn lives matter,' what are you saying? Do you want me to respond, 'Of course, Todd. All lives matter'? Do you think when you say that, I think that you don't think that people out of the womb matter? No. What you're doing is contextualizing it because you see a segment of society that is hurting, that is being mistreated, that is being discarded because we don't value it or it's inconvenient to us or in the way. When you talk about unborn humans, you're not saying that born humans don't matter. You're just trying to say, 'Hey, do you understand what is going on here?'\""
    }, {
      statementSentiment: "blackLivesMatter",
      text: "I have another friend who said, \"When I say that my house matters, and you go, 'Well, every house matters. People need houses,' but my house is on fire, it's not compassionate for you to say, 'All houses matter.' When I say, 'My stomach needs food,' and you're well-fed, and you say, 'All stomachs need food,' but I don't have food, you're not helping me.\""
    }, "What I had to learn\u2026 It didn't take me long. I have continued to learn. I'll tell you what I learned just this week. What I had to learn is what Scripture says in Proverbs 18:2. It says, \"A fool does not delight in understanding, but only in revealing his own mind.\" Proverbs 18:13 says, \"He who gives an answer before he hears, it is folly and shame to him.\"", {
      statementSentiment: "denouncingTheMovement",
      text: "My first response\u2026 I was asked, \"Todd, what do you think about the Black Lives Matter movement?\" I go, \"Well, I think all lives matter.\" It was my first and visceral response. It's true. All lives matter. I don't know much about the movement, because movements have all kinds of individuals in them. As much as what Micah Johnson did was part of any movement\u2026 That's a no good movement."
    }, {
      statementSentiment: "inflammatory",
      text: "That doesn't need understanding. It needs judgment. I'm glad police used deadly force on him. When they said, \"You can repent of what you're doing and come out with your hands up in peace, or you can stand there and receive judgment,\" he chose the latter. When men do what seems right to them, it always leads to death. Listen to me. We have to learn to listen to one another and really have some understanding."
    }, 'I wish that Micah Johnson, living right here in the southern United States with all kinds of Christians around him in Mesquite, would have run into a real Christian who said, "Tell me about your pain. Tell me about some of your pain that you maybe brought back from Afghanistan. Tell me about some friends maybe who you have known who have experienced some level of injustice.', {
      statementSentiment: "invalidating",
      text: "Tell me how you're convinced that because you're a black man, that nobody is going to care for you, and that police officers are against you. I don't want to sit there and legitimize your feelings if they're wrong, but I do want to listen to them. I want to understand. Here's the deal. If you don't deal with your wounds, they're going to get worse.\""
    }, "What shocked me is when I told my friends that I understood that there is a difference in the lives they're experiencing in America sometimes than mine, and I listened to their stories, and I told them, \"Man, if you're telling me that you feel like we don't care if you're treated unjustly,\" will you forgive me? I want you to know that I care when you're treated unjustly.", 'When I talked to a sweet African-American mom who was just scared to death because her child was turning 16, I said, "I remember when my kid, my boy was turning 16. I was scared to death too because he\'s 16 and an idiot. All 16-year-old men are idiots." Beyond that, not only did she have a 16-year-old idiot. She has a 16-year-old African-American idiot. She said, "That\'s a different kind of scared."', "Instead of going, \"No, it's not,\" I said, \"Help me understand that. Tell me what you're experiencing. Tell me what you're fearful of.\" Listen. You need to know this about Micah. There is no justification for what he did, zero, none. I listened to his statement all the way through. I don't care how he felt. What he did was wrong.", "Here's my point. We have to learn to care about how people feel. Spiritual wounds and physical wounds have a lot in common. Let me just walk you through that. When you have a physical wound, it requires care. When you have a spiritual wound, it requires care. If ignored, a physical wound only gets worse. It festers. It grows. It gets infected.", "When you have a spiritual wound, when you're dealing with your hurt, your anger, your bitterness, your wrath, your lack of forgiveness, without doing it in a way that is going to actually help it be made better, it's only going to get worse. It needs care. When you have a physical wound, it has to be cleansed from dirt. You have to get the dirt out of there, or it's going to cause real problems. If you have a spiritual wound, you have to get the uncleanliness of sin and the anger of man and the lack of forgiveness out of it.", {
      statementSentiment: "expectingForgiveness",
      text: "A lack of forgiveness is like drinking poison and hoping somebody else dies. It will eventually distort you and make you into a monster. We saw one unleashed on Thursday night."
    }, "A physical wound is something for which a surface healing doesn't hurt. You have to clean it out. I remember when I was bitten by a brown recluse and it began to eat my flesh.", "There was necrotic tissue, dead tissue. It kept eating into my flesh. There is a huge scar right here in my arm because all the way down to the muscle, they had to open my arm up and wipe it out and get to the very bottom and make sure they cut out any tissue that was dead and dying so it could begin to heal and work its way back out.", 'A spiritual wound is the exact same thing. It has to be deeply dealt with, not in a surface way, not just with weekend memorial services, not with just a presidential speech, not with just a momentary gathering of black and white pastors, not with just a sense of shock by the country again where we\'re just going, "What is going on?"', "The country has to listen. The church has to listen. I have to listen and not just glance at the Word of God but let it be implanted in my soul where it can bear great fruit, not just be an ineffectual hearer but become an effectual doer. With physical issues and physical wounds, only God ultimately heals. God is the one who coagulates blood. God is the one who allows my arm to almost regenerate and to fill back in.", "God is the one who ultimately is the healer. We talked last week about how God can heal any time he wants, any way he wants. We've seen it happen again and again in Scripture. We've seen it happen since then. It is not normal that God just does it, but God can heal. Frankly, all healing comes from God, but he often uses human instruments.", "God has given us minds. He has given us medicinal plants and different things that are sanctified through the Word of God in prayer and study that are useful to us, and human beings that God has given knowledge and information and tools to are often a part of the healing that ultimately God is behind. God heals physical wounds, but he often uses human instruments to bring that healing.", "Spiritual wounds\u2026 God can just wave a wand over the United States of America and make us well, but he typically uses humans who know him, who have been made well by him, who themselves are recipients of grace in order to bring grace to others. Spiritual healing is only a work of God.", "Some of you guys are so kind to come up to me and say things like, \"Todd, God used you in my life.\" I'm like, \"That's exactly right. God did the healing. He might have used my words, my reminding you of the source of your healing, and I'm glad I was an instrument of grace to you, but glory to God. I am a steward of the mysteries of God and a servant of Christ, and it is his healing that comes into your life, not Watermark's, not Todd's, Jesus'.\"", {
      statementSentiment: "violentProtestorsAreTheProblem",
      text: "What happens right now in our country is the church has to be the instrument through which healing comes, not giving them a superficial place to go with some anesthetic surface, alcohol-smelling remedy that will last for a moment but deal with the root issue. Church, this is your moment. There are Micah Johnsons still all over our city, all over our country, all over our world. Christ wants you to go to them and love them."
    }, "When they act out in anger, you realize it is hurt people who hurt people, and you just do what you can to say, \"Man, tell me about that pain. Tell me about that frustration. Let me listen to you. What do you mean when you say, 'Black lives matter'? If you mean, 'Black lives matter; therefore, I can kill cops. Black lives matter; therefore, I'm going to strike out injustice in violence,' I have no patience for that (Romans 13), and the ministers of God, law enforcement, military, and others, should execute strong and swift judgment against them.\"", "But they're saying, \"I don't think that you know that I'm hurting. I don't think that you know that I matter like you matter. I'm treated differently. I think you need to know about educational injustice. You need to know about what is going on in my inner city. You need to know about what is going on in my inner heart.\"", {
      statementSentiment: "sanctimoniousTrivialities",
      text: 'We need to go, "Tell me about that, man. Let me tell you where I found healing. Let me understand your pain. I know Jesus is the solution to it. Anything other than Jesus is a coping strategy, but let me be the medicinal hearing of God. Let me show you that white men do care. Let me show you I love you. Let me see what I can do to come alongside of you. Let me be God\'s hands and feet to you."'
    }, {
      statementSentiment: "sanctimoniousTrivialities",
      text: "Why are you afraid to clap at that? I'm just asking you to be the church. You have to be present. You have to walk up and just\u2026 When someone says to you, \"Black lives matter,\" don't go, \"All lives matter.\" Say, \"Tell me why you're saying that. Help me understand that.\" If they just go, \"I'm telling you this because I'm hurting\u2026\""
    }, "When I was a young man, I was married. My wife would just go, \"I don't feel like you love me.\" I didn't go, \"Of course, I love you. We got married 10 years ago now. I told you I loved you at the altar. I haven't dated anybody since then. I haven't slept with anybody else since then. I haven't told you I hated you. Until further notice, I obviously love you.\"", 'She would look at me and go, "Are you crazy?" When she says, "Do I matter to you?" I\'m not supposed to look at her and go, "Every wife matters to her husband." What she is telling me is, "Bro, there is a disconnect here. I don\'t feel like right now you value me." I can ask her for forgiveness. I can seek understanding. I can explain to her where she\'s clearly wrong. No.', "What I do is I listen. It's not an intellectual problem often. It's an emotional issue. With tenderness and kindness, I love her the way I would want to be loved when I feel a certain way. When people say something to me as simple as, \"Todd, are you a born-again Christian?\" I don't ever answer that question with a yes or no. I don't. I just go, \"What's your question? Am I a born-again Christian? What do you think a born-again Christian is?\"", "They go, \"Well, you know what a born-again Christian is. He's a right-wing, always-voting-Republican, better-than-you, homophobic, self-righteous jerk.\" \"Well, no, I'm not that.\" But if what they're asking is if I'm somebody who knows that apart from the kindness of God\u2026 Unless he makes this selfish, self-willed, prideful, lustful individual new by the grace of God, unless God went before me and curbed on the cross my wrath that I deserve that I might be justified before him\u2026", "I'm trying to respond to that gift of love as best I can. I'm not trying to earn my salvation but to respond to the salvation that I have been given and giving all glory to Christ. If that's what you mean by a born-again Christian, I pray that I'm that. What I have learned to do over the last months is when certain friends go, \"Black lives matter,\" I go, \"Tell me what you mean by that. Are you telling me you think I don't believe that?", "Is there something I have done personally to make you feel that way? I want to ask your forgiveness if I've ever made you think that your life doesn't matter, because your life matters a lot. Jesus died for you and cares for you, and if I make you feel like he doesn't love you, I need to repent. If you think that because there has been some injustice done to you, you can incur injustice on others, I'm going to call you to repent from that.\"", "I would do everything I can to limit that kind of rebellion against God. As Martin Luther King Jr. said, \"Darkness doesn't dispel darkness. Only light gets rid of darkness. Hate doesn't get rid of hate. Only love gets rid of hate.\" I wish I would have known Micah Johnson because I would have loved to have had that conversation. I would have loved to have shared with him what I did with the anger of Todd, which doesn't accomplish the righteousness of God.", "There is nothing that brother did that can be justified. It was tragically misinformed. It was the anger of man. It was evil. It didn't solve problems. It created problems for his city and for himself. It was a way that seemed right to him, but in the end, it was the way of death. It took the life of my friend. Mike Smith was a member of our body. He loved and served people.", "I've talked to folks over the last 48 hours about Mike Smith. He was a part of the Dallas Police Department. When I saw that chaos going down, I called a few of my police officer friends. I texted a few of them. One of them was Mike. He never texted me back because he was busy running toward trouble and getting shot and giving his life so people could protest, as their first amendment right would say.", "Mike was here. Mike understood that the best way to serve and protect people was to love people. He was a blessing to us. He was a blessing to this city. I know Mike and Anthony and all of the other police officers who are part of our family here, and they are many\u2026 I know nothing makes a good cop any angrier than a bad cop. Bad cops offend good cops more than anybody else. Just like, if you haven't noticed, bad, weak, feckless, compromising, liberal, deal-making pastors frustrate me more than anybody. Bad pastors frustrate good pastors more than anybody.", {
      statementSentiment: "goodCopsBadCops",
      text: 'You need to know something. Good cops hate bad cops. Good Christians should hate bad Christians. By hate, I don\'t mean anything other than saying, "I want them to know the truth, and I want them to not take the name of Jesus and make it a source of mockery to other people." Friends, we have to understand one another. We have to move to each other in peace, not just in superficial moments of shock when God is shouting to us but in an abiding way.'
    }, "The Scripture tells us again and again, \"When my people who are called by my name humble themselves and pray, seek my face, turn from their wicked ways, then I will hear from heaven, forgive their sin, and heal their land.\" Healing in this land is going to come through God's people, God's people who, having been healed themselves, can be agents of God's ministering grace to others. Will you join me?", 'When people say, "You don\'t love me. Do you know that I matter?" I don\'t want to say, "I do love you. Yes, you matter," and move on. You go, "Help me understand that. That sounds like you\'re hurting. If there is something I personally have done that has hurt you, let me come alongside, understand, repent, and seek your forgiveness."', "If they go, \"Todd, not you, but too many other people, and I'm angry,\" go, \"Well, I'm angry against injustice too. Do you feel like I'm not? Let's go about injustice God's way, not a way that seems right to us, which doesn't accomplish the righteousness of God.\" Gang, it's time. It has been time. You know, when I talk to reporters\u2026 It's in that letter I posted early Thursday morning. You have a copy of it in the back of your prayer guide right there.", {
      statementSentiment: "theAnswerIsJesus",
      text: "I just said I'm not surprised. I'm not shocked. We're reaping what we sowed. I want to be a part of sowing peace and righteousness and faith and love and the gospel of Jesus Christ. Are you ready to do it with me, church? Here's how it goes. That righteousness and peace will only come as we abide with Christ. Apart from him, we can do nothing. We have nothing to offer anybody."
    }, "We don't need philosophies. We don't need the wisdom of men. We need men and women who humbly walk with God and love one another as they want to be loved. When you're hurting, you want people to listen. When you run into hurting people, and you understand that hurt people hurt people, move toward them with grace. It's not a permission slip for their pain to cause pain to others, but move toward them with the healing balm of the gospel. Tell them how you have been healed.", "What I'm going to ask you to do in these next few minutes is to remind yourself where healing comes from. In a moment, we're going to turn, and we're going to spend about 15 or 20 minutes in prayer, and we're going to just lift up our city. We're going to lift up the Smith family. We're going to lift up our city's leaders. We're going to pray for the church. We're going to pray for stuff that is going on in our hearts that is not consistent with what God wants.", "We're going to go to work. When man works, man works. When man prays, God works. We're going to let God go to work in our hearts so that when we get out of here and continually pray without ceasing, we're going to love as he would love because we're going to walk with him. We're going to be a source of grace in this city. Where we see anger, we're going to help people deal with their anger in a way that will lead to healing.", "Now, if you're here, and this makes you really uncomfortable\u2026 You came this morning, and you wanted a sense of why we sing and why we have hope in the midst of the trouble, why we're not surprised, we have a room for you. Your Watermark News today has in it a story of one of the leaders of what we call our Great Questions ministry. It's here every Monday night. People can just show up and talk about questions they have. No question is out of bounds. No question is inappropriate.", "It's not a place for believers to go to be equipped on how to answer those questions. We have training dates for you. It's for folks who can't trust God because of intellectual reasons or heartfelt emotional problems with God and the God idea. We meet here, and we discuss, and we're not offended, and we point them to truth. We believe that if something is true, no amount of scrutiny can affect it.", "If you're here this morning, and that is what is going to serve you or if you want to understand more about the hope we have, when we're done, what you can do is walk right out of here. If you will go out those doors and up the steps, we have a smaller gathering area up there where we do a lot of weddings and smaller funerals. It's called our Chapel. There will be a group in there to facilitate that in the next 20 to 30 minutes with you.", "The rest of us are going to stay here, and we're going to go to work. I ask you to just turn to the folks around you and to use that prayer guide to pray now for about 15 minutes, and then we'll pull you back together. Please don't leave. This is what the church does. The army of God marches on its knees. It is time to go to work and pray for our city.", "If you don't know how to pray, just read what is written in the group you're in. Sit in a group and listen to others pray. God is not judging your words. He's welcoming your heart as you turn to him. Would you turn to one another right where you are? We'll spend the next 15 minutes praying, and then we're going to celebrate the justice of God that is filled with mercy. Let's pray.", "Lord, I know you will be mad at me in heaven for probably interrupting the conversations you're having with your people more than anything, but we just bring it to one conversation with you right now. I thank you, Lord, that in your sovereignty and in your omnipotence, you heard every single thing we said.", "Lord, it wasn't so much about us trying to get you aligned with our will. That was all about trying to get us aligned with your will. Father, we want to seek your face. We want to turn from our wicked ways, and we want to be your people.", "Would you help us even in the remaining time we have together and the things you have given us to remember you and respond correctly to you? Would you just burn in our hearts the gospel truth so we can go and take that and heal hurting people? Thank you, Lord, that you have prepared us for such a time as this. We love you. In Jesus' name, amen.", {
      statementSentiment: "fightAgainstInjustice",
      text: "You know, I have purposed with my friends, many of whom are African-American leaders in this community, that if they're looking for a race war, they're not going to get it in Dallas, Texas. We're going to love each other here, and we're going to live in one accord, and it's going to start with the church. It's going to start with people who understand why other people are still angry, and we're going to listen to them, and we're going to take to them the hands and feet of Christ, fight against injustice of all kinds."
    }, "One of the things that has been shocking to me here through the last couple of days is how much it has meant to my African-American brothers and sisters when I have just told them I understand their pain or I want to understand more. It shouldn't be a surprise to me because my wife, every time I listen to her, says, \"I appreciate the way you're listening and living with me as the Bible commands, in an understanding way.\"", "When you understand somebody, that doesn't mean you justify their sin. It just means you listen to their pain. When men are in pain, and when women are in pain, they go for all kinds of directions to try and find healing. When we try and have legitimate healing through illegitimate means, it's going to cause more problems.", "When we meet God-given desires in God-forbidden ways, it causes more problems. Here is what I have learned again. I have to do a better job of telling people I love that I love them. I met with all of our police officers this morning who are on our campus who are with us and sprinkled about.", 'I just said, "Would you guys forgive me? Would you forgive me that it takes times like this for me to circle back up with you and tell you that I love you, that you put your lives on the line with me, that you don\'t know on a regular basis how grateful I am that you guys are out there working the hours you are to keep safety and order in our city? Would you forgive me that it takes that much for me to tell you I love you?"', "I told my black friends that. I told my wife that. I hope you guys know that I don't tell you guys enough how much I love you, how grateful I am to be a part of this church and to watch the way so many of you guys were actively on the front lines of caring for others. Last night, with me in the city worshipping and engaging people further and further out, inviting your friends to be here.", "I want to tell you I love this church. I love the church of Jesus Christ. I love the church of Jesus Christ I saw at Concord and Oak Cliff Bible and other churches spread out throughout this city, south, north. I love my friends at The Village who love Jesus. I love people because God has loved people, and because God has loved people, I don't let them get lost in their sin. I speak truth to them.", 'If you guys are committed to truth or committed to love, love without truth is not loving, but truth without love won\'t be heard. We have to be people who do not back away from truth. We have to be unafraid to love. We have to do a better job. I need to do a better job of telling people who I have loved for a long time, "I love you."', "I haven't told them I don't. I have to tell them I do. One of the things God has given us is a constant reminder of his love for us. Every time we eat a meal\u2026 This was Jesus' intention. He said, \"As often as you have bread\u2026\" In every ancient Near Middle East meal, you had bread. \"As often as you break that bread, do it in remembrance of me.", "Be reminded that I haven't forgotten you, that I do love you, that I am a just God, and I do strongly have an offense against sin, but remember that I love you and that I have given myself for you. God is going to make me who knew no sin to become sin on your behalf that you might become the righteousness of God in me.\"", "It was the fulfillment of all of the Old Testament Scriptures, that the Messiah, when he would come, would be a suffering servant who would give himself. All of us like sheep have gone astray. Each of us has turned to his own way. The Lord has caused the iniquity of us all to fall on him, and that King Jesus wants us to be reminded of how much he loves us every time we break bread.", "Periodically, we do it this way through little elements in Communion, but I want you to know that Jesus wants you to remember him every time. He's the Bread of Life which gives you strength. He is the refreshing, if you will. His blood being poured out for you is the means through which the new covenant was cut, that you can be reconciled to him.", "We're about to celebrate that. If you're here, and you have a personal relationship with Jesus Christ, not that you know the story but that you have personally said, \"Jesus died for my sin. Apart from what Jesus did, there is nothing I could ever do to be righteous in God's eyes.\" If you have trusted in Christ, you are welcome at this Table.", "I want to warn you. If you take a symbol of God's wrath being poured out against sin in a superficial or fleeting way, it isn't a blessing to you. All you're doing is saying, \"I deserve judgment because I acknowledge God is holy and I am not. I acknowledge that he made provision for my sin, but have never dealt with it personally.\"", "Jesus invites all people who know him personally to come to the Table. What we're going to do is we're going to pass out the elements. I would love you to receive them. Then we'll take them together. As you do, I want you to be reminded of the goodness of God. He knows that this is a world that is overcome with trouble. I know you're worn. I know you're weary, but he has walked these roads for us. He calls us to the healing Table of his Son. Receive the elements, and then we'll take them together.", "That's why Jesus said, \"Are you worn out? Are you weary? Are you heavy laden? Come.\" In a city that God is speaking to through the megaphone of pain\u2026 Man, we're worn out by all this death and this killing and this despair. We should just say, \"Come. Come to the God who is life. Come to the God who will teach you a better way. Come to the God who will heal. Come to the God who will bring you together, where there is no distinction between Jew and Greek, male and female, barbarian and Scythian, slave and free man, and make you one.\"", "Our country has been trying to heal from some of those things for a long time. We become one, and we come to the one who made us, and we reconcile to him through the means which he has given us to reconcile. There is only one name under heaven by which men must be saved, and his name is Jesus Christ, whom God has displayed on the cross as an instrument that received his wrath so God's justice could be satisfied in an appropriate way.", 'In this is love, not that we love God but that God loves us and gave his Son to be a sacrifice for our sins. Just hours before Jesus went to that cross, he gathered his disciples together and said, "Listen. As often as you break this bread, just do it in remembrance of me. This is my body which is broken for you." He wants us to do the same.', "In this little memorial way, if you have a relationship with Jesus\u2026 I don't even care if this is your time you profess him, that you personally know that you are a sinner before a God who takes justice seriously. By the kindness of God, he takes mercy seriously, so he has offered you a better way, and that better way is through his Son, whose body was given for you. You can take and receive this, the body of Christ, broken for you.", 'At that same meal, afterward, he took up a cup. It was a specific cup, that Passover seder. He said, "As often as you drink this cup, do so in remembrance of me." It was a cup of anticipation, of hope, of celebration. It was, "This isn\'t over. It\'s not all darkness and death. There is redemption. There is joy that is going to come.', 'One day, there will be a provision that is going to have your sons and daughters all know me, and everybody will be forgiven. You will be one with me." He said, "That new covenant is about to be cut right now through my blood which is about to be shed." The blood of Christ shed for you.', "I love our little evangelical community church tradition. We have grape juice and not wine because it just makes your mouth happy when it hits it. Doesn't it? Man, listen. If it is true, if this crazy story is true, that God is not angry at us in our sin\u2026 He goes, \"Are you guys done fighting? Do you want to get along? Do you want to be healed? Come to me. Learn to love as I have loved. Give your lives for one another. Understand each other. Be reconciled to me that I can reconcile you to one another.\"", "Man, that ought to make us really glad that that is possible. We see it happen. The world ought to look at us. We're a church of 70 different nations of origin, members of Watermark Community Church. Did you know that? We get along. We're in community together. We care for one another. We sing together.", {
      statementSentiment: "theAnswerIsJesus",
      text: "The world ought to go, \"How does that happen? How can the nations unite?\" The answer is Jesus. He's the Prince of Peace. That's what's going on here. Our mark is love. We have to tell each other we love each other, but we only do that out of an overflow of the love we have received. Let me remind you of that love right now. Let's sing it to one another. Stand with me."
    }, 'What a perfect way to end. "Bear your cross as you wait for the crown. Tell them all where the treasure is that you\'ve found." That\'s what we do. That\'s what the church does. God has shouted to them right now in their pain, and they\'re wondering, "How do we do this?" Literally, media outlets across the country, people around the city are saying, "What do we do? How do we do this?"', "You have to tell them about the treasure you've found, how we can come together in peace. Guys, you do know this. Black lives matter. You do know that, right? You know that gay lives matter. Did you know that gay lives matter? Gay lives matter. Did you know that people with gender dysphoria matter to God? Did you know that God hates broken sexuality? God hates broken racism. God hates broken marriages.", "God hates divorce, but did you know that divorcees matter to God? Did you guys know that? They ought to matter to us, every single one of them. When you talk to your homosexual friends, they think you hate them. When is the last time you went to one of your friends and said, \"I just want you to know that I love you, and God loves you, and I love you enough to tell you that I think what you're doing is destructive, just like maybe me in my heterosexual perversion. It's destructive, but God loves me, and this is what he has done for me in my brokenness.\"", 'You get to go carry that message. God is not angry about our sin. He hates sin, and if we identify with it and not with him, we will be judged along with sin, but if we hate sin with him and go, "God, what must we do to be delivered from this body of death?" he says, "Come. Come to the cross where my love was poured out, where my wrath was already poured out. Find forgiveness and reconciliation to me, and be my healing balm of grace. Go and love as you have been loved. Be quick to listen, slow to speak, slow to anger."', "The anger of man does not accomplish the righteousness of God, but the anger of God has accomplished salvation for us, poured out in his Son, Jesus Christ. If you know it, would you go preach it? If you have never understood that before, would you come? Would you come and let us tell you about it? There is a little section in the Watermark News. You can just check that. We'll follow up with you this week. You can come right here. Would you go, church? This is your time. Rise up. Bear your cross as you wait for the crown.", "Have a great week of worship. We'll see you."],
        P = ["Well, good morning, if you have your Bibles, go ahead and grab those. If you don't have a Bible with you, there should be a hardback black one somewhere around you. If you'll grab that, we're going to be in one verse today. In fact, we're going to get one sentence today, Maika, chapter six, verse eight. And so what I want to do with our time together today is I just kind of want to step into the fray of this past week knowing that there are a lot of landmines there and there are a lot of things that could go wrong by doing this.", "And yet I think that the people of God need to enter this dialog with the type of conversation that I hope ultimately will bring healing to souls and and really will allow us to operate as the people of God in the midst of continued tragedy on all sides of this festering wound in the American landscape. It was a tale of two weeks for the pastoral staff here at the village. And and I'll try to explain that. I got back into town on Wednesday morning and really didn't know. I don't take my phone with me or things like that on vacation. So I was completely unaware of the two shootings that had occurred. And so when I got back in and saw the news, I just immediately made a couple of calls to African-American friends of mine to just tell them I was sorry and to just kind of mourn with them. And so really a in between Wednesday at noon and Thursday at 2:00, I had held in my arms and wept with three grown African-American men and then left my office to start my weekend.", "My weekend. Thursday night is my Friday night. Friday night is my Saturday Saturday. I'm here with the village church, getting ready to preach to services that night.", "And then so I went home Thursday and then of course, we saw what we saw Thursday night. And so all day Friday for us then turned to loving and weeping with law enforcement officials. In fact, we were invited down to Dallas. And so Josh and I went down to Dallas and got to be a part of the the prayer rally there at Thanksgiving Square, praying for the mayor, praying for the chief of police and having a lot of conversations with our law enforcement officials.", "And and something that struck me and that Josh and I talked about on the way home is that both the black community and the blue community, they tend to feel very similar things in these situations, although that might not know what he might not like that I say that.", "And what I mean by that is my conversations with my African-American friends have involved sadness and rage, a type of despair and my conversations with law enforcement officials. Their their emotions are sadness and rage and a sense of despair and so on. On the way back home, Josh and I were talking about how do we ever get out of this mess? I mean, goodness sakes, it's just been going on forever. When will this ever end? What's the way forward? And so I mentioned the verse that we're about to read and then we begin to talk about the implications of this verse. And here's what I want to do. I'm I'm going to talk for another eight minutes and then I'm going to invite out to join me on the stage four of our African-American brothers and sisters. Three of them are on staff. One is a deaconess here at the village church. And what I want you to do is hear from them and not me today. And so we're going to do a little panel. But I want to set up the panel like this. Micah, Chapter six verse. A lot of theologians would say that the whole of the Old Testament could be summarized in this sentence.", "And here is the sentence. He has told you, oh, man, what is good and what does the Lord require of you? But do justice to love, kindness and to walk humbly with your God.\" Now, that sentence looks like a preacher's dream. Done it. I've got three points right there. I mean, how easy is I don't even have to come on. Three points there. There do justice, love, kindness. Walk humbly with God. I'm a poem and a funny illustration away from being done.", "And yet that's not what's happening in the text. See what's happening in this text.", "Is the explanation that in order to do justice, which is action, you must love kindness and you must walk in humility. And if you cannot walk in humility and you do not love kindness, there will never be any justice, regardless of the color of your skin. And so Josh and I on the way home began to talk about the power of empathy and really the belief that out of the scriptures kind of extrapolating and distilling from the scriptures what the Bible would teach around justice is that progress in the arena, in the arena that we're stuck in this week will only go as far as our empathy will carry us, will only go as far as our empathy will carry us. And so I want to set up our panel like this in order for us to grow in empathy.", "It will require humility. You can't be empathetic if you are proud. Right. You just can't do it. Like if you think you're awesome and you've accomplished I mean, you even if your way is right and you can't you don't need to learn anything. You know what you need to know, then you can never be empathetic because you're so dadgum awesome.", "I mean, you're just so amazing in your worldview, so amazing and you're so right, how could you ever feel deeply about anybody other than those with your exact same story? It requires humility.", "Second thing it requires is presence. You will never develop empathy on Facebook or Twitter.", "It requires proximity, it requires proximity, you develop empathy by having deep, legitimate relationships.", "And then lastly, empathy and developing empathy requires sacrifice to enter into the pain of others, to enter the sorrow of others, to enter even the rejoicing of others means there's a part of me that dies. And yet I come out more human over time. I come out more human over time. Now, two things I want to set up for our panel. One is some theological truths. And second is some historical facts. And then I'm going to just invite our panel out and let them introduce themselves.", "Here's some things we embrace as Christians. So if you're a Christian, you believe this. All right. And so here's we believe in the Imago day that all men and women were created equal in dignity and value and worth by a creator that we are far more valuable as humankind than anything else in all of the creative order so that a man with Down syndrome who cannot take care of himself but needs care is more valuable than Secretariat ever was because he has been made in the image of God. And Secretariat was a horse, a stunningly beautiful, powerful horse, but a horse, not a man.", "A man has more value.", "Doesn't free up, man, to be cruel, it frees up man to be the image of God. We believe that we believe that sin has infected all of mankind. We believe that their salvation from said we believe as Christians and progressive sanctification. So let's talk about that, because when you start to pull on that, it begins to set up the framework for our discussion today. What we mean when we talk about progressive sanctification, when we quote verses like he who began the good work in me will be faithful to complete it. We're making a confession that we are not yet what we will eventually be. That's what progressive sanctification means. It means that when God sees me, he sees me by the blood of Christ as holy and blameless and spotless in his sight. But my practical experience is that I am not wholly not blameless and not without fault. In fact, if you know me, you know this isn't true. And if you know yourself, you know this isn't true. What makes the gospel so stunning is that as broken, as idolatrous. And it's foolish as I am. God loves me, cherishes me, likes me and sees me as perfect, is not biding his time for me to get more mature before he loves me. And on top of that, he uses me despite my brokenness.", "He's not waiting for me to be perfect before he uses me, in fact, oftentimes he'll use my imperfection for his glory.", "That's crazy. So let me pull it down to this, then.", {
      statementSentiment: "acknowledgingInjustice",
      text: "Because there are no perfect people and we are all works in progress, that means all systems and structures created by men are intrinsically faulty and broken."
    }, "Because there are no perfect men, there can be no perfect systems, there are systems that are better than others, but but there is no no ship in culture, society, government rule, regulation that does not have cracks in its hull.", {
      statementSentiment: "acknowledgingInjustice",
      text: "They don't exist because there's no such thing as a sinless man outside of Christ. There are men seen by God as holy, spotless, blameless in inside, but we're broken and we build broken things. And if you're a Christian, this is our world view right now. With that said, let me walk through some historical facts. These aren't my opinions. These are historical facts. There has been no ethnic group that has borne the brunt of the brokenness of systems and structures in the United States of America like our African-American brothers and sisters have, we do not have equal historical place in America."
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "History shows on repeat the betrayal of African-Americans by the very systems and structures that were meant to protect them from the Emancipation Proclamation to 40 acres and a mule that was very quickly taken back from African-Americans and handed back over to former plantation and slave owners, only to institute a new type of slavery on end to Jim Crow, to the Great Migration, into the civil rights. ER, we have nothing in our history but that the systems and structures built to protect and defend have oftentimes bore the dark edge of their blade on African-Americans."
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "I just don't see how you can argue that this is our history. This is our history."
    }, "This is true.", {
      statementSentiment: "acknowledgingInjustice",
      text: "So because this is true, this has created a very real fear and rage, a version of PTSD that haunts our African-American brothers and sisters."
    }, {
      statementSentiment: "acknowledgingInjustice",
      text: "And and so I think the only shot we have on progress. Is to develop a deep sense of empathy that is not paternalistic. An acceptance that history has broken some things that systems certainly are broken and an empathy in our hearts towards that so that we might actually mourn with those who mourn. Because I can put it in this arena, maybe it's helpful, it is not uncommon for me to have to go to the hospital because a member of our church has died suddenly and tragically. When I show up and there's the wife or there's the husband or there's the mom and dad sobbing their eyes out, I don't start digging around for the facts before I'm willing to enter into their mourning. OK, listen, I see that you're really broken and really angry. Let me tell you theologically why you shouldn't be. I don't show up and see a morning and see him broken and crying out angry, and I don't enter that space and go, you know, now, where were you when that happened? Guston, you think to do I mean, how wicked of a son of a gun would I be if that's how I handled brokenness? The inability of primarily Anglos to enter the sorrow of our brothers and sisters stems from a lack of proximity, stems from a lack of empathy and a lack of understanding of some of the systemic issues of our nation's history that has brought us to this point. And let me say you the email. I'm white. I like being white. I don't feel guilty for being white. I'm not operating out of white guilt, I'm operating out of a desire to be the people of God in a very dark time, in a very dark time."
    }, "So I don't want you to hear any more from me. I want you to hear from our brothers and sisters, men and a woman that serve you week in and week out, that love you weekend and week out, that are all over our staff structure, from central elder to deaconess to minister to resident that will be sending out. And so will you just join me in welcoming our panel today? It will not be an easy thing for them to share their hearts with us.", "One of us.", "So while they're bringing out chairs, why don't we do this? Thanks, Mike. Why don't we start with anyone? You introduce yourself, say what you do, talk about how long you've been at the village, and then we'll go from there. Yeah.", {
      statementSentiment: "passTheMic",
      text: "I'm Anthony Moore on the campus, pastor in Fort Worth. Been here about two years."
    }, {
      statementSentiment: "passTheMic",
      text: "Hey, guys, Rob Daniels, connections minister, been on staff almost three years morning, Nikki Lawrence have been at the village for about five years."
    }, {
      statementSentiment: "passTheMic",
      text: "I serve in connections with this guy for about three a.m.. And The Decompresses here, Mike Johnny."
    }, {
      statementSentiment: "passTheMic",
      text: "I am the pastoral resident at the Dallas campus, and I've been at the village just a little over two years."
    }, "OK, so I want us to just have a real open dialog and and not to worry about how that might be perceived or broken down, because really what I'm after today is for you to help us understand and get a sense of what times like this feel like. Not that we can correct those feelings or but we just want I want us to understand what it is that happens on a week like this. And and I mean, this is a you'll find out as we begin a conversation. One black person cannot speak for all black people like white people that know he's ever asked me to speak for white people. Right. So there's four different perspectives up here, and there's more than that. Right. But this is a good start. So, Rob, I want to start with you. You know, I've got to talk several times this week. Will you unpack for us a bit a week like this, like what you experience, what you feel, what goes on in your heart and head on a week like this, you know?", {
      statementSentiment: "passTheMic",
      text: "Yeah, I think my heart is is superheavy. I'm I'm tired. I'm frustrated. I'm angry. I'm mourning. I'm tired of of seeing what appears to be the genocide of my people. I'm mourning. I mean, just the death of these men and many others. And and yeah, I walk around in a in a great deal of fear. I'm just wondering, I mean, Alten for Landow Castiel, like, that could have been me. I mean, I could have been sitting in the passenger seat of my car with my wife and my son in the back seat and and doing everything right. That could have been me. And so so that provokes a great deal of fear in my heart. And so it's a heart weakness. I have a weak my wife walks around in fear wondering, you know, am I going to be like those other wives, you know, am I going to be a single mom? Will I have to will I have to explain certain things to my son that that my white brothers and sisters in Christ may not ever have to start? Yeah."
    }, {
      statementSentiment: "passTheMic",
      text: "So I want I want to keep kind of digging in with you here. So one of the things in fact, two of the things that we've talked about this week that really were heartbreaking for me. One was that that is loved as you are here and you know, you are men. I mean, I just watch people love you. And and I mean, I've seen you hold more white babies than I think anybody else here, including nursery."
    }, {
      statementSentiment: "passTheMic",
      text: "I was like the Uncle Rob here, you know?"
    }, "And and yet you shared with me this week that that even is as much as you're very much a part of us, you never really feel quite at home. And that there is there's very much a way that you don't feel safe even with us and sharing certain parts of your heart in certain ways that you're thinking. Can you unpack that a little bit for us? Because I'm kind of for me and I know I speak for a lot of us. That's heartbreaking news because we do love you so much.", {
      statementSentiment: "passTheMic",
      text: "And thanks that I yeah. I mean, I live in a city where I shop in stores where I am most of the time. The only black dude in a store. I drive on streets where I don't really see a lot of people who look like me also driving on these streets. And so and so I'm uncomfortable. There's a level of discomfort and fear in my heart because I really don't know if this is the day that I get in my car and something could happen to me. And so, yeah, it's hard. And so living in a city where I just don't see a lot of black men and so translate that into the context of the church. The village church is not how I grew up. There's a sound that I love to hear and it's not here. There's a form of preaching, a type of preaching that I grew up listening to and grew up worshiping to. That's it's just not you. And that's nothing against you. I love you. Thank you."
    }, {
      statementSentiment: "passTheMic",
      text: "But yeah, I could try to, you know, we don't need that, OK?"
    }, {
      statementSentiment: "passTheMic",
      text: "But yeah, just the reality of that is, is that I often come here to the village and I'm uncomfortable, but I, I, I dismiss my my comforts. I dismiss what I want for the sake of the gospel and the explicit truth of God's word."
    }, "But that's more important. But it's uncomfortable and it's difficult. Yeah.", "OK, anyone else want to weigh in on the just kind of feelings, thoughts from this past week?", "Yeah, I think Rob articulated so much of it well, but just to echo the feeling unsafe and then also the anger, I'm thankful for you because this conversation started Wednesday morning. It also was a Thursday afternoon before it became local. But a lot of what I was seeing in social media was when it became a Dallas thing, that's when people started to care. And there was a frustration of why was it not why was there not lament on Wednesday and earlier Thursday? And so I know that people tend to care whether directly affected, but it made it feel like people weren't deeply affected when Altan and Blando had lost their lives.", "Yeah, I would say that I echo the anger and the fear and the anxiety, but the emotion that was unique or surprising to me on this round was I felt like I wanted to withdraw a little bit. You know, I feel like in those times when you're navigating how you feel about those tragedies yourself, it wasn't my white brothers and sisters who I have dear friends who are white. It's a good gift from the Lord. But those weren't the people that I innately wanted to run to. And that was kind of new for me. I love people. I love spending time with my people. But there was this need or desire to kind of isolate this week as I process all of that, which I was surprised by, that, you know, I found myself processing a little different.", {
      statementSentiment: "passTheMic",
      text: "And I think just to reiterate what you said, that not all black people are the same. We're not a Borg, and so we don't all respond the exact same way. I've not had a lot of those feelings, but the place where although I've got the experiences, I can I can point to them. But the place where it really breaks down for me and becomes difficult is trying to explain to my three boys what the history of all of this is. That's just that's just hard to pull them together to say. This is this is what it is. This is why I don't have categories for that. I don't know how to to shepherd them through that. But I think for me, there's just there's a plea and there's kind of a crime, my own heart. And the thing that I want to say to them is, listen, the way forward is to know that that racism is not the unpardonable sin. It's just not and that there's a good likelihood, good potential that they could worship for eternity alongside someone who got the issue of ethnicity or race wrong here on this earth. And just we have that type of scandalous Christianity and grace that's been given to us. And so grace and grace out."
    }, "So thanks, Anthony.", "Um, so let me ask you, Mike.", "It's a lot of white folk, and if we could see through the camera, there's even more of them. I think what I find in these situations is like like I never want to take that they're stupid people off the table because that's just reality. But but I think what what persists in and at the village in particular is there's a desire to help, a desire to understand desire. But we can only know what we know. We don't know what to ask. We don't know what's going to be offensive. We don't know how to ask. We you know, there's this kind of feeling of walking on eggshells, but we want to know we want to you know, I remember when we first started having this conversation, I'd get I'd get emails like you keep pushing on this. We're leaving. And I got to early on just go. Well, there's a lot of good churches in the area, so you can go ahead and move your members to go ahead and get it over with. And so now what's left after four years of really having to have this kind of trying to have this conversation, try to move the ball forward is people that really want to understand and want to know, can you coach us a little like what's helpful, what's not helpful, and not just in a season like this, but like a month from now? What's helpful, what's not helpful?", {
      statementSentiment: "passTheMic",
      text: "I think what's immensely helpful is just the ability to mourn. And sometimes that mourning is being present without saying a lot to feel the weight of to be overwhelmed with in tragic seasons. And then I think in seasons that are not tragic, to be mindful of you, I think we have to think about we care about something, so therefore we'll pray for it. But I think the other way is also true, that if you're continually intentionally praying about something, your care for that thing will grow. So if we care about racial reconciliation, we ought to be praying for it and that ought to be something that's part of us. I think those two things are helpful."
    }, {
      statementSentiment: "passTheMic",
      text: "I think to things that are unhelpful is initially tragedies are not teaching tools. And so to enter into the conversation in such a way where it's what can I glean from this? How can I learn from this? That's not helpful for Landow Alten. All these officers, officer eher officers Zamarripa, Officer Croll, Officer Thompson, Officer Smith, are real people that lost their lives. They're not illustrations to something. There are families that are altered because of that. And we got to enter in the tragedy in that way. And then I think the other part of it is this. Oftentimes a very well-intentioned people will say, well, I don't see color, I'm color blind, don't strip me of that. That's part of my heart. It's also part of my heritage. Just like your your heritage in your heart is bound up in part of who you are. My blackness is not all that I am, but it's certainly not less than who I am. And so don't let's not strip each other of that. I want to give that to you and the way you see the world. And I also want to be granted that in the way that I see the world is good. It's good. Thank you."
    }, "Yeah. Thank you.", {
      statementSentiment: "passTheMic",
      text: "Anyone else on that, I would just say from a practical perspective, I would encourage you to say something where there is a relationship and I had some sweet friend texted me this week and just say, I don't know what to say, but I don't want to not say anything. And even that was such a bomb to like a fresh wound reopening. So where there is relationship, I would encourage you to reach out, where there is not a relationship, it's not the time and tragedy to do so. But that is very helpful."
    }, {
      statementSentiment: "passTheMic",
      text: "Silence, I would say, is not helpful at times like this. OK."
    }, {
      statementSentiment: "passTheMic",
      text: "Anthony, I can't help but I mean, as a pastor, wanting and desiring that Fort Worth and and all of the village church and all believers have this conversation in a way that's different than the world, we not accept the categories and the definitions and the way that they ask questions. You know, if someone were to say to you, you know, when is it appropriate time to abort the fetus, I hope that you would say, I don't want to I don't want to answer the question that you're asking. Like, I I don't want to answer that. And I think the same thing is true with regards to this conversation. There are terms and ways of asking it that don't demonstrate what we believe fundamentally. Who we are in Christ is has been reconciled, reunified. We are one in Christ."
    }, "And so, you know.", {
      statementSentiment: "passTheMic",
      text: "I think, Mike, to your point, just to give a little context to morning, when we when we say it's helpful to mourn with us, I mean, it it brings healing to see a white brother or sister cry with me, because what's behind our mourning is more than is more than an altruistic willingness is more than a philanderer. Still, this is more than a Michael Brown is it's more than an Eric Garner is more than a Sandra Bland is. It's more than the indigenous African kings and queens who never made it over here from slave ships. It's it's it's more than than than the history of being lynched as as a people. And so we mourn deeply. And so when we see these things, they remind us of something so much more deeper of a history of this country that continues to point us back to that. And and so and so we mourn rightly. And so enter into that with us and cry with us. That's what that's what's really helpful."
    }, "It's good. Hey, Anthony, I'd love for you to share. We talked a little bit about you know what? The village church is filled with law enforcement officials and officers and Secret Service agents, and you were talking last night about a conversation you had with one of our members who's who's on the Fort Worth Police Department. Can you talk a little bit about kind of how he's seen these things and and kind of what he's carrying in the middle of all this?", {
      statementSentiment: "passTheMic",
      text: "Yeah, sure. So I wanted to call him first and foremost, just as a pastor and let him know that I cared and loved him. But I also felt the weight of I want him to know that as a black man, I also care. I feel the weight and there are several and he's a white police officer. We have three or four of them in our and the congregation in Fort Worth. And and so I was reaching out and he in particular, I couldn't get a hold of him. And when he finally responded back, he said, I'm sorry, I've been sleeping. He said, but I'll be honest. He said it's a he's it's a real weird feeling right now. And to love Jesus, love people to be hurting in this situation and yet feel the fear of putting on that uniform. He just said, I'm afraid, and I think what he meant by that was I'm assuming he's saying that he's going to be misunderstood. People are going to try to kill him. People are going to try to hurt him. He's he's worried of all those things. And it just dawned on me because I was getting text from all different people. And so it dawned on me that it's interesting, these groups are saying the exact same thing. This side is saying it not because of a uniform, but because of their appearance, the color of their skin, or saying, I'm afraid I'm worried about being misunderstood. I'm worried about being hurt, all those things. And I'm worried that people are going to think that I'm going to try to hurt them. And so it's just it's an interesting thing to watch both groups say the exact same thing. And so I don't think there's anything lost by and we would if we were actually thinking as missionaries, we would go to a culture, a missionary context or something, and we would look and say there are things to celebrate about that culture and there are things that are dark about it. And we wouldn't have a problem with just kind of acknowledging the difficulty of it and the the goodness of it. And I think it's important to do that right now just to acknowledge some of the difficulty of it and then also celebrate what's good about it on both sides."
    }, "And so. So, yeah.", "Starting about six years ago, the elders of the village church kind of just put a stake in the ground and said, we're going to commit to, as best we can, becoming a diverse congregation of believers in Christ. And we're going to hire that way. We're going to try to think that we're going to try to learn that way. We're going to try to and and then it's been slow, a lot slower than I would like. But but we've got some traction in the last couple of years. One of the things I'm interested to hear you guys talk about is if if there was a church that was just kind of nailing it and and not like in a moment like this going, OK, let's have this conversation. But just a church that showed with its budget, with its staff, with its preachin, with its singing, with its with its whole heart that what they were after is not to become a black church, but but to become a diverse church where we look more and more and more like Romans seven every year where we tribe, tongue and nation on earth are represented. What would it look like to nail it? Keep in mind the audience that that we're talking to, like what does it look like to nail being serious about being a multiethnic church?", {
      statementSentiment: "passTheMic",
      text: "Welcome. Welcome to my world."
    }, {
      statementSentiment: "passTheMic",
      text: "I've been talking a lot, so I'll be quicker. The pastor in me wants to preach. You know, I think that, you know, I think proximity matters."
    }, {
      statementSentiment: "passTheMic",
      text: "And, you know, you think about the Lord inhabits the glory of of God himself and is the right hand of the father. And if he comes down and he tabernacles among us, he lives among us proximity matters. And so I think it matters that we be careful not to group up in just one place, but that we spread out as believers into hard areas and all over the world, and that we're intentional about that. And I think I would say that be careful because you're not the solution. You're going to bring your own complexities and sin. But the gospel that you have is the answer. And so and all the ways that you can hear in Flower Mound there in Fort Worth, all over the place, us being intentional to think of ourselves as elect exiles, we we don't belong here. The Lord is not creating the people to be faithful just for 60, 70, 80, 90 years, but for him for eternity. And he's using your life here to get you ready for that. So live on mission."
    }, {
      statementSentiment: "passTheMic",
      text: "And I would add to that where proximity is not possible, partnership always is. And so I think a church that's nailing it is praying for supporting church plans and church planters that are in hard context, that are different than theirs, that are saying, I'm praying for you. I'm sending you resources not to make you us, but to let you be you as effectively as you can be."
    }, {
      statementSentiment: "passTheMic",
      text: "So I think even being mindful, learning the names of inner city church plans or different context, church plans that you can be praying for and partnering with is a big way the church can nail it."
    }, {
      statementSentiment: "passTheMic",
      text: "Man, if I could add, I think we're always talking about it as a church. I think it's a fluid conversation all year, regardless of what's happening in our society. I think that's reflected in blogs, strategically, Twitter, Instagram, Facebook, etc., that we're continuing to just address kind of the history between the two groups and and push forward racial reconciliation."
    }, {
      statementSentiment: "passTheMic",
      text: "Yeah. So I love the missional aspect. And I think if we kill it, if we're nailing it, we're about mission. We're ferocious and unapologetic about the gospel and we don't mind being uncomfortable. And so and so this conversation can't just end with just us talking about it. But I think we also, if we're going to be serious about it, be about entering into uncomfortable spaces. And for some of us, that may mean moving, moving. And for some of us, that also may mean partnering. But if we're killing it, we're ferocious and serious about the gospel, not just talking that we're believers and Christians, but that we're actively sharing our faith wherever we go in hopes that some may come to know Christ who don't look like us. That's good."
    }, "So I haven't at this will be the only service I asked this question. What what am I not asking that I should be asking?", {
      statementSentiment: "passTheMic",
      text: "I think the question would be, what's next? Yeah, you hear this panel, you hear us, you see us. We all sit in a manner of grief or frustration or anger. I think the lingering question for all of us is what next? What what do we do after this? Has this just been another great panel or have you just heard more stories? But I think the question is really what's next? OK, what's next, guys?"
    }, "Lunch a lot. Well, lunch is for sure. Lunch with each other.", {
      statementSentiment: "passTheMic",
      text: "OK, I, I think is worth us sitting down and really counting the cost to I mean, it's a loss right now that we as the church, we don't have a platform to stand on and say right now to the to our country, look at us. We've got to figure it out, but I think that's what in the scriptures, ethnicities gathered together, united together, and people are trying to figure out what in the world unites these people. But the blood of Christ is what we're supposed to have. So it's a loss right now that we don't have that. It's not that diversity is the most important thing. It's that it witnesses to the truth and beauty and goodness of Christ. And so not to have it is a loss. So I think we got to ask the question, what's it going to cost us? He's going to write something that what is it going to cost us to do this? You guys have already did that prior to me getting here."
    }, {
      statementSentiment: "passTheMic",
      text: "What's it going to cost us? And then let's let's move forward, man. Let's get the gospel."
    }, {
      statementSentiment: "passTheMic",
      text: "I think at an individual level, we get serious about diversifying our friendship groups. I love Matt, how at the top of every year you kind of encourage us to look at our friend landscape. And so does everyone look like you or do you come from the same background? I think there's rich fruit in sharing stories, you know, all throughout the year and building relationships with people that are not like you. I know here at the Village Flower Mound, we have people gathering women. At least I know I'm in one where we're completely different, eight of us. But we're coming to the table and saying, I want to know you. I want to know your people, know your history. So I would encourage everyone in here to kind of look at their landscape and go, where can I grow in this area? Who can I begin to engage with? That's nothing like me. So that when tragedy happens, you're pressing in with someone you have relationship with."
    }, {
      statementSentiment: "importanceOfDiversity",
      text: "OK, so let me press I, I think last time we really kind of looked at it. You're looking at twelve thousand thirteen, fourteen thousand people at the village church, maybe 300 of them, 400 of them African-Americans, which like that's such a big move forward from ten years ago that I'm super encouraged by it and yet super depressed by it simultaneously. So I feel like when I have that conversation every year, like the push I get from both African-Americans and whites as whites are like, where are they? And African-Americans are like 32 people just invited me to lunch."
    }, "So and I'm a true story. Yeah, it's a true story. Right. So, like, I can see what I'm saying. I'm African-American brothers is like, oh, my gosh, here it is. Just a tidal wave of white invitations are about to come over. So. So how do we position in proximity? Because that's my question. And there's something going on here I'm trying to pull out.", "And and and so I think what I'm trying to pull out is that now that the shops have been built here and everything's here, like we just don't need to leave much anymore. And when you don't leave, you don't know that two exits down from us.", {
      statementSentiment: "acknowledgingInjustice",
      text: "They don't look much like us at all, and their life experience hasn't been what our life experience has been and and the proximity piece is what I'm really trying to kind of dig into that. If we've got any real shot at empathy that is a game changer, then some of us do need to move and some of us do need to change where we work out, where we get our haircut and where we and those are the kind of things I'm trying to pull on because there's just not it's not we're so far away from even being close to being able to get in proximity with one another. I mean, it's going to be one African-American for every, you know, 22 white people. It's going to be extremely difficult. But we've got this community just south of us. And it's back to your mission point that we just haven't figured out how to engage and and aren't willing to engage, it seems, other than to maybe write a check, which I think fine, but to our shame to not want to get your hands dirty."
    }, {
      statementSentiment: "passTheMic",
      text: "And so and I would say and you've said this often here lately, that we are not primarily thinking people, but we're primarily feeling people. So proximity is not just physical, but it's emotional. It is the let me read things that are stirring the hearts of my African-American brothers or at the Dallas campus of our Hispanic brothers and sisters. How do I understand their world? How do I enter in and think the way about the way things that they are thinking? How do I begin to immerse myself in what's true for them, that I have an experience? I think it's physical primarily, yes. But also a deep emotional bonding to others. Yeah."
    }, {
      statementSentiment: "passTheMic",
      text: "And there's such a danger in Christianity becoming preaching points. Yeah. This, you know, blog post. Christianity is us being elect exiles here. And just again, just to press on you with that feeling, this sense of I don't belong here in this world and so don't try to make a palace out of an outhouse."
    }, {
      statementSentiment: "passTheMic",
      text: "It's what I just said in a sermon in Fort Worth. Just this world stinks. This is not supposed to be our home. Feel the weight of eternity. Feel the weight of the glory of God. And you have that. We're demonstrating that and so live on mission to get that out. And so now these these and I just want to open up the conversation even bigger at that point, say not just thinking about, you know, African-American blacks, things like that, but just in general, Christian, think of yourself that way. Don't set up shop here. Just make your way through quickly. Live for the glory of God and for eternity alone. That's it."
    }, "So that's good. I want to tell you how I want us to kind of start to close out our time together, anything else before I do that you guys want to say before I kind of try to turn us to to maybe some responding.", {
      statementSentiment: "passTheMic",
      text: "Yeah, guys, we love you and we're grateful to enter into this wrestle with you."
    }, {
      statementSentiment: "passTheMic",
      text: "And it's nasty. It's ugly. It's hard at times, but it's beautiful. The Lord has sanctified us more into the image of Christ and so be with us labor with us. Wrestle with us."
    }, {
      statementSentiment: "passTheMic",
      text: "Let's do it together and thank you. I talk about emotional proximity and I feel bonded to your heart because you take the time to create the space and care about this deeply. So thank you. Thanks, Mike. Thanks. Thank you."
    }, "All right, guys, thank you.", {
      statementSentiment: "encouragingEmpathy",
      text: "So one of the things I wanted to address and as I kind of turn our attention more to responding to what we've heard today is the stream in which we reside in evangelicalism. And because we're children of modernity, we've been taught that the life of the mind is primary. And what we feel or what we sense or what we're really wrestling with in here has to be filtered and checked by the truth. And and listen, I. I don't take anything away from that reality. But I think that I have learned over time and pastoral ministry that for anyone to be able to heal, they must be able to express how they feel and have that feeling be met with empathy and compassion, not an exclamation explanation about why they shouldn't feel that way. So I don't know if you're married or not, but next time your wife's upset with you brothers, try to explain to her why she shouldn't use the rational argumentation about why she shouldn't be upset with you because of this and this and this."
    }, "And you're wrong because of these facts. Doesn't go well. Yeah, it doesn't. It's just not. And it just never because you should respond feeling to feel, in fact, to fact.", {
      statementSentiment: "invalidating",
      text: "And when someone shares a feeling with you and you confront that with fact, what you're saying to the person that stops them from being able to heal is that what you're feeling doesn't matter. And that can never be true. Now, what we're feeling might be misinformed, and that's where the truth gets laid on top of that. But but there's a time to be angry and to be afraid and to be confused and to be calloused."
    }, "And then so what I want to do is I want to kind of let's move out of the head and now into the heart and talk about what we're actually feeling and and do some business in that space as opposed to intellectualizing everything. Not that I'm anti intellectual because I'm certainly not. I think these issues are rooted in history that rooted in systems that are rooted in government, the root of the root and all these things. We've got to know those things at some degree to be able to have any shot of moving this thing forward.", "And yet to acknowledge today that, hey, man, I'm I'm really angry to acknowledge today.", "I mean, I'm afraid those are good things for us to be able to admit and to be able to implement and minister to one another in those spaces, I think as I've watched my own emotions this week, I think I have felt anger like legitimate kind of hot rage, like to fist fight someone anger on multiple occasions this week. And I felt deep sadness this week. And I think in both instances those feelings were justifiable. And so how I thought we would end our time is allowing the Holy Spirit of God to amplify our ability to feel deeply the mess we're in by being really honest about how we actually feel. So one of the ways it's helpful to kind of help that empathy begin to grow in you is to think about just some facts that are true right now. And here's some facts that are true right now.", "There are five police officers, five police officers, families who are in church this morning. Many of them had young children. One of them had just been married two weeks ago. And the carnage that has been left behind there is heartbreaking five men who made less than 50 grand a year, who chose to, according to Romans, 50, restrain evil for the good of society are dead.", "They're gone. They've left morning children. They left mourning spouses. They've left mourning friends. They're dead. And there's a four year old little girl out there who watched her daddy bleed out and gasp for air.", "Before his life left him, right now, she exist, a four year old little girl trying to process that. Right now there's a 15 year old boy.", "Who's heartbroken and doesn't understand what just happened to his daddy, that he's seen a video of his dad being slammed to the ground, pinned to the ground, and then shot multiple times. These are real people that exist. And when you and I shift gears into wanting to know all the facts that would have happened if instead of just lamenting it shows that there's something broken in us, it shows something's gone awry in us. Christian Smith, who I love, he's a sociologist, professor at Notre Dame. He said one of the greatest divides in America is between the way black evangelicals and white evangelicals see the world, that the chasm is not so much even in our society as much as it's in our church.", "And for Anthony's point, where where the church can demonstrate empathy, understanding and togetherness here. We've got a shot, we've got a shot, so here, here's what I want, I want to ask you to trust me and if you're a guest here today and you're like, look at this, I've just been here an hour, I don't trust you. I can live with that. Don't trust me at all. But but here's what I want.", "If you would be so honest as to just confess. Hey, that in all of this man, I just feel anxious and fearful. If that's you, would you just raise your hand? I just feel anxious and fearful. I'm a bit confused. Frayed.", "OK, now here's where I need you to trust me. Would you just stand up if you raise your hands? I'm anxious. Where would you stand up where you are? You don't need to feel embarrassed by that or you just stand up where you are now. Now, here's what I want to do.", "If you're sitting down and that's not an emotion you're feeling, you don't feel afraid or anxious, you're feeling something else. I'm going to do one other one after this. What I want to do is in our position of privilege. I want to pray over these brothers and sisters, the peace of God, the peace that passes, all understanding that fear would be driven out and that love would replace it. And so here's how we do that. At the village, we're a bit Baptist hostile. All right. And so we're going to gather around these who are saying we're just going to lay a hand on him. And that's not voodoo. That's not magic. That's us saying we're with you and we're going to pray out loud that God would establish peace in their hearts. I'm going to ask you, even though you gather around these who are standing and just lay a hand on them, and if all of this is too much for you, then feel free to just stay seated. But if you be so bold, will you lay a hand on these brothers and sisters? And then here's how I would ask you to operate, that you would just pray out loud for these brothers sisters so that your prayers out loud might encourage their hearts. The good thing about our king is he will not get confused at what's being said here. He will hear every utterance and every utterance of the heart. He will hear what we should pray and don't know how to. But we begin to pray out loud for these brothers and sisters. You take it from here. You pray for him for just a moment or two. Father, you know, it's scary to be us.", "You are sovereign, you know, all things we are limited in scope, limited and understanding.", "Your sovereign plan in in your divine essence.", "Makes sense.", "And is beautiful and good and right, but to us here.", "It feels broken and scary.", "And to the spouses of our law enforcement officers, it feels terrifying.", "And to our African-American mommies and daddies, it feels terrifying.", "So we pray, spirit of God, that you'd bring peace to our hearts. I need you to bring rest to our hearts that love would drive out fear. We ask you to do this because this is not some sort of intellectual game, the mind feeds the heart, but but the heart must be softened to hear what is true. And so will you soften us, stir up love in our hearts for your beautiful name, I pray. Amen. Thank you.", "Why don't you go and have a seat and I want to do one more, because I think on top of hearing this week, fear and anxiety and confusion. I think probably the most consistent emotion I've felt and heard expressed this week is the emotion of anger, of rage, of wanting vengeance, of being just really angry and not really knowing what to do with that. And if you'd be so bold, would you just confess? No, no, it's not fear. Like, I'm I'm friggin furious. I am angry. I feel boiling in my blood.", "So let me say this about anger real quick, and then we'll see if more of you will be honest.", "The problem with Christians and anger is somewhere along the way, Christians have forgotten that the Lord actually commands us to be angry. We have taken Jesus in our day and age and made him kind of Tinkerbelle with a little pouch of fairy dust, who never gets upset, who's not the same Jesus that flipped over tables and drove people out of the temple, who isn't the Jesus that rebuked the Pharisees and Sadducees for how they oppressed and put heavy chains on people. And so when you make Jesus Tinkerbelle, you don't have category for Christian rage. But Paul clearly tells us, in fact, it is a command in Ephesians four.", "Be angry. But don't sin now. Now, why why are we to be angry and not say because vengeance belongs to the Lord? Because what the Lord has in store for evil doers is far greater than anything I'd be able to do with my pettily human hands, and maybe you're all swept up and thing on my hands. I don't know what God has in store. For those who oppress and for those who happily participate in injustice.", "Is a far worse wrath than anything human hands could divvy out, so we trust that justice belongs to the Lord. It doesn't mean we don't act, it doesn't mean we don't move. It means we are freed from needing to exact vengeance because our God will. He is gracious. He is a healer. He is merciful, and he will slaughter.", {
      statementSentiment: "passTheMic",
      text: "The oppressor."
    }, {
      statementSentiment: "passTheMic",
      text: "And he will destroy and disembowel, according to the scriptures, those who happily participate in injustice. So we get to be angry because it's right to be angry. And trust that God will extend grace and forgiveness and heal, leading to repentance, or he will justly and right judge and in that space we get to sleep."
    }, "So if the emotion that's just kind of been driving in your heart and in your head, the one you've been trying to wrestle and fight with is anger or rage, I want you to just stand up for me now. We want to pray for you and pray kind of the same thing. Pray the peace of God over your life, a confidence and in God's righteous indignation against those who would oppress and unjustly harm.", "So we're going to do the same thing now let's gather around these brothers and sisters of ours and lay a hand on him again. Maybe this is your first time here. Maybe you don't want anybody's hand on you. You are completely free to go. All right. I hear what he's saying. Don't put your hand on me and we won't put our hands on your right. This is just what we do in time. You'll let us. But this is a first date stuff, right? It's not time later.", "And so we want to pray for these brothers and sisters the same thing, that God would establish peace in their hearts, that he would heal that rage, that they could feel a release in trusting that God.", "Has vengeance in his right hand. Let's pray for these brothers and sisters of ours who are standing again. Let them hear your voice, pray for them out loud, let their healing come from the spirit of God through the prayers of his saints. Let's pray together.", "Spirit of God, we just confess as the people of God, that we are angry. At the state of affairs this past week, we are angry at the death of these seven men, it seems like madness to us.", "And so we just want to cry out to you in just a raw honesty that that man, we we know you're at work in this mess, and yet we feel a sense of anger and rage, even just anger and rage, not even sinful anger and rage, but justifiable rage.", "So we ask you, Holy Spirit of God. Increase our confidence in your sovereign rain guard.", "Allow peace to wash over us, let empathy and pity replace rage.", "But we feel deeply the loss of our African-American brothers and sisters, that we feel deeply the loss and the fear among our law enforcement officials and and might we say that the see that the black and the blue have been pitted against one another and in a type of broken system that really sees both of them, both of them impede.", "Of the dignity, do their humanity.", "And so we just ask Holy Spirit of God do work in us as individuals, in us as a church for a time such as this.", "We need you, Jesus, we need you.", "Not just for individual salvation, although we praise you for that, but make us your people. Thank you for these four brothers and my sister and so many more who have stepped into this place as a type of missionary where music is and exactly what they would like and and preaching is maybe a little bit different. And yet they're here because they believe your truth, your word, bless them.", "Help us through your beautiful name, I pray, amen.", "By and large, the way, and again I think I've already said this but I'll say it again. I'm white. I don't feel guilty for being white. I've never really wrestled with \"I wish I wasn't a white guy\". It just hasn't happend.", "But I will say this. That I have been taught my entire life that racism is wicked acts carried out by wicked people. That's what racism is.", "So in my education and in my growth as a human being, the idea that there could be systems and institutions that are skewed in my direction--because I did not grow up with a silver spoon in my mouth. We grew up poor. Had a home repossessed, a car repossessed. We came out of next to nothing.", "but, when I learned about forty acres and a mule, it was about five minutes of an hour long class. When I learned about the civil rights era and what was going on in that, it was thirty minutes, forty-five minutes of an hour lonng class. I knew nothing of the great migration. I knew nothing of Jim Crow law. I knew nothing of these realities that have so shaped and tilted the instiutions in my favor.", "So that racism is not just wicked acts perpetrated by wicked men, but rather the silence  of those who enjoy privilege being unable to empathize with those who have not recieved such privilege. And I certainly know that I have emails coming for me this week. And yet, I'm just fully convincedby the word of god  and that in history that what  I'm saying is true and that there will be no real healng until we're willing to lean into this.", "Whites-- you don't need to feel guilty about  slavery or feel guilty about Jim Crow. You don't need to feel guilty for these things. That's not what we're trying to do. What you need to feel is honest empathy and not in a way that's paternalistic.", "Just that we might weep. We might long for healing. This festering wound might finally by the spirit of Christ be driven out of our interactions and understandings of one another.", "So we need to pray. We need to act. We need to continue to have this conversation. And so my hope is that in the months--weeks--years to come that more and more and more we'll see what Jesus can do here."],
        Y = ["A man, well, this is what it's all about, this is why we gather together as a church to be together under the lordship of Christ, calling out for his presence, receiving comfort and hope, and hopefully today a challenge from his word. I invite you to grab your Bibles and turn to Hosea. Chapter six, the Old Testament Book of Hosea. I need to confess to you today that with all this going on this week, I have really struggled with what to preach on this weekend. I had a message planned and was in the middle of writing it as the events on Thursday evening began to unfold. And I certainly don't want to sound super spiritual or sensational in any way. But after talking with Pastor Graham, he confirmed what God was speaking in my own heart, and that is that we need to address head on from a biblical standpoint what we see going on across our nation in these days. And so I really have been praying and seeking the Lord and I trust sensitive to his spirits leading regarding this message today.", "I woke up yesterday morning and as I do every single morning, go first to get my cup of coffee and then to an area in the house where I can read the news and read my Bible.", "And we had ship the kids off to their grandparents. And so it was gloriously quiet. Thank the Lord for grandparents. And I turned on the news and began to read it. And one of the major outlets, CNN, I want to show you the image here on the screen, had the headline. And in big, bold letters were these words, Who can heal America? And I read the article, I looked at the headline and I thought, this is the title of the message today. And it is the question that I hope to answer in our time together this morning. Who Can Heal America? The article begins by detailing what happened this last week. And the shooting of two African women out in Sterling in Louisiana is still in Minnesota. It then goes on to outline what happened here in our own backyard, the city in which we love. We saw the worst loss of life in public and police life since nine one one.", "The article then goes on to quote House Speaker Paul Ryan, who said this. It's been a long week for our country. It's been a long month for America. We've seen terrible, terrible, senseless things, House Speaker Paul Ryan said on Friday, describing the latest scenes of horror and loss. The article continues and it says political leaders, many like Donald Trump and Hillary Clinton, with crucial elections on their minds, are getting used to tearing up their schedules in the wake of tragedies that shocked the nation.", "Yet despite all of the calls for unity, the prayers offered and the platitudes voice, there are few signs yet that any candidate, lawmaker, law enforcement leader or civil rights campaigner has mustered the trust and respect of voters needed to knit a mournful nation together and fresh in the stale national debate on race and violence. Thus, the question is asked who can heal America? And it's a good question.", "The world today is asking and looking. And saying to everyone, is there someone out there that can bring hope? Is there someone out there that can bring healing to our country, that can stop all of this violence that we're seeing as a church?", {
      statementSentiment: "theAnswerIsJesus",
      text: "We must be ready and willing to provide for them and answer. And as Christians, we know what the answer is, right? I mean, the answer is Jesus. He is the only hope and the answer is revival. We need a fresh wind of the spirit of God to move through our country unlike ever before."
    }, "I sent a tweet out on Thursday evening as I was watching the news and just expressing how broken hearted I was over the brokenness of the world around us.", "And I said in that tweet, Only Jesus can fix this. And I quickly followed it up, saying, this is not a trite saying, this is the truth.", "Only Jesus can fix this. And so we need him more than ever. We need revival.", "And I believe that we have hope today because revival has happened in our country before, I have in a very small book in my library a book by the name of America's great revivals, and it outlines a series of revivals that swept through our country from the year seventeen thirty four to eighteen ninety nine. And of course refers to the second great first and second Great Awakenings. And under the preaching of men like Jonathan Edwards and George Whitfield and John Wesley and just a two year span, we're told, stories of three hundred thousand people committing their lives to Christ and renewing their hearts to him just in two years.", "It was unlike anything this nation and its young history had ever seen before. The first Great Awakening. And then fast forward one hundred years later, there was a man by the name of Jeremiah Lanphier. He was a layman and he began to be very burdened for the country that he loved. He saw it declining spiritually, and he he wanted a fresh wind of the spirit of God. He wanted God to to come again and return to the country that he loved to bring revival. And so he began knocking on doors. And for three months, he went door to door, home to home, business to business.", "And he been in, again, inviting people into a prayer meeting and they decided they would have the first one on a Wednesday at 12:30. And so they reserved a little room in their church. And after three months of inviting people to come, six people showed up to pray that day begging God to move.", "They weren't discouraged at the end of that meeting, rather, their prayers encouraged them in their spirits and they said, let's meet again next week. We'll keep getting the word out. And if anybody shows up, this is of God. More people will come. The very next Wednesday, 20 people showed up praying for revival. Fast forward a few months down the road.", "Three thousand people.", "Showed up to pray. They had to move it out of that little building and even out of that little church and they were meeting and businesses and homes all over New York City.", "Six months later, ten thousand people were gathering all over New York City to pray for a mighty move of God, what happened in New York and made his way to Philadelphia and from Philadelphia to Boston and Boston to Chicago and under the preaching of men like Charles Finney and D.L. Moody, we saw this second great awakening where thousands upon thousands.", "Gave their life to Christ and revival swept through our country. And most people point back to that one prayer gathering starting in the heart of one lay person, the authors noted this book says revival has been. And it still is the product of repentance and prayer and dedication.", "We are reminded that nationwide spiritual upheavals have begun when God's children minister and laymen have fallen to their knees and sought power from on high. The God of Edwards and Lanphier and Phinney and Moody is our God today. And to that I say Amen.", "Hebrews 13 eight. The Bible says that Jesus Christ is the same yesterday, today and forever. And so when we read the stories of revival, when we hear about the stories of God moving in a powerful way, we see this is what our troubled nation needs. And if he's done it once, I want to cry out with my voice.", "Lord, do it again, Lord, do it again. We are in desperate need for a mighty move of your spirit.", "And so the question.", "But I've been wrestling with in these past few weeks, really? Is as individuals, as a church. Is there a position that we can take?", "Is there an attitude that we can foster?", "Is there a petition that we need to make, is there something that we can do to bring about this third great awakening and usher in the presence of God to bring about revival that we so desperately need and desire and to bring healing to this country? Is there something we can do? And I believe there is find the answer and the solution to our problem in Hosea, Chapter six.", "Starting in verse one, the Bible says this.", "Come, let us return to the Lord. It's an invitation. Come, let us together, return to the Lord. If you're looking for a practical takeaway, if you're looking for application, today's message, it's that one word, the word return. It's a powerful word. In fact, I want us to say it together. Return. It's mentioned over a thousand times in the Old Testament, twenty three times in the Book of Hosea alone.", "It is a major theme in this Old Testament.", "But come, let us return to the Lord. For he has torn us that he may heal us.", "He has struck us down and he will bind us up after two days, he will revive us and on the third day he will raise us up that we may live before him. Let us know.", "Let us press on to know the Lord. His going out is assures the dawn he will come to us as the showers, as the spring rains that water the earth. Now, I have to tell you, I love the Book of Hosea, a 14 chapters long, you can read it in one sitting. It is rich in historical content, poetic in form, written in the 8th century.", "Its message is one that highlights the faithfulness and love of God, Israel at this point in its nation's history. It is is at an historic low mark. The people are depraved. They're living in sin.", "They've drifted so far away from God. They don't even know how far they have fallen. In fact, the parallels between Israel then and America now are striking.", "Just listen to some of the sins that characterize the nation of Israel and see if any of it sounds familiar. Number one, there is swearing and falsehood.", "The Bible says at this time, in nations of Israel's history, there is murder and bloodshed. Adultery and perversion is prevalent, it's everywhere.", "Gross idolatry of all kinds, Israel was making foreign alliances with nations that had no business making foreign alliances with. The people are said to be full of deception and drunkenness.", "There was a failure to heed God's continual warnings, they're called an ungrateful people, and they were no longer giving God glory for anything. And here's an interesting fact.", "As part of God's divine judgment upon them, he begins to send evil kings to rule over them.", "Sum it all up, there are no longer being faithful to God. They're no longer living under his rule and for his purposes, and this is where we pick up with.", "He was a prophet raised up by God and like all of the Old Testament prophets, he had a message, a verbal message to communicate to the people of God that God so dearly loved.", "They were his treasured possession. But unlike some of the other prophets, Hosea wasn't just to preach a message, he was to leave a message out in front of him.", "And it was a bold, explicit message. I wish we had time to unpack the tire story, but for the sake of time, I want to share with you three major sins that the nation of Israel was guilty of and that God points out and calls out in this people that he loved so very much. We make our way to Hosie, a chapter for.", "And Hosea, chapter four, verse one.", "The Bible says this here, the word of the Lord. Children of Israel for the Lord has a controversy. Some of your Bibles say the Lord has a charge. It's a legal term. It's a judicial term. It means a rebuke, a quarrel. It's as if God rolling up his sleeves goes, I've got to fight to pick. And this is what it's over.", "He says there's no faithfulness. Or steadfast love. And no knowledge of God in the land. Three major sins that God calls out, he says there's no faithfulness. There's no integrity, there's no fidelity, and as a result, the very foundations of the nation of Israel is crumbling. There's an apathy towards God, there's a complacency toward God, absolutely no faithfulness. He says there's no steadfast love, no loyalty toward God. One of the strongest words we have in the Hebrew language right here, no steadfast love, no loyalty, neither towards God nor towards one another. So there's no compassion, there's no going the extra mile, everyone's looking out for self, no steadfast love.", "And he says there's no knowledge of God in this case with the two ideas, one is a personal relationship. Israel had entered into a covenant with God. There was supposed to be a personal relationship there. He was their God and they were his people.", "But through the years and the spiritual decline of the country, they have forsaken this personal relationship with God and the other idea is there was no knowledge of God in the first place because as we'll see in a moment, God's law wasn't being taught anymore. So how could there be a knowledge of God? Now you think about where we are as a country. No faithfulness, no steadfast love toward God or one another, no knowledge of God in the land, and when these three sins are present, what is the result? It'll be the same result for us as it was for the nation of Israel. Look at verse two and three. There is swearing, lying, murder, stealing, committing adultery. They break all bounds where these things are present. You're going to have people pushing the limits, crossing all of the boundaries, doing things you could never conceive someone to do. And bloodshed follows bloodshed. Therefore, the land mourns and all who dwell in it languish. And also the beast of the field and the birds of the heaven and even the fish of the sea are taken away. And so look at what is taking place here. He's saying sin affects everything.", "It affects your relationship with God, it affects your relationship with others.", "In this text, we see it even affects your land. It's the devastating consequences of sin. Of going our own way instead of going God's way.", "Now, what I want to do is, for a brief moment, take a step back and.", "Ask this question, how on earth did Israel get here again? It wasn't always this way. His treasured possession, he led them by a promise out of slavery and into the promised land, a land of blessing. How did they get here?", "Where can you point?", "What happened, who is to blame? The text answers that for us, and I think the answer will surprise you look at versus four and five. Yeah, let no one Conten let no one accuse. He says don't point the finger over at this group and say it's your fault over here that you've gone so far away.", "Israel, don't point it over here at this group and say it's because of you over here in the decisions that you've made that the nation has gone so far down the road. He says don't they don't contend with one another. Let me tell you who to point the finger to.", "He says, my contention is with you Opry's, you shall stumble by day and the prophet shall stumble with you by night, and therefore I will destroy your mother. God places the blame for Israel's demise as a nation first and foremost, squarely on the backs of the spiritual leadership of that day. Says you want to know whose fault it is. It's the prophets. It's the priests. It's the pastors. Put it on them.", "I got to tell you, that was not the answer I was looking for in my study this week.", "But it's true.", "It demonstrates a principle that we see throughout scripture. And that is as the leader goes, so goes the people. Listen, if we want revival to come to America, it must first come to the church.", "If it's going to come to the church, it must first come in the heart of the pastors and the spiritual leaders of the DE. If we're not preparing our hearts and asking God for a fresh move of his spirit in our life, you can rest assured it's not going to happen in the country. Now, there's a remnant of faithful pastors that are boldly declaring God's truth, living and upholding his principles and his purposes. And I hope that we here at Prestonwood, a spiritual leaders, I hope that we're in this room. But it is a general conclusion that you can look at the spiritual leadership of a nation and see whether or not that country is healthy or not.", "And as a leader goes, so goes the people. Pastors and spiritual leadership, deacons, Bible fellowship, teachers and directors, as we go, so goes the church.", "Dad's father's. As you go, so goes the home.", "CEOs, business leaders, as you go, so goes your business.", "As a nation. As our president and political leaders go, so goes the country.", "The leader goes, so goes the people, and if we want America to be hild, it starts with God called men and women living out there calling and integrity and character and faithfulness, because if we don't, it starts a chain reaction that runs throughout society. Listen to our friend, Dr. Tony Evans. Who in an article just released yesterday morning in the Washington Post titled The Article, says this America's current violence can be traced to Christians failures. Listen to the article. Dr. Tony Evans writes, These recent spate of violence, like all of our worldly problems, have happened because Christians have failed to advance God's kingdom, to spread the faith and to do so in a loving, unified way. God must be the days of only pointing fingers at others to fix what they may never fix. Our nation's ills are not merely the result of corruption or racism. Although these are evil, our troubles can also be traced directly to ineffective Christians. One of the real tragedies today is that the church as a whole has not furthered God's light equity in love and principles in our land in order to be a positive influence and impact for good in the midst of darkness, fear and hate. He's stating exactly what Josia is, why are Christians failing to penetrate darkness and advance God's kingdom? Why does the church seem so impotent? And not further in God's light and equity and love, Hosea's says it's because the spiritual leaders are no longer being faithful to God. The spiritual leaders are not heralding truth. The spiritual leaders aren't leading the way. In fact, he says, the only thing they're doing versus five here in the nation of Israel is stumbling continuously. Do you see it? And because the spiritual leadership is stumbling, God says, I will destroy your mother. That is the nation of Israel.", "So look and understand the massive implications.", "For spiritual leadership to be walking with God. It's why it's so important that you as a church, pray. For the spiritual leaders of this church, not just this church, but.", "Spiritual leaders all over America that we would stand in pulpits and we would preach God's word and we would lead congregations to be salt and light, to demonstrate God's love and justice and faithfulness, if we ignore God, if we're unfaithful to God, if we just teach what itching ears want to hear and we insulate ourselves in our holy huddle, staying away from engaging the culture at large, the result could just be the same as that as it was for Israel, where God says I will destroy the nation.", "And so I read this and I wonder, is this what we're seeing played out today? We are paying the price.", "Because the spiritual leadership has not and is not doing their job of proclaiming and living out what God's word clearly says that we're destroy there in the second part of verse five, it's an interesting word. It means to lay waste to.", "To ruin, to cut off.", "Is the picture of a violent disaster that creates utter destruction.", "Wiping it out. So when we say. We need to return to the Lord. There's a sense of urgency that goes along with it.", "Hosea, for God points the finger at the spiritual leaders, as a result, it's run through society and say, a Chapter five, he begins to blame national leaders. You see this here, this Opry's pay attention to the House of Israel. Give Erro House of the King. How he judges them both, he says judgment is for you.", "And so what do we do?", "I mean, we read in Chapter six this the takeaway.", "We are to return to the Lord, we are to return to the Lord, we are to return to the Lord.", "But herein lies the problem.", "Because even when the nation of Israel wanted to return to the Lord, they didn't do it in a way that honored him. And so look at what happens in versus four and five their deeds. They don't permit them to return to their God for a spirit of whoredom is within them. And they know, not the Lord. The pride of Israel testifies to his face. A spirit of whoredom for the kids in the room.", "Think cheating on a test, not being faithful, not being true. He says, you say you want to return to the Lord, but your deeds don't allow it in, your pride testifies to your face.", "This is our problem. It's pride. Now, if revival is going to start, it starts in the pulpit with the spiritual leaders and then it starts in the church.", "I mean, we can't.", "Expect revival to come to America if it doesn't happen in our hearts, if it doesn't happen in our lives. So as Christians, this is a call to say, you know what, we've got a term from the pride of doing our own thing and going our own way, and we've got to humbly seek the face of God. More on that in a moment. But as a nation, as a people, if we have any hope of healing as a nation and as a people, we have to turn from our pride. It is testifying to our face. It is our pride that is separating our nation from God.", "Pride testifies to our face, we don't need God. We're rich, we're wealthy, we're comfortable.", "We don't need God, 20 million dollars in debt, we'll just keep spending, we don't need God. In our schools, nineteen sixty three, let's take prayer out of the schools, we don't need God there, we're only God and our pride testifies to our faith.", "God, we don't need God to define and determine life, we get to make those choices and our pride testifies to our faith. We don't need God.", "Freedom of religion, which is a right that we have as Americans to take our faith and what we learn here and know here and love here, use it in the marketplaces and businesses and schools where now we're saying we don't need freedom of religion, freedom of worship. You come and do what you want to do within the four walls of the church. But don't take it outside of there. We don't need God.", "And in this hour, Pride is testifying to our base, what is at the root of this senseless shootings?", "What is at the root of hatred and prejudice and racism?", "Is it not pride testifying to our face? And so when tragedies like Thursday evening happen, we often hear where is God?", "We need God.", "But until we humble ourselves first as Christians, as a church and then as a nation, till we humble ourselves and return to him in a way that honors him, we will never find him. Look at four six, one of the scariest verses in the Bible with their flocks and herds, they shall go to seek the Lord.", "Where is God? Let's find him. They shall go to seek the Lord, but they will not find him, for he has withdrawn from him.", "That's what pride does. That's what going our own way does. God repellent. He knows our heart, he knows if we're just offering lip service. And pride and pretense is a stench in its nostrils, so much so that if we begin, if we don't turn returned to him in a way that honors him, look at verse 15 of chapter five. The first part, God says, I'll return again to my place. It's a picture of a lion who's gotten up to roar. And just returns to its den.", "So how do we. Return in a way that honors God.", "How do we return in a way that gets God's attention?", "We have to implement Josia Chapter five, verses 15 through Josia, Chapter six, verse one, because until we do, there will be no awakening. There will be no revival. So this is what we are hoping for, this is what we're pleading for this morning, there's hope in this verse.", "How do we return in a way that honors you, God, look at the second part of verse 15, we must acknowledge our guilt so God returns to his place until until we acknowledge our guilt, until we seek God's face and in our distress, earnestly seek him.", "This is the recipe, this is the posture, this is what we must do if we want and move the spirit of God, if we want our country healed, this is what we must do, this type of returning to God where we acknowledge our sin and seek his face and earnestly seek after him this type of returning to God, he will never turn away. In fact, he will come running to us. It's the scriptural promise of Jeremiah twenty nine 13 that whoever seeks me and seeks me with their whole heart, he will find me. This is a seeking after God with our whole heart.", "No one is confession. That's what we must do. He says, acknowledge your guilt.", "It's time to confess our sins individually, corporately, and then we stand in the gap as Christians for our country. We must confess our sins first, John one nine. If we confess our sins, he is faithful. And just to forgive us and to cleanse us from all unrighteousness, revival begins in our heart. It's been defined as nothing more, nothing less than a new obedience to God. And this obedience begins when we begin to confess not just our actions, but the inclinations of our heart. We get along with the Lord by the power of his Holy Spirit. We say, God, search me. Is there racism in my heart?", "Is their prejudices, their hatred, Lord root it out.", {
      statementSentiment: "encouragingEmpathy",
      text: "God, do I care for my neighbor when I watch these images on the screen and I see them come across social media and I don't know them and I'm so far away from it and it doesn't affect me, God, is my heart not soft to your hurts in my mourning with those who mourn, weeping, with those who weep."
    }, "We must confess our sin. I read a passage like this and I see where the Nehemiah is who want to rebuild the broken walls.", "Where are the Daniels who want to stand in righteousness before unholy kings and say, I will not bow down?", "Where are the Ezras who will take God's word and they will study it and they will meditated and they won't allow it to leave their mouth, chew on it, they long for it.", "We must forsake our pride and confess our sense that once again, God turns and hears our cry. Secondly, consecration, he says, seek my face. That's an urgent call to serious prayer and holy living. We are to seek the face of God. Second, Chronical seven 14. If my people again, it starts with us. If my people will call on my name who are called by my name, will humble themselves, starts with humility and pray and seek my face consecration and turn from their wicked ways. I will hear from heaven and will forgive them and I will heal their land.", "We must humble ourselves and seek his face. One of the action steps that Tony Evans calls for in his article regarding what can churches do in times like these? He says, we need to call for solemn assemblies where we gather together in prayer and fasting. We ask for God's manifest presence to emerge and our culture. You know what's beautiful this has been in the heart of our pastor is why he called for just a few weeks ago. When fall Wednesdays begin that we will gather together to pray with a solemn assembly. And when wed start in the fall will come in this worship center we're working right now and how that's going to relate to other programs that go on within the church. But we're calling the body together to pray and to fast and to ask God to move, not going to do it unless it starts in our heart. This is a result calling and crying out to God. God, I want to desire what you desire, want to hate what you hate. I want to love what you love. I'll go wherever you go. Now, consecration does not mean you have to have it all together. Listen, the invitation days you come just as you are.", "It just comes with an honest heart. This has got I'm tired of going my own way, doing my own thing, here's the blank check. Fill it in. I'll do whatever you tell me to do. My yes is on the tape. That's consecration that's returning that God honors. Thirdly, and finally, commitment. We confess, we consecrate we separate ourselves where we we we live holy lives and then we commit to this, he says. In their distress, they earnestly, earnestly, earnestly seek me the personal relationship here in their distress.", "This has been a distressing week. You know what we usually do in times of distress. If you're like me, you stress.", "Are we get fearful?", "Oh, we throw up our hands and say, man, this world's going in a different direction, there's no use and pray and there's no use in doing good deeds of no use and being salt like my I can't make a difference. So you just throw your hands up and you insulate yourself. You put your guard up. No one can be trusted.", "Ansted godson's don't do that earnestly, seek me like the Sonus earnestly desire me like Jacob, who said I'm going to the prayer room and I'm not letting go God until you bless me, until you speak to me, until I meet with you. This is a returning that honors the Lord. That's why on the invitation of Hosea's six one, it's come, come, let us return together.", "Come and Jesus puts a face on this invitation to come. How often do we see in the scriptures, Matthew. Eleven twenty eight. Come to me all you who are tired and have heavy burdens and Jesus said I'll give you revelation chapter twenty two. All who are thirsty, all who have thirst. Indeed to be quick come to me and I'll satisfy your thirst.", {
      statementSentiment: "theAnswerIsJesus",
      text: "Jesus is the ultimate answer. He's what we need. So he says Come, come to me."
    }, "That's God's ultimate rescue plan because the people of Israel continued to rebel against God and rebelled against God, and they wouldn't come to him and say, if God says I'm coming to you in the person of Jesus Christ, and he came and he lived a perfect life and he died a sacrificial death on a cross shed his blood for you and I. And he raised from the dead, demonstrating that he has the power to forgive our sin and restore us to a right relationship with God. And if he can raise from the dead, he can heal America. And so we come to the Lord. We return to a way that honors him. Look at this. Let us return to the Lord. Let us this is corporate us together. This is a call for us together. Return to the Lord, for he has taught us a picture of a predator shedding shredding its prey with its claws that he may heal as he has struck us down, that he will bind us up.", "After two days he will revive us, and on the third day he will raise us up. Listen, America may be knocking on death's door, but God can raise us up. He can raise us up in a moment.", "His first speaking in light of the New Testament resurrection of Jesus, why, so that we could live before him. I read this and I say, Dear God, is this what you're doing?", "Are you tearing us so that your loving hands can heal us like a surgeon? Are you breaking our bones so that you can set it and fix it and make it all better again? Are you striking us down so that you can bind us up? May it be. God may be.", "And when we return to the Lord. In this way, look at the results, this is what we want.", {
      statementSentiment: "theAnswerIsJesus",
      text: "Let us know, let us press on to know the Lord we return to him. His going out is as assures the dawn and when we return, in a way that honors him through confession and consecration and commitment. He will come to us as the showers, as the spring rains that water the earth. This is what we want, a downpour of the presence of God. This is an awakening. This is a revival. Can who can heal America? The one who comes like the rain. And so we say, come, Lord Jesus, like the spring rains that water the earth rain your presence down in our hearts in this church and in the country that we love."
    }],
        D = ["I believe this morning that the times that we are living in, God has perfectly prepared us for the trouble that we see, the pain in our nation, the hatred, the disappointment, the injustice, the violence. The morning, so we either bury the dead and move on or we rise up as the body of Christ and say we're here to make a difference. If, in fact, there are 300 plus million professing Christians in America, we can make a change.", "I want you to open your heart today and prepare to hear from my heart and hopefully the heart of the father, what he has in mind I want to talk to you about. And there's no ego in this title, but it's taken totally from the word of God.", "And I want to talk to you about how to stop the violence in America. God is concerned about violence. I don't know if you understand this or not, but that's what got the world flooded in the Old Testament. The Bible says that God looked upon the Earth and saw that it was only filled with violence. And he said, I'm going to drown at all and start over. God is concerned about violence.", "Father, I pray that you be with us today for this word. I pray that you open our hearts, our eyes of understanding our ears to hear and send us out of this place as change agents in the earth.", "Because for this hour, we came into the world in Jesus name. You may be seated. God bless you.", "I want to welcome our other campuses and I want to say how proud I am and how thankful for the leadership that our pastor Stephen here in this House and the entire team and all of our campus pastors have shown in our leaders true colors come out in times of crisis and we are in a time of crisis.", "I came home today to be here with you because I believe it's important for me to be here in our city during a time of crisis.", "I was on vacation and I was fulfilling a lifelong dream, or at least for a number of years, I took my boys, Steven Stacey Thate, one of my grandsons that was available to go to Alaska for a fishing trip. And we were having a great time. And then these things begin to happen. And I actually had plans to come back down and fly through. I did a conference for Pastor Gordon last week in Seattle and then we went from there to Alaska. So I was coming back to Seattle, Las Vegas, Flagstaff was my flight pattern. And so when I was on the way from Seattle to Vegas, I just decided, I'm not going on to Flagstaff, I'm going to go to Dallas. I need to be in my city.", "This is the city I love. This is a city of my calling. And I believe it's the place of our anointing and authority. I believe the place God has called you is a place he gives you authority.", "And we're here to bless the city. We're here to call some things in to order in the spirit, because enough is enough.", "And these demons of violence, we don't fight flesh and blood.", {
      statementSentiment: "sanctimoniousTrivialities",
      text: "We fly. We fight high principalities that are in the middle heavens who want to destroy everything that's good. And one of the reasons that Dallas is under attack specifically is because Dallas is a tremendous city of destiny. Some of the greatest revelations and revivals in history emanated from Dallas. Dallas is a special place to God. Some of the greatest churches in the world are in Dallas, this being one of them, man."
    }, "And when the enemy detects now this is true for you as individuals as well, when the enemy detects anointing on your life, then he targets you for destruction.", "And so what was it, 1962?", "Almost 50 years ago, President Kennedy was assassinated in the streets of Dallas. Why? Because the devil wants to mark a city of destiny with a smear of shame. And so now he's done it again with the senseless murder of five police officers and two civilians and others who hang in the balance and with their families and loved ones who sit at their bedside at Baylor Hospital or right where we said with Steven, I pray for them today that God give us healing and mercy and covering a man. I want to talk to you today from the word of God about how we can end the violence in America because we are on a dangerous path. No. One, I want you to understand, ladies and gentlemen, that there is us and them. When I say us and them, I'm not talking about the haves and the have nots. I'm not talking about the whites and the blacks.", "I'm not talking about the upper echelon in the lower level. I'm talking about the kingdom of God and his light and the kingdom of darkness and those who do not understand there is a difference between us and them. And as long as there is the kingdom of God in the midst of darkness, it's like a cold front and the hot air from the Gulf meeting, that's where tornadic activity happens. So the kingdom of light is here to confront darkness, whatever form it takes. That is our calling.", " Number two, Jesus said that we are called to be salt and light. Now, that doesn't mean as much to us as readily to be understood as it did in that day. But in that day, there was no refrigeration, no ice. And so everything had to be preserved that was going to be eaten later. And they primarily use salt or drying techniques for doing that. So salt was their major preservative. Please hear me without the kingdom of God. See, there are people in Dallas today that think the church is the problem in the enemy. The reality is, if it weren't for the people of God and his mighty church in the earth, we would already have descended into total destruction and chaos. It is the power of God through the church that holds back darkness. So we are seen with no salt in Jesus day. Any meat that was taken that you intended to feed your family with later would rot. And the same is true in the spirit today. Without the Kingdom of God holding back darkness and preserving the will of God in the Earth, society will rot at the core.", "And secondly, he said, you are light lt is a Revealer you can't see without light, you stumble in the darkness without light.", "Has your wife ever change the furniture on you? And you came in late that night and you thought you knew where that coffee table was. And you know, Jesus knows what you said under your breath when you hit your skin on that coffee table.", "He'll forgive you. But but we got to see. You see, and here's the thing, please. My teaching is very practical. And I want you to get I see in images and I want you to get this.", "If you have no light in the room and you're not familiar with the surroundings or where the furniture is, you don't need to feel your way around and move all the furniture. The furniture placement is not the problem. The problem is you can't see when the light is turned on, everything becomes clear and you can navigate easily through a room that you can see in where people have light.", "We're not confused. We're not distraught. We're not discouraged.", "The feeling in the spirit right now is like Jesus must have felt when he was on trial before pilot and pilot said to him when he didn't answer a question readily enough, don't you know that I possess the power to take your life or give it back to you? And Jesus said, nobody has that power.", "That powers in my hands alone for this time, came into the world, and that's what we have to recognize as the kingdom of God, we're here at the right time, in the right place for the right reason.", "And we can do this. We're reconcilers. We're reconcilers. We can fix anything through the power of the cross.", {
      statementSentiment: "callToAction",
      text: "Thirdly, it doesn't thrill me to say this, but I believe it will get worse before it will get better. I don't think we've seen the end of what we're seeing now. And one reason is because there's not enough of us that are yet activated to many of us still comfortable."
    }, "I want to talk to you about a concept that can change the world and there's already enough of us to do that. And if I can just send you out of here today from our five campuses streaming out into society with this concept, we can begin to change the world.", "Psalm Chapter 23, the famous chapter, The Lord is My Shepherd, verse six says, Surely your goodness and unfailing love I'm reading from the new living translation will pursue me all the days of my life and I will live in the House of the Lord forever. This terminology your goodness. And I think the King James original sin is your goodness and mercy. One translation says your goodness and loving kindness. This is the word in Hebrew. And this is one of those places where one word can cover a number of English words. And that's what it does in this verse, this verse. And I'm going to teach you some Hebrew real quickly.", "ECD has said has said is the word that they are attempting to translate adequately in English.", "So they had to say in verse number six here, your goodness and your loving kindness or your tender mercy. Both of those phrases, all of those phrases are contained in the singular Hebrew word has said, has said means God's unfailing. Never ending covenant of love, given in acts of kindness to those who don't even deserve it, see deserving, it has nothing to do with God's acts of love.", "Now, what I'm about to say, as one who studied the Bible and theology for four decades is a mouthful. I know, but I want you to hear this because I'm not being dramatic. This may be the greatest concept of the attributes of who and what God is of any of them in the Bible. The word has said in the Old Testament, in Hebrew is written hundreds of times. This may be one of God's greatest attributes and one of them that he most wants us to have.", "What is a has said, I said to a Jew, is an act of kindness given to a stranger, someone who's got a flat tire on the side of the road, someone who can't pay their bill because their credit card was turned down and you pay for their meal. It's an act of kindness, Undeserved has said.", "And the key here is David said, your has said will pursue me all the days of my life. See, the the the difference in. And somebody asked me, what's the difference in his said in agape, agape love has said contains. And as I said, it takes a lot of English words to share. It has said contains the very definitive and important concept that it is an action. Word has said you don't sit around in your recliner and has said has said is something you do for somebody undeserved just out of an act of love.", "But out of that can come tremendous healing. As I mentioned, I was flying home and I came through Las Vegas and I spent the night there. A couple of the boys stayed with me and then they drove on to Flagstaff because we start our airborne retreat tomorrow. We've got 50 pastors, kids that we're bringing in from across the nation to minister to in a retreat in the mountains for a week. And so that starts tomorrow. And that's what I was going there for. Kathy and Amy and the rest are already there. And so they went on to Flagstaff and I flew here.", "And so we had dinner in a restaurant night before last.", "And that I particularly like if I go through there, I love this Mexican restaurant. And we were there. And next to me at a table was a couple. I left the table and I came. When I came back to the table, I noticed them and it was an African-American couple, middle aged.", "And I looked at them and he looked at me and smiled and I smiled back. And I had that sense that I knew him, but I didn't know where from.", "And and and I really knew that I probably didn't know him, but he felt familiar. Do you ever get that feeling like. I think I know them, but I don't know where from. And so I just stopped at their table and I said, how are you doing? And they said, we're doing good. And I said, I'm sorry. I just I loved your smile. And I I felt like I knew you. And he said, well, we've never been to this restaurant before. And I said, well, I've been a couple of times, I really like it. And so we talked for a minute and he said, well, this is my wife and I was. Twenty ninth wedding anniversary. We're celebrating tonight. And just out of my heart, I said, congratulations. That's wonderful. Would it be OK if I pay for your dinner? The waiter was right there. I said, put it on my tab. And they said, No, no, you don't have to do that. I said, no, please let me.", "I didn't know these people. Tears came in this man's eyes.", "And he said to me, I told him what I did, Noel. And he said to me, Pastor, I'm in law enforcement here in Las Vegas and I work with gangs. And there is so much trouble and fear and misgiving.", "And you just made my day.", "And I said, here's my joy.", "So I sat down, finished our dinner, they were leaving before we were, and he came over and just sat down in my booth and scooted me over and said, my wife wants to take a picture of you and I.", "Can I have your picture?", "And I've got a friend that's a has said I don't know them, I just want to do something now I know we all want some deep revelation, but let me share something with you with the troubles we're seeing in the nation right now. And there are some reasons for that that I want to touch on. But if there are more than 300 million professing Christians that believe in Jesus in this nation, what if we today sent 300 million people out of churches all over America with a heart to look for an opportunity to do something for someone as an act of love, undeserved?", "We change the world.", {
      statementSentiment: "encouragingEmpathy",
      text: "We don't listen enough disenfranchized people, oppressed people, poor people, struggling people, broken, people listening to them is a form of loving them."
    }, "Sometimes you just have to listen, listen to their pain, listen to their experience, listen to their story.", "We can do something better.", "An interesting concept also that I love about has said is that there are many passages in the Bible that in God's mind, he ties has said to the morning the AM first thing in the morning he ties, has said.", "And every morning together, for instance, you probably know the famous verse and lamentation chapter three, I think it's about verse 23 that says For your mercies are new every morning. That word Merce's translated is has said so. God says, here's what I want you to know.", "Children, your has said is renewed every morning.", "Now go out there today. And what you did last week is not today's has said every morning has new mercy.", "Now isn't it amazing that we can look at and read that verse and we always apply it to our own personal need for fresh mercy instead of applying it to the fact that there's somebody?", "That God's going to lead me to.", "But I can be their blessing and my Hishem from God is fresh this morning. You can't ever give enough of it away to beat God because he's going to make it for you fresh every morning.", "So here's what I want to ask you as a part of this message today, would you make a silent vow in your heart to say, father, in my mourning, quiet time or devotion, I want to start my day with saying whatever the Fresh has said is for me today?", "Let me be sensitive to that one that you want me to touch in to help, because he is an act of love undeserved, it's not somebody you see if somebody has to earn it.", "Is it really love at all? You know, the levels at which we love are just not at the Christlike level yet, the apostle Paul and Peter and the early apostles were writing things like this, pray for those in authority, even your emperor and Rome. This was when they were under the unbelievable persecution and domination of Nero, who was the worst emperor of Rome ever had for Christian persecution. Impulse's pray for him. Pray for him.", "I'm not going to pray for, you know, you pray for it, you pray for all those in authority, you know, if I apply this now, every time we see an unfortunate and unjust, a disappointing, a disgusting outpouring of some kind of authoritative violence against a citizen. Our temptation is to do other than pray for the one who did the shooting or the killing or the destroying.", {
      statementSentiment: "goodCopsBadCops",
      text: "And yet Paul says of Nero, pray for him. You know, there are no perfect people and cops are just people. And here's one of the things I don't want to let you allow of yourself. For the 10000 to one that are good people doing their job to keep us safe, don't allow the one who makes a mistake or is a racist or does have a heart full of hate."
    }, "You know, here's the deal with gun control. I mean, I'm a gun guy. I own guns. I think we should I think it's OK. But I don't know how you legislate this, but nobody with a heart full of hate ought to be allowed to own a gun. So let's put that on an al.", "Before I sell you this, I don't care if you're a lawman or you're a street thug, do you have a heart full of hate? If you do, I'm not selling you this gun because guns have never hurt anybody. That didn't have a heart full of hate and a heart full of hate just makes a gun a more convenient way to do it quicker than what you would do over time if you have a heart full of hate.", "Now, I'm not going to get into that discussion right now. We will do that because I like to say some things sometimes. I know if you've noticed that or not. And opinions are like elbows. All of us got at least two of them.", "Let me give you some practical application about has said, listen to other people, groups listening is a form of loving, pray for has said opportunities every morning.", "I'm not responsible for the Christians in the whole nation, but I am responsible to speak to this house and I challenge you in the name of Jesus, that if we would begin to go out of here looking for opportunities to love somebody, to do someone, an act of kindness or love, even undeserved, this is a study for another time. I'm out of time. But listen to this. The first time has said was ever used in the Bible. You know where it was early in the days of Genesis, God created his highest creation, Adam and Eve.", "He had plans for them to be fruitful in the whole earth. They weren't even out of the garden yet and they had already fallen into total disobedience and sin. And what does the Bible say? The Bible says in the cool of the evening, as he always did, God pursued them in the garden. He knew they were feeling bad and shameful and trying to cover themselves with fig leaves and all that. And what did God do? God slaughtered animals, made firs to cover them and pursued them until he found them and clothed them. And that's the first place in the Bible has said is used, has said is an act of love that is deserved. Has said is an act of love that is an earned and let me give you one more word of instruction and caution. Please hear this.", "If we start as a larger church like we are, if we fall into the dangerous trap of the church, having to build a program and a committee and a department and an office, every time we talk about doing anything to help the community, then that's a black hole that we can never satisfy because we're going to be adding more staff and having more meetings than we are loving people. There was a lady one time I came to the church. This was years ago and our receptionist at that time was over here and she was just about in tears.", "And I said, what's the matter? And she put to let me put you on, hold them and put it on hold to this lady is extremely irate and she's hurt my feelings. And I said, let me talk to her.", "So I said, Yes, ma'am, what is it?", "She said, I go to your church, she said, and I met a family that doesn't have any food.", "And I want your church to take them some groceries. And I said, OK, you're part of our church, I am. I said, well, where did you meet these people? She told me. I said, well, let me kind you ask it kindly ask you something. Do you have a car? I do. Do you know where a grocery store is located?", "I do.", "Then do you have enough money to buy a sack of groceries for someone that is in need? Because maybe that was the reason God let you find them with that need.", "And and here's the thing I said, if you feel like that loving someone who is hungry is satisfied by you calling the church and chewing us out because we haven't run to give them a sack of groceries, then we'll never be the church.", "I said, Dear sister, you are the church. We can't build a program for every need we have to leave out of here by the thousands today. Loving people meeting needs waking up with fresh Hassad every morning.", "So let me finish with this. We pray for those in authority, we build bridges, we pray for church unity, that's a difficult one. We pray for people different than ourselves.", {
      statementSentiment: "absenceOfTension",
      text: "We study ways to be peacemakers and not just peacekeepers. We remain calm. We were made for this hour."
    }, "It may get worse before it gets better, but we've already laid our lives down when we were saved, I don't know if they told you that or not, but when you make Jesus Lord of your life, you lay yourself on his altar and you say, God, not my will, but yours be done. I don't have a life outside of you.", "And if we have to give our lives in the line of duty of loving people, then so be it is our ticket to heaven. Because my highest goal in life, and sometimes you have to count this cost and I'm going to end with this because it's a really important point.", "I've counted this cost because to be honest with you, I'm in a stage of my life where a beautiful new generation is taking over more all the time. And I've got the right. And if I can say so without sounding egotistical, I've earned it. For more than 40 years of faithful pastoral ministry, I can slow down and I could live an easy life right now and I could choose to just keep my mouth shut and let stuff happen.", "But that's not me, because my highest priority. Is not to save my own life.", "And God's highest priority for me is not to live a life of ease and comfort. Jesus said it this way and it doesn't make enough sense in the English translation. I'll break it down for you. He said, if you save your life, you'll lose it if you lose your life. For my sake in the gospel, you'll find it. That's the way it reads in English. It loses something there. Because in the original, here's what Jesus said.", "If you seek only to save your lower form of human life, you will lose the higher God life that I've called you, too.", "But if you will lose or give up your lower form of life, you will find the higher form of life. That's what we want. Our goal is not to live a life of comfort. Our goal is to be reconcilers thousands of reconcilers, building bridges, loving people, fixing things. But in closing, I got to say this. I don't want to be crass. I don't want to be inflammatory. I don't want to take advantage.", "I but I have to say something I want to see and I would like to challenge and I'm not going to use African-American and Caucasian and all these other terms. I'm just a white guy talking to some white and black folks and brown and other things. OK, let's just keep it on the color palette.", {
      statementSentiment: "callToAction",
      text: "'I am I am fearfully and in a godly way, appealing to the comfortable, in some cases the white, some cases black or brown, the comfortable. But I want to speak to white folks for just a minute. We need to hear more from you. Sometimes, and I'm not a big social media guy, but I have a pretty strong following on Twitter, and that's really the only thing I do. I don't do Facebook and all that. I don't have time for it. But I've noticed something. And granted, this is a small sampling, but I've noticed something. Any time I tweet something that's a little edgy about what kind of things we ought to be doing as activist in Christ, I notice that I get retweeted twenty five to one by black people over white white people."
    }, "Don't say anything. I don't think that means it's because they're bad. I think it's because we're comfortable.", "If I can be this open for just a moment, I have to understand and I'm going to ask you to I don't think we should live all the time with a chip on our shoulder or talking about how bad we had it.", "But I've never been a black man in America. Maybe my life would be totally different had I been. I know I wouldn't have been treated the same.", "Now that's changing some of it's been forced.", {
      statementSentiment: "importanceOfDiversity",
      text: "So government has tried and schools have tried and corporate world has tried. And the church remains, for the most part, stodgy and segregated. Covenant, you are the exception. You are the one out of thousands where this happens that you see around you. I know we have a price to pay for that, but it's a price worth paying, if you all will understand that whoever you are, black, yellow, red, white, brown, whoever you are, I'm called to this."
    }, {
      statementSentiment: "callToAction",
      text: "I'm a reconciler. I'm going to talk to people that are other than my own kind. I'm going to be a part of the great speckled bird. I am a part of the glorious body of Christ. The value of the coat of many colors was its many colors. I am a part of that bride of Christ in the Book of Revelation that John saw that said and I saw a number that no man could no out of every kindred tongue tribe and nation."
    }, "That's what Jesus died to build, and we can either be comfortable or we can tell the truth, we can either be comfortable or we can build bridges.", "And we're not always going to say and do exactly the right thing, but we got to do something. And I can be accused of a lot of things.", "But one thing at the end of my days that I don't want to be accused of is I think he was a good man, but he just never said anything. That's not going to be me. Yeah, I'm going to say something. Stand with me, if you would. I don't have anything else left in my arsenal. If I didn't get you on your feet, I'm done.", "That's about where I'm at now, about twenty five percent.", "I love you, I love you, I believe in you, God called you and in the name of Jesus and at every campus campus, pastors prepare to close your services there.", "But I'm asking this of you. Would you do this because this is my goal today, because we don't even understand. And I'm glad that you don't we don't understand the kind of hatred that is brewing in the world that is absolutely Antichrist.", "Yesterday, a man from the Middle East picked me up to take me to the airport in Las Vegas.", "And he reminded me of my friend Adam Lazaar. And I said, you sound just like a friend of mine in our church. And I began to talk to him. We had a beautiful conversation and he learned who I was, what I did. And then he said, Can I show you something? And I said, sure. He said, I want to send you a video that I was just sent today. And this is the leading preacher in all of Saudi Arabia that is listened to by the that whole part of the Muslim world as the authority.", "And he said, I'm going to press a button here. I think he forgot I needed to get to the airport. And he said, I'm trying to drive, so I need to pull over and stop. So he pulled over and stopped on the side of the road and he pressed a button so it could be translated from Arabic so that I could understand. And the leading preacher speaking to all of Islam Friday in his services said Every Christian and every Jew needs to have their skull crushed and their body cut in pieces, and God will honor you for it.", "Now go out and crush their skulls of every Jew and Christian in the world and cut them in pieces and God will be honored for it.", "And he said, Pastor, I am a Christian. ISIS killed my cousin, my father and I fled through Canada and we came here to the greatest country in the world.", "But pray for my family and pray for the Christians of the Middle East who are suffering.", "And we don't know what hate is, and so I thought, Father, tomorrow I'm going to go and look into the faces of thousands of reconcilers and my message is not going to be go and crush somebody's skull. My message is going to be Hassid, commit acts of undeserved love all over the world and lay your life on the line.", "This is my altar call. Can I ask you right now how many of you will make a sacred vow between you and the father to say, Lord, your host said is fresh for me every morning and I'm going to begin to open my eyes and look for ways that I can do small acts of undeserved kindness for somebody because I'm a reconciler. If that you would you hold up your hand and say, I'd like to answer that call. I want to be a reconciler, I want to make something different. I want to make something better in Jesus name. Let's do it. Amen."],
        q = ["During this time of tragedy over the last several days, it\u2019s time for us to pray.", {
      statementSentiment: "theAnswerIsJesus",
      text: "Because, the answer is not legislation. It\u2019s not education. The answer is heart transformation. We need to pray for justice. Our God is a just God."
    }, {
      statementSentiment: "absenceOfTension",
      text: "We need to pray for unity. We need to pray that people would turn their lives over to the Lord himself. There are leaders that have so many questions would turn to you, God, because you have the answer. You are our rock, our strength, our salvation"
    }, "Let\u2019s bow for a prayer right now as we pray", "Father, I thank you in the name of Jesus for this day. God, in the midst of tears, in the midst of tragedy, we once again pray for justice. Father, also we pray. For our leaders. For those who are in authority over us that you have put in that place", {
      statementSentiment: "absenceOfTension",
      text: "May we have respect. May. We have. Honor. God, I pray for a revival. I pray for a transformation. I pray for a turning in our nation amongst the people with our leaders. And even with world leaders. Because, God we see everything falling apart, but we know that you are our strength that you are all about peace and harmony and purity"
    }, "So, we pray for the families, we pray for their friends who were tragically. Taken. God, we don\u2019t understand it and many times we\u2019re asking why, but Lord, may we move quickly. From \u201C\u201DWhy me\u201D or \u201C\u201DWhy us?\u201D to \u201C\u201DWhat now?\u201D", "What now should we do? It\u2019s time for us to walk on our knees in prayer, we know God. It\u2019s time for us to share you. It\u2019s time for us to love one another and to realize that every person is valuable. Every person matters to you. We\u2019ve never locked eyes with someone who does not matter to you because Jesus died for the sins of every person. So Father, we stand on that.  We pray for peace.", {
      statementSentiment: "absenceOfTension",
      text: "We pray for harmony."
    }, "We pray for justice. We pray for guidance. We pray for the families and the friends once again of those taken. In Christ\u2019s name we pray. Amen"],
        z = [],
        R = o("rePB");
    !function (e) {
      e.Watermark = "watermark", e.TVC = "tvc", e.FBC = "fbc", e.Prestonwood = "prestonwood", e.Covenant = "covenant", e.Fellowship = "fellowship", e.None = "no-church";
    }(G || (G = {}));

    var _ = {
      callToAction: "productive",
      acknowledgingInjustice: "productive",
      blackLivesMatter: "productive",
      commendingTheDemonstrators: "productive",
      denouncingTheMovement: "problematic",
      inflammatory: "problematic",
      invalidating: "problematic",
      expectingForgiveness: "problematic",
      violentProtestorsAreTheProblem: "problematic",
      sanctimoniousTrivialities: "problematic",
      goodCopsBadCops: "problematic",
      theAnswerIsJesus: "problematic",
      fightAgainstInjustice: "productive",
      passTheMic: "productive",
      importanceOfDiversity: "productive",
      encouragingEmpathy: "productive",
      absenceOfTension: "problematic"
    },
        K = {
      callToAction: "Call to action",
      acknowledgingInjustice: "Acknowledging injustice",
      blackLivesMatter: "Saying Black Lives Matter",
      commendingTheDemonstrators: "Commending demonstrators",
      denouncingTheMovement: "Denouncing the BLM movement",
      inflammatory: "Inflammatory",
      invalidating: "Invalidating",
      expectingForgiveness: "Expecting forgiveness",
      violentProtestorsAreTheProblem: "Violent protesters are the problem",
      sanctimoniousTrivialities: "Sanctimonious trivialities",
      goodCopsBadCops: "Most cops are good",
      theAnswerIsJesus: "The only answer is Jesus",
      fightAgainstInjustice: "Call to fight against injustice",
      passTheMic: "Passing the mic",
      importanceOfDiversity: "Call out the importance of diversity",
      encouragingEmpathy: "Encouraging empathy",
      absenceOfTension: "Calling for the absence of tension"
    },
        U = (S = {}, Object(R.a)(S, G.Watermark, {
      name: "Watermark Church",
      key: G.Watermark,
      pastor: "Todd Wagner",
      twitterFollowers: 19e3,
      churchTwitterFollowers: 16800,
      attendees: 8876,
      city: "Dallas, TX",
      podcastReviews: 254,
      minutes: [{
        type: "sermon",
        length: 45
      }, {
        type: "funeral",
        length: 25
      }, {
        type: "youtube",
        length: 7.5
      }],
      denomination: "Non-denominational",
      fastFacts: {
        "JIST OF THE SERMON": "Reduce violence by having an empathetic ear and inviting people to know Jesus",
        "TOP SENTIMENT": "Invalidation",
        CONNECTION: "Also preached at the memorial for the slain officer Michael Smith",
        "ALSO NOTABLE": 'Spent time explaining the meaning of "Black Lives Matter" in both sermon and eulogy with a room full of police',
        "TASTELESS & INFALMMATORY": 'When speaking of the shooter that killed five police, he went out of his way to emphatically say "I\'m glad police used deadly force on him." '
      },
      sentiments: {
        callToAction: 1,
        acknowledgingInjustice: 5,
        blackLivesMatter: 3,
        commendingTheDemonstrators: 1,
        denouncingTheMovement: 1,
        inflammatory: 1,
        invalidating: 1,
        expectingForgiveness: 1,
        violentProtestorsAreTheProblem: 1,
        sanctimoniousTrivialities: 2,
        goodCopsBadCops: 1,
        theAnswerIsJesus: 2,
        fightAgainstInjustice: 1
      }
    }), Object(R.a)(S, G.TVC, {
      name: "The Village Church",
      key: G.TVC,
      pastor: "Matt Chandler",
      twitterFollowers: 417500,
      churchTwitterFollowers: 16800,
      attendees: 10156,
      city: "Dallas, TX",
      podcastReviews: 2200,
      minutes: [{
        type: "panel",
        length: 58
      }],
      denomination: "SBC",
      fastFacts: {
        "JIST OF THE PANEL": "Racism is real. Racism is instiutional. Listen to black people.",
        "TOP SENTIMENTS": "Majority of the time was spent either literally listening to black people from the congregation and imploring people to acknowledge systemic racism that benefits white Americans and harms black Americans.",
        NOTABLE: "Expressed that this would make the congregation uncomfortable",
        INFLUENCE: "Chandler is the head of a large network of reformed churches. So many people listen to his sermons that he has a disclaimer reminding people that listening to sermonns doesn't replace membership in a local church."
      },
      sentiments: {
        acknowledgingInjustice: 7,
        passTheMic: 37,
        importanceOfDiversity: 1,
        encouragingEmpathy: 1,
        invalidating: 1
      }
    }), Object(R.a)(S, G.Covenant, {
      key: G.Covenant,
      name: "Covenant Church",
      pastor: "Mike Hayes",
      twitterFollowers: 11500,
      churchTwitterFollowers: 5560,
      attendees: 11e3,
      city: "Carrollton, TX",
      podcastReviews: 45,
      minutes: [{
        type: "sermon",
        length: 36
      }],
      denomination: "Non-denominational",
      fastFacts: {
        "JIST OF THE SERMON": "Jesus is the answer to stop the violence",
        "TOP SENTIMENTS": 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
        NOTABLE: 'Covenant Church is the only one of our list that has a majority BIPOC people in senior leadership. Speaking of the diversity within the congregation, Hayes said, "...The church remains, for the most part, stodgy and segregated covenant. You are the exception. You are the one out of thousands where this happens that you see around you."',
        INFLUENCE: "Mike Hayes has since left Covenant Church to begin a new denomination called Churches in Covenant",
        STRANGE: 'Hayes spent a strangely long part of the intro talking about the dream vacation he had left to be at the church that morning. He also said, "Almost 50 years ago, President Kennedy was assassinated in the streets of Dallas. Why? Because the devil wants to mark a city of destiny with a smear of shame."'
      },
      sentiments: {
        sanctimoniousTrivialities: 1,
        callToAction: 3,
        encouragingEmpathy: 1,
        goodCopsBadCops: 1,
        absenceOfTension: 1,
        importanceOfDiversity: 1
      }
    }), Object(R.a)(S, G.Prestonwood, {
      key: G.Prestonwood,
      name: "Prestonwood Baptist Church",
      pastor: "Jarrett Stephens",
      twitterFollowers: 51700,
      churchTwitterFollowers: 11400,
      attendees: 15815,
      city: "Plano, TX",
      podcastReviews: 24,
      minutes: [{
        type: "sermon",
        length: 32
      }],
      denomination: "SBC",
      fastFacts: {
        "JIST OF THE PANEL": 'Healing America requires strong leadership ("As the leader goes, so goes the people") and prayer.',
        "TOP SENTIMENTS": 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
        NOTABLE: "Two of the police officers killed were honored in memorials at Prestonwood",
        INFLUENCE: 'Prestonwood is so large that it is affectionately called "Six Flags over Jesus" in Dallas',
        SUBSTANCE: "This sermon said nothing. It was meant to be about the state of the country after the tragedies and it was so generic it could have been preached at any time. "
      },
      sentiments: {
        theAnswerIsJesus: 3,
        encouragingEmpathy: 1
      }
    }), Object(R.a)(S, G.Fellowship, {
      key: G.Fellowship,
      name: "Fellowship Church",
      pastor: "Ed Young",
      twitterFollowers: 287600,
      churchTwitterFollowers: 12200,
      attendees: 24162,
      city: "Grapevine, TX",
      podcastReviews: 9,
      minutes: [{
        type: "video",
        length: 2.5
      }],
      denomination: "SBC",
      fastFacts: {
        "JIST OF THE VIDEO": "Pray for healing",
        "TOP SENTIMENTS": 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
        CONTEXT: "That Sunday was one of the few times that the Sunday sermon did not make it onto YouTube. A short video with a prayer is the only publicaly available video Young published at that time.",
        INFLUENCE: "Fellowship Church is the largest church of these six. Ed Young also runs an organization where he sells sermon outlines and other ministry resources."
      },
      sentiments: {
        theAnswerIsJesus: 1,
        absenceOfTension: 3
      }
    }), Object(R.a)(S, G.FBC, {
      key: G.FBC,
      name: "First Baptist Dallas",
      pastor: "Robert Jeffress",
      twitterFollowers: 114300,
      churchTwitterFollowers: 10900,
      attendees: 2632,
      city: "Dallas, TX",
      podcastReviews: 200,
      minutes: [{
        type: "sermon",
        length: 0
      }],
      denomination: "SBC",
      fastFacts: {
        "JIST OF THE SERMON": "Jeffress chose not to give a sermon about the week's events.",
        NOTABLE: "First Baptist Dallas is about half a mile from the shooting.",
        INFLUENCE: "Robert Jeffress is a frequent contributor on Fox and often praises Donald Trump."
      },
      sentiments: {}
    }), S),
        V = i.a.createElement,
        X = function X(e) {
      var t = e.church,
          o = e.size;
      return V("mask", {
        id: "".concat(t, "LogoMask")
      }, V("image", {
        href: "/img/logos/".concat(t, ".svg"),
        height: o,
        width: o,
        fill: "white"
      }));
    },
        Z = i.a.createElement,
        $ = function $(e) {
      var t = e.className;
      return Z("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 30 30",
        className: t
      }, Z("defs", null, Z("style", null, ".cls-1{fill:#ef579f;}.cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.2px;}"), Z("radialGradient", {
        id: "radialGradient"
      }, Z("stop", {
        offset: "10%",
        stopColor: "rgb(50,50,50)"
      }), Z("stop", {
        offset: "90%",
        stopColor: "black"
      })), Z("mask", {
        id: "gradient-mask"
      }, Z("circle", {
        cx: "13.5",
        cy: "13.5",
        r: "17.5",
        fill: "url('#radialGradient')"
      })), Z(X, {
        church: "watermark",
        size: 2
      }), Z(X, {
        church: "tvc",
        size: 2
      }), Z(X, {
        church: "covenant",
        size: 2
      }), Z(X, {
        church: "prestonwood",
        size: 2
      }), Z(X, {
        church: "fellowship",
        size: 2
      }), Z(X, {
        church: "fbc",
        size: 2
      })), Z("text", {
        transform: "translate(4 2)",
        fontSize: "0.75",
        fontFamily: "nytfranklin",
        fontWeight: "300"
      }, "MAP OF CHURCHES IN DALLAS-FORT WORTH"), Z("g", {
        id: "Map",
        "data-name": "Layer 1",
        mask: "url('#gradient-mask')"
      }, Z("path", {
        className: "cls-2",
        d: "M6.33-.71A4.2,4.2,0,0,0,6.39.36a2.56,2.56,0,0,0,.43,1A2.43,2.43,0,0,1,7.14,2c.07.21.13.44.19.67a2.18,2.18,0,0,0,.22.57,2.23,2.23,0,0,0,.37.5L8.16,4l.24.28a4.2,4.2,0,0,1,.36.5c.11.17.21.35.33.51a1.87,1.87,0,0,0,.41.43L10,6l.11.08.1.08"
      }), Z("path", {
        className: "cls-2",
        d: "M26.08,0a16.21,16.21,0,0,1-.5,1.68,16.25,16.25,0,0,1-.67,1.62l-.18.39c-.05.13-.11.26-.17.39a1,1,0,0,0-.1.45,3.73,3.73,0,0,0,0,.47,4.46,4.46,0,0,1,.05.63,2.81,2.81,0,0,1-.05.64c0,.17-.05.34-.08.51a2.83,2.83,0,0,1-.13.5c-.1.27-.2.54-.32.79a2.58,2.58,0,0,1-.47.71,2,2,0,0,0-.22.29,3,3,0,0,0-.16.31,1.52,1.52,0,0,1-.32.46l-.39.41c-.12.12-.24.24-.37.35s-.25.23-.37.36a1.67,1.67,0,0,0-.33.47,1.75,1.75,0,0,0-.18.56,4.09,4.09,0,0,0-.07.6c0,.21,0,.41,0,.61s0,.68,0,1,0,.69,0,1v.12a.37.37,0,0,0,0,.11,2.59,2.59,0,0,1-.09.79,4.07,4.07,0,0,1-.26.74c-.15.35-.32.7-.47,1s-.3.7-.44,1.06a.25.25,0,0,1,0,.07.13.13,0,0,0,0,.06q0,.33,0,.66c0,.22,0,.44.05.65a.48.48,0,0,0,.07.21.34.34,0,0,0,.17.14.76.76,0,0,1,.19.12l.16.16"
      }), Z("path", {
        className: "cls-2",
        d: "M18.53-.19a7.74,7.74,0,0,1-1,.36,7.73,7.73,0,0,0-1.08.4c-.35.16-.69.33-1,.52L14,1.84l-1.37.75a.75.75,0,0,0-.25.25.66.66,0,0,0-.07.32,1.57,1.57,0,0,1-.08.49,1.94,1.94,0,0,1-.22.43l-.27.44c-.08.15-.17.29-.26.44l-.14.18-.15.17-.46.43-.46.43"
      }), Z("path", {
        className: "cls-2",
        d: "M29.23,20.23a2.75,2.75,0,0,1-.4,0c-.14,0-.27,0-.4,0a2.38,2.38,0,0,1-.76,0,3.86,3.86,0,0,1-.73-.23l-.22-.08-.23-.08a.32.32,0,0,0-.25,0l-.24.08A.08.08,0,0,0,26,20s0,.08,0,.11a1.37,1.37,0,0,0-.08.35.65.65,0,0,0,.07.35A.48.48,0,0,1,26,21a2.43,2.43,0,0,0,0,.27c0,.55,0,1.1,0,1.66s0,1.1,0,1.66c0,.12,0,.24,0,.36v.36a.37.37,0,0,1-.09.26.31.31,0,0,1-.27.07,4.52,4.52,0,0,0-.52,0h-.53a2.52,2.52,0,0,0-.73.05,2.33,2.33,0,0,0-.7.24L22,26.42l-1.11.46a2.73,2.73,0,0,0-.48.25l-.47.28a1.1,1.1,0,0,1-.29.11l-.31.07-.09,0s-.06,0-.08,0a.49.49,0,0,1-.2.05.45.45,0,0,1-.19-.05l-.09,0a.27.27,0,0,0-.09,0,.55.55,0,0,1-.34-.07L18,27.37l-.41-.19a1.09,1.09,0,0,0-.44-.1H14.3a.41.41,0,0,1-.16,0A.27.27,0,0,1,14,27l-.25-.36-.26-.34a4.6,4.6,0,0,1-.37-.53l-.35-.55a.56.56,0,0,0,0-.08.09.09,0,0,0-.09-.05"
      }), Z("path", {
        className: "cls-2",
        d: "M18-.6a3.53,3.53,0,0,1,0,.46v.06S18,0,18,0"
      }), Z("path", {
        className: "cls-2",
        d: "M33.13,15.94l.21-.82a2,2,0,0,0,0-.24.8.8,0,0,0,0-.31,1.42,1.42,0,0,0-.1-.29,1.38,1.38,0,0,1-.09-.39c0-.13,0-.27,0-.4a1.34,1.34,0,0,1,0-.2v-.21c0-.3,0-.61,0-.91s.07-.6.13-.9a1.5,1.5,0,0,0,0-.63,1.35,1.35,0,0,0-.25-.56,1.84,1.84,0,0,0-.44-.4,1.28,1.28,0,0,0-.59-.18l-.51,0-.49.09-.51.08-.5.06a.36.36,0,0,1-.23,0,.86.86,0,0,1-.2-.13l-.86-.64c-.28-.22-.56-.44-.83-.68l-.22-.19-.24-.16a1.2,1.2,0,0,1-.6-.84,2.76,2.76,0,0,0-.08-.27,1.34,1.34,0,0,0-.09-.26.94.94,0,0,0-.25-.34A.85.85,0,0,0,26.1,6a5.87,5.87,0,0,0-.59,0l-.6,0-.48,0H24l-.77,0-.77,0-.18,0-.17.07-.31.1a1.65,1.65,0,0,1-.32.06,1.24,1.24,0,0,1-.51-.08,1.34,1.34,0,0,1-.44-.27l-.19-.16-.18-.16a.76.76,0,0,0-.23-.13,1.22,1.22,0,0,0-.26-.06,7.4,7.4,0,0,0-.94,0H16.92a.62.62,0,0,0-.37.11.79.79,0,0,0-.24.29l-.3.55-.32.54a.6.6,0,0,1-.57.32c-.28,0-.57,0-.86,0l-.85.09c-.2,0-.39,0-.58,0h-.58a.51.51,0,0,0-.21,0l-.19.08a.19.19,0,0,0-.11.12.28.28,0,0,0,0,.18c0,.13,0,.27,0,.4s0,.27,0,.4a.51.51,0,0,0,.08.28,1.32,1.32,0,0,0,.16.25.77.77,0,0,1,.14.36.67.67,0,0,1-.09.38,1.06,1.06,0,0,0-.14.48c0,.16,0,.33,0,.5s0,.26,0,.39a2.74,2.74,0,0,1-.09.39,1,1,0,0,1-.11.26.9.9,0,0,1-.2.19l-.08.05a.08.08,0,0,0,0,.09"
      }), Z("path", {
        className: "cls-2",
        d: "M10.61,28.49a.59.59,0,0,0-.29-.12.44.44,0,0,0-.31.05.27.27,0,0,1-.18.07,1,1,0,0,1-.17,0l-.88-.12-.88-.14-.45-.07-.45,0H6.17l-.83,0-.48,0-.48,0"
      }), Z("path", {
        className: "cls-2",
        d: "M5.59,10.76a.09.09,0,0,1,.06.08.34.34,0,0,1,0,.1c0,1,0,2,0,3v3a.83.83,0,0,1,0,.15.27.27,0,0,0,0,.15"
      }), Z("path", {
        className: "cls-2",
        d: "M18.7,21.66l-.65.15a5.09,5.09,0,0,1-.66.12L17.2,22l-.18.09a.88.88,0,0,1-.3.1.53.53,0,0,1-.3-.05,2.18,2.18,0,0,0-.6-.14l-.62,0a6.43,6.43,0,0,0-.76,0,6.48,6.48,0,0,0-.76.06,3.24,3.24,0,0,1-.44,0,2.17,2.17,0,0,0-.44,0"
      }), Z("path", {
        className: "cls-2",
        d: "M18,.07a.36.36,0,0,1,0,.09.28.28,0,0,1,0,.09,3,3,0,0,0-.07.66c0,.22,0,.45,0,.67a.67.67,0,0,1,0,.24.67.67,0,0,1-.1.21,1.24,1.24,0,0,0-.16.4,1.31,1.31,0,0,0,0,.44.28.28,0,0,1,0,.09V3c0,.25,0,.49,0,.74s0,.48,0,.73,0,.75,0,1.12,0,.75,0,1.12c0,.12,0,.25,0,.37s0,.24,0,.36a.21.21,0,0,0,0,.12s.06.06.08.09A.66.66,0,0,1,18,8a1.1,1.1,0,0,1,0,.41.33.33,0,0,0,0,.14s0,.1,0,.15a1.79,1.79,0,0,1,0,.23,1,1,0,0,1,0,.24,1.32,1.32,0,0,0-.08.44,1.71,1.71,0,0,0,0,.45,2.94,2.94,0,0,1,0,.51,2.91,2.91,0,0,0,0,.51s0,.07,0,.1,0,0,.1,0a4.45,4.45,0,0,1,.73,0l.73,0,.67,0c.22,0,.44,0,.66,0h.15l.15,0"
      }), Z("path", {
        className: "cls-2",
        d: "M12.76,17.22h-7a3,3,0,0,1-.42,0l-.42-.08H4.72l-.22,0"
      }), Z("path", {
        className: "cls-2",
        d: "M25.93,19.94a.61.61,0,0,0-.3,0l-.27.1a1.45,1.45,0,0,1-.5.08,4.38,4.38,0,0,1-.5,0,4.1,4.1,0,0,0-.5,0,1,1,0,0,0-.47.17l-.08,0h-.08c-.21,0-.42,0-.63,0H22a1.19,1.19,0,0,0-.51.11,1,1,0,0,0-.37.38.42.42,0,0,1-.15.17.79.79,0,0,1-.22.06l-.18,0a1,1,0,0,0-.17.1"
      }), Z("path", {
        className: "cls-2",
        d: "M21.45,11.31a2,2,0,0,1,.86.36c.26.18.49.39.74.57l.38.3.39.29a1.69,1.69,0,0,1,.32.27,1.64,1.64,0,0,1,.26.33.86.86,0,0,0,.18.2,1.16,1.16,0,0,0,.21.16l.68.47a4.08,4.08,0,0,1,.63.54l.06,0,.06,0a1.43,1.43,0,0,1,.54.22,4.1,4.1,0,0,1,.47.35l.66.49a4.68,4.68,0,0,1,.62.56,1.18,1.18,0,0,1,.17.24.91.91,0,0,1,.1.29l.09.49c0,.16.07.32.11.48a.32.32,0,0,1,0,.17.35.35,0,0,1-.14.12c-.14.08-.27.17-.4.26a2.8,2.8,0,0,1-.41.25l-.71.4c-.24.14-.48.27-.73.39l-.11.06a.24.24,0,0,0-.09.11"
      }), Z("path", {
        className: "cls-2",
        d: "M13,16.58l-.6-.37-.57-.39a1.55,1.55,0,0,1-.37-.35c-.11-.13-.2-.28-.3-.41a.48.48,0,0,1-.08-.18.69.69,0,0,1,0-.2,1.36,1.36,0,0,0-.1-.36.77.77,0,0,0-.26-.28l-.56-.39-.55-.38a2.2,2.2,0,0,0-.63.54c-.17.21-.32.43-.48.64s-.33.44-.5.65a5.09,5.09,0,0,1-.56.58,1,1,0,0,0-.31.43,1.51,1.51,0,0,0-.08.53q0,.45,0,.9c0,.3,0,.6,0,.89s0,.66,0,1,0,.66,0,1a.5.5,0,0,1,0,.12.37.37,0,0,1,0,.11c-.06.1-.12.2-.17.3a2.82,2.82,0,0,1-.18.29.05.05,0,0,0,0,.05.15.15,0,0,0,0,.06,2.09,2.09,0,0,1-.06.56,2.09,2.09,0,0,0,0,.56"
      }), Z("path", {
        className: "cls-2",
        d: "M5.65,9.26a.5.5,0,0,0,.23.18l.26.08a1.47,1.47,0,0,1,.6.34,2.42,2.42,0,0,1,.44.55A2.93,2.93,0,0,0,7.6,11a1.47,1.47,0,0,0,.59.35l.8.23.81.22.51.14.5.14.11,0a.27.27,0,0,1,.08.07"
      }), Z("path", {
        className: "cls-2",
        d: "M11.94,7.42a.72.72,0,0,0,.11.19l.15.16a3.38,3.38,0,0,1,.24.41,4.14,4.14,0,0,1,.2.43,5.07,5.07,0,0,0,.32.61l.33.6a1.41,1.41,0,0,1,.14.31,1.28,1.28,0,0,1,.07.34,6.06,6.06,0,0,0,.09.73c.05.24.1.49.13.73,0,.07,0,.15,0,.22a.83.83,0,0,0,.06.21"
      }), Z("path", {
        className: "cls-2",
        d: "M4.42,17.2a5.61,5.61,0,0,1-.58,0,3.7,3.7,0,0,1-.57-.07H3.11a.8.8,0,0,1-.15,0,3.89,3.89,0,0,1-.59,0H1.43a2.21,2.21,0,0,1-.35,0,.49.49,0,0,0-.2,0l-.21.05H.11a1.45,1.45,0,0,1-.42,0,1.37,1.37,0,0,1-.38-.15.19.19,0,0,0-.12,0,.48.48,0,0,0-.12,0"
      }), Z("path", {
        className: "cls-2",
        d: "M13,16.7a.25.25,0,0,0-.12.08.21.21,0,0,0,0,.13,2.33,2.33,0,0,1-.11.65c-.07.21-.15.41-.22.62a1.46,1.46,0,0,0-.05.2,1.49,1.49,0,0,0,0,.21c0,.25,0,.51,0,.76a6.33,6.33,0,0,0,.05.76,5,5,0,0,0,.11.66c0,.22.09.43.13.65a3.33,3.33,0,0,1,.07.54,1.07,1.07,0,0,1-.13.54.64.64,0,0,0-.07.28v.3l0,.56,0,.56a1.4,1.4,0,0,0,0,.29.72.72,0,0,0,.06.29.4.4,0,0,1,0,.28.89.89,0,0,1-.13.23l-.16.2a1.62,1.62,0,0,1-.18.19,1.92,1.92,0,0,0-.37.48,1.8,1.8,0,0,0-.19.58.65.65,0,0,1,0,.13.34.34,0,0,1-.06.12,4,4,0,0,0-.36.71,2.46,2.46,0,0,0-.16.77"
      }), Z("path", {
        className: "cls-2",
        d: "M18,27.44a.3.3,0,0,0,0,.18l0,.19a3.49,3.49,0,0,1,0,.56c0,.18,0,.37,0,.55,0,.63,0,1.27,0,1.9s0,1.26,0,1.89c0,.41,0,.83,0,1.24s0,.83,0,1.24"
      }), Z("path", {
        className: "cls-2",
        d: "M5.83,7.61a1.33,1.33,0,0,1,0,.28,2.45,2.45,0,0,1,0,.27,1.33,1.33,0,0,0,0,.2.4.4,0,0,0,.09.2A.53.53,0,0,0,5.68,9c0,.15,0,.31,0,.46l0,.56c0,.18,0,.37,0,.55a.41.41,0,0,1,0,.16.25.25,0,0,1-.12.1,3.14,3.14,0,0,0-.31.18l-.3.19a1.8,1.8,0,0,1-.46.23,1.13,1.13,0,0,1-.52,0,1.35,1.35,0,0,0-.35,0H3.15a.33.33,0,0,0-.19.06.79.79,0,0,0-.17.14,1.57,1.57,0,0,0-.32.31.9.9,0,0,0-.17.4.89.89,0,0,0,0,.23.48.48,0,0,0,.13.21l.31.27a3.85,3.85,0,0,1,.3.27,3,3,0,0,1,.23.27,1,1,0,0,1,.17.31,4.14,4.14,0,0,0,.31.59l.37.56a.76.76,0,0,1,.13.31,1.12,1.12,0,0,1,0,.32,4.07,4.07,0,0,0,.06.6c0,.2.06.39.08.59s0,.35,0,.53v.53a3,3,0,0,0,0,.42,1.24,1.24,0,0,0,.16.4,1.07,1.07,0,0,1,.2.58,2.18,2.18,0,0,1-.08.61c0,.21-.11.42-.16.63s-.11.43-.14.64-.1.56-.13.84a4.13,4.13,0,0,0,0,.86c0,.23,0,.46.05.69s0,.46,0,.69l0,1.44c0,.48,0,1,0,1.44,0,.16,0,.33,0,.49a4.21,4.21,0,0,0,0,.5c0,.24,0,.48,0,.71s0,.48,0,.72a1.53,1.53,0,0,1,0,.37c0,.12,0,.25,0,.37a.92.92,0,0,1,0,.16.77.77,0,0,1,0,.15,1.8,1.8,0,0,1-.12.47,1.91,1.91,0,0,1-.24.41,1.68,1.68,0,0,0-.33.67,3.65,3.65,0,0,0-.09.74c0,.22,0,.43,0,.65l0,.66c0,.08,0,.17,0,.26a1.11,1.11,0,0,1-.07.26c0,.08-.05.16-.08.23a1,1,0,0,0,0,.25H3.17"
      }), Z("path", {
        className: "cls-2",
        d: "M2.33,12.73a.2.2,0,0,0,0,.11.37.37,0,0,0,0,.11v.52c0,.18,0,.36,0,.53a3.27,3.27,0,0,1-.15,1.18,3.92,3.92,0,0,1-.52,1.07c-.1.14-.19.29-.28.43l-.27.45"
      }), Z("path", {
        className: "cls-2",
        d: "M18.19,11.25a1.8,1.8,0,0,0,.08.39l.12.39c.06.23.12.46.19.69s.13.46.2.69a1,1,0,0,1,0,.42c0,.14,0,.27-.05.4,0,.39-.08.77-.11,1.15l-.12,1.14-.09.88c0,.29-.07.58-.1.88s0,.44,0,.65a2.48,2.48,0,0,0,.08.66v0s0,.2,0,.22"
      }), Z("path", {
        className: "cls-2",
        d: "M18.11,11.19l-.3,0a1.51,1.51,0,0,1-.3,0,1.21,1.21,0,0,0-.38.06,1.14,1.14,0,0,0-.34.15,8.22,8.22,0,0,1-1.1.49c-.38.13-.77.24-1.15.35l-.34.11a.63.63,0,0,1-.36,0,2.26,2.26,0,0,1-.85.1c-.29,0-.57,0-.85-.05a1.61,1.61,0,0,1-.37-.07,3.59,3.59,0,0,1-.35-.12.49.49,0,0,0-.25-.05.52.52,0,0,0-.25.08,7,7,0,0,0-.63.43c-.21.16-.4.32-.61.46l-.07.06a.19.19,0,0,0,0,.08"
      }), Z("path", {
        className: "cls-2",
        d: "M12.41,2.77a.69.69,0,0,0-.32,0,1.63,1.63,0,0,1-.3.07l-.45.07L10.89,3l-.66.11-.65.09-.22,0-.21,0a.65.65,0,0,0-.28.12.8.8,0,0,0-.21.2l-.18.25-.17.26"
      }), Z("path", {
        className: "cls-2",
        d: "M21,15.29l.21,0,.2,0a.17.17,0,0,1,.1,0l.08.07.2.16.19.17a1,1,0,0,0,.44.22c.16,0,.32.05.48.08a.58.58,0,0,0,.28,0l.26-.14.15-.08.15-.09c.06,0,.1,0,.13,0a.19.19,0,0,1,.08.11l0,.07a.13.13,0,0,1,0,.06.81.81,0,0,0,.09.47,2.48,2.48,0,0,0,.29.37,3.7,3.7,0,0,1,.31.46,1.65,1.65,0,0,0,.36.43s0,0,0,0a.07.07,0,0,1,0,.05.92.92,0,0,0,.14.37,1.43,1.43,0,0,0,.24.31,2.12,2.12,0,0,1,.25.36l.21.39a.36.36,0,0,1,.06.2,1.47,1.47,0,0,1,0,.21.65.65,0,0,1,0,.14.22.22,0,0,0,0,.13"
      }), Z("path", {
        className: "cls-2",
        d: "M14.56,15.81l-.11.17,0,.05s0,0,0,0l0,0a1.18,1.18,0,0,1,.37.49,2.7,2.7,0,0,1,.17.59,5.09,5.09,0,0,0,.14.56c0,.19.1.37.17.56a2.31,2.31,0,0,0,.1.28.63.63,0,0,0,.18.22.42.42,0,0,0,.13.07.31.31,0,0,0,.13,0,1.74,1.74,0,0,1,.65.1,4,4,0,0,1,.58.3l.36.2a3,3,0,0,0,.39.13.73.73,0,0,1,.25.08l.22.13a.52.52,0,0,1,.17.22,1.14,1.14,0,0,1,.06.25,4,4,0,0,1,.09.48,3.87,3.87,0,0,1,0,.48.83.83,0,0,0,0,.27.42.42,0,0,0,.19.23A.26.26,0,0,1,19,22a.27.27,0,0,1-.05.22.85.85,0,0,0-.17.39,1.17,1.17,0,0,0,0,.42.54.54,0,0,1-.06.29.63.63,0,0,1-.22.21.1.1,0,0,1-.05,0l-.05,0a.72.72,0,0,0-.36.3.91.91,0,0,0-.13.45,3.16,3.16,0,0,1-.11.6c0,.19-.1.39-.13.59a1.13,1.13,0,0,0,0,.25,1,1,0,0,0,0,.24"
      }), Z("path", {
        className: "cls-2",
        d: "M9.48,13.28a1,1,0,0,0-.19-.17A1.19,1.19,0,0,0,9.07,13a6.52,6.52,0,0,1-.72-.43c-.23-.15-.45-.32-.67-.49a5.72,5.72,0,0,0-.48-.32l-.49-.29a1.24,1.24,0,0,1-.26-.19l-.23-.22A1.05,1.05,0,0,0,6,10.87a.42.42,0,0,0-.3,0"
      }), Z("path", {
        className: "cls-2",
        d: "M20.38,21.21a.76.76,0,0,1,.13.23,2,2,0,0,1,.07.26,1.16,1.16,0,0,0,.17.45.73.73,0,0,1,.09.32,1.21,1.21,0,0,0,.08.34A.87.87,0,0,1,21,23a1.21,1.21,0,0,1,.05.18.45.45,0,0,0,.17.28.38.38,0,0,0,.32,0l.44-.11a2.36,2.36,0,0,1,.46,0l.5.05.5.09.09,0,.08.05c.12.13.24.25.37.37s.24.25.35.38l.14.14.14.13.6.49.61.48"
      }), Z("path", {
        className: "cls-2",
        d: "M6.3,22.5a.66.66,0,0,0,0,.14.76.76,0,0,1,0,.15.44.44,0,0,0,0,.2.28.28,0,0,0,.11.17,1,1,0,0,1,.34.47,1.75,1.75,0,0,1,.08.57,1.13,1.13,0,0,1,0,.26,1.1,1.1,0,0,1-.06.26,5.44,5.44,0,0,0-.15.54,3.43,3.43,0,0,0-.07.56"
      }), Z("path", {
        className: "cls-2",
        d: "M21,15.31H18.21l-.12,0a.38.38,0,0,0-.18,0,.22.22,0,0,0-.17.09.33.33,0,0,1-.2.12.6.6,0,0,1-.23,0,1.33,1.33,0,0,0-.63,0,3.52,3.52,0,0,0-.6.2.52.52,0,0,0-.19.11l-.18.13a.43.43,0,0,1-.25.09.3.3,0,0,1-.23-.08.7.7,0,0,0-.19-.1.5.5,0,0,0-.21,0,.59.59,0,0,1-.22-.05.72.72,0,0,0-.21-.05.46.46,0,0,1-.33-.11c-.09-.08-.16-.18-.25-.25a.28.28,0,0,1-.09-.19c0-.08,0-.16,0-.23,0-.38,0-.76,0-1.13s0-.76,0-1.14v-.1a.15.15,0,0,0,0-.09"
      }), Z("path", {
        className: "cls-2",
        d: "M21.16,23.43a.15.15,0,0,0,0,.15s0,.09.05.13c.08.28.15.56.23.85a5.11,5.11,0,0,0,.29.83,2.86,2.86,0,0,1,.15.41c0,.14.06.29.1.43a.1.1,0,0,0,0,.07s0,.05,0,.08"
      }), Z("path", {
        className: "cls-2",
        d: "M10.22,6.25a1.5,1.5,0,0,1-.34.27,1.1,1.1,0,0,1-.42.14.78.78,0,0,0-.32.15L8.86,7a1,1,0,0,1-.26.11.44.44,0,0,1-.27,0l-.05,0,0,0a3.49,3.49,0,0,1-.34-.15,1.11,1.11,0,0,0-.36-.08"
      }), Z("path", {
        className: "cls-2",
        d: "M22,26.46a4.67,4.67,0,0,0,.37,1.05,5.19,5.19,0,0,0,.62.93,3.15,3.15,0,0,1,.24.3l.23.32"
      }), Z("path", {
        className: "cls-2",
        d: "M16.65,27.15a1.3,1.3,0,0,1-.2.43,3.8,3.8,0,0,1-.29.38c-.21.27-.41.55-.61.82a9.6,9.6,0,0,1-.64.79"
      }), Z("path", {
        className: "cls-2",
        d: "M6.55,25.86a2.22,2.22,0,0,0,0,.37c0,.12,0,.25,0,.37s0,.26,0,.39v.39a1.64,1.64,0,0,0,0,.23.49.49,0,0,1,0,.24"
      }), Z("path", {
        className: "cls-2",
        d: "M10,28.49a.41.41,0,0,0,.26.15.4.4,0,0,0,.26-.06.57.57,0,0,1,.29-.09h.3l.19,0h.18a2.69,2.69,0,0,1,1,.11c.32.08.64.2,1,.28a3.47,3.47,0,0,1,.73.29c.24.11.47.25.7.38"
      }), Z("path", {
        className: "cls-2",
        d: "M13.76,15.31a.11.11,0,0,0-.1,0l-.06.09-.3.6a4.38,4.38,0,0,1-.37.58c.14.14.25.3.37.44a1.39,1.39,0,0,0,.44.35,4.7,4.7,0,0,1,.7.46l.66.54.1.07a.16.16,0,0,0,.12,0"
      }), Z("path", {
        className: "cls-2",
        d: "M8.39,4.33a.13.13,0,0,0,0,.08.19.19,0,0,0,0,.08c0,.21,0,.42,0,.63v.64a.62.62,0,0,1-.06.31.79.79,0,0,1-.21.24,10.14,10.14,0,0,0-.92.8A9.94,9.94,0,0,0,6.33,8c-.07.08-.12.17-.19.26a.77.77,0,0,1-.23.21"
      }), Z("path", {
        className: "cls-2",
        d: "M10.32,6.23a6.42,6.42,0,0,0,.53.38A5.36,5.36,0,0,1,11.4,7l.25.18a1.15,1.15,0,0,1,.21.23"
      }), Z("path", {
        className: "cls-2",
        d: "M21.67,23.43a.84.84,0,0,1,0,.2,1.48,1.48,0,0,1,0,.21c0,.16,0,.32,0,.48a2.57,2.57,0,0,1,0,.48,2.3,2.3,0,0,0-.1.33s0,0,0,0"
      }), Z("path", {
        className: "cls-2",
        d: "M11.88,26.07l.08,0h1.29l.06,0"
      }), Z("path", {
        className: "cls-2",
        d: "M20.34,21.19a1.77,1.77,0,0,1-.32.21,1.37,1.37,0,0,1-.36.11.62.62,0,0,0-.34.15,2.11,2.11,0,0,1-.31.21"
      }), Z("path", {
        className: "cls-2",
        d: "M16.75,27.05a.32.32,0,0,1,.08-.21.57.57,0,0,1,.15-.16,2.21,2.21,0,0,0,.32-.29,1.76,1.76,0,0,0,.25-.34l0,0,.06,0a1.58,1.58,0,0,1,.31.64,2,2,0,0,1,0,.7"
      }), Z("path", {
        className: "cls-2",
        d: "M21.69,23.4l-.35-.48L21,22.44a.13.13,0,0,0-.07-.06l-.07,0"
      }), Z("path", {
        className: "cls-2",
        d: "M14.44,16.11l-.54.49-.53.49"
      }), Z("path", {
        className: "cls-2",
        d: "M19.93,27.48a2.14,2.14,0,0,1,.2.47c0,.17.08.34.13.5a.46.46,0,0,1,0,.23,1.64,1.64,0,0,0,0,.22,2.8,2.8,0,0,0,0,.58,2.91,2.91,0,0,0,.15.56"
      }), Z("path", {
        className: "cls-2",
        d: "M18.62,20.93a2.17,2.17,0,0,0-.42.11l-.42.13"
      }), Z("path", {
        className: "cls-2",
        d: "M19.7,20l-.55.52-.29.29-.09.08a.13.13,0,0,1-.11,0"
      }), Z("path", {
        className: "cls-2",
        d: "M13.31,17.16a.59.59,0,0,1-.25.07,1.15,1.15,0,0,1-.26,0"
      })), Z("g", {
        id: "Locations"
      }, Z("g", {
        transform: "translate(19 21)"
      }, Z("circle", {
        r: "1"
      }), Z("path", {
        d: "M-1,0 L0,2 L1,0 Z",
        transform: "translate(0 0.2)"
      }), Z("text", {
        transform: "translate(-6 1)",
        fontSize: "0.75",
        fontFamily: "nytfranklin",
        fontWeight: "300"
      }, "SITE OF"), Z("text", {
        transform: "translate(-6 2)",
        fontSize: "0.75",
        fontFamily: "nytfranklin",
        fontWeight: "300"
      }, "THE SHOOTING")), Z("rect", {
        mask: "url(#fbcLogoMask)",
        transform: "translate(19.5 21.5)",
        height: "2",
        width: "2",
        "data-church": "fbc"
      }), Z("rect", {
        transform: "translate(19.5 10.5)",
        mask: "url(#watermarkLogoMask)",
        height: "2",
        width: "2",
        "data-church": "watermark"
      }), Z("rect", {
        mask: "url(#tvcLogoMask)",
        transform: "translate(16 12.5)",
        height: "2.2",
        width: "2.2",
        "data-church": "tvc"
      }), Z("rect", {
        transform: "translate(15 3)",
        mask: "url(#prestonwoodLogoMask)",
        height: "2",
        width: "2",
        "data-church": "prestonwood"
      }), Z("rect", {
        mask: "url(#covenantLogoMask)",
        height: "2",
        width: "2",
        transform: "translate(15.25 7)",
        "data-church": "covenant"
      }), Z("rect", {
        mask: "url(#fellowshipLogoMask)",
        height: "3",
        width: "3",
        transform: "translate(6.75 9)",
        "data-church": G.Fellowship
      })));
    };

    function Q(e) {
      var t = 0,
          o = e.children,
          a = o && o.length;
      if (a) for (; --a >= 0;) {
        t += o[a].value;
      } else t = 1;
      e.value = t;
    }

    function ee(e, t) {
      e instanceof Map ? (e = [void 0, e], void 0 === t && (t = oe)) : void 0 === t && (t = te);

      for (var o, a, n, i, s, r = new ie(e), h = [r]; o = h.pop();) {
        if ((n = t(o.data)) && (s = (n = Array.from(n)).length)) for (o.children = n, i = s - 1; i >= 0; --i) {
          h.push(a = n[i] = new ie(n[i])), a.parent = o, a.depth = o.depth + 1;
        }
      }

      return r.eachBefore(ne);
    }

    function te(e) {
      return e.children;
    }

    function oe(e) {
      return Array.isArray(e) ? e[1] : null;
    }

    function ae(e) {
      void 0 !== e.data.value && (e.value = e.data.value), e.data = e.data.data;
    }

    function ne(e) {
      var t = 0;

      do {
        e.height = t;
      } while ((e = e.parent) && e.height < ++t);
    }

    function ie(e) {
      this.data = e, this.depth = this.height = 0, this.parent = null;
    }

    ie.prototype = ee.prototype = _defineProperty({
      constructor: ie,
      count: function count() {
        return this.eachAfter(Q);
      },
      each: function each(e, t) {
        var o = -1;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _a = _step.value;
            e.call(t, _a, ++o, this);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return this;
      },
      eachAfter: function eachAfter(e, t) {
        for (var o, a, n, i = this, s = [i], r = [], h = -1; i = s.pop();) {
          if (r.push(i), o = i.children) for (a = 0, n = o.length; a < n; ++a) {
            s.push(o[a]);
          }
        }

        for (; i = r.pop();) {
          e.call(t, i, ++h, this);
        }

        return this;
      },
      eachBefore: function eachBefore(e, t) {
        for (var o, a, n = this, i = [n], s = -1; n = i.pop();) {
          if (e.call(t, n, ++s, this), o = n.children) for (a = o.length - 1; a >= 0; --a) {
            i.push(o[a]);
          }
        }

        return this;
      },
      find: function find(e, t) {
        var o = -1;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _a2 = _step2.value;
            if (e.call(t, _a2, ++o, this)) return _a2;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      },
      sum: function sum(e) {
        return this.eachAfter(function (t) {
          for (var o = +e(t.data) || 0, a = t.children, n = a && a.length; --n >= 0;) {
            o += a[n].value;
          }

          t.value = o;
        });
      },
      sort: function sort(e) {
        return this.eachBefore(function (t) {
          t.children && t.children.sort(e);
        });
      },
      path: function path(e) {
        for (var t = this, o = function (e, t) {
          if (e === t) return e;
          var o = e.ancestors(),
              a = t.ancestors(),
              n = null;
          e = o.pop(), t = a.pop();

          for (; e === t;) {
            n = e, e = o.pop(), t = a.pop();
          }

          return n;
        }(t, e), a = [t]; t !== o;) {
          t = t.parent, a.push(t);
        }

        for (var n = a.length; e !== o;) {
          a.splice(n, 0, e), e = e.parent;
        }

        return a;
      },
      ancestors: function ancestors() {
        for (var e = this, t = [e]; e = e.parent;) {
          t.push(e);
        }

        return t;
      },
      descendants: function descendants() {
        return Array.from(this);
      },
      leaves: function leaves() {
        var e = [];
        return this.eachBefore(function (t) {
          t.children || e.push(t);
        }), e;
      },
      links: function links() {
        var e = this,
            t = [];
        return e.each(function (o) {
          o !== e && t.push({
            source: o.parent,
            target: o
          });
        }), t;
      },
      copy: function copy() {
        return ee(this).eachBefore(ae);
      }
    }, Symbol.iterator,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var e, t, o, a, n, i;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              n = this, i = [n];

            case 1:
              e = i.reverse(), i = [];

            case 2:
              if (!(n = e.pop())) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return n;

            case 5:
              if (!(t = n.children)) {
                _context.next = 7;
                break;
              }

              for (o = 0, a = t.length; o < a; ++o) {
                i.push(t[o]);
              }

            case 7:
              _context.next = 2;
              break;

            case 9:
              if (i.length) {
                _context.next = 1;
                break;
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    var se = function se(e) {
      for (var t, o, a = 0, n = (e = function (e) {
        for (var t, o, a = e.length; a;) {
          o = Math.random() * a-- | 0, t = e[a], e[a] = e[o], e[o] = t;
        }

        return e;
      }(Array.from(e))).length, i = []; a < n;) {
        t = e[a], o && le(o, t) ? ++a : (o = ue(i = re(i, t)), a = 0);
      }

      return o;
    };

    function re(e, t) {
      var o, a;
      if (de(t, e)) return [t];

      for (o = 0; o < e.length; ++o) {
        if (he(t, e[o]) && de(ce(e[o], t), e)) return [e[o], t];
      }

      for (o = 0; o < e.length - 1; ++o) {
        for (a = o + 1; a < e.length; ++a) {
          if (he(ce(e[o], e[a]), t) && he(ce(e[o], t), e[a]) && he(ce(e[a], t), e[o]) && de(me(e[o], e[a], t), e)) return [e[o], e[a], t];
        }
      }

      throw new Error();
    }

    function he(e, t) {
      var o = e.r - t.r,
          a = t.x - e.x,
          n = t.y - e.y;
      return o < 0 || o * o < a * a + n * n;
    }

    function le(e, t) {
      var o = e.r - t.r + 1e-9 * Math.max(e.r, t.r, 1),
          a = t.x - e.x,
          n = t.y - e.y;
      return o > 0 && o * o > a * a + n * n;
    }

    function de(e, t) {
      for (var o = 0; o < t.length; ++o) {
        if (!le(e, t[o])) return !1;
      }

      return !0;
    }

    function ue(e) {
      switch (e.length) {
        case 1:
          return {
            x: (t = e[0]).x,
            y: t.y,
            r: t.r
          };

        case 2:
          return ce(e[0], e[1]);

        case 3:
          return me(e[0], e[1], e[2]);
      }

      var t;
    }

    function ce(e, t) {
      var o = e.x,
          a = e.y,
          n = e.r,
          i = t.x,
          s = t.y,
          r = t.r,
          h = i - o,
          l = s - a,
          d = r - n,
          u = Math.sqrt(h * h + l * l);
      return {
        x: (o + i + h / u * d) / 2,
        y: (a + s + l / u * d) / 2,
        r: (u + n + r) / 2
      };
    }

    function me(e, t, o) {
      var a = e.x,
          n = e.y,
          i = e.r,
          s = t.x,
          r = t.y,
          h = t.r,
          l = o.x,
          d = o.y,
          u = o.r,
          c = a - s,
          m = a - l,
          w = n - r,
          y = n - d,
          f = h - i,
          g = u - i,
          p = a * a + n * n - i * i,
          v = p - s * s - r * r + h * h,
          b = p - l * l - d * d + u * u,
          k = m * w - c * y,
          I = (w * b - y * v) / (2 * k) - a,
          A = (y * f - w * g) / k,
          T = (m * v - c * b) / (2 * k) - n,
          x = (c * g - m * f) / k,
          j = A * A + x * x - 1,
          W = 2 * (i + I * A + T * x),
          S = I * I + T * T - i * i,
          G = -(j ? (W + Math.sqrt(W * W - 4 * j * S)) / (2 * j) : S / W);
      return {
        x: a + I + A * G,
        y: n + T + x * G,
        r: G
      };
    }

    function we(e, t, o) {
      var a,
          n,
          i,
          s,
          r = e.x - t.x,
          h = e.y - t.y,
          l = r * r + h * h;
      l ? (n = t.r + o.r, n *= n, s = e.r + o.r, n > (s *= s) ? (a = (l + s - n) / (2 * l), i = Math.sqrt(Math.max(0, s / l - a * a)), o.x = e.x - a * r - i * h, o.y = e.y - a * h + i * r) : (a = (l + n - s) / (2 * l), i = Math.sqrt(Math.max(0, n / l - a * a)), o.x = t.x + a * r - i * h, o.y = t.y + a * h + i * r)) : (o.x = t.x + o.r, o.y = t.y);
    }

    function ye(e, t) {
      var o = e.r + t.r - 1e-6,
          a = t.x - e.x,
          n = t.y - e.y;
      return o > 0 && o * o > a * a + n * n;
    }

    function fe(e) {
      var t = e._,
          o = e.next._,
          a = t.r + o.r,
          n = (t.x * o.r + o.x * t.r) / a,
          i = (t.y * o.r + o.y * t.r) / a;
      return n * n + i * i;
    }

    function ge(e) {
      this._ = e, this.next = null, this.previous = null;
    }

    function pe(e) {
      if (!(i = (t = e, e = "object" === _typeof(t) && "length" in t ? t : Array.from(t)).length)) return 0;
      var t, o, a, n, i, s, r, h, l, d, u, c;
      if ((o = e[0]).x = 0, o.y = 0, !(i > 1)) return o.r;
      if (a = e[1], o.x = -a.r, a.x = o.r, a.y = 0, !(i > 2)) return o.r + a.r;
      we(a, o, n = e[2]), o = new ge(o), a = new ge(a), n = new ge(n), o.next = n.previous = a, a.next = o.previous = n, n.next = a.previous = o;

      e: for (h = 3; h < i; ++h) {
        we(o._, a._, n = e[h]), n = new ge(n), l = a.next, d = o.previous, u = a._.r, c = o._.r;

        do {
          if (u <= c) {
            if (ye(l._, n._)) {
              a = l, o.next = a, a.previous = o, --h;
              continue e;
            }

            u += l._.r, l = l.next;
          } else {
            if (ye(d._, n._)) {
              (o = d).next = a, a.previous = o, --h;
              continue e;
            }

            c += d._.r, d = d.previous;
          }
        } while (l !== d.next);

        for (n.previous = o, n.next = a, o.next = a.previous = a = n, s = fe(o); (n = n.next) !== a;) {
          (r = fe(n)) < s && (o = n, s = r);
        }

        a = o.next;
      }

      for (o = [a._], n = a; (n = n.next) !== a;) {
        o.push(n._);
      }

      for (n = se(o), h = 0; h < i; ++h) {
        (o = e[h]).x -= n.x, o.y -= n.y;
      }

      return n.r;
    }

    function ve(e) {
      return null == e ? null : function (e) {
        if ("function" !== typeof e) throw new Error();
        return e;
      }(e);
    }

    function be() {
      return 0;
    }

    var ke = function ke(e) {
      return function () {
        return e;
      };
    };

    function Ie(e) {
      return Math.sqrt(e.value);
    }

    function Ae(e) {
      return function (t) {
        t.children || (t.r = Math.max(0, +e(t) || 0));
      };
    }

    function Te(e, t) {
      return function (o) {
        if (a = o.children) {
          var a,
              n,
              i,
              s = a.length,
              r = e(o) * t || 0;
          if (r) for (n = 0; n < s; ++n) {
            a[n].r += r;
          }
          if (i = pe(a), r) for (n = 0; n < s; ++n) {
            a[n].r -= r;
          }
          o.r = i + r;
        }
      };
    }

    function xe(e) {
      return function (t) {
        var o = t.parent;
        t.r *= e, o && (t.x = o.x + e * t.x, t.y = o.y + e * t.y);
      };
    }

    var je = i.a.createElement;

    function We() {
      var e = Object(s.a)(["\n  text-transform: uppercase;\n  font-family: nytfranklin;\n"]);
      return We = function We() {
        return e;
      }, e;
    }

    var Se = {
      twitterFollowers: "Followers (pastor)",
      churchTwitterFollowers: "Followers (church)",
      attendees: "Church Attendees",
      podcastReviews: "Podcast Reviews"
    },
        Ge = Object(l.a)(We()),
        Me = function Me(e) {
      var t,
          o = e.calculationKey,
          a = e.church,
          n = e.onElementClick,
          s = ee({
        children: Object.values(U)
      }).sum(function (e) {
        return e[o];
      }),
          r = function () {
        var e = null,
            t = 1,
            o = 1,
            a = be;

        function n(n) {
          return n.x = t / 2, n.y = o / 2, e ? n.eachBefore(Ae(e)).eachAfter(Te(a, .5)).eachBefore(xe(1)) : n.eachBefore(Ae(Ie)).eachAfter(Te(be, 1)).eachAfter(Te(a, n.r / Math.min(t, o))).eachBefore(xe(Math.min(t, o) / (2 * n.r))), n;
        }

        return n.radius = function (t) {
          return arguments.length ? (e = ve(t), n) : e;
        }, n.size = function (e) {
          return arguments.length ? (t = +e[0], o = +e[1], n) : [t, o];
        }, n.padding = function (e) {
          return arguments.length ? (a = "function" === typeof e ? e : ke(+e), n) : a;
        }, n;
      }().size([100, 100])(s);

      return G.Watermark, je("div", {
        style: {}
      }, je("svg", {
        height: "100%",
        width: "100%",
        viewBox: "0 -30 100 130"
      }, r.leaves().map(function (e) {
        return je(i.a.Fragment, null, je("circle", {
          r: e.r,
          key: e.data.key,
          transform: "translate(".concat(e.x, " ").concat(e.y, ")"),
          "data-church": e.data.key,
          onClick: function onClick() {
            return n(e.data.key);
          }
        }));
      }), je("text", {
        className: Ge,
        transform: "translate(0 -18)",
        fontSize: "8px",
        fontWeight: "300"
      }, Se[o]), je("text", {
        className: Ge,
        transform: "translate(0 -5)",
        fontSize: "14px",
        fontWeight: "700"
      }, null === (t = U[a]) || void 0 === t ? void 0 : t[o])));
    },
        Ce = i.a.createElement;

    function Oe() {
      var e = Object(s.a)(["\n  text-transform: uppercase;\n  font-family: nytfranklin;\n  font-size: 1.75px;\n  font-weight: 300;\n"]);
      return Oe = function Oe() {
        return e;
      }, e;
    }

    var He = Object(l.a)(Oe()),
        Be = function Be(e) {
      var t = e.selectedChurch,
          o = e.onElementClick,
          a = Object(n.useState)(null),
          s = a[0],
          r = a[1];
      return Ce("div", {
        style: {}
      }, Ce("svg", {
        viewBox: "0 0 100 40"
      }, Ce("defs", null, Ce(X, {
        church: "watermark",
        size: 2
      }), Ce(X, {
        church: "tvc",
        size: 2
      }), Ce(X, {
        church: "covenant",
        size: 2
      }), Ce(X, {
        church: "prestonwood",
        size: 2
      }), Ce(X, {
        church: "fellowship",
        size: 2
      }), Ce(X, {
        church: "fbc",
        size: 2
      })), Ce("text", {
        className: He,
        transform: "translate(0 2)"
      }, "How long did he talk about it?"), Ce("g", null, Object.values(U).map(function (e, t) {
        var a = 2.5 * t + 3,
            n = Ce("rect", {
          mask: "url(#".concat(e.key, "LogoMask)"),
          height: "2",
          width: "2",
          transform: "translate(0 ".concat(a, ")")
        }),
            s = 3,
            r = 0;
        return Ce("g", {
          key: "thing".concat(t),
          onClick: function onClick() {
            o(e.key);
          },
          "data-church": e.key
        }, e.minutes.concat([null]).map(function (t, o) {
          return s += e.minutes[o - 1] ? e.minutes[o - 1].length + .5 : 0, t ? (r += t.length, Ce(i.a.Fragment, {
            key: "thing".concat(o)
          }, n, Ce("rect", {
            height: 2,
            width: t.length,
            transform: "translate(".concat(s, " ").concat(a, ")")
          }))) : Ce(i.a.Fragment, {
            key: "thing".concat(o)
          }, Ce("text", {
            transform: "translate(".concat(s + .5, " ").concat(a + 1.6, ")"),
            fontSize: "2"
          }, r, " minutes"));
        }));
      })), Ce("g", {
        transform: "translate(0 20)"
      }, Ce("text", {
        className: He,
        transform: "translate(0 1)"
      }, "How did he talk about it?"), Ce("circle", {
        transform: "translate(25 0.25)",
        fill: "var(--problematic)",
        r: "0.75"
      }), Ce("text", {
        className: He,
        transform: "translate(26 1)"
      }, "PROBLEMATIC"), Ce("circle", {
        transform: "translate(39.5 0.25)",
        fill: "var(--productive)",
        r: "0.75"
      }), Ce("text", {
        transform: "translate(41 1)",
        className: He
      }, "PRODUCTIVE"), Object.values(U).map(function (e, a) {
        var n = 2.5 * a + 3,
            i = [Ce("rect", {
          mask: "url(#".concat(e.key, "LogoMask)"),
          "data-church": e.key,
          height: "2",
          width: "2",
          transform: "translate(0 ".concat(n - 1, ")")
        })],
            h = function h(o) {
          return function (a) {
            var s = y(a, 2),
                h = s[0];
            s[1];
            i.push(Ce("circle", {
              transform: "translate(".concat(2.5 * i.length + 2, " ").concat(n, ")"),
              r: "1",
              fill: "var(--".concat(o, ")"),
              "data-sentiment": o,
              "data-church": "".concat(e.key),
              onClick: function onClick() {
                console.log(h), e.key === t && r(h);
              }
            }));
          };
        };

        return e.sentiments && (Object.entries(e.sentiments).filter(function (e) {
          var t = y(e, 1)[0];
          return "problematic" === _[t];
        }).forEach(h("problematic")), Object.entries(e.sentiments).filter(function (e) {
          var t = y(e, 1)[0];
          return "productive" === _[t];
        }).forEach(h("productive"))), Ce("g", {
          key: "substance-".concat(e.key),
          onClick: function onClick() {
            o(e.key), e.key !== t && r(null);
          }
        }, i, s && e.key === t && Ce("g", {
          transform: "translate(".concat(2.5 * i.length + 2, " ").concat(n + .85, ")")
        }, Ce("text", {
          fontSize: "2.5px"
        }, K[s])));
      }))));
    },
        Le = i.a.createElement;

    function Ne() {
      var e = Object(s.a)(["\n    &::before {\n      content: '';\n      background-image: url('/img/buildings/watermark.png');\n      background-size: cover;\n      background-position: bottom;\n      position: fixed;\n      z-index: -1;\n      top: 0px;\n      right: 0px;\n      bottom: -30px;\n      left: 0px;\n      opacity: 0.03;\n    }\n\n    [data-church] {\n      fill: var(--highlight);\n      opacity: ", ";\n      transition: opacity 1000ms ease;\n\n      &:hover {\n        opacity: 0.1;\n      }\n\n      &[data-sentiment='problematic'] {\n        fill: var(--problematic);\n      }\n\n      &[data-sentiment='productive'] {\n        fill: var(--productive);\n      }\n    }\n\n    [data-church='", "'] {\n      opacity: 0.9;\n\n      &:hover {\n        opacity: 0.7;\n      }\n    }\n  "]);
      return Ne = function Ne() {
        return e;
      }, e;
    }

    var Je = function Je() {
      var e,
          t = Object(n.useState)(null),
          o = t[0],
          s = t[1],
          r = Object(l.a)(Ne(), o ? .3 : .9, o),
          h = s;
      return Le(m, {
        className: Object(l.b)(r, M)
      }, Le("div", {
        style: {
          gridArea: "title"
        }
      }, Le("h1", null, "Preaching on Race"), Le("sub", null, "What message did white pastors of Dallas send after a week of national tragedies in 2016?")), Le("div", {
        className: J
      }, Le(function () {
        var e,
            t = U[o];
        return Le(i.a.Fragment, null, Le("h2", null, null === (e = U[o]) || void 0 === e ? void 0 : e.pastor, " ", Le("span", {
          style: {
            fontSize: "0.75rem",
            textTransform: "uppercase",
            fontWeight: "lighter",
            color: "gray",
            marginLeft: "6px",
            fontFamily: "nytfranklin"
          }
        }, null === t || void 0 === t ? void 0 : t.name, " (", null === t || void 0 === t ? void 0 : t.denomination, ") - ", null === t || void 0 === t ? void 0 : t.city)), (null === t || void 0 === t ? void 0 : t.fastFacts) && Object.entries(null === t || void 0 === t ? void 0 : t.fastFacts).map(function (e, t) {
          var a = y(e, 2),
              n = a[0],
              i = a[1];
          return Le("p", {
            key: "".concat(o, "-").concat(t)
          }, " ", Le("span", null, n), " ", i);
        }));
      }, null)), Le("div", {
        className: E
      }, Le("div", {
        style: {
          zIndex: -1,
          gridArea: "map"
        }
      }, Le("h3", null, "Location"), Le($, {
        className: N
      })), Le("div", {
        style: {
          gridArea: "influence"
        }
      }, Le("h3", null, "Influence")), Le("div", {
        style: {
          gridArea: "influence1"
        }
      }, Le(Me, {
        onElementClick: function onElementClick(e) {
          return h(e);
        },
        church: o,
        calculationKey: "twitterFollowers"
      })), Le("div", {
        style: {
          gridArea: "influence3"
        }
      }, Le(Me, {
        onElementClick: function onElementClick(e) {
          return h(e);
        },
        church: o,
        calculationKey: "attendees"
      })), Le("div", {
        style: {
          gridArea: "influence4"
        }
      }, Le(Me, {
        onElementClick: function onElementClick(e) {
          return h(e);
        },
        church: o,
        calculationKey: "podcastReviews"
      })), Le("div", {
        style: {
          gridArea: "influence2"
        }
      }, Le(Me, {
        onElementClick: function onElementClick(e) {
          return h(e);
        },
        church: o,
        calculationKey: "churchTwitterFollowers"
      }))), Le("div", {
        style: {
          gridArea: "substance"
        }
      }, Le("h3", null, "Substance"), Le(Be, {
        onElementClick: function onElementClick(e) {
          return h(e);
        },
        selectedChurch: o
      })), Le("div", {
        className: B
      }, Le("p", {
        className: H
      }, null === (e = a[o]) || void 0 === e ? void 0 : e.map(function (e, t) {
        return "string" === typeof e ? Le("span", {
          key: "".concat(o, "-").concat(t),
          style: {
            animation: "".concat(50 * t, "ms ease fadein")
          }
        }, e) : Le("span", {
          key: "".concat(o, "-").concat(t),
          className: Object(l.b)(L, "productive" === _[e.statementSentiment] ? O : C),
          style: {
            animation: "".concat(30 * t, "ms easein fadein")
          }
        }, e.text);
      }))));
    },
        Ee = i.a.createElement;

    function Fe() {
      var e = Object(s.a)(["\n  font-size: 2rem;\n  margin: 25%;\n"]);
      return Fe = function Fe() {
        return e;
      }, e;
    }

    function Pe() {
      var e = Object(s.a)(["\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n"]);
      return Pe = function Pe() {
        return e;
      }, e;
    }

    var Ye = Object(l.a)(Pe()),
        De = Object(l.a)(Fe()),
        qe = function qe() {
      return Ee(i.a.Fragment, null, Ee(h.a, null, Ee("link", {
        href: "https://a1.nyt.com/fonts/css/fonts.css",
        type: "stylesheet"
      })), Ee("main", {
        className: Ye
      }, Ee(m, null), Ee(m, null, Ee("p", {
        className: De
      }, "On July 5th, 2016, Alton Sterling was murdered by Baton Rouge police officers.")), Ee(m, null, Ee("p", {
        className: De
      }, "The next day, Philando Castille was also killed by a police officer in Minnesota.")), Ee(m, null, Ee("p", {
        className: De
      }, "In the coming days, Black Lives Matter protestors organized rallies across the country, asking for justive for Philando and Alton. On July 7th one of these rallies was held in Dallas.")), Ee(m, null, Ee("p", {
        className: De
      }, "At this rally, a man took advantage of the protest to take his anger out on police officers. He shot and killed five of them as well as two civilians.")), Ee(m, null, Ee("p", {
        className: De
      }, "At that point, Dallas had the largest percentage of evangelicals of any metro area at 38%, so what the pastors had to say was suddenly in the national spotlight.", " ")), Ee(m, null, Ee("p", {
        className: De
      }, "The question: Could they, at a time when a vast majority of Rebulicans did not support BLM, use the opportunity to validate the movement? Could they avoid problematic teaching points? Could they productively encourage the white members in their congregations to be allies?")), Ee(m, null, Ee("p", {
        className: De
      }, "Let\u2032s analyze the sermons the Sunday after.")), Ee(Je, null)));
    },
        ze = i.a.createElement,
        Re = function Re() {
      return ze(qe, null);
    };

    t["default"] = Re;
  }
}, [["7zAk", 0, 1, 4]]]);