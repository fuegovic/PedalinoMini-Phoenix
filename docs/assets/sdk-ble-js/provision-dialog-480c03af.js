import {
  I as t,
  a as e,
  b as i,
  c as r,
  d as o,
  e as n,
  f as a,
  h as d,
} from "./provision-095c1472.js";
var l = function (t, e) {
  return (
    (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }),
    l(t, e)
  );
};
function c(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  function i() {
    this.constructor = t;
  }
  l(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
}
var s = function () {
  return (
    (s =
      Object.assign ||
      function (t) {
        for (var e, i = 1, r = arguments.length; i < r; i++)
          for (var o in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }),
    s.apply(this, arguments)
  );
};
function p(t, e, i, r) {
  var o,
    n = arguments.length,
    a =
      n < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, i)) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    a = Reflect.decorate(t, e, i, r);
  else
    for (var d = t.length - 1; d >= 0; d--)
      (o = t[d]) && (a = (n < 3 ? o(a) : n > 3 ? o(e, i, a) : o(e, i)) || a);
  return n > 3 && a && Object.defineProperty(e, i, a), a;
}
function m(t) {
  var e = "function" == typeof Symbol && Symbol.iterator,
    i = e && t[e],
    r = 0;
  if (i) return i.call(t);
  if (t && "number" == typeof t.length)
    return {
      next: function () {
        return (
          t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
const u = window,
  h =
    u.ShadowRoot &&
    (void 0 === u.ShadyCSS || u.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  f = Symbol(),
  g = new WeakMap();
let b = class {
  constructor(t, e, i) {
    if (((this._$cssResult$ = !0), i !== f))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (h && void 0 === t) {
      const i = void 0 !== e && 1 === e.length;
      i && (t = g.get(e)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && g.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const x = (t, ...e) => {
    const i =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, r) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ("number" == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(i) +
              t[r + 1],
            t[0],
          );
    return new b(i, t, f);
  },
  v = h
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return ((t) =>
                new b("string" == typeof t ? t : t + "", void 0, f))(e);
            })(t)
          : t;
var _;
const y = window,
  w = y.trustedTypes,
  E = w ? w.emptyScript : "",
  C = y.reactiveElementPolyfillSupport,
  A = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? E : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    },
  },
  S = (t, e) => e !== t && (e == e || t == t),
  I = { attribute: !0, type: String, converter: A, reflect: !1, hasChanged: S };
let k = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(),
      (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, i) => {
        const r = this._$Ep(i, e);
        void 0 !== r && (this._$Ev.set(r, i), t.push(r));
      }),
      t
    );
  }
  static createProperty(t, e = I) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = "symbol" == typeof t ? Symbol() : "__" + t,
        r = this.getPropertyDescriptor(t, i, e);
      void 0 !== r && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(r) {
        const o = this[t];
        (this[e] = r), this.requestUpdate(t, o, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || I;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      void 0 !== t.h && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const i of e) this.createProperty(i, t[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(v(t));
    } else void 0 !== t && e.push(v(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : "string" == typeof i
        ? i
        : "string" == typeof t
          ? t.toLowerCase()
          : void 0;
  }
  u() {
    var t;
    (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (t = this.constructor.h) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var e, i;
    (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = t.hostConnected) || void 0 === i || i.call(t));
  }
  removeController(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, e) => {
        h
          ? (t.adoptedStyleSheets = e.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : e.forEach((e) => {
              const i = document.createElement("style"),
                r = u.litNonce;
              void 0 !== r && i.setAttribute("nonce", r),
                (i.textContent = e.cssText),
                t.appendChild(i);
            });
      })(e, this.constructor.elementStyles),
      e
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostConnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((t) => {
        var e;
        return null === (e = t.hostDisconnected) || void 0 === e
          ? void 0
          : e.call(t);
      });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = I) {
    var r;
    const o = this.constructor._$Ep(t, i);
    if (void 0 !== o && !0 === i.reflect) {
      const n = (
        void 0 !==
        (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
          ? i.converter
          : A
      ).toAttribute(e, i.type);
      (this._$El = t),
        null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
        (this._$El = null);
    }
  }
  _$AK(t, e) {
    var i;
    const r = this.constructor,
      o = r._$Ev.get(t);
    if (void 0 !== o && this._$El !== o) {
      const t = r.getPropertyOptions(o),
        n =
          "function" == typeof t.converter
            ? { fromAttribute: t.converter }
            : void 0 !==
                (null === (i = t.converter) || void 0 === i
                  ? void 0
                  : i.fromAttribute)
              ? t.converter
              : A;
      (this._$El = o),
        (this[o] = n.fromAttribute(e, t.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, e, i) {
    let r = !0;
    void 0 !== t &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || S)(
        this[t],
        e,
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          !0 === i.reflect &&
            this._$El !== t &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(t, i)))
        : (r = !1)),
      !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostUpdate) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
            this.update(i))
          : this._$Ek();
    } catch (t) {
      throw ((e = !1), this._$Ek(), t);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.forEach((t) => {
        var e;
        return null === (e = t.hostUpdated) || void 0 === e
          ? void 0
          : e.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
};
var R;
(k.finalized = !0),
  (k.elementProperties = new Map()),
  (k.elementStyles = []),
  (k.shadowRootOptions = { mode: "open" }),
  null == C || C({ ReactiveElement: k }),
  (null !== (_ = y.reactiveElementVersions) && void 0 !== _
    ? _
    : (y.reactiveElementVersions = [])
  ).push("1.6.1");
const O = window,
  T = O.trustedTypes,
  L = T ? T.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  $ = `lit$${(Math.random() + "").slice(9)}$`,
  N = "?" + $,
  F = `<${N}>`,
  H = document,
  D = (t = "") => H.createComment(t),
  P = (t) => null === t || ("object" != typeof t && "function" != typeof t),
  z = Array.isArray,
  M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  U = /-->/g,
  V = />/g,
  B = RegExp(
    ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
    "g",
  ),
  j = /'/g,
  G = /"/g,
  W = /^(?:script|style|textarea|title)$/i,
  Y = (
    (t) =>
    (e, ...i) => ({ _$litType$: t, strings: e, values: i })
  )(1),
  X = Symbol.for("lit-noChange"),
  q = Symbol.for("lit-nothing"),
  K = new WeakMap(),
  Z = H.createTreeWalker(H, 129, null, !1),
  Q = (t, e) => {
    const i = t.length - 1,
      r = [];
    let o,
      n = 2 === e ? "<svg>" : "",
      a = M;
    for (let e = 0; e < i; e++) {
      const i = t[e];
      let d,
        l,
        c = -1,
        s = 0;
      for (; s < i.length && ((a.lastIndex = s), (l = a.exec(i)), null !== l); )
        (s = a.lastIndex),
          a === M
            ? "!--" === l[1]
              ? (a = U)
              : void 0 !== l[1]
                ? (a = V)
                : void 0 !== l[2]
                  ? (W.test(l[2]) && (o = RegExp("</" + l[2], "g")), (a = B))
                  : void 0 !== l[3] && (a = B)
            : a === B
              ? ">" === l[0]
                ? ((a = null != o ? o : M), (c = -1))
                : void 0 === l[1]
                  ? (c = -2)
                  : ((c = a.lastIndex - l[2].length),
                    (d = l[1]),
                    (a = void 0 === l[3] ? B : '"' === l[3] ? G : j))
              : a === G || a === j
                ? (a = B)
                : a === U || a === V
                  ? (a = M)
                  : ((a = B), (o = void 0));
      const p = a === B && t[e + 1].startsWith("/>") ? " " : "";
      n +=
        a === M
          ? i + F
          : c >= 0
            ? (r.push(d), i.slice(0, c) + "$lit$" + i.slice(c) + $ + p)
            : i + $ + (-2 === c ? (r.push(void 0), e) : p);
    }
    const d = n + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== L ? L.createHTML(d) : d, r];
  };
class J {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let o = 0,
      n = 0;
    const a = t.length - 1,
      d = this.parts,
      [l, c] = Q(t, e);
    if (
      ((this.el = J.createElement(l, i)),
      (Z.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content,
        e = t.firstChild;
      e.remove(), t.append(...e.childNodes);
    }
    for (; null !== (r = Z.nextNode()) && d.length < a; ) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) {
          const t = [];
          for (const e of r.getAttributeNames())
            if (e.endsWith("$lit$") || e.startsWith($)) {
              const i = c[n++];
              if ((t.push(e), void 0 !== i)) {
                const t = r.getAttribute(i.toLowerCase() + "$lit$").split($),
                  e = /([.?@])?(.*)/.exec(i);
                d.push({
                  type: 1,
                  index: o,
                  name: e[2],
                  strings: t,
                  ctor:
                    "." === e[1]
                      ? ot
                      : "?" === e[1]
                        ? at
                        : "@" === e[1]
                          ? dt
                          : rt,
                });
              } else d.push({ type: 6, index: o });
            }
          for (const e of t) r.removeAttribute(e);
        }
        if (W.test(r.tagName)) {
          const t = r.textContent.split($),
            e = t.length - 1;
          if (e > 0) {
            r.textContent = T ? T.emptyScript : "";
            for (let i = 0; i < e; i++)
              r.append(t[i], D()),
                Z.nextNode(),
                d.push({ type: 2, index: ++o });
            r.append(t[e], D());
          }
        }
      } else if (8 === r.nodeType)
        if (r.data === N) d.push({ type: 2, index: o });
        else {
          let t = -1;
          for (; -1 !== (t = r.data.indexOf($, t + 1)); )
            d.push({ type: 7, index: o }), (t += $.length - 1);
        }
      o++;
    }
  }
  static createElement(t, e) {
    const i = H.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function tt(t, e, i = t, r) {
  var o, n, a, d;
  if (e === X) return e;
  let l =
    void 0 !== r
      ? null === (o = i._$Co) || void 0 === o
        ? void 0
        : o[r]
      : i._$Cl;
  const c = P(e) ? void 0 : e._$litDirective$;
  return (
    (null == l ? void 0 : l.constructor) !== c &&
      (null === (n = null == l ? void 0 : l._$AO) ||
        void 0 === n ||
        n.call(l, !1),
      void 0 === c ? (l = void 0) : ((l = new c(t)), l._$AT(t, i, r)),
      void 0 !== r
        ? ((null !== (a = (d = i)._$Co) && void 0 !== a ? a : (d._$Co = []))[
            r
          ] = l)
        : (i._$Cl = l)),
    void 0 !== l && (e = tt(t, l._$AS(t, e.values), l, r)),
    e
  );
}
class et {
  constructor(t, e) {
    (this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var e;
    const {
        el: { content: i },
        parts: r,
      } = this._$AD,
      o = (
        null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
          ? e
          : H
      ).importNode(i, !0);
    Z.currentNode = o;
    let n = Z.nextNode(),
      a = 0,
      d = 0,
      l = r[0];
    for (; void 0 !== l; ) {
      if (a === l.index) {
        let e;
        2 === l.type
          ? (e = new it(n, n.nextSibling, this, t))
          : 1 === l.type
            ? (e = new l.ctor(n, l.name, l.strings, this, t))
            : 6 === l.type && (e = new lt(n, this, t)),
          this.u.push(e),
          (l = r[++d]);
      }
      a !== (null == l ? void 0 : l.index) && ((n = Z.nextNode()), a++);
    }
    return o;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class it {
  constructor(t, e, i, r) {
    var o;
    (this.type = 2),
      (this._$AH = q),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = r),
      (this._$Cm =
        null === (o = null == r ? void 0 : r.isConnected) || void 0 === o || o);
  }
  get _$AU() {
    var t, e;
    return null !==
      (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== e
      ? e
      : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = tt(this, t, e)),
      P(t)
        ? t === q || null == t || "" === t
          ? (this._$AH !== q && this._$AR(), (this._$AH = q))
          : t !== this._$AH && t !== X && this.g(t)
        : void 0 !== t._$litType$
          ? this.$(t)
          : void 0 !== t.nodeType
            ? this.T(t)
            : ((t) =>
                  z(t) ||
                  "function" ==
                    typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
              ? this.k(t)
              : this.g(t);
  }
  O(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  g(t) {
    this._$AH !== q && P(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(H.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var e;
    const { values: i, _$litType$: r } = t,
      o =
        "number" == typeof r
          ? this._$AC(t)
          : (void 0 === r.el && (r.el = J.createElement(r.h, this.options)), r);
    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o)
      this._$AH.p(i);
    else {
      const t = new et(o, this),
        e = t.v(this.options);
      t.p(i), this.T(e), (this._$AH = t);
    }
  }
  _$AC(t) {
    let e = K.get(t.strings);
    return void 0 === e && K.set(t.strings, (e = new J(t))), e;
  }
  k(t) {
    z(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      r = 0;
    for (const o of t)
      r === e.length
        ? e.push((i = new it(this.O(D()), this.O(D()), this, this.options)))
        : (i = e[r]),
        i._$AI(o),
        r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), (e.length = r));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const e = t.nextSibling;
      t.remove(), (t = e);
    }
  }
  setConnected(t) {
    var e;
    void 0 === this._$AM &&
      ((this._$Cm = t),
      null === (e = this._$AP) || void 0 === e || e.call(this, t));
  }
}
class rt {
  constructor(t, e, i, r, o) {
    (this.type = 1),
      (this._$AH = q),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = r),
      (this.options = o),
      i.length > 2 || "" !== i[0] || "" !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = q);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, r) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o)
      (t = tt(this, t, e, 0)),
        (n = !P(t) || (t !== this._$AH && t !== X)),
        n && (this._$AH = t);
    else {
      const r = t;
      let a, d;
      for (t = o[0], a = 0; a < o.length - 1; a++)
        (d = tt(this, r[i + a], e, a)),
          d === X && (d = this._$AH[a]),
          n || (n = !P(d) || d !== this._$AH[a]),
          d === q ? (t = q) : t !== q && (t += (null != d ? d : "") + o[a + 1]),
          (this._$AH[a] = d);
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === q
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class ot extends rt {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === q ? void 0 : t;
  }
}
const nt = T ? T.emptyScript : "";
class at extends rt {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== q
      ? this.element.setAttribute(this.name, nt)
      : this.element.removeAttribute(this.name);
  }
}
class dt extends rt {
  constructor(t, e, i, r, o) {
    super(t, e, i, r, o), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = null !== (i = tt(this, t, e, 0)) && void 0 !== i ? i : q) === X)
      return;
    const r = this._$AH,
      o =
        (t === q && r !== q) ||
        t.capture !== r.capture ||
        t.once !== r.once ||
        t.passive !== r.passive,
      n = t !== q && (r === q || o);
    o && this.element.removeEventListener(this.name, this, r),
      n && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, i;
    "function" == typeof this._$AH
      ? this._$AH.call(
          null !==
            (i =
              null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
            void 0 !== i
            ? i
            : this.element,
          t,
        )
      : this._$AH.handleEvent(t);
  }
}
class lt {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    tt(this, t);
  }
}
const ct = O.litHtmlPolyfillSupport;
null == ct || ct(J, it),
  (null !== (R = O.litHtmlVersions) && void 0 !== R
    ? R
    : (O.litHtmlVersions = [])
  ).push("2.6.1");
var st, pt;
let mt = class extends k {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = ((t, e, i) => {
        var r, o;
        const n =
          null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
            ? r
            : e;
        let a = n._$litPart$;
        if (void 0 === a) {
          const t =
            null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
              ? o
              : null;
          n._$litPart$ = a = new it(
            e.insertBefore(D(), t),
            t,
            void 0,
            null != i ? i : {},
          );
        }
        return a._$AI(t), a;
      })(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return X;
  }
};
(mt.finalized = !0),
  (mt._$litElement$ = !0),
  null === (st = globalThis.litElementHydrateSupport) ||
    void 0 === st ||
    st.call(globalThis, { LitElement: mt });
const ut = globalThis.litElementPolyfillSupport;
null == ut || ut({ LitElement: mt }),
  (null !== (pt = globalThis.litElementVersions) && void 0 !== pt
    ? pt
    : (globalThis.litElementVersions = [])
  ).push("3.2.0");
const ht = (t) => (e) =>
    "function" == typeof e
      ? ((t, e) => (customElements.define(t, e), e))(t, e)
      : ((t, e) => {
          const { kind: i, elements: r } = e;
          return {
            kind: i,
            elements: r,
            finisher(e) {
              customElements.define(t, e);
            },
          };
        })(t, e),
  ft = (t, e) =>
    "method" === e.kind && e.descriptor && !("value" in e.descriptor)
      ? {
          ...e,
          finisher(i) {
            i.createProperty(e.key, t);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: e.key,
          initializer() {
            "function" == typeof e.initializer &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(e.key, t);
          },
        };
function gt(t) {
  return (e, i) =>
    void 0 !== i
      ? ((t, e, i) => {
          e.constructor.createProperty(i, t);
        })(t, e, i)
      : ft(t, e);
}
function bt(t) {
  return gt({ ...t, state: !0 });
}
const xt =
  ({ finisher: t, descriptor: e }) =>
  (i, r) => {
    var o;
    if (void 0 === r) {
      const r = null !== (o = i.originalKey) && void 0 !== o ? o : i.key,
        n =
          null != e
            ? {
                kind: "method",
                placement: "prototype",
                key: r,
                descriptor: e(i.key),
              }
            : { ...i, key: r };
      return (
        null != t &&
          (n.finisher = function (e) {
            t(e, r);
          }),
        n
      );
    }
    {
      const o = i.constructor;
      void 0 !== e && Object.defineProperty(i, r, e(r)), null == t || t(o, r);
    }
  };
function vt(t) {
  return xt({
    finisher: (e, i) => {
      Object.assign(e.prototype[i], t);
    },
  });
}
function _t(t, e) {
  return xt({
    descriptor: (i) => {
      const r = {
        get() {
          var e, i;
          return null !==
            (i =
              null === (e = this.renderRoot) || void 0 === e
                ? void 0
                : e.querySelector(t)) && void 0 !== i
            ? i
            : null;
        },
        enumerable: !0,
        configurable: !0,
      };
      if (e) {
        const e = "symbol" == typeof i ? Symbol() : "__" + i;
        r.get = function () {
          var i, r;
          return (
            void 0 === this[e] &&
              (this[e] =
                null !==
                  (r =
                    null === (i = this.renderRoot) || void 0 === i
                      ? void 0
                      : i.querySelector(t)) && void 0 !== r
                  ? r
                  : null),
            this[e]
          );
        };
      }
      return r;
    },
  });
}
var yt;
null === (yt = window.HTMLSlotElement) ||
  void 0 === yt ||
  yt.prototype.assignedElements,
  (() => {
    var t, e, i;
    const r = Symbol(),
      o = Symbol(),
      n = Symbol(),
      a = Symbol(),
      d = Symbol(),
      l = Symbol(),
      c = Symbol(),
      s = Symbol(),
      p = Symbol(),
      m = Symbol(),
      u = Symbol(),
      h = Symbol(),
      f = Symbol();
    class g {
      constructor() {
        (this[t] = []), (this[e] = []), (this[i] = new Set());
      }
      destructor() {
        this[p](this[n]);
        const t = this;
        (t[r] = null), (t[n] = null), (t[o] = null);
      }
      get top() {
        const t = this[r];
        return t[t.length - 1] || null;
      }
      push(t) {
        t && t !== this.top && (this.remove(t), this[l](t), this[r].push(t));
      }
      remove(t) {
        const e = this[r].indexOf(t);
        return (
          -1 !== e &&
          (this[r].splice(e, 1), e === this[r].length && this[l](this.top), !0)
        );
      }
      pop() {
        const t = this.top;
        return t && this.remove(t), t;
      }
      has(t) {
        return -1 !== this[r].indexOf(t);
      }
      [((t = r), (e = n), (i = o), l)](t) {
        const e = this[o],
          i = this[n];
        if (!t) return this[p](i), e.clear(), void (this[n] = []);
        const r = this[m](t);
        if (r[r.length - 1].parentNode !== document.body)
          throw Error("Non-connected element cannot be a blocking element");
        this[n] = r;
        const a = this[u](t);
        if (!i.length) return void this[s](r, a, e);
        let d = i.length - 1,
          l = r.length - 1;
        for (; d > 0 && l > 0 && i[d] === r[l]; ) d--, l--;
        i[d] !== r[l] && this[c](i[d], r[l]),
          d > 0 && this[p](i.slice(0, d)),
          l > 0 && this[s](r.slice(0, l), a, null);
      }
      [c](t, e) {
        const i = t[a];
        this[h](t) && !t.inert && ((t.inert = !0), i.add(t)),
          i.has(e) && ((e.inert = !1), i.delete(e)),
          (e[d] = t[d]),
          (e[a] = i),
          (t[d] = void 0),
          (t[a] = void 0);
      }
      [p](t) {
        for (const e of t) {
          e[d].disconnect(), (e[d] = void 0);
          const t = e[a];
          for (const e of t) e.inert = !1;
          e[a] = void 0;
        }
      }
      [s](t, e, i) {
        for (const r of t) {
          const t = r.parentNode,
            o = t.children,
            n = new Set();
          for (let t = 0; t < o.length; t++) {
            const a = o[t];
            a === r ||
              !this[h](a) ||
              (e && e.has(a)) ||
              (i && a.inert ? i.add(a) : ((a.inert = !0), n.add(a)));
          }
          r[a] = n;
          const l = new MutationObserver(this[f].bind(this));
          r[d] = l;
          let c = t;
          const s = c;
          s.__shady && s.host && (c = s.host), l.observe(c, { childList: !0 });
        }
      }
      [f](t) {
        const e = this[n],
          i = this[o];
        for (const r of t) {
          const t = r.target.host || r.target,
            o = t === document.body ? e.length : e.indexOf(t),
            n = e[o - 1],
            d = n[a];
          for (let t = 0; t < r.removedNodes.length; t++) {
            const e = r.removedNodes[t];
            if (e === n)
              return (
                console.info("Detected removal of the top Blocking Element."),
                void this.pop()
              );
            d.has(e) && ((e.inert = !1), d.delete(e));
          }
          for (let t = 0; t < r.addedNodes.length; t++) {
            const e = r.addedNodes[t];
            this[h](e) &&
              (i && e.inert ? i.add(e) : ((e.inert = !0), d.add(e)));
          }
        }
      }
      [h](t) {
        return !1 === /^(style|template|script)$/.test(t.localName);
      }
      [m](t) {
        const e = [];
        let i = t;
        for (; i && i !== document.body; )
          if ((i.nodeType === Node.ELEMENT_NODE && e.push(i), i.assignedSlot)) {
            for (; (i = i.assignedSlot); ) e.push(i);
            i = e.pop();
          } else i = i.parentNode || i.host;
        return e;
      }
      [u](t) {
        const e = t.shadowRoot;
        if (!e) return null;
        const i = new Set();
        let r, o, n;
        const a = e.querySelectorAll("slot");
        if (a.length && a[0].assignedNodes)
          for (r = 0; r < a.length; r++)
            for (
              n = a[r].assignedNodes({ flatten: !0 }), o = 0;
              o < n.length;
              o++
            )
              n[o].nodeType === Node.ELEMENT_NODE && i.add(n[o]);
        return i;
      }
    }
    document.$blockingElements = new g();
  })();
var wt = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  return function (e, i, r) {
    return i && t(e.prototype, i), r && t(e, r), e;
  };
})();
function Et(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
!(function () {
  if ("undefined" != typeof window) {
    var t = Array.prototype.slice,
      e = Element.prototype.matches || Element.prototype.msMatchesSelector,
      i = [
        "a[href]",
        "area[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "details",
        "summary",
        "iframe",
        "object",
        "embed",
        "[contenteditable]",
      ].join(","),
      r = (function () {
        function r(t, e) {
          Et(this, r),
            (this._inertManager = e),
            (this._rootElement = t),
            (this._managedNodes = new Set()),
            this._rootElement.hasAttribute("aria-hidden")
              ? (this._savedAriaHidden =
                  this._rootElement.getAttribute("aria-hidden"))
              : (this._savedAriaHidden = null),
            this._rootElement.setAttribute("aria-hidden", "true"),
            this._makeSubtreeUnfocusable(this._rootElement),
            (this._observer = new MutationObserver(
              this._onMutation.bind(this),
            )),
            this._observer.observe(this._rootElement, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            });
        }
        return (
          wt(r, [
            {
              key: "destructor",
              value: function () {
                this._observer.disconnect(),
                  this._rootElement &&
                    (null !== this._savedAriaHidden
                      ? this._rootElement.setAttribute(
                          "aria-hidden",
                          this._savedAriaHidden,
                        )
                      : this._rootElement.removeAttribute("aria-hidden")),
                  this._managedNodes.forEach(function (t) {
                    this._unmanageNode(t.node);
                  }, this),
                  (this._observer = null),
                  (this._rootElement = null),
                  (this._managedNodes = null),
                  (this._inertManager = null);
              },
            },
            {
              key: "_makeSubtreeUnfocusable",
              value: function (t) {
                var e = this;
                d(t, function (t) {
                  return e._visitNode(t);
                });
                var i = document.activeElement;
                if (!document.body.contains(t)) {
                  for (var r = t, o = void 0; r; ) {
                    if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      o = r;
                      break;
                    }
                    r = r.parentNode;
                  }
                  o && (i = o.activeElement);
                }
                t.contains(i) &&
                  (i.blur(),
                  i === document.activeElement && document.body.focus());
              },
            },
            {
              key: "_visitNode",
              value: function (t) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                  var r = t;
                  r !== this._rootElement &&
                    r.hasAttribute("inert") &&
                    this._adoptInertRoot(r),
                    (e.call(r, i) || r.hasAttribute("tabindex")) &&
                      this._manageNode(r);
                }
              },
            },
            {
              key: "_manageNode",
              value: function (t) {
                var e = this._inertManager.register(t, this);
                this._managedNodes.add(e);
              },
            },
            {
              key: "_unmanageNode",
              value: function (t) {
                var e = this._inertManager.deregister(t, this);
                e && this._managedNodes.delete(e);
              },
            },
            {
              key: "_unmanageSubtree",
              value: function (t) {
                var e = this;
                d(t, function (t) {
                  return e._unmanageNode(t);
                });
              },
            },
            {
              key: "_adoptInertRoot",
              value: function (t) {
                var e = this._inertManager.getInertRoot(t);
                e ||
                  (this._inertManager.setInert(t, !0),
                  (e = this._inertManager.getInertRoot(t))),
                  e.managedNodes.forEach(function (t) {
                    this._manageNode(t.node);
                  }, this);
              },
            },
            {
              key: "_onMutation",
              value: function (e, i) {
                e.forEach(function (e) {
                  var i = e.target;
                  if ("childList" === e.type)
                    t.call(e.addedNodes).forEach(function (t) {
                      this._makeSubtreeUnfocusable(t);
                    }, this),
                      t.call(e.removedNodes).forEach(function (t) {
                        this._unmanageSubtree(t);
                      }, this);
                  else if ("attributes" === e.type)
                    if ("tabindex" === e.attributeName) this._manageNode(i);
                    else if (
                      i !== this._rootElement &&
                      "inert" === e.attributeName &&
                      i.hasAttribute("inert")
                    ) {
                      this._adoptInertRoot(i);
                      var r = this._inertManager.getInertRoot(i);
                      this._managedNodes.forEach(function (t) {
                        i.contains(t.node) && r._manageNode(t.node);
                      });
                    }
                }, this);
              },
            },
            {
              key: "managedNodes",
              get: function () {
                return new Set(this._managedNodes);
              },
            },
            {
              key: "hasSavedAriaHidden",
              get: function () {
                return null !== this._savedAriaHidden;
              },
            },
            {
              key: "savedAriaHidden",
              set: function (t) {
                this._savedAriaHidden = t;
              },
              get: function () {
                return this._savedAriaHidden;
              },
            },
          ]),
          r
        );
      })(),
      o = (function () {
        function t(e, i) {
          Et(this, t),
            (this._node = e),
            (this._overrodeFocusMethod = !1),
            (this._inertRoots = new Set([i])),
            (this._savedTabIndex = null),
            (this._destroyed = !1),
            this.ensureUntabbable();
        }
        return (
          wt(t, [
            {
              key: "destructor",
              value: function () {
                if (
                  (this._throwIfDestroyed(),
                  this._node && this._node.nodeType === Node.ELEMENT_NODE)
                ) {
                  var t = this._node;
                  null !== this._savedTabIndex
                    ? t.setAttribute("tabindex", this._savedTabIndex)
                    : t.removeAttribute("tabindex"),
                    this._overrodeFocusMethod && delete t.focus;
                }
                (this._node = null),
                  (this._inertRoots = null),
                  (this._destroyed = !0);
              },
            },
            {
              key: "_throwIfDestroyed",
              value: function () {
                if (this.destroyed)
                  throw new Error("Trying to access destroyed InertNode");
              },
            },
            {
              key: "ensureUntabbable",
              value: function () {
                if (this.node.nodeType === Node.ELEMENT_NODE) {
                  var t = this.node;
                  if (e.call(t, i)) {
                    if (-1 === t.tabIndex && this.hasSavedTabIndex) return;
                    t.hasAttribute("tabindex") &&
                      (this._savedTabIndex = t.tabIndex),
                      t.setAttribute("tabindex", "-1"),
                      t.nodeType === Node.ELEMENT_NODE &&
                        ((t.focus = function () {}),
                        (this._overrodeFocusMethod = !0));
                  } else
                    t.hasAttribute("tabindex") &&
                      ((this._savedTabIndex = t.tabIndex),
                      t.removeAttribute("tabindex"));
                }
              },
            },
            {
              key: "addInertRoot",
              value: function (t) {
                this._throwIfDestroyed(), this._inertRoots.add(t);
              },
            },
            {
              key: "removeInertRoot",
              value: function (t) {
                this._throwIfDestroyed(),
                  this._inertRoots.delete(t),
                  0 === this._inertRoots.size && this.destructor();
              },
            },
            {
              key: "destroyed",
              get: function () {
                return this._destroyed;
              },
            },
            {
              key: "hasSavedTabIndex",
              get: function () {
                return null !== this._savedTabIndex;
              },
            },
            {
              key: "node",
              get: function () {
                return this._throwIfDestroyed(), this._node;
              },
            },
            {
              key: "savedTabIndex",
              set: function (t) {
                this._throwIfDestroyed(), (this._savedTabIndex = t);
              },
              get: function () {
                return this._throwIfDestroyed(), this._savedTabIndex;
              },
            },
          ]),
          t
        );
      })(),
      n = (function () {
        function i(t) {
          if ((Et(this, i), !t))
            throw new Error(
              "Missing required argument; InertManager needs to wrap a document.",
            );
          (this._document = t),
            (this._managedNodes = new Map()),
            (this._inertRoots = new Map()),
            (this._observer = new MutationObserver(
              this._watchForInert.bind(this),
            )),
            l(t.head || t.body || t.documentElement),
            "loading" === t.readyState
              ? t.addEventListener(
                  "DOMContentLoaded",
                  this._onDocumentLoaded.bind(this),
                )
              : this._onDocumentLoaded();
        }
        return (
          wt(i, [
            {
              key: "setInert",
              value: function (t, e) {
                if (e) {
                  if (this._inertRoots.has(t)) return;
                  var i = new r(t, this);
                  if (
                    (t.setAttribute("inert", ""),
                    this._inertRoots.set(t, i),
                    !this._document.body.contains(t))
                  )
                    for (var o = t.parentNode; o; )
                      11 === o.nodeType && l(o), (o = o.parentNode);
                } else {
                  if (!this._inertRoots.has(t)) return;
                  this._inertRoots.get(t).destructor(),
                    this._inertRoots.delete(t),
                    t.removeAttribute("inert");
                }
              },
            },
            {
              key: "getInertRoot",
              value: function (t) {
                return this._inertRoots.get(t);
              },
            },
            {
              key: "register",
              value: function (t, e) {
                var i = this._managedNodes.get(t);
                return (
                  void 0 !== i ? i.addInertRoot(e) : (i = new o(t, e)),
                  this._managedNodes.set(t, i),
                  i
                );
              },
            },
            {
              key: "deregister",
              value: function (t, e) {
                var i = this._managedNodes.get(t);
                return i
                  ? (i.removeInertRoot(e),
                    i.destroyed && this._managedNodes.delete(t),
                    i)
                  : null;
              },
            },
            {
              key: "_onDocumentLoaded",
              value: function () {
                t
                  .call(this._document.querySelectorAll("[inert]"))
                  .forEach(function (t) {
                    this.setInert(t, !0);
                  }, this),
                  this._observer.observe(
                    this._document.body || this._document.documentElement,
                    { attributes: !0, subtree: !0, childList: !0 },
                  );
              },
            },
            {
              key: "_watchForInert",
              value: function (i, r) {
                var o = this;
                i.forEach(function (i) {
                  switch (i.type) {
                    case "childList":
                      t.call(i.addedNodes).forEach(function (i) {
                        if (i.nodeType === Node.ELEMENT_NODE) {
                          var r = t.call(i.querySelectorAll("[inert]"));
                          e.call(i, "[inert]") && r.unshift(i),
                            r.forEach(function (t) {
                              this.setInert(t, !0);
                            }, o);
                        }
                      }, o);
                      break;
                    case "attributes":
                      if ("inert" !== i.attributeName) return;
                      var r = i.target,
                        n = r.hasAttribute("inert");
                      o.setInert(r, n);
                  }
                }, this);
              },
            },
          ]),
          i
        );
      })();
    if (!Element.prototype.hasOwnProperty("inert")) {
      var a = new n(document);
      Object.defineProperty(Element.prototype, "inert", {
        enumerable: !0,
        get: function () {
          return this.hasAttribute("inert");
        },
        set: function (t) {
          a.setInert(this, t);
        },
      });
    }
  }
  function d(t, e, i) {
    if (t.nodeType == Node.ELEMENT_NODE) {
      var r = t;
      e && e(r);
      var o = r.shadowRoot;
      if (o) return void d(o, e);
      if ("content" == r.localName) {
        for (
          var n = r,
            a = n.getDistributedNodes ? n.getDistributedNodes() : [],
            l = 0;
          l < a.length;
          l++
        )
          d(a[l], e);
        return;
      }
      if ("slot" == r.localName) {
        for (
          var c = r,
            s = c.assignedNodes ? c.assignedNodes({ flatten: !0 }) : [],
            p = 0;
          p < s.length;
          p++
        )
          d(s[p], e);
        return;
      }
    }
    for (var m = t.firstChild; null != m; ) d(m, e), (m = m.nextSibling);
  }
  function l(t) {
    if (!t.querySelector("style#inert-style, link#inert-style")) {
      var e = document.createElement("style");
      e.setAttribute("id", "inert-style"),
        (e.textContent =
          "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"),
        t.appendChild(e);
    }
  }
})();
var Ct,
  At = {
    CLOSING: "mdc-dialog--closing",
    OPEN: "mdc-dialog--open",
    OPENING: "mdc-dialog--opening",
    SCROLLABLE: "mdc-dialog--scrollable",
    SCROLL_LOCK: "mdc-dialog-scroll-lock",
    STACKED: "mdc-dialog--stacked",
    FULLSCREEN: "mdc-dialog--fullscreen",
    SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
    SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
    SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
    SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
    SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
    SCRIM_HIDDEN: "mdc-dialog__scrim--hidden",
  },
  St = {
    ACTION_ATTRIBUTE: "data-mdc-dialog-action",
    BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
    BUTTON_SELECTOR: ".mdc-dialog__button",
    CLOSED_EVENT: "MDCDialog:closed",
    CLOSE_ACTION: "close",
    CLOSING_EVENT: "MDCDialog:closing",
    CONTAINER_SELECTOR: ".mdc-dialog__container",
    CONTENT_SELECTOR: ".mdc-dialog__content",
    DESTROY_ACTION: "destroy",
    INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
    OPENED_EVENT: "MDCDialog:opened",
    OPENING_EVENT: "MDCDialog:opening",
    SCRIM_SELECTOR: ".mdc-dialog__scrim",
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
      "textarea",
      ".mdc-menu .mdc-list-item",
      ".mdc-menu .mdc-deprecated-list-item",
    ].join(", "),
    SURFACE_SELECTOR: ".mdc-dialog__surface",
  },
  It = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
  },
  kt = (function () {
    function t() {
      this.rafIDs = new Map();
    }
    return (
      (t.prototype.request = function (t, e) {
        var i = this;
        this.cancel(t);
        var r = requestAnimationFrame(function (r) {
          i.rafIDs.delete(t), e(r);
        });
        this.rafIDs.set(t, r);
      }),
      (t.prototype.cancel = function (t) {
        var e = this.rafIDs.get(t);
        e && (cancelAnimationFrame(e), this.rafIDs.delete(t));
      }),
      (t.prototype.cancelAll = function () {
        var t = this;
        this.rafIDs.forEach(function (e, i) {
          t.cancel(i);
        });
      }),
      (t.prototype.getQueue = function () {
        var t = [];
        return (
          this.rafIDs.forEach(function (e, i) {
            t.push(i);
          }),
          t
        );
      }),
      t
    );
  })(),
  Rt = (function () {
    function t(t) {
      void 0 === t && (t = {}), (this.adapter = t);
    }
    return (
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "strings", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.init = function () {}),
      (t.prototype.destroy = function () {}),
      t
    );
  })();
