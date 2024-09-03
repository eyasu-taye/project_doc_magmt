import {u as Y, a as Q, t as v, i as Z, f as J} from "./index-18421124.js";
import {_ as ee} from "./InvitePopup-83b9c332.js";
import {l as te, r as c, w as U, c as x, d as ne, f as ae, X as d, Y as w, Z as n, y as V, a3 as N, a2 as A, F as B, a0 as q, A as oe, a1 as W, $ as y, W as O, k as r, u as a, _ as u, B as L, b as se} from "./vue-d77f01f9.js";
import {u as le} from "./member-0cc6c565.js";
import {_ as re} from "./NoticeIcon-502ef7c4.js";
import {p as ie} from "./messages-17f9ba30.js";
import "./vant-335454c8.js";
var ue = Object.defineProperty
  , D = Object.getOwnPropertySymbols
  , ce = Object.prototype.hasOwnProperty
  , de = Object.prototype.propertyIsEnumerable
  , T = (e,t,o)=>t in e ? ue(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : e[t] = o
  , G = (e,t)=>{
    for (var o in t || (t = {}))
        ce.call(t, o) && T(e, o, t[o]);
    if (D)
        for (var o of D(t))
            de.call(t, o) && T(e, o, t[o]);
    return e
}
  , ve = (e,t)=>{
    const o = e.__vccOpts || e;
    for (const [m,h] of t)
        o[m] = h;
    return o
}
;
const me = te({
    props: {
        vertical: {
            type: Boolean,
            default: !1
        },
        direction: {
            type: String,
            default: "normal"
        },
        duration: {
            type: Number,
            default: 20
        },
        delay: {
            type: Number,
            default: 0
        },
        loop: {
            type: Number,
            default: 0
        },
        clone: {
            type: Boolean,
            default: !1
        },
        gradient: {
            type: Boolean,
            default: !1
        },
        gradientColor: {
            type: Array,
            default: [255, 255, 255]
        },
        gradientWidth: {
            type: String
        },
        gradientLength: {
            type: String
        },
        pauseOnHover: {
            type: Boolean,
            default: !1
        },
        pauseOnClick: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["onComplete", "onLoopComplete", "onPause", "onResume"],
    setup(e, {emit: t}) {
        const o = c(0)
          , m = c("100%")
          , h = c("100%")
          , S = c(0)
          , i = c(!1)
          , M = c(0)
          , $ = c(0)
          , R = c(0)
          , f = c(0)
          , s = c(0)
          , _ = c(null)
          , C = c("200px")
          , k = c(!1)
          , b = c(null)
          , p = c(null)
          , I = async()=>{
            await P(),
            S.value++
        }
          , P = async()=>{
            e.vertical && (i.value = !0),
            setInterval(()=>{
                if (m.value = "0%",
                h.value = "0%",
                b.value !== null && p.value !== null)
                    if (b.value && p.value)
                        if (e.vertical && "clientHeight"in b.value && "clientHeight"in p.value) {
                            f.value = b.value.clientHeight,
                            R.value = p.value.clientHeight;
                            const H = Math.ceil(R.value / f.value);
                            return o.value = isFinite(H) ? H : 0,
                            i.value = !1,
                            o.value
                        } else if (!e.vertical && "clientWidth"in b.value && "clientWidth"in p.value) {
                            $.value = b.value.clientWidth,
                            M.value = p.value.clientWidth;
                            const H = Math.ceil(M.value / $.value);
                            return o.value = isFinite(H) ? H : 0,
                            o.value
                        } else
                            return m.value = "100%",
                            h.value = "100%",
                            0;
                    else
                        return m.value = "100%",
                        h.value = "100%",
                        0;
                else
                    return m.value = "100%",
                    h.value = "100%",
                    0
            }
            , 100)
        }
        ;
        U($, async()=>{
            e.clone && I()
        }
        ),
        U(M, async()=>{
            e.clone && I()
        }
        );
        const z = ()=>{
            e.pauseOnHover && t("onPause")
        }
          , l = ()=>{
            e.pauseOnHover && t("onResume")
        }
          , g = ()=>{
            e.pauseOnClick && t("onPause")
        }
          , j = ()=>{
            e.pauseOnClick && t("onResume")
        }
          , K = x(()=>{
            const H = {
                "--duration": "".concat(e.duration, "s"),
                "--delay": "".concat(e.delay, "s"),
                "--direction": "".concat(e.direction),
                "--pauseOnHover": "".concat(e.pauseOnHover ? "paused" : "running"),
                "--pauseOnClick": "".concat(e.pauseOnClick ? "paused" : "running"),
                "--pauseAnimation": "".concat(i.value ? "paused" : "running"),
                "--loops": "".concat(e.loop === 0 ? "infinite" : e.loop),
                "--gradient-color": "rgba(".concat(e.gradientColor[0], ", ").concat(e.gradientColor[1], ", ").concat(e.gradientColor[2], ", 1), rgba(").concat(e.gradientColor[0], ", ").concat(e.gradientColor[1], ", ").concat(e.gradientColor[2], ", 0)"),
                "--gradient-length": "".concat(C.value),
                "--min-width": "".concat(m.value),
                "--min-height": "".concat(h.value)
            }
              , E = {
                "--orientation": "scrollX",
                orientation: "horizontal"
            };
            return e.vertical && (E["--orientation"] = "scrollY"),
            G(G({}, H), E)
        }
        )
          , X = x(()=>!!e.gradient)
          , F = async()=>{
            e.vertical ? (h.value = "100%",
            m.value = "auto") : (h.value = "auto",
            m.value = "100%"),
            e.gradient && (e.gradientWidth ? (console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."),
            C.value = e.gradientWidth) : e.gradientLength && (C.value = e.gradientLength)),
            e.clone && (await P(),
            I()),
            k.value = !0
        }
        ;
        return ne(async()=>{
            F(),
            _.value = setInterval(()=>{
                s.value++,
                e.loop !== 0 && s.value === e.loop && (t("onComplete"),
                clearInterval(_.value)),
                t("onLoopComplete")
            }
            , e.duration * 1e3)
        }
        ),
        ae(()=>{
            clearInterval(_.value)
        }
        ),
        {
            ready: k,
            contentWidth: $,
            containerWidth: M,
            contentHeight: f,
            containerHeight: R,
            loopCounter: s,
            loopInterval: _,
            minWidth: m,
            minHeight: h,
            marqueeContent: b,
            marqueeOverlayContainer: p,
            componentKey: S,
            showGradient: X,
            cloneAmount: o,
            ForcesUpdate: I,
            checkForClone: P,
            setupMarquee: F,
            getCurrentStyle: K,
            hoverStarted: z,
            hoverEnded: l,
            mouseDown: g,
            mouseUp: j
        }
    }
})
  , fe = {
    class: "transparent-overlay",
    ref: "marqueeOverlayContainer",
    "aria-hidden": !0
}
  , pe = {
    class: "marquee",
    ref: "marqueeContent"
}
  , he = {
    class: "marquee",
    "aria-hidden": !0
};
function ge(e, t, o, m, h, S) {
    return e.ready ? (d(),
    w("div", {
        class: V(["vue3-marquee", {
            vertical: e.vertical,
            horizontal: !e.vertical
        }]),
        style: oe(e.getCurrentStyle),
        key: e.componentKey,
        onMouseenter: t[0] || (t[0] = (...i)=>e.hoverStarted && e.hoverStarted(...i)),
        onMouseleave: t[1] || (t[1] = (...i)=>e.hoverEnded && e.hoverEnded(...i)),
        onMousedown: t[2] || (t[2] = (...i)=>e.mouseDown && e.mouseDown(...i)),
        onMouseup: t[3] || (t[3] = (...i)=>e.mouseUp && e.mouseUp(...i))
    }, [n("div", fe, null, 512), e.showGradient ? (d(),
    w("div", {
        key: 0,
        "aria-hidden": !0,
        class: V(["overlay", {
            vertical: e.vertical,
            horizontal: !e.vertical
        }])
    }, null, 2)) : N("", !0), n("div", pe, [A(e.$slots, "default")], 512), n("div", he, [A(e.$slots, "default")]), (d(!0),
    w(B, null, q(e.cloneAmount, i=>(d(),
    w("div", {
        "aria-hidden": !0,
        class: "marquee cloned",
        key: i
    }, [A(e.$slots, "default")]))), 128))], 38)) : N("", !0)
}
var ye = ve(me, [["render", ge]]);
const _e = {
    class: "p-4 bg-white"
}
  , we = {
    class: "w-[calc(100vw-2rem)] md:w-[46rem] h-[calc((100vw-2rem)*240/686)] md:h-[calc((48rem-2rem)*240/686)]"
}
  , be = {
    class: "mt-5"
}
  , $e = {
    class: "text-base font-medium"
}
  , Ce = {
    class: "opacity-30"
}
  , ke = {
    class: "mt-4 pb-3 flex gap-x-3"
}
  , Oe = {
    class: "mt-3 line-clamp-1"
}
  , He = {
    class: "opacity-60 text-center"
}
  , Le = {
    class: "mt-2"
}
  , Se = {
    class: "mt-4 flex justify-center items-center"
}
  , Me = {
    key: 1,
    class: "mt-3 w-[calc(100vw-2rem)] md:w-[46rem] h-[calc((100vw-2rem)*240/686)] md:h-[calc((48rem-2rem)*240/686)] relative"
}
  , Re = {
    class: "mt-5 py-4 bg-bg"
}
  , Ie = {
    class: "text-base px-4 font-medium"
}
  , Pe = {
    class: "opacity-30 px-4"
}
  , We = {
    class: "mt-4 flex flex-wrap gap-y-3.5"
}
  , Be = {
    class: "p-4 bg-white"
}
  , qe = {
    class: "text-base font-medium"
}
  , Ne = {
    class: "opacity-30"
}
  , ze = {
    class: "py-5 flex items-center justify-between border-b border-gray-300 opacity-90"
}
  , Ae = {
    class: "w-full p-4 text-lg font-bold text-center bg-theme text-white"
}
  , xe = ["innerHTML"]
  , Ke = {
    __name: "HomePage",
    setup(e) {
        const {member: t} = le()
          , {goodsListRef: o, bannersRef: m, webListRef: h} = Y()
          , S = Q("cvb", !1)
          , i = c({})
          , M = x(()=>{
            const f = [];
            for (let s = 0; s < 10; s++) {
                const _ = "****" + parseInt(Math.random() * 1e4)
                  , C = parseInt(Math.random() * 100) % 2 + 2
                  , k = "".concat(v("可喜可贺"), "，").concat(v("用户")).concat(_).concat(v("等级升级到了"), "VIP").concat(C, "。");
                f.push(k)
            }
            return f
        }
        )
          , {noticeShowRef: $, noticeContentRef: R} = ie();
        return (f,s)=>{
            const _ = O("van-image")
              , C = O("van-swipe-item")
              , k = O("van-swipe")
              , b = O("van-button")
              , p = O("van-icon")
              , I = O("van-notice-bar")
              , P = O("van-popup")
              , z = O("ai-page");
            return d(),
            W(z, {
                title: f.$appName,
                class: "text-sm",
                "nav-class": ""
            }, {
                right: y(()=>[r(re)]),
                default: y(()=>[n("div", _e, [a(m).length ? (d(),
                W(k, {
                    key: 0,
                    autoplay: 5e3,
                    class: "rounded-lg border border-bg"
                }, {
                    default: y(()=>[(d(!0),
                    w(B, null, q(a(m), (l,g)=>(d(),
                    W(C, {
                        key: g
                    }, {
                        default: y(()=>[n("div", we, [r(_, {
                            width: "100%",
                            height: "100%",
                            fit: "cover",
                            src: l.cover
                        }, null, 8, ["src"])])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                })) : N("", !0), n("div", be, [n("div", $e, u(a(v)("每日任务")), 1), n("div", Ce, u(a(v)("紧急任务佣金更高")), 1)]), r(a(ye), {
                    clone: "",
                    duration: 80,
                    delay: .3
                }, {
                    default: y(()=>[n("div", ke, [(d(!0),
                    w(B, null, q(a(o), (l,g)=>(d(),
                    w("div", {
                        key: g,
                        class: "w-36 shrink-0"
                    }, [r(_, {
                        "lazy-load": !i.value[g],
                        width: "100%",
                        height: "144px",
                        fit: "cover",
                        src: l.img,
                        class: "rounded-md overflow-hidden border border-gray-100",
                        onLoad: j=>i.value[g] = !0
                    }, null, 8, ["lazy-load", "src", "onLoad"]), n("div", Oe, u(l.title), 1), n("div", He, u(a(J)(l.price)), 1)]))), 128))])]),
                    _: 1
                }), n("div", Le, [a(Z) ? (d(),
                W(b, {
                    key: 0,
                    round: "",
                    block: "",
                    icon: "/imgs/point.svg",
                    type: "primary",
                    onClick: s[0] || (s[0] = l=>f.$router.push({
                        name: "task"
                    }))
                }, {
                    default: y(()=>[L(u(a(v)("开始抢单")), 1)]),
                    _: 1
                })) : N("", !0), n("div", Se, [r(p, {
                    size: "16",
                    name: "volume",
                    class: "shrink-0"
                }), r(I, {
                    background: "inherit",
                    color: "var(--theme-gray-light)",
                    scrollable: !1,
                    class: "text-xs p-0 h-4 ml-3 w-full"
                }, {
                    default: y(()=>[r(k, {
                        vertical: "",
                        class: "h-4 leading-4",
                        autoplay: 3e3,
                        touchable: !1,
                        "show-indicators": !1
                    }, {
                        default: y(()=>[(d(!0),
                        w(B, null, q(M.value, (l,g)=>(d(),
                        W(C, {
                            key: g
                        }, {
                            default: y(()=>[L(u(l), 1)]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    })]),
                    _: 1
                })])]), a(S) ? N("", !0) : (d(),
                w("div", Me, [r(_, {
                    class: "absolute",
                    width: "100%",
                    height: "100%",
                    src: "/imgs/tc_1@2x.png"
                }), r(p, {
                    class: "absolute right-2 top-2 p-2 opacity-40 text-white cursor-pointer",
                    size: "14",
                    name: "cross",
                    onClick: s[1] || (s[1] = l=>S.value = !0)
                }), r(b, {
                    class: "absolute right-4 bottom-4 px-3 border-none",
                    round: "",
                    size: "small",
                    onClick: s[2] || (s[2] = l=>f.$router.push({
                        name: "vip"
                    }))
                }, {
                    default: y(()=>[L(u(a(v)("即刻升级")), 1)]),
                    _: 1
                })]))]), n("div", Re, [n("div", Ie, u(a(v)("合作品牌")), 1), n("div", Pe, u(a(v)("品牌友好合作伙伴")), 1), n("div", We, [(d(!0),
                w(B, null, q(a(h), (l,g)=>(d(),
                w("div", {
                    key: g,
                    class: V(["w-[33.33vw] md:w-[16rem] h-[calc(33.33vw*80/252)] md:h-[calc(16rem*80/252)] shrink-0", parseInt(g / 3) % 2 == 1 ? "pr-3" : "pl-3"])
                }, [r(_, {
                    width: "100%",
                    fit: "cover",
                    height: "100%",
                    src: l.img
                }, null, 8, ["src"])], 2))), 128))])]), n("div", Be, [n("div", qe, u(a(v)("服务中心")), 1), n("div", Ne, u(a(v)("还有别的问题，请移步客服中心")), 1), r(ee, {
                    "invite-code": a(t).promo_code
                }, {
                    default: y(()=>[n("div", ze, [L(u(a(v)("邀请好友")) + " ", 1), r(p, {
                        name: "arrow"
                    })])]),
                    _: 1
                }, 8, ["invite-code"]), n("div", {
                    class: "py-5 flex items-center justify-between border-b border-gray-300 cursor-pointer opacity-90",
                    onClick: s[3] || (s[3] = l=>f.$router.push({
                        name: "faq"
                    }))
                }, [L(u(a(v)("FAQ")) + " ", 1), r(p, {
                    name: "arrow"
                })]), n("div", {
                    class: "py-5 flex items-center justify-between border-b border-gray-300 cursor-pointer opacity-90",
                    onClick: s[4] || (s[4] = l=>f.$router.push({
                        name: "license"
                    }))
                }, [L(u(a(v)("条款&协议")) + " ", 1), r(p, {
                    name: "arrow"
                })]), n("div", {
                    class: "py-5 flex items-center justify-between cursor-pointer opacity-90",
                    onClick: s[5] || (s[5] = l=>f.$router.push({
                        name: "about"
                    }))
                }, [L(u(a(v)("关于") + f.$appName) + " ", 1), r(p, {
                    name: "arrow"
                })])]), r(P, {
                    show: a($),
                    "onUpdate:show": s[6] || (s[6] = l=>se($) ? $.value = l : null),
                    style: {
                        width: "90%",
                        maxWidth: "768px",
                        height: "70%",
                        borderRadius: "8px"
                    }
                }, {
                    default: y(()=>[n("div", Ae, u(a(R).title), 1), n("div", {
                        class: "p-4 text-sm",
                        innerHTML: a(R).content
                    }, null, 8, xe)]),
                    _: 1
                }, 8, ["show"])]),
                _: 1
            }, 8, ["title"])
        }
    }
};
export {Ke as default};
