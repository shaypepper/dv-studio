"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[6], {
  "6qzB": function qzB(e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/DataVizStudio", function () {
      return n("Nc1N");
    }]);
  },
  Nc1N: function Nc1N(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("q1tI"),
        o = n.n(r),
        a = n("YFqc"),
        u = n.n(a),
        c = o.a.createElement;

    t["default"] = function () {
      return c(o.a.Fragment, null, c("h1", null, "Projects for DataVizStudio"), c("ul", null, c("li", null, c(u.a, {
        href: "/"
      }, "Prototype #1")), c("li", null, c(u.a, {
        href: "/"
      }, "Prototype #2")), c("li", null, c(u.a, {
        href: "/"
      }, "Prototype #3")), c("li", null, c(u.a, {
        href: "/"
      }, "Prototype #4"))));
    };
  },
  YFqc: function YFqc(e, t, n) {
    e.exports = n("cTJO");
  },
  cTJO: function cTJO(e, t, n) {
    "use strict";

    var r = n("J4zp"),
        o = n("284h");
    t.__esModule = !0, t["default"] = void 0;
    var a,
        u = o(n("q1tI")),
        c = n("elyg"),
        f = n("nOHt"),
        l = new Map(),
        i = window.IntersectionObserver,
        s = {};

    var p = function p(e, t) {
      var n = a || (i ? a = new i(function (e) {
        e.forEach(function (e) {
          if (l.has(e.target)) {
            var t = l.get(e.target);
            (e.isIntersecting || e.intersectionRatio > 0) && (a.unobserve(e.target), l["delete"](e.target), t());
          }
        });
      }, {
        rootMargin: "200px"
      }) : void 0);
      return n ? (n.observe(e), l.set(e, t), function () {
        try {
          n.unobserve(e);
        } catch (t) {
          console.error(t);
        }

        l["delete"](e);
      }) : function () {};
    };

    function d(e, t, n, r) {
      (0, c.isLocalURL)(t) && (e.prefetch(t, n, r)["catch"](function (e) {
        0;
      }), s[t + "%" + n] = !0);
    }

    var h = function h(e) {
      var t = !1 !== e.prefetch,
          n = u["default"].useState(),
          o = r(n, 2),
          a = o[0],
          l = o[1],
          h = (0, f.useRouter)(),
          v = h && h.pathname || "/",
          y = u["default"].useMemo(function () {
        var t = (0, c.resolveHref)(v, e.href, !0),
            n = r(t, 2),
            o = n[0],
            a = n[1];
        return {
          href: o,
          as: e.as ? (0, c.resolveHref)(v, e.as) : a || o
        };
      }, [v, e.href, e.as]),
          w = y.href,
          E = y.as;
      u["default"].useEffect(function () {
        if (t && i && a && a.tagName && (0, c.isLocalURL)(w) && !s[w + "%" + E]) return p(a, function () {
          d(h, w, E);
        });
      }, [t, a, w, E, h]);
      var _ = e.children,
          g = e.replace,
          N = e.shallow,
          m = e.scroll;
      "string" === typeof _ && (_ = u["default"].createElement("a", null, _));
      var L = u.Children.only(_),
          b = {
        ref: function ref(e) {
          e && l(e), L && "object" === _typeof(L) && L.ref && ("function" === typeof L.ref ? L.ref(e) : "object" === _typeof(L.ref) && (L.ref.current = e));
        },
        onClick: function onClick(e) {
          L.props && "function" === typeof L.props.onClick && L.props.onClick(e), e.defaultPrevented || function (e, t, n, r, o, a, u) {
            ("A" !== e.currentTarget.nodeName || !function (e) {
              var t = e.currentTarget.target;
              return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which;
            }(e) && (0, c.isLocalURL)(n)) && (e.preventDefault(), null == u && (u = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, {
              shallow: a
            }).then(function (e) {
              e && u && (window.scrollTo(0, 0), document.body.focus());
            }));
          }(e, h, w, E, g, N, m);
        }
      };
      return t && (b.onMouseEnter = function (e) {
        (0, c.isLocalURL)(w) && (L.props && "function" === typeof L.props.onMouseEnter && L.props.onMouseEnter(e), d(h, w, E, {
          priority: !0
        }));
      }), (e.passHref || "a" === L.type && !("href" in L.props)) && (b.href = (0, c.addBasePath)((0, c.addLocale)(E, h && h.locale, h && h.defaultLocale))), u["default"].cloneElement(L, b);
    };

    t["default"] = h;
  }
}, [["6qzB", 0, 1, 2]]]);