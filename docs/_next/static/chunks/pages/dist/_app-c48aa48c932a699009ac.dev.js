"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[13], {
  0: function _(e, t, r) {
    r("GcxT"), e.exports = r("nOHt");
  },
  "1TCz": function TCz(e, t, r) {
    "use strict";

    r.r(t);
    var n = r("q1tI"),
        o = r.n(n),
        i = (r("zPlV"), r("z/o8")),
        s = r("Sdyp"),
        a = r.n(s),
        l = o.a.createElement;
    i.a.registerPlugin(a.a), a.a.defaults({
      toggleActions: "restart pause resume pause"
    }), t["default"] = function (e) {
      var t = e.Component,
          r = e.pageProps;
      return l(t, r);
    };
  },
  GcxT: function GcxT(e, t, r) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
      return r("1TCz");
    }]);
  },
  Sdyp: function Sdyp(e, t, r) {
    !function (e) {
      "use strict";

      var t,
          r,
          n,
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          f,
          p,
          d,
          h,
          g,
          v,
          m,
          x,
          y,
          b,
          w,
          T,
          k,
          C,
          P,
          _ = 1,
          O = [],
          S = [],
          E = Date.now,
          M = E(),
          z = 0,
          N = 1,
          A = function A(e) {
        return e;
      },
          L = function L() {
        return "undefined" !== typeof window;
      },
          R = function R() {
        return t || L() && (t = window.gsap) && t.registerPlugin && t;
      },
          I = function I(e) {
        return !!~a.indexOf(e);
      },
          B = function B(e, t) {
        return ~O.indexOf(e) && O[O.indexOf(e) + 1][t];
      },
          F = function F(e, t) {
        var r = t.s,
            n = t.sc,
            o = S.indexOf(e),
            i = n === ge.sc ? 1 : 2;
        return !~o && (o = S.push(e) - 1), S[o + i] || (S[o + i] = B(e, r) || (I(e) ? n : function (t) {
          return arguments.length ? e[r] = t : e[r];
        }));
      },
          W = function W(e) {
        return B(e, "getBoundingClientRect") || (I(e) ? function () {
          return nt.width = n.innerWidth, nt.height = n.innerHeight, nt;
        } : function () {
          return ye(e);
        });
      },
          q = function q(e, t, r) {
        var o = r.d,
            i = r.d2,
            s = r.a;
        return (s = B(e, "getBoundingClientRect")) ? function () {
          return s()[o];
        } : function () {
          return (t ? n["inner" + i] : e["client" + i]) || 0;
        };
      },
          D = function D(e, t) {
        return !t || ~O.indexOf(e) ? W(e) : function () {
          return nt;
        };
      },
          X = function X(e, t) {
        var r = t.s,
            o = t.d2,
            a = t.d,
            l = t.a;
        return (r = "scroll" + o) && (l = B(e, r)) ? l() - W(e)()[a] : I(e) ? Math.max(i[r], s[r]) - (n["inner" + o] || i["client" + o] || s["client" + o]) : e[r] - e["offset" + o];
      },
          H = function H(e, t) {
        for (var r = 0; r < w.length; r += 3) {
          (!t || ~t.indexOf(w[r + 1])) && e(w[r], w[r + 1], w[r + 2]);
        }
      },
          V = function V(e) {
        return "string" === typeof e;
      },
          Y = function Y(e) {
        return "function" === typeof e;
      },
          j = function j(e) {
        return "number" === typeof e;
      },
          G = function G(e) {
        return "object" === _typeof(e);
      },
          J = function J(e) {
        return Y(e) && e();
      },
          U = function U(e, t) {
        return function () {
          var r = J(e),
              n = J(t);
          return function () {
            J(r), J(n);
          };
        };
      },
          Z = Math.abs,
          $ = "scrollLeft",
          K = "scrollTop",
          Q = "left",
          ee = "top",
          te = "right",
          re = "bottom",
          ne = "width",
          oe = "height",
          ie = "Right",
          se = "Left",
          ae = "Top",
          le = "Bottom",
          ce = "padding",
          ue = "margin",
          fe = "Width",
          pe = "Height",
          de = "px",
          he = {
        s: $,
        p: Q,
        p2: se,
        os: te,
        os2: ie,
        d: ne,
        d2: fe,
        a: "x",
        sc: function sc(e) {
          return arguments.length ? n.scrollTo(e, ge.sc()) : n.pageXOffset || o[$] || i[$] || s[$] || 0;
        }
      },
          ge = {
        s: K,
        p: ee,
        p2: ae,
        os: re,
        os2: le,
        d: oe,
        d2: pe,
        a: "y",
        op: he,
        sc: function sc(e) {
          return arguments.length ? n.scrollTo(he.sc(), e) : n.pageYOffset || o[K] || i[K] || s[K] || 0;
        }
      },
          ve = function ve(e) {
        return n.getComputedStyle(e);
      },
          me = function me(e) {
        return e.style.position = "absolute" === ve(e).position ? "absolute" : "relative";
      },
          xe = function xe(e, t) {
        for (var r in t) {
          r in e || (e[r] = t[r]);
        }

        return e;
      },
          ye = function ye(e, r) {
        var n = r && "matrix(1, 0, 0, 1, 0, 0)" !== ve(e)[m] && t.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
            o = e.getBoundingClientRect();
        return n && n.progress(0).kill(), o;
      },
          be = function be(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
      },
          we = function we(e) {
        return function (r) {
          var n,
              o = [],
              i = e.labels,
              s = e.duration();

          for (n in i) {
            o.push(i[n] / s);
          }

          return t.utils.snap(o, r);
        };
      },
          Te = function Te(e, t, r, n) {
        return r.split(",").forEach(function (r) {
          return e(t, r, n);
        });
      },
          ke = function ke(e, t, r) {
        return e.addEventListener(t, r, {
          passive: !0
        });
      },
          Ce = function Ce(e, t, r) {
        return e.removeEventListener(t, r);
      },
          Pe = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      },
          _e = {
        toggleActions: "play",
        anticipatePin: 0
      },
          Oe = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
      },
          Se = function Se(e, t) {
        if (V(e)) {
          var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
          n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Oe ? Oe[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }

        return e;
      },
          Ee = function Ee(e, t, r, n, i, a, l) {
        var c = i.startColor,
            u = i.endColor,
            f = i.fontSize,
            p = i.indent,
            d = i.fontWeight,
            h = o.createElement("div"),
            g = I(r) || "fixed" === B(r, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            m = g ? s : r,
            x = -1 !== e.indexOf("start"),
            y = x ? c : u,
            b = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + (v && g ? "fixed;" : "absolute;"), (v || !g) && (b += (n === ge ? te : re) + ":" + (a + parseFloat(p)) + "px;"), l && (b += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), h._isStart = x, h.setAttribute("class", "gsap-marker-" + e), h.style.cssText = b, h.innerText = t || 0 === t ? e + "-" + t : e, m.insertBefore(h, m.children[0]), h._offset = h["offset" + n.op.d2], Me(h, 0, n, x), h;
      },
          Me = function Me(e, r, n, o) {
        var i = {
          display: "block"
        },
            s = n[o ? "os2" : "p2"],
            a = n[o ? "p2" : "os2"];
        e._isFlipped = o, i[n.a + "Percent"] = o ? -100 : 0, i[n.a] = o ? 1 : 0, i["border" + s + fe] = 1, i["border" + a + fe] = 0, i[n.p] = r, t.set(e, i);
      },
          ze = [],
          Ne = {},
          Ae = function Ae() {
        return u || (u = c(Je));
      },
          Le = function Le() {
        u || (u = c(Je), z || De("scrollStart"), z = E());
      },
          Re = function Re() {
        return !g && l.restart(!0);
      },
          Ie = {},
          Be = [],
          Fe = [],
          We = function We(e) {
        var r,
            o = t.ticker.frame,
            i = [],
            s = 0;

        if (P !== o || _) {
          for (Ve(); s < Fe.length; s += 4) {
            (r = n.matchMedia(Fe[s]).matches) !== Fe[s + 3] && (Fe[s + 3] = r, r ? i.push(s) : Ve(1, Fe[s]) || Y(Fe[s + 2]) && Fe[s + 2]());
          }

          for (He(), s = 0; s < i.length; s++) {
            r = i[s], C = Fe[r], Fe[r + 2] = Fe[r + 1](e);
          }

          C = 0, Ye(0, 1), P = o, De("matchMedia");
        }
      },
          qe = function e() {
        return Ce(lt, "scrollEnd", e) || Ye(!0);
      },
          De = function De(e) {
        return Ie[e] && Ie[e].map(function (e) {
          return e();
        }) || Be;
      },
          Xe = [],
          He = function He(e) {
        for (var t = 0; t < Xe.length; t += 4) {
          e && Xe[t + 3] !== e || (Xe[t].style.cssText = Xe[t + 1], Xe[t + 2].uncache = 1);
        }
      },
          Ve = function Ve(e, t) {
        var r;

        for (x = 0; x < ze.length; x++) {
          r = ze[x], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
        }

        He(t), t || De("revert");
      },
          Ye = function Ye(e, t) {
        if (!z || e) {
          var r = De("refreshInit");

          for (T && lt.sort(), t || Ve(), x = 0; x < ze.length; x++) {
            ze[x].refresh();
          }

          for (r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }), x = ze.length; x--;) {
            ze[x].scroll.rec = 0;
          }

          l.pause(), De("refresh");
        } else ke(lt, "scrollEnd", qe);
      },
          je = 0,
          Ge = 1,
          Je = function Je() {
        var e = ze.length,
            t = E(),
            r = t - M >= 50,
            n = e && ze[0].scroll();

        if (Ge = je > n ? -1 : 1, je = n, r && (z && !v && t - z > 200 && (z = 0, De("scrollEnd")), d = M, M = t), Ge < 0) {
          for (x = e; x--;) {
            ze[x] && ze[x].update(0, r);
          }

          Ge = 1;
        } else for (x = 0; x < e; x++) {
          ze[x] && ze[x].update(0, r);
        }

        u = 0;
      },
          Ue = [Q, ee, re, te, ue + le, ue + ie, ue + ae, ue + se, "display", "flexShrink", "float"],
          Ze = Ue.concat([ne, oe, "boxSizing", "max" + fe, "max" + pe, "position", ue, ce, ce + ae, ce + ie, ce + le, ce + se]),
          $e = function $e(e, t, r) {
        if (et(r), e.parentNode === t) {
          var n = t.parentNode;
          n && (n.insertBefore(e, t), n.removeChild(t));
        }
      },
          Ke = function Ke(e, t, r, n) {
        if (e.parentNode !== t) {
          for (var o, i = Ue.length, s = t.style, a = e.style; i--;) {
            s[o = Ue[i]] = r[o];
          }

          s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a[re] = a[te] = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[ne] = be(e, he) + de, s[oe] = be(e, ge) + de, s[ce] = a[ue] = a[ee] = a[Q] = "0", et(n), a[ne] = a["max" + fe] = r[ne], a[oe] = a["max" + pe] = r[oe], a[ce] = r[ce], e.parentNode.insertBefore(t, e), t.appendChild(e);
        }
      },
          Qe = /([A-Z])/g,
          et = function et(e) {
        if (e) for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) {
          r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Qe, "-$1").toLowerCase());
        }
      },
          tt = function tt(e) {
        for (var t = Ze.length, r = e.style, n = [], o = 0; o < t; o++) {
          n.push(Ze[o], r[Ze[o]]);
        }

        return n.t = e, n;
      },
          rt = function rt(e, t, r) {
        for (var n, o = [], i = e.length, s = r ? 8 : 0; s < i; s += 2) {
          n = e[s], o.push(n, n in t ? t[n] : e[s + 1]);
        }

        return o.t = e.t, o;
      },
          nt = {
        left: 0,
        top: 0
      },
          ot = function ot(e, t, r, n, o, a, l, c, u, p, d, h) {
        if (Y(e) && (e = e(c)), V(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? Se("0" + e.substr(3), r) : 0)), j(e)) l && Me(l, r, n, !0);else {
          Y(t) && (t = t(c));
          var g,
              v,
              m,
              x = f(t)[0] || s,
              y = ye(x) || {},
              b = e.split(" ");
          y && (y.left || y.top) || "none" !== ve(x).display || (m = x.style.display, x.style.display = "block", y = ye(x), m ? x.style.display = m : x.style.removeProperty("display")), g = Se(b[0], y[n.d]), v = Se(b[1] || "0", r), e = y[n.p] - u[n.p] - p + g + o - v, l && Me(l, v, n, r - v < 20 || l._isStart && v > 20), r -= r - v;
        }

        if (a) {
          var w = e + r,
              T = a._isStart;
          h = "scroll" + n.d2, Me(a, w, n, T && w > 20 || !T && (d ? Math.max(s[h], i[h]) : a.parentNode[h]) <= w + 1), d && (u = ye(l), d && (a.style[n.op.p] = u[n.op.p] - n.op.m - a._offset + de));
        }

        return Math.round(e);
      },
          it = /(?:webkit|moz|length|cssText)/i,
          st = function st(e, r, n, o) {
        if (e.parentNode !== r) {
          var i,
              a,
              l = e.style;

          if (r === s) {
            for (i in e._stOrig = l.cssText, a = ve(e)) {
              +i || it.test(i) || !a[i] || "string" !== typeof l[i] || "0" === i || (l[i] = a[i]);
            }

            l.top = n, l.left = o;
          } else l.cssText = e._stOrig;

          t.core.getCache(e).uncache = 1, r.appendChild(e);
        }
      },
          at = function at(e, r) {
        var n,
            o,
            i = F(e, r),
            s = "_scroll" + r.p2,
            a = function r(a, l, c, u, f) {
          var p = r.tween,
              d = l.onComplete,
              h = {};
          return p && p.kill(), n = Math.round(c), l[s] = a, l.modifiers = h, h[s] = function (e) {
            return (e = Math.round(i())) !== n && e !== o ? (p.kill(), r.tween = 0) : e = c + u * p.ratio + f * p.ratio * p.ratio, o = n, n = Math.round(e);
          }, l.onComplete = function () {
            r.tween = 0, d && d.call(p);
          }, p = r.tween = t.to(e, l);
        };

        return e[s] = i, a;
      };

      he.op = ge;

      var lt = function () {
        function e(n, o) {
          r || e.register(t) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(n, o);
        }

        return e.prototype.init = function (r, a) {
          if (this.progress = 0, this.vars && this.kill(1), N) {
            var l,
                c,
                u,
                h,
                m,
                y,
                b,
                w,
                P,
                O,
                S,
                M,
                L,
                R,
                W,
                H,
                J,
                U,
                $,
                K,
                Q,
                ee,
                te,
                re,
                Te,
                Oe,
                Me,
                Ae,
                Ie,
                Be,
                Fe,
                We,
                De,
                Xe,
                He,
                Ve,
                Ye,
                je = (r = xe(V(r) || j(r) || r.nodeType ? {
              trigger: r
            } : r, _e)).horizontal ? he : ge,
                Je = r,
                Ue = Je.onUpdate,
                Ze = Je.toggleClass,
                Qe = Je.id,
                nt = Je.onToggle,
                it = Je.onRefresh,
                lt = Je.scrub,
                ct = Je.trigger,
                ut = Je.pin,
                ft = Je.pinSpacing,
                pt = Je.invalidateOnRefresh,
                dt = Je.anticipatePin,
                ht = Je.onScrubComplete,
                gt = Je.onSnapComplete,
                vt = Je.once,
                mt = Je.snap,
                xt = Je.pinReparent,
                yt = !lt && 0 !== lt,
                bt = f(r.scroller || n)[0],
                wt = t.core.getCache(bt),
                Tt = I(bt),
                kt = "pinType" in r ? "fixed" === r.pinType : Tt || "fixed" === B(bt, "pinType"),
                Ct = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                Pt = yt && r.toggleActions.split(" "),
                _t = "markers" in r ? r.markers : _e.markers,
                Ot = Tt ? 0 : parseFloat(ve(bt)["border" + je.p2 + fe]) || 0,
                St = this,
                Et = r.onRefreshInit && function () {
              return r.onRefreshInit(St);
            },
                Mt = q(bt, Tt, je),
                zt = D(bt, Tt);

            St.media = C, dt *= 45, ze.push(St), St.scroller = bt, St.scroll = F(bt, je), m = St.scroll(), St.vars = r, a = a || r.animation, "refreshPriority" in r && (T = 1), wt.tweenScroll = wt.tweenScroll || {
              top: at(bt, ge),
              left: at(bt, he)
            }, St.tweenTo = l = wt.tweenScroll[je.p], a && (a.vars.lazy = !1, a._initted || !1 !== a.vars.immediateRender && !1 !== r.immediateRender && a.render(0, !0, !0), St.animation = a.pause(), a.scrollTrigger = St, (We = j(lt) && lt) && (Fe = t.to(a, {
              ease: "power3",
              duration: We,
              onComplete: function onComplete() {
                return ht && ht(St);
              }
            })), Ie = 0, Qe || (Qe = a.vars.id)), mt && (G(mt) || (mt = {
              snapTo: mt
            }), t.set(Tt ? [s, i] : bt, {
              scrollBehavior: "auto"
            }), u = Y(mt.snapTo) ? mt.snapTo : "labels" === mt.snapTo ? we(a) : t.utils.snap(mt.snapTo), De = mt.duration || {
              min: .1,
              max: 2
            }, De = G(De) ? p(De.min, De.max) : p(De, De), Xe = t.delayedCall(mt.delay || We / 2 || .1, function () {
              if (Math.abs(St.getVelocity()) < 10 && !v) {
                var e = a && !yt ? a.totalProgress() : St.progress,
                    t = (e - Be) / (E() - d) * 1e3 || 0,
                    r = Z(t / 2) * t / .185,
                    n = e + r,
                    o = p(0, 1, u(n, St)),
                    i = St.scroll(),
                    s = Math.round(b + o * R),
                    c = l.tween;

                if (i <= w && i >= b && s !== i) {
                  if (c && !c._initted && c.data <= Math.abs(s - i)) return;
                  l(s, {
                    duration: De(Z(.185 * Math.max(Z(n - e), Z(o - e)) / t / .05 || 0)),
                    ease: mt.ease || "power3",
                    data: Math.abs(s - i),
                    onComplete: function onComplete() {
                      Ie = Be = a && !yt ? a.totalProgress() : St.progress, gt && gt(St);
                    }
                  }, i, r * R, s - i - r * R);
                }
              } else St.isActive && Xe.restart(!0);
            }).pause()), Qe && (Ne[Qe] = St), ct = St.trigger = f(ct || ut)[0], ut = !0 === ut ? ct : f(ut)[0], V(Ze) && (Ze = {
              targets: ct,
              className: Ze
            }), ut && (!1 === ft || ft === ue || (ft = !(!ft && "flex" === ve(ut.parentNode).display) && ce), St.pin = ut, !1 !== r.force3D && t.set(ut, {
              force3D: !0
            }), (c = t.core.getCache(ut)).spacer ? W = c.pinState : (c.spacer = U = o.createElement("div"), U.setAttribute("class", "pin-spacer" + (Qe ? " pin-spacer-" + Qe : "")), c.pinState = W = tt(ut)), St.spacer = U = c.spacer, Ae = ve(ut), re = Ae[ft + je.os2], K = t.getProperty(ut), Q = t.quickSetter(ut, je.a, de), Ke(ut, U, Ae), J = tt(ut)), _t && (L = G(_t) ? xe(_t, Pe) : Pe, S = Ee("scroller-start", Qe, bt, je, L, 0), M = Ee("scroller-end", Qe, bt, je, L, 0, S), $ = S["offset" + je.op.d2], P = Ee("start", Qe, bt, je, L, $), O = Ee("end", Qe, bt, je, L, $), kt || (me(bt), t.set([S, M], {
              force3D: !0
            }), Oe = t.quickSetter(S, je.a, de), Me = t.quickSetter(M, je.a, de))), St.revert = function (e) {
              var t = !1 !== e || !St.enabled,
                  r = g;
              t !== h && (t && (Ve = Math.max(St.scroll(), St.scroll.rec || 0), He = St.progress, Ye = a && a.progress()), P && [P, O, S, M].forEach(function (e) {
                return e.style.display = t ? "none" : "block";
              }), t && (g = 1), St.update(t), g = r, ut && (t ? $e(ut, U, W) : (!xt || !St.isActive) && Ke(ut, U, ve(ut), Te)), h = t);
            }, St.refresh = function (n) {
              if (!g && St.enabled) if (ut && n && z) ke(e, "scrollEnd", qe);else {
                g = 1, Fe && Fe.kill(), pt && a && a.progress(0).invalidate(), h || St.revert();

                for (var o, i, l, c, u, f, p, d, v = Mt(), x = zt(), T = X(bt, je), k = 0, C = 0, _ = r.end, E = r.endTrigger || ct, N = r.start || (0 === r.start ? 0 : ut || !ct ? "0 0" : "0 100%"), A = ct && Math.max(0, ze.indexOf(St)) || 0, L = A; L--;) {
                  (p = ze[L].pin) && (p === ct || p === ut) && ze[L].revert();
                }

                for (b = ot(N, ct, v, je, St.scroll(), P, S, St, x, Ot, kt, T) || (ut ? -.001 : 0), Y(_) && (_ = _(St)), V(_) && !_.indexOf("+=") && (~_.indexOf(" ") ? _ = (V(N) ? N.split(" ")[0] : "") + _ : (k = Se(_.substr(2), v), _ = V(N) ? N : b + k, E = ct)), w = Math.max(b, ot(_ || (E ? "100% 0" : T), E, v, je, St.scroll() + k, O, M, St, x, Ot, kt, T)) || -.001, R = w - b || (b -= .01) && .001, k = 0, L = A; L--;) {
                  (p = (f = ze[L]).pin) && f.start - f._pinPush < b && (o = f.end - f.start, p === ct && (k += o), p === ut && (C += o));
                }

                if (b += k, w += k, St._pinPush = C, P && k && ((o = {})[je.a] = "+=" + k, t.set([P, O], o)), ut) o = ve(ut), c = je === ge, l = St.scroll(), ee = parseFloat(K(je.a)) + C, !T && w > 1 && ((Tt ? s : bt).style["overflow-" + je.a] = "scroll"), Ke(ut, U, o), J = tt(ut), i = ye(ut, !0), d = kt && F(bt, c ? he : ge)(), ft && ((Te = [ft + je.os2, R + C + de]).t = U, (L = ft === ce ? be(ut, je) + R + C : 0) && Te.push(je.d, L + de), et(Te), kt && St.scroll(Ve)), kt && ((u = {
                  top: i.top + (c ? l - b : d) + de,
                  left: i.left + (c ? d : l - b) + de,
                  boxSizing: "border-box",
                  position: "fixed"
                })[ne] = u["max" + fe] = Math.ceil(i.width) + de, u[oe] = u["max" + pe] = Math.ceil(i.height) + de, u[ue] = u[ue + ae] = u[ue + ie] = u[ue + le] = u[ue + se] = "0", u[ce] = o[ce], u[ce + ae] = o[ce + ae], u[ce + ie] = o[ce + ie], u[ce + le] = o[ce + le], u[ce + se] = o[ce + se], H = rt(W, u, xt)), a ? (a.progress(1, !0), te = K(je.a) - ee + R + C, R !== te && H.splice(H.length - 2, 2), a.progress(0, !0)) : te = R;else if (ct && St.scroll()) for (i = ct.parentNode; i && i !== s;) {
                  i._pinOffset && (b -= i._pinOffset, w -= i._pinOffset), i = i.parentNode;
                }

                for (L = 0; L < A; L++) {
                  (f = ze[L].pin) && (f === ct || f === ut) && ze[L].revert(!1);
                }

                St.start = b, St.end = w, (m = y = St.scroll()) < Ve && St.scroll(Ve), St.revert(!1), g = 0, Ye && yt && a.progress(Ye, !0), He !== St.progress && (Fe && a.totalProgress(He, !0), St.progress = He, St.update()), ut && ft && (U._pinOffset = Math.round(St.progress * te)), it && it(St);
              }
            }, St.getVelocity = function () {
              return (St.scroll() - y) / (E() - d) * 1e3 || 0;
            }, St.update = function (e, t) {
              var r,
                  n,
                  o,
                  i,
                  c,
                  u = St.scroll(),
                  p = e ? 0 : (u - b) / R,
                  h = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                  v = St.progress;

              if (t && (y = m, m = u, mt && (Be = Ie, Ie = a && !yt ? a.totalProgress() : h)), dt && !h && ut && !g && !_ && z && b < u + (u - y) / (E() - d) * dt && (h = 1e-4), h !== v && St.enabled) {
                if (i = (c = (r = St.isActive = !!h && h < 1) !== (!!v && v < 1)) || !!h !== !!v, St.direction = h > v ? 1 : -1, St.progress = h, yt || (!Fe || g || _ ? a && a.totalProgress(h, !!g) : (Fe.vars.totalProgress = h, Fe.invalidate().restart())), ut) if (e && ft && (U.style[ft + je.os2] = re), kt) {
                  if (i) {
                    if (o = !e && h > v && w + 1 > u && u + 1 >= X(bt, je), xt) if (e || !r && !o) st(ut, U);else {
                      var x = ye(ut, !0),
                          T = u - b;
                      st(ut, s, x.top + (je === ge ? T : 0) + de, x.left + (je === ge ? 0 : T) + de);
                    }
                    et(r || o ? H : J), te !== R && h < 1 && r || Q(ee + (1 !== h || o ? 0 : te));
                  }
                } else Q(ee + te * h);
                mt && !l.tween && !g && !_ && Xe.restart(!0), Ze && (c || vt && h && (h < 1 || !k)) && f(Ze.targets).forEach(function (e) {
                  return e.classList[r || vt ? "add" : "remove"](Ze.className);
                }), Ue && !yt && !e && Ue(St), i && !g ? (n = h && !v ? 0 : 1 === h ? 1 : 1 === v ? 2 : 3, yt && (o = !c && "none" !== Pt[n + 1] && Pt[n + 1] || Pt[n], a && ("complete" === o || "reset" === o || o in a) && ("complete" === o ? a.pause().totalProgress(1) : "reset" === o ? a.restart(!0).pause() : a[o]()), Ue && Ue(St)), !c && k || (nt && c && nt(St), Ct[n] && Ct[n](St), vt && (1 === h ? St.kill(!1, 1) : Ct[n] = 0), c || Ct[n = 1 === h ? 1 : 3] && Ct[n](St))) : yt && Ue && !g && Ue(St);
              }

              Me && (Oe(u + (S._isFlipped ? 1 : 0)), Me(u));
            }, St.enable = function () {
              St.enabled || (St.enabled = !0, ke(bt, "resize", Re), ke(bt, "scroll", Le), Et && ke(e, "refreshInit", Et), a && a.add ? t.delayedCall(.01, function () {
                return b || w || St.refresh();
              }) && (R = .01) && (b = w = 0) : St.refresh());
            }, St.disable = function (t, r) {
              if (St.enabled && (!1 !== t && St.revert(), St.enabled = St.isActive = !1, r || Fe && Fe.pause(), Ve = 0, c && (c.uncache = 1), Et && Ce(e, "refreshInit", Et), Xe && (Xe.pause(), l.tween && l.tween.kill() && (l.tween = 0)), !Tt)) {
                for (var n = ze.length; n--;) {
                  if (ze[n].scroller === bt && ze[n] !== St) return;
                }

                Ce(bt, "resize", Re), Ce(bt, "scroll", Le);
              }
            }, St.kill = function (e, t) {
              St.disable(e, t), Qe && delete Ne[Qe];
              var r = ze.indexOf(St);
              ze.splice(r, 1), r === x && Ge > 0 && x--, a && (a.scrollTrigger = null, e && a.render(-1), t || a.kill()), P && [P, O, S, M].forEach(function (e) {
                return e.parentNode.removeChild(e);
              }), c && (c.uncache = 1);
            }, St.enable();
          } else this.update = this.refresh = this.kill = A;
        }, e.register = function (u) {
          if (!r && (t = u || R(), L() && window.document && (n = window, o = document, i = o.documentElement, s = o.body), t && (f = t.utils.toArray, p = t.utils.clamp, t.core.globals("ScrollTrigger", e), s))) {
            c = n.requestAnimationFrame || function (e) {
              return setTimeout(e, 16);
            }, ke(n, "mousewheel", Le), a = [n, o, i, s], ke(o, "scroll", Le);
            var d,
                g = s.style,
                x = g.borderTop;
            g.borderTop = "1px solid #000", d = ye(s), ge.m = Math.round(d.top + ge.sc()) || 0, he.m = Math.round(d.left + he.sc()) || 0, x ? g.borderTop = x : g.removeProperty("border-top"), h = setInterval(Ae, 200), t.delayedCall(.5, function () {
              return _ = 0;
            }), ke(o, "touchcancel", A), ke(s, "touchstart", A), Te(ke, o, "pointerdown,touchstart,mousedown", function () {
              return v = 1;
            }), Te(ke, o, "pointerup,touchend,mouseup", function () {
              return v = 0;
            }), m = t.utils.checkPrefix("transform"), Ze.push(m), r = E(), l = t.delayedCall(.2, Ye).pause(), w = [o, "visibilitychange", function () {
              var e = n.innerWidth,
                  t = n.innerHeight;
              o.hidden ? (y = e, b = t) : y === e && b === t || Re();
            }, o, "DOMContentLoaded", Ye, n, "load", function () {
              return z || Ye();
            }, n, "resize", Re], H(ke);
          }

          return r;
        }, e.defaults = function (e) {
          for (var t in e) {
            _e[t] = e[t];
          }
        }, e.kill = function () {
          N = 0, ze.slice(0).forEach(function (e) {
            return e.kill(1);
          });
        }, e.config = function (e) {
          "limitCallbacks" in e && (k = !!e.limitCallbacks);
          var t = e.syncInterval;
          t && clearInterval(h) || (h = t) && setInterval(Ae, t), "autoRefreshEvents" in e && (H(Ce) || H(ke, e.autoRefreshEvents || "none"));
        }, e.scrollerProxy = function (e, t) {
          var r = f(e)[0];
          I(r) ? O.unshift(n, t, s, t, i, t) : O.unshift(r, t);
        }, e.matchMedia = function (e) {
          var t, r, o, i, s;

          for (r in e) {
            o = Fe.indexOf(r), i = e[r], C = r, "all" === r ? i() : (t = n.matchMedia(r)) && (t.matches && (s = i()), ~o ? (Fe[o + 1] = U(Fe[o + 1], i), Fe[o + 2] = U(Fe[o + 2], s)) : (o = Fe.length, Fe.push(r, i, s), t.addListener ? t.addListener(We) : t.addEventListener("change", We)), Fe[o + 3] = t.matches), C = 0;
          }

          return Fe;
        }, e.clearMatchMedia = function (e) {
          e || (Fe.length = 0), (e = Fe.indexOf(e)) >= 0 && Fe.splice(e, 4);
        }, e;
      }();

      lt.version = "3.5.1", lt.saveStyles = function (e) {
        return e ? f(e).forEach(function (e) {
          var r = Xe.indexOf(e);
          r >= 0 && Xe.splice(r, 4), Xe.push(e, e.style.cssText, t.core.getCache(e), C);
        }) : Xe;
      }, lt.revert = function (e, t) {
        return Ve(!e, t);
      }, lt.create = function (e, t) {
        return new lt(e, t);
      }, lt.refresh = function (e) {
        return e ? Re() : Ye(!0);
      }, lt.update = Je, lt.maxScroll = function (e, t) {
        return X(e, t ? he : ge);
      }, lt.getScrollFunc = function (e, t) {
        return F(f(e)[0], t ? he : ge);
      }, lt.getById = function (e) {
        return Ne[e];
      }, lt.getAll = function () {
        return ze.slice(0);
      }, lt.isScrolling = function () {
        return !!z;
      }, lt.addEventListener = function (e, t) {
        var r = Ie[e] || (Ie[e] = []);
        ~r.indexOf(t) || r.push(t);
      }, lt.removeEventListener = function (e, t) {
        var r = Ie[e],
            n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1);
      }, lt.batch = function (e, r) {
        var n,
            o = [],
            i = {},
            s = r.interval || .016,
            a = r.batchMax || 1e9,
            l = function l(e, r) {
          var n = [],
              o = [],
              i = t.delayedCall(s, function () {
            r(n, o), n = [], o = [];
          }).pause();
          return function (e) {
            n.length || i.restart(!0), n.push(e.trigger), o.push(e), a <= n.length && i.progress(1);
          };
        };

        for (n in r) {
          i[n] = "on" === n.substr(0, 2) && Y(r[n]) && "onRefreshInit" !== n ? l(n, r[n]) : r[n];
        }

        return Y(a) && (a = a(), ke(lt, "refresh", function () {
          return a = r.batchMax();
        })), f(e).forEach(function (e) {
          var t = {};

          for (n in i) {
            t[n] = i[n];
          }

          t.trigger = e, o.push(lt.create(t));
        }), o;
      }, lt.sort = function (e) {
        return ze.sort(e || function (e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
        });
      }, R() && t.registerPlugin(lt), e.ScrollTrigger = lt, e["default"] = lt, Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }(t);
  },
  zPlV: function zPlV(e, t, r) {}
}, [[0, 0, 1, 2, 3]]]);