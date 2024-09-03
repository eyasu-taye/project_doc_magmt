import {K as Qr, u as ge, c as Ce, r as W, L as Sn, w as wt, g as Jr, d as pa, n as _a, M as Zr, N as ei, O as ti, P as va, Q as Ze, R as ai, S as ni, U as Bt, V as ba, W as he, X as _e, Y as Ne, k as be, Z as X, _ as Le, $ as Xe, B as St, y as In, F as ha, a0 as wn, A as It, a1 as Zt, a2 as qe, a3 as ea, D as ri} from "./vue-d77f01f9.js";
import {s as ii, c as xa, a as Rn, b as oi, I as Mn, F as si, L as Dn, d as li, e as ci, f as ui} from "./vant-335454c8.js";
function yc() {
    import.meta.url,
    import("_").catch(()=>1);
    async function *e() {}
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        n(i);
    new MutationObserver(i=>{
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity),
        i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = a(i);
        fetch(i.href, r)
    }
}
)();
function Ea(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var a = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        a.prototype = t.prototype
    } else
        a = {};
    return Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(a, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }),
    a
}
var me = {};
/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fn = typeof window < "u";
let xn, Bn;
{
    const e = Fn && window.performance;
    e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (xn = t=>{
        e.mark(t)
    }
    ,
    Bn = (t,a,n)=>{
        e.measure(t, a, n),
        e.clearMarks(a),
        e.clearMarks(n)
    }
    )
}
const di = /\{([0-9a-zA-Z]+)\}/g;
function mi(e, ...t) {
    return t.length === 1 && kt(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(di, (a,n)=>t.hasOwnProperty(n) ? t[n] : "")
}
const fi = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , gi = (e,t,a)=>Un({
    l: e,
    k: t,
    s: a
})
  , Un = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , pi = e=>typeof e == "number" && isFinite(e)
  , _i = e=>Ca(e) === "[object Date]"
  , vi = e=>Ca(e) === "[object RegExp]"
  , bi = e=>Oa(e) && Object.keys(e).length === 0
  , hi = Object.assign;
let Ba;
const Ei = ()=>Ba || (Ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ki(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Ti = Object.prototype.hasOwnProperty;
function Ci(e, t) {
    return Ti.call(e, t)
}
const ka = Array.isArray
  , ta = e=>typeof e == "function"
  , Oi = e=>typeof e == "string"
  , Ai = e=>typeof e == "boolean"
  , Pi = e=>typeof e == "symbol"
  , kt = e=>e !== null && typeof e == "object"
  , Li = e=>kt(e) && ta(e.then) && ta(e.catch)
  , Ta = Object.prototype.toString
  , Ca = e=>Ta.call(e)
  , Oa = e=>{
    if (!kt(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Ni = e=>e == null ? "" : ka(e) || Oa(e) && e.toString === Ta ? JSON.stringify(e, null, 2) : String(e);
function yi(e, t="") {
    return e.reduce((a,n,i)=>i === 0 ? a + n : a + t + n, "")
}
const Ua = 2;
function Si(e, t=0, a=e.length) {
    const n = e.split(/\r?\n/);
    let i = 0;
    const r = [];
    for (let o = 0; o < n.length; o++)
        if (i += n[o].length + 1,
        i >= t) {
            for (let s = o - Ua; s <= o + Ua || a > i; s++) {
                if (s < 0 || s >= n.length)
                    continue;
                const l = s + 1;
                r.push("".concat(l).concat(" ".repeat(3 - String(l).length), "|  ").concat(n[s]));
                const m = n[s].length;
                if (s === o) {
                    const f = t - (i - m) + 1
                      , _ = Math.max(1, a > i ? m - f : a - t);
                    r.push("   |  " + " ".repeat(f) + "^".repeat(_))
                } else if (s > o) {
                    if (a > i) {
                        const f = Math.max(Math.min(a - i, m), 1);
                        r.push("   |  " + "^".repeat(f))
                    }
                    i += m + 1
                }
            }
            break
        }
    return r.join("\n")
}
function Ii(e) {
    let t = e;
    return ()=>++t
}
function jn(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const ja = {};
function wi(e) {
    ja[e] || (ja[e] = !0,
    jn(e))
}
function Ri() {
    const e = new Map;
    return {
        events: e,
        on(a, n) {
            const i = e.get(a);
            i && i.push(n) || e.set(a, [n])
        },
        off(a, n) {
            const i = e.get(a);
            i && i.splice(i.indexOf(n) >>> 0, 1)
        },
        emit(a, n) {
            (e.get(a) || []).slice().map(i=>i(n)),
            (e.get("*") || []).slice().map(i=>i(a, n))
        }
    }
}
const Lt = e=>!kt(e) || ka(e);
function Mi(e, t) {
    if (Lt(e) || Lt(t))
        throw new Error("Invalid value");
    const a = [{
        src: e,
        des: t
    }];
    for (; a.length; ) {
        const {src: n, des: i} = a.pop();
        Object.keys(n).forEach(r=>{
            Lt(n[r]) || Lt(i[r]) ? i[r] = n[r] : a.push({
                src: n[r],
                des: i[r]
            })
        }
        )
    }
}
const Di = Object.freeze(Object.defineProperty({
    __proto__: null,
    assign: hi,
    createEmitter: Ri,
    deepCopy: Mi,
    escapeHtml: ki,
    format: mi,
    friendlyJSONstringify: Un,
    generateCodeFrame: Si,
    generateFormatCacheKey: gi,
    getGlobalThis: Ei,
    hasOwn: Ci,
    inBrowser: Fn,
    incrementer: Ii,
    isArray: ka,
    isBoolean: Ai,
    isDate: _i,
    isEmptyObject: bi,
    isFunction: ta,
    isNumber: pi,
    isObject: kt,
    isPlainObject: Oa,
    isPromise: Li,
    isRegExp: vi,
    isString: Oi,
    isSymbol: Pi,
    join: yi,
    makeSymbol: fi,
    get mark() {
        return xn
    },
    get measure() {
        return Bn
    },
    objectToString: Ta,
    toDisplayString: Ni,
    toTypeString: Ca,
    warn: jn,
    warnOnce: wi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Fi = Ea(Di);
/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ue = typeof window < "u";
let de, je;
{
    const e = Ue && window.performance;
    e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (de = t=>{
        e.mark(t)
    }
    ,
    je = (t,a,n)=>{
        e.measure(t, a, n),
        e.clearMarks(a),
        e.clearMarks(n)
    }
    )
}
const xi = /\{([0-9a-zA-Z]+)\}/g;
function Ut(e, ...t) {
    return t.length === 1 && ee(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(xi, (a,n)=>t.hasOwnProperty(n) ? t[n] : "")
}
const Bi = (e,t,a)=>Ui({
    l: e,
    k: t,
    s: a
})
  , Ui = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , ue = e=>typeof e == "number" && isFinite(e)
  , ji = e=>Vn(e) === "[object Date]"
  , $a = e=>Vn(e) === "[object RegExp]"
  , Aa = e=>q(e) && Object.keys(e).length === 0
  , we = Object.assign;
function Va(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Oe = Array.isArray
  , J = e=>typeof e == "function"
  , F = e=>typeof e == "string"
  , oe = e=>typeof e == "boolean"
  , ee = e=>e !== null && typeof e == "object"
  , $i = e=>ee(e) && J(e.then) && J(e.catch)
  , $n = Object.prototype.toString
  , Vn = e=>$n.call(e)
  , q = e=>{
    if (!ee(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Vi = e=>e == null ? "" : Oe(e) || q(e) && e.toString === $n ? JSON.stringify(e, null, 2) : String(e);
function Pa(e, t="") {
    return e.reduce((a,n,i)=>i === 0 ? a + n : a + t + n, "")
}
const Wa = 2;
function Wi(e, t=0, a=e.length) {
    const n = e.split(/\r?\n/);
    let i = 0;
    const r = [];
    for (let o = 0; o < n.length; o++)
        if (i += n[o].length + 1,
        i >= t) {
            for (let s = o - Wa; s <= o + Wa || a > i; s++) {
                if (s < 0 || s >= n.length)
                    continue;
                const l = s + 1;
                r.push("".concat(l).concat(" ".repeat(3 - String(l).length), "|  ").concat(n[s]));
                const m = n[s].length;
                if (s === o) {
                    const f = t - (i - m) + 1
                      , _ = Math.max(1, a > i ? m - f : a - t);
                    r.push("   |  " + " ".repeat(f) + "^".repeat(_))
                } else if (s > o) {
                    if (a > i) {
                        const f = Math.max(Math.min(a - i, m), 1);
                        r.push("   |  " + "^".repeat(f))
                    }
                    i += m + 1
                }
            }
            break
        }
    return r.join("\n")
}
function Wn(e) {
    let t = e;
    return ()=>++t
}
function et(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const Ka = {};
function Ki(e) {
    Ka[e] || (Ka[e] = !0,
    et(e))
}
function Hi(e, t, a) {
    return {
        line: e,
        column: t,
        offset: a
    }
}
function Rt(e, t, a) {
    const n = {
        start: e,
        end: t
    };
    return a != null && (n.source = a),
    n
}
const jt = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
}
  , Gi = {
    [jt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function zi(e, t, ...a) {
    const n = Ut(Gi[e] || "", ...a || [])
      , i = {
        message: String(n),
        code: e
    };
    return t && (i.location = t),
    i
}
const D = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}
  , qi = {
    [D.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [D.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [D.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [D.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [D.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [D.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [D.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [D.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [D.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [D.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [D.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [D.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [D.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [D.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [D.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function tt(e, t, a={}) {
    const {domain: n, messages: i, args: r} = a
      , o = Ut((i || qi)[e] || "", ...r || [])
      , s = new SyntaxError(String(o));
    return s.code = e,
    t && (s.location = t),
    s.domain = n,
    s
}
function Yi(e) {
    throw e
}
const Xi = /<\/?[\w\s="/.':;#-\/]+>/
  , Qi = e=>Xi.test(e)
  , Ae = " "
  , Ji = "\r"
  , re = "\n"
  , Zi = String.fromCharCode(8232)
  , eo = String.fromCharCode(8233);
function to(e) {
    const t = e;
    let a = 0
      , n = 1
      , i = 1
      , r = 0;
    const o = A=>t[A] === Ji && t[A + 1] === re
      , s = A=>t[A] === re
      , l = A=>t[A] === eo
      , m = A=>t[A] === Zi
      , f = A=>o(A) || s(A) || l(A) || m(A)
      , _ = ()=>a
      , p = ()=>n
      , C = ()=>i
      , y = ()=>r
      , S = A=>o(A) || l(A) || m(A) ? re : t[A]
      , L = ()=>S(a)
      , I = ()=>S(a + r);
    function w() {
        return r = 0,
        f(a) && (n++,
        i = 0),
        o(a) && a++,
        a++,
        i++,
        t[a]
    }
    function g() {
        return o(a + r) && r++,
        r++,
        t[a + r]
    }
    function b() {
        a = 0,
        n = 1,
        i = 1,
        r = 0
    }
    function O(A=0) {
        r = A
    }
    function h() {
        const A = a + r;
        for (; A !== a; )
            w();
        r = 0
    }
    return {
        index: _,
        line: p,
        column: C,
        peekOffset: y,
        charAt: S,
        currentChar: L,
        currentPeek: I,
        next: w,
        peek: g,
        reset: b,
        resetPeek: O,
        skipToPeek: h
    }
}
const Se = void 0
  , ao = "."
  , Ha = "'"
  , no = "tokenizer";
function ro(e, t={}) {
    const a = t.location !== !1
      , n = to(e)
      , i = ()=>n.index()
      , r = ()=>Hi(n.line(), n.column(), n.index())
      , o = r()
      , s = i()
      , l = {
        currentType: 14,
        offset: s,
        startLoc: o,
        endLoc: o,
        lastType: 14,
        lastOffset: s,
        lastStartLoc: o,
        lastEndLoc: o,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , m = ()=>l
      , {onError: f} = t;
    function _(c, u, E, ...R) {
        const G = m();
        if (u.column += E,
        u.offset += E,
        f) {
            const H = a ? Rt(G.startLoc, u) : null
              , K = tt(c, H, {
                domain: no,
                args: R
            });
            f(K)
        }
    }
    function p(c, u, E) {
        c.endLoc = r(),
        c.currentType = u;
        const R = {
            type: u
        };
        return a && (R.loc = Rt(c.startLoc, c.endLoc)),
        E != null && (R.value = E),
        R
    }
    const C = c=>p(c, 14);
    function y(c, u) {
        return c.currentChar() === u ? (c.next(),
        u) : (_(D.EXPECTED_TOKEN, r(), 0, u),
        "")
    }
    function S(c) {
        let u = "";
        for (; c.currentPeek() === Ae || c.currentPeek() === re; )
            u += c.currentPeek(),
            c.peek();
        return u
    }
    function L(c) {
        const u = S(c);
        return c.skipToPeek(),
        u
    }
    function I(c) {
        if (c === Se)
            return !1;
        const u = c.charCodeAt(0);
        return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u === 95
    }
    function w(c) {
        if (c === Se)
            return !1;
        const u = c.charCodeAt(0);
        return u >= 48 && u <= 57
    }
    function g(c, u) {
        const {currentType: E} = u;
        if (E !== 2)
            return !1;
        S(c);
        const R = I(c.currentPeek());
        return c.resetPeek(),
        R
    }
    function b(c, u) {
        const {currentType: E} = u;
        if (E !== 2)
            return !1;
        S(c);
        const R = c.currentPeek() === "-" ? c.peek() : c.currentPeek()
          , G = w(R);
        return c.resetPeek(),
        G
    }
    function O(c, u) {
        const {currentType: E} = u;
        if (E !== 2)
            return !1;
        S(c);
        const R = c.currentPeek() === Ha;
        return c.resetPeek(),
        R
    }
    function h(c, u) {
        const {currentType: E} = u;
        if (E !== 8)
            return !1;
        S(c);
        const R = c.currentPeek() === ".";
        return c.resetPeek(),
        R
    }
    function A(c, u) {
        const {currentType: E} = u;
        if (E !== 9)
            return !1;
        S(c);
        const R = I(c.currentPeek());
        return c.resetPeek(),
        R
    }
    function k(c, u) {
        const {currentType: E} = u;
        if (!(E === 8 || E === 12))
            return !1;
        S(c);
        const R = c.currentPeek() === ":";
        return c.resetPeek(),
        R
    }
    function T(c, u) {
        const {currentType: E} = u;
        if (E !== 10)
            return !1;
        const R = ()=>{
            const H = c.currentPeek();
            return H === "{" ? I(c.peek()) : H === "@" || H === "%" || H === "|" || H === ":" || H === "." || H === Ae || !H ? !1 : H === re ? (c.peek(),
            R()) : U(c, !1)
        }
          , G = R();
        return c.resetPeek(),
        G
    }
    function B(c) {
        S(c);
        const u = c.currentPeek() === "|";
        return c.resetPeek(),
        u
    }
    function ce(c) {
        const u = S(c)
          , E = c.currentPeek() === "%" && c.peek() === "{";
        return c.resetPeek(),
        {
            isModulo: E,
            hasSpace: u.length > 0
        }
    }
    function U(c, u=!0) {
        const E = (G=!1,H="",K=!1)=>{
            const v = c.currentPeek();
            return v === "{" ? H === "%" ? !1 : G : v === "@" || !v ? H === "%" ? !0 : G : v === "%" ? (c.peek(),
            E(G, "%", !0)) : v === "|" ? H === "%" || K ? !0 : !(H === Ae || H === re) : v === Ae ? (c.peek(),
            E(!0, Ae, K)) : v === re ? (c.peek(),
            E(!0, re, K)) : !0
        }
          , R = E();
        return u && c.resetPeek(),
        R
    }
    function ne(c, u) {
        const E = c.currentChar();
        return E === Se ? Se : u(E) ? (c.next(),
        E) : null
    }
    function at(c) {
        const u = c.charCodeAt(0);
        return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 95 || u === 36
    }
    function nt(c) {
        return ne(c, at)
    }
    function Te(c) {
        const u = c.charCodeAt(0);
        return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 95 || u === 36 || u === 45
    }
    function rt(c) {
        return ne(c, Te)
    }
    function it(c) {
        const u = c.charCodeAt(0);
        return u >= 48 && u <= 57
    }
    function ot(c) {
        return ne(c, it)
    }
    function st(c) {
        const u = c.charCodeAt(0);
        return u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102
    }
    function lt(c) {
        return ne(c, st)
    }
    function fe(c) {
        let u = ""
          , E = "";
        for (; u = ot(c); )
            E += u;
        return E
    }
    function Ke(c) {
        L(c);
        const u = c.currentChar();
        return u !== "%" && _(D.EXPECTED_TOKEN, r(), 0, u),
        c.next(),
        "%"
    }
    function He(c) {
        let u = "";
        for (; ; ) {
            const E = c.currentChar();
            if (E === "{" || E === "}" || E === "@" || E === "|" || !E)
                break;
            if (E === "%")
                if (U(c))
                    u += E,
                    c.next();
                else
                    break;
            else if (E === Ae || E === re)
                if (U(c))
                    u += E,
                    c.next();
                else {
                    if (B(c))
                        break;
                    u += E,
                    c.next()
                }
            else
                u += E,
                c.next()
        }
        return u
    }
    function ct(c) {
        L(c);
        let u = ""
          , E = "";
        for (; u = rt(c); )
            E += u;
        return c.currentChar() === Se && _(D.UNTERMINATED_CLOSING_BRACE, r(), 0),
        E
    }
    function ut(c) {
        L(c);
        let u = "";
        return c.currentChar() === "-" ? (c.next(),
        u += "-".concat(fe(c))) : u += fe(c),
        c.currentChar() === Se && _(D.UNTERMINATED_CLOSING_BRACE, r(), 0),
        u
    }
    function dt(c) {
        return c !== Ha && c !== re
    }
    function At(c) {
        L(c),
        y(c, "'");
        let u = ""
          , E = "";
        for (; u = ne(c, dt); )
            u === "\\" ? E += mt(c) : E += u;
        const R = c.currentChar();
        return R === re || R === Se ? (_(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0),
        R === re && (c.next(),
        y(c, "'")),
        E) : (y(c, "'"),
        E)
    }
    function mt(c) {
        const u = c.currentChar();
        switch (u) {
        case "\\":
        case "'":
            return c.next(),
            "\\".concat(u);
        case "u":
            return Ge(c, u, 4);
        case "U":
            return Ge(c, u, 6);
        default:
            return _(D.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, u),
            ""
        }
    }
    function Ge(c, u, E) {
        y(c, u);
        let R = "";
        for (let G = 0; G < E; G++) {
            const H = lt(c);
            if (!H) {
                _(D.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, "\\".concat(u).concat(R).concat(c.currentChar()));
                break
            }
            R += H
        }
        return "\\".concat(u).concat(R)
    }
    function ft(c) {
        return c !== "{" && c !== "}" && c !== Ae && c !== re
    }
    function gt(c) {
        L(c);
        let u = ""
          , E = "";
        for (; u = ne(c, ft); )
            E += u;
        return E
    }
    function pt(c) {
        let u = ""
          , E = "";
        for (; u = nt(c); )
            E += u;
        return E
    }
    function N(c) {
        const u = E=>{
            const R = c.currentChar();
            return R === "{" || R === "%" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === Ae ? E : (E += R,
            c.next(),
            u(E))
        }
        ;
        return u("")
    }
    function $(c) {
        L(c);
        const u = y(c, "|");
        return L(c),
        u
    }
    function _t(c, u) {
        let E = null;
        switch (c.currentChar()) {
        case "{":
            return u.braceNest >= 1 && _(D.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0),
            c.next(),
            E = p(u, 2, "{"),
            L(c),
            u.braceNest++,
            E;
        case "}":
            return u.braceNest > 0 && u.currentType === 2 && _(D.EMPTY_PLACEHOLDER, r(), 0),
            c.next(),
            E = p(u, 3, "}"),
            u.braceNest--,
            u.braceNest > 0 && L(c),
            u.inLinked && u.braceNest === 0 && (u.inLinked = !1),
            E;
        case "@":
            return u.braceNest > 0 && _(D.UNTERMINATED_CLOSING_BRACE, r(), 0),
            E = Me(c, u) || C(u),
            u.braceNest = 0,
            E;
        default:
            {
                let G = !0
                  , H = !0
                  , K = !0;
                if (B(c))
                    return u.braceNest > 0 && _(D.UNTERMINATED_CLOSING_BRACE, r(), 0),
                    E = p(u, 1, $(c)),
                    u.braceNest = 0,
                    u.inLinked = !1,
                    E;
                if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
                    return _(D.UNTERMINATED_CLOSING_BRACE, r(), 0),
                    u.braceNest = 0,
                    vt(c, u);
                if (G = g(c, u))
                    return E = p(u, 5, ct(c)),
                    L(c),
                    E;
                if (H = b(c, u))
                    return E = p(u, 6, ut(c)),
                    L(c),
                    E;
                if (K = O(c, u))
                    return E = p(u, 7, At(c)),
                    L(c),
                    E;
                if (!G && !H && !K)
                    return E = p(u, 13, gt(c)),
                    _(D.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, E.value),
                    L(c),
                    E;
                break
            }
        }
        return E
    }
    function Me(c, u) {
        const {currentType: E} = u;
        let R = null;
        const G = c.currentChar();
        switch ((E === 8 || E === 9 || E === 12 || E === 10) && (G === re || G === Ae) && _(D.INVALID_LINKED_FORMAT, r(), 0),
        G) {
        case "@":
            return c.next(),
            R = p(u, 8, "@"),
            u.inLinked = !0,
            R;
        case ".":
            return L(c),
            c.next(),
            p(u, 9, ".");
        case ":":
            return L(c),
            c.next(),
            p(u, 10, ":");
        default:
            return B(c) ? (R = p(u, 1, $(c)),
            u.braceNest = 0,
            u.inLinked = !1,
            R) : h(c, u) || k(c, u) ? (L(c),
            Me(c, u)) : A(c, u) ? (L(c),
            p(u, 12, pt(c))) : T(c, u) ? (L(c),
            G === "{" ? _t(c, u) || R : p(u, 11, N(c))) : (E === 8 && _(D.INVALID_LINKED_FORMAT, r(), 0),
            u.braceNest = 0,
            u.inLinked = !1,
            vt(c, u))
        }
    }
    function vt(c, u) {
        let E = {
            type: 14
        };
        if (u.braceNest > 0)
            return _t(c, u) || C(u);
        if (u.inLinked)
            return Me(c, u) || C(u);
        switch (c.currentChar()) {
        case "{":
            return _t(c, u) || C(u);
        case "}":
            return _(D.UNBALANCED_CLOSING_BRACE, r(), 0),
            c.next(),
            p(u, 3, "}");
        case "@":
            return Me(c, u) || C(u);
        default:
            {
                if (B(c))
                    return E = p(u, 1, $(c)),
                    u.braceNest = 0,
                    u.inLinked = !1,
                    E;
                const {isModulo: G, hasSpace: H} = ce(c);
                if (G)
                    return H ? p(u, 0, He(c)) : p(u, 4, Ke(c));
                if (U(c))
                    return p(u, 0, He(c));
                break
            }
        }
        return E
    }
    function Xt() {
        const {currentType: c, offset: u, startLoc: E, endLoc: R} = l;
        return l.lastType = c,
        l.lastOffset = u,
        l.lastStartLoc = E,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = r(),
        n.currentChar() === Se ? p(l, 14) : vt(n, l)
    }
    return {
        nextToken: Xt,
        currentOffset: i,
        currentPosition: r,
        context: m
    }
}
const io = "parser"
  , oo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function so(e, t, a) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const n = parseInt(t || a, 16);
            return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�"
        }
    }
}
function lo(e={}) {
    const t = e.location !== !1
      , {onError: a, onWarn: n} = e;
    function i(g, b, O, h, ...A) {
        const k = g.currentPosition();
        if (k.offset += h,
        k.column += h,
        a) {
            const T = t ? Rt(O, k) : null
              , B = tt(b, T, {
                domain: io,
                args: A
            });
            a(B)
        }
    }
    function r(g, b, O, h, ...A) {
        const k = g.currentPosition();
        if (k.offset += h,
        k.column += h,
        n) {
            const T = t ? Rt(O, k) : null;
            n(zi(b, T, A))
        }
    }
    function o(g, b, O) {
        const h = {
            type: g
        };
        return t && (h.start = b,
        h.end = b,
        h.loc = {
            start: O,
            end: O
        }),
        h
    }
    function s(g, b, O, h) {
        h && (g.type = h),
        t && (g.end = b,
        g.loc && (g.loc.end = O))
    }
    function l(g, b) {
        const O = g.context()
          , h = o(3, O.offset, O.startLoc);
        return h.value = b,
        s(h, g.currentOffset(), g.currentPosition()),
        h
    }
    function m(g, b) {
        const O = g.context()
          , {lastOffset: h, lastStartLoc: A} = O
          , k = o(5, h, A);
        return k.index = parseInt(b, 10),
        g.nextToken(),
        s(k, g.currentOffset(), g.currentPosition()),
        k
    }
    function f(g, b, O) {
        const h = g.context()
          , {lastOffset: A, lastStartLoc: k} = h
          , T = o(4, A, k);
        return T.key = b,
        O === !0 && (T.modulo = !0),
        g.nextToken(),
        s(T, g.currentOffset(), g.currentPosition()),
        T
    }
    function _(g, b) {
        const O = g.context()
          , {lastOffset: h, lastStartLoc: A} = O
          , k = o(9, h, A);
        return k.value = b.replace(oo, so),
        g.nextToken(),
        s(k, g.currentOffset(), g.currentPosition()),
        k
    }
    function p(g) {
        const b = g.nextToken()
          , O = g.context()
          , {lastOffset: h, lastStartLoc: A} = O
          , k = o(8, h, A);
        return b.type !== 12 ? (i(g, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0),
        k.value = "",
        s(k, h, A),
        {
            nextConsumeToken: b,
            node: k
        }) : (b.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, ve(b)),
        k.value = b.value || "",
        s(k, g.currentOffset(), g.currentPosition()),
        {
            node: k
        })
    }
    function C(g, b) {
        const O = g.context()
          , h = o(7, O.offset, O.startLoc);
        return h.value = b,
        s(h, g.currentOffset(), g.currentPosition()),
        h
    }
    function y(g) {
        const b = g.context()
          , O = o(6, b.offset, b.startLoc);
        let h = g.nextToken();
        if (h.type === 9) {
            const A = p(g);
            O.modifier = A.node,
            h = A.nextConsumeToken || g.nextToken()
        }
        switch (h.type !== 10 && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(h)),
        h = g.nextToken(),
        h.type === 2 && (h = g.nextToken()),
        h.type) {
        case 11:
            h.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(h)),
            O.key = C(g, h.value || "");
            break;
        case 5:
            h.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(h)),
            O.key = f(g, h.value || "");
            break;
        case 6:
            h.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(h)),
            O.key = m(g, h.value || "");
            break;
        case 7:
            h.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(h)),
            O.key = _(g, h.value || "");
            break;
        default:
            {
                i(g, D.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
                const A = g.context()
                  , k = o(7, A.offset, A.startLoc);
                return k.value = "",
                s(k, A.offset, A.startLoc),
                O.key = k,
                s(O, A.offset, A.startLoc),
                {
                    nextConsumeToken: h,
                    node: O
                }
            }
        }
        return s(O, g.currentOffset(), g.currentPosition()),
        {
            node: O
        }
    }
    function S(g) {
        const b = g.context()
          , O = b.currentType === 1 ? g.currentOffset() : b.offset
          , h = b.currentType === 1 ? b.endLoc : b.startLoc
          , A = o(2, O, h);
        A.items = [];
        let k = null
          , T = null;
        do {
            const U = k || g.nextToken();
            switch (k = null,
            U.type) {
            case 0:
                U.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(U)),
                A.items.push(l(g, U.value || ""));
                break;
            case 6:
                U.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(U)),
                A.items.push(m(g, U.value || ""));
                break;
            case 4:
                T = !0;
                break;
            case 5:
                U.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(U)),
                A.items.push(f(g, U.value || "", !!T)),
                T && (r(g, jt.USE_MODULO_SYNTAX, b.lastStartLoc, 0, ve(U)),
                T = null);
                break;
            case 7:
                U.value == null && i(g, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ve(U)),
                A.items.push(_(g, U.value || ""));
                break;
            case 8:
                {
                    const ne = y(g);
                    A.items.push(ne.node),
                    k = ne.nextConsumeToken || null;
                    break
                }
            }
        } while (b.currentType !== 14 && b.currentType !== 1);
        const B = b.currentType === 1 ? b.lastOffset : g.currentOffset()
          , ce = b.currentType === 1 ? b.lastEndLoc : g.currentPosition();
        return s(A, B, ce),
        A
    }
    function L(g, b, O, h) {
        const A = g.context();
        let k = h.items.length === 0;
        const T = o(1, b, O);
        T.cases = [],
        T.cases.push(h);
        do {
            const B = S(g);
            k || (k = B.items.length === 0),
            T.cases.push(B)
        } while (A.currentType !== 14);
        return k && i(g, D.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0),
        s(T, g.currentOffset(), g.currentPosition()),
        T
    }
    function I(g) {
        const b = g.context()
          , {offset: O, startLoc: h} = b
          , A = S(g);
        return b.currentType === 14 ? A : L(g, O, h, A)
    }
    function w(g) {
        const b = ro(g, we({}, e))
          , O = b.context()
          , h = o(0, O.offset, O.startLoc);
        return t && h.loc && (h.loc.source = g),
        h.body = I(b),
        e.onCacheKey && (h.cacheKey = e.onCacheKey(g)),
        O.currentType !== 14 && i(b, D.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, g[O.offset] || ""),
        s(h, b.currentOffset(), b.currentPosition()),
        h
    }
    return {
        parse: w
    }
}
function ve(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function co(e, t={}) {
    const a = {
        ast: e,
        helpers: new Set
    };
    return {
        context: ()=>a,
        helper: r=>(a.helpers.add(r),
        r)
    }
}
function Ga(e, t) {
    for (let a = 0; a < e.length; a++)
        La(e[a], t)
}
function La(e, t) {
    switch (e.type) {
    case 1:
        Ga(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Ga(e.items, t);
        break;
    case 6:
        {
            La(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function uo(e, t={}) {
    const a = co(e);
    a.helper("normalize"),
    e.body && La(e.body, a);
    const n = a.context();
    e.helpers = Array.from(n.helpers)
}
function mo(e) {
    const t = e.body;
    return t.type === 2 ? za(t) : t.cases.forEach(a=>za(a)),
    e
}
function za(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let a = 0; a < e.items.length; a++) {
            const n = e.items[a];
            if (!(n.type === 3 || n.type === 9) || n.value == null)
                break;
            t.push(n.value)
        }
        if (t.length === e.items.length) {
            e.static = Pa(t);
            for (let a = 0; a < e.items.length; a++) {
                const n = e.items[a];
                (n.type === 3 || n.type === 9) && delete n.value
            }
        }
    }
}
const fo = "minifier";
function Ye(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            Ye(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , a = t.cases;
            for (let n = 0; n < a.length; n++)
                Ye(a[n]);
            t.c = a,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , a = t.items;
            for (let n = 0; n < a.length; n++)
                Ye(a[n]);
            t.i = a,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            Ye(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (Ye(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    default:
        throw tt(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {
            domain: fo,
            args: [e.type]
        })
    }
    delete e.type
}
const go = "parser";
function po(e, t) {
    const {sourceMap: a, filename: n, breakLineCode: i, needIndent: r} = t
      , o = t.location !== !1
      , s = {
        filename: n,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: i,
        needIndent: r,
        indentLevel: 0
    };
    o && e.loc && (s.source = e.loc.source);
    const l = ()=>s;
    function m(L, I) {
        s.code += L
    }
    function f(L, I=!0) {
        const w = I ? i : "";
        m(r ? w + "  ".repeat(L) : w)
    }
    function _(L=!0) {
        const I = ++s.indentLevel;
        L && f(I)
    }
    function p(L=!0) {
        const I = --s.indentLevel;
        L && f(I)
    }
    function C() {
        f(s.indentLevel)
    }
    return {
        context: l,
        push: m,
        indent: _,
        deindent: p,
        newline: C,
        helper: L=>"_".concat(L),
        needIndent: ()=>s.needIndent
    }
}
function _o(e, t) {
    const {helper: a} = e;
    e.push("".concat(a("linked"), "(")),
    Qe(e, t.key),
    t.modifier ? (e.push(", "),
    Qe(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function vo(e, t) {
    const {helper: a, needIndent: n} = e;
    e.push("".concat(a("normalize"), "([")),
    e.indent(n());
    const i = t.items.length;
    for (let r = 0; r < i && (Qe(e, t.items[r]),
    r !== i - 1); r++)
        e.push(", ");
    e.deindent(n()),
    e.push("])")
}
function bo(e, t) {
    const {helper: a, needIndent: n} = e;
    if (t.cases.length > 1) {
        e.push("".concat(a("plural"), "([")),
        e.indent(n());
        const i = t.cases.length;
        for (let r = 0; r < i && (Qe(e, t.cases[r]),
        r !== i - 1); r++)
            e.push(", ");
        e.deindent(n()),
        e.push("])")
    }
}
function ho(e, t) {
    t.body ? Qe(e, t.body) : e.push("null")
}
function Qe(e, t) {
    const {helper: a} = e;
    switch (t.type) {
    case 0:
        ho(e, t);
        break;
    case 1:
        bo(e, t);
        break;
    case 2:
        vo(e, t);
        break;
    case 6:
        _o(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push("".concat(a("interpolate"), "(").concat(a("list"), "(").concat(t.index, "))"), t);
        break;
    case 4:
        e.push("".concat(a("interpolate"), "(").concat(a("named"), "(").concat(JSON.stringify(t.key), "))"), t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    default:
        throw tt(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {
            domain: go,
            args: [t.type]
        })
    }
}
const Eo = (e,t={})=>{
    const a = F(t.mode) ? t.mode : "normal"
      , n = F(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , r = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : "\n"
      , o = t.needIndent ? t.needIndent : a !== "arrow"
      , s = e.helpers || []
      , l = po(e, {
        mode: a,
        filename: n,
        sourceMap: i,
        breakLineCode: r,
        needIndent: o
    });
    l.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(o),
    s.length > 0 && (l.push("const { ".concat(Pa(s.map(_=>"".concat(_, ": _").concat(_)), ", "), " } = ctx")),
    l.newline()),
    l.push("return "),
    Qe(l, e),
    l.deindent(o),
    l.push("}"),
    delete e.helpers;
    const {code: m, map: f} = l.context();
    return {
        ast: e,
        code: m,
        map: f ? f.toJSON() : void 0
    }
}
;
function ko(e, t={}) {
    const a = we({}, t)
      , n = !!a.jit
      , i = !!a.minify
      , r = a.optimize == null ? !0 : a.optimize
      , s = lo(a).parse(e);
    return n ? (r && mo(s),
    i && Ye(s),
    {
        ast: s,
        code: ""
    }) : (uo(s, a),
    Eo(s, a))
}
const Re = [];
Re[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Re[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Re[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Re[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Re[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Re[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Re[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const To = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Co(e) {
    return To.test(e)
}
function Oo(e) {
    const t = e.charCodeAt(0)
      , a = e.charCodeAt(e.length - 1);
    return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Ao(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function Po(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Co(t) ? Oo(t) : "*" + t
}
function Kn(e) {
    const t = [];
    let a = -1, n = 0, i = 0, r, o, s, l, m, f, _;
    const p = [];
    p[0] = ()=>{
        o === void 0 ? o = s : o += s
    }
    ,
    p[1] = ()=>{
        o !== void 0 && (t.push(o),
        o = void 0)
    }
    ,
    p[2] = ()=>{
        p[0](),
        i++
    }
    ,
    p[3] = ()=>{
        if (i > 0)
            i--,
            n = 4,
            p[0]();
        else {
            if (i = 0,
            o === void 0 || (o = Po(o),
            o === !1))
                return !1;
            p[1]()
        }
    }
    ;
    function C() {
        const y = e[a + 1];
        if (n === 5 && y === "'" || n === 6 && y === '"')
            return a++,
            s = "\\" + y,
            p[0](),
            !0
    }
    for (; n !== null; )
        if (a++,
        r = e[a],
        !(r === "\\" && C())) {
            if (l = Ao(r),
            _ = Re[n],
            m = _[l] || _.l || 8,
            m === 8 || (n = m[0],
            m[1] !== void 0 && (f = p[m[1]],
            f && (s = r,
            f() === !1))))
                return;
            if (n === 7)
                return t
        }
}
const qa = new Map;
function Hn(e, t) {
    return ee(e) ? e[t] : null
}
function Lo(e, t) {
    if (!ee(e))
        return null;
    let a = qa.get(t);
    if (a || (a = Kn(t),
    a && qa.set(t, a)),
    !a)
        return null;
    const n = a.length;
    let i = e
      , r = 0;
    for (; r < n; ) {
        const o = i[a[r]];
        if (o === void 0 || J(i))
            return null;
        i = o,
        r++
    }
    return i
}
const No = e=>e
  , yo = e=>""
  , Gn = "text"
  , So = e=>e.length === 0 ? "" : Pa(e)
  , Io = Vi;
function Ya(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function wo(e) {
    const t = ue(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (ue(e.named.count) || ue(e.named.n)) ? ue(e.named.count) ? e.named.count : ue(e.named.n) ? e.named.n : t : t
}
function Ro(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function zn(e={}) {
    const t = e.locale
      , a = wo(e)
      , n = ee(e.pluralRules) && F(t) && J(e.pluralRules[t]) ? e.pluralRules[t] : Ya
      , i = ee(e.pluralRules) && F(t) && J(e.pluralRules[t]) ? Ya : void 0
      , r = I=>I[n(a, I.length, i)]
      , o = e.list || []
      , s = I=>o[I]
      , l = e.named || {};
    ue(e.pluralIndex) && Ro(a, l);
    const m = I=>l[I];
    function f(I) {
        const w = J(e.messages) ? e.messages(I) : ee(e.messages) ? e.messages[I] : !1;
        return w || (e.parent ? e.parent.message(I) : yo)
    }
    const _ = I=>e.modifiers ? e.modifiers[I] : No
      , p = q(e.processor) && J(e.processor.normalize) ? e.processor.normalize : So
      , C = q(e.processor) && J(e.processor.interpolate) ? e.processor.interpolate : Io
      , y = q(e.processor) && F(e.processor.type) ? e.processor.type : Gn
      , L = {
        list: s,
        named: m,
        plural: r,
        linked: (I,...w)=>{
            const [g,b] = w;
            let O = "text"
              , h = "";
            w.length === 1 ? ee(g) ? (h = g.modifier || h,
            O = g.type || O) : F(g) && (h = g || h) : w.length === 2 && (F(g) && (h = g || h),
            F(b) && (O = b || O));
            const A = f(I)(L)
              , k = O === "vnode" && Oe(A) && h ? A[0] : A;
            return h ? _(h)(k, O) : k
        }
        ,
        message: f,
        type: y,
        interpolate: C,
        normalize: p,
        values: we({}, o, l)
    };
    return L
}
let Je = null;
function Mo(e) {
    Je = e
}
function Do() {
    return Je
}
function qn(e, t, a) {
    Je && Je.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: a
    })
}
const Yn = Fo("function:translate");
function Fo(e) {
    return t=>Je && Je.emit(e, t)
}
const Xn = jt.__EXTEND_POINT__
  , Fe = Wn(Xn)
  , ie = {
    NOT_FOUND_KEY: Xn,
    FALLBACK_TO_TRANSLATE: Fe(),
    CANNOT_FORMAT_NUMBER: Fe(),
    FALLBACK_TO_NUMBER_FORMAT: Fe(),
    CANNOT_FORMAT_DATE: Fe(),
    FALLBACK_TO_DATE_FORMAT: Fe(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Fe(),
    __EXTEND_POINT__: Fe()
}
  , xo = {
    [ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
    [ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
    [ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
    [ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
    [ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ie(e, ...t) {
    return Ut(xo[e], ...t)
}
const Qn = D.__EXTEND_POINT__
  , xe = Wn(Qn)
  , ae = {
    INVALID_ARGUMENT: Qn,
    INVALID_DATE_ARGUMENT: xe(),
    INVALID_ISO_DATE_ARGUMENT: xe(),
    NOT_SUPPORT_NON_STRING_MESSAGE: xe(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: xe(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: xe(),
    NOT_SUPPORT_LOCALE_TYPE: xe(),
    __EXTEND_POINT__: xe()
};
function Ee(e) {
    return tt(e, null, {
        messages: Bo
    })
}
const Bo = {
    [ae.INVALID_ARGUMENT]: "Invalid arguments",
    [ae.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [ae.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
    [ae.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
    [ae.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
    [ae.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
    [ae.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function $t(e, t) {
    return t.locale != null ? aa(t.locale) : aa(e.locale)
}
let Qt;
function aa(e) {
    if (F(e))
        return e;
    if (J(e)) {
        if (e.resolvedOnce && Qt != null)
            return Qt;
        if (e.constructor.name === "Function") {
            const t = e();
            if ($i(t))
                throw Ee(ae.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Qt = t
        } else
            throw Ee(ae.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Ee(ae.NOT_SUPPORT_LOCALE_TYPE)
}
function Jn(e, t, a) {
    return [...new Set([a, ...Oe(t) ? t : ee(t) ? Object.keys(t) : F(t) ? [t] : [a]])]
}
function Uo(e, t, a) {
    const n = F(a) ? a : Mt
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let r = i.__localeChainCache.get(n);
    if (!r) {
        r = [];
        let o = [a];
        for (; Oe(o); )
            o = Xa(r, o, t);
        const s = Oe(t) || !q(t) ? t : t.default ? t.default : null;
        o = F(s) ? [s] : s,
        Oe(o) && Xa(r, o, !1),
        i.__localeChainCache.set(n, r)
    }
    return r
}
function Xa(e, t, a) {
    let n = !0;
    for (let i = 0; i < t.length && oe(n); i++) {
        const r = t[i];
        F(r) && (n = jo(e, t[i], a))
    }
    return n
}
function jo(e, t, a) {
    let n;
    const i = t.split("-");
    do {
        const r = i.join("-");
        n = $o(e, r, a),
        i.splice(-1, 1)
    } while (i.length && n === !0);
    return n
}
function $o(e, t, a) {
    let n = !1;
    if (!e.includes(t) && (n = !0,
    t)) {
        n = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (Oe(a) || q(a)) && a[i] && (n = a[i])
    }
    return n
}
const Zn = "9.13.1"
  , Vt = -1
  , Mt = "en-US"
  , Na = ""
  , Qa = e=>"".concat(e.charAt(0).toLocaleUpperCase()).concat(e.substr(1));
function Vo() {
    return {
        upper: (e,t)=>t === "text" && F(e) ? e.toUpperCase() : t === "vnode" && ee(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && F(e) ? e.toLowerCase() : t === "vnode" && ee(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && F(e) ? Qa(e) : t === "vnode" && ee(e) && "__v_isVNode"in e ? Qa(e.children) : e
    }
}
let er;
function Wo(e) {
    er = e
}
let tr;
function Ko(e) {
    tr = e
}
let ar;
function Ho(e) {
    ar = e
}
let nr = null;
const Go = e=>{
    nr = e
}
  , rr = ()=>nr;
let ir = null;
const zo = e=>{
    ir = e
}
  , qo = ()=>ir;
let Ja = 0;
function Yo(e={}) {
    const t = J(e.onWarn) ? e.onWarn : et
      , a = F(e.version) ? e.version : Zn
      , n = F(e.locale) || J(e.locale) ? e.locale : Mt
      , i = J(n) ? Mt : n
      , r = Oe(e.fallbackLocale) || q(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , o = q(e.messages) ? e.messages : {
        [i]: {}
    }
      , s = q(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = q(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , m = we({}, e.modifiers || {}, Vo())
      , f = e.pluralRules || {}
      , _ = J(e.missing) ? e.missing : null
      , p = oe(e.missingWarn) || $a(e.missingWarn) ? e.missingWarn : !0
      , C = oe(e.fallbackWarn) || $a(e.fallbackWarn) ? e.fallbackWarn : !0
      , y = !!e.fallbackFormat
      , S = !!e.unresolving
      , L = J(e.postTranslation) ? e.postTranslation : null
      , I = q(e.processor) ? e.processor : null
      , w = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , g = !!e.escapeParameter
      , b = J(e.messageCompiler) ? e.messageCompiler : er;
    J(e.messageCompiler) && Ki(Ie(ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
    const O = J(e.messageResolver) ? e.messageResolver : tr || Hn
      , h = J(e.localeFallbacker) ? e.localeFallbacker : ar || Jn
      , A = ee(e.fallbackContext) ? e.fallbackContext : void 0
      , k = e
      , T = ee(k.__datetimeFormatters) ? k.__datetimeFormatters : new Map
      , B = ee(k.__numberFormatters) ? k.__numberFormatters : new Map
      , ce = ee(k.__meta) ? k.__meta : {};
    Ja++;
    const U = {
        version: a,
        cid: Ja,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: m,
        pluralRules: f,
        missing: _,
        missingWarn: p,
        fallbackWarn: C,
        fallbackFormat: y,
        unresolving: S,
        postTranslation: L,
        processor: I,
        warnHtmlMessage: w,
        escapeParameter: g,
        messageCompiler: b,
        messageResolver: O,
        localeFallbacker: h,
        fallbackContext: A,
        onWarn: t,
        __meta: ce
    };
    return U.datetimeFormats = s,
    U.numberFormats = l,
    U.__datetimeFormatters = T,
    U.__numberFormatters = B,
    U.__v_emitter = k.__v_emitter != null ? k.__v_emitter : void 0,
    qn(U, a, ce),
    U
}
function Wt(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}
function or(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}
function Kt(e, t, a, n, i) {
    const {missing: r, onWarn: o} = e;
    {
        const s = e.__v_emitter;
        s && s.emit("missing", {
            locale: a,
            key: t,
            type: i,
            groupId: "".concat(i, ":").concat(t)
        })
    }
    if (r !== null) {
        const s = r(e, a, t, i);
        return F(s) ? s : t
    } else
        return or(n, t) && o(Ie(ie.NOT_FOUND_KEY, {
            key: t,
            locale: a
        })),
        t
}
function Xo(e, t, a) {
    const n = e;
    n.__localeChainCache = new Map,
    e.localeFallbacker(e, a, t)
}
function ya(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}
function sr(e, t) {
    const a = t.indexOf(e);
    if (a === -1)
        return !1;
    for (let n = a + 1; n < t.length; n++)
        if (ya(e, t[n]))
            return !0;
    return !1
}
function Jt(e) {
    return a=>Qo(a, e)
}
function Qo(e, t) {
    const a = t.b || t.body;
    if ((a.t || a.type) === 1) {
        const n = a
          , i = n.c || n.cases;
        return e.plural(i.reduce((r,o)=>[...r, Za(e, o)], []))
    } else
        return Za(e, a)
}
function Za(e, t) {
    const a = t.s || t.static;
    if (a)
        return e.type === "text" ? a : e.normalize([a]);
    {
        const n = (t.i || t.items).reduce((i,r)=>[...i, na(e, r)], []);
        return e.normalize(n)
    }
}
function na(e, t) {
    const a = t.t || t.type;
    switch (a) {
    case 3:
        {
            const n = t;
            return n.v || n.value
        }
    case 9:
        {
            const n = t;
            return n.v || n.value
        }
    case 4:
        {
            const n = t;
            return e.interpolate(e.named(n.k || n.key))
        }
    case 5:
        {
            const n = t;
            return e.interpolate(e.list(n.i != null ? n.i : n.index))
        }
    case 6:
        {
            const n = t
              , i = n.m || n.modifier;
            return e.linked(na(e, n.k || n.key), i ? na(e, i) : void 0, e.type)
        }
    case 7:
        {
            const n = t;
            return n.v || n.value
        }
    case 8:
        {
            const n = t;
            return n.v || n.value
        }
    default:
        throw new Error("unhandled node type on format message part: ".concat(a))
    }
}
const Jo = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function lr(e, t) {
    t && Qi(e) && et(Ut(Jo, {
        source: e
    }))
}
const cr = e=>e;
let Be = Object.create(null);
function ur(e) {
    e.code === jt.USE_MODULO_SYNTAX && et("The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.\nreference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format \n" + "(message compiler warning message: ".concat(e.message, ")"))
}
function Zo() {
    Be = Object.create(null)
}
const $e = e=>ee(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function dr(e, t={}) {
    let a = !1;
    const n = t.onError || Yi;
    return t.onError = i=>{
        a = !0,
        n(i)
    }
    ,
    {
        ...ko(e, t),
        detectError: a
    }
}
const es = (e,t)=>{
    if (!F(e))
        throw Ee(ae.NOT_SUPPORT_NON_STRING_MESSAGE);
    t.onWarn = ur;
    {
        const a = oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
        lr(e, a);
        const i = (t.onCacheKey || cr)(e)
          , r = Be[i];
        if (r)
            return r;
        const {code: o, detectError: s} = dr(e, t)
          , l = new Function("return ".concat(o))();
        return s ? l : Be[i] = l
    }
}
;
function ts(e, t) {
    if (t.onWarn = ur,
    F(e)) {
        const a = oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
        lr(e, a);
        const i = (t.onCacheKey || cr)(e)
          , r = Be[i];
        if (r)
            return r;
        const {ast: o, detectError: s} = dr(e, {
            ...t,
            location: !0,
            jit: !0
        })
          , l = Jt(o);
        return s ? l : Be[i] = l
    } else {
        if (!$e(e))
            return et("the message that is resolve with key '".concat(t.key, "' is not supported for jit compilation")),
            ()=>e;
        const a = e.cacheKey;
        if (a) {
            const n = Be[a];
            return n || (Be[a] = Jt(e))
        } else
            return Jt(e)
    }
}
const en = ()=>""
  , pe = e=>J(e);
function as(e, ...t) {
    const {fallbackFormat: a, postTranslation: n, unresolving: i, messageCompiler: r, fallbackLocale: o, messages: s} = e
      , [l,m] = gr(...t)
      , f = oe(m.missingWarn) ? m.missingWarn : e.missingWarn
      , _ = oe(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn
      , p = oe(m.escapeParameter) ? m.escapeParameter : e.escapeParameter
      , C = !!m.resolvedMessage
      , y = F(m.default) || oe(m.default) ? oe(m.default) ? r ? l : ()=>l : m.default : a ? r ? l : ()=>l : ""
      , S = a || y !== ""
      , L = $t(e, m);
    p && ns(m);
    let[I,w,g] = C ? [l, L, s[L] || {}] : mr(e, l, L, o, _, f)
      , b = I
      , O = l;
    if (!C && !(F(b) || $e(b) || pe(b)) && S && (b = y,
    O = b),
    !C && (!(F(b) || $e(b) || pe(b)) || !F(w)))
        return i ? Vt : l;
    if (F(b) && e.messageCompiler == null)
        return et("The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. " + "So translate function return '".concat(l, "'.")),
        l;
    let h = !1;
    const A = ()=>{
        h = !0
    }
      , k = pe(b) ? b : fr(e, l, w, b, O, A);
    if (h)
        return b;
    const T = ss(e, w, g, m)
      , B = zn(T)
      , ce = rs(e, k, B)
      , U = n ? n(ce, l) : ce;
    {
        const ne = {
            timestamp: Date.now(),
            key: F(l) ? l : pe(b) ? b.key : "",
            locale: w || (pe(b) ? b.locale : ""),
            format: F(b) ? b : pe(b) ? b.source : "",
            message: U
        };
        ne.meta = we({}, e.__meta, rr() || {}),
        Yn(ne)
    }
    return U
}
function ns(e) {
    Oe(e.list) ? e.list = e.list.map(t=>F(t) ? Va(t) : t) : ee(e.named) && Object.keys(e.named).forEach(t=>{
        F(e.named[t]) && (e.named[t] = Va(e.named[t]))
    }
    )
}
function mr(e, t, a, n, i, r) {
    const {messages: o, onWarn: s, messageResolver: l, localeFallbacker: m} = e
      , f = m(e, n, a);
    let _ = {}, p, C = null, y = a, S = null;
    const L = "translate";
    for (let I = 0; I < f.length; I++) {
        if (p = S = f[I],
        a !== p && !ya(a, p) && Wt(i, t) && s(Ie(ie.FALLBACK_TO_TRANSLATE, {
            key: t,
            target: p
        })),
        a !== p) {
            const O = e.__v_emitter;
            O && O.emit("fallback", {
                type: L,
                key: t,
                from: y,
                to: S,
                groupId: "".concat(L, ":").concat(t)
            })
        }
        _ = o[p] || {};
        let w = null, g, b;
        if (Ue && (w = window.performance.now(),
        g = "intlify-message-resolve-start",
        b = "intlify-message-resolve-end",
        de && de(g)),
        (C = l(_, t)) === null && (C = _[t]),
        Ue) {
            const O = window.performance.now()
              , h = e.__v_emitter;
            h && w && C && h.emit("message-resolve", {
                type: "message-resolve",
                key: t,
                message: C,
                time: O - w,
                groupId: "".concat(L, ":").concat(t)
            }),
            g && b && de && je && (de(b),
            je("intlify message resolve", g, b))
        }
        if (F(C) || $e(C) || pe(C))
            break;
        if (!sr(p, f)) {
            const O = Kt(e, t, p, r, L);
            O !== t && (C = O)
        }
        y = S
    }
    return [C, p, _]
}
function fr(e, t, a, n, i, r) {
    const {messageCompiler: o, warnHtmlMessage: s} = e;
    if (pe(n)) {
        const p = n;
        return p.locale = p.locale || a,
        p.key = p.key || t,
        p
    }
    if (o == null) {
        const p = ()=>n;
        return p.locale = a,
        p.key = t,
        p
    }
    let l = null, m, f;
    Ue && (l = window.performance.now(),
    m = "intlify-message-compilation-start",
    f = "intlify-message-compilation-end",
    de && de(m));
    const _ = o(n, is(e, a, i, n, s, r));
    if (Ue) {
        const p = window.performance.now()
          , C = e.__v_emitter;
        C && l && C.emit("message-compilation", {
            type: "message-compilation",
            message: n,
            time: p - l,
            groupId: "translate:".concat(t)
        }),
        m && f && de && je && (de(f),
        je("intlify message compilation", m, f))
    }
    return _.locale = a,
    _.key = t,
    _.source = n,
    _
}
function rs(e, t, a) {
    let n = null, i, r;
    Ue && (n = window.performance.now(),
    i = "intlify-message-evaluation-start",
    r = "intlify-message-evaluation-end",
    de && de(i));
    const o = t(a);
    if (Ue) {
        const s = window.performance.now()
          , l = e.__v_emitter;
        l && n && l.emit("message-evaluation", {
            type: "message-evaluation",
            value: o,
            time: s - n,
            groupId: "translate:".concat(t.key)
        }),
        i && r && de && je && (de(r),
        je("intlify message evaluation", i, r))
    }
    return o
}
function gr(...e) {
    const [t,a,n] = e
      , i = {};
    if (!F(t) && !ue(t) && !pe(t) && !$e(t))
        throw Ee(ae.INVALID_ARGUMENT);
    const r = ue(t) ? String(t) : (pe(t),
    t);
    return ue(a) ? i.plural = a : F(a) ? i.default = a : q(a) && !Aa(a) ? i.named = a : Oe(a) && (i.list = a),
    ue(n) ? i.plural = n : F(n) ? i.default = n : q(n) && we(i, n),
    [r, i]
}
function is(e, t, a, n, i, r) {
    return {
        locale: t,
        key: a,
        warnHtmlMessage: i,
        onError: o=>{
            r && r(o);
            {
                const s = os(n)
                  , l = "Message compilation error: ".concat(o.message)
                  , m = o.location && s && Wi(s, o.location.start.offset, o.location.end.offset)
                  , f = e.__v_emitter;
                f && s && f.emit("compile-error", {
                    message: s,
                    error: o.message,
                    start: o.location && o.location.start.offset,
                    end: o.location && o.location.end.offset,
                    groupId: "translate:".concat(a)
                }),
                console.error(m ? "".concat(l, "\n").concat(m) : l)
            }
        }
        ,
        onCacheKey: o=>Bi(t, a, o)
    }
}
function os(e) {
    if (F(e))
        return e;
    if (e.loc && e.loc.source)
        return e.loc.source
}
function ss(e, t, a, n) {
    const {modifiers: i, pluralRules: r, messageResolver: o, fallbackLocale: s, fallbackWarn: l, missingWarn: m, fallbackContext: f} = e
      , p = {
        locale: t,
        modifiers: i,
        pluralRules: r,
        messages: C=>{
            let y = o(a, C);
            if (y == null && f) {
                const [,,S] = mr(f, C, t, s, l, m);
                y = o(S, C)
            }
            if (F(y) || $e(y)) {
                let S = !1;
                const I = fr(e, C, t, y, C, ()=>{
                    S = !0
                }
                );
                return S ? en : I
            } else
                return pe(y) ? y : en
        }
    };
    return e.processor && (p.processor = e.processor),
    n.list && (p.list = n.list),
    n.named && (p.named = n.named),
    ue(n.plural) && (p.pluralIndex = n.plural),
    p
}
const tn = typeof Intl < "u"
  , pr = {
    dateTimeFormat: tn && typeof Intl.DateTimeFormat < "u",
    numberFormat: tn && typeof Intl.NumberFormat < "u"
};
function ls(e, ...t) {
    const {datetimeFormats: a, unresolving: n, fallbackLocale: i, onWarn: r, localeFallbacker: o} = e
      , {__datetimeFormatters: s} = e;
    if (!pr.dateTimeFormat)
        return r(Ie(ie.CANNOT_FORMAT_DATE)),
        Na;
    const [l,m,f,_] = vr(...t)
      , p = oe(f.missingWarn) ? f.missingWarn : e.missingWarn
      , C = oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn
      , y = !!f.part
      , S = $t(e, f)
      , L = o(e, i, S);
    if (!F(l) || l === "")
        return new Intl.DateTimeFormat(S,_).format(m);
    let I = {}, w, g = null, b = S, O = null;
    const h = "datetime format";
    for (let T = 0; T < L.length; T++) {
        if (w = O = L[T],
        S !== w && Wt(C, l) && r(Ie(ie.FALLBACK_TO_DATE_FORMAT, {
            key: l,
            target: w
        })),
        S !== w) {
            const B = e.__v_emitter;
            B && B.emit("fallback", {
                type: h,
                key: l,
                from: b,
                to: O,
                groupId: "".concat(h, ":").concat(l)
            })
        }
        if (I = a[w] || {},
        g = I[l],
        q(g))
            break;
        Kt(e, l, w, p, h),
        b = O
    }
    if (!q(g) || !F(w))
        return n ? Vt : l;
    let A = "".concat(w, "__").concat(l);
    Aa(_) || (A = "".concat(A, "__").concat(JSON.stringify(_)));
    let k = s.get(A);
    return k || (k = new Intl.DateTimeFormat(w,we({}, g, _)),
    s.set(A, k)),
    y ? k.formatToParts(m) : k.format(m)
}
const _r = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function vr(...e) {
    const [t,a,n,i] = e
      , r = {};
    let o = {}, s;
    if (F(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Ee(ae.INVALID_ISO_DATE_ARGUMENT);
        const m = l[3] ? l[3].trim().startsWith("T") ? "".concat(l[1].trim()).concat(l[3].trim()) : "".concat(l[1].trim(), "T").concat(l[3].trim()) : l[1].trim();
        s = new Date(m);
        try {
            s.toISOString()
        } catch (f) {
            throw Ee(ae.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (ji(t)) {
        if (isNaN(t.getTime()))
            throw Ee(ae.INVALID_DATE_ARGUMENT);
        s = t
    } else if (ue(t))
        s = t;
    else
        throw Ee(ae.INVALID_ARGUMENT);
    return F(a) ? r.key = a : q(a) && Object.keys(a).forEach(l=>{
        _r.includes(l) ? o[l] = a[l] : r[l] = a[l]
    }
    ),
    F(n) ? r.locale = n : q(n) && (o = n),
    q(i) && (o = i),
    [r.key || "", s, r, o]
}
function cs(e, t, a) {
    const n = e;
    for (const i in a) {
        const r = "".concat(t, "__").concat(i);
        n.__datetimeFormatters.has(r) && n.__datetimeFormatters.delete(r)
    }
}
function us(e, ...t) {
    const {numberFormats: a, unresolving: n, fallbackLocale: i, onWarn: r, localeFallbacker: o} = e
      , {__numberFormatters: s} = e;
    if (!pr.numberFormat)
        return r(Ie(ie.CANNOT_FORMAT_NUMBER)),
        Na;
    const [l,m,f,_] = hr(...t)
      , p = oe(f.missingWarn) ? f.missingWarn : e.missingWarn
      , C = oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn
      , y = !!f.part
      , S = $t(e, f)
      , L = o(e, i, S);
    if (!F(l) || l === "")
        return new Intl.NumberFormat(S,_).format(m);
    let I = {}, w, g = null, b = S, O = null;
    const h = "number format";
    for (let T = 0; T < L.length; T++) {
        if (w = O = L[T],
        S !== w && Wt(C, l) && r(Ie(ie.FALLBACK_TO_NUMBER_FORMAT, {
            key: l,
            target: w
        })),
        S !== w) {
            const B = e.__v_emitter;
            B && B.emit("fallback", {
                type: h,
                key: l,
                from: b,
                to: O,
                groupId: "".concat(h, ":").concat(l)
            })
        }
        if (I = a[w] || {},
        g = I[l],
        q(g))
            break;
        Kt(e, l, w, p, h),
        b = O
    }
    if (!q(g) || !F(w))
        return n ? Vt : l;
    let A = "".concat(w, "__").concat(l);
    Aa(_) || (A = "".concat(A, "__").concat(JSON.stringify(_)));
    let k = s.get(A);
    return k || (k = new Intl.NumberFormat(w,we({}, g, _)),
    s.set(A, k)),
    y ? k.formatToParts(m) : k.format(m)
}
const br = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function hr(...e) {
    const [t,a,n,i] = e
      , r = {};
    let o = {};
    if (!ue(t))
        throw Ee(ae.INVALID_ARGUMENT);
    const s = t;
    return F(a) ? r.key = a : q(a) && Object.keys(a).forEach(l=>{
        br.includes(l) ? o[l] = a[l] : r[l] = a[l]
    }
    ),
    F(n) ? r.locale = n : q(n) && (o = n),
    q(i) && (o = i),
    [r.key || "", s, r, o]
}
function ds(e, t, a) {
    const n = e;
    for (const i in a) {
        const r = "".concat(t, "__").concat(i);
        n.__numberFormatters.has(r) && n.__numberFormatters.delete(r)
    }
}
const ms = Object.freeze(Object.defineProperty({
    __proto__: null,
    CompileErrorCodes: D,
    CoreErrorCodes: ae,
    CoreWarnCodes: ie,
    DATETIME_FORMAT_OPTIONS_KEYS: _r,
    DEFAULT_LOCALE: Mt,
    DEFAULT_MESSAGE_DATA_TYPE: Gn,
    MISSING_RESOLVE_VALUE: Na,
    NOT_REOSLVED: Vt,
    NUMBER_FORMAT_OPTIONS_KEYS: br,
    VERSION: Zn,
    clearCompileCache: Zo,
    clearDateTimeFormat: cs,
    clearNumberFormat: ds,
    compile: ts,
    compileToFunction: es,
    createCompileError: tt,
    createCoreContext: Yo,
    createCoreError: Ee,
    createMessageContext: zn,
    datetime: ls,
    fallbackWithLocaleChain: Uo,
    fallbackWithSimple: Jn,
    getAdditionalMeta: rr,
    getDevToolsHook: Do,
    getFallbackContext: qo,
    getLocale: $t,
    getWarnMessage: Ie,
    handleMissing: Kt,
    initI18nDevTools: qn,
    isAlmostSameLocale: ya,
    isImplicitFallback: sr,
    isMessageAST: $e,
    isMessageFunction: pe,
    isTranslateFallbackWarn: Wt,
    isTranslateMissingWarn: or,
    number: us,
    parse: Kn,
    parseDateTimeArgs: vr,
    parseNumberArgs: hr,
    parseTranslateArgs: gr,
    registerLocaleFallbacker: Ho,
    registerMessageCompiler: Wo,
    registerMessageResolver: Ko,
    resolveLocale: aa,
    resolveValue: Lo,
    resolveWithKeyValue: Hn,
    setAdditionalMeta: Go,
    setDevToolsHook: Mo,
    setFallbackContext: zo,
    translate: as,
    translateDevTools: Yn,
    updateFallbackLocale: Xo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , fs = Ea(ms)
  , gs = Ea(Qr);
/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
var d = Fi
  , M = fs
  , x = gs;
const Er = "9.13.1"
  , kr = M.CoreWarnCodes.__EXTEND_POINT__
  , Pe = d.incrementer(kr)
  , z = {
    FALLBACK_TO_ROOT: kr,
    NOT_SUPPORTED_PRESERVE: Pe(),
    NOT_SUPPORTED_FORMATTER: Pe(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: Pe(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: Pe(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: Pe(),
    NOT_FOUND_PARENT_SCOPE: Pe(),
    IGNORE_OBJ_FLATTEN: Pe(),
    NOTICE_DROP_ALLOW_COMPOSITION: Pe(),
    NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Pe()
}
  , ps = {
    [z.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
    [z.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
    [z.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
    [z.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
    [z.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
    [z.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
    [z.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
    [z.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
    [z.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
    [z.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function le(e, ...t) {
    return d.format(ps[e], ...t)
}
const Tr = M.CoreErrorCodes.__EXTEND_POINT__
  , se = d.incrementer(Tr)
  , j = {
    UNEXPECTED_RETURN_TYPE: Tr,
    INVALID_ARGUMENT: se(),
    MUST_BE_CALL_SETUP_TOP: se(),
    NOT_INSTALLED: se(),
    NOT_AVAILABLE_IN_LEGACY_MODE: se(),
    REQUIRED_VALUE: se(),
    INVALID_VALUE: se(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: se(),
    NOT_INSTALLED_WITH_PROVIDE: se(),
    UNEXPECTED_ERROR: se(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: se(),
    BRIDGE_SUPPORT_VUE_2_ONLY: se(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: se(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: se(),
    __EXTEND_POINT__: se()
};
function te(e, ...t) {
    return M.createCompileError(e, null, {
        messages: _s,
        args: t
    })
}
const _s = {
    [j.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
    [j.INVALID_ARGUMENT]: "Invalid argument",
    [j.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
    [j.NOT_INSTALLED]: "Need to install with `app.use` function",
    [j.UNEXPECTED_ERROR]: "Unexpected error",
    [j.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
    [j.REQUIRED_VALUE]: "Required in value: {0}",
    [j.INVALID_VALUE]: "Invalid value",
    [j.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
    [j.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
    [j.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
    [j.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
    [j.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
    [j.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}
  , ra = d.makeSymbol("__translateVNode")
  , ia = d.makeSymbol("__datetimeParts")
  , oa = d.makeSymbol("__numberParts")
  , sa = d.makeSymbol("__enableEmitter")
  , la = d.makeSymbol("__disableEmitter")
  , Cr = d.makeSymbol("__setPluralRules");
d.makeSymbol("__intlifyMeta");
const Or = d.makeSymbol("__injectWithOption")
  , ca = d.makeSymbol("__dispose")
  , vs = "__VUE_I18N_BRIDGE__";
function Et(e) {
    if (!d.isObject(e))
        return e;
    for (const t in e)
        if (d.hasOwn(e, t))
            if (!t.includes("."))
                d.isObject(e[t]) && Et(e[t]);
            else {
                const a = t.split(".")
                  , n = a.length - 1;
                let i = e
                  , r = !1;
                for (let o = 0; o < n; o++) {
                    if (a[o]in i || (i[a[o]] = {}),
                    !d.isObject(i[a[o]])) {
                        d.warn(le(z.IGNORE_OBJ_FLATTEN, {
                            key: a[o]
                        })),
                        r = !0;
                        break
                    }
                    i = i[a[o]]
                }
                r || (i[a[n]] = e[t],
                delete e[t]),
                d.isObject(i[a[n]]) && Et(i[a[n]])
            }
    return e
}
function Ht(e, t) {
    const {messages: a, __i18n: n, messageResolver: i, flatJson: r} = t
      , o = d.isPlainObject(a) ? a : d.isArray(n) ? {} : {
        [e]: {}
    };
    if (d.isArray(n) && n.forEach(s=>{
        if ("locale"in s && "resource"in s) {
            const {locale: l, resource: m} = s;
            l ? (o[l] = o[l] || {},
            d.deepCopy(m, o[l])) : d.deepCopy(m, o)
        } else
            d.isString(s) && d.deepCopy(JSON.parse(s), o)
    }
    ),
    i == null && r)
        for (const s in o)
            d.hasOwn(o, s) && Et(o[s]);
    return o
}
function Ar(e) {
    return e.type
}
function Pr(e, t, a) {
    let n = d.isObject(t.messages) ? t.messages : {};
    "__i18nGlobal"in a && (n = Ht(e.locale.value, {
        messages: n,
        __i18n: a.__i18nGlobal
    }));
    const i = Object.keys(n);
    i.length && i.forEach(r=>{
        e.mergeLocaleMessage(r, n[r])
    }
    );
    {
        if (d.isObject(t.datetimeFormats)) {
            const r = Object.keys(t.datetimeFormats);
            r.length && r.forEach(o=>{
                e.mergeDateTimeFormat(o, t.datetimeFormats[o])
            }
            )
        }
        if (d.isObject(t.numberFormats)) {
            const r = Object.keys(t.numberFormats);
            r.length && r.forEach(o=>{
                e.mergeNumberFormat(o, t.numberFormats[o])
            }
            )
        }
    }
}
function an(e) {
    return x.createVNode(x.Text, null, e, 0)
}
const nn = "__INTLIFY_META__"
  , rn = ()=>[]
  , bs = ()=>!1;
let on = 0;
function sn(e) {
    return (t,a,n,i)=>e(a, n, x.getCurrentInstance() || void 0, i)
}
const hs = ()=>{
    const e = x.getCurrentInstance();
    let t = null;
    return e && (t = Ar(e)[nn]) ? {
        [nn]: t
    } : null
}
;
function Sa(e={}, t) {
    const {__root: a, __injectWithOption: n} = e
      , i = a === void 0
      , r = e.flatJson
      , o = d.inBrowser ? x.ref : x.shallowRef
      , s = !!e.translateExistCompatible;
    s && d.warnOnce(le(z.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
    let l = d.isBoolean(e.inheritLocale) ? e.inheritLocale : !0;
    const m = o(a && l ? a.locale.value : d.isString(e.locale) ? e.locale : M.DEFAULT_LOCALE)
      , f = o(a && l ? a.fallbackLocale.value : d.isString(e.fallbackLocale) || d.isArray(e.fallbackLocale) || d.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : m.value)
      , _ = o(Ht(m.value, e))
      , p = o(d.isPlainObject(e.datetimeFormats) ? e.datetimeFormats : {
        [m.value]: {}
    })
      , C = o(d.isPlainObject(e.numberFormats) ? e.numberFormats : {
        [m.value]: {}
    });
    let y = a ? a.missingWarn : d.isBoolean(e.missingWarn) || d.isRegExp(e.missingWarn) ? e.missingWarn : !0
      , S = a ? a.fallbackWarn : d.isBoolean(e.fallbackWarn) || d.isRegExp(e.fallbackWarn) ? e.fallbackWarn : !0
      , L = a ? a.fallbackRoot : d.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0
      , I = !!e.fallbackFormat
      , w = d.isFunction(e.missing) ? e.missing : null
      , g = d.isFunction(e.missing) ? sn(e.missing) : null
      , b = d.isFunction(e.postTranslation) ? e.postTranslation : null
      , O = a ? a.warnHtmlMessage : d.isBoolean(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , h = !!e.escapeParameter;
    const A = a ? a.modifiers : d.isPlainObject(e.modifiers) ? e.modifiers : {};
    let k = e.pluralRules || a && a.pluralRules, T;
    T = (()=>{
        i && M.setFallbackContext(null);
        const v = {
            version: Er,
            locale: m.value,
            fallbackLocale: f.value,
            messages: _.value,
            modifiers: A,
            pluralRules: k,
            missing: g === null ? void 0 : g,
            missingWarn: y,
            fallbackWarn: S,
            fallbackFormat: I,
            unresolving: !0,
            postTranslation: b === null ? void 0 : b,
            warnHtmlMessage: O,
            escapeParameter: h,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        v.datetimeFormats = p.value,
        v.numberFormats = C.value,
        v.__datetimeFormatters = d.isPlainObject(T) ? T.__datetimeFormatters : void 0,
        v.__numberFormatters = d.isPlainObject(T) ? T.__numberFormatters : void 0,
        v.__v_emitter = d.isPlainObject(T) ? T.__v_emitter : void 0;
        const P = M.createCoreContext(v);
        return i && M.setFallbackContext(P),
        P
    }
    )(),
    M.updateFallbackLocale(T, m.value, f.value);
    function ce() {
        return [m.value, f.value, _.value, p.value, C.value]
    }
    const U = x.computed({
        get: ()=>m.value,
        set: v=>{
            m.value = v,
            T.locale = m.value
        }
    })
      , ne = x.computed({
        get: ()=>f.value,
        set: v=>{
            f.value = v,
            T.fallbackLocale = f.value,
            M.updateFallbackLocale(T, m.value, v)
        }
    })
      , at = x.computed(()=>_.value)
      , nt = x.computed(()=>p.value)
      , Te = x.computed(()=>C.value);
    function rt() {
        return d.isFunction(b) ? b : null
    }
    function it(v) {
        b = v,
        T.postTranslation = v
    }
    function ot() {
        return w
    }
    function st(v) {
        v !== null && (g = sn(v)),
        w = v,
        T.missing = g
    }
    function lt(v, P) {
        return v !== "translate" || !P.resolvedMessage
    }
    const fe = (v,P,V,Q,ye,Pt)=>{
        ce();
        let ze;
        try {
            M.setAdditionalMeta(hs()),
            i || (T.fallbackContext = a ? M.getFallbackContext() : void 0),
            ze = v(T)
        } finally {
            M.setAdditionalMeta(null),
            i || (T.fallbackContext = void 0)
        }
        if (V !== "translate exists" && d.isNumber(ze) && ze === M.NOT_REOSLVED || V === "translate exists" && !ze) {
            const [De,Xr] = P();
            if (a && d.isString(De) && lt(V, Xr)) {
                L && (M.isTranslateFallbackWarn(S, De) || M.isTranslateMissingWarn(y, De)) && d.warn(le(z.FALLBACK_TO_ROOT, {
                    key: De,
                    type: V
                }));
                {
                    const {__v_emitter: Fa} = T;
                    Fa && L && Fa.emit("fallback", {
                        type: V,
                        key: De,
                        to: "global",
                        groupId: "".concat(V, ":").concat(De)
                    })
                }
            }
            return a && L ? Q(a) : ye(De)
        } else {
            if (Pt(ze))
                return ze;
            throw te(j.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function Ke(...v) {
        return fe(P=>Reflect.apply(M.translate, null, [P, ...v]), ()=>M.parseTranslateArgs(...v), "translate", P=>Reflect.apply(P.t, P, [...v]), P=>P, P=>d.isString(P))
    }
    function He(...v) {
        const [P,V,Q] = v;
        if (Q && !d.isObject(Q))
            throw te(j.INVALID_ARGUMENT);
        return Ke(P, V, d.assign({
            resolvedMessage: !0
        }, Q || {}))
    }
    function ct(...v) {
        return fe(P=>Reflect.apply(M.datetime, null, [P, ...v]), ()=>M.parseDateTimeArgs(...v), "datetime format", P=>Reflect.apply(P.d, P, [...v]), ()=>M.MISSING_RESOLVE_VALUE, P=>d.isString(P))
    }
    function ut(...v) {
        return fe(P=>Reflect.apply(M.number, null, [P, ...v]), ()=>M.parseNumberArgs(...v), "number format", P=>Reflect.apply(P.n, P, [...v]), ()=>M.MISSING_RESOLVE_VALUE, P=>d.isString(P))
    }
    function dt(v) {
        return v.map(P=>d.isString(P) || d.isNumber(P) || d.isBoolean(P) ? an(String(P)) : P)
    }
    const mt = {
        normalize: dt,
        interpolate: v=>v,
        type: "vnode"
    };
    function Ge(...v) {
        return fe(P=>{
            let V;
            const Q = P;
            try {
                Q.processor = mt,
                V = Reflect.apply(M.translate, null, [Q, ...v])
            } finally {
                Q.processor = null
            }
            return V
        }
        , ()=>M.parseTranslateArgs(...v), "translate", P=>P[ra](...v), P=>[an(P)], P=>d.isArray(P))
    }
    function ft(...v) {
        return fe(P=>Reflect.apply(M.number, null, [P, ...v]), ()=>M.parseNumberArgs(...v), "number format", P=>P[oa](...v), rn, P=>d.isString(P) || d.isArray(P))
    }
    function gt(...v) {
        return fe(P=>Reflect.apply(M.datetime, null, [P, ...v]), ()=>M.parseDateTimeArgs(...v), "datetime format", P=>P[ia](...v), rn, P=>d.isString(P) || d.isArray(P))
    }
    function pt(v) {
        k = v,
        T.pluralRules = k
    }
    function N(v, P) {
        return fe(()=>{
            if (!v)
                return !1;
            const V = d.isString(P) ? P : m.value
              , Q = Me(V)
              , ye = T.messageResolver(Q, v);
            return s ? ye != null : M.isMessageAST(ye) || M.isMessageFunction(ye) || d.isString(ye)
        }
        , ()=>[v], "translate exists", V=>Reflect.apply(V.te, V, [v, P]), bs, V=>d.isBoolean(V))
    }
    function $(v) {
        let P = null;
        const V = M.fallbackWithLocaleChain(T, f.value, m.value);
        for (let Q = 0; Q < V.length; Q++) {
            const ye = _.value[V[Q]] || {}
              , Pt = T.messageResolver(ye, v);
            if (Pt != null) {
                P = Pt;
                break
            }
        }
        return P
    }
    function _t(v) {
        const P = $(v);
        return P != null ? P : a ? a.tm(v) || {} : {}
    }
    function Me(v) {
        return _.value[v] || {}
    }
    function vt(v, P) {
        if (r) {
            const V = {
                [v]: P
            };
            for (const Q in V)
                d.hasOwn(V, Q) && Et(V[Q]);
            P = V[v]
        }
        _.value[v] = P,
        T.messages = _.value
    }
    function Xt(v, P) {
        _.value[v] = _.value[v] || {};
        const V = {
            [v]: P
        };
        if (r)
            for (const Q in V)
                d.hasOwn(V, Q) && Et(V[Q]);
        P = V[v],
        d.deepCopy(P, _.value[v]),
        T.messages = _.value
    }
    function c(v) {
        return p.value[v] || {}
    }
    function u(v, P) {
        p.value[v] = P,
        T.datetimeFormats = p.value,
        M.clearDateTimeFormat(T, v, P)
    }
    function E(v, P) {
        p.value[v] = d.assign(p.value[v] || {}, P),
        T.datetimeFormats = p.value,
        M.clearDateTimeFormat(T, v, P)
    }
    function R(v) {
        return C.value[v] || {}
    }
    function G(v, P) {
        C.value[v] = P,
        T.numberFormats = C.value,
        M.clearNumberFormat(T, v, P)
    }
    function H(v, P) {
        C.value[v] = d.assign(C.value[v] || {}, P),
        T.numberFormats = C.value,
        M.clearNumberFormat(T, v, P)
    }
    on++,
    a && d.inBrowser && (x.watch(a.locale, v=>{
        l && (m.value = v,
        T.locale = v,
        M.updateFallbackLocale(T, m.value, f.value))
    }
    ),
    x.watch(a.fallbackLocale, v=>{
        l && (f.value = v,
        T.fallbackLocale = v,
        M.updateFallbackLocale(T, m.value, f.value))
    }
    ));
    const K = {
        id: on,
        locale: U,
        fallbackLocale: ne,
        get inheritLocale() {
            return l
        },
        set inheritLocale(v) {
            l = v,
            v && a && (m.value = a.locale.value,
            f.value = a.fallbackLocale.value,
            M.updateFallbackLocale(T, m.value, f.value))
        },
        get availableLocales() {
            return Object.keys(_.value).sort()
        },
        messages: at,
        get modifiers() {
            return A
        },
        get pluralRules() {
            return k || {}
        },
        get isGlobal() {
            return i
        },
        get missingWarn() {
            return y
        },
        set missingWarn(v) {
            y = v,
            T.missingWarn = y
        },
        get fallbackWarn() {
            return S
        },
        set fallbackWarn(v) {
            S = v,
            T.fallbackWarn = S
        },
        get fallbackRoot() {
            return L
        },
        set fallbackRoot(v) {
            L = v
        },
        get fallbackFormat() {
            return I
        },
        set fallbackFormat(v) {
            I = v,
            T.fallbackFormat = I
        },
        get warnHtmlMessage() {
            return O
        },
        set warnHtmlMessage(v) {
            O = v,
            T.warnHtmlMessage = v
        },
        get escapeParameter() {
            return h
        },
        set escapeParameter(v) {
            h = v,
            T.escapeParameter = v
        },
        t: Ke,
        getLocaleMessage: Me,
        setLocaleMessage: vt,
        mergeLocaleMessage: Xt,
        getPostTranslationHandler: rt,
        setPostTranslationHandler: it,
        getMissingHandler: ot,
        setMissingHandler: st,
        [Cr]: pt
    };
    return K.datetimeFormats = nt,
    K.numberFormats = Te,
    K.rt = He,
    K.te = N,
    K.tm = _t,
    K.d = ct,
    K.n = ut,
    K.getDateTimeFormat = c,
    K.setDateTimeFormat = u,
    K.mergeDateTimeFormat = E,
    K.getNumberFormat = R,
    K.setNumberFormat = G,
    K.mergeNumberFormat = H,
    K[Or] = n,
    K[ra] = Ge,
    K[ia] = gt,
    K[oa] = ft,
    K[sa] = v=>{
        T.__v_emitter = v
    }
    ,
    K[la] = ()=>{
        T.__v_emitter = void 0
    }
    ,
    K
}
function Es(e) {
    const t = d.isString(e.locale) ? e.locale : M.DEFAULT_LOCALE
      , a = d.isString(e.fallbackLocale) || d.isArray(e.fallbackLocale) || d.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t
      , n = d.isFunction(e.missing) ? e.missing : void 0
      , i = d.isBoolean(e.silentTranslationWarn) || d.isRegExp(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0
      , r = d.isBoolean(e.silentFallbackWarn) || d.isRegExp(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0
      , o = d.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0
      , s = !!e.formatFallbackMessages
      , l = d.isPlainObject(e.modifiers) ? e.modifiers : {}
      , m = e.pluralizationRules
      , f = d.isFunction(e.postTranslation) ? e.postTranslation : void 0
      , _ = d.isString(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0
      , p = !!e.escapeParameterHtml
      , C = d.isBoolean(e.sync) ? e.sync : !0;
    e.formatter && d.warn(le(z.NOT_SUPPORTED_FORMATTER)),
    e.preserveDirectiveContent && d.warn(le(z.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
    let y = e.messages;
    if (d.isPlainObject(e.sharedMessages)) {
        const h = e.sharedMessages;
        y = Object.keys(h).reduce((k,T)=>{
            const B = k[T] || (k[T] = {});
            return d.assign(B, h[T]),
            k
        }
        , y || {})
    }
    const {__i18n: S, __root: L, __injectWithOption: I} = e
      , w = e.datetimeFormats
      , g = e.numberFormats
      , b = e.flatJson
      , O = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: a,
        messages: y,
        flatJson: b,
        datetimeFormats: w,
        numberFormats: g,
        missing: n,
        missingWarn: i,
        fallbackWarn: r,
        fallbackRoot: o,
        fallbackFormat: s,
        modifiers: l,
        pluralRules: m,
        postTranslation: f,
        warnHtmlMessage: _,
        escapeParameter: p,
        messageResolver: e.messageResolver,
        inheritLocale: C,
        translateExistCompatible: O,
        __i18n: S,
        __root: L,
        __injectWithOption: I
    }
}
function ua(e={}, t) {
    {
        const a = Sa(Es(e))
          , {__extender: n} = e
          , i = {
            id: a.id,
            get locale() {
                return a.locale.value
            },
            set locale(r) {
                a.locale.value = r
            },
            get fallbackLocale() {
                return a.fallbackLocale.value
            },
            set fallbackLocale(r) {
                a.fallbackLocale.value = r
            },
            get messages() {
                return a.messages.value
            },
            get datetimeFormats() {
                return a.datetimeFormats.value
            },
            get numberFormats() {
                return a.numberFormats.value
            },
            get availableLocales() {
                return a.availableLocales
            },
            get formatter() {
                return d.warn(le(z.NOT_SUPPORTED_FORMATTER)),
                {
                    interpolate() {
                        return []
                    }
                }
            },
            set formatter(r) {
                d.warn(le(z.NOT_SUPPORTED_FORMATTER))
            },
            get missing() {
                return a.getMissingHandler()
            },
            set missing(r) {
                a.setMissingHandler(r)
            },
            get silentTranslationWarn() {
                return d.isBoolean(a.missingWarn) ? !a.missingWarn : a.missingWarn
            },
            set silentTranslationWarn(r) {
                a.missingWarn = d.isBoolean(r) ? !r : r
            },
            get silentFallbackWarn() {
                return d.isBoolean(a.fallbackWarn) ? !a.fallbackWarn : a.fallbackWarn
            },
            set silentFallbackWarn(r) {
                a.fallbackWarn = d.isBoolean(r) ? !r : r
            },
            get modifiers() {
                return a.modifiers
            },
            get formatFallbackMessages() {
                return a.fallbackFormat
            },
            set formatFallbackMessages(r) {
                a.fallbackFormat = r
            },
            get postTranslation() {
                return a.getPostTranslationHandler()
            },
            set postTranslation(r) {
                a.setPostTranslationHandler(r)
            },
            get sync() {
                return a.inheritLocale
            },
            set sync(r) {
                a.inheritLocale = r
            },
            get warnHtmlInMessage() {
                return a.warnHtmlMessage ? "warn" : "off"
            },
            set warnHtmlInMessage(r) {
                a.warnHtmlMessage = r !== "off"
            },
            get escapeParameterHtml() {
                return a.escapeParameter
            },
            set escapeParameterHtml(r) {
                a.escapeParameter = r
            },
            get preserveDirectiveContent() {
                return d.warn(le(z.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),
                !0
            },
            set preserveDirectiveContent(r) {
                d.warn(le(z.NOT_SUPPORTED_PRESERVE_DIRECTIVE))
            },
            get pluralizationRules() {
                return a.pluralRules || {}
            },
            __composer: a,
            t(...r) {
                const [o,s,l] = r
                  , m = {};
                let f = null
                  , _ = null;
                if (!d.isString(o))
                    throw te(j.INVALID_ARGUMENT);
                const p = o;
                return d.isString(s) ? m.locale = s : d.isArray(s) ? f = s : d.isPlainObject(s) && (_ = s),
                d.isArray(l) ? f = l : d.isPlainObject(l) && (_ = l),
                Reflect.apply(a.t, a, [p, f || _ || {}, m])
            },
            rt(...r) {
                return Reflect.apply(a.rt, a, [...r])
            },
            tc(...r) {
                const [o,s,l] = r
                  , m = {
                    plural: 1
                };
                let f = null
                  , _ = null;
                if (!d.isString(o))
                    throw te(j.INVALID_ARGUMENT);
                const p = o;
                return d.isString(s) ? m.locale = s : d.isNumber(s) ? m.plural = s : d.isArray(s) ? f = s : d.isPlainObject(s) && (_ = s),
                d.isString(l) ? m.locale = l : d.isArray(l) ? f = l : d.isPlainObject(l) && (_ = l),
                Reflect.apply(a.t, a, [p, f || _ || {}, m])
            },
            te(r, o) {
                return a.te(r, o)
            },
            tm(r) {
                return a.tm(r)
            },
            getLocaleMessage(r) {
                return a.getLocaleMessage(r)
            },
            setLocaleMessage(r, o) {
                a.setLocaleMessage(r, o)
            },
            mergeLocaleMessage(r, o) {
                a.mergeLocaleMessage(r, o)
            },
            d(...r) {
                return Reflect.apply(a.d, a, [...r])
            },
            getDateTimeFormat(r) {
                return a.getDateTimeFormat(r)
            },
            setDateTimeFormat(r, o) {
                a.setDateTimeFormat(r, o)
            },
            mergeDateTimeFormat(r, o) {
                a.mergeDateTimeFormat(r, o)
            },
            n(...r) {
                return Reflect.apply(a.n, a, [...r])
            },
            getNumberFormat(r) {
                return a.getNumberFormat(r)
            },
            setNumberFormat(r, o) {
                a.setNumberFormat(r, o)
            },
            mergeNumberFormat(r, o) {
                a.mergeNumberFormat(r, o)
            },
            getChoiceIndex(r, o) {
                return d.warn(le(z.NOT_SUPPORTED_GET_CHOICE_INDEX)),
                -1
            }
        };
        return i.__extender = n,
        i.__enableEmitter = r=>{
            const o = a;
            o[sa] && o[sa](r)
        }
        ,
        i.__disableEmitter = ()=>{
            const r = a;
            r[la] && r[la]()
        }
        ,
        i
    }
}
const Ia = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e=>e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function ks({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n,i)=>[...n, ...i.type === x.Fragment ? i.children : [i]], []) : t.reduce((a,n)=>{
        const i = e[n];
        return i && (a[n] = i()),
        a
    }
    , {})
}
function Lr(e) {
    return x.Fragment
}
const Ts = x.defineComponent({
    name: "i18n-t",
    props: d.assign({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>d.isNumber(e) || !isNaN(e)
        }
    }, Ia),
    setup(e, t) {
        const {slots: a, attrs: n} = t
          , i = e.i18n || Gt({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const r = Object.keys(a).filter(_=>_ !== "_")
              , o = {};
            e.locale && (o.locale = e.locale),
            e.plural !== void 0 && (o.plural = d.isString(e.plural) ? +e.plural : e.plural);
            const s = ks(t, r)
              , l = i[ra](e.keypath, s, o)
              , m = d.assign({}, n)
              , f = d.isString(e.tag) || d.isObject(e.tag) ? e.tag : Lr();
            return x.h(f, m, l)
        }
    }
})
  , ht = Ts
  , Cs = ht;
function Os(e) {
    return d.isArray(e) && !d.isString(e[0])
}
function Nr(e, t, a, n) {
    const {slots: i, attrs: r} = t;
    return ()=>{
        const o = {
            part: !0
        };
        let s = {};
        e.locale && (o.locale = e.locale),
        d.isString(e.format) ? o.key = e.format : d.isObject(e.format) && (d.isString(e.format.key) && (o.key = e.format.key),
        s = Object.keys(e.format).reduce((p,C)=>a.includes(C) ? d.assign({}, p, {
            [C]: e.format[C]
        }) : p, {}));
        const l = n(e.value, o, s);
        let m = [o.key];
        d.isArray(l) ? m = l.map((p,C)=>{
            const y = i[p.type]
              , S = y ? y({
                [p.type]: p.value,
                index: C,
                parts: l
            }) : [p.value];
            return Os(S) && (S[0].key = "".concat(p.type, "-").concat(C)),
            S
        }
        ) : d.isString(l) && (m = [l]);
        const f = d.assign({}, r)
          , _ = d.isString(e.tag) || d.isObject(e.tag) ? e.tag : Lr();
        return x.h(_, f, m)
    }
}
const As = x.defineComponent({
    name: "i18n-n",
    props: d.assign({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Ia),
    setup(e, t) {
        const a = e.i18n || Gt({
            useScope: e.scope,
            __useComponent: !0
        });
        return Nr(e, t, M.NUMBER_FORMAT_OPTIONS_KEYS, (...n)=>a[oa](...n))
    }
})
  , Dt = As
  , Ps = Dt
  , Ls = x.defineComponent({
    name: "i18n-d",
    props: d.assign({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Ia),
    setup(e, t) {
        const a = e.i18n || Gt({
            useScope: e.scope,
            __useComponent: !0
        });
        return Nr(e, t, M.DATETIME_FORMAT_OPTIONS_KEYS, (...n)=>a[ia](...n))
    }
})
  , Ft = Ls
  , Ns = Ft;
function ys(e, t) {
    const a = e;
    if (e.mode === "composition")
        return a.__getInstance(t) || e.global;
    {
        const n = a.__getInstance(t);
        return n != null ? n.__composer : e.global.__composer
    }
}
function yr(e) {
    const t = o=>{
        const {instance: s, modifiers: l, value: m} = o;
        if (!s || !s.$)
            throw te(j.UNEXPECTED_ERROR);
        const f = ys(e, s.$);
        l.preserve && d.warn(le(z.NOT_SUPPORTED_PRESERVE));
        const _ = ln(m);
        return [Reflect.apply(f.t, f, [...cn(_)]), f]
    }
    ;
    return {
        created: (o,s)=>{
            const [l,m] = t(s);
            d.inBrowser && e.global === m && (o.__i18nWatcher = x.watch(m.locale, ()=>{
                s.instance && s.instance.$forceUpdate()
            }
            )),
            o.__composer = m,
            o.textContent = l
        }
        ,
        unmounted: o=>{
            d.inBrowser && o.__i18nWatcher && (o.__i18nWatcher(),
            o.__i18nWatcher = void 0,
            delete o.__i18nWatcher),
            o.__composer && (o.__composer = void 0,
            delete o.__composer)
        }
        ,
        beforeUpdate: (o,{value: s})=>{
            if (o.__composer) {
                const l = o.__composer
                  , m = ln(s);
                o.textContent = Reflect.apply(l.t, l, [...cn(m)])
            }
        }
        ,
        getSSRProps: o=>{
            const [s] = t(o);
            return {
                textContent: s
            }
        }
    }
}
function ln(e) {
    if (d.isString(e))
        return {
            path: e
        };
    if (d.isPlainObject(e)) {
        if (!("path"in e))
            throw te(j.REQUIRED_VALUE, "path");
        return e
    } else
        throw te(j.INVALID_VALUE)
}
function cn(e) {
    const {path: t, locale: a, args: n, choice: i, plural: r} = e
      , o = {}
      , s = n || {};
    return d.isString(a) && (o.locale = a),
    d.isNumber(i) && (o.plural = i),
    d.isNumber(r) && (o.plural = r),
    [t, s, o]
}
function Ss(e, t, ...a) {
    const n = d.isPlainObject(a[0]) ? a[0] : {}
      , i = !!n.useI18nComponentName
      , r = d.isBoolean(n.globalInstall) ? n.globalInstall : !0;
    r && i && d.warn(le(z.COMPONENT_NAME_LEGACY_COMPATIBLE, {
        name: ht.name
    })),
    r && ([i ? "i18n" : ht.name, "I18nT"].forEach(o=>e.component(o, ht)),
    [Dt.name, "I18nN"].forEach(o=>e.component(o, Dt)),
    [Ft.name, "I18nD"].forEach(o=>e.component(o, Ft))),
    e.directive("t", yr(t))
}
function Is(e, t, a) {
    return {
        beforeCreate() {
            const n = x.getCurrentInstance();
            if (!n)
                throw te(j.UNEXPECTED_ERROR);
            const i = this.$options;
            if (i.i18n) {
                const r = i.i18n;
                if (i.__i18n && (r.__i18n = i.__i18n),
                r.__root = t,
                this === this.$root)
                    this.$i18n = un(e, r);
                else {
                    r.__injectWithOption = !0,
                    r.__extender = a.__vueI18nExtend,
                    this.$i18n = ua(r);
                    const o = this.$i18n;
                    o.__extender && (o.__disposer = o.__extender(this.$i18n))
                }
            } else if (i.__i18n)
                if (this === this.$root)
                    this.$i18n = un(e, i);
                else {
                    this.$i18n = ua({
                        __i18n: i.__i18n,
                        __injectWithOption: !0,
                        __extender: a.__vueI18nExtend,
                        __root: t
                    });
                    const r = this.$i18n;
                    r.__extender && (r.__disposer = r.__extender(this.$i18n))
                }
            else
                this.$i18n = e;
            i.__i18nGlobal && Pr(t, i, i),
            this.$t = (...r)=>this.$i18n.t(...r),
            this.$rt = (...r)=>this.$i18n.rt(...r),
            this.$tc = (...r)=>this.$i18n.tc(...r),
            this.$te = (r,o)=>this.$i18n.te(r, o),
            this.$d = (...r)=>this.$i18n.d(...r),
            this.$n = (...r)=>this.$i18n.n(...r),
            this.$tm = r=>this.$i18n.tm(r),
            a.__setInstance(n, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const n = x.getCurrentInstance();
            if (!n)
                throw te(j.UNEXPECTED_ERROR);
            const i = this.$i18n;
            delete this.$t,
            delete this.$rt,
            delete this.$tc,
            delete this.$te,
            delete this.$d,
            delete this.$n,
            delete this.$tm,
            i.__disposer && (i.__disposer(),
            delete i.__disposer,
            delete i.__extender),
            a.__deleteInstance(n),
            delete this.$i18n
        }
    }
}
function un(e, t) {
    e.locale = t.locale || e.locale,
    e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
    e.missing = t.missing || e.missing,
    e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
    e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
    e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
    e.postTranslation = t.postTranslation || e.postTranslation,
    e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
    e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
    e.sync = t.sync || e.sync,
    e.__composer[Cr](t.pluralizationRules || e.pluralizationRules);
    const a = Ht(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(a).forEach(n=>e.mergeLocaleMessage(n, a[n])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n, t.datetimeFormats[n])),
    t.numberFormats && Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n, t.numberFormats[n])),
    e
}
const Sr = d.makeSymbol("global-vue-i18n");
function ws(e={}, t) {
    const a = d.isBoolean(e.legacy) ? e.legacy : !0
      , n = d.isBoolean(e.globalInjection) ? e.globalInjection : !0
      , i = a ? !!e.allowComposition : !0
      , r = new Map
      , [o,s] = Ms(e, a)
      , l = d.makeSymbol("vue-i18n");
    a && i && d.warn(le(z.NOTICE_DROP_ALLOW_COMPOSITION));
    function m(p) {
        return r.get(p) || null
    }
    function f(p, C) {
        r.set(p, C)
    }
    function _(p) {
        r.delete(p)
    }
    {
        const p = {
            get mode() {
                return a ? "legacy" : "composition"
            },
            get allowComposition() {
                return i
            },
            async install(C, ...y) {
                if (C.__VUE_I18N_SYMBOL__ = l,
                C.provide(C.__VUE_I18N_SYMBOL__, p),
                d.isPlainObject(y[0])) {
                    const I = y[0];
                    p.__composerExtend = I.__composerExtend,
                    p.__vueI18nExtend = I.__vueI18nExtend
                }
                let S = null;
                !a && n && (S = Ws(C, p.global)),
                Ss(C, p, ...y),
                a && C.mixin(Is(s, s.__composer, p));
                const L = C.unmount;
                C.unmount = ()=>{
                    S && S(),
                    p.dispose(),
                    L()
                }
            },
            get global() {
                return s
            },
            dispose() {
                o.stop()
            },
            __instances: r,
            __getInstance: m,
            __setInstance: f,
            __deleteInstance: _
        };
        return p
    }
}
function Gt(e={}) {
    const t = x.getCurrentInstance();
    if (t == null)
        throw te(j.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw te(j.NOT_INSTALLED);
    const a = Ds(t)
      , n = xs(a)
      , i = Ar(t)
      , r = Fs(e, i);
    if (a.mode === "legacy" && !e.__useComponent) {
        if (!a.allowComposition)
            throw te(j.NOT_AVAILABLE_IN_LEGACY_MODE);
        return $s(t, r, n, e)
    }
    if (r === "global")
        return Pr(n, e, i),
        n;
    if (r === "parent") {
        let l = Bs(a, t, e.__useComponent);
        return l == null && (d.warn(le(z.NOT_FOUND_PARENT_SCOPE)),
        l = n),
        l
    }
    const o = a;
    let s = o.__getInstance(t);
    if (s == null) {
        const l = d.assign({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        n && (l.__root = n),
        s = Sa(l),
        o.__composerExtend && (s[ca] = o.__composerExtend(s)),
        js(o, t, s),
        o.__setInstance(t, s)
    }
    return s
}
const Rs = e=>{
    if (!(vs in e))
        throw te(j.NOT_COMPATIBLE_LEGACY_VUE_I18N);
    return e
}
;
function Ms(e, t, a) {
    const n = x.effectScope();
    {
        const i = t ? n.run(()=>ua(e)) : n.run(()=>Sa(e));
        if (i == null)
            throw te(j.UNEXPECTED_ERROR);
        return [n, i]
    }
}
function Ds(e) {
    {
        const t = x.inject(e.isCE ? Sr : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw te(e.isCE ? j.NOT_INSTALLED_WITH_PROVIDE : j.UNEXPECTED_ERROR);
        return t
    }
}
function Fs(e, t) {
    return d.isEmptyObject(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function xs(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function Bs(e, t, a=!1) {
    let n = null;
    const i = t.root;
    let r = Us(t, a);
    for (; r != null; ) {
        const o = e;
        if (e.mode === "composition")
            n = o.__getInstance(r);
        else {
            const s = o.__getInstance(r);
            s != null && (n = s.__composer,
            a && n && !n[Or] && (n = null))
        }
        if (n != null || i === r)
            break;
        r = r.parent
    }
    return n
}
function Us(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function js(e, t, a) {
    x.onMounted(()=>{}
    , t),
    x.onUnmounted(()=>{
        const n = a;
        e.__deleteInstance(t);
        const i = n[ca];
        i && (i(),
        delete n[ca])
    }
    , t)
}
function $s(e, t, a, n={}) {
    const i = t === "local"
      , r = x.shallowRef(null);
    if (i && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
        throw te(j.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const o = d.isBoolean(n.inheritLocale) ? n.inheritLocale : !d.isString(n.locale)
      , s = x.ref(!i || o ? a.locale.value : d.isString(n.locale) ? n.locale : M.DEFAULT_LOCALE)
      , l = x.ref(!i || o ? a.fallbackLocale.value : d.isString(n.fallbackLocale) || d.isArray(n.fallbackLocale) || d.isPlainObject(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : s.value)
      , m = x.ref(Ht(s.value, n))
      , f = x.ref(d.isPlainObject(n.datetimeFormats) ? n.datetimeFormats : {
        [s.value]: {}
    })
      , _ = x.ref(d.isPlainObject(n.numberFormats) ? n.numberFormats : {
        [s.value]: {}
    })
      , p = i ? a.missingWarn : d.isBoolean(n.missingWarn) || d.isRegExp(n.missingWarn) ? n.missingWarn : !0
      , C = i ? a.fallbackWarn : d.isBoolean(n.fallbackWarn) || d.isRegExp(n.fallbackWarn) ? n.fallbackWarn : !0
      , y = i ? a.fallbackRoot : d.isBoolean(n.fallbackRoot) ? n.fallbackRoot : !0
      , S = !!n.fallbackFormat
      , L = d.isFunction(n.missing) ? n.missing : null
      , I = d.isFunction(n.postTranslation) ? n.postTranslation : null
      , w = i ? a.warnHtmlMessage : d.isBoolean(n.warnHtmlMessage) ? n.warnHtmlMessage : !0
      , g = !!n.escapeParameter
      , b = i ? a.modifiers : d.isPlainObject(n.modifiers) ? n.modifiers : {}
      , O = n.pluralRules || i && a.pluralRules;
    function h() {
        return [s.value, l.value, m.value, f.value, _.value]
    }
    const A = x.computed({
        get: ()=>r.value ? r.value.locale.value : s.value,
        set: N=>{
            r.value && (r.value.locale.value = N),
            s.value = N
        }
    })
      , k = x.computed({
        get: ()=>r.value ? r.value.fallbackLocale.value : l.value,
        set: N=>{
            r.value && (r.value.fallbackLocale.value = N),
            l.value = N
        }
    })
      , T = x.computed(()=>r.value ? r.value.messages.value : m.value)
      , B = x.computed(()=>f.value)
      , ce = x.computed(()=>_.value);
    function U() {
        return r.value ? r.value.getPostTranslationHandler() : I
    }
    function ne(N) {
        r.value && r.value.setPostTranslationHandler(N)
    }
    function at() {
        return r.value ? r.value.getMissingHandler() : L
    }
    function nt(N) {
        r.value && r.value.setMissingHandler(N)
    }
    function Te(N) {
        return h(),
        N()
    }
    function rt(...N) {
        return r.value ? Te(()=>Reflect.apply(r.value.t, null, [...N])) : Te(()=>"")
    }
    function it(...N) {
        return r.value ? Reflect.apply(r.value.rt, null, [...N]) : ""
    }
    function ot(...N) {
        return r.value ? Te(()=>Reflect.apply(r.value.d, null, [...N])) : Te(()=>"")
    }
    function st(...N) {
        return r.value ? Te(()=>Reflect.apply(r.value.n, null, [...N])) : Te(()=>"")
    }
    function lt(N) {
        return r.value ? r.value.tm(N) : {}
    }
    function fe(N, $) {
        return r.value ? r.value.te(N, $) : !1
    }
    function Ke(N) {
        return r.value ? r.value.getLocaleMessage(N) : {}
    }
    function He(N, $) {
        r.value && (r.value.setLocaleMessage(N, $),
        m.value[N] = $)
    }
    function ct(N, $) {
        r.value && r.value.mergeLocaleMessage(N, $)
    }
    function ut(N) {
        return r.value ? r.value.getDateTimeFormat(N) : {}
    }
    function dt(N, $) {
        r.value && (r.value.setDateTimeFormat(N, $),
        f.value[N] = $)
    }
    function At(N, $) {
        r.value && r.value.mergeDateTimeFormat(N, $)
    }
    function mt(N) {
        return r.value ? r.value.getNumberFormat(N) : {}
    }
    function Ge(N, $) {
        r.value && (r.value.setNumberFormat(N, $),
        _.value[N] = $)
    }
    function ft(N, $) {
        r.value && r.value.mergeNumberFormat(N, $)
    }
    const gt = {
        get id() {
            return r.value ? r.value.id : -1
        },
        locale: A,
        fallbackLocale: k,
        messages: T,
        datetimeFormats: B,
        numberFormats: ce,
        get inheritLocale() {
            return r.value ? r.value.inheritLocale : o
        },
        set inheritLocale(N) {
            r.value && (r.value.inheritLocale = N)
        },
        get availableLocales() {
            return r.value ? r.value.availableLocales : Object.keys(m.value)
        },
        get modifiers() {
            return r.value ? r.value.modifiers : b
        },
        get pluralRules() {
            return r.value ? r.value.pluralRules : O
        },
        get isGlobal() {
            return r.value ? r.value.isGlobal : !1
        },
        get missingWarn() {
            return r.value ? r.value.missingWarn : p
        },
        set missingWarn(N) {
            r.value && (r.value.missingWarn = N)
        },
        get fallbackWarn() {
            return r.value ? r.value.fallbackWarn : C
        },
        set fallbackWarn(N) {
            r.value && (r.value.missingWarn = N)
        },
        get fallbackRoot() {
            return r.value ? r.value.fallbackRoot : y
        },
        set fallbackRoot(N) {
            r.value && (r.value.fallbackRoot = N)
        },
        get fallbackFormat() {
            return r.value ? r.value.fallbackFormat : S
        },
        set fallbackFormat(N) {
            r.value && (r.value.fallbackFormat = N)
        },
        get warnHtmlMessage() {
            return r.value ? r.value.warnHtmlMessage : w
        },
        set warnHtmlMessage(N) {
            r.value && (r.value.warnHtmlMessage = N)
        },
        get escapeParameter() {
            return r.value ? r.value.escapeParameter : g
        },
        set escapeParameter(N) {
            r.value && (r.value.escapeParameter = N)
        },
        t: rt,
        getPostTranslationHandler: U,
        setPostTranslationHandler: ne,
        getMissingHandler: at,
        setMissingHandler: nt,
        rt: it,
        d: ot,
        n: st,
        tm: lt,
        te: fe,
        getLocaleMessage: Ke,
        setLocaleMessage: He,
        mergeLocaleMessage: ct,
        getDateTimeFormat: ut,
        setDateTimeFormat: dt,
        mergeDateTimeFormat: At,
        getNumberFormat: mt,
        setNumberFormat: Ge,
        mergeNumberFormat: ft
    };
    function pt(N) {
        N.locale.value = s.value,
        N.fallbackLocale.value = l.value,
        Object.keys(m.value).forEach($=>{
            N.mergeLocaleMessage($, m.value[$])
        }
        ),
        Object.keys(f.value).forEach($=>{
            N.mergeDateTimeFormat($, f.value[$])
        }
        ),
        Object.keys(_.value).forEach($=>{
            N.mergeNumberFormat($, _.value[$])
        }
        ),
        N.escapeParameter = g,
        N.fallbackFormat = S,
        N.fallbackRoot = y,
        N.fallbackWarn = C,
        N.missingWarn = p,
        N.warnHtmlMessage = w
    }
    return x.onBeforeMount(()=>{
        if (e.proxy == null || e.proxy.$i18n == null)
            throw te(j.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const N = r.value = e.proxy.$i18n.__composer;
        t === "global" ? (s.value = N.locale.value,
        l.value = N.fallbackLocale.value,
        m.value = N.messages.value,
        f.value = N.datetimeFormats.value,
        _.value = N.numberFormats.value) : i && pt(N)
    }
    ),
    gt
}
const Vs = ["locale", "fallbackLocale", "availableLocales"]
  , dn = ["t", "rt", "d", "n", "tm", "te"];
function Ws(e, t) {
    const a = Object.create(null);
    return Vs.forEach(i=>{
        const r = Object.getOwnPropertyDescriptor(t, i);
        if (!r)
            throw te(j.UNEXPECTED_ERROR);
        const o = x.isRef(r.value) ? {
            get() {
                return r.value.value
            },
            set(s) {
                r.value.value = s
            }
        } : {
            get() {
                return r.get && r.get()
            }
        };
        Object.defineProperty(a, i, o)
    }
    ),
    e.config.globalProperties.$i18n = a,
    dn.forEach(i=>{
        const r = Object.getOwnPropertyDescriptor(t, i);
        if (!r || !r.value)
            throw te(j.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, "$".concat(i), r)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        dn.forEach(i=>{
            delete e.config.globalProperties["$".concat(i)]
        }
        )
    }
}
M.registerMessageCompiler(M.compile);
M.registerMessageResolver(M.resolveValue);
M.registerLocaleFallbacker(M.fallbackWithLocaleChain);
{
    const e = d.getGlobalThis();
    e.__INTLIFY__ = !0,
    M.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
me.DatetimeFormat = Ft;
me.I18nD = Ns;
me.I18nInjectionKey = Sr;
me.I18nN = Ps;
me.I18nT = Cs;
me.NumberFormat = Dt;
me.Translation = ht;
me.VERSION = Er;
me.castToVueI18n = Rs;
me.createI18n = ws;
me.useI18n = Gt;
me.vTDirective = yr;
var Ks = me;
const Hs = {
    title: "🇨🇳 中文简体",
    首页: "首页",
    订单: "订单",
    任务: "任务",
    客服: "客服",
    我的: "我的",
    每日任务: "每日任务",
    紧急任务佣金更高: "紧急任务佣金更高",
    开始抢单: "开始抢单",
    可喜可贺: "可喜可贺",
    用户: "用户",
    等级升级到了: "等级升级到了",
    即刻升级: "即刻升级",
    合作品牌: "合作品牌",
    品牌友好合作伙伴: "品牌友好合作伙伴",
    服务中心: "服务中心",
    "还有别的问题，请移步客服中心": "还有别的问题，请移步客服中心",
    邀请好友: "邀请好友",
    FAQ: "FAQ",
    "条款&协议": "条款&协议",
    关于: "关于",
    常见问题: "常见问题",
    通过FAQ了解更多信息: "通过FAQ了解更多信息",
    "如何充值？": "如何充值？",
    "如何提现？": "如何提现？",
    "如何升级会员等级？": "如何升级会员等级？",
    "如何提升每日任务数量？": "如何提升每日任务数量？",
    "如何解除被冻结的任务？": "如何解除被冻结的任务？",
    联系我们: "联系我们",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。",
    联系客服: "联系客服",
    营运时间: "营运时间",
    邀请朋友获得佣金: "邀请朋友获得佣金",
    推广码: "推广码",
    复制邀请链接: "复制邀请链接",
    复制成功: "复制成功",
    完成时间: "完成时间",
    尚未完成: "尚未完成",
    待处理: "待处理",
    冻结中: "冻结中",
    已完成: "已完成",
    全部订单: "全部订单",
    单价: "单价",
    订单数量: "订单数量",
    总计: "总计",
    订单佣金: "订单佣金",
    订单评星: "订单评星",
    提交订单: "提交订单",
    已评价: "已评价",
    评价: "评价",
    加载完成: "加载完成",
    已绑定银行卡: "已绑定银行卡",
    取消绑定: "取消绑定",
    银行: "银行",
    持卡人姓名: "持卡人姓名",
    请输入: "请输入",
    银行卡号: "银行卡号",
    提现密码: "提现密码",
    "确定删除此银行卡？": "确定删除此银行卡？",
    确认添加: "确认添加",
    绑定银行卡: "绑定银行卡",
    提现: "提现",
    提现金额: "提现金额",
    提现银行卡: "提现银行卡",
    新增: "新增",
    更换: "更换",
    确认提现: "确认提现",
    充值金额: "充值金额",
    输入或者选择充值金额: "输入或者选择充值金额",
    请选择付款方式: "请选择付款方式",
    请选择支付银行: "请选择支付银行",
    确认充值: "确认充值",
    提现地址: "提现地址",
    绑定钱包地址: "绑定钱包地址",
    已绑定钱包地址: "已绑定钱包地址",
    地址: "地址",
    地址类型: "地址类型",
    备注: "备注",
    "確定刪除此地址？": "確定刪除此地址？",
    我的余额: "我的余额",
    充值渠道: "充值渠道",
    充值数量: "充值数量",
    充值凭证: "充值凭证",
    复制: "复制",
    任务收益: "任务收益",
    团队收益: "团队收益",
    完成任务获取收益: "完成任务获取收益",
    去完成: "去完成",
    去邀请: "去邀请",
    欢迎使用: "欢迎使用",
    请登录或创建您的账号: "请登录或创建您的账号",
    登录: "登录",
    创建账号: "创建账号",
    登录密码: "登录密码",
    退出登录: "退出登录",
    提示: "提示",
    确认退出登录: "确认退出登录",
    修改登录密码: "修改登录密码",
    旧密码: "旧密码",
    新密码: "新密码",
    确认密码: "确认密码",
    确认修改: "确认修改",
    修改提现密码: "修改提现密码",
    确认提现密码: "确认提现密码",
    忘记密码: "忘记密码",
    重置密码: "重置密码",
    验证码: "验证码",
    获取验证码: "获取验证码",
    密码: "密码",
    确认重置: "确认重置",
    创建账户: "创建账户",
    "邀请码（选填）": "邀请码（选填）",
    确认注册: "确认注册",
    每日订单: "每日订单",
    佣金比例: "佣金比例",
    获得佣金: "获得佣金",
    冻结金额: "冻结金额",
    完成订单: "完成订单",
    可用余额: "可用余额",
    订单说明: "订单说明",
    "正在接取任务...": "正在接取任务...",
    订单任务: "订单任务",
    确认: "确认",
    "确定退出任务接取吗？": "确定退出任务接取吗？",
    取消的任务将会在任务列表自动冻结: "取消的任务将会在任务列表自动冻结",
    继续完成: "继续完成",
    确认退出: "确认退出",
    会员中心: "会员中心",
    团队报表: "团队报表",
    我的账户: "我的账户",
    选择语言: "选择语言",
    充值: "充值",
    邀请码: "邀请码",
    账户余额: "账户余额",
    冻结余额: "冻结余额",
    会员权益: "会员权益",
    当前等级: "当前等级",
    已经超越: "已经超越",
    等待升级: "等待升级",
    请登录账号: "请登录账号",
    手机号码: "手机号码",
    输入密码: "输入密码",
    请输入密码: "请输入密码",
    任务满意度: "任务满意度",
    任务评价: "任务评价",
    选择: "选择",
    提交: "提交",
    设置: "设置",
    个人头像: "个人头像",
    用户昵称: "用户昵称",
    订单评价: "订单评价",
    账单明细: "账单明细",
    您好: "您好",
    邀请人数: "邀请人数",
    消息: "消息",
    设置提现密码: "设置提现密码",
    新提现密码: "新提现密码",
    确认新提现密码: "确认新提现密码",
    每个账户每天可以匹配10个订单: "每个账户每天可以匹配10个订单",
    "下单佣金统一为订单金额的10%": "下单佣金统一为订单金额的10%",
    "系统基于LBS技术，通过云端自动匹配商品": "系统基于LBS技术，通过云端自动匹配商品",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。",
    注册协议: "注册协议",
    Pix账号: "Pix账号",
    "确定删除此pix账号吗？": "确定删除此pix账号吗？",
    绑定Pix: "绑定Pix",
    已绑定Pix: "已绑定Pix",
    Pix类型: "Pix类型",
    确定: "确定",
    取消: "取消",
    "加载中...": "加载中...",
    到账金额: "到账金额",
    信誉分: "信誉分"
}
  , Gs = {
    title: "🇺🇸 English",
    首页: "Home",
    订单: "Orders",
    任务: "Tasks",
    客服: "Service",
    我的: "My",
    每日任务: "Daily Tasks",
    紧急任务佣金更高: "Urgent tasks have higher commissions",
    开始抢单: "Start Grabbing Orders",
    可喜可贺: "Congratulations!",
    用户: "User",
    等级升级到了: " has been upgraded to ",
    即刻升级: "Upgrade now",
    合作品牌: "Partnership Brands",
    品牌友好合作伙伴: "Brand Friendly Partner",
    服务中心: "Service Center",
    "还有别的问题，请移步客服中心": "If you have any other questions, please go to the customer service center",
    邀请好友: "Invite Friends",
    FAQ: "FAQ",
    "条款&协议": "Terms & Agreements",
    关于: "About ",
    常见问题: "Frequently Asked Questions",
    通过FAQ了解更多信息: "Learn more information through FAQ",
    "如何充值？": "How to recharge?",
    "如何提现？": "How to withdraw?",
    "如何升级会员等级？": "How to upgrade membership level?",
    "如何提升每日任务数量？": "How to increase the number of daily tasks?",
    "如何解除被冻结的任务？": "How to unfreeze a frozen task?",
    联系我们: "Contact us",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Welcome to use! If you encounter any problems with deposit and withdrawal during use, please contact our customer service team.",
    联系客服: "Contact customer service",
    营运时间: "Operating hours",
    邀请朋友获得佣金: "Invite friends to get commission",
    推广码: "Promotion code",
    复制邀请链接: "Copy invitation link",
    复制成功: "Copy success",
    完成时间: "Completion time",
    尚未完成: "Not yet completed",
    待处理: "Pending",
    冻结中: "Frozen",
    已完成: "Completed",
    全部订单: "All orders",
    单价: "Unit price",
    订单数量: "Order quantity",
    总计: "Total",
    订单佣金: "Order commission",
    订单评星: "Order rating",
    提交订单: "Submit order",
    已评价: "Already evaluated",
    评价: "Evaluate",
    加载完成: "Loading finished",
    已绑定银行卡: "Bank account already bound",
    取消绑定: "Unbind",
    银行: "Bank Name",
    持卡人姓名: "Bank Account Name",
    请输入: "Please enter",
    银行卡号: "Bank Account Number",
    提现密码: "Withdrawal Password",
    "确定删除此银行卡？": "Are you sure you want to delete this bank card?",
    确认添加: "Confirm add",
    绑定银行卡: "Withdrawal bank Account",
    提现: "Withdraw",
    提现金额: "Withdrawal amount",
    提现银行卡: "Withdrawal bank Account",
    新增: "New",
    更换: "Replace",
    确认提现: "Confirm withdrawal",
    充值金额: "Top-up amount",
    输入或者选择充值金额: "Enter or select top-up amount",
    请选择付款方式: "Please select payment method",
    请选择支付银行: "Please select payment bank",
    确认充值: "Confirm deposit",
    提现地址: "Withdrawal address",
    绑定钱包地址: "Bind wallet address",
    已绑定钱包地址: "Bound wallet address",
    地址: "Address",
    地址类型: "Address type",
    备注: "Note",
    "確定刪除此地址？": "Confirm to delete this address?",
    我的余额: "My balance",
    充值渠道: "Deposit channel",
    充值数量: "Deposit amount",
    充值凭证: "Recharge voucher",
    复制: "Copy",
    任务收益: "Task income",
    团队收益: "Team income",
    完成任务获取收益: "Get income by completing tasks",
    去完成: "Go to complete",
    去邀请: "Go to invite",
    欢迎使用: "Welcome to",
    请登录或创建您的账号: "Please log in or create your account",
    登录: "Log in",
    创建账号: "Create an account",
    登录密码: "Login password",
    退出登录: "Log out",
    提示: "Notice",
    确认退出登录: "Confirm log out",
    修改登录密码: "Change login password",
    旧密码: "Old password",
    新密码: "New password",
    确认密码: "Confirm password",
    确认修改: "Confirm change",
    修改提现密码: "Change withdrawal password",
    确认提现密码: "Confirm withdrawal password",
    忘记密码: "Forgot Password",
    重置密码: "Reset Password",
    验证码: "Verification Code",
    获取验证码: "Get Verification Code",
    密码: "Password",
    确认重置: "Confirm Reset",
    创建账户: "Create Account",
    "邀请码（选填）": "Invitation Code (Optional)",
    确认注册: "Confirm Registration",
    每日订单: "Daily Orders",
    佣金比例: "Commission Ratio",
    获得佣金: "Earned Commissions",
    冻结金额: "Frozen amount",
    完成订单: "Completed order",
    可用余额: "Available balance",
    订单说明: "Order description",
    "正在接取任务...": "Accepting the task...",
    订单任务: "Order task",
    确认: "Confirm",
    "确定退出任务接取吗？": "Are you sure you want to quit the task accepting?",
    取消的任务将会在任务列表自动冻结: "The cancelled task will be automatically frozen in the task list",
    继续完成: "Continue",
    确认退出: "Confirm Logout",
    会员中心: "Member Center",
    团队报表: "Team Report",
    我的账户: "My Account",
    选择语言: "Select Language",
    充值: "Deposit",
    邀请码: "Invitation Code",
    账户余额: "Account Balance",
    冻结余额: "Frozen Balance",
    会员权益: "Member Benefits",
    当前等级: "Current Level",
    已经超越: "Surpassed",
    等待升级: "Waiting for upgrade",
    请登录账号: "Please log in to your account",
    手机号码: "Mobile phone number",
    输入密码: "Enter password",
    请输入密码: "Please enter your password",
    任务满意度: "Task satisfaction",
    任务评价: "Task evaluation",
    选择: "Select",
    提交: "Submit",
    设置: "Settings",
    个人头像: "Profile photo",
    用户昵称: "User nickname",
    订单评价: "Order evaluation",
    账单明细: "Bill details",
    您好: "Hello",
    邀请人数: "Number of Invitations",
    消息: "Messages",
    设置提现密码: "Set Withdraw Password",
    新提现密码: "New Withdraw Password",
    确认新提现密码: "Confirm New Withdraw Password",
    每个账户每天可以匹配10个订单: "Each account can match 10 orders per day",
    "下单佣金统一为订单金额的10%": "The commission for placing an order is uniform and equals to 10% of the total order amount",
    "系统基于LBS技术，通过云端自动匹配商品": "The system is based on LBS technology and automatically matches goods through cloud computing",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "In order to prevent platform supervision, if the order is not confirmed and submitted within 30 minutes, the system will freeze the order amount",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "You cannot cancel the task. You must first complete any existing unfinished tasks before you can receive new ones.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "When the platform matches orders for users, it will submit the order information to the merchant background. If the user does not submit the order within 30 minutes, the order amount will be frozen by the system. In order to avoid regulatory systems, user accounts will be evaluated, which will directly affect the user's next matching time and reputation! Please click stop placing order in time to avoid timeout freeze.",
    注册协议: "Registration Agreement",
    Pix账号: "Pix account",
    "确定删除此pix账号吗？": "Are you sure to delete this pix account?",
    绑定Pix: "Bind Pix",
    已绑定Pix: "Bound to Pix",
    Pix类型: "Pix type",
    确定: "Determinar",
    取消: "Cancel",
    "加载中...": "Loading...",
    到账金额: "Credited Amount",
    信誉分: "Credit score"
}
  , zs = {
    title: "🇩🇪 Germany",
    首页: "Startseite",
    订单: "Bestellungen",
    任务: "Aufgabe",
    客服: "Kundendienst",
    我的: "Mein",
    每日任务: "Tägliche Aufgaben",
    紧急任务佣金更高: "Dringende Aufgaben haben höhere Provisionen",
    开始抢单: "Starte mit dem Auftragsfang",
    可喜可贺: "Herzlichen Glückwunsch!",
    用户: "Benutzer",
    等级升级到了: " wurde aufgestuft zu ",
    即刻升级: "Jetzt aufstufen",
    合作品牌: "Partnerschaftsmarken",
    品牌友好合作伙伴: "Markenfreundlicher Partner",
    服务中心: "Servicezentrum",
    "还有别的问题，请移步客服中心": "Wenn Sie weitere Fragen haben, gehen Sie bitte zum Kundenservice-Center",
    邀请好友: "Freunde einladen",
    FAQ: "FAQ",
    "条款&协议": "Bedingungen & Vereinbarungen",
    关于: "Über ",
    常见问题: "Häufig gestellte Fragen",
    通过FAQ了解更多信息: "Erfahren Sie mehr Informationen durch FAQ",
    "如何充值？": "Wie kann ich aufladen?",
    "如何提现？": "Wie kann ich abheben?",
    "如何升级会员等级？": "Wie kann ich die Mitgliedschaftsstufe erhöhen?",
    "如何提升每日任务数量？": "Wie kann ich die Anzahl der täglichen Aufgaben erhöhen?",
    "如何解除被冻结的任务？": "Wie kann ich eine eingefrorene Aufgabe entsperren?",
    联系我们: "Kontaktiere uns",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Willkommen bei uns! Wenn Sie während der Nutzung Probleme mit Einzahlungen und Auszahlungen haben, wenden Sie sich bitte an unser Kundenserviceteam.",
    联系客服: "Kontaktiere den Kundenservice",
    营运时间: "Betriebszeiten",
    邀请朋友获得佣金: "Laden Sie Freunde ein, um Provisionen zu erhalten",
    推广码: "Promotionscode",
    复制邀请链接: "Kopieren Sie den Einladungslink",
    复制成功: "Kopieren erfolgreich",
    完成时间: "Fertigstellungszeit",
    尚未完成: "Noch nicht abgeschlossen",
    待处理: "Ausstehend",
    冻结中: "Gefroren",
    已完成: "Abgeschlossen",
    全部订单: "Alle Bestellungen",
    单价: "Stückpreis",
    订单数量: "Bestellmenge",
    总计: "Gesamt",
    订单佣金: "Bestellprovision",
    订单评星: "Bestellbewertung",
    提交订单: "Bestellung abschicken",
    已评价: "Bereits bewertet",
    评价: "Bewerten",
    加载完成: "Laden abgeschlossen",
    已绑定银行卡: "Bankkarte bereits gebunden",
    取消绑定: "Entbinden",
    银行: "Bank",
    持卡人姓名: "Name des Karteninhabers",
    请输入: "Bitte eingeben",
    银行卡号: "Bankkartennummer",
    提现密码: "Abhebungspasswort",
    "确定删除此银行卡？": "Sind Sie sicher, dass Sie diese Bankkarte löschen möchten?",
    确认添加: "Hinzufügen bestätigen",
    绑定银行卡: "Bankkarte binden",
    提现: "Abheben",
    提现金额: "Abhebungsbetrag",
    提现银行卡: "Abhebungsbankkarte",
    新增: "Neu",
    更换: "Ersetzen",
    确认提现: "Abhebung bestätigen",
    充值金额: "Aufladebetrag",
    输入或者选择充值金额: "Geben Sie den Aufladebetrag ein oder wählen Sie ihn aus",
    请选择付款方式: "Bitte wählen Sie die Zahlungsmethode",
    请选择支付银行: "Bitte wählen Sie die Zahlungsbank",
    确认充值: "Aufladung bestätigen",
    提现地址: "Abhebungsadresse",
    绑定钱包地址: "Wallet-Adresse binden",
    已绑定钱包地址: "Gebundene Wallet-Adresse",
    地址: "Adresse",
    地址类型: "Adresstyp",
    备注: "Bemerkung",
    "確定刪除此地址？": "Möchten Sie diese Adresse wirklich löschen?",
    我的余额: "Mein Kontostand",
    充值渠道: "Aufladekanal",
    充值数量: "Aufladebetrag",
    充值凭证: "Auflade-Gutschein",
    复制: "Kopieren",
    任务收益: "Aufgaben-Einkommen",
    团队收益: "Team-Einkommen",
    完成任务获取收益: "Einkommen durch Abschluss von Aufgaben erhalten",
    去完成: "Zum Abschluss",
    去邀请: "Zur Einladung",
    欢迎使用: "Willkommen bei",
    请登录或创建您的账号: "Bitte loggen Sie sich ein oder erstellen Sie Ihr Konto",
    登录: "Einloggen",
    创建账号: "Konto erstellen",
    登录密码: "Anmeldepasswort",
    退出登录: "Ausloggen",
    提示: "Hinweis",
    确认退出登录: "Ausloggen bestätigen",
    修改登录密码: "Anmeldepasswort ändern",
    旧密码: "Altes Passwort",
    新密码: "Neues Passwort",
    确认密码: "Passwort bestätigen",
    确认修改: "Änderung bestätigen",
    修改提现密码: "Abhebungspasswort ändern",
    确认提现密码: "Abhebungspasswort bestätigen",
    忘记密码: "Passwort vergessen",
    重置密码: "Passwort zurücksetzen",
    验证码: "Verifizierungscode",
    获取验证码: "Verifizierungscode erhalten",
    密码: "Passwort",
    确认重置: "Zurücksetzung bestätigen",
    创建账户: "Konto erstellen",
    "邀请码（选填）": "Einladungscode (optional)",
    确认注册: "Registrierung bestätigen",
    每日订单: "Tägliche Bestellungen",
    佣金比例: "Provisionsrate",
    获得佣金: "Verdiente Provisionen",
    冻结金额: "Gefrorener Betrag",
    完成订单: "Abgeschlossene Bestellung",
    可用余额: "Verfügbares Guthaben",
    订单说明: "Bestellbeschreibung",
    "正在接取任务...": "Aufgabe wird angenommen...",
    订单任务: "Bestellaufgabe",
    确认: "Bestätigen",
    "确定退出任务接取吗？": "Sind Sie sicher, dass Sie die Aufgabenannahme abbrechen möchten?",
    取消的任务将会在任务列表自动冻结: "Die abgebrochene Aufgabe wird automatisch in der Aufgabenliste eingefroren",
    继续完成: "Weiter",
    确认退出: "Bestätigen Sie die Abmeldung",
    会员中心: "Mitgliederzentrum",
    团队报表: "Teambericht",
    我的账户: "Mein Konto",
    选择语言: "Sprache auswählen",
    充值: "Aufladen",
    邀请码: "Einladungscode",
    账户余额: "Kontostand",
    冻结余额: "Gesperrter Betrag",
    会员权益: "Mitgliedervorteile",
    当前等级: "Aktuelle Stufe",
    已经超越: "Überholt",
    等待升级: "Warten auf Upgrade",
    请登录账号: "Bitte melden Sie sich an",
    手机号码: "Handynummer",
    输入密码: "Passwort eingeben",
    请输入密码: "Bitte geben Sie Ihr Passwort ein",
    任务满意度: "Aufgabenzufriedenheit",
    任务评价: "Aufgabenbewertung",
    选择: "Auswählen",
    提交: "Einreichen",
    设置: "Einstellungen",
    个人头像: "Avatar",
    用户昵称: "Benutzername",
    订单评价: "Bestellbewertung",
    账单明细: "Rechnungsdetails",
    您好: "Hallo",
    邀请人数: "Anzahl der Einladungen",
    消息: "Nachrichten",
    设置提现密码: "Abhebungspasswort einrichten",
    新提现密码: "Neues Abhebungspasswort",
    确认新提现密码: "Neues Abhebungspasswort bestätigen",
    每个账户每天可以匹配10个订单: "Jedes Konto kann täglich 10 Bestellungen abgleichen",
    "下单佣金统一为订单金额的10%": "Die Provision für eine Bestellung beträgt einheitlich 10% des Gesamtbetrags",
    "系统基于LBS技术，通过云端自动匹配商品": "Das System basiert auf LBS-Technologie und gleicht Waren automatisch über die Cloud ab",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Um die Plattformüberwachung zu vermeiden, wird der Bestellbetrag vom System eingefroren, wenn die Bestellung nicht innerhalb von 30 Minuten bestätigt und eingereicht wird",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Sie können die Aufgabe nicht abbrechen. Sie müssen zuerst alle bestehenden unvollständigen Aufgaben abschließen, bevor Sie neue erhalten können.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Wenn die Plattform Bestellungen für Benutzer abgleicht, wird sie die Bestellinformationen an den Händlerhintergrund übermitteln. Wenn der Benutzer die Bestellung nicht innerhalb von 30 Minuten einreicht, wird der Bestellbetrag vom System eingefroren. Um die Überwachung durch das System zu vermeiden, werden Benutzerkonten bewertet, was sich direkt auf die nächste Abgleichzeit und den Ruf des Benutzers auswirkt! Bitte klicken Sie rechtzeitig auf 'Bestellung stoppen', um eine Überschreitung der Zeit zu vermeiden.",
    注册协议: "Registrierungsvereinbarung",
    Pix账号: "Pix-Konto",
    "确定删除此pix账号吗？": "Sind Sie sicher, dass Sie dieses Pix-Konto löschen möchten?",
    绑定Pix: "Pix binden",
    已绑定Pix: "An Pix gebunden",
    Pix类型: "Pix-Typ",
    确定: "bestätigen",
    取消: "Abbrechen",
    "加载中...": "Laden...",
    到账金额: "Gutschriftsbetrag",
    信誉分: "Kreditwürdigkeit"
}
  , qs = {
    title: "🇯🇵 Japan",
    首页: "トップ",
    订单: "注文",
    任务: "タスク",
    客服: "サービス",
    我的: "私の",
    每日任务: "毎日のタスク",
    紧急任务佣金更高: "緊急タスクの報酬が高くなります",
    开始抢单: "オーダーを開始する",
    可喜可贺: "おめでとうございます！",
    用户: "ユーザー",
    等级升级到了: "あなたのレベルが上がりました！",
    即刻升级: "今すぐアップグレードする",
    合作品牌: "パートナーブランド",
    品牌友好合作伙伴: "ブランドフレンドリーパートナー",
    服务中心: "サービスセンター",
    "还有别的问题，请移步客服中心": "他にご質問がある場合は、カスタマーサービスセンターにお越しください",
    邀请好友: "友達を招待する",
    FAQ: "よくある質問",
    "条款&协议": "規約と契約条件",
    关于: "約",
    常见问题: "よくある質問",
    通过FAQ了解更多信息: "よくある質問を通じて詳細を知る",
    "如何充值？": "チャージの方法は？",
    "如何提现？": "引き出しの方法は？",
    "如何升级会员等级？": "会員レベルをアップグレードする方法は？",
    "如何提升每日任务数量？": "毎日のタスク数を増やす方法は？",
    "如何解除被冻结的任务？": "凍結されたタスクを解除する方法は？",
    联系我们: "お問い合わせ",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "ご利用いただきありがとうございます！入金と引き出しの際に問題があった場合は、お客様サポートチームにお問い合わせください。",
    联系客服: "カスタマーサポートに連絡",
    营运时间: "営業時間",
    邀请朋友获得佣金: "友達を招待して手数料を得ます",
    推广码: "プロモーションコード",
    复制邀请链接: "招待リンクをコピーする",
    复制成功: "コピー成功",
    完成时间: "完成時間",
    尚未完成: "未完了",
    待处理: "処理中",
    冻结中: "凍結中",
    已完成: "完成済み",
    全部订单: "すべての注文",
    单价: "単価",
    订单数量: "注文数",
    总计: "合計",
    订单佣金: "注文手数料",
    订单评星: "注文評価",
    提交订单: "注文を送信する",
    已评价: "評価済み",
    评价: "評価する",
    加载完成: "ロード完了",
    已绑定银行卡: "銀行カードがすでにバインドされています",
    取消绑定: "バインドを解除する",
    银行: "銀行",
    持卡人姓名: "カードホルダーの名前",
    请输入: "入力してください",
    银行卡号: "銀行カード番号",
    提现密码: "現金引き出しのパスワード",
    "确定删除此银行卡？": "この銀行カードを削除してもよろしいですか？",
    确认添加: "追加を確認する",
    绑定银行卡: "銀行カードをバインドする",
    提现: "引き出す",
    提现金额: "引き出し金額",
    提现银行卡: "引き出し銀行カード",
    新增: "新しい",
    更换: "交換する",
    确认提现: "引き出しを確認する",
    充值金额: "チャージ金額",
    输入或者选择充值金额: "チャージ金額を入力または選択してください",
    请选择付款方式: "支払い方法を選択してください",
    请选择支付银行: "支払い銀行を選択してください",
    确认充值: "入金確認",
    提现地址: "出金アドレス",
    绑定钱包地址: "ウォレットアドレスのバインド",
    已绑定钱包地址: "ウォレットアドレスがバインドされました",
    地址: "アドレス",
    地址类型: "アドレスタイプ",
    备注: "備考",
    "確定刪除此地址？": "このアドレスを削除しますか？",
    我的余额: "残高",
    充值渠道: "入金手段",
    充值数量: "入金数量",
    充值凭证: "チャージバウチャー",
    复制: "コピー",
    任务收益: "タスク収益",
    团队收益: "チーム収益",
    完成任务获取收益: "タスクを完了して収益を得る",
    去完成: "完了する",
    去邀请: "招待する",
    欢迎使用: "ご利用いただきありがとうございます",
    请登录或创建您的账号: "ログインするか、アカウントを作成してください",
    登录: "ログイン",
    创建账号: "アカウントを作成する",
    登录密码: "ログインパスワード",
    退出登录: "ログアウト",
    提示: "ヒント",
    确认退出登录: "ログアウトを確認する",
    修改登录密码: "ログインパスワードを変更する",
    旧密码: "古いパスワード",
    新密码: "新しいパスワード",
    确认密码: "パスワードを確認する",
    确认修改: "変更を確認する",
    修改提现密码: "出金パスワードを変更する",
    确认提现密码: "出金パスワードを確認する",
    忘记密码: "パスワードを忘れた",
    重置密码: "パスワードをリセットする",
    验证码: "検証コード",
    获取验证码: "検証コードを取得する",
    密码: "パスワード",
    确认重置: "リセットを確認",
    创建账户: "アカウントを作成する",
    "邀请码（选填）": "招待コード（任意）",
    确认注册: "登録を確認する",
    每日订单: "毎日の注文",
    佣金比例: "手数料率",
    获得佣金: "獲得した手数料",
    冻结金额: "凍結された金額",
    完成订单: "完了した注文",
    可用余额: "利用可能な残高",
    订单说明: "注文の説明",
    "正在接取任务...": "タスクを受け取っています...",
    订单任务: "注文タスク",
    确认: "確認",
    "确定退出任务接取吗？": "タスク受け取りを終了しますか？",
    取消的任务将会在任务列表自动冻结: "キャンセルされたタスクは自動的にタスクリストで凍結されます",
    继续完成: "続ける",
    确认退出: "ログアウトを確認する",
    会员中心: "会員センター",
    团队报表: "チームレポート",
    我的账户: "マイアカウント",
    选择语言: "言語を選択する",
    充值: "デポジット",
    邀请码: "招待コード",
    账户余额: "アカウント残高",
    冻结余额: "凍結残高",
    会员权益: "メンバーの利益",
    当前等级: "現在のレベル",
    已经超越: "超越済み",
    等待升级: "アップグレードを待っています",
    请登录账号: "アカウントにログインしてください",
    手机号码: "携帯電話番号",
    输入密码: "パスワードを入力してください",
    请输入密码: "パスワードを入力してください",
    任务满意度: "タスク満足度",
    任务评价: "タスク評価",
    选择: "選択",
    提交: "提出",
    设置: "設定",
    个人头像: "プロフィール写真",
    用户昵称: "ユーザーのニックネーム",
    订单评价: "注文の評価",
    账单明细: "請求書の詳細",
    您好: "こんにちは",
    邀请人数: "招待者数",
    消息: "メッセージ",
    设置提现密码: "引き出しパスワードを設定する",
    新提现密码: "新しい引き出しパスワード",
    确认新提现密码: "新しい引き出しパスワードを確認する",
    每个账户每天可以匹配10个订单: "各アカウントは1日に10件のオーダーをマッチングできます",
    "下单佣金统一为订单金额的10%": "注文手数料は統一して注文金額の10％です",
    "系统基于LBS技术，通过云端自动匹配商品": "システムはLBS技術に基づき、クラウドコンピューティングを通じて商品を自動的に一致させます",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "監視のために、注文が30分以内に確認されなかった場合、システムは注文金額を凍結します",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "タスクをキャンセルすることはできません。新しいタスクを受け取る前に、すべての未完了の既存のタスクを完了する必要があります。",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "プラットフォームがユーザーの注文をマッチングした後、プラットフォームは注文情報を商人のバックエンドに提出します。ユーザーが30分以内に注文を提出しない場合、注文金額はシステムによって凍結されます。監視制度を回避するため、ユーザーアカウントが評価されます。これは、ユーザーの次回マッチング時間と評判に直接影響します！タイムアウトフリーズを回避するために、適時「注文停止」をクリックしてください。",
    注册协议: "登録規約",
    Pix账号: "Pixアカウント",
    "确定删除此pix账号吗？": "この pix アカウントを削除してもよろしいですか?",
    绑定Pix: "縛るPix",
    已绑定Pix: "ピクスにバインドPix",
    Pix类型: "Pixタイプ",
    确定: "を選択して、",
    取消: "キャンセル",
    "加载中...": "読み込み中...",
    到账金额: "入金額",
    信誉分: "信用度"
}
  , Ys = {
    title: "🇳🇱 Netherlands",
    首页: "Home",
    订单: "Bestellingen",
    任务: "Taken",
    客服: "Klantenservice",
    我的: "Mijn",
    每日任务: "Dagelijkse taken",
    紧急任务佣金更高: "Urgente taken hebben hogere commissies",
    开始抢单: "Begin met het grijpen van bestellingen",
    可喜可贺: "Gefeliciteerd!",
    用户: "Gebruiker",
    等级升级到了: " is gepromoveerd naar ",
    即刻升级: "Upgrade nu",
    合作品牌: "Partnerschapsmerken",
    品牌友好合作伙伴: "Merkvriendelijke partner",
    服务中心: "Servicecentrum",
    "还有别的问题，请移步客服中心": "Als u andere vragen heeft, ga dan naar het klantenservicecentrum",
    邀请好友: "Nodig vrienden uit",
    FAQ: "FAQ",
    "条款&协议": "Voorwaarden & Overeenkomsten",
    关于: "Over ",
    常见问题: "Veelgestelde vragen",
    通过FAQ了解更多信息: "Leer meer informatie via FAQ",
    "如何充值？": "Hoe op te laden?",
    "如何提现？": "Hoe geld op te nemen?",
    "如何升级会员等级？": "Hoe lidmaatschapsniveau te upgraden?",
    "如何提升每日任务数量？": "Hoe het aantal dagelijkse taken te verhogen?",
    "如何解除被冻结的任务？": "Hoe een bevroren taak te ontgrendelen?",
    联系我们: "Neem contact met ons op",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Welkom bij het gebruik! Als u tijdens het gebruik problemen ondervindt met stortingen en opnames, neem dan contact op met ons klantenserviceteam.",
    联系客服: "Neem contact op met de klantenservice",
    营运时间: "Openingstijden",
    邀请朋友获得佣金: "Nodig vrienden uit om commissie te verdienen",
    推广码: "Promotiecode",
    复制邀请链接: "Kopieer uitnodigingslink",
    复制成功: "Kopiëren gelukt",
    完成时间: "Voltooiingstijd",
    尚未完成: "Nog niet voltooid",
    待处理: "In behandeling",
    冻结中: "Bevroren",
    已完成: "Voltooid",
    全部订单: "Alle bestellingen",
    单价: "Eenheidsprijs",
    订单数量: "Aantal bestellingen",
    总计: "Totaal",
    订单佣金: "Bestellingscommissie",
    订单评星: "Bestellingsbeoordeling",
    提交订单: "Bestelling indienen",
    已评价: "Al beoordeeld",
    评价: "Beoordelen",
    加载完成: "Laden voltooid",
    已绑定银行卡: "Bankrekening al gekoppeld",
    取消绑定: "Ontkoppelen",
    银行: "Banknaam",
    持卡人姓名: "Naam rekeninghouder",
    请输入: "Voer alstublieft in",
    银行卡号: "Bankrekeningnummer",
    提现密码: "Opname wachtwoord",
    "确定删除此银行卡？": "Weet u zeker dat u deze bankkaart wilt verwijderen?",
    确认添加: "Bevestig toevoegen",
    绑定银行卡: "Bankrekening koppelen",
    提现: "Opnemen",
    提现金额: "Opnamebedrag",
    提现银行卡: "Opnamebankrekening",
    新增: "Nieuw",
    更换: "Vervangen",
    确认提现: "Bevestig opname",
    充值金额: "Opwaardeerbedrag",
    输入或者选择充值金额: "Voer opwaardeerbedrag in of selecteer",
    请选择付款方式: "Selecteer betaalmethode",
    请选择支付银行: "Selecteer betaalbank",
    确认充值: "Bevestig opwaardering",
    提现地址: "Opnameadres",
    绑定钱包地址: "Koppel walletadres",
    已绑定钱包地址: "Gekoppeld walletadres",
    地址: "Adres",
    地址类型: "Adrestype",
    备注: "Opmerking",
    "確定刪除此地址？": "Weet u zeker dat u dit adres wilt verwijderen?",
    我的余额: "Mijn saldo",
    充值渠道: "Opwaardeerkanaal",
    充值数量: "Opwaardeerbedrag",
    充值凭证: "Oplaadvoucher",
    复制: "Kopiëren",
    任务收益: "Taakinkomsten",
    团队收益: "Teaminkomsten",
    完成任务获取收益: "Verdien inkomen door taken te voltooien",
    去完成: "Ga voltooien",
    去邀请: "Ga uitnodigen",
    欢迎使用: "Welkom bij",
    请登录或创建您的账号: "Log in of maak uw account aan",
    登录: "Inloggen",
    创建账号: "Account aanmaken",
    登录密码: "Inlogwachtwoord",
    退出登录: "Uitloggen",
    提示: "Melding",
    确认退出登录: "Bevestig uitloggen",
    修改登录密码: "Wijzig inlogwachtwoord",
    旧密码: "Oud wachtwoord",
    新密码: "Nieuw wachtwoord",
    确认密码: "Bevestig wachtwoord",
    确认修改: "Bevestig wijziging",
    修改提现密码: "Wijzig opname wachtwoord",
    确认提现密码: "Bevestig opname wachtwoord",
    忘记密码: "Wachtwoord vergeten",
    重置密码: "Wachtwoord opnieuw instellen",
    验证码: "Verificatiecode",
    获取验证码: "Verificatiecode ophalen",
    密码: "Wachtwoord",
    确认重置: "Bevestig opnieuw instellen",
    创建账户: "Account aanmaken",
    "邀请码（选填）": "Uitnodigingscode (optioneel)",
    确认注册: "Bevestig registratie",
    每日订单: "Dagelijkse bestellingen",
    佣金比例: "Commissiepercentage",
    获得佣金: "Verdiende commissies",
    冻结金额: "Bevroren bedrag",
    完成订单: "Voltooide bestelling",
    可用余额: "Beschikbaar saldo",
    订单说明: "Bestellingsomschrijving",
    "正在接取任务...": "Taak accepteren...",
    订单任务: "Bestellingstaak",
    确认: "Bevestigen",
    "确定退出任务接取吗？": "Weet u zeker dat u de taakacceptatie wilt annuleren?",
    取消的任务将会在任务列表自动冻结: "De geannuleerde taak wordt automatisch bevroren in de taaklijst",
    继续完成: "Doorgaan met voltooien",
    确认退出: "Bevestig Uitloggen",
    会员中心: "Leden Centrum",
    团队报表: "Team Rapport",
    我的账户: "Mijn Account",
    选择语言: "Selecteer Taal",
    充值: "Opladen",
    邀请码: "Uitnodigingscode",
    账户余额: "Account Balans",
    冻结余额: "Bevroren Balans",
    会员权益: "Leden Voordelen",
    当前等级: "Huidig Niveau",
    已经超越: "Overtroffen",
    等待升级: "Wachten op Upgrade",
    请登录账号: "Log in op uw account",
    手机号码: "Mobiel Telefoonnummer",
    输入密码: "Voer Wachtwoord In",
    请输入密码: "Voer uw wachtwoord in",
    任务满意度: "Taaktevredenheid",
    任务评价: "Taakevaluatie",
    选择: "Selecteer",
    提交: "Verzenden",
    设置: "Instellingen",
    个人头像: "Avatar",
    用户昵称: "Gebruikersnaam",
    订单评价: "Bestelling Evaluatie",
    账单明细: "Factuurdetails",
    您好: "Hallo",
    邀请人数: "Aantal uitnodigingen",
    消息: "Berichten",
    设置提现密码: "Stel opname wachtwoord in",
    新提现密码: "Nieuw opname wachtwoord",
    确认新提现密码: "Bevestig nieuw opname wachtwoord",
    每个账户每天可以匹配10个订单: "Elk account kan per dag 10 bestellingen matchen",
    "下单佣金统一为订单金额的10%": "De commissie voor het plaatsen van een bestelling is uniform en bedraagt 10% van het totale bestelbedrag",
    "系统基于LBS技术，通过云端自动匹配商品": "Het systeem is gebaseerd op LBS-technologie en matcht automatisch goederen via cloud computing",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Om toezicht van het platform te voorkomen, zal het systeem het bestelbedrag bevriezen als de bestelling niet binnen 30 minuten wordt bevestigd en ingediend",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "U kunt de taak niet annuleren. U moet eerst alle bestaande onvoltooide taken voltooien voordat u nieuwe taken kunt ontvangen.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Wanneer het platform bestellingen matcht voor gebruikers, zal het de bestelinformatie indienen bij de achtergrond van de handelaar. Als de gebruiker de bestelling niet binnen 30 minuten indient, zal het systeem het bestelbedrag bevriezen. Om regelgevende systemen te vermijden, worden gebruikersaccounts beoordeeld, wat direct van invloed is op de volgende matchtijd en reputatie van de gebruiker! Klik op tijd op stoppen met bestellen om bevriezing door time-out te voorkomen.",
    注册协议: "Registratieovereenkomst",
    Pix账号: "Pix-account",
    "确定删除此pix账号吗？": "Weet u zeker dat u dit Pix-account wilt verwijderen?",
    绑定Pix: "Pix binden",
    已绑定Pix: "Gebonden aan Pix",
    Pix类型: "Pix-type",
    确定: "Bepalen",
    取消: "Annuleren",
    "加载中...": "Laden...",
    到账金额: "Gecrediteerd bedrag",
    信誉分: "Kredietscore"
}
  , Xs = {
    title: "🇮🇹 Italia",
    首页: "Homepage",
    订单: "Ordini",
    任务: "Compiti",
    客服: "Servizio clienti",
    我的: "Il mio",
    每日任务: "Compiti giornalieri",
    紧急任务佣金更高: "I compiti urgenti hanno commissioni più alte",
    开始抢单: "Inizia a prendere gli ordini",
    可喜可贺: "Congratulazioni!",
    用户: "Utente",
    等级升级到了: "è stato promosso al livello",
    即刻升级: "Aggiorna or",
    合作品牌: "Marchi di collaborazione",
    品牌友好合作伙伴: "Partner amichevole del marchio",
    服务中心: "Centro di servizio",
    "还有别的问题，请移步客服中心": "Se hai altre domande, vai al centro assistenza clienti",
    邀请好友: "Invita amici",
    FAQ: "FAQ",
    "条款&协议": "Termini e accordi",
    关于: "Circa",
    常见问题: "Domande frequenti",
    通过FAQ了解更多信息: "Scopri maggiori informazioni tramite FAQ",
    "如何充值？": "Come ricaricare?",
    "如何提现？": "Come prelevare?",
    "如何升级会员等级？": "Come aggiornare il livello di iscrizione?",
    "如何提升每日任务数量？": "Come aumentare il numero di attività giornaliere?",
    "如何解除被冻结的任务？": "Come sbloccare un'attività congelata?",
    联系我们: "Contattaci",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Benvenuti all'uso, se durante l'uso incontrate problemi con depositi e prelievi, contattate il nostro team di assistenza clienti.",
    联系客服: "Contattare il servizio clienti",
    营运时间: "Orari di apertura",
    邀请朋友获得佣金: "Invita amici per ottenere commissioni",
    推广码: "Codice promozionale",
    复制邀请链接: "Copia il link di invito",
    复制成功: "Copia riuscita",
    完成时间: "Tempo di completamento",
    尚未完成: "Non ancora completato",
    待处理: "In attesa di elaborazione",
    冻结中: "Congelato",
    已完成: "Completato",
    全部订单: "Tutti gli ordini",
    单价: "Prezzo unitario",
    订单数量: "Quantità dell'ordine",
    总计: "Totale",
    订单佣金: "Commissione dell'ordine",
    订单评星: "Valutazione dell'ordine",
    提交订单: "Invia ordine",
    已评价: "Già valutato",
    评价: "Valutare",
    加载完成: "Caricamento completato",
    已绑定银行卡: "Carta di credito già associata",
    取消绑定: "Annulla associazione",
    银行: "Banca",
    持卡人姓名: "Nome del titolare della carta",
    请输入: "Si prega di inserire",
    银行卡号: "Numero di carta di credito",
    提现密码: "Password di prelievo",
    "确定删除此银行卡？": "Sei sicuro di voler eliminare questa carta di credito?",
    确认添加: "Conferma aggiunta",
    绑定银行卡: "Collegare carta bancaria",
    提现: "Prelievo",
    提现金额: "Importo di prelievo",
    提现银行卡: "Carta bancaria di prelievo",
    新增: "Nuovo",
    更换: "Sostituire",
    确认提现: "Conferma prelievo",
    充值金额: "Importo di ricarica",
    输入或者选择充值金额: "Inserisci o seleziona l'importo di ricarica",
    请选择付款方式: "Seleziona il metodo di pagamento",
    请选择支付银行: "Seleziona la banca di pagamento",
    确认充值: "Conferma deposito",
    提现地址: "Indirizzo di prelievo",
    绑定钱包地址: "Collega l'indirizzo del portafoglio",
    已绑定钱包地址: "Indirizzo del portafoglio collegato",
    地址: "Indirizzo",
    地址类型: "Tipo di indirizzo",
    备注: "Nota",
    "確定刪除此地址？": "Confermi di eliminare questo indirizzo?",
    我的余额: "Il mio saldo",
    充值渠道: "Canale di deposito",
    充值数量: "Quantità di deposito",
    充值凭证: "Voucher di ricarica",
    复制: "Copia",
    任务收益: "Guadagno delle attività",
    团队收益: "Guadagno del team",
    完成任务获取收益: "Ottenere guadagni completando attività",
    去完成: "Vai a completare",
    去邀请: "Vai a invitare",
    欢迎使用: "Benvenuto all'uso",
    请登录或创建您的账号: "Effettua il login o crea il tuo account",
    登录: "Accedi",
    创建账号: "Crea un account",
    登录密码: "Password di accesso",
    退出登录: "Esci",
    提示: "Avviso",
    确认退出登录: "Conferma l'uscita",
    修改登录密码: "Modifica la password di accesso",
    旧密码: "Vecchia password",
    新密码: "Nuova password",
    确认密码: "Conferma la password",
    确认修改: "Conferma la modifica",
    修改提现密码: "Modifica la password di prelievo",
    确认提现密码: "Conferma la password di prelievo",
    忘记密码: "Dimenticata la password",
    重置密码: "Resetta la password",
    验证码: "Codice di verifica",
    获取验证码: "Ottieni il codice di verifica",
    密码: "Password",
    确认重置: "Conferma reset",
    创建账户: "Crea un account",
    "邀请码（选填）": "Codice di invito",
    确认注册: "Conferma registrazione",
    每日订单: "Ordini giornalieri",
    佣金比例: "Tasso di commissione",
    获得佣金: "Commissioni guadagnate",
    冻结金额: "Importo congelato",
    完成订单: "Ordine completato",
    可用余额: "Saldo disponibile",
    订单说明: "Descrizione dell'ordine",
    "正在接取任务...": "Accettando il compito...",
    订单任务: "Compito dell'ordine",
    确认: "Conferma",
    "确定退出任务接取吗？": "Sei sicuro di voler uscire dall'accettazione del compito?",
    取消的任务将会在任务列表自动冻结: "Il compito annullato verrà automaticamente congelato nell'elenco dei compiti",
    继续完成: "Continua",
    确认退出: "Conferma Logout",
    会员中心: "Centro Membro",
    团队报表: "Rapporto di Squadra",
    我的账户: "Il Mio Account",
    选择语言: "Seleziona Lingua",
    充值: "Deposito",
    邀请码: "Codice di Invito",
    账户余额: "Saldo dell'Account",
    冻结余额: "Saldo Congelato",
    会员权益: "Benefici del Membro",
    当前等级: "Livello Attuale",
    已经超越: "Superato",
    等待升级: "In attesa di aggiornamento",
    请登录账号: "Effettua il login al tuo account",
    手机号码: "Numero di telefono cellulare",
    输入密码: "Inserisci la password",
    请输入密码: "Inserisci la tua password",
    任务满意度: "Soddisfazione del compito",
    任务评价: "Valutazione del compito",
    选择: "Seleziona",
    提交: "Invia",
    设置: "Impostazioni",
    个人头像: "Avatar personale",
    用户昵称: "Nickname utente",
    订单评价: "Valutazione dell'ordine",
    账单明细: "Dettagli della fattura",
    您好: "Ciao",
    邀请人数: "Numero di inviti",
    消息: "Messaggi",
    设置提现密码: "Imposta la password di prelievo",
    新提现密码: "Nuova password di prelievo",
    确认新提现密码: "Conferma la nuova password di prelievo",
    每个账户每天可以匹配10个订单: "Ogni account può abbinare 10 ordini al giorno",
    "下单佣金统一为订单金额的10%": "La commissione per effettuare un ordine è uniforme e corrisponde al 10% dell'importo totale dell'ordine",
    "系统基于LBS技术，通过云端自动匹配商品": "Il sistema si basa sulla tecnologia LBS e abbinamento automatico dei prodotti tramite il cloud computing",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Per evitare la supervisione della piattaforma, se l'ordine non viene confermato e inviato entro 30 minuti, il sistema bloccherà l'importo dell'ordine",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Non è possibile annullare il compito. È necessario completare prima eventuali compiti incompleti esistenti prima di poterne ricevere di nuovi.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Quando la piattaforma abbinerà gli ordini per gli utenti, invierà le informazioni dell'ordine al background del commerciante. Se l'utente non invia l'ordine entro 30 minuti, l'importo dell'ordine verrà bloccato dal sistema. Per evitare i sistemi di regolamentazione, gli account degli utenti verranno valutati, il che influenzerà direttamente il tempo e la reputazione di abbinamento dell'utente la prossima volta! Fare clic su stop placing order in tempo per evitare il blocco per timeout.",
    注册协议: "Accordo di registrazione",
    Pix账号: "Account Pix",
    "确定删除此pix账号吗？": "Sei sicuro di voler eliminare questo account Pix?",
    绑定Pix: "Collegare Pix",
    已绑定Pix: "Pix già collegato",
    Pix类型: "Tipo di Pix",
    确定: "Conferma",
    取消: "Annulla",
    "加载中...": "Caricamento in corso...",
    到账金额: "Importo accreditato",
    信誉分: "Punteggio di credito"
}
  , Qs = {
    title: "🇪🇸 Spain",
    首页: "Inicio",
    订单: "Pedidos",
    任务: "Tareas",
    客服: "Servicio al Cliente",
    我的: "Mi",
    每日任务: "Tareas Diarias",
    紧急任务佣金更高: "Las tareas urgentes tienen comisiones más altas",
    开始抢单: "Comenzar a tomar pedidos",
    可喜可贺: "¡Felicidades!",
    用户: "Usuario",
    等级升级到了: " ha sido promovido a ",
    即刻升级: "Actualizar ahora",
    合作品牌: "Marcas Asociadas",
    品牌友好合作伙伴: "Socio Amigable de la Marca",
    服务中心: "Centro de Servicio",
    "还有别的问题，请移步客服中心": "Si tiene otras preguntas, por favor, diríjase al centro de atención al cliente",
    邀请好友: "Invitar Amigos",
    FAQ: "Preguntas Frecuentes",
    "条款&协议": "Términos y Acuerdos",
    关于: "Acerca de",
    常见问题: "Preguntas Frecuentes",
    通过FAQ了解更多信息: "Obtenga más información a través de las Preguntas Frecuentes",
    "如何充值？": "¿Cómo recargar?",
    "如何提现？": "¿Cómo retirar?",
    "如何升级会员等级？": "¿Cómo actualizar el nivel de membresía?",
    "如何提升每日任务数量？": "¿Cómo aumentar la cantidad de tareas diarias?",
    "如何解除被冻结的任务？": "¿Cómo descongelar una tarea congelada?",
    联系我们: "Contáctenos",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Bienvenido al uso! Si encuentra algún problema con el depósito y retiro durante el uso, por favor contáctese con nuestro equipo de atención al cliente.",
    联系客服: "Contactar con el servicio de atención al cliente",
    营运时间: "Horario de operación",
    邀请朋友获得佣金: "Invita a amigos para obtener comisión",
    推广码: "Código de promoción",
    复制邀请链接: "Copiar enlace de invitación",
    复制成功: "Copia exitosa",
    完成时间: "Tiempo de finalización",
    尚未完成: "No completado todavía",
    待处理: "Pendiente",
    冻结中: "Congelado",
    已完成: "Completado",
    全部订单: "Todos los pedidos",
    单价: "Precio unitario",
    订单数量: "Cantidad de pedidos",
    总计: "Total",
    订单佣金: "Comisión del pedido",
    订单评星: "Calificación del pedido",
    提交订单: "Enviar pedido",
    已评价: "Ya evaluado",
    评价: "Evaluar",
    加载完成: "Carga completada",
    已绑定银行卡: "Tarjeta bancaria vinculada",
    取消绑定: "Desvincular",
    银行: "Banco",
    持卡人姓名: "Nombre del titular de la tarjeta",
    请输入: "Por favor ingrese",
    银行卡号: "Número de tarjeta bancaria",
    提现密码: "Contraseña de retiro",
    "确定删除此银行卡？": "¿Está seguro de que desea eliminar esta tarjeta bancaria?",
    确认添加: "Confirmar adición",
    绑定银行卡: "Vincular tarjeta de banco",
    提现: "Retirar",
    提现金额: "Cantidad de retiro",
    提现银行卡: "Tarjeta de banco para retiro",
    新增: "Nuevo",
    更换: "Reemplazar",
    确认提现: "Confirmar retiro",
    充值金额: "Cantidad de recarga",
    输入或者选择充值金额: "Ingrese o seleccione la cantidad de recarga",
    请选择付款方式: "Por favor, seleccione el método de pago",
    请选择支付银行: "Por favor, seleccione el banco de pago",
    确认充值: "Confirmar depósito",
    提现地址: "Dirección de retiro",
    绑定钱包地址: "Vincular dirección de la billetera",
    已绑定钱包地址: "Dirección de la billetera vinculada",
    地址: "Dirección",
    地址类型: "Tipo de dirección",
    备注: "Observación",
    "確定刪除此地址？": "¿Está seguro de eliminar esta dirección?",
    我的余额: "Mi saldo",
    充值渠道: "Canal de depósito",
    充值数量: "Cantidad de depósito",
    充值凭证: "Comprobante de recarga",
    复制: "Copiar",
    任务收益: "Ganancias de tarea",
    团队收益: "Ganancias de equipo",
    完成任务获取收益: "Obtén ganancias completando tareas",
    去完成: "Ir a completar",
    去邀请: "Ir a invitar",
    欢迎使用: "Bienvenido al uso",
    请登录或创建您的账号: "Por favor, inicie sesión o cree su cuenta",
    登录: "Iniciar sesión",
    创建账号: "Crear una cuenta",
    登录密码: "Contraseña de inicio de sesión",
    退出登录: "Cerrar sesión",
    提示: "Aviso",
    确认退出登录: "Confirmar salida",
    修改登录密码: "Cambiar contraseña de inicio de sesión",
    旧密码: "Contraseña antigua",
    新密码: "Nueva contraseña",
    确认密码: "Confirmar contraseña",
    确认修改: "Confirmar cambio",
    修改提现密码: "Cambiar contraseña de retiro",
    确认提现密码: "Confirmar contraseña de retiro",
    忘记密码: "Olvidó su contraseña",
    重置密码: "Restablecer contraseña",
    验证码: "Código de verificación",
    获取验证码: "Obtener código de verificación",
    密码: "Contraseña",
    确认重置: "Confirmar restablecimiento",
    创建账户: "Crear cuenta",
    "邀请码（选填）": "Código de invitación (opcional)",
    确认注册: "Confirmar registro",
    每日订单: "Pedidos diarios",
    佣金比例: "Tasa de comisión",
    获得佣金: "Comisiones ganadas",
    冻结金额: "Cantidad congelada",
    完成订单: "Pedido completado",
    可用余额: "Saldo disponible",
    订单说明: "Descripción del pedido",
    "正在接取任务...": "Aceptando la tarea...",
    订单任务: "Tarea del pedido",
    确认: "Confirmar",
    "确定退出任务接取吗？": "¿Está seguro de que desea salir de la aceptación de la tarea?",
    取消的任务将会在任务列表自动冻结: "La tarea cancelada se congelará automáticamente en la lista de tareas",
    继续完成: "Continuar",
    确认退出: "Confirmar Salida",
    会员中心: "Centro de Miembros",
    团队报表: "Informe del Equipo",
    我的账户: "Mi Cuenta",
    选择语言: "Seleccionar Idioma",
    充值: "Recarga",
    邀请码: "Código de Invitación",
    账户余额: "Saldo de Cuenta",
    冻结余额: "Saldo Congelado",
    会员权益: "Beneficios de Membresía",
    当前等级: "Nivel Actual",
    已经超越: "Superado",
    等待升级: "Esperando actualización",
    请登录账号: "Por favor, inicie sesión en su cuenta",
    手机号码: "Número de teléfono móvil",
    输入密码: "Ingrese la contraseña",
    请输入密码: "Por favor, ingrese su contraseña",
    任务满意度: "Satisfacción de la tarea",
    任务评价: "Evaluación de la tarea",
    选择: "Seleccionar",
    提交: "Enviar",
    设置: "Configuraciones",
    个人头像: "Avatar",
    用户昵称: "Nombre de usuario",
    订单评价: "Evaluación del pedido",
    账单明细: "Detalles de la cuenta",
    您好: "Hola",
    邀请人数: "Número de invitaciones",
    消息: "Mensajes",
    设置提现密码: "Establecer contraseña de retiro",
    新提现密码: "Nueva contraseña de retiro",
    确认新提现密码: "Confirmar nueva contraseña de retiro",
    每个账户每天可以匹配10个订单: "Cada cuenta puede hacer coincidir 10 pedidos por día",
    "下单佣金统一为订单金额的10%": "La comisión para hacer un pedido es uniforme y equivale al 10% del valor total del pedido",
    "系统基于LBS技术，通过云端自动匹配商品": "El sistema se basa en la tecnología LBS y combina automáticamente productos a través de la nube",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Para evitar la supervisión de la plataforma, si el pedido no se confirma y envía dentro de 30 minutos, el sistema congelará el valor del pedido",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "No puede cancelar la tarea. Debe completar cualquier tarea incompleta antes de recibir nuevas.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Cuando la plataforma combina pedidos para los usuarios, envía la información del pedido al backend del comerciante. Si el usuario no envía el pedido dentro de 30 minutos, el valor del pedido será congelado por el sistema. Para evitar los sistemas regulatorios, las cuentas de los usuarios serán evaluadas, lo que afectará directamente el tiempo y la reputación de coincidencia del usuario la próxima vez. ¡Haga clic en detener el pedido a tiempo para evitar la congelación por tiempo límite!.",
    注册协议: "Acuerdo de registro",
    到账金额: "Monto recibido",
    取消: "Cancelar",
    "加载中...": "Cargando...",
    Pix账号: "Cuenta Pix",
    "确定删除此pix账号吗？": "¿Está seguro de que desea eliminar esta cuenta Pix?",
    绑定Pix: "Vincular Pix",
    已绑定Pix: "Vinculado a Pix",
    Pix类型: "Tipo de Pix",
    确定: "Determinar",
    取消: "Cancelar",
    "加载中...": "Cargando...",
    到账金额: "Monto acreditado",
    信誉分: "Puntuación de crédito"
}
  , Js = {
    title: "🇫🇷 France",
    首页: "Accueil",
    订单: "Commandes",
    任务: "Tâches",
    客服: "Service client",
    我的: "Mon",
    每日任务: "Tâches quotidiennes",
    紧急任务佣金更高: "Les tâches urgentes ont des commissions plus élevées",
    开始抢单: "Commencer à prendre des commandes",
    可喜可贺: "Félicitations!",
    用户: "Utilisateur",
    等级升级到了: " a été promu à ",
    即刻升级: "Mettre à jour maintenant",
    合作品牌: "Marques partenaires",
    品牌友好合作伙伴: "Partenaire amical de la marque",
    服务中心: "Centre de service",
    "还有别的问题，请移步客服中心": "Si vous avez d'autres questions, veuillez vous rendre au centre de service clientèle",
    邀请好友: "Inviter des amis",
    FAQ: "FAQ",
    "条款&协议": "Termes et accords",
    关于: "À propos de",
    常见问题: "Questions fréquentes",
    通过FAQ了解更多信息: "En savoir plus grâce aux questions fréquentes",
    "如何充值？": "Comment recharger?",
    "如何提现？": "Comment retirer?",
    "如何升级会员等级？": "Comment mettre à niveau le niveau d'adhésion?",
    "如何提升每日任务数量？": "Comment augmenter le nombre de tâches quotidiennes?",
    "如何解除被冻结的任务？": "Comment débloquer une tâche gelée?",
    联系我们: "Contactez-nous",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Bienvenue à l'utilisation! Si vous rencontrez des problèmes de dépôt et de retrait pendant l'utilisation, veuillez contacter notre équipe de service clientèle.",
    联系客服: "Contacter le service clientèle",
    营运时间: "Heures d'ouverture",
    邀请朋友获得佣金: "Invitez des amis pour obtenir une commission",
    推广码: "Code de promotion",
    复制邀请链接: "Copier le lien d'invitation",
    复制成功: "Copie réussie",
    完成时间: "Temps d'achèvement",
    尚未完成: "Pas encore terminé",
    待处理: "En attente",
    冻结中: "Gelé",
    已完成: "Terminé",
    全部订单: "Toutes les commandes",
    单价: "Prix unitaire",
    订单数量: "Quantité de commandes",
    总计: "Total",
    订单佣金: "Commission de commande",
    订单评星: "Évaluation de commande",
    提交订单: "Soumettre la commande",
    已评价: "Évalué",
    评价: "Évaluer",
    加载完成: "Chargement terminé",
    已绑定银行卡: "Carte bancaire déjà liée",
    取消绑定: "Détacher",
    银行: "Banque",
    持卡人姓名: "Nom du titulaire de la carte",
    请输入: "S'il vous plaît entrer",
    银行卡号: "Numéro de carte bancaire",
    提现密码: "Mot de passe de retrait",
    "确定删除此银行卡？": "Êtes-vous sûr de vouloir supprimer cette carte bancaire?",
    确认添加: "Confirmer l'ajout",
    绑定银行卡: "Lier une carte bancaire",
    提现: "Retirer",
    提现金额: "Montant de retrait",
    提现银行卡: "Carte bancaire pour retrait",
    新增: "Nouveau",
    更换: "Remplacer",
    确认提现: "Confirmer le retrait",
    充值金额: "Montant de recharge",
    输入或者选择充值金额: "Entrez ou sélectionnez le montant de recharge",
    请选择付款方式: "Veuillez sélectionner le mode de paiement",
    请选择支付银行: "Veuillez sélectionner la banque de paiement",
    确认充值: "Confirmer le dépôt",
    提现地址: "Adresse de retrait",
    绑定钱包地址: "Lier l'adresse de portefeuille",
    已绑定钱包地址: "Adresse de portefeuille liée",
    地址: "Adresse",
    地址类型: "Type d'adresse",
    备注: "Remarque",
    "確定刪除此地址？": "Confirmer la suppression de cette adresse?",
    我的余额: "Mon solde",
    充值渠道: "Canal de dépôt",
    充值数量: "Quantité de dépôt",
    充值凭证: "Preuve de recharge",
    复制: "Copier",
    任务收益: "Bénéfice de la tâche",
    团队收益: "Bénéfice de l'équipe",
    完成任务获取收益: "Obtenez des bénéfices en complétant des tâches",
    去完成: "Aller pour compléter",
    去邀请: "Aller pour inviter",
    欢迎使用: "Bienvenue à l'utilisation",
    请登录或创建您的账号: "Veuillez vous connecter ou créer votre compte",
    登录: "Se connecter",
    创建账号: "Créer un compte",
    登录密码: "Mot de passe de connexion",
    退出登录: "Déconnexion",
    提示: "Notification",
    确认退出登录: "Confirmer la déconnexion",
    修改登录密码: "Modifier le mot de passe de connexion",
    旧密码: "Ancien mot de passe",
    新密码: "Nouveau mot de passe",
    确认密码: "Confirmer le mot de passe",
    确认修改: "Confirmer la modification",
    修改提现密码: "Modifier le mot de passe de retrait",
    确认提现密码: "Confirmer le mot de passe de retrait",
    忘记密码: "Mot de passe oublié",
    重置密码: "Réinitialiser le mot de passe",
    验证码: "Code de vérification",
    获取验证码: "Obtenir le code de vérification",
    密码: "Mot de passe",
    确认重置: "Confirmer la réinitialisation",
    创建账户: "Créer un compte",
    "邀请码（选填）": "Code d'invitation (facultatif)",
    确认注册: "Confirmer l'inscription",
    每日订单: "Commandes quotidiennes",
    佣金比例: "Taux de commission",
    获得佣金: "Commissions gagnées",
    冻结金额: "Montant gelé",
    完成订单: "Commande terminée",
    可用余额: "Solde disponible",
    订单说明: "Description de la commande",
    "正在接取任务...": "Acceptation de la tâche en cours...",
    订单任务: "Tâche de commande",
    确认: "Confirmer",
    "确定退出任务接取吗？": "Êtes-vous sûr de vouloir quitter l'acceptation de la tâche ?",
    取消的任务将会在任务列表自动冻结: "La tâche annulée sera automatiquement gelée dans la liste des tâches",
    继续完成: "Continuer",
    确认退出: "Confirmer la déconnexion",
    会员中心: "Centre des membres",
    团队报表: "Rapport d'équipe",
    我的账户: "Mon compte",
    选择语言: "Choisir la langue",
    充值: "Dépôt",
    邀请码: "Code d'invitation",
    账户余额: "Solde du compte",
    冻结余额: "Solde gelé",
    会员权益: "Avantages des membres",
    当前等级: "Niveau actuel",
    已经超越: "Dépassé",
    等待升级: "En attente de mise à niveau",
    请登录账号: "Veuillez vous connecter à votre compte",
    手机号码: "Numéro de téléphone portable",
    输入密码: "Entrez le mot de passe",
    请输入密码: "Veuillez entrer votre mot de passe",
    任务满意度: "Satisfaction de la tâche",
    任务评价: "Évaluation de la tâche",
    选择: "Sélectionner",
    提交: "Soumettre",
    设置: "Paramètres",
    个人头像: "Avatar",
    用户昵称: "Pseudo de l'utilisateur",
    订单评价: "Évaluation de la commande",
    账单明细: "Détails de la facture",
    您好: "Bonjour",
    邀请人数: "Nombre d'invitations",
    消息: "Messages",
    设置提现密码: "Définir le mot de passe de retrait",
    新提现密码: "Nouveau mot de passe de retrait",
    确认新提现密码: "Confirmer le nouveau mot de passe de retrait",
    每个账户每天可以匹配10个订单: "Chaque compte peut correspondre à 10 commandes par jour",
    "下单佣金统一为订单金额的10%": "La commission pour passer une commande est uniforme et équivaut à 10% du montant total de la commande",
    "系统基于LBS技术，通过云端自动匹配商品": "Le système est basé sur la technologie LBS et correspond automatiquement aux produits via le cloud computing",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Pour éviter la surveillance de la plateforme, si la commande n'est pas confirmée et soumise dans les 30 minutes, le système bloquera le montant de la commande",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Vous ne pouvez pas annuler la tâche. Vous devez d'abord terminer toutes les tâches inachevées avant de recevoir de nouvelles.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Quand la plateforme combine les commandes pour les utilisateurs, elle envoie les informations de commande au back-end du commerçant. Si l'utilisateur ne soumet pas la commande dans les 30 minutes, la valeur de la commande sera gelée par le système. Pour éviter les réglementations, les comptes des utilisateurs seront évalués, ce qui affectera directement le temps et la réputation de correspondance de l'utilisateur la prochaine fois ! Cliquez sur arrêter de passer des commandes à temps pour éviter le gel par limite de temps.",
    注册协议: "Accord d'enregistrement",
    Pix账号: "Compte Pix",
    "确定删除此pix账号吗？": "Êtes-vous sûr de vouloir supprimer ce compte Pix ?",
    绑定Pix: "Lier Pix",
    已绑定Pix: "Lié à Pix",
    Pix类型: "Type de Pix",
    确定: "Déterminer",
    取消: "Annuler",
    "加载中...": "Chargement...",
    到账金额: "Montant crédité",
    信誉分: "Score de crédit"
}
  , Zs = {
    title: "🇪🇪  Estonia",
    首页: "Kodu",
    订单: "Tellimused",
    任务: "Ülesanded",
    客服: "Klienditeenindus",
    我的: "Minu",
    每日任务: "Igapäevased ülesanded",
    紧急任务佣金更高: "Hädavajalikud ülesanded annavad kõrgema tasu",
    开始抢单: "Alusta tellimuste vastuvõtmist",
    可喜可贺: "Õnnitlused!",
    用户: "Kasutaja",
    等级升级到了: " on tõstetud tasemele ",
    即刻升级: "Tõsta kohe taset",
    合作品牌: "Koostööbrändid",
    品牌友好合作伙伴: "Brändisõbralik partner",
    服务中心: "Teeninduskeskus",
    "还有别的问题，请移步客服中心": "Kui teil on muid küsimusi, pöörduge klienditeeninduskeskuse poole",
    邀请好友: "Kutsu sõpru",
    FAQ: "KKK",
    "条款&协议": "Tingimused ja lepingud",
    关于: "Teave ",
    常见问题: "Korduma kippuvad küsimused",
    通过FAQ了解更多信息: "Lisateabe saamiseks vaadake KKK-d",
    "如何充值？": "Kuidas laadida raha oma kontole?",
    "如何提现？": "Kuidas raha välja võtta?",
    "如何升级会员等级？": "Kuidas tõsta liikmelisuse taset?",
    "如何提升每日任务数量？": "Kuidas suurendada igapäevaste ülesannete arvu?",
    "如何解除被冻结的任务？": "Kuidas tühistada külmutatud ülesandeid?",
    联系我们: "Võtke meiega ühendust",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Tere tulemast! Kui teil tekib laadimise või väljavõtmisega probleeme, võtke meie klienditeenindusega ühendust.",
    联系客服: "Võtke ühendust klienditeenindusega",
    营运时间: "Tööajad",
    邀请朋友获得佣金: "Kutsu sõpru ja teeni komisjonitasu",
    推广码: "Reklaamikood",
    复制邀请链接: "Kopeeri kutselink",
    复制成功: "Kopeerimine õnnestus",
    完成时间: "Valmimisaeg",
    尚未完成: "Pole veel valmis",
    待处理: "Ootel",
    冻结中: "Külmutatud",
    已完成: "Valmis",
    全部订单: "Kõik tellimused",
    单价: "Ühiku hind",
    订单数量: "Tellimuste arv",
    总计: "Kokku",
    订单佣金: "Tellimuse komisjonitasu",
    订单评星: "Tellimuse hinnang",
    提交订单: "Esita tellimus",
    已评价: "Hinnatud",
    评价: "Hinda",
    加载完成: "Laadimine lõpetatud",
    已绑定银行卡: "Pangakaart on juba seotud",
    取消绑定: "Tühista seos",
    银行: "Pank",
    持卡人姓名: "Kaardiomaniku nimi",
    请输入: "Sisestage",
    银行卡号: "Pangakaardi number",
    提现密码: "Väljavõtmise parool",
    "确定删除此银行卡？": "Kas olete kindel, et soovite selle pangakaardi kustutada?",
    确认添加: "Kinnita lisamine",
    绑定银行卡: "Siduda pangakaart",
    提现: "Väljavõtmine",
    提现金额: "Väljavõtmise summa",
    提现银行卡: "Väljavõtmise pangakaart",
    新增: "Uus",
    更换: "Asenda",
    确认提现: "Kinnita väljavõtmine",
    充值金额: "Täiendamise summa",
    输入或者选择充值金额: "Sisesta või vali täiendamise summa",
    请选择付款方式: "Palun valige makseviis",
    请选择支付银行: "Palun valige maksepank",
    确认充值: "Kinnita täiendamine",
    提现地址: "Väljavõtmise aadress",
    绑定钱包地址: "Siduda rahakoti aadress",
    已绑定钱包地址: "Sidustatud rahakoti aadress",
    地址: "Aadress",
    地址类型: "Aadressi tüüp",
    备注: "Märkus",
    "確定刪除此地址？": "Kas olete kindel, et soovite selle aadressi kustutada?",
    我的余额: "Minu saldo",
    充值渠道: "Täiendamise kanal",
    充值数量: "Täiendamise summa",
    充值凭证: "Täiendamise tõend",
    复制: "Kopeeri",
    任务收益: "Ülesande tulu",
    团队收益: "Meeskonna tulu",
    完成任务获取收益: "Tulu saamiseks lõpeta ülesanded",
    去完成: "Mine lõpeta",
    去邀请: "Mine kutsu",
    欢迎使用: "Tere tulemast",
    请登录或创建您的账号: "Palun logige sisse või looge oma konto",
    登录: "Logi sisse",
    创建账号: "Loo konto",
    登录密码: "Sisselogimise parool",
    退出登录: "Logi välja",
    提示: "Märkus",
    确认退出登录: "Kinnita väljalogimine",
    修改登录密码: "Muuda sisselogimise parooli",
    旧密码: "Vana parool",
    新密码: "Uus parool",
    确认密码: "Kinnita parool",
    确认修改: "Kinnita muudatus",
    修改提现密码: "Muuda väljavõtmise parooli",
    确认提现密码: "Kinnita väljavõtmise parool",
    忘记密码: "Unustasid parooli",
    重置密码: "Lähtesta parool",
    验证码: "Kinnituskood",
    获取验证码: "Hangi kinnituskood",
    密码: "Parool",
    确认重置: "Kinnita lähtestamine",
    创建账户: "Loo konto",
    "邀请码（选填）": "Kutsekood (valikuline)",
    确认注册: "Kinnita registreerimine",
    每日订单: "Igapäevased tellimused",
    佣金比例: "Vahendustasu määr",
    获得佣金: "Teenitud vahendustasu",
    冻结金额: "Külmutatud summa",
    完成订单: "Lõpetatud tellimus",
    可用余额: "Kasutatav saldo",
    订单说明: "Tellimuse kirjeldus",
    "正在接取任务...": "Ülesande vastuvõtmine...",
    订单任务: "Tellimuse ülesanne",
    确认: "Kinnita",
    "确定退出任务接取吗？": "Kas olete kindel, et soovite ülesande vastuvõtmisest loobuda?",
    取消的任务将会在任务列表自动冻结: "Tühistatud ülesanne külmutatakse automaatselt ülesannete loendis",
    继续完成: "Jätka",
    确认退出: "Kinnita väljalogimine",
    会员中心: "Liikme keskus",
    团队报表: "Meeskonna aruanne",
    我的账户: "Minu konto",
    选择语言: "Vali keel",
    充值: "Täiendamine",
    邀请码: "Kutsekood",
    账户余额: "Konto saldo",
    冻结余额: "Külmutatud saldo",
    会员权益: "Liikme õigused",
    当前等级: "Praegune tase",
    已经超越: "Ületatud",
    等待升级: "Ootan uuendamist",
    请登录账号: "Palun logige sisse oma kontole",
    手机号码: "Mobiilinumber",
    输入密码: "Sisestage parool",
    请输入密码: "Palun sisestage oma parool",
    任务满意度: "Ülesande rahulolu",
    任务评价: "Ülesande hindamine",
    选择: "Vali",
    提交: "Esita",
    设置: "Seaded",
    个人头像: "Profiilipilt",
    用户昵称: "Kasutaja hüüdnimi",
    订单评价: "Tellimuse hindamine",
    账单明细: "Arve üksikasjad",
    您好: "Tere",
    邀请人数: "Kutsete arv",
    消息: "Sõnumid",
    设置提现密码: "Määrake väljavõtmise parool",
    新提现密码: "Uus väljavõtmise parool",
    确认新提现密码: "Kinnitage uus väljavõtmise parool",
    每个账户每天可以匹配10个订单: "Iga konto saab päevas sobitada 10 tellimust",
    "下单佣金统一为订单金额的10%": "Tellimuse esitamise komisjon on ühtne ja moodustab 10% tellimuse kogusummast",
    "系统基于LBS技术，通过云端自动匹配商品": "Süsteem põhineb LBS-tehnoloogial ja sobitab kaupu automaatselt pilve kaudu",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Tellimuse summa külmutatakse süsteemi poolt, kui tellimust ei kinnitata ja esitata 30 minuti jooksul, et vältida platvormi järelevalvet",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Te ei saa ülesannet tühistada. Peate kõigepealt lõpetama kõik olemasolevad lõpetamata ülesanded, enne kui saate uue ülesande.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Kui platvorm sobitab tellimusi kasutajatele, esitab see tellimuste teabe kaupleja taustale. Kui kasutaja ei esita tellimust 30 minuti jooksul, külmutab süsteem tellimuse summa, et vältida järelevalvesüsteemi. Kasutajate kontosid hinnatakse, et vältida järelevalvesüsteemi. See mõjutab otseselt kasutaja järgmist sobitusaega ja mainet! Palun klõpsake õigeaegselt tellimuse esitamise peatamiseks, et vältida ajaületamist ja külmutamist.",
    注册协议: "Registreerimisleping",
    Pix账号: "Pixi konto",
    "确定删除此pix账号吗？": "Kas olete kindel, et soovite selle Pixi konto kustutada?",
    绑定Pix: "Siduge Pix",
    已绑定Pix: "Sidus Pixiga",
    Pix类型: "Pixi tüüp",
    确定: "Kinnita",
    取消: "Tühista",
    "加载中...": "Laadimine...",
    到账金额: "Krediteeritud summa",
    信誉分: "Krediidiskoor"
}
  , el = {
    title: "🇧🇷 Brazil",
    首页: "Início",
    订单: "Pedidos",
    任务: "Tarefas",
    客服: "Atendimento",
    我的: "Meu",
    每日任务: "Tarefas Diárias",
    紧急任务佣金更高: "Tarefas urgentes têm comissões mais altas",
    开始抢单: "Começar a pegar pedidos",
    可喜可贺: "Parabéns!",
    用户: "Usuário",
    等级升级到了: " foi promovido para ",
    即刻升级: "Atualize agora",
    合作品牌: "Marcas Parceiras",
    品牌友好合作伙伴: "Parceiro Amigável da Marca",
    服务中心: "Centro de Serviço",
    "还有别的问题，请移步客服中心": "Se você tiver outras perguntas, por favor, vá para o centro de atendimento ao cliente",
    邀请好友: "Convidar Amigos",
    FAQ: "Perguntas Frequentes",
    "条款&协议": "Termos e Acordos",
    关于: "Sobre",
    常见问题: "Perguntas Frequentes",
    通过FAQ了解更多信息: "Saiba mais informações através das Perguntas Frequentes",
    "如何充值？": "Como recarregar?",
    "如何提现？": "Como sacar?",
    "如何升级会员等级？": "Como atualizar o nível de associação?",
    "如何提升每日任务数量？": "Como aumentar o número de tarefas diárias?",
    "如何解除被冻结的任务？": "Como descongelar uma tarefa congelada?",
    联系我们: "Contate-nos",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Bem-vindo ao uso! Se você encontrar algum problema com depósito e saque durante o uso, entre em contato com nossa equipe de atendimento ao cliente.",
    联系客服: "Contato com o atendimento ao cliente",
    营运时间: "Horário de funcionamento",
    邀请朋友获得佣金: "Convide amigos para obter comissão",
    推广码: "Código de promoção",
    复制邀请链接: "Copiar link de convite",
    复制成功: "Cópia bem-sucedida",
    完成时间: "Tempo de conclusão",
    尚未完成: "Ainda não concluído",
    待处理: "Pendente",
    冻结中: "Congelado",
    已完成: "Concluído",
    全部订单: "Todos os pedidos",
    单价: "Preço unitário",
    订单数量: "Quantidade de pedidos",
    总计: "Total",
    订单佣金: "Comissão do pedido",
    订单评星: "Classificação do pedido",
    提交订单: "Enviar pedido",
    已评价: "Já avaliado",
    评价: "Avaliar",
    加载完成: "Carregamento concluído",
    已绑定银行卡: "Cartão bancário já vinculado",
    取消绑定: "Desvincular",
    银行: "Banco",
    持卡人姓名: "Nome do titular do cartão",
    请输入: "Por favor, insira",
    银行卡号: "Número do cartão bancário",
    提现密码: "Senha de saque",
    "确定删除此银行卡？": "Tem certeza de que deseja excluir este cartão bancário?",
    确认添加: "Confirmar adição",
    绑定银行卡: "Vincular cartão de banco",
    提现: "Retirar",
    提现金额: "Valor de retirada",
    提现银行卡: "Cartão de banco para retirada",
    新增: "Novo",
    更换: "Substituir",
    确认提现: "Confirmar retirada",
    充值金额: "Valor de recarga",
    输入或者选择充值金额: "Digite ou selecione o valor de recarga",
    请选择付款方式: "Por favor, selecione o método de pagamento",
    请选择支付银行: "Por favor, selecione o banco de pagamento",
    确认充值: "Confirmar depósito",
    提现地址: "Endereço de retirada",
    绑定钱包地址: "Vincular endereço da carteira",
    已绑定钱包地址: "Endereço da carteira vinculado",
    地址: "Endereço",
    地址类型: "Tipo de endereço",
    备注: "Observação",
    "確定刪除此地址？": "Confirmar exclusão deste endereço?",
    我的余额: "Meu saldo",
    充值渠道: "Canal de depósito",
    充值数量: "Quantidade de depósito",
    充值凭证: "Comprovante de recarga",
    复制: "Copiar",
    任务收益: "Lucro da tarefa",
    团队收益: "Lucro da equipe",
    完成任务获取收益: "Obtenha lucro completando tarefas",
    去完成: "Ir para completar",
    去邀请: "Ir para convidar",
    欢迎使用: "Bem-vindo ao uso",
    请登录或创建您的账号: "Por favor, faça login ou crie sua conta",
    登录: "Entrar",
    创建账号: "Criar uma conta",
    登录密码: "Senha de login",
    退出登录: "Sair",
    提示: "Aviso",
    确认退出登录: "Confirmar saída",
    修改登录密码: "Alterar senha de login",
    旧密码: "Senha antiga",
    新密码: "Nova senha",
    确认密码: "Confirmar senha",
    确认修改: "Confirmar alteração",
    修改提现密码: "Alterar senha de saque",
    确认提现密码: "Confirmar senha de saque",
    忘记密码: "Esqueceu a senha",
    重置密码: "Redefinir senha",
    验证码: "Código de verificação",
    获取验证码: "Obter código de verificação",
    密码: "Senha",
    确认重置: "Confirmar redefinição",
    创建账户: "Criar conta",
    "邀请码（选填）": "Código de convite (opcional)",
    确认注册: "Confirmar registro",
    每日订单: "Pedidos diários",
    佣金比例: "Taxa de comissão",
    获得佣金: "Comissões ganhas",
    冻结金额: "Valor congelado",
    完成订单: "Pedido concluído",
    可用余额: "Saldo disponível",
    订单说明: "Descrição do pedido",
    "正在接取任务...": "Aceitando a tarefa...",
    订单任务: "Tarefa do pedido",
    确认: "Confirmar",
    "确定退出任务接取吗？": "Tem certeza de que deseja sair da aceitação da tarefa?",
    取消的任务将会在任务列表自动冻结: "A tarefa cancelada será automaticamente congelada na lista de tarefas",
    继续完成: "Continuar",
    确认退出: "Confirmar Logout",
    会员中心: "Centro de Membros",
    团队报表: "Relatório da Equipe",
    我的账户: "Minha Conta",
    选择语言: "Selecionar Idioma",
    充值: "Depósito",
    邀请码: "Código de Convite",
    账户余额: "Saldo da Conta",
    冻结余额: "Saldo Congelado",
    会员权益: "Benefícios do Membro",
    当前等级: "Nível Atual",
    已经超越: "Ultrapassado",
    等待升级: "Aguardando atualização",
    请登录账号: "Por favor, faça login em sua conta",
    手机号码: "Número de celular",
    输入密码: "Digite a senha",
    请输入密码: "Por favor, digite sua senha",
    任务满意度: "Satisfação da tarefa",
    任务评价: "Avaliação da tarefa",
    选择: "Selecionar",
    提交: "Enviar",
    设置: "Configurações",
    个人头像: "Avatar",
    用户昵称: "Apelido do usuário",
    订单评价: "Avaliação do pedido",
    账单明细: "Detalhes da conta",
    您好: "Olá",
    邀请人数: "Número de convites",
    消息: "Mensagens",
    设置提现密码: "Definir senha de saque",
    新提现密码: "Nova senha de saque",
    确认新提现密码: "Confirmar nova senha de saque",
    每个账户每天可以匹配10个订单: "Cada conta pode combinar 10 pedidos por dia",
    "下单佣金统一为订单金额的10%": "A comissão para fazer um pedido é uniforme e equivale a 10% do valor total do pedido",
    "系统基于LBS技术，通过云端自动匹配商品": "O sistema é baseado na tecnologia LBS e combina automaticamente produtos através da computação em nuvem",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Para evitar a supervisão da plataforma, se o pedido não for confirmado e enviado dentro de 30 minutos, o sistema congelará o valor do pedido",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Você não pode cancelar a tarefa. Você deve primeiro concluir quaisquer tarefas inacabadas antes de receber novas.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Quando a plataforma combina pedidos para usuários, ela envia as informações do pedido para o back-end do comerciante. Se o usuário não enviar o pedido dentro de 30 minutos, o valor do pedido será congelado pelo sistema. Para evitar sistemas regulatórios, as contas dos usuários serão avaliadas, o que afetará diretamente o tempo e a reputação de correspondência do usuário na próxima vez! Clique em parar de fazer pedidos a tempo para evitar o congelamento por tempo limite.",
    注册协议: "Acordo de registro",
    Pix账号: "Conta Pix",
    "确定删除此pix账号吗？": "Tem certeza de que deseja excluir esta conta Pix?",
    绑定Pix: "Vincular Pix",
    已绑定Pix: "Vinculado ao Pix",
    Pix类型: "Tipo de Pix",
    确定: "confirmar",
    取消: "Cancelar",
    "加载中...": "Carregando...",
    到账金额: "Valor creditado",
    信誉分: "Pontuação de crédito"
}
  , tl = {
    title: "🇸🇪 Sweden",
    首页: "Hem",
    订单: "Beställningar",
    任务: "Uppdrag",
    客服: "Kundtjänst",
    我的: "Min",
    每日任务: "Dagliga Uppdrag",
    紧急任务佣金更高: "Högre provision för brådskande uppdrag",
    开始抢单: "Börja ta uppdrag",
    可喜可贺: "Grattis!",
    用户: "Användare",
    等级升级到了: " har uppgraderats till ",
    即刻升级: "Uppgradera nu",
    合作品牌: "Samarbetspartners",
    品牌友好合作伙伴: "Varumärkesvänlig samarbetspartner",
    服务中心: "Servicecenter",
    "还有别的问题，请移步客服中心": "Om du har andra frågor, vänligen gå till kundtjänstcentret",
    邀请好友: "Bjud in vänner",
    FAQ: "Vanliga frågor",
    "条款&协议": "Villkor och avtal",
    关于: "Om",
    常见问题: "Vanliga frågor",
    通过FAQ了解更多信息: "Få mer information genom vanliga frågor",
    "如何充值？": "Hur laddar jag upp?",
    "如何提现？": "Hur tar jag ut pengar?",
    "如何升级会员等级？": "Hur uppgraderar jag medlemsnivån?",
    "如何提升每日任务数量？": "Hur ökar jag antalet dagliga uppgifter?",
    "如何解除被冻结的任务？": "Hur avfryser jag en fryst uppgift?",
    联系我们: "Kontakta oss",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Välkommen att använda! Om du stöter på problem med insättning och uttag under användningen, kontakta vårt kundtjänstteam.",
    联系客服: "Kontakta kundtjänst",
    营运时间: "Öppettider",
    邀请朋友获得佣金: "Bjud in vänner för att få provision",
    推广码: "Kampanjkod",
    复制邀请链接: "Kopiera inbjudningslänk",
    复制成功: "Kopiering lyckades",
    完成时间: "Slutfört tid",
    尚未完成: "Inte slutfört än",
    待处理: "Väntar på behandling",
    冻结中: "Frysning",
    已完成: "Slutfört",
    全部订单: "Alla beställningar",
    单价: "Pris per enhet",
    订单数量: "Antal beställningar",
    总计: "Totalt",
    订单佣金: "Beställningsprovision",
    订单评星: "Beställningsbetyg",
    提交订单: "Skicka beställning",
    已评价: "Redan betygsatt",
    评价: "Betygsätt",
    加载完成: "Laddning slutförd",
    已绑定银行卡: "Bankkort redan bundet",
    取消绑定: "Avbryt bindning",
    银行: "Bank",
    持卡人姓名: "Kortinnehavarens namn",
    请输入: "Vänligen ange",
    银行卡号: "Bankkortsnummer",
    提现密码: "Uttagslösenord",
    "确定删除此银行卡？": "Är du säker på att du vill ta bort detta bankkort?",
    确认添加: "Bekräfta tillägg",
    绑定银行卡: "Koppla bankkort",
    提现: "Ta ut",
    提现金额: "Uttagbelopp",
    提现银行卡: "Bankkort för uttag",
    新增: "Ny",
    更换: "Byta ut",
    确认提现: "Bekräfta uttag",
    充值金额: "Insättningsbelopp",
    输入或者选择充值金额: "Ange eller välj insättningsbelopp",
    请选择付款方式: "Välj betalningsmetod",
    请选择支付银行: "Välj betalningsbank",
    确认充值: "Bekräfta insättning",
    提现地址: "Adress för uttag",
    绑定钱包地址: "Koppla plånboksadress",
    已绑定钱包地址: "Plånboksadress kopplad",
    地址: "Adress",
    地址类型: "Adresstyp",
    备注: "Kommentar",
    "確定刪除此地址？": "Bekräfta radering av denna adress?",
    我的余额: "Mitt saldo",
    充值渠道: "Insättningskanal",
    充值数量: "Antal insättningar",
    充值凭证: "Insättningsbevis",
    复制: "Kopiera",
    任务收益: "Uppdragets intäkter",
    团队收益: "Lagintäkter",
    完成任务获取收益: "Få intäkter genom att slutföra uppgifter",
    去完成: "Gå för att slutföra",
    去邀请: "Gå för att bjuda in",
    欢迎使用: "Välkommen att använda",
    请登录或创建您的账号: "Logga in eller skapa ditt konto",
    登录: "Logga in",
    创建账号: "Skapa ett konto",
    登录密码: "Inloggningslösenord",
    退出登录: "Logga ut",
    提示: "Tips",
    确认退出登录: "Bekräfta utloggning",
    修改登录密码: "Ändra inloggningslösenord",
    旧密码: "Gammalt lösenord",
    新密码: "Nytt lösenord",
    确认密码: "Bekräfta lösenord",
    确认修改: "Bekräfta ändring",
    修改提现密码: "Ändra uttagslösenord",
    确认提现密码: "Bekräfta uttagslösenord",
    忘记密码: "Glömt lösenord",
    重置密码: "Återställ lösenord",
    验证码: "Verifieringskod",
    获取验证码: "Hämta verifieringskod",
    密码: "Lösenord",
    确认重置: "Bekräfta återställning",
    创建账户: "Skapa konto",
    "邀请码（选填）": "Inbjudningskod (valfritt)",
    确认注册: "Bekräfta registrering",
    每日订单: "Dagliga beställningar",
    佣金比例: "Provisionsandel",
    获得佣金: "Fått provision",
    冻结金额: "Frysbelopp",
    完成订单: "Slutförd beställning",
    可用余额: "Tillgängligt saldo",
    订单说明: "Beställningsbeskrivning",
    "正在接取任务...": "Tar emot uppdrag...",
    订单任务: "Beställningsuppdrag",
    确认: "Bekräfta",
    "确定退出任务接取吗？": "Är du säker på att du vill avbryta uppdraget?",
    取消的任务将会在任务列表自动冻结: "Avbrutna uppdrag kommer automatiskt att frysas i uppgiftslistan",
    继续完成: "Fortsätt",
    确认退出: "Bekräfta utloggning",
    会员中心: "Medlemscenter",
    团队报表: "Teamrapport",
    我的账户: "Mitt konto",
    选择语言: "Välj språk",
    充值: "Ladda upp",
    邀请码: "Inbjudningskod",
    账户余额: "Kontosaldo",
    冻结余额: "Frysbalans",
    会员权益: "Medlemsförmåner",
    当前等级: "Nuvarande nivå",
    已经超越: "Överskridit",
    等待升级: "Väntar på uppgradering",
    请登录账号: "Vänligen logga in på ditt konto",
    手机号码: "Mobilnummer",
    输入密码: "Ange lösenord",
    请输入密码: "Vänligen ange ditt lösenord",
    任务满意度: "Uppgifternas tillfredsställelse",
    任务评价: "Uppgiftsutvärdering",
    选择: "Välj",
    提交: "Skicka",
    设置: "Inställningar",
    个人头像: "Avatar",
    用户昵称: "Användarnamn",
    订单评价: "Beställningsutvärdering",
    账单明细: "Kontoutdrag",
    您好: "Hej",
    邀请人数: "Antal inbjudningar",
    消息: "Meddelanden",
    设置提现密码: "Ställ in uttagslösenord",
    新提现密码: "Nytt uttagslösenord",
    确认新提现密码: "Bekräfta nytt uttagslösenord",
    每个账户每天可以匹配10个订单: "Varje konto kan matcha 10 beställningar per dag",
    "下单佣金统一为订单金额的10%": "Provisionen för att lägga en beställning är enhetlig och motsvarar 10% av den totala beställningsbeloppet",
    "系统基于LBS技术，通过云端自动匹配商品": "Systemet är baserat på LBS-teknik och matchar automatiskt varor via molnberäkning",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "För att undvika plattformsövervakning, om en beställning inte bekräftas och skickas inom 30 minuter, kommer systemet att frysa beställningsbeloppet",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Du kan inte avbryta uppgiften. Du måste först slutföra alla oavslutade uppgifter innan du kan få nya.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "När plattformen matchar beställningar för användare skickar den beställningsinformationen till handlarens bakgrund. Om användaren inte skickar in beställningen inom 30 minuter kommer beställningsbeloppet att frysas av systemet. För att undvika regleringssystem kommer användarkonton att utvärderas, vilket direkt påverkar användarens matchningstid och rykte nästa gång! Klicka på stoppknappen i tid för att undvika tidsgränsfrysning.",
    注册协议: "Registreringsavtal",
    Pix账号: "Pix-konto",
    "确定删除此pix账号吗？": "Är du säker på att du vill ta bort detta Pix-konto?",
    绑定Pix: "Binda Pix",
    已绑定Pix: "Redan bunden till Pix",
    Pix类型: "Pix-typ",
    确定: "Bekräfta",
    取消: "Avbryt",
    "加载中...": "Laddar...",
    到账金额: "Belopp som krediteras",
    信誉分: "Kreditpoäng"
}
  , al = {
    title: "🇷🇺 Russia",
    首页: "Главная",
    订单: "Заказы",
    任务: "Задания",
    客服: "Служба поддержки",
    我的: "Мой",
    每日任务: "Ежедневные задания",
    紧急任务佣金更高: "Срочные задания имеют более высокую комиссию",
    开始抢单: "Начать захват заказов",
    可喜可贺: "Поздравляем!",
    用户: "Пользователь",
    等级升级到了: " был повышен до ",
    即刻升级: "Повысить сейчас",
    合作品牌: "Партнерские бренды",
    品牌友好合作伙伴: "Дружественный бренд-партнер",
    服务中心: "Служба поддержки",
    "还有别的问题，请移步客服中心": "Если у вас есть другие вопросы, пожалуйста, обратитесь в центр обслуживания клиентов",
    邀请好友: "Пригласить друзей",
    FAQ: "Часто задаваемые вопросы",
    "条款&协议": "Условия и соглашения",
    关于: "О нас",
    常见问题: "Часто задаваемые вопросы",
    通过FAQ了解更多信息: "Узнайте больше информации через Часто задаваемые вопросы",
    "如何充值？": "Как пополнить счет?",
    "如何提现？": "Как вывести деньги?",
    "如何升级会员等级？": "Как повысить уровень членства?",
    "如何提升每日任务数量？": "Как увеличить количество ежедневных заданий?",
    "如何解除被冻结的任务？": "Как разблокировать замороженное задание?",
    联系我们: "Свяжитесь с нами",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "Добро пожаловать! Если у вас возникли проблемы с пополнением и выводом денег в процессе использования, пожалуйста, свяжитесь с нашей службой поддержки.",
    联系客服: "Связаться со службой поддержки",
    营运时间: "Время работы",
    邀请朋友获得佣金: "Приглашайте друзей и получайте комиссию",
    推广码: "Промо-код",
    复制邀请链接: "Скопировать ссылку для приглашения",
    复制成功: "Скопировано успешно",
    完成时间: "Время завершения",
    尚未完成: "Еще не завершено",
    待处理: "В ожидании",
    冻结中: "Заморожено",
    已完成: "Завершено",
    全部订单: "Все заказы",
    单价: "Цена за единицу",
    订单数量: "Количество заказов",
    总计: "Итого",
    订单佣金: "Комиссия за заказ",
    订单评星: "Оценка заказа",
    提交订单: "Отправить заказ",
    已评价: "Уже оценено",
    评价: "Оценить",
    加载完成: "Загрузка завершена",
    已绑定银行卡: "Банковский счет уже привязан",
    取消绑定: "Отменить привязку",
    银行: "Название банка",
    持卡人姓名: "Имя владельца банковского счета",
    请输入: "Пожалуйста, введите",
    银行卡号: "Номер банковского счета",
    提现密码: "Пароль для вывода денег",
    "确定删除此银行卡？": "Вы уверены, что хотите удалить эту банковскую карту?",
    确认添加: "Подтвердить добавление",
    绑定银行卡: "Привязать банковскую карту",
    提现: "Вывод",
    提现金额: "Сумма вывода",
    提现银行卡: "Банковская карта для вывода",
    新增: "Новый",
    更换: "Заменить",
    确认提现: "Подтвердить вывод",
    充值金额: "Сумма пополнения",
    输入或者选择充值金额: "Введите или выберите сумму пополнения",
    请选择付款方式: "Выберите способ оплаты",
    请选择支付银行: "Выберите банк для оплаты",
    确认充值: "Подтвердить пополнение",
    提现地址: "Адрес для вывода",
    绑定钱包地址: "Привязать адрес кошелька",
    已绑定钱包地址: "Привязанный адрес кошелька",
    地址: "Адрес",
    地址类型: "Тип адреса",
    备注: "Примечание",
    "確定刪除此地址？": "Подтвердить удаление этого адреса?",
    我的余额: "Мой баланс",
    充值渠道: "Канал пополнения",
    充值数量: "Количество пополнения",
    充值凭证: "Подтверждение пополнения",
    复制: "Копировать",
    任务收益: "Доход от заданий",
    团队收益: "Доход от команды",
    完成任务获取收益: "Получить доход, выполнив задания",
    去完成: "Перейти к выполнению",
    去邀请: "Перейти к приглашению",
    欢迎使用: "Добро пожаловать в",
    请登录或创建您的账号: "Пожалуйста, войдите или создайте свой аккаунт",
    登录: "Войти",
    创建账号: "Создать аккаунт",
    登录密码: "Пароль для входа",
    退出登录: "Выйти",
    提示: "Уведомление",
    确认退出登录: "Подтвердить выход",
    修改登录密码: "Изменить пароль для входа",
    旧密码: "Старый пароль",
    新密码: "Новый пароль",
    确认密码: "Подтвердите пароль",
    确认修改: "Подтвердить изменения",
    修改提现密码: "Изменить пароль для вывода",
    确认提现密码: "Подтвердите пароль для вывода",
    忘记密码: "Забыли пароль",
    重置密码: "Сбросить пароль",
    验证码: "Код подтверждения",
    获取验证码: "Получить код подтверждения",
    密码: "Пароль",
    确认重置: "Подтвердить сброс",
    创建账户: "Создать аккаунт",
    "邀请码（选填）": "Код приглашения (необязательно)",
    确认注册: "Подтвердить регистрацию",
    每日订单: "Ежедневные заказы",
    佣金比例: "Комиссионный процент",
    获得佣金: "Полученные комиссии",
    冻结金额: "Замороженная сумма",
    完成订单: "Завершенный заказ",
    可用余额: "Доступный баланс",
    订单说明: "Описание заказа",
    "正在接取任务...": "Принимаем задание...",
    订单任务: "Задание заказа",
    确认: "Подтвердить",
    "确定退出任务接取吗？": "Вы уверены, что хотите выйти из приема задания?",
    取消的任务将会在任务列表自动冻结: "Отмененное задание будет автоматически заморожено в списке заданий",
    继续完成: "Продолжить",
    确认退出: "Подтвердить выход",
    会员中心: "Центр участника",
    团队报表: "Отчет о команде",
    我的账户: "Мой аккаунт",
    选择语言: "Выбрать язык",
    充值: "Пополнить",
    邀请码: "Код приглашения",
    账户余额: "Баланс аккаунта",
    冻结余额: "Замороженный баланс",
    会员权益: "Преимущества участника",
    当前等级: "Текущий уровень",
    已经超越: "Превышено",
    等待升级: "Ожидание обновления",
    请登录账号: "Пожалуйста, войдите в свой аккаунт",
    手机号码: "Номер мобильного телефона",
    输入密码: "Введите пароль",
    请输入密码: "Пожалуйста, введите пароль",
    任务满意度: "Удовлетворенность заданием",
    任务评价: "Оценка задания",
    选择: "Выбрать",
    提交: "Отправить",
    设置: "Настройки",
    个人头像: "Фото профиля",
    用户昵称: "Никнейм пользователя",
    订单评价: "Оценка заказа",
    账单明细: "Детали счета",
    您好: "Здравствуйте",
    邀请人数: "Количество приглашенных",
    消息: "Сообщения",
    设置提现密码: "Установить пароль для вывода средств",
    新提现密码: "Новый пароль для вывода средств",
    确认新提现密码: "Подтвердите новый пароль для вывода средств",
    每个账户每天可以匹配10个订单: "Каждый аккаунт может сопоставлять 10 заказов в день",
    "下单佣金统一为订单金额的10%": "Комиссия за размещение заказа равна 10% от общей суммы заказа",
    "系统基于LBS技术，通过云端自动匹配商品": "Система основана на технологии LBS и автоматически сопоставляет товары через облачные вычисления",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "Чтобы избежать надзора со стороны платформы, если заказ не будет подтвержден и отправлен в течение 30 минут, система заморозит сумму заказа",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "Вы не можете отменить задание. Вы должны сначала завершить все незавершенные задания, прежде чем получить новые.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "Когда платформа сопоставляет заказы для пользователей, она отправляет информацию о заказе в фоновый режим торговцу. Если пользователь не отправит заказ в течение 30 минут, сумма заказа будет заморожена системой. Чтобы избежать регулирования системы, аккаунты пользователей будут оцениваться, что непосредственно повлияет на время и репутацию следующего сопоставления! Пожалуйста, своевременно нажмите кнопку остановки размещения заказа, чтобы избежать заморозки из-за превышения времени.",
    注册协议: "Соглашение о регистрации",
    Pix账号: "Pix аккаунт",
    "确定删除此pix账号吗？": "Вы уверены, что хотите удалить этот Pix аккаунт?",
    绑定Pix: "Привязать Pix",
    已绑定Pix: "Привязан к Pix",
    Pix类型: "Тип Pix",
    确定: "Подтвердить",
    取消: "Отменить",
    "加载中...": "Загрузка...",
    到账金额: "Сумма зачисления",
    信誉分: "Баллы доверия"
}
  , nl = {
    title: "🇸🇦 العربية",
    首页: "الصفحة الرئيسية",
    订单: "الطلبات",
    任务: "المهام",
    客服: "خدمة العملاء",
    我的: "حسابي",
    每日任务: "المهام اليومية",
    紧急任务佣金更高: "المهام العاجلة لديها عمولات أعلى",
    开始抢单: "بدء الحصول على الطلبات",
    可喜可贺: "تهانينا!",
    用户: "المستخدم",
    等级升级到了: " تم الترقية إلى ",
    即刻升级: "ترقية الآن",
    合作品牌: "العلامات التجارية الشريكة",
    品牌友好合作伙伴: "شريك ودود للعلامة التجارية",
    服务中心: "مركز الخدمة",
    "还有别的问题，请移步客服中心": "إذا كان لديك أي أسئلة أخرى ، يرجى الانتقال إلى مركز خدمة العملاء",
    邀请好友: "دعوة الأصدقاء",
    FAQ: "الأسئلة الشائعة",
    "条款&协议": "الشروط والاتفاقيات",
    关于: "حول ",
    常见问题: "الأسئلة الشائعة",
    通过FAQ了解更多信息: "تعرف على المزيد من المعلومات من خلال الأسئلة الشائعة",
    "如何充值？": "كيفية إعادة الشحن؟",
    "如何提现？": "كيفية السحب؟",
    "如何升级会员等级？": "كيفية ترقية مستوى العضوية؟",
    "如何提升每日任务数量？": "كيفية زيادة عدد المهام اليومية؟",
    "如何解除被冻结的任务？": "كيفية إلغاء تجميد المهمة؟",
    联系我们: "اتصل بنا",
    "欢迎使用，如在使用过程中充值和提现遇到问题，请与我们的客服团队联系。": "مرحبًا بك في الاستخدام! إذا واجهت أي مشاكل مع الإيداع والسحب أثناء الاستخدام ، يرجى الاتصال بفريق خدمة العملاء لدينا.",
    联系客服: "الاتصال بخدمة العملاء",
    营运时间: "ساعات العمل",
    邀请朋友获得佣金: "دعوة الأصدقاء للحصول على عمولة",
    推广码: "رمز الترويجي",
    复制邀请链接: "نسخ رابط الدعوة",
    复制成功: "تم النسخ بنجاح",
    完成时间: "وقت الانتهاء",
    尚未完成: "لم يتم الانتهاء بعد",
    待处理: "قيد الانتظار",
    冻结中: "مجمد",
    已完成: "تم الانتهاء",
    全部订单: "جميع الطلبات",
    单价: "السعر الفردي",
    订单数量: "عدد الطلبات",
    总计: "المجموع",
    订单佣金: "عمولة الطلب",
    订单评星: "تقييم الطلب",
    提交订单: "تقديم الطلب",
    已评价: "تم التقييم بالفعل",
    评价: "تقييم",
    加载完成: "تم التحميل بنجاح",
    已绑定银行卡: "تم ربط الحساب المصرفي بالفعل",
    取消绑定: "إلغاء الربط",
    银行: "اسم البنك",
    持卡人姓名: "اسم حامل البطاقة المصرفية",
    请输入: "الرجاء إدخال",
    银行卡号: "رقم الحساب المصرفي",
    提现密码: "كلمة مرور السحب",
    "确定删除此银行卡？": "هل أنت متأكد أنك تريد حذف هذه البطاقة المصرفية؟",
    确认添加: "تأكيد الإضافة",
    绑定银行卡: "حساب بنكي للسحب",
    提现: "سحب",
    提现金额: "مبلغ السحب",
    提现银行卡: "حساب بنكي للسحب",
    新增: "جديد",
    更换: "تغيير",
    确认提现: "تأكيد السحب",
    充值金额: "مبلغ الشحن",
    输入或者选择充值金额: "أدخل أو اختر مبلغ الشحن",
    请选择付款方式: "يرجى اختيار طريقة الدفع",
    请选择支付银行: "يرجى اختيار البنك المستخدم للدفع",
    确认充值: "تأكيد الإيداع",
    提现地址: "عنوان السحب",
    绑定钱包地址: "ربط عنوان المحفظة",
    已绑定钱包地址: "تم ربط عنوان المحفظة",
    地址: "العنوان",
    地址类型: "نوع العنوان",
    备注: "ملاحظة",
    "確定刪除此地址？": "هل تريد بالتأكيد حذف هذا العنوان؟",
    我的余额: "رصيدي",
    充值渠道: "قناة الشحن",
    充值数量: "كمية الشحن",
    充值凭证: "إيصال الشحن",
    复制: "نسخ",
    任务收益: "أرباح المهمة",
    团队收益: "أرباح الفريق",
    完成任务获取收益: "الحصول على الأرباح من خلال إكمال المهام",
    去完成: "الذهاب لإكمال",
    去邀请: "الذهاب للدعوة",
    欢迎使用: "مرحبًا بك في",
    请登录或创建您的账号: "يرجى تسجيل الدخول أو إنشاء حسابك",
    登录: "تسجيل الدخول",
    创建账号: "إنشاء حساب",
    登录密码: "كلمة مرور تسجيل الدخول",
    退出登录: "تسجيل الخروج",
    提示: "تنبيه",
    确认退出登录: "تأكيد تسجيل الخروج",
    修改登录密码: "تغيير كلمة مرور تسجيل الدخول",
    旧密码: "كلمة المرور القديمة",
    新密码: "كلمة المرور الجديدة",
    确认密码: "تأكيد كلمة المرور",
    确认修改: "تأكيد التغيير",
    修改提现密码: "تغيير كلمة مرور السحب",
    确认提现密码: "تأكيد كلمة مرور السحب",
    忘记密码: "نسيت كلمة المرور",
    重置密码: "إعادة تعيين كلمة المرور",
    验证码: "رمز التحقق",
    获取验证码: "الحصول على رمز التحقق",
    密码: "كلمة المرور",
    确认重置: "تأكيد إعادة التعيين",
    创建账户: "إنشاء حساب",
    "邀请码（选填）": "رمز الدعوة (اختياري)",
    确认注册: "تأكيد التسجيل",
    每日订单: "الطلبات اليومية",
    佣金比例: "نسبة العمولة",
    获得佣金: "العمولات المكتسبة",
    冻结金额: "المبلغ المجمد",
    完成订单: "الطلبات المكتملة",
    可用余额: "الرصيد المتاح",
    订单说明: "وصف الطلب",
    "正在接取任务...": "جاري قبول المهمة...",
    订单任务: "مهمة الطلب",
    确认: "تأكيد",
    "确定退出任务接取吗？": "هل أنت متأكد من رغبتك في الخروج من قبول المهمة؟",
    取消的任务将会在任务列表自动冻结: "سيتم تجميد المهمة الملغاة تلقائيًا في قائمة المهام",
    继续完成: "استمر في الانتهاء",
    确认退出: "تأكيد الخروج",
    会员中心: "مركز الأعضاء",
    团队报表: "تقرير الفريق",
    我的账户: "حسابي",
    选择语言: "اختر اللغة",
    充值: "إيداع",
    邀请码: "رمز الدعوة",
    账户余额: "رصيد الحساب",
    冻结余额: "رصيد مجمد",
    会员权益: "حقوق العضوية",
    当前等级: "المستوى الحالي",
    已经超越: "تجاوزت",
    等待升级: "في انتظار الترقية",
    请登录账号: "يرجى تسجيل الدخول إلى حسابك",
    手机号码: "رقم الهاتف المحمول",
    输入密码: "أدخل كلمة المرور",
    请输入密码: "الرجاء إدخال كلمة المرور الخاصة بك",
    任务满意度: "رضا المهمة",
    任务评价: "تقييم المهمة",
    选择: "اختيار",
    提交: "إرسال",
    设置: "الإعدادات",
    个人头像: "الصورة الشخصية",
    用户昵称: "اسم المستخدم",
    订单评价: "تقييم الطلب",
    账单明细: "تفاصيل الفاتورة",
    您好: "مرحبا",
    邀请人数: "عدد الدعوات",
    消息: "الرسائل",
    设置提现密码: "تعيين كلمة مرور السحب",
    新提现密码: "كلمة مرور السحب الجديدة",
    确认新提现密码: "تأكيد كلمة مرور السحب الجديدة",
    每个账户每天可以匹配10个订单: "يمكن لكل حساب مطابقة 10 طلبات في اليوم",
    "下单佣金统一为订单金额的10%": "عمولة الطلب الموحدة تساوي 10٪ من إجمالي مبلغ الطلب",
    "系统基于LBS技术，通过云端自动匹配商品": "يعتمد النظام على تقنية LBS ويقوم بمطابقة المنتجات تلقائيًا من خلال الحوسبة السحابية",
    "为防止平台监管，订单未在30分钟内确认提交，系统将冻结订单金额": "لتجنب الرقابة على المنصة ، إذا لم يتم تأكيد الطلب وإرساله في غضون 30 دقيقة ، فسيتم تجميد مبلغ الطلب من قبل النظام",
    "您不能取消任务。您必须先完成现有未完成的任务，然后才能获得新任务。": "لا يمكنك إلغاء المهمة. يجب عليك إكمال أي مهام غير مكتملة قبل الحصول على مهام جديدة.",
    "当平台为用户匹配订单后，平台将订单信息提交给商户后台。如果用户在30分钟内没有提交订单，订单金额将被系统冻结。为了规避监管系统，会对用户账号进行评分，这将直接影响用户下次撮合的时间和口碑！请及时点击停止下单，以免超时冻结。": "عندما تطابق المنصة الطلبات للمستخدمين ، ستقوم المنصة بإرسال معلومات الطلب إلى الخلفية التجارية. إذا لم يقم المستخدم بإرسال الطلب في غضون 30 دقيقة ، فسيتم تجميد مبلغ الطلب من قبل النظام. من أجل تجنب أنظمة الرقابة ، سيتم تقييم حسابات المستخدمين ، وهذا سيؤثر مباشرة على وقت المطابقة والسمعة في المرة القادمة! يرجى النقر على إيقاف الطلب في الوقت المناسب لتجنب التجميد بسبب انتهاء الوقت.",
    注册协议: "اتفاقية التسجيل",
    Pix账号: "حساب Pix",
    "确定删除此pix账号吗？": "هل أنت متأكد من حذف حساب Pix هذا؟",
    绑定Pix: "ربط Pix",
    已绑定Pix: "مرتبط بـ Pix",
    Pix类型: "نوع Pix",
    确定: "تحديد",
    取消: "إلغاء",
    "加载中...": "جار التحميل...",
    到账金额: "المبلغ المحول",
    信誉分: "نقاط الثقة"
};
var mn;
const Tt = typeof window < "u"
  , rl = e=>typeof e == "function"
  , il = e=>typeof e == "string"
  , da = ()=>{}
;
Tt && ((mn = window == null ? void 0 : window.navigator) != null && mn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ke(e) {
    return typeof e == "function" ? e() : ge(e)
}
function Ir(e, t) {
    function a(...n) {
        return new Promise((i,r)=>{
            Promise.resolve(e(()=>t.apply(this, n), {
                fn: t,
                thisArg: this,
                args: n
            })).then(i).catch(r)
        }
        )
    }
    return a
}
const wr = e=>e();
function ol(e, t={}) {
    let a, n, i = da;
    const r = s=>{
        clearTimeout(s),
        i(),
        i = da
    }
    ;
    return s=>{
        const l = ke(e)
          , m = ke(t.maxWait);
        return a && r(a),
        l <= 0 || m !== void 0 && m <= 0 ? (n && (r(n),
        n = null),
        Promise.resolve(s())) : new Promise((f,_)=>{
            i = t.rejectOnCancel ? _ : f,
            m && !n && (n = setTimeout(()=>{
                a && r(a),
                n = null,
                f(s())
            }
            , m)),
            a = setTimeout(()=>{
                n && r(n),
                n = null,
                f(s())
            }
            , l)
        }
        )
    }
}
function sl(e=wr) {
    const t = W(!0);
    function a() {
        t.value = !1
    }
    function n() {
        t.value = !0
    }
    const i = (...r)=>{
        t.value && e(...r)
    }
    ;
    return {
        isActive: Sn(t),
        pause: a,
        resume: n,
        eventFilter: i
    }
}
function ll(e) {
    return e
}
function Rr(e) {
    return Zr() ? (ei(e),
    !0) : !1
}
function cl(e, t=200, a={}) {
    return Ir(ol(t, a), e)
}
function Mr(e, t=!0) {
    Jr() ? pa(e) : t ? e() : _a(e)
}
const ul = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
  , dl = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g
  , ml = (e,t,a,n)=>{
    let i = e < 12 ? "AM" : "PM";
    return n && (i = i.split("").reduce((r,o)=>r += "".concat(o, "."), "")),
    a ? i.toLowerCase() : i
}
  , fl = (e,t,a={})=>{
    var n;
    const i = e.getFullYear()
      , r = e.getMonth()
      , o = e.getDate()
      , s = e.getHours()
      , l = e.getMinutes()
      , m = e.getSeconds()
      , f = e.getMilliseconds()
      , _ = e.getDay()
      , p = (n = a.customMeridiem) != null ? n : ml
      , C = {
        YY: ()=>String(i).slice(-2),
        YYYY: ()=>i,
        M: ()=>r + 1,
        MM: ()=>"".concat(r + 1).padStart(2, "0"),
        MMM: ()=>e.toLocaleDateString(a.locales, {
            month: "short"
        }),
        MMMM: ()=>e.toLocaleDateString(a.locales, {
            month: "long"
        }),
        D: ()=>String(o),
        DD: ()=>"".concat(o).padStart(2, "0"),
        H: ()=>String(s),
        HH: ()=>"".concat(s).padStart(2, "0"),
        h: ()=>"".concat(s % 12 || 12).padStart(1, "0"),
        hh: ()=>"".concat(s % 12 || 12).padStart(2, "0"),
        m: ()=>String(l),
        mm: ()=>"".concat(l).padStart(2, "0"),
        s: ()=>String(m),
        ss: ()=>"".concat(m).padStart(2, "0"),
        SSS: ()=>"".concat(f).padStart(3, "0"),
        d: ()=>_,
        dd: ()=>e.toLocaleDateString(a.locales, {
            weekday: "narrow"
        }),
        ddd: ()=>e.toLocaleDateString(a.locales, {
            weekday: "short"
        }),
        dddd: ()=>e.toLocaleDateString(a.locales, {
            weekday: "long"
        }),
        A: ()=>p(s, l),
        AA: ()=>p(s, l, !1, !0),
        a: ()=>p(s, l, !0),
        aa: ()=>p(s, l, !0, !0)
    };
    return t.replace(dl, (y,S)=>S || C[y]())
}
  , gl = e=>{
    if (e === null)
        return new Date(NaN);
    if (e === void 0)
        return new Date;
    if (e instanceof Date)
        return new Date(e);
    if (typeof e == "string" && !/Z$/i.test(e)) {
        const t = e.match(ul);
        if (t) {
            const a = t[2] - 1 || 0
              , n = (t[7] || "0").substring(0, 3);
            return new Date(t[1],a,t[3] || 1,t[4] || 0,t[5] || 0,t[6] || 0,n)
        }
    }
    return new Date(e)
}
;
function wc(e, t="HH:mm:ss", a={}) {
    return Ce(()=>fl(gl(ke(e)), ke(t), a))
}
function pl(e, t, a={}) {
    const {immediate: n=!0} = a
      , i = W(!1);
    let r = null;
    function o() {
        r && (clearTimeout(r),
        r = null)
    }
    function s() {
        i.value = !1,
        o()
    }
    function l(...m) {
        o(),
        i.value = !0,
        r = setTimeout(()=>{
            i.value = !1,
            r = null,
            e(...m)
        }
        , ke(t))
    }
    return n && (i.value = !0,
    Tt && l()),
    Rr(s),
    {
        isPending: Sn(i),
        start: l,
        stop: s
    }
}
var fn = Object.getOwnPropertySymbols
  , _l = Object.prototype.hasOwnProperty
  , vl = Object.prototype.propertyIsEnumerable
  , bl = (e,t)=>{
    var a = {};
    for (var n in e)
        _l.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
    if (e != null && fn)
        for (var n of fn(e))
            t.indexOf(n) < 0 && vl.call(e, n) && (a[n] = e[n]);
    return a
}
;
function hl(e, t, a={}) {
    const n = a
      , {eventFilter: i=wr} = n
      , r = bl(n, ["eventFilter"]);
    return wt(e, Ir(i, t), r)
}
var El = Object.defineProperty
  , kl = Object.defineProperties
  , Tl = Object.getOwnPropertyDescriptors
  , xt = Object.getOwnPropertySymbols
  , Dr = Object.prototype.hasOwnProperty
  , Fr = Object.prototype.propertyIsEnumerable
  , gn = (e,t,a)=>t in e ? El(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a
  , Cl = (e,t)=>{
    for (var a in t || (t = {}))
        Dr.call(t, a) && gn(e, a, t[a]);
    if (xt)
        for (var a of xt(t))
            Fr.call(t, a) && gn(e, a, t[a]);
    return e
}
  , Ol = (e,t)=>kl(e, Tl(t))
  , Al = (e,t)=>{
    var a = {};
    for (var n in e)
        Dr.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
    if (e != null && xt)
        for (var n of xt(e))
            t.indexOf(n) < 0 && Fr.call(e, n) && (a[n] = e[n]);
    return a
}
;
function Pl(e, t, a={}) {
    const n = a
      , {eventFilter: i} = n
      , r = Al(n, ["eventFilter"])
      , {eventFilter: o, pause: s, resume: l, isActive: m} = sl(i);
    return {
        stop: hl(e, t, Ol(Cl({}, r), {
            eventFilter: o
        })),
        pause: s,
        resume: l,
        isActive: m
    }
}
function xr(e) {
    var t;
    const a = ke(e);
    return (t = a == null ? void 0 : a.$el) != null ? t : a
}
const Ve = Tt ? window : void 0
  , Ll = Tt ? window.navigator : void 0;
function We(...e) {
    let t, a, n, i;
    if (il(e[0]) || Array.isArray(e[0]) ? ([a,n,i] = e,
    t = Ve) : [t,a,n,i] = e,
    !t)
        return da;
    Array.isArray(a) || (a = [a]),
    Array.isArray(n) || (n = [n]);
    const r = []
      , o = ()=>{
        r.forEach(f=>f()),
        r.length = 0
    }
      , s = (f,_,p,C)=>(f.addEventListener(_, p, C),
    ()=>f.removeEventListener(_, p, C))
      , l = wt(()=>[xr(t), ke(i)], ([f,_])=>{
        o(),
        f && r.push(...a.flatMap(p=>n.map(C=>s(f, p, C, _))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , m = ()=>{
        l(),
        o()
    }
    ;
    return Rr(m),
    m
}
function Nl(e, t=!1) {
    const a = W()
      , n = ()=>a.value = !!e();
    return n(),
    Mr(n, t),
    a
}
function Rc(e={}) {
    const {navigator: t=Ll, read: a=!1, source: n, copiedDuring: i=1500, legacy: r=!1} = e
      , o = ["copy", "cut"]
      , s = Nl(()=>t && "clipboard"in t)
      , l = Ce(()=>s.value || r)
      , m = W("")
      , f = W(!1)
      , _ = pl(()=>f.value = !1, i);
    function p() {
        s.value ? t.clipboard.readText().then(L=>{
            m.value = L
        }
        ) : m.value = S()
    }
    if (l.value && a)
        for (const L of o)
            We(L, p);
    async function C(L=ke(n)) {
        l.value && L != null && (s.value ? await t.clipboard.writeText(L) : y(L),
        m.value = L,
        f.value = !0,
        _.start())
    }
    function y(L) {
        const I = document.createElement("textarea");
        I.value = L != null ? L : "",
        I.style.position = "absolute",
        I.style.opacity = "0",
        document.body.appendChild(I),
        I.select(),
        document.execCommand("copy"),
        I.remove()
    }
    function S() {
        var L, I, w;
        return (w = (I = (L = document == null ? void 0 : document.getSelection) == null ? void 0 : L.call(document)) == null ? void 0 : I.toString()) != null ? w : ""
    }
    return {
        isSupported: l,
        text: m,
        copied: f,
        copy: C
    }
}
const ma = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , fa = "__vueuse_ssr_handlers__";
ma[fa] = ma[fa] || {};
const yl = ma[fa];
function Sl(e, t) {
    return yl[e] || t
}
function Il(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
var wl = Object.defineProperty
  , pn = Object.getOwnPropertySymbols
  , Rl = Object.prototype.hasOwnProperty
  , Ml = Object.prototype.propertyIsEnumerable
  , _n = (e,t,a)=>t in e ? wl(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a
  , vn = (e,t)=>{
    for (var a in t || (t = {}))
        Rl.call(t, a) && _n(e, a, t[a]);
    if (pn)
        for (var a of pn(t))
            Ml.call(t, a) && _n(e, a, t[a]);
    return e
}
;
const Dl = {
    boolean: {
        read: e=>e === "true",
        write: e=>String(e)
    },
    object: {
        read: e=>JSON.parse(e),
        write: e=>JSON.stringify(e)
    },
    number: {
        read: e=>Number.parseFloat(e),
        write: e=>String(e)
    },
    any: {
        read: e=>e,
        write: e=>String(e)
    },
    string: {
        read: e=>e,
        write: e=>String(e)
    },
    map: {
        read: e=>new Map(JSON.parse(e)),
        write: e=>JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e=>new Set(JSON.parse(e)),
        write: e=>JSON.stringify(Array.from(e))
    },
    date: {
        read: e=>new Date(e),
        write: e=>e.toISOString()
    }
}
  , bn = "vueuse-storage";
function Fl(e, t, a, n={}) {
    var i;
    const {flush: r="pre", deep: o=!0, listenToStorageChanges: s=!0, writeDefaults: l=!0, mergeDefaults: m=!1, shallow: f, window: _=Ve, eventFilter: p, onError: C=k=>{
        console.error(k)
    }
    } = n
      , y = (f ? ti : W)(t);
    if (!a)
        try {
            a = Sl("getDefaultStorage", ()=>{
                var k;
                return (k = Ve) == null ? void 0 : k.localStorage
            }
            )()
        } catch (k) {
            C(k)
        }
    if (!a)
        return y;
    const S = ke(t)
      , L = Il(S)
      , I = (i = n.serializer) != null ? i : Dl[L]
      , {pause: w, resume: g} = Pl(y, ()=>b(y.value), {
        flush: r,
        deep: o,
        eventFilter: p
    });
    return _ && s && (We(_, "storage", A),
    We(_, bn, h)),
    A(),
    y;
    function b(k) {
        try {
            if (k == null)
                a.removeItem(e);
            else {
                const T = I.write(k)
                  , B = a.getItem(e);
                B !== T && (a.setItem(e, T),
                _ && _.dispatchEvent(new CustomEvent(bn,{
                    detail: {
                        key: e,
                        oldValue: B,
                        newValue: T,
                        storageArea: a
                    }
                })))
            }
        } catch (T) {
            C(T)
        }
    }
    function O(k) {
        const T = k ? k.newValue : a.getItem(e);
        if (T == null)
            return l && S !== null && a.setItem(e, I.write(S)),
            S;
        if (!k && m) {
            const B = I.read(T);
            return rl(m) ? m(B, S) : L === "object" && !Array.isArray(B) ? vn(vn({}, S), B) : B
        } else
            return typeof T != "string" ? T : I.read(T)
    }
    function h(k) {
        A(k.detail)
    }
    function A(k) {
        if (!(k && k.storageArea !== a)) {
            if (k && k.key == null) {
                y.value = S;
                return
            }
            if (!(k && k.key !== e)) {
                w();
                try {
                    y.value = O(k)
                } catch (T) {
                    C(T)
                } finally {
                    k ? _a(g) : g()
                }
            }
        }
    }
}
function Nt(e, t, {window: a=Ve, initialValue: n=""}={}) {
    const i = W(n)
      , r = Ce(()=>{
        var o;
        return xr(t) || ((o = a == null ? void 0 : a.document) == null ? void 0 : o.documentElement)
    }
    );
    return wt([r, ()=>ke(e)], ([o,s])=>{
        var l;
        if (o && a) {
            const m = (l = a.getComputedStyle(o).getPropertyValue(s)) == null ? void 0 : l.trim();
            i.value = m || n
        }
    }
    , {
        immediate: !0
    }),
    wt(i, o=>{
        var s;
        (s = r.value) != null && s.style && r.value.style.setProperty(ke(e), o)
    }
    ),
    i
}
function Br(e, t, a={}) {
    const {window: n=Ve} = a;
    return Fl(e, t, n == null ? void 0 : n.localStorage, a)
}
var hn;
(function(e) {
    e.UP = "UP",
    e.RIGHT = "RIGHT",
    e.DOWN = "DOWN",
    e.LEFT = "LEFT",
    e.NONE = "NONE"
}
)(hn || (hn = {}));
const En = "--vueuse-safe-area-top"
  , kn = "--vueuse-safe-area-right"
  , Tn = "--vueuse-safe-area-bottom"
  , Cn = "--vueuse-safe-area-left";
function Ur() {
    const e = W("")
      , t = W("")
      , a = W("")
      , n = W("");
    if (Tt) {
        const r = Nt(En)
          , o = Nt(kn)
          , s = Nt(Tn)
          , l = Nt(Cn);
        r.value = "env(safe-area-inset-top, 0px)",
        o.value = "env(safe-area-inset-right, 0px)",
        s.value = "env(safe-area-inset-bottom, 0px)",
        l.value = "env(safe-area-inset-left, 0px)",
        i(),
        We("resize", cl(i))
    }
    function i() {
        e.value = yt(En),
        t.value = yt(kn),
        a.value = yt(Tn),
        n.value = yt(Cn)
    }
    return {
        top: e,
        right: t,
        bottom: a,
        left: n,
        update: i
    }
}
function yt(e) {
    return getComputedStyle(document.documentElement).getPropertyValue(e)
}
var xl = Object.defineProperty
  , On = Object.getOwnPropertySymbols
  , Bl = Object.prototype.hasOwnProperty
  , Ul = Object.prototype.propertyIsEnumerable
  , An = (e,t,a)=>t in e ? xl(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a
  , jl = (e,t)=>{
    for (var a in t || (t = {}))
        Bl.call(t, a) && An(e, a, t[a]);
    if (On)
        for (var a of On(t))
            Ul.call(t, a) && An(e, a, t[a]);
    return e
}
;
const $l = {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
};
jl({
    linear: ll
}, $l);
function Mc({window: e=Ve}={}) {
    if (!e)
        return {
            x: W(0),
            y: W(0)
        };
    const t = W(e.scrollX)
      , a = W(e.scrollY);
    return We(e, "scroll", ()=>{
        t.value = e.scrollX,
        a.value = e.scrollY
    }
    , {
        capture: !1,
        passive: !0
    }),
    {
        x: t,
        y: a
    }
}
function Dc(e={}) {
    const {window: t=Ve, initialWidth: a=1 / 0, initialHeight: n=1 / 0, listenOrientation: i=!0, includeScrollbar: r=!0} = e
      , o = W(a)
      , s = W(n)
      , l = ()=>{
        t && (r ? (o.value = t.innerWidth,
        s.value = t.innerHeight) : (o.value = t.document.documentElement.clientWidth,
        s.value = t.document.documentElement.clientHeight))
    }
    ;
    return l(),
    Mr(l),
    We("resize", l, {
        passive: !0
    }),
    i && We("orientationchange", l, {
        passive: !0
    }),
    {
        width: o,
        height: s
    }
}
function jr(e, t, a) {
    const n = W([])
      , i = W(!0)
      , r = W(!0)
      , o = W(!1);
    let s = 1, l = 0, m;
    const f = async()=>{
        let y = await m({
            page: s,
            offset: l
        });
        y = y || [],
        i.value = t ? y.length >= t : y.length > 0,
        (e == "offset" ? l == 0 : s <= 1) ? n.value = y : n.value = n.value.concat(y),
        r.value = !1,
        o.value = !0
    }
      , _ = async()=>{
        i.value = !0,
        r.value = !0,
        o.value = !1,
        s = 1,
        l = 0,
        await f()
    }
      , p = ()=>{
        e == "offset" ? l = n.value.length : s += 1,
        f()
    }
    ;
    return Ze(()=>{
        a && f()
    }
    ),
    {
        listRef: n,
        hasMoreRef: i,
        infiniteLoadingRef: r,
        didLoadRef: o,
        refreshList: _,
        onInfiniteLoading: p,
        onListFetching: y=>{
            m = y
        }
    }
}
function Fc(e={
    size: 0,
    initFetch: !0
}) {
    return jr("page", e.size, e.initFetch)
}
function xc(e={
    size: 0,
    initFetch: !0
}) {
    return jr("offset", e.size, e.initFetch)
}
function Vl(e=va.create(), t="", a, n) {
    a.key = t;
    const i = e.interceptors.request;
    i.handlers = i.handlers.filter(r=>r.fulfilled.key != t),
    i.use(a, n)
}
function Wl(e=va.create(), t="", a, n) {
    a.key = t;
    const i = e.interceptors.response;
    i.handlers = i.handlers.filter(r=>r.fulfilled.key != t),
    i.use(a, n)
}
function Kl(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const $r = Br("language", "en")
  , ga = {
    de: zs,
    en: Gs,
    ja: qs,
    nl: Ys,
    it: Xs,
    es: Qs,
    fr: Js,
    et: Zs,
    br: el,
    se: tl,
    sa: nl,
    ru: al,
    zhCN: Hs
}
  , zt = Ks.createI18n({
    locale: $r.value,
    messages: ga
})
  , Hl = Object.keys(ga).map(e=>({
    label: ga[e].title,
    value: e
}))
  , Gl = (e={
    label: "",
    value: ""
})=>{
    zt.locale = e.value,
    $r.value = e.value,
    setTimeout(()=>{
        location.reload()
    }
    , 500)
}
  , Z = zt.global.t
  , zl = "USDT "
  , Bc = e=>{
    let t = Kl(parseFloat(e || 0).toFixed(2));
    return "".concat(zl).concat(t)
}
  , ql = "modulepreload"
  , Yl = function(e) {
    return "/" + e
}
  , Pn = {}
  , Y = function(t, a, n) {
    if (!a || a.length === 0)
        return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(a.map(r=>{
        if (r = Yl(r),
        r in Pn)
            return;
        Pn[r] = !0;
        const o = r.endsWith(".css")
          , s = o ? '[rel="stylesheet"]' : "";
        if (!!n)
            for (let f = i.length - 1; f >= 0; f--) {
                const _ = i[f];
                if (_.href === r && (!o || _.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector('link[href="'.concat(r, '"]').concat(s)))
            return;
        const m = document.createElement("link");
        if (m.rel = o ? "stylesheet" : ql,
        o || (m.as = "script",
        m.crossOrigin = ""),
        m.href = r,
        document.head.appendChild(m),
        o)
            return new Promise((f,_)=>{
                m.addEventListener("load", f),
                m.addEventListener("error", ()=>_(new Error("Unable to preload CSS for ".concat(r))))
            }
            )
    }
    )).then(()=>t()).catch(r=>{
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = r,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw r
    }
    )
}
  , Xl = [{
    path: "/",
    name: "home",
    component: ()=>Y(()=>import("./HomePage-b631c64b.js"), ["assets/HomePage-b631c64b.js", "assets/InvitePopup-83b9c332.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/member-0cc6c565.js", "assets/NoticeIcon-502ef7c4.js", "assets/messages-17f9ba30.js", "assets/HomePage-b257140d.css"]),
    meta: {
        tabBar: !0,
        loginRequired: !0
    }
}, {
    path: "/order",
    name: "order",
    component: ()=>Y(()=>import("./OrderPage-0ec36b44.js"), ["assets/OrderPage-0ec36b44.js", "assets/TaskPopup-31917ea2.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/NoticeIcon-502ef7c4.js", "assets/messages-17f9ba30.js"]),
    meta: {
        tabBar: !0,
        loginRequired: !0
    }
}, {
    path: "/task",
    name: "task",
    component: ()=>Y(()=>import("./TaskPage-30342b8e.js"), ["assets/TaskPage-30342b8e.js", "assets/VipCard-e0727a15.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/TaskPopup-31917ea2.js", "assets/NoticeIcon-502ef7c4.js", "assets/messages-17f9ba30.js"]),
    meta: {
        tabBar: !0,
        loginRequired: !0
    }
}, {
    path: "/service",
    name: "service",
    component: ()=>Y(()=>import("./ServicePage-4e9b90d8.js"), ["assets/ServicePage-4e9b90d8.js", "assets/NoticeIcon-502ef7c4.js", "assets/messages-17f9ba30.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        tabBar: !0,
        loginRequired: !0
    }
}, {
    path: "/mine",
    name: "mine",
    component: ()=>Y(()=>import("./MinePage-da3ac92d.js"), ["assets/MinePage-da3ac92d.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/InvitePopup-83b9c332.js", "assets/NoticeIcon-502ef7c4.js", "assets/messages-17f9ba30.js"]),
    meta: {
        tabBar: !0,
        loginRequired: !0
    }
}, {
    path: "/message",
    name: "message",
    component: ()=>Y(()=>import("./MessagePage-3e9f6700.js"), ["assets/MessagePage-3e9f6700.js", "assets/messages-17f9ba30.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/login",
    name: "login",
    component: ()=>Y(()=>import("./LoginPage-d7eaeed0.js"), ["assets/LoginPage-d7eaeed0.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/register",
    name: "register",
    component: ()=>Y(()=>import("./RegisterPage-4b785a00.js"), ["assets/RegisterPage-4b785a00.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/vip",
    name: "vip",
    component: ()=>Y(()=>import("./VipPage-e22459a7.js"), ["assets/VipPage-e22459a7.js", "assets/VipCard-e0727a15.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/settings",
    name: "settings",
    component: ()=>Y(()=>import("./SettingsPage-e5f62866.js"), ["assets/SettingsPage-e5f62866.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/faq",
    name: "faq",
    component: ()=>Y(()=>import("./FaqPage-25ed8e14.js"), ["assets/FaqPage-25ed8e14.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/withdraw",
    name: "withdraw",
    component: ()=>Y(()=>import("./WithdrawPage-9cc0195d.js"), ["assets/WithdrawPage-9cc0195d.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/member-0cc6c565.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/recharge",
    name: "recharge",
    component: ()=>Y(()=>import("./RechargePage-d496e485.js"), ["assets/RechargePage-d496e485.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/member-0cc6c565.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/bankcard",
    name: "bankCard",
    component: ()=>Y(()=>import("./WithdrawBankCardPage-5a81c282.js"), ["assets/WithdrawBankCardPage-5a81c282.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/uaddress",
    name: "uAddress",
    component: ()=>Y(()=>import("./WithdrawUAddressPage-b1461d80.js"), ["assets/WithdrawUAddressPage-b1461d80.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/pixAccount",
    name: "pixAccount",
    component: ()=>Y(()=>import("./WithdrawPixPage-112e4ea3.js"), ["assets/WithdrawPixPage-112e4ea3.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/wallet",
    name: "wallet",
    component: ()=>Y(()=>import("./WalletPage-57d9deb0.js"), ["assets/WalletPage-57d9deb0.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/InvitePopup-83b9c332.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/wallet/record",
    name: "walletRecord",
    component: ()=>Y(()=>import("./WalletRecordPage-e55568d1.js"), ["assets/WalletRecordPage-e55568d1.js", "assets/wallet-45207eaa.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/wallet/team",
    name: "walletTeam",
    component: ()=>Y(()=>import("./WalletTeamPage-f6e38093.js"), ["assets/WalletTeamPage-f6e38093.js", "assets/InvitePopup-83b9c332.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js", "assets/member-0cc6c565.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/password/change",
    name: "passwordChange",
    component: ()=>Y(()=>import("./ChangePasswordPage-f43412e7.js"), ["assets/ChangePasswordPage-f43412e7.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/cashword/change",
    name: "cashwordChange",
    component: ()=>Y(()=>import("./ChangeCashwordPage-ff38176e.js"), ["assets/ChangeCashwordPage-ff38176e.js", "assets/member-0cc6c565.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {
        loginRequired: !0
    }
}, {
    path: "/about",
    name: "about",
    component: ()=>Y(()=>import("./AboutPage-08409d8b.js"), ["assets/AboutPage-08409d8b.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}, {
    path: "/license",
    name: "license",
    component: ()=>Y(()=>import("./LicensePage-d19a904b.js"), ["assets/LicensePage-d19a904b.js", "assets/vue-d77f01f9.js", "assets/vant-335454c8.js"]),
    meta: {}
}]
  , Ql = ai({
    history: ni("/"),
    scrollBehavior: ()=>({
        top: 0
    }),
    routes: Xl
})
  , Jl = "https://www.vouuaon.icu"
  , Zl = "134"
  , Ct = va.create({
    baseURL: Jl,
    timeout: 1e4
});
Ct.interceptors.request.use(e=>(e.headers["Accept-Language"] = zt.global.locale,
e.headers["merchant-id"] = Zl,
e));
Ct.interceptors.response.use(e=>e.data.code == 200 ? e.data : Promise.reject(e.data), ()=>Promise.reject({
    message: "No Network Connection, Please Try Later"
}));
const wa = async(e={
    url: "",
    method: "",
    params: [],
    data: []
},t={
    loading: !1,
    hideErrMessage: !1
})=>{
    try {
        t.loading && ii({
            forbidClick: !0
        });
        const a = await Ct(e);
        return t.loading && xa(),
        a && a.message && a.message.toLowerCase() == "success" && (a.message = "Successful"),
        a
    } catch (a) {
        return t.loading && xa(),
        t.hideErrMessage || a.message && Rn(a.message),
        a
    }
}
  , Ot = (e={
    url: "",
    params: {}
},t={
    loading: !1,
    hideErrMessage: !1
})=>wa({
    method: "GET",
    ...e
}, t)
  , qt = (e={
    url: "",
    data: {}
},t={
    loading: !1,
    hideErrMessage: !1
})=>wa({
    method: "POST",
    ...e
}, t)
  , Uc = (e={
    url: "",
    data: {}
},t={
    loading: !1,
    hideErrMessage: !1
})=>wa({
    method: "PUT",
    ...e
}, t)
  , jc = (e,t={
    loading: !1,
    hideErrMessage: !1
})=>{
    let a = e.content.replace(/data:image.+?;base64,/g, "");
    return qt({
        url: "/v1/file/base64",
        data: {
            image: a
        },
        timeout: 6e4
    }, t)
}
  , Yt = Br("authInfo", {})
  , Vr = Ce(()=>!!Yt.value.access_token)
  , Wr = []
  , Kr = []
  , Hr = e=>{
    if (e.code != 200 || !e.data)
        return;
    const t = {
        ...e.data
    }
      , a = t.member;
    delete t.member,
    Yt.value = t,
    Wr.forEach(n=>n({
        member: a
    }))
}
  , $c = e=>{
    Wr.push(e)
}
  , Vc = e=>{
    Kr.push(e)
}
  , Ra = async()=>{
    Yt.value = {},
    Kr.forEach(e=>e())
}
;
function Gr() {
    const e = W({})
      , t = W({})
      , a = async()=>{
        const n = await Ot({
            url: "/v1/site/register-config"
        }, {
            loading: !0
        });
        e.value = n.data || {},
        t.value = (e.value.mobile_preg_list || [])[0] || {}
    }
    ;
    return Ze(()=>{
        a()
    }
    ),
    {
        configRef: e,
        phoneCodeRef: t
    }
}
function Wc() {
    const {configRef: e, phoneCodeRef: t} = Gr()
      , a = Bt()
      , n = ba()
      , i = W({
        mobile: "",
        password: "",
        password_repetition: "",
        invitation_code: n.query.invitation_code
    });
    return {
        configRef: e,
        dataRef: i,
        phoneCodeRef: t,
        register: async()=>{
            const o = {
                ...i.value,
                group: "h5",
                mobile_code: t.value.code
            }
              , s = await qt({
                url: "/v1/site/register",
                data: o
            }, {
                loading: !0
            });
            if (Hr(s),
            s.code != 200)
                return;
            const l = decodeURI(n.query.next || "/");
            a.replace(l)
        }
    }
}
function Kc() {
    const {configRef: e, phoneCodeRef: t} = Gr()
      , a = W({
        username: "",
        password: ""
    })
      , n = ba()
      , i = Bt();
    return {
        configRef: e,
        dataRef: a,
        phoneCodeRef: t,
        login: async()=>{
            const o = {
                ...a.value,
                group: "h5",
                mobile_code: t.value.code
            };
            o.username || (o.username = (document.getElementById("username") || {}).value),
            o.password || (o.password = (document.getElementById("password") || {}).value);
            const s = await qt({
                url: "/v1/site/login",
                data: o
            }, {
                loading: !0
            });
            if (Hr(s),
            s.code != 200)
                return;
            const l = decodeURI(n.query.next || "/");
            i.replace(l)
        }
    }
}
function Hc() {
    const e = Bt();
    return {
        logout: async()=>{
            await oi({
                title: Z("提示"),
                message: Z("确认退出登录"),
                cancelButtonText: Z("取消"),
                confirmButtonText: Z("确认")
            }).catch(n=>n) == "confirm" && (await Ra(),
            await _a(),
            e.replace({
                name: "home"
            }))
        }
    }
}
function Gc() {
    const e = W({
        old_password: "",
        password: "",
        password_repetition: ""
    })
      , t = Bt()
      , a = ba()
      , n = async r=>{
        const o = {
            ...e.value
        };
        o.type = r,
        o.group = "h5";
        const s = await qt({
            url: "/v1/site/modify-pwd",
            data: o
        }, {
            loading: !0
        });
        s.code == 200 && (Rn(s.message),
        r == "login_pwd" && Ra(),
        setTimeout(()=>{
            r == "login_pwd" ? t.replace({
                name: "mine"
            }) : r == "pay_pwd" && (a.query.withdraw == 1 ? t.replace({
                name: "withdraw"
            }) : t.back())
        }
        , 1e3))
    }
    ;
    return {
        dataRef: e,
        changePassword: async()=>await n("login_pwd"),
        change: n
    }
}
Vl(Ct, "auth", e=>(e.headers["x-api-key"] = Yt.value.access_token,
e));
Wl(Ct, "auth", e=>e, e=>(e.code != 401 || (Ra(),
e.message && delete e.message),
Promise.reject(e)));
const ec = {
    id: "app",
    class: "min-h-screen flex flex-col"
}
  , tc = {
    __name: "App",
    setup(e) {
        return (t,a)=>{
            const n = he("router-view")
              , i = he("ai-page-footer");
            return _e(),
            Ne("div", ec, [be(n, {
                class: "grow"
            }), be(i)])
        }
    }
}
  , ac = "/imgs/bg-logo.jpg"
  , bt = W({});
function zr() {
    const e = Ce(()=>bt.value.banners || [])
      , t = Ce(()=>bt.value.weblist || [])
      , a = Ce(()=>bt.value.customer_url)
      , n = Ce(()=>bt.value.service_time)
      , i = async()=>{
        const s = (await Ot({
            url: "/v1/site/config"
        })).data || {};
        bt.value = s
    }
      , r = ()=>{
        a.value && window.open(a.value)
    }
    ;
    return Ze(()=>{
        i()
    }
    ),
    {
        bannersRef: e,
        webListRef: t,
        customerUrlRef: a,
        serviceTimeRef: n,
        toCustomerURL: r
    }
}
const Ln = W([]);
function zc() {
    const {bannersRef: e, webListRef: t} = zr()
      , a = async()=>{
        const n = await Ot({
            url: "/task/v1/goods-list/index"
        })
          , i = n.data && n.data.list || [];
        Ln.value = i
    }
    ;
    return Ze(()=>{
        a()
    }
    ),
    {
        goodsListRef: Ln,
        bannersRef: e,
        webListRef: t
    }
}
const Nn = W([]);
function qc() {
    const e = async()=>{
        const n = (await Ot({
            url: "/rf-article/article/index",
            params: {
                cate_id: 1
            }
        }, {
            loading: !0
        })).data || [];
        Nn.value = n
    }
    ;
    return Ze(()=>{
        e()
    }
    ),
    {
        listRef: Nn
    }
}
function Ma({id: e=0}) {
    const t = W({})
      , a = async()=>{
        const i = await Ot({
            url: "/rf-article/article-single/view",
            params: {
                id: e
            }
        }, {
            loading: !0
        });
        t.value = i.data
    }
    ;
    return Ze(()=>{
        a()
    }
    ),
    {
        contentRef: t
    }
}
function Yc() {
    const {contentRef: e} = Ma({
        id: 1
    });
    return {
        contentRef: e
    }
}
function Xc() {
    const {contentRef: e} = Ma({
        id: 2
    });
    return {
        contentRef: e
    }
}
function Qc() {
    const {contentRef: e} = Ma({
        id: 3
    });
    return {
        contentRef: e
    }
}
const nc = {
    class: "text-center flex flex-col justify-start min-h-[calc(100vh-50px)] relative text-sm z-10"
}
  , rc = {
    class: "absolute left-5 right-5 top-2 flex items-center justify-between",
    style: {
        "z-index": "999"
    }
}
  , ic = {
    class: "flex-1"
}
  , oc = X("div", {
    class: "mb-5"
}, [X("img", {
    src: ac,
    class: "w-full h-auto self-center"
})], -1)
  , sc = {
    class: "text-lg text-theme-gray-light"
}
  , lc = {
    class: "relative p-5 flex flex-col"
}
  , cc = {
    class: "py-10"
}
  , uc = ["onClick"]
  , dc = {
    __name: "LoginIndex",
    setup(e) {
        const {toCustomerURL: t} = zr()
          , a = W(!1);
        return (n,i)=>{
            const r = he("van-icon")
              , o = he("van-image")
              , s = he("van-button")
              , l = he("ai-card")
              , m = he("van-popup");
            return _e(),
            Ne("div", nc, [X("div", rc, [X("div", {
                class: "underline text-white underline-offset-2 cursor-pointer",
                onClick: i[0] || (i[0] = f=>a.value = !0)
            }, [be(r, {
                name: "exchange",
                class: "mr-1"
            }), X("span", null, Le(ge(Z)("选择语言")), 1)]), be(o, {
                "lazy-load": !1,
                class: "cursor-pointer",
                width: "30",
                src: "/imgs/service.png",
                onClick: ge(t)
            }, null, 8, ["onClick"])]), X("section", ic, [oc, be(l, {
                class: In(["pt-6 pb-12 mb-10 shadow-lg shadow-theme-red", "mt-4"])
            }, {
                default: Xe(()=>[X("div", sc, Le(ge(Z)("请登录或创建您的账号")), 1), be(s, {
                    block: "",
                    type: "primary",
                    size: "large",
                    class: "mt-8",
                    onClick: i[1] || (i[1] = f=>n.$router.push({
                        name: "login",
                        query: {
                            next: encodeURI(n.$route.fullPath)
                        }
                    }))
                }, {
                    default: Xe(()=>[St(Le(ge(Z)("登录")), 1)]),
                    _: 1
                }), be(s, {
                    block: "",
                    plain: "",
                    size: "large",
                    class: "mt-4",
                    onClick: i[2] || (i[2] = f=>n.$router.push({
                        name: "register",
                        query: {
                            next: encodeURI(n.$route.fullPath)
                        }
                    }))
                }, {
                    default: Xe(()=>[St(Le(ge(Z)("创建账号")), 1)]),
                    _: 1
                })]),
                _: 1
            }, 8, ["class"])]), X("div", {
                class: "w-full pb-3 underline underline-offset-2 cursor-pointer",
                onClick: i[3] || (i[3] = f=>n.$router.push({
                    name: "about"
                }))
            }, Le(ge(Z)("关于") + n.$appName), 1), be(m, {
                show: a.value,
                "onUpdate:show": i[4] || (i[4] = f=>a.value = f),
                closeable: "",
                "safe-area-inset-bottom": "",
                class: "rounded-md w-full md:max-w-3xl left-auto",
                position: "bottom"
            }, {
                default: Xe(()=>[X("div", lc, [X("div", null, Le(ge(Z)("选择语言")), 1), X("div", cc, [(_e(!0),
                Ne(ha, null, wn(ge(Hl), (f,_)=>(_e(),
                Ne("div", {
                    key: _,
                    class: "py-5 flex items-center justify-between border-b border-[#00000014] cursor-pointer opacity-90",
                    onClick: p=>(ge(Gl)(f),
                    a.value = !1)
                }, [St(Le(f.label) + " ", 1), be(r, {
                    name: "arrow",
                    color: "#0000004D"
                })], 8, uc))), 128))])])]),
                _: 1
            }, 8, ["show"])])
        }
    }
}
  , mc = {
    class: "text-[#000000E5]"
}
  , fc = {
    class: "h-12 text-white text-lg"
}
  , gc = {
    class: "px-3 flex"
}
  , pc = {
    class: "basis-3/12 flex items-center"
}
  , _c = {
    class: "basis-6/12 h-12 flex items-center justify-center"
}
  , vc = {
    class: "basis-3/12 flex items-center justify-end"
}
  , bc = {
    __name: "AiPage",
    props: {
        title: {
            type: String,
            default: ""
        },
        navClass: {
            type: String,
            default: ""
        }
    },
    setup(e) {
        const t = Ur()
          , a = Ce(()=>t.top.value || "0");
        return pa(()=>{
            t.update()
        }
        ),
        (n,i)=>{
            const r = he("van-icon");
            return _e(),
            Ne("div", mc, [X("div", {
                style: It("height: ".concat(a.value))
            }, [X("div", {
                class: "fixed bg-theme w-full z-50 left-0",
                style: It("height: ".concat(a.value))
            }, null, 4)], 4), n.$route.meta.loginRequired && !ge(Vr) ? (_e(),
            Zt(dc, {
                key: 0
            })) : (_e(),
            Ne(ha, {
                key: 1
            }, [qe(n.$slots, "nav", {
                top: a.value
            }, ()=>[qe(n.$slots, "navextra", {
                top: a.value
            }), X("div", fc, [X("div", {
                class: In(["fixed left-0 md:left-[calc(50vw-24rem)] w-screen md:max-w-3xl z-50 bg-theme", e.navClass]),
                style: It("top: ".concat(a.value))
            }, [X("header", gc, [X("div", pc, [n.$route.meta.tabBar ? ea("", !0) : (_e(),
            Zt(r, {
                key: 0,
                class: "cursor-pointer",
                size: "20",
                name: "arrow-left",
                onClick: i[0] || (i[0] = o=>n.$router.back())
            }))]), X("div", _c, [qe(n.$slots, "title", {}, ()=>[St(Le(e.title.toUpperCase()), 1)])]), X("div", vc, [qe(n.$slots, "right")])])], 6)])]), qe(n.$slots, "default")], 64))])
        }
    }
}
  , hc = {
    class: "flex flex-col items-center"
}
  , Ec = {
    class: "mt-1 text-sm"
}
  , kc = {
    class: "h-4"
}
  , Tc = {
    __name: "AiPageFooter",
    setup(e) {
        const t = [{
            name: Z("首页"),
            icon: "/imgs/sy_tab_1@3x.png",
            to: "home"
        }, {
            name: Z("订单"),
            icon: "/imgs/sy_tab_2@3x.png",
            to: "order"
        }, {
            name: Z("任务"),
            icon: "/imgs/sy_tab_3@3x.png",
            to: "task"
        }, {
            name: Z("客服"),
            icon: "/imgs/sy_tab_4@3x.png",
            to: "service"
        }, {
            name: Z("我的"),
            icon: "/imgs/sy_tab_5@3x.png",
            to: "mine"
        }]
          , a = Ur()
          , n = Ce(()=>a.bottom.value || "0");
        return pa(()=>{
            a.update()
        }
        ),
        (i,r)=>{
            const o = he("van-icon")
              , s = he("van-tabbar-item")
              , l = he("van-tabbar");
            return i.$route.meta.tabBar && (ge(Vr) || !i.$route.meta.loginRequired) ? (_e(),
            Ne("div", {
                key: 0,
                id: "tabbar",
                class: "relative",
                style: It("height: calc(".concat(n.value, " + 50px);"))
            }, [be(l, {
                class: "max-w-3xl md:left-[calc(50vw-24rem)] bg-theme",
                route: "",
                "inactive-color": "white",
                "active-color": "white"
            }, {
                default: Xe(()=>[(_e(),
                Ne(ha, null, wn(t, (m,f)=>be(s, {
                    key: f,
                    replace: "",
                    to: {
                        name: m.to
                    }
                }, {
                    icon: Xe(({active: _})=>[X("div", hc, [X("div", Ec, Le(m.name), 1), X("div", kc, [_ ? (_e(),
                    Zt(o, {
                        key: 0,
                        size: "16",
                        name: m.icon
                    }, null, 8, ["name"])) : ea("", !0)])])]),
                    _: 2
                }, 1032, ["to"])), 64))]),
                _: 1
            })], 4)) : ea("", !0)
        }
    }
}
  , Cc = (e,t)=>{
    const a = e.__vccOpts || e;
    for (const [n,i] of t)
        a[n] = i;
    return a
}
  , Oc = {}
  , Ac = {
    class: "rounded-md overflow-hidden p-4 mx-4 bg-white"
};
function Pc(e, t) {
    return _e(),
    Ne("div", Ac, [qe(e.$slots, "default")])
}
const Lc = Cc(Oc, [["render", Pc]])
  , yn = {
    AiPage: bc,
    AiPageFooter: Tc,
    AiCard: Lc
}
  , Nc = {
    install(e) {
        Object.keys(yn).forEach(t=>{
            e.component(t, yn[t])
        }
        )
    }
};
const Da = ri(tc);
Mn.props.lazyLoad = {
    type: Boolean,
    default: !0
};
Mn.props.showLoading = {
    type: Boolean,
    default: !1
};
si.props.border = {
    type: Boolean,
    default: !1
};
Dn.props.loadingText = {
    type: String,
    default: Z("加载中...")
};
Dn.props.finishedText = {
    type: String,
    default: Z("加载完成")
};
Da.use(li).use(ci).use(Ql).use(zt).use(Nc);
ui({
    confirmButtonText: Z("确认"),
    cancelButtonText: Z("取消")
});
const qr = "Namshi Online Shopping";
Da.config.globalProperties.$appName = qr;
document.title = qr;
let Yr = "#010101";
document.documentElement.style.setProperty("--theme", Yr);
document.querySelector('meta[name="theme-color"]').setAttribute("content", Yr);
Da.mount("#app");
export {$c as A, Yc as B, Xc as C, yc as __vite_legacy_guard, Br as a, xc as b, wc as c, zr as d, Hc as e, Bc as f, Ot as g, Fc as h, Vr as i, Kc as j, Wc as k, Hl as l, Qc as m, Mc as n, Dc as o, qt as p, qc as q, Kl as r, Gl as s, Z as t, zc as u, Rc as v, jc as w, Gc as x, Vc as y, Uc as z};