!(function (t) {
  (t.POLL_SCROLL_POS = "poll_scroll_position"),
    (t.POLL_LAYOUT_CHANGE = "poll_layout_change");
})(Ct || (Ct = {}));
var Ot = (function (t) {
  function e(i) {
    var r = t.call(this, s(s({}, e.defaultAdapter), i)) || this;
    return (
      (r.dialogOpen = !1),
      (r.isFullscreen = !1),
      (r.animationFrame = 0),
      (r.animationTimer = 0),
      (r.escapeKeyAction = St.CLOSE_ACTION),
      (r.scrimClickAction = St.CLOSE_ACTION),
      (r.autoStackButtons = !0),
      (r.areButtonsStacked = !1),
      (r.suppressDefaultPressSelector = St.SUPPRESS_DEFAULT_PRESS_SELECTOR),
      (r.animFrame = new kt()),
      (r.contentScrollHandler = function () {
        r.handleScrollEvent();
      }),
      (r.windowResizeHandler = function () {
        r.layout();
      }),
      (r.windowOrientationChangeHandler = function () {
        r.layout();
      }),
      r
    );
  }
  return (
    c(e, t),
    Object.defineProperty(e, "cssClasses", {
      get: function () {
        return At;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "strings", {
      get: function () {
        return St;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "numbers", {
      get: function () {
        return It;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "defaultAdapter", {
      get: function () {
        return {
          addBodyClass: function () {},
          addClass: function () {},
          areButtonsStacked: function () {
            return !1;
          },
          clickDefaultButton: function () {},
          eventTargetMatches: function () {
            return !1;
          },
          getActionFromEvent: function () {
            return "";
          },
          getInitialFocusEl: function () {
            return null;
          },
          hasClass: function () {
            return !1;
          },
          isContentScrollable: function () {
            return !1;
          },
          notifyClosed: function () {},
          notifyClosing: function () {},
          notifyOpened: function () {},
          notifyOpening: function () {},
          releaseFocus: function () {},
          removeBodyClass: function () {},
          removeClass: function () {},
          reverseButtons: function () {},
          trapFocus: function () {},
          registerContentEventHandler: function () {},
          deregisterContentEventHandler: function () {},
          isScrollableContentAtTop: function () {
            return !1;
          },
          isScrollableContentAtBottom: function () {
            return !1;
          },
          registerWindowEventHandler: function () {},
          deregisterWindowEventHandler: function () {},
        };
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.init = function () {
      this.adapter.hasClass(At.STACKED) && this.setAutoStackButtons(!1),
        (this.isFullscreen = this.adapter.hasClass(At.FULLSCREEN));
    }),
    (e.prototype.destroy = function () {
      this.animationTimer &&
        (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()),
        this.isFullscreen &&
          this.adapter.deregisterContentEventHandler(
            "scroll",
            this.contentScrollHandler,
          ),
        this.animFrame.cancelAll(),
        this.adapter.deregisterWindowEventHandler(
          "resize",
          this.windowResizeHandler,
        ),
        this.adapter.deregisterWindowEventHandler(
          "orientationchange",
          this.windowOrientationChangeHandler,
        );
    }),
    (e.prototype.open = function (t) {
      var e = this;
      (this.dialogOpen = !0),
        this.adapter.notifyOpening(),
        this.adapter.addClass(At.OPENING),
        this.isFullscreen &&
          this.adapter.registerContentEventHandler(
            "scroll",
            this.contentScrollHandler,
          ),
        t &&
          t.isAboveFullscreenDialog &&
          this.adapter.addClass(At.SCRIM_HIDDEN),
        this.adapter.registerWindowEventHandler(
          "resize",
          this.windowResizeHandler,
        ),
        this.adapter.registerWindowEventHandler(
          "orientationchange",
          this.windowOrientationChangeHandler,
        ),
        this.runNextAnimationFrame(function () {
          e.adapter.addClass(At.OPEN),
            e.adapter.addBodyClass(At.SCROLL_LOCK),
            e.layout(),
            (e.animationTimer = setTimeout(function () {
              e.handleAnimationTimerEnd(),
                e.adapter.trapFocus(e.adapter.getInitialFocusEl()),
                e.adapter.notifyOpened();
            }, It.DIALOG_ANIMATION_OPEN_TIME_MS));
        });
    }),
    (e.prototype.close = function (t) {
      var e = this;
      void 0 === t && (t = ""),
        this.dialogOpen &&
          ((this.dialogOpen = !1),
          this.adapter.notifyClosing(t),
          this.adapter.addClass(At.CLOSING),
          this.adapter.removeClass(At.OPEN),
          this.adapter.removeBodyClass(At.SCROLL_LOCK),
          this.isFullscreen &&
            this.adapter.deregisterContentEventHandler(
              "scroll",
              this.contentScrollHandler,
            ),
          this.adapter.deregisterWindowEventHandler(
            "resize",
            this.windowResizeHandler,
          ),
          this.adapter.deregisterWindowEventHandler(
            "orientationchange",
            this.windowOrientationChangeHandler,
          ),
          cancelAnimationFrame(this.animationFrame),
          (this.animationFrame = 0),
          clearTimeout(this.animationTimer),
          (this.animationTimer = setTimeout(function () {
            e.adapter.releaseFocus(),
              e.handleAnimationTimerEnd(),
              e.adapter.notifyClosed(t);
          }, It.DIALOG_ANIMATION_CLOSE_TIME_MS)));
    }),
    (e.prototype.showSurfaceScrim = function () {
      var t = this;
      this.adapter.addClass(At.SURFACE_SCRIM_SHOWING),
        this.runNextAnimationFrame(function () {
          t.adapter.addClass(At.SURFACE_SCRIM_SHOWN);
        });
    }),
    (e.prototype.hideSurfaceScrim = function () {
      this.adapter.removeClass(At.SURFACE_SCRIM_SHOWN),
        this.adapter.addClass(At.SURFACE_SCRIM_HIDING);
    }),
    (e.prototype.handleSurfaceScrimTransitionEnd = function () {
      this.adapter.removeClass(At.SURFACE_SCRIM_HIDING),
        this.adapter.removeClass(At.SURFACE_SCRIM_SHOWING);
    }),
    (e.prototype.isOpen = function () {
      return this.dialogOpen;
    }),
    (e.prototype.getEscapeKeyAction = function () {
      return this.escapeKeyAction;
    }),
    (e.prototype.setEscapeKeyAction = function (t) {
      this.escapeKeyAction = t;
    }),
    (e.prototype.getScrimClickAction = function () {
      return this.scrimClickAction;
    }),
    (e.prototype.setScrimClickAction = function (t) {
      this.scrimClickAction = t;
    }),
    (e.prototype.getAutoStackButtons = function () {
      return this.autoStackButtons;
    }),
    (e.prototype.setAutoStackButtons = function (t) {
      this.autoStackButtons = t;
    }),
    (e.prototype.getSuppressDefaultPressSelector = function () {
      return this.suppressDefaultPressSelector;
    }),
    (e.prototype.setSuppressDefaultPressSelector = function (t) {
      this.suppressDefaultPressSelector = t;
    }),
    (e.prototype.layout = function () {
      var t = this;
      this.animFrame.request(Ct.POLL_LAYOUT_CHANGE, function () {
        t.layoutInternal();
      });
    }),
    (e.prototype.handleClick = function (t) {
      if (
        this.adapter.eventTargetMatches(t.target, St.SCRIM_SELECTOR) &&
        "" !== this.scrimClickAction
      )
        this.close(this.scrimClickAction);
      else {
        var e = this.adapter.getActionFromEvent(t);
        e && this.close(e);
      }
    }),
    (e.prototype.handleKeydown = function (t) {
      var e = "Enter" === t.key || 13 === t.keyCode;
      if (e && !this.adapter.getActionFromEvent(t)) {
        var i = t.composedPath ? t.composedPath()[0] : t.target,
          r =
            !this.suppressDefaultPressSelector ||
            !this.adapter.eventTargetMatches(
              i,
              this.suppressDefaultPressSelector,
            );
        e && r && this.adapter.clickDefaultButton();
      }
    }),
    (e.prototype.handleDocumentKeydown = function (t) {
      ("Escape" === t.key || 27 === t.keyCode) &&
        "" !== this.escapeKeyAction &&
        this.close(this.escapeKeyAction);
    }),
    (e.prototype.handleScrollEvent = function () {
      var t = this;
      this.animFrame.request(Ct.POLL_SCROLL_POS, function () {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }),
    (e.prototype.layoutInternal = function () {
      this.autoStackButtons && this.detectStackedButtons(),
        this.toggleScrollableClasses();
    }),
    (e.prototype.handleAnimationTimerEnd = function () {
      (this.animationTimer = 0),
        this.adapter.removeClass(At.OPENING),
        this.adapter.removeClass(At.CLOSING);
    }),
    (e.prototype.runNextAnimationFrame = function (t) {
      var e = this;
      cancelAnimationFrame(this.animationFrame),
        (this.animationFrame = requestAnimationFrame(function () {
          (e.animationFrame = 0),
            clearTimeout(e.animationTimer),
            (e.animationTimer = setTimeout(t, 0));
        }));
    }),
    (e.prototype.detectStackedButtons = function () {
      this.adapter.removeClass(At.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(At.STACKED),
        t !== this.areButtonsStacked &&
          (this.adapter.reverseButtons(), (this.areButtonsStacked = t));
    }),
    (e.prototype.toggleScrollableClasses = function () {
      this.adapter.removeClass(At.SCROLLABLE),
        this.adapter.isContentScrollable() &&
          (this.adapter.addClass(At.SCROLLABLE),
          this.isFullscreen &&
            (this.toggleScrollDividerHeader(),
            this.toggleScrollDividerFooter()));
    }),
    (e.prototype.toggleScrollDividerHeader = function () {
      this.adapter.isScrollableContentAtTop()
        ? this.adapter.hasClass(At.SCROLL_DIVIDER_HEADER) &&
          this.adapter.removeClass(At.SCROLL_DIVIDER_HEADER)
        : this.adapter.addClass(At.SCROLL_DIVIDER_HEADER);
    }),
    (e.prototype.toggleScrollDividerFooter = function () {
      this.adapter.isScrollableContentAtBottom()
        ? this.adapter.hasClass(At.SCROLL_DIVIDER_FOOTER) &&
          this.adapter.removeClass(At.SCROLL_DIVIDER_FOOTER)
        : this.adapter.addClass(At.SCROLL_DIVIDER_FOOTER);
    }),
    e
  );
})(Rt);
function Tt(t) {
  return (
    void 0 === t && (t = window),
    !!(function (t) {
      void 0 === t && (t = window);
      var e = !1;
      try {
        var i = {
            get passive() {
              return (e = !0), !1;
            },
          },
          r = function () {};
        t.document.addEventListener("test", r, i),
          t.document.removeEventListener("test", r, i);
      } catch (t) {
        e = !1;
      }
      return e;
    })(t) && { passive: !0 }
  );
}
function Lt(t, e) {
  return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(
    t,
    e,
  );
}
function $t(t) {
  return {
    addClass: (e) => {
      t.classList.add(e);
    },
    removeClass: (e) => {
      t.classList.remove(e);
    },
    hasClass: (e) => t.classList.contains(e),
  };
}
const Nt = () => {},
  Ft = {
    get passive() {
      return !1;
    },
  };
document.addEventListener("x", Nt, Ft), document.removeEventListener("x", Nt);
class Ht extends mt {
  click() {
    if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
    super.click();
  }
  createFoundation() {
    void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
      this.mdcFoundationClass &&
        ((this.mdcFoundation = new this.mdcFoundationClass(
          this.createAdapter(),
        )),
        this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
const Dt = (t) => (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const t = e.constructor._observers;
        (e.constructor._observers = new Map()),
          t.forEach((t, i) => e.constructor._observers.set(i, t));
      }
    } else {
      e.constructor._observers = new Map();
      const t = e.updated;
      e.updated = function (e) {
        t.call(this, e),
          e.forEach((t, e) => {
            const i = this.constructor._observers.get(e);
            void 0 !== i && i.call(this, this[e], t);
          });
      };
    }
    e.constructor._observers.set(i, t);
  },
  Pt = 1,
  zt = 3,
  Mt = 4,
  Ut =
    (t) =>
    (...e) => ({ _$litDirective$: t, values: e });
let Vt = class {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const Bt = Ut(
    class extends Vt {
      constructor(t) {
        var e;
        if (
          (super(t),
          t.type !== Pt ||
            "class" !== t.name ||
            (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2)
        )
          throw Error(
            "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.",
          );
      }
      render(t) {
        return (
          " " +
          Object.keys(t)
            .filter((e) => t[e])
            .join(" ") +
          " "
        );
      }
      update(t, [e]) {
        var i, r;
        if (void 0 === this.nt) {
          (this.nt = new Set()),
            void 0 !== t.strings &&
              (this.st = new Set(
                t.strings
                  .join(" ")
                  .split(/\s/)
                  .filter((t) => "" !== t),
              ));
          for (const t in e)
            e[t] &&
              !(null === (i = this.st) || void 0 === i ? void 0 : i.has(t)) &&
              this.nt.add(t);
          return this.render(e);
        }
        const o = t.element.classList;
        this.nt.forEach((t) => {
          t in e || (o.remove(t), this.nt.delete(t));
        });
        for (const t in e) {
          const i = !!e[t];
          i === this.nt.has(t) ||
            (null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) ||
            (i ? (o.add(t), this.nt.add(t)) : (o.remove(t), this.nt.delete(t)));
        }
        return X;
      }
    },
  ),
  jt = document.$blockingElements;
class Gt extends Ht {
  constructor() {
    super(...arguments),
      (this.hideActions = !1),
      (this.stacked = !1),
      (this.heading = ""),
      (this.scrimClickAction = "close"),
      (this.escapeKeyAction = "close"),
      (this.open = !1),
      (this.defaultAction = "close"),
      (this.actionAttribute = "dialogAction"),
      (this.initialFocusAttribute = "dialogInitialFocus"),
      (this.initialSupressDefaultPressSelector = ""),
      (this.mdcFoundationClass = Ot),
      (this.boundHandleClick = null),
      (this.boundHandleKeydown = null),
      (this.boundHandleDocumentKeydown = null);
  }
  set suppressDefaultPressSelector(t) {
    this.mdcFoundation
      ? this.mdcFoundation.setSuppressDefaultPressSelector(t)
      : (this.initialSupressDefaultPressSelector = t);
  }
  get suppressDefaultPressSelector() {
    return this.mdcFoundation
      ? this.mdcFoundation.getSuppressDefaultPressSelector()
      : this.initialSupressDefaultPressSelector;
  }
  get primaryButton() {
    let t = this.primarySlot.assignedNodes();
    t = t.filter((t) => t instanceof HTMLElement);
    const e = t[0];
    return e || null;
  }
  emitNotification(t, e) {
    const i = new CustomEvent(t, { detail: e ? { action: e } : {} });
    this.dispatchEvent(i);
  }
  getInitialFocusEl() {
    const t = `[${this.initialFocusAttribute}]`,
      e = this.querySelector(t);
    if (e) return e;
    const i = this.primarySlot.assignedNodes({ flatten: !0 }),
      r = this.searchNodeTreesForAttribute(i, this.initialFocusAttribute);
    if (r) return r;
    const o = this.secondarySlot.assignedNodes({ flatten: !0 }),
      n = this.searchNodeTreesForAttribute(o, this.initialFocusAttribute);
    if (n) return n;
    const a = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(a, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(t, e) {
    for (const i of t)
      if (i instanceof HTMLElement) {
        if (i.hasAttribute(e)) return i;
        {
          const t = i.querySelector(`[${e}]`);
          if (t) return t;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, $t(this.mdcRoot)), {
      addBodyClass: () => (document.body.style.overflow = "hidden"),
      removeBodyClass: () => (document.body.style.overflow = ""),
      areButtonsStacked: () => this.stacked,
      clickDefaultButton: () => {
        const t = this.primaryButton;
        t && t.click();
      },
      eventTargetMatches: (t, e) => !!t && Lt(t, e),
      getActionFromEvent: (t) => {
        if (!t.target) return "";
        const e = (function (t, e) {
          if (t.closest) return t.closest(e);
          for (var i = t; i; ) {
            if (Lt(i, e)) return i;
            i = i.parentElement;
          }
          return null;
        })(t.target, `[${this.actionAttribute}]`);
        return e && e.getAttribute(this.actionAttribute);
      },
      getInitialFocusEl: () => this.getInitialFocusEl(),
      isContentScrollable: () => {
        const t = this.contentElement;
        return !!t && t.scrollHeight > t.offsetHeight;
      },
      notifyClosed: (t) => this.emitNotification("closed", t),
      notifyClosing: (t) => {
        this.closingDueToDisconnect || (this.open = !1),
          this.emitNotification("closing", t);
      },
      notifyOpened: () => this.emitNotification("opened"),
      notifyOpening: () => {
        (this.open = !0), this.emitNotification("opening");
      },
      reverseButtons: () => {},
      releaseFocus: () => {
        jt.remove(this);
      },
      trapFocus: (t) => {
        this.isConnected && (jt.push(this), t && t.focus());
      },
      registerContentEventHandler: (t, e) => {
        this.contentElement.addEventListener(t, e);
      },
      deregisterContentEventHandler: (t, e) => {
        this.contentElement.removeEventListener(t, e);
      },
      isScrollableContentAtTop: () => {
        const t = this.contentElement;
        return !!t && 0 === t.scrollTop;
      },
      isScrollableContentAtBottom: () => {
        const t = this.contentElement;
        return (
          !!t && Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight
        );
      },
      registerWindowEventHandler: (t, e) => {
        window.addEventListener(t, e, Tt());
      },
      deregisterWindowEventHandler: (t, e) => {
        window.removeEventListener(t, e, Tt());
      },
    });
  }
  render() {
    const t = { [At.STACKED]: this.stacked };
    let e = Y``;
    this.heading && (e = this.renderHeading());
    const i = { "mdc-dialog__actions": !this.hideActions };
    return Y`
    <div class="mdc-dialog ${Bt(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Bt(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }
  renderHeading() {
    return Y`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
  }
  firstUpdated() {
    super.firstUpdated(),
      this.mdcFoundation.setAutoStackButtons(!0),
      this.initialSupressDefaultPressSelector
        ? (this.suppressDefaultPressSelector =
            this.initialSupressDefaultPressSelector)
        : (this.suppressDefaultPressSelector = [
            this.suppressDefaultPressSelector,
            "mwc-textarea",
            "mwc-menu mwc-list-item",
            "mwc-select mwc-list-item",
          ].join(", ")),
      (this.boundHandleClick = this.mdcFoundation.handleClick.bind(
        this.mdcFoundation,
      )),
      (this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(
        this.mdcFoundation,
      )),
      (this.boundHandleDocumentKeydown =
        this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.open &&
        this.mdcFoundation &&
        !this.mdcFoundation.isOpen() &&
        (this.setEventListeners(), this.mdcFoundation.open());
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.open &&
        this.mdcFoundation &&
        (this.removeEventListeners(),
        (this.closingDueToDisconnect = !0),
        this.mdcFoundation.close(this.currentAction || this.defaultAction),
        (this.closingDueToDisconnect = !1),
        (this.currentAction = void 0),
        jt.remove(this));
  }
  forceLayout() {
    this.mdcFoundation.layout();
  }
  focus() {
    const t = this.getInitialFocusEl();
    t && t.focus();
  }
  blur() {
    if (!this.shadowRoot) return;
    const t = this.shadowRoot.activeElement;
    if (t) t instanceof HTMLElement && t.blur();
    else {
      const t = this.getRootNode(),
        e = t instanceof Document ? t.activeElement : null;
      e instanceof HTMLElement && e.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick &&
      this.mdcRoot.addEventListener("click", this.boundHandleClick),
      this.boundHandleKeydown &&
        this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, Tt()),
      this.boundHandleDocumentKeydown &&
        document.addEventListener(
          "keydown",
          this.boundHandleDocumentKeydown,
          Tt(),
        );
  }
  removeEventListeners() {
    this.boundHandleClick &&
      this.mdcRoot.removeEventListener("click", this.boundHandleClick),
      this.boundHandleKeydown &&
        this.mdcRoot.removeEventListener("keydown", this.boundHandleKeydown),
      this.boundHandleDocumentKeydown &&
        document.removeEventListener(
          "keydown",
          this.boundHandleDocumentKeydown,
        );
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
p([_t(".mdc-dialog")], Gt.prototype, "mdcRoot", void 0),
  p([_t('slot[name="primaryAction"]')], Gt.prototype, "primarySlot", void 0),
  p(
    [_t('slot[name="secondaryAction"]')],
    Gt.prototype,
    "secondarySlot",
    void 0,
  ),
  p([_t("#contentSlot")], Gt.prototype, "contentSlot", void 0),
  p([_t(".mdc-dialog__content")], Gt.prototype, "contentElement", void 0),
  p([_t(".mdc-container")], Gt.prototype, "conatinerElement", void 0),
  p([gt({ type: Boolean })], Gt.prototype, "hideActions", void 0),
  p(
    [
      gt({ type: Boolean }),
      Dt(function () {
        this.forceLayout();
      }),
    ],
    Gt.prototype,
    "stacked",
    void 0,
  ),
  p([gt({ type: String })], Gt.prototype, "heading", void 0),
  p(
    [
      gt({ type: String }),
      Dt(function (t) {
        this.mdcFoundation.setScrimClickAction(t);
      }),
    ],
    Gt.prototype,
    "scrimClickAction",
    void 0,
  ),
  p(
    [
      gt({ type: String }),
      Dt(function (t) {
        this.mdcFoundation.setEscapeKeyAction(t);
      }),
    ],
    Gt.prototype,
    "escapeKeyAction",
    void 0,
  ),
  p(
    [
      gt({ type: Boolean, reflect: !0 }),
      Dt(function (t) {
        this.mdcFoundation &&
          this.isConnected &&
          (t
            ? (this.setEventListeners(), this.mdcFoundation.open())
            : (this.removeEventListeners(),
              this.mdcFoundation.close(
                this.currentAction || this.defaultAction,
              ),
              (this.currentAction = void 0)));
      }),
    ],
    Gt.prototype,
    "open",
    void 0,
  ),
  p([gt()], Gt.prototype, "defaultAction", void 0),
  p([gt()], Gt.prototype, "actionAttribute", void 0),
  p([gt()], Gt.prototype, "initialFocusAttribute", void 0);
const Wt = x`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;
class Yt extends Gt {}
(Yt.styles = [Wt]), customElements.define("ib-dialog", Yt);
var Xt = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" },
  qt = { NOTCH_ELEMENT_PADDING: 8 },
  Kt = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
  },
  Zt = (function (t) {
    function e(i) {
      return t.call(this, s(s({}, e.defaultAdapter), i)) || this;
    }
    return (
      c(e, t),
      Object.defineProperty(e, "strings", {
        get: function () {
          return Xt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return Kt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return qt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            setNotchWidthProperty: function () {},
            removeNotchWidthProperty: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.notch = function (t) {
        var i = e.cssClasses.OUTLINE_NOTCHED;
        t > 0 && (t += qt.NOTCH_ELEMENT_PADDING),
          this.adapter.setNotchWidthProperty(t),
          this.adapter.addClass(i);
      }),
      (e.prototype.closeNotch = function () {
        var t = e.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
      }),
      e
    );
  })(Rt);
class Qt extends Ht {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Zt),
      (this.width = 0),
      (this.open = !1),
      (this.lastOpen = this.open);
  }
  createAdapter() {
    return {
      addClass: (t) => this.mdcRoot.classList.add(t),
      removeClass: (t) => this.mdcRoot.classList.remove(t),
      setNotchWidthProperty: (t) =>
        this.notchElement.style.setProperty("width", `${t}px`),
      removeNotchWidthProperty: () =>
        this.notchElement.style.removeProperty("width"),
    };
  }
  openOrClose(t, e) {
    this.mdcFoundation &&
      (t && void 0 !== e
        ? this.mdcFoundation.notch(e)
        : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const t = Bt({ "mdc-notched-outline--notched": this.open });
    return Y`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
p([_t(".mdc-notched-outline")], Qt.prototype, "mdcRoot", void 0),
  p([gt({ type: Number })], Qt.prototype, "width", void 0),
  p([gt({ type: Boolean, reflect: !0 })], Qt.prototype, "open", void 0),
  p([_t(".mdc-notched-outline__notch")], Qt.prototype, "notchElement", void 0);
const Jt = x`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let te = class extends Qt {};
var ee, ie;
(te.styles = [Jt]), (te = p([ht("mwc-notched-outline")], te));
const re =
  null !==
    (ie =
      null === (ee = window.ShadyDOM) || void 0 === ee ? void 0 : ee.inUse) &&
  void 0 !== ie &&
  ie;
class oe extends Ht {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.containingForm = null),
      (this.formDataListener = (t) => {
        this.disabled || this.setFormData(t.formData);
      });
  }
  findFormElement() {
    if (!this.shadowRoot || re) return null;
    const t = this.getRootNode().querySelectorAll("form");
    for (const e of Array.from(t)) if (e.contains(this)) return e;
    return null;
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (this.containingForm = this.findFormElement()),
      null === (t = this.containingForm) ||
        void 0 === t ||
        t.addEventListener("formdata", this.formDataListener);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this.containingForm) ||
        void 0 === t ||
        t.removeEventListener("formdata", this.formDataListener),
      (this.containingForm = null);
  }
  click() {
    this.formElement &&
      !this.disabled &&
      (this.formElement.focus(), this.formElement.click());
  }
  firstUpdated() {
    super.firstUpdated(),
      this.shadowRoot &&
        this.mdcRoot.addEventListener("change", (t) => {
          this.dispatchEvent(new Event("change", t));
        });
  }
}
(oe.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
  p([gt({ type: Boolean })], oe.prototype, "disabled", void 0);
var ne = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label",
  },
  ae = (function (t) {
    function e(i) {
      var r = t.call(this, s(s({}, e.defaultAdapter), i)) || this;
      return (
        (r.shakeAnimationEndHandler = function () {
          r.handleShakeAnimationEnd();
        }),
        r
      );
    }
    return (
      c(e, t),
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return ne;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            getWidth: function () {
              return 0;
            },
            registerInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {
        this.adapter.registerInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler,
        );
      }),
      (e.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler,
        );
      }),
      (e.prototype.getWidth = function () {
        return this.adapter.getWidth();
      }),
      (e.prototype.shake = function (t) {
        var i = e.cssClasses.LABEL_SHAKE;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.float = function (t) {
        var i = e.cssClasses,
          r = i.LABEL_FLOAT_ABOVE,
          o = i.LABEL_SHAKE;
        t
          ? this.adapter.addClass(r)
          : (this.adapter.removeClass(r), this.adapter.removeClass(o));
      }),
      (e.prototype.setRequired = function (t) {
        var i = e.cssClasses.LABEL_REQUIRED;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.handleShakeAnimationEnd = function () {
        var t = e.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(t);
      }),
      e
    );
  })(Rt);
const de = Ut(
  class extends Vt {
    constructor(t) {
      switch (
        (super(t), (this.foundation = null), (this.previousPart = null), t.type)
      ) {
        case Pt:
        case zt:
          break;
        default:
          throw new Error(
            "FloatingLabel directive only support attribute and property parts",
          );
      }
    }
    update(t, [e]) {
      if (t !== this.previousPart) {
        this.foundation && this.foundation.destroy(), (this.previousPart = t);
        const e = t.element;
        e.classList.add("mdc-floating-label");
        const i = ((t) => ({
          addClass: (e) => t.classList.add(e),
          removeClass: (e) => t.classList.remove(e),
          getWidth: () => t.scrollWidth,
          registerInteractionHandler: (e, i) => {
            t.addEventListener(e, i);
          },
          deregisterInteractionHandler: (e, i) => {
            t.removeEventListener(e, i);
          },
        }))(e);
        (this.foundation = new ae(i)), this.foundation.init();
      }
      return this.render(e);
    }
    render(t) {
      return this.foundation;
    }
  },
);
var le = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating",
  },
  ce = (function (t) {
    function e(i) {
      var r = t.call(this, s(s({}, e.defaultAdapter), i)) || this;
      return (
        (r.transitionEndHandler = function (t) {
          r.handleTransitionEnd(t);
        }),
        r
      );
    }
    return (
      c(e, t),
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return le;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            setStyle: function () {},
            registerEventHandler: function () {},
            deregisterEventHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {
        this.adapter.registerEventHandler(
          "transitionend",
          this.transitionEndHandler,
        );
      }),
      (e.prototype.destroy = function () {
        this.adapter.deregisterEventHandler(
          "transitionend",
          this.transitionEndHandler,
        );
      }),
      (e.prototype.activate = function () {
        this.adapter.removeClass(le.LINE_RIPPLE_DEACTIVATING),
          this.adapter.addClass(le.LINE_RIPPLE_ACTIVE);
      }),
      (e.prototype.setRippleCenter = function (t) {
        this.adapter.setStyle("transform-origin", t + "px center");
      }),
      (e.prototype.deactivate = function () {
        this.adapter.addClass(le.LINE_RIPPLE_DEACTIVATING);
      }),
      (e.prototype.handleTransitionEnd = function (t) {
        var e = this.adapter.hasClass(le.LINE_RIPPLE_DEACTIVATING);
        "opacity" === t.propertyName &&
          e &&
          (this.adapter.removeClass(le.LINE_RIPPLE_ACTIVE),
          this.adapter.removeClass(le.LINE_RIPPLE_DEACTIVATING));
      }),
      e
    );
  })(Rt);
const se = Ut(
  class extends Vt {
    constructor(t) {
      switch (
        (super(t), (this.previousPart = null), (this.foundation = null), t.type)
      ) {
        case Pt:
        case zt:
          return;
        default:
          throw new Error(
            "LineRipple only support attribute and property parts.",
          );
      }
    }
    update(t, e) {
      if (this.previousPart !== t) {
        this.foundation && this.foundation.destroy(), (this.previousPart = t);
        const e = t.element;
        e.classList.add("mdc-line-ripple");
        const i = ((t) => ({
          addClass: (e) => t.classList.add(e),
          removeClass: (e) => t.classList.remove(e),
          hasClass: (e) => t.classList.contains(e),
          setStyle: (e, i) => t.style.setProperty(e, i),
          registerEventHandler: (e, i) => {
            t.addEventListener(e, i);
          },
          deregisterEventHandler: (e, i) => {
            t.removeEventListener(e, i);
          },
        }))(e);
        (this.foundation = new ce(i)), this.foundation.init();
      }
      return this.render();
    }
    render() {
      return this.foundation;
    }
  },
);
var pe = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    INPUT_SELECTOR: ".mdc-text-field__input",
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
    SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
    TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing",
  },
  me = {
    DISABLED: "mdc-text-field--disabled",
    FOCUSED: "mdc-text-field--focused",
    HELPER_LINE: "mdc-text-field-helper-line",
    INVALID: "mdc-text-field--invalid",
    LABEL_FLOATING: "mdc-text-field--label-floating",
    NO_LABEL: "mdc-text-field--no-label",
    OUTLINED: "mdc-text-field--outlined",
    ROOT: "mdc-text-field",
    TEXTAREA: "mdc-text-field--textarea",
    WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
    WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
    WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter",
  },
  ue = { LABEL_SCALE: 0.75 },
  he = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
  fe = ["color", "date", "datetime-local", "month", "range", "time", "week"],
  ge = ["mousedown", "touchstart"],
  be = ["click", "keydown"],
  xe = (function (t) {
    function e(i, r) {
      void 0 === r && (r = {});
      var o = t.call(this, s(s({}, e.defaultAdapter), i)) || this;
      return (
        (o.isFocused = !1),
        (o.receivedUserInput = !1),
        (o.valid = !0),
        (o.useNativeValidation = !0),
        (o.validateOnValueChange = !0),
        (o.helperText = r.helperText),
        (o.characterCounter = r.characterCounter),
        (o.leadingIcon = r.leadingIcon),
        (o.trailingIcon = r.trailingIcon),
        (o.inputFocusHandler = function () {
          o.activateFocus();
        }),
        (o.inputBlurHandler = function () {
          o.deactivateFocus();
        }),
        (o.inputInputHandler = function () {
          o.handleInput();
        }),
        (o.setPointerXOffset = function (t) {
          o.setTransformOrigin(t);
        }),
        (o.textFieldInteractionHandler = function () {
          o.handleTextFieldInteraction();
        }),
        (o.validationAttributeChangeHandler = function (t) {
          o.handleValidationAttributeChange(t);
        }),
        o
      );
    }
    return (
      c(e, t),
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return me;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return pe;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return ue;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
        get: function () {
          var t = this.getNativeInput().type;
          return fe.indexOf(t) >= 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "shouldFloat", {
        get: function () {
          return (
            this.shouldAlwaysFloat ||
            this.isFocused ||
            !!this.getValue() ||
            this.isBadInput()
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "shouldShake", {
        get: function () {
          return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !0;
            },
            setInputAttr: function () {},
            removeInputAttr: function () {},
            registerTextFieldInteractionHandler: function () {},
            deregisterTextFieldInteractionHandler: function () {},
            registerInputInteractionHandler: function () {},
            deregisterInputInteractionHandler: function () {},
            registerValidationAttributeChangeHandler: function () {
              return new MutationObserver(function () {});
            },
            deregisterValidationAttributeChangeHandler: function () {},
            getNativeInput: function () {
              return null;
            },
            isFocused: function () {
              return !1;
            },
            activateLineRipple: function () {},
            deactivateLineRipple: function () {},
            setLineRippleTransformOrigin: function () {},
            shakeLabel: function () {},
            floatLabel: function () {},
            setLabelRequired: function () {},
            hasLabel: function () {
              return !1;
            },
            getLabelWidth: function () {
              return 0;
            },
            hasOutline: function () {
              return !1;
            },
            notchOutline: function () {},
            closeOutline: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {
        var t, e, i, r;
        this.adapter.hasLabel() &&
          this.getNativeInput().required &&
          this.adapter.setLabelRequired(!0),
          this.adapter.isFocused()
            ? this.inputFocusHandler()
            : this.adapter.hasLabel() &&
              this.shouldFloat &&
              (this.notchOutline(!0),
              this.adapter.floatLabel(!0),
              this.styleFloating(!0)),
          this.adapter.registerInputInteractionHandler(
            "focus",
            this.inputFocusHandler,
          ),
          this.adapter.registerInputInteractionHandler(
            "blur",
            this.inputBlurHandler,
          ),
          this.adapter.registerInputInteractionHandler(
            "input",
            this.inputInputHandler,
          );
        try {
          for (var o = m(ge), n = o.next(); !n.done; n = o.next()) {
            var a = n.value;
            this.adapter.registerInputInteractionHandler(
              a,
              this.setPointerXOffset,
            );
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            n && !n.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (var d = m(be), l = d.next(); !l.done; l = d.next()) {
            a = l.value;
            this.adapter.registerTextFieldInteractionHandler(
              a,
              this.textFieldInteractionHandler,
            );
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            l && !l.done && (r = d.return) && r.call(d);
          } finally {
            if (i) throw i.error;
          }
        }
        (this.validationObserver =
          this.adapter.registerValidationAttributeChangeHandler(
            this.validationAttributeChangeHandler,
          )),
          this.setcharacterCounter(this.getValue().length);
      }),
      (e.prototype.destroy = function () {
        var t, e, i, r;
        this.adapter.deregisterInputInteractionHandler(
          "focus",
          this.inputFocusHandler,
        ),
          this.adapter.deregisterInputInteractionHandler(
            "blur",
            this.inputBlurHandler,
          ),
          this.adapter.deregisterInputInteractionHandler(
            "input",
            this.inputInputHandler,
          );
        try {
          for (var o = m(ge), n = o.next(); !n.done; n = o.next()) {
            var a = n.value;
            this.adapter.deregisterInputInteractionHandler(
              a,
              this.setPointerXOffset,
            );
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            n && !n.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (var d = m(be), l = d.next(); !l.done; l = d.next()) {
            a = l.value;
            this.adapter.deregisterTextFieldInteractionHandler(
              a,
              this.textFieldInteractionHandler,
            );
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            l && !l.done && (r = d.return) && r.call(d);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(
          this.validationObserver,
        );
      }),
      (e.prototype.handleTextFieldInteraction = function () {
        var t = this.adapter.getNativeInput();
        (t && t.disabled) || (this.receivedUserInput = !0);
      }),
      (e.prototype.handleValidationAttributeChange = function (t) {
        var e = this;
        t.some(function (t) {
          return (
            he.indexOf(t) > -1 &&
            (e.styleValidity(!0),
            e.adapter.setLabelRequired(e.getNativeInput().required),
            !0)
          );
        }),
          t.indexOf("maxlength") > -1 &&
            this.setcharacterCounter(this.getValue().length);
      }),
      (e.prototype.notchOutline = function (t) {
        if (this.adapter.hasOutline() && this.adapter.hasLabel())
          if (t) {
            var e = this.adapter.getLabelWidth() * ue.LABEL_SCALE;
            this.adapter.notchOutline(e);
          } else this.adapter.closeOutline();
      }),
      (e.prototype.activateFocus = function () {
        (this.isFocused = !0),
          this.styleFocused(this.isFocused),
          this.adapter.activateLineRipple(),
          this.adapter.hasLabel() &&
            (this.notchOutline(this.shouldFloat),
            this.adapter.floatLabel(this.shouldFloat),
            this.styleFloating(this.shouldFloat),
            this.adapter.shakeLabel(this.shouldShake)),
          !this.helperText ||
            (!this.helperText.isPersistent() &&
              this.helperText.isValidation() &&
              this.valid) ||
            this.helperText.showToScreenReader();
      }),
      (e.prototype.setTransformOrigin = function (t) {
        if (!this.isDisabled() && !this.adapter.hasOutline()) {
          var e = t.touches,
            i = e ? e[0] : t,
            r = i.target.getBoundingClientRect(),
            o = i.clientX - r.left;
          this.adapter.setLineRippleTransformOrigin(o);
        }
      }),
      (e.prototype.handleInput = function () {
        this.autoCompleteFocus(),
          this.setcharacterCounter(this.getValue().length);
      }),
      (e.prototype.autoCompleteFocus = function () {
        this.receivedUserInput || this.activateFocus();
      }),
      (e.prototype.deactivateFocus = function () {
        (this.isFocused = !1), this.adapter.deactivateLineRipple();
        var t = this.isValid();
        this.styleValidity(t),
          this.styleFocused(this.isFocused),
          this.adapter.hasLabel() &&
            (this.notchOutline(this.shouldFloat),
            this.adapter.floatLabel(this.shouldFloat),
            this.styleFloating(this.shouldFloat),
            this.adapter.shakeLabel(this.shouldShake)),
          this.shouldFloat || (this.receivedUserInput = !1);
      }),
      (e.prototype.getValue = function () {
        return this.getNativeInput().value;
      }),
      (e.prototype.setValue = function (t) {
        if (
          (this.getValue() !== t && (this.getNativeInput().value = t),
          this.setcharacterCounter(t.length),
          this.validateOnValueChange)
        ) {
          var e = this.isValid();
          this.styleValidity(e);
        }
        this.adapter.hasLabel() &&
          (this.notchOutline(this.shouldFloat),
          this.adapter.floatLabel(this.shouldFloat),
          this.styleFloating(this.shouldFloat),
          this.validateOnValueChange &&
            this.adapter.shakeLabel(this.shouldShake));
      }),
      (e.prototype.isValid = function () {
        return this.useNativeValidation
          ? this.isNativeInputValid()
          : this.valid;
      }),
      (e.prototype.setValid = function (t) {
        (this.valid = t), this.styleValidity(t);
        var e = !t && !this.isFocused && !!this.getValue();
        this.adapter.hasLabel() && this.adapter.shakeLabel(e);
      }),
      (e.prototype.setValidateOnValueChange = function (t) {
        this.validateOnValueChange = t;
      }),
      (e.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
      }),
      (e.prototype.setUseNativeValidation = function (t) {
        this.useNativeValidation = t;
      }),
      (e.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
      }),
      (e.prototype.setDisabled = function (t) {
        (this.getNativeInput().disabled = t), this.styleDisabled(t);
      }),
      (e.prototype.setHelperTextContent = function (t) {
        this.helperText && this.helperText.setContent(t);
      }),
      (e.prototype.setLeadingIconAriaLabel = function (t) {
        this.leadingIcon && this.leadingIcon.setAriaLabel(t);
      }),
      (e.prototype.setLeadingIconContent = function (t) {
        this.leadingIcon && this.leadingIcon.setContent(t);
      }),
      (e.prototype.setTrailingIconAriaLabel = function (t) {
        this.trailingIcon && this.trailingIcon.setAriaLabel(t);
      }),
      (e.prototype.setTrailingIconContent = function (t) {
        this.trailingIcon && this.trailingIcon.setContent(t);
      }),
      (e.prototype.setcharacterCounter = function (t) {
        if (this.characterCounter) {
          var e = this.getNativeInput().maxLength;
          if (-1 === e)
            throw new Error(
              "MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.",
            );
          this.characterCounter.setCounterValue(t, e);
        }
      }),
      (e.prototype.isBadInput = function () {
        return this.getNativeInput().validity.badInput || !1;
      }),
      (e.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
      }),
      (e.prototype.styleValidity = function (t) {
        var i = e.cssClasses.INVALID;
        if (
          (t ? this.adapter.removeClass(i) : this.adapter.addClass(i),
          this.helperText)
        ) {
          if ((this.helperText.setValidity(t), !this.helperText.isValidation()))
            return;
          var r = this.helperText.isVisible(),
            o = this.helperText.getId();
          r && o
            ? this.adapter.setInputAttr(pe.ARIA_DESCRIBEDBY, o)
            : this.adapter.removeInputAttr(pe.ARIA_DESCRIBEDBY);
        }
      }),
      (e.prototype.styleFocused = function (t) {
        var i = e.cssClasses.FOCUSED;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.styleDisabled = function (t) {
        var i = e.cssClasses,
          r = i.DISABLED,
          o = i.INVALID;
        t
          ? (this.adapter.addClass(r), this.adapter.removeClass(o))
          : this.adapter.removeClass(r),
          this.leadingIcon && this.leadingIcon.setDisabled(t),
          this.trailingIcon && this.trailingIcon.setDisabled(t);
      }),
      (e.prototype.styleFloating = function (t) {
        var i = e.cssClasses.LABEL_FLOATING;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.getNativeInput = function () {
        return (
          (this.adapter ? this.adapter.getNativeInput() : null) || {
            disabled: !1,
            maxLength: -1,
            required: !1,
            type: "input",
            validity: { badInput: !1, valid: !0 },
            value: "",
          }
        );
      }),
      e
    );
  })(Rt),
  ve = xe;
const _e = (t) => (null != t ? t : q),
  ye = {},
  we = Ut(
    class extends Vt {
      constructor(t) {
        if ((super(t), t.type !== zt && t.type !== Pt && t.type !== Mt))
          throw Error(
            "The `live` directive is not allowed on child or event bindings",
          );
        if (!((t) => void 0 === t.strings)(t))
          throw Error("`live` bindings can only contain a single expression");
      }
      render(t) {
        return t;
      }
      update(t, [e]) {
        if (e === X || e === q) return e;
        const i = t.element,
          r = t.name;
        if (t.type === zt) {
          if (e === i[r]) return X;
        } else if (t.type === Mt) {
          if (!!e === i.hasAttribute(r)) return X;
        } else if (t.type === Pt && i.getAttribute(r) === e + "") return X;
        return (
          ((t, e = ye) => {
            t._$AH = e;
          })(t),
          e
        );
      }
    },
  ),
  Ee = ["touchstart", "touchmove", "scroll", "mousewheel"],
  Ce = (t = {}) => {
    const e = {};
    for (const i in t) e[i] = t[i];
    return Object.assign(
      {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: !0,
        valueMissing: !1,
      },
      e,
    );
  };
class Ae extends oe {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = ve),
      (this.value = ""),
      (this.type = "text"),
      (this.placeholder = ""),
      (this.label = ""),
      (this.icon = ""),
      (this.iconTrailing = ""),
      (this.disabled = !1),
      (this.required = !1),
      (this.minLength = -1),
      (this.maxLength = -1),
      (this.outlined = !1),
      (this.helper = ""),
      (this.validateOnInitialRender = !1),
      (this.validationMessage = ""),
      (this.autoValidate = !1),
      (this.pattern = ""),
      (this.min = ""),
      (this.max = ""),
      (this.step = null),
      (this.size = null),
      (this.helperPersistent = !1),
      (this.charCounter = !1),
      (this.endAligned = !1),
      (this.prefix = ""),
      (this.suffix = ""),
      (this.name = ""),
      (this.readOnly = !1),
      (this.autocapitalize = ""),
      (this.outlineOpen = !1),
      (this.outlineWidth = 0),
      (this.isUiValid = !0),
      (this.focused = !1),
      (this._validity = Ce()),
      (this.validityTransform = null);
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  get willValidate() {
    return this.formElement.willValidate;
  }
  get selectionStart() {
    return this.formElement.selectionStart;
  }
  get selectionEnd() {
    return this.formElement.selectionEnd;
  }
  focus() {
    const t = new CustomEvent("focus");
    this.formElement.dispatchEvent(t), this.formElement.focus();
  }
  blur() {
    const t = new CustomEvent("blur");
    this.formElement.dispatchEvent(t), this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(t, e, i) {
    this.formElement.setSelectionRange(t, e, i);
  }
  update(t) {
    t.has("autoValidate") &&
      this.mdcFoundation &&
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
      t.has("value") &&
        "string" != typeof this.value &&
        (this.value = `${this.value}`),
      super.update(t);
  }
  setFormData(t) {
    this.name && t.append(this.name, this.value);
  }
  render() {
    const t = this.charCounter && -1 !== this.maxLength,
      e = !!this.helper || !!this.validationMessage || t,
      i = {
        "mdc-text-field--disabled": this.disabled,
        "mdc-text-field--no-label": !this.label,
        "mdc-text-field--filled": !this.outlined,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--with-leading-icon": this.icon,
        "mdc-text-field--with-trailing-icon": this.iconTrailing,
        "mdc-text-field--end-aligned": this.endAligned,
      };
    return Y`
      <label class="mdc-text-field ${Bt(i)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e, t)}
    `;
  }
  updated(t) {
    t.has("value") &&
      void 0 !== t.get("value") &&
      (this.mdcFoundation.setValue(this.value),
      this.autoValidate && this.reportValidity());
  }
  renderRipple() {
    return this.outlined
      ? ""
      : Y`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined
      ? Y`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
      : "";
  }
  renderLabel() {
    return this.label
      ? Y`
      <span
          .floatingLabelFoundation=${de(this.label)}
          id="label">${this.label}</span>
    `
      : "";
  }
  renderLeadingIcon() {
    return this.icon ? this.renderIcon(this.icon) : "";
  }
  renderTrailingIcon() {
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
  }
  renderIcon(t, e = !1) {
    return Y`<i class="material-icons mdc-text-field__icon ${Bt({ "mdc-text-field__icon--leading": !e, "mdc-text-field__icon--trailing": e })}">${t}</i>`;
  }
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, !0) : "";
  }
  renderAffix(t, e = !1) {
    return Y`<span class="mdc-text-field__affix ${Bt({ "mdc-text-field__affix--prefix": !e, "mdc-text-field__affix--suffix": e })}">
        ${t}</span>`;
  }
  renderInput(t) {
    const e = -1 === this.minLength ? void 0 : this.minLength,
      i = -1 === this.maxLength ? void 0 : this.maxLength,
      r = this.autocapitalize ? this.autocapitalize : void 0,
      o = this.validationMessage && !this.isUiValid,
      n = this.label ? "label" : void 0,
      a = t ? "helper-text" : void 0,
      d = this.focused || this.helperPersistent || o ? "helper-text" : void 0;
    return Y`
      <input
          aria-labelledby=${_e(n)}
          aria-controls="${_e(a)}"
          aria-describedby="${_e(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${we(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${_e(e)}"
          maxlength="${_e(i)}"
          pattern="${_e(this.pattern ? this.pattern : void 0)}"
          min="${_e("" === this.min ? void 0 : this.min)}"
          max="${_e("" === this.max ? void 0 : this.max)}"
          step="${_e(null === this.step ? void 0 : this.step)}"
          size="${_e(null === this.size ? void 0 : this.size)}"
          name="${_e("" === this.name ? void 0 : this.name)}"
          inputmode="${_e(this.inputMode)}"
          autocapitalize="${_e(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  renderLineRipple() {
    return this.outlined
      ? ""
      : Y`
      <span .lineRippleFoundation=${se()}></span>
    `;
  }
  renderHelperText(t, e) {
    const i = this.validationMessage && !this.isUiValid,
      r = {
        "mdc-text-field-helper-text--persistent": this.helperPersistent,
        "mdc-text-field-helper-text--validation-msg": i,
      },
      o = this.focused || this.helperPersistent || i ? void 0 : "true",
      n = i ? this.validationMessage : this.helper;
    return t
      ? Y`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${_e(o)}"
             class="mdc-text-field-helper-text ${Bt(r)}"
             >${n}</div>
        ${this.renderCharCounter(e)}
      </div>`
      : "";
  }
  renderCharCounter(t) {
    const e = Math.min(this.value.length, this.maxLength);
    return t
      ? Y`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>`
      : "";
  }
  onInputFocus() {
    this.focused = !0;
  }
  onInputBlur() {
    (this.focused = !1), this.reportValidity();
  }
  checkValidity() {
    const t = this._checkValidity(this.value);
    if (!t) {
      const t = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(t);
    }
    return t;
  }
  reportValidity() {
    const t = this.checkValidity();
    return this.mdcFoundation.setValid(t), (this.isUiValid = t), t;
  }
  _checkValidity(t) {
    const e = this.formElement.validity;
    let i = Ce(e);
    if (this.validityTransform) {
      const e = this.validityTransform(t, i);
      (i = Object.assign(Object.assign({}, i), e)),
        this.mdcFoundation.setUseNativeValidation(!1);
    } else this.mdcFoundation.setUseNativeValidation(!0);
    return (this._validity = i), this._validity.valid;
  }
  setCustomValidity(t) {
    (this.validationMessage = t), this.formElement.setCustomValidity(t);
  }
  handleInputChange() {
    this.value = this.formElement.value;
  }
  createAdapter() {
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({}, this.getRootAdapterMethods()),
            this.getInputAdapterMethods(),
          ),
          this.getLabelAdapterMethods(),
        ),
        this.getLineRippleAdapterMethods(),
      ),
      this.getOutlineAdapterMethods(),
    );
  }
  getRootAdapterMethods() {
    return Object.assign(
      {
        registerTextFieldInteractionHandler: (t, e) =>
          this.addEventListener(t, e),
        deregisterTextFieldInteractionHandler: (t, e) =>
          this.removeEventListener(t, e),
        registerValidationAttributeChangeHandler: (t) => {
          const e = new MutationObserver((e) => {
            t(((t) => t.map((t) => t.attributeName).filter((t) => t))(e));
          });
          return e.observe(this.formElement, { attributes: !0 }), e;
        },
        deregisterValidationAttributeChangeHandler: (t) => t.disconnect(),
      },
      $t(this.mdcRoot),
    );
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      setInputAttr: () => {},
      removeInputAttr: () => {},
      isFocused: () =>
        !!this.shadowRoot && this.shadowRoot.activeElement === this.formElement,
      registerInputInteractionHandler: (t, e) =>
        this.formElement.addEventListener(t, e, { passive: t in Ee }),
      deregisterInputInteractionHandler: (t, e) =>
        this.formElement.removeEventListener(t, e),
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (t) =>
        this.labelElement && this.labelElement.floatingLabelFoundation.float(t),
      getLabelWidth: () =>
        this.labelElement
          ? this.labelElement.floatingLabelFoundation.getWidth()
          : 0,
      hasLabel: () => Boolean(this.labelElement),
      shakeLabel: (t) =>
        this.labelElement && this.labelElement.floatingLabelFoundation.shake(t),
      setLabelRequired: (t) => {
        this.labelElement &&
          this.labelElement.floatingLabelFoundation.setRequired(t);
      },
    };
  }
  getLineRippleAdapterMethods() {
    return {
      activateLineRipple: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateLineRipple: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      setLineRippleTransformOrigin: (t) => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.setRippleCenter(t);
      },
    };
  }
  async getUpdateComplete() {
    var t;
    const e = await super.getUpdateComplete();
    return (
      await (null === (t = this.outlineElement) || void 0 === t
        ? void 0
        : t.updateComplete),
      e
    );
  }
  firstUpdated() {
    var t;
    super.firstUpdated(),
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
      this.validateOnInitialRender && this.reportValidity(),
      null === (t = this.outlineElement) ||
        void 0 === t ||
        t.updateComplete.then(() => {
          var t;
          this.outlineWidth =
            (null === (t = this.labelElement) || void 0 === t
              ? void 0
              : t.floatingLabelFoundation.getWidth()) || 0;
        });
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
      hasOutline: () => Boolean(this.outlineElement),
      notchOutline: (t) => {
        this.outlineElement &&
          !this.outlineOpen &&
          ((this.outlineWidth = t), (this.outlineOpen = !0));
      },
    };
  }
  async layout() {
    await this.updateComplete;
    const t = this.labelElement;
    if (!t) return void (this.outlineOpen = !1);
    const e = !!this.label && !!this.value;
    if ((t.floatingLabelFoundation.float(e), !this.outlined)) return;
    (this.outlineOpen = e), await this.updateComplete;
    const i = t.floatingLabelFoundation.getWidth();
    this.outlineOpen && ((this.outlineWidth = i), await this.updateComplete);
  }
}
p([_t(".mdc-text-field")], Ae.prototype, "mdcRoot", void 0),
  p([_t("input")], Ae.prototype, "formElement", void 0),
  p([_t(".mdc-floating-label")], Ae.prototype, "labelElement", void 0),
  p([_t(".mdc-line-ripple")], Ae.prototype, "lineRippleElement", void 0),
  p([_t("mwc-notched-outline")], Ae.prototype, "outlineElement", void 0),
  p([_t(".mdc-notched-outline__notch")], Ae.prototype, "notchElement", void 0),
  p([gt({ type: String })], Ae.prototype, "value", void 0),
  p([gt({ type: String })], Ae.prototype, "type", void 0),
  p([gt({ type: String })], Ae.prototype, "placeholder", void 0),
  p(
    [
      gt({ type: String }),
      Dt(function (t, e) {
        void 0 !== e && this.label !== e && this.layout();
      }),
    ],
    Ae.prototype,
    "label",
    void 0,
  ),
  p([gt({ type: String })], Ae.prototype, "icon", void 0),
  p([gt({ type: String })], Ae.prototype, "iconTrailing", void 0),
  p([gt({ type: Boolean, reflect: !0 })], Ae.prototype, "disabled", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "required", void 0),
  p([gt({ type: Number })], Ae.prototype, "minLength", void 0),
  p([gt({ type: Number })], Ae.prototype, "maxLength", void 0),
  p(
    [
      gt({ type: Boolean, reflect: !0 }),
      Dt(function (t, e) {
        void 0 !== e && this.outlined !== e && this.layout();
      }),
    ],
    Ae.prototype,
    "outlined",
    void 0,
  ),
  p([gt({ type: String })], Ae.prototype, "helper", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "validateOnInitialRender", void 0),
  p([gt({ type: String })], Ae.prototype, "validationMessage", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "autoValidate", void 0),
  p([gt({ type: String })], Ae.prototype, "pattern", void 0),
  p([gt({ type: String })], Ae.prototype, "min", void 0),
  p([gt({ type: String })], Ae.prototype, "max", void 0),
  p([gt({ type: String })], Ae.prototype, "step", void 0),
  p([gt({ type: Number })], Ae.prototype, "size", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "helperPersistent", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "charCounter", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "endAligned", void 0),
  p([gt({ type: String })], Ae.prototype, "prefix", void 0),
  p([gt({ type: String })], Ae.prototype, "suffix", void 0),
  p([gt({ type: String })], Ae.prototype, "name", void 0),
  p([gt({ type: String })], Ae.prototype, "inputMode", void 0),
  p([gt({ type: Boolean })], Ae.prototype, "readOnly", void 0),
  p([gt({ type: String })], Ae.prototype, "autocapitalize", void 0),
  p([bt()], Ae.prototype, "outlineOpen", void 0),
  p([bt()], Ae.prototype, "outlineWidth", void 0),
  p([bt()], Ae.prototype, "isUiValid", void 0),
  p([bt()], Ae.prototype, "focused", void 0),
  p([vt({ passive: !0 })], Ae.prototype, "handleInputChange", null);
const Se = x`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
class Ie extends Ae {}
(Ie.styles = [Se]), customElements.define("ib-textfield", Ie);
const ke = x`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let Re = class extends mt {
  render() {
    return Y`<span><slot></slot></span>`;
  }
};
(Re.styles = [ke]), (Re = p([ht("mwc-icon")], Re));
var Oe = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded",
  },
  Te = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top",
  },
  Le = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
  };
var $e = ["touchstart", "pointerdown", "mousedown", "keydown"],
  Ne = ["touchend", "pointerup", "mouseup", "contextmenu"],
  Fe = [],
  He = (function (t) {
    function e(i) {
      var r = t.call(this, s(s({}, e.defaultAdapter), i)) || this;
      return (
        (r.activationAnimationHasEnded = !1),
        (r.activationTimer = 0),
        (r.fgDeactivationRemovalTimer = 0),
        (r.fgScale = "0"),
        (r.frame = { width: 0, height: 0 }),
        (r.initialSize = 0),
        (r.layoutFrame = 0),
        (r.maxRadius = 0),
        (r.unboundedCoords = { left: 0, top: 0 }),
        (r.activationState = r.defaultActivationState()),
        (r.activationTimerCallback = function () {
          (r.activationAnimationHasEnded = !0),
            r.runDeactivationUXLogicIfReady();
        }),
        (r.activateHandler = function (t) {
          r.activateImpl(t);
        }),
        (r.deactivateHandler = function () {
          r.deactivateImpl();
        }),
        (r.focusHandler = function () {
          r.handleFocus();
        }),
        (r.blurHandler = function () {
          r.handleBlur();
        }),
        (r.resizeHandler = function () {
          r.layout();
        }),
        r
      );
    }
    return (
      c(e, t),
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return Oe;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return Te;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return Le;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            browserSupportsCssVars: function () {
              return !0;
            },
            computeBoundingRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            containsEventTarget: function () {
              return !0;
            },
            deregisterDocumentInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
            deregisterResizeHandler: function () {},
            getWindowPageOffset: function () {
              return { x: 0, y: 0 };
            },
            isSurfaceActive: function () {
              return !0;
            },
            isSurfaceDisabled: function () {
              return !0;
            },
            isUnbounded: function () {
              return !0;
            },
            registerDocumentInteractionHandler: function () {},
            registerInteractionHandler: function () {},
            registerResizeHandler: function () {},
            removeClass: function () {},
            updateCssVariable: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {
        var t = this,
          i = this.supportsPressRipple();
        if ((this.registerRootHandlers(i), i)) {
          var r = e.cssClasses,
            o = r.ROOT,
            n = r.UNBOUNDED;
          requestAnimationFrame(function () {
            t.adapter.addClass(o),
              t.adapter.isUnbounded() &&
                (t.adapter.addClass(n), t.layoutInternal());
          });
        }
      }),
      (e.prototype.destroy = function () {
        var t = this;
        if (this.supportsPressRipple()) {
          this.activationTimer &&
            (clearTimeout(this.activationTimer),
            (this.activationTimer = 0),
            this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer &&
              (clearTimeout(this.fgDeactivationRemovalTimer),
              (this.fgDeactivationRemovalTimer = 0),
              this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
          var i = e.cssClasses,
            r = i.ROOT,
            o = i.UNBOUNDED;
          requestAnimationFrame(function () {
            t.adapter.removeClass(r),
              t.adapter.removeClass(o),
              t.removeCssVars();
          });
        }
        this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
      }),
      (e.prototype.activate = function (t) {
        this.activateImpl(t);
      }),
      (e.prototype.deactivate = function () {
        this.deactivateImpl();
      }),
      (e.prototype.layout = function () {
        var t = this;
        this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
          (this.layoutFrame = requestAnimationFrame(function () {
            t.layoutInternal(), (t.layoutFrame = 0);
          }));
      }),
      (e.prototype.setUnbounded = function (t) {
        var i = e.cssClasses.UNBOUNDED;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.handleFocus = function () {
        var t = this;
        requestAnimationFrame(function () {
          return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.handleBlur = function () {
        var t = this;
        requestAnimationFrame(function () {
          return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
      }),
      (e.prototype.defaultActivationState = function () {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
        };
      }),
      (e.prototype.registerRootHandlers = function (t) {
        var e, i;
        if (t) {
          try {
            for (var r = m($e), o = r.next(); !o.done; o = r.next()) {
              var n = o.value;
              this.adapter.registerInteractionHandler(n, this.activateHandler);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (i = r.return) && i.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          this.adapter.isUnbounded() &&
            this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler),
          this.adapter.registerInteractionHandler("blur", this.blurHandler);
      }),
      (e.prototype.registerDeactivationHandlers = function (t) {
        var e, i;
        if ("keydown" === t.type)
          this.adapter.registerInteractionHandler(
            "keyup",
            this.deactivateHandler,
          );
        else
          try {
            for (var r = m(Ne), o = r.next(); !o.done; o = r.next()) {
              var n = o.value;
              this.adapter.registerDocumentInteractionHandler(
                n,
                this.deactivateHandler,
              );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (i = r.return) && i.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
      }),
      (e.prototype.deregisterRootHandlers = function () {
        var t, e;
        try {
          for (var i = m($e), r = i.next(); !r.done; r = i.next()) {
            var o = r.value;
            this.adapter.deregisterInteractionHandler(o, this.activateHandler);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
          this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
          this.adapter.isUnbounded() &&
            this.adapter.deregisterResizeHandler(this.resizeHandler);
      }),
      (e.prototype.deregisterDeactivationHandlers = function () {
        var t, e;
        this.adapter.deregisterInteractionHandler(
          "keyup",
          this.deactivateHandler,
        );
        try {
          for (var i = m(Ne), r = i.next(); !r.done; r = i.next()) {
            var o = r.value;
            this.adapter.deregisterDocumentInteractionHandler(
              o,
              this.deactivateHandler,
            );
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (e.prototype.removeCssVars = function () {
        var t = this,
          i = e.strings;
        Object.keys(i).forEach(function (e) {
          0 === e.indexOf("VAR_") && t.adapter.updateCssVariable(i[e], null);
        });
      }),
      (e.prototype.activateImpl = function (t) {
        var e = this;
        if (!this.adapter.isSurfaceDisabled()) {
          var i = this.activationState;
          if (!i.isActivated) {
            var r = this.previousActivationEvent;
            if (!(r && void 0 !== t && r.type !== t.type))
              (i.isActivated = !0),
                (i.isProgrammatic = void 0 === t),
                (i.activationEvent = t),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic &&
                  void 0 !== t &&
                  ("mousedown" === t.type ||
                    "touchstart" === t.type ||
                    "pointerdown" === t.type)),
                void 0 !== t &&
                Fe.length > 0 &&
                Fe.some(function (t) {
                  return e.adapter.containsEventTarget(t);
                })
                  ? this.resetActivationState()
                  : (void 0 !== t &&
                      (Fe.push(t.target), this.registerDeactivationHandlers(t)),
                    (i.wasElementMadeActive = this.checkElementMadeActive(t)),
                    i.wasElementMadeActive && this.animateActivation(),
                    requestAnimationFrame(function () {
                      (Fe = []),
                        i.wasElementMadeActive ||
                          void 0 === t ||
                          (" " !== t.key && 32 !== t.keyCode) ||
                          ((i.wasElementMadeActive =
                            e.checkElementMadeActive(t)),
                          i.wasElementMadeActive && e.animateActivation()),
                        i.wasElementMadeActive ||
                          (e.activationState = e.defaultActivationState());
                    }));
          }
        }
      }),
      (e.prototype.checkElementMadeActive = function (t) {
        return (
          void 0 === t || "keydown" !== t.type || this.adapter.isSurfaceActive()
        );
      }),
      (e.prototype.animateActivation = function () {
        var t = this,
          i = e.strings,
          r = i.VAR_FG_TRANSLATE_START,
          o = i.VAR_FG_TRANSLATE_END,
          n = e.cssClasses,
          a = n.FG_DEACTIVATION,
          d = n.FG_ACTIVATION,
          l = e.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var c = "",
          s = "";
        if (!this.adapter.isUnbounded()) {
          var p = this.getFgTranslationCoordinates(),
            m = p.startPoint,
            u = p.endPoint;
          (c = m.x + "px, " + m.y + "px"), (s = u.x + "px, " + u.y + "px");
        }
        this.adapter.updateCssVariable(r, c),
          this.adapter.updateCssVariable(o, s),
          clearTimeout(this.activationTimer),
          clearTimeout(this.fgDeactivationRemovalTimer),
          this.rmBoundedActivationClasses(),
          this.adapter.removeClass(a),
          this.adapter.computeBoundingRect(),
          this.adapter.addClass(d),
          (this.activationTimer = setTimeout(function () {
            t.activationTimerCallback();
          }, l));
      }),
      (e.prototype.getFgTranslationCoordinates = function () {
        var t,
          e = this.activationState,
          i = e.activationEvent;
        return (
          (t = e.wasActivatedByPointer
            ? (function (t, e, i) {
                if (!t) return { x: 0, y: 0 };
                var r,
                  o,
                  n = e.x,
                  a = e.y,
                  d = n + i.left,
                  l = a + i.top;
                if ("touchstart" === t.type) {
                  var c = t;
                  (r = c.changedTouches[0].pageX - d),
                    (o = c.changedTouches[0].pageY - l);
                } else {
                  var s = t;
                  (r = s.pageX - d), (o = s.pageY - l);
                }
                return { x: r, y: o };
              })(
                i,
                this.adapter.getWindowPageOffset(),
                this.adapter.computeBoundingRect(),
              )
            : { x: this.frame.width / 2, y: this.frame.height / 2 }),
          {
            startPoint: (t = {
              x: t.x - this.initialSize / 2,
              y: t.y - this.initialSize / 2,
            }),
            endPoint: {
              x: this.frame.width / 2 - this.initialSize / 2,
              y: this.frame.height / 2 - this.initialSize / 2,
            },
          }
        );
      }),
      (e.prototype.runDeactivationUXLogicIfReady = function () {
        var t = this,
          i = e.cssClasses.FG_DEACTIVATION,
          r = this.activationState,
          o = r.hasDeactivationUXRun,
          n = r.isActivated;
        (o || !n) &&
          this.activationAnimationHasEnded &&
          (this.rmBoundedActivationClasses(),
          this.adapter.addClass(i),
          (this.fgDeactivationRemovalTimer = setTimeout(function () {
            t.adapter.removeClass(i);
          }, Le.FG_DEACTIVATION_MS)));
      }),
      (e.prototype.rmBoundedActivationClasses = function () {
        var t = e.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(t),
          (this.activationAnimationHasEnded = !1),
          this.adapter.computeBoundingRect();
      }),
      (e.prototype.resetActivationState = function () {
        var t = this;
        (this.previousActivationEvent = this.activationState.activationEvent),
          (this.activationState = this.defaultActivationState()),
          setTimeout(function () {
            return (t.previousActivationEvent = void 0);
          }, e.numbers.TAP_DELAY_MS);
      }),
      (e.prototype.deactivateImpl = function () {
        var t = this,
          e = this.activationState;
        if (e.isActivated) {
          var i = s({}, e);
          e.isProgrammatic
            ? (requestAnimationFrame(function () {
                t.animateDeactivation(i);
              }),
              this.resetActivationState())
            : (this.deregisterDeactivationHandlers(),
              requestAnimationFrame(function () {
                (t.activationState.hasDeactivationUXRun = !0),
                  t.animateDeactivation(i),
                  t.resetActivationState();
              }));
        }
      }),
      (e.prototype.animateDeactivation = function (t) {
        var e = t.wasActivatedByPointer,
          i = t.wasElementMadeActive;
        (e || i) && this.runDeactivationUXLogicIfReady();
      }),
      (e.prototype.layoutInternal = function () {
        var t = this;
        this.frame = this.adapter.computeBoundingRect();
        var i = Math.max(this.frame.height, this.frame.width);
        this.maxRadius = this.adapter.isUnbounded()
          ? i
          : Math.sqrt(
              Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2),
            ) + e.numbers.PADDING;
        var r = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
        this.adapter.isUnbounded() && r % 2 != 0
          ? (this.initialSize = r - 1)
          : (this.initialSize = r),
          (this.fgScale = "" + this.maxRadius / this.initialSize),
          this.updateLayoutCssVars();
      }),
      (e.prototype.updateLayoutCssVars = function () {
        var t = e.strings,
          i = t.VAR_FG_SIZE,
          r = t.VAR_LEFT,
          o = t.VAR_TOP,
          n = t.VAR_FG_SCALE;
        this.adapter.updateCssVariable(i, this.initialSize + "px"),
          this.adapter.updateCssVariable(n, this.fgScale),
          this.adapter.isUnbounded() &&
            ((this.unboundedCoords = {
              left: Math.round(this.frame.width / 2 - this.initialSize / 2),
              top: Math.round(this.frame.height / 2 - this.initialSize / 2),
            }),
            this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"),
            this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
      }),
      e
    );
  })(Rt),
  De = He;
const Pe = Ut(
  class extends Vt {
    constructor(t) {
      var e;
      if (
        (super(t),
        t.type !== Pt ||
          "style" !== t.name ||
          (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
        );
    }
    render(t) {
      return Object.keys(t).reduce((e, i) => {
        const r = t[i];
        return null == r
          ? e
          : e +
              `${(i = i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase())}:${r};`;
      }, "");
    }
    update(t, [e]) {
      const { style: i } = t.element;
      if (void 0 === this.vt) {
        this.vt = new Set();
        for (const t in e) this.vt.add(t);
        return this.render(e);
      }
      this.vt.forEach((t) => {
        null == e[t] &&
          (this.vt.delete(t),
          t.includes("-") ? i.removeProperty(t) : (i[t] = ""));
      });
      for (const t in e) {
        const r = e[t];
        null != r &&
          (this.vt.add(t), t.includes("-") ? i.setProperty(t, r) : (i[t] = r));
      }
      return X;
    }
  },
);
class ze extends Ht {
  constructor() {
    super(...arguments),
      (this.primary = !1),
      (this.accent = !1),
      (this.unbounded = !1),
      (this.disabled = !1),
      (this.activated = !1),
      (this.selected = !1),
      (this.internalUseStateLayerCustomProperties = !1),
      (this.hovering = !1),
      (this.bgFocused = !1),
      (this.fgActivation = !1),
      (this.fgDeactivation = !1),
      (this.fgScale = ""),
      (this.fgSize = ""),
      (this.translateStart = ""),
      (this.translateEnd = ""),
      (this.leftPos = ""),
      (this.topPos = ""),
      (this.mdcFoundationClass = De);
  }
  get isActive() {
    return Lt(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
        }
      },
      removeClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      registerDocumentInteractionHandler: () => {},
      deregisterDocumentInteractionHandler: () => {},
      registerResizeHandler: () => {},
      deregisterResizeHandler: () => {},
      updateCssVariable: (t, e) => {
        switch (t) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = e;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = e;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = e;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = e;
            break;
          case "--mdc-ripple-left":
            this.leftPos = e;
            break;
          case "--mdc-ripple-top":
            this.topPos = e;
        }
      },
      computeBoundingRect: () =>
        (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
    };
  }
  startPress(t) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(t);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  waitForFoundation(t) {
    this.mdcFoundation ? t() : this.updateComplete.then(t);
  }
  update(t) {
    t.has("disabled") && this.disabled && this.endHover(), super.update(t);
  }
  render() {
    const t = this.activated && (this.primary || !this.accent),
      e = this.selected && (this.primary || !this.accent),
      i = {
        "mdc-ripple-surface--accent": this.accent,
        "mdc-ripple-surface--primary--activated": t,
        "mdc-ripple-surface--accent--activated": this.accent && this.activated,
        "mdc-ripple-surface--primary--selected": e,
        "mdc-ripple-surface--accent--selected": this.accent && this.selected,
        "mdc-ripple-surface--disabled": this.disabled,
        "mdc-ripple-surface--hover": this.hovering,
        "mdc-ripple-surface--primary": this.primary,
        "mdc-ripple-surface--selected": this.selected,
        "mdc-ripple-upgraded--background-focused": this.bgFocused,
        "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
        "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
        "mdc-ripple-upgraded--unbounded": this.unbounded,
        "mdc-ripple-surface--internal-use-state-layer-custom-properties":
          this.internalUseStateLayerCustomProperties,
      };
    return Y`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Bt(i)}"
          style="${Pe({ "--mdc-ripple-fg-scale": this.fgScale, "--mdc-ripple-fg-size": this.fgSize, "--mdc-ripple-fg-translate-end": this.translateEnd, "--mdc-ripple-fg-translate-start": this.translateStart, "--mdc-ripple-left": this.leftPos, "--mdc-ripple-top": this.topPos })}"></div>`;
  }
}
p([_t(".mdc-ripple-surface")], ze.prototype, "mdcRoot", void 0),
  p([gt({ type: Boolean })], ze.prototype, "primary", void 0),
  p([gt({ type: Boolean })], ze.prototype, "accent", void 0),
  p([gt({ type: Boolean })], ze.prototype, "unbounded", void 0),
  p([gt({ type: Boolean })], ze.prototype, "disabled", void 0),
  p([gt({ type: Boolean })], ze.prototype, "activated", void 0),
  p([gt({ type: Boolean })], ze.prototype, "selected", void 0),
  p(
    [gt({ type: Boolean })],
    ze.prototype,
    "internalUseStateLayerCustomProperties",
    void 0,
  ),
  p([bt()], ze.prototype, "hovering", void 0),
  p([bt()], ze.prototype, "bgFocused", void 0),
  p([bt()], ze.prototype, "fgActivation", void 0),
  p([bt()], ze.prototype, "fgDeactivation", void 0),
  p([bt()], ze.prototype, "fgScale", void 0),
  p([bt()], ze.prototype, "fgSize", void 0),
  p([bt()], ze.prototype, "translateStart", void 0),
  p([bt()], ze.prototype, "translateEnd", void 0),
  p([bt()], ze.prototype, "leftPos", void 0),
  p([bt()], ze.prototype, "topPos", void 0);
const Me = x`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ue = class extends ze {};
function Ve(t, e, i) {
  if (void 0 !== e)
    return (function (t, e, i) {
      const r = t.constructor;
      if (!i) {
        const t = `__${e}`;
        if (!(i = r.getPropertyDescriptor(e, t)))
          throw new Error(
            "@ariaProperty must be used after a @property decorator",
          );
      }
      const o = i;
      let n = "";
      if (!o.set) throw new Error(`@ariaProperty requires a setter for ${e}`);
      if (t.dispatchWizEvent) return i;
      const a = {
        configurable: !0,
        enumerable: !0,
        set(t) {
          if ("" === n) {
            const t = r.getPropertyOptions(e);
            n = "string" == typeof t.attribute ? t.attribute : e;
          }
          this.hasAttribute(n) && this.removeAttribute(n), o.set.call(this, t);
        },
      };
      return (
        o.get &&
          (a.get = function () {
            return o.get.call(this);
          }),
        a
      );
    })(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
(Ue.styles = [Me]), (Ue = p([ht("mwc-ripple")], Ue));
class Be {
  constructor(t) {
    (this.startPress = (e) => {
      t().then((t) => {
        t && t.startPress(e);
      });
    }),
      (this.endPress = () => {
        t().then((t) => {
          t && t.endPress();
        });
      }),
      (this.startFocus = () => {
        t().then((t) => {
          t && t.startFocus();
        });
      }),
      (this.endFocus = () => {
        t().then((t) => {
          t && t.endFocus();
        });
      }),
      (this.startHover = () => {
        t().then((t) => {
          t && t.startHover();
        });
      }),
      (this.endHover = () => {
        t().then((t) => {
          t && t.endHover();
        });
      });
  }
}
class je extends mt {
  constructor() {
    super(...arguments),
      (this.raised = !1),
      (this.unelevated = !1),
      (this.outlined = !1),
      (this.dense = !1),
      (this.disabled = !1),
      (this.trailingIcon = !1),
      (this.fullwidth = !1),
      (this.icon = ""),
      (this.label = ""),
      (this.expandContent = !1),
      (this.shouldRenderRipple = !1),
      (this.rippleHandlers = new Be(
        () => ((this.shouldRenderRipple = !0), this.ripple),
      ));
  }
  renderOverlay() {
    return Y``;
  }
  renderRipple() {
    const t = this.raised || this.unelevated;
    return this.shouldRenderRipple
      ? Y`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`
      : "";
  }
  focus() {
    const t = this.buttonElement;
    t && (this.rippleHandlers.startFocus(), t.focus());
  }
  blur() {
    const t = this.buttonElement;
    t && (this.rippleHandlers.endFocus(), t.blur());
  }
  getRenderClasses() {
    return {
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense,
    };
  }
  render() {
    return Y`
      <button
          id="button"
          class="mdc-button ${Bt(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${_e(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Bt({ flex: this.expandContent })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  renderIcon() {
    return Y`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(t) {
    const e = () => {
      window.removeEventListener("mouseup", e), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", e), this.rippleHandlers.startPress(t);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
(je.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
  p(
    [Ve, gt({ type: String, attribute: "aria-haspopup" })],
    je.prototype,
    "ariaHasPopup",
    void 0,
  ),
  p([gt({ type: Boolean, reflect: !0 })], je.prototype, "raised", void 0),
  p([gt({ type: Boolean, reflect: !0 })], je.prototype, "unelevated", void 0),
  p([gt({ type: Boolean, reflect: !0 })], je.prototype, "outlined", void 0),
  p([gt({ type: Boolean })], je.prototype, "dense", void 0),
  p([gt({ type: Boolean, reflect: !0 })], je.prototype, "disabled", void 0),
  p(
    [gt({ type: Boolean, attribute: "trailingicon" })],
    je.prototype,
    "trailingIcon",
    void 0,
  ),
  p([gt({ type: Boolean, reflect: !0 })], je.prototype, "fullwidth", void 0),
  p([gt({ type: String })], je.prototype, "icon", void 0),
  p([gt({ type: String })], je.prototype, "label", void 0),
  p([gt({ type: Boolean })], je.prototype, "expandContent", void 0),
  p([_t("#button")], je.prototype, "buttonElement", void 0),
  p(
    [
      (function (t) {
        return xt({
          descriptor: (e) => ({
            async get() {
              var e;
              return (
                await this.updateComplete,
                null === (e = this.renderRoot) || void 0 === e
                  ? void 0
                  : e.querySelector(t)
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
        });
      })("mwc-ripple"),
    ],
    je.prototype,
    "ripple",
    void 0,
  ),
  p([bt()], je.prototype, "shouldRenderRipple", void 0),
  p([vt({ passive: !0 })], je.prototype, "handleRippleActivate", null);
const Ge = x`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
class We extends je {}
(We.styles = [Ge]), customElements.define("ib-button", We);
class Ye extends mt {
  constructor() {
    super(...arguments),
      (this.indeterminate = !1),
      (this.progress = 0),
      (this.density = 0),
      (this.closed = !1);
  }
  open() {
    this.closed = !1;
  }
  close() {
    this.closed = !0;
  }
  render() {
    const t = {
        "mdc-circular-progress--closed": this.closed,
        "mdc-circular-progress--indeterminate": this.indeterminate,
      },
      e = 48 + 4 * this.density,
      i = { width: `${e}px`, height: `${e}px` };
    return Y`
      <div
        class="mdc-circular-progress ${Bt(t)}"
        style="${Pe(i)}"
        role="progressbar"
        aria-label="${_e(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${_e(this.indeterminate ? void 0 : this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`;
  }
  renderDeterminateContainer() {
    const t = 48 + 4 * this.density,
      e = t / 2,
      i =
        this.density >= -3
          ? 18 + (11 * this.density) / 6
          : 12.5 + (5 * (this.density + 3)) / 4,
      r = 6.2831852 * i,
      o = (1 - this.progress) * r,
      n =
        this.density >= -3
          ? 4 + this.density * (1 / 3)
          : 3 + (this.density + 3) * (1 / 6);
    return Y`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${t} ${t}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-width="${n}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-dasharray="${6.2831852 * i}"
                  stroke-dashoffset="${o}"
                  stroke-width="${n}"></circle>
        </svg>
      </div>`;
  }
  renderIndeterminateContainer() {
    return Y`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
  }
  renderIndeterminateSpinnerLayer() {
    const t = 48 + 4 * this.density,
      e = t / 2,
      i =
        this.density >= -3
          ? 18 + (11 * this.density) / 6
          : 12.5 + (5 * (this.density + 3)) / 4,
      r = 6.2831852 * i,
      o = 0.5 * r,
      n =
        this.density >= -3
          ? 4 + this.density * (1 / 3)
          : 3 + (this.density + 3) * (1 / 6);
    return Y`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${n}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${0.8 * n}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${n}"></circle>
          </svg>
        </div>`;
  }
  update(t) {
    super.update(t),
      t.has("progress") &&
        (this.progress > 1 && (this.progress = 1),
        this.progress < 0 && (this.progress = 0));
  }
}
p([gt({ type: Boolean, reflect: !0 })], Ye.prototype, "indeterminate", void 0),
  p([gt({ type: Number, reflect: !0 })], Ye.prototype, "progress", void 0),
  p([gt({ type: Number, reflect: !0 })], Ye.prototype, "density", void 0),
  p([gt({ type: Boolean, reflect: !0 })], Ye.prototype, "closed", void 0),
  p(
    [Ve, gt({ type: String, attribute: "aria-label" })],
    Ye.prototype,
    "ariaLabel",
    void 0,
  );
const Xe = x`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;
class qe extends Ye {}
(qe.styles = [Xe]), customElements.define("ib-circular-progress", qe);
class Ke extends EventTarget {
  constructor(t, e) {
    super(),
      (this.device = t),
      (this.logger = e),
      (this.errorState = 0),
      (this.capabilities = 0);
  }
  get name() {
    return this.device.name;
  }
  async initialize() {
    this.logger.log("Trying to connect to Improv BLE service"),
      this.device.addEventListener("gattserverdisconnected", () => {
        this.currentState !== t.PROVISIONED &&
          this.dispatchEvent(new CustomEvent("disconnect"));
      }),
      await this.device.gatt.connect();
    const d = await this.device.gatt.getPrimaryService(e);
    (this._currentStateChar = await d.getCharacteristic(i)),
      (this._errorStateChar = await d.getCharacteristic(r)),
      (this._rpcCommandChar = await d.getCharacteristic(o)),
      (this._rpcResultChar = await d.getCharacteristic(n));
    try {
      const t = await d.getCharacteristic(a),
        e = await t.readValue();
      this.capabilities = e.getUint8(0);
    } catch (t) {
      console.warn(
        "Firmware not according to spec, missing capability support.",
      );
    }
    this._currentStateChar.addEventListener("characteristicvaluechanged", (t) =>
      this._handleImprovCurrentStateChange(t.target.value),
    ),
      await this._currentStateChar.startNotifications(),
      this._errorStateChar.addEventListener("characteristicvaluechanged", (t) =>
        this._handleImprovErrorStateChange(t.target.value),
      ),
      await this._errorStateChar.startNotifications(),
      this._rpcResultChar.addEventListener("characteristicvaluechanged", (t) =>
        this._handleImprovRPCResultChange(t.target.value),
      ),
      await this._rpcResultChar.startNotifications();
    const l = await this._currentStateChar.readValue(),
      c = await this._errorStateChar.readValue();
    this._handleImprovCurrentStateChange(l),
      this._handleImprovErrorStateChange(c);
  }
  close() {
    this.device.gatt.connected &&
      (this.logger.debug("Disconnecting gatt"), this.device.gatt.disconnect());
  }
  identify() {
    this.sendRPC(2, new Uint8Array());
  }
  async provision(e, i) {
    const r = new TextEncoder(),
      o = r.encode(e),
      n = r.encode(i),
      a = new Uint8Array([o.length, ...o, n.length, ...n]);
    try {
      const e = await this.sendRPCWithResponse(1, a);
      return (
        this.logger.debug("Provisioned! Disconnecting gatt"),
        (this.currentState = t.PROVISIONED),
        this.dispatchEvent(new CustomEvent("state-changed")),
        this.device.gatt.disconnect(),
        this.dispatchEvent(new CustomEvent("disconnect")),
        (this.nextUrl = e.values.length > 0 ? e.values[0] : void 0),
        this.nextUrl
      );
    } catch (t) {
      return;
    }
  }
  async sendRPCWithResponse(t, e) {
    if (this._rpcFeedback)
      throw new Error(
        "Only 1 RPC command that requires feedback can be active",
      );
    return await new Promise((i, r) => {
      (this._rpcFeedback = { command: t, resolve: i, reject: r }),
        this.sendRPC(t, e);
    });
  }
  sendRPC(t, e) {
    this.logger.debug("RPC COMMAND", t, e);
    const i = new Uint8Array([t, e.length, ...e, 0]);
    (i[i.length - 1] = i.reduce((t, e) => t + e, 0)),
      (this.RPCResult = void 0),
      this._rpcCommandChar.writeValueWithoutResponse(i);
  }
  _handleImprovCurrentStateChange(t) {
    const e = t.getUint8(0);
    this.logger.debug("improv current state", e),
      (this.currentState = e),
      this.dispatchEvent(new CustomEvent("state-changed"));
  }
  _handleImprovErrorStateChange(t) {
    const e = t.getUint8(0);
    this.logger.debug("improv error state", e),
      (this.errorState = e),
      0 !== e &&
        this._rpcFeedback &&
        (this._rpcFeedback.reject(e), (this._rpcFeedback = void 0));
  }
  _handleImprovRPCResultChange(t) {
    this.logger.debug("improv RPC result", t);
    const e = t.getUint8(0),
      i = { command: e, values: [] },
      r = t.getUint8(1),
      o = new TextDecoder();
    for (let e = 0; e < r; ) {
      const r = t.getUint8(2 + e),
        n = new Uint8Array(r),
        a = 2 + e + 1;
      for (let e = 0; e < r; e++) n[e] = t.getUint8(a + e);
      i.values.push(o.decode(n)), (e += r + 1);
    }
    (this.RPCResult = i),
      this._rpcFeedback &&
        (this._rpcFeedback.command !== e && this.logger.error("Received "),
        this._rpcFeedback.resolve(i),
        (this._rpcFeedback = void 0));
  }
}
let Ze = class extends mt {
  constructor() {
    super(...arguments),
      (this._state = "CONNECTING"),
      (this._improvErrorState = 0),
      (this._improvCapabilities = 0),
      (this._busy = !1);
  }
  get _client() {
    return (
      this.__client || (this.__client = new Ke(this.device, console)),
      this.__client
    );
  }
  render() {
    let e,
      i = "",
      r = !1;
    return (
      "CONNECTING" === this._state
        ? ((e = this._renderProgress("Connecting")), (r = !0))
        : "ERROR" === this._state
          ? (e = this._renderMessage(
              "⚠️",
              `An error occurred. ${this._error}`,
              !0,
            ))
          : this._improvCurrentState === t.AUTHORIZATION_REQUIRED
            ? (e = this._renderMessage(
                "👉",
                "Press the authorize button on the device",
                !1,
              ))
            : this._improvCurrentState === t.AUTHORIZED
              ? this._busy
                ? ((e = this._renderProgress("Provisioning")), (r = !0))
                : ((i = "Configure Wi-Fi"),
                  (e = this._renderImprovAuthorized()))
              : this._improvCurrentState === t.PROVISIONING
                ? ((e = this._renderProgress("Provisioning")), (r = !0))
                : (e =
                    this._improvCurrentState === t.PROVISIONED
                      ? this._renderImprovProvisioned()
                      : this._renderMessage(
                          "⚠️",
                          `Unexpected state: ${this._state} - ${this._improvCurrentState}`,
                          !0,
                        )),
      Y`
      <ib-dialog
        open
        .heading=${i}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${r}
        >${e}</ib-dialog
      >
    `
    );
  }
  _renderProgress(t) {
    return Y`
      <div class="center">
        <div>
          <ib-circular-progress
            active
            indeterminate
            density="8"
          ></ib-circular-progress>
        </div>
        ${t}
      </div>
    `;
  }
  _renderMessage(t, e, i) {
    return Y`
      <div class="center">
        <div class="icon">${t}</div>
        ${e}
      </div>
      ${
        i
          ? Y`
            <ib-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            ></ib-button>
          `
          : ""
      }
    `;
  }
  _renderImprovAuthorized() {
    let t;
    switch (this._improvErrorState) {
      case 3:
        t = "Unable to connect";
        break;
      case 0:
        break;
      default:
        t = `Unknown error (${this._improvErrorState})`;
    }
    return Y`
      <div>
        Enter the credentials of the Wi-Fi network that you want
        ${this._client.name || "your device"} to connect to.
        ${
          d(this._improvCapabilities)
            ? Y`
              <button class="link" @click=${this._identify}>
                Identify the device.
              </button>
            `
            : ""
        }
      </div>
      ${t ? Y`<p class="error">${t}</p>` : ""}
      <ib-textfield label="Network Name" name="ssid"></ib-textfield>
      <ib-textfield
        label="Password"
        name="password"
        type="password"
      ></ib-textfield>
      <ib-button
        slot="primaryAction"
        label="Connect"
        @click=${this._provision}
      ></ib-button>
      <ib-button
        slot="secondaryAction"
        dialogAction="close"
        label="Cancel"
      ></ib-button>
    `;
  }
  _renderImprovProvisioned() {
    return Y`
      <div class="center">
        <div class="icon">${"🎉"}</div>
        Provisioned!
      </div>
      ${
        void 0 === this._client.nextUrl
          ? Y`
            <ib-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            ></ib-button>
          `
          : Y`
            <a
              href=${this._client.nextUrl}
              slot="primaryAction"
              class="has-button"
              dialogAction="ok"
            >
              <ib-button label="Next"></ib-button>
            </a>
          `
      }
    `;
  }
  firstUpdated(e) {
    super.firstUpdated(e),
      this._client.addEventListener("state-changed", () => {
        (this._state = "IMPROV-STATE"),
          (this._busy = !1),
          (this._improvCurrentState = this._client.currentState);
      }),
      this._client.addEventListener("error-changed", () => {
        (this._improvErrorState = this._client.errorState),
          0 !== this._improvErrorState && (this._busy = !1);
      }),
      this._client.addEventListener("disconnect", () => {
        ("IMPROV-STATE" === this._state &&
          this._improvCurrentState === t.PROVISIONED) ||
          ((this._state = "ERROR"), (this._error = "Device disconnected."));
      }),
      this._connect();
  }
  async _connect() {
    try {
      await this._client.initialize(),
        (this._improvCurrentState = this._client.currentState),
        (this._improvErrorState = this._client.errorState),
        (this._improvCapabilities = this._client.capabilities),
        (this._state = "IMPROV-STATE");
    } catch (t) {
      (this._state = "ERROR"), (this._error = t.message);
    }
  }
  async _provision() {
    this._busy = !0;
    try {
      await this._client.provision(
        this._inputSSID.value,
        this._inputPassword.value,
      );
    } catch (t) {
    } finally {
      this._busy = !1;
    }
  }
  _identify() {
    this._client.identify();
  }
  updated(e) {
    if (
      (super.updated(e),
      e.has("_state") ||
        ("IMPROV-STATE" === this._state && e.has("_improvCurrentState")))
    ) {
      const e =
        "IMPROV-STATE" === this._state
          ? t[this._improvCurrentState] || "UNKNOWN"
          : this._state;
      this.stateUpdateCallback({ state: e });
    }
    if (
      (e.has("_improvCurrentState") || e.has("_state")) &&
      "IMPROV-STATE" === this._state &&
      this._improvCurrentState === t.AUTHORIZED
    ) {
      const t = this._inputSSID;
      t.updateComplete.then(() => t.focus());
    }
  }
  _handleClose() {
    this._client.close(), this.parentNode.removeChild(this);
  }
};
(Ze.styles = x`
    :host {
      --mdc-dialog-max-width: 390px;
      --mdc-theme-primary: var(--improv-primary-color, #03a9f4);
      --mdc-theme-on-primary: var(--improv-on-primary-color, #fff);
    }
    ib-textfield {
      display: block;
    }
    ib-textfield {
      margin-top: 16px;
    }
    .center {
      text-align: center;
    }
    ib-circular-progress {
      margin-bottom: 16px;
    }
    a.has-button {
      text-decoration: none;
    }
    .icon {
      font-size: 50px;
      line-height: 80px;
      color: black;
    }
    .error {
      color: #db4437;
    }
    button.link {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      text-align: left;
      text-decoration: underline;
      cursor: pointer;
    }
  `),
  p([bt()], Ze.prototype, "_state", void 0),
  p([bt()], Ze.prototype, "_improvCurrentState", void 0),
  p([bt()], Ze.prototype, "_improvErrorState", void 0),
  p([bt()], Ze.prototype, "_improvCapabilities", void 0),
  p([bt()], Ze.prototype, "_busy", void 0),
  p([_t("ib-textfield[name=ssid]")], Ze.prototype, "_inputSSID", void 0),
  p(
    [_t("ib-textfield[name=password]")],
    Ze.prototype,
    "_inputPassword",
    void 0,
  ),
  (Ze = p([ht("improv-wifi-provision-dialog")], Ze));
